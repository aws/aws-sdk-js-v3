// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDeleteBillScenarioCommitmentModificationRequest,
  BatchDeleteBillScenarioCommitmentModificationResponse,
} from "../models/models_0";
import { BatchDeleteBillScenarioCommitmentModification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteBillScenarioCommitmentModificationCommand}.
 */
export interface BatchDeleteBillScenarioCommitmentModificationCommandInput extends BatchDeleteBillScenarioCommitmentModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteBillScenarioCommitmentModificationCommand}.
 */
export interface BatchDeleteBillScenarioCommitmentModificationCommandOutput extends BatchDeleteBillScenarioCommitmentModificationResponse, __MetadataBearer {}

/**
 * Delete commitment that you have created in a Bill Scenario. You can only delete a commitment that you had added and cannot model deletion (or removal) of a existing commitment. If you want model deletion of an existing commitment, see the negate [BillScenarioCommitmentModificationAction](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BillScenarioCommitmentModificationAction.html) of [BatchCreateBillScenarioCommitmentModification](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchCreateBillScenarioUsageModification.html) operation.
 *
 * > **Note:** The `BatchDeleteBillScenarioCommitmentModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:DeleteBillScenarioCommitmentModification` in your policies.
 *
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
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *
 * The requested data is currently unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 *
 * Base exception class for all service exceptions from BCMPricingCalculator service.
 *
 * @public
 */
export class BatchDeleteBillScenarioCommitmentModificationCommand extends command<BatchDeleteBillScenarioCommitmentModificationCommandInput, BatchDeleteBillScenarioCommitmentModificationCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteBillScenarioCommitmentModification",
  BatchDeleteBillScenarioCommitmentModification$
) {
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
