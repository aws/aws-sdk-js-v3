// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceAgreementClient";
import type { ListAgreementChargesInput, ListAgreementChargesOutput } from "../models/models_0";
import { ListAgreementCharges$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Allows acceptors to view charges and purchase orders that are associated with an agreement. The response includes details about all charges regardless of whether a purchase order is linked to each charge.</p>
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @public
 */
export class ListAgreementChargesCommand extends $Command
  .classBuilder<
    ListAgreementChargesCommandInput,
    ListAgreementChargesCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "ListAgreementCharges", {})
  .n("MarketplaceAgreementClient", "ListAgreementChargesCommand")
  .sc(ListAgreementCharges$)
  .build() {
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
