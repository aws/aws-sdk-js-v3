// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import type { ListWorkloadDeploymentPatternsInput, ListWorkloadDeploymentPatternsOutput } from "../models/models_0";
import { ListWorkloadDeploymentPatterns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkloadDeploymentPatternsCommand}.
 */
export interface ListWorkloadDeploymentPatternsCommandInput extends ListWorkloadDeploymentPatternsInput {}
/**
 * @public
 *
 * The output of {@link ListWorkloadDeploymentPatternsCommand}.
 */
export interface ListWorkloadDeploymentPatternsCommandOutput extends ListWorkloadDeploymentPatternsOutput, __MetadataBearer {}

/**
 * <p>Lists the workload deployment patterns for a given workload name. You can use the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloads.html">ListWorkloads</a> operation to discover the available workload names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, ListWorkloadDeploymentPatternsCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, ListWorkloadDeploymentPatternsCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // ListWorkloadDeploymentPatternsInput
 *   workloadName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkloadDeploymentPatternsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkloadDeploymentPatternsOutput
 * //   workloadDeploymentPatterns: [ // WorkloadDeploymentPatternDataSummaryList
 * //     { // WorkloadDeploymentPatternDataSummary
 * //       workloadName: "STRING_VALUE",
 * //       deploymentPatternName: "STRING_VALUE",
 * //       workloadVersionName: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "ACTIVE" || "INACTIVE" || "DISABLED" || "DELETED",
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkloadDeploymentPatternsCommandInput - {@link ListWorkloadDeploymentPatternsCommandInput}
 * @returns {@link ListWorkloadDeploymentPatternsCommandOutput}
 * @see {@link ListWorkloadDeploymentPatternsCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadDeploymentPatternsCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
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
 * @example List all available workloads supported by AWS Launch Wizard.
 * ```javascript
 * //
 * const input = {
 *   workloadName: "SAP"
 * };
 * const command = new ListWorkloadDeploymentPatternsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   workloadDeploymentPatterns: [
 *     {
 *       deploymentPatternName: "SapHanaHA",
 *       description: "Deployment Option Description",
 *       displayName: "Deployment Option Display Name",
 *       status: "ACTIVE",
 *       workloadName: "SAP",
 *       workloadVersionName: "2023-08-02-01-00-00"
 *     },
 *     {
 *       deploymentPatternName: "SapHanaMulti",
 *       description: "Deployment Option Description",
 *       displayName: "Deployment Option Display Name",
 *       status: "ACTIVE",
 *       workloadName: "SAP",
 *       workloadVersionName: "2023-08-02-01-00-00"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWorkloadDeploymentPatternsCommand extends $Command
  .classBuilder<
    ListWorkloadDeploymentPatternsCommandInput,
    ListWorkloadDeploymentPatternsCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LaunchWizard", "ListWorkloadDeploymentPatterns", {})
  .n("LaunchWizardClient", "ListWorkloadDeploymentPatternsCommand")
  .sc(ListWorkloadDeploymentPatterns$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkloadDeploymentPatternsInput;
      output: ListWorkloadDeploymentPatternsOutput;
    };
    sdk: {
      input: ListWorkloadDeploymentPatternsCommandInput;
      output: ListWorkloadDeploymentPatternsCommandOutput;
    };
  };
}
