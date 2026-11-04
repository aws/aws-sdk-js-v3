// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCollectorRequest } from "../models/models_0";
import { DeleteFleetAdvisorCollector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFleetAdvisorCollectorCommand}.
 */
export interface DeleteFleetAdvisorCollectorCommandInput extends DeleteCollectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetAdvisorCollectorCommand}.
 */
export interface DeleteFleetAdvisorCollectorCommandOutput extends __MetadataBearer {}

/**
 * > **Important:** End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see [Amazon Web Services DMS Fleet Advisor end of support](https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html).
 *
 * Deletes the specified Fleet Advisor collector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteFleetAdvisorCollectorCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteFleetAdvisorCollectorCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteCollectorRequest
 *   CollectorReferencedId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFleetAdvisorCollectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFleetAdvisorCollectorCommandInput - {@link DeleteFleetAdvisorCollectorCommandInput}
 * @returns {@link DeleteFleetAdvisorCollectorCommandOutput}
 * @see {@link DeleteFleetAdvisorCollectorCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetAdvisorCollectorCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *
 * DMS was denied access to the endpoint. Check that the role is correctly configured.
 *
 * @throws {@link CollectorNotFoundFault} (client fault)
 *
 * The specified collector doesn't exist.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *
 * The resource is in a state that prevents it from being used for database migration.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @public
 */
export class DeleteFleetAdvisorCollectorCommand extends command<DeleteFleetAdvisorCollectorCommandInput, DeleteFleetAdvisorCollectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFleetAdvisorCollector",
  DeleteFleetAdvisorCollector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCollectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteFleetAdvisorCollectorCommandInput;
      output: DeleteFleetAdvisorCollectorCommandOutput;
    };
  };
}
