// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEventDestinationRequest, UpdateEventDestinationResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_UpdateEventDestinationCommand, se_UpdateEventDestinationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventDestinationCommand}.
 */
export interface UpdateEventDestinationCommandInput extends UpdateEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventDestinationCommand}.
 */
export interface UpdateEventDestinationCommandOutput extends UpdateEventDestinationResult, __MetadataBearer {}

/**
 * <p>Updates an existing event destination in a configuration set. You can update the
 *                 IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can
 *             also enable or disable the event destination.</p>
 *          <p>You may want to update an event destination to change its matching event types or
 *             updating the destination resource ARN. You can't change an event destination's type
 *             between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdateEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdateEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdateEventDestinationRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   EventDestinationName: "STRING_VALUE", // required
 *   Enabled: true || false,
 *   MatchingEventTypes: [ // EventTypeList
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
 * };
 * const command = new UpdateEventDestinationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventDestinationResult
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
 * @param UpdateEventDestinationCommandInput - {@link UpdateEventDestinationCommandInput}
 * @returns {@link UpdateEventDestinationCommandOutput}
 * @see {@link UpdateEventDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 * @public
 */
export class UpdateEventDestinationCommand extends $Command
  .classBuilder<
    UpdateEventDestinationCommandInput,
    UpdateEventDestinationCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "UpdateEventDestination", {})
  .n("PinpointSMSVoiceV2Client", "UpdateEventDestinationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEventDestinationCommand)
  .de(de_UpdateEventDestinationCommand)
  .build() {}
