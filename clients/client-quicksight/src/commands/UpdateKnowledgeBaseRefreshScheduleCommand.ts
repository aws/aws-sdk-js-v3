// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateKnowledgeBaseRefreshScheduleRequest,
  UpdateKnowledgeBaseRefreshScheduleResponse,
} from "../models/models_5";
import { UpdateKnowledgeBaseRefreshSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateKnowledgeBaseRefreshScheduleCommand}.
 */
export interface UpdateKnowledgeBaseRefreshScheduleCommandInput extends UpdateKnowledgeBaseRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKnowledgeBaseRefreshScheduleCommand}.
 */
export interface UpdateKnowledgeBaseRefreshScheduleCommandOutput extends UpdateKnowledgeBaseRefreshScheduleResponse, __MetadataBearer {}

/**
 * <p>Updates the refresh schedule for an Amazon Quick Sight knowledge base. Use this operation to change how often the knowledge base refreshes, or to enable or disable the schedule. Specify the schedule by its <code>ScheduleId</code>. The operation changes only the fields that you provide. Any field that you omit keeps its existing value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateKnowledgeBaseRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateKnowledgeBaseRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateKnowledgeBaseRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseId: "STRING_VALUE", // required
 *   ScheduleId: "STRING_VALUE", // required
 *   ScheduleFrequency: { // KnowledgeBaseRefreshFrequency
 *     Interval: "DAILY" || "WEEKLY" || "MONTHLY" || "HOURLY", // required
 *     RefreshOnDay: { // KnowledgeBaseScheduleRefreshOnEntity
 *       DayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 *       DayOfMonth: "STRING_VALUE",
 *     },
 *   },
 *   StartTime: new Date("TIMESTAMP"),
 *   State: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateKnowledgeBaseRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKnowledgeBaseRefreshScheduleResponse
 * //   ScheduleId: "STRING_VALUE", // required
 * //   KnowledgeBaseArn: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateKnowledgeBaseRefreshScheduleCommandInput - {@link UpdateKnowledgeBaseRefreshScheduleCommandInput}
 * @returns {@link UpdateKnowledgeBaseRefreshScheduleCommandOutput}
 * @see {@link UpdateKnowledgeBaseRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateKnowledgeBaseRefreshScheduleCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class UpdateKnowledgeBaseRefreshScheduleCommand extends command<UpdateKnowledgeBaseRefreshScheduleCommandInput, UpdateKnowledgeBaseRefreshScheduleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateKnowledgeBaseRefreshSchedule",
  UpdateKnowledgeBaseRefreshSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKnowledgeBaseRefreshScheduleRequest;
      output: UpdateKnowledgeBaseRefreshScheduleResponse;
    };
    sdk: {
      input: UpdateKnowledgeBaseRefreshScheduleCommandInput;
      output: UpdateKnowledgeBaseRefreshScheduleCommandOutput;
    };
  };
}
