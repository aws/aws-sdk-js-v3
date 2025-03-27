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
import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import {
  de_CreateConfigurationSetEventDestinationCommand,
  se_CreateConfigurationSetEventDestinationCommand,
} from "../protocols/Aws_restJson1";

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
 * Create a new event destination in a configuration set.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, CreateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, CreateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const input = { // CreateConfigurationSetEventDestinationRequest
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
 *   EventDestinationName: "STRING_VALUE",
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
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for PinpointSMSVoiceClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  The resource specified in your request already exists.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The input you provided is invalid.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  There are too many instances of the specified resource type.
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
export class CreateConfigurationSetEventDestinationCommand extends $Command
  .classBuilder<
    CreateConfigurationSetEventDestinationCommandInput,
    CreateConfigurationSetEventDestinationCommandOutput,
    PinpointSMSVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoice", "CreateConfigurationSetEventDestination", {})
  .n("PinpointSMSVoiceClient", "CreateConfigurationSetEventDestinationCommand")
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
