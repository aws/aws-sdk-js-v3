// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfigurationSetRequest, DeleteConfigurationSetResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DeleteConfigurationSetCommand, se_DeleteConfigurationSetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationSetCommand}.
 */
export interface DeleteConfigurationSetCommandInput extends DeleteConfigurationSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationSetCommand}.
 */
export interface DeleteConfigurationSetCommandOutput extends DeleteConfigurationSetResult, __MetadataBearer {}

/**
 * <p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteConfigurationSetCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteConfigurationSetCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteConfigurationSetRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConfigurationSetResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   EventDestinations: [ // EventDestinationList
 * //     { // EventDestination
 * //       EventDestinationName: "STRING_VALUE", // required
 * //       Enabled: true || false, // required
 * //       MatchingEventTypes: [ // EventTypeList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       CloudWatchLogsDestination: { // CloudWatchLogsDestination
 * //         IamRoleArn: "STRING_VALUE", // required
 * //         LogGroupArn: "STRING_VALUE", // required
 * //       },
 * //       KinesisFirehoseDestination: { // KinesisFirehoseDestination
 * //         IamRoleArn: "STRING_VALUE", // required
 * //         DeliveryStreamArn: "STRING_VALUE", // required
 * //       },
 * //       SnsDestination: { // SnsDestination
 * //         TopicArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   DefaultMessageType: "STRING_VALUE",
 * //   DefaultSenderId: "STRING_VALUE",
 * //   DefaultMessageFeedbackEnabled: true || false,
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeleteConfigurationSetCommandInput - {@link DeleteConfigurationSetCommandInput}
 * @returns {@link DeleteConfigurationSetCommandOutput}
 * @see {@link DeleteConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
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
export class DeleteConfigurationSetCommand extends $Command
  .classBuilder<
    DeleteConfigurationSetCommandInput,
    DeleteConfigurationSetCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "DeleteConfigurationSet", {})
  .n("PinpointSMSVoiceV2Client", "DeleteConfigurationSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigurationSetCommand)
  .de(de_DeleteConfigurationSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigurationSetRequest;
      output: DeleteConfigurationSetResult;
    };
    sdk: {
      input: DeleteConfigurationSetCommandInput;
      output: DeleteConfigurationSetCommandOutput;
    };
  };
}
