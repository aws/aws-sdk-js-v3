// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSpotDatafeedSubscriptionRequest } from "../models/models_1";
import type { CreateSpotDatafeedSubscriptionResult } from "../models/models_2";
import { CreateSpotDatafeedSubscription } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSpotDatafeedSubscriptionCommand}.
 */
export interface CreateSpotDatafeedSubscriptionCommandInput extends CreateSpotDatafeedSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSpotDatafeedSubscriptionCommand}.
 */
export interface CreateSpotDatafeedSubscriptionCommandOutput
  extends CreateSpotDatafeedSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs.
 *             You can create one data feed per Amazon Web Services account. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance data feed</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateSpotDatafeedSubscriptionRequest
 *   DryRun: true || false,
 *   Bucket: "STRING_VALUE", // required
 *   Prefix: "STRING_VALUE",
 * };
 * const command = new CreateSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSpotDatafeedSubscriptionResult
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
 * @param CreateSpotDatafeedSubscriptionCommandInput - {@link CreateSpotDatafeedSubscriptionCommandInput}
 * @returns {@link CreateSpotDatafeedSubscriptionCommandOutput}
 * @see {@link CreateSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a Spot Instance datafeed
 * ```javascript
 * // This example creates a Spot Instance data feed for your AWS account.
 * const input = {
 *   Bucket: "my-s3-bucket",
 *   Prefix: "spotdata"
 * };
 * const command = new CreateSpotDatafeedSubscriptionCommand(input);
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
export class CreateSpotDatafeedSubscriptionCommand extends $Command
  .classBuilder<
    CreateSpotDatafeedSubscriptionCommandInput,
    CreateSpotDatafeedSubscriptionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateSpotDatafeedSubscription", {})
  .n("EC2Client", "CreateSpotDatafeedSubscriptionCommand")
  .sc(CreateSpotDatafeedSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSpotDatafeedSubscriptionRequest;
      output: CreateSpotDatafeedSubscriptionResult;
    };
    sdk: {
      input: CreateSpotDatafeedSubscriptionCommandInput;
      output: CreateSpotDatafeedSubscriptionCommandOutput;
    };
  };
}
