// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetSipMediaApplicationAlexaSkillConfigurationRequest,
  GetSipMediaApplicationAlexaSkillConfigurationResponse,
} from "../models/models_0";
import { GetSipMediaApplicationAlexaSkillConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSipMediaApplicationAlexaSkillConfigurationCommand}.
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationCommandInput extends GetSipMediaApplicationAlexaSkillConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetSipMediaApplicationAlexaSkillConfigurationCommand}.
 */
export interface GetSipMediaApplicationAlexaSkillConfigurationCommandOutput extends GetSipMediaApplicationAlexaSkillConfigurationResponse, __MetadataBearer {}

/**
 * Gets the Alexa Skill configuration for the SIP media application.
 *
 * > **Important:** Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to the [Alexa Smart Properties](https://developer.amazon.com/en-US/alexa/alexasmartproperties) page.
 *
 * @deprecated Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to the Alexa Smart Properties page(https://developer.amazon.com/en-US/alexa/alexasmartproperties).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetSipMediaApplicationAlexaSkillConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetSipMediaApplicationAlexaSkillConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetSipMediaApplicationAlexaSkillConfigurationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetSipMediaApplicationAlexaSkillConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSipMediaApplicationAlexaSkillConfigurationResponse
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
 * @param GetSipMediaApplicationAlexaSkillConfigurationCommandInput - {@link GetSipMediaApplicationAlexaSkillConfigurationCommandInput}
 * @returns {@link GetSipMediaApplicationAlexaSkillConfigurationCommandOutput}
 * @see {@link GetSipMediaApplicationAlexaSkillConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSipMediaApplicationAlexaSkillConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link GoneException} (client fault)
 *
 * Access to the target resource is no longer available at the origin server. This condition is likely to be permanent.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class GetSipMediaApplicationAlexaSkillConfigurationCommand extends command<GetSipMediaApplicationAlexaSkillConfigurationCommandInput, GetSipMediaApplicationAlexaSkillConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetSipMediaApplicationAlexaSkillConfiguration",
  GetSipMediaApplicationAlexaSkillConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSipMediaApplicationAlexaSkillConfigurationRequest;
      output: GetSipMediaApplicationAlexaSkillConfigurationResponse;
    };
    sdk: {
      input: GetSipMediaApplicationAlexaSkillConfigurationCommandInput;
      output: GetSipMediaApplicationAlexaSkillConfigurationCommandOutput;
    };
  };
}
