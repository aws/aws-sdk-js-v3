// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchEvaluationFormsResponse } from "../models/models_3";
import type { SearchEvaluationFormsRequest } from "../models/models_4";
import { SearchEvaluationForms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchEvaluationFormsCommand}.
 */
export interface SearchEvaluationFormsCommandInput extends SearchEvaluationFormsRequest {}
/**
 * @public
 *
 * The output of {@link SearchEvaluationFormsCommand}.
 */
export interface SearchEvaluationFormsCommandOutput extends SearchEvaluationFormsResponse, __MetadataBearer {}

/**
 * Searches evaluation forms in an Connect Customer instance, with optional filtering.
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - List all evaluation forms in an instance.
 * - Find all evaluation forms that meet specific criteria, such as Title, Description, Status, and more.
 * - Find all evaluation forms that are tagged with a specific set of tags.
 *
 * **Important things to know**
 *
 * - A Search operation, unlike a List operation, takes time to index changes to resource (create, update or delete). If you don't see updated information for recently changed contact evaluations, try calling the API again in a few seconds.
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchEvaluationFormsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchEvaluationFormsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchEvaluationFormsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchCriteria: { // EvaluationFormSearchCriteria
 *     OrConditions: [ // EvaluationFormSearchConditionList
 *       {
 *         OrConditions: [
 *           "<EvaluationFormSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<EvaluationFormSearchCriteria>",
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
 *       },
 *     ],
 *     AndConditions: [
 *       "<EvaluationFormSearchCriteria>",
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
 *   },
 *   SearchFilter: { // EvaluationFormSearchFilter
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
 * const command = new SearchEvaluationFormsCommand(input);
 * const response = await client.send(command);
 * // { // SearchEvaluationFormsResponse
 * //   EvaluationFormSearchSummaryList: [ // EvaluationFormSearchSummaryList
 * //     { // EvaluationFormSearchSummary
 * //       EvaluationFormId: "STRING_VALUE", // required
 * //       EvaluationFormArn: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       Status: "DRAFT" || "ACTIVE", // required
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       CreatedBy: "STRING_VALUE", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedBy: "STRING_VALUE", // required
 * //       LastActivatedTime: new Date("TIMESTAMP"),
 * //       LastActivatedBy: "STRING_VALUE",
 * //       LatestVersion: Number("int"), // required
 * //       ActiveVersion: Number("int"),
 * //       AutoEvaluationEnabled: true || false,
 * //       EvaluationFormLanguage: "de-DE" || "en-US" || "es-ES" || "fr-FR" || "it-IT" || "pt-BR" || "ja-JP" || "ko-KR" || "zh-CN" || "ms-MY",
 * //       ContactInteractionType: "AGENT" || "AUTOMATED" || "CUSTOMER",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       AIVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchEvaluationFormsCommandInput - {@link SearchEvaluationFormsCommandInput}
 * @returns {@link SearchEvaluationFormsCommandOutput}
 * @see {@link SearchEvaluationFormsCommandInput} for command's `input` shape.
 * @see {@link SearchEvaluationFormsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class SearchEvaluationFormsCommand extends command<SearchEvaluationFormsCommandInput, SearchEvaluationFormsCommandOutput>(
  _ep0,
  _mw0,
  "SearchEvaluationForms",
  SearchEvaluationForms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchEvaluationFormsRequest;
      output: SearchEvaluationFormsResponse;
    };
    sdk: {
      input: SearchEvaluationFormsCommandInput;
      output: SearchEvaluationFormsCommandOutput;
    };
  };
}
