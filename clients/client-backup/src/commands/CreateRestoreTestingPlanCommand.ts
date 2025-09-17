// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateRestoreTestingPlanInput,
  CreateRestoreTestingPlanInputFilterSensitiveLog,
  CreateRestoreTestingPlanOutput,
} from "../models/models_0";
import { de_CreateRestoreTestingPlanCommand, se_CreateRestoreTestingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRestoreTestingPlanCommand}.
 */
export interface CreateRestoreTestingPlanCommandInput extends CreateRestoreTestingPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateRestoreTestingPlanCommand}.
 */
export interface CreateRestoreTestingPlanCommandOutput extends CreateRestoreTestingPlanOutput, __MetadataBearer {}

/**
 * <p>Creates a restore testing plan.</p>
 *          <p>The first of two steps to create a restore testing
 *          plan. After this request is successful, finish the procedure using
 *          CreateRestoreTestingSelection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateRestoreTestingPlanInput
 *   CreatorRequestId: "STRING_VALUE",
 *   RestoreTestingPlan: { // RestoreTestingPlanForCreate
 *     RecoveryPointSelection: { // RestoreTestingRecoveryPointSelection
 *       Algorithm: "LATEST_WITHIN_WINDOW" || "RANDOM_WITHIN_WINDOW",
 *       ExcludeVaults: [ // stringList
 *         "STRING_VALUE",
 *       ],
 *       IncludeVaults: [
 *         "STRING_VALUE",
 *       ],
 *       RecoveryPointTypes: [ // RestoreTestingRecoveryPointTypeList
 *         "CONTINUOUS" || "SNAPSHOT",
 *       ],
 *       SelectionWindowDays: Number("int"),
 *     },
 *     RestoreTestingPlanName: "STRING_VALUE", // required
 *     ScheduleExpression: "STRING_VALUE", // required
 *     ScheduleExpressionTimezone: "STRING_VALUE",
 *     StartWindowHours: Number("int"),
 *   },
 *   Tags: { // SensitiveStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRestoreTestingPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateRestoreTestingPlanOutput
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   RestoreTestingPlanArn: "STRING_VALUE", // required
 * //   RestoreTestingPlanName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRestoreTestingPlanCommandInput - {@link CreateRestoreTestingPlanCommandInput}
 * @returns {@link CreateRestoreTestingPlanCommandOutput}
 * @see {@link CreateRestoreTestingPlanCommandInput} for command's `input` shape.
 * @see {@link CreateRestoreTestingPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class CreateRestoreTestingPlanCommand extends $Command
  .classBuilder<
    CreateRestoreTestingPlanCommandInput,
    CreateRestoreTestingPlanCommandOutput,
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
  .s("CryoControllerUserManager", "CreateRestoreTestingPlan", {})
  .n("BackupClient", "CreateRestoreTestingPlanCommand")
  .f(CreateRestoreTestingPlanInputFilterSensitiveLog, void 0)
  .ser(se_CreateRestoreTestingPlanCommand)
  .de(de_CreateRestoreTestingPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRestoreTestingPlanInput;
      output: CreateRestoreTestingPlanOutput;
    };
    sdk: {
      input: CreateRestoreTestingPlanCommandInput;
      output: CreateRestoreTestingPlanCommandOutput;
    };
  };
}
