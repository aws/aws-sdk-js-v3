// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { GetDataLakeSettingsRequest, GetDataLakeSettingsResponse } from "../models/models_0";
import { GetDataLakeSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataLakeSettingsCommand}.
 */
export interface GetDataLakeSettingsCommandInput extends GetDataLakeSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataLakeSettingsCommand}.
 */
export interface GetDataLakeSettingsCommandOutput extends GetDataLakeSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetDataLakeSettingsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetDataLakeSettingsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetDataLakeSettingsRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new GetDataLakeSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataLakeSettingsResponse
 * //   DataLakeSettings: { // DataLakeSettings
 * //     DataLakeAdmins: [ // DataLakePrincipalList
 * //       { // DataLakePrincipal
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReadOnlyAdmins: [
 * //       {
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreateDatabaseDefaultPermissions: [ // PrincipalPermissionsList
 * //       { // PrincipalPermissions
 * //         Principal: {
 * //           DataLakePrincipalIdentifier: "STRING_VALUE",
 * //         },
 * //         Permissions: [ // PermissionList
 * //           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
 * //         ],
 * //       },
 * //     ],
 * //     CreateTableDefaultPermissions: [
 * //       {
 * //         Principal: {
 * //           DataLakePrincipalIdentifier: "STRING_VALUE",
 * //         },
 * //         Permissions: [
 * //           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
 * //         ],
 * //       },
 * //     ],
 * //     Parameters: { // ParametersMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     TrustedResourceOwners: [ // TrustedResourceOwners
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowExternalDataFiltering: true || false,
 * //     AllowFullTableExternalDataAccess: true || false,
 * //     ExternalDataFilteringAllowList: [
 * //       {
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AuthorizedSessionTagValueList: [ // AuthorizedSessionTagValueList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataLakeSettingsCommandInput - {@link GetDataLakeSettingsCommandInput}
 * @returns {@link GetDataLakeSettingsCommandOutput}
 * @see {@link GetDataLakeSettingsCommandInput} for command's `input` shape.
 * @see {@link GetDataLakeSettingsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
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
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class GetDataLakeSettingsCommand extends $Command
  .classBuilder<
    GetDataLakeSettingsCommandInput,
    GetDataLakeSettingsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "GetDataLakeSettings", {})
  .n("LakeFormationClient", "GetDataLakeSettingsCommand")
  .sc(GetDataLakeSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataLakeSettingsRequest;
      output: GetDataLakeSettingsResponse;
    };
    sdk: {
      input: GetDataLakeSettingsCommandInput;
      output: GetDataLakeSettingsCommandOutput;
    };
  };
}
