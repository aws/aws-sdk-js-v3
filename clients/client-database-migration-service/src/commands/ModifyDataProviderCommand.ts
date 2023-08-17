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
} from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ModifyDataProviderMessage, ModifyDataProviderResponse } from "../models/models_0";
import { de_ModifyDataProviderCommand, se_ModifyDataProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Modifies the specified data provider using the provided settings.</p>
 *          <note>
 *             <p>You must remove the data provider from all migration projects before you can modify it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyDataProviderCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyDataProviderCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyDataProviderMessage
 *   DataProviderIdentifier: "STRING_VALUE", // required
 *   DataProviderName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   ExactSettings: true || false,
 *   Settings: { // DataProviderSettings Union: only one key present
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
 * //     Settings: { // DataProviderSettings Union: only one key present
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
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class ModifyDataProviderCommand extends $Command<
  ModifyDataProviderCommandInput,
  ModifyDataProviderCommandOutput,
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
  constructor(readonly input: ModifyDataProviderCommandInput) {
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
  ): Handler<ModifyDataProviderCommandInput, ModifyDataProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDataProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyDataProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ModifyDataProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDataProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDataProviderCommandOutput> {
    return de_ModifyDataProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
