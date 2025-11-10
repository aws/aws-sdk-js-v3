// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { SearchTablesByLFTagsRequest, SearchTablesByLFTagsResponse } from "../models/models_0";
import { SearchTablesByLFTags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTablesByLFTagsCommand}.
 */
export interface SearchTablesByLFTagsCommandInput extends SearchTablesByLFTagsRequest {}
/**
 * @public
 *
 * The output of {@link SearchTablesByLFTagsCommand}.
 */
export interface SearchTablesByLFTagsCommandOutput extends SearchTablesByLFTagsResponse, __MetadataBearer {}

/**
 * <p>This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, SearchTablesByLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, SearchTablesByLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // SearchTablesByLFTagsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CatalogId: "STRING_VALUE",
 *   Expression: [ // Expression // required
 *     { // LFTag
 *       TagKey: "STRING_VALUE", // required
 *       TagValues: [ // TagValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new SearchTablesByLFTagsCommand(input);
 * const response = await client.send(command);
 * // { // SearchTablesByLFTagsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TableList: [ // TableLFTagsList
 * //     { // TaggedTable
 * //       Table: { // TableResource
 * //         CatalogId: "STRING_VALUE",
 * //         DatabaseName: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //         TableWildcard: {},
 * //       },
 * //       LFTagOnDatabase: [ // LFTagsList
 * //         { // LFTagPair
 * //           CatalogId: "STRING_VALUE",
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValues: [ // TagValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       LFTagsOnTable: [
 * //         {
 * //           CatalogId: "STRING_VALUE",
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValues: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       LFTagsOnColumns: [ // ColumnLFTagsList
 * //         { // ColumnLFTag
 * //           Name: "STRING_VALUE",
 * //           LFTags: [
 * //             {
 * //               CatalogId: "STRING_VALUE",
 * //               TagKey: "STRING_VALUE", // required
 * //               TagValues: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchTablesByLFTagsCommandInput - {@link SearchTablesByLFTagsCommandInput}
 * @returns {@link SearchTablesByLFTagsCommandOutput}
 * @see {@link SearchTablesByLFTagsCommandInput} for command's `input` shape.
 * @see {@link SearchTablesByLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class SearchTablesByLFTagsCommand extends $Command
  .classBuilder<
    SearchTablesByLFTagsCommandInput,
    SearchTablesByLFTagsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "SearchTablesByLFTags", {})
  .n("LakeFormationClient", "SearchTablesByLFTagsCommand")
  .sc(SearchTablesByLFTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTablesByLFTagsRequest;
      output: SearchTablesByLFTagsResponse;
    };
    sdk: {
      input: SearchTablesByLFTagsCommandInput;
      output: SearchTablesByLFTagsCommandOutput;
    };
  };
}
