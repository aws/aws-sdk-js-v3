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
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { ListDeviceEventsRequest, ListDeviceEventsResponse } from "../models/models_0";
import { de_ListDeviceEventsCommand, se_ListDeviceEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceEventsCommand}.
 */
export interface ListDeviceEventsCommandInput extends ListDeviceEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceEventsCommand}.
 */
export interface ListDeviceEventsCommandOutput extends ListDeviceEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Using a device ID, returns a DeviceEventsResponse object containing an
 *  array of events for the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ListDeviceEventsCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ListDeviceEventsCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // ListDeviceEventsRequest
 *   DeviceId: "STRING_VALUE", // required
 *   FromTimeStamp: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ToTimeStamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListDeviceEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceEventsResponse
 * //   Events: [ // __listOfDeviceEvent
 * //     { // DeviceEvent
 * //       Device: { // Device
 * //         Attributes: {},
 * //         DeviceId: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //       },
 * //       StdEvent: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeviceEventsCommandInput - {@link ListDeviceEventsCommandInput}
 * @returns {@link ListDeviceEventsCommandOutput}
 * @see {@link ListDeviceEventsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceEventsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link RangeNotSatisfiableException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 */
export class ListDeviceEventsCommand extends $Command<
  ListDeviceEventsCommandInput,
  ListDeviceEventsCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
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
  constructor(readonly input: ListDeviceEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeviceEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "ListDeviceEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoT1ClickDevicesService",
        operation: "ListDeviceEvents",
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
  private serialize(input: ListDeviceEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeviceEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeviceEventsCommandOutput> {
    return de_ListDeviceEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
