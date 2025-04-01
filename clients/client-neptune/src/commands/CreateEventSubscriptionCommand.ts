// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_CreateEventSubscriptionCommand, se_CreateEventSubscriptionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventSubscriptionCommand}.
 */
export interface CreateEventSubscriptionCommandInput extends CreateEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link CreateEventSubscriptionCommand}.
 */
export interface CreateEventSubscriptionCommandOutput extends CreateEventSubscriptionResult, __MetadataBearer {}

/**
 * <p>Creates an event notification subscription. This action requires a topic ARN (Amazon
 *       Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To
 *       obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The
 *       ARN is displayed in the SNS console.</p>
 *          <p>You can specify the type of source (SourceType) you want to be notified of, provide a list
 *       of Neptune sources (SourceIds) that triggers the events, and provide a list of event
 *       categories (EventCategories) for events you want to be notified of. For example, you can
 *       specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories
 *       = Availability, Backup.</p>
 *          <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and
 *       SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the
 *       specified source. If you specify a SourceType but do not specify a SourceIdentifier, you
 *       receive notice of the events for that source type for all your Neptune sources. If you do not
 *       specify either the SourceType nor the SourceIdentifier, you are notified of events generated
 *       from all Neptune sources belonging to your customer account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // CreateEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SnsTopicArn: "STRING_VALUE", // required
 *   SourceType: "STRING_VALUE",
 *   EventCategories: [ // EventCategoriesList
 *     "STRING_VALUE",
 *   ],
 *   SourceIds: [ // SourceIdsList
 *     "STRING_VALUE",
 *   ],
 *   Enabled: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventSubscriptionResult
 * //   EventSubscription: { // EventSubscription
 * //     CustomerAwsId: "STRING_VALUE",
 * //     CustSubscriptionId: "STRING_VALUE",
 * //     SnsTopicArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     SubscriptionCreationTime: "STRING_VALUE",
 * //     SourceType: "STRING_VALUE",
 * //     SourceIdsList: [ // SourceIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     EventCategoriesList: [ // EventCategoriesList
 * //       "STRING_VALUE",
 * //     ],
 * //     Enabled: true || false,
 * //     EventSubscriptionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventSubscriptionCommandInput - {@link CreateEventSubscriptionCommandInput}
 * @returns {@link CreateEventSubscriptionCommandOutput}
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link EventSubscriptionQuotaExceededFault} (client fault)
 *  <p>You have exceeded the number of events you can subscribe to.</p>
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *  <p>The SNS topic is invalid.</p>
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *  <p>There is no SNS authorization.</p>
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *  <p>The ARN of the SNS topic could not be found.</p>
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The source could not be found.</p>
 *
 * @throws {@link SubscriptionAlreadyExistFault} (client fault)
 *  <p>This subscription already exists.</p>
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *  <p>The designated subscription category could not be found.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class CreateEventSubscriptionCommand extends $Command
  .classBuilder<
    CreateEventSubscriptionCommandInput,
    CreateEventSubscriptionCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CreateEventSubscription", {})
  .n("NeptuneClient", "CreateEventSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_CreateEventSubscriptionCommand)
  .de(de_CreateEventSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventSubscriptionMessage;
      output: CreateEventSubscriptionResult;
    };
    sdk: {
      input: CreateEventSubscriptionCommandInput;
      output: CreateEventSubscriptionCommandOutput;
    };
  };
}
