// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeEndpointWithResponseStreamInput, InvokeEndpointWithResponseStreamOutput } from "../models/models_0";
import { InvokeEndpointWithResponseStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface InvokeEndpointWithResponseStreamCommandInput extends InvokeEndpointWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeEndpointWithResponseStreamCommand}.
 */
export interface InvokeEndpointWithResponseStreamCommandOutput extends InvokeEndpointWithResponseStreamOutput, __MetadataBearer {}

/**
 * Invokes a model at the specified endpoint to return the inference response as a stream. The inference stream provides the response payload incrementally as a series of parts. Before you can get an inference stream, you must have access to a model that's deployed using Amazon SageMaker AI hosting services, and the container for that model must support inference streaming.
 *
 * For more information that can help you use this API, see the following sections in the *Amazon SageMaker AI Developer Guide*:
 *
 * - For information about how to add streaming support to a model, see [How Containers Serve Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-code-how-containe-serves-requests).
 * - For information about how to process the streaming response, see [Invoke real-time endpoints](https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-test-endpoints.html).
 *
 * Before you can use this operation, your IAM permissions must allow the `sagemaker:InvokeEndpoint` action. For more information about Amazon SageMaker AI actions for IAM policies, see [Actions, resources, and condition keys for Amazon SageMaker AI](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html) in the *IAM Service Authorization Reference*.
 *
 * Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.
 *
 * Calls to `InvokeEndpointWithResponseStream` are authenticated by using Amazon Web Services Signature Version 4. For information, see [Authenticating Requests (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) in the *Amazon S3 API Reference*.
 *
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
 *   PrefixAwareId: "STRING_VALUE",
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
 *
 * An internal failure occurred.
 *
 * @throws {@link InternalStreamFailure} (server fault)
 *
 * The stream processing failed because of an unknown error, exception or failure. Try your request again.
 *
 * @throws {@link ModelError} (client fault)
 *
 * Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *
 * @throws {@link ModelStreamError} (client fault)
 *
 * An error occurred while streaming the response body. This error can have the following error codes:
 *
 * - **ModelInvocationTimeExceeded**
 *
 *   The model failed to finish sending the response within the timeout period allowed by Amazon SageMaker AI.
 *
 * - **StreamBroken**
 *
 *   The Transmission Control Protocol (TCP) connection between the client and the model was reset or closed.
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
export class InvokeEndpointWithResponseStreamCommand extends command<InvokeEndpointWithResponseStreamCommandInput, InvokeEndpointWithResponseStreamCommandOutput>(
  _ep0,
  _mw0,
  "InvokeEndpointWithResponseStream",
  InvokeEndpointWithResponseStream$
) {
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
