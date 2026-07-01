// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse,
} from "../models/models_0";
import { UpdateConfigurationSetEventDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetEventDestinationCommand}.
 */
export interface UpdateConfigurationSetEventDestinationCommandInput extends UpdateConfigurationSetEventDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetEventDestinationCommand}.
 */
export interface UpdateConfigurationSetEventDestinationCommandOutput extends UpdateConfigurationSetEventDestinationResponse, __MetadataBearer {}

/**
 * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, UpdateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, UpdateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * // import type { PinpointSMSVoiceClientConfig } from "@aws-sdk/client-pinpoint-sms-voice";
 * const config = {}; // type is PinpointSMSVoiceClientConfig
 * const client = new PinpointSMSVoiceClient(config);
 * const input = { // UpdateConfigurationSetEventDestinationRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   EventDestination: { // EventDestinationDefinition
 *     CloudWatchLogsDestination: { // CloudWatchLogsDestination
 *       IamRoleArn: "STRING_VALUE",
 *       LogGroupArn: "STRING_VALUE",
 *     },
 *     Enabled: true || false,
 *     KinesisFirehoseDestination: { // KinesisFirehoseDestination
 *       DeliveryStreamArn: "STRING_VALUE",
 *       IamRoleArn: "STRING_VALUE",
 *     },
 *     MatchingEventTypes: [ // EventTypes
 *       "INITIATED_CALL" || "RINGING" || "ANSWERED" || "COMPLETED_CALL" || "BUSY" || "FAILED" || "NO_ANSWER",
 *     ],
 *     SnsDestination: { // SnsDestination
 *       TopicArn: "STRING_VALUE",
 *     },
 *   },
 *   EventDestinationName: "STRING_VALUE", // required
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
export class UpdateConfigurationSetEventDestinationCommand extends command<UpdateConfigurationSetEventDestinationCommandInput, UpdateConfigurationSetEventDestinationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConfigurationSetEventDestination",
  UpdateConfigurationSetEventDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationSetEventDestinationRequest;
      output: {};
    };
    sdk: {
      input: UpdateConfigurationSetEventDestinationCommandInput;
      output: UpdateConfigurationSetEventDestinationCommandOutput;
    };
  };
}
