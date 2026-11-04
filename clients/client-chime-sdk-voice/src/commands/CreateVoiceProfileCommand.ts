// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVoiceProfileRequest, CreateVoiceProfileResponse } from "../models/models_0";
import { CreateVoiceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a voice profile, which consists of an enrolled user and their latest voice print.
 *
 * > **Important:** Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the [AWS service terms](https://aws.amazon.com/service-terms/) for the Amazon Chime SDK.
 *
 * For more information about voice profiles and voice analytics, see [Using Amazon Chime SDK Voice Analytics](https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html) in the *Amazon Chime SDK Developer Guide*.
 *
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class CreateVoiceProfileCommand extends command<CreateVoiceProfileCommandInput, CreateVoiceProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateVoiceProfile",
  CreateVoiceProfile$
) {
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
