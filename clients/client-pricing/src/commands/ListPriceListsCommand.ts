// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPriceListsRequest, ListPriceListsResponse } from "../models/models_0";
import { ListPriceLists$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * ***This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the [Amazon Web Services Service Terms](https://aws.amazon.com/service-terms/) (Section 1.10).***
 *
 * This returns a list of Price List references that the requester if authorized to view, given a `ServiceCode`, `CurrencyCode`, and an `EffectiveDate`. Use without a `RegionCode` filter to list Price List references from all available Amazon Web Services Regions. Use with a `RegionCode` filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the `PriceListArn` from the response to get your preferred Price List files through the [GetPriceListFileUrl](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, ListPriceListsCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, ListPriceListsCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * // import type { PricingClientConfig } from "@aws-sdk/client-pricing";
 * const config = {}; // type is PricingClientConfig
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
 *
 * General authentication failure. The request wasn't signed correctly.
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *
 * The pagination token expired. Try again without a pagination token.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * An error on the server occurred during the processing of your request. Try again later.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The pagination token is invalid. Try again without a pagination token.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters had an invalid value.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You've made too many requests exceeding service quotas.
 *
 * @throws {@link PricingServiceException}
 *
 * Base exception class for all service exceptions from Pricing service.
 *
 * @public
 */
export class ListPriceListsCommand extends command<ListPriceListsCommandInput, ListPriceListsCommandOutput>(
  _ep0,
  _mw0,
  "ListPriceLists",
  ListPriceLists$
) {
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
