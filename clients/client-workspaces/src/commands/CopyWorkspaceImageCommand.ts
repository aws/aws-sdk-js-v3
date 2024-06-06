// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CopyWorkspaceImageRequest, CopyWorkspaceImageResult } from "../models/models_0";
import { de_CopyWorkspaceImageCommand, se_CopyWorkspaceImageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Copies the specified image from the specified Region to the current Region. For more
 *          information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces
 *             Image</a>.</p>
 *          <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *          <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p>
 *          <important>
 *             <p>Before copying a shared image, be sure to verify that it has been shared from the
 *             correct Amazon Web Services account. To determine if an image has been shared and to see
 *             the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CopyWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CopyWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
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
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
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
 * @public
 */
export class CopyWorkspaceImageCommand extends $Command
  .classBuilder<
    CopyWorkspaceImageCommandInput,
    CopyWorkspaceImageCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "CopyWorkspaceImage", {})
  .n("WorkSpacesClient", "CopyWorkspaceImageCommand")
  .f(void 0, void 0)
  .ser(se_CopyWorkspaceImageCommand)
  .de(de_CopyWorkspaceImageCommand)
  .build() {}
