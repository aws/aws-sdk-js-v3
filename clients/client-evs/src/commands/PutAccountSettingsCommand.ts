// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAccountSettingsRequest, PutAccountSettingsResponse } from "../models/models_0";
import { PutAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccountSettingsCommand}.
 */
export interface PutAccountSettingsCommandInput extends PutAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingsCommand}.
 */
export interface PutAccountSettingsCommandOutput extends PutAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Creates or updates account-level EVS settings for your Amazon Web Services account in the specified Amazon Web Services Region.</p> <p>EVS settings included in the request are created or overwritten. Settings omitted from the request retain their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, PutAccountSettingsCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, PutAccountSettingsCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // PutAccountSettingsRequest
 *   settings: [ // AccountSettingList // required
 *     { // AccountSetting
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingsResponse
 * //   settings: [ // AccountSettingList
 * //     { // AccountSetting
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutAccountSettingsCommandInput - {@link PutAccountSettingsCommandInput}
 * @returns {@link PutAccountSettingsCommandOutput}
 * @see {@link PutAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The operation could not be performed because the service is throttling requests. This exception is thrown when the service endpoint receives too many concurrent requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 *
 * @throws {@link EvsServiceException}
 * <p>Base exception class for all service exceptions from Evs service.</p>
 *
 *
 * @public
 */
export class PutAccountSettingsCommand extends command<PutAccountSettingsCommandInput, PutAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "PutAccountSettings",
  PutAccountSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountSettingsRequest;
      output: PutAccountSettingsResponse;
    };
    sdk: {
      input: PutAccountSettingsCommandInput;
      output: PutAccountSettingsCommandOutput;
    };
  };
}
