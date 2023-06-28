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

import { DescribeMaintenanceStartTimeInput, DescribeMaintenanceStartTimeOutput } from "../models/models_0";
import {
  de_DescribeMaintenanceStartTimeCommand,
  se_DescribeMaintenanceStartTimeCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceStartTimeCommand}.
 */
export interface DescribeMaintenanceStartTimeCommandInput extends DescribeMaintenanceStartTimeInput {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceStartTimeCommand}.
 */
export interface DescribeMaintenanceStartTimeCommandOutput
  extends DescribeMaintenanceStartTimeOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns your gateway's weekly maintenance start time including the day and time of
 *          the week. Note that values are in terms of the gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeMaintenanceStartTimeInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceStartTimeOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   HourOfDay: Number("int"),
 * //   MinuteOfHour: Number("int"),
 * //   DayOfWeek: Number("int"),
 * //   DayOfMonth: Number("int"),
 * //   Timezone: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceStartTimeCommandInput - {@link DescribeMaintenanceStartTimeCommandInput}
 * @returns {@link DescribeMaintenanceStartTimeCommandOutput}
 * @see {@link DescribeMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceStartTimeCommandOutput} for command's `response` shape.
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
 * @example To describe gateway's maintenance start time
 * ```javascript
 * // Returns your gateway's weekly maintenance start time including the day and time of the week.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DayOfWeek": 2,
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "HourOfDay": 15,
 *   "MinuteOfHour": 35,
 *   "Timezone": "GMT+7:00"
 * }
 * *\/
 * // example id: to-describe-gateways-maintenance-start-time-1471470727387
 * ```
 *
 */
export class DescribeMaintenanceStartTimeCommand extends $Command<
  DescribeMaintenanceStartTimeCommandInput,
  DescribeMaintenanceStartTimeCommandOutput,
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
  constructor(readonly input: DescribeMaintenanceStartTimeCommandInput) {
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
  ): Handler<DescribeMaintenanceStartTimeCommandInput, DescribeMaintenanceStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMaintenanceStartTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeMaintenanceStartTimeCommand";
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
  private serialize(input: DescribeMaintenanceStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMaintenanceStartTimeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceStartTimeCommandOutput> {
    return de_DescribeMaintenanceStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
