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
import {
  BatchDeleteBillScenarioUsageModificationRequest,
  BatchDeleteBillScenarioUsageModificationResponse,
} from "../models/models_0";
import {
  de_BatchDeleteBillScenarioUsageModificationCommand,
  se_BatchDeleteBillScenarioUsageModificationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteBillScenarioUsageModificationCommand}.
 */
export interface BatchDeleteBillScenarioUsageModificationCommandInput
  extends BatchDeleteBillScenarioUsageModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteBillScenarioUsageModificationCommand}.
 */
export interface BatchDeleteBillScenarioUsageModificationCommandOutput
  extends BatchDeleteBillScenarioUsageModificationResponse,
    __MetadataBearer {}

/**
 * <p> Delete usage that you have created in a Bill Scenario. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AWSBCMPricingCalculator_BatchUpdateBillScenarioUsageModification.html"> BatchUpdateBillScenarioUsageModification</a>. </p> <note> <p>The <code>BatchDeleteBillScenarioUsageModification</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission <code>bcm-pricing-calculator:DeleteBillScenarioUsageModification</code> in your policies.</p> </note>
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
 *  <p> The request could not be processed because of conflict in the current state of the resource. </p>
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p> The requested data is currently unavailable. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource was not found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The request would cause you to exceed your service quota. </p>
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
export class BatchDeleteBillScenarioUsageModificationCommand extends $Command
  .classBuilder<
    BatchDeleteBillScenarioUsageModificationCommandInput,
    BatchDeleteBillScenarioUsageModificationCommandOutput,
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
  .s("AWSBCMPricingCalculator", "BatchDeleteBillScenarioUsageModification", {})
  .n("BCMPricingCalculatorClient", "BatchDeleteBillScenarioUsageModificationCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteBillScenarioUsageModificationCommand)
  .de(de_BatchDeleteBillScenarioUsageModificationCommand)
  .build() {
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
