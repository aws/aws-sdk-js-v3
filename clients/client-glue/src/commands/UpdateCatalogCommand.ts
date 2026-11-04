// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCatalogRequest, UpdateCatalogResponse } from "../models/models_3";
import { UpdateCatalog$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an existing catalog's properties in the Glue Data Catalog.
 *
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
 *     OverwriteChildResourcePermissionsWithDefault: "Accept" || "Deny",
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link FederationSourceException} (client fault)
 *
 * A federation source failed.
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateCatalogCommand extends command<UpdateCatalogCommandInput, UpdateCatalogCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCatalog",
  UpdateCatalog$
) {
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
