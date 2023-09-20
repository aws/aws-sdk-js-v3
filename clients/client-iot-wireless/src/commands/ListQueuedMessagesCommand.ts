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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListQueuedMessagesRequest, ListQueuedMessagesResponse } from "../models/models_0";
import { de_ListQueuedMessagesCommand, se_ListQueuedMessagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListQueuedMessagesCommand}.
 */
export interface ListQueuedMessagesCommandInput extends ListQueuedMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListQueuedMessagesCommand}.
 */
export interface ListQueuedMessagesCommandOutput extends ListQueuedMessagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List queued messages in the downlink queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListQueuedMessagesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListQueuedMessagesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListQueuedMessagesRequest
 *   Id: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WirelessDeviceType: "Sidewalk" || "LoRaWAN",
 * };
 * const command = new ListQueuedMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueuedMessagesResponse
 * //   NextToken: "STRING_VALUE",
 * //   DownlinkQueueMessagesList: [ // DownlinkQueueMessagesList
 * //     { // DownlinkQueueMessage
 * //       MessageId: "STRING_VALUE",
 * //       TransmitMode: Number("int"),
 * //       ReceivedAt: "STRING_VALUE",
 * //       LoRaWAN: { // LoRaWANSendDataToDevice
 * //         FPort: Number("int"),
 * //         ParticipatingGateways: { // ParticipatingGateways
 * //           DownlinkMode: "SEQUENTIAL" || "CONCURRENT" || "USING_UPLINK_GATEWAY", // required
 * //           GatewayList: [ // GatewayList // required
 * //             { // GatewayListItem
 * //               GatewayId: "STRING_VALUE", // required
 * //               DownlinkFrequency: Number("int"), // required
 * //             },
 * //           ],
 * //           TransmissionInterval: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListQueuedMessagesCommandInput - {@link ListQueuedMessagesCommandInput}
 * @returns {@link ListQueuedMessagesCommandOutput}
 * @see {@link ListQueuedMessagesCommandInput} for command's `input` shape.
 * @see {@link ListQueuedMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class ListQueuedMessagesCommand extends $Command<
  ListQueuedMessagesCommandInput,
  ListQueuedMessagesCommandOutput,
  IoTWirelessClientResolvedConfig
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
  constructor(readonly input: ListQueuedMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQueuedMessagesCommandInput, ListQueuedMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQueuedMessagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListQueuedMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "ListQueuedMessages",
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
  private serialize(input: ListQueuedMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListQueuedMessagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueuedMessagesCommandOutput> {
    return de_ListQueuedMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
