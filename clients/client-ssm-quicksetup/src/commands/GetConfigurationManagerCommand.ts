// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConfigurationManagerInput, GetConfigurationManagerOutput } from "../models/models_0";
import { GetConfigurationManager } from "../schemas/schemas_2_Configuration";
import { ServiceInputTypes, ServiceOutputTypes, SSMQuickSetupClientResolvedConfig } from "../SSMQuickSetupClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationManagerCommand}.
 */
export interface GetConfigurationManagerCommandInput extends GetConfigurationManagerInput {}
/**
 * @public
 *
 * The output of {@link GetConfigurationManagerCommand}.
 */
export interface GetConfigurationManagerCommandOutput extends GetConfigurationManagerOutput, __MetadataBearer {}

/**
 * <p>Returns a configuration manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMQuickSetupClient, GetConfigurationManagerCommand } from "@aws-sdk/client-ssm-quicksetup"; // ES Modules import
 * // const { SSMQuickSetupClient, GetConfigurationManagerCommand } = require("@aws-sdk/client-ssm-quicksetup"); // CommonJS import
 * // import type { SSMQuickSetupClientConfig } from "@aws-sdk/client-ssm-quicksetup";
 * const config = {}; // type is SSMQuickSetupClientConfig
 * const client = new SSMQuickSetupClient(config);
 * const input = { // GetConfigurationManagerInput
 *   ManagerArn: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationManagerCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationManagerOutput
 * //   ManagerArn: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastModifiedAt: new Date("TIMESTAMP"),
 * //   StatusSummaries: [ // StatusSummariesList
 * //     { // StatusSummary
 * //       StatusType: "Deployment" || "AsyncExecutions", // required
 * //       Status: "INITIALIZING" || "DEPLOYING" || "SUCCEEDED" || "DELETING" || "STOPPING" || "FAILED" || "STOPPED" || "DELETE_FAILED" || "STOP_FAILED" || "NONE",
 * //       StatusMessage: "STRING_VALUE",
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       StatusDetails: { // StatusDetails
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ConfigurationDefinitions: [ // ConfigurationDefinitionsList
 * //     { // ConfigurationDefinition
 * //       Type: "STRING_VALUE", // required
 * //       Parameters: { // ConfigurationParametersMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TypeVersion: "STRING_VALUE",
 * //       LocalDeploymentExecutionRoleName: "STRING_VALUE",
 * //       LocalDeploymentAdministrationRoleArn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfigurationManagerCommandInput - {@link GetConfigurationManagerCommandInput}
 * @returns {@link GetConfigurationManagerCommandOutput}
 * @see {@link GetConfigurationManagerCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationManagerCommandOutput} for command's `response` shape.
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
export class GetConfigurationManagerCommand extends $Command
  .classBuilder<
    GetConfigurationManagerCommandInput,
    GetConfigurationManagerCommandOutput,
    SSMQuickSetupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMQuickSetupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSetup", "GetConfigurationManager", {})
  .n("SSMQuickSetupClient", "GetConfigurationManagerCommand")
  .sc(GetConfigurationManager)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationManagerInput;
      output: GetConfigurationManagerOutput;
    };
    sdk: {
      input: GetConfigurationManagerCommandInput;
      output: GetConfigurationManagerCommandOutput;
    };
  };
}
