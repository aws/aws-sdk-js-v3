// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTriggersRequest, ListTriggersResponse } from "../models/models_0";
import { ListTriggers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTriggersCommand}.
 */
export interface ListTriggersCommandInput extends ListTriggersRequest {}
/**
 * @public
 *
 * The output of {@link ListTriggersCommand}.
 */
export interface ListTriggersCommandOutput extends ListTriggersResponse, __MetadataBearer {}

/**
 * Lists Triggers in the specified agent space
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListTriggersCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListTriggersCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListTriggersRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   status: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTriggersCommand(input);
 * const response = await client.send(command);
 * // { // ListTriggersResponse
 * //   items: [ // TriggerList // required
 * //     { // Trigger
 * //       triggerId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       condition: { // TriggerCondition Union: only one key present
 * //         schedule: { // ScheduleCondition
 * //           expression: "STRING_VALUE",
 * //           spec: { // ScheduleSpec Union: only one key present
 * //             cron: { // CronSchedule
 * //               expression: "STRING_VALUE", // required
 * //             },
 * //             timeRange: { // TimeRangeSchedule
 * //               startAfter: "STRING_VALUE", // required
 * //               startBefore: "STRING_VALUE", // required
 * //               recurrence: { // Recurrence Union: only one key present
 * //                 daily: {},
 * //                 weekly: { // WeeklyRecurrence
 * //                   dayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 * //                 },
 * //                 monthly: { // MonthlyRecurrence
 * //                   dayOfMonth: Number("int"), // required
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //       action: "DOCUMENT_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTriggersCommandInput - {@link ListTriggersCommandInput}
 * @returns {@link ListTriggersCommandOutput}
 * @see {@link ListTriggersCommandInput} for command's `input` shape.
 * @see {@link ListTriggersCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *
 * This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 *
 * Base exception class for all service exceptions from DevOpsAgent service.
 *
 * @public
 */
export class ListTriggersCommand extends command<ListTriggersCommandInput, ListTriggersCommandOutput>(
  _ep0,
  _mw0,
  "ListTriggers",
  ListTriggers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTriggersRequest;
      output: ListTriggersResponse;
    };
    sdk: {
      input: ListTriggersCommandInput;
      output: ListTriggersCommandOutput;
    };
  };
}
