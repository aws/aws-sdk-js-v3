// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConferenceProviderRequest, CreateConferenceProviderResponse } from "../models/models_0";
import { de_CreateConferenceProviderCommand, se_CreateConferenceProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConferenceProviderCommand}.
 */
export interface CreateConferenceProviderCommandInput extends CreateConferenceProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateConferenceProviderCommand}.
 */
export interface CreateConferenceProviderCommandOutput extends CreateConferenceProviderResponse, __MetadataBearer {}

/**
 * <p>Adds a new conference provider under the user's AWS account.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateConferenceProviderRequest
 *   ConferenceProviderName: "STRING_VALUE", // required
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
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateConferenceProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateConferenceProviderResponse
 * //   ConferenceProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConferenceProviderCommandInput - {@link CreateConferenceProviderCommandInput}
 * @returns {@link CreateConferenceProviderCommandOutput}
 * @see {@link CreateConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link CreateConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class CreateConferenceProviderCommand extends $Command
  .classBuilder<
    CreateConferenceProviderCommandInput,
    CreateConferenceProviderCommandOutput,
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
  .s("AlexaForBusiness", "CreateConferenceProvider", {})
  .n("AlexaForBusinessClient", "CreateConferenceProviderCommand")
  .f(void 0, void 0)
  .ser(se_CreateConferenceProviderCommand)
  .de(de_CreateConferenceProviderCommand)
  .build() {}
