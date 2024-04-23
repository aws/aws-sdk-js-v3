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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Invokes the specified Bedrock model to run inference using the input provided in the request body.
 *          You use InvokeModel to run inference for text models, image models, and embedding models.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
 *          <p>For example requests, see Examples (after the Errors section).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // InvokeModelRequest
 *   body: "BLOB_VALUE", // required
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   modelId: "STRING_VALUE", // required
 * };
 * const command = new InvokeModelCommand(input);
 * const response = await client.send(command);
 * // { // InvokeModelResponse
 * //   body: "BLOB_VALUE", // required
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
