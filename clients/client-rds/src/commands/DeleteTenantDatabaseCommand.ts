// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteTenantDatabaseMessage,
  DeleteTenantDatabaseResult,
  DeleteTenantDatabaseResultFilterSensitiveLog,
} from "../models/models_1";
import { de_DeleteTenantDatabaseCommand, se_DeleteTenantDatabaseCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTenantDatabaseCommand}.
 */
export interface DeleteTenantDatabaseCommandInput extends DeleteTenantDatabaseMessage {}
/**
 * @public
 *
 * The output of {@link DeleteTenantDatabaseCommand}.
 */
export interface DeleteTenantDatabaseCommandOutput extends DeleteTenantDatabaseResult, __MetadataBearer {}

/**
 * <p>Deletes a tenant database from your DB instance. This command only applies to RDS for
 *             Oracle container database (CDB) instances.</p>
 *          <p>You can't delete a tenant database when it is the only tenant in the DB
 *             instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteTenantDatabaseCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteTenantDatabaseCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteTenantDatabaseMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   TenantDBName: "STRING_VALUE", // required
 *   SkipFinalSnapshot: true || false,
 *   FinalDBSnapshotIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteTenantDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTenantDatabaseResult
 * //   TenantDatabase: { // TenantDatabase
 * //     TenantDatabaseCreateTime: new Date("TIMESTAMP"),
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     TenantDBName: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     MasterUsername: "STRING_VALUE",
 * //     DbiResourceId: "STRING_VALUE",
 * //     TenantDatabaseResourceId: "STRING_VALUE",
 * //     TenantDatabaseARN: "STRING_VALUE",
 * //     CharacterSetName: "STRING_VALUE",
 * //     NcharCharacterSetName: "STRING_VALUE",
 * //     DeletionProtection: true || false,
 * //     PendingModifiedValues: { // TenantDatabasePendingModifiedValues
 * //       MasterUserPassword: "STRING_VALUE",
 * //       TenantDBName: "STRING_VALUE",
 * //     },
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTenantDatabaseCommandInput - {@link DeleteTenantDatabaseCommandInput}
 * @returns {@link DeleteTenantDatabaseCommandOutput}
 * @see {@link DeleteTenantDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteTenantDatabaseCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link TenantDatabaseNotFoundFault} (client fault)
 *  <p>The specified tenant database wasn't found in the DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DeleteTenantDatabaseCommand extends $Command
  .classBuilder<
    DeleteTenantDatabaseCommandInput,
    DeleteTenantDatabaseCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DeleteTenantDatabase", {})
  .n("RDSClient", "DeleteTenantDatabaseCommand")
  .f(void 0, DeleteTenantDatabaseResultFilterSensitiveLog)
  .ser(se_DeleteTenantDatabaseCommand)
  .de(de_DeleteTenantDatabaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTenantDatabaseMessage;
      output: DeleteTenantDatabaseResult;
    };
    sdk: {
      input: DeleteTenantDatabaseCommandInput;
      output: DeleteTenantDatabaseCommandOutput;
    };
  };
}
