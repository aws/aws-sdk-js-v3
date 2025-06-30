// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  InvokeModelWithBidirectionalStreamRequest,
  InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamResponse,
  InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_InvokeModelWithBidirectionalStreamCommand,
  se_InvokeModelWithBidirectionalStreamCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface InvokeModelWithBidirectionalStreamCommandOutput
  extends InvokeModelWithBidirectionalStreamResponse,
    __MetadataBearer {}

/**
 * <p>Invoke the specified Amazon Bedrock model to run inference using the bidirectional stream. The response is returned in a stream that remains open for 8 minutes. A single session can contain multiple prompts and responses from the model. The prompts to the model are provided as audio files and the model's responses are spoken back to the user and transcribed.</p> <p>It is possible for users to interrupt the model's response with a new prompt, which will halt the response speech. The model will retain contextual awareness of the conversation while pivoting to respond to the new prompt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeModelWithBidirectionalStreamCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeModelWithBidirectionalStreamCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
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
 *  <p>The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied">AccessDeniedException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure">InternalFailure</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ModelErrorException} (client fault)
 *  <p>The request failed due to an error while processing the model.</p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>The model specified in the request is not ready to serve inference requests. The AWS SDK will automatically retry the operation up to 5 times. For information about configuring automatic retries, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html">Retry behavior</a> in the <i>AWS SDKs and Tools</i> reference guide.</p>
 *
 * @throws {@link ModelStreamErrorException} (client fault)
 *  <p>An error occurred while streaming the response. Retry your request.</p>
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *  <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found">ResourceNotFound</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds the service quota for your account. You can view your quotas at <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html">Viewing service quotas</a>. You can resubmit your request later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service isn't currently available. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable">ServiceUnavailable</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 *
 * @public
 */
export class InvokeModelWithBidirectionalStreamCommand extends $Command
  .classBuilder<
    InvokeModelWithBidirectionalStreamCommandInput,
    InvokeModelWithBidirectionalStreamCommandOutput,
    BedrockRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
    ];
  })
  .s("AmazonBedrockFrontendService", "InvokeModelWithBidirectionalStream", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand")
  .f(
    InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog,
    InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog
  )
  .ser(se_InvokeModelWithBidirectionalStreamCommand)
  .de(de_InvokeModelWithBidirectionalStreamCommand)
  .build() {
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
