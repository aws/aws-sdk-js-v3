// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRestoreTestingPlansInput, ListRestoreTestingPlansOutput } from "../models/models_0";
import { de_ListRestoreTestingPlansCommand, se_ListRestoreTestingPlansCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRestoreTestingPlansCommand}.
 */
export interface ListRestoreTestingPlansCommandInput extends ListRestoreTestingPlansInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreTestingPlansCommand}.
 */
export interface ListRestoreTestingPlansCommandOutput extends ListRestoreTestingPlansOutput, __MetadataBearer {}

/**
 * <p>Returns a list of restore testing plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreTestingPlansCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreTestingPlansCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRestoreTestingPlansInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRestoreTestingPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreTestingPlansOutput
 * //   NextToken: "STRING_VALUE",
 * //   RestoreTestingPlans: [ // RestoreTestingPlans // required
 * //     { // RestoreTestingPlanForList
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastExecutionTime: new Date("TIMESTAMP"),
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       RestoreTestingPlanArn: "STRING_VALUE", // required
 * //       RestoreTestingPlanName: "STRING_VALUE", // required
 * //       ScheduleExpression: "STRING_VALUE", // required
 * //       ScheduleExpressionTimezone: "STRING_VALUE",
 * //       StartWindowHours: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRestoreTestingPlansCommandInput - {@link ListRestoreTestingPlansCommandInput}
 * @returns {@link ListRestoreTestingPlansCommandOutput}
 * @see {@link ListRestoreTestingPlansCommandInput} for command's `input` shape.
 * @see {@link ListRestoreTestingPlansCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListRestoreTestingPlansCommand extends $Command
  .classBuilder<
    ListRestoreTestingPlansCommandInput,
    ListRestoreTestingPlansCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "ListRestoreTestingPlans", {})
  .n("BackupClient", "ListRestoreTestingPlansCommand")
  .f(void 0, void 0)
  .ser(se_ListRestoreTestingPlansCommand)
  .de(de_ListRestoreTestingPlansCommand)
  .build() {}
