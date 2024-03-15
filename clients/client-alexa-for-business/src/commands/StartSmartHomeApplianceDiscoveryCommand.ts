// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartSmartHomeApplianceDiscoveryRequest, StartSmartHomeApplianceDiscoveryResponse } from "../models/models_0";
import {
  de_StartSmartHomeApplianceDiscoveryCommand,
  se_StartSmartHomeApplianceDiscoveryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSmartHomeApplianceDiscoveryCommand}.
 */
export interface StartSmartHomeApplianceDiscoveryCommandInput extends StartSmartHomeApplianceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link StartSmartHomeApplianceDiscoveryCommand}.
 */
export interface StartSmartHomeApplianceDiscoveryCommandOutput
  extends StartSmartHomeApplianceDiscoveryResponse,
    __MetadataBearer {}

/**
 * <p>Initiates the discovery of any smart home appliances associated with the
 *          room.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // StartSmartHomeApplianceDiscoveryRequest
 *   RoomArn: "STRING_VALUE", // required
 * };
 * const command = new StartSmartHomeApplianceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartSmartHomeApplianceDiscoveryCommandInput - {@link StartSmartHomeApplianceDiscoveryCommandInput}
 * @returns {@link StartSmartHomeApplianceDiscoveryCommandOutput}
 * @see {@link StartSmartHomeApplianceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link StartSmartHomeApplianceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class StartSmartHomeApplianceDiscoveryCommand extends $Command
  .classBuilder<
    StartSmartHomeApplianceDiscoveryCommandInput,
    StartSmartHomeApplianceDiscoveryCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "StartSmartHomeApplianceDiscovery", {})
  .n("AlexaForBusinessClient", "StartSmartHomeApplianceDiscoveryCommand")
  .f(void 0, void 0)
  .ser(se_StartSmartHomeApplianceDiscoveryCommand)
  .de(de_StartSmartHomeApplianceDiscoveryCommand)
  .build() {}
