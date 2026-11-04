// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeWorkspaceImagePermissionsRequest,
  DescribeWorkspaceImagePermissionsResult,
} from "../models/models_0";
import { DescribeWorkspaceImagePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceImagePermissionsCommand}.
 */
export interface DescribeWorkspaceImagePermissionsCommandInput extends DescribeWorkspaceImagePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceImagePermissionsCommand}.
 */
export interface DescribeWorkspaceImagePermissionsCommandOutput extends DescribeWorkspaceImagePermissionsResult, __MetadataBearer {}

/**
 * Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceImagePermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceImagePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceImagePermissionsRequest
 *   ImageId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeWorkspaceImagePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceImagePermissionsResult
 * //   ImageId: "STRING_VALUE",
 * //   ImagePermissions: [ // ImagePermissions
 * //     { // ImagePermission
 * //       SharedAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceImagePermissionsCommandInput - {@link DescribeWorkspaceImagePermissionsCommandInput}
 * @returns {@link DescribeWorkspaceImagePermissionsCommandOutput}
 * @see {@link DescribeWorkspaceImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceImagePermissionsCommandOutput} for command's `response` shape.
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
export class DescribeWorkspaceImagePermissionsCommand extends command<DescribeWorkspaceImagePermissionsCommandInput, DescribeWorkspaceImagePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWorkspaceImagePermissions",
  DescribeWorkspaceImagePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceImagePermissionsRequest;
      output: DescribeWorkspaceImagePermissionsResult;
    };
    sdk: {
      input: DescribeWorkspaceImagePermissionsCommandInput;
      output: DescribeWorkspaceImagePermissionsCommandOutput;
    };
  };
}
