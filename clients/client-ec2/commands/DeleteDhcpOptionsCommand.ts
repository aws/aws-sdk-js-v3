import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteDhcpOptionsRequest } from "../models/models_1";
import {
  deserializeAws_ec2DeleteDhcpOptionsCommand,
  serializeAws_ec2DeleteDhcpOptionsCommand,
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

export type DeleteDhcpOptionsCommandInput = DeleteDhcpOptionsRequest;
export type DeleteDhcpOptionsCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.</p>
 */
export class DeleteDhcpOptionsCommand extends $Command<
  DeleteDhcpOptionsCommandInput,
  DeleteDhcpOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDhcpOptionsCommandInput) {
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
  ): Handler<DeleteDhcpOptionsCommandInput, DeleteDhcpOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteDhcpOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDhcpOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDhcpOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteDhcpOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDhcpOptionsCommandOutput> {
    return deserializeAws_ec2DeleteDhcpOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
