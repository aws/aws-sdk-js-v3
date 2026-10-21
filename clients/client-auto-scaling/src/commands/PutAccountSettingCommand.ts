// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAccountSettingAnswer, PutAccountSettingType } from "../models/models_0";
import { PutAccountSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandInput extends PutAccountSettingType {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandOutput extends PutAccountSettingAnswer, __MetadataBearer {}

/**
 * <p>
 *             Modifies an account setting for your account. You can use this operation to opt in or opt out of features provided through account settings when permitted. Account settings give you control over features that might have backwards-incompatible changes. When Amazon EC2 Auto Scaling introduces such changes, account settings allow you to test and adopt new features. Some account settings are enforced after a specified date. This means that after the enforcement date, you can no longer modify the setting.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutAccountSettingCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutAccountSettingCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // PutAccountSettingType
 *   Name: "STRING_VALUE", // required
 *   Value: "STRING_VALUE", // required
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountSettingCommandInput - {@link PutAccountSettingCommandInput}
 * @returns {@link PutAccountSettingCommandOutput}
 * @see {@link PutAccountSettingCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @public
 */
export class PutAccountSettingCommand extends command<PutAccountSettingCommandInput, PutAccountSettingCommandOutput>(
  _ep0,
  _mw0,
  "PutAccountSetting",
  PutAccountSetting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountSettingType;
      output: {};
    };
    sdk: {
      input: PutAccountSettingCommandInput;
      output: PutAccountSettingCommandOutput;
    };
  };
}
