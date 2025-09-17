// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBackupPlanTemplatesInput, ListBackupPlanTemplatesOutput } from "../models/models_0";
import { de_ListBackupPlanTemplatesCommand, se_ListBackupPlanTemplatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBackupPlanTemplatesCommand}.
 */
export interface ListBackupPlanTemplatesCommandInput extends ListBackupPlanTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListBackupPlanTemplatesCommand}.
 */
export interface ListBackupPlanTemplatesCommandOutput extends ListBackupPlanTemplatesOutput, __MetadataBearer {}

/**
 * <p>Lists the backup plan templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanTemplatesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanTemplatesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListBackupPlanTemplatesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListBackupPlanTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupPlanTemplatesOutput
 * //   NextToken: "STRING_VALUE",
 * //   BackupPlanTemplatesList: [ // BackupPlanTemplatesList
 * //     { // BackupPlanTemplatesListMember
 * //       BackupPlanTemplateId: "STRING_VALUE",
 * //       BackupPlanTemplateName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBackupPlanTemplatesCommandInput - {@link ListBackupPlanTemplatesCommandInput}
 * @returns {@link ListBackupPlanTemplatesCommandOutput}
 * @see {@link ListBackupPlanTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanTemplatesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
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
export class ListBackupPlanTemplatesCommand extends $Command
  .classBuilder<
    ListBackupPlanTemplatesCommandInput,
    ListBackupPlanTemplatesCommandOutput,
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
  .s("CryoControllerUserManager", "ListBackupPlanTemplates", {})
  .n("BackupClient", "ListBackupPlanTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListBackupPlanTemplatesCommand)
  .de(de_ListBackupPlanTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupPlanTemplatesInput;
      output: ListBackupPlanTemplatesOutput;
    };
    sdk: {
      input: ListBackupPlanTemplatesCommandInput;
      output: ListBackupPlanTemplatesCommandOutput;
    };
  };
}
