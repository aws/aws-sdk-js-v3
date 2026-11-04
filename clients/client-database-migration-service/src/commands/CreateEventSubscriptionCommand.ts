// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventSubscriptionMessage, CreateEventSubscriptionResponse } from "../models/models_0";
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
export interface CreateEventSubscriptionCommandOutput extends CreateEventSubscriptionResponse, __MetadataBearer {}

/**
 * Creates an DMS event notification subscription.
 *
 * You can specify the type of source (`SourceType`) you want to be notified of, provide a list of DMS source IDs (`SourceIds`) that triggers the events, and provide a list of event categories (`EventCategories`) for events you want to be notified of. If you specify both the `SourceType` and `SourceIds`, such as `SourceType = replication-instance` and `SourceIdentifier = my-replinstance`, you will be notified of all the replication instance events for the specified source. If you specify a `SourceType` but don't specify a `SourceIdentifier`, you receive notice of the events for that source type for all your DMS sources. If you don't specify either `SourceType` nor `SourceIdentifier`, you will be notified of events generated from all DMS sources belonging to your customer account.
 *
 * For more information about DMS events, see [Working with Events and Notifications](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html) in the *Database Migration Service User Guide.*
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
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
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventSubscriptionResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventSubscriptionCommandInput - {@link CreateEventSubscriptionCommandInput}
 * @returns {@link CreateEventSubscriptionCommandOutput}
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link KMSAccessDeniedFault} (client fault)
 *
 * The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.
 *
 * @throws {@link KMSDisabledFault} (client fault)
 *
 * The specified KMS key isn't enabled.
 *
 * @throws {@link KMSInvalidStateFault} (client fault)
 *
 * The state of the specified KMS resource isn't valid for this request.
 *
 * @throws {@link KMSNotFoundFault} (client fault)
 *
 * The specified KMS entity or resource can't be found.
 *
 * @throws {@link KMSThrottlingFault} (client fault)
 *
 * This request triggered KMS request throttling.
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *
 * The resource you are attempting to create already exists.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *
 * The quota for this resource quota has been exceeded.
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *
 * The SNS topic is invalid.
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *
 * You are not authorized for the SNS subscription.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
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
      output: CreateEventSubscriptionResponse;
    };
    sdk: {
      input: CreateEventSubscriptionCommandInput;
      output: CreateEventSubscriptionCommandOutput;
    };
  };
}
