// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DescribeDataProvidersMessage, DescribeDataProvidersResponse } from "../models/models_0";
import { de_DescribeDataProvidersCommand, se_DescribeDataProvidersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
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
export class DescribeDataProvidersCommand extends $Command<
  DescribeDataProvidersCommandInput,
  DescribeDataProvidersCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeDataProvidersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataProvidersCommandInput, DescribeDataProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataProvidersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeDataProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeDataProviders",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeDataProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDataProvidersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDataProvidersCommandOutput> {
    return de_DescribeDataProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
