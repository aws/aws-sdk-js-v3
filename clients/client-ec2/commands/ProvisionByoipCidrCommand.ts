import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ProvisionByoipCidrRequest, ProvisionByoipCidrResult } from "../models/models_4";
import {
  deserializeAws_ec2ProvisionByoipCidrCommand,
  serializeAws_ec2ProvisionByoipCidrCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ProvisionByoipCidrCommandInput = ProvisionByoipCidrRequest;
export type ProvisionByoipCidrCommandOutput = ProvisionByoipCidrResult & __MetadataBearer;

/**
 * <p>Provisions an IPv4 or IPv6 address range for use with your AWS resources through bring your own IP
 *          addresses (BYOIP) and creates a corresponding address pool. After the address range is
 *          provisioned, it is ready to be advertised using <a>AdvertiseByoipCidr</a>.</p>
 *          <p>AWS verifies that you own the address range and are authorized to advertise it.
 *          You must ensure that the address range is registered to you and that you created an
 *          RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>Provisioning an address range is an asynchronous operation, so the call returns immediately,
 *          but the address range is not ready to use until its status changes from <code>pending-provision</code>
 *          to <code>provisioned</code>. To monitor the status of an address range, use <a>DescribeByoipCidrs</a>.
 *          To allocate an Elastic IP address from your IPv4 address pool, use <a>AllocateAddress</a>
 *          with either the specific address from the address pool or the ID of the address pool.</p>
 */
export class ProvisionByoipCidrCommand extends $Command<
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ProvisionByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionByoipCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ProvisionByoipCidrResult.filterSensitiveLog,
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
