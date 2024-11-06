// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListPermissionsRequest, ListPermissionsResponse } from "../models/models_0";
import { de_ListPermissionsCommand, se_ListPermissionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionsCommand}.
 */
export interface ListPermissionsCommandInput extends ListPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionsCommand}.
 */
export interface ListPermissionsCommandOutput extends ListPermissionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p>
 *          <p>This operation returns only those permissions that have been explicitly granted.</p>
 *          <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListPermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListPermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // ListPermissionsRequest
 *   CatalogId: "STRING_VALUE",
 *   Principal: { // DataLakePrincipal
 *     DataLakePrincipalIdentifier: "STRING_VALUE",
 *   },
 *   ResourceType: "CATALOG" || "DATABASE" || "TABLE" || "DATA_LOCATION" || "LF_TAG" || "LF_TAG_POLICY" || "LF_TAG_POLICY_DATABASE" || "LF_TAG_POLICY_TABLE" || "LF_NAMED_TAG_EXPRESSION",
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
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   IncludeRelated: "STRING_VALUE",
 * };
 * const command = new ListPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionsResponse
 * //   PrincipalResourcePermissions: [ // PrincipalResourcePermissionsList
 * //     { // PrincipalResourcePermissions
 * //       Principal: { // DataLakePrincipal
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //       Resource: { // Resource
 * //         Catalog: {},
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
 * //       Permissions: [ // PermissionList
 * //         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION",
 * //       ],
 * //       PermissionsWithGrantOption: [
 * //         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION",
 * //       ],
 * //       AdditionalDetails: { // DetailsMap
 * //         ResourceShare: [ // ResourceShareList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       LastUpdatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionsCommandInput - {@link ListPermissionsCommandInput}
 * @returns {@link ListPermissionsCommandOutput}
 * @see {@link ListPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
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
export class ListPermissionsCommand extends $Command
  .classBuilder<
    ListPermissionsCommandInput,
    ListPermissionsCommandOutput,
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
  .s("AWSLakeFormation", "ListPermissions", {})
  .n("LakeFormationClient", "ListPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_ListPermissionsCommand)
  .de(de_ListPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionsRequest;
      output: ListPermissionsResponse;
    };
    sdk: {
      input: ListPermissionsCommandInput;
      output: ListPermissionsCommandOutput;
    };
  };
}
