import { SageMakerRuntimeClient } from "./SageMakerRuntimeClient";
import { InternalFailure } from "./types/InternalFailure";
import { InvokeEndpointInput } from "./types/InvokeEndpointInput";
import { InvokeEndpointOutput } from "./types/InvokeEndpointOutput";
import { ModelError } from "./types/ModelError";
import { ServiceUnavailable } from "./types/ServiceUnavailable";
import { ValidationError } from "./types/ValidationError";
import { InvokeEndpointCommand } from "./commands/InvokeEndpointCommand";

export class SageMakerRuntime extends SageMakerRuntimeClient {
  /**
   * <p>After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint. </p> <p>For an overview of Amazon SageMaker, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p> <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. </p> <p>Cals to <code>InvokeEndpoint</code> are authenticated by using AWS Signature Version 4. For information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (AWS Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p> <note> <p>Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker determines the account ID from the authentication token that is supplied by the caller.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailure} <p> An internal failure occurred. </p>
   *   - {ServiceUnavailable} <p> The service is unavailable. Try your call again. </p>
   *   - {ValidationError} <p> Inspect your request and try again. </p>
   *   - {ModelError} <p> Model (owned by the customer in the container) returned an error 500. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public invokeEndpoint(
    args: InvokeEndpointInput
  ): Promise<InvokeEndpointOutput>;
  public invokeEndpoint(
    args: InvokeEndpointInput,
    cb: (err: any, data?: InvokeEndpointOutput) => void
  ): void;
  public invokeEndpoint(
    args: InvokeEndpointInput,
    cb?: (err: any, data?: InvokeEndpointOutput) => void
  ): Promise<InvokeEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InvokeEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
