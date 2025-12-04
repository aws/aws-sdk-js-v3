// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeGuruProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListProfilingGroupsRequest, ListProfilingGroupsResponse } from "../models/models_0";
import { ListProfilingGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfilingGroupsCommand}.
 */
export interface ListProfilingGroupsCommandInput extends ListProfilingGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfilingGroupsCommand}.
 */
export interface ListProfilingGroupsCommandOutput extends ListProfilingGroupsResponse, __MetadataBearer {}

/**
 * <p>
 *          Returns a list of profiling groups. The profiling groups are returned as
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
 *                <code>ProfilingGroupDescription</code>
 *             </a>
 *          objects.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListProfilingGroupsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListProfilingGroupsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // ListProfilingGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   includeDescription: true || false,
 * };
 * const command = new ListProfilingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfilingGroupsResponse
 * //   profilingGroupNames: [ // ProfilingGroupNames // required
 * //     "STRING_VALUE",
 * //   ],
 * //   profilingGroups: [ // ProfilingGroupDescriptions
 * //     { // ProfilingGroupDescription
 * //       name: "STRING_VALUE",
 * //       agentOrchestrationConfig: { // AgentOrchestrationConfig
 * //         profilingEnabled: true || false, // required
 * //       },
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       profilingStatus: { // ProfilingStatus
 * //         latestAgentProfileReportedAt: new Date("TIMESTAMP"),
 * //         latestAggregatedProfile: { // AggregatedProfileTime
 * //           start: new Date("TIMESTAMP"),
 * //           period: "STRING_VALUE",
 * //         },
 * //         latestAgentOrchestratedAt: new Date("TIMESTAMP"),
 * //       },
 * //       computePlatform: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfilingGroupsCommandInput - {@link ListProfilingGroupsCommandInput}
 * @returns {@link ListProfilingGroupsCommandOutput}
 * @see {@link ListProfilingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProfilingGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 *
 * @public
 */
export class ListProfilingGroupsCommand extends $Command
  .classBuilder<
    ListProfilingGroupsCommandInput,
    ListProfilingGroupsCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "ListProfilingGroups", {})
  .n("CodeGuruProfilerClient", "ListProfilingGroupsCommand")
  .sc(ListProfilingGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfilingGroupsRequest;
      output: ListProfilingGroupsResponse;
    };
    sdk: {
      input: ListProfilingGroupsCommandInput;
      output: ListProfilingGroupsCommandOutput;
    };
  };
}
