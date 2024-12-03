// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateDatabaseRequest, UpdateDatabaseResponse } from "../models/models_3";
import { de_UpdateDatabaseCommand, se_UpdateDatabaseCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatabaseCommand}.
 */
export interface UpdateDatabaseCommandInput extends UpdateDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatabaseCommand}.
 */
export interface UpdateDatabaseCommandOutput extends UpdateDatabaseResponse, __MetadataBearer {}

/**
 * <p>Updates an existing database definition in a Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateDatabaseCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateDatabaseCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateDatabaseRequest
 *   CatalogId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
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
 *     },
 *   },
 * };
 * const command = new UpdateDatabaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDatabaseCommandInput - {@link UpdateDatabaseCommandInput}
 * @returns {@link UpdateDatabaseCommandOutput}
 * @see {@link UpdateDatabaseCommandInput} for command's `input` shape.
 * @see {@link UpdateDatabaseCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class UpdateDatabaseCommand extends $Command
  .classBuilder<
    UpdateDatabaseCommandInput,
    UpdateDatabaseCommandOutput,
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
  .s("AWSGlue", "UpdateDatabase", {})
  .n("GlueClient", "UpdateDatabaseCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDatabaseCommand)
  .de(de_UpdateDatabaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatabaseRequest;
      output: {};
    };
    sdk: {
      input: UpdateDatabaseCommandInput;
      output: UpdateDatabaseCommandOutput;
    };
  };
}
