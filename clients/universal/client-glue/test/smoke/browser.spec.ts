import { GlueClient } from "../../GlueClient";
import { GetCatalogImportStatusCommand } from "../../commands/GetCatalogImportStatusCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-glue Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("GetCatalogImportStatus should succeed when given correct input", done => {
    const client = new GlueClient({
      region: defaultRegion,
      credentials
    });

    const getCatalogImportStatus = new GetCatalogImportStatusCommand({});

    client
      .send(getCatalogImportStatus)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
});
