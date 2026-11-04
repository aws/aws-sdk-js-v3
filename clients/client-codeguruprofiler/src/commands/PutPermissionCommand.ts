// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutPermissionRequest, PutPermissionResponse } from "../models/models_0";
import { PutPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the `principals` parameter.
 *
 *
 *
 * The one supported action group that can be added is `agentPermission` which grants `ConfigureAgent` and `PostAgent` permissions. For more information, see [Resource-based policies in CodeGuru Profiler](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html) in the *Amazon CodeGuru Profiler User Guide*, [`ConfigureAgent`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html), and [`PostAgentProfile`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html).
 *
 *
 *
 * The first time you call `PutPermission` on a profiling group, do not specify a `revisionId` because it doesn't have a resource-based policy. Subsequent calls must provide a `revisionId` to specify which revision of the resource-based policy to add the permissions to.
 *
 *
 *
 * The response contains the profiling group's JSON-formatted resource policy.
 *
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
export class PutPermissionCommand extends command<PutPermissionCommandInput, PutPermissionCommandOutput>(
  _ep0,
  _mw0,
  "PutPermission",
  PutPermission$
) {
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
