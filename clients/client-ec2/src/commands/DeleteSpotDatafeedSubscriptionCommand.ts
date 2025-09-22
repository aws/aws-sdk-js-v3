// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSpotDatafeedSubscriptionRequest } from "../models/models_3";
import { DeleteSpotDatafeedSubscription } from "../schemas/schemas_198_DeleteSpotDatafeedSubscription";

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * @example To cancel a Spot Instance data feed subscription
 * ```javascript
 * // This example deletes a Spot data feed subscription for the account.
 * const input = { /* empty *\/ };
 * const command = new DeleteSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteSpotDatafeedSubscription", {})
  .n("EC2Client", "DeleteSpotDatafeedSubscriptionCommand")
  .sc(DeleteSpotDatafeedSubscription)
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
