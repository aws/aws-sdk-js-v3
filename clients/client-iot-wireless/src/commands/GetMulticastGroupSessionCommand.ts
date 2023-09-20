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
import { GetMulticastGroupSessionRequest, GetMulticastGroupSessionResponse } from "../models/models_0";
import { de_GetMulticastGroupSessionCommand, se_GetMulticastGroupSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMulticastGroupSessionCommand}.
 */
export interface GetMulticastGroupSessionCommandInput extends GetMulticastGroupSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetMulticastGroupSessionCommand}.
 */
export interface GetMulticastGroupSessionCommandOutput extends GetMulticastGroupSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a multicast group session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetMulticastGroupSessionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetMulticastGroupSessionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetMulticastGroupSessionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetMulticastGroupSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetMulticastGroupSessionResponse
 * //   LoRaWAN: { // LoRaWANMulticastSession
 * //     DlDr: Number("int"),
 * //     DlFreq: Number("int"),
 * //     SessionStartTime: new Date("TIMESTAMP"),
 * //     SessionTimeout: Number("int"),
 * //     PingSlotPeriod: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMulticastGroupSessionCommandInput - {@link GetMulticastGroupSessionCommandInput}
 * @returns {@link GetMulticastGroupSessionCommandOutput}
 * @see {@link GetMulticastGroupSessionCommandInput} for command's `input` shape.
 * @see {@link GetMulticastGroupSessionCommandOutput} for command's `response` shape.
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
export class GetMulticastGroupSessionCommand extends $Command<
  GetMulticastGroupSessionCommandInput,
  GetMulticastGroupSessionCommandOutput,
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
  constructor(readonly input: GetMulticastGroupSessionCommandInput) {
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
  ): Handler<GetMulticastGroupSessionCommandInput, GetMulticastGroupSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMulticastGroupSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetMulticastGroupSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetMulticastGroupSession",
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
  private serialize(input: GetMulticastGroupSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMulticastGroupSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMulticastGroupSessionCommandOutput> {
    return de_GetMulticastGroupSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
