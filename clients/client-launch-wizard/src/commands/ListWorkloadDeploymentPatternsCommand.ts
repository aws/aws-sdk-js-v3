// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { ListWorkloadDeploymentPatternsInput, ListWorkloadDeploymentPatternsOutput } from "../models/models_0";
import {
  de_ListWorkloadDeploymentPatternsCommand,
  se_ListWorkloadDeploymentPatternsCommand,
} from "../protocols/Aws_restJson1";

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
export interface ListWorkloadDeploymentPatternsCommandOutput
  extends ListWorkloadDeploymentPatternsOutput,
    __MetadataBearer {}

/**
 * <p>Lists the workload deployment patterns for a given workload name. You can use the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloads.html">ListWorkloads</a> operation to discover the available workload names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, ListWorkloadDeploymentPatternsCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, ListWorkloadDeploymentPatternsCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LaunchWizard", "ListWorkloadDeploymentPatterns", {})
  .n("LaunchWizardClient", "ListWorkloadDeploymentPatternsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkloadDeploymentPatternsCommand)
  .de(de_ListWorkloadDeploymentPatternsCommand)
  .build() {}
