// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CopyWorkspaceImageRequest, CopyWorkspaceImageResult } from "../models/models_0";
import { CopyWorkspaceImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CopyWorkspaceImageCommand}.
 */
export interface CopyWorkspaceImageCommandInput extends CopyWorkspaceImageRequest {}
/**
 * @public
 *
 * The output of {@link CopyWorkspaceImageCommand}.
 */
export interface CopyWorkspaceImageCommandOutput extends CopyWorkspaceImageResult, __MetadataBearer {}

/**
 * Copies the specified image from the specified Region to the current Region. For more information about copying images, see [Copy a Custom WorkSpaces Image](https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html).
 *
 * In the China (Ningxia) Region, you can copy images only within the same Region.
 *
 * In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.
 *
 * > **Important:** Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the [DescribeWorkSpaceImages](https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html) and [DescribeWorkspaceImagePermissions](https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html) API operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CopyWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CopyWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CopyWorkspaceImageRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SourceImageId: "STRING_VALUE", // required
 *   SourceRegion: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // { // CopyWorkspaceImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyWorkspaceImageCommandInput - {@link CopyWorkspaceImageCommandInput}
 * @returns {@link CopyWorkspaceImageCommandOutput}
 * @see {@link CopyWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CopyWorkspaceImageCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
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
export class CopyWorkspaceImageCommand extends command<CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput>(
  _ep0,
  _mw0,
  "CopyWorkspaceImage",
  CopyWorkspaceImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyWorkspaceImageRequest;
      output: CopyWorkspaceImageResult;
    };
    sdk: {
      input: CopyWorkspaceImageCommandInput;
      output: CopyWorkspaceImageCommandOutput;
    };
  };
}
