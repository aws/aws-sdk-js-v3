// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPhoneNumberSettingsResponse } from "../models/models_0";
import { GetPhoneNumberSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the phone number settings for the administrator's AWS account,
 *          such as the default outbound calling name.</p>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class GetPhoneNumberSettingsCommand extends $Command
  .classBuilder<
    GetPhoneNumberSettingsCommandInput,
    GetPhoneNumberSettingsCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "GetPhoneNumberSettings", {})
  .n("ChimeSDKVoiceClient", "GetPhoneNumberSettingsCommand")
  .sc(GetPhoneNumberSettings)
  .build() {
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
