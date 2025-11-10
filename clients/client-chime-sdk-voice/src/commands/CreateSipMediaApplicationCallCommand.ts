// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSipMediaApplicationCallRequest, CreateSipMediaApplicationCallResponse } from "../models/models_0";
import { CreateSipMediaApplicationCall } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSipMediaApplicationCallCommand}.
 */
export interface CreateSipMediaApplicationCallCommandInput extends CreateSipMediaApplicationCallRequest {}
/**
 * @public
 *
 * The output of {@link CreateSipMediaApplicationCallCommand}.
 */
export interface CreateSipMediaApplicationCallCommandOutput
  extends CreateSipMediaApplicationCallResponse,
    __MetadataBearer {}

/**
 * <p>Creates an outbound call to a phone number from the phone number specified
 *          in the request, and it invokes the endpoint of the specified
 *          <code>sipMediaApplicationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateSipMediaApplicationCallCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateSipMediaApplicationCallCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateSipMediaApplicationCallRequest
 *   FromPhoneNumber: "STRING_VALUE", // required
 *   ToPhoneNumber: "STRING_VALUE", // required
 *   SipMediaApplicationId: "STRING_VALUE", // required
 *   SipHeaders: { // SipHeadersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ArgumentsMap: { // SMACreateCallArgumentsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSipMediaApplicationCallCommand(input);
 * const response = await client.send(command);
 * // { // CreateSipMediaApplicationCallResponse
 * //   SipMediaApplicationCall: { // SipMediaApplicationCall
 * //     TransactionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSipMediaApplicationCallCommandInput - {@link CreateSipMediaApplicationCallCommandInput}
 * @returns {@link CreateSipMediaApplicationCallCommandOutput}
 * @see {@link CreateSipMediaApplicationCallCommandInput} for command's `input` shape.
 * @see {@link CreateSipMediaApplicationCallCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class CreateSipMediaApplicationCallCommand extends $Command
  .classBuilder<
    CreateSipMediaApplicationCallCommandInput,
    CreateSipMediaApplicationCallCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "CreateSipMediaApplicationCall", {})
  .n("ChimeSDKVoiceClient", "CreateSipMediaApplicationCallCommand")
  .sc(CreateSipMediaApplicationCall)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSipMediaApplicationCallRequest;
      output: CreateSipMediaApplicationCallResponse;
    };
    sdk: {
      input: CreateSipMediaApplicationCallCommandInput;
      output: CreateSipMediaApplicationCallCommandOutput;
    };
  };
}
