// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProductsRequest, GetProductsResponse } from "../models/models_0";
import { GetProducts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProductsCommand}.
 */
export interface GetProductsCommandInput extends GetProductsRequest {}
/**
 * @public
 *
 * The output of {@link GetProductsCommand}.
 */
export interface GetProductsCommandOutput extends GetProductsResponse, __MetadataBearer {}

/**
 * Returns a list of all products that match the filter criteria.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetProductsCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetProductsCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * // import type { PricingClientConfig } from "@aws-sdk/client-pricing";
 * const config = {}; // type is PricingClientConfig
 * const client = new PricingClient(config);
 * const input = { // GetProductsRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   Filters: [ // Filters
 *     { // Filter
 *       Type: "TERM_MATCH" || "EQUALS" || "CONTAINS" || "ANY_OF" || "NONE_OF", // required
 *       Field: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   FormatVersion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetProductsCommand(input);
 * const response = await client.send(command);
 * // { // GetProductsResponse
 * //   FormatVersion: "STRING_VALUE",
 * //   PriceList: [ // PriceListJsonItems
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProductsCommandInput - {@link GetProductsCommandInput}
 * @returns {@link GetProductsCommandOutput}
 * @see {@link GetProductsCommandInput} for command's `input` shape.
 * @see {@link GetProductsCommandOutput} for command's `response` shape.
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
export class GetProductsCommand extends command<GetProductsCommandInput, GetProductsCommandOutput>(
  _ep0,
  _mw0,
  "GetProducts",
  GetProducts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProductsRequest;
      output: GetProductsResponse;
    };
    sdk: {
      input: GetProductsCommandInput;
      output: GetProductsCommandOutput;
    };
  };
}
