// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  SearchAllRelatedItemsRequest,
  SearchAllRelatedItemsRequestFilterSensitiveLog,
  SearchAllRelatedItemsResponse,
  SearchAllRelatedItemsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchAllRelatedItemsCommand, se_SearchAllRelatedItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Searches for related items across all cases within a domain. This is a global search operation that returns related items from multiple cases, unlike the case-specific <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_SearchRelatedItems.html">SearchRelatedItems</a> API.</p> <p> <b>Use cases</b> </p> <p>Following are common uses cases for this API:</p> <ul> <li> <p>Find cases with similar issues across the domain. For example, search for all cases containing comments about "product defect" to identify patterns and existing solutions.</p> </li> <li> <p>Locate all cases associated with specific contacts or orders. For example, find all cases linked to a contactArn to understand the complete customer journey. </p> </li> <li> <p>Monitor SLA compliance across cases. For example, search for all cases with "Active" SLA status to prioritize remediation efforts.</p> </li> </ul> <p> <b>Important things to know</b> </p> <ul> <li> <p>This API returns case identifiers, not complete case objects. To retrieve full case details, you must make additional calls to the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_GetCase.html">GetCase</a> API for each returned case ID. </p> </li> <li> <p>This API searches across related items content, not case fields. Use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_SearchCases.html">SearchCases</a> API to search within case field values.</p> </li> </ul> <p> <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and quotas</a>.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class SearchAllRelatedItemsCommand extends $Command
  .classBuilder<
    SearchAllRelatedItemsCommandInput,
    SearchAllRelatedItemsCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "SearchAllRelatedItems", {})
  .n("ConnectCasesClient", "SearchAllRelatedItemsCommand")
  .f(SearchAllRelatedItemsRequestFilterSensitiveLog, SearchAllRelatedItemsResponseFilterSensitiveLog)
  .ser(se_SearchAllRelatedItemsCommand)
  .de(de_SearchAllRelatedItemsCommand)
  .build() {
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
