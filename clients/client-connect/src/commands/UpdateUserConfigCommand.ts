// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateUserConfigRequest } from "../models/models_3";
import { UpdateUserConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserConfigCommand}.
 */
export interface UpdateUserConfigCommandInput extends UpdateUserConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserConfigCommand}.
 */
export interface UpdateUserConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the configuration settings for the specified user, including per-channel auto-accept and after contact work (ACW) timeout settings.</p>
 *          <note>
 *             <p>This operation replaces the UpdateUserPhoneConfig API. While UpdateUserPhoneConfig applies the same ACW timeout to all channels, UpdateUserConfig allows you to set different auto-accept and ACW timeout values for each channel type.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserConfigRequest
 *   AutoAcceptConfigs: [ // AutoAcceptConfigs
 *     { // AutoAcceptConfig
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       AutoAccept: true || false, // required
 *       AgentFirstCallbackAutoAccept: true || false,
 *     },
 *   ],
 *   AfterContactWorkConfigs: [ // AfterContactWorkConfigs
 *     { // AfterContactWorkConfigPerChannel
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       AfterContactWorkConfig: { // AfterContactWorkConfig
 *         AfterContactWorkTimeLimit: Number("int"),
 *       },
 *       AgentFirstCallbackAfterContactWorkConfig: {
 *         AfterContactWorkTimeLimit: Number("int"),
 *       },
 *     },
 *   ],
 *   PhoneNumberConfigs: [ // PhoneNumberConfigs
 *     { // PhoneNumberConfig
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       PhoneType: "SOFT_PHONE" || "DESK_PHONE", // required
 *       PhoneNumber: "STRING_VALUE",
 *     },
 *   ],
 *   PersistentConnectionConfigs: [ // PersistentConnectionConfigs
 *     { // PersistentConnectionConfig
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       PersistentConnection: true || false, // required
 *     },
 *   ],
 *   VoiceEnhancementConfigs: [ // VoiceEnhancementConfigs
 *     { // VoiceEnhancementConfig
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       VoiceEnhancementMode: "VOICE_ISOLATION" || "NOISE_SUPPRESSION" || "NONE", // required
 *     },
 *   ],
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserConfigCommandInput - {@link UpdateUserConfigCommandInput}
 * @returns {@link UpdateUserConfigCommandOutput}
 * @see {@link UpdateUserConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateUserConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *  <p>Request processing failed because dependent condition failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateUserConfigCommand extends $Command
  .classBuilder<
    UpdateUserConfigCommandInput,
    UpdateUserConfigCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateUserConfig", {})
  .n("ConnectClient", "UpdateUserConfigCommand")
  .sc(UpdateUserConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserConfigCommandInput;
      output: UpdateUserConfigCommandOutput;
    };
  };
}
