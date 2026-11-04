// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserSettingsRequest } from "../models/models_0";
import { UpdateUserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the settings for the specified user, such as phone number settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateUserSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateUserSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
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
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class UpdateUserSettingsCommand extends command<UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserSettings",
  UpdateUserSettings$
) {
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
