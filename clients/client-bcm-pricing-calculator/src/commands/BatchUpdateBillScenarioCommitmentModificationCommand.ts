// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchUpdateBillScenarioCommitmentModificationRequest,
  BatchUpdateBillScenarioCommitmentModificationResponse,
} from "../models/models_0";
import { BatchUpdateBillScenarioCommitmentModification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchUpdateBillScenarioCommitmentModificationCommand}.
 */
export interface BatchUpdateBillScenarioCommitmentModificationCommandInput extends BatchUpdateBillScenarioCommitmentModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateBillScenarioCommitmentModificationCommand}.
 */
export interface BatchUpdateBillScenarioCommitmentModificationCommandOutput extends BatchUpdateBillScenarioCommitmentModificationResponse, __MetadataBearer {}

/**
 * Update a newly added or existing commitment. You can update the commitment group based on a commitment ID and a Bill scenario ID.
 *
 * > **Note:** The `BatchUpdateBillScenarioCommitmentModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:UpdateBillScenarioCommitmentModification` in your policies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchUpdateBillScenarioCommitmentModificationCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchUpdateBillScenarioCommitmentModificationCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchUpdateBillScenarioCommitmentModificationRequest
 *   billScenarioId: "STRING_VALUE", // required
 *   commitmentModifications: [ // BatchUpdateBillScenarioCommitmentModificationEntries // required
 *     { // BatchUpdateBillScenarioCommitmentModificationEntry
 *       id: "STRING_VALUE", // required
 *       group: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateBillScenarioCommitmentModificationCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateBillScenarioCommitmentModificationResponse
 * //   items: [ // BillScenarioCommitmentModificationItems
 * //     { // BillScenarioCommitmentModificationItem
 * //       id: "STRING_VALUE",
 * //       usageAccountId: "STRING_VALUE",
 * //       group: "STRING_VALUE",
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
 * //   errors: [ // BatchUpdateBillScenarioCommitmentModificationErrors
 * //     { // BatchUpdateBillScenarioCommitmentModificationError
 * //       id: "STRING_VALUE",
 * //       errorCode: "BAD_REQUEST" || "NOT_FOUND" || "CONFLICT" || "INTERNAL_SERVER_ERROR",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateBillScenarioCommitmentModificationCommandInput - {@link BatchUpdateBillScenarioCommitmentModificationCommandInput}
 * @returns {@link BatchUpdateBillScenarioCommitmentModificationCommandOutput}
 * @see {@link BatchUpdateBillScenarioCommitmentModificationCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateBillScenarioCommitmentModificationCommandOutput} for command's `response` shape.
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
export class BatchUpdateBillScenarioCommitmentModificationCommand extends command<BatchUpdateBillScenarioCommitmentModificationCommandInput, BatchUpdateBillScenarioCommitmentModificationCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateBillScenarioCommitmentModification",
  BatchUpdateBillScenarioCommitmentModification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateBillScenarioCommitmentModificationRequest;
      output: BatchUpdateBillScenarioCommitmentModificationResponse;
    };
    sdk: {
      input: BatchUpdateBillScenarioCommitmentModificationCommandInput;
      output: BatchUpdateBillScenarioCommitmentModificationCommandOutput;
    };
  };
}
