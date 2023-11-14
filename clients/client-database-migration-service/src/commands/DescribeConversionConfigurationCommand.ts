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
import { DescribeConversionConfigurationMessage, DescribeConversionConfigurationResponse } from "../models/models_0";
import {
  de_DescribeConversionConfigurationCommand,
  se_DescribeConversionConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConversionConfigurationCommand}.
 */
export interface DescribeConversionConfigurationCommandInput extends DescribeConversionConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link DescribeConversionConfigurationCommand}.
 */
export interface DescribeConversionConfigurationCommandOutput
  extends DescribeConversionConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns configuration parameters for a schema conversion project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeConversionConfigurationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeConversionConfigurationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeConversionConfigurationMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConversionConfigurationResponse
 * //   MigrationProjectIdentifier: "STRING_VALUE",
 * //   ConversionConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConversionConfigurationCommandInput - {@link DescribeConversionConfigurationCommandInput}
 * @returns {@link DescribeConversionConfigurationCommandOutput}
 * @see {@link DescribeConversionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeConversionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe Conversion Configuration
 * ```javascript
 * // Returns configuration parameters for a schema conversion project.
 * const input = {
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 * };
 * const command = new DescribeConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ConversionConfiguration": "{\"Common project settings\":{\"ShowSeverityLevelInSql\":\"CRITICAL\"},\"ORACLE_TO_POSTGRESQL\" : {\"ToTimeZone\":false,\"LastDayBuiltinFunctionOracle\":false,   \"NextDayBuiltinFunctionOracle\":false,\"ConvertProceduresToFunction\":false,\"NvlBuiltinFunctionOracle\":false,\"DbmsAssertBuiltinFunctionOracle\":false}}",
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * }
 * *\/
 * // example id: describe-conversion-configuration-1689717690907
 * ```
 *
 */
export class DescribeConversionConfigurationCommand extends $Command<
  DescribeConversionConfigurationCommandInput,
  DescribeConversionConfigurationCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
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
  constructor(readonly input: DescribeConversionConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConversionConfigurationCommandInput, DescribeConversionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConversionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeConversionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeConversionConfiguration",
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
  private serialize(
    input: DescribeConversionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeConversionConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConversionConfigurationCommandOutput> {
    return de_DescribeConversionConfigurationCommand(output, context);
  }
}
