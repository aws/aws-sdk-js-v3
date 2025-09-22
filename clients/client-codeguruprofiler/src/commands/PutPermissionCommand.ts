// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutPermissionRequest, PutPermissionResponse } from "../models/models_0";
import { PutPermission } from "../schemas/schemas_2_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandInput extends PutPermissionRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandOutput extends PutPermissionResponse, __MetadataBearer {}

/**
 * <p>
 *             Adds permissions to a profiling group's resource-based policy
 *             that are provided using an action group. If a profiling group doesn't have
 *             a resource-based policy, one is created for it using the permissions in the action group and
 *             the roles and users in the <code>principals</code> parameter.
 *         </p>
 *
 *         <p> The one supported action group that can be added is <code>agentPermission</code>
 *             which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For
 *             more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based
 *                 policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User
 *                 Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
 *                <code>ConfigureAgent</code>
 *             </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html">
 *                <code>PostAgentProfile</code>
 *             </a>. </p>
 *
 *         <p>
 *             The first time you call <code>PutPermission</code> on a profiling group, do not specify a <code>revisionId</code> because
 *             it doesn't have a resource-based policy. Subsequent calls must provide a <code>revisionId</code> to specify
 *             which revision of the resource-based policy to add the permissions to.
 *         </p>
 *
 *         <p>
 *             The response contains the profiling group's JSON-formatted resource policy.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, PutPermissionCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, PutPermissionCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // PutPermissionRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   actionGroup: "STRING_VALUE", // required
 *   principals: [ // Principals // required
 *     "STRING_VALUE",
 *   ],
 *   revisionId: "STRING_VALUE",
 * };
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * // { // PutPermissionResponse
 * //   policy: "STRING_VALUE", // required
 * //   revisionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutPermissionCommandInput - {@link PutPermissionCommandInput}
 * @returns {@link PutPermissionCommandOutput}
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state
 *         of a service resource associated with the request. Resolve the conflict
 *         before retrying this request.
 *       </p>
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
export class PutPermissionCommand extends $Command
  .classBuilder<
    PutPermissionCommandInput,
    PutPermissionCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "PutPermission", {})
  .n("CodeGuruProfilerClient", "PutPermissionCommand")
  .sc(PutPermission)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPermissionRequest;
      output: PutPermissionResponse;
    };
    sdk: {
      input: PutPermissionCommandInput;
      output: PutPermissionCommandOutput;
    };
  };
}
