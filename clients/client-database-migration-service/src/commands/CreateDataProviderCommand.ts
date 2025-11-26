// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDataProviderMessage, CreateDataProviderResponse } from "../models/models_0";
import { CreateDataProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataProviderCommand}.
 */
export interface CreateDataProviderCommandInput extends CreateDataProviderMessage {}
/**
 * @public
 *
 * The output of {@link CreateDataProviderCommand}.
 */
export interface CreateDataProviderCommandOutput extends CreateDataProviderResponse, __MetadataBearer {}

/**
 * <p>Creates a data provider using the provided settings. A data provider stores a data store
 *          type and location information about your database. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateDataProviderCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateDataProviderCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateDataProviderMessage
 *   DataProviderName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Engine: "STRING_VALUE", // required
 *   Virtual: true || false,
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
 *     SybaseAseSettings: { // SybaseAseDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       EncryptPassword: true || false,
 *       CertificateArn: "STRING_VALUE",
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDataProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataProviderResponse
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
 * //       SybaseAseSettings: { // SybaseAseDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         EncryptPassword: true || false,
 * //         CertificateArn: "STRING_VALUE",
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
 * @param CreateDataProviderCommandInput - {@link CreateDataProviderCommandInput}
 * @returns {@link CreateDataProviderCommandOutput}
 * @see {@link CreateDataProviderCommandInput} for command's `input` shape.
 * @see {@link CreateDataProviderCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Create Data Provider
 * ```javascript
 * // Creates the data provider with the specified parameters.
 * const input = {
 *   DataProviderName: "sqlServer-dev",
 *   Description: "description",
 *   Engine: "sqlserver",
 *   Settings: {
 *     MicrosoftSqlServerSettings: {
 *       DatabaseName: "DatabaseName",
 *       Port: 11112,
 *       ServerName: "ServerName2",
 *       SslMode: "none"
 *     }
 *   },
 *   Tags: [
 *     {
 *       Key: "access",
 *       Value: "authorizedusers"
 *     }
 *   ]
 * };
 * const command = new CreateDataProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DataProvider: {
 *     DataProviderArn: "arn:aws:dms:us-east-1:012345678901:data-provider:my-target-dataprovider",
 *     DataProviderCreationTime: "2023-05-12T10:50:41.988561Z",
 *     DataProviderName: "my-target-dataprovider",
 *     Engine: "postgres",
 *     Settings: {
 *       PostgreSqlSettings: {
 *         DatabaseName: "target",
 *         Port: 5432,
 *         ServerName: "postrgesql.a1b2c3d4e5f6.us-east-1.rds.amazonaws.com",
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
export class CreateDataProviderCommand extends $Command
  .classBuilder<
    CreateDataProviderCommandInput,
    CreateDataProviderCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "CreateDataProvider", {})
  .n("DatabaseMigrationServiceClient", "CreateDataProviderCommand")
  .sc(CreateDataProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataProviderMessage;
      output: CreateDataProviderResponse;
    };
    sdk: {
      input: CreateDataProviderCommandInput;
      output: CreateDataProviderCommandOutput;
    };
  };
}
