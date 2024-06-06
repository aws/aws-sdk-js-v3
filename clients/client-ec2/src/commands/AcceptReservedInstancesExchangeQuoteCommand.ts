// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AcceptReservedInstancesExchangeQuoteRequest,
  AcceptReservedInstancesExchangeQuoteResult,
} from "../models/models_0";
import {
  de_AcceptReservedInstancesExchangeQuoteCommand,
  se_AcceptReservedInstancesExchangeQuoteCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptReservedInstancesExchangeQuoteCommand}.
 */
export interface AcceptReservedInstancesExchangeQuoteCommandInput extends AcceptReservedInstancesExchangeQuoteRequest {}
/**
 * @public
 *
 * The output of {@link AcceptReservedInstancesExchangeQuoteCommand}.
 */
export interface AcceptReservedInstancesExchangeQuoteCommandOutput
  extends AcceptReservedInstancesExchangeQuoteResult,
    __MetadataBearer {}

/**
 * <p>Accepts the Convertible Reserved Instance exchange quote described in the <a>GetReservedInstancesExchangeQuote</a> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptReservedInstancesExchangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptReservedInstancesExchangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AcceptReservedInstancesExchangeQuoteRequest
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
 * const command = new AcceptReservedInstancesExchangeQuoteCommand(input);
 * const response = await client.send(command);
 * // { // AcceptReservedInstancesExchangeQuoteResult
 * //   ExchangeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptReservedInstancesExchangeQuoteCommandInput - {@link AcceptReservedInstancesExchangeQuoteCommandInput}
 * @returns {@link AcceptReservedInstancesExchangeQuoteCommandOutput}
 * @see {@link AcceptReservedInstancesExchangeQuoteCommandInput} for command's `input` shape.
 * @see {@link AcceptReservedInstancesExchangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AcceptReservedInstancesExchangeQuoteCommand extends $Command
  .classBuilder<
    AcceptReservedInstancesExchangeQuoteCommandInput,
    AcceptReservedInstancesExchangeQuoteCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AcceptReservedInstancesExchangeQuote", {})
  .n("EC2Client", "AcceptReservedInstancesExchangeQuoteCommand")
  .f(void 0, void 0)
  .ser(se_AcceptReservedInstancesExchangeQuoteCommand)
  .de(de_AcceptReservedInstancesExchangeQuoteCommand)
  .build() {}
