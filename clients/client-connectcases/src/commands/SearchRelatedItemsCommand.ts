// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  SearchRelatedItemsRequest,
  SearchRelatedItemsRequestFilterSensitiveLog,
  SearchRelatedItemsResponse,
  SearchRelatedItemsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchRelatedItemsCommand, se_SearchRelatedItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>
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
export class SearchRelatedItemsCommand extends $Command
  .classBuilder<
    SearchRelatedItemsCommandInput,
    SearchRelatedItemsCommandOutput,
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
  .s("AmazonConnectCases", "SearchRelatedItems", {})
  .n("ConnectCasesClient", "SearchRelatedItemsCommand")
  .f(SearchRelatedItemsRequestFilterSensitiveLog, SearchRelatedItemsResponseFilterSensitiveLog)
  .ser(se_SearchRelatedItemsCommand)
  .de(de_SearchRelatedItemsCommand)
  .build() {
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
