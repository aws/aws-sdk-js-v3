// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  InvokeEndpointWithBidirectionalStreamInput,
  InvokeEndpointWithBidirectionalStreamOutput,
} from "../models/models_0";
import { InvokeEndpointWithBidirectionalStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InvokeEndpointWithBidirectionalStreamCommand}.
 */
export interface InvokeEndpointWithBidirectionalStreamCommandInput extends InvokeEndpointWithBidirectionalStreamInput {}
/**
 * @public
 *
 * The output of {@link InvokeEndpointWithBidirectionalStreamCommand}.
 */
export interface InvokeEndpointWithBidirectionalStreamCommandOutput extends InvokeEndpointWithBidirectionalStreamOutput, __MetadataBearer {}

/**
 * Invokes a model endpoint with bidirectional streaming capabilities. This operation establishes a persistent connection that allows you to send multiple requests and receive streaming responses from the model in real-time.
 *
 * Bidirectional streaming is useful for interactive applications such as chatbots, real-time translation, or any scenario where you need to maintain a conversation-like interaction with the model. The connection remains open, allowing you to send additional input and receive responses without establishing a new connection for each request.
 *
 * For an overview of Amazon SageMaker AI, see [How It Works](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html).
 *
 * Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.
 *
 * Calls to `InvokeEndpointWithBidirectionalStream` are authenticated by using Amazon Web Services Signature Version 4. For information, see [Authenticating Requests (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) in the *Amazon S3 API Reference*.
 *
 * The bidirectional stream maintains the connection until either the client closes it or the model indicates completion. Each request and response in the stream is sent as an event with optional headers for data type and completion state.
 *
 * > **Note:** Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker AI determines the account ID from the authentication token that is supplied by the caller.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeHTTP2Client, InvokeEndpointWithBidirectionalStreamCommand } from "@aws-sdk/client-sagemaker-runtime-http2"; // ES Modules import
 * // const { SageMakerRuntimeHTTP2Client, InvokeEndpointWithBidirectionalStreamCommand } = require("@aws-sdk/client-sagemaker-runtime-http2"); // CommonJS import
 * // import type { SageMakerRuntimeHTTP2ClientConfig } from "@aws-sdk/client-sagemaker-runtime-http2";
 * const config = {}; // type is SageMakerRuntimeHTTP2ClientConfig
 * const client = new SageMakerRuntimeHTTP2Client(config);
 * const input = { // InvokeEndpointWithBidirectionalStreamInput
 *   EndpointName: "STRING_VALUE", // required
 *   Body: { // RequestStreamEvent Union: only one key present
 *     PayloadPart: { // RequestPayloadPart
 *       Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       DataType: "STRING_VALUE",
 *       CompletionState: "STRING_VALUE",
 *       P: "STRING_VALUE",
 *     },
 *   },
 *   TargetVariant: "STRING_VALUE",
 *   ModelInvocationPath: "STRING_VALUE",
 *   ModelQueryString: "STRING_VALUE",
 * };
 * const command = new InvokeEndpointWithBidirectionalStreamCommand(input);
 * const response = await client.send(command);
 * // { // InvokeEndpointWithBidirectionalStreamOutput
 * //   Body: { // ResponseStreamEvent Union: only one key present
 * //     PayloadPart: { // ResponsePayloadPart
 * //       Bytes: new Uint8Array(),
 * //       DataType: "STRING_VALUE",
 * //       CompletionState: "STRING_VALUE",
 * //       P: "STRING_VALUE",
 * //     },
 * //     ModelStreamError: { // ModelStreamError
 * //       Message: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //     InternalStreamFailure: { // InternalStreamFailure
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   InvokedProductionVariant: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeEndpointWithBidirectionalStreamCommandInput - {@link InvokeEndpointWithBidirectionalStreamCommandInput}
 * @returns {@link InvokeEndpointWithBidirectionalStreamCommandOutput}
 * @see {@link InvokeEndpointWithBidirectionalStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointWithBidirectionalStreamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeHTTP2ClientResolvedConfig | config} for SageMakerRuntimeHTTP2Client's `config` shape.
 *
 * @throws {@link InputValidationError} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link InternalStreamFailure} (server fault)
 *
 * Internal stream failure that occurs during streaming.
 *
 * @throws {@link ModelError} (client fault)
 *
 * An error occurred while processing the model.
 *
 * @throws {@link ModelStreamError} (client fault)
 *
 * Model stream error that occurs during streaming.
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *
 * The request has failed due to a temporary failure of the server.
 *
 * @throws {@link SageMakerRuntimeHTTP2ServiceException}
 *
 * Base exception class for all service exceptions from SageMakerRuntimeHTTP2 service.
 *
 * @public
 */
export class InvokeEndpointWithBidirectionalStreamCommand extends command<InvokeEndpointWithBidirectionalStreamCommandInput, InvokeEndpointWithBidirectionalStreamCommandOutput>(
  _ep0,
  _mw0,
  "InvokeEndpointWithBidirectionalStream",
  InvokeEndpointWithBidirectionalStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeEndpointWithBidirectionalStreamInput;
      output: InvokeEndpointWithBidirectionalStreamOutput;
    };
    sdk: {
      input: InvokeEndpointWithBidirectionalStreamCommandInput;
      output: InvokeEndpointWithBidirectionalStreamCommandOutput;
    };
  };
}
