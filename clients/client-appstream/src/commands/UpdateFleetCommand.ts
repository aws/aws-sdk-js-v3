// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFleetRequest, UpdateFleetResult } from "../models/models_0";
import { UpdateFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFleetCommand}.
 */
export interface UpdateFleetCommandInput extends UpdateFleetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFleetCommand}.
 */
export interface UpdateFleetCommandOutput extends UpdateFleetResult, __MetadataBearer {}

/**
 * Updates the specified fleet.
 *
 * If the fleet is in the `STOPPED` state, you can update any attribute except the fleet name.
 *
 * If the fleet is in the `RUNNING` state, you can update the following based on the fleet type:
 *
 * - Always-On and On-Demand fleet types
 *
 *   You can update the `DisplayName`, `ComputeCapacity`, `ImageARN`, `ImageName`, `IdleDisconnectTimeoutInSeconds`, and `DisconnectTimeoutInSeconds` attributes.
 * - Elastic fleet type
 *
 *   You can update the `DisplayName`, `IdleDisconnectTimeoutInSeconds`, `DisconnectTimeoutInSeconds`, `MaxConcurrentSessions`, `SessionScriptS3Location` and `UsbDeviceFilterStrings` attributes.
 *
 * If the fleet is in the `STARTING` or `STOPPED` state, you can't update it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // UpdateFleetRequest
 *   ImageName: "STRING_VALUE",
 *   ImageArn: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   InstanceType: "STRING_VALUE",
 *   ComputeCapacity: { // ComputeCapacity
 *     DesiredInstances: Number("int"),
 *     DesiredSessions: Number("int"),
 *   },
 *   VpcConfig: { // VpcConfig
 *     SubnetIds: [ // SubnetIdList
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxUserDurationInSeconds: Number("int"),
 *   DisconnectTimeoutInSeconds: Number("int"),
 *   DeleteVpcConfig: true || false,
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   EnableDefaultInternetAccess: true || false,
 *   DomainJoinInfo: { // DomainJoinInfo
 *     DirectoryName: "STRING_VALUE",
 *     OrganizationalUnitDistinguishedName: "STRING_VALUE",
 *   },
 *   IdleDisconnectTimeoutInSeconds: Number("int"),
 *   AttributesToDelete: [ // FleetAttributes
 *     "VPC_CONFIGURATION" || "VPC_CONFIGURATION_SECURITY_GROUP_IDS" || "DOMAIN_JOIN_INFO" || "IAM_ROLE_ARN" || "USB_DEVICE_FILTER_STRINGS" || "SESSION_SCRIPT_S3_LOCATION" || "MAX_SESSIONS_PER_INSTANCE" || "VOLUME_CONFIGURATION",
 *   ],
 *   IamRoleArn: "STRING_VALUE",
 *   StreamView: "APP" || "DESKTOP",
 *   Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "WINDOWS_SERVER_2025" || "WINDOWS_11" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8" || "UBUNTU_PRO_2404",
 *   MaxConcurrentSessions: Number("int"),
 *   UsbDeviceFilterStrings: [ // UsbDeviceFilterStrings
 *     "STRING_VALUE",
 *   ],
 *   SessionScriptS3Location: { // S3Location
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   MaxSessionsPerInstance: Number("int"),
 *   RootVolumeConfig: { // VolumeConfig
 *     VolumeSizeInGb: Number("int"),
 *   },
 *   DisableIMDSV1: true || false,
 * };
 * const command = new UpdateFleetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFleetResult
 * //   Fleet: { // Fleet
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     DisplayName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ImageName: "STRING_VALUE",
 * //     ImageArn: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE", // required
 * //     FleetType: "ALWAYS_ON" || "ON_DEMAND" || "ELASTIC",
 * //     ComputeCapacityStatus: { // ComputeCapacityStatus
 * //       Desired: Number("int"), // required
 * //       Running: Number("int"),
 * //       InUse: Number("int"),
 * //       Available: Number("int"),
 * //       DesiredUserSessions: Number("int"),
 * //       AvailableUserSessions: Number("int"),
 * //       ActiveUserSessions: Number("int"),
 * //       ActualUserSessions: Number("int"),
 * //       Draining: Number("int"),
 * //       DrainModeActiveUserSessions: Number("int"),
 * //       DrainModeUnusedUserSessions: Number("int"),
 * //     },
 * //     MaxUserDurationInSeconds: Number("int"),
 * //     DisconnectTimeoutInSeconds: Number("int"),
 * //     State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED", // required
 * //     VpcConfig: { // VpcConfig
 * //       SubnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     FleetErrors: [ // FleetErrors
 * //       { // FleetError
 * //         ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR" || "VALIDATION_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     EnableDefaultInternetAccess: true || false,
 * //     DomainJoinInfo: { // DomainJoinInfo
 * //       DirectoryName: "STRING_VALUE",
 * //       OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //     },
 * //     IdleDisconnectTimeoutInSeconds: Number("int"),
 * //     IamRoleArn: "STRING_VALUE",
 * //     StreamView: "APP" || "DESKTOP",
 * //     Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "WINDOWS_SERVER_2025" || "WINDOWS_11" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8" || "UBUNTU_PRO_2404",
 * //     MaxConcurrentSessions: Number("int"),
 * //     UsbDeviceFilterStrings: [ // UsbDeviceFilterStrings
 * //       "STRING_VALUE",
 * //     ],
 * //     SessionScriptS3Location: { // S3Location
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     MaxSessionsPerInstance: Number("int"),
 * //     RootVolumeConfig: { // VolumeConfig
 * //       VolumeSizeInGb: Number("int"),
 * //     },
 * //     DisableIMDSV1: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFleetCommandInput - {@link UpdateFleetCommandInput}
 * @returns {@link UpdateFleetCommandOutput}
 * @see {@link UpdateFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *
 * The image can't be updated because it's not compatible for updates.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *
 * The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Indicates an incorrect combination of parameters, or a missing parameter.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The specified role is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested limit exceeds the permitted limit for an account.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link RequestLimitExceededException} (client fault)
 *
 * WorkSpaces Applications can’t process the request right now because the Describe calls from your AWS account are being throttled by Amazon EC2. Try again later.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *
 * The specified resource exists and is not in use, but isn't available.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class UpdateFleetCommand extends command<UpdateFleetCommandInput, UpdateFleetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFleet",
  UpdateFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFleetRequest;
      output: UpdateFleetResult;
    };
    sdk: {
      input: UpdateFleetCommandInput;
      output: UpdateFleetCommandOutput;
    };
  };
}
