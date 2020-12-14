import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateGroupRequest } from "../models/models_0";
import { deserializeAws_queryUpdateGroupCommand, serializeAws_queryUpdateGroupCommand } from "../protocols/Aws_query";
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

export type UpdateGroupCommandInput = UpdateGroupRequest;
export type UpdateGroupCommandOutput = __MetadataBearer;

/**
 * <p>Updates the name and/or the path of the specified IAM group.</p>
 *          <important>
 *             <p> You should understand the implications of changing a group's path or name. For more
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming Users and
 *                Groups</a> in the <i>IAM User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>The person making the request (the principal), must have permission to change the
 *             role group with the old name and the new name. For example, to change the group named
 *                <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that
 *             allows them to update both groups. If the principal has permission to update the
 *                <code>Managers</code> group, but not the <code>MGRs</code> group, then the update
 *             fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a>. </p>
 *          </note>
 */
export class UpdateGroupCommand extends $Command<
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGroupCommandInput, UpdateGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGroupCommandOutput> {
    return deserializeAws_queryUpdateGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
