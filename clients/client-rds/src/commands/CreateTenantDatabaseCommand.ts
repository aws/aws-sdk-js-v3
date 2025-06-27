// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateTenantDatabaseMessage,
  CreateTenantDatabaseMessageFilterSensitiveLog,
  CreateTenantDatabaseResult,
  CreateTenantDatabaseResultFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateTenantDatabaseCommand, se_CreateTenantDatabaseCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTenantDatabaseCommand}.
 */
export interface CreateTenantDatabaseCommandInput extends CreateTenantDatabaseMessage {}
/**
 * @public
 *
 * The output of {@link CreateTenantDatabaseCommand}.
 */
export interface CreateTenantDatabaseCommandOutput extends CreateTenantDatabaseResult, __MetadataBearer {}

/**
 * <p>Creates a tenant database in a DB instance that uses the multi-tenant configuration.
 *             Only RDS for Oracle container database (CDB) instances are supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateTenantDatabaseCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateTenantDatabaseCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateTenantDatabaseMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   TenantDBName: "STRING_VALUE", // required
 *   MasterUsername: "STRING_VALUE", // required
 *   MasterUserPassword: "STRING_VALUE",
 *   CharacterSetName: "STRING_VALUE",
 *   NcharCharacterSetName: "STRING_VALUE",
 *   ManageMasterUserPassword: true || false,
 *   MasterUserSecretKmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateTenantDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateTenantDatabaseResult
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
 * @param CreateTenantDatabaseCommandInput - {@link CreateTenantDatabaseCommandInput}
 * @returns {@link CreateTenantDatabaseCommandOutput}
 * @see {@link CreateTenantDatabaseCommandInput} for command's `input` shape.
 * @see {@link CreateTenantDatabaseCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link TenantDatabaseAlreadyExistsFault} (client fault)
 *  <p>You attempted to either create a tenant database that already exists or
 *                 modify a tenant database to use the name of an existing tenant database.</p>
 *
 * @throws {@link TenantDatabaseQuotaExceededFault} (client fault)
 *  <p>You attempted to create more tenant databases than are permitted in your Amazon Web Services
 *             account.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class CreateTenantDatabaseCommand extends $Command
  .classBuilder<
    CreateTenantDatabaseCommandInput,
    CreateTenantDatabaseCommandOutput,
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
  .s("AmazonRDSv19", "CreateTenantDatabase", {})
  .n("RDSClient", "CreateTenantDatabaseCommand")
  .f(CreateTenantDatabaseMessageFilterSensitiveLog, CreateTenantDatabaseResultFilterSensitiveLog)
  .ser(se_CreateTenantDatabaseCommand)
  .de(de_CreateTenantDatabaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTenantDatabaseMessage;
      output: CreateTenantDatabaseResult;
    };
    sdk: {
      input: CreateTenantDatabaseCommandInput;
      output: CreateTenantDatabaseCommandOutput;
    };
  };
}
