// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPriceListFileUrlRequest, GetPriceListFileUrlResponse } from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { GetPriceListFileUrl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPriceListFileUrlCommand}.
 */
export interface GetPriceListFileUrlCommandInput extends GetPriceListFileUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetPriceListFileUrlCommand}.
 */
export interface GetPriceListFileUrlCommandOutput extends GetPriceListFileUrlResponse, __MetadataBearer {}

/**
 * <p>
 *             <i>
 *                <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b>
 *             </i>
 *          </p>
 *          <p>This returns the URL that you can retrieve your Price List file from. This URL is based
 *          on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the
 *             <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">ListPriceLists</a> response. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetPriceListFileUrlCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetPriceListFileUrlCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * // import type { PricingClientConfig } from "@aws-sdk/client-pricing";
 * const config = {}; // type is PricingClientConfig
 * const client = new PricingClient(config);
 * const input = { // GetPriceListFileUrlRequest
 *   PriceListArn: "STRING_VALUE", // required
 *   FileFormat: "STRING_VALUE", // required
 * };
 * const command = new GetPriceListFileUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetPriceListFileUrlResponse
 * //   Url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPriceListFileUrlCommandInput - {@link GetPriceListFileUrlCommandInput}
 * @returns {@link GetPriceListFileUrlCommandOutput}
 * @see {@link GetPriceListFileUrlCommandInput} for command's `input` shape.
 * @see {@link GetPriceListFileUrlCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for PricingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request wasn't signed correctly.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
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
 *
 * @public
 */
export class GetPriceListFileUrlCommand extends $Command
  .classBuilder<
    GetPriceListFileUrlCommandInput,
    GetPriceListFileUrlCommandOutput,
    PricingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PricingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPriceListService", "GetPriceListFileUrl", {})
  .n("PricingClient", "GetPriceListFileUrlCommand")
  .sc(GetPriceListFileUrl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPriceListFileUrlRequest;
      output: GetPriceListFileUrlResponse;
    };
    sdk: {
      input: GetPriceListFileUrlCommandInput;
      output: GetPriceListFileUrlCommandOutput;
    };
  };
}
