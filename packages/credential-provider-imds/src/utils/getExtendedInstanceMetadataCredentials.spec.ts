import { getExtendedInstanceMetadataCredentials } from "./getExtendedInstanceMetadataCredentials";

describe("getExtendedInstanceMetadataCredentials()", () => {
  let nowMock: jest.SpyInstance;
  const staticSecret = {
    accessKeyId: "key",
    secretAccessKey: "secret",
  };

  beforeEach(() => {
    jest.spyOn(global.console, "warn").mockImplementation(() => {});
    jest.spyOn(global.Math, "random");
    nowMock = jest.spyOn(Date, "now").mockReturnValueOnce(new Date("2022-02-22T00:00:00Z").getTime());
  });

  afterEach(() => {
    nowMock.mockRestore();
  });

  it("should extend the expiration random time(~15 mins) from now", () => {
    const anyDate: Date = "any date" as unknown as Date;
    (Math.random as jest.Mock).mockReturnValue(0.5);
    expect(getExtendedInstanceMetadataCredentials({ ...staticSecret, expiration: anyDate })).toEqual({
      ...staticSecret,
      originalExpiration: anyDate,
      expiration: new Date("2022-02-22T00:17:30Z"),
    });
    expect(Math.random).toBeCalledTimes(1);
  });

  it("should print warning message when extending the credentials", () => {
    const anyDate: Date = "any date" as unknown as Date;
    getExtendedInstanceMetadataCredentials({ ...staticSecret, expiration: anyDate });
    // TODO: fill the doc link
    expect(console.warn).toBeCalledWith(expect.stringContaining("Attempting credential expiration extension"));
  });
});
