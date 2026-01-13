// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { UpdateCatalogRequest, UpdateCatalogResponse } from "../models/models_2";
import { UpdateCatalog$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCatalogCommand}.
 */
export interface UpdateCatalogCommandInput extends UpdateCatalogRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCatalogCommand}.
 */
export interface UpdateCatalogCommandOutput extends UpdateCatalogResponse, __MetadataBearer {}

/**
 * <p>Updates an existing catalog's properties in the Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateCatalogCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateCatalogCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateCatalogRequest
 *   CatalogId: "STRING_VALUE", // required
 *   CatalogInput: { // CatalogInput
 *     Description: "STRING_VALUE",
 *     FederatedCatalog: { // FederatedCatalog
 *       Identifier: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *       ConnectionType: "STRING_VALUE",
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
 *       IcebergOptimizationProperties: { // IcebergOptimizationProperties
 *         RoleArn: "STRING_VALUE",
 *         Compaction: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         Retention: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         OrphanFileDeletion: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       CustomProperties: "<ParametersMap>",
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
 * };
 * const command = new UpdateCatalogCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCatalogCommandInput - {@link UpdateCatalogCommandInput}
 * @returns {@link UpdateCatalogCommandOutput}
 * @see {@link UpdateCatalogCommandInput} for command's `input` shape.
 * @see {@link UpdateCatalogCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateCatalogCommand extends $Command
  .classBuilder<
    UpdateCatalogCommandInput,
    UpdateCatalogCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateCatalog", {})
  .n("GlueClient", "UpdateCatalogCommand")
  .sc(UpdateCatalog$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCatalogRequest;
      output: {};
    };
    sdk: {
      input: UpdateCatalogCommandInput;
      output: UpdateCatalogCommandOutput;
    };
  };
}
