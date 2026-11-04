// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserConfigRequest } from "../models/models_4";
import { UpdateUserConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the configuration settings for the specified user, including per-channel auto-accept and after contact work (ACW) timeout settings.
 *
 * > **Note:** This operation replaces the UpdateUserPhoneConfig API. While UpdateUserPhoneConfig applies the same ACW timeout to all channels, UpdateUserConfig allows you to set different auto-accept and ACW timeout values for each channel type.
 *
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
 *
 * Request processing failed because dependent condition failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateUserConfigCommand extends command<UpdateUserConfigCommandInput, UpdateUserConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserConfig",
  UpdateUserConfig$
) {
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
