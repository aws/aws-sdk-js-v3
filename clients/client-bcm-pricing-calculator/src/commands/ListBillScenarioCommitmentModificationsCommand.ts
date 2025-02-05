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
  ListBillScenarioCommitmentModificationsRequest,
  ListBillScenarioCommitmentModificationsResponse,
} from "../models/models_0";
import {
  de_ListBillScenarioCommitmentModificationsCommand,
  se_ListBillScenarioCommitmentModificationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBillScenarioCommitmentModificationsCommand}.
 */
export interface ListBillScenarioCommitmentModificationsCommandInput
  extends ListBillScenarioCommitmentModificationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillScenarioCommitmentModificationsCommand}.
 */
export interface ListBillScenarioCommitmentModificationsCommandOutput
  extends ListBillScenarioCommitmentModificationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *                         Lists the commitment modifications associated with a bill scenario.
 *                 </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillScenarioCommitmentModificationsCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillScenarioCommitmentModificationsCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // ListBillScenarioCommitmentModificationsRequest
 *   billScenarioId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBillScenarioCommitmentModificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillScenarioCommitmentModificationsResponse
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
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillScenarioCommitmentModificationsCommandInput - {@link ListBillScenarioCommitmentModificationsCommandInput}
 * @returns {@link ListBillScenarioCommitmentModificationsCommandOutput}
 * @see {@link ListBillScenarioCommitmentModificationsCommandInput} for command's `input` shape.
 * @see {@link ListBillScenarioCommitmentModificationsCommandOutput} for command's `response` shape.
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
export class ListBillScenarioCommitmentModificationsCommand extends $Command
  .classBuilder<
    ListBillScenarioCommitmentModificationsCommandInput,
    ListBillScenarioCommitmentModificationsCommandOutput,
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
  .s("AWSBCMPricingCalculator", "ListBillScenarioCommitmentModifications", {})
  .n("BCMPricingCalculatorClient", "ListBillScenarioCommitmentModificationsCommand")
  .f(void 0, void 0)
  .ser(se_ListBillScenarioCommitmentModificationsCommand)
  .de(de_ListBillScenarioCommitmentModificationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillScenarioCommitmentModificationsRequest;
      output: ListBillScenarioCommitmentModificationsResponse;
    };
    sdk: {
      input: ListBillScenarioCommitmentModificationsCommandInput;
      output: ListBillScenarioCommitmentModificationsCommandOutput;
    };
  };
}
