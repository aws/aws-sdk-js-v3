// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchStepsRequest, SearchStepsResponse } from "../models/models_1";
import { SearchSteps } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchStepsCommand}.
 */
export interface SearchStepsCommandInput extends SearchStepsRequest {}
/**
 * @public
 *
 * The output of {@link SearchStepsCommand}.
 */
export interface SearchStepsCommandOutput extends SearchStepsResponse, __MetadataBearer {}

/**
 * <p>Searches for steps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, SearchStepsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, SearchStepsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // SearchStepsRequest
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
 * const command = new SearchStepsCommand(input);
 * const response = await client.send(command);
 * // { // SearchStepsResponse
 * //   steps: [ // StepSearchSummaries // required
 * //     { // StepSearchSummary
 * //       stepId: "STRING_VALUE",
 * //       jobId: "STRING_VALUE",
 * //       queueId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       lifecycleStatus: "CREATE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_SUCCEEDED",
 * //       lifecycleStatusMessage: "STRING_VALUE",
 * //       taskRunStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE",
 * //       targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //       taskRunStatusCounts: { // TaskRunStatusCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       taskFailureRetryCount: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       parameterSpace: { // ParameterSpace
 * //         parameters: [ // StepParameterList // required
 * //           { // StepParameter
 * //             name: "STRING_VALUE", // required
 * //             type: "INT" || "FLOAT" || "STRING" || "PATH" || "CHUNK_INT", // required
 * //           },
 * //         ],
 * //         combination: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextItemOffset: Number("int"),
 * //   totalResults: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param SearchStepsCommandInput - {@link SearchStepsCommandInput}
 * @returns {@link SearchStepsCommandOutput}
 * @see {@link SearchStepsCommandInput} for command's `input` shape.
 * @see {@link SearchStepsCommandOutput} for command's `response` shape.
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
export class SearchStepsCommand extends $Command
  .classBuilder<
    SearchStepsCommandInput,
    SearchStepsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "SearchSteps", {})
  .n("DeadlineClient", "SearchStepsCommand")
  .sc(SearchSteps)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchStepsRequest;
      output: SearchStepsResponse;
    };
    sdk: {
      input: SearchStepsCommandInput;
      output: SearchStepsCommandOutput;
    };
  };
}
