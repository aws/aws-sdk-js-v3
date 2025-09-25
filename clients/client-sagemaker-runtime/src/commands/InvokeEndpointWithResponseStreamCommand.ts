// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvokeEndpointWithResponseStreamInput, InvokeEndpointWithResponseStreamOutput } from "../models/models_0";
import { SageMakerRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerRuntimeClient";
import { InvokeEndpointWithResponseStream } from "../schemas/schemas_1_Endpoint";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type InvokeEndpointWithResponseStreamCommandInputType = Omit<InvokeEndpointWithResponseStreamInput, "Body"> & {
  Body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeEndpointWithResponseStreamCommand}.
 */
export interface InvokeEndpointWithResponseStreamCommandInput
  extends InvokeEndpointWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeEndpointWithResponseStreamCommand}.
 */
export interface InvokeEndpointWithResponseStreamCommandOutput
  extends InvokeEndpointWithResponseStreamOutput,
    __MetadataBearer {}

/**
 * <p>Invokes a model at the specified endpoint to return the inference response as a
 *             stream. The inference stream provides the response payload incrementally as a series of
 *             parts. Before you can get an inference stream, you must have access to a model that's
 *             deployed using Amazon SageMaker AI hosting services, and the container for that model
 *             must support inference streaming.</p>
 *          <p>For more information that can help you use this API, see the following sections in the
 *                     <i>Amazon SageMaker AI Developer Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>For information about how to add streaming support to a model, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-code-how-containe-serves-requests">How Containers Serve Requests</a>.</p>
 *             </li>
 *             <li>
 *                <p>For information about how to process the streaming response, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-test-endpoints.html">Invoke real-time endpoints</a>.</p>
 *             </li>
 *          </ul>
 *          <p>Before you can use this operation, your IAM permissions must allow the
 *                 <code>sagemaker:InvokeEndpoint</code> action. For more information about Amazon SageMaker AI actions for IAM policies, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html">Actions, resources, and condition keys for Amazon SageMaker AI</a> in the <i>IAM Service Authorization
 *                 Reference</i>.</p>
 *          <p>Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add
 *     additional headers. You should not rely on the behavior of headers outside those
 *     enumerated in the request syntax. </p>
 *          <p>Calls to <code>InvokeEndpointWithResponseStream</code> are authenticated by using
 *                 Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the
 *                     <i>Amazon S3 API Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeClient, InvokeEndpointWithResponseStreamCommand } from "@aws-sdk/client-sagemaker-runtime"; // ES Modules import
 * // const { SageMakerRuntimeClient, InvokeEndpointWithResponseStreamCommand } = require("@aws-sdk/client-sagemaker-runtime"); // CommonJS import
 * // import type { SageMakerRuntimeClientConfig } from "@aws-sdk/client-sagemaker-runtime";
 * const config = {}; // type is SageMakerRuntimeClientConfig
 * const client = new SageMakerRuntimeClient(config);
 * const input = { // InvokeEndpointWithResponseStreamInput
 *   EndpointName: "STRING_VALUE", // required
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   ContentType: "STRING_VALUE",
 *   Accept: "STRING_VALUE",
 *   CustomAttributes: "STRING_VALUE",
 *   TargetVariant: "STRING_VALUE",
 *   TargetContainerHostname: "STRING_VALUE",
 *   InferenceId: "STRING_VALUE",
 *   InferenceComponentName: "STRING_VALUE",
 *   SessionId: "STRING_VALUE",
 * };
 * const command = new InvokeEndpointWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // { // InvokeEndpointWithResponseStreamOutput
 * //   Body: { // ResponseStream Union: only one key present
 * //     PayloadPart: { // PayloadPart
 * //       Bytes: new Uint8Array(),
 * //     },
 * //     ModelStreamError: { // ModelStreamError
 * //       Message: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //     InternalStreamFailure: { // InternalStreamFailure
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   ContentType: "STRING_VALUE",
 * //   InvokedProductionVariant: "STRING_VALUE",
 * //   CustomAttributes: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeEndpointWithResponseStreamCommandInput - {@link InvokeEndpointWithResponseStreamCommandInput}
 * @returns {@link InvokeEndpointWithResponseStreamCommandOutput}
 * @see {@link InvokeEndpointWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointWithResponseStreamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeClientResolvedConfig | config} for SageMakerRuntimeClient's `config` shape.
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p> An internal failure occurred. </p>
 *
 * @throws {@link InternalStreamFailure} (server fault)
 *  <p>The stream processing failed because of an unknown error, exception or failure. Try your request again.</p>
 *
 * @throws {@link ModelError} (client fault)
 *  <p> Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *         </p>
 *
 * @throws {@link ModelStreamError} (client fault)
 *  <p> An error occurred while streaming the response body. This error can have the
 *     following error codes:</p>
 *          <dl>
 *             <dt>ModelInvocationTimeExceeded</dt>
 *             <dd>
 *                <p>The model failed to finish sending the response within the timeout period allowed by Amazon SageMaker AI.</p>
 *             </dd>
 *             <dt>StreamBroken</dt>
 *             <dd>
 *                <p>The Transmission Control Protocol (TCP) connection between the client and
 *                     the model was reset or closed.</p>
 *             </dd>
 *          </dl>
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *  <p> The service is unavailable. Try your call again. </p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p> Inspect your request and try again. </p>
 *
 * @throws {@link SageMakerRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerRuntime service.</p>
 *
 *
 * @public
 */
export class InvokeEndpointWithResponseStreamCommand extends $Command
  .classBuilder<
    InvokeEndpointWithResponseStreamCommandInput,
    InvokeEndpointWithResponseStreamCommandOutput,
    SageMakerRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSageMakerRuntime", "InvokeEndpointWithResponseStream", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("SageMakerRuntimeClient", "InvokeEndpointWithResponseStreamCommand")
  .sc(InvokeEndpointWithResponseStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeEndpointWithResponseStreamInput;
      output: InvokeEndpointWithResponseStreamOutput;
    };
    sdk: {
      input: InvokeEndpointWithResponseStreamCommandInput;
      output: InvokeEndpointWithResponseStreamCommandOutput;
    };
  };
}
