// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { CreateDatabaseRequest, CreateDatabaseResponse } from "../models/models_0";
import { CreateDatabase } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatabaseCommand}.
 */
export interface CreateDatabaseCommandInput extends CreateDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatabaseCommand}.
 */
export interface CreateDatabaseCommandOutput extends CreateDatabaseResponse, __MetadataBearer {}

/**
 * <p>Creates a new database in a Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDatabaseCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDatabaseCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateDatabaseRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseInput: { // DatabaseInput
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     LocationUri: "STRING_VALUE",
 *     Parameters: { // ParametersMap
 *       "<keys>": "STRING_VALUE",
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
 *     TargetDatabase: { // DatabaseIdentifier
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *     },
 *     FederatedDatabase: { // FederatedDatabase
 *       Identifier: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *       ConnectionType: "STRING_VALUE",
 *     },
 *   },
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDatabaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateDatabaseCommandInput - {@link CreateDatabaseCommandInput}
 * @returns {@link CreateDatabaseCommandOutput}
 * @see {@link CreateDatabaseCommandInput} for command's `input` shape.
 * @see {@link CreateDatabaseCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link FederatedResourceAlreadyExistsException} (client fault)
 *  <p>A federated resource already exists.</p>
 *
 * @throws {@link FederationSourceException} (client fault)
 *  <p>A federation source failed.</p>
 *
 * @throws {@link FederationSourceRetryableException} (client fault)
 *  <p>A federation source failed, but the operation may be retried.</p>
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
export class CreateDatabaseCommand extends $Command
  .classBuilder<
    CreateDatabaseCommandInput,
    CreateDatabaseCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreateDatabase", {})
  .n("GlueClient", "CreateDatabaseCommand")
  .sc(CreateDatabase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatabaseRequest;
      output: {};
    };
    sdk: {
      input: CreateDatabaseCommandInput;
      output: CreateDatabaseCommandOutput;
    };
  };
}
