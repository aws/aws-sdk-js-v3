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
import type {
  BatchCreateBillScenarioCommitmentModificationRequest,
  BatchCreateBillScenarioCommitmentModificationResponse,
} from "../models/models_0";
import { BatchCreateBillScenarioCommitmentModification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateBillScenarioCommitmentModificationCommand}.
 */
export interface BatchCreateBillScenarioCommitmentModificationCommandInput
  extends BatchCreateBillScenarioCommitmentModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateBillScenarioCommitmentModificationCommand}.
 */
export interface BatchCreateBillScenarioCommitmentModificationCommandOutput
  extends BatchCreateBillScenarioCommitmentModificationResponse,
    __MetadataBearer {}

/**
 * <p> Create Compute Savings Plans, EC2 Instance Savings Plans, or EC2 Reserved Instances commitments that you want to model in a Bill Scenario. </p> <note> <p>The <code>BatchCreateBillScenarioCommitmentModification</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission <code>bcm-pricing-calculator:CreateBillScenarioCommitmentModification</code> in your policies.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchCreateBillScenarioCommitmentModificationCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchCreateBillScenarioCommitmentModificationCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchCreateBillScenarioCommitmentModificationRequest
 *   billScenarioId: "STRING_VALUE", // required
 *   commitmentModifications: [ // BatchCreateBillScenarioCommitmentModificationEntries // required
 *     { // BatchCreateBillScenarioCommitmentModificationEntry
 *       key: "STRING_VALUE", // required
 *       group: "STRING_VALUE",
 *       usageAccountId: "STRING_VALUE", // required
 *       commitmentAction: { // BillScenarioCommitmentModificationAction Union: only one key present
 *         addReservedInstanceAction: { // AddReservedInstanceAction
 *           reservedInstancesOfferingId: "STRING_VALUE",
 *           instanceCount: Number("int"),
 *         },
 *         addSavingsPlanAction: { // AddSavingsPlanAction
 *           savingsPlanOfferingId: "STRING_VALUE",
 *           commitment: Number("double"),
 *         },
 *         negateReservedInstanceAction: { // NegateReservedInstanceAction
 *           reservedInstancesId: "STRING_VALUE",
 *         },
 *         negateSavingsPlanAction: { // NegateSavingsPlanAction
 *           savingsPlanId: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchCreateBillScenarioCommitmentModificationCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateBillScenarioCommitmentModificationResponse
 * //   items: [ // BatchCreateBillScenarioCommitmentModificationItems
 * //     { // BatchCreateBillScenarioCommitmentModificationItem
 * //       key: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       group: "STRING_VALUE",
 * //       usageAccountId: "STRING_VALUE",
 * //       commitmentAction: { // BillScenarioCommitmentModificationAction Union: only one key present
 * //         addReservedInstanceAction: { // AddReservedInstanceAction
 * //           reservedInstancesOfferingId: "STRING_VALUE",
 * //           instanceCount: Number("int"),
 * //         },
 * //         addSavingsPlanAction: { // AddSavingsPlanAction
 * //           savingsPlanOfferingId: "STRING_VALUE",
 * //           commitment: Number("double"),
 * //         },
 * //         negateReservedInstanceAction: { // NegateReservedInstanceAction
 * //           reservedInstancesId: "STRING_VALUE",
 * //         },
 * //         negateSavingsPlanAction: { // NegateSavingsPlanAction
 * //           savingsPlanId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchCreateBillScenarioCommitmentModificationErrors
 * //     { // BatchCreateBillScenarioCommitmentModificationError
 * //       key: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "CONFLICT" || "INTERNAL_SERVER_ERROR" || "INVALID_ACCOUNT",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateBillScenarioCommitmentModificationCommandInput - {@link BatchCreateBillScenarioCommitmentModificationCommandInput}
 * @returns {@link BatchCreateBillScenarioCommitmentModificationCommandOutput}
 * @see {@link BatchCreateBillScenarioCommitmentModificationCommandInput} for command's `input` shape.
 * @see {@link BatchCreateBillScenarioCommitmentModificationCommandOutput} for command's `response` shape.
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
export class BatchCreateBillScenarioCommitmentModificationCommand extends $Command
  .classBuilder<
    BatchCreateBillScenarioCommitmentModificationCommandInput,
    BatchCreateBillScenarioCommitmentModificationCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "BatchCreateBillScenarioCommitmentModification", {})
  .n("BCMPricingCalculatorClient", "BatchCreateBillScenarioCommitmentModificationCommand")
  .sc(BatchCreateBillScenarioCommitmentModification$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateBillScenarioCommitmentModificationRequest;
      output: BatchCreateBillScenarioCommitmentModificationResponse;
    };
    sdk: {
      input: BatchCreateBillScenarioCommitmentModificationCommandInput;
      output: BatchCreateBillScenarioCommitmentModificationCommandOutput;
    };
  };
}
