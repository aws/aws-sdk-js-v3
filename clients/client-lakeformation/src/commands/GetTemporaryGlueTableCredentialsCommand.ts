// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetTemporaryGlueTableCredentialsRequest, GetTemporaryGlueTableCredentialsResponse } from "../models/models_0";
import {
  de_GetTemporaryGlueTableCredentialsCommand,
  se_GetTemporaryGlueTableCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTemporaryGlueTableCredentialsCommand}.
 */
export interface GetTemporaryGlueTableCredentialsCommandInput extends GetTemporaryGlueTableCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetTemporaryGlueTableCredentialsCommand}.
 */
export interface GetTemporaryGlueTableCredentialsCommandOutput
  extends GetTemporaryGlueTableCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.</p>
 *          <p>To call this API, the role that the service assumes must have <code>lakeformation:GetDataAccess</code> permission on the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetTemporaryGlueTableCredentialsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetTemporaryGlueTableCredentialsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetTemporaryGlueTableCredentialsRequest
 *   TableArn: "STRING_VALUE", // required
 *   Permissions: [ // PermissionList
 *     "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION" || "CREATE_CATALOG" || "SUPER_USER",
 *   ],
 *   DurationSeconds: Number("int"),
 *   AuditContext: { // AuditContext
 *     AdditionalAuditContext: "STRING_VALUE",
 *   },
 *   SupportedPermissionTypes: [ // PermissionTypeList
 *     "COLUMN_PERMISSION" || "CELL_FILTER_PERMISSION" || "NESTED_PERMISSION" || "NESTED_CELL_PERMISSION",
 *   ],
 *   S3Path: "STRING_VALUE",
 *   QuerySessionContext: { // QuerySessionContext
 *     QueryId: "STRING_VALUE",
 *     QueryStartTime: new Date("TIMESTAMP"),
 *     ClusterId: "STRING_VALUE",
 *     QueryAuthorizationId: "STRING_VALUE",
 *     AdditionalContext: { // AdditionalContextMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new GetTemporaryGlueTableCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetTemporaryGlueTableCredentialsResponse
 * //   AccessKeyId: "STRING_VALUE",
 * //   SecretAccessKey: "STRING_VALUE",
 * //   SessionToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * //   VendedS3Path: [ // PathStringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTemporaryGlueTableCredentialsCommandInput - {@link GetTemporaryGlueTableCredentialsCommandInput}
 * @returns {@link GetTemporaryGlueTableCredentialsCommandOutput}
 * @see {@link GetTemporaryGlueTableCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetTemporaryGlueTableCredentialsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link PermissionTypeMismatchException} (client fault)
 *  <p>The engine does not support filtering data based on the enforced permissions. For example, if you call the <code>GetTemporaryGlueTableCredentials</code> operation with <code>SupportedPermissionType</code> equal to <code>ColumnPermission</code>, but cell-level permissions exist on the table, this exception is thrown.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class GetTemporaryGlueTableCredentialsCommand extends $Command
  .classBuilder<
    GetTemporaryGlueTableCredentialsCommandInput,
    GetTemporaryGlueTableCredentialsCommandOutput,
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
  .s("AWSLakeFormation", "GetTemporaryGlueTableCredentials", {})
  .n("LakeFormationClient", "GetTemporaryGlueTableCredentialsCommand")
  .f(void 0, void 0)
  .ser(se_GetTemporaryGlueTableCredentialsCommand)
  .de(de_GetTemporaryGlueTableCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemporaryGlueTableCredentialsRequest;
      output: GetTemporaryGlueTableCredentialsResponse;
    };
    sdk: {
      input: GetTemporaryGlueTableCredentialsCommandInput;
      output: GetTemporaryGlueTableCredentialsCommandOutput;
    };
  };
}
