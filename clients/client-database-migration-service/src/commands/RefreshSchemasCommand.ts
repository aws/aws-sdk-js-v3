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
import { RefreshSchemasMessage, RefreshSchemasResponse } from "../models/models_1";
import { de_RefreshSchemasCommand, se_RefreshSchemasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RefreshSchemasCommand}.
 */
export interface RefreshSchemasCommandInput extends RefreshSchemasMessage {}
/**
 * @public
 *
 * The output of {@link RefreshSchemasCommand}.
 */
export interface RefreshSchemasCommandOutput extends RefreshSchemasResponse, __MetadataBearer {}

/**
 * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
 *          can take several minutes. You can check the status of this operation by calling the
 *          DescribeRefreshSchemasStatus operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RefreshSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RefreshSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // RefreshSchemasMessage
 *   EndpointArn: "STRING_VALUE", // required
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new RefreshSchemasCommand(input);
 * const response = await client.send(command);
 * // { // RefreshSchemasResponse
 * //   RefreshSchemasStatus: { // RefreshSchemasStatus
 * //     EndpointArn: "STRING_VALUE",
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     Status: "successful" || "failed" || "refreshing",
 * //     LastRefreshDate: new Date("TIMESTAMP"),
 * //     LastFailureMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RefreshSchemasCommandInput - {@link RefreshSchemasCommandInput}
 * @returns {@link RefreshSchemasCommandOutput}
 * @see {@link RefreshSchemasCommandInput} for command's `input` shape.
 * @see {@link RefreshSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Refresh schema
 * ```javascript
 * // Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the describe-refresh-schemas-status operation.
 * const input = {
 *   "EndpointArn": "",
 *   "ReplicationInstanceArn": ""
 * };
 * const command = new RefreshSchemasCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "RefreshSchemasStatus": {}
 * }
 * *\/
 * // example id: refresh-schema-1481762399111
 * ```
 *
 */
export class RefreshSchemasCommand extends $Command
  .classBuilder<
    RefreshSchemasCommandInput,
    RefreshSchemasCommandOutput,
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
  .s("AmazonDMSv20160101", "RefreshSchemas", {})
  .n("DatabaseMigrationServiceClient", "RefreshSchemasCommand")
  .f(void 0, void 0)
  .ser(se_RefreshSchemasCommand)
  .de(de_RefreshSchemasCommand)
  .build() {}
