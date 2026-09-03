// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountSettingsRequest, GetAccountSettingsResponse } from "../models/models_0";
import { GetAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandInput extends GetAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandOutput extends GetAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Returns the configured EVS settings for your Amazon Web Services account in the specified Amazon Web Services Region. If no settings have been set, an empty list is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, GetAccountSettingsCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, GetAccountSettingsCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = {};
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSettingsResponse
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
 * @param GetAccountSettingsCommandInput - {@link GetAccountSettingsCommandInput}
 * @returns {@link GetAccountSettingsCommandOutput}
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
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
export class GetAccountSettingsCommand extends command<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountSettings",
  GetAccountSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountSettingsResponse;
    };
    sdk: {
      input: GetAccountSettingsCommandInput;
      output: GetAccountSettingsCommandOutput;
    };
  };
}
