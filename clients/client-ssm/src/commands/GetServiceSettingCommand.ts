// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServiceSettingRequest, GetServiceSettingResult } from "../models/models_1";
import { GetServiceSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetServiceSettingCommand}.
 */
export interface GetServiceSettingCommandInput extends GetServiceSettingRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceSettingCommand}.
 */
export interface GetServiceSettingCommandOutput extends GetServiceSettingResult, __MetadataBearer {}

/**
 * `ServiceSetting` is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of `false`. This means the user can't use this feature unless they change the setting to `true` and intentionally opt in for a paid feature.
 *
 * Services map a `SettingId` object to a setting value. Amazon Web Services services teams define the default value for a `SettingId`. You can't create a new `SettingId`, but you can overwrite the default value if you have the `ssm:UpdateServiceSetting` permission for the setting. Use the UpdateServiceSetting API operation to change the default setting. Or use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team.
 *
 * Query the current service setting for the Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetServiceSettingCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetServiceSettingCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetServiceSettingRequest
 *   SettingId: "STRING_VALUE", // required
 * };
 * const command = new GetServiceSettingCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceSettingResult
 * //   ServiceSetting: { // ServiceSetting
 * //     SettingId: "STRING_VALUE",
 * //     SettingValue: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     LastModifiedUser: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceSettingCommandInput - {@link GetServiceSettingCommandInput}
 * @returns {@link GetServiceSettingCommandOutput}
 * @see {@link GetServiceSettingCommandInput} for command's `input` shape.
 * @see {@link GetServiceSettingCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link ServiceSettingNotFound} (client fault)
 *
 * The specified service setting wasn't found. Either the service name or the setting hasn't been provisioned by the Amazon Web Services service team.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class GetServiceSettingCommand extends command<GetServiceSettingCommandInput, GetServiceSettingCommandOutput>(
  _ep0,
  _mw0,
  "GetServiceSetting",
  GetServiceSetting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceSettingRequest;
      output: GetServiceSettingResult;
    };
    sdk: {
      input: GetServiceSettingCommandInput;
      output: GetServiceSettingCommandOutput;
    };
  };
}
