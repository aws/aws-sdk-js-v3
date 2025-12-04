// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { GetResourceLFTagsRequest, GetResourceLFTagsResponse } from "../models/models_0";
import { GetResourceLFTags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceLFTagsCommand}.
 */
export interface GetResourceLFTagsCommandInput extends GetResourceLFTagsRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceLFTagsCommand}.
 */
export interface GetResourceLFTagsCommandOutput extends GetResourceLFTagsResponse, __MetadataBearer {}

/**
 * <p>Returns the LF-tags applied to a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetResourceLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetResourceLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetResourceLFTagsRequest
 *   CatalogId: "STRING_VALUE",
 *   Resource: { // Resource
 *     Catalog: { // CatalogResource
 *       Id: "STRING_VALUE",
 *     },
 *     Database: { // DatabaseResource
 *       CatalogId: "STRING_VALUE",
 *       Name: "STRING_VALUE", // required
 *     },
 *     Table: { // TableResource
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       Name: "STRING_VALUE",
 *       TableWildcard: {},
 *     },
 *     TableWithColumns: { // TableWithColumnsResource
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       Name: "STRING_VALUE", // required
 *       ColumnNames: [ // ColumnNames
 *         "STRING_VALUE",
 *       ],
 *       ColumnWildcard: { // ColumnWildcard
 *         ExcludedColumnNames: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     DataLocation: { // DataLocationResource
 *       CatalogId: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE", // required
 *     },
 *     DataCellsFilter: { // DataCellsFilterResource
 *       TableCatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *     LFTag: { // LFTagKeyResource
 *       CatalogId: "STRING_VALUE",
 *       TagKey: "STRING_VALUE", // required
 *       TagValues: [ // TagValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     LFTagPolicy: { // LFTagPolicyResource
 *       CatalogId: "STRING_VALUE",
 *       ResourceType: "DATABASE" || "TABLE", // required
 *       Expression: [ // Expression
 *         { // LFTag
 *           TagKey: "STRING_VALUE", // required
 *           TagValues: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       ExpressionName: "STRING_VALUE",
 *     },
 *     LFTagExpression: { // LFTagExpressionResource
 *       CatalogId: "STRING_VALUE",
 *       Name: "STRING_VALUE", // required
 *     },
 *   },
 *   ShowAssignedLFTags: true || false,
 * };
 * const command = new GetResourceLFTagsCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceLFTagsResponse
 * //   LFTagOnDatabase: [ // LFTagsList
 * //     { // LFTagPair
 * //       CatalogId: "STRING_VALUE",
 * //       TagKey: "STRING_VALUE", // required
 * //       TagValues: [ // TagValueList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   LFTagsOnTable: [
 * //     {
 * //       CatalogId: "STRING_VALUE",
 * //       TagKey: "STRING_VALUE", // required
 * //       TagValues: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   LFTagsOnColumns: [ // ColumnLFTagsList
 * //     { // ColumnLFTag
 * //       Name: "STRING_VALUE",
 * //       LFTags: [
 * //         {
 * //           CatalogId: "STRING_VALUE",
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValues: [ // required
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
 * @param GetResourceLFTagsCommandInput - {@link GetResourceLFTagsCommandInput}
 * @returns {@link GetResourceLFTagsCommandOutput}
 * @see {@link GetResourceLFTagsCommandInput} for command's `input` shape.
 * @see {@link GetResourceLFTagsCommandOutput} for command's `response` shape.
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
export class GetResourceLFTagsCommand extends $Command
  .classBuilder<
    GetResourceLFTagsCommandInput,
    GetResourceLFTagsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "GetResourceLFTags", {})
  .n("LakeFormationClient", "GetResourceLFTagsCommand")
  .sc(GetResourceLFTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceLFTagsRequest;
      output: GetResourceLFTagsResponse;
    };
    sdk: {
      input: GetResourceLFTagsCommandInput;
      output: GetResourceLFTagsCommandOutput;
    };
  };
}
