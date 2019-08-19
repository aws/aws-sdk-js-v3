import { RDSClient } from "./RDSClient";
import { AddRoleToDBClusterInput } from "./types/AddRoleToDBClusterInput";
import { AddRoleToDBClusterOutput } from "./types/AddRoleToDBClusterOutput";
import { AddRoleToDBInstanceInput } from "./types/AddRoleToDBInstanceInput";
import { AddRoleToDBInstanceOutput } from "./types/AddRoleToDBInstanceOutput";
import { AddSourceIdentifierToSubscriptionInput } from "./types/AddSourceIdentifierToSubscriptionInput";
import { AddSourceIdentifierToSubscriptionOutput } from "./types/AddSourceIdentifierToSubscriptionOutput";
import { AddTagsToResourceInput } from "./types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./types/AddTagsToResourceOutput";
import { ApplyPendingMaintenanceActionInput } from "./types/ApplyPendingMaintenanceActionInput";
import { ApplyPendingMaintenanceActionOutput } from "./types/ApplyPendingMaintenanceActionOutput";
import { AuthorizationAlreadyExistsFault } from "./types/AuthorizationAlreadyExistsFault";
import { AuthorizationNotFoundFault } from "./types/AuthorizationNotFoundFault";
import { AuthorizationQuotaExceededFault } from "./types/AuthorizationQuotaExceededFault";
import { AuthorizeDBSecurityGroupIngressInput } from "./types/AuthorizeDBSecurityGroupIngressInput";
import { AuthorizeDBSecurityGroupIngressOutput } from "./types/AuthorizeDBSecurityGroupIngressOutput";
import { BacktrackDBClusterInput } from "./types/BacktrackDBClusterInput";
import { BacktrackDBClusterOutput } from "./types/BacktrackDBClusterOutput";
import { BackupPolicyNotFoundFault } from "./types/BackupPolicyNotFoundFault";
import { CertificateNotFoundFault } from "./types/CertificateNotFoundFault";
import { CopyDBClusterParameterGroupInput } from "./types/CopyDBClusterParameterGroupInput";
import { CopyDBClusterParameterGroupOutput } from "./types/CopyDBClusterParameterGroupOutput";
import { CopyDBClusterSnapshotInput } from "./types/CopyDBClusterSnapshotInput";
import { CopyDBClusterSnapshotOutput } from "./types/CopyDBClusterSnapshotOutput";
import { CopyDBParameterGroupInput } from "./types/CopyDBParameterGroupInput";
import { CopyDBParameterGroupOutput } from "./types/CopyDBParameterGroupOutput";
import { CopyDBSnapshotInput } from "./types/CopyDBSnapshotInput";
import { CopyDBSnapshotOutput } from "./types/CopyDBSnapshotOutput";
import { CopyOptionGroupInput } from "./types/CopyOptionGroupInput";
import { CopyOptionGroupOutput } from "./types/CopyOptionGroupOutput";
import { CreateDBClusterEndpointInput } from "./types/CreateDBClusterEndpointInput";
import { CreateDBClusterEndpointOutput } from "./types/CreateDBClusterEndpointOutput";
import { CreateDBClusterInput } from "./types/CreateDBClusterInput";
import { CreateDBClusterOutput } from "./types/CreateDBClusterOutput";
import { CreateDBClusterParameterGroupInput } from "./types/CreateDBClusterParameterGroupInput";
import { CreateDBClusterParameterGroupOutput } from "./types/CreateDBClusterParameterGroupOutput";
import { CreateDBClusterSnapshotInput } from "./types/CreateDBClusterSnapshotInput";
import { CreateDBClusterSnapshotOutput } from "./types/CreateDBClusterSnapshotOutput";
import { CreateDBInstanceInput } from "./types/CreateDBInstanceInput";
import { CreateDBInstanceOutput } from "./types/CreateDBInstanceOutput";
import { CreateDBInstanceReadReplicaInput } from "./types/CreateDBInstanceReadReplicaInput";
import { CreateDBInstanceReadReplicaOutput } from "./types/CreateDBInstanceReadReplicaOutput";
import { CreateDBParameterGroupInput } from "./types/CreateDBParameterGroupInput";
import { CreateDBParameterGroupOutput } from "./types/CreateDBParameterGroupOutput";
import { CreateDBSecurityGroupInput } from "./types/CreateDBSecurityGroupInput";
import { CreateDBSecurityGroupOutput } from "./types/CreateDBSecurityGroupOutput";
import { CreateDBSnapshotInput } from "./types/CreateDBSnapshotInput";
import { CreateDBSnapshotOutput } from "./types/CreateDBSnapshotOutput";
import { CreateDBSubnetGroupInput } from "./types/CreateDBSubnetGroupInput";
import { CreateDBSubnetGroupOutput } from "./types/CreateDBSubnetGroupOutput";
import { CreateEventSubscriptionInput } from "./types/CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "./types/CreateEventSubscriptionOutput";
import { CreateGlobalClusterInput } from "./types/CreateGlobalClusterInput";
import { CreateGlobalClusterOutput } from "./types/CreateGlobalClusterOutput";
import { CreateOptionGroupInput } from "./types/CreateOptionGroupInput";
import { CreateOptionGroupOutput } from "./types/CreateOptionGroupOutput";
import { DBClusterAlreadyExistsFault } from "./types/DBClusterAlreadyExistsFault";
import { DBClusterBacktrackNotFoundFault } from "./types/DBClusterBacktrackNotFoundFault";
import { DBClusterEndpointAlreadyExistsFault } from "./types/DBClusterEndpointAlreadyExistsFault";
import { DBClusterEndpointNotFoundFault } from "./types/DBClusterEndpointNotFoundFault";
import { DBClusterEndpointQuotaExceededFault } from "./types/DBClusterEndpointQuotaExceededFault";
import { DBClusterNotFoundFault } from "./types/DBClusterNotFoundFault";
import { DBClusterParameterGroupNotFoundFault } from "./types/DBClusterParameterGroupNotFoundFault";
import { DBClusterQuotaExceededFault } from "./types/DBClusterQuotaExceededFault";
import { DBClusterRoleAlreadyExistsFault } from "./types/DBClusterRoleAlreadyExistsFault";
import { DBClusterRoleNotFoundFault } from "./types/DBClusterRoleNotFoundFault";
import { DBClusterRoleQuotaExceededFault } from "./types/DBClusterRoleQuotaExceededFault";
import { DBClusterSnapshotAlreadyExistsFault } from "./types/DBClusterSnapshotAlreadyExistsFault";
import { DBClusterSnapshotNotFoundFault } from "./types/DBClusterSnapshotNotFoundFault";
import { DBInstanceAlreadyExistsFault } from "./types/DBInstanceAlreadyExistsFault";
import { DBInstanceAutomatedBackupNotFoundFault } from "./types/DBInstanceAutomatedBackupNotFoundFault";
import { DBInstanceAutomatedBackupQuotaExceededFault } from "./types/DBInstanceAutomatedBackupQuotaExceededFault";
import { DBInstanceNotFoundFault } from "./types/DBInstanceNotFoundFault";
import { DBInstanceRoleAlreadyExistsFault } from "./types/DBInstanceRoleAlreadyExistsFault";
import { DBInstanceRoleNotFoundFault } from "./types/DBInstanceRoleNotFoundFault";
import { DBInstanceRoleQuotaExceededFault } from "./types/DBInstanceRoleQuotaExceededFault";
import { DBLogFileNotFoundFault } from "./types/DBLogFileNotFoundFault";
import { DBParameterGroupAlreadyExistsFault } from "./types/DBParameterGroupAlreadyExistsFault";
import { DBParameterGroupNotFoundFault } from "./types/DBParameterGroupNotFoundFault";
import { DBParameterGroupQuotaExceededFault } from "./types/DBParameterGroupQuotaExceededFault";
import { DBSecurityGroupAlreadyExistsFault } from "./types/DBSecurityGroupAlreadyExistsFault";
import { DBSecurityGroupNotFoundFault } from "./types/DBSecurityGroupNotFoundFault";
import { DBSecurityGroupNotSupportedFault } from "./types/DBSecurityGroupNotSupportedFault";
import { DBSecurityGroupQuotaExceededFault } from "./types/DBSecurityGroupQuotaExceededFault";
import { DBSnapshotAlreadyExistsFault } from "./types/DBSnapshotAlreadyExistsFault";
import { DBSnapshotNotFoundFault } from "./types/DBSnapshotNotFoundFault";
import { DBSubnetGroupAlreadyExistsFault } from "./types/DBSubnetGroupAlreadyExistsFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./types/DBSubnetGroupDoesNotCoverEnoughAZs";
import { DBSubnetGroupNotAllowedFault } from "./types/DBSubnetGroupNotAllowedFault";
import { DBSubnetGroupNotFoundFault } from "./types/DBSubnetGroupNotFoundFault";
import { DBSubnetGroupQuotaExceededFault } from "./types/DBSubnetGroupQuotaExceededFault";
import { DBSubnetQuotaExceededFault } from "./types/DBSubnetQuotaExceededFault";
import { DBUpgradeDependencyFailureFault } from "./types/DBUpgradeDependencyFailureFault";
import { DeleteDBClusterEndpointInput } from "./types/DeleteDBClusterEndpointInput";
import { DeleteDBClusterEndpointOutput } from "./types/DeleteDBClusterEndpointOutput";
import { DeleteDBClusterInput } from "./types/DeleteDBClusterInput";
import { DeleteDBClusterOutput } from "./types/DeleteDBClusterOutput";
import { DeleteDBClusterParameterGroupInput } from "./types/DeleteDBClusterParameterGroupInput";
import { DeleteDBClusterParameterGroupOutput } from "./types/DeleteDBClusterParameterGroupOutput";
import { DeleteDBClusterSnapshotInput } from "./types/DeleteDBClusterSnapshotInput";
import { DeleteDBClusterSnapshotOutput } from "./types/DeleteDBClusterSnapshotOutput";
import { DeleteDBInstanceAutomatedBackupInput } from "./types/DeleteDBInstanceAutomatedBackupInput";
import { DeleteDBInstanceAutomatedBackupOutput } from "./types/DeleteDBInstanceAutomatedBackupOutput";
import { DeleteDBInstanceInput } from "./types/DeleteDBInstanceInput";
import { DeleteDBInstanceOutput } from "./types/DeleteDBInstanceOutput";
import { DeleteDBParameterGroupInput } from "./types/DeleteDBParameterGroupInput";
import { DeleteDBParameterGroupOutput } from "./types/DeleteDBParameterGroupOutput";
import { DeleteDBSecurityGroupInput } from "./types/DeleteDBSecurityGroupInput";
import { DeleteDBSecurityGroupOutput } from "./types/DeleteDBSecurityGroupOutput";
import { DeleteDBSnapshotInput } from "./types/DeleteDBSnapshotInput";
import { DeleteDBSnapshotOutput } from "./types/DeleteDBSnapshotOutput";
import { DeleteDBSubnetGroupInput } from "./types/DeleteDBSubnetGroupInput";
import { DeleteDBSubnetGroupOutput } from "./types/DeleteDBSubnetGroupOutput";
import { DeleteEventSubscriptionInput } from "./types/DeleteEventSubscriptionInput";
import { DeleteEventSubscriptionOutput } from "./types/DeleteEventSubscriptionOutput";
import { DeleteGlobalClusterInput } from "./types/DeleteGlobalClusterInput";
import { DeleteGlobalClusterOutput } from "./types/DeleteGlobalClusterOutput";
import { DeleteOptionGroupInput } from "./types/DeleteOptionGroupInput";
import { DeleteOptionGroupOutput } from "./types/DeleteOptionGroupOutput";
import { DescribeAccountAttributesInput } from "./types/DescribeAccountAttributesInput";
import { DescribeAccountAttributesOutput } from "./types/DescribeAccountAttributesOutput";
import { DescribeCertificatesInput } from "./types/DescribeCertificatesInput";
import { DescribeCertificatesOutput } from "./types/DescribeCertificatesOutput";
import { DescribeDBClusterBacktracksInput } from "./types/DescribeDBClusterBacktracksInput";
import { DescribeDBClusterBacktracksOutput } from "./types/DescribeDBClusterBacktracksOutput";
import { DescribeDBClusterEndpointsInput } from "./types/DescribeDBClusterEndpointsInput";
import { DescribeDBClusterEndpointsOutput } from "./types/DescribeDBClusterEndpointsOutput";
import { DescribeDBClusterParameterGroupsInput } from "./types/DescribeDBClusterParameterGroupsInput";
import { DescribeDBClusterParameterGroupsOutput } from "./types/DescribeDBClusterParameterGroupsOutput";
import { DescribeDBClusterParametersInput } from "./types/DescribeDBClusterParametersInput";
import { DescribeDBClusterParametersOutput } from "./types/DescribeDBClusterParametersOutput";
import { DescribeDBClusterSnapshotAttributesInput } from "./types/DescribeDBClusterSnapshotAttributesInput";
import { DescribeDBClusterSnapshotAttributesOutput } from "./types/DescribeDBClusterSnapshotAttributesOutput";
import { DescribeDBClusterSnapshotsInput } from "./types/DescribeDBClusterSnapshotsInput";
import { DescribeDBClusterSnapshotsOutput } from "./types/DescribeDBClusterSnapshotsOutput";
import { DescribeDBClustersInput } from "./types/DescribeDBClustersInput";
import { DescribeDBClustersOutput } from "./types/DescribeDBClustersOutput";
import { DescribeDBEngineVersionsInput } from "./types/DescribeDBEngineVersionsInput";
import { DescribeDBEngineVersionsOutput } from "./types/DescribeDBEngineVersionsOutput";
import { DescribeDBInstanceAutomatedBackupsInput } from "./types/DescribeDBInstanceAutomatedBackupsInput";
import { DescribeDBInstanceAutomatedBackupsOutput } from "./types/DescribeDBInstanceAutomatedBackupsOutput";
import { DescribeDBInstancesInput } from "./types/DescribeDBInstancesInput";
import { DescribeDBInstancesOutput } from "./types/DescribeDBInstancesOutput";
import { DescribeDBLogFilesInput } from "./types/DescribeDBLogFilesInput";
import { DescribeDBLogFilesOutput } from "./types/DescribeDBLogFilesOutput";
import { DescribeDBParameterGroupsInput } from "./types/DescribeDBParameterGroupsInput";
import { DescribeDBParameterGroupsOutput } from "./types/DescribeDBParameterGroupsOutput";
import { DescribeDBParametersInput } from "./types/DescribeDBParametersInput";
import { DescribeDBParametersOutput } from "./types/DescribeDBParametersOutput";
import { DescribeDBSecurityGroupsInput } from "./types/DescribeDBSecurityGroupsInput";
import { DescribeDBSecurityGroupsOutput } from "./types/DescribeDBSecurityGroupsOutput";
import { DescribeDBSnapshotAttributesInput } from "./types/DescribeDBSnapshotAttributesInput";
import { DescribeDBSnapshotAttributesOutput } from "./types/DescribeDBSnapshotAttributesOutput";
import { DescribeDBSnapshotsInput } from "./types/DescribeDBSnapshotsInput";
import { DescribeDBSnapshotsOutput } from "./types/DescribeDBSnapshotsOutput";
import { DescribeDBSubnetGroupsInput } from "./types/DescribeDBSubnetGroupsInput";
import { DescribeDBSubnetGroupsOutput } from "./types/DescribeDBSubnetGroupsOutput";
import { DescribeEngineDefaultClusterParametersInput } from "./types/DescribeEngineDefaultClusterParametersInput";
import { DescribeEngineDefaultClusterParametersOutput } from "./types/DescribeEngineDefaultClusterParametersOutput";
import { DescribeEngineDefaultParametersInput } from "./types/DescribeEngineDefaultParametersInput";
import { DescribeEngineDefaultParametersOutput } from "./types/DescribeEngineDefaultParametersOutput";
import { DescribeEventCategoriesInput } from "./types/DescribeEventCategoriesInput";
import { DescribeEventCategoriesOutput } from "./types/DescribeEventCategoriesOutput";
import { DescribeEventSubscriptionsInput } from "./types/DescribeEventSubscriptionsInput";
import { DescribeEventSubscriptionsOutput } from "./types/DescribeEventSubscriptionsOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeGlobalClustersInput } from "./types/DescribeGlobalClustersInput";
import { DescribeGlobalClustersOutput } from "./types/DescribeGlobalClustersOutput";
import { DescribeOptionGroupOptionsInput } from "./types/DescribeOptionGroupOptionsInput";
import { DescribeOptionGroupOptionsOutput } from "./types/DescribeOptionGroupOptionsOutput";
import { DescribeOptionGroupsInput } from "./types/DescribeOptionGroupsInput";
import { DescribeOptionGroupsOutput } from "./types/DescribeOptionGroupsOutput";
import { DescribeOrderableDBInstanceOptionsInput } from "./types/DescribeOrderableDBInstanceOptionsInput";
import { DescribeOrderableDBInstanceOptionsOutput } from "./types/DescribeOrderableDBInstanceOptionsOutput";
import { DescribePendingMaintenanceActionsInput } from "./types/DescribePendingMaintenanceActionsInput";
import { DescribePendingMaintenanceActionsOutput } from "./types/DescribePendingMaintenanceActionsOutput";
import { DescribeReservedDBInstancesInput } from "./types/DescribeReservedDBInstancesInput";
import { DescribeReservedDBInstancesOfferingsInput } from "./types/DescribeReservedDBInstancesOfferingsInput";
import { DescribeReservedDBInstancesOfferingsOutput } from "./types/DescribeReservedDBInstancesOfferingsOutput";
import { DescribeReservedDBInstancesOutput } from "./types/DescribeReservedDBInstancesOutput";
import { DescribeSourceRegionsInput } from "./types/DescribeSourceRegionsInput";
import { DescribeSourceRegionsOutput } from "./types/DescribeSourceRegionsOutput";
import { DescribeValidDBInstanceModificationsInput } from "./types/DescribeValidDBInstanceModificationsInput";
import { DescribeValidDBInstanceModificationsOutput } from "./types/DescribeValidDBInstanceModificationsOutput";
import { DomainNotFoundFault } from "./types/DomainNotFoundFault";
import { DownloadDBLogFilePortionInput } from "./types/DownloadDBLogFilePortionInput";
import { DownloadDBLogFilePortionOutput } from "./types/DownloadDBLogFilePortionOutput";
import { EventSubscriptionQuotaExceededFault } from "./types/EventSubscriptionQuotaExceededFault";
import { FailoverDBClusterInput } from "./types/FailoverDBClusterInput";
import { FailoverDBClusterOutput } from "./types/FailoverDBClusterOutput";
import { GlobalClusterAlreadyExistsFault } from "./types/GlobalClusterAlreadyExistsFault";
import { GlobalClusterNotFoundFault } from "./types/GlobalClusterNotFoundFault";
import { GlobalClusterQuotaExceededFault } from "./types/GlobalClusterQuotaExceededFault";
import { InstanceQuotaExceededFault } from "./types/InstanceQuotaExceededFault";
import { InsufficientDBClusterCapacityFault } from "./types/InsufficientDBClusterCapacityFault";
import { InsufficientDBInstanceCapacityFault } from "./types/InsufficientDBInstanceCapacityFault";
import { InsufficientStorageClusterCapacityFault } from "./types/InsufficientStorageClusterCapacityFault";
import { InvalidDBClusterCapacityFault } from "./types/InvalidDBClusterCapacityFault";
import { InvalidDBClusterEndpointStateFault } from "./types/InvalidDBClusterEndpointStateFault";
import { InvalidDBClusterSnapshotStateFault } from "./types/InvalidDBClusterSnapshotStateFault";
import { InvalidDBClusterStateFault } from "./types/InvalidDBClusterStateFault";
import { InvalidDBInstanceAutomatedBackupStateFault } from "./types/InvalidDBInstanceAutomatedBackupStateFault";
import { InvalidDBInstanceStateFault } from "./types/InvalidDBInstanceStateFault";
import { InvalidDBParameterGroupStateFault } from "./types/InvalidDBParameterGroupStateFault";
import { InvalidDBSecurityGroupStateFault } from "./types/InvalidDBSecurityGroupStateFault";
import { InvalidDBSnapshotStateFault } from "./types/InvalidDBSnapshotStateFault";
import { InvalidDBSubnetGroupFault } from "./types/InvalidDBSubnetGroupFault";
import { InvalidDBSubnetGroupStateFault } from "./types/InvalidDBSubnetGroupStateFault";
import { InvalidDBSubnetStateFault } from "./types/InvalidDBSubnetStateFault";
import { InvalidEventSubscriptionStateFault } from "./types/InvalidEventSubscriptionStateFault";
import { InvalidGlobalClusterStateFault } from "./types/InvalidGlobalClusterStateFault";
import { InvalidOptionGroupStateFault } from "./types/InvalidOptionGroupStateFault";
import { InvalidRestoreFault } from "./types/InvalidRestoreFault";
import { InvalidS3BucketFault } from "./types/InvalidS3BucketFault";
import { InvalidSubnet } from "./types/InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./types/InvalidVPCNetworkStateFault";
import { KMSKeyNotAccessibleFault } from "./types/KMSKeyNotAccessibleFault";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ModifyCurrentDBClusterCapacityInput } from "./types/ModifyCurrentDBClusterCapacityInput";
import { ModifyCurrentDBClusterCapacityOutput } from "./types/ModifyCurrentDBClusterCapacityOutput";
import { ModifyDBClusterEndpointInput } from "./types/ModifyDBClusterEndpointInput";
import { ModifyDBClusterEndpointOutput } from "./types/ModifyDBClusterEndpointOutput";
import { ModifyDBClusterInput } from "./types/ModifyDBClusterInput";
import { ModifyDBClusterOutput } from "./types/ModifyDBClusterOutput";
import { ModifyDBClusterParameterGroupInput } from "./types/ModifyDBClusterParameterGroupInput";
import { ModifyDBClusterParameterGroupOutput } from "./types/ModifyDBClusterParameterGroupOutput";
import { ModifyDBClusterSnapshotAttributeInput } from "./types/ModifyDBClusterSnapshotAttributeInput";
import { ModifyDBClusterSnapshotAttributeOutput } from "./types/ModifyDBClusterSnapshotAttributeOutput";
import { ModifyDBInstanceInput } from "./types/ModifyDBInstanceInput";
import { ModifyDBInstanceOutput } from "./types/ModifyDBInstanceOutput";
import { ModifyDBParameterGroupInput } from "./types/ModifyDBParameterGroupInput";
import { ModifyDBParameterGroupOutput } from "./types/ModifyDBParameterGroupOutput";
import { ModifyDBSnapshotAttributeInput } from "./types/ModifyDBSnapshotAttributeInput";
import { ModifyDBSnapshotAttributeOutput } from "./types/ModifyDBSnapshotAttributeOutput";
import { ModifyDBSnapshotInput } from "./types/ModifyDBSnapshotInput";
import { ModifyDBSnapshotOutput } from "./types/ModifyDBSnapshotOutput";
import { ModifyDBSubnetGroupInput } from "./types/ModifyDBSubnetGroupInput";
import { ModifyDBSubnetGroupOutput } from "./types/ModifyDBSubnetGroupOutput";
import { ModifyEventSubscriptionInput } from "./types/ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "./types/ModifyEventSubscriptionOutput";
import { ModifyGlobalClusterInput } from "./types/ModifyGlobalClusterInput";
import { ModifyGlobalClusterOutput } from "./types/ModifyGlobalClusterOutput";
import { ModifyOptionGroupInput } from "./types/ModifyOptionGroupInput";
import { ModifyOptionGroupOutput } from "./types/ModifyOptionGroupOutput";
import { OptionGroupAlreadyExistsFault } from "./types/OptionGroupAlreadyExistsFault";
import { OptionGroupNotFoundFault } from "./types/OptionGroupNotFoundFault";
import { OptionGroupQuotaExceededFault } from "./types/OptionGroupQuotaExceededFault";
import { PointInTimeRestoreNotEnabledFault } from "./types/PointInTimeRestoreNotEnabledFault";
import { PromoteReadReplicaDBClusterInput } from "./types/PromoteReadReplicaDBClusterInput";
import { PromoteReadReplicaDBClusterOutput } from "./types/PromoteReadReplicaDBClusterOutput";
import { PromoteReadReplicaInput } from "./types/PromoteReadReplicaInput";
import { PromoteReadReplicaOutput } from "./types/PromoteReadReplicaOutput";
import { ProvisionedIopsNotAvailableInAZFault } from "./types/ProvisionedIopsNotAvailableInAZFault";
import { PurchaseReservedDBInstancesOfferingInput } from "./types/PurchaseReservedDBInstancesOfferingInput";
import { PurchaseReservedDBInstancesOfferingOutput } from "./types/PurchaseReservedDBInstancesOfferingOutput";
import { RebootDBInstanceInput } from "./types/RebootDBInstanceInput";
import { RebootDBInstanceOutput } from "./types/RebootDBInstanceOutput";
import { RemoveFromGlobalClusterInput } from "./types/RemoveFromGlobalClusterInput";
import { RemoveFromGlobalClusterOutput } from "./types/RemoveFromGlobalClusterOutput";
import { RemoveRoleFromDBClusterInput } from "./types/RemoveRoleFromDBClusterInput";
import { RemoveRoleFromDBClusterOutput } from "./types/RemoveRoleFromDBClusterOutput";
import { RemoveRoleFromDBInstanceInput } from "./types/RemoveRoleFromDBInstanceInput";
import { RemoveRoleFromDBInstanceOutput } from "./types/RemoveRoleFromDBInstanceOutput";
import { RemoveSourceIdentifierFromSubscriptionInput } from "./types/RemoveSourceIdentifierFromSubscriptionInput";
import { RemoveSourceIdentifierFromSubscriptionOutput } from "./types/RemoveSourceIdentifierFromSubscriptionOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { ReservedDBInstanceAlreadyExistsFault } from "./types/ReservedDBInstanceAlreadyExistsFault";
import { ReservedDBInstanceNotFoundFault } from "./types/ReservedDBInstanceNotFoundFault";
import { ReservedDBInstanceQuotaExceededFault } from "./types/ReservedDBInstanceQuotaExceededFault";
import { ReservedDBInstancesOfferingNotFoundFault } from "./types/ReservedDBInstancesOfferingNotFoundFault";
import { ResetDBClusterParameterGroupInput } from "./types/ResetDBClusterParameterGroupInput";
import { ResetDBClusterParameterGroupOutput } from "./types/ResetDBClusterParameterGroupOutput";
import { ResetDBParameterGroupInput } from "./types/ResetDBParameterGroupInput";
import { ResetDBParameterGroupOutput } from "./types/ResetDBParameterGroupOutput";
import { ResourceNotFoundFault } from "./types/ResourceNotFoundFault";
import { RestoreDBClusterFromS3Input } from "./types/RestoreDBClusterFromS3Input";
import { RestoreDBClusterFromS3Output } from "./types/RestoreDBClusterFromS3Output";
import { RestoreDBClusterFromSnapshotInput } from "./types/RestoreDBClusterFromSnapshotInput";
import { RestoreDBClusterFromSnapshotOutput } from "./types/RestoreDBClusterFromSnapshotOutput";
import { RestoreDBClusterToPointInTimeInput } from "./types/RestoreDBClusterToPointInTimeInput";
import { RestoreDBClusterToPointInTimeOutput } from "./types/RestoreDBClusterToPointInTimeOutput";
import { RestoreDBInstanceFromDBSnapshotInput } from "./types/RestoreDBInstanceFromDBSnapshotInput";
import { RestoreDBInstanceFromDBSnapshotOutput } from "./types/RestoreDBInstanceFromDBSnapshotOutput";
import { RestoreDBInstanceFromS3Input } from "./types/RestoreDBInstanceFromS3Input";
import { RestoreDBInstanceFromS3Output } from "./types/RestoreDBInstanceFromS3Output";
import { RestoreDBInstanceToPointInTimeInput } from "./types/RestoreDBInstanceToPointInTimeInput";
import { RestoreDBInstanceToPointInTimeOutput } from "./types/RestoreDBInstanceToPointInTimeOutput";
import { RevokeDBSecurityGroupIngressInput } from "./types/RevokeDBSecurityGroupIngressInput";
import { RevokeDBSecurityGroupIngressOutput } from "./types/RevokeDBSecurityGroupIngressOutput";
import { SNSInvalidTopicFault } from "./types/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./types/SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./types/SNSTopicArnNotFoundFault";
import { SharedSnapshotQuotaExceededFault } from "./types/SharedSnapshotQuotaExceededFault";
import { SnapshotQuotaExceededFault } from "./types/SnapshotQuotaExceededFault";
import { SourceNotFoundFault } from "./types/SourceNotFoundFault";
import { StartActivityStreamInput } from "./types/StartActivityStreamInput";
import { StartActivityStreamOutput } from "./types/StartActivityStreamOutput";
import { StartDBClusterInput } from "./types/StartDBClusterInput";
import { StartDBClusterOutput } from "./types/StartDBClusterOutput";
import { StartDBInstanceInput } from "./types/StartDBInstanceInput";
import { StartDBInstanceOutput } from "./types/StartDBInstanceOutput";
import { StopActivityStreamInput } from "./types/StopActivityStreamInput";
import { StopActivityStreamOutput } from "./types/StopActivityStreamOutput";
import { StopDBClusterInput } from "./types/StopDBClusterInput";
import { StopDBClusterOutput } from "./types/StopDBClusterOutput";
import { StopDBInstanceInput } from "./types/StopDBInstanceInput";
import { StopDBInstanceOutput } from "./types/StopDBInstanceOutput";
import { StorageQuotaExceededFault } from "./types/StorageQuotaExceededFault";
import { StorageTypeNotSupportedFault } from "./types/StorageTypeNotSupportedFault";
import { SubnetAlreadyInUse } from "./types/SubnetAlreadyInUse";
import { SubscriptionAlreadyExistFault } from "./types/SubscriptionAlreadyExistFault";
import { SubscriptionCategoryNotFoundFault } from "./types/SubscriptionCategoryNotFoundFault";
import { SubscriptionNotFoundFault } from "./types/SubscriptionNotFoundFault";
import { AddRoleToDBClusterCommand } from "./commands/AddRoleToDBClusterCommand";
import { AddRoleToDBInstanceCommand } from "./commands/AddRoleToDBInstanceCommand";
import { AddSourceIdentifierToSubscriptionCommand } from "./commands/AddSourceIdentifierToSubscriptionCommand";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommand } from "./commands/ApplyPendingMaintenanceActionCommand";
import { AuthorizeDBSecurityGroupIngressCommand } from "./commands/AuthorizeDBSecurityGroupIngressCommand";
import { BacktrackDBClusterCommand } from "./commands/BacktrackDBClusterCommand";
import { CopyDBClusterParameterGroupCommand } from "./commands/CopyDBClusterParameterGroupCommand";
import { CopyDBClusterSnapshotCommand } from "./commands/CopyDBClusterSnapshotCommand";
import { CopyDBParameterGroupCommand } from "./commands/CopyDBParameterGroupCommand";
import { CopyDBSnapshotCommand } from "./commands/CopyDBSnapshotCommand";
import { CopyOptionGroupCommand } from "./commands/CopyOptionGroupCommand";
import { CreateDBClusterCommand } from "./commands/CreateDBClusterCommand";
import { CreateDBClusterEndpointCommand } from "./commands/CreateDBClusterEndpointCommand";
import { CreateDBClusterParameterGroupCommand } from "./commands/CreateDBClusterParameterGroupCommand";
import { CreateDBClusterSnapshotCommand } from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommand } from "./commands/CreateDBInstanceCommand";
import { CreateDBInstanceReadReplicaCommand } from "./commands/CreateDBInstanceReadReplicaCommand";
import { CreateDBParameterGroupCommand } from "./commands/CreateDBParameterGroupCommand";
import { CreateDBSecurityGroupCommand } from "./commands/CreateDBSecurityGroupCommand";
import { CreateDBSnapshotCommand } from "./commands/CreateDBSnapshotCommand";
import { CreateDBSubnetGroupCommand } from "./commands/CreateDBSubnetGroupCommand";
import { CreateEventSubscriptionCommand } from "./commands/CreateEventSubscriptionCommand";
import { CreateGlobalClusterCommand } from "./commands/CreateGlobalClusterCommand";
import { CreateOptionGroupCommand } from "./commands/CreateOptionGroupCommand";
import { DeleteDBClusterCommand } from "./commands/DeleteDBClusterCommand";
import { DeleteDBClusterEndpointCommand } from "./commands/DeleteDBClusterEndpointCommand";
import { DeleteDBClusterParameterGroupCommand } from "./commands/DeleteDBClusterParameterGroupCommand";
import { DeleteDBClusterSnapshotCommand } from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceAutomatedBackupCommand } from "./commands/DeleteDBInstanceAutomatedBackupCommand";
import { DeleteDBInstanceCommand } from "./commands/DeleteDBInstanceCommand";
import { DeleteDBParameterGroupCommand } from "./commands/DeleteDBParameterGroupCommand";
import { DeleteDBSecurityGroupCommand } from "./commands/DeleteDBSecurityGroupCommand";
import { DeleteDBSnapshotCommand } from "./commands/DeleteDBSnapshotCommand";
import { DeleteDBSubnetGroupCommand } from "./commands/DeleteDBSubnetGroupCommand";
import { DeleteEventSubscriptionCommand } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteGlobalClusterCommand } from "./commands/DeleteGlobalClusterCommand";
import { DeleteOptionGroupCommand } from "./commands/DeleteOptionGroupCommand";
import { DescribeAccountAttributesCommand } from "./commands/DescribeAccountAttributesCommand";
import { DescribeCertificatesCommand } from "./commands/DescribeCertificatesCommand";
import { DescribeDBClusterBacktracksCommand } from "./commands/DescribeDBClusterBacktracksCommand";
import { DescribeDBClusterEndpointsCommand } from "./commands/DescribeDBClusterEndpointsCommand";
import { DescribeDBClusterParameterGroupsCommand } from "./commands/DescribeDBClusterParameterGroupsCommand";
import { DescribeDBClusterParametersCommand } from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClusterSnapshotAttributesCommand } from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import { DescribeDBClusterSnapshotsCommand } from "./commands/DescribeDBClusterSnapshotsCommand";
import { DescribeDBClustersCommand } from "./commands/DescribeDBClustersCommand";
import { DescribeDBEngineVersionsCommand } from "./commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstanceAutomatedBackupsCommand } from "./commands/DescribeDBInstanceAutomatedBackupsCommand";
import { DescribeDBInstancesCommand } from "./commands/DescribeDBInstancesCommand";
import { DescribeDBLogFilesCommand } from "./commands/DescribeDBLogFilesCommand";
import { DescribeDBParameterGroupsCommand } from "./commands/DescribeDBParameterGroupsCommand";
import { DescribeDBParametersCommand } from "./commands/DescribeDBParametersCommand";
import { DescribeDBSecurityGroupsCommand } from "./commands/DescribeDBSecurityGroupsCommand";
import { DescribeDBSnapshotAttributesCommand } from "./commands/DescribeDBSnapshotAttributesCommand";
import { DescribeDBSnapshotsCommand } from "./commands/DescribeDBSnapshotsCommand";
import { DescribeDBSubnetGroupsCommand } from "./commands/DescribeDBSubnetGroupsCommand";
import { DescribeEngineDefaultClusterParametersCommand } from "./commands/DescribeEngineDefaultClusterParametersCommand";
import { DescribeEngineDefaultParametersCommand } from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventCategoriesCommand } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommand } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeGlobalClustersCommand } from "./commands/DescribeGlobalClustersCommand";
import { DescribeOptionGroupOptionsCommand } from "./commands/DescribeOptionGroupOptionsCommand";
import { DescribeOptionGroupsCommand } from "./commands/DescribeOptionGroupsCommand";
import { DescribeOrderableDBInstanceOptionsCommand } from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import { DescribePendingMaintenanceActionsCommand } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeReservedDBInstancesCommand } from "./commands/DescribeReservedDBInstancesCommand";
import { DescribeReservedDBInstancesOfferingsCommand } from "./commands/DescribeReservedDBInstancesOfferingsCommand";
import { DescribeSourceRegionsCommand } from "./commands/DescribeSourceRegionsCommand";
import { DescribeValidDBInstanceModificationsCommand } from "./commands/DescribeValidDBInstanceModificationsCommand";
import { DownloadDBLogFilePortionCommand } from "./commands/DownloadDBLogFilePortionCommand";
import { FailoverDBClusterCommand } from "./commands/FailoverDBClusterCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ModifyCurrentDBClusterCapacityCommand } from "./commands/ModifyCurrentDBClusterCapacityCommand";
import { ModifyDBClusterCommand } from "./commands/ModifyDBClusterCommand";
import { ModifyDBClusterEndpointCommand } from "./commands/ModifyDBClusterEndpointCommand";
import { ModifyDBClusterParameterGroupCommand } from "./commands/ModifyDBClusterParameterGroupCommand";
import { ModifyDBClusterSnapshotAttributeCommand } from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommand } from "./commands/ModifyDBInstanceCommand";
import { ModifyDBParameterGroupCommand } from "./commands/ModifyDBParameterGroupCommand";
import { ModifyDBSnapshotAttributeCommand } from "./commands/ModifyDBSnapshotAttributeCommand";
import { ModifyDBSnapshotCommand } from "./commands/ModifyDBSnapshotCommand";
import { ModifyDBSubnetGroupCommand } from "./commands/ModifyDBSubnetGroupCommand";
import { ModifyEventSubscriptionCommand } from "./commands/ModifyEventSubscriptionCommand";
import { ModifyGlobalClusterCommand } from "./commands/ModifyGlobalClusterCommand";
import { ModifyOptionGroupCommand } from "./commands/ModifyOptionGroupCommand";
import { PromoteReadReplicaCommand } from "./commands/PromoteReadReplicaCommand";
import { PromoteReadReplicaDBClusterCommand } from "./commands/PromoteReadReplicaDBClusterCommand";
import { PurchaseReservedDBInstancesOfferingCommand } from "./commands/PurchaseReservedDBInstancesOfferingCommand";
import { RebootDBInstanceCommand } from "./commands/RebootDBInstanceCommand";
import { RemoveFromGlobalClusterCommand } from "./commands/RemoveFromGlobalClusterCommand";
import { RemoveRoleFromDBClusterCommand } from "./commands/RemoveRoleFromDBClusterCommand";
import { RemoveRoleFromDBInstanceCommand } from "./commands/RemoveRoleFromDBInstanceCommand";
import { RemoveSourceIdentifierFromSubscriptionCommand } from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";
import { ResetDBClusterParameterGroupCommand } from "./commands/ResetDBClusterParameterGroupCommand";
import { ResetDBParameterGroupCommand } from "./commands/ResetDBParameterGroupCommand";
import { RestoreDBClusterFromS3Command } from "./commands/RestoreDBClusterFromS3Command";
import { RestoreDBClusterFromSnapshotCommand } from "./commands/RestoreDBClusterFromSnapshotCommand";
import { RestoreDBClusterToPointInTimeCommand } from "./commands/RestoreDBClusterToPointInTimeCommand";
import { RestoreDBInstanceFromDBSnapshotCommand } from "./commands/RestoreDBInstanceFromDBSnapshotCommand";
import { RestoreDBInstanceFromS3Command } from "./commands/RestoreDBInstanceFromS3Command";
import { RestoreDBInstanceToPointInTimeCommand } from "./commands/RestoreDBInstanceToPointInTimeCommand";
import { RevokeDBSecurityGroupIngressCommand } from "./commands/RevokeDBSecurityGroupIngressCommand";
import { StartActivityStreamCommand } from "./commands/StartActivityStreamCommand";
import { StartDBClusterCommand } from "./commands/StartDBClusterCommand";
import { StartDBInstanceCommand } from "./commands/StartDBInstanceCommand";
import { StopActivityStreamCommand } from "./commands/StopActivityStreamCommand";
import { StopDBClusterCommand } from "./commands/StopDBClusterCommand";
import { StopDBInstanceCommand } from "./commands/StopDBInstanceCommand";

