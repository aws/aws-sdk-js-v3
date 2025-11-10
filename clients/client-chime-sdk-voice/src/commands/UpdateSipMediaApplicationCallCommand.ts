// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSipMediaApplicationCallRequest, UpdateSipMediaApplicationCallResponse } from "../models/models_0";
import { UpdateSipMediaApplicationCall } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSipMediaApplicationCallCommand}.
 */
export interface UpdateSipMediaApplicationCallCommandInput extends UpdateSipMediaApplicationCallRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSipMediaApplicationCallCommand}.
 */
export interface UpdateSipMediaApplicationCallCommandOutput
  extends UpdateSipMediaApplicationCallResponse,
    __MetadataBearer {}

/**
 * <p>Invokes the AWS Lambda function associated with the SIP media application and
 *          transaction ID in an update request. The Lambda function can then return a new set
 *          of actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateSipMediaApplicationCallCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateSipMediaApplicationCallCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateSipMediaApplicationCallRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE", // required
 *   Arguments: { // SMAUpdateCallArgumentsMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSipMediaApplicationCallCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSipMediaApplicationCallResponse
 * //   SipMediaApplicationCall: { // SipMediaApplicationCall
 * //     TransactionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSipMediaApplicationCallCommandInput - {@link UpdateSipMediaApplicationCallCommandInput}
 * @returns {@link UpdateSipMediaApplicationCallCommandOutput}
 * @see {@link UpdateSipMediaApplicationCallCommandInput} for command's `input` shape.
 * @see {@link UpdateSipMediaApplicationCallCommandOutput} for command's `response` shape.
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
export class UpdateSipMediaApplicationCallCommand extends $Command
  .classBuilder<
    UpdateSipMediaApplicationCallCommandInput,
    UpdateSipMediaApplicationCallCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "UpdateSipMediaApplicationCall", {})
  .n("ChimeSDKVoiceClient", "UpdateSipMediaApplicationCallCommand")
  .sc(UpdateSipMediaApplicationCall)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSipMediaApplicationCallRequest;
      output: UpdateSipMediaApplicationCallResponse;
    };
    sdk: {
      input: UpdateSipMediaApplicationCallCommandInput;
      output: UpdateSipMediaApplicationCallCommandOutput;
    };
  };
}
