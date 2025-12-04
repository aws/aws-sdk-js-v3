// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchJobsRequest, SearchJobsResponse } from "../models/models_1";
import { SearchJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchJobsCommand}.
 */
export interface SearchJobsCommandInput extends SearchJobsRequest {}
/**
 * @public
 *
 * The output of {@link SearchJobsCommand}.
 */
export interface SearchJobsCommandOutput extends SearchJobsResponse, __MetadataBearer {}

/**
 * <p>Searches for jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, SearchJobsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, SearchJobsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // SearchJobsRequest
 *   farmId: "STRING_VALUE", // required
 *   queueIds: [ // QueueIds // required
 *     "STRING_VALUE",
 *   ],
 *   filterExpressions: { // SearchGroupedFilterExpressions
 *     filters: [ // SearchFilterExpressions // required
 *       { // SearchFilterExpression Union: only one key present
 *         dateTimeFilter: { // DateTimeFilterExpression
 *           name: "STRING_VALUE", // required
 *           operator: "EQUAL" || "NOT_EQUAL" || "GREATER_THAN_EQUAL_TO" || "GREATER_THAN" || "LESS_THAN_EQUAL_TO" || "LESS_THAN", // required
 *           dateTime: new Date("TIMESTAMP"), // required
 *         },
 *         parameterFilter: { // ParameterFilterExpression
 *           name: "STRING_VALUE", // required
 *           operator: "EQUAL" || "NOT_EQUAL" || "GREATER_THAN_EQUAL_TO" || "GREATER_THAN" || "LESS_THAN_EQUAL_TO" || "LESS_THAN", // required
 *           value: "STRING_VALUE", // required
 *         },
 *         searchTermFilter: { // SearchTermFilterExpression
 *           searchTerm: "STRING_VALUE", // required
 *           matchType: "FUZZY_MATCH" || "CONTAINS",
 *         },
 *         stringFilter: { // StringFilterExpression
 *           name: "STRING_VALUE", // required
 *           operator: "EQUAL" || "NOT_EQUAL" || "GREATER_THAN_EQUAL_TO" || "GREATER_THAN" || "LESS_THAN_EQUAL_TO" || "LESS_THAN", // required
 *           value: "STRING_VALUE", // required
 *         },
 *         groupFilter: {
 *           filters: [ // required
 *             {//  Union: only one key present
 *               dateTimeFilter: {
 *                 name: "STRING_VALUE", // required
 *                 operator: "EQUAL" || "NOT_EQUAL" || "GREATER_THAN_EQUAL_TO" || "GREATER_THAN" || "LESS_THAN_EQUAL_TO" || "LESS_THAN", // required
 *                 dateTime: new Date("TIMESTAMP"), // required
 *               },
 *               parameterFilter: {
 *                 name: "STRING_VALUE", // required
 *                 operator: "EQUAL" || "NOT_EQUAL" || "GREATER_THAN_EQUAL_TO" || "GREATER_THAN" || "LESS_THAN_EQUAL_TO" || "LESS_THAN", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               searchTermFilter: {
 *                 searchTerm: "STRING_VALUE", // required
 *                 matchType: "FUZZY_MATCH" || "CONTAINS",
 *               },
 *               stringFilter: {
 *                 name: "STRING_VALUE", // required
 *                 operator: "EQUAL" || "NOT_EQUAL" || "GREATER_THAN_EQUAL_TO" || "GREATER_THAN" || "LESS_THAN_EQUAL_TO" || "LESS_THAN", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               groupFilter: "<SearchGroupedFilterExpressions>",
 *             },
 *           ],
 *           operator: "AND" || "OR", // required
 *         },
 *       },
 *     ],
 *     operator: "AND" || "OR", // required
 *   },
 *   sortExpressions: [ // SearchSortExpressions
 *     { // SearchSortExpression Union: only one key present
 *       userJobsFirst: { // UserJobsFirst
 *         userIdentityId: "STRING_VALUE", // required
 *       },
 *       fieldSort: { // FieldSortExpression
 *         sortOrder: "ASCENDING" || "DESCENDING", // required
 *         name: "STRING_VALUE", // required
 *       },
 *       parameterSort: { // ParameterSortExpression
 *         sortOrder: "ASCENDING" || "DESCENDING", // required
 *         name: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   itemOffset: Number("int"), // required
 *   pageSize: Number("int"),
 * };
 * const command = new SearchJobsCommand(input);
 * const response = await client.send(command);
 * // { // SearchJobsResponse
 * //   jobs: [ // JobSearchSummaries // required
 * //     { // JobSearchSummary
 * //       jobId: "STRING_VALUE",
 * //       queueId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       lifecycleStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "UPLOAD_IN_PROGRESS" || "UPLOAD_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_SUCCEEDED" || "ARCHIVED",
 * //       lifecycleStatusMessage: "STRING_VALUE",
 * //       taskRunStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE",
 * //       targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //       taskRunStatusCounts: { // TaskRunStatusCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       taskFailureRetryCount: Number("int"),
 * //       priority: Number("int"),
 * //       maxFailedTasksCount: Number("int"),
 * //       maxRetriesPerTask: Number("int"),
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       jobParameters: { // JobParameters
 * //         "<keys>": { // JobParameter Union: only one key present
 * //           int: "STRING_VALUE",
 * //           float: "STRING_VALUE",
 * //           string: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //         },
 * //       },
 * //       maxWorkerCount: Number("int"),
 * //       sourceJobId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextItemOffset: Number("int"),
 * //   totalResults: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param SearchJobsCommandInput - {@link SearchJobsCommandInput}
 * @returns {@link SearchJobsCommandOutput}
 * @see {@link SearchJobsCommandInput} for command's `input` shape.
 * @see {@link SearchJobsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class SearchJobsCommand extends $Command
  .classBuilder<
    SearchJobsCommandInput,
    SearchJobsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "SearchJobs", {})
  .n("DeadlineClient", "SearchJobsCommand")
  .sc(SearchJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchJobsRequest;
      output: SearchJobsResponse;
    };
    sdk: {
      input: SearchJobsCommandInput;
      output: SearchJobsCommandOutput;
    };
  };
}
