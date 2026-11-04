// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchAllRelatedItemsRequest, SearchAllRelatedItemsResponse } from "../models/models_0";
import { SearchAllRelatedItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchAllRelatedItemsCommand}.
 */
export interface SearchAllRelatedItemsCommandInput extends SearchAllRelatedItemsRequest {}
/**
 * @public
 *
 * The output of {@link SearchAllRelatedItemsCommand}.
 */
export interface SearchAllRelatedItemsCommandOutput extends SearchAllRelatedItemsResponse, __MetadataBearer {}

/**
 * Searches for related items across all cases within a domain. This is a global search operation that returns related items from multiple cases, unlike the case-specific [SearchRelatedItems](https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_SearchRelatedItems.html) API.
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - Find cases with similar issues across the domain. For example, search for all cases containing comments about "product defect" to identify patterns and existing solutions.
 * - Locate all cases associated with specific contacts or orders. For example, find all cases linked to a contactArn to understand the complete customer journey.
 * - Monitor SLA compliance across cases. For example, search for all cases with "Active" SLA status to prioritize remediation efforts.
 *
 * **Important things to know**
 *
 * - This API returns case identifiers, not complete case objects. To retrieve full case details, you must make additional calls to the [GetCase](https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_GetCase.html) API for each returned case ID.
 * - This API searches across related items content, not case fields. Use the [SearchCases](https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_SearchCases.html) API to search within case field values.
 *
 * **Endpoints**: See [Amazon Connect endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, SearchAllRelatedItemsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, SearchAllRelatedItemsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // SearchAllRelatedItemsRequest
 *   domainId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // RelatedItemFilterList
 *     { // RelatedItemTypeFilter Union: only one key present
 *       contact: { // ContactFilter
 *         channel: [ // ChannelList
 *           "STRING_VALUE",
 *         ],
 *         contactArn: "STRING_VALUE",
 *       },
 *       comment: {},
 *       file: { // FileFilter
 *         fileArn: "STRING_VALUE",
 *       },
 *       sla: { // SlaFilter
 *         name: "STRING_VALUE",
 *         status: "STRING_VALUE",
 *       },
 *       connectCase: { // ConnectCaseFilter
 *         caseId: "STRING_VALUE",
 *       },
 *       custom: { // CustomFilter
 *         fields: { // CustomFieldsFilter Union: only one key present
 *           field: { // FieldFilter Union: only one key present
 *             equalTo: { // FieldValue
 *               id: "STRING_VALUE", // required
 *               value: { // FieldValueUnion Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 doubleValue: Number("double"),
 *                 booleanValue: true || false,
 *                 emptyValue: {},
 *                 userArnValue: "STRING_VALUE",
 *               },
 *             },
 *             contains: {
 *               id: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 doubleValue: Number("double"),
 *                 booleanValue: true || false,
 *                 emptyValue: {},
 *                 userArnValue: "STRING_VALUE",
 *               },
 *             },
 *             greaterThan: {
 *               id: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 doubleValue: Number("double"),
 *                 booleanValue: true || false,
 *                 emptyValue: {},
 *                 userArnValue: "STRING_VALUE",
 *               },
 *             },
 *             greaterThanOrEqualTo: {
 *               id: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 doubleValue: Number("double"),
 *                 booleanValue: true || false,
 *                 emptyValue: {},
 *                 userArnValue: "STRING_VALUE",
 *               },
 *             },
 *             lessThan: {
 *               id: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 doubleValue: Number("double"),
 *                 booleanValue: true || false,
 *                 emptyValue: {},
 *                 userArnValue: "STRING_VALUE",
 *               },
 *             },
 *             lessThanOrEqualTo: "<FieldValue>",
 *           },
 *           not: {//  Union: only one key present
 *             field: {//  Union: only one key present
 *               equalTo: "<FieldValue>",
 *               contains: "<FieldValue>",
 *               greaterThan: "<FieldValue>",
 *               greaterThanOrEqualTo: "<FieldValue>",
 *               lessThan: "<FieldValue>",
 *               lessThanOrEqualTo: "<FieldValue>",
 *             },
 *             not: "<CustomFieldsFilter>",
 *             andAll: [ // CustomFieldsFilterList
 *               "<CustomFieldsFilter>",
 *             ],
 *             orAll: [
 *               "<CustomFieldsFilter>",
 *             ],
 *           },
 *           andAll: [
 *             "<CustomFieldsFilter>",
 *           ],
 *           orAll: [
 *             "<CustomFieldsFilter>",
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   sorts: [ // SearchAllRelatedItemsSortList
 *     { // SearchAllRelatedItemsSort
 *       sortProperty: "STRING_VALUE", // required
 *       sortOrder: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchAllRelatedItemsCommand(input);
 * const response = await client.send(command);
 * // { // SearchAllRelatedItemsResponse
 * //   nextToken: "STRING_VALUE",
 * //   relatedItems: [ // SearchAllRelatedItemsResponseItemList // required
 * //     { // SearchAllRelatedItemsResponseItem
 * //       relatedItemId: "STRING_VALUE", // required
 * //       caseId: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       associationTime: new Date("TIMESTAMP"), // required
 * //       content: { // RelatedItemContent Union: only one key present
 * //         contact: { // ContactContent
 * //           contactArn: "STRING_VALUE", // required
 * //           channel: "STRING_VALUE", // required
 * //           connectedToSystemTime: new Date("TIMESTAMP"), // required
 * //         },
 * //         comment: { // CommentContent
 * //           body: "STRING_VALUE", // required
 * //           contentType: "STRING_VALUE", // required
 * //         },
 * //         file: { // FileContent
 * //           fileArn: "STRING_VALUE", // required
 * //         },
 * //         sla: { // SlaContent
 * //           slaConfiguration: { // SlaConfiguration
 * //             name: "STRING_VALUE", // required
 * //             type: "STRING_VALUE", // required
 * //             status: "STRING_VALUE", // required
 * //             fieldId: "STRING_VALUE",
 * //             targetFieldValues: [ // SlaFieldValueUnionList
 * //               { // FieldValueUnion Union: only one key present
 * //                 stringValue: "STRING_VALUE",
 * //                 doubleValue: Number("double"),
 * //                 booleanValue: true || false,
 * //                 emptyValue: {},
 * //                 userArnValue: "STRING_VALUE",
 * //               },
 * //             ],
 * //             targetTime: new Date("TIMESTAMP"), // required
 * //             completionTime: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //         connectCase: { // ConnectCaseContent
 * //           caseId: "STRING_VALUE", // required
 * //         },
 * //         custom: { // CustomContent
 * //           fields: [ // FieldValueList // required
 * //             { // FieldValue
 * //               id: "STRING_VALUE", // required
 * //               value: {//  Union: only one key present
 * //                 stringValue: "STRING_VALUE",
 * //                 doubleValue: Number("double"),
 * //                 booleanValue: true || false,
 * //                 emptyValue: {},
 * //                 userArnValue: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       performedBy: { // UserUnion Union: only one key present
 * //         userArn: "STRING_VALUE",
 * //         customEntity: "STRING_VALUE",
 * //       },
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchAllRelatedItemsCommandInput - {@link SearchAllRelatedItemsCommandInput}
 * @returns {@link SearchAllRelatedItemsCommandOutput}
 * @see {@link SearchAllRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link SearchAllRelatedItemsCommandOutput} for command's `response` shape.
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
export class SearchAllRelatedItemsCommand extends command<SearchAllRelatedItemsCommandInput, SearchAllRelatedItemsCommandOutput>(
  _ep0,
  _mw0,
  "SearchAllRelatedItems",
  SearchAllRelatedItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAllRelatedItemsRequest;
      output: SearchAllRelatedItemsResponse;
    };
    sdk: {
      input: SearchAllRelatedItemsCommandInput;
      output: SearchAllRelatedItemsCommandOutput;
    };
  };
}
