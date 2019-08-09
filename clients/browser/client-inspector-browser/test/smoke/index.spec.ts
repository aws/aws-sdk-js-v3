import { InspectorClient } from "../../InspectorClient";
import { ListAssessmentTemplatesCommand } from "../../commands/ListAssessmentTemplatesCommand";
import { ListTagsForResourceCommand } from "../../commands/ListTagsForResourceCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-inspector-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListAssessmentTemplates should succeed when given correct input", done => {
    const client = new InspectorClient({
      region: defaultRegion,
      credentials
    });

    const listAssessmentTemplates = new ListAssessmentTemplatesCommand({});

    client
      .send(listAssessmentTemplates)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("ListTagsForResource should fail when given bad input", done => {
    const client = new InspectorClient({
      region: defaultRegion,
      credentials
    });

    const listTagsForResource = new ListTagsForResourceCommand({
      resourceArn: "fake-arn"
    });

    client
      .send(listTagsForResource)
      .then(result => {
        expect(result).toBeUndefined();
        done();
      })
      .catch(err => {
        expect(err).toBeDefined();
        done();
      });
  });
});
