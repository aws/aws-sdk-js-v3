// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetFindingsRequest, GetFindingsResponse } from "../models/models_0";
import { de_GetFindingsCommand, se_GetFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandInput extends GetFindingsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandOutput extends GetFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes Amazon GuardDuty findings specified by finding IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetFindingsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FindingIds: [ // FindingIds // required
 *     "STRING_VALUE",
 *   ],
 *   SortCriteria: { // SortCriteria
 *     AttributeName: "STRING_VALUE",
 *     OrderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsResponse
 * //   Findings: [ // Findings // required
 * //     { // Finding
 * //       AccountId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Confidence: Number("double"),
 * //       CreatedAt: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       Id: "STRING_VALUE", // required
 * //       Partition: "STRING_VALUE",
 * //       Region: "STRING_VALUE", // required
 * //       Resource: { // Resource
 * //         AccessKeyDetails: { // AccessKeyDetails
 * //           AccessKeyId: "STRING_VALUE",
 * //           PrincipalId: "STRING_VALUE",
 * //           UserName: "STRING_VALUE",
 * //           UserType: "STRING_VALUE",
 * //         },
 * //         S3BucketDetails: [ // S3BucketDetails
 * //           { // S3BucketDetail
 * //             Arn: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //             Type: "STRING_VALUE",
 * //             CreatedAt: new Date("TIMESTAMP"),
 * //             Owner: { // Owner
 * //               Id: "STRING_VALUE",
 * //             },
 * //             Tags: [ // Tags
 * //               { // Tag
 * //                 Key: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             DefaultServerSideEncryption: { // DefaultServerSideEncryption
 * //               EncryptionType: "STRING_VALUE",
 * //               KmsMasterKeyArn: "STRING_VALUE",
 * //             },
 * //             PublicAccess: { // PublicAccess
 * //               PermissionConfiguration: { // PermissionConfiguration
 * //                 BucketLevelPermissions: { // BucketLevelPermissions
 * //                   AccessControlList: { // AccessControlList
 * //                     AllowsPublicReadAccess: true || false,
 * //                     AllowsPublicWriteAccess: true || false,
 * //                   },
 * //                   BucketPolicy: { // BucketPolicy
 * //                     AllowsPublicReadAccess: true || false,
 * //                     AllowsPublicWriteAccess: true || false,
 * //                   },
 * //                   BlockPublicAccess: { // BlockPublicAccess
 * //                     IgnorePublicAcls: true || false,
 * //                     RestrictPublicBuckets: true || false,
 * //                     BlockPublicAcls: true || false,
 * //                     BlockPublicPolicy: true || false,
 * //                   },
 * //                 },
 * //                 AccountLevelPermissions: { // AccountLevelPermissions
 * //                   BlockPublicAccess: {
 * //                     IgnorePublicAcls: true || false,
 * //                     RestrictPublicBuckets: true || false,
 * //                     BlockPublicAcls: true || false,
 * //                     BlockPublicPolicy: true || false,
 * //                   },
 * //                 },
 * //               },
 * //               EffectivePermission: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         InstanceDetails: { // InstanceDetails
 * //           AvailabilityZone: "STRING_VALUE",
 * //           IamInstanceProfile: { // IamInstanceProfile
 * //             Arn: "STRING_VALUE",
 * //             Id: "STRING_VALUE",
 * //           },
 * //           ImageDescription: "STRING_VALUE",
 * //           ImageId: "STRING_VALUE",
 * //           InstanceId: "STRING_VALUE",
 * //           InstanceState: "STRING_VALUE",
 * //           InstanceType: "STRING_VALUE",
 * //           OutpostArn: "STRING_VALUE",
 * //           LaunchTime: "STRING_VALUE",
 * //           NetworkInterfaces: [ // NetworkInterfaces
 * //             { // NetworkInterface
 * //               Ipv6Addresses: [ // Ipv6Addresses
 * //                 "STRING_VALUE",
 * //               ],
 * //               NetworkInterfaceId: "STRING_VALUE",
 * //               PrivateDnsName: "STRING_VALUE",
 * //               PrivateIpAddress: "STRING_VALUE",
 * //               PrivateIpAddresses: [ // PrivateIpAddresses
 * //                 { // PrivateIpAddressDetails
 * //                   PrivateDnsName: "STRING_VALUE",
 * //                   PrivateIpAddress: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               PublicDnsName: "STRING_VALUE",
 * //               PublicIp: "STRING_VALUE",
 * //               SecurityGroups: [ // SecurityGroups
 * //                 { // SecurityGroup
 * //                   GroupId: "STRING_VALUE",
 * //                   GroupName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               SubnetId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Platform: "STRING_VALUE",
 * //           ProductCodes: [ // ProductCodes
 * //             { // ProductCode
 * //               Code: "STRING_VALUE",
 * //               ProductType: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         EksClusterDetails: { // EksClusterDetails
 * //           Name: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           CreatedAt: new Date("TIMESTAMP"),
 * //         },
 * //         KubernetesDetails: { // KubernetesDetails
 * //           KubernetesUserDetails: { // KubernetesUserDetails
 * //             Username: "STRING_VALUE",
 * //             Uid: "STRING_VALUE",
 * //             Groups: [ // Groups
 * //               "STRING_VALUE",
 * //             ],
 * //             SessionName: [ // SessionNameList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           KubernetesWorkloadDetails: { // KubernetesWorkloadDetails
 * //             Name: "STRING_VALUE",
 * //             Type: "STRING_VALUE",
 * //             Uid: "STRING_VALUE",
 * //             Namespace: "STRING_VALUE",
 * //             HostNetwork: true || false,
 * //             Containers: [ // Containers
 * //               { // Container
 * //                 ContainerRuntime: "STRING_VALUE",
 * //                 Id: "STRING_VALUE",
 * //                 Name: "STRING_VALUE",
 * //                 Image: "STRING_VALUE",
 * //                 ImagePrefix: "STRING_VALUE",
 * //                 VolumeMounts: [ // VolumeMounts
 * //                   { // VolumeMount
 * //                     Name: "STRING_VALUE",
 * //                     MountPath: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 SecurityContext: { // SecurityContext
 * //                   Privileged: true || false,
 * //                 },
 * //               },
 * //             ],
 * //             Volumes: [ // Volumes
 * //               { // Volume
 * //                 Name: "STRING_VALUE",
 * //                 HostPath: { // HostPath
 * //                   Path: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         ResourceType: "STRING_VALUE",
 * //         EbsVolumeDetails: { // EbsVolumeDetails
 * //           ScannedVolumeDetails: [ // VolumeDetails
 * //             { // VolumeDetail
 * //               VolumeArn: "STRING_VALUE",
 * //               VolumeType: "STRING_VALUE",
 * //               DeviceName: "STRING_VALUE",
 * //               VolumeSizeInGB: Number("int"),
 * //               EncryptionType: "STRING_VALUE",
 * //               SnapshotArn: "STRING_VALUE",
 * //               KmsKeyArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //           SkippedVolumeDetails: [
 * //             {
 * //               VolumeArn: "STRING_VALUE",
 * //               VolumeType: "STRING_VALUE",
 * //               DeviceName: "STRING_VALUE",
 * //               VolumeSizeInGB: Number("int"),
 * //               EncryptionType: "STRING_VALUE",
 * //               SnapshotArn: "STRING_VALUE",
 * //               KmsKeyArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         EcsClusterDetails: { // EcsClusterDetails
 * //           Name: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           ActiveServicesCount: Number("int"),
 * //           RegisteredContainerInstancesCount: Number("int"),
 * //           RunningTasksCount: Number("int"),
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           TaskDetails: { // EcsTaskDetails
 * //             Arn: "STRING_VALUE",
 * //             DefinitionArn: "STRING_VALUE",
 * //             Version: "STRING_VALUE",
 * //             TaskCreatedAt: new Date("TIMESTAMP"),
 * //             StartedAt: new Date("TIMESTAMP"),
 * //             StartedBy: "STRING_VALUE",
 * //             Tags: [
 * //               {
 * //                 Key: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Volumes: [
 * //               {
 * //                 Name: "STRING_VALUE",
 * //                 HostPath: {
 * //                   Path: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             Containers: [
 * //               {
 * //                 ContainerRuntime: "STRING_VALUE",
 * //                 Id: "STRING_VALUE",
 * //                 Name: "STRING_VALUE",
 * //                 Image: "STRING_VALUE",
 * //                 ImagePrefix: "STRING_VALUE",
 * //                 VolumeMounts: [
 * //                   {
 * //                     Name: "STRING_VALUE",
 * //                     MountPath: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 SecurityContext: {
 * //                   Privileged: true || false,
 * //                 },
 * //               },
 * //             ],
 * //             Group: "STRING_VALUE",
 * //           },
 * //         },
 * //         ContainerDetails: {
 * //           ContainerRuntime: "STRING_VALUE",
 * //           Id: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Image: "STRING_VALUE",
 * //           ImagePrefix: "STRING_VALUE",
 * //           VolumeMounts: [
 * //             {
 * //               Name: "STRING_VALUE",
 * //               MountPath: "STRING_VALUE",
 * //             },
 * //           ],
 * //           SecurityContext: {
 * //             Privileged: true || false,
 * //           },
 * //         },
 * //         RdsDbInstanceDetails: { // RdsDbInstanceDetails
 * //           DbInstanceIdentifier: "STRING_VALUE",
 * //           Engine: "STRING_VALUE",
 * //           EngineVersion: "STRING_VALUE",
 * //           DbClusterIdentifier: "STRING_VALUE",
 * //           DbInstanceArn: "STRING_VALUE",
 * //           Tags: "<Tags>",
 * //         },
 * //         RdsDbUserDetails: { // RdsDbUserDetails
 * //           User: "STRING_VALUE",
 * //           Application: "STRING_VALUE",
 * //           Database: "STRING_VALUE",
 * //           Ssl: "STRING_VALUE",
 * //           AuthMethod: "STRING_VALUE",
 * //         },
 * //         LambdaDetails: { // LambdaDetails
 * //           FunctionArn: "STRING_VALUE",
 * //           FunctionName: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           LastModifiedAt: new Date("TIMESTAMP"),
 * //           RevisionId: "STRING_VALUE",
 * //           FunctionVersion: "STRING_VALUE",
 * //           Role: "STRING_VALUE",
 * //           VpcConfig: { // VpcConfig
 * //             SubnetIds: [ // SubnetIds
 * //               "STRING_VALUE",
 * //             ],
 * //             VpcId: "STRING_VALUE",
 * //             SecurityGroups: [
 * //               {
 * //                 GroupId: "STRING_VALUE",
 * //                 GroupName: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           Tags: "<Tags>",
 * //         },
 * //       },
 * //       SchemaVersion: "STRING_VALUE", // required
 * //       Service: { // Service
 * //         Action: { // Action
 * //           ActionType: "STRING_VALUE",
 * //           AwsApiCallAction: { // AwsApiCallAction
 * //             Api: "STRING_VALUE",
 * //             CallerType: "STRING_VALUE",
 * //             DomainDetails: { // DomainDetails
 * //               Domain: "STRING_VALUE",
 * //             },
 * //             ErrorCode: "STRING_VALUE",
 * //             UserAgent: "STRING_VALUE",
 * //             RemoteIpDetails: { // RemoteIpDetails
 * //               City: { // City
 * //                 CityName: "STRING_VALUE",
 * //               },
 * //               Country: { // Country
 * //                 CountryCode: "STRING_VALUE",
 * //                 CountryName: "STRING_VALUE",
 * //               },
 * //               GeoLocation: { // GeoLocation
 * //                 Lat: Number("double"),
 * //                 Lon: Number("double"),
 * //               },
 * //               IpAddressV4: "STRING_VALUE",
 * //               Organization: { // Organization
 * //                 Asn: "STRING_VALUE",
 * //                 AsnOrg: "STRING_VALUE",
 * //                 Isp: "STRING_VALUE",
 * //                 Org: "STRING_VALUE",
 * //               },
 * //             },
 * //             ServiceName: "STRING_VALUE",
 * //             RemoteAccountDetails: { // RemoteAccountDetails
 * //               AccountId: "STRING_VALUE",
 * //               Affiliated: true || false,
 * //             },
 * //             AffectedResources: { // AffectedResources
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           DnsRequestAction: { // DnsRequestAction
 * //             Domain: "STRING_VALUE",
 * //             Protocol: "STRING_VALUE",
 * //             Blocked: true || false,
 * //             DomainWithSuffix: "STRING_VALUE",
 * //           },
 * //           NetworkConnectionAction: { // NetworkConnectionAction
 * //             Blocked: true || false,
 * //             ConnectionDirection: "STRING_VALUE",
 * //             LocalPortDetails: { // LocalPortDetails
 * //               Port: Number("int"),
 * //               PortName: "STRING_VALUE",
 * //             },
 * //             Protocol: "STRING_VALUE",
 * //             LocalIpDetails: { // LocalIpDetails
 * //               IpAddressV4: "STRING_VALUE",
 * //             },
 * //             RemoteIpDetails: {
 * //               City: {
 * //                 CityName: "STRING_VALUE",
 * //               },
 * //               Country: {
 * //                 CountryCode: "STRING_VALUE",
 * //                 CountryName: "STRING_VALUE",
 * //               },
 * //               GeoLocation: {
 * //                 Lat: Number("double"),
 * //                 Lon: Number("double"),
 * //               },
 * //               IpAddressV4: "STRING_VALUE",
 * //               Organization: {
 * //                 Asn: "STRING_VALUE",
 * //                 AsnOrg: "STRING_VALUE",
 * //                 Isp: "STRING_VALUE",
 * //                 Org: "STRING_VALUE",
 * //               },
 * //             },
 * //             RemotePortDetails: { // RemotePortDetails
 * //               Port: Number("int"),
 * //               PortName: "STRING_VALUE",
 * //             },
 * //           },
 * //           PortProbeAction: { // PortProbeAction
 * //             Blocked: true || false,
 * //             PortProbeDetails: [ // PortProbeDetails
 * //               { // PortProbeDetail
 * //                 LocalPortDetails: {
 * //                   Port: Number("int"),
 * //                   PortName: "STRING_VALUE",
 * //                 },
 * //                 LocalIpDetails: {
 * //                   IpAddressV4: "STRING_VALUE",
 * //                 },
 * //                 RemoteIpDetails: {
 * //                   City: {
 * //                     CityName: "STRING_VALUE",
 * //                   },
 * //                   Country: {
 * //                     CountryCode: "STRING_VALUE",
 * //                     CountryName: "STRING_VALUE",
 * //                   },
 * //                   GeoLocation: {
 * //                     Lat: Number("double"),
 * //                     Lon: Number("double"),
 * //                   },
 * //                   IpAddressV4: "STRING_VALUE",
 * //                   Organization: {
 * //                     Asn: "STRING_VALUE",
 * //                     AsnOrg: "STRING_VALUE",
 * //                     Isp: "STRING_VALUE",
 * //                     Org: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           KubernetesApiCallAction: { // KubernetesApiCallAction
 * //             RequestUri: "STRING_VALUE",
 * //             Verb: "STRING_VALUE",
 * //             SourceIps: [ // SourceIps
 * //               "STRING_VALUE",
 * //             ],
 * //             UserAgent: "STRING_VALUE",
 * //             RemoteIpDetails: {
 * //               City: {
 * //                 CityName: "STRING_VALUE",
 * //               },
 * //               Country: {
 * //                 CountryCode: "STRING_VALUE",
 * //                 CountryName: "STRING_VALUE",
 * //               },
 * //               GeoLocation: {
 * //                 Lat: Number("double"),
 * //                 Lon: Number("double"),
 * //               },
 * //               IpAddressV4: "STRING_VALUE",
 * //               Organization: {
 * //                 Asn: "STRING_VALUE",
 * //                 AsnOrg: "STRING_VALUE",
 * //                 Isp: "STRING_VALUE",
 * //                 Org: "STRING_VALUE",
 * //               },
 * //             },
 * //             StatusCode: Number("int"),
 * //             Parameters: "STRING_VALUE",
 * //           },
 * //           RdsLoginAttemptAction: { // RdsLoginAttemptAction
 * //             RemoteIpDetails: {
 * //               City: {
 * //                 CityName: "STRING_VALUE",
 * //               },
 * //               Country: {
 * //                 CountryCode: "STRING_VALUE",
 * //                 CountryName: "STRING_VALUE",
 * //               },
 * //               GeoLocation: {
 * //                 Lat: Number("double"),
 * //                 Lon: Number("double"),
 * //               },
 * //               IpAddressV4: "STRING_VALUE",
 * //               Organization: {
 * //                 Asn: "STRING_VALUE",
 * //                 AsnOrg: "STRING_VALUE",
 * //                 Isp: "STRING_VALUE",
 * //                 Org: "STRING_VALUE",
 * //               },
 * //             },
 * //             LoginAttributes: [ // LoginAttributes
 * //               { // LoginAttribute
 * //                 User: "STRING_VALUE",
 * //                 Application: "STRING_VALUE",
 * //                 FailedLoginAttempts: Number("int"),
 * //                 SuccessfulLoginAttempts: Number("int"),
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Evidence: { // Evidence
 * //           ThreatIntelligenceDetails: [ // ThreatIntelligenceDetails
 * //             { // ThreatIntelligenceDetail
 * //               ThreatListName: "STRING_VALUE",
 * //               ThreatNames: [ // ThreatNames
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         Archived: true || false,
 * //         Count: Number("int"),
 * //         DetectorId: "STRING_VALUE",
 * //         EventFirstSeen: "STRING_VALUE",
 * //         EventLastSeen: "STRING_VALUE",
 * //         ResourceRole: "STRING_VALUE",
 * //         ServiceName: "STRING_VALUE",
 * //         UserFeedback: "STRING_VALUE",
 * //         AdditionalInfo: { // ServiceAdditionalInfo
 * //           Value: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //         },
 * //         FeatureName: "STRING_VALUE",
 * //         EbsVolumeScanDetails: { // EbsVolumeScanDetails
 * //           ScanId: "STRING_VALUE",
 * //           ScanStartedAt: new Date("TIMESTAMP"),
 * //           ScanCompletedAt: new Date("TIMESTAMP"),
 * //           TriggerFindingId: "STRING_VALUE",
 * //           Sources: [ // Sources
 * //             "STRING_VALUE",
 * //           ],
 * //           ScanDetections: { // ScanDetections
 * //             ScannedItemCount: { // ScannedItemCount
 * //               TotalGb: Number("int"),
 * //               Files: Number("int"),
 * //               Volumes: Number("int"),
 * //             },
 * //             ThreatsDetectedItemCount: { // ThreatsDetectedItemCount
 * //               Files: Number("int"),
 * //             },
 * //             HighestSeverityThreatDetails: { // HighestSeverityThreatDetails
 * //               Severity: "STRING_VALUE",
 * //               ThreatName: "STRING_VALUE",
 * //               Count: Number("int"),
 * //             },
 * //             ThreatDetectedByName: { // ThreatDetectedByName
 * //               ItemCount: Number("int"),
 * //               UniqueThreatNameCount: Number("int"),
 * //               Shortened: true || false,
 * //               ThreatNames: [ // ScanThreatNames
 * //                 { // ScanThreatName
 * //                   Name: "STRING_VALUE",
 * //                   Severity: "STRING_VALUE",
 * //                   ItemCount: Number("int"),
 * //                   FilePaths: [ // FilePaths
 * //                     { // ScanFilePath
 * //                       FilePath: "STRING_VALUE",
 * //                       VolumeArn: "STRING_VALUE",
 * //                       Hash: "STRING_VALUE",
 * //                       FileName: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           ScanType: "GUARDDUTY_INITIATED" || "ON_DEMAND",
 * //         },
 * //         RuntimeDetails: { // RuntimeDetails
 * //           Process: { // ProcessDetails
 * //             Name: "STRING_VALUE",
 * //             ExecutablePath: "STRING_VALUE",
 * //             ExecutableSha256: "STRING_VALUE",
 * //             NamespacePid: Number("int"),
 * //             Pwd: "STRING_VALUE",
 * //             Pid: Number("int"),
 * //             StartTime: new Date("TIMESTAMP"),
 * //             Uuid: "STRING_VALUE",
 * //             ParentUuid: "STRING_VALUE",
 * //             User: "STRING_VALUE",
 * //             UserId: Number("int"),
 * //             Euid: Number("int"),
 * //             Lineage: [ // Lineage
 * //               { // LineageObject
 * //                 StartTime: new Date("TIMESTAMP"),
 * //                 NamespacePid: Number("int"),
 * //                 UserId: Number("int"),
 * //                 Name: "STRING_VALUE",
 * //                 Pid: Number("int"),
 * //                 Uuid: "STRING_VALUE",
 * //                 ExecutablePath: "STRING_VALUE",
 * //                 Euid: Number("int"),
 * //                 ParentUuid: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           Context: { // RuntimeContext
 * //             ModifyingProcess: {
 * //               Name: "STRING_VALUE",
 * //               ExecutablePath: "STRING_VALUE",
 * //               ExecutableSha256: "STRING_VALUE",
 * //               NamespacePid: Number("int"),
 * //               Pwd: "STRING_VALUE",
 * //               Pid: Number("int"),
 * //               StartTime: new Date("TIMESTAMP"),
 * //               Uuid: "STRING_VALUE",
 * //               ParentUuid: "STRING_VALUE",
 * //               User: "STRING_VALUE",
 * //               UserId: Number("int"),
 * //               Euid: Number("int"),
 * //               Lineage: [
 * //                 {
 * //                   StartTime: new Date("TIMESTAMP"),
 * //                   NamespacePid: Number("int"),
 * //                   UserId: Number("int"),
 * //                   Name: "STRING_VALUE",
 * //                   Pid: Number("int"),
 * //                   Uuid: "STRING_VALUE",
 * //                   ExecutablePath: "STRING_VALUE",
 * //                   Euid: Number("int"),
 * //                   ParentUuid: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             ModifiedAt: new Date("TIMESTAMP"),
 * //             ScriptPath: "STRING_VALUE",
 * //             LibraryPath: "STRING_VALUE",
 * //             LdPreloadValue: "STRING_VALUE",
 * //             SocketPath: "STRING_VALUE",
 * //             RuncBinaryPath: "STRING_VALUE",
 * //             ReleaseAgentPath: "STRING_VALUE",
 * //             MountSource: "STRING_VALUE",
 * //             MountTarget: "STRING_VALUE",
 * //             FileSystemType: "STRING_VALUE",
 * //             Flags: [ // FlagsList
 * //               "STRING_VALUE",
 * //             ],
 * //             ModuleName: "STRING_VALUE",
 * //             ModuleFilePath: "STRING_VALUE",
 * //             ModuleSha256: "STRING_VALUE",
 * //             ShellHistoryFilePath: "STRING_VALUE",
 * //             TargetProcess: {
 * //               Name: "STRING_VALUE",
 * //               ExecutablePath: "STRING_VALUE",
 * //               ExecutableSha256: "STRING_VALUE",
 * //               NamespacePid: Number("int"),
 * //               Pwd: "STRING_VALUE",
 * //               Pid: Number("int"),
 * //               StartTime: new Date("TIMESTAMP"),
 * //               Uuid: "STRING_VALUE",
 * //               ParentUuid: "STRING_VALUE",
 * //               User: "STRING_VALUE",
 * //               UserId: Number("int"),
 * //               Euid: Number("int"),
 * //               Lineage: [
 * //                 {
 * //                   StartTime: new Date("TIMESTAMP"),
 * //                   NamespacePid: Number("int"),
 * //                   UserId: Number("int"),
 * //                   Name: "STRING_VALUE",
 * //                   Pid: Number("int"),
 * //                   Uuid: "STRING_VALUE",
 * //                   ExecutablePath: "STRING_VALUE",
 * //                   Euid: Number("int"),
 * //                   ParentUuid: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             AddressFamily: "STRING_VALUE",
 * //             IanaProtocolNumber: Number("int"),
 * //             MemoryRegions: [ // MemoryRegionsList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       Severity: Number("double"), // required
 * //       Title: "STRING_VALUE",
 * //       Type: "STRING_VALUE", // required
 * //       UpdatedAt: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetFindingsCommandInput - {@link GetFindingsCommandInput}
 * @returns {@link GetFindingsCommandOutput}
 * @see {@link GetFindingsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 */
export class GetFindingsCommand extends $Command<
  GetFindingsCommandInput,
  GetFindingsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingsCommandInput, GetFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFindingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "GetFindings",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingsCommandOutput> {
    return de_GetFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
