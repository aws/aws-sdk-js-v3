// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProvisionedModelThroughputRequest, UpdateProvisionedModelThroughputResponse } from "../models/models_0";
import {
  de_UpdateProvisionedModelThroughputCommand,
  se_UpdateProvisionedModelThroughputCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProvisionedModelThroughputCommand}.
 */
export interface UpdateProvisionedModelThroughputCommandInput extends UpdateProvisionedModelThroughputRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProvisionedModelThroughputCommand}.
 */
export interface UpdateProvisionedModelThroughputCommandOutput
  extends UpdateProvisionedModelThroughputResponse,
    __MetadataBearer {}

/**
 * <p>Updates the name or associated model for a Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, UpdateProvisionedModelThroughputCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, UpdateProvisionedModelThroughputCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // UpdateProvisionedModelThroughputRequest
 *   provisionedModelId: "STRING_VALUE", // required
 *   desiredProvisionedModelName: "STRING_VALUE",
 *   desiredModelId: "STRING_VALUE",
 * };
 * const command = new UpdateProvisionedModelThroughputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateProvisionedModelThroughputCommandInput - {@link UpdateProvisionedModelThroughputCommandInput}
 * @returns {@link UpdateProvisionedModelThroughputCommandOutput}
 * @see {@link UpdateProvisionedModelThroughputCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedModelThroughputCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class UpdateProvisionedModelThroughputCommand extends $Command
  .classBuilder<
    UpdateProvisionedModelThroughputCommandInput,
    UpdateProvisionedModelThroughputCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "UpdateProvisionedModelThroughput", {})
  .n("BedrockClient", "UpdateProvisionedModelThroughputCommand")
  .f(void 0, void 0)
  .ser(se_UpdateProvisionedModelThroughputCommand)
  .de(de_UpdateProvisionedModelThroughputCommand)
  .build() {}
