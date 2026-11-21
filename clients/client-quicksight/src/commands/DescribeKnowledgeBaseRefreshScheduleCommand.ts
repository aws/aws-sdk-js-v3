// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeKnowledgeBaseRefreshScheduleRequest,
  DescribeKnowledgeBaseRefreshScheduleResponse,
} from "../models/models_4";
import { DescribeKnowledgeBaseRefreshSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeKnowledgeBaseRefreshScheduleCommand}.
 */
export interface DescribeKnowledgeBaseRefreshScheduleCommandInput extends DescribeKnowledgeBaseRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKnowledgeBaseRefreshScheduleCommand}.
 */
export interface DescribeKnowledgeBaseRefreshScheduleCommandOutput extends DescribeKnowledgeBaseRefreshScheduleResponse, __MetadataBearer {}

/**
 * <p>Describes the refresh schedule for an Amazon Quick Sight knowledge base, including the schedule's frequency, start time, and state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeKnowledgeBaseRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeKnowledgeBaseRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeKnowledgeBaseRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseId: "STRING_VALUE", // required
 *   ScheduleId: "STRING_VALUE", // required
 * };
 * const command = new DescribeKnowledgeBaseRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKnowledgeBaseRefreshScheduleResponse
 * //   Schedule: { // KnowledgeBaseRefreshScheduleSummary
 * //     ScheduleId: "STRING_VALUE", // required
 * //     ScheduleFrequency: { // KnowledgeBaseRefreshFrequency
 * //       Interval: "DAILY" || "WEEKLY" || "MONTHLY" || "HOURLY", // required
 * //       RefreshOnDay: { // KnowledgeBaseScheduleRefreshOnEntity
 * //         DayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //         DayOfMonth: "STRING_VALUE",
 * //       },
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     State: "ENABLED" || "DISABLED",
 * //   },
 * //   KnowledgeBaseArn: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeKnowledgeBaseRefreshScheduleCommandInput - {@link DescribeKnowledgeBaseRefreshScheduleCommandInput}
 * @returns {@link DescribeKnowledgeBaseRefreshScheduleCommandOutput}
 * @see {@link DescribeKnowledgeBaseRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeKnowledgeBaseRefreshScheduleCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeKnowledgeBaseRefreshScheduleCommand extends command<DescribeKnowledgeBaseRefreshScheduleCommandInput, DescribeKnowledgeBaseRefreshScheduleCommandOutput>(
  _ep0,
  _mw0,
  "DescribeKnowledgeBaseRefreshSchedule",
  DescribeKnowledgeBaseRefreshSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKnowledgeBaseRefreshScheduleRequest;
      output: DescribeKnowledgeBaseRefreshScheduleResponse;
    };
    sdk: {
      input: DescribeKnowledgeBaseRefreshScheduleCommandInput;
      output: DescribeKnowledgeBaseRefreshScheduleCommandOutput;
    };
  };
}
