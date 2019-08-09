import { CostandUsageReportServiceClient } from "../../CostandUsageReportServiceClient";
import { DescribeReportDefinitionsCommand } from "../../commands/DescribeReportDefinitionsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-cost-and-usage-report-service-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-east-1";
  it("DescribeReportDefinitions should succeed when given correct input", done => {
    const client = new CostandUsageReportServiceClient({
      region: defaultRegion,
      credentials
    });

    const describeReportDefinitions = new DescribeReportDefinitionsCommand({});

    client
      .send(describeReportDefinitions)
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
