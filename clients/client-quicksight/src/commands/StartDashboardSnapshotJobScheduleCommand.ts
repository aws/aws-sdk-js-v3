// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartDashboardSnapshotJobScheduleRequest,
  StartDashboardSnapshotJobScheduleResponse,
} from "../models/models_5";
import {
  de_StartDashboardSnapshotJobScheduleCommand,
  se_StartDashboardSnapshotJobScheduleCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDashboardSnapshotJobScheduleCommand}.
 */
export interface StartDashboardSnapshotJobScheduleCommandInput extends StartDashboardSnapshotJobScheduleRequest {}
/**
 * @public
 *
 * The output of {@link StartDashboardSnapshotJobScheduleCommand}.
 */
export interface StartDashboardSnapshotJobScheduleCommandOutput
  extends StartDashboardSnapshotJobScheduleResponse,
    __MetadataBearer {}

/**
 * <p>Starts an asynchronous job that runs an existing dashboard schedule and sends the dashboard snapshot through email. </p>
 *          <p>Only one job can run simultaneously in a given schedule. Repeated requests are skipped with a <code>202</code> HTTP status code.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/sending-reports.html">Scheduling and sending QuickSight reports by email</a> and <a href="https://docs.aws.amazon.com/quicksight/latest/user/email-reports-from-dashboard.html">Configuring email report settings for a QuickSight dashboard</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, StartDashboardSnapshotJobScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, StartDashboardSnapshotJobScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // StartDashboardSnapshotJobScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   ScheduleId: "STRING_VALUE", // required
 * };
 * const command = new StartDashboardSnapshotJobScheduleCommand(input);
 * const response = await client.send(command);
 * // { // StartDashboardSnapshotJobScheduleResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartDashboardSnapshotJobScheduleCommandInput - {@link StartDashboardSnapshotJobScheduleCommandInput}
 * @returns {@link StartDashboardSnapshotJobScheduleCommandOutput}
 * @see {@link StartDashboardSnapshotJobScheduleCommandInput} for command's `input` shape.
 * @see {@link StartDashboardSnapshotJobScheduleCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class StartDashboardSnapshotJobScheduleCommand extends $Command
  .classBuilder<
    StartDashboardSnapshotJobScheduleCommandInput,
    StartDashboardSnapshotJobScheduleCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "StartDashboardSnapshotJobSchedule", {})
  .n("QuickSightClient", "StartDashboardSnapshotJobScheduleCommand")
  .f(void 0, void 0)
  .ser(se_StartDashboardSnapshotJobScheduleCommand)
  .de(de_StartDashboardSnapshotJobScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDashboardSnapshotJobScheduleRequest;
      output: StartDashboardSnapshotJobScheduleResponse;
    };
    sdk: {
      input: StartDashboardSnapshotJobScheduleCommandInput;
      output: StartDashboardSnapshotJobScheduleCommandOutput;
    };
  };
}
