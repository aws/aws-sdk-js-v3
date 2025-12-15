// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import type { DescribeFileSystemsRequest, DescribeFileSystemsResponse } from "../models/models_0";
import { DescribeFileSystems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFileSystemsCommand}.
 */
export interface DescribeFileSystemsCommandInput extends DescribeFileSystemsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFileSystemsCommand}.
 */
export interface DescribeFileSystemsCommandOutput extends DescribeFileSystemsResponse, __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx file systems, if a
 *                 <code>FileSystemIds</code> value is provided for that file system. Otherwise, it
 *             returns descriptions of all file systems owned by your Amazon Web Services account in the
 *                 Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all file system descriptions, you can optionally specify the
 *                 <code>MaxResults</code> parameter to limit the number of descriptions in a response.
 *             If more file system descriptions remain, Amazon FSx returns a
 *                 <code>NextToken</code> value in the response. In this case, send a later request
 *             with the <code>NextToken</code> request parameter set to the value of
 *                 <code>NextToken</code> from the last response.</p>
 *          <p>This operation is used in an iterative process to retrieve a list of your file system
 *             descriptions. <code>DescribeFileSystems</code> is called first without a
 *                 <code>NextToken</code>value. Then the operation continues to be called with the
 *                 <code>NextToken</code> parameter set to the value of the last <code>NextToken</code>
 *             value until a response has no <code>NextToken</code>.</p>
 *          <p>When using this operation, keep the following in mind:</p>
 *          <ul>
 *             <li>
 *                <p>The implementation might return fewer than <code>MaxResults</code> file
 *                     system descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *             </li>
 *             <li>
 *                <p>The order of file systems returned in the response of one
 *                         <code>DescribeFileSystems</code> call and the order of file systems returned
 *                     across the responses of a multicall iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeFileSystemsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeFileSystemsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeFileSystemsRequest
 *   FileSystemIds: [ // FileSystemIds
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFileSystemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFileSystemsResponse
 * //   FileSystems: [ // FileSystems
 * //     { // FileSystem
 * //       OwnerId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FileSystemId: "STRING_VALUE",
 * //       FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //       Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //       FailureDetails: { // FileSystemFailureDetails
 * //         Message: "STRING_VALUE",
 * //       },
 * //       StorageCapacity: Number("int"),
 * //       StorageType: "SSD" || "HDD" || "INTELLIGENT_TIERING",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       NetworkInterfaceIds: [ // NetworkInterfaceIds
 * //         "STRING_VALUE",
 * //       ],
 * //       DNSName: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       WindowsConfiguration: { // WindowsFileSystemConfiguration
 * //         ActiveDirectoryId: "STRING_VALUE",
 * //         SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryAttributes
 * //           DomainName: "STRING_VALUE",
 * //           OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //           FileSystemAdministratorsGroup: "STRING_VALUE",
 * //           UserName: "STRING_VALUE",
 * //           DnsIps: [ // DnsIps
 * //             "STRING_VALUE",
 * //           ],
 * //           DomainJoinServiceAccountSecret: "STRING_VALUE",
 * //         },
 * //         DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //         RemoteAdministrationEndpoint: "STRING_VALUE",
 * //         PreferredSubnetId: "STRING_VALUE",
 * //         PreferredFileServerIp: "STRING_VALUE",
 * //         ThroughputCapacity: Number("int"),
 * //         MaintenanceOperationsInProgress: [ // FileSystemMaintenanceOperations
 * //           "PATCHING" || "BACKING_UP",
 * //         ],
 * //         WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //         DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //         AutomaticBackupRetentionDays: Number("int"),
 * //         CopyTagsToBackups: true || false,
 * //         Aliases: [ // Aliases
 * //           { // Alias
 * //             Name: "STRING_VALUE",
 * //             Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //           },
 * //         ],
 * //         AuditLogConfiguration: { // WindowsAuditLogConfiguration
 * //           FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //           FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //           AuditLogDestination: "STRING_VALUE",
 * //         },
 * //         DiskIopsConfiguration: { // DiskIopsConfiguration
 * //           Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //           Iops: Number("long"),
 * //         },
 * //         PreferredFileServerIpv6: "STRING_VALUE",
 * //         FsrmConfiguration: { // WindowsFsrmConfiguration
 * //           FsrmServiceEnabled: true || false, // required
 * //           EventLogDestination: "STRING_VALUE",
 * //         },
 * //       },
 * //       LustreConfiguration: { // LustreFileSystemConfiguration
 * //         WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //         DataRepositoryConfiguration: { // DataRepositoryConfiguration
 * //           Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //           ImportPath: "STRING_VALUE",
 * //           ExportPath: "STRING_VALUE",
 * //           ImportedFileChunkSize: Number("int"),
 * //           AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 * //           FailureDetails: { // DataRepositoryFailureDetails
 * //             Message: "STRING_VALUE",
 * //           },
 * //         },
 * //         DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 * //         PerUnitStorageThroughput: Number("int"),
 * //         MountName: "STRING_VALUE",
 * //         DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //         AutomaticBackupRetentionDays: Number("int"),
 * //         CopyTagsToBackups: true || false,
 * //         DriveCacheType: "NONE" || "READ",
 * //         DataCompressionType: "NONE" || "LZ4",
 * //         LogConfiguration: { // LustreLogConfiguration
 * //           Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //           Destination: "STRING_VALUE",
 * //         },
 * //         RootSquashConfiguration: { // LustreRootSquashConfiguration
 * //           RootSquash: "STRING_VALUE",
 * //           NoSquashNids: [ // LustreNoSquashNids
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         MetadataConfiguration: { // FileSystemLustreMetadataConfiguration
 * //           Iops: Number("int"),
 * //           Mode: "AUTOMATIC" || "USER_PROVISIONED", // required
 * //         },
 * //         EfaEnabled: true || false,
 * //         ThroughputCapacity: Number("int"),
 * //         DataReadCacheConfiguration: { // LustreReadCacheConfiguration
 * //           SizingMode: "NO_CACHE" || "USER_PROVISIONED" || "PROPORTIONAL_TO_THROUGHPUT_CAPACITY",
 * //           SizeGiB: Number("int"),
 * //         },
 * //       },
 * //       AdministrativeActions: [ // AdministrativeActions
 * //         { // AdministrativeAction
 * //           AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE" || "THROUGHPUT_OPTIMIZATION" || "IOPS_OPTIMIZATION" || "STORAGE_TYPE_OPTIMIZATION" || "MISCONFIGURED_STATE_RECOVERY" || "VOLUME_UPDATE_WITH_SNAPSHOT" || "VOLUME_INITIALIZE_WITH_SNAPSHOT" || "DOWNLOAD_DATA_FROM_BACKUP",
 * //           ProgressPercent: Number("int"),
 * //           RequestTime: new Date("TIMESTAMP"),
 * //           Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING" || "OPTIMIZING" || "PAUSED" || "CANCELLED",
 * //           TargetFileSystemValues: {
 * //             OwnerId: "STRING_VALUE",
 * //             CreationTime: new Date("TIMESTAMP"),
 * //             FileSystemId: "STRING_VALUE",
 * //             FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //             Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //             FailureDetails: {
 * //               Message: "STRING_VALUE",
 * //             },
 * //             StorageCapacity: Number("int"),
 * //             StorageType: "SSD" || "HDD" || "INTELLIGENT_TIERING",
 * //             VpcId: "STRING_VALUE",
 * //             SubnetIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NetworkInterfaceIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DNSName: "STRING_VALUE",
 * //             KmsKeyId: "STRING_VALUE",
 * //             ResourceARN: "STRING_VALUE",
 * //             Tags: [
 * //               {
 * //                 Key: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             WindowsConfiguration: {
 * //               ActiveDirectoryId: "STRING_VALUE",
 * //               SelfManagedActiveDirectoryConfiguration: {
 * //                 DomainName: "STRING_VALUE",
 * //                 OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //                 FileSystemAdministratorsGroup: "STRING_VALUE",
 * //                 UserName: "STRING_VALUE",
 * //                 DnsIps: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 DomainJoinServiceAccountSecret: "STRING_VALUE",
 * //               },
 * //               DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //               RemoteAdministrationEndpoint: "STRING_VALUE",
 * //               PreferredSubnetId: "STRING_VALUE",
 * //               PreferredFileServerIp: "STRING_VALUE",
 * //               ThroughputCapacity: Number("int"),
 * //               MaintenanceOperationsInProgress: [
 * //                 "PATCHING" || "BACKING_UP",
 * //               ],
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               CopyTagsToBackups: true || false,
 * //               Aliases: [
 * //                 {
 * //                   Name: "STRING_VALUE",
 * //                   Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //                 },
 * //               ],
 * //               AuditLogConfiguration: {
 * //                 FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                 FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                 AuditLogDestination: "STRING_VALUE",
 * //               },
 * //               DiskIopsConfiguration: {
 * //                 Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                 Iops: Number("long"),
 * //               },
 * //               PreferredFileServerIpv6: "STRING_VALUE",
 * //               FsrmConfiguration: {
 * //                 FsrmServiceEnabled: true || false, // required
 * //                 EventLogDestination: "STRING_VALUE",
 * //               },
 * //             },
 * //             LustreConfiguration: {
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //               DataRepositoryConfiguration: {
 * //                 Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //                 ImportPath: "STRING_VALUE",
 * //                 ExportPath: "STRING_VALUE",
 * //                 ImportedFileChunkSize: Number("int"),
 * //                 AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 * //                 FailureDetails: {
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //               },
 * //               DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 * //               PerUnitStorageThroughput: Number("int"),
 * //               MountName: "STRING_VALUE",
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               CopyTagsToBackups: true || false,
 * //               DriveCacheType: "NONE" || "READ",
 * //               DataCompressionType: "NONE" || "LZ4",
 * //               LogConfiguration: {
 * //                 Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //                 Destination: "STRING_VALUE",
 * //               },
 * //               RootSquashConfiguration: {
 * //                 RootSquash: "STRING_VALUE",
 * //                 NoSquashNids: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               MetadataConfiguration: {
 * //                 Iops: Number("int"),
 * //                 Mode: "AUTOMATIC" || "USER_PROVISIONED", // required
 * //               },
 * //               EfaEnabled: true || false,
 * //               ThroughputCapacity: Number("int"),
 * //               DataReadCacheConfiguration: {
 * //                 SizingMode: "NO_CACHE" || "USER_PROVISIONED" || "PROPORTIONAL_TO_THROUGHPUT_CAPACITY",
 * //                 SizeGiB: Number("int"),
 * //               },
 * //             },
 * //             AdministrativeActions: [
 * //               {
 * //                 AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE" || "THROUGHPUT_OPTIMIZATION" || "IOPS_OPTIMIZATION" || "STORAGE_TYPE_OPTIMIZATION" || "MISCONFIGURED_STATE_RECOVERY" || "VOLUME_UPDATE_WITH_SNAPSHOT" || "VOLUME_INITIALIZE_WITH_SNAPSHOT" || "DOWNLOAD_DATA_FROM_BACKUP",
 * //                 ProgressPercent: Number("int"),
 * //                 RequestTime: new Date("TIMESTAMP"),
 * //                 Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING" || "OPTIMIZING" || "PAUSED" || "CANCELLED",
 * //                 TargetFileSystemValues: "<FileSystem>",
 * //                 FailureDetails: { // AdministrativeActionFailureDetails
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //                 TargetVolumeValues: { // Volume
 * //                   CreationTime: new Date("TIMESTAMP"),
 * //                   FileSystemId: "STRING_VALUE",
 * //                   Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING" || "AVAILABLE",
 * //                   Name: "STRING_VALUE",
 * //                   OntapConfiguration: { // OntapVolumeConfiguration
 * //                     FlexCacheEndpointType: "NONE" || "ORIGIN" || "CACHE",
 * //                     JunctionPath: "STRING_VALUE",
 * //                     SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //                     SizeInMegabytes: Number("int"),
 * //                     StorageEfficiencyEnabled: true || false,
 * //                     StorageVirtualMachineId: "STRING_VALUE",
 * //                     StorageVirtualMachineRoot: true || false,
 * //                     TieringPolicy: { // TieringPolicy
 * //                       CoolingPeriod: Number("int"),
 * //                       Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 * //                     },
 * //                     UUID: "STRING_VALUE",
 * //                     OntapVolumeType: "RW" || "DP" || "LS",
 * //                     SnapshotPolicy: "STRING_VALUE",
 * //                     CopyTagsToBackups: true || false,
 * //                     SnaplockConfiguration: { // SnaplockConfiguration
 * //                       AuditLogVolume: true || false,
 * //                       AutocommitPeriod: { // AutocommitPeriod
 * //                         Type: "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "NONE", // required
 * //                         Value: Number("int"),
 * //                       },
 * //                       PrivilegedDelete: "DISABLED" || "ENABLED" || "PERMANENTLY_DISABLED",
 * //                       RetentionPeriod: { // SnaplockRetentionPeriod
 * //                         DefaultRetention: { // RetentionPeriod
 * //                           Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                           Value: Number("int"),
 * //                         },
 * //                         MinimumRetention: {
 * //                           Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                           Value: Number("int"),
 * //                         },
 * //                         MaximumRetention: {
 * //                           Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                           Value: Number("int"),
 * //                         },
 * //                       },
 * //                       SnaplockType: "COMPLIANCE" || "ENTERPRISE",
 * //                       VolumeAppendModeEnabled: true || false,
 * //                     },
 * //                     VolumeStyle: "FLEXVOL" || "FLEXGROUP",
 * //                     AggregateConfiguration: { // AggregateConfiguration
 * //                       Aggregates: [ // Aggregates
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       TotalConstituents: Number("int"),
 * //                     },
 * //                     SizeInBytes: Number("long"),
 * //                   },
 * //                   ResourceARN: "STRING_VALUE",
 * //                   Tags: "<Tags>",
 * //                   VolumeId: "STRING_VALUE",
 * //                   VolumeType: "ONTAP" || "OPENZFS",
 * //                   LifecycleTransitionReason: { // LifecycleTransitionReason
 * //                     Message: "STRING_VALUE",
 * //                   },
 * //                   AdministrativeActions: "<AdministrativeActions>",
 * //                   OpenZFSConfiguration: { // OpenZFSVolumeConfiguration
 * //                     ParentVolumeId: "STRING_VALUE",
 * //                     VolumePath: "STRING_VALUE",
 * //                     StorageCapacityReservationGiB: Number("int"),
 * //                     StorageCapacityQuotaGiB: Number("int"),
 * //                     RecordSizeKiB: Number("int"),
 * //                     DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 * //                     CopyTagsToSnapshots: true || false,
 * //                     OriginSnapshot: { // OpenZFSOriginSnapshotConfiguration
 * //                       SnapshotARN: "STRING_VALUE",
 * //                       CopyStrategy: "CLONE" || "FULL_COPY" || "INCREMENTAL_COPY",
 * //                     },
 * //                     ReadOnly: true || false,
 * //                     NfsExports: [ // OpenZFSNfsExports
 * //                       { // OpenZFSNfsExport
 * //                         ClientConfigurations: [ // OpenZFSClientConfigurations // required
 * //                           { // OpenZFSClientConfiguration
 * //                             Clients: "STRING_VALUE", // required
 * //                             Options: [ // OpenZFSNfsExportOptions // required
 * //                               "STRING_VALUE",
 * //                             ],
 * //                           },
 * //                         ],
 * //                       },
 * //                     ],
 * //                     UserAndGroupQuotas: [ // OpenZFSUserAndGroupQuotas
 * //                       { // OpenZFSUserOrGroupQuota
 * //                         Type: "USER" || "GROUP", // required
 * //                         Id: Number("int"), // required
 * //                         StorageCapacityQuotaGiB: Number("int"), // required
 * //                       },
 * //                     ],
 * //                     RestoreToSnapshot: "STRING_VALUE",
 * //                     DeleteIntermediateSnaphots: true || false,
 * //                     DeleteClonedVolumes: true || false,
 * //                     DeleteIntermediateData: true || false,
 * //                     SourceSnapshotARN: "STRING_VALUE",
 * //                     DestinationSnapshot: "STRING_VALUE",
 * //                     CopyStrategy: "CLONE" || "FULL_COPY" || "INCREMENTAL_COPY",
 * //                   },
 * //                 },
 * //                 TargetSnapshotValues: { // Snapshot
 * //                   ResourceARN: "STRING_VALUE",
 * //                   SnapshotId: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   VolumeId: "STRING_VALUE",
 * //                   CreationTime: new Date("TIMESTAMP"),
 * //                   Lifecycle: "PENDING" || "CREATING" || "DELETING" || "AVAILABLE",
 * //                   LifecycleTransitionReason: {
 * //                     Message: "STRING_VALUE",
 * //                   },
 * //                   Tags: "<Tags>",
 * //                   AdministrativeActions: "<AdministrativeActions>",
 * //                 },
 * //                 TotalTransferBytes: Number("long"),
 * //                 RemainingTransferBytes: Number("long"),
 * //                 Message: "STRING_VALUE",
 * //               },
 * //             ],
 * //             OntapConfiguration: { // OntapFileSystemConfiguration
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2" || "MULTI_AZ_2",
 * //               EndpointIpAddressRange: "STRING_VALUE",
 * //               Endpoints: { // FileSystemEndpoints
 * //                 Intercluster: { // FileSystemEndpoint
 * //                   DNSName: "STRING_VALUE",
 * //                   IpAddresses: [ // OntapEndpointIpAddresses
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   Ipv6Addresses: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 Management: {
 * //                   DNSName: "STRING_VALUE",
 * //                   IpAddresses: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   Ipv6Addresses: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               DiskIopsConfiguration: {
 * //                 Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                 Iops: Number("long"),
 * //               },
 * //               PreferredSubnetId: "STRING_VALUE",
 * //               RouteTableIds: [ // RouteTableIds
 * //                 "STRING_VALUE",
 * //               ],
 * //               ThroughputCapacity: Number("int"),
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //               FsxAdminPassword: "STRING_VALUE",
 * //               HAPairs: Number("int"),
 * //               ThroughputCapacityPerHAPair: Number("int"),
 * //               EndpointIpv6AddressRange: "STRING_VALUE",
 * //             },
 * //             FileSystemTypeVersion: "STRING_VALUE",
 * //             OpenZFSConfiguration: { // OpenZFSFileSystemConfiguration
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               CopyTagsToBackups: true || false,
 * //               CopyTagsToVolumes: true || false,
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2" || "SINGLE_AZ_HA_1" || "SINGLE_AZ_HA_2" || "MULTI_AZ_1",
 * //               ThroughputCapacity: Number("int"),
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //               DiskIopsConfiguration: {
 * //                 Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                 Iops: Number("long"),
 * //               },
 * //               RootVolumeId: "STRING_VALUE",
 * //               PreferredSubnetId: "STRING_VALUE",
 * //               EndpointIpAddressRange: "STRING_VALUE",
 * //               EndpointIpv6AddressRange: "STRING_VALUE",
 * //               RouteTableIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               EndpointIpAddress: "STRING_VALUE",
 * //               EndpointIpv6Address: "STRING_VALUE",
 * //               ReadCacheConfiguration: { // OpenZFSReadCacheConfiguration
 * //                 SizingMode: "NO_CACHE" || "USER_PROVISIONED" || "PROPORTIONAL_TO_THROUGHPUT_CAPACITY",
 * //                 SizeGiB: Number("int"),
 * //               },
 * //             },
 * //             NetworkType: "IPV4" || "DUAL",
 * //           },
 * //           FailureDetails: {
 * //             Message: "STRING_VALUE",
 * //           },
 * //           TargetVolumeValues: {
 * //             CreationTime: new Date("TIMESTAMP"),
 * //             FileSystemId: "STRING_VALUE",
 * //             Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING" || "AVAILABLE",
 * //             Name: "STRING_VALUE",
 * //             OntapConfiguration: {
 * //               FlexCacheEndpointType: "NONE" || "ORIGIN" || "CACHE",
 * //               JunctionPath: "STRING_VALUE",
 * //               SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //               SizeInMegabytes: Number("int"),
 * //               StorageEfficiencyEnabled: true || false,
 * //               StorageVirtualMachineId: "STRING_VALUE",
 * //               StorageVirtualMachineRoot: true || false,
 * //               TieringPolicy: {
 * //                 CoolingPeriod: Number("int"),
 * //                 Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 * //               },
 * //               UUID: "STRING_VALUE",
 * //               OntapVolumeType: "RW" || "DP" || "LS",
 * //               SnapshotPolicy: "STRING_VALUE",
 * //               CopyTagsToBackups: true || false,
 * //               SnaplockConfiguration: {
 * //                 AuditLogVolume: true || false,
 * //                 AutocommitPeriod: {
 * //                   Type: "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "NONE", // required
 * //                   Value: Number("int"),
 * //                 },
 * //                 PrivilegedDelete: "DISABLED" || "ENABLED" || "PERMANENTLY_DISABLED",
 * //                 RetentionPeriod: {
 * //                   DefaultRetention: {
 * //                     Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                     Value: Number("int"),
 * //                   },
 * //                   MinimumRetention: {
 * //                     Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                     Value: Number("int"),
 * //                   },
 * //                   MaximumRetention: "<RetentionPeriod>", // required
 * //                 },
 * //                 SnaplockType: "COMPLIANCE" || "ENTERPRISE",
 * //                 VolumeAppendModeEnabled: true || false,
 * //               },
 * //               VolumeStyle: "FLEXVOL" || "FLEXGROUP",
 * //               AggregateConfiguration: {
 * //                 Aggregates: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 TotalConstituents: Number("int"),
 * //               },
 * //               SizeInBytes: Number("long"),
 * //             },
 * //             ResourceARN: "STRING_VALUE",
 * //             Tags: "<Tags>",
 * //             VolumeId: "STRING_VALUE",
 * //             VolumeType: "ONTAP" || "OPENZFS",
 * //             LifecycleTransitionReason: {
 * //               Message: "STRING_VALUE",
 * //             },
 * //             AdministrativeActions: "<AdministrativeActions>",
 * //             OpenZFSConfiguration: {
 * //               ParentVolumeId: "STRING_VALUE",
 * //               VolumePath: "STRING_VALUE",
 * //               StorageCapacityReservationGiB: Number("int"),
 * //               StorageCapacityQuotaGiB: Number("int"),
 * //               RecordSizeKiB: Number("int"),
 * //               DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 * //               CopyTagsToSnapshots: true || false,
 * //               OriginSnapshot: {
 * //                 SnapshotARN: "STRING_VALUE",
 * //                 CopyStrategy: "CLONE" || "FULL_COPY" || "INCREMENTAL_COPY",
 * //               },
 * //               ReadOnly: true || false,
 * //               NfsExports: [
 * //                 {
 * //                   ClientConfigurations: [ // required
 * //                     {
 * //                       Clients: "STRING_VALUE", // required
 * //                       Options: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //               UserAndGroupQuotas: [
 * //                 {
 * //                   Type: "USER" || "GROUP", // required
 * //                   Id: Number("int"), // required
 * //                   StorageCapacityQuotaGiB: Number("int"), // required
 * //                 },
 * //               ],
 * //               RestoreToSnapshot: "STRING_VALUE",
 * //               DeleteIntermediateSnaphots: true || false,
 * //               DeleteClonedVolumes: true || false,
 * //               DeleteIntermediateData: true || false,
 * //               SourceSnapshotARN: "STRING_VALUE",
 * //               DestinationSnapshot: "STRING_VALUE",
 * //               CopyStrategy: "CLONE" || "FULL_COPY" || "INCREMENTAL_COPY",
 * //             },
 * //           },
 * //           TargetSnapshotValues: {
 * //             ResourceARN: "STRING_VALUE",
 * //             SnapshotId: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //             VolumeId: "STRING_VALUE",
 * //             CreationTime: new Date("TIMESTAMP"),
 * //             Lifecycle: "PENDING" || "CREATING" || "DELETING" || "AVAILABLE",
 * //             LifecycleTransitionReason: {
 * //               Message: "STRING_VALUE",
 * //             },
 * //             Tags: "<Tags>",
 * //             AdministrativeActions: "<AdministrativeActions>",
 * //           },
 * //           TotalTransferBytes: Number("long"),
 * //           RemainingTransferBytes: Number("long"),
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OntapConfiguration: {
 * //         AutomaticBackupRetentionDays: Number("int"),
 * //         DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //         DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2" || "MULTI_AZ_2",
 * //         EndpointIpAddressRange: "STRING_VALUE",
 * //         Endpoints: {
 * //           Intercluster: {
 * //             DNSName: "STRING_VALUE",
 * //             IpAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Ipv6Addresses: "<OntapEndpointIpAddresses>",
 * //           },
 * //           Management: {
 * //             DNSName: "STRING_VALUE",
 * //             IpAddresses: "<OntapEndpointIpAddresses>",
 * //             Ipv6Addresses: "<OntapEndpointIpAddresses>",
 * //           },
 * //         },
 * //         DiskIopsConfiguration: {
 * //           Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //           Iops: Number("long"),
 * //         },
 * //         PreferredSubnetId: "STRING_VALUE",
 * //         RouteTableIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ThroughputCapacity: Number("int"),
 * //         WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //         FsxAdminPassword: "STRING_VALUE",
 * //         HAPairs: Number("int"),
 * //         ThroughputCapacityPerHAPair: Number("int"),
 * //         EndpointIpv6AddressRange: "STRING_VALUE",
 * //       },
 * //       FileSystemTypeVersion: "STRING_VALUE",
 * //       OpenZFSConfiguration: {
 * //         AutomaticBackupRetentionDays: Number("int"),
 * //         CopyTagsToBackups: true || false,
 * //         CopyTagsToVolumes: true || false,
 * //         DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //         DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2" || "SINGLE_AZ_HA_1" || "SINGLE_AZ_HA_2" || "MULTI_AZ_1",
 * //         ThroughputCapacity: Number("int"),
 * //         WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //         DiskIopsConfiguration: "<DiskIopsConfiguration>",
 * //         RootVolumeId: "STRING_VALUE",
 * //         PreferredSubnetId: "STRING_VALUE",
 * //         EndpointIpAddressRange: "STRING_VALUE",
 * //         EndpointIpv6AddressRange: "STRING_VALUE",
 * //         RouteTableIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         EndpointIpAddress: "STRING_VALUE",
 * //         EndpointIpv6Address: "STRING_VALUE",
 * //         ReadCacheConfiguration: {
 * //           SizingMode: "NO_CACHE" || "USER_PROVISIONED" || "PROPORTIONAL_TO_THROUGHPUT_CAPACITY",
 * //           SizeGiB: Number("int"),
 * //         },
 * //       },
 * //       NetworkType: "IPV4" || "DUAL",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFileSystemsCommandInput - {@link DescribeFileSystemsCommandInput}
 * @returns {@link DescribeFileSystemsCommandOutput}
 * @see {@link DescribeFileSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DescribeFileSystemsCommand extends $Command
  .classBuilder<
    DescribeFileSystemsCommandInput,
    DescribeFileSystemsCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSimbaAPIService_v20180301", "DescribeFileSystems", {})
  .n("FSxClient", "DescribeFileSystemsCommand")
  .sc(DescribeFileSystems$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFileSystemsRequest;
      output: DescribeFileSystemsResponse;
    };
    sdk: {
      input: DescribeFileSystemsCommandInput;
      output: DescribeFileSystemsCommandOutput;
    };
  };
}
