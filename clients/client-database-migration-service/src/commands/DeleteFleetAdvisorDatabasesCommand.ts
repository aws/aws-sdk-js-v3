// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFleetAdvisorDatabasesRequest, DeleteFleetAdvisorDatabasesResponse } from "../models/models_0";
import { de_DeleteFleetAdvisorDatabasesCommand, se_DeleteFleetAdvisorDatabasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetAdvisorDatabasesCommand}.
 */
export interface DeleteFleetAdvisorDatabasesCommandInput extends DeleteFleetAdvisorDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetAdvisorDatabasesCommand}.
 */
export interface DeleteFleetAdvisorDatabasesCommandOutput
  extends DeleteFleetAdvisorDatabasesResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the specified Fleet Advisor collector databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteFleetAdvisorDatabasesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteFleetAdvisorDatabasesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteFleetAdvisorDatabasesRequest
 *   DatabaseIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteFleetAdvisorDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFleetAdvisorDatabasesResponse
 * //   DatabaseIds: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteFleetAdvisorDatabasesCommandInput - {@link DeleteFleetAdvisorDatabasesCommandInput}
 * @returns {@link DeleteFleetAdvisorDatabasesCommandOutput}
 * @see {@link DeleteFleetAdvisorDatabasesCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetAdvisorDatabasesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidOperationFault} (client fault)
 *  <p>The action or operation requested isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 */
export class DeleteFleetAdvisorDatabasesCommand extends $Command
  .classBuilder<
    DeleteFleetAdvisorDatabasesCommandInput,
    DeleteFleetAdvisorDatabasesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DeleteFleetAdvisorDatabases", {})
  .n("DatabaseMigrationServiceClient", "DeleteFleetAdvisorDatabasesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFleetAdvisorDatabasesCommand)
  .de(de_DeleteFleetAdvisorDatabasesCommand)
  .build() {}
