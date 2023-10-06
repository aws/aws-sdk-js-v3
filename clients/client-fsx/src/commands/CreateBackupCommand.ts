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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateBackupRequest, CreateBackupResponse, CreateBackupResponseFilterSensitiveLog } from "../models/models_0";
import { de_CreateBackupCommand, se_CreateBackupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandInput extends CreateBackupRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandOutput extends CreateBackupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a backup of an existing Amazon FSx for Windows File Server file
 *             system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP
 *             volume, or Amazon FSx for OpenZFS file system. We recommend creating regular
 *             backups so that you can restore a file system or volume from a backup if an issue arises
 *             with the original file system or volume.</p>
 *          <p>For Amazon FSx for Lustre file systems, you can create a backup only for file
 *             systems that have the following configuration:</p>
 *          <ul>
 *             <li>
 *                <p>A Persistent deployment type</p>
 *             </li>
 *             <li>
 *                <p>Are <i>not</i> linked to a data repository</p>
 *             </li>
 *          </ul>
 *          <p>For more information about backups, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for
 *                         Lustre backups</a>.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for
 *                         Windows backups</a>.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp
 *                         ONTAP backups</a>.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p>
 *             </li>
 *          </ul>
 *          <p>If a backup with the specified client request token exists and the parameters match,
 *             this operation returns the description of the existing backup. If a backup with the
 *             specified client request token exists and the parameters don't match, this operation
 *             returns <code>IncompatibleParameterError</code>. If a backup with the specified client
 *             request token doesn't exist, <code>CreateBackup</code> does the following: </p>
 *          <ul>
 *             <li>
 *                <p>Creates a new Amazon FSx backup with an assigned ID, and an initial
 *                     lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the backup.</p>
 *             </li>
 *          </ul>
 *          <p>By using the idempotent operation, you can retry a <code>CreateBackup</code>
 *             operation without the risk of creating an extra backup. This approach can be useful when
 *             an initial call fails in a way that makes it unclear whether a backup was created. If
 *             you use the same client request token and the initial call created a backup, the
 *             operation returns a successful result because all the parameters are the same.</p>
 *          <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is
 *             still <code>CREATING</code>. You can check the backup creation status by calling the
 *                 <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other
 *             information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // CreateBackupRequest
 *   FileSystemId: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   VolumeId: "STRING_VALUE",
 * };
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackupResponse
 * //   Backup: { // Backup
 * //     BackupId: "STRING_VALUE", // required
 * //     Lifecycle: "AVAILABLE" || "CREATING" || "TRANSFERRING" || "DELETED" || "FAILED" || "PENDING" || "COPYING", // required
 * //     FailureDetails: { // BackupFailureDetails
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Type: "AUTOMATIC" || "USER_INITIATED" || "AWS_BACKUP", // required
 * //     ProgressPercent: Number("int"),
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     KmsKeyId: "STRING_VALUE",
 * //     ResourceARN: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     FileSystem: { // FileSystem
 * //       OwnerId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FileSystemId: "STRING_VALUE",
 * //       FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //       Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //       FailureDetails: { // FileSystemFailureDetails
 * //         Message: "STRING_VALUE",
 * //       },
 * //       StorageCapacity: Number("int"),
 * //       StorageType: "SSD" || "HDD",
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
 * //       Tags: [
 * //         {
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
 * //       },
 * //       AdministrativeActions: [ // AdministrativeActions
 * //         { // AdministrativeAction
 * //           AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE" || "THROUGHPUT_OPTIMIZATION" || "IOPS_OPTIMIZATION" || "STORAGE_TYPE_OPTIMIZATION" || "MISCONFIGURED_STATE_RECOVERY",
 * //           ProgressPercent: Number("int"),
 * //           RequestTime: new Date("TIMESTAMP"),
 * //           Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING",
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
 * //             StorageType: "SSD" || "HDD",
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
 * //             Tags: "<Tags>",
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
 * //             },
 * //             AdministrativeActions: [
 * //               {
 * //                 AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE" || "THROUGHPUT_OPTIMIZATION" || "IOPS_OPTIMIZATION" || "STORAGE_TYPE_OPTIMIZATION" || "MISCONFIGURED_STATE_RECOVERY",
 * //                 ProgressPercent: Number("int"),
 * //                 RequestTime: new Date("TIMESTAMP"),
 * //                 Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING",
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
 * //                       CopyStrategy: "CLONE" || "FULL_COPY",
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
 * //               },
 * //             ],
 * //             OntapConfiguration: { // OntapFileSystemConfiguration
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1",
 * //               EndpointIpAddressRange: "STRING_VALUE",
 * //               Endpoints: { // FileSystemEndpoints
 * //                 Intercluster: { // FileSystemEndpoint
 * //                   DNSName: "STRING_VALUE",
 * //                   IpAddresses: [ // OntapEndpointIpAddresses
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 Management: {
 * //                   DNSName: "STRING_VALUE",
 * //                   IpAddresses: [
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
 * //             },
 * //             FileSystemTypeVersion: "STRING_VALUE",
 * //             OpenZFSConfiguration: { // OpenZFSFileSystemConfiguration
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               CopyTagsToBackups: true || false,
 * //               CopyTagsToVolumes: true || false,
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2" || "MULTI_AZ_1",
 * //               ThroughputCapacity: Number("int"),
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //               DiskIopsConfiguration: {
 * //                 Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                 Iops: Number("long"),
 * //               },
 * //               RootVolumeId: "STRING_VALUE",
 * //               PreferredSubnetId: "STRING_VALUE",
 * //               EndpointIpAddressRange: "STRING_VALUE",
 * //               RouteTableIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               EndpointIpAddress: "STRING_VALUE",
 * //             },
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
 * //                 CopyStrategy: "CLONE" || "FULL_COPY",
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
 * //         },
 * //       ],
 * //       OntapConfiguration: {
 * //         AutomaticBackupRetentionDays: Number("int"),
 * //         DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //         DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1",
 * //         EndpointIpAddressRange: "STRING_VALUE",
 * //         Endpoints: {
 * //           Intercluster: {
 * //             DNSName: "STRING_VALUE",
 * //             IpAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           Management: {
 * //             DNSName: "STRING_VALUE",
 * //             IpAddresses: [
 * //               "STRING_VALUE",
 * //             ],
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
 * //       },
 * //       FileSystemTypeVersion: "STRING_VALUE",
 * //       OpenZFSConfiguration: {
 * //         AutomaticBackupRetentionDays: Number("int"),
 * //         CopyTagsToBackups: true || false,
 * //         CopyTagsToVolumes: true || false,
 * //         DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //         DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2" || "MULTI_AZ_1",
 * //         ThroughputCapacity: Number("int"),
 * //         WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //         DiskIopsConfiguration: "<DiskIopsConfiguration>",
 * //         RootVolumeId: "STRING_VALUE",
 * //         PreferredSubnetId: "STRING_VALUE",
 * //         EndpointIpAddressRange: "STRING_VALUE",
 * //         RouteTableIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         EndpointIpAddress: "STRING_VALUE",
 * //       },
 * //     },
 * //     DirectoryInformation: { // ActiveDirectoryBackupAttributes
 * //       DomainName: "STRING_VALUE",
 * //       ActiveDirectoryId: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE",
 * //     },
 * //     OwnerId: "STRING_VALUE",
 * //     SourceBackupId: "STRING_VALUE",
 * //     SourceBackupRegion: "STRING_VALUE",
 * //     ResourceType: "FILE_SYSTEM" || "VOLUME",
 * //     Volume: "<Volume>",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBackupCommandInput - {@link CreateBackupCommandInput}
 * @returns {@link CreateBackupCommandOutput}
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BackupInProgress} (client fault)
 *  <p>Another backup is already under way. Wait for completion before initiating
 *             additional backups of this file system.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link VolumeNotFound} (client fault)
 *  <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @example To create a new backup
 * ```javascript
 * // This operation creates a new backup.
 * const input = {
 *   "FileSystemId": "fs-0498eed5fe91001ec",
 *   "Tags": [
 *     {
 *       "Key": "Name",
 *       "Value": "MyBackup"
 *     }
 *   ]
 * };
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Backup": {
 *     "BackupId": "backup-03e3c82e0183b7b6b",
 *     "CreationTime": "1481841524.0",
 *     "FileSystem": {
 *       "FileSystemId": "fs-0498eed5fe91001ec",
 *       "OwnerId": "012345678912",
 *       "StorageCapacity": 300,
 *       "WindowsConfiguration": {
 *         "ActiveDirectoryId": "d-1234abcd12",
 *         "AutomaticBackupRetentionDays": 30,
 *         "DailyAutomaticBackupStartTime": "05:00",
 *         "WeeklyMaintenanceStartTime": "1:05:00"
 *       }
 *     },
 *     "Lifecycle": "CREATING",
 *     "ProgressPercent": 0,
 *     "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b",
 *     "Tags": [
 *       {
 *         "Key": "Name",
 *         "Value": "MyBackup"
 *       }
 *     ],
 *     "Type": "USER_INITIATED"
 *   }
 * }
 * *\/
 * // example id: to-create-a-new-backup-1481840798597
 * ```
 *
 */
export class CreateBackupCommand extends $Command<
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: CreateBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBackupCommandInput, CreateBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBackupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateBackupResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSimbaAPIService_v20180301",
        operation: "CreateBackup",
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
  private serialize(input: CreateBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackupCommandOutput> {
    return de_CreateBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
