import { Endpoint } from "@aws-sdk/types";

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
      it(`returns input.tls when it's ${tls}`, () => {
        expect(resolveEndpointsConfig({ ...input, tls }).tls).toStrictEqual(tls);
      });
    });

    it("returns true is input.tls is undefined", () => {
      expect(resolveEndpointsConfig({ ...input }).tls).toStrictEqual(true);
    });
  });

  describe("endpoint", () => {
    describe("if defined in input.endpoint", () => {
      const mockEndpoint: Endpoint = { protocol: "protocol", hostname: "hostname", path: "path" };

      it("returns output of urlParser if endpoint is of type string", async () => {
        const endpoint = "endpoint";
        urlParser.mockReturnValueOnce(mockEndpoint);
        const endpointOutput = await resolveEndpointsConfig({ ...input, endpoint }).endpoint();
        expect(endpointOutput).toStrictEqual(mockEndpoint);
        expect(urlParser).toHaveBeenCalledTimes(1);
        expect(urlParser).toHaveBeenCalledWith(endpoint);
      });

      it("returns promisified endpoint if it's of type object", async () => {
        const endpoint = mockEndpoint;
        const endpointOutput = await resolveEndpointsConfig({ ...input, endpoint }).endpoint();
        expect(endpointOutput).toStrictEqual(endpoint);
        expect(urlParser).not.toHaveBeenCalled();
      });

      it("returns endpoint if it's already Provider<Endpoint>", async () => {
        const endpoint = () => Promise.resolve(mockEndpoint);
        const endpointOutput = await resolveEndpointsConfig({ ...input, endpoint }).endpoint();
        expect(endpointOutput).toStrictEqual(mockEndpoint);
        expect(urlParser).not.toHaveBeenCalled();
      });
    });

    describe("if not defined in input.endpoint", () => {
      const mockRegion = "mockRegion";
      const mockHostname = "mockHostname";
      const mockEndpoint: Endpoint = { protocol: "protocol", hostname: "hostname", path: "path" };

      describe("returns endpoint", () => {
        beforeEach(() => {
          region.mockResolvedValueOnce(mockRegion);
          regionInfoProvider.mockResolvedValueOnce({ hostname: mockHostname });
          urlParser.mockReturnValueOnce(mockEndpoint);
        });

        it("passes http in urlParser if tls is false", async () => {
          const endpoint = await resolveEndpointsConfig({ ...input, tls: false }).endpoint();
          expect(endpoint).toStrictEqual(mockEndpoint);
          expect(urlParser).toHaveBeenCalledTimes(1);
          expect(urlParser).toHaveBeenCalledWith(`http://${mockHostname}`);
        });

        [true, undefined].forEach((tls) => {
          it(`passes https in urlParser if tls is ${tls}`, async () => {
            const endpoint = await resolveEndpointsConfig({ ...input, tls }).endpoint();
            expect(endpoint).toStrictEqual(mockEndpoint);
            expect(urlParser).toHaveBeenCalledTimes(1);
            expect(urlParser).toHaveBeenCalledWith(`https://${mockHostname}`);
          });
        });
      });

      describe("throws error", () => {
        const error = new Error("error");

        it("if region throws error", () => {
          region.mockRejectedValueOnce(error);
          return expect(resolveEndpointsConfig(input).endpoint()).rejects.toStrictEqual(error);
        });

        describe("if regionInfoProvider", () => {
          beforeEach(() => {
            region.mockResolvedValueOnce(mockRegion);
          });

          it("throws error", () => {
            regionInfoProvider.mockRejectedValueOnce(error);
            return expect(resolveEndpointsConfig(input).endpoint()).rejects.toStrictEqual(error);
          });

          it("returns undefined", () => {
            regionInfoProvider.mockResolvedValueOnce(undefined);
            return expect(resolveEndpointsConfig(input).endpoint()).rejects.toStrictEqual(
              new Error("Cannot resolve hostname from client config")
            );
          });
        });
      });
    });
  });
});
