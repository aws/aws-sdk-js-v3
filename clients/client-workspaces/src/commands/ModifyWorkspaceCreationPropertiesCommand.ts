// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyWorkspaceCreationPropertiesRequest, ModifyWorkspaceCreationPropertiesResult } from "../models/models_1";
import { ModifyWorkspaceCreationProperties } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ModifyWorkspaceCreationPropertiesCommandOutput
  extends ModifyWorkspaceCreationPropertiesResult,
    __MetadataBearer {}

/**
 * <p>Modify the default properties used to create WorkSpaces.</p>
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
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
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
export class ModifyWorkspaceCreationPropertiesCommand extends $Command
  .classBuilder<
    ModifyWorkspaceCreationPropertiesCommandInput,
    ModifyWorkspaceCreationPropertiesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "ModifyWorkspaceCreationProperties", {})
  .n("WorkSpacesClient", "ModifyWorkspaceCreationPropertiesCommand")
  .sc(ModifyWorkspaceCreationProperties)
  .build() {
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
