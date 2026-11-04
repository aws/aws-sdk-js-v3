// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPhoneNumberSettingsResponse } from "../models/models_0";
import { GetPhoneNumberSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPhoneNumberSettingsCommand}.
 */
export interface GetPhoneNumberSettingsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetPhoneNumberSettingsCommand}.
 */
export interface GetPhoneNumberSettingsCommandOutput extends GetPhoneNumberSettingsResponse, __MetadataBearer {}

/**
 * Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetPhoneNumberSettingsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetPhoneNumberSettingsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = {};
 * const command = new GetPhoneNumberSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetPhoneNumberSettingsResponse
 * //   CallingName: "STRING_VALUE",
 * //   CallingNameUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPhoneNumberSettingsCommandInput - {@link GetPhoneNumberSettingsCommandInput}
 * @returns {@link GetPhoneNumberSettingsCommandOutput}
 * @see {@link GetPhoneNumberSettingsCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberSettingsCommandOutput} for command's `response` shape.
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
export class GetPhoneNumberSettingsCommand extends command<GetPhoneNumberSettingsCommandInput, GetPhoneNumberSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetPhoneNumberSettings",
  GetPhoneNumberSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPhoneNumberSettingsResponse;
    };
    sdk: {
      input: GetPhoneNumberSettingsCommandInput;
      output: GetPhoneNumberSettingsCommandOutput;
    };
  };
}
