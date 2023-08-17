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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { PutMaintenanceStartTimeInput, PutMaintenanceStartTimeOutput } from "../models/models_0";
import { de_PutMaintenanceStartTimeCommand, se_PutMaintenanceStartTimeCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutMaintenanceStartTimeCommand}.
 */
export interface PutMaintenanceStartTimeCommandInput extends PutMaintenanceStartTimeInput {}
/**
 * @public
 *
 * The output of {@link PutMaintenanceStartTimeCommand}.
 */
export interface PutMaintenanceStartTimeCommandOutput extends PutMaintenanceStartTimeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Set the maintenance start time for a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, PutMaintenanceStartTimeCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, PutMaintenanceStartTimeCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // PutMaintenanceStartTimeInput
 *   GatewayArn: "STRING_VALUE", // required
 *   HourOfDay: Number("int"), // required
 *   MinuteOfHour: Number("int"), // required
 *   DayOfWeek: Number("int"),
 *   DayOfMonth: Number("int"),
 * };
 * const command = new PutMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * // { // PutMaintenanceStartTimeOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutMaintenanceStartTimeCommandInput - {@link PutMaintenanceStartTimeCommandInput}
 * @returns {@link PutMaintenanceStartTimeCommandOutput}
 * @see {@link PutMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link PutMaintenanceStartTimeCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The operation cannot proceed because it is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 */
export class PutMaintenanceStartTimeCommand extends $Command<
  PutMaintenanceStartTimeCommandInput,
  PutMaintenanceStartTimeCommandOutput,
  BackupGatewayClientResolvedConfig
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
  constructor(readonly input: PutMaintenanceStartTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutMaintenanceStartTimeCommandInput, PutMaintenanceStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutMaintenanceStartTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "PutMaintenanceStartTimeCommand";
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
  private serialize(input: PutMaintenanceStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutMaintenanceStartTimeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMaintenanceStartTimeCommandOutput> {
    return de_PutMaintenanceStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
