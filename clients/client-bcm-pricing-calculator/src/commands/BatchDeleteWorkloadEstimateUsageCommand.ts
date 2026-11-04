// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDeleteWorkloadEstimateUsageRequest,
  BatchDeleteWorkloadEstimateUsageResponse,
} from "../models/models_0";
import { BatchDeleteWorkloadEstimateUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteWorkloadEstimateUsageCommand}.
 */
export interface BatchDeleteWorkloadEstimateUsageCommandInput extends BatchDeleteWorkloadEstimateUsageRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteWorkloadEstimateUsageCommand}.
 */
export interface BatchDeleteWorkloadEstimateUsageCommandOutput extends BatchDeleteWorkloadEstimateUsageResponse, __MetadataBearer {}

/**
 * Delete usage that you have created in a Workload estimate. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see [BatchUpdateWorkloadEstimateUsage](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchUpdateWorkloadEstimateUsage.html).
 *
 * > **Note:** The `BatchDeleteWorkloadEstimateUsage` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:DeleteWorkloadEstimateUsage` in your policies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchDeleteWorkloadEstimateUsageCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchDeleteWorkloadEstimateUsageCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // BatchDeleteWorkloadEstimateUsageRequest
 *   workloadEstimateId: "STRING_VALUE", // required
 *   ids: [ // BatchDeleteWorkloadEstimateUsageEntries // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteWorkloadEstimateUsageCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteWorkloadEstimateUsageResponse
 * //   errors: [ // BatchDeleteWorkloadEstimateUsageErrors
 * //     { // BatchDeleteWorkloadEstimateUsageError
 * //       id: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "BAD_REQUEST" || "NOT_FOUND" || "CONFLICT" || "INTERNAL_SERVER_ERROR",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteWorkloadEstimateUsageCommandInput - {@link BatchDeleteWorkloadEstimateUsageCommandInput}
 * @returns {@link BatchDeleteWorkloadEstimateUsageCommandOutput}
 * @see {@link BatchDeleteWorkloadEstimateUsageCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteWorkloadEstimateUsageCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
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
export class BatchDeleteWorkloadEstimateUsageCommand extends command<BatchDeleteWorkloadEstimateUsageCommandInput, BatchDeleteWorkloadEstimateUsageCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteWorkloadEstimateUsage",
  BatchDeleteWorkloadEstimateUsage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteWorkloadEstimateUsageRequest;
      output: BatchDeleteWorkloadEstimateUsageResponse;
    };
    sdk: {
      input: BatchDeleteWorkloadEstimateUsageCommandInput;
      output: BatchDeleteWorkloadEstimateUsageCommandOutput;
    };
  };
}
