// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetConfigurationSetEventDestinationsRequest,
  GetConfigurationSetEventDestinationsResponse,
} from "../models/models_0";
import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import { GetConfigurationSetEventDestinations } from "../schemas/schemas_1_Configuration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationSetEventDestinationsCommand}.
 */
export interface GetConfigurationSetEventDestinationsCommandInput extends GetConfigurationSetEventDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationSetEventDestinationsCommand}.
 */
export interface GetConfigurationSetEventDestinationsCommandOutput
  extends GetConfigurationSetEventDestinationsResponse,
    __MetadataBearer {}

/**
 * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, GetConfigurationSetEventDestinationsCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, GetConfigurationSetEventDestinationsCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * // import type { PinpointSMSVoiceClientConfig } from "@aws-sdk/client-pinpoint-sms-voice";
 * const config = {}; // type is PinpointSMSVoiceClientConfig
 * const client = new PinpointSMSVoiceClient(config);
 * const input = { // GetConfigurationSetEventDestinationsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationSetEventDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationSetEventDestinationsResponse
 * //   EventDestinations: [ // EventDestinations
 * //     { // EventDestination
 * //       CloudWatchLogsDestination: { // CloudWatchLogsDestination
 * //         IamRoleArn: "STRING_VALUE",
 * //         LogGroupArn: "STRING_VALUE",
 * //       },
 * //       Enabled: true || false,
 * //       KinesisFirehoseDestination: { // KinesisFirehoseDestination
 * //         DeliveryStreamArn: "STRING_VALUE",
 * //         IamRoleArn: "STRING_VALUE",
 * //       },
 * //       MatchingEventTypes: [ // EventTypes
 * //         "INITIATED_CALL" || "RINGING" || "ANSWERED" || "COMPLETED_CALL" || "BUSY" || "FAILED" || "NO_ANSWER",
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       SnsDestination: { // SnsDestination
 * //         TopicArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetConfigurationSetEventDestinationsCommandInput - {@link GetConfigurationSetEventDestinationsCommandInput}
 * @returns {@link GetConfigurationSetEventDestinationsCommandOutput}
 * @see {@link GetConfigurationSetEventDestinationsCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationSetEventDestinationsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for PinpointSMSVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The input you provided is invalid.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  You've issued too many requests to the resource. Wait a few minutes, and then try again.
 *
 * @throws {@link PinpointSMSVoiceServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoice service.</p>
 *
 *
 * @public
 */
export class GetConfigurationSetEventDestinationsCommand extends $Command
  .classBuilder<
    GetConfigurationSetEventDestinationsCommandInput,
    GetConfigurationSetEventDestinationsCommandOutput,
    PinpointSMSVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoice", "GetConfigurationSetEventDestinations", {})
  .n("PinpointSMSVoiceClient", "GetConfigurationSetEventDestinationsCommand")
  .sc(GetConfigurationSetEventDestinations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationSetEventDestinationsRequest;
      output: GetConfigurationSetEventDestinationsResponse;
    };
    sdk: {
      input: GetConfigurationSetEventDestinationsCommandInput;
      output: GetConfigurationSetEventDestinationsCommandOutput;
    };
  };
}
