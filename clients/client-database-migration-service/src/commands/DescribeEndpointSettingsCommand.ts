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
import { DescribeEndpointSettingsMessage, DescribeEndpointSettingsResponse } from "../models/models_0";
import { de_DescribeEndpointSettingsCommand, se_DescribeEndpointSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointSettingsCommand}.
 */
export interface DescribeEndpointSettingsCommandInput extends DescribeEndpointSettingsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointSettingsCommand}.
 */
export interface DescribeEndpointSettingsCommandOutput extends DescribeEndpointSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the possible endpoint settings available
 *          when you create an endpoint for a specific database engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEndpointSettingsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEndpointSettingsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeEndpointSettingsMessage
 *   EngineName: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEndpointSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointSettingsResponse
 * //   Marker: "STRING_VALUE",
 * //   EndpointSettings: [ // EndpointSettingsList
 * //     { // EndpointSetting
 * //       Name: "STRING_VALUE",
 * //       Type: "string" || "boolean" || "integer" || "enum",
 * //       EnumValues: [ // EndpointSettingEnumValues
 * //         "STRING_VALUE",
 * //       ],
 * //       Sensitive: true || false,
 * //       Units: "STRING_VALUE",
 * //       Applicability: "STRING_VALUE",
 * //       IntValueMin: Number("int"),
 * //       IntValueMax: Number("int"),
 * //       DefaultValue: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEndpointSettingsCommandInput - {@link DescribeEndpointSettingsCommandInput}
 * @returns {@link DescribeEndpointSettingsCommandOutput}
 * @see {@link DescribeEndpointSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointSettingsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeEndpointSettingsCommand extends $Command<
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput,
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
  constructor(readonly input: DescribeEndpointSettingsCommandInput) {
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
  ): Handler<DescribeEndpointSettingsCommandInput, DescribeEndpointSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEndpointSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeEndpointSettingsCommand";
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
  private serialize(input: DescribeEndpointSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEndpointSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEndpointSettingsCommandOutput> {
    return de_DescribeEndpointSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
