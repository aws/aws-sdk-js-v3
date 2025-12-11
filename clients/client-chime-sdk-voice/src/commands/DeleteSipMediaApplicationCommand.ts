// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSipMediaApplicationRequest } from "../models/models_0";
import { DeleteSipMediaApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSipMediaApplicationCommand}.
 */
export interface DeleteSipMediaApplicationCommandInput extends DeleteSipMediaApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSipMediaApplicationCommand}.
 */
export interface DeleteSipMediaApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteSipMediaApplicationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteSipMediaApplicationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteSipMediaApplicationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSipMediaApplicationCommandInput - {@link DeleteSipMediaApplicationCommandInput}
 * @returns {@link DeleteSipMediaApplicationCommandOutput}
 * @see {@link DeleteSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
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
export class DeleteSipMediaApplicationCommand extends $Command
  .classBuilder<
    DeleteSipMediaApplicationCommandInput,
    DeleteSipMediaApplicationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "DeleteSipMediaApplication", {})
  .n("ChimeSDKVoiceClient", "DeleteSipMediaApplicationCommand")
  .sc(DeleteSipMediaApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSipMediaApplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSipMediaApplicationCommandInput;
      output: DeleteSipMediaApplicationCommandOutput;
    };
  };
}
