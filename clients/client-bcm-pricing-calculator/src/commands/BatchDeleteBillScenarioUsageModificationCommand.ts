// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDeleteBillScenarioUsageModificationRequest,
  BatchDeleteBillScenarioUsageModificationResponse,
} from "../models/models_0";
import { BatchDeleteBillScenarioUsageModification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteBillScenarioUsageModificationCommand}.
 */
export interface BatchDeleteBillScenarioUsageModificationCommandInput extends BatchDeleteBillScenarioUsageModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteBillScenarioUsageModificationCommand}.
 */
export interface BatchDeleteBillScenarioUsageModificationCommandOutput extends BatchDeleteBillScenarioUsageModificationResponse, __MetadataBearer {}

/**
 * Delete usage that you have created in a Bill Scenario. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see [BatchUpdateBillScenarioUsageModification](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchUpdateBillScenarioUsageModification.html).
 *
 * > **Note:** The `BatchDeleteBillScenarioUsageModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:DeleteBillScenarioUsageModification` in your policies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchDeleteBillScenarioUsageModificationCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchDeleteBillScenarioUsageModificationCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchDeleteBillScenarioUsageModificationRequest
 *   billScenarioId: "STRING_VALUE", // required
 *   ids: [ // BatchDeleteBillScenarioUsageModificationEntries // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteBillScenarioUsageModificationCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteBillScenarioUsageModificationResponse
 * //   errors: [ // BatchDeleteBillScenarioUsageModificationErrors
 * //     { // BatchDeleteBillScenarioUsageModificationError
 * //       id: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "BAD_REQUEST" || "CONFLICT" || "INTERNAL_SERVER_ERROR",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteBillScenarioUsageModificationCommandInput - {@link BatchDeleteBillScenarioUsageModificationCommandInput}
 * @returns {@link BatchDeleteBillScenarioUsageModificationCommandOutput}
 * @see {@link BatchDeleteBillScenarioUsageModificationCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteBillScenarioUsageModificationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause you to exceed your service quota.
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
export class BatchDeleteBillScenarioUsageModificationCommand extends command<BatchDeleteBillScenarioUsageModificationCommandInput, BatchDeleteBillScenarioUsageModificationCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteBillScenarioUsageModification",
  BatchDeleteBillScenarioUsageModification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteBillScenarioUsageModificationRequest;
      output: BatchDeleteBillScenarioUsageModificationResponse;
    };
    sdk: {
      input: BatchDeleteBillScenarioUsageModificationCommandInput;
      output: BatchDeleteBillScenarioUsageModificationCommandOutput;
    };
  };
}
