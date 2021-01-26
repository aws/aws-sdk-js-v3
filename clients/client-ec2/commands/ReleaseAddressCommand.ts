import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReleaseAddressRequest } from "../models/models_4";
import { deserializeAws_ec2ReleaseAddressCommand, serializeAws_ec2ReleaseAddressCommand } from "../protocols/Aws_ec2";
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

export type ReleaseAddressCommandInput = ReleaseAddressRequest;
export type ReleaseAddressCommandOutput = __MetadataBearer;

/**
 * <p>Releases the specified Elastic IP address.</p>
 *          <p>[EC2-Classic, default VPC] Releasing an Elastic IP address automatically disassociates it
 * 				from any instance that it's associated with. To disassociate an Elastic IP address without
 * 				releasing it, use <a>DisassociateAddress</a>.</p>
 *          <p>[Nondefault VPC] You must use <a>DisassociateAddress</a> to disassociate the Elastic IP address
 * 			  before you can release it. Otherwise, Amazon EC2 returns an error (<code>InvalidIPAddress.InUse</code>).</p>
 *          <p>After releasing an Elastic IP address, it is released to the IP address pool.
 *         Be sure to update your DNS records and any servers or devices that communicate with the address.
 *         If you attempt to release an Elastic IP address that you already released, you'll get an
 *         <code>AuthFailure</code> error if the address is already allocated to another AWS account.</p>
 *          <p>[EC2-VPC] After you release an Elastic IP address for use in a VPC, you might be able to recover it.
 *         For more information, see <a>AllocateAddress</a>.</p>
 */
export class ReleaseAddressCommand extends $Command<
  ReleaseAddressCommandInput,
  ReleaseAddressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReleaseAddressCommandInput) {
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
  ): Handler<ReleaseAddressCommandInput, ReleaseAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReleaseAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReleaseAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReleaseAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReleaseAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReleaseAddressCommandOutput> {
    return deserializeAws_ec2ReleaseAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
