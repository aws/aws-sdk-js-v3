// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConferenceProviderRequest, GetConferenceProviderResponse } from "../models/models_0";
import { de_GetConferenceProviderCommand, se_GetConferenceProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConferenceProviderCommand}.
 */
export interface GetConferenceProviderCommandInput extends GetConferenceProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetConferenceProviderCommand}.
 */
export interface GetConferenceProviderCommandOutput extends GetConferenceProviderResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets details about a specific conference provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetConferenceProviderRequest
 *   ConferenceProviderArn: "STRING_VALUE", // required
 * };
 * const command = new GetConferenceProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetConferenceProviderResponse
 * //   ConferenceProvider: { // ConferenceProvider
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "CHIME" || "BLUEJEANS" || "FUZE" || "GOOGLE_HANGOUTS" || "POLYCOM" || "RINGCENTRAL" || "SKYPE_FOR_BUSINESS" || "WEBEX" || "ZOOM" || "CUSTOM",
 * //     IPDialIn: { // IPDialIn
 * //       Endpoint: "STRING_VALUE", // required
 * //       CommsProtocol: "SIP" || "SIPS" || "H323", // required
 * //     },
 * //     PSTNDialIn: { // PSTNDialIn
 * //       CountryCode: "STRING_VALUE", // required
 * //       PhoneNumber: "STRING_VALUE", // required
 * //       OneClickIdDelay: "STRING_VALUE", // required
 * //       OneClickPinDelay: "STRING_VALUE", // required
 * //     },
 * //     MeetingSetting: { // MeetingSetting
 * //       RequirePin: "YES" || "NO" || "OPTIONAL", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConferenceProviderCommandInput - {@link GetConferenceProviderCommandInput}
 * @returns {@link GetConferenceProviderCommandOutput}
 * @see {@link GetConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link GetConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetConferenceProviderCommand extends $Command
  .classBuilder<
    GetConferenceProviderCommandInput,
    GetConferenceProviderCommandOutput,
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
  .s("AlexaForBusiness", "GetConferenceProvider", {})
  .n("AlexaForBusinessClient", "GetConferenceProviderCommand")
  .f(void 0, void 0)
  .ser(se_GetConferenceProviderCommand)
  .de(de_GetConferenceProviderCommand)
  .build() {}
