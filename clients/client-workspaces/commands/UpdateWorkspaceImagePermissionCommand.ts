import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { UpdateWorkspaceImagePermissionRequest, UpdateWorkspaceImagePermissionResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand,
  serializeAws_json1_1UpdateWorkspaceImagePermissionCommand,
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

export type UpdateWorkspaceImagePermissionCommandInput = UpdateWorkspaceImagePermissionRequest;
export type UpdateWorkspaceImagePermissionCommandOutput = UpdateWorkspaceImagePermissionResult & __MetadataBearer;

/**
 * <p>Shares or unshares an image with one account in the same AWS Region by specifying whether that account has
 *          permission to copy the image. If the copy image permission is granted, the image is shared with that account.
 *          If the copy image permission is revoked, the image is unshared with the account.</p>
 *
 *          <p>After an image has been shared, the recipient account can copy the image to other AWS Regions as needed.</p>
 *
 *          <note>
 *             <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *
 *             <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions,
 *             contact AWS Support.</p>
 *          </note>
 *
 *          <p>For more information about sharing images, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html">
 *             Share or Unshare a Custom WorkSpaces Image</a>.</p>
 *
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>To delete an image that has been shared, you must unshare the image before you delete it.</p>
 *                </li>
 *                <li>
 *                   <p>Sharing Bring Your Own License (BYOL) images across AWS accounts isn't supported at
 *                   this time in the AWS GovCloud (US-West) Region. To share BYOL images across accounts in
 *                   the AWS GovCloud (US-West) Region, contact AWS Support.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export class UpdateWorkspaceImagePermissionCommand extends $Command<
  UpdateWorkspaceImagePermissionCommandInput,
  UpdateWorkspaceImagePermissionCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWorkspaceImagePermissionCommandInput) {
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
  ): Handler<UpdateWorkspaceImagePermissionCommandInput, UpdateWorkspaceImagePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "UpdateWorkspaceImagePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkspaceImagePermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkspaceImagePermissionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateWorkspaceImagePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateWorkspaceImagePermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateWorkspaceImagePermissionCommandOutput> {
    return deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
