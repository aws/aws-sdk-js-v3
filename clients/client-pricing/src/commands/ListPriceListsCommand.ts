// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPriceListsRequest, ListPriceListsResponse } from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { de_ListPriceListsCommand, se_ListPriceListsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPriceListsCommand}.
 */
export interface ListPriceListsCommandInput extends ListPriceListsRequest {}
/**
 * @public
 *
 * The output of {@link ListPriceListsCommand}.
 */
export interface ListPriceListsCommandOutput extends ListPriceListsResponse, __MetadataBearer {}

/**
 * <p>
 *             <i>
 *                <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b>
 *             </i>
 *          </p>
 *          <p>This returns a list of Price List references that the requester if authorized to view,
 *          given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an
 *             <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price
 *          List references from all available Amazon Web Services Regions. Use with a
 *             <code>RegionCode</code> filter to get the Price List reference that's specific to a
 *          specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the
 *          response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html">GetPriceListFileUrl</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, ListPriceListsCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, ListPriceListsCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PricingClient(config);
 * const input = { // ListPriceListsRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   EffectiveDate: new Date("TIMESTAMP"), // required
 *   RegionCode: "STRING_VALUE",
 *   CurrencyCode: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPriceListsCommand(input);
 * const response = await client.send(command);
 * // { // ListPriceListsResponse
 * //   PriceLists: [ // PriceLists
 * //     { // PriceList
 * //       PriceListArn: "STRING_VALUE",
 * //       RegionCode: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       FileFormats: [ // FileFormats
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPriceListsCommandInput - {@link ListPriceListsCommandInput}
 * @returns {@link ListPriceListsCommandOutput}
 * @see {@link ListPriceListsCommandInput} for command's `input` shape.
 * @see {@link ListPriceListsCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for PricingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request wasn't signed correctly.</p>
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *  <p>The pagination token expired. Try again without a pagination token.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters had an invalid value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You've made too many requests exceeding service quotas.
 *       </p>
 *
 * @throws {@link PricingServiceException}
 * <p>Base exception class for all service exceptions from Pricing service.</p>
 *
 * @public
 */
export class ListPriceListsCommand extends $Command
  .classBuilder<
    ListPriceListsCommandInput,
    ListPriceListsCommandOutput,
    PricingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PricingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPriceListService", "ListPriceLists", {})
  .n("PricingClient", "ListPriceListsCommand")
  .f(void 0, void 0)
  .ser(se_ListPriceListsCommand)
  .de(de_ListPriceListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPriceListsRequest;
      output: ListPriceListsResponse;
    };
    sdk: {
      input: ListPriceListsCommandInput;
      output: ListPriceListsCommandOutput;
    };
  };
}
