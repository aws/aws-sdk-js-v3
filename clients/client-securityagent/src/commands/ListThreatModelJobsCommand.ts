// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThreatModelJobsInput, ListThreatModelJobsOutput } from "../models/models_0";
import { ListThreatModelJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThreatModelJobsCommand}.
 */
export interface ListThreatModelJobsCommandInput extends ListThreatModelJobsInput {}
/**
 * @public
 *
 * The output of {@link ListThreatModelJobsCommand}.
 */
export interface ListThreatModelJobsCommandOutput extends ListThreatModelJobsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of threat model job summaries for the specified threat model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListThreatModelJobsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListThreatModelJobsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListThreatModelJobsInput
 *   maxResults: Number("int"),
 *   threatModelId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListThreatModelJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListThreatModelJobsOutput
 * //   threatModelJobSummaries: [ // ThreatModelJobSummaryList
 * //     { // ThreatModelJobSummary
 * //       threatModelJobId: "STRING_VALUE", // required
 * //       threatModelId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "STOPPING" || "STOPPED" || "FAILED" || "COMPLETED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThreatModelJobsCommandInput - {@link ListThreatModelJobsCommandInput}
 * @returns {@link ListThreatModelJobsCommandOutput}
 * @see {@link ListThreatModelJobsCommandInput} for command's `input` shape.
 * @see {@link ListThreatModelJobsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListThreatModelJobsCommand extends command<ListThreatModelJobsCommandInput, ListThreatModelJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListThreatModelJobs",
  ListThreatModelJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThreatModelJobsInput;
      output: ListThreatModelJobsOutput;
    };
    sdk: {
      input: ListThreatModelJobsCommandInput;
      output: ListThreatModelJobsCommandOutput;
    };
  };
}
