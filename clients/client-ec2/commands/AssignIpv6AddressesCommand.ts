import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssignIpv6AddressesRequest, AssignIpv6AddressesResult } from "../models/models_0";
import {
  deserializeAws_ec2AssignIpv6AddressesCommand,
  serializeAws_ec2AssignIpv6AddressesCommand,
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

export type AssignIpv6AddressesCommandInput = AssignIpv6AddressesRequest;
export type AssignIpv6AddressesCommandOutput = AssignIpv6AddressesResult & __MetadataBearer;

/**
 * <p>Assigns one or more IPv6 addresses to the specified network interface. You can
 *             specify one or more specific IPv6 addresses, or you can specify the number of IPv6
 *             addresses to be automatically assigned from within the subnet's IPv6 CIDR block range.
 *             You can assign as many IPv6 addresses to a network interface as you can assign private
 *             IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *         <p>You must specify either the IPv6 addresses or the IPv6 address count in the request.</p>
 */
export class AssignIpv6AddressesCommand extends $Command<
  AssignIpv6AddressesCommandInput,
  AssignIpv6AddressesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssignIpv6AddressesCommandInput) {
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
  ): Handler<AssignIpv6AddressesCommandInput, AssignIpv6AddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssignIpv6AddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssignIpv6AddressesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssignIpv6AddressesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssignIpv6AddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssignIpv6AddressesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssignIpv6AddressesCommandOutput> {
    return deserializeAws_ec2AssignIpv6AddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
