// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConfigurationManagerInput, CreateConfigurationManagerOutput } from "../models/models_0";
import { CreateConfigurationManager } from "../schemas/schemas_1_Configuration";
import { ServiceInputTypes, ServiceOutputTypes, SSMQuickSetupClientResolvedConfig } from "../SSMQuickSetupClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationManagerCommand}.
 */
export interface CreateConfigurationManagerCommandInput extends CreateConfigurationManagerInput {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationManagerCommand}.
 */
export interface CreateConfigurationManagerCommandOutput extends CreateConfigurationManagerOutput, __MetadataBearer {}

/**
 * <p>Creates a Quick Setup configuration manager resource. This object is a collection
 *                   of desired state configurations for multiple configuration definitions and
 *                   summaries describing the deployments of those definitions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMQuickSetupClient, CreateConfigurationManagerCommand } from "@aws-sdk/client-ssm-quicksetup"; // ES Modules import
 * // const { SSMQuickSetupClient, CreateConfigurationManagerCommand } = require("@aws-sdk/client-ssm-quicksetup"); // CommonJS import
 * // import type { SSMQuickSetupClientConfig } from "@aws-sdk/client-ssm-quicksetup";
 * const config = {}; // type is SSMQuickSetupClientConfig
 * const client = new SSMQuickSetupClient(config);
 * const input = { // CreateConfigurationManagerInput
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ConfigurationDefinitions: [ // ConfigurationDefinitionsInputList // required
 *     { // ConfigurationDefinitionInput
 *       Type: "STRING_VALUE", // required
 *       Parameters: { // ConfigurationParametersMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *       TypeVersion: "STRING_VALUE",
 *       LocalDeploymentExecutionRoleName: "STRING_VALUE",
 *       LocalDeploymentAdministrationRoleArn: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfigurationManagerCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfigurationManagerOutput
 * //   ManagerArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConfigurationManagerCommandInput - {@link CreateConfigurationManagerCommandInput}
 * @returns {@link CreateConfigurationManagerCommandOutput}
 * @see {@link CreateConfigurationManagerCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationManagerCommandOutput} for command's `response` shape.
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
export class CreateConfigurationManagerCommand extends $Command
  .classBuilder<
    CreateConfigurationManagerCommandInput,
    CreateConfigurationManagerCommandOutput,
    SSMQuickSetupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMQuickSetupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSetup", "CreateConfigurationManager", {})
  .n("SSMQuickSetupClient", "CreateConfigurationManagerCommand")
  .sc(CreateConfigurationManager)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigurationManagerInput;
      output: CreateConfigurationManagerOutput;
    };
    sdk: {
      input: CreateConfigurationManagerCommandInput;
      output: CreateConfigurationManagerCommandOutput;
    };
  };
}
