// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  GetTemporaryGluePartitionCredentialsRequest,
  GetTemporaryGluePartitionCredentialsResponse,
} from "../models/models_0";
import {
  de_GetTemporaryGluePartitionCredentialsCommand,
  se_GetTemporaryGluePartitionCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTemporaryGluePartitionCredentialsCommand}.
 */
export interface GetTemporaryGluePartitionCredentialsCommandInput extends GetTemporaryGluePartitionCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetTemporaryGluePartitionCredentialsCommand}.
 */
export interface GetTemporaryGluePartitionCredentialsCommandOutput
  extends GetTemporaryGluePartitionCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition.  Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetTemporaryGluePartitionCredentialsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetTemporaryGluePartitionCredentialsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetTemporaryGluePartitionCredentialsRequest
 *   TableArn: "STRING_VALUE", // required
 *   Partition: { // PartitionValueList
 *     Values: [ // ValueStringList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Permissions: [ // PermissionList
 *     "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION" || "CREATE_LF_TAG_EXPRESSION",
 *   ],
 *   DurationSeconds: Number("int"),
 *   AuditContext: { // AuditContext
 *     AdditionalAuditContext: "STRING_VALUE",
 *   },
 *   SupportedPermissionTypes: [ // PermissionTypeList
 *     "COLUMN_PERMISSION" || "CELL_FILTER_PERMISSION" || "NESTED_PERMISSION" || "NESTED_CELL_PERMISSION",
 *   ],
 * };
 * const command = new GetTemporaryGluePartitionCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetTemporaryGluePartitionCredentialsResponse
 * //   AccessKeyId: "STRING_VALUE",
 * //   SecretAccessKey: "STRING_VALUE",
 * //   SessionToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTemporaryGluePartitionCredentialsCommandInput - {@link GetTemporaryGluePartitionCredentialsCommandInput}
 * @returns {@link GetTemporaryGluePartitionCredentialsCommandOutput}
 * @see {@link GetTemporaryGluePartitionCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetTemporaryGluePartitionCredentialsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetTemporaryGluePartitionCredentialsCommand extends $Command
  .classBuilder<
    GetTemporaryGluePartitionCredentialsCommandInput,
    GetTemporaryGluePartitionCredentialsCommandOutput,
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
  .s("AWSLakeFormation", "GetTemporaryGluePartitionCredentials", {})
  .n("LakeFormationClient", "GetTemporaryGluePartitionCredentialsCommand")
  .f(void 0, void 0)
  .ser(se_GetTemporaryGluePartitionCredentialsCommand)
  .de(de_GetTemporaryGluePartitionCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemporaryGluePartitionCredentialsRequest;
      output: GetTemporaryGluePartitionCredentialsResponse;
    };
    sdk: {
      input: GetTemporaryGluePartitionCredentialsCommandInput;
      output: GetTemporaryGluePartitionCredentialsCommandOutput;
    };
  };
}
