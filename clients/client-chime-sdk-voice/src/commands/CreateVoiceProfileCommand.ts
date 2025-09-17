// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateVoiceProfileRequest,
  CreateVoiceProfileResponse,
  CreateVoiceProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateVoiceProfileCommand, se_CreateVoiceProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVoiceProfileCommand}.
 */
export interface CreateVoiceProfileCommandInput extends CreateVoiceProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateVoiceProfileCommand}.
 */
export interface CreateVoiceProfileCommandOutput extends CreateVoiceProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a voice profile, which consists of an enrolled user and their latest voice print.</p>
 *          <important>
 *             <p>Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
 *          </important>
 *          <p>For more information about voice profiles and voice analytics, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK Voice Analytics</a>
 *       in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateVoiceProfileCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateVoiceProfileCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateVoiceProfileRequest
 *   SpeakerSearchTaskId: "STRING_VALUE", // required
 * };
 * const command = new CreateVoiceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateVoiceProfileResponse
 * //   VoiceProfile: { // VoiceProfile
 * //     VoiceProfileId: "STRING_VALUE",
 * //     VoiceProfileArn: "STRING_VALUE",
 * //     VoiceProfileDomainId: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     ExpirationTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVoiceProfileCommandInput - {@link CreateVoiceProfileCommandInput}
 * @returns {@link CreateVoiceProfileCommandOutput}
 * @see {@link CreateVoiceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceProfileCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link GoneException} (client fault)
 *  <p>Access to the target resource is no longer available at the origin server. This condition is likely to be permanent.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class CreateVoiceProfileCommand extends $Command
  .classBuilder<
    CreateVoiceProfileCommandInput,
    CreateVoiceProfileCommandOutput,
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
  .s("ChimeSDKTelephonyService", "CreateVoiceProfile", {})
  .n("ChimeSDKVoiceClient", "CreateVoiceProfileCommand")
  .f(void 0, CreateVoiceProfileResponseFilterSensitiveLog)
  .ser(se_CreateVoiceProfileCommand)
  .de(de_CreateVoiceProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVoiceProfileRequest;
      output: CreateVoiceProfileResponse;
    };
    sdk: {
      input: CreateVoiceProfileCommandInput;
      output: CreateVoiceProfileCommandOutput;
    };
  };
}
