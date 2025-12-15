// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeSavingsPlansOfferingRatesRequest,
  DescribeSavingsPlansOfferingRatesResponse,
} from "../models/models_0";
import type { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import { DescribeSavingsPlansOfferingRates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSavingsPlansOfferingRatesCommand}.
 */
export interface DescribeSavingsPlansOfferingRatesCommandInput extends DescribeSavingsPlansOfferingRatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSavingsPlansOfferingRatesCommand}.
 */
export interface DescribeSavingsPlansOfferingRatesCommandOutput
  extends DescribeSavingsPlansOfferingRatesResponse,
    __MetadataBearer {}

/**
 * <p>Describes the offering rates for Savings Plans you might want to purchase.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * // import type { SavingsplansClientConfig } from "@aws-sdk/client-savingsplans";
 * const config = {}; // type is SavingsplansClientConfig
 * const client = new SavingsplansClient(config);
 * const input = { // DescribeSavingsPlansOfferingRatesRequest
 *   savingsPlanOfferingIds: [ // UUIDs
 *     "STRING_VALUE",
 *   ],
 *   savingsPlanPaymentOptions: [ // SavingsPlanPaymentOptionList
 *     "All Upfront" || "Partial Upfront" || "No Upfront",
 *   ],
 *   savingsPlanTypes: [ // SavingsPlanTypeList
 *     "Compute" || "EC2Instance" || "SageMaker" || "Database",
 *   ],
 *   products: [ // SavingsPlanProductTypeList
 *     "EC2" || "Fargate" || "Lambda" || "SageMaker" || "RDS" || "DSQL" || "DynamoDB" || "ElastiCache" || "DocDB" || "Neptune" || "Timestream" || "Keyspaces" || "DMS",
 *   ],
 *   serviceCodes: [ // SavingsPlanRateServiceCodeList
 *     "AmazonEC2" || "AmazonECS" || "AmazonEKS" || "AWSLambda" || "AmazonSageMaker" || "AmazonRDS" || "AuroraDSQL" || "AmazonDynamoDB" || "AmazonElastiCache" || "AmazonDocDB" || "AmazonNeptune" || "AmazonTimestream" || "AmazonMCS" || "AWSDatabaseMigrationSvc",
 *   ],
 *   usageTypes: [ // SavingsPlanRateUsageTypeList
 *     "STRING_VALUE",
 *   ],
 *   operations: [ // SavingsPlanRateOperationList
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // SavingsPlanOfferingRateFiltersList
 *     { // SavingsPlanOfferingRateFilterElement
 *       name: "region" || "instanceFamily" || "instanceType" || "productDescription" || "tenancy" || "productId",
 *       values: [ // FilterValuesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeSavingsPlansOfferingRatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSavingsPlansOfferingRatesResponse
 * //   searchResults: [ // SavingsPlanOfferingRatesList
 * //     { // SavingsPlanOfferingRate
 * //       savingsPlanOffering: { // ParentSavingsPlanOffering
 * //         offeringId: "STRING_VALUE",
 * //         paymentOption: "All Upfront" || "Partial Upfront" || "No Upfront",
 * //         planType: "Compute" || "EC2Instance" || "SageMaker" || "Database",
 * //         durationSeconds: Number("long"),
 * //         currency: "CNY" || "USD" || "EUR",
 * //         planDescription: "STRING_VALUE",
 * //       },
 * //       rate: "STRING_VALUE",
 * //       unit: "Hrs" || "Lambda-GB-Second" || "Request" || "ACU-Hr" || "ReadRequestUnits" || "WriteRequestUnits" || "ReadCapacityUnit-Hrs" || "WriteCapacityUnit-Hrs" || "ReplicatedWriteRequestUnits" || "ReplicatedWriteCapacityUnit-Hrs" || "GB-Hours" || "DPU" || "ElastiCacheProcessingUnit" || "DCU-Hr" || "NCU-hr",
 * //       productType: "EC2" || "Fargate" || "Lambda" || "SageMaker" || "RDS" || "DSQL" || "DynamoDB" || "ElastiCache" || "DocDB" || "Neptune" || "Timestream" || "Keyspaces" || "DMS",
 * //       serviceCode: "AmazonEC2" || "AmazonECS" || "AmazonEKS" || "AWSLambda" || "AmazonSageMaker" || "AmazonRDS" || "AuroraDSQL" || "AmazonDynamoDB" || "AmazonElastiCache" || "AmazonDocDB" || "AmazonNeptune" || "AmazonTimestream" || "AmazonMCS" || "AWSDatabaseMigrationSvc",
 * //       usageType: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       properties: [ // SavingsPlanOfferingRatePropertyList
 * //         { // SavingsPlanOfferingRateProperty
 * //           name: "STRING_VALUE",
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
 * @param DescribeSavingsPlansOfferingRatesCommandInput - {@link DescribeSavingsPlansOfferingRatesCommandInput}
 * @returns {@link DescribeSavingsPlansOfferingRatesCommandOutput}
 * @see {@link DescribeSavingsPlansOfferingRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansOfferingRatesCommandOutput} for command's `response` shape.
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
export class DescribeSavingsPlansOfferingRatesCommand extends $Command
  .classBuilder<
    DescribeSavingsPlansOfferingRatesCommandInput,
    DescribeSavingsPlansOfferingRatesCommandOutput,
    SavingsplansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SavingsplansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSavingsPlan", "DescribeSavingsPlansOfferingRates", {})
  .n("SavingsplansClient", "DescribeSavingsPlansOfferingRatesCommand")
  .sc(DescribeSavingsPlansOfferingRates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSavingsPlansOfferingRatesRequest;
      output: DescribeSavingsPlansOfferingRatesResponse;
    };
    sdk: {
      input: DescribeSavingsPlansOfferingRatesCommandInput;
      output: DescribeSavingsPlansOfferingRatesCommandOutput;
    };
  };
}
