import { RekognitionClient } from "../../RekognitionClient";
import { ListCollectionsCommand } from "../../commands/ListCollectionsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-rekognition-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListCollections should succeed when given correct input", done => {
    const client = new RekognitionClient({
      region: defaultRegion,
      credentials
    });

    const listCollections = new ListCollectionsCommand({} as any);

    client
      .send(listCollections)
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
