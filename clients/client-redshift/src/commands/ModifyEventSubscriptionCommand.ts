// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult } from "../models/models_1";
import { ModifyEventSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyEventSubscriptionCommand}.
 */
export interface ModifyEventSubscriptionCommandInput extends ModifyEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link ModifyEventSubscriptionCommand}.
 */
export interface ModifyEventSubscriptionCommandOutput extends ModifyEventSubscriptionResult, __MetadataBearer {}

/**
 * Modifies an existing Amazon Redshift event notification subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SnsTopicArn: "STRING_VALUE",
 *   SourceType: "STRING_VALUE",
 *   SourceIds: [ // SourceIdsList
 *     "STRING_VALUE",
 *   ],
 *   EventCategories: [ // EventCategoriesList
 *     "STRING_VALUE",
 *   ],
 *   Severity: "STRING_VALUE",
 *   Enabled: true || false,
 * };
 * const command = new ModifyEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // ModifyEventSubscriptionResult
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
 * @param ModifyEventSubscriptionCommandInput - {@link ModifyEventSubscriptionCommandInput}
 * @returns {@link ModifyEventSubscriptionCommandOutput}
 * @see {@link ModifyEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ModifyEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidSubscriptionStateFault} (client fault)
 *
 * The subscription request is invalid because it is a duplicate request. This subscription request is already in progress.
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *
 * Amazon SNS has responded that there is a problem with the specified Amazon SNS topic.
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *
 * You do not have permission to publish to the specified Amazon SNS topic.
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *
 * An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not exist.
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *
 * The specified Amazon Redshift event source could not be found.
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *
 * The value specified for the event category was not one of the allowed values, or it specified a category that does not apply to the specified source type. The allowed values are Configuration, Management, Monitoring, and Security.
 *
 * @throws {@link SubscriptionEventIdNotFoundFault} (client fault)
 *
 * An Amazon Redshift event with the specified event ID does not exist.
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *
 * An Amazon Redshift event notification subscription with the specified name does not exist.
 *
 * @throws {@link SubscriptionSeverityNotFoundFault} (client fault)
 *
 * The value specified for the event severity was not one of the allowed values, or it specified a severity that does not apply to the specified source type. The allowed values are ERROR and INFO.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class ModifyEventSubscriptionCommand extends command<ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "ModifyEventSubscription",
  ModifyEventSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyEventSubscriptionMessage;
      output: ModifyEventSubscriptionResult;
    };
    sdk: {
      input: ModifyEventSubscriptionCommandInput;
      output: ModifyEventSubscriptionCommandOutput;
    };
  };
}
