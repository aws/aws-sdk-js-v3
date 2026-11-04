// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutSipMediaApplicationLoggingConfigurationRequest,
  PutSipMediaApplicationLoggingConfigurationResponse,
} from "../models/models_0";
import { PutSipMediaApplicationLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSipMediaApplicationLoggingConfigurationCommand}.
 */
export interface PutSipMediaApplicationLoggingConfigurationCommandInput extends PutSipMediaApplicationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutSipMediaApplicationLoggingConfigurationCommand}.
 */
export interface PutSipMediaApplicationLoggingConfigurationCommandOutput extends PutSipMediaApplicationLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Updates the logging configuration for the specified SIP media application.
 *
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
export class PutSipMediaApplicationLoggingConfigurationCommand extends command<PutSipMediaApplicationLoggingConfigurationCommandInput, PutSipMediaApplicationLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutSipMediaApplicationLoggingConfiguration",
  PutSipMediaApplicationLoggingConfiguration$
) {
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
