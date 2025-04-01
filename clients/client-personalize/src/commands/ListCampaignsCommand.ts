// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCampaignsRequest, ListCampaignsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListCampaignsCommand, se_ListCampaignsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCampaignsCommand}.
 */
export interface ListCampaignsCommandInput extends ListCampaignsRequest {}
/**
 * @public
 *
 * The output of {@link ListCampaignsCommand}.
 */
export interface ListCampaignsCommandOutput extends ListCampaignsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of campaigns that use the given solution.
 *       When a solution is not specified, all the campaigns associated with the account are listed.
 *       The response provides the properties for each campaign, including the Amazon Resource Name (ARN).
 *       For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListCampaignsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListCampaignsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // ListCampaignsRequest
 *   solutionArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * // { // ListCampaignsResponse
 * //   campaigns: [ // Campaigns
 * //     { // CampaignSummary
 * //       name: "STRING_VALUE",
 * //       campaignArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCampaignsCommandInput - {@link ListCampaignsCommandInput}
 * @returns {@link ListCampaignsCommandOutput}
 * @see {@link ListCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListCampaignsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class ListCampaignsCommand extends $Command
  .classBuilder<
    ListCampaignsCommandInput,
    ListCampaignsCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "ListCampaigns", {})
  .n("PersonalizeClient", "ListCampaignsCommand")
  .f(void 0, void 0)
  .ser(se_ListCampaignsCommand)
  .de(de_ListCampaignsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCampaignsRequest;
      output: ListCampaignsResponse;
    };
    sdk: {
      input: ListCampaignsCommandInput;
      output: ListCampaignsCommandOutput;
    };
  };
}
