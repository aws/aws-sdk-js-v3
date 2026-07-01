// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateWorkspaceApplicationRequest,
  DisassociateWorkspaceApplicationResult,
} from "../models/models_0";
import { DisassociateWorkspaceApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateWorkspaceApplicationCommand}.
 */
export interface DisassociateWorkspaceApplicationCommandInput extends DisassociateWorkspaceApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWorkspaceApplicationCommand}.
 */
export interface DisassociateWorkspaceApplicationCommandOutput extends DisassociateWorkspaceApplicationResult, __MetadataBearer {}

/**
 * <p>Disassociates the specified application from a WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DisassociateWorkspaceApplicationCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DisassociateWorkspaceApplicationCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DisassociateWorkspaceApplicationRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWorkspaceApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateWorkspaceApplicationResult
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
 * @param DisassociateWorkspaceApplicationCommandInput - {@link DisassociateWorkspaceApplicationCommandInput}
 * @returns {@link DisassociateWorkspaceApplicationCommandOutput}
 * @see {@link DisassociateWorkspaceApplicationCommandInput} for command's `input` shape.
 * @see {@link DisassociateWorkspaceApplicationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is currently in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DisassociateWorkspaceApplicationCommand extends command<DisassociateWorkspaceApplicationCommandInput, DisassociateWorkspaceApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateWorkspaceApplication",
  DisassociateWorkspaceApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateWorkspaceApplicationRequest;
      output: DisassociateWorkspaceApplicationResult;
    };
    sdk: {
      input: DisassociateWorkspaceApplicationCommandInput;
      output: DisassociateWorkspaceApplicationCommandOutput;
    };
  };
}
