// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVoiceProfileRequest, GetVoiceProfileResponse } from "../models/models_0";
import { GetVoiceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceProfileCommand}.
 */
export interface GetVoiceProfileCommandInput extends GetVoiceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceProfileCommand}.
 */
export interface GetVoiceProfileCommandOutput extends GetVoiceProfileResponse, __MetadataBearer {}

/**
 * Retrieves the details of the specified voice profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceProfileCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceProfileCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceProfileRequest
 *   VoiceProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceProfileResponse
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
 * @param GetVoiceProfileCommandInput - {@link GetVoiceProfileCommandInput}
 * @returns {@link GetVoiceProfileCommandOutput}
 * @see {@link GetVoiceProfileCommandInput} for command's `input` shape.
 * @see {@link GetVoiceProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
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
export class GetVoiceProfileCommand extends command<GetVoiceProfileCommandInput, GetVoiceProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceProfile",
  GetVoiceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceProfileRequest;
      output: GetVoiceProfileResponse;
    };
    sdk: {
      input: GetVoiceProfileCommandInput;
      output: GetVoiceProfileCommandOutput;
    };
  };
}
