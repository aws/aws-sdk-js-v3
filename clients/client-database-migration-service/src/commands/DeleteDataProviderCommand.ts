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
import { DeleteDataProviderMessage, DeleteDataProviderResponse } from "../models/models_0";
import { de_DeleteDataProviderCommand, se_DeleteDataProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataProviderCommand}.
 */
export interface DeleteDataProviderCommandInput extends DeleteDataProviderMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDataProviderCommand}.
 */
export interface DeleteDataProviderCommandOutput extends DeleteDataProviderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified data provider.</p>
 *          <note>
 *             <p>All migration projects associated with the data provider must be deleted or modified
 *             before you can delete the data provider.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteDataProviderCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteDataProviderCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteDataProviderMessage
 *   DataProviderIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataProviderCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataProviderResponse
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
 * @param DeleteDataProviderCommandInput - {@link DeleteDataProviderCommandInput}
 * @returns {@link DeleteDataProviderCommandOutput}
 * @see {@link DeleteDataProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteDataProviderCommandOutput} for command's `response` shape.
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
 * @example Delete Data Provider
 * ```javascript
 * // Deletes the specified data provider.
 * const input = {
 *   "DataProviderIdentifier": "arn:aws:dms:us-east-1:012345678901:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 * };
 * const command = new DeleteDataProviderCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DataProvider": {
 *     "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:my-target-data-provider",
 *     "DataProviderCreationTime": "2023-05-12T10:50:41.988561Z",
 *     "DataProviderName": "my-target-data-provider",
 *     "Engine": "postgres",
 *     "Settings": {
 *       "PostgreSqlSettings": {
 *         "DatabaseName": "target",
 *         "Port": 5432,
 *         "ServerName": "postrgesql.0a1b2c3d4e5f.us-east-1.rds.amazonaws.com",
 *         "SslMode": "none"
 *       }
 *     }
 *   }
 * }
 * *\/
 * // example id: delete-data-provider-1689724476356
 * ```
 *
 */
export class DeleteDataProviderCommand extends $Command<
  DeleteDataProviderCommandInput,
  DeleteDataProviderCommandOutput,
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
  constructor(readonly input: DeleteDataProviderCommandInput) {
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
  ): Handler<DeleteDataProviderCommandInput, DeleteDataProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDataProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteDataProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DeleteDataProvider",
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
  private serialize(input: DeleteDataProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDataProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDataProviderCommandOutput> {
    return de_DeleteDataProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
