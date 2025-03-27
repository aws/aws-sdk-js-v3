// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateCatalogRequest, CreateCatalogResponse } from "../models/models_1";
import { de_CreateCatalogCommand, se_CreateCatalogCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCatalogCommand}.
 */
export interface CreateCatalogCommandInput extends CreateCatalogRequest {}
/**
 * @public
 *
 * The output of {@link CreateCatalogCommand}.
 */
export interface CreateCatalogCommandOutput extends CreateCatalogResponse, __MetadataBearer {}

/**
 * <p>Creates a new catalog in the Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCatalogCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCatalogCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateCatalogRequest
 *   Name: "STRING_VALUE", // required
 *   CatalogInput: { // CatalogInput
 *     Description: "STRING_VALUE",
 *     FederatedCatalog: { // FederatedCatalog
 *       Identifier: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *     },
 *     Parameters: { // ParametersMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TargetRedshiftCatalog: { // TargetRedshiftCatalog
 *       CatalogArn: "STRING_VALUE", // required
 *     },
 *     CatalogProperties: { // CatalogProperties
 *       DataLakeAccessProperties: { // DataLakeAccessProperties
 *         DataLakeAccess: true || false,
 *         DataTransferRole: "STRING_VALUE",
 *         KmsKey: "STRING_VALUE",
 *         CatalogType: "STRING_VALUE",
 *       },
 *       CustomProperties: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     CreateTableDefaultPermissions: [ // PrincipalPermissionsList
 *       { // PrincipalPermissions
 *         Principal: { // DataLakePrincipal
 *           DataLakePrincipalIdentifier: "STRING_VALUE",
 *         },
 *         Permissions: [ // PermissionList
 *           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS",
 *         ],
 *       },
 *     ],
 *     CreateDatabaseDefaultPermissions: [
 *       {
 *         Principal: {
 *           DataLakePrincipalIdentifier: "STRING_VALUE",
 *         },
 *         Permissions: [
 *           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS",
 *         ],
 *       },
 *     ],
 *     AllowFullTableExternalDataAccess: "True" || "False",
 *   },
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCatalogCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateCatalogCommandInput - {@link CreateCatalogCommandInput}
 * @returns {@link CreateCatalogCommandOutput}
 * @see {@link CreateCatalogCommandInput} for command's `input` shape.
 * @see {@link CreateCatalogCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link FederatedResourceAlreadyExistsException} (client fault)
 *  <p>A federated resource already exists.</p>
 *
 * @throws {@link FederationSourceException} (client fault)
 *  <p>A federation source failed.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateCatalogCommand extends $Command
  .classBuilder<
    CreateCatalogCommandInput,
    CreateCatalogCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "CreateCatalog", {})
  .n("GlueClient", "CreateCatalogCommand")
  .f(void 0, void 0)
  .ser(se_CreateCatalogCommand)
  .de(de_CreateCatalogCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCatalogRequest;
      output: {};
    };
    sdk: {
      input: CreateCatalogCommandInput;
      output: CreateCatalogCommandOutput;
    };
  };
}
