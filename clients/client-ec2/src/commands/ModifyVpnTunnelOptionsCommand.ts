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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyVpnTunnelOptionsRequest,
  ModifyVpnTunnelOptionsRequestFilterSensitiveLog,
  ModifyVpnTunnelOptionsResult,
  ModifyVpnTunnelOptionsResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyVpnTunnelOptionsCommand,
  serializeAws_ec2ModifyVpnTunnelOptionsCommand,
} from "../protocols/Aws_ec2";

export interface ModifyVpnTunnelOptionsCommandInput extends ModifyVpnTunnelOptionsRequest {}
export interface ModifyVpnTunnelOptionsCommandOutput extends ModifyVpnTunnelOptionsResult, __MetadataBearer {}

/**
 * <p>Modifies the options for a VPN tunnel in an Amazon Web Services Site-to-Site VPN connection. You can modify
 *             multiple options for a tunnel in a single request, but you can only modify one tunnel at
 *             a time. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html">Site-to-Site VPN tunnel options for your Site-to-Site VPN
 *                 connection</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnTunnelOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnTunnelOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnTunnelOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnTunnelOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnTunnelOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyVpnTunnelOptionsCommand extends $Command<
  ModifyVpnTunnelOptionsCommandInput,
  ModifyVpnTunnelOptionsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: ModifyVpnTunnelOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyVpnTunnelOptionsCommandInput, ModifyVpnTunnelOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpnTunnelOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpnTunnelOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpnTunnelOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpnTunnelOptionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVpnTunnelOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpnTunnelOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpnTunnelOptionsCommandOutput> {
    return deserializeAws_ec2ModifyVpnTunnelOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
