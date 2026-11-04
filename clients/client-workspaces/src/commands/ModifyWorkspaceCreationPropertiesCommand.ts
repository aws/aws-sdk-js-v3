// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyWorkspaceCreationPropertiesRequest,
  ModifyWorkspaceCreationPropertiesResult,
} from "../models/models_0";
import { ModifyWorkspaceCreationProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyWorkspaceCreationPropertiesCommand}.
 */
export interface ModifyWorkspaceCreationPropertiesCommandInput extends ModifyWorkspaceCreationPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyWorkspaceCreationPropertiesCommand}.
 */
export interface ModifyWorkspaceCreationPropertiesCommandOutput extends ModifyWorkspaceCreationPropertiesResult, __MetadataBearer {}

/**
 * Modify the default properties used to create WorkSpaces.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceCreationPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceCreationPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyWorkspaceCreationPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   WorkspaceCreationProperties: { // WorkspaceCreationProperties
 *     EnableInternetAccess: true || false,
 *     DefaultOu: "STRING_VALUE",
 *     CustomSecurityGroupId: "STRING_VALUE",
 *     UserEnabledAsLocalAdministrator: true || false,
 *     EnableMaintenanceMode: true || false,
 *     InstanceIamRoleArn: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyWorkspaceCreationPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyWorkspaceCreationPropertiesCommandInput - {@link ModifyWorkspaceCreationPropertiesCommandInput}
 * @returns {@link ModifyWorkspaceCreationPropertiesCommandOutput}
 * @see {@link ModifyWorkspaceCreationPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceCreationPropertiesCommandOutput} for command's `response` shape.
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
export class ModifyWorkspaceCreationPropertiesCommand extends command<ModifyWorkspaceCreationPropertiesCommandInput, ModifyWorkspaceCreationPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "ModifyWorkspaceCreationProperties",
  ModifyWorkspaceCreationProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyWorkspaceCreationPropertiesRequest;
      output: {};
    };
    sdk: {
      input: ModifyWorkspaceCreationPropertiesCommandInput;
      output: ModifyWorkspaceCreationPropertiesCommandOutput;
    };
  };
}
