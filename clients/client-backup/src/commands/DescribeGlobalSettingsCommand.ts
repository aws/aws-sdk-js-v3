// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeGlobalSettingsInput, DescribeGlobalSettingsOutput } from "../models/models_0";
import { DescribeGlobalSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes whether the Amazon Web Services account is opted in to cross-account backup.
 *          Returns an error if the account is not a member of an Organizations organization.
 *          Example: <code>describe-global-settings --region us-west-2</code>
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
export class DescribeGlobalSettingsCommand extends $Command
  .classBuilder<
    DescribeGlobalSettingsCommandInput,
    DescribeGlobalSettingsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DescribeGlobalSettings", {})
  .n("BackupClient", "DescribeGlobalSettingsCommand")
  .sc(DescribeGlobalSettings$)
  .build() {
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
