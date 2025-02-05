// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGlobalSettingsResponse } from "../models/models_0";
import { de_GetGlobalSettingsCommand, se_GetGlobalSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlobalSettingsCommand}.
 */
export interface GetGlobalSettingsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetGlobalSettingsCommand}.
 */
export interface GetGlobalSettingsCommandOutput extends GetGlobalSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the global settings for the Amazon Chime SDK Voice Connectors in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetGlobalSettingsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetGlobalSettingsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeSDKVoiceClient(config);
 * const input = {};
 * const command = new GetGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetGlobalSettingsResponse
 * //   VoiceConnector: { // VoiceConnectorSettings
 * //     CdrBucket: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGlobalSettingsCommandInput - {@link GetGlobalSettingsCommandInput}
 * @returns {@link GetGlobalSettingsCommandOutput}
 * @see {@link GetGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link GetGlobalSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetGlobalSettingsCommand extends $Command
  .classBuilder<
    GetGlobalSettingsCommandInput,
    GetGlobalSettingsCommandOutput,
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
  .s("ChimeSDKTelephonyService", "GetGlobalSettings", {})
  .n("ChimeSDKVoiceClient", "GetGlobalSettingsCommand")
  .f(void 0, void 0)
  .ser(se_GetGlobalSettingsCommand)
  .de(de_GetGlobalSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetGlobalSettingsResponse;
    };
    sdk: {
      input: GetGlobalSettingsCommandInput;
      output: GetGlobalSettingsCommandOutput;
    };
  };
}
