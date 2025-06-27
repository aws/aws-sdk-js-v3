// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstancePortStatesRequest, GetInstancePortStatesResult } from "../models/models_1";
import { de_GetInstancePortStatesCommand, se_GetInstancePortStatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstancePortStatesCommand}.
 */
export interface GetInstancePortStatesCommandInput extends GetInstancePortStatesRequest {}
/**
 * @public
 *
 * The output of {@link GetInstancePortStatesCommand}.
 */
export interface GetInstancePortStatesCommandOutput extends GetInstancePortStatesResult, __MetadataBearer {}

/**
 * <p>Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstancePortStatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstancePortStatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetInstancePortStatesRequest
 *   instanceName: "STRING_VALUE", // required
 * };
 * const command = new GetInstancePortStatesCommand(input);
 * const response = await client.send(command);
 * // { // GetInstancePortStatesResult
 * //   portStates: [ // InstancePortStateList
 * //     { // InstancePortState
 * //       fromPort: Number("int"),
 * //       toPort: Number("int"),
 * //       protocol: "tcp" || "all" || "udp" || "icmp" || "icmpv6",
 * //       state: "open" || "closed",
 * //       cidrs: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ipv6Cidrs: [
 * //         "STRING_VALUE",
 * //       ],
 * //       cidrListAliases: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetInstancePortStatesCommandInput - {@link GetInstancePortStatesCommandInput}
 * @returns {@link GetInstancePortStatesCommandOutput}
 * @see {@link GetInstancePortStatesCommandInput} for command's `input` shape.
 * @see {@link GetInstancePortStatesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetInstancePortStatesCommand extends $Command
  .classBuilder<
    GetInstancePortStatesCommandInput,
    GetInstancePortStatesCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetInstancePortStates", {})
  .n("LightsailClient", "GetInstancePortStatesCommand")
  .f(void 0, void 0)
  .ser(se_GetInstancePortStatesCommand)
  .de(de_GetInstancePortStatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstancePortStatesRequest;
      output: GetInstancePortStatesResult;
    };
    sdk: {
      input: GetInstancePortStatesCommandInput;
      output: GetInstancePortStatesCommandOutput;
    };
  };
}
