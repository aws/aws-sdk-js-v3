// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse,
} from "../models/models_0";
import {
  de_CreateConfigurationSetEventDestinationCommand,
  se_CreateConfigurationSetEventDestinationCommand,
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
 * The input for {@link CreateConfigurationSetEventDestinationCommand}.
 */
export interface CreateConfigurationSetEventDestinationCommandInput
  extends CreateConfigurationSetEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationSetEventDestinationCommand}.
 */
export interface CreateConfigurationSetEventDestinationCommandOutput
  extends CreateConfigurationSetEventDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a configuration set event destination.</p>
 *          <note>
 *             <p>When you create or update an event destination, you must provide one, and only
 *                 one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p>
 *          </note>
 *          <p>An event destination is the Amazon Web Services service to which Amazon SES publishes the email sending
 *             events associated with a configuration set. For information about using configuration
 *             sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html">Amazon SES Developer
 *             Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // CreateConfigurationSetEventDestinationRequest
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
 * const command = new CreateConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateConfigurationSetEventDestinationCommandInput - {@link CreateConfigurationSetEventDestinationCommandInput}
 * @returns {@link CreateConfigurationSetEventDestinationCommandOutput}
 * @see {@link CreateConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link EventDestinationAlreadyExistsException} (client fault)
 *  <p>Indicates that the event destination could not be created because of a naming
 *             conflict.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @public
 */
export class CreateConfigurationSetEventDestinationCommand extends $Command
  .classBuilder<
    CreateConfigurationSetEventDestinationCommandInput,
    CreateConfigurationSetEventDestinationCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "CreateConfigurationSetEventDestination", {})
  .n("SESClient", "CreateConfigurationSetEventDestinationCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfigurationSetEventDestinationCommand)
  .de(de_CreateConfigurationSetEventDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigurationSetEventDestinationRequest;
      output: {};
    };
    sdk: {
      input: CreateConfigurationSetEventDestinationCommandInput;
      output: CreateConfigurationSetEventDestinationCommandOutput;
    };
  };
}
