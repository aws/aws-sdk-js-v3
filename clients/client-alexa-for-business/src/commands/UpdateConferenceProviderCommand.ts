// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConferenceProviderRequest, UpdateConferenceProviderResponse } from "../models/models_0";
import { de_UpdateConferenceProviderCommand, se_UpdateConferenceProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConferenceProviderCommand}.
 */
export interface UpdateConferenceProviderCommandInput extends UpdateConferenceProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConferenceProviderCommand}.
 */
export interface UpdateConferenceProviderCommandOutput extends UpdateConferenceProviderResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Updates an existing conference provider's settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateConferenceProviderRequest
 *   ConferenceProviderArn: "STRING_VALUE", // required
 *   ConferenceProviderType: "CHIME" || "BLUEJEANS" || "FUZE" || "GOOGLE_HANGOUTS" || "POLYCOM" || "RINGCENTRAL" || "SKYPE_FOR_BUSINESS" || "WEBEX" || "ZOOM" || "CUSTOM", // required
 *   IPDialIn: { // IPDialIn
 *     Endpoint: "STRING_VALUE", // required
 *     CommsProtocol: "SIP" || "SIPS" || "H323", // required
 *   },
 *   PSTNDialIn: { // PSTNDialIn
 *     CountryCode: "STRING_VALUE", // required
 *     PhoneNumber: "STRING_VALUE", // required
 *     OneClickIdDelay: "STRING_VALUE", // required
 *     OneClickPinDelay: "STRING_VALUE", // required
 *   },
 *   MeetingSetting: { // MeetingSetting
 *     RequirePin: "YES" || "NO" || "OPTIONAL", // required
 *   },
 * };
 * const command = new UpdateConferenceProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConferenceProviderCommandInput - {@link UpdateConferenceProviderCommandInput}
 * @returns {@link UpdateConferenceProviderCommandOutput}
 * @see {@link UpdateConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class UpdateConferenceProviderCommand extends $Command
  .classBuilder<
    UpdateConferenceProviderCommandInput,
    UpdateConferenceProviderCommandOutput,
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
  .s("AlexaForBusiness", "UpdateConferenceProvider", {})
  .n("AlexaForBusinessClient", "UpdateConferenceProviderCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConferenceProviderCommand)
  .de(de_UpdateConferenceProviderCommand)
  .build() {}
