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
  AssociateClientVpnTargetNetworkRequest,
  AssociateClientVpnTargetNetworkRequestFilterSensitiveLog,
  AssociateClientVpnTargetNetworkResult,
  AssociateClientVpnTargetNetworkResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateClientVpnTargetNetworkCommand,
  serializeAws_ec2AssociateClientVpnTargetNetworkCommand,
} from "../protocols/Aws_ec2";

export interface AssociateClientVpnTargetNetworkCommandInput extends AssociateClientVpnTargetNetworkRequest {}
export interface AssociateClientVpnTargetNetworkCommandOutput
  extends AssociateClientVpnTargetNetworkResult,
    __MetadataBearer {}

/**
 * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p>
 *          <p>If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (<a>ModifyClientVpnEndpoint</a>) and change the VPC that's associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link AssociateClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateClientVpnTargetNetworkCommand extends $Command<
  AssociateClientVpnTargetNetworkCommandInput,
  AssociateClientVpnTargetNetworkCommandOutput,
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

  constructor(readonly input: AssociateClientVpnTargetNetworkCommandInput) {
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
  ): Handler<AssociateClientVpnTargetNetworkCommandInput, AssociateClientVpnTargetNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateClientVpnTargetNetworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateClientVpnTargetNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateClientVpnTargetNetworkRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateClientVpnTargetNetworkResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateClientVpnTargetNetworkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateClientVpnTargetNetworkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateClientVpnTargetNetworkCommandOutput> {
    return deserializeAws_ec2AssociateClientVpnTargetNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
