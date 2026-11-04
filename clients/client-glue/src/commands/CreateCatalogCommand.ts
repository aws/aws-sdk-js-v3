// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCatalogRequest } from "../models/models_0";
import type { CreateCatalogResponse } from "../models/models_1";
import { CreateCatalog$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new catalog in the Glue Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCatalogCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCatalogCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateCatalogRequest
 *   Name: "STRING_VALUE", // required
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link FederatedResourceAlreadyExistsException} (client fault)
 *
 * A federated resource already exists.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateCatalogCommand extends command<CreateCatalogCommandInput, CreateCatalogCommandOutput>(
  _ep0,
  _mw0,
  "CreateCatalog",
  CreateCatalog$
) {
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
