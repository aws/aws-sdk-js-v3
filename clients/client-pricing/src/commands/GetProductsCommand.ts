// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetProductsRequest, GetProductsResponse } from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { de_GetProductsCommand, se_GetProductsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of all products that match the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetProductsCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetProductsCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You've made too many requests exceeding service quotas.
 *       </p>
 *
 * @throws {@link PricingServiceException}
 * <p>Base exception class for all service exceptions from Pricing service.</p>
 *
 *
 * @public
 */
export class GetProductsCommand extends $Command
  .classBuilder<
    GetProductsCommandInput,
    GetProductsCommandOutput,
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
  .s("AWSPriceListService", "GetProducts", {})
  .n("PricingClient", "GetProductsCommand")
  .f(void 0, void 0)
  .ser(se_GetProductsCommand)
  .de(de_GetProductsCommand)
  .build() {
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
