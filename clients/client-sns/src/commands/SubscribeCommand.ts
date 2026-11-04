// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SubscribeInput, SubscribeResponse } from "../models/models_0";
import { Subscribe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SubscribeCommand}.
 */
export interface SubscribeCommandInput extends SubscribeInput {}
/**
 * @public
 *
 * The output of {@link SubscribeCommand}.
 */
export interface SubscribeCommandOutput extends SubscribeResponse, __MetadataBearer {}

/**
 * Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must run the `ConfirmSubscription` action to confirm the subscription.
 *
 * You call the `ConfirmSubscription` action with the token from the subscription response. Confirmation tokens are valid for two days.
 *
 * This action is throttled at 100 transactions per second (TPS).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // SubscribeInput
 *   TopicArn: "STRING_VALUE", // required
 *   Protocol: "STRING_VALUE", // required
 *   Endpoint: "STRING_VALUE",
 *   Attributes: { // SubscriptionAttributesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ReturnSubscriptionArn: true || false,
 * };
 * const command = new SubscribeCommand(input);
 * const response = await client.send(command);
 * // { // SubscribeResponse
 * //   SubscriptionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubscribeCommandInput - {@link SubscribeCommandInput}
 * @returns {@link SubscribeCommandOutput}
 * @see {@link SubscribeCommandInput} for command's `input` shape.
 * @see {@link SubscribeCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link FilterPolicyLimitExceededException} (client fault)
 *
 * Indicates that the number of filter polices in your Amazon Web Services account exceeds the limit. To add more filter polices, submit an Amazon SNS Limit Increase case in the Amazon Web Services Support Center.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *
 * The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Indicates that the requested resource does not exist.
 *
 * @throws {@link ReplayLimitExceededException} (client fault)
 *
 * Indicates that the request parameter has exceeded the maximum number of concurrent message replays.
 *
 * @throws {@link SubscriptionLimitExceededException} (client fault)
 *
 * Indicates that the customer already owns the maximum allowed number of subscriptions.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class SubscribeCommand extends command<SubscribeCommandInput, SubscribeCommandOutput>(
  _ep0,
  _mw0,
  "Subscribe",
  Subscribe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubscribeInput;
      output: SubscribeResponse;
    };
    sdk: {
      input: SubscribeCommandInput;
      output: SubscribeCommandOutput;
    };
  };
}
