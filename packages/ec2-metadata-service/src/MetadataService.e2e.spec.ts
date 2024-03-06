import { MetadataService } from "./MetadataService";

// sync check if the ec2 instance exists
// mark this as skip
describe("MetadataService", () => {
  let metadataServiceAvailable = false;
  let metadataService: MetadataService;

  beforeEach(async () => {
    metadataService = new MetadataService();
    try {
      await metadataService.request("latest/meta-data/hostname", {});
      metadataServiceAvailable = true;
    } catch (err) {
      metadataServiceAvailable = false;
      console.log(err);
    }
  });

  // check dynamically skipping tests
  describe("Test", () => {
    const scenario = () => {
      return metadataServiceAvailable ? it : it.skip;
    };

    scenario()("should successfully make a request and return response body", async () => {
      const path = "latest/meta-data/hostname";
      const response = await metadataService.request(path, {});
      expect(response).toEqual({});
    });

    scenario()("should successfully make a request to fetch the metadata token and return it", async () => {
      const token = await metadataService.fetchMetadataToken();
      expect(token).toEqual({});
    });
  });
});
