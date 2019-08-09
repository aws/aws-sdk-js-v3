import { RedshiftClient } from "./RedshiftClient";
import { AcceptReservedNodeExchangeInput } from "./types/AcceptReservedNodeExchangeInput";
import { AcceptReservedNodeExchangeOutput } from "./types/AcceptReservedNodeExchangeOutput";
import { AccessToSnapshotDeniedFault } from "./types/AccessToSnapshotDeniedFault";
import { AuthorizationAlreadyExistsFault } from "./types/AuthorizationAlreadyExistsFault";
import { AuthorizationNotFoundFault } from "./types/AuthorizationNotFoundFault";
import { AuthorizationQuotaExceededFault } from "./types/AuthorizationQuotaExceededFault";
import { AuthorizeClusterSecurityGroupIngressInput } from "./types/AuthorizeClusterSecurityGroupIngressInput";
import { AuthorizeClusterSecurityGroupIngressOutput } from "./types/AuthorizeClusterSecurityGroupIngressOutput";
import { AuthorizeSnapshotAccessInput } from "./types/AuthorizeSnapshotAccessInput";
import { AuthorizeSnapshotAccessOutput } from "./types/AuthorizeSnapshotAccessOutput";
import { BatchDeleteClusterSnapshotsInput } from "./types/BatchDeleteClusterSnapshotsInput";
import { BatchDeleteClusterSnapshotsOutput } from "./types/BatchDeleteClusterSnapshotsOutput";
import { BatchDeleteRequestSizeExceededFault } from "./types/BatchDeleteRequestSizeExceededFault";
import { BatchModifyClusterSnapshotsInput } from "./types/BatchModifyClusterSnapshotsInput";
import { BatchModifyClusterSnapshotsLimitExceededFault } from "./types/BatchModifyClusterSnapshotsLimitExceededFault";
import { BatchModifyClusterSnapshotsOutput } from "./types/BatchModifyClusterSnapshotsOutput";
import { BucketNotFoundFault } from "./types/BucketNotFoundFault";
import { CancelResizeInput } from "./types/CancelResizeInput";
import { CancelResizeOutput } from "./types/CancelResizeOutput";
import { ClusterAlreadyExistsFault } from "./types/ClusterAlreadyExistsFault";
import { ClusterNotFoundFault } from "./types/ClusterNotFoundFault";
import { ClusterOnLatestRevisionFault } from "./types/ClusterOnLatestRevisionFault";
import { ClusterParameterGroupAlreadyExistsFault } from "./types/ClusterParameterGroupAlreadyExistsFault";
import { ClusterParameterGroupNotFoundFault } from "./types/ClusterParameterGroupNotFoundFault";
import { ClusterParameterGroupQuotaExceededFault } from "./types/ClusterParameterGroupQuotaExceededFault";
import { ClusterQuotaExceededFault } from "./types/ClusterQuotaExceededFault";
import { ClusterSecurityGroupAlreadyExistsFault } from "./types/ClusterSecurityGroupAlreadyExistsFault";
import { ClusterSecurityGroupNotFoundFault } from "./types/ClusterSecurityGroupNotFoundFault";
import { ClusterSecurityGroupQuotaExceededFault } from "./types/ClusterSecurityGroupQuotaExceededFault";
import { ClusterSnapshotAlreadyExistsFault } from "./types/ClusterSnapshotAlreadyExistsFault";
import { ClusterSnapshotNotFoundFault } from "./types/ClusterSnapshotNotFoundFault";
import { ClusterSnapshotQuotaExceededFault } from "./types/ClusterSnapshotQuotaExceededFault";
import { ClusterSubnetGroupAlreadyExistsFault } from "./types/ClusterSubnetGroupAlreadyExistsFault";
import { ClusterSubnetGroupNotFoundFault } from "./types/ClusterSubnetGroupNotFoundFault";
import { ClusterSubnetGroupQuotaExceededFault } from "./types/ClusterSubnetGroupQuotaExceededFault";
import { ClusterSubnetQuotaExceededFault } from "./types/ClusterSubnetQuotaExceededFault";
import { CopyClusterSnapshotInput } from "./types/CopyClusterSnapshotInput";
import { CopyClusterSnapshotOutput } from "./types/CopyClusterSnapshotOutput";
import { CopyToRegionDisabledFault } from "./types/CopyToRegionDisabledFault";
import { CreateClusterInput } from "./types/CreateClusterInput";
import { CreateClusterOutput } from "./types/CreateClusterOutput";
import { CreateClusterParameterGroupInput } from "./types/CreateClusterParameterGroupInput";
import { CreateClusterParameterGroupOutput } from "./types/CreateClusterParameterGroupOutput";
import { CreateClusterSecurityGroupInput } from "./types/CreateClusterSecurityGroupInput";
import { CreateClusterSecurityGroupOutput } from "./types/CreateClusterSecurityGroupOutput";
import { CreateClusterSnapshotInput } from "./types/CreateClusterSnapshotInput";
import { CreateClusterSnapshotOutput } from "./types/CreateClusterSnapshotOutput";
import { CreateClusterSubnetGroupInput } from "./types/CreateClusterSubnetGroupInput";
import { CreateClusterSubnetGroupOutput } from "./types/CreateClusterSubnetGroupOutput";
import { CreateEventSubscriptionInput } from "./types/CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "./types/CreateEventSubscriptionOutput";
import { CreateHsmClientCertificateInput } from "./types/CreateHsmClientCertificateInput";
import { CreateHsmClientCertificateOutput } from "./types/CreateHsmClientCertificateOutput";
import { CreateHsmConfigurationInput } from "./types/CreateHsmConfigurationInput";
import { CreateHsmConfigurationOutput } from "./types/CreateHsmConfigurationOutput";
import { CreateSnapshotCopyGrantInput } from "./types/CreateSnapshotCopyGrantInput";
import { CreateSnapshotCopyGrantOutput } from "./types/CreateSnapshotCopyGrantOutput";
import { CreateSnapshotScheduleInput } from "./types/CreateSnapshotScheduleInput";
import { CreateSnapshotScheduleOutput } from "./types/CreateSnapshotScheduleOutput";
import { CreateTagsInput } from "./types/CreateTagsInput";
import { CreateTagsOutput } from "./types/CreateTagsOutput";
import { DeleteClusterInput } from "./types/DeleteClusterInput";
import { DeleteClusterOutput } from "./types/DeleteClusterOutput";
import { DeleteClusterParameterGroupInput } from "./types/DeleteClusterParameterGroupInput";
import { DeleteClusterParameterGroupOutput } from "./types/DeleteClusterParameterGroupOutput";
import { DeleteClusterSecurityGroupInput } from "./types/DeleteClusterSecurityGroupInput";
import { DeleteClusterSecurityGroupOutput } from "./types/DeleteClusterSecurityGroupOutput";
import { DeleteClusterSnapshotInput } from "./types/DeleteClusterSnapshotInput";
import { DeleteClusterSnapshotOutput } from "./types/DeleteClusterSnapshotOutput";
import { DeleteClusterSubnetGroupInput } from "./types/DeleteClusterSubnetGroupInput";
import { DeleteClusterSubnetGroupOutput } from "./types/DeleteClusterSubnetGroupOutput";
import { DeleteEventSubscriptionInput } from "./types/DeleteEventSubscriptionInput";
import { DeleteEventSubscriptionOutput } from "./types/DeleteEventSubscriptionOutput";
import { DeleteHsmClientCertificateInput } from "./types/DeleteHsmClientCertificateInput";
import { DeleteHsmClientCertificateOutput } from "./types/DeleteHsmClientCertificateOutput";
import { DeleteHsmConfigurationInput } from "./types/DeleteHsmConfigurationInput";
import { DeleteHsmConfigurationOutput } from "./types/DeleteHsmConfigurationOutput";
import { DeleteSnapshotCopyGrantInput } from "./types/DeleteSnapshotCopyGrantInput";
import { DeleteSnapshotCopyGrantOutput } from "./types/DeleteSnapshotCopyGrantOutput";
import { DeleteSnapshotScheduleInput } from "./types/DeleteSnapshotScheduleInput";
import { DeleteSnapshotScheduleOutput } from "./types/DeleteSnapshotScheduleOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DependentServiceRequestThrottlingFault } from "./types/DependentServiceRequestThrottlingFault";
import { DependentServiceUnavailableFault } from "./types/DependentServiceUnavailableFault";
import { DescribeAccountAttributesInput } from "./types/DescribeAccountAttributesInput";
import { DescribeAccountAttributesOutput } from "./types/DescribeAccountAttributesOutput";
import { DescribeClusterDbRevisionsInput } from "./types/DescribeClusterDbRevisionsInput";
import { DescribeClusterDbRevisionsOutput } from "./types/DescribeClusterDbRevisionsOutput";
import { DescribeClusterParameterGroupsInput } from "./types/DescribeClusterParameterGroupsInput";
import { DescribeClusterParameterGroupsOutput } from "./types/DescribeClusterParameterGroupsOutput";
import { DescribeClusterParametersInput } from "./types/DescribeClusterParametersInput";
import { DescribeClusterParametersOutput } from "./types/DescribeClusterParametersOutput";
import { DescribeClusterSecurityGroupsInput } from "./types/DescribeClusterSecurityGroupsInput";
import { DescribeClusterSecurityGroupsOutput } from "./types/DescribeClusterSecurityGroupsOutput";
import { DescribeClusterSnapshotsInput } from "./types/DescribeClusterSnapshotsInput";
import { DescribeClusterSnapshotsOutput } from "./types/DescribeClusterSnapshotsOutput";
import { DescribeClusterSubnetGroupsInput } from "./types/DescribeClusterSubnetGroupsInput";
import { DescribeClusterSubnetGroupsOutput } from "./types/DescribeClusterSubnetGroupsOutput";
import { DescribeClusterTracksInput } from "./types/DescribeClusterTracksInput";
import { DescribeClusterTracksOutput } from "./types/DescribeClusterTracksOutput";
import { DescribeClusterVersionsInput } from "./types/DescribeClusterVersionsInput";
import { DescribeClusterVersionsOutput } from "./types/DescribeClusterVersionsOutput";
import { DescribeClustersInput } from "./types/DescribeClustersInput";
import { DescribeClustersOutput } from "./types/DescribeClustersOutput";
import { DescribeDefaultClusterParametersInput } from "./types/DescribeDefaultClusterParametersInput";
import { DescribeDefaultClusterParametersOutput } from "./types/DescribeDefaultClusterParametersOutput";
import { DescribeEventCategoriesInput } from "./types/DescribeEventCategoriesInput";
import { DescribeEventCategoriesOutput } from "./types/DescribeEventCategoriesOutput";
import { DescribeEventSubscriptionsInput } from "./types/DescribeEventSubscriptionsInput";
import { DescribeEventSubscriptionsOutput } from "./types/DescribeEventSubscriptionsOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeHsmClientCertificatesInput } from "./types/DescribeHsmClientCertificatesInput";
import { DescribeHsmClientCertificatesOutput } from "./types/DescribeHsmClientCertificatesOutput";
import { DescribeHsmConfigurationsInput } from "./types/DescribeHsmConfigurationsInput";
import { DescribeHsmConfigurationsOutput } from "./types/DescribeHsmConfigurationsOutput";
import { DescribeLoggingStatusInput } from "./types/DescribeLoggingStatusInput";
import { DescribeLoggingStatusOutput } from "./types/DescribeLoggingStatusOutput";
import { DescribeOrderableClusterOptionsInput } from "./types/DescribeOrderableClusterOptionsInput";
import { DescribeOrderableClusterOptionsOutput } from "./types/DescribeOrderableClusterOptionsOutput";
import { DescribeReservedNodeOfferingsInput } from "./types/DescribeReservedNodeOfferingsInput";
import { DescribeReservedNodeOfferingsOutput } from "./types/DescribeReservedNodeOfferingsOutput";
import { DescribeReservedNodesInput } from "./types/DescribeReservedNodesInput";
import { DescribeReservedNodesOutput } from "./types/DescribeReservedNodesOutput";
import { DescribeResizeInput } from "./types/DescribeResizeInput";
import { DescribeResizeOutput } from "./types/DescribeResizeOutput";
import { DescribeSnapshotCopyGrantsInput } from "./types/DescribeSnapshotCopyGrantsInput";
import { DescribeSnapshotCopyGrantsOutput } from "./types/DescribeSnapshotCopyGrantsOutput";
import { DescribeSnapshotSchedulesInput } from "./types/DescribeSnapshotSchedulesInput";
import { DescribeSnapshotSchedulesOutput } from "./types/DescribeSnapshotSchedulesOutput";
import { DescribeStorageInput } from "./types/DescribeStorageInput";
import { DescribeStorageOutput } from "./types/DescribeStorageOutput";
import { DescribeTableRestoreStatusInput } from "./types/DescribeTableRestoreStatusInput";
import { DescribeTableRestoreStatusOutput } from "./types/DescribeTableRestoreStatusOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { DisableLoggingInput } from "./types/DisableLoggingInput";
import { DisableLoggingOutput } from "./types/DisableLoggingOutput";
import { DisableSnapshotCopyInput } from "./types/DisableSnapshotCopyInput";
import { DisableSnapshotCopyOutput } from "./types/DisableSnapshotCopyOutput";
import { EnableLoggingInput } from "./types/EnableLoggingInput";
import { EnableLoggingOutput } from "./types/EnableLoggingOutput";
import { EnableSnapshotCopyInput } from "./types/EnableSnapshotCopyInput";
import { EnableSnapshotCopyOutput } from "./types/EnableSnapshotCopyOutput";
import { EventSubscriptionQuotaExceededFault } from "./types/EventSubscriptionQuotaExceededFault";
import { GetClusterCredentialsInput } from "./types/GetClusterCredentialsInput";
import { GetClusterCredentialsOutput } from "./types/GetClusterCredentialsOutput";
import { GetReservedNodeExchangeOfferingsInput } from "./types/GetReservedNodeExchangeOfferingsInput";
import { GetReservedNodeExchangeOfferingsOutput } from "./types/GetReservedNodeExchangeOfferingsOutput";
import { HsmClientCertificateAlreadyExistsFault } from "./types/HsmClientCertificateAlreadyExistsFault";
import { HsmClientCertificateNotFoundFault } from "./types/HsmClientCertificateNotFoundFault";
import { HsmClientCertificateQuotaExceededFault } from "./types/HsmClientCertificateQuotaExceededFault";
import { HsmConfigurationAlreadyExistsFault } from "./types/HsmConfigurationAlreadyExistsFault";
import { HsmConfigurationNotFoundFault } from "./types/HsmConfigurationNotFoundFault";
import { HsmConfigurationQuotaExceededFault } from "./types/HsmConfigurationQuotaExceededFault";
import { InProgressTableRestoreQuotaExceededFault } from "./types/InProgressTableRestoreQuotaExceededFault";
import { IncompatibleOrderableOptions } from "./types/IncompatibleOrderableOptions";
import { InsufficientClusterCapacityFault } from "./types/InsufficientClusterCapacityFault";
import { InsufficientS3BucketPolicyFault } from "./types/InsufficientS3BucketPolicyFault";
import { InvalidClusterParameterGroupStateFault } from "./types/InvalidClusterParameterGroupStateFault";
import { InvalidClusterSecurityGroupStateFault } from "./types/InvalidClusterSecurityGroupStateFault";
import { InvalidClusterSnapshotScheduleStateFault } from "./types/InvalidClusterSnapshotScheduleStateFault";
import { InvalidClusterSnapshotStateFault } from "./types/InvalidClusterSnapshotStateFault";
import { InvalidClusterStateFault } from "./types/InvalidClusterStateFault";
import { InvalidClusterSubnetGroupStateFault } from "./types/InvalidClusterSubnetGroupStateFault";
import { InvalidClusterSubnetStateFault } from "./types/InvalidClusterSubnetStateFault";
import { InvalidClusterTrackFault } from "./types/InvalidClusterTrackFault";
import { InvalidElasticIpFault } from "./types/InvalidElasticIpFault";
import { InvalidHsmClientCertificateStateFault } from "./types/InvalidHsmClientCertificateStateFault";
import { InvalidHsmConfigurationStateFault } from "./types/InvalidHsmConfigurationStateFault";
import { InvalidReservedNodeStateFault } from "./types/InvalidReservedNodeStateFault";
import { InvalidRestoreFault } from "./types/InvalidRestoreFault";
import { InvalidRetentionPeriodFault } from "./types/InvalidRetentionPeriodFault";
import { InvalidS3BucketNameFault } from "./types/InvalidS3BucketNameFault";
import { InvalidS3KeyPrefixFault } from "./types/InvalidS3KeyPrefixFault";
import { InvalidScheduleFault } from "./types/InvalidScheduleFault";
import { InvalidSnapshotCopyGrantStateFault } from "./types/InvalidSnapshotCopyGrantStateFault";
import { InvalidSubnet } from "./types/InvalidSubnet";
import { InvalidSubscriptionStateFault } from "./types/InvalidSubscriptionStateFault";
import { InvalidTableRestoreArgumentFault } from "./types/InvalidTableRestoreArgumentFault";
import { InvalidTagFault } from "./types/InvalidTagFault";
import { InvalidVPCNetworkStateFault } from "./types/InvalidVPCNetworkStateFault";
import { LimitExceededFault } from "./types/LimitExceededFault";
import { ModifyClusterDbRevisionInput } from "./types/ModifyClusterDbRevisionInput";
import { ModifyClusterDbRevisionOutput } from "./types/ModifyClusterDbRevisionOutput";
import { ModifyClusterIamRolesInput } from "./types/ModifyClusterIamRolesInput";
import { ModifyClusterIamRolesOutput } from "./types/ModifyClusterIamRolesOutput";
import { ModifyClusterInput } from "./types/ModifyClusterInput";
import { ModifyClusterMaintenanceInput } from "./types/ModifyClusterMaintenanceInput";
import { ModifyClusterMaintenanceOutput } from "./types/ModifyClusterMaintenanceOutput";
import { ModifyClusterOutput } from "./types/ModifyClusterOutput";
import { ModifyClusterParameterGroupInput } from "./types/ModifyClusterParameterGroupInput";
import { ModifyClusterParameterGroupOutput } from "./types/ModifyClusterParameterGroupOutput";
import { ModifyClusterSnapshotInput } from "./types/ModifyClusterSnapshotInput";
import { ModifyClusterSnapshotOutput } from "./types/ModifyClusterSnapshotOutput";
import { ModifyClusterSnapshotScheduleInput } from "./types/ModifyClusterSnapshotScheduleInput";
import { ModifyClusterSnapshotScheduleOutput } from "./types/ModifyClusterSnapshotScheduleOutput";
import { ModifyClusterSubnetGroupInput } from "./types/ModifyClusterSubnetGroupInput";
import { ModifyClusterSubnetGroupOutput } from "./types/ModifyClusterSubnetGroupOutput";
import { ModifyEventSubscriptionInput } from "./types/ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "./types/ModifyEventSubscriptionOutput";
import { ModifySnapshotCopyRetentionPeriodInput } from "./types/ModifySnapshotCopyRetentionPeriodInput";
import { ModifySnapshotCopyRetentionPeriodOutput } from "./types/ModifySnapshotCopyRetentionPeriodOutput";
import { ModifySnapshotScheduleInput } from "./types/ModifySnapshotScheduleInput";
import { ModifySnapshotScheduleOutput } from "./types/ModifySnapshotScheduleOutput";
import { NumberOfNodesPerClusterLimitExceededFault } from "./types/NumberOfNodesPerClusterLimitExceededFault";
import { NumberOfNodesQuotaExceededFault } from "./types/NumberOfNodesQuotaExceededFault";
import { PurchaseReservedNodeOfferingInput } from "./types/PurchaseReservedNodeOfferingInput";
import { PurchaseReservedNodeOfferingOutput } from "./types/PurchaseReservedNodeOfferingOutput";
import { RebootClusterInput } from "./types/RebootClusterInput";
import { RebootClusterOutput } from "./types/RebootClusterOutput";
import { ReservedNodeAlreadyExistsFault } from "./types/ReservedNodeAlreadyExistsFault";
import { ReservedNodeAlreadyMigratedFault } from "./types/ReservedNodeAlreadyMigratedFault";
import { ReservedNodeNotFoundFault } from "./types/ReservedNodeNotFoundFault";
import { ReservedNodeOfferingNotFoundFault } from "./types/ReservedNodeOfferingNotFoundFault";
import { ReservedNodeQuotaExceededFault } from "./types/ReservedNodeQuotaExceededFault";
import { ResetClusterParameterGroupInput } from "./types/ResetClusterParameterGroupInput";
import { ResetClusterParameterGroupOutput } from "./types/ResetClusterParameterGroupOutput";
import { ResizeClusterInput } from "./types/ResizeClusterInput";
import { ResizeClusterOutput } from "./types/ResizeClusterOutput";
import { ResizeNotFoundFault } from "./types/ResizeNotFoundFault";
import { ResourceNotFoundFault } from "./types/ResourceNotFoundFault";
import { RestoreFromClusterSnapshotInput } from "./types/RestoreFromClusterSnapshotInput";
import { RestoreFromClusterSnapshotOutput } from "./types/RestoreFromClusterSnapshotOutput";
import { RestoreTableFromClusterSnapshotInput } from "./types/RestoreTableFromClusterSnapshotInput";
import { RestoreTableFromClusterSnapshotOutput } from "./types/RestoreTableFromClusterSnapshotOutput";
import { RevokeClusterSecurityGroupIngressInput } from "./types/RevokeClusterSecurityGroupIngressInput";
import { RevokeClusterSecurityGroupIngressOutput } from "./types/RevokeClusterSecurityGroupIngressOutput";
import { RevokeSnapshotAccessInput } from "./types/RevokeSnapshotAccessInput";
import { RevokeSnapshotAccessOutput } from "./types/RevokeSnapshotAccessOutput";
import { RotateEncryptionKeyInput } from "./types/RotateEncryptionKeyInput";
import { RotateEncryptionKeyOutput } from "./types/RotateEncryptionKeyOutput";
import { SNSInvalidTopicFault } from "./types/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./types/SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./types/SNSTopicArnNotFoundFault";
import { ScheduleDefinitionTypeUnsupportedFault } from "./types/ScheduleDefinitionTypeUnsupportedFault";
import { SnapshotCopyAlreadyDisabledFault } from "./types/SnapshotCopyAlreadyDisabledFault";
import { SnapshotCopyAlreadyEnabledFault } from "./types/SnapshotCopyAlreadyEnabledFault";
import { SnapshotCopyDisabledFault } from "./types/SnapshotCopyDisabledFault";
import { SnapshotCopyGrantAlreadyExistsFault } from "./types/SnapshotCopyGrantAlreadyExistsFault";
import { SnapshotCopyGrantNotFoundFault } from "./types/SnapshotCopyGrantNotFoundFault";
import { SnapshotCopyGrantQuotaExceededFault } from "./types/SnapshotCopyGrantQuotaExceededFault";
import { SnapshotScheduleAlreadyExistsFault } from "./types/SnapshotScheduleAlreadyExistsFault";
import { SnapshotScheduleNotFoundFault } from "./types/SnapshotScheduleNotFoundFault";
import { SnapshotScheduleQuotaExceededFault } from "./types/SnapshotScheduleQuotaExceededFault";
import { SnapshotScheduleUpdateInProgressFault } from "./types/SnapshotScheduleUpdateInProgressFault";
import { SourceNotFoundFault } from "./types/SourceNotFoundFault";
import { SubnetAlreadyInUse } from "./types/SubnetAlreadyInUse";
import { SubscriptionAlreadyExistFault } from "./types/SubscriptionAlreadyExistFault";
import { SubscriptionCategoryNotFoundFault } from "./types/SubscriptionCategoryNotFoundFault";
import { SubscriptionEventIdNotFoundFault } from "./types/SubscriptionEventIdNotFoundFault";
import { SubscriptionNotFoundFault } from "./types/SubscriptionNotFoundFault";
import { SubscriptionSeverityNotFoundFault } from "./types/SubscriptionSeverityNotFoundFault";
import { TableLimitExceededFault } from "./types/TableLimitExceededFault";
import { TableRestoreNotFoundFault } from "./types/TableRestoreNotFoundFault";
import { TagLimitExceededFault } from "./types/TagLimitExceededFault";
import { UnauthorizedOperation } from "./types/UnauthorizedOperation";
import { UnknownSnapshotCopyRegionFault } from "./types/UnknownSnapshotCopyRegionFault";
import { UnsupportedOperationFault } from "./types/UnsupportedOperationFault";
import { UnsupportedOptionFault } from "./types/UnsupportedOptionFault";
import { AcceptReservedNodeExchangeCommand } from "./commands/AcceptReservedNodeExchangeCommand";
import { AuthorizeClusterSecurityGroupIngressCommand } from "./commands/AuthorizeClusterSecurityGroupIngressCommand";
import { AuthorizeSnapshotAccessCommand } from "./commands/AuthorizeSnapshotAccessCommand";
import { BatchDeleteClusterSnapshotsCommand } from "./commands/BatchDeleteClusterSnapshotsCommand";
import { BatchModifyClusterSnapshotsCommand } from "./commands/BatchModifyClusterSnapshotsCommand";
import { CancelResizeCommand } from "./commands/CancelResizeCommand";
import { CopyClusterSnapshotCommand } from "./commands/CopyClusterSnapshotCommand";
import { CreateClusterCommand } from "./commands/CreateClusterCommand";
import { CreateClusterParameterGroupCommand } from "./commands/CreateClusterParameterGroupCommand";
import { CreateClusterSecurityGroupCommand } from "./commands/CreateClusterSecurityGroupCommand";
import { CreateClusterSnapshotCommand } from "./commands/CreateClusterSnapshotCommand";
import { CreateClusterSubnetGroupCommand } from "./commands/CreateClusterSubnetGroupCommand";
import { CreateEventSubscriptionCommand } from "./commands/CreateEventSubscriptionCommand";
import { CreateHsmClientCertificateCommand } from "./commands/CreateHsmClientCertificateCommand";
import { CreateHsmConfigurationCommand } from "./commands/CreateHsmConfigurationCommand";
import { CreateSnapshotCopyGrantCommand } from "./commands/CreateSnapshotCopyGrantCommand";
import { CreateSnapshotScheduleCommand } from "./commands/CreateSnapshotScheduleCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { DeleteClusterCommand } from "./commands/DeleteClusterCommand";
import { DeleteClusterParameterGroupCommand } from "./commands/DeleteClusterParameterGroupCommand";
import { DeleteClusterSecurityGroupCommand } from "./commands/DeleteClusterSecurityGroupCommand";
import { DeleteClusterSnapshotCommand } from "./commands/DeleteClusterSnapshotCommand";
import { DeleteClusterSubnetGroupCommand } from "./commands/DeleteClusterSubnetGroupCommand";
import { DeleteEventSubscriptionCommand } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteHsmClientCertificateCommand } from "./commands/DeleteHsmClientCertificateCommand";
import { DeleteHsmConfigurationCommand } from "./commands/DeleteHsmConfigurationCommand";
import { DeleteSnapshotCopyGrantCommand } from "./commands/DeleteSnapshotCopyGrantCommand";
import { DeleteSnapshotScheduleCommand } from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DescribeAccountAttributesCommand } from "./commands/DescribeAccountAttributesCommand";
import { DescribeClusterDbRevisionsCommand } from "./commands/DescribeClusterDbRevisionsCommand";
import { DescribeClusterParameterGroupsCommand } from "./commands/DescribeClusterParameterGroupsCommand";
import { DescribeClusterParametersCommand } from "./commands/DescribeClusterParametersCommand";
import { DescribeClusterSecurityGroupsCommand } from "./commands/DescribeClusterSecurityGroupsCommand";
import { DescribeClusterSnapshotsCommand } from "./commands/DescribeClusterSnapshotsCommand";
import { DescribeClusterSubnetGroupsCommand } from "./commands/DescribeClusterSubnetGroupsCommand";
import { DescribeClusterTracksCommand } from "./commands/DescribeClusterTracksCommand";
import { DescribeClusterVersionsCommand } from "./commands/DescribeClusterVersionsCommand";
import { DescribeClustersCommand } from "./commands/DescribeClustersCommand";
import { DescribeDefaultClusterParametersCommand } from "./commands/DescribeDefaultClusterParametersCommand";
import { DescribeEventCategoriesCommand } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommand } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeHsmClientCertificatesCommand } from "./commands/DescribeHsmClientCertificatesCommand";
import { DescribeHsmConfigurationsCommand } from "./commands/DescribeHsmConfigurationsCommand";
import { DescribeLoggingStatusCommand } from "./commands/DescribeLoggingStatusCommand";
import { DescribeOrderableClusterOptionsCommand } from "./commands/DescribeOrderableClusterOptionsCommand";
import { DescribeReservedNodeOfferingsCommand } from "./commands/DescribeReservedNodeOfferingsCommand";
import { DescribeReservedNodesCommand } from "./commands/DescribeReservedNodesCommand";
import { DescribeResizeCommand } from "./commands/DescribeResizeCommand";
import { DescribeSnapshotCopyGrantsCommand } from "./commands/DescribeSnapshotCopyGrantsCommand";
import { DescribeSnapshotSchedulesCommand } from "./commands/DescribeSnapshotSchedulesCommand";
import { DescribeStorageCommand } from "./commands/DescribeStorageCommand";
import { DescribeTableRestoreStatusCommand } from "./commands/DescribeTableRestoreStatusCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DisableLoggingCommand } from "./commands/DisableLoggingCommand";
import { DisableSnapshotCopyCommand } from "./commands/DisableSnapshotCopyCommand";
import { EnableLoggingCommand } from "./commands/EnableLoggingCommand";
import { EnableSnapshotCopyCommand } from "./commands/EnableSnapshotCopyCommand";
import { GetClusterCredentialsCommand } from "./commands/GetClusterCredentialsCommand";
import { GetReservedNodeExchangeOfferingsCommand } from "./commands/GetReservedNodeExchangeOfferingsCommand";
import { ModifyClusterCommand } from "./commands/ModifyClusterCommand";
import { ModifyClusterDbRevisionCommand } from "./commands/ModifyClusterDbRevisionCommand";
import { ModifyClusterIamRolesCommand } from "./commands/ModifyClusterIamRolesCommand";
import { ModifyClusterMaintenanceCommand } from "./commands/ModifyClusterMaintenanceCommand";
import { ModifyClusterParameterGroupCommand } from "./commands/ModifyClusterParameterGroupCommand";
import { ModifyClusterSnapshotCommand } from "./commands/ModifyClusterSnapshotCommand";
import { ModifyClusterSnapshotScheduleCommand } from "./commands/ModifyClusterSnapshotScheduleCommand";
import { ModifyClusterSubnetGroupCommand } from "./commands/ModifyClusterSubnetGroupCommand";
import { ModifyEventSubscriptionCommand } from "./commands/ModifyEventSubscriptionCommand";
import { ModifySnapshotCopyRetentionPeriodCommand } from "./commands/ModifySnapshotCopyRetentionPeriodCommand";
import { ModifySnapshotScheduleCommand } from "./commands/ModifySnapshotScheduleCommand";
import { PurchaseReservedNodeOfferingCommand } from "./commands/PurchaseReservedNodeOfferingCommand";
import { RebootClusterCommand } from "./commands/RebootClusterCommand";
import { ResetClusterParameterGroupCommand } from "./commands/ResetClusterParameterGroupCommand";
import { ResizeClusterCommand } from "./commands/ResizeClusterCommand";
import { RestoreFromClusterSnapshotCommand } from "./commands/RestoreFromClusterSnapshotCommand";
import { RestoreTableFromClusterSnapshotCommand } from "./commands/RestoreTableFromClusterSnapshotCommand";
import { RevokeClusterSecurityGroupIngressCommand } from "./commands/RevokeClusterSecurityGroupIngressCommand";
import { RevokeSnapshotAccessCommand } from "./commands/RevokeSnapshotAccessCommand";
import { RotateEncryptionKeyCommand } from "./commands/RotateEncryptionKeyCommand";

