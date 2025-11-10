// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDeleteBillScenarioCommitmentModificationRequest,
  BatchDeleteBillScenarioCommitmentModificationResponse,
} from "../models/models_0";
import { BatchDeleteBillScenarioCommitmentModification } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteBillScenarioCommitmentModificationCommand}.
 */
export interface BatchDeleteBillScenarioCommitmentModificationCommandInput
  extends BatchDeleteBillScenarioCommitmentModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteBillScenarioCommitmentModificationCommand}.
 */
export interface BatchDeleteBillScenarioCommitmentModificationCommandOutput
  extends BatchDeleteBillScenarioCommitmentModificationResponse,
    __MetadataBearer {}

/**
 * <p> Delete commitment that you have created in a Bill Scenario. You can only delete a commitment that you had added and cannot model deletion (or removal) of a existing commitment. If you want model deletion of an existing commitment, see the negate <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BillScenarioCommitmentModificationAction.html"> BillScenarioCommitmentModificationAction</a> of <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchCreateBillScenarioUsageModification.html"> BatchCreateBillScenarioCommitmentModification</a> operation. </p> <note> <p>The <code>BatchDeleteBillScenarioCommitmentModification</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission <code>bcm-pricing-calculator:DeleteBillScenarioCommitmentModification</code> in your policies.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchDeleteBillScenarioCommitmentModificationCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchDeleteBillScenarioCommitmentModificationCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchDeleteBillScenarioCommitmentModificationRequest
 *   billScenarioId: "STRING_VALUE", // required
 *   ids: [ // BatchDeleteBillScenarioCommitmentModificationEntries // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteBillScenarioCommitmentModificationCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteBillScenarioCommitmentModificationResponse
 * //   errors: [ // BatchDeleteBillScenarioCommitmentModificationErrors
 * //     { // BatchDeleteBillScenarioCommitmentModificationError
 * //       id: "STRING_VALUE",
 * //       errorCode: "BAD_REQUEST" || "CONFLICT" || "INTERNAL_SERVER_ERROR",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteBillScenarioCommitmentModificationCommandInput - {@link BatchDeleteBillScenarioCommitmentModificationCommandInput}
 * @returns {@link BatchDeleteBillScenarioCommitmentModificationCommandOutput}
 * @see {@link BatchDeleteBillScenarioCommitmentModificationCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteBillScenarioCommitmentModificationCommandOutput} for command's `response` shape.
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
export class BatchDeleteBillScenarioCommitmentModificationCommand extends $Command
  .classBuilder<
    BatchDeleteBillScenarioCommitmentModificationCommandInput,
    BatchDeleteBillScenarioCommitmentModificationCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMPricingCalculator", "BatchDeleteBillScenarioCommitmentModification", {})
  .n("BCMPricingCalculatorClient", "BatchDeleteBillScenarioCommitmentModificationCommand")
  .sc(BatchDeleteBillScenarioCommitmentModification)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteBillScenarioCommitmentModificationRequest;
      output: BatchDeleteBillScenarioCommitmentModificationResponse;
    };
    sdk: {
      input: BatchDeleteBillScenarioCommitmentModificationCommandInput;
      output: BatchDeleteBillScenarioCommitmentModificationCommandOutput;
    };
  };
}
