// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFleetRequest, UpdateFleetResult } from "../models/models_0";
import { de_UpdateFleetCommand, se_UpdateFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the specified fleet.</p>
 *          <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except
 *             the fleet name.</p>
 *          <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based
 *             on the fleet type:</p>
 *          <ul>
 *             <li>
 *                <p>Always-On and On-Demand fleet types</p>
 *                <p>You can update the  <code>DisplayName</code>, <code>ComputeCapacity</code>,
 *                         <code>ImageARN</code>, <code>ImageName</code>,
 *                         <code>IdleDisconnectTimeoutInSeconds</code>, and
 *                         <code>DisconnectTimeoutInSeconds</code> attributes.</p>
 *             </li>
 *             <li>
 *                <p>Elastic fleet type</p>
 *                <p>You can update the  <code>DisplayName</code>,
 *                         <code>IdleDisconnectTimeoutInSeconds</code>,
 *                     <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code>
 *                     and <code>UsbDeviceFilterStrings</code> attributes.</p>
 *             </li>
 *          </ul>
 *          <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
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
 *     "VPC_CONFIGURATION" || "VPC_CONFIGURATION_SECURITY_GROUP_IDS" || "DOMAIN_JOIN_INFO" || "IAM_ROLE_ARN" || "USB_DEVICE_FILTER_STRINGS" || "SESSION_SCRIPT_S3_LOCATION" || "MAX_SESSIONS_PER_INSTANCE",
 *   ],
 *   IamRoleArn: "STRING_VALUE",
 *   StreamView: "APP" || "DESKTOP",
 *   Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2",
 *   MaxConcurrentSessions: Number("int"),
 *   UsbDeviceFilterStrings: [ // UsbDeviceFilterStrings
 *     "STRING_VALUE",
 *   ],
 *   SessionScriptS3Location: { // S3Location
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   MaxSessionsPerInstance: Number("int"),
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
 * //         ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
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
 * //     Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2",
 * //     MaxConcurrentSessions: Number("int"),
 * //     UsbDeviceFilterStrings: [ // UsbDeviceFilterStrings
 * //       "STRING_VALUE",
 * //     ],
 * //     SessionScriptS3Location: { // S3Location
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     MaxSessionsPerInstance: Number("int"),
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
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The specified role is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link RequestLimitExceededException} (client fault)
 *  <p>AppStream 2.0 can’t process the request right now because the Describe calls from your AWS account are being throttled by Amazon EC2. Try again later.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *  <p>The specified resource exists and is not in use, but isn't available.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class UpdateFleetCommand extends $Command
  .classBuilder<
    UpdateFleetCommandInput,
    UpdateFleetCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "UpdateFleet", {})
  .n("AppStreamClient", "UpdateFleetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFleetCommand)
  .de(de_UpdateFleetCommand)
  .build() {}
