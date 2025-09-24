// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCatalogsRequest, GetCatalogsResponse } from "../models/models_2";
import { GetCatalogs } from "../schemas/schemas_15_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCatalogsCommand}.
 */
export interface GetCatalogsCommandInput extends GetCatalogsRequest {}
/**
 * @public
 *
 * The output of {@link GetCatalogsCommand}.
 */
export interface GetCatalogsCommandOutput extends GetCatalogsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all catalogs defined in a catalog in the Glue Data Catalog. For a Redshift-federated catalog use case, this operation returns the list of catalogs mapped to Redshift databases in the Redshift namespace catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCatalogsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCatalogsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetCatalogsRequest
 *   ParentCatalogId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Recursive: true || false,
 *   IncludeRoot: true || false,
 * };
 * const command = new GetCatalogsCommand(input);
 * const response = await client.send(command);
 * // { // GetCatalogsResponse
 * //   CatalogList: [ // CatalogList // required
 * //     { // Catalog
 * //       CatalogId: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       ResourceArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Parameters: { // ParametersMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       TargetRedshiftCatalog: { // TargetRedshiftCatalog
 * //         CatalogArn: "STRING_VALUE", // required
 * //       },
 * //       FederatedCatalog: { // FederatedCatalog
 * //         Identifier: "STRING_VALUE",
 * //         ConnectionName: "STRING_VALUE",
 * //         ConnectionType: "STRING_VALUE",
 * //       },
 * //       CatalogProperties: { // CatalogPropertiesOutput
 * //         DataLakeAccessProperties: { // DataLakeAccessPropertiesOutput
 * //           DataLakeAccess: true || false,
 * //           DataTransferRole: "STRING_VALUE",
 * //           KmsKey: "STRING_VALUE",
 * //           ManagedWorkgroupName: "STRING_VALUE",
 * //           ManagedWorkgroupStatus: "STRING_VALUE",
 * //           RedshiftDatabaseName: "STRING_VALUE",
 * //           StatusMessage: "STRING_VALUE",
 * //           CatalogType: "STRING_VALUE",
 * //         },
 * //         IcebergOptimizationProperties: { // IcebergOptimizationPropertiesOutput
 * //           RoleArn: "STRING_VALUE",
 * //           Compaction: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           Retention: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           OrphanFileDeletion: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           LastUpdatedTime: new Date("TIMESTAMP"),
 * //         },
 * //         CustomProperties: "<ParametersMap>",
 * //       },
 * //       CreateTableDefaultPermissions: [ // PrincipalPermissionsList
 * //         { // PrincipalPermissions
 * //           Principal: { // DataLakePrincipal
 * //             DataLakePrincipalIdentifier: "STRING_VALUE",
 * //           },
 * //           Permissions: [ // PermissionList
 * //             "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS",
 * //           ],
 * //         },
 * //       ],
 * //       CreateDatabaseDefaultPermissions: [
 * //         {
 * //           Principal: {
 * //             DataLakePrincipalIdentifier: "STRING_VALUE",
 * //           },
 * //           Permissions: [
 * //             "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS",
 * //           ],
 * //         },
 * //       ],
 * //       AllowFullTableExternalDataAccess: "True" || "False",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCatalogsCommandInput - {@link GetCatalogsCommandInput}
 * @returns {@link GetCatalogsCommandOutput}
 * @see {@link GetCatalogsCommandInput} for command's `input` shape.
 * @see {@link GetCatalogsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 *
 * @public
 */
export class GetCatalogsCommand extends $Command
  .classBuilder<
    GetCatalogsCommandInput,
    GetCatalogsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetCatalogs", {})
  .n("GlueClient", "GetCatalogsCommand")
  .sc(GetCatalogs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCatalogsRequest;
      output: GetCatalogsResponse;
    };
    sdk: {
      input: GetCatalogsCommandInput;
      output: GetCatalogsCommandOutput;
    };
  };
}
