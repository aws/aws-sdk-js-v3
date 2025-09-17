// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { ListWorkloadsInput, ListWorkloadsOutput } from "../models/models_0";
import { de_ListWorkloadsCommand, se_ListWorkloadsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkloadsCommand}.
 */
export interface ListWorkloadsCommandInput extends ListWorkloadsInput {}
/**
 * @public
 *
 * The output of {@link ListWorkloadsCommand}.
 */
export interface ListWorkloadsCommandOutput extends ListWorkloadsOutput, __MetadataBearer {}

/**
 * <p>Lists the available workload names. You can use the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html">ListWorkloadDeploymentPatterns</a> operation to discover the available deployment patterns for a given workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, ListWorkloadsCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, ListWorkloadsCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // ListWorkloadsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkloadsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkloadsOutput
 * //   workloads: [ // WorkloadDataSummaryList
 * //     { // WorkloadDataSummary
 * //       workloadName: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkloadsCommandInput - {@link ListWorkloadsCommandInput}
 * @returns {@link ListWorkloadsCommandOutput}
 * @see {@link ListWorkloadsCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadsCommandOutput} for command's `response` shape.
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
 * @example List all available workloads supported by AWS Launch Wizard.
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListWorkloadsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   workloads: [
 *     {
 *       displayName: "SAP",
 *       workloadName: "SAP"
 *     },
 *     {
 *       displayName: "MS SQL Server",
 *       workloadName: "SQL"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWorkloadsCommand extends $Command
  .classBuilder<
    ListWorkloadsCommandInput,
    ListWorkloadsCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LaunchWizard", "ListWorkloads", {})
  .n("LaunchWizardClient", "ListWorkloadsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkloadsCommand)
  .de(de_ListWorkloadsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkloadsInput;
      output: ListWorkloadsOutput;
    };
    sdk: {
      input: ListWorkloadsCommandInput;
      output: ListWorkloadsCommandOutput;
    };
  };
}
