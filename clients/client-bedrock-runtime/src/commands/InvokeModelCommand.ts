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
  body: BlobPayloadInputTypes;
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // InvokeModelRequest
 *   body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   modelId: "STRING_VALUE", // required
 *   trace: "ENABLED" || "DISABLED",
 *   guardrailIdentifier: "STRING_VALUE",
 *   guardrailVersion: "STRING_VALUE",
 * };
 * const command = new InvokeModelCommand(input);
 * const response = await client.send(command);
 * // { // InvokeModelResponse
 * //   body: new Uint8Array(), // required
 * //   contentType: "STRING_VALUE", // required
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
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ModelErrorException} (client fault)
 *  <p>The request failed due to an error while processing the model.</p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>The model specified in the request is not ready to serve inference requests.</p>
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *  <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
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
  .ep({
    ...commonParams,
  })
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
  .build() {}
