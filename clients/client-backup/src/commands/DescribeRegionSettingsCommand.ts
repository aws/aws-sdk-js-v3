// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRegionSettingsInput, DescribeRegionSettingsOutput } from "../models/models_0";
import { de_DescribeRegionSettingsCommand, se_DescribeRegionSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegionSettingsCommand}.
 */
export interface DescribeRegionSettingsCommandInput extends DescribeRegionSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeRegionSettingsCommand}.
 */
export interface DescribeRegionSettingsCommandOutput extends DescribeRegionSettingsOutput, __MetadataBearer {}

/**
 * <p>Returns the current service opt-in settings for the Region. If service opt-in is enabled
 *          for a service, Backup tries to protect that service's resources in this Region,
 *          when the resource is included in an on-demand backup or scheduled backup plan. Otherwise,
 *             Backup does not try to protect that service's resources in this
 *          Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRegionSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRegionSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BackupClient(config);
 * const input = {};
 * const command = new DescribeRegionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegionSettingsOutput
 * //   ResourceTypeOptInPreference: { // ResourceTypeOptInPreference
 * //     "<keys>": true || false,
 * //   },
 * //   ResourceTypeManagementPreference: { // ResourceTypeManagementPreference
 * //     "<keys>": true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRegionSettingsCommandInput - {@link DescribeRegionSettingsCommandInput}
 * @returns {@link DescribeRegionSettingsCommandOutput}
 * @see {@link DescribeRegionSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 * @public
 */
export class DescribeRegionSettingsCommand extends $Command
  .classBuilder<
    DescribeRegionSettingsCommandInput,
    DescribeRegionSettingsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "DescribeRegionSettings", {})
  .n("BackupClient", "DescribeRegionSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRegionSettingsCommand)
  .de(de_DescribeRegionSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeRegionSettingsOutput;
    };
    sdk: {
      input: DescribeRegionSettingsCommandInput;
      output: DescribeRegionSettingsCommandOutput;
    };
  };
}
