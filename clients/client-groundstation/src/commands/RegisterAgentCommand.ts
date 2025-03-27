// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { RegisterAgentRequest, RegisterAgentResponse } from "../models/models_0";
import { de_RegisterAgentCommand, se_RegisterAgentCommand } from "../protocols/Aws_restJson1";

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
 * <note>
 *             <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p>
 *          </note>
 *          <p> Registers a new agent with AWS Ground Station. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, RegisterAgentCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, RegisterAgentCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "RegisterAgent", {})
  .n("GroundStationClient", "RegisterAgentCommand")
  .f(void 0, void 0)
  .ser(se_RegisterAgentCommand)
  .de(de_RegisterAgentCommand)
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
