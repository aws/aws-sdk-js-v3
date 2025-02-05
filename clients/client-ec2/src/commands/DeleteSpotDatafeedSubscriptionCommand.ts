// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSpotDatafeedSubscriptionRequest } from "../models/models_3";
import {
  de_DeleteSpotDatafeedSubscriptionCommand,
  se_DeleteSpotDatafeedSubscriptionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSpotDatafeedSubscriptionCommand}.
 */
export interface DeleteSpotDatafeedSubscriptionCommandInput extends DeleteSpotDatafeedSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSpotDatafeedSubscriptionCommand}.
 */
export interface DeleteSpotDatafeedSubscriptionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the data feed for Spot Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DeleteSpotDatafeedSubscriptionRequest
 *   DryRun: true || false,
 * };
 * const command = new DeleteSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSpotDatafeedSubscriptionCommandInput - {@link DeleteSpotDatafeedSubscriptionCommandInput}
 * @returns {@link DeleteSpotDatafeedSubscriptionCommandOutput}
 * @see {@link DeleteSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To cancel a Spot Instance data feed subscription
 * ```javascript
 * // This example deletes a Spot data feed subscription for the account.
 * const input = {};
 * const command = new DeleteSpotDatafeedSubscriptionCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-spot-datafeed-subscription-1
 * ```
 *
 */
export class DeleteSpotDatafeedSubscriptionCommand extends $Command
  .classBuilder<
    DeleteSpotDatafeedSubscriptionCommandInput,
    DeleteSpotDatafeedSubscriptionCommandOutput,
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
  .s("AmazonEC2", "DeleteSpotDatafeedSubscription", {})
  .n("EC2Client", "DeleteSpotDatafeedSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSpotDatafeedSubscriptionCommand)
  .de(de_DeleteSpotDatafeedSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSpotDatafeedSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteSpotDatafeedSubscriptionCommandInput;
      output: DeleteSpotDatafeedSubscriptionCommandOutput;
    };
  };
}
