// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTieringConfigurationsInput, ListTieringConfigurationsOutput } from "../models/models_0";
import { ListTieringConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTieringConfigurationsCommand}.
 */
export interface ListTieringConfigurationsCommandInput extends ListTieringConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListTieringConfigurationsCommand}.
 */
export interface ListTieringConfigurationsCommandOutput extends ListTieringConfigurationsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of tiering configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListTieringConfigurationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListTieringConfigurationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListTieringConfigurationsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTieringConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTieringConfigurationsOutput
 * //   TieringConfigurations: [ // TieringConfigurationsList
 * //     { // TieringConfigurationsListMember
 * //       TieringConfigurationArn: "STRING_VALUE",
 * //       TieringConfigurationName: "STRING_VALUE",
 * //       BackupVaultName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTieringConfigurationsCommandInput - {@link ListTieringConfigurationsCommandInput}
 * @returns {@link ListTieringConfigurationsCommandOutput}
 * @see {@link ListTieringConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListTieringConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class ListTieringConfigurationsCommand extends $Command
  .classBuilder<
    ListTieringConfigurationsCommandInput,
    ListTieringConfigurationsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListTieringConfigurations", {})
  .n("BackupClient", "ListTieringConfigurationsCommand")
  .sc(ListTieringConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTieringConfigurationsInput;
      output: ListTieringConfigurationsOutput;
    };
    sdk: {
      input: ListTieringConfigurationsCommandInput;
      output: ListTieringConfigurationsCommandOutput;
    };
  };
}
