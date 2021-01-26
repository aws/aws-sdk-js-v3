import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DeregisterWorkspaceDirectoryRequest, DeregisterWorkspaceDirectoryResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand,
  serializeAws_json1_1DeregisterWorkspaceDirectoryCommand,
} from "../protocols/Aws_json1_1";
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

export type DeregisterWorkspaceDirectoryCommandInput = DeregisterWorkspaceDirectoryRequest;
export type DeregisterWorkspaceDirectoryCommandOutput = DeregisterWorkspaceDirectoryResult & __MetadataBearer;

/**
 * <p>Deregisters the specified directory. This operation is asynchronous
 *          and returns before the WorkSpace directory is deregistered. If any WorkSpaces are
 *       registered to this directory, you must remove them before you can deregister the directory.</p>
 *
 *          <note>
 *             <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces.
 *             If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30
 *             consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces,
 *             and you will be charged for this directory as per the
 *             <a href="http://aws.amazon.com/directoryservice/pricing/">AWS Directory Services pricing terms</a>.</p>
 *
 *             <p>To delete empty directories, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html">
 *                Delete the Directory for Your WorkSpaces</a>. If you delete your
 *             Simple AD or AD Connector directory, you can always create a new one when you want to start using
 *             WorkSpaces again.</p>
 *          </note>
 */
export class DeregisterWorkspaceDirectoryCommand extends $Command<
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterWorkspaceDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterWorkspaceDirectoryCommandInput, DeregisterWorkspaceDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DeregisterWorkspaceDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterWorkspaceDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterWorkspaceDirectoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterWorkspaceDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterWorkspaceDirectoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterWorkspaceDirectoryCommandOutput> {
    return deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
