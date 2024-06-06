// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/models_0";
import { de_CreateEventSubscriptionCommand, se_CreateEventSubscriptionCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

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
 * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN
 *             (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console,
 *             the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you
 *             must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in
 *             the SNS console.</p>
 *          <p>You can specify the source type, and lists of Amazon Redshift source IDs, event
 *             categories, and event severities. Notifications will be sent for all events you want
 *             that match those criteria. For example, you can specify source type = cluster, source ID
 *             = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity =
 *             ERROR. The subscription will only send notifications for those ERROR events in the
 *             Availability and Backup categories for the specified clusters.</p>
 *          <p>If you specify both the source type and source IDs, such as source type = cluster
 *             and source identifier = my-cluster-1, notifications will be sent for all the cluster
 *             events for my-cluster-1. If you specify a source type but do not specify a source
 *             identifier, you will receive notice of the events for the objects of that type in your
 *             Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you
 *             will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SnsTopicArn: "STRING_VALUE", // required
 *   SourceType: "STRING_VALUE",
 *   SourceIds: [ // SourceIdsList
 *     "STRING_VALUE",
 *   ],
 *   EventCategories: [ // EventCategoriesList
 *     "STRING_VALUE",
 *   ],
 *   Severity: "STRING_VALUE",
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
 * //     SubscriptionCreationTime: new Date("TIMESTAMP"),
 * //     SourceType: "STRING_VALUE",
 * //     SourceIdsList: [ // SourceIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     EventCategoriesList: [ // EventCategoriesList
 * //       "STRING_VALUE",
 * //     ],
 * //     Severity: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventSubscriptionCommandInput - {@link CreateEventSubscriptionCommandInput}
 * @returns {@link CreateEventSubscriptionCommandOutput}
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link EventSubscriptionQuotaExceededFault} (client fault)
 *  <p>The request would exceed the allowed number of event subscriptions for this
 *             account.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *  <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS
 *             topic.</p>
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *  <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *  <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not
 *             exist.</p>
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The specified Amazon Redshift event source could not be found.</p>
 *
 * @throws {@link SubscriptionAlreadyExistFault} (client fault)
 *  <p>There is already an existing event notification subscription with the specified
 *             name.</p>
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *  <p>The value specified for the event category was not one of the allowed values, or it
 *             specified a category that does not apply to the specified source type. The allowed
 *             values are Configuration, Management, Monitoring, and Security.</p>
 *
 * @throws {@link SubscriptionEventIdNotFoundFault} (client fault)
 *  <p>An Amazon Redshift event with the specified event ID does not exist.</p>
 *
 * @throws {@link SubscriptionSeverityNotFoundFault} (client fault)
 *  <p>The value specified for the event severity was not one of the allowed values, or it
 *             specified a severity that does not apply to the specified source type. The allowed
 *             values are ERROR and INFO.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class CreateEventSubscriptionCommand extends $Command
  .classBuilder<
    CreateEventSubscriptionCommandInput,
    CreateEventSubscriptionCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "CreateEventSubscription", {})
  .n("RedshiftClient", "CreateEventSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_CreateEventSubscriptionCommand)
  .de(de_CreateEventSubscriptionCommand)
  .build() {}
