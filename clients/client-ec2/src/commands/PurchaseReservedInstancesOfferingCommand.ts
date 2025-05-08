// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseReservedInstancesOfferingRequest, PurchaseReservedInstancesOfferingResult } from "../models/models_7";
import {
  de_PurchaseReservedInstancesOfferingCommand,
  se_PurchaseReservedInstancesOfferingCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedInstancesOfferingCommand}.
 */
export interface PurchaseReservedInstancesOfferingCommandInput extends PurchaseReservedInstancesOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedInstancesOfferingCommand}.
 */
export interface PurchaseReservedInstancesOfferingCommandOutput
  extends PurchaseReservedInstancesOfferingResult,
    __MetadataBearer {}

/**
 * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay
 *       a lower hourly rate compared to On-Demand instance pricing.</p>
 *          <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved
 *       Instance offerings that match your specifications. After you've purchased a Reserved Instance,
 *       you can check for your new Reserved Instance with <a>DescribeReservedInstances</a>.</p>
 *          <p>To queue a purchase for a future date and time, specify a purchase time. If you do not
 *       specify a purchase time, the default is the current time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved
 *         Instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Sell in the Reserved Instance
 *         Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseReservedInstancesOfferingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseReservedInstancesOfferingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // PurchaseReservedInstancesOfferingRequest
 *   InstanceCount: Number("int"), // required
 *   ReservedInstancesOfferingId: "STRING_VALUE", // required
 *   PurchaseTime: new Date("TIMESTAMP"),
 *   DryRun: true || false,
 *   LimitPrice: { // ReservedInstanceLimitPrice
 *     Amount: Number("double"),
 *     CurrencyCode: "USD",
 *   },
 * };
 * const command = new PurchaseReservedInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedInstancesOfferingResult
 * //   ReservedInstancesId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PurchaseReservedInstancesOfferingCommandInput - {@link PurchaseReservedInstancesOfferingCommandInput}
 * @returns {@link PurchaseReservedInstancesOfferingCommandOutput}
 * @see {@link PurchaseReservedInstancesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedInstancesOfferingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class PurchaseReservedInstancesOfferingCommand extends $Command
  .classBuilder<
    PurchaseReservedInstancesOfferingCommandInput,
    PurchaseReservedInstancesOfferingCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "PurchaseReservedInstancesOffering", {})
  .n("EC2Client", "PurchaseReservedInstancesOfferingCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseReservedInstancesOfferingCommand)
  .de(de_PurchaseReservedInstancesOfferingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseReservedInstancesOfferingRequest;
      output: PurchaseReservedInstancesOfferingResult;
    };
    sdk: {
      input: PurchaseReservedInstancesOfferingCommandInput;
      output: PurchaseReservedInstancesOfferingCommandOutput;
    };
  };
}
