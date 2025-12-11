// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchWorkersRequest, SearchWorkersResponse } from "../models/models_1";
import { SearchWorkers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchWorkersCommand}.
 */
export interface SearchWorkersCommandInput extends SearchWorkersRequest {}
/**
 * @public
 *
 * The output of {@link SearchWorkersCommand}.
 */
export interface SearchWorkersCommandOutput extends SearchWorkersResponse, __MetadataBearer {}

/**
 * <p>Searches for workers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, SearchWorkersCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, SearchWorkersCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // SearchWorkersRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetIds: [ // FleetIds // required
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
 * const command = new SearchWorkersCommand(input);
 * const response = await client.send(command);
 * // { // SearchWorkersResponse
 * //   workers: [ // WorkerSearchSummaries // required
 * //     { // WorkerSearchSummary
 * //       fleetId: "STRING_VALUE",
 * //       workerId: "STRING_VALUE",
 * //       status: "CREATED" || "STARTED" || "STOPPING" || "STOPPED" || "NOT_RESPONDING" || "NOT_COMPATIBLE" || "RUNNING" || "IDLE",
 * //       hostProperties: { // HostPropertiesResponse
 * //         ipAddresses: { // IpAddresses
 * //           ipV4Addresses: [ // IpV4Addresses
 * //             "STRING_VALUE",
 * //           ],
 * //           ipV6Addresses: [ // IpV6Addresses
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         hostName: "STRING_VALUE",
 * //         ec2InstanceArn: "STRING_VALUE",
 * //         ec2InstanceType: "STRING_VALUE",
 * //       },
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextItemOffset: Number("int"),
 * //   totalResults: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param SearchWorkersCommandInput - {@link SearchWorkersCommandInput}
 * @returns {@link SearchWorkersCommandOutput}
 * @see {@link SearchWorkersCommandInput} for command's `input` shape.
 * @see {@link SearchWorkersCommandOutput} for command's `response` shape.
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
export class SearchWorkersCommand extends $Command
  .classBuilder<
    SearchWorkersCommandInput,
    SearchWorkersCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "SearchWorkers", {})
  .n("DeadlineClient", "SearchWorkersCommand")
  .sc(SearchWorkers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchWorkersRequest;
      output: SearchWorkersResponse;
    };
    sdk: {
      input: SearchWorkersCommandInput;
      output: SearchWorkersCommandOutput;
    };
  };
}
