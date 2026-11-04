// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTenantDatabaseMessage, DeleteTenantDatabaseResult } from "../models/models_0";
import { DeleteTenantDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a tenant database from your DB instance. This command only applies to RDS for Oracle container database (CDB) instances.
 *
 * You can't delete a tenant database when it is the only tenant in the DB instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteTenantDatabaseCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteTenantDatabaseCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 * //     MasterUserSecret: { // MasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
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
 *
 * `DBInstanceIdentifier` doesn't refer to an existing DB instance.
 *
 * @throws {@link DBSnapshotAlreadyExistsFault} (client fault)
 *
 * `DBSnapshotIdentifier` is already used by an existing snapshot.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The DB instance isn't in a valid state.
 *
 * @throws {@link TenantDatabaseNotFoundFault} (client fault)
 *
 * The specified tenant database wasn't found in the DB instance.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @public
 */
export class DeleteTenantDatabaseCommand extends command<DeleteTenantDatabaseCommandInput, DeleteTenantDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTenantDatabase",
  DeleteTenantDatabase$
) {
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
