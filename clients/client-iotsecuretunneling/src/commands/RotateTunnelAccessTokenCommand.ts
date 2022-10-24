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
  RotateTunnelAccessTokenRequest,
  RotateTunnelAccessTokenRequestFilterSensitiveLog,
  RotateTunnelAccessTokenResponse,
  RotateTunnelAccessTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RotateTunnelAccessTokenCommand,
  serializeAws_json1_1RotateTunnelAccessTokenCommand,
} from "../protocols/Aws_json1_1";

export interface RotateTunnelAccessTokenCommandInput extends RotateTunnelAccessTokenRequest {}
export interface RotateTunnelAccessTokenCommandOutput extends RotateTunnelAccessTokenResponse, __MetadataBearer {}

/**
 * <p>Revokes the current client access token (CAT) and returns new CAT for clients to
 * 			use when reconnecting to secure tunneling to access the same tunnel.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p>
 * 		       <note>
 * 			         <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel
 * 				duration is 12 hours and the tunnel has already been open for 4 hours. When you
 * 				rotate the access tokens, the new tokens that are generated can only be used for the
 * 				remaining 8 hours.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, RotateTunnelAccessTokenCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, RotateTunnelAccessTokenCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new RotateTunnelAccessTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateTunnelAccessTokenCommandInput} for command's `input` shape.
 * @see {@link RotateTunnelAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 */
export class RotateTunnelAccessTokenCommand extends $Command<
  RotateTunnelAccessTokenCommandInput,
  RotateTunnelAccessTokenCommandOutput,
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

  constructor(readonly input: RotateTunnelAccessTokenCommandInput) {
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
  ): Handler<RotateTunnelAccessTokenCommandInput, RotateTunnelAccessTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RotateTunnelAccessTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "RotateTunnelAccessTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RotateTunnelAccessTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RotateTunnelAccessTokenResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RotateTunnelAccessTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RotateTunnelAccessTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RotateTunnelAccessTokenCommandOutput> {
    return deserializeAws_json1_1RotateTunnelAccessTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
