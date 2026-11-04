// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkspaceImagePermissionRequest, UpdateWorkspaceImagePermissionResult } from "../models/models_0";
import { UpdateWorkspaceImagePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateWorkspaceImagePermissionCommandOutput extends UpdateWorkspaceImagePermissionResult, __MetadataBearer {}

/**
 * Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.
 *
 * After an image has been shared, the recipient account can copy the image to other Regions as needed.
 *
 * In the China (Ningxia) Region, you can copy images only within the same Region.
 *
 * In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.
 *
 * For more information about sharing images, see [Share or Unshare a Custom WorkSpaces Image](https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html).
 *
 * > **Note:**
 * >
 * > - To delete an image that has been shared, you must unshare the image before you delete it.
 * > - Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspaceImagePermissionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspaceImagePermissionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The specified resource is not available.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class UpdateWorkspaceImagePermissionCommand extends command<UpdateWorkspaceImagePermissionCommandInput, UpdateWorkspaceImagePermissionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkspaceImagePermission",
  UpdateWorkspaceImagePermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceImagePermissionRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspaceImagePermissionCommandInput;
      output: UpdateWorkspaceImagePermissionCommandOutput;
    };
  };
}
