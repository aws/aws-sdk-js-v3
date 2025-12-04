// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { SearchDatabasesByLFTagsRequest, SearchDatabasesByLFTagsResponse } from "../models/models_0";
import { SearchDatabasesByLFTags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchDatabasesByLFTagsCommand}.
 */
export interface SearchDatabasesByLFTagsCommandInput extends SearchDatabasesByLFTagsRequest {}
/**
 * @public
 *
 * The output of {@link SearchDatabasesByLFTagsCommand}.
 */
export interface SearchDatabasesByLFTagsCommandOutput extends SearchDatabasesByLFTagsResponse, __MetadataBearer {}

/**
 * <p>This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, SearchDatabasesByLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, SearchDatabasesByLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // SearchDatabasesByLFTagsRequest
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
 * const command = new SearchDatabasesByLFTagsCommand(input);
 * const response = await client.send(command);
 * // { // SearchDatabasesByLFTagsResponse
 * //   NextToken: "STRING_VALUE",
 * //   DatabaseList: [ // DatabaseLFTagsList
 * //     { // TaggedDatabase
 * //       Database: { // DatabaseResource
 * //         CatalogId: "STRING_VALUE",
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //       LFTags: [ // LFTagsList
 * //         { // LFTagPair
 * //           CatalogId: "STRING_VALUE",
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValues: [ // TagValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchDatabasesByLFTagsCommandInput - {@link SearchDatabasesByLFTagsCommandInput}
 * @returns {@link SearchDatabasesByLFTagsCommandOutput}
 * @see {@link SearchDatabasesByLFTagsCommandInput} for command's `input` shape.
 * @see {@link SearchDatabasesByLFTagsCommandOutput} for command's `response` shape.
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
export class SearchDatabasesByLFTagsCommand extends $Command
  .classBuilder<
    SearchDatabasesByLFTagsCommandInput,
    SearchDatabasesByLFTagsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "SearchDatabasesByLFTags", {})
  .n("LakeFormationClient", "SearchDatabasesByLFTagsCommand")
  .sc(SearchDatabasesByLFTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchDatabasesByLFTagsRequest;
      output: SearchDatabasesByLFTagsResponse;
    };
    sdk: {
      input: SearchDatabasesByLFTagsCommandInput;
      output: SearchDatabasesByLFTagsCommandOutput;
    };
  };
}
