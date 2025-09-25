// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSavingsPlanRatesRequest, DescribeSavingsPlanRatesResponse } from "../models/models_0";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import { DescribeSavingsPlanRates } from "../schemas/schemas_1_Savings";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSavingsPlanRatesCommand}.
 */
export interface DescribeSavingsPlanRatesCommandInput extends DescribeSavingsPlanRatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSavingsPlanRatesCommand}.
 */
export interface DescribeSavingsPlanRatesCommandOutput extends DescribeSavingsPlanRatesResponse, __MetadataBearer {}

/**
 * <p>Describes the rates for the specified Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlanRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlanRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * // import type { SavingsplansClientConfig } from "@aws-sdk/client-savingsplans";
 * const config = {}; // type is SavingsplansClientConfig
 * const client = new SavingsplansClient(config);
 * const input = { // DescribeSavingsPlanRatesRequest
 *   savingsPlanId: "STRING_VALUE", // required
 *   filters: [ // SavingsPlanRateFilterList
 *     { // SavingsPlanRateFilter
 *       name: "region" || "instanceType" || "productDescription" || "tenancy" || "productType" || "serviceCode" || "usageType" || "operation",
 *       values: [ // ListOfStrings
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeSavingsPlanRatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSavingsPlanRatesResponse
 * //   savingsPlanId: "STRING_VALUE",
 * //   searchResults: [ // SavingsPlanRateList
 * //     { // SavingsPlanRate
 * //       rate: "STRING_VALUE",
 * //       currency: "CNY" || "USD",
 * //       unit: "Hrs" || "Lambda-GB-Second" || "Request",
 * //       productType: "EC2" || "Fargate" || "Lambda" || "SageMaker",
 * //       serviceCode: "AmazonEC2" || "AmazonECS" || "AmazonEKS" || "AWSLambda" || "AmazonSageMaker",
 * //       usageType: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       properties: [ // SavingsPlanRatePropertyList
 * //         { // SavingsPlanRateProperty
 * //           name: "region" || "instanceType" || "instanceFamily" || "productDescription" || "tenancy",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSavingsPlanRatesCommandInput - {@link DescribeSavingsPlanRatesCommandInput}
 * @returns {@link DescribeSavingsPlanRatesCommandOutput}
 * @see {@link DescribeSavingsPlanRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlanRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters is not valid.</p>
 *
 * @throws {@link SavingsplansServiceException}
 * <p>Base exception class for all service exceptions from Savingsplans service.</p>
 *
 *
 * @public
 */
export class DescribeSavingsPlanRatesCommand extends $Command
  .classBuilder<
    DescribeSavingsPlanRatesCommandInput,
    DescribeSavingsPlanRatesCommandOutput,
    SavingsplansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SavingsplansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSavingsPlan", "DescribeSavingsPlanRates", {})
  .n("SavingsplansClient", "DescribeSavingsPlanRatesCommand")
  .sc(DescribeSavingsPlanRates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSavingsPlanRatesRequest;
      output: DescribeSavingsPlanRatesResponse;
    };
    sdk: {
      input: DescribeSavingsPlanRatesCommandInput;
      output: DescribeSavingsPlanRatesCommandOutput;
    };
  };
}
