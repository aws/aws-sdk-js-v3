// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RevokePermissionsRequest, RevokePermissionsResponse } from "../models/models_0";
import { de_RevokePermissionsCommand, se_RevokePermissionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokePermissionsCommand}.
 */
export interface RevokePermissionsCommandInput extends RevokePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link RevokePermissionsCommand}.
 */
export interface RevokePermissionsCommandOutput extends RevokePermissionsResponse, __MetadataBearer {}

/**
 * <p>Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RevokePermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RevokePermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // RevokePermissionsRequest
 *   CatalogId: "STRING_VALUE",
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
 *   Permissions: [ // PermissionList // required
 *     "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
 *   ],
 *   PermissionsWithGrantOption: [
 *     "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
 *   ],
 * };
 * const command = new RevokePermissionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokePermissionsCommandInput - {@link RevokePermissionsCommandInput}
 * @returns {@link RevokePermissionsCommandOutput}
 * @see {@link RevokePermissionsCommandInput} for command's `input` shape.
 * @see {@link RevokePermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class RevokePermissionsCommand extends $Command
  .classBuilder<
    RevokePermissionsCommandInput,
    RevokePermissionsCommandOutput,
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
  .s("AWSLakeFormation", "RevokePermissions", {})
  .n("LakeFormationClient", "RevokePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_RevokePermissionsCommand)
  .de(de_RevokePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokePermissionsRequest;
      output: {};
    };
    sdk: {
      input: RevokePermissionsCommandInput;
      output: RevokePermissionsCommandOutput;
    };
  };
}
