// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutSipMediaApplicationLoggingConfigurationRequest,
  PutSipMediaApplicationLoggingConfigurationResponse,
} from "../models/models_0";
import { PutSipMediaApplicationLoggingConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSipMediaApplicationLoggingConfigurationCommand}.
 */
export interface PutSipMediaApplicationLoggingConfigurationCommandInput
  extends PutSipMediaApplicationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutSipMediaApplicationLoggingConfigurationCommand}.
 */
export interface PutSipMediaApplicationLoggingConfigurationCommandOutput
  extends PutSipMediaApplicationLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the logging configuration for the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutSipMediaApplicationLoggingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutSipMediaApplicationLoggingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutSipMediaApplicationLoggingConfigurationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 *   SipMediaApplicationLoggingConfiguration: { // SipMediaApplicationLoggingConfiguration
 *     EnableSipMediaApplicationMessageLogs: true || false,
 *   },
 * };
 * const command = new PutSipMediaApplicationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutSipMediaApplicationLoggingConfigurationResponse
 * //   SipMediaApplicationLoggingConfiguration: { // SipMediaApplicationLoggingConfiguration
 * //     EnableSipMediaApplicationMessageLogs: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutSipMediaApplicationLoggingConfigurationCommandInput - {@link PutSipMediaApplicationLoggingConfigurationCommandInput}
 * @returns {@link PutSipMediaApplicationLoggingConfigurationCommandOutput}
 * @see {@link PutSipMediaApplicationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutSipMediaApplicationLoggingConfigurationCommandOutput} for command's `response` shape.
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
export class PutSipMediaApplicationLoggingConfigurationCommand extends $Command
  .classBuilder<
    PutSipMediaApplicationLoggingConfigurationCommandInput,
    PutSipMediaApplicationLoggingConfigurationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "PutSipMediaApplicationLoggingConfiguration", {})
  .n("ChimeSDKVoiceClient", "PutSipMediaApplicationLoggingConfigurationCommand")
  .sc(PutSipMediaApplicationLoggingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSipMediaApplicationLoggingConfigurationRequest;
      output: PutSipMediaApplicationLoggingConfigurationResponse;
    };
    sdk: {
      input: PutSipMediaApplicationLoggingConfigurationCommandInput;
      output: PutSipMediaApplicationLoggingConfigurationCommandOutput;
    };
  };
}
