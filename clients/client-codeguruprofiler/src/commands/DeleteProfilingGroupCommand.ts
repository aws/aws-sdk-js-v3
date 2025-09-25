// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProfilingGroupRequest, DeleteProfilingGroupResponse } from "../models/models_0";
import { DeleteProfilingGroup } from "../schemas/schemas_2_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a profiling group.</p>
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
export class DeleteProfilingGroupCommand extends $Command
  .classBuilder<
    DeleteProfilingGroupCommandInput,
    DeleteProfilingGroupCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "DeleteProfilingGroup", {})
  .n("CodeGuruProfilerClient", "DeleteProfilingGroupCommand")
  .sc(DeleteProfilingGroup)
  .build() {
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
