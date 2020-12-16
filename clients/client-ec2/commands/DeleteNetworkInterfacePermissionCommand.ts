import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInterfacePermissionRequest, DeleteNetworkInterfacePermissionResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteNetworkInterfacePermissionCommand,
  serializeAws_ec2DeleteNetworkInterfacePermissionCommand,
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

export type DeleteNetworkInterfacePermissionCommandInput = DeleteNetworkInterfacePermissionRequest;
export type DeleteNetworkInterfacePermissionCommandOutput = DeleteNetworkInterfacePermissionResult & __MetadataBearer;

/**
 * <p>Deletes a permission for a network interface. By default, you cannot delete the
 * 			permission if the account for which you're removing the permission has attached the
 * 			network interface to an instance. However, you can force delete the permission,
 * 			regardless of any attachment.</p>
 */
export class DeleteNetworkInterfacePermissionCommand extends $Command<
  DeleteNetworkInterfacePermissionCommandInput,
  DeleteNetworkInterfacePermissionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNetworkInterfacePermissionCommandInput) {
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
  ): Handler<DeleteNetworkInterfacePermissionCommandInput, DeleteNetworkInterfacePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkInterfacePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNetworkInterfacePermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNetworkInterfacePermissionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteNetworkInterfacePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteNetworkInterfacePermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNetworkInterfacePermissionCommandOutput> {
    return deserializeAws_ec2DeleteNetworkInterfacePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
