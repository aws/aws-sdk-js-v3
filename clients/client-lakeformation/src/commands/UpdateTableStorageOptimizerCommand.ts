// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { UpdateTableStorageOptimizerRequest, UpdateTableStorageOptimizerResponse } from "../models/models_0";
import {
  de_UpdateTableStorageOptimizerCommand,
  se_UpdateTableStorageOptimizerCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTableStorageOptimizerCommand}.
 */
export interface UpdateTableStorageOptimizerCommandInput extends UpdateTableStorageOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableStorageOptimizerCommand}.
 */
export interface UpdateTableStorageOptimizerCommandOutput
  extends UpdateTableStorageOptimizerResponse,
    __MetadataBearer {}

/**
 * <p>Updates the configuration of the storage optimizers for a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateTableStorageOptimizerCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateTableStorageOptimizerCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateTableStorageOptimizerRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   StorageOptimizerConfig: { // StorageOptimizerConfigMap // required
 *     "<keys>": { // StorageOptimizerConfig
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateTableStorageOptimizerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTableStorageOptimizerResponse
 * //   Result: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTableStorageOptimizerCommandInput - {@link UpdateTableStorageOptimizerCommandInput}
 * @returns {@link UpdateTableStorageOptimizerCommandOutput}
 * @see {@link UpdateTableStorageOptimizerCommandInput} for command's `input` shape.
 * @see {@link UpdateTableStorageOptimizerCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class UpdateTableStorageOptimizerCommand extends $Command
  .classBuilder<
    UpdateTableStorageOptimizerCommandInput,
    UpdateTableStorageOptimizerCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "UpdateTableStorageOptimizer", {})
  .n("LakeFormationClient", "UpdateTableStorageOptimizerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTableStorageOptimizerCommand)
  .de(de_UpdateTableStorageOptimizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTableStorageOptimizerRequest;
      output: UpdateTableStorageOptimizerResponse;
    };
    sdk: {
      input: UpdateTableStorageOptimizerCommandInput;
      output: UpdateTableStorageOptimizerCommandOutput;
    };
  };
}
