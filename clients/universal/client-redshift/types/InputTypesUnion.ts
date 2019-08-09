import { AcceptReservedNodeExchangeInput } from "./AcceptReservedNodeExchangeInput";
import { AuthorizeClusterSecurityGroupIngressInput } from "./AuthorizeClusterSecurityGroupIngressInput";
import { AuthorizeSnapshotAccessInput } from "./AuthorizeSnapshotAccessInput";
import { BatchDeleteClusterSnapshotsInput } from "./BatchDeleteClusterSnapshotsInput";
import { BatchModifyClusterSnapshotsInput } from "./BatchModifyClusterSnapshotsInput";
import { CancelResizeInput } from "./CancelResizeInput";
import { CopyClusterSnapshotInput } from "./CopyClusterSnapshotInput";
import { CreateClusterInput } from "./CreateClusterInput";
import { CreateClusterParameterGroupInput } from "./CreateClusterParameterGroupInput";
import { CreateClusterSecurityGroupInput } from "./CreateClusterSecurityGroupInput";
import { CreateClusterSnapshotInput } from "./CreateClusterSnapshotInput";
import { CreateClusterSubnetGroupInput } from "./CreateClusterSubnetGroupInput";
import { CreateEventSubscriptionInput } from "./CreateEventSubscriptionInput";
import { CreateHsmClientCertificateInput } from "./CreateHsmClientCertificateInput";
import { CreateHsmConfigurationInput } from "./CreateHsmConfigurationInput";
import { CreateSnapshotCopyGrantInput } from "./CreateSnapshotCopyGrantInput";
import { CreateSnapshotScheduleInput } from "./CreateSnapshotScheduleInput";
import { CreateTagsInput } from "./CreateTagsInput";
import { DeleteClusterInput } from "./DeleteClusterInput";
import { DeleteClusterParameterGroupInput } from "./DeleteClusterParameterGroupInput";
import { DeleteClusterSecurityGroupInput } from "./DeleteClusterSecurityGroupInput";
import { DeleteClusterSnapshotInput } from "./DeleteClusterSnapshotInput";
import { DeleteClusterSubnetGroupInput } from "./DeleteClusterSubnetGroupInput";
import { DeleteEventSubscriptionInput } from "./DeleteEventSubscriptionInput";
import { DeleteHsmClientCertificateInput } from "./DeleteHsmClientCertificateInput";
import { DeleteHsmConfigurationInput } from "./DeleteHsmConfigurationInput";
import { DeleteSnapshotCopyGrantInput } from "./DeleteSnapshotCopyGrantInput";
import { DeleteSnapshotScheduleInput } from "./DeleteSnapshotScheduleInput";
import { DeleteTagsInput } from "./DeleteTagsInput";
import { DescribeAccountAttributesInput } from "./DescribeAccountAttributesInput";
import { DescribeClusterDbRevisionsInput } from "./DescribeClusterDbRevisionsInput";
import { DescribeClusterParameterGroupsInput } from "./DescribeClusterParameterGroupsInput";
import { DescribeClusterParametersInput } from "./DescribeClusterParametersInput";
import { DescribeClusterSecurityGroupsInput } from "./DescribeClusterSecurityGroupsInput";
import { DescribeClusterSnapshotsInput } from "./DescribeClusterSnapshotsInput";
import { DescribeClusterSubnetGroupsInput } from "./DescribeClusterSubnetGroupsInput";
import { DescribeClusterTracksInput } from "./DescribeClusterTracksInput";
import { DescribeClusterVersionsInput } from "./DescribeClusterVersionsInput";
import { DescribeClustersInput } from "./DescribeClustersInput";
import { DescribeDefaultClusterParametersInput } from "./DescribeDefaultClusterParametersInput";
import { DescribeEventCategoriesInput } from "./DescribeEventCategoriesInput";
import { DescribeEventSubscriptionsInput } from "./DescribeEventSubscriptionsInput";
import { DescribeEventsInput } from "./DescribeEventsInput";
import { DescribeHsmClientCertificatesInput } from "./DescribeHsmClientCertificatesInput";
import { DescribeHsmConfigurationsInput } from "./DescribeHsmConfigurationsInput";
import { DescribeLoggingStatusInput } from "./DescribeLoggingStatusInput";
import { DescribeOrderableClusterOptionsInput } from "./DescribeOrderableClusterOptionsInput";
import { DescribeReservedNodeOfferingsInput } from "./DescribeReservedNodeOfferingsInput";
import { DescribeReservedNodesInput } from "./DescribeReservedNodesInput";
import { DescribeResizeInput } from "./DescribeResizeInput";
import { DescribeSnapshotCopyGrantsInput } from "./DescribeSnapshotCopyGrantsInput";
import { DescribeSnapshotSchedulesInput } from "./DescribeSnapshotSchedulesInput";
import { DescribeStorageInput } from "./DescribeStorageInput";
import { DescribeTableRestoreStatusInput } from "./DescribeTableRestoreStatusInput";
import { DescribeTagsInput } from "./DescribeTagsInput";
import { DisableLoggingInput } from "./DisableLoggingInput";
import { DisableSnapshotCopyInput } from "./DisableSnapshotCopyInput";
import { EnableLoggingInput } from "./EnableLoggingInput";
import { EnableSnapshotCopyInput } from "./EnableSnapshotCopyInput";
import { GetClusterCredentialsInput } from "./GetClusterCredentialsInput";
import { GetReservedNodeExchangeOfferingsInput } from "./GetReservedNodeExchangeOfferingsInput";
import { ModifyClusterInput } from "./ModifyClusterInput";
import { ModifyClusterDbRevisionInput } from "./ModifyClusterDbRevisionInput";
import { ModifyClusterIamRolesInput } from "./ModifyClusterIamRolesInput";
import { ModifyClusterMaintenanceInput } from "./ModifyClusterMaintenanceInput";
import { ModifyClusterParameterGroupInput } from "./ModifyClusterParameterGroupInput";
import { ModifyClusterSnapshotInput } from "./ModifyClusterSnapshotInput";
import { ModifyClusterSnapshotScheduleInput } from "./ModifyClusterSnapshotScheduleInput";
import { ModifyClusterSubnetGroupInput } from "./ModifyClusterSubnetGroupInput";
import { ModifyEventSubscriptionInput } from "./ModifyEventSubscriptionInput";
import { ModifySnapshotCopyRetentionPeriodInput } from "./ModifySnapshotCopyRetentionPeriodInput";
import { ModifySnapshotScheduleInput } from "./ModifySnapshotScheduleInput";
import { PurchaseReservedNodeOfferingInput } from "./PurchaseReservedNodeOfferingInput";
import { RebootClusterInput } from "./RebootClusterInput";
import { ResetClusterParameterGroupInput } from "./ResetClusterParameterGroupInput";
import { ResizeClusterInput } from "./ResizeClusterInput";
import { RestoreFromClusterSnapshotInput } from "./RestoreFromClusterSnapshotInput";
import { RestoreTableFromClusterSnapshotInput } from "./RestoreTableFromClusterSnapshotInput";
import { RevokeClusterSecurityGroupIngressInput } from "./RevokeClusterSecurityGroupIngressInput";
import { RevokeSnapshotAccessInput } from "./RevokeSnapshotAccessInput";
import { RotateEncryptionKeyInput } from "./RotateEncryptionKeyInput";
export type InputTypesUnion =
  | AcceptReservedNodeExchangeInput
  | AuthorizeClusterSecurityGroupIngressInput
  | AuthorizeSnapshotAccessInput
  | BatchDeleteClusterSnapshotsInput
  | BatchModifyClusterSnapshotsInput
  | CancelResizeInput
  | CopyClusterSnapshotInput
  | CreateClusterInput
  | CreateClusterParameterGroupInput
  | CreateClusterSecurityGroupInput
  | CreateClusterSnapshotInput
  | CreateClusterSubnetGroupInput
  | CreateEventSubscriptionInput
  | CreateHsmClientCertificateInput
  | CreateHsmConfigurationInput
  | CreateSnapshotCopyGrantInput
  | CreateSnapshotScheduleInput
  | CreateTagsInput
  | DeleteClusterInput
  | DeleteClusterParameterGroupInput
  | DeleteClusterSecurityGroupInput
  | DeleteClusterSnapshotInput
  | DeleteClusterSubnetGroupInput
  | DeleteEventSubscriptionInput
  | DeleteHsmClientCertificateInput
  | DeleteHsmConfigurationInput
  | DeleteSnapshotCopyGrantInput
  | DeleteSnapshotScheduleInput
  | DeleteTagsInput
  | DescribeAccountAttributesInput
  | DescribeClusterDbRevisionsInput
  | DescribeClusterParameterGroupsInput
  | DescribeClusterParametersInput
  | DescribeClusterSecurityGroupsInput
  | DescribeClusterSnapshotsInput
  | DescribeClusterSubnetGroupsInput
  | DescribeClusterTracksInput
  | DescribeClusterVersionsInput
  | DescribeClustersInput
  | DescribeDefaultClusterParametersInput
  | DescribeEventCategoriesInput
  | DescribeEventSubscriptionsInput
  | DescribeEventsInput
  | DescribeHsmClientCertificatesInput
  | DescribeHsmConfigurationsInput
  | DescribeLoggingStatusInput
  | DescribeOrderableClusterOptionsInput
  | DescribeReservedNodeOfferingsInput
  | DescribeReservedNodesInput
  | DescribeResizeInput
  | DescribeSnapshotCopyGrantsInput
  | DescribeSnapshotSchedulesInput
  | DescribeStorageInput
  | DescribeTableRestoreStatusInput
  | DescribeTagsInput
  | DisableLoggingInput
  | DisableSnapshotCopyInput
  | EnableLoggingInput
  | EnableSnapshotCopyInput
  | GetClusterCredentialsInput
  | GetReservedNodeExchangeOfferingsInput
  | ModifyClusterInput
  | ModifyClusterDbRevisionInput
  | ModifyClusterIamRolesInput
  | ModifyClusterMaintenanceInput
  | ModifyClusterParameterGroupInput
  | ModifyClusterSnapshotInput
  | ModifyClusterSnapshotScheduleInput
  | ModifyClusterSubnetGroupInput
  | ModifyEventSubscriptionInput
  | ModifySnapshotCopyRetentionPeriodInput
  | ModifySnapshotScheduleInput
  | PurchaseReservedNodeOfferingInput
  | RebootClusterInput
  | ResetClusterParameterGroupInput
  | ResizeClusterInput
  | RestoreFromClusterSnapshotInput
  | RestoreTableFromClusterSnapshotInput
  | RevokeClusterSecurityGroupIngressInput
  | RevokeSnapshotAccessInput
  | RotateEncryptionKeyInput;
