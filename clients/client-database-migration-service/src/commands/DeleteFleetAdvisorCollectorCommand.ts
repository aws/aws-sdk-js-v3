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
import { DeleteCollectorRequest } from "../models/models_0";
import { de_DeleteFleetAdvisorCollectorCommand, se_DeleteFleetAdvisorCollectorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified Fleet Advisor collector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteFleetAdvisorCollectorCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteFleetAdvisorCollectorCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link CollectorNotFoundFault} (client fault)
 *  <p>The specified collector doesn't exist.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DeleteFleetAdvisorCollectorCommand extends $Command
  .classBuilder<
    DeleteFleetAdvisorCollectorCommandInput,
    DeleteFleetAdvisorCollectorCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DeleteFleetAdvisorCollector", {})
  .n("DatabaseMigrationServiceClient", "DeleteFleetAdvisorCollectorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFleetAdvisorCollectorCommand)
  .de(de_DeleteFleetAdvisorCollectorCommand)
  .build() {
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
