import { getRealRegion } from "./getRealRegion";
import { isFipsRegion } from "./isFipsRegion";

jest.mock("./isFipsRegion");

describe(getRealRegion.name, () => {
  beforeEach(() => {
    (isFipsRegion as jest.Mock).mockReturnValue(true);
  });

  afterEach(() => {
    expect(isFipsRegion).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  it("returns provided region if it's not FIPS", () => {
    const mockRegion = "mockRegion";
    (isFipsRegion as jest.Mock).mockReturnValue(false);
    expect(getRealRegion(mockRegion)).toStrictEqual(mockRegion);
  });

  describe("FIPS regions", () => {
    it.each(["fips-aws-global", "aws-fips"])(`returns "us-east-1" for "%s"`, (input) => {
      expect(getRealRegion(input)).toStrictEqual("us-east-1");
    });

    it.each([
      ["us-west-1", "us-west-1-fips"],
      ["us-west-1", "fips-us-west-1"],
      ["us-west-1", "fips-dkr-us-west-1"],
      ["us-west-1", "fips-prod-us-west-1"],
    ])(`returns "%s" for "%s"`, (output, input) => {
      expect(getRealRegion(input)).toStrictEqual(output);
    });
  });
});
