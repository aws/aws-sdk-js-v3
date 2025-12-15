// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyEventSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Modifies an existing Amazon Redshift event notification subscription.</p>
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
 *  <p>The subscription request is invalid because it is a duplicate request. This
 *             subscription request is already in progress.</p>
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
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *  <p>The value specified for the event category was not one of the allowed values, or it
 *             specified a category that does not apply to the specified source type. The allowed
 *             values are Configuration, Management, Monitoring, and Security.</p>
 *
 * @throws {@link SubscriptionEventIdNotFoundFault} (client fault)
 *  <p>An Amazon Redshift event with the specified event ID does not exist.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>An Amazon Redshift event notification subscription with the specified name does not
 *             exist.</p>
 *
 * @throws {@link SubscriptionSeverityNotFoundFault} (client fault)
 *  <p>The value specified for the event severity was not one of the allowed values, or it
 *             specified a severity that does not apply to the specified source type. The allowed
 *             values are ERROR and INFO.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ModifyEventSubscriptionCommand extends $Command
  .classBuilder<
    ModifyEventSubscriptionCommandInput,
    ModifyEventSubscriptionCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ModifyEventSubscription", {})
  .n("RedshiftClient", "ModifyEventSubscriptionCommand")
  .sc(ModifyEventSubscription$)
  .build() {
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
