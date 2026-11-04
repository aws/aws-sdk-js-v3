// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemovePermissionRequest, RemovePermissionResponse } from "../models/models_0";
import { RemovePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemovePermissionCommand}.
 */
export interface RemovePermissionCommandInput extends RemovePermissionRequest {}
/**
 * @public
 *
 * The output of {@link RemovePermissionCommand}.
 */
export interface RemovePermissionCommandOutput extends RemovePermissionResponse, __MetadataBearer {}

/**
 * Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is `agentPermission` which grants `ConfigureAgent` and `PostAgent` permissions. For more information, see [Resource-based policies in CodeGuru Profiler](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html) in the *Amazon CodeGuru Profiler User Guide*, [`ConfigureAgent`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html), and [`PostAgentProfile`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, RemovePermissionCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, RemovePermissionCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // RemovePermissionRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   actionGroup: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 * };
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * // { // RemovePermissionResponse
 * //   policy: "STRING_VALUE", // required
 * //   revisionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RemovePermissionCommandInput - {@link RemovePermissionCommandInput}
 * @returns {@link RemovePermissionCommandOutput}
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
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
export class RemovePermissionCommand extends command<RemovePermissionCommandInput, RemovePermissionCommandOutput>(
  _ep0,
  _mw0,
  "RemovePermission",
  RemovePermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemovePermissionRequest;
      output: RemovePermissionResponse;
    };
    sdk: {
      input: RemovePermissionCommandInput;
      output: RemovePermissionCommandOutput;
    };
  };
}
