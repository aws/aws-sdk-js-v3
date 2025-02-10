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
import { DescribeDataProvidersMessage, DescribeDataProvidersResponse } from "../models/models_0";
import { de_DescribeDataProvidersCommand, se_DescribeDataProvidersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a paginated list of data providers for your account in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeDataProvidersCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeDataProvidersCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
 * //       Settings: { // DataProviderSettings Union: only one key present
 * //         RedshiftSettings: { // RedshiftDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //         },
 * //         PostgreSqlSettings: { // PostgreSqlDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //         },
 * //         MySqlSettings: { // MySqlDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
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
 * //         },
 * //         MicrosoftSqlServerSettings: { // MicrosoftSqlServerDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
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
 * //         },
 * //         IbmDb2LuwSettings: { // IbmDb2LuwDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
 * //         },
 * //         IbmDb2zOsSettings: { // IbmDb2zOsDataProviderSettings
 * //           ServerName: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           DatabaseName: "STRING_VALUE",
 * //           SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //           CertificateArn: "STRING_VALUE",
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
 * @public
 * @example Describe Data Providers
 * ```javascript
 * //
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "data-provider-identifier",
 *       "Values": [
 *         "arn:aws:dms:us-east-1:012345678901:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 *       ]
 *     }
 *   ],
 *   "Marker": "EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
 *   "MaxRecords": 20
 * };
 * const command = new DescribeDataProvidersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DataProviders": [
 *     {
 *       "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:my-target-data-provider",
 *       "DataProviderCreationTime": "2023-05-12T10:50:41.988561Z",
 *       "DataProviderName": "my-target-data-provider",
 *       "Engine": "postgres",
 *       "Settings": {
 *         "PostgreSqlSettings": {
 *           "DatabaseName": "target",
 *           "Port": 5432,
 *           "ServerName": "postrgesql.0a1b2c3d4e5f.us-east-1.rds.amazonaws.com",
 *           "SslMode": "none"
 *         }
 *       }
 *     }
 *   ],
 *   "Marker": "EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 * }
 * *\/
 * // example id: describe-data-providers-1689725897156
 * ```
 *
 */
export class DescribeDataProvidersCommand extends $Command
  .classBuilder<
    DescribeDataProvidersCommandInput,
    DescribeDataProvidersCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeDataProviders", {})
  .n("DatabaseMigrationServiceClient", "DescribeDataProvidersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataProvidersCommand)
  .de(de_DescribeDataProvidersCommand)
  .build() {
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
