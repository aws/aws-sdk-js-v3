// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchRelatedItemsRequest, SearchRelatedItemsResponse } from "../models/models_0";
import { SearchRelatedItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchRelatedItemsCommand}.
 */
export interface SearchRelatedItemsCommandInput extends SearchRelatedItemsRequest {}
/**
 * @public
 *
 * The output of {@link SearchRelatedItemsCommand}.
 */
export interface SearchRelatedItemsCommandOutput extends SearchRelatedItemsResponse, __MetadataBearer {}

/**
 * Searches for related items that are associated with a case.
 *
 * > **Note:** If no filters are provided, this returns all related items associated with a case.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, SearchRelatedItemsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, SearchRelatedItemsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // SearchRelatedItemsRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
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
 * };
 * const command = new SearchRelatedItemsCommand(input);
 * const response = await client.send(command);
 * // { // SearchRelatedItemsResponse
 * //   nextToken: "STRING_VALUE",
 * //   relatedItems: [ // SearchRelatedItemsResponseItemList // required
 * //     { // SearchRelatedItemsResponseItem
 * //       relatedItemId: "STRING_VALUE", // required
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
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       performedBy: { // UserUnion Union: only one key present
 * //         userArn: "STRING_VALUE",
 * //         customEntity: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchRelatedItemsCommandInput - {@link SearchRelatedItemsCommandInput}
 * @returns {@link SearchRelatedItemsCommandOutput}
 * @see {@link SearchRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link SearchRelatedItemsCommandOutput} for command's `response` shape.
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
export class SearchRelatedItemsCommand extends command<SearchRelatedItemsCommandInput, SearchRelatedItemsCommandOutput>(
  _ep0,
  _mw0,
  "SearchRelatedItems",
  SearchRelatedItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchRelatedItemsRequest;
      output: SearchRelatedItemsResponse;
    };
    sdk: {
      input: SearchRelatedItemsCommandInput;
      output: SearchRelatedItemsCommandOutput;
    };
  };
}
