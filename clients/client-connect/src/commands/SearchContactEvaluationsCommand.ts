// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchContactEvaluationsResponse } from "../models/models_2";
import { SearchContactEvaluationsRequest } from "../models/models_3";
import { SearchContactEvaluations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchContactEvaluationsCommand}.
 */
export interface SearchContactEvaluationsCommandInput extends SearchContactEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link SearchContactEvaluationsCommand}.
 */
export interface SearchContactEvaluationsCommandOutput extends SearchContactEvaluationsResponse, __MetadataBearer {}

/**
 * <p>Searches contact evaluations in an Amazon Connect instance, with optional filtering. </p>
 *          <p>
 *             <b>Use cases</b>
 *          </p>
 *          <p>Following are common uses cases for this API:</p>
 *          <ul>
 *             <li>
 *                <p>Find contact evaluations by using specific search criteria.</p>
 *             </li>
 *             <li>
 *                <p>Find contact evaluations that are tagged with a specific set of tags.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>A Search operation, unlike a List operation, takes time to index changes to resource
 *      (create, update or delete). If you don't see updated information for recently changed
 *      contact evaluations, try calling the API again in a few seconds. Contact Evaluations
 *      may not be fully backfilled with historical data in all regions yet, however all recently
 *      created Contact Evaluations should be available for search.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and
 *    quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchContactEvaluationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchContactEvaluationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchContactEvaluationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchCriteria: { // EvaluationSearchCriteria
 *     OrConditions: [ // EvaluationSearchConditionList
 *       {
 *         OrConditions: [
 *           "<EvaluationSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<EvaluationSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         NumberCondition: { // NumberCondition
 *           FieldName: "STRING_VALUE",
 *           MinValue: Number("int"),
 *           MaxValue: Number("int"),
 *           ComparisonType: "GREATER_OR_EQUAL" || "GREATER" || "LESSER_OR_EQUAL" || "LESSER" || "EQUAL" || "NOT_EQUAL" || "RANGE",
 *         },
 *         BooleanCondition: { // BooleanCondition
 *           FieldName: "STRING_VALUE",
 *           ComparisonType: "IS_TRUE" || "IS_FALSE",
 *         },
 *         DateTimeCondition: { // DateTimeCondition
 *           FieldName: "STRING_VALUE",
 *           MinValue: "STRING_VALUE",
 *           MaxValue: "STRING_VALUE",
 *           ComparisonType: "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL_TO" || "LESS_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "RANGE",
 *         },
 *         DecimalCondition: { // DecimalCondition
 *           FieldName: "STRING_VALUE",
 *           MinValue: Number("double"),
 *           MaxValue: Number("double"),
 *           ComparisonType: "GREATER_OR_EQUAL" || "GREATER" || "LESSER_OR_EQUAL" || "LESSER" || "EQUAL" || "NOT_EQUAL" || "RANGE",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<EvaluationSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     NumberCondition: {
 *       FieldName: "STRING_VALUE",
 *       MinValue: Number("int"),
 *       MaxValue: Number("int"),
 *       ComparisonType: "GREATER_OR_EQUAL" || "GREATER" || "LESSER_OR_EQUAL" || "LESSER" || "EQUAL" || "NOT_EQUAL" || "RANGE",
 *     },
 *     BooleanCondition: {
 *       FieldName: "STRING_VALUE",
 *       ComparisonType: "IS_TRUE" || "IS_FALSE",
 *     },
 *     DateTimeCondition: {
 *       FieldName: "STRING_VALUE",
 *       MinValue: "STRING_VALUE",
 *       MaxValue: "STRING_VALUE",
 *       ComparisonType: "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL_TO" || "LESS_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "RANGE",
 *     },
 *     DecimalCondition: {
 *       FieldName: "STRING_VALUE",
 *       MinValue: Number("double"),
 *       MaxValue: Number("double"),
 *       ComparisonType: "GREATER_OR_EQUAL" || "GREATER" || "LESSER_OR_EQUAL" || "LESSER" || "EQUAL" || "NOT_EQUAL" || "RANGE",
 *     },
 *   },
 *   SearchFilter: { // EvaluationSearchFilter
 *     AttributeFilter: { // ControlPlaneAttributeFilter
 *       OrConditions: [ // CommonAttributeOrConditionList
 *         { // CommonAttributeAndCondition
 *           TagConditions: [ // TagAndConditionList
 *             { // TagCondition
 *               TagKey: "STRING_VALUE",
 *               TagValue: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       ],
 *       AndCondition: {
 *         TagConditions: [
 *           {
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 * };
 * const command = new SearchContactEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // SearchContactEvaluationsResponse
 * //   EvaluationSearchSummaryList: [ // EvaluationSearchSummaryList
 * //     { // EvaluationSearchSummary
 * //       EvaluationId: "STRING_VALUE", // required
 * //       EvaluationArn: "STRING_VALUE", // required
 * //       EvaluationFormId: "STRING_VALUE",
 * //       EvaluationFormVersion: Number("int"), // required
 * //       Metadata: { // EvaluationSearchMetadata
 * //         ContactId: "STRING_VALUE", // required
 * //         EvaluatorArn: "STRING_VALUE", // required
 * //         ContactAgentId: "STRING_VALUE",
 * //         CalibrationSessionId: "STRING_VALUE",
 * //         ScorePercentage: Number("double"),
 * //         ScoreAutomaticFail: true || false,
 * //         ScoreNotApplicable: true || false,
 * //         AutoEvaluationEnabled: true || false,
 * //         AutoEvaluationStatus: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //         AcknowledgedTime: new Date("TIMESTAMP"),
 * //         AcknowledgedBy: "STRING_VALUE",
 * //         AcknowledgerComment: "STRING_VALUE",
 * //       },
 * //       Status: "DRAFT" || "SUBMITTED", // required
 * //       EvaluationType: "STANDARD" || "CALIBRATION",
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchContactEvaluationsCommandInput - {@link SearchContactEvaluationsCommandInput}
 * @returns {@link SearchContactEvaluationsCommandOutput}
 * @see {@link SearchContactEvaluationsCommandInput} for command's `input` shape.
 * @see {@link SearchContactEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class SearchContactEvaluationsCommand extends $Command
  .classBuilder<
    SearchContactEvaluationsCommandInput,
    SearchContactEvaluationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchContactEvaluations", {})
  .n("ConnectClient", "SearchContactEvaluationsCommand")
  .sc(SearchContactEvaluations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchContactEvaluationsRequest;
      output: SearchContactEvaluationsResponse;
    };
    sdk: {
      input: SearchContactEvaluationsCommandInput;
      output: SearchContactEvaluationsCommandOutput;
    };
  };
}
