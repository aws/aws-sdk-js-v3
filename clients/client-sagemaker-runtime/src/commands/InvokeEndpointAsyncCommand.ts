// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeEndpointAsyncInput, InvokeEndpointAsyncOutput } from "../models/models_0";
import { InvokeEndpointAsync$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type InvokeEndpointAsyncCommandInputType = Omit<InvokeEndpointAsyncInput, "Body"> & {
  Body?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeEndpointAsyncCommand}.
 */
export interface InvokeEndpointAsyncCommandInput extends InvokeEndpointAsyncCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeEndpointAsyncCommand}.
 */
export interface InvokeEndpointAsyncCommandOutput extends InvokeEndpointAsyncOutput, __MetadataBearer {}

/**
 * After you deploy a model into production using Amazon SageMaker AI hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint in an asynchronous manner.
 *
 * Inference requests sent to this API are enqueued for asynchronous processing. The processing of the inference request may or may not complete before you receive a response from this API. The response from this API will not contain the result of the inference request but contain information about where you can locate it.
 *
 * Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.
 *
 * Calls to `InvokeEndpointAsync` are authenticated by using Amazon Web Services Signature Version 4. For information, see [Authenticating Requests (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) in the *Amazon S3 API Reference*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeClient, InvokeEndpointAsyncCommand } from "@aws-sdk/client-sagemaker-runtime"; // ES Modules import
 * // const { SageMakerRuntimeClient, InvokeEndpointAsyncCommand } = require("@aws-sdk/client-sagemaker-runtime"); // CommonJS import
 * // import type { SageMakerRuntimeClientConfig } from "@aws-sdk/client-sagemaker-runtime";
 * const config = {}; // type is SageMakerRuntimeClientConfig
 * const client = new SageMakerRuntimeClient(config);
 * const input = { // InvokeEndpointAsyncInput
 *   EndpointName: "STRING_VALUE", // required
 *   ContentType: "STRING_VALUE",
 *   Accept: "STRING_VALUE",
 *   CustomAttributes: "STRING_VALUE",
 *   InferenceId: "STRING_VALUE",
 *   InputLocation: "STRING_VALUE",
 *   S3OutputPathExtension: "STRING_VALUE",
 *   Filename: "STRING_VALUE",
 *   RequestTTLSeconds: Number("int"),
 *   InvocationTimeoutSeconds: Number("int"),
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new InvokeEndpointAsyncCommand(input);
 * const response = await client.send(command);
 * // { // InvokeEndpointAsyncOutput
 * //   InferenceId: "STRING_VALUE",
 * //   OutputLocation: "STRING_VALUE",
 * //   FailureLocation: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeEndpointAsyncCommandInput - {@link InvokeEndpointAsyncCommandInput}
 * @returns {@link InvokeEndpointAsyncCommandOutput}
 * @see {@link InvokeEndpointAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointAsyncCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeClientResolvedConfig | config} for SageMakerRuntimeClient's `config` shape.
 *
 * @throws {@link InternalFailure} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *
 * The service is unavailable. Try your call again.
 *
 * @throws {@link ValidationError} (client fault)
 *
 * Inspect your request and try again.
 *
 * @throws {@link SageMakerRuntimeServiceException}
 *
 * Base exception class for all service exceptions from SageMakerRuntime service.
 *
 * @public
 */
export class InvokeEndpointAsyncCommand extends command<InvokeEndpointAsyncCommandInput, InvokeEndpointAsyncCommandOutput>(
  _ep0,
  _mw0,
  "InvokeEndpointAsync",
  InvokeEndpointAsync$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeEndpointAsyncInput;
      output: InvokeEndpointAsyncOutput;
    };
    sdk: {
      input: InvokeEndpointAsyncCommandInput;
      output: InvokeEndpointAsyncCommandOutput;
    };
  };
}
