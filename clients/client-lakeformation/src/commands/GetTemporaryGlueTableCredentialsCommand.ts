// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTemporaryGlueTableCredentialsRequest,
  GetTemporaryGlueTableCredentialsResponse,
} from "../models/models_0";
import { GetTemporaryGlueTableCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetTemporaryGlueTableCredentialsCommandOutput extends GetTemporaryGlueTableCredentialsResponse, __MetadataBearer {}

/**
 * Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
 *
 * To call this API, the role that the service assumes must have `lakeformation:GetDataAccess` permission on the resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetTemporaryGlueTableCredentialsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetTemporaryGlueTableCredentialsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
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
 * @throws {@link PermissionTypeMismatchException} (client fault)
 *
 * The engine does not support filtering data based on the enforced permissions. For example, if you call the `GetTemporaryGlueTableCredentials` operation with `SupportedPermissionType` equal to `ColumnPermission`, but cell-level permissions exist on the table, this exception is thrown.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class GetTemporaryGlueTableCredentialsCommand extends command<GetTemporaryGlueTableCredentialsCommandInput, GetTemporaryGlueTableCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetTemporaryGlueTableCredentials",
  GetTemporaryGlueTableCredentials$
) {
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
