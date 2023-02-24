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
  AssociateVpcCidrBlockRequest,
  AssociateVpcCidrBlockRequestFilterSensitiveLog,
  AssociateVpcCidrBlockResult,
  AssociateVpcCidrBlockResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateVpcCidrBlockCommand,
  serializeAws_ec2AssociateVpcCidrBlockCommand,
} from "../protocols/Aws_ec2";

export interface AssociateVpcCidrBlockCommandInput extends AssociateVpcCidrBlockRequest {}
export interface AssociateVpcCidrBlockCommandOutput extends AssociateVpcCidrBlockResult, __MetadataBearer {}

/**
 * <p>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block,
 *             an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that
 *             you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>). The IPv6 CIDR block size is fixed
 *             at /56.</p>
 *          <p>You must specify one of the following in the request: an IPv4 CIDR block, an IPv6
 *             pool, or an Amazon-provided IPv6 CIDR block.</p>
 *          <p>For more information about associating CIDR blocks with your VPC and applicable
 *             restrictions, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#VPC_Sizing">VPC and subnet sizing</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateVpcCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateVpcCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateVpcCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVpcCidrBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateVpcCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateVpcCidrBlockCommand extends $Command<
  AssociateVpcCidrBlockCommandInput,
  AssociateVpcCidrBlockCommandOutput,
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

  constructor(readonly input: AssociateVpcCidrBlockCommandInput) {
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
  ): Handler<AssociateVpcCidrBlockCommandInput, AssociateVpcCidrBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateVpcCidrBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateVpcCidrBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateVpcCidrBlockRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateVpcCidrBlockResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateVpcCidrBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateVpcCidrBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateVpcCidrBlockCommandOutput> {
    return deserializeAws_ec2AssociateVpcCidrBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
