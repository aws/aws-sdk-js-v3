// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeployWorkspaceApplicationsRequest, DeployWorkspaceApplicationsResult } from "../models/models_0";
import { DeployWorkspaceApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeployWorkspaceApplicationsCommand}.
 */
export interface DeployWorkspaceApplicationsCommandInput extends DeployWorkspaceApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link DeployWorkspaceApplicationsCommand}.
 */
export interface DeployWorkspaceApplicationsCommandOutput extends DeployWorkspaceApplicationsResult, __MetadataBearer {}

/**
 * Deploys associated applications to the specified WorkSpace
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeployWorkspaceApplicationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeployWorkspaceApplicationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DeployWorkspaceApplicationsRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   Force: true || false,
 * };
 * const command = new DeployWorkspaceApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DeployWorkspaceApplicationsResult
 * //   Deployment: { // WorkSpaceApplicationDeployment
 * //     Associations: [ // WorkspaceResourceAssociationList
 * //       { // WorkspaceResourceAssociation
 * //         AssociatedResourceId: "STRING_VALUE",
 * //         AssociatedResourceType: "APPLICATION",
 * //         Created: new Date("TIMESTAMP"),
 * //         LastUpdatedTime: new Date("TIMESTAMP"),
 * //         State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //         StateReason: { // AssociationStateReason
 * //           ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable" || "ValidationError.ApplicationOldVersionExists",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //         WorkspaceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeployWorkspaceApplicationsCommandInput - {@link DeployWorkspaceApplicationsCommandInput}
 * @returns {@link DeployWorkspaceApplicationsCommandOutput}
 * @see {@link DeployWorkspaceApplicationsCommandInput} for command's `input` shape.
 * @see {@link DeployWorkspaceApplicationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link IncompatibleApplicationsException} (client fault)
 *
 * The specified application is not compatible with the resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is currently in use.
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
export class DeployWorkspaceApplicationsCommand extends command<DeployWorkspaceApplicationsCommandInput, DeployWorkspaceApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "DeployWorkspaceApplications",
  DeployWorkspaceApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeployWorkspaceApplicationsRequest;
      output: DeployWorkspaceApplicationsResult;
    };
    sdk: {
      input: DeployWorkspaceApplicationsCommandInput;
      output: DeployWorkspaceApplicationsCommandOutput;
    };
  };
}