export class Redshift extends RedshiftClient {
  /**
   * <p>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedNodeNotFoundFault} <p>The specified reserved compute node not found.</p>
   *   - {InvalidReservedNodeStateFault} <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
   *   - {ReservedNodeAlreadyMigratedFault} <p>Indicates that the reserved node has already been exchanged.</p>
   *   - {ReservedNodeOfferingNotFoundFault} <p>Specified offering does not exist.</p>
   *   - {UnsupportedOperationFault} <p>The requested operation isn't supported.</p>
   *   - {DependentServiceUnavailableFault} <p>Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
   *   - {ReservedNodeAlreadyExistsFault} <p>User already has a reservation with the given identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeInput
  ): Promise<AcceptReservedNodeExchangeOutput>;
  public acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeInput,
    cb: (err: any, data?: AcceptReservedNodeExchangeOutput) => void
  ): void;
  public acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeInput,
    cb?: (err: any, data?: AcceptReservedNodeExchangeOutput) => void
  ): Promise<AcceptReservedNodeExchangeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptReservedNodeExchangeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same AWS Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSecurityGroupNotFoundFault} <p>The cluster security group name does not refer to an existing cluster security group.</p>
   *   - {InvalidClusterSecurityGroupStateFault} <p>The state of the cluster security group is not <code>available</code>. </p>
   *   - {AuthorizationAlreadyExistsFault} <p>The specified CIDR block or EC2 security group is already authorized for the specified cluster security group.</p>
   *   - {AuthorizationQuotaExceededFault} <p>The authorization quota for the cluster security group has been reached.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressInput
  ): Promise<AuthorizeClusterSecurityGroupIngressOutput>;
  public authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressInput,
    cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressOutput) => void
  ): void;
  public authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressInput,
    cb?: (err: any, data?: AuthorizeClusterSecurityGroupIngressOutput) => void
  ): Promise<AuthorizeClusterSecurityGroupIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AuthorizeClusterSecurityGroupIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Authorizes the specified AWS customer account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSnapshotNotFoundFault} <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
   *   - {AuthorizationAlreadyExistsFault} <p>The specified CIDR block or EC2 security group is already authorized for the specified cluster security group.</p>
   *   - {AuthorizationQuotaExceededFault} <p>The authorization quota for the cluster security group has been reached.</p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {InvalidClusterSnapshotStateFault} <p>The specified cluster snapshot is not in the <code>available</code> state, or other accounts are authorized to access the snapshot. </p>
   *   - {LimitExceededFault} <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessInput
  ): Promise<AuthorizeSnapshotAccessOutput>;
  public authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessInput,
    cb: (err: any, data?: AuthorizeSnapshotAccessOutput) => void
  ): void;
  public authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessInput,
    cb?: (err: any, data?: AuthorizeSnapshotAccessOutput) => void
  ): Promise<AuthorizeSnapshotAccessOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AuthorizeSnapshotAccessCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a set of cluster snapshots.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BatchDeleteRequestSizeExceededFault} <p>The maximum number for a batch delete of snapshots has been reached. The limit is 100. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsInput
  ): Promise<BatchDeleteClusterSnapshotsOutput>;
  public batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsInput,
    cb: (err: any, data?: BatchDeleteClusterSnapshotsOutput) => void
  ): void;
  public batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsInput,
    cb?: (err: any, data?: BatchDeleteClusterSnapshotsOutput) => void
  ): Promise<BatchDeleteClusterSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeleteClusterSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the settings for a list of snapshots.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {BatchModifyClusterSnapshotsLimitExceededFault} <p>The maximum number for snapshot identifiers has been reached. The limit is 100. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsInput
  ): Promise<BatchModifyClusterSnapshotsOutput>;
  public batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsInput,
    cb: (err: any, data?: BatchModifyClusterSnapshotsOutput) => void
  ): void;
  public batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsInput,
    cb?: (err: any, data?: BatchModifyClusterSnapshotsOutput) => void
  ): Promise<BatchModifyClusterSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchModifyClusterSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels a resize operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {ResizeNotFoundFault} <p>A resize operation for the specified cluster is not found.</p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {UnsupportedOperationFault} <p>The requested operation isn't supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelResize(args: CancelResizeInput): Promise<CancelResizeOutput>;
  public cancelResize(
    args: CancelResizeInput,
    cb: (err: any, data?: CancelResizeOutput) => void
  ): void;
  public cancelResize(
    args: CancelResizeInput,
    cb?: (err: any, data?: CancelResizeOutput) => void
  ): Promise<CancelResizeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelResizeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSnapshotAlreadyExistsFault} <p>The value specified as a snapshot identifier is already used by an existing snapshot.</p>
   *   - {ClusterSnapshotNotFoundFault} <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
   *   - {InvalidClusterSnapshotStateFault} <p>The specified cluster snapshot is not in the <code>available</code> state, or other accounts are authorized to access the snapshot. </p>
   *   - {ClusterSnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of cluster snapshots.</p>
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyClusterSnapshot(
    args: CopyClusterSnapshotInput
  ): Promise<CopyClusterSnapshotOutput>;
  public copyClusterSnapshot(
    args: CopyClusterSnapshotInput,
    cb: (err: any, data?: CopyClusterSnapshotOutput) => void
  ): void;
  public copyClusterSnapshot(
    args: CopyClusterSnapshotInput,
    cb?: (err: any, data?: CopyClusterSnapshotOutput) => void
  ): Promise<CopyClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new cluster.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterAlreadyExistsFault} <p>The account already has a cluster with the given identifier.</p>
   *   - {InsufficientClusterCapacityFault} <p>The number of nodes specified exceeds the allotted capacity of the cluster.</p>
   *   - {ClusterParameterGroupNotFoundFault} <p>The parameter group name does not refer to an existing parameter group.</p>
   *   - {ClusterSecurityGroupNotFoundFault} <p>The cluster security group name does not refer to an existing cluster security group.</p>
   *   - {ClusterQuotaExceededFault} <p>The request would exceed the allowed number of cluster instances for this account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {NumberOfNodesQuotaExceededFault} <p>The operation would exceed the number of nodes allotted to the account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {NumberOfNodesPerClusterLimitExceededFault} <p>The operation would exceed the number of nodes allowed for a cluster.</p>
   *   - {ClusterSubnetGroupNotFoundFault} <p>The cluster subnet group name does not refer to an existing cluster subnet group.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The cluster subnet group does not cover all Availability Zones.</p>
   *   - {InvalidClusterSubnetGroupStateFault} <p>The cluster subnet group cannot be deleted because it is in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or not all of the subnets are in the same VPC.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {HsmClientCertificateNotFoundFault} <p>There is no Amazon Redshift HSM client certificate with the specified identifier.</p>
   *   - {HsmConfigurationNotFoundFault} <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
   *   - {InvalidElasticIpFault} <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {LimitExceededFault} <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {InvalidClusterTrackFault} <p>The provided cluster track name is not valid.</p>
   *   - {SnapshotScheduleNotFoundFault} <p>We could not find the specified snapshot schedule. </p>
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCluster(args: CreateClusterInput): Promise<CreateClusterOutput>;
  public createCluster(
    args: CreateClusterInput,
    cb: (err: any, data?: CreateClusterOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterInput,
    cb?: (err: any, data?: CreateClusterOutput) => void
  ): Promise<CreateClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterParameterGroupQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of cluster parameter groups. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {ClusterParameterGroupAlreadyExistsFault} <p>A cluster parameter group with the same name already exists.</p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createClusterParameterGroup(
    args: CreateClusterParameterGroupInput
  ): Promise<CreateClusterParameterGroupOutput>;
  public createClusterParameterGroup(
    args: CreateClusterParameterGroupInput,
    cb: (err: any, data?: CreateClusterParameterGroupOutput) => void
  ): void;
  public createClusterParameterGroup(
    args: CreateClusterParameterGroupInput,
    cb?: (err: any, data?: CreateClusterParameterGroupOutput) => void
  ): Promise<CreateClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSecurityGroupAlreadyExistsFault} <p>A cluster security group with the same name already exists.</p>
   *   - {ClusterSecurityGroupQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of cluster security groups. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createClusterSecurityGroup(
    args: CreateClusterSecurityGroupInput
  ): Promise<CreateClusterSecurityGroupOutput>;
  public createClusterSecurityGroup(
    args: CreateClusterSecurityGroupInput,
    cb: (err: any, data?: CreateClusterSecurityGroupOutput) => void
  ): void;
  public createClusterSecurityGroup(
    args: CreateClusterSecurityGroupInput,
    cb?: (err: any, data?: CreateClusterSecurityGroupOutput) => void
  ): Promise<CreateClusterSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSnapshotAlreadyExistsFault} <p>The value specified as a snapshot identifier is already used by an existing snapshot.</p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {ClusterSnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of cluster snapshots.</p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createClusterSnapshot(
    args: CreateClusterSnapshotInput
  ): Promise<CreateClusterSnapshotOutput>;
  public createClusterSnapshot(
    args: CreateClusterSnapshotInput,
    cb: (err: any, data?: CreateClusterSnapshotOutput) => void
  ): void;
  public createClusterSnapshot(
    args: CreateClusterSnapshotInput,
    cb?: (err: any, data?: CreateClusterSnapshotOutput) => void
  ): Promise<CreateClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSubnetGroupAlreadyExistsFault} <p>A <i>ClusterSubnetGroupName</i> is already used by an existing cluster subnet group. </p>
   *   - {ClusterSubnetGroupQuotaExceededFault} <p>The request would result in user exceeding the allowed number of cluster subnet groups. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {ClusterSubnetQuotaExceededFault} <p>The request would result in user exceeding the allowed number of subnets in a cluster subnet groups. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or not all of the subnets are in the same VPC.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createClusterSubnetGroup(
    args: CreateClusterSubnetGroupInput
  ): Promise<CreateClusterSubnetGroupOutput>;
  public createClusterSubnetGroup(
    args: CreateClusterSubnetGroupInput,
    cb: (err: any, data?: CreateClusterSubnetGroupOutput) => void
  ): void;
  public createClusterSubnetGroup(
    args: CreateClusterSubnetGroupInput,
    cb?: (err: any, data?: CreateClusterSubnetGroupOutput) => void
  ): Promise<CreateClusterSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your AWS account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your AWS account. You must specify a source type if you specify a source ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EventSubscriptionQuotaExceededFault} <p>The request would exceed the allowed number of event subscriptions for this account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {SubscriptionAlreadyExistFault} <p>There is already an existing event notification subscription with the specified name.</p>
   *   - {SNSInvalidTopicFault} <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS topic.</p>
   *   - {SNSNoAuthorizationFault} <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
   *   - {SNSTopicArnNotFoundFault} <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not exist.</p>
   *   - {SubscriptionEventIdNotFoundFault} <p>An Amazon Redshift event with the specified event ID does not exist.</p>
   *   - {SubscriptionCategoryNotFoundFault} <p>The value specified for the event category was not one of the allowed values, or it specified a category that does not apply to the specified source type. The allowed values are Configuration, Management, Monitoring, and Security.</p>
   *   - {SubscriptionSeverityNotFoundFault} <p>The value specified for the event severity was not one of the allowed values, or it specified a severity that does not apply to the specified source type. The allowed values are ERROR and INFO.</p>
   *   - {SourceNotFoundFault} <p>The specified Amazon Redshift event source could not be found.</p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
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
   * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {HsmClientCertificateAlreadyExistsFault} <p>There is already an existing Amazon Redshift HSM client certificate with the specified identifier.</p>
   *   - {HsmClientCertificateQuotaExceededFault} <p>The quota for HSM client certificates has been reached. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHsmClientCertificate(
    args: CreateHsmClientCertificateInput
  ): Promise<CreateHsmClientCertificateOutput>;
  public createHsmClientCertificate(
    args: CreateHsmClientCertificateInput,
    cb: (err: any, data?: CreateHsmClientCertificateOutput) => void
  ): void;
  public createHsmClientCertificate(
    args: CreateHsmClientCertificateInput,
    cb?: (err: any, data?: CreateHsmClientCertificateOutput) => void
  ): Promise<CreateHsmClientCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHsmClientCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {HsmConfigurationAlreadyExistsFault} <p>There is already an existing Amazon Redshift HSM configuration with the specified identifier.</p>
   *   - {HsmConfigurationQuotaExceededFault} <p>The quota for HSM configurations has been reached. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHsmConfiguration(
    args: CreateHsmConfigurationInput
  ): Promise<CreateHsmConfigurationOutput>;
  public createHsmConfiguration(
    args: CreateHsmConfigurationInput,
    cb: (err: any, data?: CreateHsmConfigurationOutput) => void
  ): void;
  public createHsmConfiguration(
    args: CreateHsmConfigurationInput,
    cb?: (err: any, data?: CreateHsmConfigurationOutput) => void
  ): Promise<CreateHsmConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHsmConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot copy grant that permits Amazon Redshift to use a customer master key (CMK) from AWS Key Management Service (AWS KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {SnapshotCopyGrantAlreadyExistsFault} <p>The snapshot copy grant can't be created because a grant with the same name already exists.</p>
   *   - {SnapshotCopyGrantQuotaExceededFault} <p>The AWS account has exceeded the maximum number of snapshot copy grants in this region.</p>
   *   - {LimitExceededFault} <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantInput
  ): Promise<CreateSnapshotCopyGrantOutput>;
  public createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantInput,
    cb: (err: any, data?: CreateSnapshotCopyGrantOutput) => void
  ): void;
  public createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantInput,
    cb?: (err: any, data?: CreateSnapshotCopyGrantOutput) => void
  ): Promise<CreateSnapshotCopyGrantOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSnapshotCopyGrantCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new snapshot schedule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SnapshotScheduleAlreadyExistsFault} <p>The specified snapshot schedule already exists. </p>
   *   - {InvalidScheduleFault} <p>The schedule you submitted isn't valid.</p>
   *   - {SnapshotScheduleQuotaExceededFault} <p>You have exceeded the quota of snapshot schedules. </p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {ScheduleDefinitionTypeUnsupportedFault} <p>The definition you submitted is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSnapshotSchedule(
    args: CreateSnapshotScheduleInput
  ): Promise<CreateSnapshotScheduleOutput>;
  public createSnapshotSchedule(
    args: CreateSnapshotScheduleInput,
    cb: (err: any, data?: CreateSnapshotScheduleOutput) => void
  ): void;
  public createSnapshotSchedule(
    args: CreateSnapshotScheduleInput,
    cb?: (err: any, data?: CreateSnapshotScheduleOutput) => void
  ): Promise<CreateSnapshotScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSnapshotScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to a specified resource.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTags(args: CreateTagsInput): Promise<CreateTagsOutput>;
  public createTags(
    args: CreateTagsInput,
    cb: (err: any, data?: CreateTagsOutput) => void
  ): void;
  public createTags(
    args: CreateTagsInput,
    cb?: (err: any, data?: CreateTagsOutput) => void
  ): Promise<CreateTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a previously provisioned cluster. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {ClusterSnapshotAlreadyExistsFault} <p>The value specified as a snapshot identifier is already used by an existing snapshot.</p>
   *   - {ClusterSnapshotQuotaExceededFault} <p>The request would result in the user exceeding the allowed number of cluster snapshots.</p>
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCluster(args: DeleteClusterInput): Promise<DeleteClusterOutput>;
  public deleteCluster(
    args: DeleteClusterInput,
    cb: (err: any, data?: DeleteClusterOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterInput,
    cb?: (err: any, data?: DeleteClusterOutput) => void
  ): Promise<DeleteClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterParameterGroupStateFault} <p>The cluster parameter group action can not be completed because another task is in progress that involves the parameter group. Wait a few moments and try the operation again.</p>
   *   - {ClusterParameterGroupNotFoundFault} <p>The parameter group name does not refer to an existing parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupInput
  ): Promise<DeleteClusterParameterGroupOutput>;
  public deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupInput,
    cb: (err: any, data?: DeleteClusterParameterGroupOutput) => void
  ): void;
  public deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupInput,
    cb?: (err: any, data?: DeleteClusterParameterGroupOutput) => void
  ): Promise<DeleteClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterSecurityGroupStateFault} <p>The state of the cluster security group is not <code>available</code>. </p>
   *   - {ClusterSecurityGroupNotFoundFault} <p>The cluster security group name does not refer to an existing cluster security group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupInput
  ): Promise<DeleteClusterSecurityGroupOutput>;
  public deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupInput,
    cb: (err: any, data?: DeleteClusterSecurityGroupOutput) => void
  ): void;
  public deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupInput,
    cb?: (err: any, data?: DeleteClusterSecurityGroupOutput) => void
  ): Promise<DeleteClusterSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterSnapshotStateFault} <p>The specified cluster snapshot is not in the <code>available</code> state, or other accounts are authorized to access the snapshot. </p>
   *   - {ClusterSnapshotNotFoundFault} <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotInput
  ): Promise<DeleteClusterSnapshotOutput>;
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotInput,
    cb: (err: any, data?: DeleteClusterSnapshotOutput) => void
  ): void;
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotInput,
    cb?: (err: any, data?: DeleteClusterSnapshotOutput) => void
  ): Promise<DeleteClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified cluster subnet group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterSubnetGroupStateFault} <p>The cluster subnet group cannot be deleted because it is in use.</p>
   *   - {InvalidClusterSubnetStateFault} <p>The state of the subnet is invalid.</p>
   *   - {ClusterSubnetGroupNotFoundFault} <p>The cluster subnet group name does not refer to an existing cluster subnet group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupInput
  ): Promise<DeleteClusterSubnetGroupOutput>;
  public deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupInput,
    cb: (err: any, data?: DeleteClusterSubnetGroupOutput) => void
  ): void;
  public deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupInput,
    cb?: (err: any, data?: DeleteClusterSubnetGroupOutput) => void
  ): Promise<DeleteClusterSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an Amazon Redshift event notification subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>An Amazon Redshift event notification subscription with the specified name does not exist.</p>
   *   - {InvalidSubscriptionStateFault} <p>The subscription request is invalid because it is a duplicate request. This subscription request is already in progress.</p>
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
   * <p>Deletes the specified HSM client certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidHsmClientCertificateStateFault} <p>The specified HSM client certificate is not in the <code>available</code> state, or it is still in use by one or more Amazon Redshift clusters.</p>
   *   - {HsmClientCertificateNotFoundFault} <p>There is no Amazon Redshift HSM client certificate with the specified identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateInput
  ): Promise<DeleteHsmClientCertificateOutput>;
  public deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateInput,
    cb: (err: any, data?: DeleteHsmClientCertificateOutput) => void
  ): void;
  public deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateInput,
    cb?: (err: any, data?: DeleteHsmClientCertificateOutput) => void
  ): Promise<DeleteHsmClientCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteHsmClientCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Amazon Redshift HSM configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidHsmConfigurationStateFault} <p>The specified HSM configuration is not in the <code>available</code> state, or it is still in use by one or more Amazon Redshift clusters.</p>
   *   - {HsmConfigurationNotFoundFault} <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteHsmConfiguration(
    args: DeleteHsmConfigurationInput
  ): Promise<DeleteHsmConfigurationOutput>;
  public deleteHsmConfiguration(
    args: DeleteHsmConfigurationInput,
    cb: (err: any, data?: DeleteHsmConfigurationOutput) => void
  ): void;
  public deleteHsmConfiguration(
    args: DeleteHsmConfigurationInput,
    cb?: (err: any, data?: DeleteHsmConfigurationOutput) => void
  ): Promise<DeleteHsmConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteHsmConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified snapshot copy grant.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidSnapshotCopyGrantStateFault} <p>The snapshot copy grant can't be deleted because it is used by one or more clusters.</p>
   *   - {SnapshotCopyGrantNotFoundFault} <p>The specified snapshot copy grant can't be found. Make sure that the name is typed correctly and that the grant exists in the destination region.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantInput
  ): Promise<DeleteSnapshotCopyGrantOutput>;
  public deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantInput,
    cb: (err: any, data?: DeleteSnapshotCopyGrantOutput) => void
  ): void;
  public deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantInput,
    cb?: (err: any, data?: DeleteSnapshotCopyGrantOutput) => void
  ): Promise<DeleteSnapshotCopyGrantOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSnapshotCopyGrantCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a snapshot schedule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterSnapshotScheduleStateFault} <p>The cluster snapshot schedule state is not valid.</p>
   *   - {SnapshotScheduleNotFoundFault} <p>We could not find the specified snapshot schedule. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleInput
  ): Promise<DeleteSnapshotScheduleOutput>;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleInput,
    cb: (err: any, data?: DeleteSnapshotScheduleOutput) => void
  ): void;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleInput,
    cb?: (err: any, data?: DeleteSnapshotScheduleOutput) => void
  ): Promise<DeleteSnapshotScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSnapshotScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a tag or tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of attributes attached to an account</p>
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
   * <p>Returns an array of <code>ClusterDbRevision</code> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsInput
  ): Promise<DescribeClusterDbRevisionsOutput>;
  public describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsInput,
    cb: (err: any, data?: DescribeClusterDbRevisionsOutput) => void
  ): void;
  public describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsInput,
    cb?: (err: any, data?: DescribeClusterDbRevisionsOutput) => void
  ): Promise<DescribeClusterDbRevisionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterDbRevisionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterParameterGroupNotFoundFault} <p>The parameter group name does not refer to an existing parameter group.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsInput
  ): Promise<DescribeClusterParameterGroupsOutput>;
  public describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsInput,
    cb: (err: any, data?: DescribeClusterParameterGroupsOutput) => void
  ): void;
  public describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsInput,
    cb?: (err: any, data?: DescribeClusterParameterGroupsOutput) => void
  ): Promise<DescribeClusterParameterGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterParameterGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterParameterGroupNotFoundFault} <p>The parameter group name does not refer to an existing parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterParameters(
    args: DescribeClusterParametersInput
  ): Promise<DescribeClusterParametersOutput>;
  public describeClusterParameters(
    args: DescribeClusterParametersInput,
    cb: (err: any, data?: DescribeClusterParametersOutput) => void
  ): void;
  public describeClusterParameters(
    args: DescribeClusterParametersInput,
    cb?: (err: any, data?: DescribeClusterParametersOutput) => void
  ): Promise<DescribeClusterParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSecurityGroupNotFoundFault} <p>The cluster security group name does not refer to an existing cluster security group.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsInput
  ): Promise<DescribeClusterSecurityGroupsOutput>;
  public describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsInput,
    cb: (err: any, data?: DescribeClusterSecurityGroupsOutput) => void
  ): void;
  public describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsInput,
    cb?: (err: any, data?: DescribeClusterSecurityGroupsOutput) => void
  ): Promise<DescribeClusterSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by you AWS customer account. No information is returned for snapshots owned by inactive AWS customer accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {ClusterSnapshotNotFoundFault} <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterSnapshots(
    args: DescribeClusterSnapshotsInput
  ): Promise<DescribeClusterSnapshotsOutput>;
  public describeClusterSnapshots(
    args: DescribeClusterSnapshotsInput,
    cb: (err: any, data?: DescribeClusterSnapshotsOutput) => void
  ): void;
  public describeClusterSnapshots(
    args: DescribeClusterSnapshotsInput,
    cb?: (err: any, data?: DescribeClusterSnapshotsOutput) => void
  ): Promise<DescribeClusterSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in you AWS account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSubnetGroupNotFoundFault} <p>The cluster subnet group name does not refer to an existing cluster subnet group.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsInput
  ): Promise<DescribeClusterSubnetGroupsOutput>;
  public describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsInput,
    cb: (err: any, data?: DescribeClusterSubnetGroupsOutput) => void
  ): void;
  public describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsInput,
    cb?: (err: any, data?: DescribeClusterSubnetGroupsOutput) => void
  ): Promise<DescribeClusterSubnetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterSubnetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all the available maintenance tracks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterTrackFault} <p>The provided cluster track name is not valid.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterTracks(
    args: DescribeClusterTracksInput
  ): Promise<DescribeClusterTracksOutput>;
  public describeClusterTracks(
    args: DescribeClusterTracksInput,
    cb: (err: any, data?: DescribeClusterTracksOutput) => void
  ): void;
  public describeClusterTracks(
    args: DescribeClusterTracksInput,
    cb?: (err: any, data?: DescribeClusterTracksOutput) => void
  ): Promise<DescribeClusterTracksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterTracksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterVersions(
    args: DescribeClusterVersionsInput
  ): Promise<DescribeClusterVersionsOutput>;
  public describeClusterVersions(
    args: DescribeClusterVersionsInput,
    cb: (err: any, data?: DescribeClusterVersionsOutput) => void
  ): void;
  public describeClusterVersions(
    args: DescribeClusterVersionsInput,
    cb?: (err: any, data?: DescribeClusterVersionsOutput) => void
  ): Promise<DescribeClusterVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusters(
    args: DescribeClustersInput
  ): Promise<DescribeClustersOutput>;
  public describeClusters(
    args: DescribeClustersInput,
    cb: (err: any, data?: DescribeClustersOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersInput,
    cb?: (err: any, data?: DescribeClustersOutput) => void
  ): Promise<DescribeClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersInput
  ): Promise<DescribeDefaultClusterParametersOutput>;
  public describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersInput,
    cb: (err: any, data?: DescribeDefaultClusterParametersOutput) => void
  ): void;
  public describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersInput,
    cb?: (err: any, data?: DescribeDefaultClusterParametersOutput) => void
  ): Promise<DescribeDefaultClusterParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDefaultClusterParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.</p>
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
   * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>An Amazon Redshift event notification subscription with the specified name does not exist.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
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
   * <p>Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.</p>
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
   * <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your AWS customer account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {HsmClientCertificateNotFoundFault} <p>There is no Amazon Redshift HSM client certificate with the specified identifier.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesInput
  ): Promise<DescribeHsmClientCertificatesOutput>;
  public describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesInput,
    cb: (err: any, data?: DescribeHsmClientCertificatesOutput) => void
  ): void;
  public describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesInput,
    cb?: (err: any, data?: DescribeHsmClientCertificatesOutput) => void
  ): Promise<DescribeHsmClientCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHsmClientCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your AWS customer account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {HsmConfigurationNotFoundFault} <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHsmConfigurations(
    args: DescribeHsmConfigurationsInput
  ): Promise<DescribeHsmConfigurationsOutput>;
  public describeHsmConfigurations(
    args: DescribeHsmConfigurationsInput,
    cb: (err: any, data?: DescribeHsmConfigurationsOutput) => void
  ): void;
  public describeHsmConfigurations(
    args: DescribeHsmConfigurationsInput,
    cb?: (err: any, data?: DescribeHsmConfigurationsOutput) => void
  ): Promise<DescribeHsmConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHsmConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoggingStatus(
    args: DescribeLoggingStatusInput
  ): Promise<DescribeLoggingStatusOutput>;
  public describeLoggingStatus(
    args: DescribeLoggingStatusInput,
    cb: (err: any, data?: DescribeLoggingStatusOutput) => void
  ): void;
  public describeLoggingStatus(
    args: DescribeLoggingStatusInput,
    cb?: (err: any, data?: DescribeLoggingStatusOutput) => void
  ): Promise<DescribeLoggingStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoggingStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific AWS Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsInput
  ): Promise<DescribeOrderableClusterOptionsOutput>;
  public describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsInput,
    cb: (err: any, data?: DescribeOrderableClusterOptionsOutput) => void
  ): void;
  public describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsInput,
    cb?: (err: any, data?: DescribeOrderableClusterOptionsOutput) => void
  ): Promise<DescribeOrderableClusterOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOrderableClusterOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedNodeOfferingNotFoundFault} <p>Specified offering does not exist.</p>
   *   - {UnsupportedOperationFault} <p>The requested operation isn't supported.</p>
   *   - {DependentServiceUnavailableFault} <p>Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsInput
  ): Promise<DescribeReservedNodeOfferingsOutput>;
  public describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsInput,
    cb: (err: any, data?: DescribeReservedNodeOfferingsOutput) => void
  ): void;
  public describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsInput,
    cb?: (err: any, data?: DescribeReservedNodeOfferingsOutput) => void
  ): Promise<DescribeReservedNodeOfferingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedNodeOfferingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the descriptions of the reserved nodes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedNodeNotFoundFault} <p>The specified reserved compute node not found.</p>
   *   - {DependentServiceUnavailableFault} <p>Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedNodes(
    args: DescribeReservedNodesInput
  ): Promise<DescribeReservedNodesOutput>;
  public describeReservedNodes(
    args: DescribeReservedNodesInput,
    cb: (err: any, data?: DescribeReservedNodesOutput) => void
  ): void;
  public describeReservedNodes(
    args: DescribeReservedNodesInput,
    cb?: (err: any, data?: DescribeReservedNodesOutput) => void
  ): Promise<DescribeReservedNodesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedNodesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {ResizeNotFoundFault} <p>A resize operation for the specified cluster is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeResize(
    args: DescribeResizeInput
  ): Promise<DescribeResizeOutput>;
  public describeResize(
    args: DescribeResizeInput,
    cb: (err: any, data?: DescribeResizeOutput) => void
  ): void;
  public describeResize(
    args: DescribeResizeInput,
    cb?: (err: any, data?: DescribeResizeOutput) => void
  ): Promise<DescribeResizeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeResizeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of snapshot copy grants owned by the AWS account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {SnapshotCopyGrantNotFoundFault} <p>The specified snapshot copy grant can't be found. Make sure that the name is typed correctly and that the grant exists in the destination region.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsInput
  ): Promise<DescribeSnapshotCopyGrantsOutput>;
  public describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsInput,
    cb: (err: any, data?: DescribeSnapshotCopyGrantsOutput) => void
  ): void;
  public describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsInput,
    cb?: (err: any, data?: DescribeSnapshotCopyGrantsOutput) => void
  ): Promise<DescribeSnapshotCopyGrantsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSnapshotCopyGrantsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of snapshot schedules. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesInput
  ): Promise<DescribeSnapshotSchedulesOutput>;
  public describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesInput,
    cb: (err: any, data?: DescribeSnapshotSchedulesOutput) => void
  ): void;
  public describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesInput,
    cb?: (err: any, data?: DescribeSnapshotSchedulesOutput) => void
  ): Promise<DescribeSnapshotSchedulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSnapshotSchedulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the total amount of snapshot usage and provisioned storage for a user in megabytes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStorage(
    args: DescribeStorageInput
  ): Promise<DescribeStorageOutput>;
  public describeStorage(
    args: DescribeStorageInput,
    cb: (err: any, data?: DescribeStorageOutput) => void
  ): void;
  public describeStorage(
    args: DescribeStorageInput,
    cb?: (err: any, data?: DescribeStorageOutput) => void
  ): Promise<DescribeStorageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStorageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TableRestoreNotFoundFault} <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTableRestoreStatus(
    args: DescribeTableRestoreStatusInput
  ): Promise<DescribeTableRestoreStatusOutput>;
  public describeTableRestoreStatus(
    args: DescribeTableRestoreStatusInput,
    cb: (err: any, data?: DescribeTableRestoreStatusOutput) => void
  ): void;
  public describeTableRestoreStatus(
    args: DescribeTableRestoreStatusInput,
    cb?: (err: any, data?: DescribeTableRestoreStatusOutput) => void
  ): Promise<DescribeTableRestoreStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTableRestoreStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
  public describeTags(
    args: DescribeTagsInput,
    cb: (err: any, data?: DescribeTagsOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsInput,
    cb?: (err: any, data?: DescribeTagsOutput) => void
  ): Promise<DescribeTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableLogging(
    args: DisableLoggingInput
  ): Promise<DisableLoggingOutput>;
  public disableLogging(
    args: DisableLoggingInput,
    cb: (err: any, data?: DisableLoggingOutput) => void
  ): void;
  public disableLogging(
    args: DisableLoggingInput,
    cb?: (err: any, data?: DisableLoggingOutput) => void
  ): Promise<DisableLoggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableLoggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using a customer master key (CMK) from AWS KMS, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the CMK in the destination region. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {SnapshotCopyAlreadyDisabledFault} <p>The cluster already has cross-region snapshot copy disabled.</p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableSnapshotCopy(
    args: DisableSnapshotCopyInput
  ): Promise<DisableSnapshotCopyOutput>;
  public disableSnapshotCopy(
    args: DisableSnapshotCopyInput,
    cb: (err: any, data?: DisableSnapshotCopyOutput) => void
  ): void;
  public disableSnapshotCopy(
    args: DisableSnapshotCopyInput,
    cb?: (err: any, data?: DisableSnapshotCopyOutput) => void
  ): Promise<DisableSnapshotCopyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableSnapshotCopyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {BucketNotFoundFault} <p>Could not find the specified S3 bucket.</p>
   *   - {InsufficientS3BucketPolicyFault} <p>The cluster does not have read bucket or put object permissions on the S3 bucket specified when enabling logging.</p>
   *   - {InvalidS3KeyPrefixFault} <p>The string specified for the logging S3 key prefix does not comply with the documented constraints.</p>
   *   - {InvalidS3BucketNameFault} <p>The S3 bucket name is invalid. For more information about naming rules, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3) Developer Guide.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableLogging(args: EnableLoggingInput): Promise<EnableLoggingOutput>;
  public enableLogging(
    args: EnableLoggingInput,
    cb: (err: any, data?: EnableLoggingOutput) => void
  ): void;
  public enableLogging(
    args: EnableLoggingInput,
    cb?: (err: any, data?: EnableLoggingOutput) => void
  ): Promise<EnableLoggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableLoggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the automatic copy of snapshots from one region to another region for a specified cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {IncompatibleOrderableOptions} <p>The specified options are incompatible.</p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {CopyToRegionDisabledFault} <p>Cross-region snapshot copy was temporarily disabled. Try your request again.</p>
   *   - {SnapshotCopyAlreadyEnabledFault} <p>The cluster already has cross-region snapshot copy enabled.</p>
   *   - {UnknownSnapshotCopyRegionFault} <p>The specified region is incorrect or does not exist.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {SnapshotCopyGrantNotFoundFault} <p>The specified snapshot copy grant can't be found. Make sure that the name is typed correctly and that the grant exists in the destination region.</p>
   *   - {LimitExceededFault} <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableSnapshotCopy(
    args: EnableSnapshotCopyInput
  ): Promise<EnableSnapshotCopyOutput>;
  public enableSnapshotCopy(
    args: EnableSnapshotCopyInput,
    cb: (err: any, data?: EnableSnapshotCopyOutput) => void
  ): void;
  public enableSnapshotCopy(
    args: EnableSnapshotCopyInput,
    cb?: (err: any, data?: EnableSnapshotCopyOutput) => void
  ): Promise<EnableSnapshotCopyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableSnapshotCopyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The AWS Identity and Access Management (IAM)user or role that executes GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> privilege.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {UnsupportedOperationFault} <p>The requested operation isn't supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getClusterCredentials(
    args: GetClusterCredentialsInput
  ): Promise<GetClusterCredentialsOutput>;
  public getClusterCredentials(
    args: GetClusterCredentialsInput,
    cb: (err: any, data?: GetClusterCredentialsOutput) => void
  ): void;
  public getClusterCredentials(
    args: GetClusterCredentialsInput,
    cb?: (err: any, data?: GetClusterCredentialsOutput) => void
  ): Promise<GetClusterCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetClusterCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedNodeNotFoundFault} <p>The specified reserved compute node not found.</p>
   *   - {InvalidReservedNodeStateFault} <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
   *   - {ReservedNodeAlreadyMigratedFault} <p>Indicates that the reserved node has already been exchanged.</p>
   *   - {ReservedNodeOfferingNotFoundFault} <p>Specified offering does not exist.</p>
   *   - {UnsupportedOperationFault} <p>The requested operation isn't supported.</p>
   *   - {DependentServiceUnavailableFault} <p>Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsInput
  ): Promise<GetReservedNodeExchangeOfferingsOutput>;
  public getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsInput,
    cb: (err: any, data?: GetReservedNodeExchangeOfferingsOutput) => void
  ): void;
  public getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsInput,
    cb?: (err: any, data?: GetReservedNodeExchangeOfferingsOutput) => void
  ): Promise<GetReservedNodeExchangeOfferingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReservedNodeExchangeOfferingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the settings for a cluster. For example, you can add another security or parameter group, update the preferred maintenance window, or change the master user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {InvalidClusterSecurityGroupStateFault} <p>The state of the cluster security group is not <code>available</code>. </p>
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {NumberOfNodesQuotaExceededFault} <p>The operation would exceed the number of nodes allotted to the account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {NumberOfNodesPerClusterLimitExceededFault} <p>The operation would exceed the number of nodes allowed for a cluster.</p>
   *   - {ClusterSecurityGroupNotFoundFault} <p>The cluster security group name does not refer to an existing cluster security group.</p>
   *   - {ClusterParameterGroupNotFoundFault} <p>The parameter group name does not refer to an existing parameter group.</p>
   *   - {InsufficientClusterCapacityFault} <p>The number of nodes specified exceeds the allotted capacity of the cluster.</p>
   *   - {UnsupportedOptionFault} <p>A request option was specified that is not supported.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {HsmClientCertificateNotFoundFault} <p>There is no Amazon Redshift HSM client certificate with the specified identifier.</p>
   *   - {HsmConfigurationNotFoundFault} <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
   *   - {ClusterAlreadyExistsFault} <p>The account already has a cluster with the given identifier.</p>
   *   - {LimitExceededFault} <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {InvalidElasticIpFault} <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
   *   - {TableLimitExceededFault} <p>The number of tables in the cluster exceeds the limit for the requested new cluster node type. </p>
   *   - {InvalidClusterTrackFault} <p>The provided cluster track name is not valid.</p>
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyCluster(args: ModifyClusterInput): Promise<ModifyClusterOutput>;
  public modifyCluster(
    args: ModifyClusterInput,
    cb: (err: any, data?: ModifyClusterOutput) => void
  ): void;
  public modifyCluster(
    args: ModifyClusterInput,
    cb?: (err: any, data?: ModifyClusterOutput) => void
  ): Promise<ModifyClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {ClusterOnLatestRevisionFault} <p>Cluster is already on the latest database revision.</p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClusterDbRevision(
    args: ModifyClusterDbRevisionInput
  ): Promise<ModifyClusterDbRevisionOutput>;
  public modifyClusterDbRevision(
    args: ModifyClusterDbRevisionInput,
    cb: (err: any, data?: ModifyClusterDbRevisionOutput) => void
  ): void;
  public modifyClusterDbRevision(
    args: ModifyClusterDbRevisionInput,
    cb?: (err: any, data?: ModifyClusterDbRevisionOutput) => void
  ): Promise<ModifyClusterDbRevisionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClusterDbRevisionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.</p> <p>A cluster can have up to 10 IAM roles associated at any time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClusterIamRoles(
    args: ModifyClusterIamRolesInput
  ): Promise<ModifyClusterIamRolesOutput>;
  public modifyClusterIamRoles(
    args: ModifyClusterIamRolesInput,
    cb: (err: any, data?: ModifyClusterIamRolesOutput) => void
  ): void;
  public modifyClusterIamRoles(
    args: ModifyClusterIamRolesInput,
    cb?: (err: any, data?: ModifyClusterIamRolesOutput) => void
  ): Promise<ModifyClusterIamRolesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClusterIamRolesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the maintenance settings of a cluster. For example, you can defer a maintenance window. You can also update or cancel a deferment. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClusterMaintenance(
    args: ModifyClusterMaintenanceInput
  ): Promise<ModifyClusterMaintenanceOutput>;
  public modifyClusterMaintenance(
    args: ModifyClusterMaintenanceInput,
    cb: (err: any, data?: ModifyClusterMaintenanceOutput) => void
  ): void;
  public modifyClusterMaintenance(
    args: ModifyClusterMaintenanceInput,
    cb?: (err: any, data?: ModifyClusterMaintenanceOutput) => void
  ): Promise<ModifyClusterMaintenanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClusterMaintenanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the parameters of a parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterParameterGroupNotFoundFault} <p>The parameter group name does not refer to an existing parameter group.</p>
   *   - {InvalidClusterParameterGroupStateFault} <p>The cluster parameter group action can not be completed because another task is in progress that involves the parameter group. Wait a few moments and try the operation again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupInput
  ): Promise<ModifyClusterParameterGroupOutput>;
  public modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupInput,
    cb: (err: any, data?: ModifyClusterParameterGroupOutput) => void
  ): void;
  public modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupInput,
    cb?: (err: any, data?: ModifyClusterParameterGroupOutput) => void
  ): Promise<ModifyClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the settings for a snapshot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterSnapshotStateFault} <p>The specified cluster snapshot is not in the <code>available</code> state, or other accounts are authorized to access the snapshot. </p>
   *   - {ClusterSnapshotNotFoundFault} <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClusterSnapshot(
    args: ModifyClusterSnapshotInput
  ): Promise<ModifyClusterSnapshotOutput>;
  public modifyClusterSnapshot(
    args: ModifyClusterSnapshotInput,
    cb: (err: any, data?: ModifyClusterSnapshotOutput) => void
  ): void;
  public modifyClusterSnapshot(
    args: ModifyClusterSnapshotInput,
    cb?: (err: any, data?: ModifyClusterSnapshotOutput) => void
  ): Promise<ModifyClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a snapshot schedule for a cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {SnapshotScheduleNotFoundFault} <p>We could not find the specified snapshot schedule. </p>
   *   - {InvalidClusterSnapshotScheduleStateFault} <p>The cluster snapshot schedule state is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleInput
  ): Promise<ModifyClusterSnapshotScheduleOutput>;
  public modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleInput,
    cb: (err: any, data?: ModifyClusterSnapshotScheduleOutput) => void
  ): void;
  public modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleInput,
    cb?: (err: any, data?: ModifyClusterSnapshotScheduleOutput) => void
  ): Promise<ModifyClusterSnapshotScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClusterSnapshotScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSubnetGroupNotFoundFault} <p>The cluster subnet group name does not refer to an existing cluster subnet group.</p>
   *   - {ClusterSubnetQuotaExceededFault} <p>The request would result in user exceeding the allowed number of subnets in a cluster subnet groups. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {SubnetAlreadyInUse} <p>A specified subnet is already in use by another cluster.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or not all of the subnets are in the same VPC.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupInput
  ): Promise<ModifyClusterSubnetGroupOutput>;
  public modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupInput,
    cb: (err: any, data?: ModifyClusterSubnetGroupOutput) => void
  ): void;
  public modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupInput,
    cb?: (err: any, data?: ModifyClusterSubnetGroupOutput) => void
  ): Promise<ModifyClusterSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClusterSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing Amazon Redshift event notification subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>An Amazon Redshift event notification subscription with the specified name does not exist.</p>
   *   - {SNSInvalidTopicFault} <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS topic.</p>
   *   - {SNSNoAuthorizationFault} <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
   *   - {SNSTopicArnNotFoundFault} <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not exist.</p>
   *   - {SubscriptionEventIdNotFoundFault} <p>An Amazon Redshift event with the specified event ID does not exist.</p>
   *   - {SubscriptionCategoryNotFoundFault} <p>The value specified for the event category was not one of the allowed values, or it specified a category that does not apply to the specified source type. The allowed values are Configuration, Management, Monitoring, and Security.</p>
   *   - {SubscriptionSeverityNotFoundFault} <p>The value specified for the event severity was not one of the allowed values, or it specified a severity that does not apply to the specified source type. The allowed values are ERROR and INFO.</p>
   *   - {SourceNotFoundFault} <p>The specified Amazon Redshift event source could not be found.</p>
   *   - {InvalidSubscriptionStateFault} <p>The subscription request is invalid because it is a duplicate request. This subscription request is already in progress.</p>
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
   * <p>Modifies the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {SnapshotCopyDisabledFault} <p>Cross-region snapshot copy was temporarily disabled. Try your request again.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {InvalidRetentionPeriodFault} <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodInput
  ): Promise<ModifySnapshotCopyRetentionPeriodOutput>;
  public modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodInput,
    cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodOutput) => void
  ): void;
  public modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodInput,
    cb?: (err: any, data?: ModifySnapshotCopyRetentionPeriodOutput) => void
  ): Promise<ModifySnapshotCopyRetentionPeriodOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifySnapshotCopyRetentionPeriodCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidScheduleFault} <p>The schedule you submitted isn't valid.</p>
   *   - {SnapshotScheduleNotFoundFault} <p>We could not find the specified snapshot schedule. </p>
   *   - {SnapshotScheduleUpdateInProgressFault} <p>The specified snapshot schedule is already being updated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifySnapshotSchedule(
    args: ModifySnapshotScheduleInput
  ): Promise<ModifySnapshotScheduleOutput>;
  public modifySnapshotSchedule(
    args: ModifySnapshotScheduleInput,
    cb: (err: any, data?: ModifySnapshotScheduleOutput) => void
  ): void;
  public modifySnapshotSchedule(
    args: ModifySnapshotScheduleInput,
    cb?: (err: any, data?: ModifySnapshotScheduleOutput) => void
  ): Promise<ModifySnapshotScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifySnapshotScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReservedNodeOfferingNotFoundFault} <p>Specified offering does not exist.</p>
   *   - {ReservedNodeAlreadyExistsFault} <p>User already has a reservation with the given identifier.</p>
   *   - {ReservedNodeQuotaExceededFault} <p>Request would exceed the user's compute node quota. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {UnsupportedOperationFault} <p>The requested operation isn't supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingInput
  ): Promise<PurchaseReservedNodeOfferingOutput>;
  public purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingInput,
    cb: (err: any, data?: PurchaseReservedNodeOfferingOutput) => void
  ): void;
  public purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingInput,
    cb?: (err: any, data?: PurchaseReservedNodeOfferingOutput) => void
  ): Promise<PurchaseReservedNodeOfferingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PurchaseReservedNodeOfferingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootCluster(args: RebootClusterInput): Promise<RebootClusterOutput>;
  public rebootCluster(
    args: RebootClusterInput,
    cb: (err: any, data?: RebootClusterOutput) => void
  ): void;
  public rebootCluster(
    args: RebootClusterInput,
    cb?: (err: any, data?: RebootClusterOutput) => void
  ): Promise<RebootClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterParameterGroupStateFault} <p>The cluster parameter group action can not be completed because another task is in progress that involves the parameter group. Wait a few moments and try the operation again.</p>
   *   - {ClusterParameterGroupNotFoundFault} <p>The parameter group name does not refer to an existing parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetClusterParameterGroup(
    args: ResetClusterParameterGroupInput
  ): Promise<ResetClusterParameterGroupOutput>;
  public resetClusterParameterGroup(
    args: ResetClusterParameterGroupInput,
    cb: (err: any, data?: ResetClusterParameterGroupOutput) => void
  ): void;
  public resetClusterParameterGroup(
    args: ResetClusterParameterGroupInput,
    cb?: (err: any, data?: ResetClusterParameterGroupOutput) => void
  ): Promise<ResetClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {NumberOfNodesQuotaExceededFault} <p>The operation would exceed the number of nodes allotted to the account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {NumberOfNodesPerClusterLimitExceededFault} <p>The operation would exceed the number of nodes allowed for a cluster.</p>
   *   - {InsufficientClusterCapacityFault} <p>The number of nodes specified exceeds the allotted capacity of the cluster.</p>
   *   - {UnsupportedOptionFault} <p>A request option was specified that is not supported.</p>
   *   - {UnsupportedOperationFault} <p>The requested operation isn't supported.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {LimitExceededFault} <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resizeCluster(args: ResizeClusterInput): Promise<ResizeClusterOutput>;
  public resizeCluster(
    args: ResizeClusterInput,
    cb: (err: any, data?: ResizeClusterOutput) => void
  ): void;
  public resizeCluster(
    args: ResizeClusterInput,
    cb?: (err: any, data?: ResizeClusterOutput) => void
  ): Promise<ResizeClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResizeClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessToSnapshotDeniedFault} <p>The owner of the specified snapshot has not authorized your account to access the snapshot.</p>
   *   - {ClusterAlreadyExistsFault} <p>The account already has a cluster with the given identifier.</p>
   *   - {ClusterSnapshotNotFoundFault} <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
   *   - {ClusterQuotaExceededFault} <p>The request would exceed the allowed number of cluster instances for this account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {InsufficientClusterCapacityFault} <p>The number of nodes specified exceeds the allotted capacity of the cluster.</p>
   *   - {InvalidClusterSnapshotStateFault} <p>The specified cluster snapshot is not in the <code>available</code> state, or other accounts are authorized to access the snapshot. </p>
   *   - {InvalidRestoreFault} <p>The restore is invalid.</p>
   *   - {NumberOfNodesQuotaExceededFault} <p>The operation would exceed the number of nodes allotted to the account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *   - {NumberOfNodesPerClusterLimitExceededFault} <p>The operation would exceed the number of nodes allowed for a cluster.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The cluster subnet group does not cover all Availability Zones.</p>
   *   - {InvalidClusterSubnetGroupStateFault} <p>The cluster subnet group cannot be deleted because it is in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or not all of the subnets are in the same VPC.</p>
   *   - {ClusterSubnetGroupNotFoundFault} <p>The cluster subnet group name does not refer to an existing cluster subnet group.</p>
   *   - {UnauthorizedOperation} <p>Your account is not authorized to perform the requested operation.</p>
   *   - {HsmClientCertificateNotFoundFault} <p>There is no Amazon Redshift HSM client certificate with the specified identifier.</p>
   *   - {HsmConfigurationNotFoundFault} <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
   *   - {InvalidElasticIpFault} <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
   *   - {ClusterParameterGroupNotFoundFault} <p>The parameter group name does not refer to an existing parameter group.</p>
   *   - {ClusterSecurityGroupNotFoundFault} <p>The cluster security group name does not refer to an existing cluster security group.</p>
   *   - {LimitExceededFault} <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {InvalidClusterTrackFault} <p>The provided cluster track name is not valid.</p>
   *   - {SnapshotScheduleNotFoundFault} <p>We could not find the specified snapshot schedule. </p>
   *   - {TagLimitExceededFault} <p>You have exceeded the number of tags allowed.</p>
   *   - {InvalidTagFault} <p>The tag is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotInput
  ): Promise<RestoreFromClusterSnapshotOutput>;
  public restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotInput,
    cb: (err: any, data?: RestoreFromClusterSnapshotOutput) => void
  ): void;
  public restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotInput,
    cb?: (err: any, data?: RestoreFromClusterSnapshotOutput) => void
  ): Promise<RestoreFromClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreFromClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSnapshotNotFoundFault} <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
   *   - {InProgressTableRestoreQuotaExceededFault} <p>You have exceeded the allowed number of table restore requests. Wait for your current table restore requests to complete before making a new request.</p>
   *   - {InvalidClusterSnapshotStateFault} <p>The specified cluster snapshot is not in the <code>available</code> state, or other accounts are authorized to access the snapshot. </p>
   *   - {InvalidTableRestoreArgumentFault} <p>The value specified for the <code>sourceDatabaseName</code>, <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a combination of these, doesn't exist in the snapshot.</p>
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {UnsupportedOperationFault} <p>The requested operation isn't supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotInput
  ): Promise<RestoreTableFromClusterSnapshotOutput>;
  public restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotInput,
    cb: (err: any, data?: RestoreTableFromClusterSnapshotOutput) => void
  ): void;
  public restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotInput,
    cb?: (err: any, data?: RestoreTableFromClusterSnapshotOutput) => void
  ): Promise<RestoreTableFromClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreTableFromClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterSecurityGroupNotFoundFault} <p>The cluster security group name does not refer to an existing cluster security group.</p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDR IP range or EC2 security group is not authorized for the specified cluster security group.</p>
   *   - {InvalidClusterSecurityGroupStateFault} <p>The state of the cluster security group is not <code>available</code>. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressInput
  ): Promise<RevokeClusterSecurityGroupIngressOutput>;
  public revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressInput,
    cb: (err: any, data?: RevokeClusterSecurityGroupIngressOutput) => void
  ): void;
  public revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressInput,
    cb?: (err: any, data?: RevokeClusterSecurityGroupIngressOutput) => void
  ): Promise<RevokeClusterSecurityGroupIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeClusterSecurityGroupIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the ability of the specified AWS customer account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessToSnapshotDeniedFault} <p>The owner of the specified snapshot has not authorized your account to access the snapshot.</p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDR IP range or EC2 security group is not authorized for the specified cluster security group.</p>
   *   - {ClusterSnapshotNotFoundFault} <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeSnapshotAccess(
    args: RevokeSnapshotAccessInput
  ): Promise<RevokeSnapshotAccessOutput>;
  public revokeSnapshotAccess(
    args: RevokeSnapshotAccessInput,
    cb: (err: any, data?: RevokeSnapshotAccessOutput) => void
  ): void;
  public revokeSnapshotAccess(
    args: RevokeSnapshotAccessInput,
    cb?: (err: any, data?: RevokeSnapshotAccessOutput) => void
  ): Promise<RevokeSnapshotAccessOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeSnapshotAccessCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rotates the encryption keys for a cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
   *   - {InvalidClusterStateFault} <p>The specified cluster is not in the <code>available</code> state. </p>
   *   - {DependentServiceRequestThrottlingFault} <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rotateEncryptionKey(
    args: RotateEncryptionKeyInput
  ): Promise<RotateEncryptionKeyOutput>;
  public rotateEncryptionKey(
    args: RotateEncryptionKeyInput,
    cb: (err: any, data?: RotateEncryptionKeyOutput) => void
  ): void;
  public rotateEncryptionKey(
    args: RotateEncryptionKeyInput,
    cb?: (err: any, data?: RotateEncryptionKeyOutput) => void
  ): Promise<RotateEncryptionKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RotateEncryptionKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