export class RDS extends RDSClient {
  /**
   * <p>Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL to Access Other AWS Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {DBClusterRoleAlreadyExistsFault} <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {DBClusterRoleQuotaExceededFault} <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addRoleToDBCluster(
    args: AddRoleToDBClusterInput
  ): Promise<AddRoleToDBClusterOutput>;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterInput,
    cb: (err: any, data?: AddRoleToDBClusterOutput) => void
  ): void;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterInput,
    cb?: (err: any, data?: AddRoleToDBClusterOutput) => void
  ): Promise<AddRoleToDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddRoleToDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates an AWS Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {DBInstanceRoleAlreadyExistsFault} <p>The specified <i>RoleArn</i> or <i>FeatureName</i> value is already associated with the DB instance.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBInstanceRoleQuotaExceededFault} <p>You can't associate any more AWS Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addRoleToDBInstance(
    args: AddRoleToDBInstanceInput
  ): Promise<AddRoleToDBInstanceOutput>;
  public addRoleToDBInstance(
    args: AddRoleToDBInstanceInput,
    cb: (err: any, data?: AddRoleToDBInstanceOutput) => void
  ): void;
  public addRoleToDBInstance(
    args: AddRoleToDBInstanceInput,
    cb?: (err: any, data?: AddRoleToDBInstanceOutput) => void
  ): Promise<AddRoleToDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddRoleToDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a source identifier to an existing RDS event notification subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>The subscription name does not exist.</p>
   *   - {SourceNotFoundFault} <p>The requested source could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionInput
  ): Promise<AddSourceIdentifierToSubscriptionOutput>;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionInput,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionOutput) => void
  ): void;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionInput,
    cb?: (err: any, data?: AddSourceIdentifierToSubscriptionOutput) => void
  ): Promise<AddSourceIdentifierToSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddSourceIdentifierToSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToResource(
    args: AddTagsToResourceInput
  ): Promise<AddTagsToResourceOutput>;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb: (err: any, data?: AddTagsToResourceOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb?: (err: any, data?: AddTagsToResourceOutput) => void
  ): Promise<AddTagsToResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The specified resource ID was not found.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionInput
  ): Promise<ApplyPendingMaintenanceActionOutput>;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionOutput) => void
  ): void;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionInput,
    cb?: (err: any, data?: ApplyPendingMaintenanceActionOutput) => void
  ): Promise<ApplyPendingMaintenanceActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ApplyPendingMaintenanceActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <note> <p>You can't authorize ingress from an EC2 security group in one AWS Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> </note> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group doesn't allow deletion.</p>
   *   - {AuthorizationAlreadyExistsFault} <p>The specified CIDRIP or Amazon EC2 security group is already authorized for the specified DB security group.</p>
   *   - {AuthorizationQuotaExceededFault} <p>The DB security group authorization quota has been reached.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressInput
  ): Promise<AuthorizeDBSecurityGroupIngressOutput>;
  public authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressInput,
    cb: (err: any, data?: AuthorizeDBSecurityGroupIngressOutput) => void
  ): void;
  public authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressInput,
    cb?: (err: any, data?: AuthorizeDBSecurityGroupIngressOutput) => void
  ): Promise<AuthorizeDBSecurityGroupIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AuthorizeDBSecurityGroupIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public backtrackDBCluster(
    args: BacktrackDBClusterInput
  ): Promise<BacktrackDBClusterOutput>;
  public backtrackDBCluster(
    args: BacktrackDBClusterInput,
    cb: (err: any, data?: BacktrackDBClusterOutput) => void
  ): void;
  public backtrackDBCluster(
    args: BacktrackDBClusterInput,
    cb?: (err: any, data?: BacktrackDBClusterOutput) => void
  ): Promise<BacktrackDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BacktrackDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the specified DB cluster parameter group.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {DBParameterGroupQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB parameter groups.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupInput
  ): Promise<CopyDBClusterParameterGroupOutput>;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupInput,
    cb: (err: any, data?: CopyDBClusterParameterGroupOutput) => void
  ): void;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupInput,
    cb?: (err: any, data?: CopyDBClusterParameterGroupOutput) => void
  ): Promise<CopyDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another AWS Region. In that case, the AWS Region where you call the <code>CopyDBClusterSnapshot</code> action is the destination AWS Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another AWS Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region.</p> </li> <li> <p> <code>PreSignedUrl</code> - A URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> action to be called in the source AWS Region where the DB cluster snapshot is copied from. The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The KMS key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot will be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"> Signature Version 4 Signing Process</a>.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination AWS Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source AWS Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the pre-signed URL. </p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted DB cluster snapshots from one AWS Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>The user already has a DB cluster snapshot with the given identifier.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value isn't a valid DB cluster snapshot state.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB snapshots.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotInput
  ): Promise<CopyDBClusterSnapshotOutput>;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotInput,
    cb: (err: any, data?: CopyDBClusterSnapshotOutput) => void
  ): void;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotInput,
    cb?: (err: any, data?: CopyDBClusterSnapshotOutput) => void
  ): Promise<CopyDBClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyDBClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the specified DB parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name exists.</p>
   *   - {DBParameterGroupQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB parameter groups.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyDBParameterGroup(
    args: CopyDBParameterGroupInput
  ): Promise<CopyDBParameterGroupOutput>;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupInput,
    cb: (err: any, data?: CopyDBParameterGroupOutput) => void
  ): void;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupInput,
    cb?: (err: any, data?: CopyDBParameterGroupOutput) => void
  ): Promise<CopyDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the specified DB snapshot. The source DB snapshot must be in the "available" state.</p> <p>You can copy a snapshot from one AWS Region to another. In that case, the AWS Region where you call the <code>CopyDBSnapshot</code> action is the destination AWS Region for the DB snapshot copy. </p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopyDBSnapshot.html">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSnapshotAlreadyExistsFault} <p> <i>DBSnapshotIdentifier</i> is already used by an existing snapshot. </p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot doesn't allow deletion.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB snapshots.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyDBSnapshot(
    args: CopyDBSnapshotInput
  ): Promise<CopyDBSnapshotOutput>;
  public copyDBSnapshot(
    args: CopyDBSnapshotInput,
    cb: (err: any, data?: CopyDBSnapshotOutput) => void
  ): void;
  public copyDBSnapshot(
    args: CopyDBSnapshotInput,
    cb?: (err: any, data?: CopyDBSnapshotOutput) => void
  ): Promise<CopyDBSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyDBSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the specified option group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OptionGroupAlreadyExistsFault} <p>The option group you are trying to create already exists.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {OptionGroupQuotaExceededFault} <p>The quota of 20 option groups was exceeded for this AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyOptionGroup(
    args: CopyOptionGroupInput
  ): Promise<CopyOptionGroupOutput>;
  public copyOptionGroup(
    args: CopyOptionGroupInput,
    cb: (err: any, data?: CopyOptionGroupOutput) => void
  ): void;
  public copyOptionGroup(
    args: CopyOptionGroupInput,
    cb?: (err: any, data?: CopyOptionGroupOutput) => void
  ): Promise<CopyOptionGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyOptionGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Amazon Aurora DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon RDS MySQL DB instance. For cross-region replication where the DB cluster identified by <code>ReplicationSourceIdentifier</code> is encrypted, you must also specify the <code>PreSignedUrl</code> parameter.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>The user already has a DB cluster with the given identifier.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is insufficient storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>
   *   - {DBClusterQuotaExceededFault} <p>The user attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group cannot be deleted because it's in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> doesn't refer to an existing DB cluster parameter group. </p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {GlobalClusterNotFoundFault} <p/>
   *   - {InvalidGlobalClusterStateFault} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBCluster(
    args: CreateDBClusterInput
  ): Promise<CreateDBClusterOutput>;
  public createDBCluster(
    args: CreateDBClusterInput,
    cb: (err: any, data?: CreateDBClusterOutput) => void
  ): void;
  public createDBCluster(
    args: CreateDBClusterInput,
    cb?: (err: any, data?: CreateDBClusterOutput) => void
  ): Promise<CreateDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterEndpointQuotaExceededFault} <p>The cluster already has the maximum number of custom endpoints.</p>
   *   - {DBClusterEndpointAlreadyExistsFault} <p>The specified custom endpoint can't be created because it already exists.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointInput
  ): Promise<CreateDBClusterEndpointOutput>;
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointInput,
    cb: (err: any, data?: CreateDBClusterEndpointOutput) => void
  ): void;
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointInput,
    cb?: (err: any, data?: CreateDBClusterEndpointOutput) => void
  ): Promise<CreateDBClusterEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBClusterEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. </p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> action to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB parameter groups.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupInput
  ): Promise<CreateDBClusterParameterGroupOutput>;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupInput,
    cb: (err: any, data?: CreateDBClusterParameterGroupOutput) => void
  ): void;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupInput,
    cb?: (err: any, data?: CreateDBClusterParameterGroupOutput) => void
  ): Promise<CreateDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>The user already has a DB cluster snapshot with the given identifier.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {SnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value isn't a valid DB cluster snapshot state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotInput
  ): Promise<CreateDBClusterSnapshotOutput>;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotInput,
    cb: (err: any, data?: CreateDBClusterSnapshotOutput) => void
  ): void;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotInput,
    cb?: (err: any, data?: CreateDBClusterSnapshotOutput) => void
  ): Promise<CreateDBClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceAlreadyExistsFault} <p>The user already has a DB instance with the given identifier.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {InstanceQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB instances.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {ProvisionedIopsNotAvailableInAZFault} <p>Provisioned IOPS not available in the specified Availability Zone.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {StorageTypeNotSupportedFault} <p>Storage of the <i>StorageType</i> specified can't be associated with the DB instance. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {DomainNotFoundFault} <p> <i>Domain</i> doesn't refer to an existing Active Directory domain. </p>
   *   - {BackupPolicyNotFoundFault} BackupPolicyNotFoundFault shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBInstance(
    args: CreateDBInstanceInput
  ): Promise<CreateDBInstanceOutput>;
  public createDBInstance(
    args: CreateDBInstanceInput,
    cb: (err: any, data?: CreateDBInstanceOutput) => void
  ): void;
  public createDBInstance(
    args: CreateDBInstanceInput,
    cb?: (err: any, data?: CreateDBInstanceOutput) => void
  ): Promise<CreateDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB instance that acts as a Read Replica for an existing source DB instance. You can create a Read Replica for a DB instance running MySQL, MariaDB, Oracle, or PostgreSQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read Replicas</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Amazon Aurora doesn't support this action. You must call the <code>CreateDBInstance</code> action to create a DB instance for an Aurora DB cluster. </p> <p>All Read Replica DB instances are created with backups disabled. All other DB instance attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance, except as specified following. </p> <important> <p>Your source DB instance must have backup retention enabled. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceAlreadyExistsFault} <p>The user already has a DB instance with the given identifier.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {InstanceQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB instances.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {ProvisionedIopsNotAvailableInAZFault} <p>Provisioned IOPS not available in the specified Availability Zone.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {DBSubnetGroupNotAllowedFault} <p>The DBSubnetGroup shouldn't be specified while creating read replicas that lie in the same region as the source instance.</p>
   *   - {InvalidDBSubnetGroupFault} <p>The DBSubnetGroup doesn't belong to the same VPC as that of an existing cross-region read replica of the same source instance.</p>
   *   - {StorageTypeNotSupportedFault} <p>Storage of the <i>StorageType</i> specified can't be associated with the DB instance. </p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaInput
  ): Promise<CreateDBInstanceReadReplicaOutput>;
  public createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaInput,
    cb: (err: any, data?: CreateDBInstanceReadReplicaOutput) => void
  ): void;
  public createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaInput,
    cb?: (err: any, data?: CreateDBInstanceReadReplicaOutput) => void
  ): Promise<CreateDBInstanceReadReplicaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBInstanceReadReplicaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB parameter group.</p> <p> A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. </p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB parameter groups.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBParameterGroup(
    args: CreateDBParameterGroupInput
  ): Promise<CreateDBParameterGroupOutput>;
  public createDBParameterGroup(
    args: CreateDBParameterGroupInput,
    cb: (err: any, data?: CreateDBParameterGroupOutput) => void
  ): void;
  public createDBParameterGroup(
    args: CreateDBParameterGroupInput,
    cb?: (err: any, data?: CreateDBParameterGroupOutput) => void
  ): Promise<CreateDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <note> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSecurityGroupAlreadyExistsFault} <p> A DB security group with the name specified in <i>DBSecurityGroupName</i> already exists. </p>
   *   - {DBSecurityGroupQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB security groups.</p>
   *   - {DBSecurityGroupNotSupportedFault} <p>A DB security group isn't allowed for this action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBSecurityGroup(
    args: CreateDBSecurityGroupInput
  ): Promise<CreateDBSecurityGroupOutput>;
  public createDBSecurityGroup(
    args: CreateDBSecurityGroupInput,
    cb: (err: any, data?: CreateDBSecurityGroupOutput) => void
  ): void;
  public createDBSecurityGroup(
    args: CreateDBSecurityGroupInput,
    cb?: (err: any, data?: CreateDBSecurityGroupOutput) => void
  ): Promise<CreateDBSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a DBSnapshot. The source DBInstance must be in "available" state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSnapshotAlreadyExistsFault} <p> <i>DBSnapshotIdentifier</i> is already used by an existing snapshot. </p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {SnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB snapshots.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBSnapshot(
    args: CreateDBSnapshotInput
  ): Promise<CreateDBSnapshotOutput>;
  public createDBSnapshot(
    args: CreateDBSnapshotInput,
    cb: (err: any, data?: CreateDBSnapshotOutput) => void
  ): void;
  public createDBSnapshot(
    args: CreateDBSnapshotInput,
    cb?: (err: any, data?: CreateDBSnapshotOutput) => void
  ): Promise<CreateDBSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupAlreadyExistsFault} <p> <i>DBSubnetGroupName</i> is already used by an existing DB subnet group. </p>
   *   - {DBSubnetGroupQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB subnet groups.</p>
   *   - {DBSubnetQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of subnets in a DB subnet groups.</p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupInput
  ): Promise<CreateDBSubnetGroupOutput>;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupInput,
    cb: (err: any, data?: CreateDBSubnetGroupOutput) => void
  ): void;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupInput,
    cb?: (err: any, data?: CreateDBSubnetGroupOutput) => void
  ): Promise<CreateDBSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an RDS event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of RDS sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your RDS sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all RDS sources belonging to your customer account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EventSubscriptionQuotaExceededFault} <p>You have reached the maximum number of event subscriptions.</p>
   *   - {SubscriptionAlreadyExistFault} <p>The supplied subscription name already exists.</p>
   *   - {SNSInvalidTopicFault} <p>SNS has responded that there is a problem with the SND topic specified.</p>
   *   - {SNSNoAuthorizationFault} <p>You do not have permission to publish to the SNS topic ARN.</p>
   *   - {SNSTopicArnNotFoundFault} <p>The SNS topic ARN does not exist.</p>
   *   - {SubscriptionCategoryNotFoundFault} <p>The supplied category does not exist.</p>
   *   - {SourceNotFoundFault} <p>The requested source could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEventSubscription(
    args: CreateEventSubscriptionInput
  ): Promise<CreateEventSubscriptionOutput>;
  public createEventSubscription(
    args: CreateEventSubscriptionInput,
    cb: (err: any, data?: CreateEventSubscriptionOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionInput,
    cb?: (err: any, data?: CreateEventSubscriptionOutput) => void
  ): Promise<CreateEventSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEventSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> </p> <p> Creates an Aurora global database spread across multiple regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. </p> <p> You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {GlobalClusterAlreadyExistsFault} <p/>
   *   - {GlobalClusterQuotaExceededFault} <p/>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGlobalCluster(
    args: CreateGlobalClusterInput
  ): Promise<CreateGlobalClusterOutput>;
  public createGlobalCluster(
    args: CreateGlobalClusterInput,
    cb: (err: any, data?: CreateGlobalClusterOutput) => void
  ): void;
  public createGlobalCluster(
    args: CreateGlobalClusterInput,
    cb?: (err: any, data?: CreateGlobalClusterOutput) => void
  ): Promise<CreateGlobalClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGlobalClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new option group. You can create up to 20 option groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OptionGroupAlreadyExistsFault} <p>The option group you are trying to create already exists.</p>
   *   - {OptionGroupQuotaExceededFault} <p>The quota of 20 option groups was exceeded for this AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createOptionGroup(
    args: CreateOptionGroupInput
  ): Promise<CreateOptionGroupOutput>;
  public createOptionGroup(
    args: CreateOptionGroupInput,
    cb: (err: any, data?: CreateOptionGroupOutput) => void
  ): void;
  public createOptionGroup(
    args: CreateOptionGroupInput,
    cb?: (err: any, data?: CreateOptionGroupOutput) => void
  ): Promise<CreateOptionGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateOptionGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>The user already has a DB cluster snapshot with the given identifier.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value isn't a valid DB cluster snapshot state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBCluster(
    args: DeleteDBClusterInput
  ): Promise<DeleteDBClusterOutput>;
  public deleteDBCluster(
    args: DeleteDBClusterInput,
    cb: (err: any, data?: DeleteDBClusterOutput) => void
  ): void;
  public deleteDBCluster(
    args: DeleteDBClusterInput,
    cb?: (err: any, data?: DeleteDBClusterOutput) => void
  ): Promise<DeleteDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBClusterEndpointStateFault} <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
   *   - {DBClusterEndpointNotFoundFault} <p>The specified custom endpoint doesn't exist.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointInput
  ): Promise<DeleteDBClusterEndpointOutput>;
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointInput,
    cb: (err: any, data?: DeleteDBClusterEndpointOutput) => void
  ): void;
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointInput,
    cb?: (err: any, data?: DeleteDBClusterEndpointOutput) => void
  ): Promise<DeleteDBClusterEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBClusterEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupInput
  ): Promise<DeleteDBClusterParameterGroupOutput>;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupInput,
    cb: (err: any, data?: DeleteDBClusterParameterGroupOutput) => void
  ): void;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupInput,
    cb?: (err: any, data?: DeleteDBClusterParameterGroupOutput) => void
  ): Promise<DeleteDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value isn't a valid DB cluster snapshot state.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotInput
  ): Promise<DeleteDBClusterSnapshotOutput>;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotInput,
    cb: (err: any, data?: DeleteDBClusterSnapshotOutput) => void
  ): void;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotInput,
    cb?: (err: any, data?: DeleteDBClusterSnapshotOutput) => void
  ): Promise<DeleteDBClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. </p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a Read Replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a Read Replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBSnapshotAlreadyExistsFault} <p> <i>DBSnapshotIdentifier</i> is already used by an existing snapshot. </p>
   *   - {SnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {DBInstanceAutomatedBackupQuotaExceededFault} <p>The quota for retained automated backups was exceeded. This prevents you from retaining any additional automated backups. The retained automated backups quota is the same as your DB Instance quota.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBInstance(
    args: DeleteDBInstanceInput
  ): Promise<DeleteDBInstanceOutput>;
  public deleteDBInstance(
    args: DeleteDBInstanceInput,
    cb: (err: any, data?: DeleteDBInstanceOutput) => void
  ): void;
  public deleteDBInstance(
    args: DeleteDBInstanceInput,
    cb?: (err: any, data?: DeleteDBInstanceOutput) => void
  ): Promise<DeleteDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes automated backups based on the source instance's <code>DbiResourceId</code> value or the restorable instance's resource ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceAutomatedBackupStateFault} <p>The automated backup is in an invalid state. For example, this automated backup is associated with an active instance. </p>
   *   - {DBInstanceAutomatedBackupNotFoundFault} <p>No automated backup for this DB instance was found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupInput
  ): Promise<DeleteDBInstanceAutomatedBackupOutput>;
  public deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupInput,
    cb: (err: any, data?: DeleteDBInstanceAutomatedBackupOutput) => void
  ): void;
  public deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupInput,
    cb?: (err: any, data?: DeleteDBInstanceAutomatedBackupOutput) => void
  ): Promise<DeleteDBInstanceAutomatedBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBInstanceAutomatedBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupInput
  ): Promise<DeleteDBParameterGroupOutput>;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupInput,
    cb: (err: any, data?: DeleteDBParameterGroupOutput) => void
  ): void;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupInput,
    cb?: (err: any, data?: DeleteDBParameterGroupOutput) => void
  ): Promise<DeleteDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a DB security group.</p> <note> <p>The specified DB security group must not be associated with any DB instances.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group doesn't allow deletion.</p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupInput
  ): Promise<DeleteDBSecurityGroupOutput>;
  public deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupInput,
    cb: (err: any, data?: DeleteDBSecurityGroupOutput) => void
  ): void;
  public deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupInput,
    cb?: (err: any, data?: DeleteDBSecurityGroupOutput) => void
  ): Promise<DeleteDBSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot doesn't allow deletion.</p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBSnapshot(
    args: DeleteDBSnapshotInput
  ): Promise<DeleteDBSnapshotOutput>;
  public deleteDBSnapshot(
    args: DeleteDBSnapshotInput,
    cb: (err: any, data?: DeleteDBSnapshotOutput) => void
  ): void;
  public deleteDBSnapshot(
    args: DeleteDBSnapshotInput,
    cb?: (err: any, data?: DeleteDBSnapshotOutput) => void
  ): Promise<DeleteDBSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group cannot be deleted because it's in use.</p>
   *   - {InvalidDBSubnetStateFault} <p> The DB subnet isn't in the <i>available</i> state. </p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupInput
  ): Promise<DeleteDBSubnetGroupOutput>;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupInput,
    cb: (err: any, data?: DeleteDBSubnetGroupOutput) => void
  ): void;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupInput,
    cb?: (err: any, data?: DeleteDBSubnetGroupOutput) => void
  ): Promise<DeleteDBSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an RDS event notification subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>The subscription name does not exist.</p>
   *   - {InvalidEventSubscriptionStateFault} <p>This error can occur if someone else is modifying a subscription. You should retry the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEventSubscription(
    args: DeleteEventSubscriptionInput
  ): Promise<DeleteEventSubscriptionOutput>;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionInput,
    cb: (err: any, data?: DeleteEventSubscriptionOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionInput,
    cb?: (err: any, data?: DeleteEventSubscriptionOutput) => void
  ): Promise<DeleteEventSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEventSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {GlobalClusterNotFoundFault} <p/>
   *   - {InvalidGlobalClusterStateFault} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGlobalCluster(
    args: DeleteGlobalClusterInput
  ): Promise<DeleteGlobalClusterOutput>;
  public deleteGlobalCluster(
    args: DeleteGlobalClusterInput,
    cb: (err: any, data?: DeleteGlobalClusterOutput) => void
  ): void;
  public deleteGlobalCluster(
    args: DeleteGlobalClusterInput,
    cb?: (err: any, data?: DeleteGlobalClusterOutput) => void
  ): Promise<DeleteGlobalClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGlobalClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing option group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {InvalidOptionGroupStateFault} <p> The option group isn't in the <i>available</i> state. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteOptionGroup(
    args: DeleteOptionGroupInput
  ): Promise<DeleteOptionGroupOutput>;
  public deleteOptionGroup(
    args: DeleteOptionGroupInput,
    cb: (err: any, data?: DeleteOptionGroupOutput) => void
  ): void;
  public deleteOptionGroup(
    args: DeleteOptionGroupInput,
    cb?: (err: any, data?: DeleteOptionGroupOutput) => void
  ): Promise<DeleteOptionGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteOptionGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput
  ): Promise<DescribeAccountAttributesOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb?: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): Promise<DescribeAccountAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the set of CA certificates provided by Amazon RDS for this AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CertificateNotFoundFault} <p> <i>CertificateIdentifier</i> doesn't refer to an existing certificate. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCertificates(
    args: DescribeCertificatesInput
  ): Promise<DescribeCertificatesOutput>;
  public describeCertificates(
    args: DescribeCertificatesInput,
    cb: (err: any, data?: DescribeCertificatesOutput) => void
  ): void;
  public describeCertificates(
    args: DescribeCertificatesInput,
    cb?: (err: any, data?: DescribeCertificatesOutput) => void
  ): Promise<DescribeCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {DBClusterBacktrackNotFoundFault} <p> <i>BacktrackIdentifier</i> doesn't refer to an existing backtrack. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksInput
  ): Promise<DescribeDBClusterBacktracksOutput>;
  public describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksInput,
    cb: (err: any, data?: DescribeDBClusterBacktracksOutput) => void
  ): void;
  public describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksInput,
    cb?: (err: any, data?: DescribeDBClusterBacktracksOutput) => void
  ): Promise<DescribeDBClusterBacktracksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterBacktracksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsInput
  ): Promise<DescribeDBClusterEndpointsOutput>;
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsInput,
    cb: (err: any, data?: DescribeDBClusterEndpointsOutput) => void
  ): void;
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsInput,
    cb?: (err: any, data?: DescribeDBClusterEndpointsOutput) => void
  ): Promise<DescribeDBClusterEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group. </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsInput
  ): Promise<DescribeDBClusterParameterGroupsOutput>;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsInput,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsOutput) => void
  ): void;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsInput,
    cb?: (err: any, data?: DescribeDBClusterParameterGroupsOutput) => void
  ): Promise<DescribeDBClusterParameterGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterParameterGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersInput
  ): Promise<DescribeDBClusterParametersOutput>;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersInput,
    cb: (err: any, data?: DescribeDBClusterParametersOutput) => void
  ): void;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersInput,
    cb?: (err: any, data?: DescribeDBClusterParametersOutput) => void
  ): Promise<DescribeDBClusterParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other AWS accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts.</p> <p>To add or remove access for an AWS account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesInput
  ): Promise<DescribeDBClusterSnapshotAttributesOutput>;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesOutput) => void
  ): void;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesInput,
    cb?: (err: any, data?: DescribeDBClusterSnapshotAttributesOutput) => void
  ): Promise<DescribeDBClusterSnapshotAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterSnapshotAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsInput
  ): Promise<DescribeDBClusterSnapshotsOutput>;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotsOutput) => void
  ): void;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsInput,
    cb?: (err: any, data?: DescribeDBClusterSnapshotsOutput) => void
  ): Promise<DescribeDBClusterSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about provisioned Aurora DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusters(
    args: DescribeDBClustersInput
  ): Promise<DescribeDBClustersOutput>;
  public describeDBClusters(
    args: DescribeDBClustersInput,
    cb: (err: any, data?: DescribeDBClustersOutput) => void
  ): void;
  public describeDBClusters(
    args: DescribeDBClustersInput,
    cb?: (err: any, data?: DescribeDBClustersOutput) => void
  ): Promise<DescribeDBClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the available DB engines.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsInput
  ): Promise<DescribeDBEngineVersionsOutput>;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsInput,
    cb: (err: any, data?: DescribeDBEngineVersionsOutput) => void
  ): void;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsInput,
    cb?: (err: any, data?: DescribeDBEngineVersionsOutput) => void
  ): Promise<DescribeDBEngineVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBEngineVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceAutomatedBackupNotFoundFault} <p>No automated backup for this DB instance was found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsInput
  ): Promise<DescribeDBInstanceAutomatedBackupsOutput>;
  public describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsInput,
    cb: (err: any, data?: DescribeDBInstanceAutomatedBackupsOutput) => void
  ): void;
  public describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsInput,
    cb?: (err: any, data?: DescribeDBInstanceAutomatedBackupsOutput) => void
  ): Promise<DescribeDBInstanceAutomatedBackupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBInstanceAutomatedBackupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about provisioned RDS instances. This API supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBInstances(
    args: DescribeDBInstancesInput
  ): Promise<DescribeDBInstancesOutput>;
  public describeDBInstances(
    args: DescribeDBInstancesInput,
    cb: (err: any, data?: DescribeDBInstancesOutput) => void
  ): void;
  public describeDBInstances(
    args: DescribeDBInstancesInput,
    cb?: (err: any, data?: DescribeDBInstancesOutput) => void
  ): Promise<DescribeDBInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of DB log files for the DB instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBLogFiles(
    args: DescribeDBLogFilesInput
  ): Promise<DescribeDBLogFilesOutput>;
  public describeDBLogFiles(
    args: DescribeDBLogFilesInput,
    cb: (err: any, data?: DescribeDBLogFilesOutput) => void
  ): void;
  public describeDBLogFiles(
    args: DescribeDBLogFilesInput,
    cb?: (err: any, data?: DescribeDBLogFilesOutput) => void
  ): Promise<DescribeDBLogFilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBLogFilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsInput
  ): Promise<DescribeDBParameterGroupsOutput>;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsInput,
    cb: (err: any, data?: DescribeDBParameterGroupsOutput) => void
  ): void;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsInput,
    cb?: (err: any, data?: DescribeDBParameterGroupsOutput) => void
  ): Promise<DescribeDBParameterGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBParameterGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBParameters(
    args: DescribeDBParametersInput
  ): Promise<DescribeDBParametersOutput>;
  public describeDBParameters(
    args: DescribeDBParametersInput,
    cb: (err: any, data?: DescribeDBParametersOutput) => void
  ): void;
  public describeDBParameters(
    args: DescribeDBParametersInput,
    cb?: (err: any, data?: DescribeDBParametersOutput) => void
  ): Promise<DescribeDBParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsInput
  ): Promise<DescribeDBSecurityGroupsOutput>;
  public describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsInput,
    cb: (err: any, data?: DescribeDBSecurityGroupsOutput) => void
  ): void;
  public describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsInput,
    cb?: (err: any, data?: DescribeDBSecurityGroupsOutput) => void
  ): Promise<DescribeDBSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other AWS accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all AWS accounts.</p> <p>To add or remove access for an AWS account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesInput
  ): Promise<DescribeDBSnapshotAttributesOutput>;
  public describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesInput,
    cb: (err: any, data?: DescribeDBSnapshotAttributesOutput) => void
  ): void;
  public describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesInput,
    cb?: (err: any, data?: DescribeDBSnapshotAttributesOutput) => void
  ): Promise<DescribeDBSnapshotAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBSnapshotAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about DB snapshots. This API action supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBSnapshots(
    args: DescribeDBSnapshotsInput
  ): Promise<DescribeDBSnapshotsOutput>;
  public describeDBSnapshots(
    args: DescribeDBSnapshotsInput,
    cb: (err: any, data?: DescribeDBSnapshotsOutput) => void
  ): void;
  public describeDBSnapshots(
    args: DescribeDBSnapshotsInput,
    cb?: (err: any, data?: DescribeDBSnapshotsOutput) => void
  ): Promise<DescribeDBSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsInput
  ): Promise<DescribeDBSubnetGroupsOutput>;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsInput,
    cb: (err: any, data?: DescribeDBSubnetGroupsOutput) => void
  ): void;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsInput,
    cb?: (err: any, data?: DescribeDBSubnetGroupsOutput) => void
  ): Promise<DescribeDBSubnetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBSubnetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersInput
  ): Promise<DescribeEngineDefaultClusterParametersOutput>;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersInput,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersOutput) => void
  ): void;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersInput,
    cb?: (err: any, data?: DescribeEngineDefaultClusterParametersOutput) => void
  ): Promise<DescribeEngineDefaultClusterParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEngineDefaultClusterParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the specified database engine.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput
  ): Promise<DescribeEngineDefaultParametersOutput>;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput,
    cb?: (err: any, data?: DescribeEngineDefaultParametersOutput) => void
  ): Promise<DescribeEngineDefaultParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEngineDefaultParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays a list of categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html"> Events</a> topic in the <i>Amazon RDS User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventCategories(
    args: DescribeEventCategoriesInput
  ): Promise<DescribeEventCategoriesOutput>;
  public describeEventCategories(
    args: DescribeEventCategoriesInput,
    cb: (err: any, data?: DescribeEventCategoriesOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesInput,
    cb?: (err: any, data?: DescribeEventCategoriesOutput) => void
  ): Promise<DescribeEventCategoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventCategoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>The subscription name does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsInput
  ): Promise<DescribeEventSubscriptionsOutput>;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsInput,
    cb: (err: any, data?: DescribeEventSubscriptionsOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsInput,
    cb?: (err: any, data?: DescribeEventSubscriptionsOutput) => void
  ): Promise<DescribeEventSubscriptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventSubscriptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEvents(
    args: DescribeEventsInput
  ): Promise<DescribeEventsOutput>;
  public describeEvents(
    args: DescribeEventsInput,
    cb: (err: any, data?: DescribeEventsOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsInput,
    cb?: (err: any, data?: DescribeEventsOutput) => void
  ): Promise<DescribeEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns information about Aurora global database clusters. This API supports pagination. </p> <p> For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {GlobalClusterNotFoundFault} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeGlobalClusters(
    args: DescribeGlobalClustersInput
  ): Promise<DescribeGlobalClustersOutput>;
  public describeGlobalClusters(
    args: DescribeGlobalClustersInput,
    cb: (err: any, data?: DescribeGlobalClustersOutput) => void
  ): void;
  public describeGlobalClusters(
    args: DescribeGlobalClustersInput,
    cb?: (err: any, data?: DescribeGlobalClustersOutput) => void
  ): Promise<DescribeGlobalClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeGlobalClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes all available options.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsInput
  ): Promise<DescribeOptionGroupOptionsOutput>;
  public describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsInput,
    cb: (err: any, data?: DescribeOptionGroupOptionsOutput) => void
  ): void;
  public describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsInput,
    cb?: (err: any, data?: DescribeOptionGroupOptionsOutput) => void
  ): Promise<DescribeOptionGroupOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOptionGroupOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the available option groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOptionGroups(
    args: DescribeOptionGroupsInput
  ): Promise<DescribeOptionGroupsOutput>;
  public describeOptionGroups(
    args: DescribeOptionGroupsInput,
    cb: (err: any, data?: DescribeOptionGroupsOutput) => void
  ): void;
  public describeOptionGroups(
    args: DescribeOptionGroupsInput,
    cb?: (err: any, data?: DescribeOptionGroupsOutput) => void
  ): Promise<DescribeOptionGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOptionGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of orderable DB instance options for the specified engine.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsInput
  ): Promise<DescribeOrderableDBInstanceOptionsOutput>;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsInput,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsOutput) => void
  ): void;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsInput,
    cb?: (err: any, data?: DescribeOrderableDBInstanceOptionsOutput) => void
  ): Promise<DescribeOrderableDBInstanceOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOrderableDBInstanceOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The specified resource ID was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsInput
  ): Promise<DescribePendingMaintenanceActionsOutput>;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsOutput) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsInput,
    cb?: (err: any, data?: DescribePendingMaintenanceActionsOutput) => void
  ): Promise<DescribePendingMaintenanceActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePendingMaintenanceActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about reserved DB instances for this account, or about a specified reserved DB instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedDBInstanceNotFoundFault} <p>The specified reserved DB Instance not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedDBInstances(
    args: DescribeReservedDBInstancesInput
  ): Promise<DescribeReservedDBInstancesOutput>;
  public describeReservedDBInstances(
    args: DescribeReservedDBInstancesInput,
    cb: (err: any, data?: DescribeReservedDBInstancesOutput) => void
  ): void;
  public describeReservedDBInstances(
    args: DescribeReservedDBInstancesInput,
    cb?: (err: any, data?: DescribeReservedDBInstancesOutput) => void
  ): Promise<DescribeReservedDBInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedDBInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists available reserved DB instance offerings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedDBInstancesOfferingNotFoundFault} <p>Specified offering does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsInput
  ): Promise<DescribeReservedDBInstancesOfferingsOutput>;
  public describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsInput,
    cb: (err: any, data?: DescribeReservedDBInstancesOfferingsOutput) => void
  ): void;
  public describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsInput,
    cb?: (err: any, data?: DescribeReservedDBInstancesOfferingsOutput) => void
  ): Promise<DescribeReservedDBInstancesOfferingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedDBInstancesOfferingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from. This API action supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSourceRegions(
    args: DescribeSourceRegionsInput
  ): Promise<DescribeSourceRegionsOutput>;
  public describeSourceRegions(
    args: DescribeSourceRegionsInput,
    cb: (err: any, data?: DescribeSourceRegionsOutput) => void
  ): void;
  public describeSourceRegions(
    args: DescribeSourceRegionsInput,
    cb?: (err: any, data?: DescribeSourceRegionsOutput) => void
  ): Promise<DescribeSourceRegionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSourceRegionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsInput
  ): Promise<DescribeValidDBInstanceModificationsOutput>;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsInput,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsOutput) => void
  ): void;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsInput,
    cb?: (err: any, data?: DescribeValidDBInstanceModificationsOutput) => void
  ): Promise<DescribeValidDBInstanceModificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeValidDBInstanceModificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {DBLogFileNotFoundFault} <p> <i>LogFileName</i> doesn't refer to an existing DB log file.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionInput
  ): Promise<DownloadDBLogFilePortionOutput>;
  public downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionInput,
    cb: (err: any, data?: DownloadDBLogFilePortionOutput) => void
  ): void;
  public downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionInput,
    cb?: (err: any, data?: DownloadDBLogFilePortionOutput) => void
  ): Promise<DownloadDBLogFilePortionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DownloadDBLogFilePortionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public failoverDBCluster(
    args: FailoverDBClusterInput
  ): Promise<FailoverDBClusterOutput>;
  public failoverDBCluster(
    args: FailoverDBClusterInput,
    cb: (err: any, data?: FailoverDBClusterOutput) => void
  ): void;
  public failoverDBCluster(
    args: FailoverDBClusterInput,
    cb?: (err: any, data?: FailoverDBClusterOutput) => void
  ): Promise<FailoverDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new FailoverDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p> <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBClusterCapacityFault} <p> <i>Capacity</i> isn't a valid Aurora Serverless DB cluster capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityInput
  ): Promise<ModifyCurrentDBClusterCapacityOutput>;
  public modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityInput,
    cb: (err: any, data?: ModifyCurrentDBClusterCapacityOutput) => void
  ): void;
  public modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityInput,
    cb?: (err: any, data?: ModifyCurrentDBClusterCapacityOutput) => void
  ): Promise<ModifyCurrentDBClusterCapacityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyCurrentDBClusterCapacityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modify a setting for an Amazon Aurora DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group cannot be deleted because it's in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> doesn't refer to an existing DB cluster parameter group. </p>
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group doesn't allow deletion.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBClusterAlreadyExistsFault} <p>The user already has a DB cluster with the given identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBCluster(
    args: ModifyDBClusterInput
  ): Promise<ModifyDBClusterOutput>;
  public modifyDBCluster(
    args: ModifyDBClusterInput,
    cb: (err: any, data?: ModifyDBClusterOutput) => void
  ): void;
  public modifyDBCluster(
    args: ModifyDBClusterInput,
    cb?: (err: any, data?: ModifyDBClusterOutput) => void
  ): Promise<ModifyDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBClusterEndpointStateFault} <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
   *   - {DBClusterEndpointNotFoundFault} <p>The specified custom endpoint doesn't exist.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointInput
  ): Promise<ModifyDBClusterEndpointOutput>;
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointInput,
    cb: (err: any, data?: ModifyDBClusterEndpointOutput) => void
  ): void;
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointInput,
    cb?: (err: any, data?: ModifyDBClusterEndpointOutput) => void
  ): Promise<ModifyDBClusterEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBClusterEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> action to verify that your DB cluster parameter group has been created or modified.</p> </important> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupInput
  ): Promise<ModifyDBClusterParameterGroupOutput>;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupInput,
    cb: (err: any, data?: ModifyDBClusterParameterGroupOutput) => void
  ): void;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupInput,
    cb?: (err: any, data?: ModifyDBClusterParameterGroupOutput) => void
  ): Promise<ModifyDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value isn't a valid DB cluster snapshot state.</p>
   *   - {SharedSnapshotQuotaExceededFault} <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeInput
  ): Promise<ModifyDBClusterSnapshotAttributeOutput>;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeInput,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeOutput) => void
  ): void;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeInput,
    cb?: (err: any, data?: ModifyDBClusterSnapshotAttributeOutput) => void
  ): Promise<ModifyDBClusterSnapshotAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBClusterSnapshotAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group doesn't allow deletion.</p>
   *   - {DBInstanceAlreadyExistsFault} <p>The user already has a DB instance with the given identifier.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {ProvisionedIopsNotAvailableInAZFault} <p>Provisioned IOPS not available in the specified Availability Zone.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {DBUpgradeDependencyFailureFault} <p>The DB upgrade failed because a resource the DB depends on can't be modified.</p>
   *   - {StorageTypeNotSupportedFault} <p>Storage of the <i>StorageType</i> specified can't be associated with the DB instance. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>
   *   - {CertificateNotFoundFault} <p> <i>CertificateIdentifier</i> doesn't refer to an existing certificate. </p>
   *   - {DomainNotFoundFault} <p> <i>Domain</i> doesn't refer to an existing Active Directory domain. </p>
   *   - {BackupPolicyNotFoundFault} BackupPolicyNotFoundFault shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBInstance(
    args: ModifyDBInstanceInput
  ): Promise<ModifyDBInstanceOutput>;
  public modifyDBInstance(
    args: ModifyDBInstanceInput,
    cb: (err: any, data?: ModifyDBInstanceOutput) => void
  ): void;
  public modifyDBInstance(
    args: ModifyDBInstanceInput,
    cb?: (err: any, data?: ModifyDBInstanceOutput) => void
  ): Promise<ModifyDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupInput
  ): Promise<ModifyDBParameterGroupOutput>;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupInput,
    cb: (err: any, data?: ModifyDBParameterGroupOutput) => void
  ): void;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupInput,
    cb?: (err: any, data?: ModifyDBParameterGroupOutput) => void
  ): Promise<ModifyDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL and Oracle. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBSnapshot(
    args: ModifyDBSnapshotInput
  ): Promise<ModifyDBSnapshotOutput>;
  public modifyDBSnapshot(
    args: ModifyDBSnapshotInput,
    cb: (err: any, data?: ModifyDBSnapshotOutput) => void
  ): void;
  public modifyDBSnapshot(
    args: ModifyDBSnapshotInput,
    cb?: (err: any, data?: ModifyDBSnapshotOutput) => void
  ): Promise<ModifyDBSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all AWS accounts. If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which AWS accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <code>DescribeDBSnapshotAttributes</code> API action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot doesn't allow deletion.</p>
   *   - {SharedSnapshotQuotaExceededFault} <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeInput
  ): Promise<ModifyDBSnapshotAttributeOutput>;
  public modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeInput,
    cb: (err: any, data?: ModifyDBSnapshotAttributeOutput) => void
  ): void;
  public modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeInput,
    cb?: (err: any, data?: ModifyDBSnapshotAttributeOutput) => void
  ): Promise<ModifyDBSnapshotAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBSnapshotAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of subnets in a DB subnet groups.</p>
   *   - {SubnetAlreadyInUse} <p>The DB subnet is already in use in the Availability Zone.</p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupInput
  ): Promise<ModifyDBSubnetGroupOutput>;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupInput,
    cb: (err: any, data?: ModifyDBSubnetGroupOutput) => void
  ): void;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupInput,
    cb?: (err: any, data?: ModifyDBSubnetGroupOutput) => void
  ): Promise<ModifyDBSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing RDS event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given SourceType in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> topic in the <i>Amazon RDS User Guide</i> or by using the <b>DescribeEventCategories</b> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EventSubscriptionQuotaExceededFault} <p>You have reached the maximum number of event subscriptions.</p>
   *   - {SubscriptionNotFoundFault} <p>The subscription name does not exist.</p>
   *   - {SNSInvalidTopicFault} <p>SNS has responded that there is a problem with the SND topic specified.</p>
   *   - {SNSNoAuthorizationFault} <p>You do not have permission to publish to the SNS topic ARN.</p>
   *   - {SNSTopicArnNotFoundFault} <p>The SNS topic ARN does not exist.</p>
   *   - {SubscriptionCategoryNotFoundFault} <p>The supplied category does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyEventSubscription(
    args: ModifyEventSubscriptionInput
  ): Promise<ModifyEventSubscriptionOutput>;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionInput,
    cb: (err: any, data?: ModifyEventSubscriptionOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionInput,
    cb?: (err: any, data?: ModifyEventSubscriptionOutput) => void
  ): Promise<ModifyEventSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyEventSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {GlobalClusterNotFoundFault} <p/>
   *   - {InvalidGlobalClusterStateFault} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyGlobalCluster(
    args: ModifyGlobalClusterInput
  ): Promise<ModifyGlobalClusterOutput>;
  public modifyGlobalCluster(
    args: ModifyGlobalClusterInput,
    cb: (err: any, data?: ModifyGlobalClusterOutput) => void
  ): void;
  public modifyGlobalCluster(
    args: ModifyGlobalClusterInput,
    cb?: (err: any, data?: ModifyGlobalClusterOutput) => void
  ): Promise<ModifyGlobalClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyGlobalClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing option group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidOptionGroupStateFault} <p> The option group isn't in the <i>available</i> state. </p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyOptionGroup(
    args: ModifyOptionGroupInput
  ): Promise<ModifyOptionGroupOutput>;
  public modifyOptionGroup(
    args: ModifyOptionGroupInput,
    cb: (err: any, data?: ModifyOptionGroupOutput) => void
  ): void;
  public modifyOptionGroup(
    args: ModifyOptionGroupInput,
    cb?: (err: any, data?: ModifyOptionGroupOutput) => void
  ): Promise<ModifyOptionGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyOptionGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Promotes a Read Replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a Read Replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a Read Replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your Read Replica, configure the automated backup window so that daily backups do not interfere with Read Replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p> </li> </ul> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public promoteReadReplica(
    args: PromoteReadReplicaInput
  ): Promise<PromoteReadReplicaOutput>;
  public promoteReadReplica(
    args: PromoteReadReplicaInput,
    cb: (err: any, data?: PromoteReadReplicaOutput) => void
  ): void;
  public promoteReadReplica(
    args: PromoteReadReplicaInput,
    cb?: (err: any, data?: PromoteReadReplicaOutput) => void
  ): Promise<PromoteReadReplicaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PromoteReadReplicaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Promotes a Read Replica DB cluster to a standalone DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterInput
  ): Promise<PromoteReadReplicaDBClusterOutput>;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterInput,
    cb: (err: any, data?: PromoteReadReplicaDBClusterOutput) => void
  ): void;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterInput,
    cb?: (err: any, data?: PromoteReadReplicaDBClusterOutput) => void
  ): Promise<PromoteReadReplicaDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PromoteReadReplicaDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Purchases a reserved DB instance offering.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedDBInstancesOfferingNotFoundFault} <p>Specified offering does not exist.</p>
   *   - {ReservedDBInstanceAlreadyExistsFault} <p>User already has a reservation with the given identifier.</p>
   *   - {ReservedDBInstanceQuotaExceededFault} <p>Request would exceed the user's DB Instance quota.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingInput
  ): Promise<PurchaseReservedDBInstancesOfferingOutput>;
  public purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingInput,
    cb: (err: any, data?: PurchaseReservedDBInstancesOfferingOutput) => void
  ): void;
  public purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingInput,
    cb?: (err: any, data?: PurchaseReservedDBInstancesOfferingOutput) => void
  ): Promise<PurchaseReservedDBInstancesOfferingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PurchaseReservedDBInstancesOfferingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. </p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootDBInstance(
    args: RebootDBInstanceInput
  ): Promise<RebootDBInstanceOutput>;
  public rebootDBInstance(
    args: RebootDBInstanceInput,
    cb: (err: any, data?: RebootDBInstanceOutput) => void
  ): void;
  public rebootDBInstance(
    args: RebootDBInstanceInput,
    cb?: (err: any, data?: RebootDBInstanceOutput) => void
  ): Promise<RebootDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different region. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {GlobalClusterNotFoundFault} <p/>
   *   - {InvalidGlobalClusterStateFault} <p/>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterInput
  ): Promise<RemoveFromGlobalClusterOutput>;
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterInput,
    cb: (err: any, data?: RemoveFromGlobalClusterOutput) => void
  ): void;
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterInput,
    cb?: (err: any, data?: RemoveFromGlobalClusterOutput) => void
  ): Promise<RemoveFromGlobalClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveFromGlobalClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL to Access Other AWS Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {DBClusterRoleNotFoundFault} <p>The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterInput
  ): Promise<RemoveRoleFromDBClusterOutput>;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterInput,
    cb: (err: any, data?: RemoveRoleFromDBClusterOutput) => void
  ): void;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterInput,
    cb?: (err: any, data?: RemoveRoleFromDBClusterOutput) => void
  ): Promise<RemoveRoleFromDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveRoleFromDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates an AWS Identity and Access Management (IAM) role from a DB instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {DBInstanceRoleNotFoundFault} <p>The specified <i>RoleArn</i> value doesn't match the specifed feature for the DB instance.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceInput
  ): Promise<RemoveRoleFromDBInstanceOutput>;
  public removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceInput,
    cb: (err: any, data?: RemoveRoleFromDBInstanceOutput) => void
  ): void;
  public removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceInput,
    cb?: (err: any, data?: RemoveRoleFromDBInstanceOutput) => void
  ): Promise<RemoveRoleFromDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveRoleFromDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a source identifier from an existing RDS event notification subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>The subscription name does not exist.</p>
   *   - {SourceNotFoundFault} <p>The requested source could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionInput
  ): Promise<RemoveSourceIdentifierFromSubscriptionOutput>;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionInput,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionOutput) => void
  ): void;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionInput,
    cb?: (err: any, data?: RemoveSourceIdentifierFromSubscriptionOutput) => void
  ): Promise<RemoveSourceIdentifierFromSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveSourceIdentifierFromSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput
  ): Promise<RemoveTagsFromResourceOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb?: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): Promise<RemoveTagsFromResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupInput
  ): Promise<ResetDBClusterParameterGroupOutput>;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupInput,
    cb: (err: any, data?: ResetDBClusterParameterGroupOutput) => void
  ): void;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupInput,
    cb?: (err: any, data?: ResetDBClusterParameterGroupOutput) => void
  ): Promise<ResetDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetDBParameterGroup(
    args: ResetDBParameterGroupInput
  ): Promise<ResetDBParameterGroupOutput>;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupInput,
    cb: (err: any, data?: ResetDBParameterGroupOutput) => void
  ): void;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupInput,
    cb?: (err: any, data?: ResetDBParameterGroupOutput) => void
  ): Promise<ResetDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.html"> Migrating Data to an Amazon Aurora MySQL DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>The user already has a DB cluster with the given identifier.</p>
   *   - {DBClusterQuotaExceededFault} <p>The user attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group cannot be deleted because it's in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidS3BucketFault} <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> doesn't refer to an existing DB cluster parameter group. </p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is insufficient storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3Input
  ): Promise<RestoreDBClusterFromS3Output>;
  public restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3Input,
    cb: (err: any, data?: RestoreDBClusterFromS3Output) => void
  ): void;
  public restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3Input,
    cb?: (err: any, data?: RestoreDBClusterFromS3Output) => void
  ): Promise<RestoreDBClusterFromS3Output> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDBClusterFromS3Command(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>The user already has a DB cluster with the given identifier.</p>
   *   - {DBClusterQuotaExceededFault} <p>The user attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {InsufficientDBClusterCapacityFault} <p>The DB cluster doesn't have enough capacity for the current operation.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is insufficient storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot doesn't allow deletion.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value isn't a valid DB cluster snapshot state.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {InvalidRestoreFault} <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> doesn't refer to an existing DB cluster parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotInput
  ): Promise<RestoreDBClusterFromSnapshotOutput>;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotInput,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotOutput) => void
  ): void;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotInput,
    cb?: (err: any, data?: RestoreDBClusterFromSnapshotOutput) => void
  ): Promise<RestoreDBClusterFromSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDBClusterFromSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. </p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>The user already has a DB cluster with the given identifier.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {DBClusterQuotaExceededFault} <p>The user attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {InsufficientDBClusterCapacityFault} <p>The DB cluster doesn't have enough capacity for the current operation.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is insufficient storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value isn't a valid DB cluster snapshot state.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot doesn't allow deletion.</p>
   *   - {InvalidRestoreFault} <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> doesn't refer to an existing DB cluster parameter group. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeInput
  ): Promise<RestoreDBClusterToPointInTimeOutput>;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeInput,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeOutput) => void
  ): void;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeInput,
    cb?: (err: any, data?: RestoreDBClusterToPointInTimeOutput) => void
  ): Promise<RestoreDBClusterToPointInTimeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDBClusterToPointInTimeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with the most of original configuration with the default security group and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored AZ deployment and not a single-AZ deployment.</p> <p>If your intent is to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. Once you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you will replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceAlreadyExistsFault} <p>The user already has a DB instance with the given identifier.</p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> doesn't refer to an existing DB snapshot. </p>
   *   - {InstanceQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB instances.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot doesn't allow deletion.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {InvalidRestoreFault} <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {ProvisionedIopsNotAvailableInAZFault} <p>Provisioned IOPS not available in the specified Availability Zone.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {StorageTypeNotSupportedFault} <p>Storage of the <i>StorageType</i> specified can't be associated with the DB instance. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {DomainNotFoundFault} <p> <i>Domain</i> doesn't refer to an existing Active Directory domain. </p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {BackupPolicyNotFoundFault} BackupPolicyNotFoundFault shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotInput
  ): Promise<RestoreDBInstanceFromDBSnapshotOutput>;
  public restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotInput,
    cb: (err: any, data?: RestoreDBInstanceFromDBSnapshotOutput) => void
  ): void;
  public restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotInput,
    cb?: (err: any, data?: RestoreDBInstanceFromDBSnapshotOutput) => void
  ): Promise<RestoreDBInstanceFromDBSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDBInstanceFromDBSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceAlreadyExistsFault} <p>The user already has a DB instance with the given identifier.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {InstanceQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB instances.</p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {InvalidS3BucketFault} <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
   *   - {ProvisionedIopsNotAvailableInAZFault} <p>Provisioned IOPS not available in the specified Availability Zone.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {StorageTypeNotSupportedFault} <p>Storage of the <i>StorageType</i> specified can't be associated with the DB instance. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {BackupPolicyNotFoundFault} BackupPolicyNotFoundFault shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3Input
  ): Promise<RestoreDBInstanceFromS3Output>;
  public restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3Input,
    cb: (err: any, data?: RestoreDBInstanceFromS3Output) => void
  ): void;
  public restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3Input,
    cb?: (err: any, data?: RestoreDBInstanceFromS3Output) => void
  ): Promise<RestoreDBInstanceFromS3Output> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDBInstanceFromS3Command(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceAlreadyExistsFault} <p>The user already has a DB instance with the given identifier.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {InstanceQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB instances.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {PointInTimeRestoreNotEnabledFault} <p> <i>SourceDBInstanceIdentifier</i> refers to a DB instance with <i>BackupRetentionPeriod</i> equal to 0. </p>
   *   - {StorageQuotaExceededFault} <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {InvalidRestoreFault} <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {ProvisionedIopsNotAvailableInAZFault} <p>Provisioned IOPS not available in the specified Availability Zone.</p>
   *   - {OptionGroupNotFoundFault} <p>The specified option group could not be found.</p>
   *   - {StorageTypeNotSupportedFault} <p>Storage of the <i>StorageType</i> specified can't be associated with the DB instance. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {DomainNotFoundFault} <p> <i>Domain</i> doesn't refer to an existing Active Directory domain. </p>
   *   - {BackupPolicyNotFoundFault} BackupPolicyNotFoundFault shape
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
   *   - {DBInstanceAutomatedBackupNotFoundFault} <p>No automated backup for this DB instance was found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeInput
  ): Promise<RestoreDBInstanceToPointInTimeOutput>;
  public restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeInput,
    cb: (err: any, data?: RestoreDBInstanceToPointInTimeOutput) => void
  ): void;
  public restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeInput,
    cb?: (err: any, data?: RestoreDBInstanceToPointInTimeOutput) => void
  ): Promise<RestoreDBInstanceToPointInTimeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDBInstanceToPointInTimeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> doesn't refer to an existing DB security group. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group doesn't allow deletion.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressInput
  ): Promise<RevokeDBSecurityGroupIngressOutput>;
  public revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressInput,
    cb: (err: any, data?: RevokeDBSecurityGroupIngressOutput) => void
  ): void;
  public revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressInput,
    cb?: (err: any, data?: RevokeDBSecurityGroupIngressOutput) => void
  ): Promise<RevokeDBSecurityGroupIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeDBSecurityGroupIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {ResourceNotFoundFault} <p>The specified resource ID was not found.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startActivityStream(
    args: StartActivityStreamInput
  ): Promise<StartActivityStreamOutput>;
  public startActivityStream(
    args: StartActivityStreamInput,
    cb: (err: any, data?: StartActivityStreamOutput) => void
  ): void;
  public startActivityStream(
    args: StartActivityStreamInput,
    cb?: (err: any, data?: StartActivityStreamOutput) => void
  ): Promise<StartActivityStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartActivityStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an Amazon Aurora DB cluster that was stopped using the AWS console, the stop-db-cluster AWS CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDBCluster(
    args: StartDBClusterInput
  ): Promise<StartDBClusterOutput>;
  public startDBCluster(
    args: StartDBClusterInput,
    cb: (err: any, data?: StartDBClusterOutput) => void
  ): void;
  public startDBCluster(
    args: StartDBClusterInput,
    cb?: (err: any, data?: StartDBClusterOutput) => void
  ): Promise<StartDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Starts an Amazon RDS DB instance that was stopped using the AWS console, the stop-db-instance AWS CLI command, or the StopDBInstance action. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred accessing an AWS KMS key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDBInstance(
    args: StartDBInstanceInput
  ): Promise<StartDBInstanceOutput>;
  public startDBInstance(
    args: StartDBInstanceInput,
    cb: (err: any, data?: StartDBInstanceOutput) => void
  ): void;
  public startDBInstance(
    args: StartDBInstanceInput,
    cb?: (err: any, data?: StartDBInstanceOutput) => void
  ): Promise<StartDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a database activity stream that was started using the AWS console, the <code>start-activity-stream</code> AWS CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {ResourceNotFoundFault} <p>The specified resource ID was not found.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopActivityStream(
    args: StopActivityStreamInput
  ): Promise<StopActivityStreamOutput>;
  public stopActivityStream(
    args: StopActivityStreamInput,
    cb: (err: any, data?: StopActivityStreamOutput) => void
  ): void;
  public stopActivityStream(
    args: StopActivityStreamInput,
    cb?: (err: any, data?: StopActivityStreamOutput) => void
  ): Promise<StopActivityStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopActivityStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopDBCluster(args: StopDBClusterInput): Promise<StopDBClusterOutput>;
  public stopDBCluster(
    args: StopDBClusterInput,
    cb: (err: any, data?: StopDBClusterOutput) => void
  ): void;
  public stopDBCluster(
    args: StopDBClusterInput,
    cb?: (err: any, data?: StopDBClusterOutput) => void
  ): Promise<StopDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> doesn't refer to an existing DB instance. </p>
   *   - {InvalidDBInstanceStateFault} <p>The DB instance isn't in a valid state.</p>
   *   - {DBSnapshotAlreadyExistsFault} <p> <i>DBSnapshotIdentifier</i> is already used by an existing snapshot. </p>
   *   - {SnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterStateFault} <p>The requested operation can't be performed while the cluster is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopDBInstance(
    args: StopDBInstanceInput
  ): Promise<StopDBInstanceOutput>;
  public stopDBInstance(
    args: StopDBInstanceInput,
    cb: (err: any, data?: StopDBInstanceOutput) => void
  ): void;
  public stopDBInstance(
    args: StopDBInstanceInput,
    cb?: (err: any, data?: StopDBInstanceOutput) => void
  ): Promise<StopDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
