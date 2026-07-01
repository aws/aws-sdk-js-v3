// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGlobalSettingsInput, DescribeGlobalSettingsOutput } from "../models/models_0";
import { DescribeGlobalSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeGlobalSettingsCommand}.
 */
export interface DescribeGlobalSettingsCommandInput extends DescribeGlobalSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalSettingsCommand}.
 */
export interface DescribeGlobalSettingsCommandOutput extends DescribeGlobalSettingsOutput, __MetadataBearer {}

/**
 * <p>Describes whether the Amazon Web Services account has enabled different cross-account management options, including cross-account backup, multi-party approval, and delegated administrator. Returns an error if the account is not a member of an Organizations organization. Example: <code>describe-global-settings --region us-west-2</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeGlobalSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeGlobalSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = {};
 * const command = new DescribeGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGlobalSettingsOutput
 * //   GlobalSettings: { // GlobalSettings
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   LastUpdateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeGlobalSettingsCommandInput - {@link DescribeGlobalSettingsCommandInput}
 * @returns {@link DescribeGlobalSettingsCommandOutput}
 * @see {@link DescribeGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class DescribeGlobalSettingsCommand extends command<DescribeGlobalSettingsCommandInput, DescribeGlobalSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGlobalSettings",
  DescribeGlobalSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeGlobalSettingsOutput;
    };
    sdk: {
      input: DescribeGlobalSettingsCommandInput;
      output: DescribeGlobalSettingsCommandOutput;
    };
  };
}
