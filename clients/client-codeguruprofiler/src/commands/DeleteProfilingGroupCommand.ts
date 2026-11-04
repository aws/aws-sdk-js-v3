// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProfilingGroupRequest, DeleteProfilingGroupResponse } from "../models/models_0";
import { DeleteProfilingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProfilingGroupCommand}.
 */
export interface DeleteProfilingGroupCommandInput extends DeleteProfilingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProfilingGroupCommand}.
 */
export interface DeleteProfilingGroupCommandOutput extends DeleteProfilingGroupResponse, __MetadataBearer {}

/**
 * Deletes a profiling group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, DeleteProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, DeleteProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // DeleteProfilingGroupRequest
 *   profilingGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteProfilingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProfilingGroupCommandInput - {@link DeleteProfilingGroupCommandInput}
 * @returns {@link DeleteProfilingGroupCommandOutput}
 * @see {@link DeleteProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteProfilingGroupCommandOutput} for command's `response` shape.
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
export class DeleteProfilingGroupCommand extends command<DeleteProfilingGroupCommandInput, DeleteProfilingGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProfilingGroup",
  DeleteProfilingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProfilingGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteProfilingGroupCommandInput;
      output: DeleteProfilingGroupCommandOutput;
    };
  };
}
