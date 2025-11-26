// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateConfigurationDefinitionInput } from "../models/models_0";
import { UpdateConfigurationDefinition } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMQuickSetupClientResolvedConfig } from "../SSMQuickSetupClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationDefinitionCommand}.
 */
export interface UpdateConfigurationDefinitionCommandInput extends UpdateConfigurationDefinitionInput {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationDefinitionCommand}.
 */
export interface UpdateConfigurationDefinitionCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a Quick Setup configuration definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMQuickSetupClient, UpdateConfigurationDefinitionCommand } from "@aws-sdk/client-ssm-quicksetup"; // ES Modules import
 * // const { SSMQuickSetupClient, UpdateConfigurationDefinitionCommand } = require("@aws-sdk/client-ssm-quicksetup"); // CommonJS import
 * // import type { SSMQuickSetupClientConfig } from "@aws-sdk/client-ssm-quicksetup";
 * const config = {}; // type is SSMQuickSetupClientConfig
 * const client = new SSMQuickSetupClient(config);
 * const input = { // UpdateConfigurationDefinitionInput
 *   ManagerArn: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   TypeVersion: "STRING_VALUE",
 *   Parameters: { // ConfigurationParametersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   LocalDeploymentExecutionRoleName: "STRING_VALUE",
 *   LocalDeploymentAdministrationRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateConfigurationDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationDefinitionCommandInput - {@link UpdateConfigurationDefinitionCommandInput}
 * @returns {@link UpdateConfigurationDefinitionCommandOutput}
 * @see {@link UpdateConfigurationDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SSMQuickSetupClientResolvedConfig | config} for SSMQuickSetupClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requester has insufficient permissions to perform the operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another request is being processed. Wait a few minutes and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found. Check the ID or name and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation exceeds the maximum allowed request rate per Amazon Web Services account and Amazon Web Services Region.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is invalid. Verify the values provided for the request parameters are
 *                   accurate.</p>
 *
 * @throws {@link SSMQuickSetupServiceException}
 * <p>Base exception class for all service exceptions from SSMQuickSetup service.</p>
 *
 *
 * @public
 */
export class UpdateConfigurationDefinitionCommand extends $Command
  .classBuilder<
    UpdateConfigurationDefinitionCommandInput,
    UpdateConfigurationDefinitionCommandOutput,
    SSMQuickSetupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMQuickSetupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSetup", "UpdateConfigurationDefinition", {})
  .n("SSMQuickSetupClient", "UpdateConfigurationDefinitionCommand")
  .sc(UpdateConfigurationDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationDefinitionInput;
      output: {};
    };
    sdk: {
      input: UpdateConfigurationDefinitionCommandInput;
      output: UpdateConfigurationDefinitionCommandOutput;
    };
  };
}
