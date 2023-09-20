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
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import { CloseTunnelRequest, CloseTunnelResponse } from "../models/models_0";
import { de_CloseTunnelCommand, se_CloseTunnelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CloseTunnelCommand}.
 */
export interface CloseTunnelCommandInput extends CloseTunnelRequest {}
/**
 * @public
 *
 * The output of {@link CloseTunnelCommand}.
 */
export interface CloseTunnelCommandOutput extends CloseTunnelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code>
 * 			request is received, we close the WebSocket connections between the client and proxy
 * 			server so no data can be transmitted.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, CloseTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, CloseTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const input = { // CloseTunnelRequest
 *   tunnelId: "STRING_VALUE", // required
 *   delete: true || false,
 * };
 * const command = new CloseTunnelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CloseTunnelCommandInput - {@link CloseTunnelCommandInput}
 * @returns {@link CloseTunnelCommandOutput}
 * @see {@link CloseTunnelCommandInput} for command's `input` shape.
 * @see {@link CloseTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when an operation is attempted on a resource that does not exist.</p>
 *
 * @throws {@link IoTSecureTunnelingServiceException}
 * <p>Base exception class for all service exceptions from IoTSecureTunneling service.</p>
 *
 */
export class CloseTunnelCommand extends $Command<
  CloseTunnelCommandInput,
  CloseTunnelCommandOutput,
  IoTSecureTunnelingClientResolvedConfig
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
  constructor(readonly input: CloseTunnelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSecureTunnelingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CloseTunnelCommandInput, CloseTunnelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CloseTunnelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "CloseTunnelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTSecuredTunneling",
        operation: "CloseTunnel",
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
  private serialize(input: CloseTunnelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CloseTunnelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloseTunnelCommandOutput> {
    return de_CloseTunnelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
