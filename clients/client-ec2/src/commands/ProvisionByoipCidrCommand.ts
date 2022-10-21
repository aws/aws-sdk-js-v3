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
  ProvisionByoipCidrRequest,
  ProvisionByoipCidrRequestFilterSensitiveLog,
  ProvisionByoipCidrResult,
  ProvisionByoipCidrResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ProvisionByoipCidrCommand,
  serializeAws_ec2ProvisionByoipCidrCommand,
} from "../protocols/Aws_ec2";

export interface ProvisionByoipCidrCommandInput extends ProvisionByoipCidrRequest {}
export interface ProvisionByoipCidrCommandOutput extends ProvisionByoipCidrResult, __MetadataBearer {}

/**
 * <p>Provisions an IPv4 or IPv6 address range for use with your Amazon Web Services resources through bring your own IP
 *          addresses (BYOIP) and creates a corresponding address pool. After the address range is
 *          provisioned, it is ready to be advertised using <a>AdvertiseByoipCidr</a>.</p>
 *          <p>Amazon Web Services verifies that you own the address range and are authorized to advertise it.
 *          You must ensure that the address range is registered to you and that you created an
 *          RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>Provisioning an address range is an asynchronous operation, so the call returns immediately,
 *          but the address range is not ready to use until its status changes from <code>pending-provision</code>
 *          to <code>provisioned</code>. To monitor the status of an address range, use <a>DescribeByoipCidrs</a>.
 *          To allocate an Elastic IP address from your IPv4 address pool, use <a>AllocateAddress</a>
 *          with either the specific address from the address pool or the ID of the address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ProvisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ProvisionByoipCidrCommand extends $Command<
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
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

  constructor(readonly input: ProvisionByoipCidrCommandInput) {
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
  ): Handler<ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvisionByoipCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ProvisionByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionByoipCidrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ProvisionByoipCidrResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvisionByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ProvisionByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvisionByoipCidrCommandOutput> {
    return deserializeAws_ec2ProvisionByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
