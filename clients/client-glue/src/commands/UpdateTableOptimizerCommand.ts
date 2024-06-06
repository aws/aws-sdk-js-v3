// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateTableOptimizerRequest, UpdateTableOptimizerResponse } from "../models/models_2";
import { de_UpdateTableOptimizerCommand, se_UpdateTableOptimizerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTableOptimizerCommand}.
 */
export interface UpdateTableOptimizerCommandInput extends UpdateTableOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableOptimizerCommand}.
 */
export interface UpdateTableOptimizerCommandOutput extends UpdateTableOptimizerResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration for an existing table optimizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTableOptimizerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTableOptimizerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateTableOptimizerRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Type: "compaction", // required
 *   TableOptimizerConfiguration: { // TableOptimizerConfiguration
 *     roleArn: "STRING_VALUE",
 *     enabled: true || false,
 *   },
 * };
 * const command = new UpdateTableOptimizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTableOptimizerCommandInput - {@link UpdateTableOptimizerCommandInput}
 * @returns {@link UpdateTableOptimizerCommandOutput}
 * @see {@link UpdateTableOptimizerCommandInput} for command's `input` shape.
 * @see {@link UpdateTableOptimizerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class UpdateTableOptimizerCommand extends $Command
  .classBuilder<
    UpdateTableOptimizerCommandInput,
    UpdateTableOptimizerCommandOutput,
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
  .s("AWSGlue", "UpdateTableOptimizer", {})
  .n("GlueClient", "UpdateTableOptimizerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTableOptimizerCommand)
  .de(de_UpdateTableOptimizerCommand)
  .build() {}
