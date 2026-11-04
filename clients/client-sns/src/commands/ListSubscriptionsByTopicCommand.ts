// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSubscriptionsByTopicInput, ListSubscriptionsByTopicResponse } from "../models/models_0";
import { ListSubscriptionsByTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubscriptionsByTopicCommand}.
 */
export interface ListSubscriptionsByTopicCommandInput extends ListSubscriptionsByTopicInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionsByTopicCommand}.
 */
export interface ListSubscriptionsByTopicCommandOutput extends ListSubscriptionsByTopicResponse, __MetadataBearer {}

/**
 * Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a `NextToken` is also returned. Use the `NextToken` parameter in a new `ListSubscriptionsByTopic` call to get further results.
 *
 * This action is throttled at 30 transactions per second (TPS).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSubscriptionsByTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // ListSubscriptionsByTopicInput
 *   TopicArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSubscriptionsByTopicCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionsByTopicResponse
 * //   Subscriptions: [ // SubscriptionsList
 * //     { // Subscription
 * //       SubscriptionArn: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       Protocol: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       TopicArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscriptionsByTopicCommandInput - {@link ListSubscriptionsByTopicCommandInput}
 * @returns {@link ListSubscriptionsByTopicCommandOutput}
 * @see {@link ListSubscriptionsByTopicCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsByTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Indicates that the requested resource does not exist.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class ListSubscriptionsByTopicCommand extends command<ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput>(
  _ep0,
  _mw0,
  "ListSubscriptionsByTopic",
  ListSubscriptionsByTopic$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionsByTopicInput;
      output: ListSubscriptionsByTopicResponse;
    };
    sdk: {
      input: ListSubscriptionsByTopicCommandInput;
      output: ListSubscriptionsByTopicCommandOutput;
    };
  };
}
