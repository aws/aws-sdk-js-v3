// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  InvokeModelWithResponseStreamRequest,
  InvokeModelWithResponseStreamRequestFilterSensitiveLog,
  InvokeModelWithResponseStreamResponse,
  InvokeModelWithResponseStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_InvokeModelWithResponseStreamCommand,
  se_InvokeModelWithResponseStreamCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type InvokeModelWithResponseStreamCommandInputType = Omit<InvokeModelWithResponseStreamRequest, "body"> & {
  body?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeModelWithResponseStreamCommand}.
 */
export interface InvokeModelWithResponseStreamCommandInput extends InvokeModelWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeModelWithResponseStreamCommand}.
 */
export interface InvokeModelWithResponseStreamCommandOutput
  extends InvokeModelWithResponseStreamResponse,
    __MetadataBearer {}

/**
 * <p>Invoke the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. The response is returned in a stream.</p>
 *          <p>To see if a model supports streaming, call <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetFoundationModel.html">GetFoundationModel</a>
 *          and check the <code>responseStreamingSupported</code> field in the response.</p>
 *          <note>
 *             <p>The CLI doesn't support streaming operations in Amazon Bedrock, including <code>InvokeModelWithResponseStream</code>.</p>
 *          </note>
 *          <p>For example code, see <i>Invoke model with streaming code
 *          example</i> in the <i>Amazon Bedrock User Guide</i>.
 *       </p>
 *          <p>This operation requires permissions to perform the <code>bedrock:InvokeModelWithResponseStream</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // InvokeModelWithResponseStreamRequest
 *   body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   modelId: "STRING_VALUE", // required
 *   trace: "ENABLED" || "DISABLED",
 *   guardrailIdentifier: "STRING_VALUE",
 *   guardrailVersion: "STRING_VALUE",
 * };
 * const command = new InvokeModelWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // { // InvokeModelWithResponseStreamResponse
 * //   body: { // ResponseStream Union: only one key present
 * //     chunk: { // PayloadPart
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
 * //   contentType: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeModelWithResponseStreamCommandInput - {@link InvokeModelWithResponseStreamCommandInput}
 * @returns {@link InvokeModelWithResponseStreamCommandOutput}
 * @see {@link InvokeModelWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeModelWithResponseStreamCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ModelErrorException} (client fault)
 *  <p>The request failed due to an error while processing the model.</p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>The model specified in the request is not ready to serve inference requests. The AWS SDK
 *            will automatically retry the operation up to 5 times. For information about configuring
 *            automatic retries, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html">Retry behavior</a> in the <i>AWS SDKs and Tools</i>
 *            reference guide.</p>
 *
 * @throws {@link ModelStreamErrorException} (client fault)
 *  <p>An error occurred while streaming the response. Retry your request.</p>
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *  <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds the service quota for your account. You can view your quotas at <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html">Viewing service quotas</a>. You can resubmit your request later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service isn't currently available. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was throttled because of service-wide limitations. Resubmit your request later or in a different region. You can also purchase <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> to increase the rate or number of tokens you can process.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 * @public
 */
export class InvokeModelWithResponseStreamCommand extends $Command
  .classBuilder<
    InvokeModelWithResponseStreamCommandInput,
    InvokeModelWithResponseStreamCommandOutput,
    BedrockRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand")
  .f(InvokeModelWithResponseStreamRequestFilterSensitiveLog, InvokeModelWithResponseStreamResponseFilterSensitiveLog)
  .ser(se_InvokeModelWithResponseStreamCommand)
  .de(de_InvokeModelWithResponseStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeModelWithResponseStreamRequest;
      output: InvokeModelWithResponseStreamResponse;
    };
    sdk: {
      input: InvokeModelWithResponseStreamCommandInput;
      output: InvokeModelWithResponseStreamCommandOutput;
    };
  };
}
