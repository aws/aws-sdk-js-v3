// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { PutDataLakeSettingsRequest, PutDataLakeSettingsResponse } from "../models/models_0";
import { de_PutDataLakeSettingsCommand, se_PutDataLakeSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDataLakeSettingsCommand}.
 */
export interface PutDataLakeSettingsCommandInput extends PutDataLakeSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutDataLakeSettingsCommand}.
 */
export interface PutDataLakeSettingsCommandOutput extends PutDataLakeSettingsResponse, __MetadataBearer {}

/**
 * <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p>
 *          <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, PutDataLakeSettingsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, PutDataLakeSettingsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // PutDataLakeSettingsRequest
 *   CatalogId: "STRING_VALUE",
 *   DataLakeSettings: { // DataLakeSettings
 *     DataLakeAdmins: [ // DataLakePrincipalList
 *       { // DataLakePrincipal
 *         DataLakePrincipalIdentifier: "STRING_VALUE",
 *       },
 *     ],
 *     ReadOnlyAdmins: [
 *       {
 *         DataLakePrincipalIdentifier: "STRING_VALUE",
 *       },
 *     ],
 *     CreateDatabaseDefaultPermissions: [ // PrincipalPermissionsList
 *       { // PrincipalPermissions
 *         Principal: {
 *           DataLakePrincipalIdentifier: "STRING_VALUE",
 *         },
 *         Permissions: [ // PermissionList
 *           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION",
 *         ],
 *       },
 *     ],
 *     CreateTableDefaultPermissions: [
 *       {
 *         Principal: {
 *           DataLakePrincipalIdentifier: "STRING_VALUE",
 *         },
 *         Permissions: [
 *           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION",
 *         ],
 *       },
 *     ],
 *     Parameters: { // ParametersMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TrustedResourceOwners: [ // TrustedResourceOwners
 *       "STRING_VALUE",
 *     ],
 *     AllowExternalDataFiltering: true || false,
 *     AllowFullTableExternalDataAccess: true || false,
 *     ExternalDataFilteringAllowList: [
 *       {
 *         DataLakePrincipalIdentifier: "STRING_VALUE",
 *       },
 *     ],
 *     AuthorizedSessionTagValueList: [ // AuthorizedSessionTagValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new PutDataLakeSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDataLakeSettingsCommandInput - {@link PutDataLakeSettingsCommandInput}
 * @returns {@link PutDataLakeSettingsCommandOutput}
 * @see {@link PutDataLakeSettingsCommandInput} for command's `input` shape.
 * @see {@link PutDataLakeSettingsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
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
 * @public
 */
export class PutDataLakeSettingsCommand extends $Command
  .classBuilder<
    PutDataLakeSettingsCommandInput,
    PutDataLakeSettingsCommandOutput,
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
  .s("AWSLakeFormation", "PutDataLakeSettings", {})
  .n("LakeFormationClient", "PutDataLakeSettingsCommand")
  .f(void 0, void 0)
  .ser(se_PutDataLakeSettingsCommand)
  .de(de_PutDataLakeSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDataLakeSettingsRequest;
      output: {};
    };
    sdk: {
      input: PutDataLakeSettingsCommandInput;
      output: PutDataLakeSettingsCommandOutput;
    };
  };
}
