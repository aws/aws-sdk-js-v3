// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgreementChargesInput, ListAgreementChargesOutput } from "../models/models_0";
import { ListAgreementCharges$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgreementChargesCommand}.
 */
export interface ListAgreementChargesCommandInput extends ListAgreementChargesInput {}
/**
 * @public
 *
 * The output of {@link ListAgreementChargesCommand}.
 */
export interface ListAgreementChargesCommandOutput extends ListAgreementChargesOutput, __MetadataBearer {}

/**
 * Allows acceptors to view charges and purchase orders that are associated with an agreement. The response includes details about all charges regardless of whether a purchase order is linked to each charge.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, ListAgreementChargesCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, ListAgreementChargesCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // ListAgreementChargesInput
 *   catalog: "STRING_VALUE",
 *   agreementId: "STRING_VALUE",
 *   agreementType: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgreementChargesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgreementChargesOutput
 * //   items: [ // Charges
 * //     { // Charge
 * //       id: "STRING_VALUE",
 * //       revision: Number("long"),
 * //       agreementId: "STRING_VALUE",
 * //       agreementType: "STRING_VALUE",
 * //       purchaseOrderReference: "STRING_VALUE",
 * //       currencyCode: "STRING_VALUE",
 * //       amount: "STRING_VALUE",
 * //       time: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgreementChargesCommandInput - {@link ListAgreementChargesCommandInput}
 * @returns {@link ListAgreementChargesCommandOutput}
 * @see {@link ListAgreementChargesCommandInput} for command's `input` shape.
 * @see {@link ListAgreementChargesCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link MarketplaceAgreementServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceAgreement service.
 *
 * @public
 */
export class ListAgreementChargesCommand extends command<ListAgreementChargesCommandInput, ListAgreementChargesCommandOutput>(
  _ep0,
  _mw0,
  "ListAgreementCharges",
  ListAgreementCharges$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgreementChargesInput;
      output: ListAgreementChargesOutput;
    };
    sdk: {
      input: ListAgreementChargesCommandInput;
      output: ListAgreementChargesCommandOutput;
    };
  };
}
