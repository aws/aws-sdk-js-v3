import { MetadataService } from "./MetadataService";

describe("MetadataService", () => {
  let metadataService: MetadataService;

  beforeEach(() => {
    metadataService = new MetadataService();
  });

  it("should successfully make a request and return response body", async () => {
    const path = "latest/meta-data/hostname";
    const response = await metadataService.request(path, {});
    expect(response).toEqual({});
  });

  it("should successfully make a request to fetch the metadata token and return it", async () => {
    const response = await metadataService.fetchMetadataToken();
    expect(response).toEqual({});
  });
});
