// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTargetSelectionRulesMessage, GetTargetSelectionRulesResponse } from "../models/models_0";
import { GetTargetSelectionRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:GetTargetSelectionRules</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
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
 * @example Convert source selection rules to target selection rules
 * ```javascript
 * // The following example converts source selection rules that select the ExampleTable table in the ExampleSchema schema into target selection rules that reference its converted counterpart.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "1", "rule-name": "1", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "database-name": "ExampleDatabase", "schema-name": "ExampleSchema", "table-name": "ExampleTable"}, "rule-action": "explicit"}]}`
 * };
 * const command = new GetTargetSelectionRulesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TargetSelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "1", "rule-name": "1", "object-locator": {"server-name": "example-target-server.us-east-1.rds.amazonaws.com", "schema-name": "exampledatabase_exampleschema", "table-name": "exampletable"}, "rule-action": "explicit"}]}`
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTargetSelectionRulesCommand extends command<GetTargetSelectionRulesCommandInput, GetTargetSelectionRulesCommandOutput>(
  _ep0,
  _mw0,
  "GetTargetSelectionRules",
  GetTargetSelectionRules$
) {
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
