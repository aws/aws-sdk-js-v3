import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpnConnectionRequest } from "../models/models_2";
import {
  deserializeAws_ec2DeleteVpnConnectionCommand,
  serializeAws_ec2DeleteVpnConnectionCommand,
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

export type DeleteVpnConnectionCommandInput = DeleteVpnConnectionRequest;
export type DeleteVpnConnectionCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified VPN connection.</p>
 *         <p>If you're deleting the VPC and its associated components, we recommend that you detach the virtual private gateway from the VPC and delete the VPC before deleting the VPN connection. If you believe that the tunnel credentials for your VPN connection have been compromised, you can delete the VPN connection and create a new one that has new keys, without needing to delete the VPC or virtual private gateway. If you create a new VPN connection, you must reconfigure the customer gateway device using the new configuration information returned with the new VPN connection ID.</p>
 *         <p>For certificate-based authentication, delete all AWS Certificate Manager (ACM) private certificates used for the AWS-side tunnel endpoints for the VPN connection before deleting the VPN connection.</p>
 */
export class DeleteVpnConnectionCommand extends $Command<
  DeleteVpnConnectionCommandInput,
  DeleteVpnConnectionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVpnConnectionCommandInput) {
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
  ): Handler<DeleteVpnConnectionCommandInput, DeleteVpnConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpnConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpnConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVpnConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVpnConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVpnConnectionCommandOutput> {
    return deserializeAws_ec2DeleteVpnConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
