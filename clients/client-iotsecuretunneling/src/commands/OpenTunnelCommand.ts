// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import {
  OpenTunnelRequest,
  OpenTunnelRequestFilterSensitiveLog,
  OpenTunnelResponse,
  OpenTunnelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1OpenTunnelCommand,
  serializeAws_json1_1OpenTunnelCommand,
} from "../protocols/Aws_json1_1";

export interface OpenTunnelCommandInput extends OpenTunnelRequest {}
export interface OpenTunnelCommandOutput extends OpenTunnelResponse, __MetadataBearer {}

/**
 * <p>Creates a new tunnel, and returns two client access tokens for clients to use to
 * 			connect to the IoT Secure Tunneling proxy server.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, OpenTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, OpenTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new OpenTunnelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OpenTunnelCommandInput} for command's `input` shape.
 * @see {@link OpenTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 */
export class OpenTunnelCommand extends $Command<
  OpenTunnelCommandInput,
  OpenTunnelCommandOutput,
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

  constructor(readonly input: OpenTunnelCommandInput) {
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
  ): Handler<OpenTunnelCommandInput, OpenTunnelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, OpenTunnelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "OpenTunnelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: OpenTunnelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: OpenTunnelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: OpenTunnelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1OpenTunnelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<OpenTunnelCommandOutput> {
    return deserializeAws_json1_1OpenTunnelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
