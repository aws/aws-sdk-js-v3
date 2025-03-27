// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  InvokeModelRequest,
  InvokeModelRequestFilterSensitiveLog,
  InvokeModelResponse,
  InvokeModelResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_InvokeModelCommand, se_InvokeModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type InvokeModelCommandInputType = Omit<InvokeModelRequest, "body"> & {
  body?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeModelCommand}.
 */
export interface InvokeModelCommandInput extends InvokeModelCommandInputType {}
/**
 * @public
 */
export type InvokeModelCommandOutputType = Omit<InvokeModelResponse, "body"> & {
  body: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link InvokeModelCommand}.
 */
export interface InvokeModelCommandOutput extends InvokeModelCommandOutputType, __MetadataBearer {}

/**
 * <p>Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body.
 *          You use model inference to generate text, images, and embeddings.</p>
 *          <p>For example code, see <i>Invoke model code examples</i> in the <i>Amazon Bedrock User Guide</i>.
 *       </p>
 *          <p>This operation requires permission for the <code>bedrock:InvokeModel</code> action.</p>
 *          <important>
 *             <p>To deny all inference access to resources that you specify in the modelId field, you
 *          need to deny access to the <code>bedrock:InvokeModel</code> and
 *             <code>bedrock:InvokeModelWithResponseStream</code> actions. Doing this also denies
 *          access to the resource through the Converse API actions (<a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html">ConverseStream</a>). For more information see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-deny-inference">Deny access for inference on specific models</a>.
 *             </p>
 *          </important>
 *          <p>For troubleshooting some of the common errors you might encounter when using the <code>InvokeModel</code> API,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html">Troubleshooting Amazon Bedrock API Error Codes</a> in the Amazon Bedrock User Guide</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // InvokeModelRequest
 *   body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   modelId: "STRING_VALUE", // required
 *   trace: "ENABLED" || "DISABLED",
 *   guardrailIdentifier: "STRING_VALUE",
 *   guardrailVersion: "STRING_VALUE",
 *   performanceConfigLatency: "standard" || "optimized",
 * };
 * const command = new InvokeModelCommand(input);
 * const response = await client.send(command);
 * // { // InvokeModelResponse
 * //   body: new Uint8Array(), // required
 * //   contentType: "STRING_VALUE", // required
 * //   performanceConfigLatency: "standard" || "optimized",
 * // };
 *
 * ```
 *
 * @param InvokeModelCommandInput - {@link InvokeModelCommandInput}
 * @returns {@link InvokeModelCommandOutput}
 * @see {@link InvokeModelCommandInput} for command's `input` shape.
 * @see {@link InvokeModelCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied">AccessDeniedException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure">InternalFailure</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ModelErrorException} (client fault)
 *  <p>The request failed due to an error while processing the model.</p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>The model specified in the request is not ready to serve inference requests. The AWS SDK
 *          will automatically retry the operation up to 5 times. For information about configuring
 *          automatic retries, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html">Retry behavior</a> in the <i>AWS SDKs and Tools</i>
 *       reference guide.</p>
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *  <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found">ResourceNotFound</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds the service quota for your account. You can view your quotas at <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html">Viewing service quotas</a>. You can resubmit your request later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service isn't currently available. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable">ServiceUnavailable</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For
 *          troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 *
 * @public
 */
export class InvokeModelCommand extends $Command
  .classBuilder<
    InvokeModelCommandInput,
    InvokeModelCommandOutput,
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
  .s("AmazonBedrockFrontendService", "InvokeModel", {})
  .n("BedrockRuntimeClient", "InvokeModelCommand")
  .f(InvokeModelRequestFilterSensitiveLog, InvokeModelResponseFilterSensitiveLog)
  .ser(se_InvokeModelCommand)
  .de(de_InvokeModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeModelRequest;
      output: InvokeModelResponse;
    };
    sdk: {
      input: InvokeModelCommandInput;
      output: InvokeModelCommandOutput;
    };
  };
}
