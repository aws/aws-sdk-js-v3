// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RemoveLFTagsFromResourceRequest, RemoveLFTagsFromResourceResponse } from "../models/models_0";
import { de_RemoveLFTagsFromResourceCommand, se_RemoveLFTagsFromResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveLFTagsFromResourceCommand}.
 */
export interface RemoveLFTagsFromResourceCommandInput extends RemoveLFTagsFromResourceRequest {}
/**
 * @public
 *
 * The output of {@link RemoveLFTagsFromResourceCommand}.
 */
export interface RemoveLFTagsFromResourceCommandOutput extends RemoveLFTagsFromResourceResponse, __MetadataBearer {}

/**
 * <p>Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RemoveLFTagsFromResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RemoveLFTagsFromResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // RemoveLFTagsFromResourceRequest
 *   CatalogId: "STRING_VALUE",
 *   Resource: { // Resource
 *     Catalog: {},
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
 *   LFTags: [ // LFTagsList // required
 *     { // LFTagPair
 *       CatalogId: "STRING_VALUE",
 *       TagKey: "STRING_VALUE", // required
 *       TagValues: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new RemoveLFTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * // { // RemoveLFTagsFromResourceResponse
 * //   Failures: [ // LFTagErrors
 * //     { // LFTagError
 * //       LFTag: { // LFTagPair
 * //         CatalogId: "STRING_VALUE",
 * //         TagKey: "STRING_VALUE", // required
 * //         TagValues: [ // TagValueList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Error: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RemoveLFTagsFromResourceCommandInput - {@link RemoveLFTagsFromResourceCommandInput}
 * @returns {@link RemoveLFTagsFromResourceCommandOutput}
 * @see {@link RemoveLFTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveLFTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 * @public
 */
export class RemoveLFTagsFromResourceCommand extends $Command
  .classBuilder<
    RemoveLFTagsFromResourceCommandInput,
    RemoveLFTagsFromResourceCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "RemoveLFTagsFromResource", {})
  .n("LakeFormationClient", "RemoveLFTagsFromResourceCommand")
  .f(void 0, void 0)
  .ser(se_RemoveLFTagsFromResourceCommand)
  .de(de_RemoveLFTagsFromResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveLFTagsFromResourceRequest;
      output: RemoveLFTagsFromResourceResponse;
    };
    sdk: {
      input: RemoveLFTagsFromResourceCommandInput;
      output: RemoveLFTagsFromResourceCommandOutput;
    };
  };
}
