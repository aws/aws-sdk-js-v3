import { resolveEndpointsConfig } from "./EndpointsConfig";

describe("EndpointsConfig", () => {
  const region = jest.fn();
  const urlParser = jest.fn();
  const regionInfoProvider = jest.fn();

  const input = { region, urlParser, regionInfoProvider };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("tls", () => {
    [true, false].forEach((tls) => {
      it(`assigns input.tls when it's ${tls}`, () => {
        expect(resolveEndpointsConfig({ ...input, tls }).tls).toStrictEqual(tls);
      });
    });

    it("assigns true is input.tls is undefined", () => {
      expect(resolveEndpointsConfig({ ...input }).tls).toStrictEqual(true);
    });
  });
});
