// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFleetsRequest, DescribeFleetsResult } from "../models/models_0";
import { DescribeFleets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetsCommand}.
 */
export interface DescribeFleetsCommandInput extends DescribeFleetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetsCommand}.
 */
export interface DescribeFleetsCommandOutput extends DescribeFleetsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeFleetsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeFleetsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeFleetsRequest
 *   Names: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetsResult
 * //   Fleets: [ // FleetList
 * //     { // Fleet
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ImageName: "STRING_VALUE",
 * //       ImageArn: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE", // required
 * //       FleetType: "ALWAYS_ON" || "ON_DEMAND" || "ELASTIC",
 * //       ComputeCapacityStatus: { // ComputeCapacityStatus
 * //         Desired: Number("int"), // required
 * //         Running: Number("int"),
 * //         InUse: Number("int"),
 * //         Available: Number("int"),
 * //         DesiredUserSessions: Number("int"),
 * //         AvailableUserSessions: Number("int"),
 * //         ActiveUserSessions: Number("int"),
 * //         ActualUserSessions: Number("int"),
 * //       },
 * //       MaxUserDurationInSeconds: Number("int"),
 * //       DisconnectTimeoutInSeconds: Number("int"),
 * //       State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED", // required
 * //       VpcConfig: { // VpcConfig
 * //         SubnetIds: [ // SubnetIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       FleetErrors: [ // FleetErrors
 * //         { // FleetError
 * //           ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EnableDefaultInternetAccess: true || false,
 * //       DomainJoinInfo: { // DomainJoinInfo
 * //         DirectoryName: "STRING_VALUE",
 * //         OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //       },
 * //       IdleDisconnectTimeoutInSeconds: Number("int"),
 * //       IamRoleArn: "STRING_VALUE",
 * //       StreamView: "APP" || "DESKTOP",
 * //       Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8",
 * //       MaxConcurrentSessions: Number("int"),
 * //       UsbDeviceFilterStrings: [ // UsbDeviceFilterStrings
 * //         "STRING_VALUE",
 * //       ],
 * //       SessionScriptS3Location: { // S3Location
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       MaxSessionsPerInstance: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetsCommandInput - {@link DescribeFleetsCommandInput}
 * @returns {@link DescribeFleetsCommandOutput}
 * @see {@link DescribeFleetsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeFleetsCommand extends $Command
  .classBuilder<
    DescribeFleetsCommandInput,
    DescribeFleetsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DescribeFleets", {})
  .n("AppStreamClient", "DescribeFleetsCommand")
  .sc(DescribeFleets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetsRequest;
      output: DescribeFleetsResult;
    };
    sdk: {
      input: DescribeFleetsCommandInput;
      output: DescribeFleetsCommandOutput;
    };
  };
}
