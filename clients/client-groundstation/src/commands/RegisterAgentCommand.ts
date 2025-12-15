// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { RegisterAgentRequest, RegisterAgentResponse } from "../models/models_0";
import { RegisterAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterAgentCommand}.
 */
export interface RegisterAgentCommandInput extends RegisterAgentRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAgentCommand}.
 */
export interface RegisterAgentCommandOutput extends RegisterAgentResponse, __MetadataBearer {}

/**
 * <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, RegisterAgentCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, RegisterAgentCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // RegisterAgentRequest
 *   discoveryData: { // DiscoveryData
 *     publicIpAddresses: [ // IpAddressList // required
 *       "STRING_VALUE",
 *     ],
 *     privateIpAddresses: [ // required
 *       "STRING_VALUE",
 *     ],
 *     capabilityArns: [ // CapabilityArnList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   agentDetails: { // AgentDetails
 *     agentVersion: "STRING_VALUE", // required
 *     instanceId: "STRING_VALUE", // required
 *     instanceType: "STRING_VALUE", // required
 *     reservedCpuCores: [ // AgentCpuCoresList
 *       Number("int"),
 *     ],
 *     agentCpuCores: [
 *       Number("int"),
 *     ],
 *     componentVersions: [ // ComponentVersionList // required
 *       { // ComponentVersion
 *         componentType: "STRING_VALUE", // required
 *         versions: [ // VersionStringList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterAgentCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAgentResponse
 * //   agentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterAgentCommandInput - {@link RegisterAgentCommandInput}
 * @returns {@link RegisterAgentCommandOutput}
 * @see {@link RegisterAgentCommandInput} for command's `input` shape.
 * @see {@link RegisterAgentCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class RegisterAgentCommand extends $Command
  .classBuilder<
    RegisterAgentCommandInput,
    RegisterAgentCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "RegisterAgent", {})
  .n("GroundStationClient", "RegisterAgentCommand")
  .sc(RegisterAgent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterAgentRequest;
      output: RegisterAgentResponse;
    };
    sdk: {
      input: RegisterAgentCommandInput;
      output: RegisterAgentCommandOutput;
    };
  };
}
