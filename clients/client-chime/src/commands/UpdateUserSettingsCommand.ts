// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserSettingsRequest } from "../models/models_0";
import { de_UpdateUserSettingsCommand, se_UpdateUserSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserSettingsCommand}.
 */
export interface UpdateUserSettingsCommandInput extends UpdateUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserSettingsCommand}.
 */
export interface UpdateUserSettingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the settings for the specified user, such as phone number settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateUserSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateUserSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // UpdateUserSettingsRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   UserSettings: { // UserSettings
 *     Telephony: { // TelephonySettings
 *       InboundCalling: true || false, // required
 *       OutboundCalling: true || false, // required
 *       SMS: true || false, // required
 *     },
 *   },
 * };
 * const command = new UpdateUserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserSettingsCommandInput - {@link UpdateUserSettingsCommandInput}
 * @returns {@link UpdateUserSettingsCommandOutput}
 * @see {@link UpdateUserSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class UpdateUserSettingsCommand extends $Command
  .classBuilder<
    UpdateUserSettingsCommandInput,
    UpdateUserSettingsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "UpdateUserSettings", {})
  .n("ChimeClient", "UpdateUserSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUserSettingsCommand)
  .de(de_UpdateUserSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserSettingsRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserSettingsCommandInput;
      output: UpdateUserSettingsCommandOutput;
    };
  };
}
