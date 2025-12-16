// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AcceptReservedNodeExchangeInputMessage,
  AcceptReservedNodeExchangeOutputMessage,
} from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AcceptReservedNodeExchange$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptReservedNodeExchangeCommand}.
 */
export interface AcceptReservedNodeExchangeCommandInput extends AcceptReservedNodeExchangeInputMessage {}
/**
 * @public
 *
 * The output of {@link AcceptReservedNodeExchangeCommand}.
 */
export interface AcceptReservedNodeExchangeCommandOutput
  extends AcceptReservedNodeExchangeOutputMessage,
    __MetadataBearer {}

/**
 * <p>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
 *             configuration (term, payment type, or number of nodes) and no additional costs.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AcceptReservedNodeExchangeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AcceptReservedNodeExchangeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // AcceptReservedNodeExchangeInputMessage
 *   ReservedNodeId: "STRING_VALUE", // required
 *   TargetReservedNodeOfferingId: "STRING_VALUE", // required
 * };
 * const command = new AcceptReservedNodeExchangeCommand(input);
 * const response = await client.send(command);
 * // { // AcceptReservedNodeExchangeOutputMessage
 * //   ExchangedReservedNode: { // ReservedNode
 * //     ReservedNodeId: "STRING_VALUE",
 * //     ReservedNodeOfferingId: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Duration: Number("int"),
 * //     FixedPrice: Number("double"),
 * //     UsagePrice: Number("double"),
 * //     CurrencyCode: "STRING_VALUE",
 * //     NodeCount: Number("int"),
 * //     State: "STRING_VALUE",
 * //     OfferingType: "STRING_VALUE",
 * //     RecurringCharges: [ // RecurringChargeList
 * //       { // RecurringCharge
 * //         RecurringChargeAmount: Number("double"),
 * //         RecurringChargeFrequency: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptReservedNodeExchangeCommandInput - {@link AcceptReservedNodeExchangeCommandInput}
 * @returns {@link AcceptReservedNodeExchangeCommandOutput}
 * @see {@link AcceptReservedNodeExchangeCommandInput} for command's `input` shape.
 * @see {@link AcceptReservedNodeExchangeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link InvalidReservedNodeStateFault} (client fault)
 *  <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 *
 * @throws {@link ReservedNodeAlreadyExistsFault} (client fault)
 *  <p>User already has a reservation with the given identifier.</p>
 *
 * @throws {@link ReservedNodeAlreadyMigratedFault} (client fault)
 *  <p>Indicates that the reserved node has already been exchanged.</p>
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *  <p>The specified reserved compute node not found.</p>
 *
 * @throws {@link ReservedNodeOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class AcceptReservedNodeExchangeCommand extends $Command
  .classBuilder<
    AcceptReservedNodeExchangeCommandInput,
    AcceptReservedNodeExchangeCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "AcceptReservedNodeExchange", {})
  .n("RedshiftClient", "AcceptReservedNodeExchangeCommand")
  .sc(AcceptReservedNodeExchange$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptReservedNodeExchangeInputMessage;
      output: AcceptReservedNodeExchangeOutputMessage;
    };
    sdk: {
      input: AcceptReservedNodeExchangeCommandInput;
      output: AcceptReservedNodeExchangeCommandOutput;
    };
  };
}
