import { ServiceCatalogClient } from "../../ServiceCatalogClient";
import { ListAcceptedPortfolioSharesCommand } from "../../commands/ListAcceptedPortfolioSharesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-service-catalog Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListAcceptedPortfolioShares should succeed when given correct input", done => {
    const client = new ServiceCatalogClient({
      region: defaultRegion,
      credentials
    });

    const listAcceptedPortfolioShares = new ListAcceptedPortfolioSharesCommand(
      {}
    );

    client
      .send(listAcceptedPortfolioShares)
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
