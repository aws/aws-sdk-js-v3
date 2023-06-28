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
import { CreateVolumeRequest, CreateVolumeResponse, CreateVolumeResponseFilterSensitiveLog } from "../models/models_0";
import { de_CreateVolumeCommand, se_CreateVolumeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVolumeCommand}.
 */
export interface CreateVolumeCommandInput extends CreateVolumeRequest {}
/**
 * @public
 *
 * The output of {@link CreateVolumeCommand}.
 */
export interface CreateVolumeCommandOutput extends CreateVolumeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateVolumeCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateVolumeCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // CreateVolumeRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   VolumeType: "ONTAP" || "OPENZFS", // required
 *   Name: "STRING_VALUE", // required
 *   OntapConfiguration: { // CreateOntapVolumeConfiguration
 *     JunctionPath: "STRING_VALUE",
 *     SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 *     SizeInMegabytes: Number("int"), // required
 *     StorageEfficiencyEnabled: true || false,
 *     StorageVirtualMachineId: "STRING_VALUE", // required
 *     TieringPolicy: { // TieringPolicy
 *       CoolingPeriod: Number("int"),
 *       Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 *     },
 *     OntapVolumeType: "RW" || "DP",
 *     SnapshotPolicy: "STRING_VALUE",
 *     CopyTagsToBackups: true || false,
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   OpenZFSConfiguration: { // CreateOpenZFSVolumeConfiguration
 *     ParentVolumeId: "STRING_VALUE", // required
 *     StorageCapacityReservationGiB: Number("int"),
 *     StorageCapacityQuotaGiB: Number("int"),
 *     RecordSizeKiB: Number("int"),
 *     DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 *     CopyTagsToSnapshots: true || false,
 *     OriginSnapshot: { // CreateOpenZFSOriginSnapshotConfiguration
 *       SnapshotARN: "STRING_VALUE", // required
 *       CopyStrategy: "CLONE" || "FULL_COPY", // required
 *     },
 *     ReadOnly: true || false,
 *     NfsExports: [ // OpenZFSNfsExports
 *       { // OpenZFSNfsExport
 *         ClientConfigurations: [ // OpenZFSClientConfigurations // required
 *           { // OpenZFSClientConfiguration
 *             Clients: "STRING_VALUE", // required
 *             Options: [ // OpenZFSNfsExportOptions // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *     UserAndGroupQuotas: [ // OpenZFSUserAndGroupQuotas
 *       { // OpenZFSUserOrGroupQuota
 *         Type: "USER" || "GROUP", // required
 *         Id: Number("int"), // required
 *         StorageCapacityQuotaGiB: Number("int"), // required
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateVolumeCommand(input);
 * const response = await client.send(command);
 * // { // CreateVolumeResponse
 * //   Volume: { // Volume
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     FileSystemId: "STRING_VALUE",
 * //     Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING" || "AVAILABLE",
 * //     Name: "STRING_VALUE",
 * //     OntapConfiguration: { // OntapVolumeConfiguration
 * //       FlexCacheEndpointType: "NONE" || "ORIGIN" || "CACHE",
 * //       JunctionPath: "STRING_VALUE",
 * //       SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //       SizeInMegabytes: Number("int"),
 * //       StorageEfficiencyEnabled: true || false,
 * //       StorageVirtualMachineId: "STRING_VALUE",
 * //       StorageVirtualMachineRoot: true || false,
 * //       TieringPolicy: { // TieringPolicy
 * //         CoolingPeriod: Number("int"),
 * //         Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 * //       },
 * //       UUID: "STRING_VALUE",
 * //       OntapVolumeType: "RW" || "DP" || "LS",
 * //       SnapshotPolicy: "STRING_VALUE",
 * //       CopyTagsToBackups: true || false,
 * //     },
 * //     ResourceARN: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     VolumeId: "STRING_VALUE",
 * //     VolumeType: "ONTAP" || "OPENZFS",
 * //     LifecycleTransitionReason: { // LifecycleTransitionReason
 * //       Message: "STRING_VALUE",
 * //     },
 * //     AdministrativeActions: [ // AdministrativeActions
 * //       { // AdministrativeAction
 * //         AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE",
 * //         ProgressPercent: Number("int"),
 * //         RequestTime: new Date("TIMESTAMP"),
 * //         Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING",
 * //         TargetFileSystemValues: { // FileSystem
 * //           OwnerId: "STRING_VALUE",
 * //           CreationTime: new Date("TIMESTAMP"),
 * //           FileSystemId: "STRING_VALUE",
 * //           FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //           Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //           FailureDetails: { // FileSystemFailureDetails
 * //             Message: "STRING_VALUE",
 * //           },
 * //           StorageCapacity: Number("int"),
 * //           StorageType: "SSD" || "HDD",
 * //           VpcId: "STRING_VALUE",
 * //           SubnetIds: [ // SubnetIds
 * //             "STRING_VALUE",
 * //           ],
 * //           NetworkInterfaceIds: [ // NetworkInterfaceIds
 * //             "STRING_VALUE",
 * //           ],
 * //           DNSName: "STRING_VALUE",
 * //           KmsKeyId: "STRING_VALUE",
 * //           ResourceARN: "STRING_VALUE",
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           WindowsConfiguration: { // WindowsFileSystemConfiguration
 * //             ActiveDirectoryId: "STRING_VALUE",
 * //             SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryAttributes
 * //               DomainName: "STRING_VALUE",
 * //               OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //               FileSystemAdministratorsGroup: "STRING_VALUE",
 * //               UserName: "STRING_VALUE",
 * //               DnsIps: [ // DnsIps
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //             RemoteAdministrationEndpoint: "STRING_VALUE",
 * //             PreferredSubnetId: "STRING_VALUE",
 * //             PreferredFileServerIp: "STRING_VALUE",
 * //             ThroughputCapacity: Number("int"),
 * //             MaintenanceOperationsInProgress: [ // FileSystemMaintenanceOperations
 * //               "PATCHING" || "BACKING_UP",
 * //             ],
 * //             WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //             DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //             AutomaticBackupRetentionDays: Number("int"),
 * //             CopyTagsToBackups: true || false,
 * //             Aliases: [ // Aliases
 * //               { // Alias
 * //                 Name: "STRING_VALUE",
 * //                 Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //               },
 * //             ],
 * //             AuditLogConfiguration: { // WindowsAuditLogConfiguration
 * //               FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //               FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //               AuditLogDestination: "STRING_VALUE",
 * //             },
 * //           },
 * //           LustreConfiguration: { // LustreFileSystemConfiguration
 * //             WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //             DataRepositoryConfiguration: { // DataRepositoryConfiguration
 * //               Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //               ImportPath: "STRING_VALUE",
 * //               ExportPath: "STRING_VALUE",
 * //               ImportedFileChunkSize: Number("int"),
 * //               AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 * //               FailureDetails: { // DataRepositoryFailureDetails
 * //                 Message: "STRING_VALUE",
 * //               },
 * //             },
 * //             DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 * //             PerUnitStorageThroughput: Number("int"),
 * //             MountName: "STRING_VALUE",
 * //             DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //             AutomaticBackupRetentionDays: Number("int"),
 * //             CopyTagsToBackups: true || false,
 * //             DriveCacheType: "NONE" || "READ",
 * //             DataCompressionType: "NONE" || "LZ4",
 * //             LogConfiguration: { // LustreLogConfiguration
 * //               Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //               Destination: "STRING_VALUE",
 * //             },
 * //             RootSquashConfiguration: { // LustreRootSquashConfiguration
 * //               RootSquash: "STRING_VALUE",
 * //               NoSquashNids: [ // LustreNoSquashNids
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           AdministrativeActions: [
 * //             {
 * //               AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE",
 * //               ProgressPercent: Number("int"),
 * //               RequestTime: new Date("TIMESTAMP"),
 * //               Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING",
 * //               TargetFileSystemValues: {
 * //                 OwnerId: "STRING_VALUE",
 * //                 CreationTime: new Date("TIMESTAMP"),
 * //                 FileSystemId: "STRING_VALUE",
 * //                 FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //                 Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //                 FailureDetails: {
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //                 StorageCapacity: Number("int"),
 * //                 StorageType: "SSD" || "HDD",
 * //                 VpcId: "STRING_VALUE",
 * //                 SubnetIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NetworkInterfaceIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 DNSName: "STRING_VALUE",
 * //                 KmsKeyId: "STRING_VALUE",
 * //                 ResourceARN: "STRING_VALUE",
 * //                 Tags: "<Tags>",
 * //                 WindowsConfiguration: {
 * //                   ActiveDirectoryId: "STRING_VALUE",
 * //                   SelfManagedActiveDirectoryConfiguration: {
 * //                     DomainName: "STRING_VALUE",
 * //                     OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //                     FileSystemAdministratorsGroup: "STRING_VALUE",
 * //                     UserName: "STRING_VALUE",
 * //                     DnsIps: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                   DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //                   RemoteAdministrationEndpoint: "STRING_VALUE",
 * //                   PreferredSubnetId: "STRING_VALUE",
 * //                   PreferredFileServerIp: "STRING_VALUE",
 * //                   ThroughputCapacity: Number("int"),
 * //                   MaintenanceOperationsInProgress: [
 * //                     "PATCHING" || "BACKING_UP",
 * //                   ],
 * //                   WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                   DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                   AutomaticBackupRetentionDays: Number("int"),
 * //                   CopyTagsToBackups: true || false,
 * //                   Aliases: [
 * //                     {
 * //                       Name: "STRING_VALUE",
 * //                       Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //                     },
 * //                   ],
 * //                   AuditLogConfiguration: {
 * //                     FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                     FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                     AuditLogDestination: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 LustreConfiguration: {
 * //                   WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                   DataRepositoryConfiguration: {
 * //                     Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //                     ImportPath: "STRING_VALUE",
 * //                     ExportPath: "STRING_VALUE",
 * //                     ImportedFileChunkSize: Number("int"),
 * //                     AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 * //                     FailureDetails: {
 * //                       Message: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 * //                   PerUnitStorageThroughput: Number("int"),
 * //                   MountName: "STRING_VALUE",
 * //                   DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                   AutomaticBackupRetentionDays: Number("int"),
 * //                   CopyTagsToBackups: true || false,
 * //                   DriveCacheType: "NONE" || "READ",
 * //                   DataCompressionType: "NONE" || "LZ4",
 * //                   LogConfiguration: {
 * //                     Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //                     Destination: "STRING_VALUE",
 * //                   },
 * //                   RootSquashConfiguration: {
 * //                     RootSquash: "STRING_VALUE",
 * //                     NoSquashNids: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //                 AdministrativeActions: "<AdministrativeActions>",
 * //                 OntapConfiguration: { // OntapFileSystemConfiguration
 * //                   AutomaticBackupRetentionDays: Number("int"),
 * //                   DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                   DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1",
 * //                   EndpointIpAddressRange: "STRING_VALUE",
 * //                   Endpoints: { // FileSystemEndpoints
 * //                     Intercluster: { // FileSystemEndpoint
 * //                       DNSName: "STRING_VALUE",
 * //                       IpAddresses: [ // OntapEndpointIpAddresses
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     Management: {
 * //                       DNSName: "STRING_VALUE",
 * //                       IpAddresses: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   DiskIopsConfiguration: { // DiskIopsConfiguration
 * //                     Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                     Iops: Number("long"),
 * //                   },
 * //                   PreferredSubnetId: "STRING_VALUE",
 * //                   RouteTableIds: [ // RouteTableIds
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   ThroughputCapacity: Number("int"),
 * //                   WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                   FsxAdminPassword: "STRING_VALUE",
 * //                 },
 * //                 FileSystemTypeVersion: "STRING_VALUE",
 * //                 OpenZFSConfiguration: { // OpenZFSFileSystemConfiguration
 * //                   AutomaticBackupRetentionDays: Number("int"),
 * //                   CopyTagsToBackups: true || false,
 * //                   CopyTagsToVolumes: true || false,
 * //                   DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                   DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //                   ThroughputCapacity: Number("int"),
 * //                   WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                   DiskIopsConfiguration: {
 * //                     Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                     Iops: Number("long"),
 * //                   },
 * //                   RootVolumeId: "STRING_VALUE",
 * //                 },
 * //               },
 * //               FailureDetails: { // AdministrativeActionFailureDetails
 * //                 Message: "STRING_VALUE",
 * //               },
 * //               TargetVolumeValues: {
 * //                 CreationTime: new Date("TIMESTAMP"),
 * //                 FileSystemId: "STRING_VALUE",
 * //                 Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING" || "AVAILABLE",
 * //                 Name: "STRING_VALUE",
 * //                 OntapConfiguration: {
 * //                   FlexCacheEndpointType: "NONE" || "ORIGIN" || "CACHE",
 * //                   JunctionPath: "STRING_VALUE",
 * //                   SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //                   SizeInMegabytes: Number("int"),
 * //                   StorageEfficiencyEnabled: true || false,
 * //                   StorageVirtualMachineId: "STRING_VALUE",
 * //                   StorageVirtualMachineRoot: true || false,
 * //                   TieringPolicy: {
 * //                     CoolingPeriod: Number("int"),
 * //                     Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 * //                   },
 * //                   UUID: "STRING_VALUE",
 * //                   OntapVolumeType: "RW" || "DP" || "LS",
 * //                   SnapshotPolicy: "STRING_VALUE",
 * //                   CopyTagsToBackups: true || false,
 * //                 },
 * //                 ResourceARN: "STRING_VALUE",
 * //                 Tags: "<Tags>",
 * //                 VolumeId: "STRING_VALUE",
 * //                 VolumeType: "ONTAP" || "OPENZFS",
 * //                 LifecycleTransitionReason: {
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //                 AdministrativeActions: "<AdministrativeActions>",
 * //                 OpenZFSConfiguration: { // OpenZFSVolumeConfiguration
 * //                   ParentVolumeId: "STRING_VALUE",
 * //                   VolumePath: "STRING_VALUE",
 * //                   StorageCapacityReservationGiB: Number("int"),
 * //                   StorageCapacityQuotaGiB: Number("int"),
 * //                   RecordSizeKiB: Number("int"),
 * //                   DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 * //                   CopyTagsToSnapshots: true || false,
 * //                   OriginSnapshot: { // OpenZFSOriginSnapshotConfiguration
 * //                     SnapshotARN: "STRING_VALUE",
 * //                     CopyStrategy: "CLONE" || "FULL_COPY",
 * //                   },
 * //                   ReadOnly: true || false,
 * //                   NfsExports: [ // OpenZFSNfsExports
 * //                     { // OpenZFSNfsExport
 * //                       ClientConfigurations: [ // OpenZFSClientConfigurations // required
 * //                         { // OpenZFSClientConfiguration
 * //                           Clients: "STRING_VALUE", // required
 * //                           Options: [ // OpenZFSNfsExportOptions // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                         },
 * //                       ],
 * //                     },
 * //                   ],
 * //                   UserAndGroupQuotas: [ // OpenZFSUserAndGroupQuotas
 * //                     { // OpenZFSUserOrGroupQuota
 * //                       Type: "USER" || "GROUP", // required
 * //                       Id: Number("int"), // required
 * //                       StorageCapacityQuotaGiB: Number("int"), // required
 * //                     },
 * //                   ],
 * //                   RestoreToSnapshot: "STRING_VALUE",
 * //                   DeleteIntermediateSnaphots: true || false,
 * //                   DeleteClonedVolumes: true || false,
 * //                 },
 * //               },
 * //               TargetSnapshotValues: { // Snapshot
 * //                 ResourceARN: "STRING_VALUE",
 * //                 SnapshotId: "STRING_VALUE",
 * //                 Name: "STRING_VALUE",
 * //                 VolumeId: "STRING_VALUE",
 * //                 CreationTime: new Date("TIMESTAMP"),
 * //                 Lifecycle: "PENDING" || "CREATING" || "DELETING" || "AVAILABLE",
 * //                 LifecycleTransitionReason: {
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //                 Tags: "<Tags>",
 * //                 AdministrativeActions: "<AdministrativeActions>",
 * //               },
 * //             },
 * //           ],
 * //           OntapConfiguration: {
 * //             AutomaticBackupRetentionDays: Number("int"),
 * //             DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //             DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1",
 * //             EndpointIpAddressRange: "STRING_VALUE",
 * //             Endpoints: {
 * //               Intercluster: {
 * //                 DNSName: "STRING_VALUE",
 * //                 IpAddresses: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               Management: {
 * //                 DNSName: "STRING_VALUE",
 * //                 IpAddresses: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             DiskIopsConfiguration: {
 * //               Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //               Iops: Number("long"),
 * //             },
 * //             PreferredSubnetId: "STRING_VALUE",
 * //             RouteTableIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //             ThroughputCapacity: Number("int"),
 * //             WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //             FsxAdminPassword: "STRING_VALUE",
 * //           },
 * //           FileSystemTypeVersion: "STRING_VALUE",
 * //           OpenZFSConfiguration: {
 * //             AutomaticBackupRetentionDays: Number("int"),
 * //             CopyTagsToBackups: true || false,
 * //             CopyTagsToVolumes: true || false,
 * //             DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //             DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //             ThroughputCapacity: Number("int"),
 * //             WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //             DiskIopsConfiguration: {
 * //               Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //               Iops: Number("long"),
 * //             },
 * //             RootVolumeId: "STRING_VALUE",
 * //           },
 * //         },
 * //         FailureDetails: {
 * //           Message: "STRING_VALUE",
 * //         },
 * //         TargetVolumeValues: "<Volume>",
 * //         TargetSnapshotValues: {
 * //           ResourceARN: "STRING_VALUE",
 * //           SnapshotId: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           VolumeId: "STRING_VALUE",
 * //           CreationTime: new Date("TIMESTAMP"),
 * //           Lifecycle: "PENDING" || "CREATING" || "DELETING" || "AVAILABLE",
 * //           LifecycleTransitionReason: "<LifecycleTransitionReason>",
 * //           Tags: "<Tags>",
 * //           AdministrativeActions: "<AdministrativeActions>",
 * //         },
 * //       },
 * //     ],
 * //     OpenZFSConfiguration: {
 * //       ParentVolumeId: "STRING_VALUE",
 * //       VolumePath: "STRING_VALUE",
 * //       StorageCapacityReservationGiB: Number("int"),
 * //       StorageCapacityQuotaGiB: Number("int"),
 * //       RecordSizeKiB: Number("int"),
 * //       DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 * //       CopyTagsToSnapshots: true || false,
 * //       OriginSnapshot: {
 * //         SnapshotARN: "STRING_VALUE",
 * //         CopyStrategy: "CLONE" || "FULL_COPY",
 * //       },
 * //       ReadOnly: true || false,
 * //       NfsExports: [
 * //         {
 * //           ClientConfigurations: [ // required
 * //             {
 * //               Clients: "STRING_VALUE", // required
 * //               Options: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       UserAndGroupQuotas: [
 * //         {
 * //           Type: "USER" || "GROUP", // required
 * //           Id: Number("int"), // required
 * //           StorageCapacityQuotaGiB: Number("int"), // required
 * //         },
 * //       ],
 * //       RestoreToSnapshot: "STRING_VALUE",
 * //       DeleteIntermediateSnaphots: true || false,
 * //       DeleteClonedVolumes: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVolumeCommandInput - {@link CreateVolumeCommandInput}
 * @returns {@link CreateVolumeCommandOutput}
 * @see {@link CreateVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateVolumeCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
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
 * @throws {@link MissingVolumeConfiguration} (client fault)
 *  <p>A volume configuration is required for this operation.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class CreateVolumeCommand extends $Command<
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
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
  constructor(readonly input: CreateVolumeCommandInput) {
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
  ): Handler<CreateVolumeCommandInput, CreateVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateVolumeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateVolumeResponseFilterSensitiveLog,
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
  private serialize(input: CreateVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVolumeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVolumeCommandOutput> {
    return de_CreateVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
