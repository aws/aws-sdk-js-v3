// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateBillEstimateRequest, CreateBillEstimateResponse } from "../models/models_0";
import { CreateBillEstimate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBillEstimateCommand}.
 */
export interface CreateBillEstimateCommandInput extends CreateBillEstimateRequest {}
/**
 * @public
 *
 * The output of {@link CreateBillEstimateCommand}.
 */
export interface CreateBillEstimateCommandOutput extends CreateBillEstimateResponse, __MetadataBearer {}

/**
 * <p> Create a Bill estimate from a Bill scenario. In the Bill scenario you can model usage addition, usage changes, and usage removal. You can also model commitment addition and commitment removal. After all changes in a Bill scenario is made satisfactorily, you can call this API with a Bill scenario ID to generate the Bill estimate. Bill estimate calculates the pre-tax cost for your consolidated billing family, incorporating all modeled usage and commitments alongside existing usage and commitments from your most recent completed anniversary bill, with any applicable discounts applied. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, CreateBillEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, CreateBillEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // CreateBillEstimateRequest
 *   billScenarioId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBillEstimateCommand(input);
 * const response = await client.send(command);
 * // { // CreateBillEstimateResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //   failureMessage: "STRING_VALUE",
 * //   billInterval: { // BillInterval
 * //     start: new Date("TIMESTAMP"),
 * //     end: new Date("TIMESTAMP"),
 * //   },
 * //   costSummary: { // BillEstimateCostSummary
 * //     totalCostDifference: { // CostDifference
 * //       historicalCost: { // CostAmount
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //       estimatedCost: {
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //     },
 * //     serviceCostDifferences: { // ServiceCostDifferenceMap
 * //       "<keys>": {
 * //         historicalCost: {
 * //           amount: Number("double"),
 * //           currency: "USD",
 * //         },
 * //         estimatedCost: {
 * //           amount: Number("double"),
 * //           currency: "USD",
 * //         },
 * //       },
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   groupSharingPreference: "OPEN" || "PRIORITIZED" || "RESTRICTED",
 * //   costCategoryGroupSharingPreferenceArn: "STRING_VALUE",
 * //   costCategoryGroupSharingPreferenceEffectiveDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateBillEstimateCommandInput - {@link CreateBillEstimateCommandInput}
 * @returns {@link CreateBillEstimateCommandOutput}
 * @see {@link CreateBillEstimateCommandInput} for command's `input` shape.
 * @see {@link CreateBillEstimateCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be processed because of conflict in the current state of the resource. </p>
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p> The requested data is currently unavailable. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource was not found. </p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input provided fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 * <p>Base exception class for all service exceptions from BCMPricingCalculator service.</p>
 *
 *
 * @public
 */
export class CreateBillEstimateCommand extends $Command
  .classBuilder<
    CreateBillEstimateCommandInput,
    CreateBillEstimateCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "CreateBillEstimate", {})
  .n("BCMPricingCalculatorClient", "CreateBillEstimateCommand")
  .sc(CreateBillEstimate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBillEstimateRequest;
      output: CreateBillEstimateResponse;
    };
    sdk: {
      input: CreateBillEstimateCommandInput;
      output: CreateBillEstimateCommandOutput;
    };
  };
}
