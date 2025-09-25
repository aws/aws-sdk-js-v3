// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyDataProviderMessage, ModifyDataProviderResponse } from "../models/models_1";
import { ModifyDataProvider } from "../schemas/schemas_3_Data";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDataProviderCommand}.
 */
export interface ModifyDataProviderCommandInput extends ModifyDataProviderMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDataProviderCommand}.
 */
export interface ModifyDataProviderCommandOutput extends ModifyDataProviderResponse, __MetadataBearer {}

/**
 * <p>Modifies the specified data provider using the provided settings.</p>
 *          <note>
 *             <p>You must remove the data provider from all migration projects before you can modify
 *             it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyDataProviderCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyDataProviderCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyDataProviderMessage
 *   DataProviderIdentifier: "STRING_VALUE", // required
 *   DataProviderName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   Virtual: true || false,
 *   ExactSettings: true || false,
 *   Settings: { // DataProviderSettings Union: only one key present
 *     RedshiftSettings: { // RedshiftDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       S3Path: "STRING_VALUE",
 *       S3AccessRoleArn: "STRING_VALUE",
 *     },
 *     PostgreSqlSettings: { // PostgreSqlDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *       S3Path: "STRING_VALUE",
 *       S3AccessRoleArn: "STRING_VALUE",
 *     },
 *     MySqlSettings: { // MySqlDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *       S3Path: "STRING_VALUE",
 *       S3AccessRoleArn: "STRING_VALUE",
 *     },
 *     OracleSettings: { // OracleDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *       AsmServer: "STRING_VALUE",
 *       SecretsManagerOracleAsmSecretId: "STRING_VALUE",
 *       SecretsManagerOracleAsmAccessRoleArn: "STRING_VALUE",
 *       SecretsManagerSecurityDbEncryptionSecretId: "STRING_VALUE",
 *       SecretsManagerSecurityDbEncryptionAccessRoleArn: "STRING_VALUE",
 *       S3Path: "STRING_VALUE",
 *       S3AccessRoleArn: "STRING_VALUE",
 *     },
 *     MicrosoftSqlServerSettings: { // MicrosoftSqlServerDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *       S3Path: "STRING_VALUE",
 *       S3AccessRoleArn: "STRING_VALUE",
 *     },
 *     DocDbSettings: { // DocDbDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *     },
 *     MariaDbSettings: { // MariaDbDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *       S3Path: "STRING_VALUE",
 *       S3AccessRoleArn: "STRING_VALUE",
 *     },
 *     IbmDb2LuwSettings: { // IbmDb2LuwDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *       S3Path: "STRING_VALUE",
 *       S3AccessRoleArn: "STRING_VALUE",
 *     },
 *     IbmDb2zOsSettings: { // IbmDb2zOsDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *       S3Path: "STRING_VALUE",
 *       S3AccessRoleArn: "STRING_VALUE",
 *     },
 *     MongoDbSettings: { // MongoDbDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *       AuthType: "no" || "password",
 *       AuthSource: "STRING_VALUE",
 *       AuthMechanism: "default" || "mongodb_cr" || "scram_sha_1",
 *     },
 *   },
 * };
 * const command = new ModifyDataProviderCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDataProviderResponse
 * //   DataProvider: { // DataProvider
 * //     DataProviderName: "STRING_VALUE",
 * //     DataProviderArn: "STRING_VALUE",
 * //     DataProviderCreationTime: new Date("TIMESTAMP"),
 * //     Description: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     Virtual: true || false,
 * //     Settings: { // DataProviderSettings Union: only one key present
 * //       RedshiftSettings: { // RedshiftDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         S3Path: "STRING_VALUE",
 * //         S3AccessRoleArn: "STRING_VALUE",
 * //       },
 * //       PostgreSqlSettings: { // PostgreSqlDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //         S3Path: "STRING_VALUE",
 * //         S3AccessRoleArn: "STRING_VALUE",
 * //       },
 * //       MySqlSettings: { // MySqlDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //         S3Path: "STRING_VALUE",
 * //         S3AccessRoleArn: "STRING_VALUE",
 * //       },
 * //       OracleSettings: { // OracleDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //         AsmServer: "STRING_VALUE",
 * //         SecretsManagerOracleAsmSecretId: "STRING_VALUE",
 * //         SecretsManagerOracleAsmAccessRoleArn: "STRING_VALUE",
 * //         SecretsManagerSecurityDbEncryptionSecretId: "STRING_VALUE",
 * //         SecretsManagerSecurityDbEncryptionAccessRoleArn: "STRING_VALUE",
 * //         S3Path: "STRING_VALUE",
 * //         S3AccessRoleArn: "STRING_VALUE",
 * //       },
 * //       MicrosoftSqlServerSettings: { // MicrosoftSqlServerDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //         S3Path: "STRING_VALUE",
 * //         S3AccessRoleArn: "STRING_VALUE",
 * //       },
 * //       DocDbSettings: { // DocDbDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //       },
 * //       MariaDbSettings: { // MariaDbDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //         S3Path: "STRING_VALUE",
 * //         S3AccessRoleArn: "STRING_VALUE",
 * //       },
 * //       IbmDb2LuwSettings: { // IbmDb2LuwDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //         S3Path: "STRING_VALUE",
 * //         S3AccessRoleArn: "STRING_VALUE",
 * //       },
 * //       IbmDb2zOsSettings: { // IbmDb2zOsDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //         S3Path: "STRING_VALUE",
 * //         S3AccessRoleArn: "STRING_VALUE",
 * //       },
 * //       MongoDbSettings: { // MongoDbDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //         AuthType: "no" || "password",
 * //         AuthSource: "STRING_VALUE",
 * //         AuthMechanism: "default" || "mongodb_cr" || "scram_sha_1",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDataProviderCommandInput - {@link ModifyDataProviderCommandInput}
 * @returns {@link ModifyDataProviderCommandOutput}
 * @see {@link ModifyDataProviderCommandInput} for command's `input` shape.
 * @see {@link ModifyDataProviderCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
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
 * @example Modify Data Provider
 * ```javascript
 * // Modifies the specified data provider using the provided settings.
 * const input = {
 *   DataProviderIdentifier: "arn:aws:dms:us-east-1:012345678901:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
 *   DataProviderName: "new-name",
 *   Description: "description",
 *   Engine: "sqlserver",
 *   Settings: {
 *     MicrosoftSqlServerSettings: {
 *       DatabaseName: "DatabaseName",
 *       Port: 11112,
 *       ServerName: "ServerName2",
 *       SslMode: "none"
 *     }
 *   }
 * };
 * const command = new ModifyDataProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DataProvider: {
 *     DataProviderArn: "arn:aws:dms:us-east-1:012345678901:data-provider:my-target-data-provider",
 *     DataProviderCreationTime: "2023-05-12T10:50:41.988561Z",
 *     DataProviderName: "my-target-data-provider",
 *     Engine: "postgres",
 *     Settings: {
 *       PostgreSqlSettings: {
 *         DatabaseName: "target",
 *         Port: 5432,
 *         ServerName: "postrgesql.0a1b2c3d4e5f.us-east-1.rds.amazonaws.com",
 *         SslMode: "none"
 *       }
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyDataProviderCommand extends $Command
  .classBuilder<
    ModifyDataProviderCommandInput,
    ModifyDataProviderCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "ModifyDataProvider", {})
  .n("DatabaseMigrationServiceClient", "ModifyDataProviderCommand")
  .sc(ModifyDataProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDataProviderMessage;
      output: ModifyDataProviderResponse;
    };
    sdk: {
      input: ModifyDataProviderCommandInput;
      output: ModifyDataProviderCommandOutput;
    };
  };
}
