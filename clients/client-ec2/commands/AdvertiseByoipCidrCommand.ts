import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResult } from "../models/models_0";
import {
  deserializeAws_ec2AdvertiseByoipCidrCommand,
  serializeAws_ec2AdvertiseByoipCidrCommand,
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

export type AdvertiseByoipCidrCommandInput = AdvertiseByoipCidrRequest;
export type AdvertiseByoipCidrCommandOutput = AdvertiseByoipCidrResult & __MetadataBearer;

/**
 * <p>Advertises an IPv4 or IPv6 address range that is provisioned for use with your AWS resources through
 *          bring your own IP addresses (BYOIP).</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise
 *          it from AWS. To minimize down time, you can configure your AWS resources to use an address from a
 *          BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current
 *          location and start advertising it through AWS.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses starts routing to AWS
 *          because of BGP propagation delays.</p>
 *          <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
 */
export class AdvertiseByoipCidrCommand extends $Command<
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdvertiseByoipCidrCommandInput) {
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
  ): Handler<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AdvertiseByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdvertiseByoipCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdvertiseByoipCidrResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdvertiseByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AdvertiseByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdvertiseByoipCidrCommandOutput> {
    return deserializeAws_ec2AdvertiseByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
