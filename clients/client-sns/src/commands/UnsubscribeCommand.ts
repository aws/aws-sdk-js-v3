// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UnsubscribeInput } from "../models/models_0";
import { Unsubscribe } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnsubscribeCommand}.
 */
export interface UnsubscribeCommandInput extends UnsubscribeInput {}
/**
 * @public
 *
 * The output of {@link UnsubscribeCommand}.
 */
export interface UnsubscribeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a subscription. If the subscription requires authentication for deletion, only
 *             the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services
 *             signature is required. If the <code>Unsubscribe</code> call does not require
 *             authentication and the requester is not the subscription owner, a final cancellation
 *             message is delivered to the endpoint, so that the endpoint owner can easily resubscribe
 *             to the topic if the <code>Unsubscribe</code> request was unintended.</p>
 *          <p>This action is throttled at 100 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, UnsubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, UnsubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // UnsubscribeInput
 *   SubscriptionArn: "STRING_VALUE", // required
 * };
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnsubscribeCommandInput - {@link UnsubscribeCommandInput}
 * @returns {@link UnsubscribeCommandOutput}
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class UnsubscribeCommand extends $Command
  .classBuilder<
    UnsubscribeCommandInput,
    UnsubscribeCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "Unsubscribe", {})
  .n("SNSClient", "UnsubscribeCommand")
  .sc(Unsubscribe)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnsubscribeInput;
      output: {};
    };
    sdk: {
      input: UnsubscribeCommandInput;
      output: UnsubscribeCommandOutput;
    };
  };
}
