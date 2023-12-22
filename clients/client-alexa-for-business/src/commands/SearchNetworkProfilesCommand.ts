// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchNetworkProfilesRequest, SearchNetworkProfilesResponse } from "../models/models_0";
import { de_SearchNetworkProfilesCommand, se_SearchNetworkProfilesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchNetworkProfilesCommand}.
 */
export interface SearchNetworkProfilesCommandInput extends SearchNetworkProfilesRequest {}
/**
 * @public
 *
 * The output of {@link SearchNetworkProfilesCommand}.
 */
export interface SearchNetworkProfilesCommandOutput extends SearchNetworkProfilesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Searches network profiles and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchNetworkProfilesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchNetworkProfilesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchNetworkProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortCriteria: [ // SortList
 *     { // Sort
 *       Key: "STRING_VALUE", // required
 *       Value: "ASC" || "DESC", // required
 *     },
 *   ],
 * };
 * const command = new SearchNetworkProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchNetworkProfilesResponse
 * //   NetworkProfiles: [ // NetworkProfileDataList
 * //     { // NetworkProfileData
 * //       NetworkProfileArn: "STRING_VALUE",
 * //       NetworkProfileName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Ssid: "STRING_VALUE",
 * //       SecurityType: "OPEN" || "WEP" || "WPA_PSK" || "WPA2_PSK" || "WPA2_ENTERPRISE",
 * //       EapMethod: "EAP_TLS",
 * //       CertificateAuthorityArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchNetworkProfilesCommandInput - {@link SearchNetworkProfilesCommandInput}
 * @returns {@link SearchNetworkProfilesCommandOutput}
 * @see {@link SearchNetworkProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchNetworkProfilesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchNetworkProfilesCommand extends $Command
  .classBuilder<
    SearchNetworkProfilesCommandInput,
    SearchNetworkProfilesCommandOutput,
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
  .s("AlexaForBusiness", "SearchNetworkProfiles", {})
  .n("AlexaForBusinessClient", "SearchNetworkProfilesCommand")
  .f(void 0, void 0)
  .ser(se_SearchNetworkProfilesCommand)
  .de(de_SearchNetworkProfilesCommand)
  .build() {}
