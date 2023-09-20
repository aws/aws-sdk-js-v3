// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdateWorkspaceImagePermissionRequest, UpdateWorkspaceImagePermissionResult } from "../models/models_0";
import {
  de_UpdateWorkspaceImagePermissionCommand,
  se_UpdateWorkspaceImagePermissionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceImagePermissionCommand}.
 */
export interface UpdateWorkspaceImagePermissionCommandInput extends UpdateWorkspaceImagePermissionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceImagePermissionCommand}.
 */
export interface UpdateWorkspaceImagePermissionCommandOutput
  extends UpdateWorkspaceImagePermissionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Shares or unshares an image with one account in the same Amazon Web Services Region by
 *          specifying whether that account has permission to copy the image. If the copy image
 *          permission is granted, the image is shared with that account. If the copy image permission
 *          is revoked, the image is unshared with the account.</p>
 *          <p>After an image has been shared, the recipient account can copy the image to other
 *          Regions as needed.</p>
 *          <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *          <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p>
 *          <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom
 *             WorkSpaces Image</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>To delete an image that has been shared, you must unshare the image before you
 *                   delete it.</p>
 *                </li>
 *                <li>
 *                   <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts
 *                   isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images
 *                   across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspaceImagePermissionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspaceImagePermissionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // UpdateWorkspaceImagePermissionRequest
 *   ImageId: "STRING_VALUE", // required
 *   AllowCopyImage: true || false, // required
 *   SharedAccountId: "STRING_VALUE", // required
 * };
 * const command = new UpdateWorkspaceImagePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceImagePermissionCommandInput - {@link UpdateWorkspaceImagePermissionCommandInput}
 * @returns {@link UpdateWorkspaceImagePermissionCommandOutput}
 * @see {@link UpdateWorkspaceImagePermissionCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceImagePermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class UpdateWorkspaceImagePermissionCommand extends $Command<
  UpdateWorkspaceImagePermissionCommandInput,
  UpdateWorkspaceImagePermissionCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkspaceImagePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "UpdateWorkspaceImagePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "UpdateWorkspaceImagePermission",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: UpdateWorkspaceImagePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateWorkspaceImagePermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateWorkspaceImagePermissionCommandOutput> {
    return de_UpdateWorkspaceImagePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
