// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetSipMediaApplicationLoggingConfigurationRequest,
  GetSipMediaApplicationLoggingConfigurationResponse,
} from "../models/models_0";
import { GetSipMediaApplicationLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSipMediaApplicationLoggingConfigurationCommand}.
 */
export interface GetSipMediaApplicationLoggingConfigurationCommandInput extends GetSipMediaApplicationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetSipMediaApplicationLoggingConfigurationCommand}.
 */
export interface GetSipMediaApplicationLoggingConfigurationCommandOutput extends GetSipMediaApplicationLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the logging configuration for the specified SIP media application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetSipMediaApplicationLoggingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetSipMediaApplicationLoggingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetSipMediaApplicationLoggingConfigurationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetSipMediaApplicationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSipMediaApplicationLoggingConfigurationResponse
 * //   SipMediaApplicationLoggingConfiguration: { // SipMediaApplicationLoggingConfiguration
 * //     EnableSipMediaApplicationMessageLogs: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSipMediaApplicationLoggingConfigurationCommandInput - {@link GetSipMediaApplicationLoggingConfigurationCommandInput}
 * @returns {@link GetSipMediaApplicationLoggingConfigurationCommandOutput}
 * @see {@link GetSipMediaApplicationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSipMediaApplicationLoggingConfigurationCommandOutput} for command's `response` shape.
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
export class GetSipMediaApplicationLoggingConfigurationCommand extends command<GetSipMediaApplicationLoggingConfigurationCommandInput, GetSipMediaApplicationLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetSipMediaApplicationLoggingConfiguration",
  GetSipMediaApplicationLoggingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSipMediaApplicationLoggingConfigurationRequest;
      output: GetSipMediaApplicationLoggingConfigurationResponse;
    };
    sdk: {
      input: GetSipMediaApplicationLoggingConfigurationCommandInput;
      output: GetSipMediaApplicationLoggingConfigurationCommandOutput;
    };
  };
}
