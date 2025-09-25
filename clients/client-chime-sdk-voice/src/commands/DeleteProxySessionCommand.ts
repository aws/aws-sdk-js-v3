// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProxySessionRequest } from "../models/models_0";
import { DeleteProxySession } from "../schemas/schemas_44_DeleteProxySession";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProxySessionCommand}.
 */
export interface DeleteProxySessionCommandInput extends DeleteProxySessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProxySessionCommand}.
 */
export interface DeleteProxySessionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified proxy session from the specified Amazon Chime SDK Voice
 *             Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteProxySessionCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteProxySessionCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteProxySessionRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   ProxySessionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProxySessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProxySessionCommandInput - {@link DeleteProxySessionCommandInput}
 * @returns {@link DeleteProxySessionCommandOutput}
 * @see {@link DeleteProxySessionCommandInput} for command's `input` shape.
 * @see {@link DeleteProxySessionCommandOutput} for command's `response` shape.
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
export class DeleteProxySessionCommand extends $Command
  .classBuilder<
    DeleteProxySessionCommandInput,
    DeleteProxySessionCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "DeleteProxySession", {})
  .n("ChimeSDKVoiceClient", "DeleteProxySessionCommand")
  .sc(DeleteProxySession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProxySessionRequest;
      output: {};
    };
    sdk: {
      input: DeleteProxySessionCommandInput;
      output: DeleteProxySessionCommandOutput;
    };
  };
}
