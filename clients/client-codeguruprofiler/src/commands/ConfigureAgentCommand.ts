// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfigureAgentRequest, ConfigureAgentResponse } from "../models/models_0";
import { de_ConfigureAgentCommand, se_ConfigureAgentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfigureAgentCommand}.
 */
export interface ConfigureAgentCommandInput extends ConfigureAgentRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureAgentCommand}.
 */
export interface ConfigureAgentCommandOutput extends ConfigureAgentResponse, __MetadataBearer {}

/**
 * <p>
 *           Used by profiler agents to report their current state and to receive remote
 *           configuration updates. For example, <code>ConfigureAgent</code> can be used
 *          to tell an agent whether to profile or not and for how long to return profiling data.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ConfigureAgentCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ConfigureAgentCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // ConfigureAgentRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   fleetInstanceId: "STRING_VALUE",
 *   metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ConfigureAgentCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureAgentResponse
 * //   configuration: { // AgentConfiguration
 * //     shouldProfile: true || false, // required
 * //     periodInSeconds: Number("int"), // required
 * //     agentParameters: { // AgentParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ConfigureAgentCommandInput - {@link ConfigureAgentCommandInput}
 * @returns {@link ConfigureAgentCommandOutput}
 * @see {@link ConfigureAgentCommandInput} for command's `input` shape.
 * @see {@link ConfigureAgentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ConfigureAgentCommand extends $Command
  .classBuilder<
    ConfigureAgentCommandInput,
    ConfigureAgentCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeGuruProfiler", "ConfigureAgent", {})
  .n("CodeGuruProfilerClient", "ConfigureAgentCommand")
  .f(void 0, void 0)
  .ser(se_ConfigureAgentCommand)
  .de(de_ConfigureAgentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfigureAgentRequest;
      output: ConfigureAgentResponse;
    };
    sdk: {
      input: ConfigureAgentCommandInput;
      output: ConfigureAgentCommandOutput;
    };
  };
}
