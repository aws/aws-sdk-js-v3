// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult } from "../models/models_0";
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
 * Modifies an existing Amazon DocumentDB event notification subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyEventSubscriptionCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyEventSubscriptionCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // ModifyEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SnsTopicArn: "STRING_VALUE",
 *   SourceType: "STRING_VALUE",
 *   EventCategories: [ // EventCategoriesList
 *     "STRING_VALUE",
 *   ],
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
 * @param ModifyEventSubscriptionCommandInput - {@link ModifyEventSubscriptionCommandInput}
 * @returns {@link ModifyEventSubscriptionCommandOutput}
 * @see {@link ModifyEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ModifyEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link EventSubscriptionQuotaExceededFault} (client fault)
 *
 * You have reached the maximum number of event subscriptions.
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *
 * Amazon SNS has responded that there is a problem with the specified topic.
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *
 * You do not have permission to publish to the SNS topic Amazon Resource Name (ARN).
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *
 * The SNS topic Amazon Resource Name (ARN) does not exist.
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *
 * The provided category does not exist.
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *
 * The subscription name does not exist.
 *
 * @throws {@link DocDBServiceException}
 *
 * Base exception class for all service exceptions from DocDB service.
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
