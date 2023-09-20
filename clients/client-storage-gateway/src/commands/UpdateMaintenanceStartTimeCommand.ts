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

import { UpdateMaintenanceStartTimeInput, UpdateMaintenanceStartTimeOutput } from "../models/models_0";
import { de_UpdateMaintenanceStartTimeCommand, se_UpdateMaintenanceStartTimeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMaintenanceStartTimeCommand}.
 */
export interface UpdateMaintenanceStartTimeCommandInput extends UpdateMaintenanceStartTimeInput {}
/**
 * @public
 *
 * The output of {@link UpdateMaintenanceStartTimeCommand}.
 */
export interface UpdateMaintenanceStartTimeCommandOutput extends UpdateMaintenanceStartTimeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a gateway's weekly maintenance start time information, including day and
 *          time of the week. The maintenance time is the time in your gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateMaintenanceStartTimeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   HourOfDay: Number("int"), // required
 *   MinuteOfHour: Number("int"), // required
 *   DayOfWeek: Number("int"),
 *   DayOfMonth: Number("int"),
 * };
 * const command = new UpdateMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMaintenanceStartTimeOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMaintenanceStartTimeCommandInput - {@link UpdateMaintenanceStartTimeCommandInput}
 * @returns {@link UpdateMaintenanceStartTimeCommandOutput}
 * @see {@link UpdateMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceStartTimeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To update a gateway's maintenance start time
 * ```javascript
 * // Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is in your gateway's time zone.
 * const input = {
 *   "DayOfWeek": 2,
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "HourOfDay": 0,
 *   "MinuteOfHour": 30
 * };
 * const command = new UpdateMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-update-a-gateways-maintenance-start-time-1472152552031
 * ```
 *
 */
export class UpdateMaintenanceStartTimeCommand extends $Command<
  UpdateMaintenanceStartTimeCommandInput,
  UpdateMaintenanceStartTimeCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: UpdateMaintenanceStartTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMaintenanceStartTimeCommandInput, UpdateMaintenanceStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMaintenanceStartTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateMaintenanceStartTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateMaintenanceStartTime",
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
  private serialize(input: UpdateMaintenanceStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMaintenanceStartTimeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMaintenanceStartTimeCommandOutput> {
    return de_UpdateMaintenanceStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
