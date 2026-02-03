// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import type { ListDeploymentPatternVersionsInput, ListDeploymentPatternVersionsOutput } from "../models/models_0";
import { ListDeploymentPatternVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentPatternVersionsCommand}.
 */
export interface ListDeploymentPatternVersionsCommandInput extends ListDeploymentPatternVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentPatternVersionsCommand}.
 */
export interface ListDeploymentPatternVersionsCommandOutput extends ListDeploymentPatternVersionsOutput, __MetadataBearer {}

/**
 * <p>Lists the deployment pattern versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, ListDeploymentPatternVersionsCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, ListDeploymentPatternVersionsCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // ListDeploymentPatternVersionsInput
 *   workloadName: "STRING_VALUE", // required
 *   deploymentPatternName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // FilterList
 *     { // DeploymentPatternVersionFilter
 *       name: "updateFromVersion", // required
 *       values: [ // DeploymentPatternVersionFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListDeploymentPatternVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentPatternVersionsOutput
 * //   deploymentPatternVersions: [ // DeploymentPatternVersionDataSummaryList
 * //     { // DeploymentPatternVersionDataSummary
 * //       deploymentPatternVersionName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       documentationUrl: "STRING_VALUE",
 * //       workloadName: "STRING_VALUE",
 * //       deploymentPatternName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentPatternVersionsCommandInput - {@link ListDeploymentPatternVersionsCommandInput}
 * @returns {@link ListDeploymentPatternVersionsCommandOutput}
 * @see {@link ListDeploymentPatternVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentPatternVersionsCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 *
 * @example List all visible versions for the given workload and deployment pattern.
 * ```javascript
 * //
 * const input = {
 *   deploymentPatternName: "default",
 *   workloadName: "security-automations-for-aws-waf"
 * };
 * const command = new ListDeploymentPatternVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deploymentPatternVersions: [
 *     {
 *       deploymentPatternName: "default",
 *       deploymentPatternVersionName: "4.0.6",
 *       workloadName: "security-automations-for-aws-waf"
 *     },
 *     {
 *       deploymentPatternName: "default",
 *       deploymentPatternVersionName: "3.2.5",
 *       workloadName: "security-automations-for-aws-waf"
 *     },
 *     {
 *       deploymentPatternName: "default",
 *       deploymentPatternVersionName: "3.1.0",
 *       workloadName: "security-automations-for-aws-waf"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List filtered versions for the given workload and deployment pattern.
 * ```javascript
 * //
 * const input = {
 *   deploymentPatternName: "default",
 *   filters: [
 *     {
 *       name: "updateFromVersion",
 *       values: [
 *         "4.0.2"
 *       ]
 *     }
 *   ],
 *   workloadName: "security-automations-for-aws-waf"
 * };
 * const command = new ListDeploymentPatternVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deploymentPatternVersions: [
 *     {
 *       deploymentPatternName: "default",
 *       deploymentPatternVersionName: "4.0.6",
 *       workloadName: "security-automations-for-aws-waf"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDeploymentPatternVersionsCommand extends $Command
  .classBuilder<
    ListDeploymentPatternVersionsCommandInput,
    ListDeploymentPatternVersionsCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LaunchWizard", "ListDeploymentPatternVersions", {})
  .n("LaunchWizardClient", "ListDeploymentPatternVersionsCommand")
  .sc(ListDeploymentPatternVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentPatternVersionsInput;
      output: ListDeploymentPatternVersionsOutput;
    };
    sdk: {
      input: ListDeploymentPatternVersionsCommandInput;
      output: ListDeploymentPatternVersionsCommandOutput;
    };
  };
}
