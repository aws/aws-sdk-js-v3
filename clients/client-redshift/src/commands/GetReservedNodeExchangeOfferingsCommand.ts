// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsOutputMessage,
} from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { GetReservedNodeExchangeOfferings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReservedNodeExchangeOfferingsCommand}.
 */
export interface GetReservedNodeExchangeOfferingsCommandInput extends GetReservedNodeExchangeOfferingsInputMessage {}
/**
 * @public
 *
 * The output of {@link GetReservedNodeExchangeOfferingsCommand}.
 */
export interface GetReservedNodeExchangeOfferingsCommandOutput extends GetReservedNodeExchangeOfferingsOutputMessage, __MetadataBearer {}

/**
 * <p>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
 *             and usage price of the given DC1 reserved node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetReservedNodeExchangeOfferingsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetReservedNodeExchangeOfferingsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // GetReservedNodeExchangeOfferingsInputMessage
 *   ReservedNodeId: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetReservedNodeExchangeOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // GetReservedNodeExchangeOfferingsOutputMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedNodeOfferings: [ // ReservedNodeOfferingList
 * //     { // ReservedNodeOffering
 * //       ReservedNodeOfferingId: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CurrencyCode: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReservedNodeExchangeOfferingsCommandInput - {@link GetReservedNodeExchangeOfferingsCommandInput}
 * @returns {@link GetReservedNodeExchangeOfferingsCommandOutput}
 * @see {@link GetReservedNodeExchangeOfferingsCommandInput} for command's `input` shape.
 * @see {@link GetReservedNodeExchangeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link InvalidReservedNodeStateFault} (client fault)
 *  <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
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
export class GetReservedNodeExchangeOfferingsCommand extends $Command
  .classBuilder<
    GetReservedNodeExchangeOfferingsCommandInput,
    GetReservedNodeExchangeOfferingsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "GetReservedNodeExchangeOfferings", {})
  .n("RedshiftClient", "GetReservedNodeExchangeOfferingsCommand")
  .sc(GetReservedNodeExchangeOfferings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReservedNodeExchangeOfferingsInputMessage;
      output: GetReservedNodeExchangeOfferingsOutputMessage;
    };
    sdk: {
      input: GetReservedNodeExchangeOfferingsCommandInput;
      output: GetReservedNodeExchangeOfferingsCommandOutput;
    };
  };
}
