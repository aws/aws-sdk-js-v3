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
import { DeleteConnectionMessage, DeleteConnectionResponse } from "../models/models_0";
import { de_DeleteConnectionCommand, se_DeleteConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandInput extends DeleteConnectionMessage {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandOutput extends DeleteConnectionResponse, __MetadataBearer {}

/**
 * <p>Deletes the connection between a replication instance and an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteConnectionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteConnectionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteConnectionMessage
 *   EndpointArn: "STRING_VALUE", // required
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConnectionResponse
 * //   Connection: { // Connection
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     EndpointArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     LastFailureMessage: "STRING_VALUE",
 * //     EndpointIdentifier: "STRING_VALUE",
 * //     ReplicationInstanceIdentifier: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteConnectionCommandInput - {@link DeleteConnectionCommandInput}
 * @returns {@link DeleteConnectionCommandOutput}
 * @see {@link DeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionCommandOutput} for command's `response` shape.
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
 * @public
 * @example Delete Connection
 * ```javascript
 * // Deletes the connection between the replication instance and the endpoint.
 * const input = {
 *   "EndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM",
 *   "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ"
 * };
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Connection": {}
 * }
 * *\/
 * // example id: delete-connection-1481751957981
 * ```
 *
 */
export class DeleteConnectionCommand extends $Command
  .classBuilder<
    DeleteConnectionCommandInput,
    DeleteConnectionCommandOutput,
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
  .s("AmazonDMSv20160101", "DeleteConnection", {})
  .n("DatabaseMigrationServiceClient", "DeleteConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConnectionCommand)
  .de(de_DeleteConnectionCommand)
  .build() {}
