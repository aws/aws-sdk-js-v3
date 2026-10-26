// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStepsRequest, ListStepsResponse } from "../models/models_1";
import { ListSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStepsCommand}.
 */
export interface ListStepsCommandInput extends ListStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListStepsCommand}.
 */
export interface ListStepsCommandOutput extends ListStepsResponse, __MetadataBearer {}

/**
 * Lists steps for a job.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListStepsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListStepsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListStepsRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListStepsResponse
 * //   steps: [ // StepSummaries // required
 * //     { // StepSummary
 * //       stepId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       lifecycleStatus: "CREATE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_SUCCEEDED", // required
 * //       lifecycleStatusMessage: "STRING_VALUE",
 * //       taskRunStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE", // required
 * //       taskRunStatusCounts: { // TaskRunStatusCounts // required
 * //         "<keys>": Number("int"),
 * //       },
 * //       taskFailureRetryCount: Number("int"),
 * //       targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       dependencyCounts: { // DependencyCounts
 * //         dependenciesResolved: Number("int"), // required
 * //         dependenciesUnresolved: Number("int"), // required
 * //         consumersResolved: Number("int"), // required
 * //         consumersUnresolved: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStepsCommandInput - {@link ListStepsCommandInput}
 * @returns {@link ListStepsCommandOutput}
 * @see {@link ListStepsCommandInput} for command's `input` shape.
 * @see {@link ListStepsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListStepsCommand extends command<ListStepsCommandInput, ListStepsCommandOutput>(
  _ep0,
  _mw0,
  "ListSteps",
  ListSteps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStepsRequest;
      output: ListStepsResponse;
    };
    sdk: {
      input: ListStepsCommandInput;
      output: ListStepsCommandOutput;
    };
  };
}
