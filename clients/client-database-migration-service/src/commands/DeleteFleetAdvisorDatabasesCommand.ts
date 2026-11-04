// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFleetAdvisorDatabasesRequest, DeleteFleetAdvisorDatabasesResponse } from "../models/models_0";
import { DeleteFleetAdvisorDatabases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteFleetAdvisorDatabasesCommandOutput extends DeleteFleetAdvisorDatabasesResponse, __MetadataBearer {}

/**
 * > **Important:** End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see [Amazon Web Services DMS Fleet Advisor end of support](https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html).
 *
 * Deletes the specified Fleet Advisor collector databases.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteFleetAdvisorDatabasesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteFleetAdvisorDatabasesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
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
 * @throws {@link AccessDeniedFault} (client fault)
 *
 * DMS was denied access to the endpoint. Check that the role is correctly configured.
 *
 * @throws {@link InvalidOperationFault} (client fault)
 *
 * The action or operation requested isn't valid.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @public
 */
export class DeleteFleetAdvisorDatabasesCommand extends command<DeleteFleetAdvisorDatabasesCommandInput, DeleteFleetAdvisorDatabasesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFleetAdvisorDatabases",
  DeleteFleetAdvisorDatabases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFleetAdvisorDatabasesRequest;
      output: DeleteFleetAdvisorDatabasesResponse;
    };
    sdk: {
      input: DeleteFleetAdvisorDatabasesCommandInput;
      output: DeleteFleetAdvisorDatabasesCommandOutput;
    };
  };
}
