// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePhoneNumberSettingsRequest } from "../models/models_0";
import { UpdatePhoneNumberSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePhoneNumberSettingsCommand}.
 */
export interface UpdatePhoneNumberSettingsCommandInput extends UpdatePhoneNumberSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePhoneNumberSettingsCommand}.
 */
export interface UpdatePhoneNumberSettingsCommandOutput extends __MetadataBearer {}

/**
 * Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdatePhoneNumberSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdatePhoneNumberSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // UpdatePhoneNumberSettingsRequest
 *   CallingName: "STRING_VALUE", // required
 * };
 * const command = new UpdatePhoneNumberSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePhoneNumberSettingsCommandInput - {@link UpdatePhoneNumberSettingsCommandInput}
 * @returns {@link UpdatePhoneNumberSettingsCommandOutput}
 * @see {@link UpdatePhoneNumberSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberSettingsCommandOutput} for command's `response` shape.
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
export class UpdatePhoneNumberSettingsCommand extends command<UpdatePhoneNumberSettingsCommandInput, UpdatePhoneNumberSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePhoneNumberSettings",
  UpdatePhoneNumberSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePhoneNumberSettingsRequest;
      output: {};
    };
    sdk: {
      input: UpdatePhoneNumberSettingsCommandInput;
      output: UpdatePhoneNumberSettingsCommandOutput;
    };
  };
}
