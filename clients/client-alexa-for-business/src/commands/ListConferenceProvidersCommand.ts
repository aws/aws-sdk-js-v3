// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConferenceProvidersRequest, ListConferenceProvidersResponse } from "../models/models_0";
import { de_ListConferenceProvidersCommand, se_ListConferenceProvidersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConferenceProvidersCommand}.
 */
export interface ListConferenceProvidersCommandInput extends ListConferenceProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListConferenceProvidersCommand}.
 */
export interface ListConferenceProvidersCommandOutput extends ListConferenceProvidersResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Lists conference providers under a specific AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListConferenceProvidersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListConferenceProvidersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListConferenceProvidersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListConferenceProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListConferenceProvidersResponse
 * //   ConferenceProviders: [ // ConferenceProvidersList
 * //     { // ConferenceProvider
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "CHIME" || "BLUEJEANS" || "FUZE" || "GOOGLE_HANGOUTS" || "POLYCOM" || "RINGCENTRAL" || "SKYPE_FOR_BUSINESS" || "WEBEX" || "ZOOM" || "CUSTOM",
 * //       IPDialIn: { // IPDialIn
 * //         Endpoint: "STRING_VALUE", // required
 * //         CommsProtocol: "SIP" || "SIPS" || "H323", // required
 * //       },
 * //       PSTNDialIn: { // PSTNDialIn
 * //         CountryCode: "STRING_VALUE", // required
 * //         PhoneNumber: "STRING_VALUE", // required
 * //         OneClickIdDelay: "STRING_VALUE", // required
 * //         OneClickPinDelay: "STRING_VALUE", // required
 * //       },
 * //       MeetingSetting: { // MeetingSetting
 * //         RequirePin: "YES" || "NO" || "OPTIONAL", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConferenceProvidersCommandInput - {@link ListConferenceProvidersCommandInput}
 * @returns {@link ListConferenceProvidersCommandOutput}
 * @see {@link ListConferenceProvidersCommandInput} for command's `input` shape.
 * @see {@link ListConferenceProvidersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListConferenceProvidersCommand extends $Command
  .classBuilder<
    ListConferenceProvidersCommandInput,
    ListConferenceProvidersCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "ListConferenceProviders", {})
  .n("AlexaForBusinessClient", "ListConferenceProvidersCommand")
  .f(void 0, void 0)
  .ser(se_ListConferenceProvidersCommand)
  .de(de_ListConferenceProvidersCommand)
  .build() {}
