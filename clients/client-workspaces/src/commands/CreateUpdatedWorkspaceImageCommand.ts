// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUpdatedWorkspaceImageRequest, CreateUpdatedWorkspaceImageResult } from "../models/models_0";
import { CreateUpdatedWorkspaceImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateUpdatedWorkspaceImageCommand}.
 */
export interface CreateUpdatedWorkspaceImageCommandInput extends CreateUpdatedWorkspaceImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateUpdatedWorkspaceImageCommand}.
 */
export interface CreateUpdatedWorkspaceImageCommandOutput extends CreateUpdatedWorkspaceImageResult, __MetadataBearer {}

/**
 * Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.
 *
 * To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use [DescribeWorkspaceImages](https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html).
 *
 * > **Note:**
 * >
 * > - Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.
 * > - Microsoft Windows updates and other application updates are not included in the update process.
 * > - The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateUpdatedWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateUpdatedWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateUpdatedWorkspaceImageRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   SourceImageId: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateUpdatedWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateUpdatedWorkspaceImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUpdatedWorkspaceImageCommandInput - {@link CreateUpdatedWorkspaceImageCommandInput}
 * @returns {@link CreateUpdatedWorkspaceImageCommandOutput}
 * @see {@link CreateUpdatedWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CreateUpdatedWorkspaceImageCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The state of the resource is not valid for this operation.
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
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class CreateUpdatedWorkspaceImageCommand extends command<CreateUpdatedWorkspaceImageCommandInput, CreateUpdatedWorkspaceImageCommandOutput>(
  _ep0,
  _mw0,
  "CreateUpdatedWorkspaceImage",
  CreateUpdatedWorkspaceImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUpdatedWorkspaceImageRequest;
      output: CreateUpdatedWorkspaceImageResult;
    };
    sdk: {
      input: CreateUpdatedWorkspaceImageCommandInput;
      output: CreateUpdatedWorkspaceImageCommandOutput;
    };
  };
}
