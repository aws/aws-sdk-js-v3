// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfigureAgentRequest, ConfigureAgentResponse } from "../models/models_0";
import { ConfigureAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Used by profiler agents to report their current state and to receive remote configuration updates. For example, `ConfigureAgent` can be used to tell an agent whether to profile or not and for how long to return profiling data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ConfigureAgentCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ConfigureAgentCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
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
export class ConfigureAgentCommand extends command<ConfigureAgentCommandInput, ConfigureAgentCommandOutput>(
  _ep0,
  _mw0,
  "ConfigureAgent",
  ConfigureAgent$
) {
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
