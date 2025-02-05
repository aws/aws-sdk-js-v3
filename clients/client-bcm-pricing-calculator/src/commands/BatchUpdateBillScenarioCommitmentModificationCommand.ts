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
  BatchUpdateBillScenarioCommitmentModificationRequest,
  BatchUpdateBillScenarioCommitmentModificationResponse,
} from "../models/models_0";
import {
  de_BatchUpdateBillScenarioCommitmentModificationCommand,
  se_BatchUpdateBillScenarioCommitmentModificationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateBillScenarioCommitmentModificationCommand}.
 */
export interface BatchUpdateBillScenarioCommitmentModificationCommandInput
  extends BatchUpdateBillScenarioCommitmentModificationRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateBillScenarioCommitmentModificationCommand}.
 */
export interface BatchUpdateBillScenarioCommitmentModificationCommandOutput
  extends BatchUpdateBillScenarioCommitmentModificationResponse,
    __MetadataBearer {}

/**
 * <p>
 *                         Update a newly added or existing commitment. You can update the commitment group based on a commitment ID and a Bill scenario ID.
 *                 </p>
 *          <note>
 *             <p>The <code>BatchUpdateBillScenarioCommitmentModification</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals,
 *                                 include the permission <code>bcm-pricing-calculator:UpdateBillScenarioCommitmentModification</code> in your policies.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, BatchUpdateBillScenarioCommitmentModificationCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, BatchUpdateBillScenarioCommitmentModificationCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>
 *         The request could not be processed because of conflict in the current state of the resource.
 *         </p>
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
export class BatchUpdateBillScenarioCommitmentModificationCommand extends $Command
  .classBuilder<
    BatchUpdateBillScenarioCommitmentModificationCommandInput,
    BatchUpdateBillScenarioCommitmentModificationCommandOutput,
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
  .s("AWSBCMPricingCalculator", "BatchUpdateBillScenarioCommitmentModification", {})
  .n("BCMPricingCalculatorClient", "BatchUpdateBillScenarioCommitmentModificationCommand")
  .f(void 0, void 0)
  .ser(se_BatchUpdateBillScenarioCommitmentModificationCommand)
  .de(de_BatchUpdateBillScenarioCommitmentModificationCommand)
  .build() {
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
