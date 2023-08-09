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
} from "@smithy/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeBackupsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeBackupsCommand, se_DescribeBackupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBackupsCommand}.
 */
export interface DescribeBackupsCommandInput extends DescribeBackupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBackupsCommand}.
 */
export interface DescribeBackupsCommandOutput extends DescribeBackupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of a specific Amazon FSx backup, if a
 *                 <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all
 *             backups owned by your Amazon Web Services account in the Amazon Web Services Region of the
 *             endpoint that you're calling.</p>
 *          <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code>
 *             parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case,
 *             send a later request with the <code>NextToken</code> request parameter set to the value
 *             of the <code>NextToken</code> value from the last response.</p>
 *          <p>This operation is used in an iterative process to retrieve a list of your backups.
 *                 <code>DescribeBackups</code> is called first without a <code>NextToken</code> value.
 *             Then the operation continues to be called with the <code>NextToken</code> parameter set
 *             to the value of the last <code>NextToken</code> value until a response has no
 *                 <code>NextToken</code> value.</p>
 *          <p>When using this operation, keep the following in mind:</p>
 *          <ul>
 *             <li>
 *                <p>The operation might return fewer than the <code>MaxResults</code> value of
 *                     backup descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *             </li>
 *             <li>
 *                <p>The order of the backups returned in the response of one
 *                         <code>DescribeBackups</code> call and the order of the backups returned
 *                     across the responses of a multi-call iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeBackupsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeBackupsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DescribeBackupsRequest
 *   BackupIds: [ // BackupIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "file-system-id" || "backup-type" || "file-system-type" || "volume-id" || "data-repository-type" || "file-cache-id" || "file-cache-type",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBackupsResponse
 * //   Backups: [ // Backups
 * //     { // Backup
 * //       BackupId: "STRING_VALUE", // required
 * //       Lifecycle: "AVAILABLE" || "CREATING" || "TRANSFERRING" || "DELETED" || "FAILED" || "PENDING" || "COPYING", // required
 * //       FailureDetails: { // BackupFailureDetails
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Type: "AUTOMATIC" || "USER_INITIATED" || "AWS_BACKUP", // required
 * //       ProgressPercent: Number("int"),
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       KmsKeyId: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       FileSystem: { // FileSystem
 * //         OwnerId: "STRING_VALUE",
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         FileSystemId: "STRING_VALUE",
 * //         FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //         Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //         FailureDetails: { // FileSystemFailureDetails
 * //           Message: "STRING_VALUE",
 * //         },
 * //         StorageCapacity: Number("int"),
 * //         StorageType: "SSD" || "HDD",
 * //         VpcId: "STRING_VALUE",
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         NetworkInterfaceIds: [ // NetworkInterfaceIds
 * //           "STRING_VALUE",
 * //         ],
 * //         DNSName: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //         ResourceARN: "STRING_VALUE",
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         WindowsConfiguration: { // WindowsFileSystemConfiguration
 * //           ActiveDirectoryId: "STRING_VALUE",
 * //           SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryAttributes
 * //             DomainName: "STRING_VALUE",
 * //             OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //             FileSystemAdministratorsGroup: "STRING_VALUE",
 * //             UserName: "STRING_VALUE",
 * //             DnsIps: [ // DnsIps
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //           RemoteAdministrationEndpoint: "STRING_VALUE",
 * //           PreferredSubnetId: "STRING_VALUE",
 * //           PreferredFileServerIp: "STRING_VALUE",
 * //           ThroughputCapacity: Number("int"),
 * //           MaintenanceOperationsInProgress: [ // FileSystemMaintenanceOperations
 * //             "PATCHING" || "BACKING_UP",
 * //           ],
 * //           WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //           DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //           AutomaticBackupRetentionDays: Number("int"),
 * //           CopyTagsToBackups: true || false,
 * //           Aliases: [ // Aliases
 * //             { // Alias
 * //               Name: "STRING_VALUE",
 * //               Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //             },
 * //           ],
 * //           AuditLogConfiguration: { // WindowsAuditLogConfiguration
 * //             FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //             FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //             AuditLogDestination: "STRING_VALUE",
 * //           },
 * //           DiskIopsConfiguration: { // DiskIopsConfiguration
 * //             Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //             Iops: Number("long"),
 * //           },
 * //         },
 * //         LustreConfiguration: { // LustreFileSystemConfiguration
 * //           WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //           DataRepositoryConfiguration: { // DataRepositoryConfiguration
 * //             Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //             ImportPath: "STRING_VALUE",
 * //             ExportPath: "STRING_VALUE",
 * //             ImportedFileChunkSize: Number("int"),
 * //             AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 * //             FailureDetails: { // DataRepositoryFailureDetails
 * //               Message: "STRING_VALUE",
 * //             },
 * //           },
 * //           DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 * //           PerUnitStorageThroughput: Number("int"),
 * //           MountName: "STRING_VALUE",
 * //           DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //           AutomaticBackupRetentionDays: Number("int"),
 * //           CopyTagsToBackups: true || false,
 * //           DriveCacheType: "NONE" || "READ",
 * //           DataCompressionType: "NONE" || "LZ4",
 * //           LogConfiguration: { // LustreLogConfiguration
 * //             Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //             Destination: "STRING_VALUE",
 * //           },
 * //           RootSquashConfiguration: { // LustreRootSquashConfiguration
 * //             RootSquash: "STRING_VALUE",
 * //             NoSquashNids: [ // LustreNoSquashNids
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         AdministrativeActions: [ // AdministrativeActions
 * //           { // AdministrativeAction
 * //             AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE" || "THROUGHPUT_OPTIMIZATION" || "IOPS_OPTIMIZATION" || "STORAGE_TYPE_OPTIMIZATION",
 * //             ProgressPercent: Number("int"),
 * //             RequestTime: new Date("TIMESTAMP"),
 * //             Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING",
 * //             TargetFileSystemValues: {
 * //               OwnerId: "STRING_VALUE",
 * //               CreationTime: new Date("TIMESTAMP"),
 * //               FileSystemId: "STRING_VALUE",
 * //               FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //               Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //               FailureDetails: {
 * //                 Message: "STRING_VALUE",
 * //               },
 * //               StorageCapacity: Number("int"),
 * //               StorageType: "SSD" || "HDD",
 * //               VpcId: "STRING_VALUE",
 * //               SubnetIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NetworkInterfaceIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               DNSName: "STRING_VALUE",
 * //               KmsKeyId: "STRING_VALUE",
 * //               ResourceARN: "STRING_VALUE",
 * //               Tags: "<Tags>",
 * //               WindowsConfiguration: {
 * //                 ActiveDirectoryId: "STRING_VALUE",
 * //                 SelfManagedActiveDirectoryConfiguration: {
 * //                   DomainName: "STRING_VALUE",
 * //                   OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //                   FileSystemAdministratorsGroup: "STRING_VALUE",
 * //                   UserName: "STRING_VALUE",
 * //                   DnsIps: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //                 RemoteAdministrationEndpoint: "STRING_VALUE",
 * //                 PreferredSubnetId: "STRING_VALUE",
 * //                 PreferredFileServerIp: "STRING_VALUE",
 * //                 ThroughputCapacity: Number("int"),
 * //                 MaintenanceOperationsInProgress: [
 * //                   "PATCHING" || "BACKING_UP",
 * //                 ],
 * //                 WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                 DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                 AutomaticBackupRetentionDays: Number("int"),
 * //                 CopyTagsToBackups: true || false,
 * //                 Aliases: [
 * //                   {
 * //                     Name: "STRING_VALUE",
 * //                     Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //                   },
 * //                 ],
 * //                 AuditLogConfiguration: {
 * //                   FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                   FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                   AuditLogDestination: "STRING_VALUE",
 * //                 },
 * //                 DiskIopsConfiguration: {
 * //                   Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                   Iops: Number("long"),
 * //                 },
 * //               },
 * //               LustreConfiguration: {
 * //                 WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                 DataRepositoryConfiguration: {
 * //                   Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //                   ImportPath: "STRING_VALUE",
 * //                   ExportPath: "STRING_VALUE",
 * //                   ImportedFileChunkSize: Number("int"),
 * //                   AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 * //                   FailureDetails: {
 * //                     Message: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 * //                 PerUnitStorageThroughput: Number("int"),
 * //                 MountName: "STRING_VALUE",
 * //                 DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                 AutomaticBackupRetentionDays: Number("int"),
 * //                 CopyTagsToBackups: true || false,
 * //                 DriveCacheType: "NONE" || "READ",
 * //                 DataCompressionType: "NONE" || "LZ4",
 * //                 LogConfiguration: {
 * //                   Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //                   Destination: "STRING_VALUE",
 * //                 },
 * //                 RootSquashConfiguration: {
 * //                   RootSquash: "STRING_VALUE",
 * //                   NoSquashNids: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               AdministrativeActions: [
 * //                 {
 * //                   AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE" || "THROUGHPUT_OPTIMIZATION" || "IOPS_OPTIMIZATION" || "STORAGE_TYPE_OPTIMIZATION",
 * //                   ProgressPercent: Number("int"),
 * //                   RequestTime: new Date("TIMESTAMP"),
 * //                   Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING",
 * //                   TargetFileSystemValues: "<FileSystem>",
 * //                   FailureDetails: { // AdministrativeActionFailureDetails
 * //                     Message: "STRING_VALUE",
 * //                   },
 * //                   TargetVolumeValues: { // Volume
 * //                     CreationTime: new Date("TIMESTAMP"),
 * //                     FileSystemId: "STRING_VALUE",
 * //                     Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING" || "AVAILABLE",
 * //                     Name: "STRING_VALUE",
 * //                     OntapConfiguration: { // OntapVolumeConfiguration
 * //                       FlexCacheEndpointType: "NONE" || "ORIGIN" || "CACHE",
 * //                       JunctionPath: "STRING_VALUE",
 * //                       SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //                       SizeInMegabytes: Number("int"),
 * //                       StorageEfficiencyEnabled: true || false,
 * //                       StorageVirtualMachineId: "STRING_VALUE",
 * //                       StorageVirtualMachineRoot: true || false,
 * //                       TieringPolicy: { // TieringPolicy
 * //                         CoolingPeriod: Number("int"),
 * //                         Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 * //                       },
 * //                       UUID: "STRING_VALUE",
 * //                       OntapVolumeType: "RW" || "DP" || "LS",
 * //                       SnapshotPolicy: "STRING_VALUE",
 * //                       CopyTagsToBackups: true || false,
 * //                       SnaplockConfiguration: { // SnaplockConfiguration
 * //                         AuditLogVolume: true || false,
 * //                         AutocommitPeriod: { // AutocommitPeriod
 * //                           Type: "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "NONE", // required
 * //                           Value: Number("int"),
 * //                         },
 * //                         PrivilegedDelete: "DISABLED" || "ENABLED" || "PERMANENTLY_DISABLED",
 * //                         RetentionPeriod: { // SnaplockRetentionPeriod
 * //                           DefaultRetention: { // RetentionPeriod
 * //                             Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                             Value: Number("int"),
 * //                           },
 * //                           MinimumRetention: {
 * //                             Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                             Value: Number("int"),
 * //                           },
 * //                           MaximumRetention: {
 * //                             Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                             Value: Number("int"),
 * //                           },
 * //                         },
 * //                         SnaplockType: "COMPLIANCE" || "ENTERPRISE",
 * //                         VolumeAppendModeEnabled: true || false,
 * //                       },
 * //                     },
 * //                     ResourceARN: "STRING_VALUE",
 * //                     Tags: "<Tags>",
 * //                     VolumeId: "STRING_VALUE",
 * //                     VolumeType: "ONTAP" || "OPENZFS",
 * //                     LifecycleTransitionReason: { // LifecycleTransitionReason
 * //                       Message: "STRING_VALUE",
 * //                     },
 * //                     AdministrativeActions: "<AdministrativeActions>",
 * //                     OpenZFSConfiguration: { // OpenZFSVolumeConfiguration
 * //                       ParentVolumeId: "STRING_VALUE",
 * //                       VolumePath: "STRING_VALUE",
 * //                       StorageCapacityReservationGiB: Number("int"),
 * //                       StorageCapacityQuotaGiB: Number("int"),
 * //                       RecordSizeKiB: Number("int"),
 * //                       DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 * //                       CopyTagsToSnapshots: true || false,
 * //                       OriginSnapshot: { // OpenZFSOriginSnapshotConfiguration
 * //                         SnapshotARN: "STRING_VALUE",
 * //                         CopyStrategy: "CLONE" || "FULL_COPY",
 * //                       },
 * //                       ReadOnly: true || false,
 * //                       NfsExports: [ // OpenZFSNfsExports
 * //                         { // OpenZFSNfsExport
 * //                           ClientConfigurations: [ // OpenZFSClientConfigurations // required
 * //                             { // OpenZFSClientConfiguration
 * //                               Clients: "STRING_VALUE", // required
 * //                               Options: [ // OpenZFSNfsExportOptions // required
 * //                                 "STRING_VALUE",
 * //                               ],
 * //                             },
 * //                           ],
 * //                         },
 * //                       ],
 * //                       UserAndGroupQuotas: [ // OpenZFSUserAndGroupQuotas
 * //                         { // OpenZFSUserOrGroupQuota
 * //                           Type: "USER" || "GROUP", // required
 * //                           Id: Number("int"), // required
 * //                           StorageCapacityQuotaGiB: Number("int"), // required
 * //                         },
 * //                       ],
 * //                       RestoreToSnapshot: "STRING_VALUE",
 * //                       DeleteIntermediateSnaphots: true || false,
 * //                       DeleteClonedVolumes: true || false,
 * //                     },
 * //                   },
 * //                   TargetSnapshotValues: { // Snapshot
 * //                     ResourceARN: "STRING_VALUE",
 * //                     SnapshotId: "STRING_VALUE",
 * //                     Name: "STRING_VALUE",
 * //                     VolumeId: "STRING_VALUE",
 * //                     CreationTime: new Date("TIMESTAMP"),
 * //                     Lifecycle: "PENDING" || "CREATING" || "DELETING" || "AVAILABLE",
 * //                     LifecycleTransitionReason: {
 * //                       Message: "STRING_VALUE",
 * //                     },
 * //                     Tags: "<Tags>",
 * //                     AdministrativeActions: "<AdministrativeActions>",
 * //                   },
 * //                 },
 * //               ],
 * //               OntapConfiguration: { // OntapFileSystemConfiguration
 * //                 AutomaticBackupRetentionDays: Number("int"),
 * //                 DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                 DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1",
 * //                 EndpointIpAddressRange: "STRING_VALUE",
 * //                 Endpoints: { // FileSystemEndpoints
 * //                   Intercluster: { // FileSystemEndpoint
 * //                     DNSName: "STRING_VALUE",
 * //                     IpAddresses: [ // OntapEndpointIpAddresses
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                   Management: {
 * //                     DNSName: "STRING_VALUE",
 * //                     IpAddresses: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //                 DiskIopsConfiguration: {
 * //                   Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                   Iops: Number("long"),
 * //                 },
 * //                 PreferredSubnetId: "STRING_VALUE",
 * //                 RouteTableIds: [ // RouteTableIds
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 ThroughputCapacity: Number("int"),
 * //                 WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                 FsxAdminPassword: "STRING_VALUE",
 * //               },
 * //               FileSystemTypeVersion: "STRING_VALUE",
 * //               OpenZFSConfiguration: { // OpenZFSFileSystemConfiguration
 * //                 AutomaticBackupRetentionDays: Number("int"),
 * //                 CopyTagsToBackups: true || false,
 * //                 CopyTagsToVolumes: true || false,
 * //                 DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                 DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2" || "MULTI_AZ_1",
 * //                 ThroughputCapacity: Number("int"),
 * //                 WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                 DiskIopsConfiguration: {
 * //                   Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                   Iops: Number("long"),
 * //                 },
 * //                 RootVolumeId: "STRING_VALUE",
 * //                 PreferredSubnetId: "STRING_VALUE",
 * //                 EndpointIpAddressRange: "STRING_VALUE",
 * //                 RouteTableIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 EndpointIpAddress: "STRING_VALUE",
 * //               },
 * //             },
 * //             FailureDetails: {
 * //               Message: "STRING_VALUE",
 * //             },
 * //             TargetVolumeValues: {
 * //               CreationTime: new Date("TIMESTAMP"),
 * //               FileSystemId: "STRING_VALUE",
 * //               Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING" || "AVAILABLE",
 * //               Name: "STRING_VALUE",
 * //               OntapConfiguration: {
 * //                 FlexCacheEndpointType: "NONE" || "ORIGIN" || "CACHE",
 * //                 JunctionPath: "STRING_VALUE",
 * //                 SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //                 SizeInMegabytes: Number("int"),
 * //                 StorageEfficiencyEnabled: true || false,
 * //                 StorageVirtualMachineId: "STRING_VALUE",
 * //                 StorageVirtualMachineRoot: true || false,
 * //                 TieringPolicy: {
 * //                   CoolingPeriod: Number("int"),
 * //                   Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 * //                 },
 * //                 UUID: "STRING_VALUE",
 * //                 OntapVolumeType: "RW" || "DP" || "LS",
 * //                 SnapshotPolicy: "STRING_VALUE",
 * //                 CopyTagsToBackups: true || false,
 * //                 SnaplockConfiguration: {
 * //                   AuditLogVolume: true || false,
 * //                   AutocommitPeriod: {
 * //                     Type: "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "NONE", // required
 * //                     Value: Number("int"),
 * //                   },
 * //                   PrivilegedDelete: "DISABLED" || "ENABLED" || "PERMANENTLY_DISABLED",
 * //                   RetentionPeriod: {
 * //                     DefaultRetention: {
 * //                       Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                       Value: Number("int"),
 * //                     },
 * //                     MinimumRetention: {
 * //                       Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE" || "UNSPECIFIED", // required
 * //                       Value: Number("int"),
 * //                     },
 * //                     MaximumRetention: "<RetentionPeriod>", // required
 * //                   },
 * //                   SnaplockType: "COMPLIANCE" || "ENTERPRISE",
 * //                   VolumeAppendModeEnabled: true || false,
 * //                 },
 * //               },
 * //               ResourceARN: "STRING_VALUE",
 * //               Tags: "<Tags>",
 * //               VolumeId: "STRING_VALUE",
 * //               VolumeType: "ONTAP" || "OPENZFS",
 * //               LifecycleTransitionReason: {
 * //                 Message: "STRING_VALUE",
 * //               },
 * //               AdministrativeActions: "<AdministrativeActions>",
 * //               OpenZFSConfiguration: {
 * //                 ParentVolumeId: "STRING_VALUE",
 * //                 VolumePath: "STRING_VALUE",
 * //                 StorageCapacityReservationGiB: Number("int"),
 * //                 StorageCapacityQuotaGiB: Number("int"),
 * //                 RecordSizeKiB: Number("int"),
 * //                 DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 * //                 CopyTagsToSnapshots: true || false,
 * //                 OriginSnapshot: {
 * //                   SnapshotARN: "STRING_VALUE",
 * //                   CopyStrategy: "CLONE" || "FULL_COPY",
 * //                 },
 * //                 ReadOnly: true || false,
 * //                 NfsExports: [
 * //                   {
 * //                     ClientConfigurations: [ // required
 * //                       {
 * //                         Clients: "STRING_VALUE", // required
 * //                         Options: [ // required
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                     ],
 * //                   },
 * //                 ],
 * //                 UserAndGroupQuotas: [
 * //                   {
 * //                     Type: "USER" || "GROUP", // required
 * //                     Id: Number("int"), // required
 * //                     StorageCapacityQuotaGiB: Number("int"), // required
 * //                   },
 * //                 ],
 * //                 RestoreToSnapshot: "STRING_VALUE",
 * //                 DeleteIntermediateSnaphots: true || false,
 * //                 DeleteClonedVolumes: true || false,
 * //               },
 * //             },
 * //             TargetSnapshotValues: {
 * //               ResourceARN: "STRING_VALUE",
 * //               SnapshotId: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               VolumeId: "STRING_VALUE",
 * //               CreationTime: new Date("TIMESTAMP"),
 * //               Lifecycle: "PENDING" || "CREATING" || "DELETING" || "AVAILABLE",
 * //               LifecycleTransitionReason: {
 * //                 Message: "STRING_VALUE",
 * //               },
 * //               Tags: "<Tags>",
 * //               AdministrativeActions: "<AdministrativeActions>",
 * //             },
 * //           },
 * //         ],
 * //         OntapConfiguration: {
 * //           AutomaticBackupRetentionDays: Number("int"),
 * //           DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //           DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1",
 * //           EndpointIpAddressRange: "STRING_VALUE",
 * //           Endpoints: {
 * //             Intercluster: {
 * //               DNSName: "STRING_VALUE",
 * //               IpAddresses: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Management: {
 * //               DNSName: "STRING_VALUE",
 * //               IpAddresses: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           DiskIopsConfiguration: {
 * //             Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //             Iops: Number("long"),
 * //           },
 * //           PreferredSubnetId: "STRING_VALUE",
 * //           RouteTableIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //           ThroughputCapacity: Number("int"),
 * //           WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //           FsxAdminPassword: "STRING_VALUE",
 * //         },
 * //         FileSystemTypeVersion: "STRING_VALUE",
 * //         OpenZFSConfiguration: {
 * //           AutomaticBackupRetentionDays: Number("int"),
 * //           CopyTagsToBackups: true || false,
 * //           CopyTagsToVolumes: true || false,
 * //           DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //           DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2" || "MULTI_AZ_1",
 * //           ThroughputCapacity: Number("int"),
 * //           WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //           DiskIopsConfiguration: "<DiskIopsConfiguration>",
 * //           RootVolumeId: "STRING_VALUE",
 * //           PreferredSubnetId: "STRING_VALUE",
 * //           EndpointIpAddressRange: "STRING_VALUE",
 * //           RouteTableIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EndpointIpAddress: "STRING_VALUE",
 * //         },
 * //       },
 * //       DirectoryInformation: { // ActiveDirectoryBackupAttributes
 * //         DomainName: "STRING_VALUE",
 * //         ActiveDirectoryId: "STRING_VALUE",
 * //         ResourceARN: "STRING_VALUE",
 * //       },
 * //       OwnerId: "STRING_VALUE",
 * //       SourceBackupId: "STRING_VALUE",
 * //       SourceBackupRegion: "STRING_VALUE",
 * //       ResourceType: "FILE_SYSTEM" || "VOLUME",
 * //       Volume: "<Volume>",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBackupsCommandInput - {@link DescribeBackupsCommandInput}
 * @returns {@link DescribeBackupsCommandOutput}
 * @see {@link DescribeBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BackupNotFound} (client fault)
 *  <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
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
 * @throws {@link VolumeNotFound} (client fault)
 *  <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @example To describe Amazon FSx backups
 * ```javascript
 * // This operation describes all of the Amazon FSx backups in an account.
 * const input = {};
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Backups": [
 *     {
 *       "BackupId": "backup-03e3c82e0183b7b6b",
 *       "CreationTime": "1481841524.0",
 *       "FileSystem": {
 *         "FileSystemId": "fs-0498eed5fe91001ec",
 *         "OwnerId": "012345678912",
 *         "StorageCapacity": 300,
 *         "WindowsConfiguration": {
 *           "ActiveDirectoryId": "d-1234abcd12",
 *           "AutomaticBackupRetentionDays": 30,
 *           "DailyAutomaticBackupStartTime": "05:00",
 *           "WeeklyMaintenanceStartTime": "1:05:00"
 *         }
 *       },
 *       "Lifecycle": "AVAILABLE",
 *       "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b",
 *       "Tags": [
 *         {
 *           "Key": "Name",
 *           "Value": "MyBackup"
 *         }
 *       ],
 *       "Type": "USER_INITIATED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-backups-1481848448499
 * ```
 *
 */
export class DescribeBackupsCommand extends $Command<
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
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
  constructor(readonly input: DescribeBackupsCommandInput) {
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
  ): Handler<DescribeBackupsCommandInput, DescribeBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBackupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeBackupsResponseFilterSensitiveLog,
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
  private serialize(input: DescribeBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBackupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupsCommandOutput> {
    return de_DescribeBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
