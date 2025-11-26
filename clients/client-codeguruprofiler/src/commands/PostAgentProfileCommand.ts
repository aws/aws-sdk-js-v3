// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeGuruProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { type PostAgentProfileResponse, PostAgentProfileRequest } from "../models/models_0";
import { PostAgentProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type PostAgentProfileCommandInputType = Omit<PostAgentProfileRequest, "agentProfile"> & {
  agentProfile: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PostAgentProfileCommand}.
 */
export interface PostAgentProfileCommandInput extends PostAgentProfileCommandInputType {}
/**
 * @public
 *
 * The output of {@link PostAgentProfileCommand}.
 */
export interface PostAgentProfileCommandOutput extends PostAgentProfileResponse, __MetadataBearer {}

/**
 * <p>
 *          Submits profiling data to an aggregated profile of a profiling group. To get an
 *          aggregated profile that is created with this profiling data, use
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html">
 *                <code>GetProfile</code>
 *             </a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, PostAgentProfileCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, PostAgentProfileCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // PostAgentProfileRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   agentProfile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   profileToken: "STRING_VALUE",
 *   contentType: "STRING_VALUE", // required
 * };
 * const command = new PostAgentProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PostAgentProfileCommandInput - {@link PostAgentProfileCommandInput}
 * @returns {@link PostAgentProfileCommandOutput}
 * @see {@link PostAgentProfileCommandInput} for command's `input` shape.
 * @see {@link PostAgentProfileCommandOutput} for command's `response` shape.
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
export class PostAgentProfileCommand extends $Command
  .classBuilder<
    PostAgentProfileCommandInput,
    PostAgentProfileCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeGuruProfiler", "PostAgentProfile", {})
  .n("CodeGuruProfilerClient", "PostAgentProfileCommand")
  .sc(PostAgentProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostAgentProfileRequest;
      output: {};
    };
    sdk: {
      input: PostAgentProfileCommandInput;
      output: PostAgentProfileCommandOutput;
    };
  };
}
