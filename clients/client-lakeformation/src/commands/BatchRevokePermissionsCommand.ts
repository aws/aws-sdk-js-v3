// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { BatchRevokePermissionsRequest, BatchRevokePermissionsResponse } from "../models/models_0";
import { de_BatchRevokePermissionsCommand, se_BatchRevokePermissionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchRevokePermissionsCommand}.
 */
export interface BatchRevokePermissionsCommandInput extends BatchRevokePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchRevokePermissionsCommand}.
 */
export interface BatchRevokePermissionsCommandOutput extends BatchRevokePermissionsResponse, __MetadataBearer {}

/**
 * <p>Batch operation to revoke permissions from the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchRevokePermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchRevokePermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // BatchRevokePermissionsRequest
 *   CatalogId: "STRING_VALUE",
 *   Entries: [ // BatchPermissionsRequestEntryList // required
 *     { // BatchPermissionsRequestEntry
 *       Id: "STRING_VALUE", // required
 *       Principal: { // DataLakePrincipal
 *         DataLakePrincipalIdentifier: "STRING_VALUE",
 *       },
 *       Resource: { // Resource
 *         Catalog: { // CatalogResource
 *           Id: "STRING_VALUE",
 *         },
 *         Database: { // DatabaseResource
 *           CatalogId: "STRING_VALUE",
 *           Name: "STRING_VALUE", // required
 *         },
 *         Table: { // TableResource
 *           CatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE", // required
 *           Name: "STRING_VALUE",
 *           TableWildcard: {},
 *         },
 *         TableWithColumns: { // TableWithColumnsResource
 *           CatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE", // required
 *           Name: "STRING_VALUE", // required
 *           ColumnNames: [ // ColumnNames
 *             "STRING_VALUE",
 *           ],
 *           ColumnWildcard: { // ColumnWildcard
 *             ExcludedColumnNames: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         DataLocation: { // DataLocationResource
 *           CatalogId: "STRING_VALUE",
 *           ResourceArn: "STRING_VALUE", // required
 *         },
 *         DataCellsFilter: { // DataCellsFilterResource
 *           TableCatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE",
 *           TableName: "STRING_VALUE",
 *           Name: "STRING_VALUE",
 *         },
 *         LFTag: { // LFTagKeyResource
 *           CatalogId: "STRING_VALUE",
 *           TagKey: "STRING_VALUE", // required
 *           TagValues: [ // TagValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         LFTagPolicy: { // LFTagPolicyResource
 *           CatalogId: "STRING_VALUE",
 *           ResourceType: "DATABASE" || "TABLE", // required
 *           Expression: [ // Expression
 *             { // LFTag
 *               TagKey: "STRING_VALUE", // required
 *               TagValues: [ // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *           ExpressionName: "STRING_VALUE",
 *         },
 *         LFTagExpression: { // LFTagExpressionResource
 *           CatalogId: "STRING_VALUE",
 *           Name: "STRING_VALUE", // required
 *         },
 *       },
 *       Permissions: [ // PermissionList
 *         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
 *       ],
 *       Condition: { // Condition
 *         Expression: "STRING_VALUE",
 *       },
 *       PermissionsWithGrantOption: [
 *         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchRevokePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchRevokePermissionsResponse
 * //   Failures: [ // BatchPermissionsFailureList
 * //     { // BatchPermissionsFailureEntry
 * //       RequestEntry: { // BatchPermissionsRequestEntry
 * //         Id: "STRING_VALUE", // required
 * //         Principal: { // DataLakePrincipal
 * //           DataLakePrincipalIdentifier: "STRING_VALUE",
 * //         },
 * //         Resource: { // Resource
 * //           Catalog: { // CatalogResource
 * //             Id: "STRING_VALUE",
 * //           },
 * //           Database: { // DatabaseResource
 * //             CatalogId: "STRING_VALUE",
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //           Table: { // TableResource
 * //             CatalogId: "STRING_VALUE",
 * //             DatabaseName: "STRING_VALUE", // required
 * //             Name: "STRING_VALUE",
 * //             TableWildcard: {},
 * //           },
 * //           TableWithColumns: { // TableWithColumnsResource
 * //             CatalogId: "STRING_VALUE",
 * //             DatabaseName: "STRING_VALUE", // required
 * //             Name: "STRING_VALUE", // required
 * //             ColumnNames: [ // ColumnNames
 * //               "STRING_VALUE",
 * //             ],
 * //             ColumnWildcard: { // ColumnWildcard
 * //               ExcludedColumnNames: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           DataLocation: { // DataLocationResource
 * //             CatalogId: "STRING_VALUE",
 * //             ResourceArn: "STRING_VALUE", // required
 * //           },
 * //           DataCellsFilter: { // DataCellsFilterResource
 * //             TableCatalogId: "STRING_VALUE",
 * //             DatabaseName: "STRING_VALUE",
 * //             TableName: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           LFTag: { // LFTagKeyResource
 * //             CatalogId: "STRING_VALUE",
 * //             TagKey: "STRING_VALUE", // required
 * //             TagValues: [ // TagValueList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           LFTagPolicy: { // LFTagPolicyResource
 * //             CatalogId: "STRING_VALUE",
 * //             ResourceType: "DATABASE" || "TABLE", // required
 * //             Expression: [ // Expression
 * //               { // LFTag
 * //                 TagKey: "STRING_VALUE", // required
 * //                 TagValues: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //             ExpressionName: "STRING_VALUE",
 * //           },
 * //           LFTagExpression: { // LFTagExpressionResource
 * //             CatalogId: "STRING_VALUE",
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         Permissions: [ // PermissionList
 * //           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
 * //         ],
 * //         Condition: { // Condition
 * //           Expression: "STRING_VALUE",
 * //         },
 * //         PermissionsWithGrantOption: [
 * //           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
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
 * @param BatchRevokePermissionsCommandInput - {@link BatchRevokePermissionsCommandInput}
 * @returns {@link BatchRevokePermissionsCommandOutput}
 * @see {@link BatchRevokePermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchRevokePermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
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
export class BatchRevokePermissionsCommand extends $Command
  .classBuilder<
    BatchRevokePermissionsCommandInput,
    BatchRevokePermissionsCommandOutput,
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
  .s("AWSLakeFormation", "BatchRevokePermissions", {})
  .n("LakeFormationClient", "BatchRevokePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_BatchRevokePermissionsCommand)
  .de(de_BatchRevokePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchRevokePermissionsRequest;
      output: BatchRevokePermissionsResponse;
    };
    sdk: {
      input: BatchRevokePermissionsCommandInput;
      output: BatchRevokePermissionsCommandOutput;
    };
  };
}
