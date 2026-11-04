// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateWorkspaceApplicationRequest, AssociateWorkspaceApplicationResult } from "../models/models_0";
import { AssociateWorkspaceApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateWorkspaceApplicationCommand}.
 */
export interface AssociateWorkspaceApplicationCommandInput extends AssociateWorkspaceApplicationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateWorkspaceApplicationCommand}.
 */
export interface AssociateWorkspaceApplicationCommandOutput extends AssociateWorkspaceApplicationResult, __MetadataBearer {}

/**
 * Associates the specified application to the specified WorkSpace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateWorkspaceApplicationCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateWorkspaceApplicationCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // AssociateWorkspaceApplicationRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new AssociateWorkspaceApplicationCommand(input);
 * const response = await client.send(command);
 * // { // AssociateWorkspaceApplicationResult
 * //   Association: { // WorkspaceResourceAssociation
 * //     AssociatedResourceId: "STRING_VALUE",
 * //     AssociatedResourceType: "APPLICATION",
 * //     Created: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //     StateReason: { // AssociationStateReason
 * //       ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable" || "ValidationError.ApplicationOldVersionExists",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //     WorkspaceId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateWorkspaceApplicationCommandInput - {@link AssociateWorkspaceApplicationCommandInput}
 * @returns {@link AssociateWorkspaceApplicationCommandOutput}
 * @see {@link AssociateWorkspaceApplicationCommandInput} for command's `input` shape.
 * @see {@link AssociateWorkspaceApplicationCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link ApplicationNotSupportedException} (client fault)
 *
 * The specified application is not supported.
 *
 * @throws {@link ComputeNotCompatibleException} (client fault)
 *
 * The compute type of the WorkSpace is not compatible with the application.
 *
 * @throws {@link IncompatibleApplicationsException} (client fault)
 *
 * The specified application is not compatible with the resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link OperatingSystemNotCompatibleException} (client fault)
 *
 * The operating system of the WorkSpace is not compatible with the application.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
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
export class AssociateWorkspaceApplicationCommand extends command<AssociateWorkspaceApplicationCommandInput, AssociateWorkspaceApplicationCommandOutput>(
  _ep0,
  _mw0,
  "AssociateWorkspaceApplication",
  AssociateWorkspaceApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateWorkspaceApplicationRequest;
      output: AssociateWorkspaceApplicationResult;
    };
    sdk: {
      input: AssociateWorkspaceApplicationCommandInput;
      output: AssociateWorkspaceApplicationCommandOutput;
    };
  };
}
