// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkspacesPoolRequest, UpdateWorkspacesPoolResult } from "../models/models_1";
import { de_UpdateWorkspacesPoolCommand, se_UpdateWorkspacesPoolCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspacesPoolCommand}.
 */
export interface UpdateWorkspacesPoolCommandInput extends UpdateWorkspacesPoolRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspacesPoolCommand}.
 */
export interface UpdateWorkspacesPoolCommandOutput extends UpdateWorkspacesPoolResult, __MetadataBearer {}

/**
 * <p>Updates the specified pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspacesPoolCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspacesPoolCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // UpdateWorkspacesPoolRequest
 *   PoolId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   BundleId: "STRING_VALUE",
 *   DirectoryId: "STRING_VALUE",
 *   Capacity: { // Capacity
 *     DesiredUserSessions: Number("int"), // required
 *   },
 *   ApplicationSettings: { // ApplicationSettingsRequest
 *     Status: "DISABLED" || "ENABLED", // required
 *     SettingsGroup: "STRING_VALUE",
 *   },
 *   TimeoutSettings: { // TimeoutSettings
 *     DisconnectTimeoutInSeconds: Number("int"),
 *     IdleDisconnectTimeoutInSeconds: Number("int"),
 *     MaxUserDurationInSeconds: Number("int"),
 *   },
 * };
 * const command = new UpdateWorkspacesPoolCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkspacesPoolResult
 * //   WorkspacesPool: { // WorkspacesPool
 * //     PoolId: "STRING_VALUE", // required
 * //     PoolArn: "STRING_VALUE", // required
 * //     CapacityStatus: { // CapacityStatus
 * //       AvailableUserSessions: Number("int"), // required
 * //       DesiredUserSessions: Number("int"), // required
 * //       ActualUserSessions: Number("int"), // required
 * //       ActiveUserSessions: Number("int"), // required
 * //     },
 * //     PoolName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     State: "CREATING" || "DELETING" || "RUNNING" || "STARTING" || "STOPPED" || "STOPPING" || "UPDATING", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     BundleId: "STRING_VALUE", // required
 * //     DirectoryId: "STRING_VALUE", // required
 * //     Errors: [ // WorkspacesPoolErrors
 * //       { // WorkspacesPoolError
 * //         ErrorCode: "IAM_SERVICE_ROLE_IS_MISSING" || "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "WORKSPACES_POOL_STOPPED" || "WORKSPACES_POOL_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR" || "DOMAIN_JOIN_ERROR_SECRET_ACTION_PERMISSION_IS_MISSING" || "DOMAIN_JOIN_ERROR_SECRET_DECRYPTION_FAILURE" || "DOMAIN_JOIN_ERROR_SECRET_STATE_INVALID" || "DOMAIN_JOIN_ERROR_SECRET_NOT_FOUND" || "DOMAIN_JOIN_ERROR_SECRET_VALUE_KEY_NOT_FOUND" || "DOMAIN_JOIN_ERROR_SECRET_INVALID" || "BUNDLE_NOT_FOUND" || "DIRECTORY_NOT_FOUND" || "INSUFFICIENT_PERMISSIONS_ERROR" || "DEFAULT_OU_IS_MISSING",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ApplicationSettings: { // ApplicationSettingsResponse
 * //       Status: "DISABLED" || "ENABLED", // required
 * //       SettingsGroup: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //     },
 * //     TimeoutSettings: { // TimeoutSettings
 * //       DisconnectTimeoutInSeconds: Number("int"),
 * //       IdleDisconnectTimeoutInSeconds: Number("int"),
 * //       MaxUserDurationInSeconds: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkspacesPoolCommandInput - {@link UpdateWorkspacesPoolCommandInput}
 * @returns {@link UpdateWorkspacesPoolCommandOutput}
 * @see {@link UpdateWorkspacesPoolCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspacesPoolCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class UpdateWorkspacesPoolCommand extends $Command
  .classBuilder<
    UpdateWorkspacesPoolCommandInput,
    UpdateWorkspacesPoolCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "UpdateWorkspacesPool", {})
  .n("WorkSpacesClient", "UpdateWorkspacesPoolCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkspacesPoolCommand)
  .de(de_UpdateWorkspacesPoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspacesPoolRequest;
      output: UpdateWorkspacesPoolResult;
    };
    sdk: {
      input: UpdateWorkspacesPoolCommandInput;
      output: UpdateWorkspacesPoolCommandOutput;
    };
  };
}
