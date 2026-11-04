// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type {
  InvokeModelWithBidirectionalStreamRequest,
  InvokeModelWithBidirectionalStreamResponse,
} from "../models/models_0";
import { InvokeModelWithBidirectionalStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InvokeModelWithBidirectionalStreamCommand}.
 */
export interface InvokeModelWithBidirectionalStreamCommandInput extends InvokeModelWithBidirectionalStreamRequest {}
/**
 * @public
 *
 * The output of {@link InvokeModelWithBidirectionalStreamCommand}.
 */
export interface InvokeModelWithBidirectionalStreamCommandOutput extends InvokeModelWithBidirectionalStreamResponse, __MetadataBearer {}

/**
 * Invoke the specified Amazon Bedrock model to run inference using the bidirectional stream. The response is returned in a stream that remains open for 8 minutes. A single session can contain multiple prompts and responses from the model. The prompts to the model are provided as audio files and the model's responses are spoken back to the user and transcribed.
 *
 * It is possible for users to interrupt the model's response with a new prompt, which will halt the response speech. The model will retain contextual awareness of the conversation while pivoting to respond to the new prompt.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeModelWithBidirectionalStreamCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeModelWithBidirectionalStreamCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * // import type { BedrockRuntimeClientConfig } from "@aws-sdk/client-bedrock-runtime";
 * const config = {}; // type is BedrockRuntimeClientConfig
 * const client = new BedrockRuntimeClient(config);
 * const input = { // InvokeModelWithBidirectionalStreamRequest
 *   modelId: "STRING_VALUE", // required
 *   body: { // InvokeModelWithBidirectionalStreamInput Union: only one key present
 *     chunk: { // BidirectionalInputPayloadPart
 *       bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     },
 *   },
 * };
 * const command = new InvokeModelWithBidirectionalStreamCommand(input);
 * const response = await client.send(command);
 * // { // InvokeModelWithBidirectionalStreamResponse
 * //   body: { // InvokeModelWithBidirectionalStreamOutput Union: only one key present
 * //     chunk: { // BidirectionalOutputPayloadPart
 * //       bytes: new Uint8Array(),
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     modelStreamErrorException: { // ModelStreamErrorException
 * //       message: "STRING_VALUE",
 * //       originalStatusCode: Number("int"),
 * //       originalMessage: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE",
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     modelTimeoutException: { // ModelTimeoutException
 * //       message: "STRING_VALUE",
 * //     },
 * //     serviceUnavailableException: { // ServiceUnavailableException
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param InvokeModelWithBidirectionalStreamCommandInput - {@link InvokeModelWithBidirectionalStreamCommandInput}
 * @returns {@link InvokeModelWithBidirectionalStreamCommandOutput}
 * @see {@link InvokeModelWithBidirectionalStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeModelWithBidirectionalStreamCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see [AccessDeniedException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied) in the Amazon Bedrock User Guide
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. For troubleshooting this error, see [InternalFailure](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure) in the Amazon Bedrock User Guide
 *
 * @throws {@link ModelErrorException} (client fault)
 *
 * The request failed due to an error while processing the model.
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *
 * The model specified in the request is not ready to serve inference requests. The AWS SDK will automatically retry the operation up to 5 times. For information about configuring automatic retries, see [Retry behavior](https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html) in the *AWS SDKs and Tools* reference guide.
 *
 * @throws {@link ModelStreamErrorException} (client fault)
 *
 * An error occurred while streaming the response. Retry your request.
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *
 * The request took too long to process. Processing time exceeded the model timeout length.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. For troubleshooting this error, see [ResourceNotFound](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found) in the Amazon Bedrock User Guide
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Your request exceeds the service quota for your account. You can view your quotas at [Viewing service quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html). You can resubmit your request later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service isn't currently available. For troubleshooting this error, see [ServiceUnavailable](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable) in the Amazon Bedrock User Guide
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request was denied due to exceeding the account quotas for *Amazon Bedrock*. For troubleshooting this error, see [ThrottlingException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception) in the Amazon Bedrock User Guide
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by *Amazon Bedrock*. For troubleshooting this error, see [ValidationError](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error) in the Amazon Bedrock User Guide
 *
 * @throws {@link BedrockRuntimeServiceException}
 *
 * Base exception class for all service exceptions from BedrockRuntime service.
 *
 * @public
 */
export class InvokeModelWithBidirectionalStreamCommand extends command<InvokeModelWithBidirectionalStreamCommandInput, InvokeModelWithBidirectionalStreamCommandOutput>(
  _ep0,
  _mw1,
  "InvokeModelWithBidirectionalStream",
  InvokeModelWithBidirectionalStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeModelWithBidirectionalStreamRequest;
      output: InvokeModelWithBidirectionalStreamResponse;
    };
    sdk: {
      input: InvokeModelWithBidirectionalStreamCommandInput;
      output: InvokeModelWithBidirectionalStreamCommandOutput;
    };
  };
}
