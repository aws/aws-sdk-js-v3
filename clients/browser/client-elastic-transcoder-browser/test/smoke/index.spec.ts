import { ElasticTranscoderClient } from "../../ElasticTranscoderClient";
import { ListPresetsCommand } from "../../commands/ListPresetsCommand";
import { ReadJobCommand } from "../../commands/ReadJobCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-elastic-transcoder-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListPresets should succeed when given correct input", done => {
    const client = new ElasticTranscoderClient({
      region: defaultRegion,
      credentials
    });

    const listPresets = new ListPresetsCommand({});

    client
      .send(listPresets)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("ReadJob should fail when given bad input", done => {
    const client = new ElasticTranscoderClient({
      region: defaultRegion,
      credentials
    });

    const readJob = new ReadJobCommand({
      Id: "fake_job"
    });

    client
      .send(readJob)
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
