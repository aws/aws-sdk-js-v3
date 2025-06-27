// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchTasksRequest, SearchTasksResponse, SearchTasksResponseFilterSensitiveLog } from "../models/models_1";
import { de_SearchTasksCommand, se_SearchTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTasksCommand}.
 */
export interface SearchTasksCommandInput extends SearchTasksRequest {}
/**
 * @public
 *
 * The output of {@link SearchTasksCommand}.
 */
export interface SearchTasksCommandOutput extends SearchTasksResponse, __MetadataBearer {}

/**
 * <p>Searches for tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, SearchTasksCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, SearchTasksCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // SearchTasksRequest
 *   farmId: "STRING_VALUE", // required
 *   queueIds: [ // QueueIds // required
 *     "STRING_VALUE",
 *   ],
 *   jobId: "STRING_VALUE",
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
 * const command = new SearchTasksCommand(input);
 * const response = await client.send(command);
 * // { // SearchTasksResponse
 * //   tasks: [ // TaskSearchSummaries // required
 * //     { // TaskSearchSummary
 * //       taskId: "STRING_VALUE",
 * //       stepId: "STRING_VALUE",
 * //       jobId: "STRING_VALUE",
 * //       queueId: "STRING_VALUE",
 * //       runStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE",
 * //       targetRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //       parameters: { // TaskParameters
 * //         "<keys>": { // TaskParameterValue Union: only one key present
 * //           int: "STRING_VALUE",
 * //           float: "STRING_VALUE",
 * //           string: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //         },
 * //       },
 * //       failureRetryCount: Number("int"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextItemOffset: Number("int"),
 * //   totalResults: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param SearchTasksCommandInput - {@link SearchTasksCommandInput}
 * @returns {@link SearchTasksCommandOutput}
 * @see {@link SearchTasksCommandInput} for command's `input` shape.
 * @see {@link SearchTasksCommandOutput} for command's `response` shape.
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
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class SearchTasksCommand extends $Command
  .classBuilder<
    SearchTasksCommandInput,
    SearchTasksCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "SearchTasks", {})
  .n("DeadlineClient", "SearchTasksCommand")
  .f(void 0, SearchTasksResponseFilterSensitiveLog)
  .ser(se_SearchTasksCommand)
  .de(de_SearchTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTasksRequest;
      output: SearchTasksResponse;
    };
    sdk: {
      input: SearchTasksCommandInput;
      output: SearchTasksCommandOutput;
    };
  };
}
