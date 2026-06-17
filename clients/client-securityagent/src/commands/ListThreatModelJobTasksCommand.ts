// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListThreatModelJobTasksInput, ListThreatModelJobTasksOutput } from "../models/models_0";
import { ListThreatModelJobTasks$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThreatModelJobTasksCommand}.
 */
export interface ListThreatModelJobTasksCommandInput extends ListThreatModelJobTasksInput {}
/**
 * @public
 *
 * The output of {@link ListThreatModelJobTasksCommand}.
 */
export interface ListThreatModelJobTasksCommandOutput extends ListThreatModelJobTasksOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of task summaries for the specified threat model job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListThreatModelJobTasksCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListThreatModelJobTasksCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListThreatModelJobTasksInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   threatModelJobId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListThreatModelJobTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListThreatModelJobTasksOutput
 * //   threatModelJobTaskSummaries: [ // ThreatModelJobTaskSummaryList
 * //     { // ThreatModelJobTaskSummary
 * //       taskId: "STRING_VALUE", // required
 * //       threatModelId: "STRING_VALUE",
 * //       threatModelJobId: "STRING_VALUE",
 * //       agentSpaceId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       executionStatus: "IN_PROGRESS" || "ABORTED" || "COMPLETED" || "INTERNAL_ERROR" || "FAILED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThreatModelJobTasksCommandInput - {@link ListThreatModelJobTasksCommandInput}
 * @returns {@link ListThreatModelJobTasksCommandOutput}
 * @see {@link ListThreatModelJobTasksCommandInput} for command's `input` shape.
 * @see {@link ListThreatModelJobTasksCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListThreatModelJobTasksCommand extends $Command
  .classBuilder<
    ListThreatModelJobTasksCommandInput,
    ListThreatModelJobTasksCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListThreatModelJobTasks", {})
  .n("SecurityAgentClient", "ListThreatModelJobTasksCommand")
  .sc(ListThreatModelJobTasks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThreatModelJobTasksInput;
      output: ListThreatModelJobTasksOutput;
    };
    sdk: {
      input: ListThreatModelJobTasksCommandInput;
      output: ListThreatModelJobTasksCommandOutput;
    };
  };
}
