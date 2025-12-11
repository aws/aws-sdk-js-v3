// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSubscriptionsRequest, ListSubscriptionsResponse } from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { ListSubscriptions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandInput extends ListSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandOutput extends ListSubscriptionsResponse, __MetadataBearer {}

/**
 * <p> Lists all subscriptions created in an Amazon Q Business application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListSubscriptionsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListSubscriptionsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListSubscriptionsRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   subscriptions: [ // Subscriptions
 * //     { // Subscription
 * //       subscriptionId: "STRING_VALUE",
 * //       subscriptionArn: "STRING_VALUE",
 * //       principal: { // SubscriptionPrincipal Union: only one key present
 * //         user: "STRING_VALUE",
 * //         group: "STRING_VALUE",
 * //       },
 * //       currentSubscription: { // SubscriptionDetails
 * //         type: "Q_LITE" || "Q_BUSINESS",
 * //       },
 * //       nextSubscription: {
 * //         type: "Q_LITE" || "Q_BUSINESS",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSubscriptionsCommandInput - {@link ListSubscriptionsCommandInput}
 * @returns {@link ListSubscriptionsCommandOutput}
 * @see {@link ListSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class ListSubscriptionsCommand extends $Command
  .classBuilder<
    ListSubscriptionsCommandInput,
    ListSubscriptionsCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "ListSubscriptions", {})
  .n("QBusinessClient", "ListSubscriptionsCommand")
  .sc(ListSubscriptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionsRequest;
      output: ListSubscriptionsResponse;
    };
    sdk: {
      input: ListSubscriptionsCommandInput;
      output: ListSubscriptionsCommandOutput;
    };
  };
}
