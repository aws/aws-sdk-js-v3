// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListKnowledgeBaseRefreshSchedulesRequest,
  ListKnowledgeBaseRefreshSchedulesResponse,
} from "../models/models_5";
import { ListKnowledgeBaseRefreshSchedules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListKnowledgeBaseRefreshSchedulesCommand}.
 */
export interface ListKnowledgeBaseRefreshSchedulesCommandInput extends ListKnowledgeBaseRefreshSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListKnowledgeBaseRefreshSchedulesCommand}.
 */
export interface ListKnowledgeBaseRefreshSchedulesCommandOutput extends ListKnowledgeBaseRefreshSchedulesResponse, __MetadataBearer {}

/**
 * <p>Lists the refresh schedules for an Amazon Quick Sight knowledge base. Currently, a knowledge base can have only one refresh schedule, so the list contains at most one schedule. Results are paginated. To retrieve the next page of results, use the <code>NextToken</code> value from the previous response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListKnowledgeBaseRefreshSchedulesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListKnowledgeBaseRefreshSchedulesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListKnowledgeBaseRefreshSchedulesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListKnowledgeBaseRefreshSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListKnowledgeBaseRefreshSchedulesResponse
 * //   ScheduleSummaries: [ // KnowledgeBaseRefreshScheduleList // required
 * //     { // KnowledgeBaseRefreshScheduleSummary
 * //       ScheduleId: "STRING_VALUE", // required
 * //       ScheduleFrequency: { // KnowledgeBaseRefreshFrequency
 * //         Interval: "DAILY" || "WEEKLY" || "MONTHLY" || "HOURLY", // required
 * //         RefreshOnDay: { // KnowledgeBaseScheduleRefreshOnEntity
 * //           DayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //           DayOfMonth: "STRING_VALUE",
 * //         },
 * //       },
 * //       StartTime: new Date("TIMESTAMP"),
 * //       State: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   KnowledgeBaseArn: "STRING_VALUE", // required
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListKnowledgeBaseRefreshSchedulesCommandInput - {@link ListKnowledgeBaseRefreshSchedulesCommandInput}
 * @returns {@link ListKnowledgeBaseRefreshSchedulesCommandOutput}
 * @see {@link ListKnowledgeBaseRefreshSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListKnowledgeBaseRefreshSchedulesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
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
export class ListKnowledgeBaseRefreshSchedulesCommand extends command<ListKnowledgeBaseRefreshSchedulesCommandInput, ListKnowledgeBaseRefreshSchedulesCommandOutput>(
  _ep0,
  _mw0,
  "ListKnowledgeBaseRefreshSchedules",
  ListKnowledgeBaseRefreshSchedules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKnowledgeBaseRefreshSchedulesRequest;
      output: ListKnowledgeBaseRefreshSchedulesResponse;
    };
    sdk: {
      input: ListKnowledgeBaseRefreshSchedulesCommandInput;
      output: ListKnowledgeBaseRefreshSchedulesCommandOutput;
    };
  };
}
