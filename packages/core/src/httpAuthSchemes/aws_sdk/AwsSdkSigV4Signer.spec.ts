import { AwsSdkSigV4Signer } from "./AwsSdkSigV4Signer";

describe(AwsSdkSigV4Signer.name, () => {
  it("sets clockSkewCorrected metadata in error handler if systemClockOffset was updated", async () => {
    const signer = new AwsSdkSigV4Signer();

    let error: Error | any;
    try {
      signer.errorHandler({
        config: {
          systemClockOffset: 30 * 60 * 1000,
        },
      })(
        Object.assign(new Error("uh oh"), {
          $metadata: {},
          $response: {
            headers: {
              date: new Date().toISOString(),
            },
            statusCode: 500,
          },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBe(true);
  });
});
