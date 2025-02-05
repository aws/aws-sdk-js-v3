// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BCMPricingCalculatorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMPricingCalculatorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteWorkloadEstimateUsageRequest, BatchDeleteWorkloadEstimateUsageResponse } from "../models/models_0";
import {
  de_BatchDeleteWorkloadEstimateUsageCommand,
  se_BatchDeleteWorkloadEstimateUsageCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface BatchDeleteWorkloadEstimateUsageCommandOutput
  extends BatchDeleteWorkloadEstimateUsageResponse,
    __MetadataBearer {}

/**
 * <p>
 *                         Delete usage that you have created in a Workload estimate. You can only delete usage that you had added and cannot model deletion
 *                         (or removal) of a existing usage. If you want model removal of an existing usage, see
 *                         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchUpdateWorkloadEstimateUsage.html">
 *                                 BatchUpdateWorkloadEstimateUsage</a>.
 *                 </p>
 *          <note>
 *             <p>The <code>BatchDeleteWorkloadEstimateUsage</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals,
 *                                 include the permission <code>bcm-pricing-calculator:DeleteWorkloadEstimateUsage</code> in your policies.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchDeleteWorkloadEstimateUsageCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchDeleteWorkloadEstimateUsageCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>
 *         The requested data is currently unavailable.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *         The specified resource was not found.
 *         </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *         The request would cause you to exceed your service quota.
 *         </p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         You do not have sufficient access to perform this action.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *         An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *         </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *         The request was denied due to request throttling.
 *         </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *         The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *         </p>
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 * <p>Base exception class for all service exceptions from BCMPricingCalculator service.</p>
 *
 * @public
 */
export class BatchDeleteWorkloadEstimateUsageCommand extends $Command
  .classBuilder<
    BatchDeleteWorkloadEstimateUsageCommandInput,
    BatchDeleteWorkloadEstimateUsageCommandOutput,
    BCMPricingCalculatorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMPricingCalculatorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBCMPricingCalculator", "BatchDeleteWorkloadEstimateUsage", {})
  .n("BCMPricingCalculatorClient", "BatchDeleteWorkloadEstimateUsageCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteWorkloadEstimateUsageCommand)
  .de(de_BatchDeleteWorkloadEstimateUsageCommand)
  .build() {
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
