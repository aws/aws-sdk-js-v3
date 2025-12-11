// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSavingsPlansOfferingsRequest, DescribeSavingsPlansOfferingsResponse } from "../models/models_0";
import type { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import { DescribeSavingsPlansOfferings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSavingsPlansOfferingsCommand}.
 */
export interface DescribeSavingsPlansOfferingsCommandInput extends DescribeSavingsPlansOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSavingsPlansOfferingsCommand}.
 */
export interface DescribeSavingsPlansOfferingsCommandOutput
  extends DescribeSavingsPlansOfferingsResponse,
    __MetadataBearer {}

/**
 * <p>Describes the offerings for the specified Savings Plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansOfferingsCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansOfferingsCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * // import type { SavingsplansClientConfig } from "@aws-sdk/client-savingsplans";
 * const config = {}; // type is SavingsplansClientConfig
 * const client = new SavingsplansClient(config);
 * const input = { // DescribeSavingsPlansOfferingsRequest
 *   offeringIds: [ // UUIDs
 *     "STRING_VALUE",
 *   ],
 *   paymentOptions: [ // SavingsPlanPaymentOptionList
 *     "All Upfront" || "Partial Upfront" || "No Upfront",
 *   ],
 *   productType: "EC2" || "Fargate" || "Lambda" || "SageMaker" || "RDS" || "DSQL" || "DynamoDB" || "ElastiCache" || "DocDB" || "Neptune" || "Timestream" || "Keyspaces" || "DMS",
 *   planTypes: [ // SavingsPlanTypeList
 *     "Compute" || "EC2Instance" || "SageMaker" || "Database",
 *   ],
 *   durations: [ // DurationsList
 *     Number("long"),
 *   ],
 *   currencies: [ // CurrencyList
 *     "CNY" || "USD" || "EUR",
 *   ],
 *   descriptions: [ // SavingsPlanDescriptionsList
 *     "STRING_VALUE",
 *   ],
 *   serviceCodes: [ // SavingsPlanServiceCodeList
 *     "STRING_VALUE",
 *   ],
 *   usageTypes: [ // SavingsPlanUsageTypeList
 *     "STRING_VALUE",
 *   ],
 *   operations: [ // SavingsPlanOperationList
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // SavingsPlanOfferingFiltersList
 *     { // SavingsPlanOfferingFilterElement
 *       name: "region" || "instanceFamily",
 *       values: [ // FilterValuesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeSavingsPlansOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSavingsPlansOfferingsResponse
 * //   searchResults: [ // SavingsPlanOfferingsList
 * //     { // SavingsPlanOffering
 * //       offeringId: "STRING_VALUE",
 * //       productTypes: [ // SavingsPlanProductTypeList
 * //         "EC2" || "Fargate" || "Lambda" || "SageMaker" || "RDS" || "DSQL" || "DynamoDB" || "ElastiCache" || "DocDB" || "Neptune" || "Timestream" || "Keyspaces" || "DMS",
 * //       ],
 * //       planType: "Compute" || "EC2Instance" || "SageMaker" || "Database",
 * //       description: "STRING_VALUE",
 * //       paymentOption: "All Upfront" || "Partial Upfront" || "No Upfront",
 * //       durationSeconds: Number("long"),
 * //       currency: "CNY" || "USD" || "EUR",
 * //       serviceCode: "STRING_VALUE",
 * //       usageType: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       properties: [ // SavingsPlanOfferingPropertyList
 * //         { // SavingsPlanOfferingProperty
 * //           name: "region" || "instanceFamily",
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
 * @param DescribeSavingsPlansOfferingsCommandInput - {@link DescribeSavingsPlansOfferingsCommandInput}
 * @returns {@link DescribeSavingsPlansOfferingsCommandOutput}
 * @see {@link DescribeSavingsPlansOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansOfferingsCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred.</p>
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
export class DescribeSavingsPlansOfferingsCommand extends $Command
  .classBuilder<
    DescribeSavingsPlansOfferingsCommandInput,
    DescribeSavingsPlansOfferingsCommandOutput,
    SavingsplansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SavingsplansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSavingsPlan", "DescribeSavingsPlansOfferings", {})
  .n("SavingsplansClient", "DescribeSavingsPlansOfferingsCommand")
  .sc(DescribeSavingsPlansOfferings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSavingsPlansOfferingsRequest;
      output: DescribeSavingsPlansOfferingsResponse;
    };
    sdk: {
      input: DescribeSavingsPlansOfferingsCommandInput;
      output: DescribeSavingsPlansOfferingsCommandOutput;
    };
  };
}
