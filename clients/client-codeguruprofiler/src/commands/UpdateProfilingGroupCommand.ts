// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProfilingGroupRequest, UpdateProfilingGroupResponse } from "../models/models_0";
import { UpdateProfilingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProfilingGroupCommand}.
 */
export interface UpdateProfilingGroupCommandInput extends UpdateProfilingGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfilingGroupCommand}.
 */
export interface UpdateProfilingGroupCommandOutput extends UpdateProfilingGroupResponse, __MetadataBearer {}

/**
 * Updates a profiling group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, UpdateProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, UpdateProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // UpdateProfilingGroupRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   agentOrchestrationConfig: { // AgentOrchestrationConfig
 *     profilingEnabled: true || false, // required
 *   },
 * };
 * const command = new UpdateProfilingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfilingGroupResponse
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
 * @param UpdateProfilingGroupCommandInput - {@link UpdateProfilingGroupCommandInput}
 * @returns {@link UpdateProfilingGroupCommandOutput}
 * @see {@link UpdateProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The parameter is not valid.
 *
 * @throws {@link CodeGuruProfilerServiceException}
 *
 * Base exception class for all service exceptions from CodeGuruProfiler service.
 *
 * @public
 */
export class UpdateProfilingGroupCommand extends command<UpdateProfilingGroupCommandInput, UpdateProfilingGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProfilingGroup",
  UpdateProfilingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProfilingGroupRequest;
      output: UpdateProfilingGroupResponse;
    };
    sdk: {
      input: UpdateProfilingGroupCommandInput;
      output: UpdateProfilingGroupCommandOutput;
    };
  };
}
