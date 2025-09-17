// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { ListDeploymentEventsInput, ListDeploymentEventsOutput } from "../models/models_0";
import { de_ListDeploymentEventsCommand, se_ListDeploymentEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentEventsCommand}.
 */
export interface ListDeploymentEventsCommandInput extends ListDeploymentEventsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentEventsCommand}.
 */
export interface ListDeploymentEventsCommandOutput extends ListDeploymentEventsOutput, __MetadataBearer {}

/**
 * <p>Lists the events of a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, ListDeploymentEventsCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, ListDeploymentEventsCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // ListDeploymentEventsInput
 *   deploymentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentEventsOutput
 * //   deploymentEvents: [ // DeploymentEventDataSummaryList
 * //     { // DeploymentEventDataSummary
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "CANCELED" || "CANCELING" || "COMPLETED" || "CREATED" || "FAILED" || "IN_PROGRESS" || "PENDING" || "TIMED_OUT",
 * //       statusReason: "STRING_VALUE",
 * //       timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentEventsCommandInput - {@link ListDeploymentEventsCommandInput}
 * @returns {@link ListDeploymentEventsCommandOutput}
 * @see {@link ListDeploymentEventsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentEventsCommandOutput} for command's `response` shape.
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
 * @example List all actions taken during a deployment.
 * ```javascript
 * //
 * const input = {
 *   deploymentId: "4c1b59c1-659c-467f-b6e9-6ef6f9d28e1d"
 * };
 * const command = new ListDeploymentEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deploymentEvents: [
 *     {
 *       description: "Creates a new secure parameter",
 *       name: "Create secure parameter",
 *       status: "COMPLETED",
 *       statusReason: "",
 *       timestamp: "2023-04-24T13:10:39.123Z"
 *     },
 *     {
 *       description: "Creates a resource group with all the application resources",
 *       name: "Create resource group",
 *       status: "COMPLETED",
 *       statusReason: "",
 *       timestamp: "2023-04-24T13:10:42.238Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDeploymentEventsCommand extends $Command
  .classBuilder<
    ListDeploymentEventsCommandInput,
    ListDeploymentEventsCommandOutput,
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
  .s("LaunchWizard", "ListDeploymentEvents", {})
  .n("LaunchWizardClient", "ListDeploymentEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeploymentEventsCommand)
  .de(de_ListDeploymentEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentEventsInput;
      output: ListDeploymentEventsOutput;
    };
    sdk: {
      input: ListDeploymentEventsCommandInput;
      output: ListDeploymentEventsCommandOutput;
    };
  };
}
