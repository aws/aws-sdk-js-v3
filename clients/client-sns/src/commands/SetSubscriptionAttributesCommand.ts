// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SetSubscriptionAttributesInput } from "../models/models_0";
import { SetSubscriptionAttributes$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetSubscriptionAttributesCommand}.
 */
export interface SetSubscriptionAttributesCommandInput extends SetSubscriptionAttributesInput {}
/**
 * @public
 *
 * The output of {@link SetSubscriptionAttributesCommand}.
 */
export interface SetSubscriptionAttributesCommandOutput extends __MetadataBearer {}

/**
 * <p>Allows a subscription owner to set an attribute of the subscription to a new
 *             value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // SetSubscriptionAttributesInput
 *   SubscriptionArn: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   AttributeValue: "STRING_VALUE",
 * };
 * const command = new SetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetSubscriptionAttributesCommandInput - {@link SetSubscriptionAttributesCommandInput}
 * @returns {@link SetSubscriptionAttributesCommandOutput}
 * @see {@link SetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link SetSubscriptionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link FilterPolicyLimitExceededException} (client fault)
 *  <p>Indicates that the number of filter polices in your Amazon Web Services account exceeds the limit. To
 *             add more filter polices, submit an Amazon SNS Limit Increase case in the Amazon Web ServicesSupport
 *             Center.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link ReplayLimitExceededException} (client fault)
 *  <p>Indicates that the request parameter has exceeded the maximum number of concurrent message replays.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class SetSubscriptionAttributesCommand extends $Command
  .classBuilder<
    SetSubscriptionAttributesCommandInput,
    SetSubscriptionAttributesCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "SetSubscriptionAttributes", {})
  .n("SNSClient", "SetSubscriptionAttributesCommand")
  .sc(SetSubscriptionAttributes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetSubscriptionAttributesInput;
      output: {};
    };
    sdk: {
      input: SetSubscriptionAttributesCommandInput;
      output: SetSubscriptionAttributesCommandOutput;
    };
  };
}
