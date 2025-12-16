// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeSpotDatafeedSubscriptionRequest,
  DescribeSpotDatafeedSubscriptionResult,
} from "../models/models_4";
import { DescribeSpotDatafeedSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpotDatafeedSubscriptionCommand}.
 */
export interface DescribeSpotDatafeedSubscriptionCommandInput extends DescribeSpotDatafeedSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpotDatafeedSubscriptionCommand}.
 */
export interface DescribeSpotDatafeedSubscriptionCommandOutput
  extends DescribeSpotDatafeedSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot
 *             Instance data feed</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeSpotDatafeedSubscriptionRequest
 *   DryRun: true || false,
 * };
 * const command = new DescribeSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpotDatafeedSubscriptionResult
 * //   SpotDatafeedSubscription: { // SpotDatafeedSubscription
 * //     Bucket: "STRING_VALUE",
 * //     Fault: { // SpotInstanceStateFault
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     OwnerId: "STRING_VALUE",
 * //     Prefix: "STRING_VALUE",
 * //     State: "Active" || "Inactive",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSpotDatafeedSubscriptionCommandInput - {@link DescribeSpotDatafeedSubscriptionCommandInput}
 * @returns {@link DescribeSpotDatafeedSubscriptionCommandOutput}
 * @see {@link DescribeSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe the datafeed for your AWS account
 * ```javascript
 * // This example describes the Spot Instance datafeed subscription for your AWS account.
 * const input = { /* empty *\/ };
 * const command = new DescribeSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SpotDatafeedSubscription: {
 *     Bucket: "my-s3-bucket",
 *     OwnerId: "123456789012",
 *     Prefix: "spotdata",
 *     State: "Active"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSpotDatafeedSubscriptionCommand extends $Command
  .classBuilder<
    DescribeSpotDatafeedSubscriptionCommandInput,
    DescribeSpotDatafeedSubscriptionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeSpotDatafeedSubscription", {})
  .n("EC2Client", "DescribeSpotDatafeedSubscriptionCommand")
  .sc(DescribeSpotDatafeedSubscription$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSpotDatafeedSubscriptionRequest;
      output: DescribeSpotDatafeedSubscriptionResult;
    };
    sdk: {
      input: DescribeSpotDatafeedSubscriptionCommandInput;
      output: DescribeSpotDatafeedSubscriptionCommandOutput;
    };
  };
}
