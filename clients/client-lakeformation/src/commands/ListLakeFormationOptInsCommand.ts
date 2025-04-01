// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListLakeFormationOptInsRequest, ListLakeFormationOptInsResponse } from "../models/models_0";
import { de_ListLakeFormationOptInsCommand, se_ListLakeFormationOptInsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLakeFormationOptInsCommand}.
 */
export interface ListLakeFormationOptInsCommandInput extends ListLakeFormationOptInsRequest {}
/**
 * @public
 *
 * The output of {@link ListLakeFormationOptInsCommand}.
 */
export interface ListLakeFormationOptInsCommandOutput extends ListLakeFormationOptInsResponse, __MetadataBearer {}

/**
 * <p>Retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListLakeFormationOptInsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListLakeFormationOptInsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // ListLakeFormationOptInsRequest
 *   Principal: { // DataLakePrincipal
 *     DataLakePrincipalIdentifier: "STRING_VALUE",
 *   },
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
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLakeFormationOptInsCommand(input);
 * const response = await client.send(command);
 * // { // ListLakeFormationOptInsResponse
 * //   LakeFormationOptInsInfoList: [ // LakeFormationOptInsInfoList
 * //     { // LakeFormationOptInsInfo
 * //       Resource: { // Resource
 * //         Catalog: { // CatalogResource
 * //           Id: "STRING_VALUE",
 * //         },
 * //         Database: { // DatabaseResource
 * //           CatalogId: "STRING_VALUE",
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         Table: { // TableResource
 * //           CatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE",
 * //           TableWildcard: {},
 * //         },
 * //         TableWithColumns: { // TableWithColumnsResource
 * //           CatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           ColumnNames: [ // ColumnNames
 * //             "STRING_VALUE",
 * //           ],
 * //           ColumnWildcard: { // ColumnWildcard
 * //             ExcludedColumnNames: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         DataLocation: { // DataLocationResource
 * //           CatalogId: "STRING_VALUE",
 * //           ResourceArn: "STRING_VALUE", // required
 * //         },
 * //         DataCellsFilter: { // DataCellsFilterResource
 * //           TableCatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE",
 * //           TableName: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         LFTag: { // LFTagKeyResource
 * //           CatalogId: "STRING_VALUE",
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValues: [ // TagValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         LFTagPolicy: { // LFTagPolicyResource
 * //           CatalogId: "STRING_VALUE",
 * //           ResourceType: "DATABASE" || "TABLE", // required
 * //           Expression: [ // Expression
 * //             { // LFTag
 * //               TagKey: "STRING_VALUE", // required
 * //               TagValues: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           ExpressionName: "STRING_VALUE",
 * //         },
 * //         LFTagExpression: { // LFTagExpressionResource
 * //           CatalogId: "STRING_VALUE",
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Principal: { // DataLakePrincipal
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //       Condition: { // Condition
 * //         Expression: "STRING_VALUE",
 * //       },
 * //       LastModified: new Date("TIMESTAMP"),
 * //       LastUpdatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLakeFormationOptInsCommandInput - {@link ListLakeFormationOptInsCommandInput}
 * @returns {@link ListLakeFormationOptInsCommandOutput}
 * @see {@link ListLakeFormationOptInsCommandInput} for command's `input` shape.
 * @see {@link ListLakeFormationOptInsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
export class ListLakeFormationOptInsCommand extends $Command
  .classBuilder<
    ListLakeFormationOptInsCommandInput,
    ListLakeFormationOptInsCommandOutput,
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
  .s("AWSLakeFormation", "ListLakeFormationOptIns", {})
  .n("LakeFormationClient", "ListLakeFormationOptInsCommand")
  .f(void 0, void 0)
  .ser(se_ListLakeFormationOptInsCommand)
  .de(de_ListLakeFormationOptInsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLakeFormationOptInsRequest;
      output: ListLakeFormationOptInsResponse;
    };
    sdk: {
      input: ListLakeFormationOptInsCommandInput;
      output: ListLakeFormationOptInsCommandOutput;
    };
  };
}
