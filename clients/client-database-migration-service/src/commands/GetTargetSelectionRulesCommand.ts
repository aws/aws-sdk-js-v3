// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTargetSelectionRulesMessage, GetTargetSelectionRulesResponse } from "../models/models_0";
import { GetTargetSelectionRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTargetSelectionRulesCommand}.
 */
export interface GetTargetSelectionRulesCommandInput extends GetTargetSelectionRulesMessage {}
/**
 * @public
 *
 * The output of {@link GetTargetSelectionRulesCommand}.
 */
export interface GetTargetSelectionRulesCommandOutput extends GetTargetSelectionRulesResponse, __MetadataBearer {}

/**
 * <p>Converts source selection rules into their target counterparts for schema conversion operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, GetTargetSelectionRulesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, GetTargetSelectionRulesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // GetTargetSelectionRulesMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 * };
 * const command = new GetTargetSelectionRulesCommand(input);
 * const response = await client.send(command);
 * // { // GetTargetSelectionRulesResponse
 * //   TargetSelectionRules: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTargetSelectionRulesCommandInput - {@link GetTargetSelectionRulesCommandInput}
 * @returns {@link GetTargetSelectionRulesCommandOutput}
 * @see {@link GetTargetSelectionRulesCommandInput} for command's `input` shape.
 * @see {@link GetTargetSelectionRulesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class GetTargetSelectionRulesCommand extends $Command
  .classBuilder<
    GetTargetSelectionRulesCommandInput,
    GetTargetSelectionRulesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "GetTargetSelectionRules", {})
  .n("DatabaseMigrationServiceClient", "GetTargetSelectionRulesCommand")
  .sc(GetTargetSelectionRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTargetSelectionRulesMessage;
      output: GetTargetSelectionRulesResponse;
    };
    sdk: {
      input: GetTargetSelectionRulesCommandInput;
      output: GetTargetSelectionRulesCommandOutput;
    };
  };
}
