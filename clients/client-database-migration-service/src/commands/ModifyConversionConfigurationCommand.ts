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
import { ModifyConversionConfigurationMessage, ModifyConversionConfigurationResponse } from "../models/models_0";
import {
  de_ModifyConversionConfigurationCommand,
  se_ModifyConversionConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyConversionConfigurationCommand}.
 */
export interface ModifyConversionConfigurationCommandInput extends ModifyConversionConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyConversionConfigurationCommand}.
 */
export interface ModifyConversionConfigurationCommandOutput
  extends ModifyConversionConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified schema conversion configuration using the provided parameters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyConversionConfigurationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyConversionConfigurationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyConversionConfigurationMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   ConversionConfiguration: "STRING_VALUE", // required
 * };
 * const command = new ModifyConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyConversionConfigurationResponse
 * //   MigrationProjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyConversionConfigurationCommandInput - {@link ModifyConversionConfigurationCommandInput}
 * @returns {@link ModifyConversionConfigurationCommandOutput}
 * @see {@link ModifyConversionConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyConversionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
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
 * @example Modify Conversion Configuration
 * ```javascript
 * // Modifies the specified schema conversion configuration using the provided parameters.
 * const input = {
 *   "ConversionConfiguration": "{\"Common project settings\":{\"ShowSeverityLevelInSql\":\"CRITICAL\"},\"ORACLE_TO_POSTGRESQL\" : {\"ToTimeZone\":false,\"LastDayBuiltinFunctionOracle\":false,   \"NextDayBuiltinFunctionOracle\":false,\"ConvertProceduresToFunction\":false,\"NvlBuiltinFunctionOracle\":false,\"DbmsAssertBuiltinFunctionOracle\":false}}",
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new ModifyConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * }
 * *\/
 * // example id: modify-conversion-configuration-1689720529855
 * ```
 *
 */
export class ModifyConversionConfigurationCommand extends $Command<
  ModifyConversionConfigurationCommandInput,
  ModifyConversionConfigurationCommandOutput,
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
  constructor(readonly input: ModifyConversionConfigurationCommandInput) {
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
  ): Handler<ModifyConversionConfigurationCommandInput, ModifyConversionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyConversionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyConversionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "ModifyConversionConfiguration",
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
  private serialize(input: ModifyConversionConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyConversionConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyConversionConfigurationCommandOutput> {
    return de_ModifyConversionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
