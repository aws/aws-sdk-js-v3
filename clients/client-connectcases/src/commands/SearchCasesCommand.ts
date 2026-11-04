// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchCasesRequest, SearchCasesResponse } from "../models/models_0";
import { SearchCases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchCasesCommand}.
 */
export interface SearchCasesCommandInput extends SearchCasesRequest {}
/**
 * @public
 *
 * The output of {@link SearchCasesCommand}.
 */
export interface SearchCasesCommandOutput extends SearchCasesResponse, __MetadataBearer {}

/**
 * Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.
 *
 * > **Note:** For `customer_id` you must provide the full customer profile ARN in this format: `arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, SearchCasesCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, SearchCasesCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // SearchCasesRequest
 *   domainId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   searchTerm: "STRING_VALUE",
 *   filter: { // CaseFilter Union: only one key present
 *     field: { // FieldFilter Union: only one key present
 *       equalTo: { // FieldValue
 *         id: "STRING_VALUE", // required
 *         value: { // FieldValueUnion Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *           emptyValue: {},
 *           userArnValue: "STRING_VALUE",
 *         },
 *       },
 *       contains: {
 *         id: "STRING_VALUE", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *           emptyValue: {},
 *           userArnValue: "STRING_VALUE",
 *         },
 *       },
 *       greaterThan: {
 *         id: "STRING_VALUE", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *           emptyValue: {},
 *           userArnValue: "STRING_VALUE",
 *         },
 *       },
 *       greaterThanOrEqualTo: {
 *         id: "STRING_VALUE", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *           emptyValue: {},
 *           userArnValue: "STRING_VALUE",
 *         },
 *       },
 *       lessThan: {
 *         id: "STRING_VALUE", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *           emptyValue: {},
 *           userArnValue: "STRING_VALUE",
 *         },
 *       },
 *       lessThanOrEqualTo: "<FieldValue>",
 *     },
 *     not: {//  Union: only one key present
 *       field: {//  Union: only one key present
 *         equalTo: "<FieldValue>",
 *         contains: "<FieldValue>",
 *         greaterThan: "<FieldValue>",
 *         greaterThanOrEqualTo: "<FieldValue>",
 *         lessThan: "<FieldValue>",
 *         lessThanOrEqualTo: "<FieldValue>",
 *       },
 *       not: "<CaseFilter>",
 *       tag: { // TagFilter Union: only one key present
 *         equalTo: { // TagValue
 *           key: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       },
 *       andAll: [ // CaseFilterList
 *         "<CaseFilter>",
 *       ],
 *       orAll: [
 *         "<CaseFilter>",
 *       ],
 *     },
 *     tag: {//  Union: only one key present
 *       equalTo: {
 *         key: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     },
 *     andAll: [
 *       "<CaseFilter>",
 *     ],
 *     orAll: [
 *       "<CaseFilter>",
 *     ],
 *   },
 *   sorts: [ // SortList
 *     { // Sort
 *       fieldId: "STRING_VALUE", // required
 *       sortOrder: "STRING_VALUE", // required
 *     },
 *   ],
 *   fields: [ // FieldIdentifierList
 *     { // FieldIdentifier
 *       id: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchCasesCommand(input);
 * const response = await client.send(command);
 * // { // SearchCasesResponse
 * //   nextToken: "STRING_VALUE",
 * //   cases: [ // SearchCasesResponseItemList // required
 * //     { // SearchCasesResponseItem
 * //       caseId: "STRING_VALUE", // required
 * //       templateId: "STRING_VALUE", // required
 * //       fields: [ // FieldValueList // required
 * //         { // FieldValue
 * //           id: "STRING_VALUE", // required
 * //           value: { // FieldValueUnion Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             doubleValue: Number("double"),
 * //             booleanValue: true || false,
 * //             emptyValue: {},
 * //             userArnValue: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   totalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchCasesCommandInput - {@link SearchCasesCommandInput}
 * @returns {@link SearchCasesCommandOutput}
 * @see {@link SearchCasesCommandInput} for command's `input` shape.
 * @see {@link SearchCasesCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class SearchCasesCommand extends command<SearchCasesCommandInput, SearchCasesCommandOutput>(
  _ep0,
  _mw0,
  "SearchCases",
  SearchCases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchCasesRequest;
      output: SearchCasesResponse;
    };
    sdk: {
      input: SearchCasesCommandInput;
      output: SearchCasesCommandOutput;
    };
  };
}
