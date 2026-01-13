// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePhoneNumberRequest } from "../models/models_0";
import { DeletePhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePhoneNumberCommand}.
 */
export interface DeletePhoneNumberCommandInput extends DeletePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link DeletePhoneNumberCommand}.
 */
export interface DeletePhoneNumberCommandOutput extends __MetadataBearer {}

/**
 * <p>Moves the specified phone number into the
 *          <b>Deletion queue</b>. A phone number must
 *          be disassociated from any users or Amazon Chime SDK Voice Connectors before it can be
 *          deleted.</p>
 *          <p>Deleted phone numbers remain in the
 *          <b>Deletion queue</b> queue for 7 days before
 *          they are deleted permanently.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeletePhoneNumberCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeletePhoneNumberCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeletePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 * };
 * const command = new DeletePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePhoneNumberCommandInput - {@link DeletePhoneNumberCommandInput}
 * @returns {@link DeletePhoneNumberCommandOutput}
 * @see {@link DeletePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link DeletePhoneNumberCommandOutput} for command's `response` shape.
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
export class DeletePhoneNumberCommand extends $Command
  .classBuilder<
    DeletePhoneNumberCommandInput,
    DeletePhoneNumberCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "DeletePhoneNumber", {})
  .n("ChimeSDKVoiceClient", "DeletePhoneNumberCommand")
  .sc(DeletePhoneNumber$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePhoneNumberRequest;
      output: {};
    };
    sdk: {
      input: DeletePhoneNumberCommandInput;
      output: DeletePhoneNumberCommandOutput;
    };
  };
}
