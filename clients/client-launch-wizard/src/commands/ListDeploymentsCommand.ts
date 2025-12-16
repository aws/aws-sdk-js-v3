// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import type { ListDeploymentsInput, ListDeploymentsOutput } from "../models/models_0";
import { ListDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandInput extends ListDeploymentsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandOutput extends ListDeploymentsOutput, __MetadataBearer {}

/**
 * <p>Lists the deployments that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, ListDeploymentsCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, ListDeploymentsCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // ListDeploymentsInput
 *   filters: [ // DeploymentFilterList
 *     { // DeploymentFilter
 *       name: "WORKLOAD_NAME" || "DEPLOYMENT_STATUS",
 *       values: [ // DeploymentFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentsOutput
 * //   deployments: [ // DeploymentDataSummaryList
 * //     { // DeploymentDataSummary
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       workloadName: "STRING_VALUE",
 * //       patternName: "STRING_VALUE",
 * //       status: "COMPLETED" || "CREATING" || "DELETE_IN_PROGRESS" || "DELETE_INITIATING" || "DELETE_FAILED" || "DELETED" || "FAILED" || "IN_PROGRESS" || "VALIDATING",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentsCommandInput - {@link ListDeploymentsCommandInput}
 * @returns {@link ListDeploymentsCommandOutput}
 * @see {@link ListDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 *
 * @example List deployments in the account with filters.
 * ```javascript
 * //
 * const input = {
 *   filters: [
 *     {
 *       name: "DEPLOYMENT_STATUS",
 *       values: [
 *         "IN_PROGRESS"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deployments: [
 *     {
 *       createdAt: "2023-04-24T13:10:09.857Z",
 *       id: "4c1b59c1-659c-467f-b6e9-6ef6f9d28e1d",
 *       name: "SapHanaSingleForTest",
 *       patternName: "SapHanaSingle",
 *       status: "IN_PROGRESS",
 *       workloadName: "SAP"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDeploymentsCommand extends $Command
  .classBuilder<
    ListDeploymentsCommandInput,
    ListDeploymentsCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LaunchWizard", "ListDeployments", {})
  .n("LaunchWizardClient", "ListDeploymentsCommand")
  .sc(ListDeployments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentsInput;
      output: ListDeploymentsOutput;
    };
    sdk: {
      input: ListDeploymentsCommandInput;
      output: ListDeploymentsCommandOutput;
    };
  };
}
