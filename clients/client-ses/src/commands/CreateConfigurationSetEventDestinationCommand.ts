// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse,
} from "../models/models_0";
import { CreateConfigurationSetEventDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConfigurationSetEventDestinationCommand}.
 */
export interface CreateConfigurationSetEventDestinationCommandInput extends CreateConfigurationSetEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationSetEventDestinationCommand}.
 */
export interface CreateConfigurationSetEventDestinationCommandOutput extends CreateConfigurationSetEventDestinationResponse, __MetadataBearer {}

/**
 * Creates a configuration set event destination.
 *
 * > **Note:** When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).
 *
 * An event destination is the Amazon Web Services service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
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
 *
 * Indicates that the configuration set does not exist.
 *
 * @throws {@link EventDestinationAlreadyExistsException} (client fault)
 *
 * Indicates that the event destination could not be created because of a naming conflict.
 *
 * @throws {@link InvalidCloudWatchDestinationException} (client fault)
 *
 * Indicates that the Amazon CloudWatch destination is invalid. See the error message for details.
 *
 * @throws {@link InvalidFirehoseDestinationException} (client fault)
 *
 * Indicates that the Amazon Kinesis Firehose destination is invalid. See the error message for details.
 *
 * @throws {@link InvalidSNSDestinationException} (client fault)
 *
 * Indicates that the Amazon Simple Notification Service (Amazon SNS) destination is invalid. See the error message for details.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html).
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @public
 */
export class CreateConfigurationSetEventDestinationCommand extends command<CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput>(
  _ep0,
  _mw0,
  "CreateConfigurationSetEventDestination",
  CreateConfigurationSetEventDestination$
) {
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
