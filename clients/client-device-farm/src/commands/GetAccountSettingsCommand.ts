// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountSettingsRequest, GetAccountSettingsResult } from "../models/models_0";
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
export interface GetAccountSettingsCommandOutput extends GetAccountSettingsResult, __MetadataBearer {}

/**
 * Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetAccountSettingsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetAccountSettingsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = {};
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSettingsResult
 * //   accountSettings: { // AccountSettings
 * //     awsAccountNumber: "STRING_VALUE",
 * //     unmeteredDevices: { // PurchasedDevicesMap
 * //       "<keys>": Number("int"),
 * //     },
 * //     unmeteredRemoteAccessDevices: {
 * //       "<keys>": Number("int"),
 * //     },
 * //     maxJobTimeoutMinutes: Number("int"),
 * //     trialMinutes: { // TrialMinutes
 * //       total: Number("double"),
 * //       remaining: Number("double"),
 * //     },
 * //     maxSlots: { // MaxSlotMap
 * //       "<keys>": Number("int"),
 * //     },
 * //     defaultJobTimeoutMinutes: Number("int"),
 * //     skipAppResign: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountSettingsCommandInput - {@link GetAccountSettingsCommandInput}
 * @returns {@link GetAccountSettingsCommandOutput}
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *
 * An invalid argument was specified.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit was exceeded.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified entity was not found.
 *
 * @throws {@link ServiceAccountException} (client fault)
 *
 * There was a problem with the service account.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
 *
 * @example To get information about account settings
 * ```javascript
 * // The following example returns information about your Device Farm account settings.
 * const input = { /* empty *\/ };
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountSettings: {
 *     awsAccountNumber: "123456789101",
 *     unmeteredDevices: {
 *       ANDROID: 1,
 *       IOS: 2
 *     }
 *   }
 * }
 * *\/
 * ```
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
      output: GetAccountSettingsResult;
    };
    sdk: {
      input: GetAccountSettingsCommandInput;
      output: GetAccountSettingsCommandOutput;
    };
  };
}
