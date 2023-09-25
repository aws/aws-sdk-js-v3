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
import { CreateDataProviderMessage, CreateDataProviderResponse } from "../models/models_0";
import { de_CreateDataProviderCommand, se_CreateDataProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a data provider using the provided settings. A data provider stores
 *          a data store type and location information about your database. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateDataProviderCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateDataProviderCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateDataProviderMessage
 *   DataProviderName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Engine: "STRING_VALUE", // required
 *   Settings: { // DataProviderSettings Union: only one key present
 *     RedshiftSettings: { // RedshiftDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *     },
 *     PostgreSqlSettings: { // PostgreSqlDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
 *     },
 *     MySqlSettings: { // MySqlDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
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
 *     },
 *     MicrosoftSqlServerSettings: { // MicrosoftSqlServerDataProviderSettings
 *       ServerName: "STRING_VALUE",
 *       Port: Number("int"),
 *       DatabaseName: "STRING_VALUE",
 *       SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *       CertificateArn: "STRING_VALUE",
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
 * //     Settings: { // DataProviderSettings Union: only one key present
 * //       RedshiftSettings: { // RedshiftDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //       },
 * //       PostgreSqlSettings: { // PostgreSqlDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
 * //       },
 * //       MySqlSettings: { // MySqlDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
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
 * //       },
 * //       MicrosoftSqlServerSettings: { // MicrosoftSqlServerDataProviderSettings
 * //         ServerName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         DatabaseName: "STRING_VALUE",
 * //         SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //         CertificateArn: "STRING_VALUE",
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
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Create Data Provider
 * ```javascript
 * // Creates the data provider with the specified parameters.
 * const input = {
 *   "DataProviderName": "sqlServer-dev",
 *   "Description": "description",
 *   "Engine": "sqlserver",
 *   "Settings": {
 *     "MicrosoftSqlServerSettings": {
 *       "DatabaseName": "DatabaseName",
 *       "Port": 11112,
 *       "ServerName": "ServerName2",
 *       "SslMode": "none"
 *     }
 *   },
 *   "Tags": [
 *     {
 *       "Key": "access",
 *       "Value": "authorizedusers"
 *     }
 *   ]
 * };
 * const command = new CreateDataProviderCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DataProvider": {
 *     "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:my-target-dataprovider",
 *     "DataProviderCreationTime": "2023-05-12T10:50:41.988561Z",
 *     "DataProviderName": "my-target-dataprovider",
 *     "Engine": "postgres",
 *     "Settings": {
 *       "PostgreSqlSettings": {
 *         "DatabaseName": "target",
 *         "Port": 5432,
 *         "ServerName": "postrgesql.a1b2c3d4e5f6.us-east-1.rds.amazonaws.com",
 *         "SslMode": "none"
 *       }
 *     }
 *   }
 * }
 * *\/
 * // example id: create-data-provider-1689726511871
 * ```
 *
 */
export class CreateDataProviderCommand extends $Command<
  CreateDataProviderCommandInput,
  CreateDataProviderCommandOutput,
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
  constructor(readonly input: CreateDataProviderCommandInput) {
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
  ): Handler<CreateDataProviderCommandInput, CreateDataProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateDataProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "CreateDataProvider",
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
  private serialize(input: CreateDataProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataProviderCommandOutput> {
    return de_CreateDataProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
