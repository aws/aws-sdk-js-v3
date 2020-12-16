import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateAddressRequest, AssociateAddressResult } from "../models/models_0";
import {
  deserializeAws_ec2AssociateAddressCommand,
  serializeAws_ec2AssociateAddressCommand,
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

export type AssociateAddressCommandInput = AssociateAddressRequest;
export type AssociateAddressCommandOutput = AssociateAddressResult & __MetadataBearer;

/**
 * <p>Associates an Elastic IP address, or carrier IP address (for instances that are in
 *       subnets in Wavelength Zones) with an instance or a network interface. Before you can use an
 *       Elastic IP address, you must allocate it to your account.</p>
 *          <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>[EC2-Classic, VPC in an EC2-VPC-only account] If the Elastic IP address is already
 *       associated with a different instance, it is disassociated from that instance and associated
 *       with the specified instance. If you associate an Elastic IP address with an instance that has
 *       an existing Elastic IP address, the existing address is disassociated from the instance, but
 *       remains allocated to your account.</p>
 *          <p>[VPC in an EC2-Classic account] If you don't specify a private IP address, the Elastic
 *       IP address is associated with the primary IP address. If the Elastic IP address is already
 *       associated with a different instance or a network interface, you get an error unless you allow
 *       reassociation. You cannot associate an Elastic IP address with an instance or network
 *       interface that has an existing Elastic IP address.</p>
 *          <p>[Subnets in Wavelength Zones] You can associate an IP address from the telecommunication
 *       carrier to the instance or network interface. </p>
 *          <p>You cannot associate an Elastic IP address with an interface in a different network border group.</p>
 *          <important>
 *             <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2
 *         doesn't return an error, and you may be charged for each time the Elastic IP address is
 *         remapped to the same instance. For more information, see the <i>Elastic IP
 *           Addresses</i> section of <a href="http://aws.amazon.com/ec2/pricing/">Amazon EC2
 *           Pricing</a>.</p>
 *          </important>
 */
export class AssociateAddressCommand extends $Command<
  AssociateAddressCommandInput,
  AssociateAddressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateAddressCommandInput) {
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
  ): Handler<AssociateAddressCommandInput, AssociateAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateAddressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateAddressCommandOutput> {
    return deserializeAws_ec2AssociateAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
