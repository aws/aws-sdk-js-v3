import { SSMClient } from "../../SSMClient";
import { ListDocumentsCommand } from "../../commands/ListDocumentsCommand";
import { GetDocumentCommand } from "../../commands/GetDocumentCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-ssm Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListDocuments should succeed when given correct input", done => {
    const client = new SSMClient({
      region: defaultRegion,
      credentials
    });

    const listDocuments = new ListDocumentsCommand({});

    client
      .send(listDocuments)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetDocument should fail when given bad input", done => {
    const client = new SSMClient({
      region: defaultRegion,
      credentials
    });

    const getDocument = new GetDocumentCommand({
      Name: "'fake-name'"
    });

    client
      .send(getDocument)
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
