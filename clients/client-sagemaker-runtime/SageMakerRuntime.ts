import { SageMakerRuntimeClient } from "./SageMakerRuntimeClient";
import {
  InvokeEndpointCommand,
  InvokeEndpointCommandInput,
  InvokeEndpointCommandOutput,
} from "./commands/InvokeEndpointCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p> The Amazon SageMaker runtime API. </p>
 */
export class SageMakerRuntime extends SageMakerRuntimeClient {
  /**
   * <p>After you deploy a model into production using Amazon SageMaker hosting services, your
   *             client applications use this API to get inferences from the model hosted at the
   *             specified endpoint. </p>
   *         <p>For an overview of Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
   *         <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add
   *             additional headers. You should not rely on the behavior of headers outside those
   *             enumerated in the request syntax. </p>
   *         <p>Calls to <code>InvokeEndpoint</code> are authenticated by using AWS Signature Version
   *             4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating
   *                 Requests (AWS Signature Version 4)</a> in the <i>Amazon S3 API
   *                 Reference</i>.</p>
   *         <p>A customer's model containers must respond to requests within 60 seconds. The model
   *             itself can have a maximum processing time of 60 seconds before responding to
   *             invocations. If your model is going to take 50-60 seconds of processing time, the SDK
   *             socket timeout should be set to be 70 seconds.</p>
   *         <note>
   *             <p>Endpoints are scoped to an individual account, and are not public. The URL does
   *                 not contain the account ID, but Amazon SageMaker determines the account ID from the
   *                 authentication token that is supplied by the caller.</p>
   *         </note>
   */
  public invokeEndpoint(
    args: InvokeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeEndpointCommandOutput>;
  public invokeEndpoint(
    args: InvokeEndpointCommandInput,
    cb: (err: any, data?: InvokeEndpointCommandOutput) => void
  ): void;
  public invokeEndpoint(
    args: InvokeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeEndpointCommandOutput) => void
  ): void;
  public invokeEndpoint(
    args: InvokeEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InvokeEndpointCommandOutput) => void),
    cb?: (err: any, data?: InvokeEndpointCommandOutput) => void
  ): Promise<InvokeEndpointCommandOutput> | void {
    const command = new InvokeEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
