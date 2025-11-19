// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetReservedInstancesExchangeQuoteRequest, GetReservedInstancesExchangeQuoteResult } from "../models/models_6";
import { GetReservedInstancesExchangeQuote } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReservedInstancesExchangeQuoteCommand}.
 */
export interface GetReservedInstancesExchangeQuoteCommandInput extends GetReservedInstancesExchangeQuoteRequest {}
/**
 * @public
 *
 * The output of {@link GetReservedInstancesExchangeQuoteCommand}.
 */
export interface GetReservedInstancesExchangeQuoteCommandOutput
  extends GetReservedInstancesExchangeQuoteResult,
    __MetadataBearer {}

/**
 * <p>Returns a quote and exchange information for exchanging one or more specified Convertible
 *       Reserved Instances for a new Convertible Reserved Instance. If the exchange cannot be
 *       performed, the reason is returned in the response. Use <a>AcceptReservedInstancesExchangeQuote</a> to perform the exchange.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetReservedInstancesExchangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetReservedInstancesExchangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetReservedInstancesExchangeQuoteRequest
 *   DryRun: true || false,
 *   ReservedInstanceIds: [ // ReservedInstanceIdSet // required
 *     "STRING_VALUE",
 *   ],
 *   TargetConfigurations: [ // TargetConfigurationRequestSet
 *     { // TargetConfigurationRequest
 *       InstanceCount: Number("int"),
 *       OfferingId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new GetReservedInstancesExchangeQuoteCommand(input);
 * const response = await client.send(command);
 * // { // GetReservedInstancesExchangeQuoteResult
 * //   CurrencyCode: "STRING_VALUE",
 * //   IsValidExchange: true || false,
 * //   OutputReservedInstancesWillExpireAt: new Date("TIMESTAMP"),
 * //   PaymentDue: "STRING_VALUE",
 * //   ReservedInstanceValueRollup: { // ReservationValue
 * //     HourlyPrice: "STRING_VALUE",
 * //     RemainingTotalValue: "STRING_VALUE",
 * //     RemainingUpfrontValue: "STRING_VALUE",
 * //   },
 * //   ReservedInstanceValueSet: [ // ReservedInstanceReservationValueSet
 * //     { // ReservedInstanceReservationValue
 * //       ReservationValue: {
 * //         HourlyPrice: "STRING_VALUE",
 * //         RemainingTotalValue: "STRING_VALUE",
 * //         RemainingUpfrontValue: "STRING_VALUE",
 * //       },
 * //       ReservedInstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TargetConfigurationValueRollup: {
 * //     HourlyPrice: "STRING_VALUE",
 * //     RemainingTotalValue: "STRING_VALUE",
 * //     RemainingUpfrontValue: "STRING_VALUE",
 * //   },
 * //   TargetConfigurationValueSet: [ // TargetReservationValueSet
 * //     { // TargetReservationValue
 * //       ReservationValue: {
 * //         HourlyPrice: "STRING_VALUE",
 * //         RemainingTotalValue: "STRING_VALUE",
 * //         RemainingUpfrontValue: "STRING_VALUE",
 * //       },
 * //       TargetConfiguration: { // TargetConfiguration
 * //         InstanceCount: Number("int"),
 * //         OfferingId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ValidationFailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReservedInstancesExchangeQuoteCommandInput - {@link GetReservedInstancesExchangeQuoteCommandInput}
 * @returns {@link GetReservedInstancesExchangeQuoteCommandOutput}
 * @see {@link GetReservedInstancesExchangeQuoteCommandInput} for command's `input` shape.
 * @see {@link GetReservedInstancesExchangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetReservedInstancesExchangeQuoteCommand extends $Command
  .classBuilder<
    GetReservedInstancesExchangeQuoteCommandInput,
    GetReservedInstancesExchangeQuoteCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetReservedInstancesExchangeQuote", {})
  .n("EC2Client", "GetReservedInstancesExchangeQuoteCommand")
  .sc(GetReservedInstancesExchangeQuote)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReservedInstancesExchangeQuoteRequest;
      output: GetReservedInstancesExchangeQuoteResult;
    };
    sdk: {
      input: GetReservedInstancesExchangeQuoteCommandInput;
      output: GetReservedInstancesExchangeQuoteCommandOutput;
    };
  };
}
