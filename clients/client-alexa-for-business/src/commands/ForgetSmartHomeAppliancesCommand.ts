// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ForgetSmartHomeAppliancesRequest, ForgetSmartHomeAppliancesResponse } from "../models/models_0";
import { de_ForgetSmartHomeAppliancesCommand, se_ForgetSmartHomeAppliancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ForgetSmartHomeAppliancesCommand}.
 */
export interface ForgetSmartHomeAppliancesCommandInput extends ForgetSmartHomeAppliancesRequest {}
/**
 * @public
 *
 * The output of {@link ForgetSmartHomeAppliancesCommand}.
 */
export interface ForgetSmartHomeAppliancesCommandOutput extends ForgetSmartHomeAppliancesResponse, __MetadataBearer {}

/**
 * <p>Forgets smart home appliances associated to a room.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ForgetSmartHomeAppliancesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ForgetSmartHomeAppliancesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ForgetSmartHomeAppliancesRequest
 *   RoomArn: "STRING_VALUE", // required
 * };
 * const command = new ForgetSmartHomeAppliancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ForgetSmartHomeAppliancesCommandInput - {@link ForgetSmartHomeAppliancesCommandInput}
 * @returns {@link ForgetSmartHomeAppliancesCommandOutput}
 * @see {@link ForgetSmartHomeAppliancesCommandInput} for command's `input` shape.
 * @see {@link ForgetSmartHomeAppliancesCommandOutput} for command's `response` shape.
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
export class ForgetSmartHomeAppliancesCommand extends $Command
  .classBuilder<
    ForgetSmartHomeAppliancesCommandInput,
    ForgetSmartHomeAppliancesCommandOutput,
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
  .s("AlexaForBusiness", "ForgetSmartHomeAppliances", {})
  .n("AlexaForBusinessClient", "ForgetSmartHomeAppliancesCommand")
  .f(void 0, void 0)
  .ser(se_ForgetSmartHomeAppliancesCommand)
  .de(de_ForgetSmartHomeAppliancesCommand)
  .build() {}
