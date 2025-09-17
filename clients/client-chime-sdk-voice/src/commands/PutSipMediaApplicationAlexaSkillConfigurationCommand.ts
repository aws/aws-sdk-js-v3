// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutSipMediaApplicationAlexaSkillConfigurationRequest,
  PutSipMediaApplicationAlexaSkillConfigurationRequestFilterSensitiveLog,
  PutSipMediaApplicationAlexaSkillConfigurationResponse,
  PutSipMediaApplicationAlexaSkillConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_PutSipMediaApplicationAlexaSkillConfigurationCommand,
  se_PutSipMediaApplicationAlexaSkillConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSipMediaApplicationAlexaSkillConfigurationCommand}.
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationCommandInput
  extends PutSipMediaApplicationAlexaSkillConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutSipMediaApplicationAlexaSkillConfigurationCommand}.
 */
export interface PutSipMediaApplicationAlexaSkillConfigurationCommandOutput
  extends PutSipMediaApplicationAlexaSkillConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the Alexa Skill configuration for the SIP media application.</p>
 *          <important>
 *             <p>Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to
 *          the <a href="https://developer.amazon.com/en-US/alexa/alexasmartproperties">Alexa Smart Properties</a> page.</p>
 *          </important>
 *
 * @deprecated Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to the Alexa Smart Properties page(https://developer.amazon.com/en-US/alexa/alexasmartproperties).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutSipMediaApplicationAlexaSkillConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutSipMediaApplicationAlexaSkillConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutSipMediaApplicationAlexaSkillConfigurationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 *   SipMediaApplicationAlexaSkillConfiguration: { // SipMediaApplicationAlexaSkillConfiguration
 *     AlexaSkillStatus: "ACTIVE" || "INACTIVE", // required
 *     AlexaSkillIds: [ // AlexaSkillIdList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new PutSipMediaApplicationAlexaSkillConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutSipMediaApplicationAlexaSkillConfigurationResponse
 * //   SipMediaApplicationAlexaSkillConfiguration: { // SipMediaApplicationAlexaSkillConfiguration
 * //     AlexaSkillStatus: "ACTIVE" || "INACTIVE", // required
 * //     AlexaSkillIds: [ // AlexaSkillIdList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutSipMediaApplicationAlexaSkillConfigurationCommandInput - {@link PutSipMediaApplicationAlexaSkillConfigurationCommandInput}
 * @returns {@link PutSipMediaApplicationAlexaSkillConfigurationCommandOutput}
 * @see {@link PutSipMediaApplicationAlexaSkillConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutSipMediaApplicationAlexaSkillConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class PutSipMediaApplicationAlexaSkillConfigurationCommand extends $Command
  .classBuilder<
    PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
    PutSipMediaApplicationAlexaSkillConfigurationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "PutSipMediaApplicationAlexaSkillConfiguration", {})
  .n("ChimeSDKVoiceClient", "PutSipMediaApplicationAlexaSkillConfigurationCommand")
  .f(
    PutSipMediaApplicationAlexaSkillConfigurationRequestFilterSensitiveLog,
    PutSipMediaApplicationAlexaSkillConfigurationResponseFilterSensitiveLog
  )
  .ser(se_PutSipMediaApplicationAlexaSkillConfigurationCommand)
  .de(de_PutSipMediaApplicationAlexaSkillConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSipMediaApplicationAlexaSkillConfigurationRequest;
      output: PutSipMediaApplicationAlexaSkillConfigurationResponse;
    };
    sdk: {
      input: PutSipMediaApplicationAlexaSkillConfigurationCommandInput;
      output: PutSipMediaApplicationAlexaSkillConfigurationCommandOutput;
    };
  };
}
