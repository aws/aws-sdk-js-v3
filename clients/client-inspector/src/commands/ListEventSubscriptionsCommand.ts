// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListEventSubscriptionsRequest, ListEventSubscriptionsResponse } from "../models/models_0";
import { de_ListEventSubscriptionsCommand, se_ListEventSubscriptionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventSubscriptionsCommand}.
 */
export interface ListEventSubscriptionsCommandInput extends ListEventSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventSubscriptionsCommand}.
 */
export interface ListEventSubscriptionsCommandOutput extends ListEventSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the event subscriptions for the assessment template that is specified by
 *          the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListEventSubscriptionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListEventSubscriptionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new InspectorClient(config);
 * const input = { // ListEventSubscriptionsRequest
 *   resourceArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventSubscriptionsResponse
 * //   subscriptions: [ // SubscriptionList // required
 * //     { // Subscription
 * //       resourceArn: "STRING_VALUE", // required
 * //       topicArn: "STRING_VALUE", // required
 * //       eventSubscriptions: [ // EventSubscriptionList // required
 * //         { // EventSubscription
 * //           event: "ASSESSMENT_RUN_STARTED" || "ASSESSMENT_RUN_COMPLETED" || "ASSESSMENT_RUN_STATE_CHANGED" || "FINDING_REPORTED" || "OTHER", // required
 * //           subscribedAt: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventSubscriptionsCommandInput - {@link ListEventSubscriptionsCommandInput}
 * @returns {@link ListEventSubscriptionsCommandOutput}
 * @see {@link ListEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 * @example List event subscriptions
 * ```javascript
 * // Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template.
 * const input = {
 *   "maxResults": 123,
 *   "resourceArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0"
 * };
 * const command = new ListEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "nextToken": "1",
 *   "subscriptions": [
 *     {
 *       "eventSubscriptions": [
 *         {
 *           "event": "ASSESSMENT_RUN_COMPLETED",
 *           "subscribedAt": "1459455440.867"
 *         }
 *       ],
 *       "resourceArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0",
 *       "topicArn": "arn:aws:sns:us-west-2:123456789012:exampletopic"
 *     }
 *   ]
 * }
 * *\/
 * // example id: list-event-subscriptions-1481068376945
 * ```
 *
 */
export class ListEventSubscriptionsCommand extends $Command
  .classBuilder<
    ListEventSubscriptionsCommandInput,
    ListEventSubscriptionsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "ListEventSubscriptions", {})
  .n("InspectorClient", "ListEventSubscriptionsCommand")
  .f(void 0, void 0)
  .ser(se_ListEventSubscriptionsCommand)
  .de(de_ListEventSubscriptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventSubscriptionsRequest;
      output: ListEventSubscriptionsResponse;
    };
    sdk: {
      input: ListEventSubscriptionsCommandInput;
      output: ListEventSubscriptionsCommandOutput;
    };
  };
}
