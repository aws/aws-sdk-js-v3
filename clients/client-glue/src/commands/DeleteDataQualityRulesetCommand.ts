// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteDataQualityRulesetRequest, DeleteDataQualityRulesetResponse } from "../models/models_1";
import { de_DeleteDataQualityRulesetCommand, se_DeleteDataQualityRulesetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataQualityRulesetCommand}.
 */
export interface DeleteDataQualityRulesetCommandInput extends DeleteDataQualityRulesetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataQualityRulesetCommand}.
 */
export interface DeleteDataQualityRulesetCommandOutput extends DeleteDataQualityRulesetResponse, __MetadataBearer {}

/**
 * <p>Deletes a data quality ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteDataQualityRulesetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteDataQualityRulesetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DeleteDataQualityRulesetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataQualityRulesetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataQualityRulesetCommandInput - {@link DeleteDataQualityRulesetCommandInput}
 * @returns {@link DeleteDataQualityRulesetCommandOutput}
 * @see {@link DeleteDataQualityRulesetCommandInput} for command's `input` shape.
 * @see {@link DeleteDataQualityRulesetCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class DeleteDataQualityRulesetCommand extends $Command
  .classBuilder<
    DeleteDataQualityRulesetCommandInput,
    DeleteDataQualityRulesetCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "DeleteDataQualityRuleset", {})
  .n("GlueClient", "DeleteDataQualityRulesetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataQualityRulesetCommand)
  .de(de_DeleteDataQualityRulesetCommand)
  .build() {}
