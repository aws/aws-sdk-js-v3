// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMonitorSettingsRequest, UpdateMonitorSettingsResponse } from "../models/models_1";
import { UpdateMonitorSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMonitorSettingsCommand}.
 */
export interface UpdateMonitorSettingsCommandInput extends UpdateMonitorSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMonitorSettingsCommand}.
 */
export interface UpdateMonitorSettingsCommandOutput extends UpdateMonitorSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates the settings for a Deadline Cloud monitor. Keys present in the request are upserted; keys absent are left unchanged. Send an empty string value to delete a key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateMonitorSettingsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateMonitorSettingsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // UpdateMonitorSettingsRequest
 *   monitorId: "STRING_VALUE", // required
 *   settings: { // SettingsMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateMonitorSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMonitorSettingsCommandInput - {@link UpdateMonitorSettingsCommandInput}
 * @returns {@link UpdateMonitorSettingsCommandOutput}
 * @see {@link UpdateMonitorSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitorSettingsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example Update monitor settings
 * ```javascript
 * //
 * const input = {
 *   monitorId: "monitor-1234567890abcdef1234567890abcdef",
 *   settings: {
 *     idcApplicationArn: "arn:aws:sso::123456789012:application/ins-1234567890abcdef/apl-1234567890abcdef"
 *   }
 * };
 * const command = new UpdateMonitorSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateMonitorSettingsCommand extends command<UpdateMonitorSettingsCommandInput, UpdateMonitorSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMonitorSettings",
  UpdateMonitorSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMonitorSettingsRequest;
      output: {};
    };
    sdk: {
      input: UpdateMonitorSettingsCommandInput;
      output: UpdateMonitorSettingsCommandOutput;
    };
  };
}
