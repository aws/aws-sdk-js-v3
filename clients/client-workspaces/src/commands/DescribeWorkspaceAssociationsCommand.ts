// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWorkspaceAssociationsRequest, DescribeWorkspaceAssociationsResult } from "../models/models_0";
import { DescribeWorkspaceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceAssociationsCommand}.
 */
export interface DescribeWorkspaceAssociationsCommandInput extends DescribeWorkspaceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceAssociationsCommand}.
 */
export interface DescribeWorkspaceAssociationsCommandOutput extends DescribeWorkspaceAssociationsResult, __MetadataBearer {}

/**
 * Describes the associations betweens applications and the specified WorkSpace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceAssociationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceAssociationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceAssociationsRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   AssociatedResourceTypes: [ // WorkSpaceAssociatedResourceTypeList // required
 *     "APPLICATION",
 *   ],
 * };
 * const command = new DescribeWorkspaceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceAssociationsResult
 * //   Associations: [ // WorkspaceResourceAssociationList
 * //     { // WorkspaceResourceAssociation
 * //       AssociatedResourceId: "STRING_VALUE",
 * //       AssociatedResourceType: "APPLICATION",
 * //       Created: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //       StateReason: { // AssociationStateReason
 * //         ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable" || "ValidationError.ApplicationOldVersionExists",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       WorkspaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceAssociationsCommandInput - {@link DescribeWorkspaceAssociationsCommandInput}
 * @returns {@link DescribeWorkspaceAssociationsCommandOutput}
 * @see {@link DescribeWorkspaceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceAssociationsCommandOutput} for command's `response` shape.
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
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class DescribeWorkspaceAssociationsCommand extends command<DescribeWorkspaceAssociationsCommandInput, DescribeWorkspaceAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWorkspaceAssociations",
  DescribeWorkspaceAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceAssociationsRequest;
      output: DescribeWorkspaceAssociationsResult;
    };
    sdk: {
      input: DescribeWorkspaceAssociationsCommandInput;
      output: DescribeWorkspaceAssociationsCommandOutput;
    };
  };
}
