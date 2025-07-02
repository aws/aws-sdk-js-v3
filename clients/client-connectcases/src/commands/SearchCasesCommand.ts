// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchCasesRequest, SearchCasesResponse } from "../models/models_0";
import { de_SearchCasesCommand, se_SearchCasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, SearchCasesCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, SearchCasesCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
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
 *       andAll: [ // CaseFilterList
 *         "<CaseFilter>",
 *       ],
 *       orAll: [
 *         "<CaseFilter>",
 *       ],
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
export class SearchCasesCommand extends $Command
  .classBuilder<
    SearchCasesCommandInput,
    SearchCasesCommandOutput,
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
  .s("AmazonConnectCases", "SearchCases", {})
  .n("ConnectCasesClient", "SearchCasesCommand")
  .f(void 0, void 0)
  .ser(se_SearchCasesCommand)
  .de(de_SearchCasesCommand)
  .build() {
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
