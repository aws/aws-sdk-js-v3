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
  AttachVpnGatewayRequest,
  AttachVpnGatewayRequestFilterSensitiveLog,
  AttachVpnGatewayResult,
  AttachVpnGatewayResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AttachVpnGatewayCommand,
  serializeAws_ec2AttachVpnGatewayCommand,
} from "../protocols/Aws_ec2";

export interface AttachVpnGatewayCommandInput extends AttachVpnGatewayRequest {}
export interface AttachVpnGatewayCommandOutput extends AttachVpnGatewayResult, __MetadataBearer {}

/**
 * <p>Attaches a virtual private gateway to a VPC. You can attach one virtual private
 *             gateway to one VPC at a time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachVpnGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link AttachVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AttachVpnGatewayCommand extends $Command<
  AttachVpnGatewayCommandInput,
  AttachVpnGatewayCommandOutput,
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

  constructor(readonly input: AttachVpnGatewayCommandInput) {
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
  ): Handler<AttachVpnGatewayCommandInput, AttachVpnGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachVpnGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AttachVpnGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachVpnGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AttachVpnGatewayResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachVpnGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AttachVpnGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachVpnGatewayCommandOutput> {
    return deserializeAws_ec2AttachVpnGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
