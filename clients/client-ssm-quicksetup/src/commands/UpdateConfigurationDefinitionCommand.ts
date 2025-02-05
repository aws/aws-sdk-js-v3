// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConfigurationDefinitionInput } from "../models/models_0";
import {
  de_UpdateConfigurationDefinitionCommand,
  se_UpdateConfigurationDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMQuickSetupClientResolvedConfig } from "../SSMQuickSetupClient";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSetup", "UpdateConfigurationDefinition", {})
  .n("SSMQuickSetupClient", "UpdateConfigurationDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConfigurationDefinitionCommand)
  .de(de_UpdateConfigurationDefinitionCommand)
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
