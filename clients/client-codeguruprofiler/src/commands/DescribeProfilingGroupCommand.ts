// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProfilingGroupRequest, DescribeProfilingGroupResponse } from "../models/models_0";
import { DescribeProfilingGroup } from "../schemas/schemas_5_Profiling";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProfilingGroupCommand}.
 */
export interface DescribeProfilingGroupCommandInput extends DescribeProfilingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProfilingGroupCommand}.
 */
export interface DescribeProfilingGroupCommandOutput extends DescribeProfilingGroupResponse, __MetadataBearer {}

/**
 * <p>
 *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
 *                <code>ProfilingGroupDescription</code>
 *             </a>
 *          object that contains information about the requested profiling group.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, DescribeProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, DescribeProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // DescribeProfilingGroupRequest
 *   profilingGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeProfilingGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProfilingGroupResponse
 * //   profilingGroup: { // ProfilingGroupDescription
 * //     name: "STRING_VALUE",
 * //     agentOrchestrationConfig: { // AgentOrchestrationConfig
 * //       profilingEnabled: true || false, // required
 * //     },
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     profilingStatus: { // ProfilingStatus
 * //       latestAgentProfileReportedAt: new Date("TIMESTAMP"),
 * //       latestAggregatedProfile: { // AggregatedProfileTime
 * //         start: new Date("TIMESTAMP"),
 * //         period: "STRING_VALUE",
 * //       },
 * //       latestAgentOrchestratedAt: new Date("TIMESTAMP"),
 * //     },
 * //     computePlatform: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProfilingGroupCommandInput - {@link DescribeProfilingGroupCommandInput}
 * @returns {@link DescribeProfilingGroupCommandOutput}
 * @see {@link DescribeProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 *
 * @public
 */
export class DescribeProfilingGroupCommand extends $Command
  .classBuilder<
    DescribeProfilingGroupCommandInput,
    DescribeProfilingGroupCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "DescribeProfilingGroup", {})
  .n("CodeGuruProfilerClient", "DescribeProfilingGroupCommand")
  .sc(DescribeProfilingGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProfilingGroupRequest;
      output: DescribeProfilingGroupResponse;
    };
    sdk: {
      input: DescribeProfilingGroupCommandInput;
      output: DescribeProfilingGroupCommandOutput;
    };
  };
}
