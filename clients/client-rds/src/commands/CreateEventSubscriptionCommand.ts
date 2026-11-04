// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/models_0";
import { CreateEventSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an RDS event notification subscription. This operation requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.
 *
 * You can specify the type of source (`SourceType`) that you want to be notified of and provide a list of RDS sources (`SourceIds`) that triggers the events. You can also provide a list of event categories (`EventCategories`) for events that you want to be notified of. For example, you can specify `SourceType` = `db-instance`, `SourceIds` = `mydbinstance1`, `mydbinstance2` and `EventCategories` = `Availability`, `Backup`.
 *
 * If you specify both the `SourceType` and `SourceIds`, such as `SourceType` = `db-instance` and `SourceIds` = `myDBInstance1`, you are notified of all the `db-instance` events for the specified source. If you specify a `SourceType` but do not specify `SourceIds`, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the `SourceIds`, you are notified of events generated from all RDS sources belonging to your customer account.
 *
 * For more information about subscribing to an event for RDS DB engines, see [Subscribing to Amazon RDS event notification](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html) in the *Amazon RDS User Guide*.
 *
 * For more information about subscribing to an event for Aurora DB engines, see [Subscribing to Amazon RDS event notification](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html) in the *Amazon Aurora User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
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
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link EventSubscriptionQuotaExceededFault} (client fault)
 *
 * You have reached the maximum number of event subscriptions.
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *
 * SNS has responded that there is a problem with the SNS topic specified.
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *
 * You do not have permission to publish to the SNS topic ARN.
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *
 * The SNS topic ARN does not exist.
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *
 * The requested source could not be found.
 *
 * @throws {@link SubscriptionAlreadyExistFault} (client fault)
 *
 * The supplied subscription name already exists.
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *
 * The supplied category does not exist.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To create an event subscription
 * ```javascript
 * // The following example creates a subscription for backup and recovery events for DB instances in the current AWS account. Notifications are sent to an Amazon Simple Notification Service topic.
 * const input = {
 *   EventCategories: [
 *     "backup",
 *     "recovery"
 *   ],
 *   SnsTopicArn: "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *   SourceType: "db-instance",
 *   SubscriptionName: "my-instance-events"
 * };
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EventSubscription: {
 *     CustSubscriptionId: "my-instance-events",
 *     CustomerAwsId: "123456789012",
 *     Enabled: true,
 *     EventCategoriesList: [
 *       "backup",
 *       "recovery"
 *     ],
 *     EventSubscriptionArn: "arn:aws:rds:us-east-1:123456789012:es:my-instance-events",
 *     SnsTopicArn: "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *     SourceType: "db-instance",
 *     Status: "creating",
 *     SubscriptionCreationTime: "Tue Jul 31 23:22:01 UTC 2018"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateEventSubscriptionCommand extends command<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CreateEventSubscription",
  CreateEventSubscription$
) {
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
