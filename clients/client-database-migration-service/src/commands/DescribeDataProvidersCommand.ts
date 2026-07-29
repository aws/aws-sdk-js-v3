// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDataProvidersMessage, DescribeDataProvidersResponse } from "../models/models_0";
import { DescribeDataProviders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDataProvidersCommand}.
 */
export interface DescribeDataProvidersCommandInput extends DescribeDataProvidersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDataProvidersCommand}.
 */
export interface DescribeDataProvidersCommandOutput extends DescribeDataProvidersResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of data providers for your account in the current
 *          region.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:ListDataProviders</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeDataProvidersCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeDataProvidersCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeDataProvidersMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDataProvidersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataProvidersResponse
 * //   Marker: "STRING_VALUE",
 * //   DataProviders: [ // DataProviderList
 * //     { // DataProvider
 * //       DataProviderName: "STRING_VALUE",
 * //       DataProviderArn: "STRING_VALUE",
 * //       DataProviderCreationTime: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       Virtual: true || false,
 * //       Settings: { // DataProviderSettings Union: only one key present
 * //         RedshiftSettings: { // RedshiftDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           S3Path: "STRING_VALUE",
 * //           S3AccessRoleArn: "STRING_VALUE",
 * //         },
 * //         PostgreSqlSettings: { // PostgreSqlDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //           S3Path: "STRING_VALUE",
 * //           S3AccessRoleArn: "STRING_VALUE",
 * //         },
 * //         MySqlSettings: { // MySqlDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //           S3Path: "STRING_VALUE",
 * //           S3AccessRoleArn: "STRING_VALUE",
 * //         },
 * //         OracleSettings: { // OracleDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //           AsmServer: "STRING_VALUE",
 * //           SecretsManagerOracleAsmSecretId: "STRING_VALUE",
 * //           SecretsManagerOracleAsmAccessRoleArn: "STRING_VALUE",
 * //           SecretsManagerSecurityDbEncryptionSecretId: "STRING_VALUE",
 * //           SecretsManagerSecurityDbEncryptionAccessRoleArn: "STRING_VALUE",
 * //           S3Path: "STRING_VALUE",
 * //           S3AccessRoleArn: "STRING_VALUE",
 * //         },
 * //         SybaseAseSettings: { // SybaseAseDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           EncryptPassword: true || false,
 * //           CertificateArn: "STRING_VALUE",
 * //         },
 * //         MicrosoftSqlServerSettings: { // MicrosoftSqlServerDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //           S3Path: "STRING_VALUE",
 * //           S3AccessRoleArn: "STRING_VALUE",
 * //         },
 * //         DocDbSettings: { // DocDbDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //         },
 * //         MariaDbSettings: { // MariaDbDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //           S3Path: "STRING_VALUE",
 * //           S3AccessRoleArn: "STRING_VALUE",
 * //         },
 * //         IbmDb2LuwSettings: { // IbmDb2LuwDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //           EncryptionAlgorithm: Number("int"),
 * //           SecurityMechanism: Number("int"),
 * //           S3Path: "STRING_VALUE",
 * //           S3AccessRoleArn: "STRING_VALUE",
 * //         },
 * //         IbmDb2zOsSettings: { // IbmDb2zOsDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //           S3Path: "STRING_VALUE",
 * //           S3AccessRoleArn: "STRING_VALUE",
 * //         },
 * //         MongoDbSettings: { // MongoDbDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //           AuthType: "no" || "password",
 * //           AuthSource: "STRING_VALUE",
 * //           AuthMechanism: "default" || "mongodb_cr" || "scram_sha_1",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDataProvidersCommandInput - {@link DescribeDataProvidersCommandInput}
 * @returns {@link DescribeDataProvidersCommandOutput}
 * @see {@link DescribeDataProvidersCommandInput} for command's `input` shape.
 * @see {@link DescribeDataProvidersCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe data providers with a filter
 * ```javascript
 * // The following example retrieves the details of a data provider identified by its ARN.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "data-provider-identifier",
 *       Values: [
 *         "arn:aws:dms:us-east-1:111122223333:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRS"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeDataProvidersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DataProviders: [
 *     {
 *       DataProviderArn: "arn:aws:dms:us-east-1:111122223333:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *       DataProviderCreationTime: "2026-01-09T12:30:00.000000Z",
 *       DataProviderName: "example-data-provider",
 *       Description: "Example data provider for documentation",
 *       Engine: "sqlserver",
 *       Settings: {
 *         MicrosoftSqlServerSettings: {
 *           CertificateArn: "arn:aws:dms:us-east-1:111122223333:cert:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *           DatabaseName: "ExampleDatabase",
 *           Port: 1433,
 *           ServerName: "example-source-server.us-east-1.rds.amazonaws.com",
 *           SslMode: "verify-full"
 *         }
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDataProvidersCommand extends command<DescribeDataProvidersCommandInput, DescribeDataProvidersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDataProviders",
  DescribeDataProviders$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataProvidersMessage;
      output: DescribeDataProvidersResponse;
    };
    sdk: {
      input: DescribeDataProvidersCommandInput;
      output: DescribeDataProvidersCommandOutput;
    };
  };
}
