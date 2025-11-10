// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteTableOptimizerRequest, DeleteTableOptimizerResponse } from "../models/models_1";
import { DeleteTableOptimizer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTableOptimizerCommand}.
 */
export interface DeleteTableOptimizerCommandInput extends DeleteTableOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableOptimizerCommand}.
 */
export interface DeleteTableOptimizerCommandOutput extends DeleteTableOptimizerResponse, __MetadataBearer {}

/**
 * <p>Deletes an optimizer and all associated metadata for a table. The optimization will no longer be performed on the table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTableOptimizerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteTableOptimizerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteTableOptimizerRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Type: "compaction" || "retention" || "orphan_file_deletion", // required
 * };
 * const command = new DeleteTableOptimizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableOptimizerCommandInput - {@link DeleteTableOptimizerCommandInput}
 * @returns {@link DeleteTableOptimizerCommandOutput}
 * @see {@link DeleteTableOptimizerCommandInput} for command's `input` shape.
 * @see {@link DeleteTableOptimizerCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteTableOptimizerCommand extends $Command
  .classBuilder<
    DeleteTableOptimizerCommandInput,
    DeleteTableOptimizerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteTableOptimizer", {})
  .n("GlueClient", "DeleteTableOptimizerCommand")
  .sc(DeleteTableOptimizer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableOptimizerRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableOptimizerCommandInput;
      output: DeleteTableOptimizerCommandOutput;
    };
  };
}
