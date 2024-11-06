// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { CreateLakeFormationOptInRequest, CreateLakeFormationOptInResponse } from "../models/models_0";
import { de_CreateLakeFormationOptInCommand, se_CreateLakeFormationOptInCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLakeFormationOptInCommand}.
 */
export interface CreateLakeFormationOptInCommandInput extends CreateLakeFormationOptInRequest {}
/**
 * @public
 *
 * The output of {@link CreateLakeFormationOptInCommand}.
 */
export interface CreateLakeFormationOptInCommandOutput extends CreateLakeFormationOptInResponse, __MetadataBearer {}

/**
 * <p>Enforce Lake Formation permissions for the given databases, tables, and principals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLakeFormationOptInCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLakeFormationOptInCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // CreateLakeFormationOptInRequest
 *   Principal: { // DataLakePrincipal
 *     DataLakePrincipalIdentifier: "STRING_VALUE",
 *   },
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
 * };
 * const command = new CreateLakeFormationOptInCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLakeFormationOptInCommandInput - {@link CreateLakeFormationOptInCommandInput}
 * @returns {@link CreateLakeFormationOptInCommandOutput}
 * @see {@link CreateLakeFormationOptInCommandInput} for command's `input` shape.
 * @see {@link CreateLakeFormationOptInCommandOutput} for command's `response` shape.
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
export class CreateLakeFormationOptInCommand extends $Command
  .classBuilder<
    CreateLakeFormationOptInCommandInput,
    CreateLakeFormationOptInCommandOutput,
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
  .s("AWSLakeFormation", "CreateLakeFormationOptIn", {})
  .n("LakeFormationClient", "CreateLakeFormationOptInCommand")
  .f(void 0, void 0)
  .ser(se_CreateLakeFormationOptInCommand)
  .de(de_CreateLakeFormationOptInCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLakeFormationOptInRequest;
      output: {};
    };
    sdk: {
      input: CreateLakeFormationOptInCommandInput;
      output: CreateLakeFormationOptInCommandOutput;
    };
  };
}
