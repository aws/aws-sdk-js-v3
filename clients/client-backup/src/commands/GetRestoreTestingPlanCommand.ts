// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRestoreTestingPlanInput, GetRestoreTestingPlanOutput } from "../models/models_0";
import { GetRestoreTestingPlan } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRestoreTestingPlanCommand}.
 */
export interface GetRestoreTestingPlanCommandInput extends GetRestoreTestingPlanInput {}
/**
 * @public
 *
 * The output of {@link GetRestoreTestingPlanCommand}.
 */
export interface GetRestoreTestingPlanCommandOutput extends GetRestoreTestingPlanOutput, __MetadataBearer {}

/**
 * <p>Returns <code>RestoreTestingPlan</code> details for the specified
 *             <code>RestoreTestingPlanName</code>. The details are the body of a restore testing plan
 *          in JSON format, in addition to plan metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetRestoreTestingPlanInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 * };
 * const command = new GetRestoreTestingPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetRestoreTestingPlanOutput
 * //   RestoreTestingPlan: { // RestoreTestingPlanForGet
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     CreatorRequestId: "STRING_VALUE",
 * //     LastExecutionTime: new Date("TIMESTAMP"),
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     RecoveryPointSelection: { // RestoreTestingRecoveryPointSelection
 * //       Algorithm: "LATEST_WITHIN_WINDOW" || "RANDOM_WITHIN_WINDOW",
 * //       ExcludeVaults: [ // stringList
 * //         "STRING_VALUE",
 * //       ],
 * //       IncludeVaults: [
 * //         "STRING_VALUE",
 * //       ],
 * //       RecoveryPointTypes: [ // RestoreTestingRecoveryPointTypeList
 * //         "CONTINUOUS" || "SNAPSHOT",
 * //       ],
 * //       SelectionWindowDays: Number("int"),
 * //     },
 * //     RestoreTestingPlanArn: "STRING_VALUE", // required
 * //     RestoreTestingPlanName: "STRING_VALUE", // required
 * //     ScheduleExpression: "STRING_VALUE", // required
 * //     ScheduleExpressionTimezone: "STRING_VALUE",
 * //     StartWindowHours: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRestoreTestingPlanCommandInput - {@link GetRestoreTestingPlanCommandInput}
 * @returns {@link GetRestoreTestingPlanCommandOutput}
 * @see {@link GetRestoreTestingPlanCommandInput} for command's `input` shape.
 * @see {@link GetRestoreTestingPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
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
export class GetRestoreTestingPlanCommand extends $Command
  .classBuilder<
    GetRestoreTestingPlanCommandInput,
    GetRestoreTestingPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "GetRestoreTestingPlan", {})
  .n("BackupClient", "GetRestoreTestingPlanCommand")
  .sc(GetRestoreTestingPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRestoreTestingPlanInput;
      output: GetRestoreTestingPlanOutput;
    };
    sdk: {
      input: GetRestoreTestingPlanCommandInput;
      output: GetRestoreTestingPlanCommandOutput;
    };
  };
}
