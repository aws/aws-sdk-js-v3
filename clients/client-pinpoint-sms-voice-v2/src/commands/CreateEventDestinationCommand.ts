// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEventDestinationRequest, CreateEventDestinationResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { CreateEventDestination } from "../schemas/schemas_10_Destination";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventDestinationCommand}.
 */
export interface CreateEventDestinationCommandInput extends CreateEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventDestinationCommand}.
 */
export interface CreateEventDestinationCommandOutput extends CreateEventDestinationResult, __MetadataBearer {}

/**
 * <p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic. </p> <p>You can only create one event destination at a time. You must provide a value for a single event destination using either <code>CloudWatchLogsDestination</code>, <code>KinesisFirehoseDestination</code> or <code>SnsDestination</code>. If an event destination isn't provided then an exception is returned.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Firehose destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CreateEventDestinationRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   EventDestinationName: "STRING_VALUE", // required
 *   MatchingEventTypes: [ // EventTypeList // required
 *     "STRING_VALUE",
 *   ],
 *   CloudWatchLogsDestination: { // CloudWatchLogsDestination
 *     IamRoleArn: "STRING_VALUE", // required
 *     LogGroupArn: "STRING_VALUE", // required
 *   },
 *   KinesisFirehoseDestination: { // KinesisFirehoseDestination
 *     IamRoleArn: "STRING_VALUE", // required
 *     DeliveryStreamArn: "STRING_VALUE", // required
 *   },
 *   SnsDestination: { // SnsDestination
 *     TopicArn: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateEventDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventDestinationResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   EventDestination: { // EventDestination
 * //     EventDestinationName: "STRING_VALUE", // required
 * //     Enabled: true || false, // required
 * //     MatchingEventTypes: [ // EventTypeList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     CloudWatchLogsDestination: { // CloudWatchLogsDestination
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       LogGroupArn: "STRING_VALUE", // required
 * //     },
 * //     KinesisFirehoseDestination: { // KinesisFirehoseDestination
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       DeliveryStreamArn: "STRING_VALUE", // required
 * //     },
 * //     SnsDestination: { // SnsDestination
 * //       TopicArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventDestinationCommandInput - {@link CreateEventDestinationCommandInput}
 * @returns {@link CreateEventDestinationCommandOutput}
 * @see {@link CreateEventDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class CreateEventDestinationCommand extends $Command
  .classBuilder<
    CreateEventDestinationCommandInput,
    CreateEventDestinationCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "CreateEventDestination", {})
  .n("PinpointSMSVoiceV2Client", "CreateEventDestinationCommand")
  .sc(CreateEventDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventDestinationRequest;
      output: CreateEventDestinationResult;
    };
    sdk: {
      input: CreateEventDestinationCommandInput;
      output: CreateEventDestinationCommandOutput;
    };
  };
}
