// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse,
} from "../models/models_0";
import {
  de_UpdateConfigurationSetEventDestinationCommand,
  se_UpdateConfigurationSetEventDestinationCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetEventDestinationCommand}.
 */
export interface UpdateConfigurationSetEventDestinationCommandInput
  extends UpdateConfigurationSetEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetEventDestinationCommand}.
 */
export interface UpdateConfigurationSetEventDestinationCommandOutput
  extends UpdateConfigurationSetEventDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the event destination of a configuration set. Event destinations are
 *             associated with configuration sets, which enable you to publish email sending events to
 *             Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets,
 *             see <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer
 *                 Guide.</i>
 *          </p>
 *          <note>
 *             <p>When you create or update an event destination, you must provide one, and only
 *                 one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service
 *                 (Amazon SNS).</p>
 *          </note>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateConfigurationSetEventDestinationRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   EventDestination: { // EventDestination
 *     Name: "STRING_VALUE", // required
 *     Enabled: true || false,
 *     MatchingEventTypes: [ // EventTypes // required
 *       "send" || "reject" || "bounce" || "complaint" || "delivery" || "open" || "click" || "renderingFailure",
 *     ],
 *     KinesisFirehoseDestination: { // KinesisFirehoseDestination
 *       IAMRoleARN: "STRING_VALUE", // required
 *       DeliveryStreamARN: "STRING_VALUE", // required
 *     },
 *     CloudWatchDestination: { // CloudWatchDestination
 *       DimensionConfigurations: [ // CloudWatchDimensionConfigurations // required
 *         { // CloudWatchDimensionConfiguration
 *           DimensionName: "STRING_VALUE", // required
 *           DimensionValueSource: "messageTag" || "emailHeader" || "linkTag", // required
 *           DefaultDimensionValue: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     SNSDestination: { // SNSDestination
 *       TopicARN: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationSetEventDestinationCommandInput - {@link UpdateConfigurationSetEventDestinationCommandInput}
 * @returns {@link UpdateConfigurationSetEventDestinationCommandOutput}
 * @see {@link UpdateConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link EventDestinationDoesNotExistException} (client fault)
 *  <p>Indicates that the event destination does not exist.</p>
 *
 * @throws {@link InvalidCloudWatchDestinationException} (client fault)
 *  <p>Indicates that the Amazon CloudWatch destination is invalid. See the error message for
 *             details.</p>
 *
 * @throws {@link InvalidFirehoseDestinationException} (client fault)
 *  <p>Indicates that the Amazon Kinesis Firehose destination is invalid. See the error
 *             message for details.</p>
 *
 * @throws {@link InvalidSNSDestinationException} (client fault)
 *  <p>Indicates that the Amazon Simple Notification Service (Amazon SNS) destination is
 *             invalid. See the error message for details.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 */
export class UpdateConfigurationSetEventDestinationCommand extends $Command
  .classBuilder<
    UpdateConfigurationSetEventDestinationCommandInput,
    UpdateConfigurationSetEventDestinationCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "UpdateConfigurationSetEventDestination", {})
  .n("SESClient", "UpdateConfigurationSetEventDestinationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConfigurationSetEventDestinationCommand)
  .de(de_UpdateConfigurationSetEventDestinationCommand)
  .build() {}
