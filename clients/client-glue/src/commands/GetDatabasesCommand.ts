// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDatabasesRequest, GetDatabasesResponse } from "../models/models_2";
import { de_GetDatabasesCommand, se_GetDatabasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDatabasesCommand}.
 */
export interface GetDatabasesCommandInput extends GetDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link GetDatabasesCommand}.
 */
export interface GetDatabasesCommandOutput extends GetDatabasesResponse, __MetadataBearer {}

/**
 * <p>Retrieves all databases defined in a given Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDatabasesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDatabasesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDatabasesRequest
 *   CatalogId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ResourceShareType: "FOREIGN" || "ALL" || "FEDERATED",
 *   AttributesToGet: [ // DatabaseAttributesList
 *     "NAME",
 *   ],
 * };
 * const command = new GetDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // GetDatabasesResponse
 * //   DatabaseList: [ // DatabaseList // required
 * //     { // Database
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       LocationUri: "STRING_VALUE",
 * //       Parameters: { // ParametersMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"),
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
 * //       TargetDatabase: { // DatabaseIdentifier
 * //         CatalogId: "STRING_VALUE",
 * //         DatabaseName: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       CatalogId: "STRING_VALUE",
 * //       FederatedDatabase: { // FederatedDatabase
 * //         Identifier: "STRING_VALUE",
 * //         ConnectionName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDatabasesCommandInput - {@link GetDatabasesCommandInput}
 * @returns {@link GetDatabasesCommandOutput}
 * @see {@link GetDatabasesCommandInput} for command's `input` shape.
 * @see {@link GetDatabasesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class GetDatabasesCommand extends $Command
  .classBuilder<
    GetDatabasesCommandInput,
    GetDatabasesCommandOutput,
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
  .s("AWSGlue", "GetDatabases", {})
  .n("GlueClient", "GetDatabasesCommand")
  .f(void 0, void 0)
  .ser(se_GetDatabasesCommand)
  .de(de_GetDatabasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatabasesRequest;
      output: GetDatabasesResponse;
    };
    sdk: {
      input: GetDatabasesCommandInput;
      output: GetDatabasesCommandOutput;
    };
  };
}
