import { LambdaClient } from "../../LambdaClient";
import { ListFunctionsCommand } from "../../commands/ListFunctionsCommand";
import { InvokeCommand } from "../../commands/InvokeCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-lambda-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListFunctions should succeed when given correct input", done => {
    const client = new LambdaClient({
      region: defaultRegion,
      credentials
    });

    const listFunctions = new ListFunctionsCommand({} as any);

    client
      .send(listFunctions)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("Invoke should fail when given bad input", done => {
    const client = new LambdaClient({
      region: defaultRegion,
      credentials
    });

    const invoke = new InvokeCommand({
      FunctionName: "bogus-function"
    } as any);

    client
      .send(invoke)
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
