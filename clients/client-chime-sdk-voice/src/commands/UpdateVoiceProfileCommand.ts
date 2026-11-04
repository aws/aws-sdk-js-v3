// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVoiceProfileRequest, UpdateVoiceProfileResponse } from "../models/models_0";
import { UpdateVoiceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateVoiceProfileCommand}.
 */
export interface UpdateVoiceProfileCommandInput extends UpdateVoiceProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceProfileCommand}.
 */
export interface UpdateVoiceProfileCommandOutput extends UpdateVoiceProfileResponse, __MetadataBearer {}

/**
 * Updates the specified voice profile’s voice print and refreshes its expiration timestamp.
 *
 * > **Important:**
 * >
 * > As a condition of using this feature, you acknowledge that the collection, use, storage, and retention of your caller’s biometric identifiers and biometric information (“biometric data”) in the form of a digital voiceprint requires the caller’s informed consent via a written release. Such consent is required under various state laws, including biometrics laws in Illinois, Texas, Washington and other state privacy laws.
 * >
 * > You must provide a written release to each caller through a process that clearly reflects each caller’s informed consent before using Amazon Chime SDK Voice Insights service, as required under the terms of your agreement with AWS governing your use of the service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceProfileCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceProfileCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateVoiceProfileRequest
 *   VoiceProfileId: "STRING_VALUE", // required
 *   SpeakerSearchTaskId: "STRING_VALUE", // required
 * };
 * const command = new UpdateVoiceProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceProfileResponse
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
 * @param UpdateVoiceProfileCommandInput - {@link UpdateVoiceProfileCommandInput}
 * @returns {@link UpdateVoiceProfileCommandOutput}
 * @see {@link UpdateVoiceProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceProfileCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have the permissions needed to run this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request were made simultaneously.
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
export class UpdateVoiceProfileCommand extends command<UpdateVoiceProfileCommandInput, UpdateVoiceProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVoiceProfile",
  UpdateVoiceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVoiceProfileRequest;
      output: UpdateVoiceProfileResponse;
    };
    sdk: {
      input: UpdateVoiceProfileCommandInput;
      output: UpdateVoiceProfileCommandOutput;
    };
  };
}
