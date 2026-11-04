// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListBillScenarioCommitmentModificationsRequest,
  ListBillScenarioCommitmentModificationsResponse,
} from "../models/models_0";
import { ListBillScenarioCommitmentModifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBillScenarioCommitmentModificationsCommand}.
 */
export interface ListBillScenarioCommitmentModificationsCommandInput extends ListBillScenarioCommitmentModificationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillScenarioCommitmentModificationsCommand}.
 */
export interface ListBillScenarioCommitmentModificationsCommandOutput extends ListBillScenarioCommitmentModificationsResponse, __MetadataBearer {}

/**
 * Lists the commitment modifications associated with a bill scenario.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, ListBillScenarioCommitmentModificationsCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, ListBillScenarioCommitmentModificationsCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
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
export class ListBillScenarioCommitmentModificationsCommand extends command<ListBillScenarioCommitmentModificationsCommandInput, ListBillScenarioCommitmentModificationsCommandOutput>(
  _ep0,
  _mw0,
  "ListBillScenarioCommitmentModifications",
  ListBillScenarioCommitmentModifications$
) {
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
