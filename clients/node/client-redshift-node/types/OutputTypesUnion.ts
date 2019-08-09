import { AcceptReservedNodeExchangeOutput } from "./AcceptReservedNodeExchangeOutput";
import { AuthorizeClusterSecurityGroupIngressOutput } from "./AuthorizeClusterSecurityGroupIngressOutput";
import { AuthorizeSnapshotAccessOutput } from "./AuthorizeSnapshotAccessOutput";
import { BatchDeleteClusterSnapshotsOutput } from "./BatchDeleteClusterSnapshotsOutput";
import { BatchModifyClusterSnapshotsOutput } from "./BatchModifyClusterSnapshotsOutput";
import { CancelResizeOutput } from "./CancelResizeOutput";
import { CopyClusterSnapshotOutput } from "./CopyClusterSnapshotOutput";
import { CreateClusterOutput } from "./CreateClusterOutput";
import { CreateClusterParameterGroupOutput } from "./CreateClusterParameterGroupOutput";
import { CreateClusterSecurityGroupOutput } from "./CreateClusterSecurityGroupOutput";
import { CreateClusterSnapshotOutput } from "./CreateClusterSnapshotOutput";
import { CreateClusterSubnetGroupOutput } from "./CreateClusterSubnetGroupOutput";
import { CreateEventSubscriptionOutput } from "./CreateEventSubscriptionOutput";
import { CreateHsmClientCertificateOutput } from "./CreateHsmClientCertificateOutput";
import { CreateHsmConfigurationOutput } from "./CreateHsmConfigurationOutput";
import { CreateSnapshotCopyGrantOutput } from "./CreateSnapshotCopyGrantOutput";
import { CreateSnapshotScheduleOutput } from "./CreateSnapshotScheduleOutput";
import { CreateTagsOutput } from "./CreateTagsOutput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { DeleteClusterParameterGroupOutput } from "./DeleteClusterParameterGroupOutput";
import { DeleteClusterSecurityGroupOutput } from "./DeleteClusterSecurityGroupOutput";
import { DeleteClusterSnapshotOutput } from "./DeleteClusterSnapshotOutput";
import { DeleteClusterSubnetGroupOutput } from "./DeleteClusterSubnetGroupOutput";
import { DeleteEventSubscriptionOutput } from "./DeleteEventSubscriptionOutput";
import { DeleteHsmClientCertificateOutput } from "./DeleteHsmClientCertificateOutput";
import { DeleteHsmConfigurationOutput } from "./DeleteHsmConfigurationOutput";
import { DeleteSnapshotCopyGrantOutput } from "./DeleteSnapshotCopyGrantOutput";
import { DeleteSnapshotScheduleOutput } from "./DeleteSnapshotScheduleOutput";
import { DeleteTagsOutput } from "./DeleteTagsOutput";
import { DescribeAccountAttributesOutput } from "./DescribeAccountAttributesOutput";
import { DescribeClusterDbRevisionsOutput } from "./DescribeClusterDbRevisionsOutput";
import { DescribeClusterParameterGroupsOutput } from "./DescribeClusterParameterGroupsOutput";
import { DescribeClusterParametersOutput } from "./DescribeClusterParametersOutput";
import { DescribeClusterSecurityGroupsOutput } from "./DescribeClusterSecurityGroupsOutput";
import { DescribeClusterSnapshotsOutput } from "./DescribeClusterSnapshotsOutput";
import { DescribeClusterSubnetGroupsOutput } from "./DescribeClusterSubnetGroupsOutput";
import { DescribeClusterTracksOutput } from "./DescribeClusterTracksOutput";
import { DescribeClusterVersionsOutput } from "./DescribeClusterVersionsOutput";
import { DescribeClustersOutput } from "./DescribeClustersOutput";
import { DescribeDefaultClusterParametersOutput } from "./DescribeDefaultClusterParametersOutput";
import { DescribeEventCategoriesOutput } from "./DescribeEventCategoriesOutput";
import { DescribeEventSubscriptionsOutput } from "./DescribeEventSubscriptionsOutput";
import { DescribeEventsOutput } from "./DescribeEventsOutput";
import { DescribeHsmClientCertificatesOutput } from "./DescribeHsmClientCertificatesOutput";
import { DescribeHsmConfigurationsOutput } from "./DescribeHsmConfigurationsOutput";
import { DescribeLoggingStatusOutput } from "./DescribeLoggingStatusOutput";
import { DescribeOrderableClusterOptionsOutput } from "./DescribeOrderableClusterOptionsOutput";
import { DescribeReservedNodeOfferingsOutput } from "./DescribeReservedNodeOfferingsOutput";
import { DescribeReservedNodesOutput } from "./DescribeReservedNodesOutput";
import { DescribeResizeOutput } from "./DescribeResizeOutput";
import { DescribeSnapshotCopyGrantsOutput } from "./DescribeSnapshotCopyGrantsOutput";
import { DescribeSnapshotSchedulesOutput } from "./DescribeSnapshotSchedulesOutput";
import { DescribeStorageOutput } from "./DescribeStorageOutput";
import { DescribeTableRestoreStatusOutput } from "./DescribeTableRestoreStatusOutput";
import { DescribeTagsOutput } from "./DescribeTagsOutput";
import { DisableLoggingOutput } from "./DisableLoggingOutput";
import { DisableSnapshotCopyOutput } from "./DisableSnapshotCopyOutput";
import { EnableLoggingOutput } from "./EnableLoggingOutput";
import { EnableSnapshotCopyOutput } from "./EnableSnapshotCopyOutput";
import { GetClusterCredentialsOutput } from "./GetClusterCredentialsOutput";
import { GetReservedNodeExchangeOfferingsOutput } from "./GetReservedNodeExchangeOfferingsOutput";
import { ModifyClusterOutput } from "./ModifyClusterOutput";
import { ModifyClusterDbRevisionOutput } from "./ModifyClusterDbRevisionOutput";
import { ModifyClusterIamRolesOutput } from "./ModifyClusterIamRolesOutput";
import { ModifyClusterMaintenanceOutput } from "./ModifyClusterMaintenanceOutput";
import { ModifyClusterParameterGroupOutput } from "./ModifyClusterParameterGroupOutput";
import { ModifyClusterSnapshotOutput } from "./ModifyClusterSnapshotOutput";
import { ModifyClusterSnapshotScheduleOutput } from "./ModifyClusterSnapshotScheduleOutput";
import { ModifyClusterSubnetGroupOutput } from "./ModifyClusterSubnetGroupOutput";
import { ModifyEventSubscriptionOutput } from "./ModifyEventSubscriptionOutput";
import { ModifySnapshotCopyRetentionPeriodOutput } from "./ModifySnapshotCopyRetentionPeriodOutput";
import { ModifySnapshotScheduleOutput } from "./ModifySnapshotScheduleOutput";
import { PurchaseReservedNodeOfferingOutput } from "./PurchaseReservedNodeOfferingOutput";
import { RebootClusterOutput } from "./RebootClusterOutput";
import { ResetClusterParameterGroupOutput } from "./ResetClusterParameterGroupOutput";
import { ResizeClusterOutput } from "./ResizeClusterOutput";
import { RestoreFromClusterSnapshotOutput } from "./RestoreFromClusterSnapshotOutput";
import { RestoreTableFromClusterSnapshotOutput } from "./RestoreTableFromClusterSnapshotOutput";
import { RevokeClusterSecurityGroupIngressOutput } from "./RevokeClusterSecurityGroupIngressOutput";
import { RevokeSnapshotAccessOutput } from "./RevokeSnapshotAccessOutput";
import { RotateEncryptionKeyOutput } from "./RotateEncryptionKeyOutput";
export type OutputTypesUnion =
  | AcceptReservedNodeExchangeOutput
  | AuthorizeClusterSecurityGroupIngressOutput
  | AuthorizeSnapshotAccessOutput
  | BatchDeleteClusterSnapshotsOutput
  | BatchModifyClusterSnapshotsOutput
  | CancelResizeOutput
  | CopyClusterSnapshotOutput
  | CreateClusterOutput
  | CreateClusterParameterGroupOutput
  | CreateClusterSecurityGroupOutput
  | CreateClusterSnapshotOutput
  | CreateClusterSubnetGroupOutput
  | CreateEventSubscriptionOutput
  | CreateHsmClientCertificateOutput
  | CreateHsmConfigurationOutput
  | CreateSnapshotCopyGrantOutput
  | CreateSnapshotScheduleOutput
  | CreateTagsOutput
  | DeleteClusterOutput
  | DeleteClusterParameterGroupOutput
  | DeleteClusterSecurityGroupOutput
  | DeleteClusterSnapshotOutput
  | DeleteClusterSubnetGroupOutput
  | DeleteEventSubscriptionOutput
  | DeleteHsmClientCertificateOutput
  | DeleteHsmConfigurationOutput
  | DeleteSnapshotCopyGrantOutput
  | DeleteSnapshotScheduleOutput
  | DeleteTagsOutput
  | DescribeAccountAttributesOutput
  | DescribeClusterDbRevisionsOutput
  | DescribeClusterParameterGroupsOutput
  | DescribeClusterParametersOutput
  | DescribeClusterSecurityGroupsOutput
  | DescribeClusterSnapshotsOutput
  | DescribeClusterSubnetGroupsOutput
  | DescribeClusterTracksOutput
  | DescribeClusterVersionsOutput
  | DescribeClustersOutput
  | DescribeDefaultClusterParametersOutput
  | DescribeEventCategoriesOutput
  | DescribeEventSubscriptionsOutput
  | DescribeEventsOutput
  | DescribeHsmClientCertificatesOutput
  | DescribeHsmConfigurationsOutput
  | DescribeLoggingStatusOutput
  | DescribeOrderableClusterOptionsOutput
  | DescribeReservedNodeOfferingsOutput
  | DescribeReservedNodesOutput
  | DescribeResizeOutput
  | DescribeSnapshotCopyGrantsOutput
  | DescribeSnapshotSchedulesOutput
  | DescribeStorageOutput
  | DescribeTableRestoreStatusOutput
  | DescribeTagsOutput
  | DisableLoggingOutput
  | DisableSnapshotCopyOutput
  | EnableLoggingOutput
  | EnableSnapshotCopyOutput
  | GetClusterCredentialsOutput
  | GetReservedNodeExchangeOfferingsOutput
  | ModifyClusterOutput
  | ModifyClusterDbRevisionOutput
  | ModifyClusterIamRolesOutput
  | ModifyClusterMaintenanceOutput
  | ModifyClusterParameterGroupOutput
  | ModifyClusterSnapshotOutput
  | ModifyClusterSnapshotScheduleOutput
  | ModifyClusterSubnetGroupOutput
  | ModifyEventSubscriptionOutput
  | ModifySnapshotCopyRetentionPeriodOutput
  | ModifySnapshotScheduleOutput
  | PurchaseReservedNodeOfferingOutput
  | RebootClusterOutput
  | ResetClusterParameterGroupOutput
  | ResizeClusterOutput
  | RestoreFromClusterSnapshotOutput
  | RestoreTableFromClusterSnapshotOutput
  | RevokeClusterSecurityGroupIngressOutput
  | RevokeSnapshotAccessOutput
  | RotateEncryptionKeyOutput;
