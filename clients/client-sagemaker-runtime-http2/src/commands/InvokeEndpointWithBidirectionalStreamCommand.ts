// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  InvokeEndpointWithBidirectionalStreamInput,
  InvokeEndpointWithBidirectionalStreamOutput,
} from "../models/models_0";
import type {
  SageMakerRuntimeHTTP2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerRuntimeHTTP2Client";
import { InvokeEndpointWithBidirectionalStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface InvokeEndpointWithBidirectionalStreamCommandOutput
  extends InvokeEndpointWithBidirectionalStreamOutput,
    __MetadataBearer {}

/**
 * <p>Invokes a model endpoint with bidirectional streaming capabilities. This operation establishes a persistent connection that allows you to send multiple requests and receive streaming responses from the model in real-time.</p> <p>Bidirectional streaming is useful for interactive applications such as chatbots, real-time translation, or any scenario where you need to maintain a conversation-like interaction with the model. The connection remains open, allowing you to send additional input and receive responses without establishing a new connection for each request.</p> <p>For an overview of Amazon SageMaker AI, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>.</p> <p>Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. </p> <p>Calls to <code>InvokeEndpointWithBidirectionalStream</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p> <p>The bidirectional stream maintains the connection until either the client closes it or the model indicates completion. Each request and response in the stream is sent as an event with optional headers for data type and completion state.</p> <note> <p>Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker AI determines the account ID from the authentication token that is supplied by the caller.</p> </note>
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
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InternalStreamFailure} (server fault)
 *  <p>Internal stream failure that occurs during streaming.</p>
 *
 * @throws {@link ModelError} (client fault)
 *  <p>An error occurred while processing the model.</p>
 *
 * @throws {@link ModelStreamError} (client fault)
 *  <p>Model stream error that occurs during streaming.</p>
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link SageMakerRuntimeHTTP2ServiceException}
 * <p>Base exception class for all service exceptions from SageMakerRuntimeHTTP2 service.</p>
 *
 *
 * @public
 */
export class InvokeEndpointWithBidirectionalStreamCommand extends $Command
  .classBuilder<
    InvokeEndpointWithBidirectionalStreamCommandInput,
    InvokeEndpointWithBidirectionalStreamCommandOutput,
    SageMakerRuntimeHTTP2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerRuntimeHTTP2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getEventStreamPlugin(config)];
  })
  .s("AmazonSageMakerRuntimeHttp2", "InvokeEndpointWithBidirectionalStream", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("SageMakerRuntimeHTTP2Client", "InvokeEndpointWithBidirectionalStreamCommand")
  .sc(InvokeEndpointWithBidirectionalStream)
  .build() {
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
