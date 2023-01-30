// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XMLParser } from "fast-xml-parser";

import {
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
} from "../commands/AcceptReservedNodeExchangeCommand";
import { AddPartnerCommandInput, AddPartnerCommandOutput } from "../commands/AddPartnerCommand";
import {
  AssociateDataShareConsumerCommandInput,
  AssociateDataShareConsumerCommandOutput,
} from "../commands/AssociateDataShareConsumerCommand";
import {
  AuthorizeClusterSecurityGroupIngressCommandInput,
  AuthorizeClusterSecurityGroupIngressCommandOutput,
} from "../commands/AuthorizeClusterSecurityGroupIngressCommand";
import { AuthorizeDataShareCommandInput, AuthorizeDataShareCommandOutput } from "../commands/AuthorizeDataShareCommand";
import {
  AuthorizeEndpointAccessCommandInput,
  AuthorizeEndpointAccessCommandOutput,
} from "../commands/AuthorizeEndpointAccessCommand";
import {
  AuthorizeSnapshotAccessCommandInput,
  AuthorizeSnapshotAccessCommandOutput,
} from "../commands/AuthorizeSnapshotAccessCommand";
import {
  BatchDeleteClusterSnapshotsCommandInput,
  BatchDeleteClusterSnapshotsCommandOutput,
} from "../commands/BatchDeleteClusterSnapshotsCommand";
import {
  BatchModifyClusterSnapshotsCommandInput,
  BatchModifyClusterSnapshotsCommandOutput,
} from "../commands/BatchModifyClusterSnapshotsCommand";
import { CancelResizeCommandInput, CancelResizeCommandOutput } from "../commands/CancelResizeCommand";
import {
  CopyClusterSnapshotCommandInput,
  CopyClusterSnapshotCommandOutput,
} from "../commands/CopyClusterSnapshotCommand";
import {
  CreateAuthenticationProfileCommandInput,
  CreateAuthenticationProfileCommandOutput,
} from "../commands/CreateAuthenticationProfileCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateClusterParameterGroupCommandInput,
  CreateClusterParameterGroupCommandOutput,
} from "../commands/CreateClusterParameterGroupCommand";
import {
  CreateClusterSecurityGroupCommandInput,
  CreateClusterSecurityGroupCommandOutput,
} from "../commands/CreateClusterSecurityGroupCommand";
import {
  CreateClusterSnapshotCommandInput,
  CreateClusterSnapshotCommandOutput,
} from "../commands/CreateClusterSnapshotCommand";
import {
  CreateClusterSubnetGroupCommandInput,
  CreateClusterSubnetGroupCommandOutput,
} from "../commands/CreateClusterSubnetGroupCommand";
import {
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "../commands/CreateEndpointAccessCommand";
import {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "../commands/CreateEventSubscriptionCommand";
import {
  CreateHsmClientCertificateCommandInput,
  CreateHsmClientCertificateCommandOutput,
} from "../commands/CreateHsmClientCertificateCommand";
import {
  CreateHsmConfigurationCommandInput,
  CreateHsmConfigurationCommandOutput,
} from "../commands/CreateHsmConfigurationCommand";
import {
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
} from "../commands/CreateScheduledActionCommand";
import {
  CreateSnapshotCopyGrantCommandInput,
  CreateSnapshotCopyGrantCommandOutput,
} from "../commands/CreateSnapshotCopyGrantCommand";
import {
  CreateSnapshotScheduleCommandInput,
  CreateSnapshotScheduleCommandOutput,
} from "../commands/CreateSnapshotScheduleCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput } from "../commands/CreateUsageLimitCommand";
import {
  DeauthorizeDataShareCommandInput,
  DeauthorizeDataShareCommandOutput,
} from "../commands/DeauthorizeDataShareCommand";
import {
  DeleteAuthenticationProfileCommandInput,
  DeleteAuthenticationProfileCommandOutput,
} from "../commands/DeleteAuthenticationProfileCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteClusterParameterGroupCommandInput,
  DeleteClusterParameterGroupCommandOutput,
} from "../commands/DeleteClusterParameterGroupCommand";
import {
  DeleteClusterSecurityGroupCommandInput,
  DeleteClusterSecurityGroupCommandOutput,
} from "../commands/DeleteClusterSecurityGroupCommand";
import {
  DeleteClusterSnapshotCommandInput,
  DeleteClusterSnapshotCommandOutput,
} from "../commands/DeleteClusterSnapshotCommand";
import {
  DeleteClusterSubnetGroupCommandInput,
  DeleteClusterSubnetGroupCommandOutput,
} from "../commands/DeleteClusterSubnetGroupCommand";
import {
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "../commands/DeleteEndpointAccessCommand";
import {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "../commands/DeleteEventSubscriptionCommand";
import {
  DeleteHsmClientCertificateCommandInput,
  DeleteHsmClientCertificateCommandOutput,
} from "../commands/DeleteHsmClientCertificateCommand";
import {
  DeleteHsmConfigurationCommandInput,
  DeleteHsmConfigurationCommandOutput,
} from "../commands/DeleteHsmConfigurationCommand";
import { DeletePartnerCommandInput, DeletePartnerCommandOutput } from "../commands/DeletePartnerCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "../commands/DeleteScheduledActionCommand";
import {
  DeleteSnapshotCopyGrantCommandInput,
  DeleteSnapshotCopyGrantCommandOutput,
} from "../commands/DeleteSnapshotCopyGrantCommand";
import {
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "../commands/DeleteSnapshotScheduleCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput } from "../commands/DeleteUsageLimitCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "../commands/DescribeAccountAttributesCommand";
import {
  DescribeAuthenticationProfilesCommandInput,
  DescribeAuthenticationProfilesCommandOutput,
} from "../commands/DescribeAuthenticationProfilesCommand";
import {
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
} from "../commands/DescribeClusterDbRevisionsCommand";
import {
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput,
} from "../commands/DescribeClusterParameterGroupsCommand";
import {
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
} from "../commands/DescribeClusterParametersCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import {
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
} from "../commands/DescribeClusterSecurityGroupsCommand";
import {
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
} from "../commands/DescribeClusterSnapshotsCommand";
import {
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "../commands/DescribeClusterSubnetGroupsCommand";
import {
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
} from "../commands/DescribeClusterTracksCommand";
import {
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "../commands/DescribeClusterVersionsCommand";
import { DescribeDataSharesCommandInput, DescribeDataSharesCommandOutput } from "../commands/DescribeDataSharesCommand";
import {
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput,
} from "../commands/DescribeDataSharesForConsumerCommand";
import {
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput,
} from "../commands/DescribeDataSharesForProducerCommand";
import {
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
} from "../commands/DescribeDefaultClusterParametersCommand";
import {
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput,
} from "../commands/DescribeEndpointAccessCommand";
import {
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput,
} from "../commands/DescribeEndpointAuthorizationCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "../commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import {
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
} from "../commands/DescribeHsmClientCertificatesCommand";
import {
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
} from "../commands/DescribeHsmConfigurationsCommand";
import {
  DescribeLoggingStatusCommandInput,
  DescribeLoggingStatusCommandOutput,
} from "../commands/DescribeLoggingStatusCommand";
import {
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
} from "../commands/DescribeNodeConfigurationOptionsCommand";
import {
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput,
} from "../commands/DescribeOrderableClusterOptionsCommand";
import { DescribePartnersCommandInput, DescribePartnersCommandOutput } from "../commands/DescribePartnersCommand";
import {
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput,
} from "../commands/DescribeReservedNodeExchangeStatusCommand";
import {
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
} from "../commands/DescribeReservedNodeOfferingsCommand";
import {
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "../commands/DescribeReservedNodesCommand";
import { DescribeResizeCommandInput, DescribeResizeCommandOutput } from "../commands/DescribeResizeCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import {
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
} from "../commands/DescribeSnapshotCopyGrantsCommand";
import {
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
} from "../commands/DescribeSnapshotSchedulesCommand";
import { DescribeStorageCommandInput, DescribeStorageCommandOutput } from "../commands/DescribeStorageCommand";
import {
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
} from "../commands/DescribeTableRestoreStatusCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
} from "../commands/DescribeUsageLimitsCommand";
import { DisableLoggingCommandInput, DisableLoggingCommandOutput } from "../commands/DisableLoggingCommand";
import {
  DisableSnapshotCopyCommandInput,
  DisableSnapshotCopyCommandOutput,
} from "../commands/DisableSnapshotCopyCommand";
import {
  DisassociateDataShareConsumerCommandInput,
  DisassociateDataShareConsumerCommandOutput,
} from "../commands/DisassociateDataShareConsumerCommand";
import { EnableLoggingCommandInput, EnableLoggingCommandOutput } from "../commands/EnableLoggingCommand";
import { EnableSnapshotCopyCommandInput, EnableSnapshotCopyCommandOutput } from "../commands/EnableSnapshotCopyCommand";
import {
  GetClusterCredentialsCommandInput,
  GetClusterCredentialsCommandOutput,
} from "../commands/GetClusterCredentialsCommand";
import {
  GetClusterCredentialsWithIAMCommandInput,
  GetClusterCredentialsWithIAMCommandOutput,
} from "../commands/GetClusterCredentialsWithIAMCommand";
import {
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput,
} from "../commands/GetReservedNodeExchangeConfigurationOptionsCommand";
import {
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
} from "../commands/GetReservedNodeExchangeOfferingsCommand";
import {
  ModifyAquaConfigurationCommandInput,
  ModifyAquaConfigurationCommandOutput,
} from "../commands/ModifyAquaConfigurationCommand";
import {
  ModifyAuthenticationProfileCommandInput,
  ModifyAuthenticationProfileCommandOutput,
} from "../commands/ModifyAuthenticationProfileCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "../commands/ModifyClusterCommand";
import {
  ModifyClusterDbRevisionCommandInput,
  ModifyClusterDbRevisionCommandOutput,
} from "../commands/ModifyClusterDbRevisionCommand";
import {
  ModifyClusterIamRolesCommandInput,
  ModifyClusterIamRolesCommandOutput,
} from "../commands/ModifyClusterIamRolesCommand";
import {
  ModifyClusterMaintenanceCommandInput,
  ModifyClusterMaintenanceCommandOutput,
} from "../commands/ModifyClusterMaintenanceCommand";
import {
  ModifyClusterParameterGroupCommandInput,
  ModifyClusterParameterGroupCommandOutput,
} from "../commands/ModifyClusterParameterGroupCommand";
import {
  ModifyClusterSnapshotCommandInput,
  ModifyClusterSnapshotCommandOutput,
} from "../commands/ModifyClusterSnapshotCommand";
import {
  ModifyClusterSnapshotScheduleCommandInput,
  ModifyClusterSnapshotScheduleCommandOutput,
} from "../commands/ModifyClusterSnapshotScheduleCommand";
import {
  ModifyClusterSubnetGroupCommandInput,
  ModifyClusterSubnetGroupCommandOutput,
} from "../commands/ModifyClusterSubnetGroupCommand";
import {
  ModifyEndpointAccessCommandInput,
  ModifyEndpointAccessCommandOutput,
} from "../commands/ModifyEndpointAccessCommand";
import {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "../commands/ModifyEventSubscriptionCommand";
import {
  ModifyScheduledActionCommandInput,
  ModifyScheduledActionCommandOutput,
} from "../commands/ModifyScheduledActionCommand";
import {
  ModifySnapshotCopyRetentionPeriodCommandInput,
  ModifySnapshotCopyRetentionPeriodCommandOutput,
} from "../commands/ModifySnapshotCopyRetentionPeriodCommand";
import {
  ModifySnapshotScheduleCommandInput,
  ModifySnapshotScheduleCommandOutput,
} from "../commands/ModifySnapshotScheduleCommand";
import { ModifyUsageLimitCommandInput, ModifyUsageLimitCommandOutput } from "../commands/ModifyUsageLimitCommand";
import { PauseClusterCommandInput, PauseClusterCommandOutput } from "../commands/PauseClusterCommand";
import {
  PurchaseReservedNodeOfferingCommandInput,
  PurchaseReservedNodeOfferingCommandOutput,
} from "../commands/PurchaseReservedNodeOfferingCommand";
import { RebootClusterCommandInput, RebootClusterCommandOutput } from "../commands/RebootClusterCommand";
import { RejectDataShareCommandInput, RejectDataShareCommandOutput } from "../commands/RejectDataShareCommand";
import {
  ResetClusterParameterGroupCommandInput,
  ResetClusterParameterGroupCommandOutput,
} from "../commands/ResetClusterParameterGroupCommand";
import { ResizeClusterCommandInput, ResizeClusterCommandOutput } from "../commands/ResizeClusterCommand";
import {
  RestoreFromClusterSnapshotCommandInput,
  RestoreFromClusterSnapshotCommandOutput,
} from "../commands/RestoreFromClusterSnapshotCommand";
import {
  RestoreTableFromClusterSnapshotCommandInput,
  RestoreTableFromClusterSnapshotCommandOutput,
} from "../commands/RestoreTableFromClusterSnapshotCommand";
import { ResumeClusterCommandInput, ResumeClusterCommandOutput } from "../commands/ResumeClusterCommand";
import {
  RevokeClusterSecurityGroupIngressCommandInput,
  RevokeClusterSecurityGroupIngressCommandOutput,
} from "../commands/RevokeClusterSecurityGroupIngressCommand";
import {
  RevokeEndpointAccessCommandInput,
  RevokeEndpointAccessCommandOutput,
} from "../commands/RevokeEndpointAccessCommand";
import {
  RevokeSnapshotAccessCommandInput,
  RevokeSnapshotAccessCommandOutput,
} from "../commands/RevokeSnapshotAccessCommand";
import {
  RotateEncryptionKeyCommandInput,
  RotateEncryptionKeyCommandOutput,
} from "../commands/RotateEncryptionKeyCommand";
import {
  UpdatePartnerStatusCommandInput,
  UpdatePartnerStatusCommandOutput,
} from "../commands/UpdatePartnerStatusCommand";
import {
  AcceptReservedNodeExchangeInputMessage,
  AcceptReservedNodeExchangeOutputMessage,
  AccessToClusterDeniedFault,
  AccessToSnapshotDeniedFault,
  AccountAttribute,
  AccountAttributeList,
  AccountWithRestoreAccess,
  AquaConfiguration,
  AssociateDataShareConsumerMessage,
  AttributeValueTarget,
  AuthenticationProfile,
  AuthenticationProfileAlreadyExistsFault,
  AuthenticationProfileNotFoundFault,
  AuthenticationProfileQuotaExceededFault,
  AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault,
  AuthorizationQuotaExceededFault,
  AuthorizeClusterSecurityGroupIngressMessage,
  AuthorizeClusterSecurityGroupIngressResult,
  AuthorizeDataShareMessage,
  AuthorizeEndpointAccessMessage,
  AuthorizeSnapshotAccessMessage,
  AuthorizeSnapshotAccessResult,
  AvailabilityZone,
  BatchDeleteClusterSnapshotsRequest,
  BatchDeleteClusterSnapshotsResult,
  BatchDeleteRequestSizeExceededFault,
  BatchModifyClusterSnapshotsLimitExceededFault,
  BatchModifyClusterSnapshotsMessage,
  BatchModifyClusterSnapshotsOutputMessage,
  BucketNotFoundFault,
  CancelResizeMessage,
  Cluster,
  ClusterAlreadyExistsFault,
  ClusterAssociatedToSchedule,
  ClusterCredentials,
  ClusterDbRevision,
  ClusterDbRevisionsMessage,
  ClusterExtendedCredentials,
  ClusterIamRole,
  ClusterNode,
  ClusterNotFoundFault,
  ClusterOnLatestRevisionFault,
  ClusterParameterGroup,
  ClusterParameterGroupAlreadyExistsFault,
  ClusterParameterGroupDetails,
  ClusterParameterGroupNameMessage,
  ClusterParameterGroupNotFoundFault,
  ClusterParameterGroupQuotaExceededFault,
  ClusterParameterGroupsMessage,
  ClusterParameterGroupStatus,
  ClusterParameterStatus,
  ClusterQuotaExceededFault,
  ClusterSecurityGroup,
  ClusterSecurityGroupAlreadyExistsFault,
  ClusterSecurityGroupMembership,
  ClusterSecurityGroupMessage,
  ClusterSecurityGroupNotFoundFault,
  ClusterSecurityGroupQuotaExceededFault,
  ClustersMessage,
  ClusterSnapshotAlreadyExistsFault,
  ClusterSnapshotCopyStatus,
  ClusterSnapshotNotFoundFault,
  ClusterSnapshotQuotaExceededFault,
  ClusterSubnetGroup,
  ClusterSubnetGroupAlreadyExistsFault,
  ClusterSubnetGroupMessage,
  ClusterSubnetGroupNotFoundFault,
  ClusterSubnetGroupQuotaExceededFault,
  ClusterSubnetQuotaExceededFault,
  ClusterVersion,
  ClusterVersionsMessage,
  CopyClusterSnapshotMessage,
  CopyClusterSnapshotResult,
  CopyToRegionDisabledFault,
  CreateAuthenticationProfileMessage,
  CreateAuthenticationProfileResult,
  CreateClusterMessage,
  CreateClusterParameterGroupMessage,
  CreateClusterParameterGroupResult,
  CreateClusterResult,
  CreateClusterSecurityGroupMessage,
  CreateClusterSecurityGroupResult,
  CreateClusterSnapshotMessage,
  CreateClusterSnapshotResult,
  CreateClusterSubnetGroupMessage,
  CreateClusterSubnetGroupResult,
  CreateEndpointAccessMessage,
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionResult,
  CreateHsmClientCertificateMessage,
  CreateHsmClientCertificateResult,
  CreateHsmConfigurationMessage,
  CreateHsmConfigurationResult,
  CreateScheduledActionMessage,
  CreateSnapshotCopyGrantMessage,
  CreateSnapshotCopyGrantResult,
  CreateSnapshotScheduleMessage,
  CreateTagsMessage,
  CreateUsageLimitMessage,
  CustomerStorageMessage,
  DataShare,
  DataShareAssociation,
  DataTransferProgress,
  DeauthorizeDataShareMessage,
  DefaultClusterParameters,
  DeferredMaintenanceWindow,
  DeleteAuthenticationProfileMessage,
  DeleteAuthenticationProfileResult,
  DeleteClusterMessage,
  DeleteClusterParameterGroupMessage,
  DeleteClusterResult,
  DeleteClusterSecurityGroupMessage,
  DeleteClusterSnapshotMessage,
  DeleteClusterSnapshotResult,
  DeleteClusterSubnetGroupMessage,
  DeleteEndpointAccessMessage,
  DeleteEventSubscriptionMessage,
  DeleteHsmClientCertificateMessage,
  DeleteHsmConfigurationMessage,
  DeleteScheduledActionMessage,
  DeleteSnapshotCopyGrantMessage,
  DeleteSnapshotScheduleMessage,
  DeleteTagsMessage,
  DeleteUsageLimitMessage,
  DependentServiceRequestThrottlingFault,
  DependentServiceUnavailableFault,
  DescribeAccountAttributesMessage,
  DescribeAuthenticationProfilesMessage,
  DescribeAuthenticationProfilesResult,
  DescribeClusterDbRevisionsMessage,
  DescribeClusterParameterGroupsMessage,
  DescribeClusterParametersMessage,
  DescribeClusterSecurityGroupsMessage,
  DescribeClustersMessage,
  DescribeClusterSnapshotsMessage,
  DescribeClusterSubnetGroupsMessage,
  DescribeClusterTracksMessage,
  DescribeClusterVersionsMessage,
  DescribeDataSharesForConsumerMessage,
  DescribeDataSharesForConsumerResult,
  DescribeDataSharesForProducerMessage,
  DescribeDataSharesForProducerResult,
  DescribeDataSharesMessage,
  DescribeDataSharesResult,
  DescribeDefaultClusterParametersMessage,
  DescribeDefaultClusterParametersResult,
  DescribeEndpointAccessMessage,
  DescribeEndpointAuthorizationMessage,
  DescribeEventCategoriesMessage,
  DescribeEventsMessage,
  DescribeEventSubscriptionsMessage,
  DescribeHsmClientCertificatesMessage,
  EC2SecurityGroup,
  ElasticIpStatus,
  Endpoint,
  EndpointAccess,
  EndpointAccessList,
  EndpointAlreadyExistsFault,
  EndpointAuthorization,
  EndpointAuthorizationAlreadyExistsFault,
  EndpointAuthorizationList,
  EndpointAuthorizationsPerClusterLimitExceededFault,
  EndpointNotFoundFault,
  EndpointsPerAuthorizationLimitExceededFault,
  EndpointsPerClusterLimitExceededFault,
  Event,
  EventCategoriesMap,
  EventCategoriesMessage,
  EventInfoMap,
  EventsMessage,
  EventSubscription,
  EventSubscriptionQuotaExceededFault,
  EventSubscriptionsMessage,
  HsmClientCertificate,
  HsmClientCertificateAlreadyExistsFault,
  HsmClientCertificateMessage,
  HsmClientCertificateNotFoundFault,
  HsmClientCertificateQuotaExceededFault,
  HsmConfiguration,
  HsmConfigurationAlreadyExistsFault,
  HsmConfigurationNotFoundFault,
  HsmConfigurationQuotaExceededFault,
  HsmStatus,
  InsufficientClusterCapacityFault,
  InvalidAuthenticationProfileRequestFault,
  InvalidAuthorizationStateFault,
  InvalidClusterParameterGroupStateFault,
  InvalidClusterSecurityGroupStateFault,
  InvalidClusterSnapshotScheduleStateFault,
  InvalidClusterSnapshotStateFault,
  InvalidClusterStateFault,
  InvalidClusterSubnetGroupStateFault,
  InvalidClusterSubnetStateFault,
  InvalidClusterTrackFault,
  InvalidDataShareFault,
  InvalidElasticIpFault,
  InvalidEndpointStateFault,
  InvalidHsmClientCertificateStateFault,
  InvalidHsmConfigurationStateFault,
  InvalidNamespaceFault,
  InvalidReservedNodeStateFault,
  InvalidRetentionPeriodFault,
  InvalidScheduledActionFault,
  InvalidScheduleFault,
  InvalidSnapshotCopyGrantStateFault,
  InvalidSubnet,
  InvalidSubscriptionStateFault,
  InvalidTagFault,
  InvalidUsageLimitFault,
  InvalidVPCNetworkStateFault,
  IPRange,
  LimitExceededFault,
  MaintenanceTrack,
  NetworkInterface,
  NumberOfNodesPerClusterLimitExceededFault,
  NumberOfNodesQuotaExceededFault,
  Parameter,
  PartnerIntegrationInputMessage,
  PartnerIntegrationOutputMessage,
  PartnerNotFoundFault,
  PauseClusterMessage,
  PendingModifiedValues,
  RecurringCharge,
  ReservedNode,
  ReservedNodeAlreadyExistsFault,
  ReservedNodeAlreadyMigratedFault,
  ReservedNodeExchangeStatus,
  ReservedNodeNotFoundFault,
  ReservedNodeOfferingNotFoundFault,
  ResizeClusterMessage,
  ResizeInfo,
  ResizeNotFoundFault,
  ResizeProgressMessage,
  ResourceNotFoundFault,
  RestoreStatus,
  ResumeClusterMessage,
  RevisionTarget,
  ScheduledAction,
  ScheduledActionAlreadyExistsFault,
  ScheduledActionNotFoundFault,
  ScheduledActionQuotaExceededFault,
  ScheduledActionType,
  ScheduledActionTypeUnsupportedFault,
  ScheduleDefinitionTypeUnsupportedFault,
  Snapshot,
  SnapshotCopyGrant,
  SnapshotCopyGrantAlreadyExistsFault,
  SnapshotCopyGrantNotFoundFault,
  SnapshotCopyGrantQuotaExceededFault,
  SnapshotErrorMessage,
  SnapshotMessage,
  SnapshotSchedule,
  SnapshotScheduleAlreadyExistsFault,
  SnapshotScheduleNotFoundFault,
  SnapshotScheduleQuotaExceededFault,
  SnapshotSortingEntity,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault,
  SourceNotFoundFault,
  Subnet,
  SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault,
  SubscriptionEventIdNotFoundFault,
  SubscriptionNotFoundFault,
  SubscriptionSeverityNotFoundFault,
  SupportedOperation,
  SupportedPlatform,
  Tag,
  TagLimitExceededFault,
  TrackListMessage,
  UnauthorizedOperation,
  UnauthorizedPartnerIntegrationFault,
  UnsupportedOperationFault,
  UpdateTarget,
  UsageLimit,
  UsageLimitAlreadyExistsFault,
  UsageLimitNotFoundFault,
  VpcEndpoint,
  VpcSecurityGroupMembership,
} from "../models/models_0";
import {
  DescribeHsmConfigurationsMessage,
  DescribeLoggingStatusMessage,
  DescribeNodeConfigurationOptionsMessage,
  DescribeOrderableClusterOptionsMessage,
  DescribePartnersInputMessage,
  DescribePartnersOutputMessage,
  DescribeReservedNodeExchangeStatusInputMessage,
  DescribeReservedNodeExchangeStatusOutputMessage,
  DescribeReservedNodeOfferingsMessage,
  DescribeReservedNodesMessage,
  DescribeResizeMessage,
  DescribeScheduledActionsMessage,
  DescribeSnapshotCopyGrantsMessage,
  DescribeSnapshotSchedulesMessage,
  DescribeSnapshotSchedulesOutputMessage,
  DescribeTableRestoreStatusMessage,
  DescribeTagsMessage,
  DescribeUsageLimitsMessage,
  DisableLoggingMessage,
  DisableSnapshotCopyMessage,
  DisableSnapshotCopyResult,
  DisassociateDataShareConsumerMessage,
  EnableLoggingMessage,
  EnableSnapshotCopyMessage,
  EnableSnapshotCopyResult,
  EndpointAuthorizationNotFoundFault,
  GetClusterCredentialsMessage,
  GetClusterCredentialsWithIAMMessage,
  GetReservedNodeExchangeConfigurationOptionsInputMessage,
  GetReservedNodeExchangeConfigurationOptionsOutputMessage,
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsOutputMessage,
  HsmConfigurationMessage,
  IncompatibleOrderableOptions,
  InProgressTableRestoreQuotaExceededFault,
  InsufficientS3BucketPolicyFault,
  InvalidRestoreFault,
  InvalidS3BucketNameFault,
  InvalidS3KeyPrefixFault,
  InvalidTableRestoreArgumentFault,
  LoggingStatus,
  ModifyAquaInputMessage,
  ModifyAquaOutputMessage,
  ModifyAuthenticationProfileMessage,
  ModifyAuthenticationProfileResult,
  ModifyClusterDbRevisionMessage,
  ModifyClusterDbRevisionResult,
  ModifyClusterIamRolesMessage,
  ModifyClusterIamRolesResult,
  ModifyClusterMaintenanceMessage,
  ModifyClusterMaintenanceResult,
  ModifyClusterMessage,
  ModifyClusterParameterGroupMessage,
  ModifyClusterResult,
  ModifyClusterSnapshotMessage,
  ModifyClusterSnapshotResult,
  ModifyClusterSnapshotScheduleMessage,
  ModifyClusterSubnetGroupMessage,
  ModifyClusterSubnetGroupResult,
  ModifyEndpointAccessMessage,
  ModifyEventSubscriptionMessage,
  ModifyEventSubscriptionResult,
  ModifyScheduledActionMessage,
  ModifySnapshotCopyRetentionPeriodMessage,
  ModifySnapshotCopyRetentionPeriodResult,
  ModifySnapshotScheduleMessage,
  ModifyUsageLimitMessage,
  NodeConfigurationOption,
  NodeConfigurationOptionsFilter,
  NodeConfigurationOptionsMessage,
  OrderableClusterOption,
  OrderableClusterOptionsMessage,
  PartnerIntegrationInfo,
  PauseClusterResult,
  PurchaseReservedNodeOfferingMessage,
  PurchaseReservedNodeOfferingResult,
  RebootClusterMessage,
  RebootClusterResult,
  RejectDataShareMessage,
  ReservedNodeConfigurationOption,
  ReservedNodeExchangeNotFoundFault,
  ReservedNodeOffering,
  ReservedNodeOfferingsMessage,
  ReservedNodeQuotaExceededFault,
  ReservedNodesMessage,
  ResetClusterParameterGroupMessage,
  ResizeClusterResult,
  RestoreFromClusterSnapshotMessage,
  RestoreFromClusterSnapshotResult,
  RestoreTableFromClusterSnapshotMessage,
  RestoreTableFromClusterSnapshotResult,
  ResumeClusterResult,
  RevokeClusterSecurityGroupIngressMessage,
  RevokeClusterSecurityGroupIngressResult,
  RevokeEndpointAccessMessage,
  RevokeSnapshotAccessMessage,
  RevokeSnapshotAccessResult,
  RotateEncryptionKeyMessage,
  RotateEncryptionKeyResult,
  ScheduledActionFilter,
  ScheduledActionsMessage,
  SnapshotCopyAlreadyDisabledFault,
  SnapshotCopyAlreadyEnabledFault,
  SnapshotCopyDisabledFault,
  SnapshotCopyGrantMessage,
  SnapshotScheduleUpdateInProgressFault,
  SubnetAlreadyInUse,
  TableLimitExceededFault,
  TableRestoreNotFoundFault,
  TableRestoreStatus,
  TableRestoreStatusMessage,
  TaggedResource,
  TaggedResourceListMessage,
  UnknownSnapshotCopyRegionFault,
  UnsupportedOptionFault,
  UpdatePartnerStatusInputMessage,
  UsageLimitList,
} from "../models/models_1";
import { RedshiftServiceException as __BaseException } from "../models/RedshiftServiceException";

export const serializeAws_queryAcceptReservedNodeExchangeCommand = async (
  input: AcceptReservedNodeExchangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAcceptReservedNodeExchangeInputMessage(input, context),
    Action: "AcceptReservedNodeExchange",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAddPartnerCommand = async (
  input: AddPartnerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPartnerIntegrationInputMessage(input, context),
    Action: "AddPartner",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAssociateDataShareConsumerCommand = async (
  input: AssociateDataShareConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAssociateDataShareConsumerMessage(input, context),
    Action: "AssociateDataShareConsumer",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = async (
  input: AuthorizeClusterSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage(input, context),
    Action: "AuthorizeClusterSecurityGroupIngress",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAuthorizeDataShareCommand = async (
  input: AuthorizeDataShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAuthorizeDataShareMessage(input, context),
    Action: "AuthorizeDataShare",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAuthorizeEndpointAccessCommand = async (
  input: AuthorizeEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAuthorizeEndpointAccessMessage(input, context),
    Action: "AuthorizeEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAuthorizeSnapshotAccessCommand = async (
  input: AuthorizeSnapshotAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAuthorizeSnapshotAccessMessage(input, context),
    Action: "AuthorizeSnapshotAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchDeleteClusterSnapshotsCommand = async (
  input: BatchDeleteClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchDeleteClusterSnapshotsRequest(input, context),
    Action: "BatchDeleteClusterSnapshots",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchModifyClusterSnapshotsCommand = async (
  input: BatchModifyClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchModifyClusterSnapshotsMessage(input, context),
    Action: "BatchModifyClusterSnapshots",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCancelResizeCommand = async (
  input: CancelResizeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCancelResizeMessage(input, context),
    Action: "CancelResize",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCopyClusterSnapshotCommand = async (
  input: CopyClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCopyClusterSnapshotMessage(input, context),
    Action: "CopyClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateAuthenticationProfileCommand = async (
  input: CreateAuthenticationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateAuthenticationProfileMessage(input, context),
    Action: "CreateAuthenticationProfile",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateClusterMessage(input, context),
    Action: "CreateCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateClusterParameterGroupCommand = async (
  input: CreateClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateClusterParameterGroupMessage(input, context),
    Action: "CreateClusterParameterGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateClusterSecurityGroupCommand = async (
  input: CreateClusterSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateClusterSecurityGroupMessage(input, context),
    Action: "CreateClusterSecurityGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateClusterSnapshotCommand = async (
  input: CreateClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateClusterSnapshotMessage(input, context),
    Action: "CreateClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateClusterSubnetGroupCommand = async (
  input: CreateClusterSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateClusterSubnetGroupMessage(input, context),
    Action: "CreateClusterSubnetGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateEndpointAccessCommand = async (
  input: CreateEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateEndpointAccessMessage(input, context),
    Action: "CreateEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateEventSubscriptionCommand = async (
  input: CreateEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateEventSubscriptionMessage(input, context),
    Action: "CreateEventSubscription",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateHsmClientCertificateCommand = async (
  input: CreateHsmClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateHsmClientCertificateMessage(input, context),
    Action: "CreateHsmClientCertificate",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateHsmConfigurationCommand = async (
  input: CreateHsmConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateHsmConfigurationMessage(input, context),
    Action: "CreateHsmConfiguration",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateScheduledActionCommand = async (
  input: CreateScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateScheduledActionMessage(input, context),
    Action: "CreateScheduledAction",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateSnapshotCopyGrantCommand = async (
  input: CreateSnapshotCopyGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateSnapshotCopyGrantMessage(input, context),
    Action: "CreateSnapshotCopyGrant",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateSnapshotScheduleCommand = async (
  input: CreateSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateSnapshotScheduleMessage(input, context),
    Action: "CreateSnapshotSchedule",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateTagsMessage(input, context),
    Action: "CreateTags",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateUsageLimitCommand = async (
  input: CreateUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateUsageLimitMessage(input, context),
    Action: "CreateUsageLimit",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeauthorizeDataShareCommand = async (
  input: DeauthorizeDataShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeauthorizeDataShareMessage(input, context),
    Action: "DeauthorizeDataShare",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAuthenticationProfileCommand = async (
  input: DeleteAuthenticationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAuthenticationProfileMessage(input, context),
    Action: "DeleteAuthenticationProfile",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteClusterMessage(input, context),
    Action: "DeleteCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteClusterParameterGroupCommand = async (
  input: DeleteClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteClusterParameterGroupMessage(input, context),
    Action: "DeleteClusterParameterGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteClusterSecurityGroupCommand = async (
  input: DeleteClusterSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteClusterSecurityGroupMessage(input, context),
    Action: "DeleteClusterSecurityGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteClusterSnapshotCommand = async (
  input: DeleteClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteClusterSnapshotMessage(input, context),
    Action: "DeleteClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteClusterSubnetGroupCommand = async (
  input: DeleteClusterSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteClusterSubnetGroupMessage(input, context),
    Action: "DeleteClusterSubnetGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteEndpointAccessCommand = async (
  input: DeleteEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteEndpointAccessMessage(input, context),
    Action: "DeleteEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteEventSubscriptionCommand = async (
  input: DeleteEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteEventSubscriptionMessage(input, context),
    Action: "DeleteEventSubscription",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteHsmClientCertificateCommand = async (
  input: DeleteHsmClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteHsmClientCertificateMessage(input, context),
    Action: "DeleteHsmClientCertificate",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteHsmConfigurationCommand = async (
  input: DeleteHsmConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteHsmConfigurationMessage(input, context),
    Action: "DeleteHsmConfiguration",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeletePartnerCommand = async (
  input: DeletePartnerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPartnerIntegrationInputMessage(input, context),
    Action: "DeletePartner",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteScheduledActionMessage(input, context),
    Action: "DeleteScheduledAction",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSnapshotCopyGrantCommand = async (
  input: DeleteSnapshotCopyGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSnapshotCopyGrantMessage(input, context),
    Action: "DeleteSnapshotCopyGrant",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSnapshotScheduleCommand = async (
  input: DeleteSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSnapshotScheduleMessage(input, context),
    Action: "DeleteSnapshotSchedule",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteTagsMessage(input, context),
    Action: "DeleteTags",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteUsageLimitCommand = async (
  input: DeleteUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteUsageLimitMessage(input, context),
    Action: "DeleteUsageLimit",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAccountAttributesMessage(input, context),
    Action: "DescribeAccountAttributes",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAuthenticationProfilesCommand = async (
  input: DescribeAuthenticationProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAuthenticationProfilesMessage(input, context),
    Action: "DescribeAuthenticationProfiles",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClusterDbRevisionsCommand = async (
  input: DescribeClusterDbRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClusterDbRevisionsMessage(input, context),
    Action: "DescribeClusterDbRevisions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClusterParameterGroupsCommand = async (
  input: DescribeClusterParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClusterParameterGroupsMessage(input, context),
    Action: "DescribeClusterParameterGroups",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClusterParametersCommand = async (
  input: DescribeClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClusterParametersMessage(input, context),
    Action: "DescribeClusterParameters",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClustersMessage(input, context),
    Action: "DescribeClusters",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClusterSecurityGroupsCommand = async (
  input: DescribeClusterSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClusterSecurityGroupsMessage(input, context),
    Action: "DescribeClusterSecurityGroups",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClusterSnapshotsCommand = async (
  input: DescribeClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClusterSnapshotsMessage(input, context),
    Action: "DescribeClusterSnapshots",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClusterSubnetGroupsCommand = async (
  input: DescribeClusterSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClusterSubnetGroupsMessage(input, context),
    Action: "DescribeClusterSubnetGroups",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClusterTracksCommand = async (
  input: DescribeClusterTracksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClusterTracksMessage(input, context),
    Action: "DescribeClusterTracks",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeClusterVersionsCommand = async (
  input: DescribeClusterVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeClusterVersionsMessage(input, context),
    Action: "DescribeClusterVersions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDataSharesCommand = async (
  input: DescribeDataSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDataSharesMessage(input, context),
    Action: "DescribeDataShares",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDataSharesForConsumerCommand = async (
  input: DescribeDataSharesForConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDataSharesForConsumerMessage(input, context),
    Action: "DescribeDataSharesForConsumer",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDataSharesForProducerCommand = async (
  input: DescribeDataSharesForProducerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDataSharesForProducerMessage(input, context),
    Action: "DescribeDataSharesForProducer",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDefaultClusterParametersCommand = async (
  input: DescribeDefaultClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDefaultClusterParametersMessage(input, context),
    Action: "DescribeDefaultClusterParameters",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEndpointAccessCommand = async (
  input: DescribeEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEndpointAccessMessage(input, context),
    Action: "DescribeEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEndpointAuthorizationCommand = async (
  input: DescribeEndpointAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEndpointAuthorizationMessage(input, context),
    Action: "DescribeEndpointAuthorization",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventCategoriesCommand = async (
  input: DescribeEventCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventCategoriesMessage(input, context),
    Action: "DescribeEventCategories",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventsMessage(input, context),
    Action: "DescribeEvents",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventSubscriptionsCommand = async (
  input: DescribeEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventSubscriptionsMessage(input, context),
    Action: "DescribeEventSubscriptions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeHsmClientCertificatesCommand = async (
  input: DescribeHsmClientCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeHsmClientCertificatesMessage(input, context),
    Action: "DescribeHsmClientCertificates",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeHsmConfigurationsCommand = async (
  input: DescribeHsmConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeHsmConfigurationsMessage(input, context),
    Action: "DescribeHsmConfigurations",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoggingStatusCommand = async (
  input: DescribeLoggingStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoggingStatusMessage(input, context),
    Action: "DescribeLoggingStatus",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeNodeConfigurationOptionsCommand = async (
  input: DescribeNodeConfigurationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeNodeConfigurationOptionsMessage(input, context),
    Action: "DescribeNodeConfigurationOptions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeOrderableClusterOptionsCommand = async (
  input: DescribeOrderableClusterOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeOrderableClusterOptionsMessage(input, context),
    Action: "DescribeOrderableClusterOptions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribePartnersCommand = async (
  input: DescribePartnersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribePartnersInputMessage(input, context),
    Action: "DescribePartners",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReservedNodeExchangeStatusCommand = async (
  input: DescribeReservedNodeExchangeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReservedNodeExchangeStatusInputMessage(input, context),
    Action: "DescribeReservedNodeExchangeStatus",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReservedNodeOfferingsCommand = async (
  input: DescribeReservedNodeOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReservedNodeOfferingsMessage(input, context),
    Action: "DescribeReservedNodeOfferings",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeReservedNodesCommand = async (
  input: DescribeReservedNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeReservedNodesMessage(input, context),
    Action: "DescribeReservedNodes",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeResizeCommand = async (
  input: DescribeResizeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeResizeMessage(input, context),
    Action: "DescribeResize",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScheduledActionsCommand = async (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScheduledActionsMessage(input, context),
    Action: "DescribeScheduledActions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeSnapshotCopyGrantsCommand = async (
  input: DescribeSnapshotCopyGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeSnapshotCopyGrantsMessage(input, context),
    Action: "DescribeSnapshotCopyGrants",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeSnapshotSchedulesCommand = async (
  input: DescribeSnapshotSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeSnapshotSchedulesMessage(input, context),
    Action: "DescribeSnapshotSchedules",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStorageCommand = async (
  input: DescribeStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeStorage",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTableRestoreStatusCommand = async (
  input: DescribeTableRestoreStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTableRestoreStatusMessage(input, context),
    Action: "DescribeTableRestoreStatus",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTagsMessage(input, context),
    Action: "DescribeTags",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeUsageLimitsCommand = async (
  input: DescribeUsageLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeUsageLimitsMessage(input, context),
    Action: "DescribeUsageLimits",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableLoggingCommand = async (
  input: DisableLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableLoggingMessage(input, context),
    Action: "DisableLogging",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableSnapshotCopyCommand = async (
  input: DisableSnapshotCopyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableSnapshotCopyMessage(input, context),
    Action: "DisableSnapshotCopy",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisassociateDataShareConsumerCommand = async (
  input: DisassociateDataShareConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisassociateDataShareConsumerMessage(input, context),
    Action: "DisassociateDataShareConsumer",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableLoggingCommand = async (
  input: EnableLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableLoggingMessage(input, context),
    Action: "EnableLogging",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableSnapshotCopyCommand = async (
  input: EnableSnapshotCopyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableSnapshotCopyMessage(input, context),
    Action: "EnableSnapshotCopy",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetClusterCredentialsCommand = async (
  input: GetClusterCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetClusterCredentialsMessage(input, context),
    Action: "GetClusterCredentials",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetClusterCredentialsWithIAMCommand = async (
  input: GetClusterCredentialsWithIAMCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetClusterCredentialsWithIAMMessage(input, context),
    Action: "GetClusterCredentialsWithIAM",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetReservedNodeExchangeConfigurationOptionsCommand = async (
  input: GetReservedNodeExchangeConfigurationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetReservedNodeExchangeConfigurationOptionsInputMessage(input, context),
    Action: "GetReservedNodeExchangeConfigurationOptions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetReservedNodeExchangeOfferingsCommand = async (
  input: GetReservedNodeExchangeOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage(input, context),
    Action: "GetReservedNodeExchangeOfferings",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyAquaConfigurationCommand = async (
  input: ModifyAquaConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyAquaInputMessage(input, context),
    Action: "ModifyAquaConfiguration",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyAuthenticationProfileCommand = async (
  input: ModifyAuthenticationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyAuthenticationProfileMessage(input, context),
    Action: "ModifyAuthenticationProfile",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyClusterMessage(input, context),
    Action: "ModifyCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyClusterDbRevisionCommand = async (
  input: ModifyClusterDbRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyClusterDbRevisionMessage(input, context),
    Action: "ModifyClusterDbRevision",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyClusterIamRolesCommand = async (
  input: ModifyClusterIamRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyClusterIamRolesMessage(input, context),
    Action: "ModifyClusterIamRoles",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyClusterMaintenanceCommand = async (
  input: ModifyClusterMaintenanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyClusterMaintenanceMessage(input, context),
    Action: "ModifyClusterMaintenance",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyClusterParameterGroupCommand = async (
  input: ModifyClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyClusterParameterGroupMessage(input, context),
    Action: "ModifyClusterParameterGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyClusterSnapshotCommand = async (
  input: ModifyClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyClusterSnapshotMessage(input, context),
    Action: "ModifyClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyClusterSnapshotScheduleCommand = async (
  input: ModifyClusterSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyClusterSnapshotScheduleMessage(input, context),
    Action: "ModifyClusterSnapshotSchedule",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyClusterSubnetGroupCommand = async (
  input: ModifyClusterSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyClusterSubnetGroupMessage(input, context),
    Action: "ModifyClusterSubnetGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyEndpointAccessCommand = async (
  input: ModifyEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyEndpointAccessMessage(input, context),
    Action: "ModifyEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyEventSubscriptionCommand = async (
  input: ModifyEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyEventSubscriptionMessage(input, context),
    Action: "ModifyEventSubscription",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyScheduledActionCommand = async (
  input: ModifyScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyScheduledActionMessage(input, context),
    Action: "ModifyScheduledAction",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifySnapshotCopyRetentionPeriodCommand = async (
  input: ModifySnapshotCopyRetentionPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifySnapshotCopyRetentionPeriodMessage(input, context),
    Action: "ModifySnapshotCopyRetentionPeriod",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifySnapshotScheduleCommand = async (
  input: ModifySnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifySnapshotScheduleMessage(input, context),
    Action: "ModifySnapshotSchedule",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyUsageLimitCommand = async (
  input: ModifyUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyUsageLimitMessage(input, context),
    Action: "ModifyUsageLimit",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPauseClusterCommand = async (
  input: PauseClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPauseClusterMessage(input, context),
    Action: "PauseCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPurchaseReservedNodeOfferingCommand = async (
  input: PurchaseReservedNodeOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPurchaseReservedNodeOfferingMessage(input, context),
    Action: "PurchaseReservedNodeOffering",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRebootClusterCommand = async (
  input: RebootClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRebootClusterMessage(input, context),
    Action: "RebootCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRejectDataShareCommand = async (
  input: RejectDataShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRejectDataShareMessage(input, context),
    Action: "RejectDataShare",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResetClusterParameterGroupCommand = async (
  input: ResetClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResetClusterParameterGroupMessage(input, context),
    Action: "ResetClusterParameterGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResizeClusterCommand = async (
  input: ResizeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResizeClusterMessage(input, context),
    Action: "ResizeCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestoreFromClusterSnapshotCommand = async (
  input: RestoreFromClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreFromClusterSnapshotMessage(input, context),
    Action: "RestoreFromClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestoreTableFromClusterSnapshotCommand = async (
  input: RestoreTableFromClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestoreTableFromClusterSnapshotMessage(input, context),
    Action: "RestoreTableFromClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResumeClusterCommand = async (
  input: ResumeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResumeClusterMessage(input, context),
    Action: "ResumeCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRevokeClusterSecurityGroupIngressCommand = async (
  input: RevokeClusterSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRevokeClusterSecurityGroupIngressMessage(input, context),
    Action: "RevokeClusterSecurityGroupIngress",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRevokeEndpointAccessCommand = async (
  input: RevokeEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRevokeEndpointAccessMessage(input, context),
    Action: "RevokeEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRevokeSnapshotAccessCommand = async (
  input: RevokeSnapshotAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRevokeSnapshotAccessMessage(input, context),
    Action: "RevokeSnapshotAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRotateEncryptionKeyCommand = async (
  input: RotateEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRotateEncryptionKeyMessage(input, context),
    Action: "RotateEncryptionKey",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdatePartnerStatusCommand = async (
  input: UpdatePartnerStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdatePartnerStatusInputMessage(input, context),
    Action: "UpdatePartnerStatus",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAcceptReservedNodeExchangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptReservedNodeExchangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAcceptReservedNodeExchangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAcceptReservedNodeExchangeOutputMessage(
    data.AcceptReservedNodeExchangeResult,
    context
  );
  const response: AcceptReservedNodeExchangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAcceptReservedNodeExchangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptReservedNodeExchangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context);
    case "ReservedNodeAlreadyExists":
    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
      throw await deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAddPartnerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPartnerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddPartnerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.AddPartnerResult, context);
  const response: AddPartnerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddPartnerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPartnerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "PartnerNotFound":
    case "com.amazonaws.redshift#PartnerNotFoundFault":
      throw await deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAssociateDataShareConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDataShareConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAssociateDataShareConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDataShare(data.AssociateDataShareConsumerResult, context);
  const response: AssociateDataShareConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAssociateDataShareConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDataShareConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDataShareFault":
    case "com.amazonaws.redshift#InvalidDataShareFault":
      throw await deserializeAws_queryInvalidDataShareFaultResponse(parsedOutput, context);
    case "InvalidNamespaceFault":
    case "com.amazonaws.redshift#InvalidNamespaceFault":
      throw await deserializeAws_queryInvalidNamespaceFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult(
    data.AuthorizeClusterSecurityGroupIngressResult,
    context
  );
  const response: AuthorizeClusterSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationAlreadyExists":
    case "com.amazonaws.redshift#AuthorizationAlreadyExistsFault":
      throw await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context);
    case "AuthorizationQuotaExceeded":
    case "com.amazonaws.redshift#AuthorizationQuotaExceededFault":
      throw await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAuthorizeDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAuthorizeDataShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDataShare(data.AuthorizeDataShareResult, context);
  const response: AuthorizeDataShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAuthorizeDataShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeDataShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDataShareFault":
    case "com.amazonaws.redshift#InvalidDataShareFault":
      throw await deserializeAws_queryInvalidDataShareFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAuthorizeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAuthorizeEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEndpointAuthorization(data.AuthorizeEndpointAccessResult, context);
  const response: AuthorizeEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAuthorizeEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "EndpointAuthorizationAlreadyExists":
    case "com.amazonaws.redshift#EndpointAuthorizationAlreadyExistsFault":
      throw await deserializeAws_queryEndpointAuthorizationAlreadyExistsFaultResponse(parsedOutput, context);
    case "EndpointAuthorizationsPerClusterLimitExceeded":
    case "com.amazonaws.redshift#EndpointAuthorizationsPerClusterLimitExceededFault":
      throw await deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFaultResponse(parsedOutput, context);
    case "InvalidAuthorizationState":
    case "com.amazonaws.redshift#InvalidAuthorizationStateFault":
      throw await deserializeAws_queryInvalidAuthorizationStateFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAuthorizeSnapshotAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeSnapshotAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAuthorizeSnapshotAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAuthorizeSnapshotAccessResult(data.AuthorizeSnapshotAccessResult, context);
  const response: AuthorizeSnapshotAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAuthorizeSnapshotAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeSnapshotAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationAlreadyExists":
    case "com.amazonaws.redshift#AuthorizationAlreadyExistsFault":
      throw await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context);
    case "AuthorizationQuotaExceeded":
    case "com.amazonaws.redshift#AuthorizationQuotaExceededFault":
      throw await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryBatchDeleteClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchDeleteClusterSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBatchDeleteClusterSnapshotsResult(data.BatchDeleteClusterSnapshotsResult, context);
  const response: BatchDeleteClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchDeleteClusterSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteClusterSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchDeleteRequestSizeExceeded":
    case "com.amazonaws.redshift#BatchDeleteRequestSizeExceededFault":
      throw await deserializeAws_queryBatchDeleteRequestSizeExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryBatchModifyClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchModifyClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchModifyClusterSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage(
    data.BatchModifyClusterSnapshotsResult,
    context
  );
  const response: BatchModifyClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchModifyClusterSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchModifyClusterSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchModifyClusterSnapshotsLimitExceededFault":
    case "com.amazonaws.redshift#BatchModifyClusterSnapshotsLimitExceededFault":
      throw await deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCancelResizeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelResizeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCancelResizeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryResizeProgressMessage(data.CancelResizeResult, context);
  const response: CancelResizeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCancelResizeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelResizeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "ResizeNotFound":
    case "com.amazonaws.redshift#ResizeNotFoundFault":
      throw await deserializeAws_queryResizeNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCopyClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCopyClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCopyClusterSnapshotResult(data.CopyClusterSnapshotResult, context);
  const response: CopyClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCopyClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSnapshotAlreadyExists":
    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
      throw await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateAuthenticationProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateAuthenticationProfileResult(data.CreateAuthenticationProfileResult, context);
  const response: CreateAuthenticationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateAuthenticationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthenticationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationProfileAlreadyExistsFault":
    case "com.amazonaws.redshift#AuthenticationProfileAlreadyExistsFault":
      throw await deserializeAws_queryAuthenticationProfileAlreadyExistsFaultResponse(parsedOutput, context);
    case "AuthenticationProfileQuotaExceededFault":
    case "com.amazonaws.redshift#AuthenticationProfileQuotaExceededFault":
      throw await deserializeAws_queryAuthenticationProfileQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await deserializeAws_queryInvalidAuthenticationProfileRequestFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateClusterResult(data.CreateClusterResult, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterAlreadyExists":
    case "com.amazonaws.redshift#ClusterAlreadyExistsFault":
      throw await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ClusterQuotaExceeded":
    case "com.amazonaws.redshift#ClusterQuotaExceededFault":
      throw await deserializeAws_queryClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "HsmClientCertificateNotFoundFault":
    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
      throw await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context);
    case "HsmConfigurationNotFoundFault":
    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
      throw await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidClusterSubnetGroupStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidClusterTrack":
    case "com.amazonaws.redshift#InvalidClusterTrackFault":
      throw await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context);
    case "InvalidElasticIpFault":
    case "com.amazonaws.redshift#InvalidElasticIpFault":
      throw await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.redshift#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateClusterParameterGroupResult(data.CreateClusterParameterGroupResult, context);
  const response: CreateClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterParameterGroupAlreadyExists":
    case "com.amazonaws.redshift#ClusterParameterGroupAlreadyExistsFault":
      throw await deserializeAws_queryClusterParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterParameterGroupQuotaExceeded":
    case "com.amazonaws.redshift#ClusterParameterGroupQuotaExceededFault":
      throw await deserializeAws_queryClusterParameterGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateClusterSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateClusterSecurityGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateClusterSecurityGroupResult(data.CreateClusterSecurityGroupResult, context);
  const response: CreateClusterSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateClusterSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSecurityGroupAlreadyExists":
    case "com.amazonaws.redshift#ClusterSecurityGroupAlreadyExistsFault":
      throw await deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "QuotaExceeded.ClusterSecurityGroup":
    case "com.amazonaws.redshift#ClusterSecurityGroupQuotaExceededFault":
      throw await deserializeAws_queryClusterSecurityGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateClusterSnapshotResult(data.CreateClusterSnapshotResult, context);
  const response: CreateClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotAlreadyExists":
    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterSnapshotQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
      throw await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateClusterSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateClusterSubnetGroupResult(data.CreateClusterSubnetGroupResult, context);
  const response: CreateClusterSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateClusterSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSubnetGroupAlreadyExists":
    case "com.amazonaws.redshift#ClusterSubnetGroupAlreadyExistsFault":
      throw await deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterSubnetGroupQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSubnetGroupQuotaExceededFault":
      throw await deserializeAws_queryClusterSubnetGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "ClusterSubnetQuotaExceededFault":
    case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault":
      throw await deserializeAws_queryClusterSubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEndpointAccess(data.CreateEndpointAccessResult, context);
  const response: CreateEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessToClusterDenied":
    case "com.amazonaws.redshift#AccessToClusterDeniedFault":
      throw await deserializeAws_queryAccessToClusterDeniedFaultResponse(parsedOutput, context);
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "EndpointAlreadyExists":
    case "com.amazonaws.redshift#EndpointAlreadyExistsFault":
      throw await deserializeAws_queryEndpointAlreadyExistsFaultResponse(parsedOutput, context);
    case "EndpointsPerAuthorizationLimitExceeded":
    case "com.amazonaws.redshift#EndpointsPerAuthorizationLimitExceededFault":
      throw await deserializeAws_queryEndpointsPerAuthorizationLimitExceededFaultResponse(parsedOutput, context);
    case "EndpointsPerClusterLimitExceeded":
    case "com.amazonaws.redshift#EndpointsPerClusterLimitExceededFault":
      throw await deserializeAws_queryEndpointsPerClusterLimitExceededFaultResponse(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateEventSubscriptionResult(data.CreateEventSubscriptionResult, context);
  const response: CreateEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventSubscriptionQuotaExceeded":
    case "com.amazonaws.redshift#EventSubscriptionQuotaExceededFault":
      throw await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.redshift#SNSInvalidTopicFault":
      throw await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.redshift#SNSNoAuthorizationFault":
      throw await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.redshift#SNSTopicArnNotFoundFault":
      throw await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context);
    case "SourceNotFound":
    case "com.amazonaws.redshift#SourceNotFoundFault":
      throw await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionAlreadyExist":
    case "com.amazonaws.redshift#SubscriptionAlreadyExistFault":
      throw await deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault":
      throw await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionEventIdNotFound":
    case "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault":
      throw await deserializeAws_querySubscriptionEventIdNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionSeverityNotFound":
    case "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault":
      throw await deserializeAws_querySubscriptionSeverityNotFoundFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateHsmClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmClientCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateHsmClientCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateHsmClientCertificateResult(data.CreateHsmClientCertificateResult, context);
  const response: CreateHsmClientCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateHsmClientCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmClientCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HsmClientCertificateAlreadyExistsFault":
    case "com.amazonaws.redshift#HsmClientCertificateAlreadyExistsFault":
      throw await deserializeAws_queryHsmClientCertificateAlreadyExistsFaultResponse(parsedOutput, context);
    case "HsmClientCertificateQuotaExceededFault":
    case "com.amazonaws.redshift#HsmClientCertificateQuotaExceededFault":
      throw await deserializeAws_queryHsmClientCertificateQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateHsmConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateHsmConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateHsmConfigurationResult(data.CreateHsmConfigurationResult, context);
  const response: CreateHsmConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateHsmConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HsmConfigurationAlreadyExistsFault":
    case "com.amazonaws.redshift#HsmConfigurationAlreadyExistsFault":
      throw await deserializeAws_queryHsmConfigurationAlreadyExistsFaultResponse(parsedOutput, context);
    case "HsmConfigurationQuotaExceededFault":
    case "com.amazonaws.redshift#HsmConfigurationQuotaExceededFault":
      throw await deserializeAws_queryHsmConfigurationQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryScheduledAction(data.CreateScheduledActionResult, context);
  const response: CreateScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSchedule":
    case "com.amazonaws.redshift#InvalidScheduleFault":
      throw await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context);
    case "InvalidScheduledAction":
    case "com.amazonaws.redshift#InvalidScheduledActionFault":
      throw await deserializeAws_queryInvalidScheduledActionFaultResponse(parsedOutput, context);
    case "ScheduledActionAlreadyExists":
    case "com.amazonaws.redshift#ScheduledActionAlreadyExistsFault":
      throw await deserializeAws_queryScheduledActionAlreadyExistsFaultResponse(parsedOutput, context);
    case "ScheduledActionQuotaExceeded":
    case "com.amazonaws.redshift#ScheduledActionQuotaExceededFault":
      throw await deserializeAws_queryScheduledActionQuotaExceededFaultResponse(parsedOutput, context);
    case "ScheduledActionTypeUnsupported":
    case "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault":
      throw await deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateSnapshotCopyGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCopyGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateSnapshotCopyGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateSnapshotCopyGrantResult(data.CreateSnapshotCopyGrantResult, context);
  const response: CreateSnapshotCopyGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateSnapshotCopyGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCopyGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "SnapshotCopyGrantAlreadyExistsFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantAlreadyExistsFault":
      throw await deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultResponse(parsedOutput, context);
    case "SnapshotCopyGrantQuotaExceededFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantQuotaExceededFault":
      throw await deserializeAws_querySnapshotCopyGrantQuotaExceededFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateSnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySnapshotSchedule(data.CreateSnapshotScheduleResult, context);
  const response: CreateSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSchedule":
    case "com.amazonaws.redshift#InvalidScheduleFault":
      throw await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "ScheduleDefinitionTypeUnsupported":
    case "com.amazonaws.redshift#ScheduleDefinitionTypeUnsupportedFault":
      throw await deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultResponse(parsedOutput, context);
    case "SnapshotScheduleAlreadyExists":
    case "com.amazonaws.redshift#SnapshotScheduleAlreadyExistsFault":
      throw await deserializeAws_querySnapshotScheduleAlreadyExistsFaultResponse(parsedOutput, context);
    case "SnapshotScheduleQuotaExceeded":
    case "com.amazonaws.redshift#SnapshotScheduleQuotaExceededFault":
      throw await deserializeAws_querySnapshotScheduleQuotaExceededFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.redshift#ResourceNotFoundFault":
      throw await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUsageLimit(data.CreateUsageLimitResult, context);
  const response: CreateUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateUsageLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidUsageLimit":
    case "com.amazonaws.redshift#InvalidUsageLimitFault":
      throw await deserializeAws_queryInvalidUsageLimitFaultResponse(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    case "UsageLimitAlreadyExists":
    case "com.amazonaws.redshift#UsageLimitAlreadyExistsFault":
      throw await deserializeAws_queryUsageLimitAlreadyExistsFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeauthorizeDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeauthorizeDataShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDataShare(data.DeauthorizeDataShareResult, context);
  const response: DeauthorizeDataShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeauthorizeDataShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeDataShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDataShareFault":
    case "com.amazonaws.redshift#InvalidDataShareFault":
      throw await deserializeAws_queryInvalidDataShareFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteAuthenticationProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteAuthenticationProfileResult(data.DeleteAuthenticationProfileResult, context);
  const response: DeleteAuthenticationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAuthenticationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthenticationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationProfileNotFoundFault":
    case "com.amazonaws.redshift#AuthenticationProfileNotFoundFault":
      throw await deserializeAws_queryAuthenticationProfileNotFoundFaultResponse(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await deserializeAws_queryInvalidAuthenticationProfileRequestFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteClusterResult(data.DeleteClusterResult, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotAlreadyExists":
    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
      throw await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterSnapshotQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
      throw await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteClusterParameterGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterParameterGroupState":
    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
      throw await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteClusterSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteClusterSecurityGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteClusterSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteClusterSnapshotResult(data.DeleteClusterSnapshotResult, context);
  const response: DeleteClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteClusterSubnetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteClusterSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSubnetGroupStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidClusterSubnetStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetStateFault":
      throw await deserializeAws_queryInvalidClusterSubnetStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEndpointAccess(data.DeleteEndpointAccessResult, context);
  const response: DeleteEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidEndpointState":
    case "com.amazonaws.redshift#InvalidEndpointStateFault":
      throw await deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteEventSubscriptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSubscriptionStateFault":
    case "com.amazonaws.redshift#InvalidSubscriptionStateFault":
      throw await deserializeAws_queryInvalidSubscriptionStateFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.redshift#SubscriptionNotFoundFault":
      throw await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteHsmClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmClientCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteHsmClientCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHsmClientCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteHsmClientCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmClientCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HsmClientCertificateNotFoundFault":
    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
      throw await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context);
    case "InvalidHsmClientCertificateStateFault":
    case "com.amazonaws.redshift#InvalidHsmClientCertificateStateFault":
      throw await deserializeAws_queryInvalidHsmClientCertificateStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteHsmConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteHsmConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHsmConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteHsmConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HsmConfigurationNotFoundFault":
    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
      throw await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context);
    case "InvalidHsmConfigurationStateFault":
    case "com.amazonaws.redshift#InvalidHsmConfigurationStateFault":
      throw await deserializeAws_queryInvalidHsmConfigurationStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeletePartnerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeletePartnerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.DeletePartnerResult, context);
  const response: DeletePartnerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeletePartnerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "PartnerNotFound":
    case "com.amazonaws.redshift#PartnerNotFoundFault":
      throw await deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteScheduledActionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ScheduledActionNotFound":
    case "com.amazonaws.redshift#ScheduledActionNotFoundFault":
      throw await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteSnapshotCopyGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCopyGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteSnapshotCopyGrantCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSnapshotCopyGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSnapshotCopyGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCopyGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSnapshotCopyGrantStateFault":
    case "com.amazonaws.redshift#InvalidSnapshotCopyGrantStateFault":
      throw await deserializeAws_queryInvalidSnapshotCopyGrantStateFaultResponse(parsedOutput, context);
    case "SnapshotCopyGrantNotFoundFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
      throw await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteSnapshotScheduleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClusterSnapshotScheduleState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.redshift#ResourceNotFoundFault":
      throw await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteUsageLimitCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteUsageLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    case "UsageLimitNotFound":
    case "com.amazonaws.redshift#UsageLimitNotFoundFault":
      throw await deserializeAws_queryUsageLimitNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAccountAttributeList(data.DescribeAccountAttributesResult, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeAuthenticationProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuthenticationProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAuthenticationProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAuthenticationProfilesResult(
    data.DescribeAuthenticationProfilesResult,
    context
  );
  const response: DescribeAuthenticationProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAuthenticationProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuthenticationProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationProfileNotFoundFault":
    case "com.amazonaws.redshift#AuthenticationProfileNotFoundFault":
      throw await deserializeAws_queryAuthenticationProfileNotFoundFaultResponse(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await deserializeAws_queryInvalidAuthenticationProfileRequestFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClusterDbRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterDbRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClusterDbRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterDbRevisionsMessage(data.DescribeClusterDbRevisionsResult, context);
  const response: DescribeClusterDbRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClusterDbRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterDbRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClusterParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClusterParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterParameterGroupsMessage(data.DescribeClusterParameterGroupsResult, context);
  const response: DescribeClusterParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClusterParameterGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterParameterGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClusterParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterParameterGroupDetails(data.DescribeClusterParametersResult, context);
  const response: DescribeClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClusterParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClustersMessage(data.DescribeClustersResult, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClusterSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClusterSecurityGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterSecurityGroupMessage(data.DescribeClusterSecurityGroupsResult, context);
  const response: DescribeClusterSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClusterSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClusterSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySnapshotMessage(data.DescribeClusterSnapshotsResult, context);
  const response: DescribeClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClusterSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClusterSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClusterSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterSubnetGroupMessage(data.DescribeClusterSubnetGroupsResult, context);
  const response: DescribeClusterSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClusterSubnetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClusterTracksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterTracksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClusterTracksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTrackListMessage(data.DescribeClusterTracksResult, context);
  const response: DescribeClusterTracksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClusterTracksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterTracksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClusterTrack":
    case "com.amazonaws.redshift#InvalidClusterTrackFault":
      throw await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeClusterVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeClusterVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterVersionsMessage(data.DescribeClusterVersionsResult, context);
  const response: DescribeClusterVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeClusterVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeDataSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDataSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDataSharesResult(data.DescribeDataSharesResult, context);
  const response: DescribeDataSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDataSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDataShareFault":
    case "com.amazonaws.redshift#InvalidDataShareFault":
      throw await deserializeAws_queryInvalidDataShareFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeDataSharesForConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesForConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDataSharesForConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDataSharesForConsumerResult(data.DescribeDataSharesForConsumerResult, context);
  const response: DescribeDataSharesForConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDataSharesForConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesForConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNamespaceFault":
    case "com.amazonaws.redshift#InvalidNamespaceFault":
      throw await deserializeAws_queryInvalidNamespaceFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeDataSharesForProducerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesForProducerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDataSharesForProducerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDataSharesForProducerResult(data.DescribeDataSharesForProducerResult, context);
  const response: DescribeDataSharesForProducerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDataSharesForProducerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesForProducerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNamespaceFault":
    case "com.amazonaws.redshift#InvalidNamespaceFault":
      throw await deserializeAws_queryInvalidNamespaceFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeDefaultClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDefaultClusterParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDefaultClusterParametersResult(
    data.DescribeDefaultClusterParametersResult,
    context
  );
  const response: DescribeDefaultClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDefaultClusterParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultClusterParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEndpointAccessList(data.DescribeEndpointAccessResult, context);
  const response: DescribeEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEndpointAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEndpointAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEndpointAuthorizationList(data.DescribeEndpointAuthorizationResult, context);
  const response: DescribeEndpointAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEndpointAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEventCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventCategoriesMessage(data.DescribeEventCategoriesResult, context);
  const response: DescribeEventCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEventCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventsMessage(data.DescribeEventsResult, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEventSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventSubscriptionsMessage(data.DescribeEventSubscriptionsResult, context);
  const response: DescribeEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEventSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.redshift#SubscriptionNotFoundFault":
      throw await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeHsmClientCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmClientCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeHsmClientCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryHsmClientCertificateMessage(data.DescribeHsmClientCertificatesResult, context);
  const response: DescribeHsmClientCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeHsmClientCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmClientCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HsmClientCertificateNotFoundFault":
    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
      throw await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeHsmConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeHsmConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryHsmConfigurationMessage(data.DescribeHsmConfigurationsResult, context);
  const response: DescribeHsmConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeHsmConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HsmConfigurationNotFoundFault":
    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
      throw await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoggingStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoggingStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryLoggingStatus(data.DescribeLoggingStatusResult, context);
  const response: DescribeLoggingStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoggingStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeNodeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeNodeConfigurationOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryNodeConfigurationOptionsMessage(data.DescribeNodeConfigurationOptionsResult, context);
  const response: DescribeNodeConfigurationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeNodeConfigurationOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeConfigurationOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessToSnapshotDenied":
    case "com.amazonaws.redshift#AccessToSnapshotDeniedFault":
      throw await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context);
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeOrderableClusterOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableClusterOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeOrderableClusterOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryOrderableClusterOptionsMessage(data.DescribeOrderableClusterOptionsResult, context);
  const response: DescribeOrderableClusterOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeOrderableClusterOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableClusterOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribePartnersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribePartnersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribePartnersOutputMessage(data.DescribePartnersResult, context);
  const response: DescribePartnersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribePartnersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeReservedNodeExchangeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodeExchangeStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReservedNodeExchangeStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeReservedNodeExchangeStatusOutputMessage(
    data.DescribeReservedNodeExchangeStatusResult,
    context
  );
  const response: DescribeReservedNodeExchangeStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReservedNodeExchangeStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodeExchangeStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ReservedNodeExchangeNotFond":
    case "com.amazonaws.redshift#ReservedNodeExchangeNotFoundFault":
      throw await deserializeAws_queryReservedNodeExchangeNotFoundFaultResponse(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeReservedNodeOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodeOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReservedNodeOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReservedNodeOfferingsMessage(data.DescribeReservedNodeOfferingsResult, context);
  const response: DescribeReservedNodeOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReservedNodeOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodeOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeReservedNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeReservedNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReservedNodesMessage(data.DescribeReservedNodesResult, context);
  const response: DescribeReservedNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeReservedNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeResizeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResizeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeResizeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryResizeProgressMessage(data.DescribeResizeResult, context);
  const response: DescribeResizeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeResizeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResizeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ResizeNotFound":
    case "com.amazonaws.redshift#ResizeNotFoundFault":
      throw await deserializeAws_queryResizeNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeScheduledActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryScheduledActionsMessage(data.DescribeScheduledActionsResult, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScheduledActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ScheduledActionNotFound":
    case "com.amazonaws.redshift#ScheduledActionNotFoundFault":
      throw await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeSnapshotCopyGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotCopyGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeSnapshotCopyGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySnapshotCopyGrantMessage(data.DescribeSnapshotCopyGrantsResult, context);
  const response: DescribeSnapshotCopyGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeSnapshotCopyGrantsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotCopyGrantsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "SnapshotCopyGrantNotFoundFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
      throw await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeSnapshotSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotSchedulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeSnapshotSchedulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeSnapshotSchedulesOutputMessage(data.DescribeSnapshotSchedulesResult, context);
  const response: DescribeSnapshotSchedulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeSnapshotSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCustomerStorageMessage(data.DescribeStorageResult, context);
  const response: DescribeStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTableRestoreStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTableRestoreStatusMessage(data.DescribeTableRestoreStatusResult, context);
  const response: DescribeTableRestoreStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTableRestoreStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableRestoreStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "TableRestoreNotFoundFault":
    case "com.amazonaws.redshift#TableRestoreNotFoundFault":
      throw await deserializeAws_queryTableRestoreNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTaggedResourceListMessage(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.redshift#ResourceNotFoundFault":
      throw await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeUsageLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeUsageLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUsageLimitList(data.DescribeUsageLimitsResult, context);
  const response: DescribeUsageLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeUsageLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDisableLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisableLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryLoggingStatus(data.DisableLoggingResult, context);
  const response: DisableLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDisableSnapshotCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSnapshotCopyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisableSnapshotCopyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDisableSnapshotCopyResult(data.DisableSnapshotCopyResult, context);
  const response: DisableSnapshotCopyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableSnapshotCopyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSnapshotCopyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "SnapshotCopyAlreadyDisabledFault":
    case "com.amazonaws.redshift#SnapshotCopyAlreadyDisabledFault":
      throw await deserializeAws_querySnapshotCopyAlreadyDisabledFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDisassociateDataShareConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDataShareConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisassociateDataShareConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDataShare(data.DisassociateDataShareConsumerResult, context);
  const response: DisassociateDataShareConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisassociateDataShareConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDataShareConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDataShareFault":
    case "com.amazonaws.redshift#InvalidDataShareFault":
      throw await deserializeAws_queryInvalidDataShareFaultResponse(parsedOutput, context);
    case "InvalidNamespaceFault":
    case "com.amazonaws.redshift#InvalidNamespaceFault":
      throw await deserializeAws_queryInvalidNamespaceFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryEnableLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnableLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryLoggingStatus(data.EnableLoggingResult, context);
  const response: EnableLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BucketNotFoundFault":
    case "com.amazonaws.redshift#BucketNotFoundFault":
      throw await deserializeAws_queryBucketNotFoundFaultResponse(parsedOutput, context);
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientS3BucketPolicyFault":
    case "com.amazonaws.redshift#InsufficientS3BucketPolicyFault":
      throw await deserializeAws_queryInsufficientS3BucketPolicyFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidS3BucketNameFault":
    case "com.amazonaws.redshift#InvalidS3BucketNameFault":
      throw await deserializeAws_queryInvalidS3BucketNameFaultResponse(parsedOutput, context);
    case "InvalidS3KeyPrefixFault":
    case "com.amazonaws.redshift#InvalidS3KeyPrefixFault":
      throw await deserializeAws_queryInvalidS3KeyPrefixFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryEnableSnapshotCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSnapshotCopyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnableSnapshotCopyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnableSnapshotCopyResult(data.EnableSnapshotCopyResult, context);
  const response: EnableSnapshotCopyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableSnapshotCopyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSnapshotCopyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "CopyToRegionDisabledFault":
    case "com.amazonaws.redshift#CopyToRegionDisabledFault":
      throw await deserializeAws_queryCopyToRegionDisabledFaultResponse(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "IncompatibleOrderableOptions":
    case "com.amazonaws.redshift#IncompatibleOrderableOptions":
      throw await deserializeAws_queryIncompatibleOrderableOptionsResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "SnapshotCopyAlreadyEnabledFault":
    case "com.amazonaws.redshift#SnapshotCopyAlreadyEnabledFault":
      throw await deserializeAws_querySnapshotCopyAlreadyEnabledFaultResponse(parsedOutput, context);
    case "SnapshotCopyGrantNotFoundFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
      throw await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    case "UnknownSnapshotCopyRegionFault":
    case "com.amazonaws.redshift#UnknownSnapshotCopyRegionFault":
      throw await deserializeAws_queryUnknownSnapshotCopyRegionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryGetClusterCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetClusterCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterCredentials(data.GetClusterCredentialsResult, context);
  const response: GetClusterCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetClusterCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryGetClusterCredentialsWithIAMCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCredentialsWithIAMCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetClusterCredentialsWithIAMCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterExtendedCredentials(data.GetClusterCredentialsWithIAMResult, context);
  const response: GetClusterCredentialsWithIAMCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetClusterCredentialsWithIAMCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCredentialsWithIAMCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsOutputMessage(
    data.GetReservedNodeExchangeConfigurationOptionsResult,
    context
  );
  const response: GetReservedNodeExchangeConfigurationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryGetReservedNodeExchangeOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservedNodeExchangeOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage(
    data.GetReservedNodeExchangeOfferingsResult,
    context
  );
  const response: GetReservedNodeExchangeOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservedNodeExchangeOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyAquaConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAquaConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyAquaConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyAquaOutputMessage(data.ModifyAquaConfigurationResult, context);
  const response: ModifyAquaConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyAquaConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAquaConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyAuthenticationProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyAuthenticationProfileResult(data.ModifyAuthenticationProfileResult, context);
  const response: ModifyAuthenticationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyAuthenticationProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAuthenticationProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationProfileNotFoundFault":
    case "com.amazonaws.redshift#AuthenticationProfileNotFoundFault":
      throw await deserializeAws_queryAuthenticationProfileNotFoundFaultResponse(parsedOutput, context);
    case "AuthenticationProfileQuotaExceededFault":
    case "com.amazonaws.redshift#AuthenticationProfileQuotaExceededFault":
      throw await deserializeAws_queryAuthenticationProfileQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await deserializeAws_queryInvalidAuthenticationProfileRequestFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyClusterResult(data.ModifyClusterResult, context);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterAlreadyExists":
    case "com.amazonaws.redshift#ClusterAlreadyExistsFault":
      throw await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "HsmClientCertificateNotFoundFault":
    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
      throw await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context);
    case "HsmConfigurationNotFoundFault":
    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
      throw await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidClusterTrack":
    case "com.amazonaws.redshift#InvalidClusterTrackFault":
      throw await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context);
    case "InvalidElasticIpFault":
    case "com.amazonaws.redshift#InvalidElasticIpFault":
      throw await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context);
    case "TableLimitExceeded":
    case "com.amazonaws.redshift#TableLimitExceededFault":
      throw await deserializeAws_queryTableLimitExceededFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    case "UnsupportedOptionFault":
    case "com.amazonaws.redshift#UnsupportedOptionFault":
      throw await deserializeAws_queryUnsupportedOptionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyClusterDbRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterDbRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyClusterDbRevisionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyClusterDbRevisionResult(data.ModifyClusterDbRevisionResult, context);
  const response: ModifyClusterDbRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyClusterDbRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterDbRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterOnLatestRevision":
    case "com.amazonaws.redshift#ClusterOnLatestRevisionFault":
      throw await deserializeAws_queryClusterOnLatestRevisionFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyClusterIamRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterIamRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyClusterIamRolesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyClusterIamRolesResult(data.ModifyClusterIamRolesResult, context);
  const response: ModifyClusterIamRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyClusterIamRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterIamRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyClusterMaintenanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterMaintenanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyClusterMaintenanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyClusterMaintenanceResult(data.ModifyClusterMaintenanceResult, context);
  const response: ModifyClusterMaintenanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyClusterMaintenanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterMaintenanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterParameterGroupNameMessage(data.ModifyClusterParameterGroupResult, context);
  const response: ModifyClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterParameterGroupState":
    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
      throw await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyClusterSnapshotResult(data.ModifyClusterSnapshotResult, context);
  const response: ModifyClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyClusterSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyClusterSnapshotScheduleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ModifyClusterSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyClusterSnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSnapshotScheduleState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyClusterSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyClusterSubnetGroupResult(data.ModifyClusterSubnetGroupResult, context);
  const response: ModifyClusterSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyClusterSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSubnetQuotaExceededFault":
    case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault":
      throw await deserializeAws_queryClusterSubnetQuotaExceededFaultResponse(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.redshift#SubnetAlreadyInUse":
      throw await deserializeAws_querySubnetAlreadyInUseResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEndpointAccess(data.ModifyEndpointAccessResult, context);
  const response: ModifyEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidEndpointState":
    case "com.amazonaws.redshift#InvalidEndpointStateFault":
      throw await deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyEventSubscriptionResult(data.ModifyEventSubscriptionResult, context);
  const response: ModifyEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSubscriptionStateFault":
    case "com.amazonaws.redshift#InvalidSubscriptionStateFault":
      throw await deserializeAws_queryInvalidSubscriptionStateFaultResponse(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.redshift#SNSInvalidTopicFault":
      throw await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.redshift#SNSNoAuthorizationFault":
      throw await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.redshift#SNSTopicArnNotFoundFault":
      throw await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context);
    case "SourceNotFound":
    case "com.amazonaws.redshift#SourceNotFoundFault":
      throw await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault":
      throw await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionEventIdNotFound":
    case "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault":
      throw await deserializeAws_querySubscriptionEventIdNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.redshift#SubscriptionNotFoundFault":
      throw await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context);
    case "SubscriptionSeverityNotFound":
    case "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault":
      throw await deserializeAws_querySubscriptionSeverityNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryScheduledAction(data.ModifyScheduledActionResult, context);
  const response: ModifyScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSchedule":
    case "com.amazonaws.redshift#InvalidScheduleFault":
      throw await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context);
    case "InvalidScheduledAction":
    case "com.amazonaws.redshift#InvalidScheduledActionFault":
      throw await deserializeAws_queryInvalidScheduledActionFaultResponse(parsedOutput, context);
    case "ScheduledActionNotFound":
    case "com.amazonaws.redshift#ScheduledActionNotFoundFault":
      throw await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context);
    case "ScheduledActionTypeUnsupported":
    case "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault":
      throw await deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifySnapshotCopyRetentionPeriodResult(
    data.ModifySnapshotCopyRetentionPeriodResult,
    context
  );
  const response: ModifySnapshotCopyRetentionPeriodCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context);
    case "SnapshotCopyDisabledFault":
    case "com.amazonaws.redshift#SnapshotCopyDisabledFault":
      throw await deserializeAws_querySnapshotCopyDisabledFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifySnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifySnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySnapshotSchedule(data.ModifySnapshotScheduleResult, context);
  const response: ModifySnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifySnapshotScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySnapshotScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSchedule":
    case "com.amazonaws.redshift#InvalidScheduleFault":
      throw await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotScheduleUpdateInProgress":
    case "com.amazonaws.redshift#SnapshotScheduleUpdateInProgressFault":
      throw await deserializeAws_querySnapshotScheduleUpdateInProgressFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUsageLimit(data.ModifyUsageLimitResult, context);
  const response: ModifyUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyUsageLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUsageLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidUsageLimit":
    case "com.amazonaws.redshift#InvalidUsageLimitFault":
      throw await deserializeAws_queryInvalidUsageLimitFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    case "UsageLimitNotFound":
    case "com.amazonaws.redshift#UsageLimitNotFoundFault":
      throw await deserializeAws_queryUsageLimitNotFoundFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryPauseClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPauseClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPauseClusterResult(data.PauseClusterResult, context);
  const response: PauseClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPauseClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryPurchaseReservedNodeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedNodeOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPurchaseReservedNodeOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPurchaseReservedNodeOfferingResult(data.PurchaseReservedNodeOfferingResult, context);
  const response: PurchaseReservedNodeOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPurchaseReservedNodeOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedNodeOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ReservedNodeAlreadyExists":
    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
      throw await deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context);
    case "ReservedNodeQuotaExceeded":
    case "com.amazonaws.redshift#ReservedNodeQuotaExceededFault":
      throw await deserializeAws_queryReservedNodeQuotaExceededFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRebootClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRebootClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRebootClusterResult(data.RebootClusterResult, context);
  const response: RebootClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRebootClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRejectDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRejectDataShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDataShare(data.RejectDataShareResult, context);
  const response: RejectDataShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRejectDataShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectDataShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDataShareFault":
    case "com.amazonaws.redshift#InvalidDataShareFault":
      throw await deserializeAws_queryInvalidDataShareFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryResetClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryResetClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryClusterParameterGroupNameMessage(data.ResetClusterParameterGroupResult, context);
  const response: ResetClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResetClusterParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetClusterParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterParameterGroupState":
    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
      throw await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryResizeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResizeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryResizeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryResizeClusterResult(data.ResizeClusterResult, context);
  const response: ResizeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResizeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResizeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context);
    case "ReservedNodeAlreadyExists":
    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
      throw await deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    case "UnsupportedOptionFault":
    case "com.amazonaws.redshift#UnsupportedOptionFault":
      throw await deserializeAws_queryUnsupportedOptionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRestoreFromClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestoreFromClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreFromClusterSnapshotResult(data.RestoreFromClusterSnapshotResult, context);
  const response: RestoreFromClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreFromClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessToSnapshotDenied":
    case "com.amazonaws.redshift#AccessToSnapshotDeniedFault":
      throw await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context);
    case "ClusterAlreadyExists":
    case "com.amazonaws.redshift#ClusterAlreadyExistsFault":
      throw await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ClusterQuotaExceeded":
    case "com.amazonaws.redshift#ClusterQuotaExceededFault":
      throw await deserializeAws_queryClusterQuotaExceededFaultResponse(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context);
    case "HsmClientCertificateNotFoundFault":
    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
      throw await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context);
    case "HsmConfigurationNotFoundFault":
    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
      throw await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidClusterSubnetGroupStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context);
    case "InvalidClusterTrack":
    case "com.amazonaws.redshift#InvalidClusterTrackFault":
      throw await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context);
    case "InvalidElasticIpFault":
    case "com.amazonaws.redshift#InvalidElasticIpFault":
      throw await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context);
    case "InvalidRestore":
    case "com.amazonaws.redshift#InvalidRestoreFault":
      throw await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.redshift#InvalidVPCNetworkStateFault":
      throw await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context);
    case "ReservedNodeAlreadyExists":
    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
      throw await deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRestoreTableFromClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestoreTableFromClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRestoreTableFromClusterSnapshotResult(
    data.RestoreTableFromClusterSnapshotResult,
    context
  );
  const response: RestoreTableFromClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestoreTableFromClusterSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromClusterSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "InProgressTableRestoreQuotaExceededFault":
    case "com.amazonaws.redshift#InProgressTableRestoreQuotaExceededFault":
      throw await deserializeAws_queryInProgressTableRestoreQuotaExceededFaultResponse(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidTableRestoreArgument":
    case "com.amazonaws.redshift#InvalidTableRestoreArgumentFault":
      throw await deserializeAws_queryInvalidTableRestoreArgumentFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryResumeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryResumeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryResumeClusterResult(data.ResumeClusterResult, context);
  const response: ResumeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResumeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRevokeClusterSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeClusterSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRevokeClusterSecurityGroupIngressResult(
    data.RevokeClusterSecurityGroupIngressResult,
    context
  );
  const response: RevokeClusterSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeClusterSecurityGroupIngressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationNotFound":
    case "com.amazonaws.redshift#AuthorizationNotFoundFault":
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRevokeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRevokeEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEndpointAuthorization(data.RevokeEndpointAccessResult, context);
  const response: RevokeEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRevokeEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "EndpointAuthorizationNotFound":
    case "com.amazonaws.redshift#EndpointAuthorizationNotFoundFault":
      throw await deserializeAws_queryEndpointAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context);
    case "InvalidAuthorizationState":
    case "com.amazonaws.redshift#InvalidAuthorizationStateFault":
      throw await deserializeAws_queryInvalidAuthorizationStateFaultResponse(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidEndpointState":
    case "com.amazonaws.redshift#InvalidEndpointStateFault":
      throw await deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRevokeSnapshotAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSnapshotAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRevokeSnapshotAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRevokeSnapshotAccessResult(data.RevokeSnapshotAccessResult, context);
  const response: RevokeSnapshotAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRevokeSnapshotAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSnapshotAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessToSnapshotDenied":
    case "com.amazonaws.redshift#AccessToSnapshotDeniedFault":
      throw await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context);
    case "AuthorizationNotFound":
    case "com.amazonaws.redshift#AuthorizationNotFoundFault":
      throw await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRotateEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRotateEncryptionKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRotateEncryptionKeyResult(data.RotateEncryptionKeyResult, context);
  const response: RotateEncryptionKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRotateEncryptionKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateEncryptionKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryUpdatePartnerStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnerStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdatePartnerStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.UpdatePartnerStatusResult, context);
  const response: UpdatePartnerStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdatePartnerStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnerStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context);
    case "PartnerNotFound":
    case "com.amazonaws.redshift#PartnerNotFoundFault":
      throw await deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_queryAccessToClusterDeniedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessToClusterDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAccessToClusterDeniedFault(body.Error, context);
  const exception = new AccessToClusterDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAccessToSnapshotDeniedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessToSnapshotDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAccessToSnapshotDeniedFault(body.Error, context);
  const exception = new AccessToSnapshotDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAuthenticationProfileAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthenticationProfileAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthenticationProfileAlreadyExistsFault(body.Error, context);
  const exception = new AuthenticationProfileAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAuthenticationProfileNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthenticationProfileNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthenticationProfileNotFoundFault(body.Error, context);
  const exception = new AuthenticationProfileNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAuthenticationProfileQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthenticationProfileQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthenticationProfileQuotaExceededFault(body.Error, context);
  const exception = new AuthenticationProfileQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAuthorizationAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationAlreadyExistsFault(body.Error, context);
  const exception = new AuthorizationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAuthorizationNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationNotFoundFault(body.Error, context);
  const exception = new AuthorizationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAuthorizationQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationQuotaExceededFault(body.Error, context);
  const exception = new AuthorizationQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBatchDeleteRequestSizeExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchDeleteRequestSizeExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBatchDeleteRequestSizeExceededFault(body.Error, context);
  const exception = new BatchDeleteRequestSizeExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchModifyClusterSnapshotsLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault(body.Error, context);
  const exception = new BatchModifyClusterSnapshotsLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBucketNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBucketNotFoundFault(body.Error, context);
  const exception = new BucketNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterAlreadyExistsFault(body.Error, context);
  const exception = new ClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterNotFoundFault(body.Error, context);
  const exception = new ClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterOnLatestRevisionFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterOnLatestRevisionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterOnLatestRevisionFault(body.Error, context);
  const exception = new ClusterOnLatestRevisionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterParameterGroupAlreadyExistsFault(body.Error, context);
  const exception = new ClusterParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterParameterGroupNotFoundFault(body.Error, context);
  const exception = new ClusterParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterParameterGroupQuotaExceededFault(body.Error, context);
  const exception = new ClusterParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterQuotaExceededFault(body.Error, context);
  const exception = new ClusterQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSecurityGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSecurityGroupAlreadyExistsFault(body.Error, context);
  const exception = new ClusterSecurityGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSecurityGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSecurityGroupNotFoundFault(body.Error, context);
  const exception = new ClusterSecurityGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSecurityGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSecurityGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSecurityGroupQuotaExceededFault(body.Error, context);
  const exception = new ClusterSecurityGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSnapshotAlreadyExistsFault(body.Error, context);
  const exception = new ClusterSnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSnapshotNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSnapshotNotFoundFault(body.Error, context);
  const exception = new ClusterSnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSnapshotQuotaExceededFault(body.Error, context);
  const exception = new ClusterSnapshotQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSubnetGroupAlreadyExistsFault(body.Error, context);
  const exception = new ClusterSubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSubnetGroupNotFoundFault(body.Error, context);
  const exception = new ClusterSubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSubnetGroupQuotaExceededFault(body.Error, context);
  const exception = new ClusterSubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryClusterSubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryClusterSubnetQuotaExceededFault(body.Error, context);
  const exception = new ClusterSubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCopyToRegionDisabledFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CopyToRegionDisabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCopyToRegionDisabledFault(body.Error, context);
  const exception = new CopyToRegionDisabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDependentServiceRequestThrottlingFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependentServiceRequestThrottlingFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDependentServiceRequestThrottlingFault(body.Error, context);
  const exception = new DependentServiceRequestThrottlingFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDependentServiceUnavailableFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependentServiceUnavailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDependentServiceUnavailableFault(body.Error, context);
  const exception = new DependentServiceUnavailableFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEndpointAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointAlreadyExistsFault(body.Error, context);
  const exception = new EndpointAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEndpointAuthorizationAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAuthorizationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointAuthorizationAlreadyExistsFault(body.Error, context);
  const exception = new EndpointAuthorizationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEndpointAuthorizationNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAuthorizationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointAuthorizationNotFoundFault(body.Error, context);
  const exception = new EndpointAuthorizationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAuthorizationsPerClusterLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFault(body.Error, context);
  const exception = new EndpointAuthorizationsPerClusterLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEndpointNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointNotFoundFault(body.Error, context);
  const exception = new EndpointNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEndpointsPerAuthorizationLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointsPerAuthorizationLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointsPerAuthorizationLimitExceededFault(body.Error, context);
  const exception = new EndpointsPerAuthorizationLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEndpointsPerClusterLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointsPerClusterLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointsPerClusterLimitExceededFault(body.Error, context);
  const exception = new EndpointsPerClusterLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventSubscriptionQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEventSubscriptionQuotaExceededFault(body.Error, context);
  const exception = new EventSubscriptionQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryHsmClientCertificateAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmClientCertificateAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHsmClientCertificateAlreadyExistsFault(body.Error, context);
  const exception = new HsmClientCertificateAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryHsmClientCertificateNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmClientCertificateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHsmClientCertificateNotFoundFault(body.Error, context);
  const exception = new HsmClientCertificateNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryHsmClientCertificateQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmClientCertificateQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHsmClientCertificateQuotaExceededFault(body.Error, context);
  const exception = new HsmClientCertificateQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryHsmConfigurationAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmConfigurationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHsmConfigurationAlreadyExistsFault(body.Error, context);
  const exception = new HsmConfigurationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryHsmConfigurationNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmConfigurationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHsmConfigurationNotFoundFault(body.Error, context);
  const exception = new HsmConfigurationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryHsmConfigurationQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmConfigurationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHsmConfigurationQuotaExceededFault(body.Error, context);
  const exception = new HsmConfigurationQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryIncompatibleOrderableOptionsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleOrderableOptions> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIncompatibleOrderableOptions(body.Error, context);
  const exception = new IncompatibleOrderableOptions({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInProgressTableRestoreQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InProgressTableRestoreQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInProgressTableRestoreQuotaExceededFault(body.Error, context);
  const exception = new InProgressTableRestoreQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInsufficientClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientClusterCapacityFault(body.Error, context);
  const exception = new InsufficientClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInsufficientS3BucketPolicyFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientS3BucketPolicyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientS3BucketPolicyFault(body.Error, context);
  const exception = new InsufficientS3BucketPolicyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidAuthenticationProfileRequestFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthenticationProfileRequestFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidAuthenticationProfileRequestFault(body.Error, context);
  const exception = new InvalidAuthenticationProfileRequestFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidAuthorizationStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthorizationStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidAuthorizationStateFault(body.Error, context);
  const exception = new InvalidAuthorizationStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidClusterParameterGroupStateFault(body.Error, context);
  const exception = new InvalidClusterParameterGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSecurityGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidClusterSecurityGroupStateFault(body.Error, context);
  const exception = new InvalidClusterSecurityGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSnapshotScheduleStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidClusterSnapshotScheduleStateFault(body.Error, context);
  const exception = new InvalidClusterSnapshotScheduleStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidClusterSnapshotStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidClusterSnapshotStateFault(body.Error, context);
  const exception = new InvalidClusterSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidClusterStateFault(body.Error, context);
  const exception = new InvalidClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSubnetGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidClusterSubnetGroupStateFault(body.Error, context);
  const exception = new InvalidClusterSubnetGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidClusterSubnetStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSubnetStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidClusterSubnetStateFault(body.Error, context);
  const exception = new InvalidClusterSubnetStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidClusterTrackFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterTrackFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidClusterTrackFault(body.Error, context);
  const exception = new InvalidClusterTrackFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidDataShareFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDataShareFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidDataShareFault(body.Error, context);
  const exception = new InvalidDataShareFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidElasticIpFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidElasticIpFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidElasticIpFault(body.Error, context);
  const exception = new InvalidElasticIpFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidEndpointStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidEndpointStateFault(body.Error, context);
  const exception = new InvalidEndpointStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidHsmClientCertificateStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHsmClientCertificateStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidHsmClientCertificateStateFault(body.Error, context);
  const exception = new InvalidHsmClientCertificateStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidHsmConfigurationStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHsmConfigurationStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidHsmConfigurationStateFault(body.Error, context);
  const exception = new InvalidHsmConfigurationStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidNamespaceFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNamespaceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidNamespaceFault(body.Error, context);
  const exception = new InvalidNamespaceFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidReservedNodeStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReservedNodeStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidReservedNodeStateFault(body.Error, context);
  const exception = new InvalidReservedNodeStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidRestoreFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRestoreFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidRestoreFault(body.Error, context);
  const exception = new InvalidRestoreFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidRetentionPeriodFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRetentionPeriodFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidRetentionPeriodFault(body.Error, context);
  const exception = new InvalidRetentionPeriodFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidS3BucketNameFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketNameFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidS3BucketNameFault(body.Error, context);
  const exception = new InvalidS3BucketNameFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidS3KeyPrefixFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KeyPrefixFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidS3KeyPrefixFault(body.Error, context);
  const exception = new InvalidS3KeyPrefixFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidScheduledActionFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidScheduledActionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidScheduledActionFault(body.Error, context);
  const exception = new InvalidScheduledActionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidScheduleFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidScheduleFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidScheduleFault(body.Error, context);
  const exception = new InvalidScheduleFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSnapshotCopyGrantStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnapshotCopyGrantStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSnapshotCopyGrantStateFault(body.Error, context);
  const exception = new InvalidSnapshotCopyGrantStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubnet(body.Error, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSubscriptionStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubscriptionStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubscriptionStateFault(body.Error, context);
  const exception = new InvalidSubscriptionStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidTableRestoreArgumentFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTableRestoreArgumentFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTableRestoreArgumentFault(body.Error, context);
  const exception = new InvalidTableRestoreArgumentFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidTagFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTagFault(body.Error, context);
  const exception = new InvalidTagFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidUsageLimitFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUsageLimitFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidUsageLimitFault(body.Error, context);
  const exception = new InvalidUsageLimitFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidVPCNetworkStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidVPCNetworkStateFault(body.Error, context);
  const exception = new InvalidVPCNetworkStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededFault(body.Error, context);
  const exception = new LimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfNodesPerClusterLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault(body.Error, context);
  const exception = new NumberOfNodesPerClusterLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfNodesQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNumberOfNodesQuotaExceededFault(body.Error, context);
  const exception = new NumberOfNodesQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryPartnerNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PartnerNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPartnerNotFoundFault(body.Error, context);
  const exception = new PartnerNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedNodeAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedNodeAlreadyExistsFault(body.Error, context);
  const exception = new ReservedNodeAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeAlreadyMigratedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedNodeAlreadyMigratedFault(body.Error, context);
  const exception = new ReservedNodeAlreadyMigratedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedNodeExchangeNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeExchangeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedNodeExchangeNotFoundFault(body.Error, context);
  const exception = new ReservedNodeExchangeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedNodeNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedNodeNotFoundFault(body.Error, context);
  const exception = new ReservedNodeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedNodeOfferingNotFoundFault(body.Error, context);
  const exception = new ReservedNodeOfferingNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReservedNodeQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReservedNodeQuotaExceededFault(body.Error, context);
  const exception = new ReservedNodeQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResizeNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResizeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResizeNotFoundFault(body.Error, context);
  const exception = new ResizeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResourceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundFault(body.Error, context);
  const exception = new ResourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryScheduledActionAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduledActionAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryScheduledActionAlreadyExistsFault(body.Error, context);
  const exception = new ScheduledActionAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryScheduledActionNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduledActionNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryScheduledActionNotFoundFault(body.Error, context);
  const exception = new ScheduledActionNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryScheduledActionQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduledActionQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryScheduledActionQuotaExceededFault(body.Error, context);
  const exception = new ScheduledActionQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduledActionTypeUnsupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryScheduledActionTypeUnsupportedFault(body.Error, context);
  const exception = new ScheduledActionTypeUnsupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduleDefinitionTypeUnsupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryScheduleDefinitionTypeUnsupportedFault(body.Error, context);
  const exception = new ScheduleDefinitionTypeUnsupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotCopyAlreadyDisabledFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyAlreadyDisabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotCopyAlreadyDisabledFault(body.Error, context);
  const exception = new SnapshotCopyAlreadyDisabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotCopyAlreadyEnabledFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyAlreadyEnabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotCopyAlreadyEnabledFault(body.Error, context);
  const exception = new SnapshotCopyAlreadyEnabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotCopyDisabledFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyDisabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotCopyDisabledFault(body.Error, context);
  const exception = new SnapshotCopyDisabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyGrantAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotCopyGrantAlreadyExistsFault(body.Error, context);
  const exception = new SnapshotCopyGrantAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyGrantNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotCopyGrantNotFoundFault(body.Error, context);
  const exception = new SnapshotCopyGrantNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotCopyGrantQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyGrantQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotCopyGrantQuotaExceededFault(body.Error, context);
  const exception = new SnapshotCopyGrantQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotScheduleAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotScheduleAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotScheduleAlreadyExistsFault(body.Error, context);
  const exception = new SnapshotScheduleAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotScheduleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotScheduleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotScheduleNotFoundFault(body.Error, context);
  const exception = new SnapshotScheduleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotScheduleQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotScheduleQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotScheduleQuotaExceededFault(body.Error, context);
  const exception = new SnapshotScheduleQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySnapshotScheduleUpdateInProgressFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotScheduleUpdateInProgressFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySnapshotScheduleUpdateInProgressFault(body.Error, context);
  const exception = new SnapshotScheduleUpdateInProgressFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySNSInvalidTopicFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSInvalidTopicFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySNSInvalidTopicFault(body.Error, context);
  const exception = new SNSInvalidTopicFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySNSNoAuthorizationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSNoAuthorizationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySNSNoAuthorizationFault(body.Error, context);
  const exception = new SNSNoAuthorizationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySNSTopicArnNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSTopicArnNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySNSTopicArnNotFoundFault(body.Error, context);
  const exception = new SNSTopicArnNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySourceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySourceNotFoundFault(body.Error, context);
  const exception = new SourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubnetAlreadyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetAlreadyInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetAlreadyInUse(body.Error, context);
  const exception = new SubnetAlreadyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionAlreadyExistFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionAlreadyExistFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionAlreadyExistFault(body.Error, context);
  const exception = new SubscriptionAlreadyExistFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionCategoryNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionCategoryNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionCategoryNotFoundFault(body.Error, context);
  const exception = new SubscriptionCategoryNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionEventIdNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionEventIdNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionEventIdNotFoundFault(body.Error, context);
  const exception = new SubscriptionEventIdNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionNotFoundFault(body.Error, context);
  const exception = new SubscriptionNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionSeverityNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionSeverityNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionSeverityNotFoundFault(body.Error, context);
  const exception = new SubscriptionSeverityNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTableLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTableLimitExceededFault(body.Error, context);
  const exception = new TableLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTableRestoreNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableRestoreNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTableRestoreNotFoundFault(body.Error, context);
  const exception = new TableRestoreNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTagLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagLimitExceededFault(body.Error, context);
  const exception = new TagLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUnauthorizedOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnauthorizedOperation(body.Error, context);
  const exception = new UnauthorizedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedPartnerIntegrationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnauthorizedPartnerIntegrationFault(body.Error, context);
  const exception = new UnauthorizedPartnerIntegrationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUnknownSnapshotCopyRegionFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownSnapshotCopyRegionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnknownSnapshotCopyRegionFault(body.Error, context);
  const exception = new UnknownSnapshotCopyRegionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUnsupportedOperationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedOperationFault(body.Error, context);
  const exception = new UnsupportedOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUnsupportedOptionFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOptionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedOptionFault(body.Error, context);
  const exception = new UnsupportedOptionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUsageLimitAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UsageLimitAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUsageLimitAlreadyExistsFault(body.Error, context);
  const exception = new UsageLimitAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUsageLimitNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UsageLimitNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUsageLimitNotFoundFault(body.Error, context);
  const exception = new UsageLimitNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryAcceptReservedNodeExchangeInputMessage = (
  input: AcceptReservedNodeExchangeInputMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReservedNodeId != null) {
    entries["ReservedNodeId"] = input.ReservedNodeId;
  }
  if (input.TargetReservedNodeOfferingId != null) {
    entries["TargetReservedNodeOfferingId"] = input.TargetReservedNodeOfferingId;
  }
  return entries;
};

const serializeAws_queryAssociateDataShareConsumerMessage = (
  input: AssociateDataShareConsumerMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  if (input.AssociateEntireAccount != null) {
    entries["AssociateEntireAccount"] = input.AssociateEntireAccount;
  }
  if (input.ConsumerArn != null) {
    entries["ConsumerArn"] = input.ConsumerArn;
  }
  if (input.ConsumerRegion != null) {
    entries["ConsumerRegion"] = input.ConsumerRegion;
  }
  return entries;
};

const serializeAws_queryAttributeNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`AttributeName.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage = (
  input: AuthorizeClusterSecurityGroupIngressMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSecurityGroupName != null) {
    entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
  }
  if (input.CIDRIP != null) {
    entries["CIDRIP"] = input.CIDRIP;
  }
  if (input.EC2SecurityGroupName != null) {
    entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
  }
  if (input.EC2SecurityGroupOwnerId != null) {
    entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
  }
  return entries;
};

const serializeAws_queryAuthorizeDataShareMessage = (
  input: AuthorizeDataShareMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  if (input.ConsumerIdentifier != null) {
    entries["ConsumerIdentifier"] = input.ConsumerIdentifier;
  }
  return entries;
};

const serializeAws_queryAuthorizeEndpointAccessMessage = (
  input: AuthorizeEndpointAccessMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.Account != null) {
    entries["Account"] = input.Account;
  }
  if (input.VpcIds != null) {
    const memberEntries = serializeAws_queryVpcIdentifierList(input.VpcIds, context);
    if (input.VpcIds?.length === 0) {
      entries.VpcIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryAuthorizeSnapshotAccessMessage = (
  input: AuthorizeSnapshotAccessMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.SnapshotArn != null) {
    entries["SnapshotArn"] = input.SnapshotArn;
  }
  if (input.SnapshotClusterIdentifier != null) {
    entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
  }
  if (input.AccountWithRestoreAccess != null) {
    entries["AccountWithRestoreAccess"] = input.AccountWithRestoreAccess;
  }
  return entries;
};

const serializeAws_queryBatchDeleteClusterSnapshotsRequest = (
  input: BatchDeleteClusterSnapshotsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identifiers != null) {
    const memberEntries = serializeAws_queryDeleteClusterSnapshotMessageList(input.Identifiers, context);
    if (input.Identifiers?.length === 0) {
      entries.Identifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identifiers.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryBatchModifyClusterSnapshotsMessage = (
  input: BatchModifyClusterSnapshotsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotIdentifierList != null) {
    const memberEntries = serializeAws_querySnapshotIdentifierList(input.SnapshotIdentifierList, context);
    if (input.SnapshotIdentifierList?.length === 0) {
      entries.SnapshotIdentifierList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SnapshotIdentifierList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ManualSnapshotRetentionPeriod != null) {
    entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
  }
  if (input.Force != null) {
    entries["Force"] = input.Force;
  }
  return entries;
};

const serializeAws_queryCancelResizeMessage = (input: CancelResizeMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryClusterSecurityGroupNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`ClusterSecurityGroupName.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryCopyClusterSnapshotMessage = (
  input: CopyClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SourceSnapshotIdentifier != null) {
    entries["SourceSnapshotIdentifier"] = input.SourceSnapshotIdentifier;
  }
  if (input.SourceSnapshotClusterIdentifier != null) {
    entries["SourceSnapshotClusterIdentifier"] = input.SourceSnapshotClusterIdentifier;
  }
  if (input.TargetSnapshotIdentifier != null) {
    entries["TargetSnapshotIdentifier"] = input.TargetSnapshotIdentifier;
  }
  if (input.ManualSnapshotRetentionPeriod != null) {
    entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
  }
  return entries;
};

const serializeAws_queryCreateAuthenticationProfileMessage = (
  input: CreateAuthenticationProfileMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticationProfileName != null) {
    entries["AuthenticationProfileName"] = input.AuthenticationProfileName;
  }
  if (input.AuthenticationProfileContent != null) {
    entries["AuthenticationProfileContent"] = input.AuthenticationProfileContent;
  }
  return entries;
};

const serializeAws_queryCreateClusterMessage = (input: CreateClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DBName != null) {
    entries["DBName"] = input.DBName;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ClusterType != null) {
    entries["ClusterType"] = input.ClusterType;
  }
  if (input.NodeType != null) {
    entries["NodeType"] = input.NodeType;
  }
  if (input.MasterUsername != null) {
    entries["MasterUsername"] = input.MasterUsername;
  }
  if (input.MasterUserPassword != null) {
    entries["MasterUserPassword"] = input.MasterUserPassword;
  }
  if (input.ClusterSecurityGroups != null) {
    const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
    if (input.ClusterSecurityGroups?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  if (input.AvailabilityZone != null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.ClusterParameterGroupName != null) {
    entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
  }
  if (input.AutomatedSnapshotRetentionPeriod != null) {
    entries["AutomatedSnapshotRetentionPeriod"] = input.AutomatedSnapshotRetentionPeriod;
  }
  if (input.ManualSnapshotRetentionPeriod != null) {
    entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.ClusterVersion != null) {
    entries["ClusterVersion"] = input.ClusterVersion;
  }
  if (input.AllowVersionUpgrade != null) {
    entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
  }
  if (input.NumberOfNodes != null) {
    entries["NumberOfNodes"] = input.NumberOfNodes;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.Encrypted != null) {
    entries["Encrypted"] = input.Encrypted;
  }
  if (input.HsmClientCertificateIdentifier != null) {
    entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
  }
  if (input.HsmConfigurationIdentifier != null) {
    entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
  }
  if (input.ElasticIp != null) {
    entries["ElasticIp"] = input.ElasticIp;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.EnhancedVpcRouting != null) {
    entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
  }
  if (input.AdditionalInfo != null) {
    entries["AdditionalInfo"] = input.AdditionalInfo;
  }
  if (input.IamRoles != null) {
    const memberEntries = serializeAws_queryIamRoleArnList(input.IamRoles, context);
    if (input.IamRoles?.length === 0) {
      entries.IamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaintenanceTrackName != null) {
    entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
  }
  if (input.SnapshotScheduleIdentifier != null) {
    entries["SnapshotScheduleIdentifier"] = input.SnapshotScheduleIdentifier;
  }
  if (input.AvailabilityZoneRelocation != null) {
    entries["AvailabilityZoneRelocation"] = input.AvailabilityZoneRelocation;
  }
  if (input.AquaConfigurationStatus != null) {
    entries["AquaConfigurationStatus"] = input.AquaConfigurationStatus;
  }
  if (input.DefaultIamRoleArn != null) {
    entries["DefaultIamRoleArn"] = input.DefaultIamRoleArn;
  }
  if (input.LoadSampleData != null) {
    entries["LoadSampleData"] = input.LoadSampleData;
  }
  return entries;
};

const serializeAws_queryCreateClusterParameterGroupMessage = (
  input: CreateClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupName != null) {
    entries["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.ParameterGroupFamily != null) {
    entries["ParameterGroupFamily"] = input.ParameterGroupFamily;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateClusterSecurityGroupMessage = (
  input: CreateClusterSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSecurityGroupName != null) {
    entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateClusterSnapshotMessage = (
  input: CreateClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ManualSnapshotRetentionPeriod != null) {
    entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateClusterSubnetGroupMessage = (
  input: CreateClusterSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.SubnetIds != null) {
    const memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
    if (input.SubnetIds?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateEndpointAccessMessage = (
  input: CreateEndpointAccessMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ResourceOwner != null) {
    entries["ResourceOwner"] = input.ResourceOwner;
  }
  if (input.EndpointName != null) {
    entries["EndpointName"] = input.EndpointName;
  }
  if (input.SubnetGroupName != null) {
    entries["SubnetGroupName"] = input.SubnetGroupName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateEventSubscriptionMessage = (
  input: CreateEventSubscriptionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  if (input.SnsTopicArn != null) {
    entries["SnsTopicArn"] = input.SnsTopicArn;
  }
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  if (input.SourceIds != null) {
    const memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
    if (input.SourceIds?.length === 0) {
      entries.SourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EventCategories != null) {
    const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
    if (input.EventCategories?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Severity != null) {
    entries["Severity"] = input.Severity;
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateHsmClientCertificateMessage = (
  input: CreateHsmClientCertificateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HsmClientCertificateIdentifier != null) {
    entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateHsmConfigurationMessage = (
  input: CreateHsmConfigurationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HsmConfigurationIdentifier != null) {
    entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.HsmIpAddress != null) {
    entries["HsmIpAddress"] = input.HsmIpAddress;
  }
  if (input.HsmPartitionName != null) {
    entries["HsmPartitionName"] = input.HsmPartitionName;
  }
  if (input.HsmPartitionPassword != null) {
    entries["HsmPartitionPassword"] = input.HsmPartitionPassword;
  }
  if (input.HsmServerPublicCertificate != null) {
    entries["HsmServerPublicCertificate"] = input.HsmServerPublicCertificate;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateScheduledActionMessage = (
  input: CreateScheduledActionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.TargetAction != null) {
    const memberEntries = serializeAws_queryScheduledActionType(input.TargetAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Schedule != null) {
    entries["Schedule"] = input.Schedule;
  }
  if (input.IamRole != null) {
    entries["IamRole"] = input.IamRole;
  }
  if (input.ScheduledActionDescription != null) {
    entries["ScheduledActionDescription"] = input.ScheduledActionDescription;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Enable != null) {
    entries["Enable"] = input.Enable;
  }
  return entries;
};

const serializeAws_queryCreateSnapshotCopyGrantMessage = (
  input: CreateSnapshotCopyGrantMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotCopyGrantName != null) {
    entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateSnapshotScheduleMessage = (
  input: CreateSnapshotScheduleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ScheduleDefinitions != null) {
    const memberEntries = serializeAws_queryScheduleDefinitionList(input.ScheduleDefinitions, context);
    if (input.ScheduleDefinitions?.length === 0) {
      entries.ScheduleDefinitions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduleDefinitions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ScheduleIdentifier != null) {
    entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
  }
  if (input.ScheduleDescription != null) {
    entries["ScheduleDescription"] = input.ScheduleDescription;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DryRun != null) {
    entries["DryRun"] = input.DryRun;
  }
  if (input.NextInvocations != null) {
    entries["NextInvocations"] = input.NextInvocations;
  }
  return entries;
};

const serializeAws_queryCreateTagsMessage = (input: CreateTagsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateUsageLimitMessage = (input: CreateUsageLimitMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.FeatureType != null) {
    entries["FeatureType"] = input.FeatureType;
  }
  if (input.LimitType != null) {
    entries["LimitType"] = input.LimitType;
  }
  if (input.Amount != null) {
    entries["Amount"] = input.Amount;
  }
  if (input.Period != null) {
    entries["Period"] = input.Period;
  }
  if (input.BreachAction != null) {
    entries["BreachAction"] = input.BreachAction;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDbGroupList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`DbGroup.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryDeauthorizeDataShareMessage = (
  input: DeauthorizeDataShareMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  if (input.ConsumerIdentifier != null) {
    entries["ConsumerIdentifier"] = input.ConsumerIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteAuthenticationProfileMessage = (
  input: DeleteAuthenticationProfileMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticationProfileName != null) {
    entries["AuthenticationProfileName"] = input.AuthenticationProfileName;
  }
  return entries;
};

const serializeAws_queryDeleteClusterMessage = (input: DeleteClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.SkipFinalClusterSnapshot != null) {
    entries["SkipFinalClusterSnapshot"] = input.SkipFinalClusterSnapshot;
  }
  if (input.FinalClusterSnapshotIdentifier != null) {
    entries["FinalClusterSnapshotIdentifier"] = input.FinalClusterSnapshotIdentifier;
  }
  if (input.FinalClusterSnapshotRetentionPeriod != null) {
    entries["FinalClusterSnapshotRetentionPeriod"] = input.FinalClusterSnapshotRetentionPeriod;
  }
  return entries;
};

const serializeAws_queryDeleteClusterParameterGroupMessage = (
  input: DeleteClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupName != null) {
    entries["ParameterGroupName"] = input.ParameterGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteClusterSecurityGroupMessage = (
  input: DeleteClusterSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSecurityGroupName != null) {
    entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteClusterSnapshotMessage = (
  input: DeleteClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.SnapshotClusterIdentifier != null) {
    entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteClusterSnapshotMessageList = (
  input: DeleteClusterSnapshotMessage[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryDeleteClusterSnapshotMessage(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`DeleteClusterSnapshotMessage.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryDeleteClusterSubnetGroupMessage = (
  input: DeleteClusterSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteEndpointAccessMessage = (
  input: DeleteEndpointAccessMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndpointName != null) {
    entries["EndpointName"] = input.EndpointName;
  }
  return entries;
};

const serializeAws_queryDeleteEventSubscriptionMessage = (
  input: DeleteEventSubscriptionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  return entries;
};

const serializeAws_queryDeleteHsmClientCertificateMessage = (
  input: DeleteHsmClientCertificateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HsmClientCertificateIdentifier != null) {
    entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteHsmConfigurationMessage = (
  input: DeleteHsmConfigurationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HsmConfigurationIdentifier != null) {
    entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteScheduledActionMessage = (
  input: DeleteScheduledActionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  return entries;
};

const serializeAws_queryDeleteSnapshotCopyGrantMessage = (
  input: DeleteSnapshotCopyGrantMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotCopyGrantName != null) {
    entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
  }
  return entries;
};

const serializeAws_queryDeleteSnapshotScheduleMessage = (
  input: DeleteSnapshotScheduleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ScheduleIdentifier != null) {
    entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
  }
  return entries;
};

const serializeAws_queryDeleteTagsMessage = (input: DeleteTagsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteUsageLimitMessage = (input: DeleteUsageLimitMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UsageLimitId != null) {
    entries["UsageLimitId"] = input.UsageLimitId;
  }
  return entries;
};

const serializeAws_queryDescribeAccountAttributesMessage = (
  input: DescribeAccountAttributesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AttributeNames != null) {
    const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
    if (input.AttributeNames?.length === 0) {
      entries.AttributeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeAuthenticationProfilesMessage = (
  input: DescribeAuthenticationProfilesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticationProfileName != null) {
    entries["AuthenticationProfileName"] = input.AuthenticationProfileName;
  }
  return entries;
};

const serializeAws_queryDescribeClusterDbRevisionsMessage = (
  input: DescribeClusterDbRevisionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeClusterParameterGroupsMessage = (
  input: DescribeClusterParameterGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupName != null) {
    entries["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeClusterParametersMessage = (
  input: DescribeClusterParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupName != null) {
    entries["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeClusterSecurityGroupsMessage = (
  input: DescribeClusterSecurityGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSecurityGroupName != null) {
    entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeClustersMessage = (input: DescribeClustersMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeClusterSnapshotsMessage = (
  input: DescribeClusterSnapshotsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.SnapshotArn != null) {
    entries["SnapshotArn"] = input.SnapshotArn;
  }
  if (input.SnapshotType != null) {
    entries["SnapshotType"] = input.SnapshotType;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.OwnerAccount != null) {
    entries["OwnerAccount"] = input.OwnerAccount;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClusterExists != null) {
    entries["ClusterExists"] = input.ClusterExists;
  }
  if (input.SortingEntities != null) {
    const memberEntries = serializeAws_querySnapshotSortingEntityList(input.SortingEntities, context);
    if (input.SortingEntities?.length === 0) {
      entries.SortingEntities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SortingEntities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeClusterSubnetGroupsMessage = (
  input: DescribeClusterSubnetGroupsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeClusterTracksMessage = (
  input: DescribeClusterTracksMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaintenanceTrackName != null) {
    entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeClusterVersionsMessage = (
  input: DescribeClusterVersionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterVersion != null) {
    entries["ClusterVersion"] = input.ClusterVersion;
  }
  if (input.ClusterParameterGroupFamily != null) {
    entries["ClusterParameterGroupFamily"] = input.ClusterParameterGroupFamily;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeDataSharesForConsumerMessage = (
  input: DescribeDataSharesForConsumerMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ConsumerArn != null) {
    entries["ConsumerArn"] = input.ConsumerArn;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeDataSharesForProducerMessage = (
  input: DescribeDataSharesForProducerMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ProducerArn != null) {
    entries["ProducerArn"] = input.ProducerArn;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeDataSharesMessage = (
  input: DescribeDataSharesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeDefaultClusterParametersMessage = (
  input: DescribeDefaultClusterParametersMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupFamily != null) {
    entries["ParameterGroupFamily"] = input.ParameterGroupFamily;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeEndpointAccessMessage = (
  input: DescribeEndpointAccessMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ResourceOwner != null) {
    entries["ResourceOwner"] = input.ResourceOwner;
  }
  if (input.EndpointName != null) {
    entries["EndpointName"] = input.EndpointName;
  }
  if (input.VpcId != null) {
    entries["VpcId"] = input.VpcId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeEndpointAuthorizationMessage = (
  input: DescribeEndpointAuthorizationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.Account != null) {
    entries["Account"] = input.Account;
  }
  if (input.Grantee != null) {
    entries["Grantee"] = input.Grantee;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeEventCategoriesMessage = (
  input: DescribeEventCategoriesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  return entries;
};

const serializeAws_queryDescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceIdentifier != null) {
    entries["SourceIdentifier"] = input.SourceIdentifier;
  }
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Duration != null) {
    entries["Duration"] = input.Duration;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeEventSubscriptionsMessage = (
  input: DescribeEventSubscriptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeHsmClientCertificatesMessage = (
  input: DescribeHsmClientCertificatesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HsmClientCertificateIdentifier != null) {
    entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeHsmConfigurationsMessage = (
  input: DescribeHsmConfigurationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HsmConfigurationIdentifier != null) {
    entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeLoggingStatusMessage = (
  input: DescribeLoggingStatusMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryDescribeNodeConfigurationOptionsMessage = (
  input: DescribeNodeConfigurationOptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActionType != null) {
    entries["ActionType"] = input.ActionType;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.SnapshotArn != null) {
    entries["SnapshotArn"] = input.SnapshotArn;
  }
  if (input.OwnerAccount != null) {
    entries["OwnerAccount"] = input.OwnerAccount;
  }
  if (input.Filters != null) {
    const memberEntries = serializeAws_queryNodeConfigurationOptionsFilterList(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filter = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeOrderableClusterOptionsMessage = (
  input: DescribeOrderableClusterOptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterVersion != null) {
    entries["ClusterVersion"] = input.ClusterVersion;
  }
  if (input.NodeType != null) {
    entries["NodeType"] = input.NodeType;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribePartnersInputMessage = (
  input: DescribePartnersInputMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AccountId != null) {
    entries["AccountId"] = input.AccountId;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.DatabaseName != null) {
    entries["DatabaseName"] = input.DatabaseName;
  }
  if (input.PartnerName != null) {
    entries["PartnerName"] = input.PartnerName;
  }
  return entries;
};

const serializeAws_queryDescribeReservedNodeExchangeStatusInputMessage = (
  input: DescribeReservedNodeExchangeStatusInputMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReservedNodeId != null) {
    entries["ReservedNodeId"] = input.ReservedNodeId;
  }
  if (input.ReservedNodeExchangeRequestId != null) {
    entries["ReservedNodeExchangeRequestId"] = input.ReservedNodeExchangeRequestId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeReservedNodeOfferingsMessage = (
  input: DescribeReservedNodeOfferingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReservedNodeOfferingId != null) {
    entries["ReservedNodeOfferingId"] = input.ReservedNodeOfferingId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeReservedNodesMessage = (
  input: DescribeReservedNodesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReservedNodeId != null) {
    entries["ReservedNodeId"] = input.ReservedNodeId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeResizeMessage = (input: DescribeResizeMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryDescribeScheduledActionsMessage = (
  input: DescribeScheduledActionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.TargetActionType != null) {
    entries["TargetActionType"] = input.TargetActionType;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Active != null) {
    entries["Active"] = input.Active;
  }
  if (input.Filters != null) {
    const memberEntries = serializeAws_queryScheduledActionFilterList(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeSnapshotCopyGrantsMessage = (
  input: DescribeSnapshotCopyGrantsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotCopyGrantName != null) {
    entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeSnapshotSchedulesMessage = (
  input: DescribeSnapshotSchedulesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ScheduleIdentifier != null) {
    entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

const serializeAws_queryDescribeTableRestoreStatusMessage = (
  input: DescribeTableRestoreStatusMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.TableRestoreRequestId != null) {
    entries["TableRestoreRequestId"] = input.TableRestoreRequestId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryDescribeTagsMessage = (input: DescribeTagsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.ResourceType != null) {
    entries["ResourceType"] = input.ResourceType;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeUsageLimitsMessage = (
  input: DescribeUsageLimitsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.UsageLimitId != null) {
    entries["UsageLimitId"] = input.UsageLimitId;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.FeatureType != null) {
    entries["FeatureType"] = input.FeatureType;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
    if (input.TagValues?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDisableLoggingMessage = (input: DisableLoggingMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryDisableSnapshotCopyMessage = (
  input: DisableSnapshotCopyMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryDisassociateDataShareConsumerMessage = (
  input: DisassociateDataShareConsumerMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  if (input.DisassociateEntireAccount != null) {
    entries["DisassociateEntireAccount"] = input.DisassociateEntireAccount;
  }
  if (input.ConsumerArn != null) {
    entries["ConsumerArn"] = input.ConsumerArn;
  }
  if (input.ConsumerRegion != null) {
    entries["ConsumerRegion"] = input.ConsumerRegion;
  }
  return entries;
};

const serializeAws_queryEnableLoggingMessage = (input: EnableLoggingMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.BucketName != null) {
    entries["BucketName"] = input.BucketName;
  }
  if (input.S3KeyPrefix != null) {
    entries["S3KeyPrefix"] = input.S3KeyPrefix;
  }
  if (input.LogDestinationType != null) {
    entries["LogDestinationType"] = input.LogDestinationType;
  }
  if (input.LogExports != null) {
    const memberEntries = serializeAws_queryLogTypeList(input.LogExports, context);
    if (input.LogExports?.length === 0) {
      entries.LogExports = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogExports.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEnableSnapshotCopyMessage = (
  input: EnableSnapshotCopyMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.DestinationRegion != null) {
    entries["DestinationRegion"] = input.DestinationRegion;
  }
  if (input.RetentionPeriod != null) {
    entries["RetentionPeriod"] = input.RetentionPeriod;
  }
  if (input.SnapshotCopyGrantName != null) {
    entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
  }
  if (input.ManualSnapshotRetentionPeriod != null) {
    entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
  }
  return entries;
};

const serializeAws_queryEventCategoriesList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`EventCategory.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryGetClusterCredentialsMessage = (
  input: GetClusterCredentialsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DbUser != null) {
    entries["DbUser"] = input.DbUser;
  }
  if (input.DbName != null) {
    entries["DbName"] = input.DbName;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.AutoCreate != null) {
    entries["AutoCreate"] = input.AutoCreate;
  }
  if (input.DbGroups != null) {
    const memberEntries = serializeAws_queryDbGroupList(input.DbGroups, context);
    if (input.DbGroups?.length === 0) {
      entries.DbGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DbGroups.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetClusterCredentialsWithIAMMessage = (
  input: GetClusterCredentialsWithIAMMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DbName != null) {
    entries["DbName"] = input.DbName;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
};

const serializeAws_queryGetReservedNodeExchangeConfigurationOptionsInputMessage = (
  input: GetReservedNodeExchangeConfigurationOptionsInputMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActionType != null) {
    entries["ActionType"] = input.ActionType;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage = (
  input: GetReservedNodeExchangeOfferingsInputMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReservedNodeId != null) {
    entries["ReservedNodeId"] = input.ReservedNodeId;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

const serializeAws_queryIamRoleArnList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`IamRoleArn.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryLogTypeList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryModifyAquaInputMessage = (input: ModifyAquaInputMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.AquaConfigurationStatus != null) {
    entries["AquaConfigurationStatus"] = input.AquaConfigurationStatus;
  }
  return entries;
};

const serializeAws_queryModifyAuthenticationProfileMessage = (
  input: ModifyAuthenticationProfileMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticationProfileName != null) {
    entries["AuthenticationProfileName"] = input.AuthenticationProfileName;
  }
  if (input.AuthenticationProfileContent != null) {
    entries["AuthenticationProfileContent"] = input.AuthenticationProfileContent;
  }
  return entries;
};

const serializeAws_queryModifyClusterDbRevisionMessage = (
  input: ModifyClusterDbRevisionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.RevisionTarget != null) {
    entries["RevisionTarget"] = input.RevisionTarget;
  }
  return entries;
};

const serializeAws_queryModifyClusterIamRolesMessage = (
  input: ModifyClusterIamRolesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.AddIamRoles != null) {
    const memberEntries = serializeAws_queryIamRoleArnList(input.AddIamRoles, context);
    if (input.AddIamRoles?.length === 0) {
      entries.AddIamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AddIamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RemoveIamRoles != null) {
    const memberEntries = serializeAws_queryIamRoleArnList(input.RemoveIamRoles, context);
    if (input.RemoveIamRoles?.length === 0) {
      entries.RemoveIamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RemoveIamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultIamRoleArn != null) {
    entries["DefaultIamRoleArn"] = input.DefaultIamRoleArn;
  }
  return entries;
};

const serializeAws_queryModifyClusterMaintenanceMessage = (
  input: ModifyClusterMaintenanceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.DeferMaintenance != null) {
    entries["DeferMaintenance"] = input.DeferMaintenance;
  }
  if (input.DeferMaintenanceIdentifier != null) {
    entries["DeferMaintenanceIdentifier"] = input.DeferMaintenanceIdentifier;
  }
  if (input.DeferMaintenanceStartTime != null) {
    entries["DeferMaintenanceStartTime"] = input.DeferMaintenanceStartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.DeferMaintenanceEndTime != null) {
    entries["DeferMaintenanceEndTime"] = input.DeferMaintenanceEndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.DeferMaintenanceDuration != null) {
    entries["DeferMaintenanceDuration"] = input.DeferMaintenanceDuration;
  }
  return entries;
};

const serializeAws_queryModifyClusterMessage = (input: ModifyClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ClusterType != null) {
    entries["ClusterType"] = input.ClusterType;
  }
  if (input.NodeType != null) {
    entries["NodeType"] = input.NodeType;
  }
  if (input.NumberOfNodes != null) {
    entries["NumberOfNodes"] = input.NumberOfNodes;
  }
  if (input.ClusterSecurityGroups != null) {
    const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
    if (input.ClusterSecurityGroups?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MasterUserPassword != null) {
    entries["MasterUserPassword"] = input.MasterUserPassword;
  }
  if (input.ClusterParameterGroupName != null) {
    entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
  }
  if (input.AutomatedSnapshotRetentionPeriod != null) {
    entries["AutomatedSnapshotRetentionPeriod"] = input.AutomatedSnapshotRetentionPeriod;
  }
  if (input.ManualSnapshotRetentionPeriod != null) {
    entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.ClusterVersion != null) {
    entries["ClusterVersion"] = input.ClusterVersion;
  }
  if (input.AllowVersionUpgrade != null) {
    entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
  }
  if (input.HsmClientCertificateIdentifier != null) {
    entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
  }
  if (input.HsmConfigurationIdentifier != null) {
    entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
  }
  if (input.NewClusterIdentifier != null) {
    entries["NewClusterIdentifier"] = input.NewClusterIdentifier;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.ElasticIp != null) {
    entries["ElasticIp"] = input.ElasticIp;
  }
  if (input.EnhancedVpcRouting != null) {
    entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
  }
  if (input.MaintenanceTrackName != null) {
    entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
  }
  if (input.Encrypted != null) {
    entries["Encrypted"] = input.Encrypted;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.AvailabilityZoneRelocation != null) {
    entries["AvailabilityZoneRelocation"] = input.AvailabilityZoneRelocation;
  }
  if (input.AvailabilityZone != null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  return entries;
};

const serializeAws_queryModifyClusterParameterGroupMessage = (
  input: ModifyClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupName != null) {
    entries["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.Parameters != null) {
    const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryModifyClusterSnapshotMessage = (
  input: ModifyClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.ManualSnapshotRetentionPeriod != null) {
    entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
  }
  if (input.Force != null) {
    entries["Force"] = input.Force;
  }
  return entries;
};

const serializeAws_queryModifyClusterSnapshotScheduleMessage = (
  input: ModifyClusterSnapshotScheduleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ScheduleIdentifier != null) {
    entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
  }
  if (input.DisassociateSchedule != null) {
    entries["DisassociateSchedule"] = input.DisassociateSchedule;
  }
  return entries;
};

const serializeAws_queryModifyClusterSubnetGroupMessage = (
  input: ModifyClusterSubnetGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.SubnetIds != null) {
    const memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
    if (input.SubnetIds?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryModifyEndpointAccessMessage = (
  input: ModifyEndpointAccessMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndpointName != null) {
    entries["EndpointName"] = input.EndpointName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryModifyEventSubscriptionMessage = (
  input: ModifyEventSubscriptionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  if (input.SnsTopicArn != null) {
    entries["SnsTopicArn"] = input.SnsTopicArn;
  }
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  if (input.SourceIds != null) {
    const memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
    if (input.SourceIds?.length === 0) {
      entries.SourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EventCategories != null) {
    const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
    if (input.EventCategories?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Severity != null) {
    entries["Severity"] = input.Severity;
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryModifyScheduledActionMessage = (
  input: ModifyScheduledActionMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.TargetAction != null) {
    const memberEntries = serializeAws_queryScheduledActionType(input.TargetAction, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Schedule != null) {
    entries["Schedule"] = input.Schedule;
  }
  if (input.IamRole != null) {
    entries["IamRole"] = input.IamRole;
  }
  if (input.ScheduledActionDescription != null) {
    entries["ScheduledActionDescription"] = input.ScheduledActionDescription;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Enable != null) {
    entries["Enable"] = input.Enable;
  }
  return entries;
};

const serializeAws_queryModifySnapshotCopyRetentionPeriodMessage = (
  input: ModifySnapshotCopyRetentionPeriodMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.RetentionPeriod != null) {
    entries["RetentionPeriod"] = input.RetentionPeriod;
  }
  if (input.Manual != null) {
    entries["Manual"] = input.Manual;
  }
  return entries;
};

const serializeAws_queryModifySnapshotScheduleMessage = (
  input: ModifySnapshotScheduleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ScheduleIdentifier != null) {
    entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
  }
  if (input.ScheduleDefinitions != null) {
    const memberEntries = serializeAws_queryScheduleDefinitionList(input.ScheduleDefinitions, context);
    if (input.ScheduleDefinitions?.length === 0) {
      entries.ScheduleDefinitions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduleDefinitions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryModifyUsageLimitMessage = (input: ModifyUsageLimitMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UsageLimitId != null) {
    entries["UsageLimitId"] = input.UsageLimitId;
  }
  if (input.Amount != null) {
    entries["Amount"] = input.Amount;
  }
  if (input.BreachAction != null) {
    entries["BreachAction"] = input.BreachAction;
  }
  return entries;
};

const serializeAws_queryNodeConfigurationOptionsFilter = (
  input: NodeConfigurationOptionsFilter,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Operator != null) {
    entries["Operator"] = input.Operator;
  }
  if (input.Values != null) {
    const memberEntries = serializeAws_queryValueStringList(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Value = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Value.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryNodeConfigurationOptionsFilterList = (
  input: NodeConfigurationOptionsFilter[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryNodeConfigurationOptionsFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`NodeConfigurationOptionsFilter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryParameter = (input: Parameter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ParameterName != null) {
    entries["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue != null) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Source != null) {
    entries["Source"] = input.Source;
  }
  if (input.DataType != null) {
    entries["DataType"] = input.DataType;
  }
  if (input.AllowedValues != null) {
    entries["AllowedValues"] = input.AllowedValues;
  }
  if (input.ApplyType != null) {
    entries["ApplyType"] = input.ApplyType;
  }
  if (input.IsModifiable != null) {
    entries["IsModifiable"] = input.IsModifiable;
  }
  if (input.MinimumEngineVersion != null) {
    entries["MinimumEngineVersion"] = input.MinimumEngineVersion;
  }
  return entries;
};

const serializeAws_queryParametersList = (input: Parameter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryParameter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Parameter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPartnerIntegrationInputMessage = (
  input: PartnerIntegrationInputMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AccountId != null) {
    entries["AccountId"] = input.AccountId;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.DatabaseName != null) {
    entries["DatabaseName"] = input.DatabaseName;
  }
  if (input.PartnerName != null) {
    entries["PartnerName"] = input.PartnerName;
  }
  return entries;
};

const serializeAws_queryPauseClusterMessage = (input: PauseClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryPurchaseReservedNodeOfferingMessage = (
  input: PurchaseReservedNodeOfferingMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ReservedNodeOfferingId != null) {
    entries["ReservedNodeOfferingId"] = input.ReservedNodeOfferingId;
  }
  if (input.NodeCount != null) {
    entries["NodeCount"] = input.NodeCount;
  }
  return entries;
};

const serializeAws_queryRebootClusterMessage = (input: RebootClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryRejectDataShareMessage = (input: RejectDataShareMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  return entries;
};

const serializeAws_queryResetClusterParameterGroupMessage = (
  input: ResetClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupName != null) {
    entries["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.ResetAllParameters != null) {
    entries["ResetAllParameters"] = input.ResetAllParameters;
  }
  if (input.Parameters != null) {
    const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryResizeClusterMessage = (input: ResizeClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ClusterType != null) {
    entries["ClusterType"] = input.ClusterType;
  }
  if (input.NodeType != null) {
    entries["NodeType"] = input.NodeType;
  }
  if (input.NumberOfNodes != null) {
    entries["NumberOfNodes"] = input.NumberOfNodes;
  }
  if (input.Classic != null) {
    entries["Classic"] = input.Classic;
  }
  if (input.ReservedNodeId != null) {
    entries["ReservedNodeId"] = input.ReservedNodeId;
  }
  if (input.TargetReservedNodeOfferingId != null) {
    entries["TargetReservedNodeOfferingId"] = input.TargetReservedNodeOfferingId;
  }
  return entries;
};

const serializeAws_queryRestoreFromClusterSnapshotMessage = (
  input: RestoreFromClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.SnapshotArn != null) {
    entries["SnapshotArn"] = input.SnapshotArn;
  }
  if (input.SnapshotClusterIdentifier != null) {
    entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.AvailabilityZone != null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.AllowVersionUpgrade != null) {
    entries["AllowVersionUpgrade"] = input.AllowVersionUpgrade;
  }
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  if (input.PubliclyAccessible != null) {
    entries["PubliclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.OwnerAccount != null) {
    entries["OwnerAccount"] = input.OwnerAccount;
  }
  if (input.HsmClientCertificateIdentifier != null) {
    entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
  }
  if (input.HsmConfigurationIdentifier != null) {
    entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
  }
  if (input.ElasticIp != null) {
    entries["ElasticIp"] = input.ElasticIp;
  }
  if (input.ClusterParameterGroupName != null) {
    entries["ClusterParameterGroupName"] = input.ClusterParameterGroupName;
  }
  if (input.ClusterSecurityGroups != null) {
    const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
    if (input.ClusterSecurityGroups?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
    if (input.VpcSecurityGroupIds?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PreferredMaintenanceWindow != null) {
    entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.AutomatedSnapshotRetentionPeriod != null) {
    entries["AutomatedSnapshotRetentionPeriod"] = input.AutomatedSnapshotRetentionPeriod;
  }
  if (input.ManualSnapshotRetentionPeriod != null) {
    entries["ManualSnapshotRetentionPeriod"] = input.ManualSnapshotRetentionPeriod;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.NodeType != null) {
    entries["NodeType"] = input.NodeType;
  }
  if (input.EnhancedVpcRouting != null) {
    entries["EnhancedVpcRouting"] = input.EnhancedVpcRouting;
  }
  if (input.AdditionalInfo != null) {
    entries["AdditionalInfo"] = input.AdditionalInfo;
  }
  if (input.IamRoles != null) {
    const memberEntries = serializeAws_queryIamRoleArnList(input.IamRoles, context);
    if (input.IamRoles?.length === 0) {
      entries.IamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaintenanceTrackName != null) {
    entries["MaintenanceTrackName"] = input.MaintenanceTrackName;
  }
  if (input.SnapshotScheduleIdentifier != null) {
    entries["SnapshotScheduleIdentifier"] = input.SnapshotScheduleIdentifier;
  }
  if (input.NumberOfNodes != null) {
    entries["NumberOfNodes"] = input.NumberOfNodes;
  }
  if (input.AvailabilityZoneRelocation != null) {
    entries["AvailabilityZoneRelocation"] = input.AvailabilityZoneRelocation;
  }
  if (input.AquaConfigurationStatus != null) {
    entries["AquaConfigurationStatus"] = input.AquaConfigurationStatus;
  }
  if (input.DefaultIamRoleArn != null) {
    entries["DefaultIamRoleArn"] = input.DefaultIamRoleArn;
  }
  if (input.ReservedNodeId != null) {
    entries["ReservedNodeId"] = input.ReservedNodeId;
  }
  if (input.TargetReservedNodeOfferingId != null) {
    entries["TargetReservedNodeOfferingId"] = input.TargetReservedNodeOfferingId;
  }
  if (input.Encrypted != null) {
    entries["Encrypted"] = input.Encrypted;
  }
  return entries;
};

const serializeAws_queryRestoreTableFromClusterSnapshotMessage = (
  input: RestoreTableFromClusterSnapshotMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.SourceDatabaseName != null) {
    entries["SourceDatabaseName"] = input.SourceDatabaseName;
  }
  if (input.SourceSchemaName != null) {
    entries["SourceSchemaName"] = input.SourceSchemaName;
  }
  if (input.SourceTableName != null) {
    entries["SourceTableName"] = input.SourceTableName;
  }
  if (input.TargetDatabaseName != null) {
    entries["TargetDatabaseName"] = input.TargetDatabaseName;
  }
  if (input.TargetSchemaName != null) {
    entries["TargetSchemaName"] = input.TargetSchemaName;
  }
  if (input.NewTableName != null) {
    entries["NewTableName"] = input.NewTableName;
  }
  if (input.EnableCaseSensitiveIdentifier != null) {
    entries["EnableCaseSensitiveIdentifier"] = input.EnableCaseSensitiveIdentifier;
  }
  return entries;
};

const serializeAws_queryResumeClusterMessage = (input: ResumeClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryRevokeClusterSecurityGroupIngressMessage = (
  input: RevokeClusterSecurityGroupIngressMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSecurityGroupName != null) {
    entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
  }
  if (input.CIDRIP != null) {
    entries["CIDRIP"] = input.CIDRIP;
  }
  if (input.EC2SecurityGroupName != null) {
    entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
  }
  if (input.EC2SecurityGroupOwnerId != null) {
    entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
  }
  return entries;
};

const serializeAws_queryRevokeEndpointAccessMessage = (
  input: RevokeEndpointAccessMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.Account != null) {
    entries["Account"] = input.Account;
  }
  if (input.VpcIds != null) {
    const memberEntries = serializeAws_queryVpcIdentifierList(input.VpcIds, context);
    if (input.VpcIds?.length === 0) {
      entries.VpcIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Force != null) {
    entries["Force"] = input.Force;
  }
  return entries;
};

const serializeAws_queryRevokeSnapshotAccessMessage = (
  input: RevokeSnapshotAccessMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.SnapshotArn != null) {
    entries["SnapshotArn"] = input.SnapshotArn;
  }
  if (input.SnapshotClusterIdentifier != null) {
    entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
  }
  if (input.AccountWithRestoreAccess != null) {
    entries["AccountWithRestoreAccess"] = input.AccountWithRestoreAccess;
  }
  return entries;
};

const serializeAws_queryRotateEncryptionKeyMessage = (
  input: RotateEncryptionKeyMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

const serializeAws_queryScheduledActionFilter = (input: ScheduledActionFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Values != null) {
    const memberEntries = serializeAws_queryValueStringList(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryScheduledActionFilterList = (input: ScheduledActionFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryScheduledActionFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ScheduledActionFilter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryScheduledActionType = (input: ScheduledActionType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResizeCluster != null) {
    const memberEntries = serializeAws_queryResizeClusterMessage(input.ResizeCluster, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResizeCluster.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PauseCluster != null) {
    const memberEntries = serializeAws_queryPauseClusterMessage(input.PauseCluster, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PauseCluster.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResumeCluster != null) {
    const memberEntries = serializeAws_queryResumeClusterMessage(input.ResumeCluster, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResumeCluster.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryScheduleDefinitionList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`ScheduleDefinition.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySnapshotIdentifierList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`String.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySnapshotSortingEntity = (input: SnapshotSortingEntity, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Attribute != null) {
    entries["Attribute"] = input.Attribute;
  }
  if (input.SortOrder != null) {
    entries["SortOrder"] = input.SortOrder;
  }
  return entries;
};

const serializeAws_querySnapshotSortingEntityList = (input: SnapshotSortingEntity[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_querySnapshotSortingEntity(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`SnapshotSortingEntity.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySourceIdsList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`SourceId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`SubnetIdentifier.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`TagKey.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Tag.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTagValueList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`TagValue.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryUpdatePartnerStatusInputMessage = (
  input: UpdatePartnerStatusInputMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AccountId != null) {
    entries["AccountId"] = input.AccountId;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.DatabaseName != null) {
    entries["DatabaseName"] = input.DatabaseName;
  }
  if (input.PartnerName != null) {
    entries["PartnerName"] = input.PartnerName;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  if (input.StatusMessage != null) {
    entries["StatusMessage"] = input.StatusMessage;
  }
  return entries;
};

const serializeAws_queryValueStringList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`item.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryVpcIdentifierList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`VpcIdentifier.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryVpcSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`VpcSecurityGroupId.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const deserializeAws_queryAcceptReservedNodeExchangeOutputMessage = (
  output: any,
  context: __SerdeContext
): AcceptReservedNodeExchangeOutputMessage => {
  const contents: any = {
    ExchangedReservedNode: undefined,
  };
  if (output["ExchangedReservedNode"] !== undefined) {
    contents.ExchangedReservedNode = deserializeAws_queryReservedNode(output["ExchangedReservedNode"], context);
  }
  return contents;
};

const deserializeAws_queryAccessToClusterDeniedFault = (
  output: any,
  context: __SerdeContext
): AccessToClusterDeniedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAccessToSnapshotDeniedFault = (
  output: any,
  context: __SerdeContext
): AccessToSnapshotDeniedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAccountAttribute = (output: any, context: __SerdeContext): AccountAttribute => {
  const contents: any = {
    AttributeName: undefined,
    AttributeValues: undefined,
  };
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName = __expectString(output["AttributeName"]);
  }
  if (output.AttributeValues === "") {
    contents.AttributeValues = [];
  } else if (
    output["AttributeValues"] !== undefined &&
    output["AttributeValues"]["AttributeValueTarget"] !== undefined
  ) {
    contents.AttributeValues = deserializeAws_queryAttributeValueList(
      __getArrayIfSingleItem(output["AttributeValues"]["AttributeValueTarget"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAccountAttributeList = (output: any, context: __SerdeContext): AccountAttributeList => {
  const contents: any = {
    AccountAttributes: undefined,
  };
  if (output.AccountAttributes === "") {
    contents.AccountAttributes = [];
  } else if (
    output["AccountAttributes"] !== undefined &&
    output["AccountAttributes"]["AccountAttribute"] !== undefined
  ) {
    contents.AccountAttributes = deserializeAws_queryAttributeList(
      __getArrayIfSingleItem(output["AccountAttributes"]["AccountAttribute"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAccountsWithRestoreAccessList = (
  output: any,
  context: __SerdeContext
): AccountWithRestoreAccess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAccountWithRestoreAccess(entry, context);
    });
};

const deserializeAws_queryAccountWithRestoreAccess = (
  output: any,
  context: __SerdeContext
): AccountWithRestoreAccess => {
  const contents: any = {
    AccountId: undefined,
    AccountAlias: undefined,
  };
  if (output["AccountId"] !== undefined) {
    contents.AccountId = __expectString(output["AccountId"]);
  }
  if (output["AccountAlias"] !== undefined) {
    contents.AccountAlias = __expectString(output["AccountAlias"]);
  }
  return contents;
};

const deserializeAws_queryAquaConfiguration = (output: any, context: __SerdeContext): AquaConfiguration => {
  const contents: any = {
    AquaStatus: undefined,
    AquaConfigurationStatus: undefined,
  };
  if (output["AquaStatus"] !== undefined) {
    contents.AquaStatus = __expectString(output["AquaStatus"]);
  }
  if (output["AquaConfigurationStatus"] !== undefined) {
    contents.AquaConfigurationStatus = __expectString(output["AquaConfigurationStatus"]);
  }
  return contents;
};

const deserializeAws_queryAssociatedClusterList = (
  output: any,
  context: __SerdeContext
): ClusterAssociatedToSchedule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterAssociatedToSchedule(entry, context);
    });
};

const deserializeAws_queryAttributeList = (output: any, context: __SerdeContext): AccountAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAccountAttribute(entry, context);
    });
};

const deserializeAws_queryAttributeValueList = (output: any, context: __SerdeContext): AttributeValueTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAttributeValueTarget(entry, context);
    });
};

const deserializeAws_queryAttributeValueTarget = (output: any, context: __SerdeContext): AttributeValueTarget => {
  const contents: any = {
    AttributeValue: undefined,
  };
  if (output["AttributeValue"] !== undefined) {
    contents.AttributeValue = __expectString(output["AttributeValue"]);
  }
  return contents;
};

const deserializeAws_queryAuthenticationProfile = (output: any, context: __SerdeContext): AuthenticationProfile => {
  const contents: any = {
    AuthenticationProfileName: undefined,
    AuthenticationProfileContent: undefined,
  };
  if (output["AuthenticationProfileName"] !== undefined) {
    contents.AuthenticationProfileName = __expectString(output["AuthenticationProfileName"]);
  }
  if (output["AuthenticationProfileContent"] !== undefined) {
    contents.AuthenticationProfileContent = __expectString(output["AuthenticationProfileContent"]);
  }
  return contents;
};

const deserializeAws_queryAuthenticationProfileAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): AuthenticationProfileAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthenticationProfileList = (
  output: any,
  context: __SerdeContext
): AuthenticationProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAuthenticationProfile(entry, context);
    });
};

const deserializeAws_queryAuthenticationProfileNotFoundFault = (
  output: any,
  context: __SerdeContext
): AuthenticationProfileNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthenticationProfileQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): AuthenticationProfileQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthorizationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): AuthorizationAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthorizationNotFoundFault = (
  output: any,
  context: __SerdeContext
): AuthorizationNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthorizationQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): AuthorizationQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): AuthorizeClusterSecurityGroupIngressResult => {
  const contents: any = {
    ClusterSecurityGroup: undefined,
  };
  if (output["ClusterSecurityGroup"] !== undefined) {
    contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
  }
  return contents;
};

const deserializeAws_queryAuthorizeSnapshotAccessResult = (
  output: any,
  context: __SerdeContext
): AuthorizeSnapshotAccessResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryAvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {
    Name: undefined,
    SupportedPlatforms: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output.SupportedPlatforms === "") {
    contents.SupportedPlatforms = [];
  } else if (
    output["SupportedPlatforms"] !== undefined &&
    output["SupportedPlatforms"]["SupportedPlatform"] !== undefined
  ) {
    contents.SupportedPlatforms = deserializeAws_querySupportedPlatformsList(
      __getArrayIfSingleItem(output["SupportedPlatforms"]["SupportedPlatform"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAvailabilityZoneList = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAvailabilityZone(entry, context);
    });
};

const deserializeAws_queryBatchDeleteClusterSnapshotsResult = (
  output: any,
  context: __SerdeContext
): BatchDeleteClusterSnapshotsResult => {
  const contents: any = {
    Resources: undefined,
    Errors: undefined,
  };
  if (output.Resources === "") {
    contents.Resources = [];
  } else if (output["Resources"] !== undefined && output["Resources"]["String"] !== undefined) {
    contents.Resources = deserializeAws_querySnapshotIdentifierList(
      __getArrayIfSingleItem(output["Resources"]["String"]),
      context
    );
  }
  if (output.Errors === "") {
    contents.Errors = [];
  } else if (output["Errors"] !== undefined && output["Errors"]["SnapshotErrorMessage"] !== undefined) {
    contents.Errors = deserializeAws_queryBatchSnapshotOperationErrorList(
      __getArrayIfSingleItem(output["Errors"]["SnapshotErrorMessage"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryBatchDeleteRequestSizeExceededFault = (
  output: any,
  context: __SerdeContext
): BatchDeleteRequestSizeExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault = (
  output: any,
  context: __SerdeContext
): BatchModifyClusterSnapshotsLimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage = (
  output: any,
  context: __SerdeContext
): BatchModifyClusterSnapshotsOutputMessage => {
  const contents: any = {
    Resources: undefined,
    Errors: undefined,
  };
  if (output.Resources === "") {
    contents.Resources = [];
  } else if (output["Resources"] !== undefined && output["Resources"]["String"] !== undefined) {
    contents.Resources = deserializeAws_querySnapshotIdentifierList(
      __getArrayIfSingleItem(output["Resources"]["String"]),
      context
    );
  }
  if (output.Errors === "") {
    contents.Errors = [];
  } else if (output["Errors"] !== undefined && output["Errors"]["SnapshotErrorMessage"] !== undefined) {
    contents.Errors = deserializeAws_queryBatchSnapshotOperationErrors(
      __getArrayIfSingleItem(output["Errors"]["SnapshotErrorMessage"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryBatchSnapshotOperationErrorList = (
  output: any,
  context: __SerdeContext
): SnapshotErrorMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySnapshotErrorMessage(entry, context);
    });
};

const deserializeAws_queryBatchSnapshotOperationErrors = (
  output: any,
  context: __SerdeContext
): SnapshotErrorMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySnapshotErrorMessage(entry, context);
    });
};

const deserializeAws_queryBucketNotFoundFault = (output: any, context: __SerdeContext): BucketNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCluster = (output: any, context: __SerdeContext): Cluster => {
  const contents: any = {
    ClusterIdentifier: undefined,
    NodeType: undefined,
    ClusterStatus: undefined,
    ClusterAvailabilityStatus: undefined,
    ModifyStatus: undefined,
    MasterUsername: undefined,
    DBName: undefined,
    Endpoint: undefined,
    ClusterCreateTime: undefined,
    AutomatedSnapshotRetentionPeriod: undefined,
    ManualSnapshotRetentionPeriod: undefined,
    ClusterSecurityGroups: undefined,
    VpcSecurityGroups: undefined,
    ClusterParameterGroups: undefined,
    ClusterSubnetGroupName: undefined,
    VpcId: undefined,
    AvailabilityZone: undefined,
    PreferredMaintenanceWindow: undefined,
    PendingModifiedValues: undefined,
    ClusterVersion: undefined,
    AllowVersionUpgrade: undefined,
    NumberOfNodes: undefined,
    PubliclyAccessible: undefined,
    Encrypted: undefined,
    RestoreStatus: undefined,
    DataTransferProgress: undefined,
    HsmStatus: undefined,
    ClusterSnapshotCopyStatus: undefined,
    ClusterPublicKey: undefined,
    ClusterNodes: undefined,
    ElasticIpStatus: undefined,
    ClusterRevisionNumber: undefined,
    Tags: undefined,
    KmsKeyId: undefined,
    EnhancedVpcRouting: undefined,
    IamRoles: undefined,
    PendingActions: undefined,
    MaintenanceTrackName: undefined,
    ElasticResizeNumberOfNodeOptions: undefined,
    DeferredMaintenanceWindows: undefined,
    SnapshotScheduleIdentifier: undefined,
    SnapshotScheduleState: undefined,
    ExpectedNextSnapshotScheduleTime: undefined,
    ExpectedNextSnapshotScheduleTimeStatus: undefined,
    NextMaintenanceWindowStartTime: undefined,
    ResizeInfo: undefined,
    AvailabilityZoneRelocationStatus: undefined,
    ClusterNamespaceArn: undefined,
    TotalStorageCapacityInMegaBytes: undefined,
    AquaConfiguration: undefined,
    DefaultIamRoleArn: undefined,
    ReservedNodeExchangeStatus: undefined,
  };
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["NodeType"] !== undefined) {
    contents.NodeType = __expectString(output["NodeType"]);
  }
  if (output["ClusterStatus"] !== undefined) {
    contents.ClusterStatus = __expectString(output["ClusterStatus"]);
  }
  if (output["ClusterAvailabilityStatus"] !== undefined) {
    contents.ClusterAvailabilityStatus = __expectString(output["ClusterAvailabilityStatus"]);
  }
  if (output["ModifyStatus"] !== undefined) {
    contents.ModifyStatus = __expectString(output["ModifyStatus"]);
  }
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = __expectString(output["MasterUsername"]);
  }
  if (output["DBName"] !== undefined) {
    contents.DBName = __expectString(output["DBName"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
  }
  if (output["ClusterCreateTime"] !== undefined) {
    contents.ClusterCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ClusterCreateTime"]));
  }
  if (output["AutomatedSnapshotRetentionPeriod"] !== undefined) {
    contents.AutomatedSnapshotRetentionPeriod = __strictParseInt32(
      output["AutomatedSnapshotRetentionPeriod"]
    ) as number;
  }
  if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
    contents.ManualSnapshotRetentionPeriod = __strictParseInt32(output["ManualSnapshotRetentionPeriod"]) as number;
  }
  if (output.ClusterSecurityGroups === "") {
    contents.ClusterSecurityGroups = [];
  } else if (
    output["ClusterSecurityGroups"] !== undefined &&
    output["ClusterSecurityGroups"]["ClusterSecurityGroup"] !== undefined
  ) {
    contents.ClusterSecurityGroups = deserializeAws_queryClusterSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["ClusterSecurityGroups"]["ClusterSecurityGroup"]),
      context
    );
  }
  if (output.VpcSecurityGroups === "") {
    contents.VpcSecurityGroups = [];
  } else if (
    output["VpcSecurityGroups"] !== undefined &&
    output["VpcSecurityGroups"]["VpcSecurityGroup"] !== undefined
  ) {
    contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroup"]),
      context
    );
  }
  if (output.ClusterParameterGroups === "") {
    contents.ClusterParameterGroups = [];
  } else if (
    output["ClusterParameterGroups"] !== undefined &&
    output["ClusterParameterGroups"]["ClusterParameterGroup"] !== undefined
  ) {
    contents.ClusterParameterGroups = deserializeAws_queryClusterParameterGroupStatusList(
      __getArrayIfSingleItem(output["ClusterParameterGroups"]["ClusterParameterGroup"]),
      context
    );
  }
  if (output["ClusterSubnetGroupName"] !== undefined) {
    contents.ClusterSubnetGroupName = __expectString(output["ClusterSubnetGroupName"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["PreferredMaintenanceWindow"] !== undefined) {
    contents.PreferredMaintenanceWindow = __expectString(output["PreferredMaintenanceWindow"]);
  }
  if (output["PendingModifiedValues"] !== undefined) {
    contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(
      output["PendingModifiedValues"],
      context
    );
  }
  if (output["ClusterVersion"] !== undefined) {
    contents.ClusterVersion = __expectString(output["ClusterVersion"]);
  }
  if (output["AllowVersionUpgrade"] !== undefined) {
    contents.AllowVersionUpgrade = __parseBoolean(output["AllowVersionUpgrade"]);
  }
  if (output["NumberOfNodes"] !== undefined) {
    contents.NumberOfNodes = __strictParseInt32(output["NumberOfNodes"]) as number;
  }
  if (output["PubliclyAccessible"] !== undefined) {
    contents.PubliclyAccessible = __parseBoolean(output["PubliclyAccessible"]);
  }
  if (output["Encrypted"] !== undefined) {
    contents.Encrypted = __parseBoolean(output["Encrypted"]);
  }
  if (output["RestoreStatus"] !== undefined) {
    contents.RestoreStatus = deserializeAws_queryRestoreStatus(output["RestoreStatus"], context);
  }
  if (output["DataTransferProgress"] !== undefined) {
    contents.DataTransferProgress = deserializeAws_queryDataTransferProgress(output["DataTransferProgress"], context);
  }
  if (output["HsmStatus"] !== undefined) {
    contents.HsmStatus = deserializeAws_queryHsmStatus(output["HsmStatus"], context);
  }
  if (output["ClusterSnapshotCopyStatus"] !== undefined) {
    contents.ClusterSnapshotCopyStatus = deserializeAws_queryClusterSnapshotCopyStatus(
      output["ClusterSnapshotCopyStatus"],
      context
    );
  }
  if (output["ClusterPublicKey"] !== undefined) {
    contents.ClusterPublicKey = __expectString(output["ClusterPublicKey"]);
  }
  if (output.ClusterNodes === "") {
    contents.ClusterNodes = [];
  } else if (output["ClusterNodes"] !== undefined && output["ClusterNodes"]["member"] !== undefined) {
    contents.ClusterNodes = deserializeAws_queryClusterNodesList(
      __getArrayIfSingleItem(output["ClusterNodes"]["member"]),
      context
    );
  }
  if (output["ElasticIpStatus"] !== undefined) {
    contents.ElasticIpStatus = deserializeAws_queryElasticIpStatus(output["ElasticIpStatus"], context);
  }
  if (output["ClusterRevisionNumber"] !== undefined) {
    contents.ClusterRevisionNumber = __expectString(output["ClusterRevisionNumber"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["EnhancedVpcRouting"] !== undefined) {
    contents.EnhancedVpcRouting = __parseBoolean(output["EnhancedVpcRouting"]);
  }
  if (output.IamRoles === "") {
    contents.IamRoles = [];
  } else if (output["IamRoles"] !== undefined && output["IamRoles"]["ClusterIamRole"] !== undefined) {
    contents.IamRoles = deserializeAws_queryClusterIamRoleList(
      __getArrayIfSingleItem(output["IamRoles"]["ClusterIamRole"]),
      context
    );
  }
  if (output.PendingActions === "") {
    contents.PendingActions = [];
  } else if (output["PendingActions"] !== undefined && output["PendingActions"]["member"] !== undefined) {
    contents.PendingActions = deserializeAws_queryPendingActionsList(
      __getArrayIfSingleItem(output["PendingActions"]["member"]),
      context
    );
  }
  if (output["MaintenanceTrackName"] !== undefined) {
    contents.MaintenanceTrackName = __expectString(output["MaintenanceTrackName"]);
  }
  if (output["ElasticResizeNumberOfNodeOptions"] !== undefined) {
    contents.ElasticResizeNumberOfNodeOptions = __expectString(output["ElasticResizeNumberOfNodeOptions"]);
  }
  if (output.DeferredMaintenanceWindows === "") {
    contents.DeferredMaintenanceWindows = [];
  } else if (
    output["DeferredMaintenanceWindows"] !== undefined &&
    output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"] !== undefined
  ) {
    contents.DeferredMaintenanceWindows = deserializeAws_queryDeferredMaintenanceWindowsList(
      __getArrayIfSingleItem(output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"]),
      context
    );
  }
  if (output["SnapshotScheduleIdentifier"] !== undefined) {
    contents.SnapshotScheduleIdentifier = __expectString(output["SnapshotScheduleIdentifier"]);
  }
  if (output["SnapshotScheduleState"] !== undefined) {
    contents.SnapshotScheduleState = __expectString(output["SnapshotScheduleState"]);
  }
  if (output["ExpectedNextSnapshotScheduleTime"] !== undefined) {
    contents.ExpectedNextSnapshotScheduleTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ExpectedNextSnapshotScheduleTime"])
    );
  }
  if (output["ExpectedNextSnapshotScheduleTimeStatus"] !== undefined) {
    contents.ExpectedNextSnapshotScheduleTimeStatus = __expectString(output["ExpectedNextSnapshotScheduleTimeStatus"]);
  }
  if (output["NextMaintenanceWindowStartTime"] !== undefined) {
    contents.NextMaintenanceWindowStartTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["NextMaintenanceWindowStartTime"])
    );
  }
  if (output["ResizeInfo"] !== undefined) {
    contents.ResizeInfo = deserializeAws_queryResizeInfo(output["ResizeInfo"], context);
  }
  if (output["AvailabilityZoneRelocationStatus"] !== undefined) {
    contents.AvailabilityZoneRelocationStatus = __expectString(output["AvailabilityZoneRelocationStatus"]);
  }
  if (output["ClusterNamespaceArn"] !== undefined) {
    contents.ClusterNamespaceArn = __expectString(output["ClusterNamespaceArn"]);
  }
  if (output["TotalStorageCapacityInMegaBytes"] !== undefined) {
    contents.TotalStorageCapacityInMegaBytes = __strictParseLong(output["TotalStorageCapacityInMegaBytes"]) as number;
  }
  if (output["AquaConfiguration"] !== undefined) {
    contents.AquaConfiguration = deserializeAws_queryAquaConfiguration(output["AquaConfiguration"], context);
  }
  if (output["DefaultIamRoleArn"] !== undefined) {
    contents.DefaultIamRoleArn = __expectString(output["DefaultIamRoleArn"]);
  }
  if (output["ReservedNodeExchangeStatus"] !== undefined) {
    contents.ReservedNodeExchangeStatus = deserializeAws_queryReservedNodeExchangeStatus(
      output["ReservedNodeExchangeStatus"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterAssociatedToSchedule = (
  output: any,
  context: __SerdeContext
): ClusterAssociatedToSchedule => {
  const contents: any = {
    ClusterIdentifier: undefined,
    ScheduleAssociationState: undefined,
  };
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["ScheduleAssociationState"] !== undefined) {
    contents.ScheduleAssociationState = __expectString(output["ScheduleAssociationState"]);
  }
  return contents;
};

const deserializeAws_queryClusterCredentials = (output: any, context: __SerdeContext): ClusterCredentials => {
  const contents: any = {
    DbUser: undefined,
    DbPassword: undefined,
    Expiration: undefined,
  };
  if (output["DbUser"] !== undefined) {
    contents.DbUser = __expectString(output["DbUser"]);
  }
  if (output["DbPassword"] !== undefined) {
    contents.DbPassword = __expectString(output["DbPassword"]);
  }
  if (output["Expiration"] !== undefined) {
    contents.Expiration = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Expiration"]));
  }
  return contents;
};

const deserializeAws_queryClusterDbRevision = (output: any, context: __SerdeContext): ClusterDbRevision => {
  const contents: any = {
    ClusterIdentifier: undefined,
    CurrentDatabaseRevision: undefined,
    DatabaseRevisionReleaseDate: undefined,
    RevisionTargets: undefined,
  };
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["CurrentDatabaseRevision"] !== undefined) {
    contents.CurrentDatabaseRevision = __expectString(output["CurrentDatabaseRevision"]);
  }
  if (output["DatabaseRevisionReleaseDate"] !== undefined) {
    contents.DatabaseRevisionReleaseDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["DatabaseRevisionReleaseDate"])
    );
  }
  if (output.RevisionTargets === "") {
    contents.RevisionTargets = [];
  } else if (output["RevisionTargets"] !== undefined && output["RevisionTargets"]["RevisionTarget"] !== undefined) {
    contents.RevisionTargets = deserializeAws_queryRevisionTargetsList(
      __getArrayIfSingleItem(output["RevisionTargets"]["RevisionTarget"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryClusterDbRevisionsList = (output: any, context: __SerdeContext): ClusterDbRevision[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterDbRevision(entry, context);
    });
};

const deserializeAws_queryClusterDbRevisionsMessage = (
  output: any,
  context: __SerdeContext
): ClusterDbRevisionsMessage => {
  const contents: any = {
    Marker: undefined,
    ClusterDbRevisions: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ClusterDbRevisions === "") {
    contents.ClusterDbRevisions = [];
  } else if (
    output["ClusterDbRevisions"] !== undefined &&
    output["ClusterDbRevisions"]["ClusterDbRevision"] !== undefined
  ) {
    contents.ClusterDbRevisions = deserializeAws_queryClusterDbRevisionsList(
      __getArrayIfSingleItem(output["ClusterDbRevisions"]["ClusterDbRevision"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryClusterExtendedCredentials = (
  output: any,
  context: __SerdeContext
): ClusterExtendedCredentials => {
  const contents: any = {
    DbUser: undefined,
    DbPassword: undefined,
    Expiration: undefined,
    NextRefreshTime: undefined,
  };
  if (output["DbUser"] !== undefined) {
    contents.DbUser = __expectString(output["DbUser"]);
  }
  if (output["DbPassword"] !== undefined) {
    contents.DbPassword = __expectString(output["DbPassword"]);
  }
  if (output["Expiration"] !== undefined) {
    contents.Expiration = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Expiration"]));
  }
  if (output["NextRefreshTime"] !== undefined) {
    contents.NextRefreshTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["NextRefreshTime"]));
  }
  return contents;
};

const deserializeAws_queryClusterIamRole = (output: any, context: __SerdeContext): ClusterIamRole => {
  const contents: any = {
    IamRoleArn: undefined,
    ApplyStatus: undefined,
  };
  if (output["IamRoleArn"] !== undefined) {
    contents.IamRoleArn = __expectString(output["IamRoleArn"]);
  }
  if (output["ApplyStatus"] !== undefined) {
    contents.ApplyStatus = __expectString(output["ApplyStatus"]);
  }
  return contents;
};

const deserializeAws_queryClusterIamRoleList = (output: any, context: __SerdeContext): ClusterIamRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterIamRole(entry, context);
    });
};

const deserializeAws_queryClusterList = (output: any, context: __SerdeContext): Cluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCluster(entry, context);
    });
};

const deserializeAws_queryClusterNode = (output: any, context: __SerdeContext): ClusterNode => {
  const contents: any = {
    NodeRole: undefined,
    PrivateIPAddress: undefined,
    PublicIPAddress: undefined,
  };
  if (output["NodeRole"] !== undefined) {
    contents.NodeRole = __expectString(output["NodeRole"]);
  }
  if (output["PrivateIPAddress"] !== undefined) {
    contents.PrivateIPAddress = __expectString(output["PrivateIPAddress"]);
  }
  if (output["PublicIPAddress"] !== undefined) {
    contents.PublicIPAddress = __expectString(output["PublicIPAddress"]);
  }
  return contents;
};

const deserializeAws_queryClusterNodesList = (output: any, context: __SerdeContext): ClusterNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterNode(entry, context);
    });
};

const deserializeAws_queryClusterNotFoundFault = (output: any, context: __SerdeContext): ClusterNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterOnLatestRevisionFault = (
  output: any,
  context: __SerdeContext
): ClusterOnLatestRevisionFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroup = (output: any, context: __SerdeContext): ClusterParameterGroup => {
  const contents: any = {
    ParameterGroupName: undefined,
    ParameterGroupFamily: undefined,
    Description: undefined,
    Tags: undefined,
  };
  if (output["ParameterGroupName"] !== undefined) {
    contents.ParameterGroupName = __expectString(output["ParameterGroupName"]);
  }
  if (output["ParameterGroupFamily"] !== undefined) {
    contents.ParameterGroupFamily = __expectString(output["ParameterGroupFamily"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroupDetails = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupDetails => {
  const contents: any = {
    Parameters: undefined,
    Marker: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = deserializeAws_queryParametersList(
      __getArrayIfSingleItem(output["Parameters"]["Parameter"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroupNameMessage = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupNameMessage => {
  const contents: any = {
    ParameterGroupName: undefined,
    ParameterGroupStatus: undefined,
  };
  if (output["ParameterGroupName"] !== undefined) {
    contents.ParameterGroupName = __expectString(output["ParameterGroupName"]);
  }
  if (output["ParameterGroupStatus"] !== undefined) {
    contents.ParameterGroupStatus = __expectString(output["ParameterGroupStatus"]);
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroupsMessage = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupsMessage => {
  const contents: any = {
    Marker: undefined,
    ParameterGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ParameterGroups === "") {
    contents.ParameterGroups = [];
  } else if (
    output["ParameterGroups"] !== undefined &&
    output["ParameterGroups"]["ClusterParameterGroup"] !== undefined
  ) {
    contents.ParameterGroups = deserializeAws_queryParameterGroupList(
      __getArrayIfSingleItem(output["ParameterGroups"]["ClusterParameterGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroupStatus = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupStatus => {
  const contents: any = {
    ParameterGroupName: undefined,
    ParameterApplyStatus: undefined,
    ClusterParameterStatusList: undefined,
  };
  if (output["ParameterGroupName"] !== undefined) {
    contents.ParameterGroupName = __expectString(output["ParameterGroupName"]);
  }
  if (output["ParameterApplyStatus"] !== undefined) {
    contents.ParameterApplyStatus = __expectString(output["ParameterApplyStatus"]);
  }
  if (output.ClusterParameterStatusList === "") {
    contents.ClusterParameterStatusList = [];
  } else if (
    output["ClusterParameterStatusList"] !== undefined &&
    output["ClusterParameterStatusList"]["member"] !== undefined
  ) {
    contents.ClusterParameterStatusList = deserializeAws_queryClusterParameterStatusList(
      __getArrayIfSingleItem(output["ClusterParameterStatusList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryClusterParameterGroupStatusList = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterParameterGroupStatus(entry, context);
    });
};

const deserializeAws_queryClusterParameterStatus = (output: any, context: __SerdeContext): ClusterParameterStatus => {
  const contents: any = {
    ParameterName: undefined,
    ParameterApplyStatus: undefined,
    ParameterApplyErrorDescription: undefined,
  };
  if (output["ParameterName"] !== undefined) {
    contents.ParameterName = __expectString(output["ParameterName"]);
  }
  if (output["ParameterApplyStatus"] !== undefined) {
    contents.ParameterApplyStatus = __expectString(output["ParameterApplyStatus"]);
  }
  if (output["ParameterApplyErrorDescription"] !== undefined) {
    contents.ParameterApplyErrorDescription = __expectString(output["ParameterApplyErrorDescription"]);
  }
  return contents;
};

const deserializeAws_queryClusterParameterStatusList = (
  output: any,
  context: __SerdeContext
): ClusterParameterStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterParameterStatus(entry, context);
    });
};

const deserializeAws_queryClusterQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSecurityGroup = (output: any, context: __SerdeContext): ClusterSecurityGroup => {
  const contents: any = {
    ClusterSecurityGroupName: undefined,
    Description: undefined,
    EC2SecurityGroups: undefined,
    IPRanges: undefined,
    Tags: undefined,
  };
  if (output["ClusterSecurityGroupName"] !== undefined) {
    contents.ClusterSecurityGroupName = __expectString(output["ClusterSecurityGroupName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.EC2SecurityGroups === "") {
    contents.EC2SecurityGroups = [];
  } else if (
    output["EC2SecurityGroups"] !== undefined &&
    output["EC2SecurityGroups"]["EC2SecurityGroup"] !== undefined
  ) {
    contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(
      __getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]),
      context
    );
  }
  if (output.IPRanges === "") {
    contents.IPRanges = [];
  } else if (output["IPRanges"] !== undefined && output["IPRanges"]["IPRange"] !== undefined) {
    contents.IPRanges = deserializeAws_queryIPRangeList(__getArrayIfSingleItem(output["IPRanges"]["IPRange"]), context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryClusterSecurityGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupMembership => {
  const contents: any = {
    ClusterSecurityGroupName: undefined,
    Status: undefined,
  };
  if (output["ClusterSecurityGroupName"] !== undefined) {
    contents.ClusterSecurityGroupName = __expectString(output["ClusterSecurityGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryClusterSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterSecurityGroupMembership(entry, context);
    });
};

const deserializeAws_queryClusterSecurityGroupMessage = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupMessage => {
  const contents: any = {
    Marker: undefined,
    ClusterSecurityGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ClusterSecurityGroups === "") {
    contents.ClusterSecurityGroups = [];
  } else if (
    output["ClusterSecurityGroups"] !== undefined &&
    output["ClusterSecurityGroups"]["ClusterSecurityGroup"] !== undefined
  ) {
    contents.ClusterSecurityGroups = deserializeAws_queryClusterSecurityGroups(
      __getArrayIfSingleItem(output["ClusterSecurityGroups"]["ClusterSecurityGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryClusterSecurityGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSecurityGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSecurityGroups = (output: any, context: __SerdeContext): ClusterSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterSecurityGroup(entry, context);
    });
};

const deserializeAws_queryClustersMessage = (output: any, context: __SerdeContext): ClustersMessage => {
  const contents: any = {
    Marker: undefined,
    Clusters: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Clusters === "") {
    contents.Clusters = [];
  } else if (output["Clusters"] !== undefined && output["Clusters"]["Cluster"] !== undefined) {
    contents.Clusters = deserializeAws_queryClusterList(__getArrayIfSingleItem(output["Clusters"]["Cluster"]), context);
  }
  return contents;
};

const deserializeAws_queryClusterSnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterSnapshotAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSnapshotCopyStatus = (
  output: any,
  context: __SerdeContext
): ClusterSnapshotCopyStatus => {
  const contents: any = {
    DestinationRegion: undefined,
    RetentionPeriod: undefined,
    ManualSnapshotRetentionPeriod: undefined,
    SnapshotCopyGrantName: undefined,
  };
  if (output["DestinationRegion"] !== undefined) {
    contents.DestinationRegion = __expectString(output["DestinationRegion"]);
  }
  if (output["RetentionPeriod"] !== undefined) {
    contents.RetentionPeriod = __strictParseLong(output["RetentionPeriod"]) as number;
  }
  if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
    contents.ManualSnapshotRetentionPeriod = __strictParseInt32(output["ManualSnapshotRetentionPeriod"]) as number;
  }
  if (output["SnapshotCopyGrantName"] !== undefined) {
    contents.SnapshotCopyGrantName = __expectString(output["SnapshotCopyGrantName"]);
  }
  return contents;
};

const deserializeAws_queryClusterSnapshotNotFoundFault = (
  output: any,
  context: __SerdeContext
): ClusterSnapshotNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterSnapshotQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSubnetGroup = (output: any, context: __SerdeContext): ClusterSubnetGroup => {
  const contents: any = {
    ClusterSubnetGroupName: undefined,
    Description: undefined,
    VpcId: undefined,
    SubnetGroupStatus: undefined,
    Subnets: undefined,
    Tags: undefined,
  };
  if (output["ClusterSubnetGroupName"] !== undefined) {
    contents.ClusterSubnetGroupName = __expectString(output["ClusterSubnetGroupName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["SubnetGroupStatus"] !== undefined) {
    contents.SubnetGroupStatus = __expectString(output["SubnetGroupStatus"]);
  }
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["Subnet"] !== undefined) {
    contents.Subnets = deserializeAws_querySubnetList(__getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryClusterSubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterSubnetGroupAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSubnetGroupMessage = (
  output: any,
  context: __SerdeContext
): ClusterSubnetGroupMessage => {
  const contents: any = {
    Marker: undefined,
    ClusterSubnetGroups: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ClusterSubnetGroups === "") {
    contents.ClusterSubnetGroups = [];
  } else if (
    output["ClusterSubnetGroups"] !== undefined &&
    output["ClusterSubnetGroups"]["ClusterSubnetGroup"] !== undefined
  ) {
    contents.ClusterSubnetGroups = deserializeAws_queryClusterSubnetGroups(
      __getArrayIfSingleItem(output["ClusterSubnetGroups"]["ClusterSubnetGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryClusterSubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ClusterSubnetGroupNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterSubnetGroupQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterSubnetGroups = (output: any, context: __SerdeContext): ClusterSubnetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterSubnetGroup(entry, context);
    });
};

const deserializeAws_queryClusterSubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterSubnetQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryClusterVersion = (output: any, context: __SerdeContext): ClusterVersion => {
  const contents: any = {
    ClusterVersion: undefined,
    ClusterParameterGroupFamily: undefined,
    Description: undefined,
  };
  if (output["ClusterVersion"] !== undefined) {
    contents.ClusterVersion = __expectString(output["ClusterVersion"]);
  }
  if (output["ClusterParameterGroupFamily"] !== undefined) {
    contents.ClusterParameterGroupFamily = __expectString(output["ClusterParameterGroupFamily"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  return contents;
};

const deserializeAws_queryClusterVersionList = (output: any, context: __SerdeContext): ClusterVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterVersion(entry, context);
    });
};

const deserializeAws_queryClusterVersionsMessage = (output: any, context: __SerdeContext): ClusterVersionsMessage => {
  const contents: any = {
    Marker: undefined,
    ClusterVersions: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ClusterVersions === "") {
    contents.ClusterVersions = [];
  } else if (output["ClusterVersions"] !== undefined && output["ClusterVersions"]["ClusterVersion"] !== undefined) {
    contents.ClusterVersions = deserializeAws_queryClusterVersionList(
      __getArrayIfSingleItem(output["ClusterVersions"]["ClusterVersion"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCopyClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): CopyClusterSnapshotResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryCopyToRegionDisabledFault = (
  output: any,
  context: __SerdeContext
): CopyToRegionDisabledFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryCreateAuthenticationProfileResult = (
  output: any,
  context: __SerdeContext
): CreateAuthenticationProfileResult => {
  const contents: any = {
    AuthenticationProfileName: undefined,
    AuthenticationProfileContent: undefined,
  };
  if (output["AuthenticationProfileName"] !== undefined) {
    contents.AuthenticationProfileName = __expectString(output["AuthenticationProfileName"]);
  }
  if (output["AuthenticationProfileContent"] !== undefined) {
    contents.AuthenticationProfileContent = __expectString(output["AuthenticationProfileContent"]);
  }
  return contents;
};

const deserializeAws_queryCreateClusterParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CreateClusterParameterGroupResult => {
  const contents: any = {
    ClusterParameterGroup: undefined,
  };
  if (output["ClusterParameterGroup"] !== undefined) {
    contents.ClusterParameterGroup = deserializeAws_queryClusterParameterGroup(
      output["ClusterParameterGroup"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateClusterResult = (output: any, context: __SerdeContext): CreateClusterResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryCreateClusterSecurityGroupResult = (
  output: any,
  context: __SerdeContext
): CreateClusterSecurityGroupResult => {
  const contents: any = {
    ClusterSecurityGroup: undefined,
  };
  if (output["ClusterSecurityGroup"] !== undefined) {
    contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateClusterSnapshotResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryCreateClusterSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): CreateClusterSubnetGroupResult => {
  const contents: any = {
    ClusterSubnetGroup: undefined,
  };
  if (output["ClusterSubnetGroup"] !== undefined) {
    contents.ClusterSubnetGroup = deserializeAws_queryClusterSubnetGroup(output["ClusterSubnetGroup"], context);
  }
  return contents;
};

const deserializeAws_queryCreateEventSubscriptionResult = (
  output: any,
  context: __SerdeContext
): CreateEventSubscriptionResult => {
  const contents: any = {
    EventSubscription: undefined,
  };
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

const deserializeAws_queryCreateHsmClientCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateHsmClientCertificateResult => {
  const contents: any = {
    HsmClientCertificate: undefined,
  };
  if (output["HsmClientCertificate"] !== undefined) {
    contents.HsmClientCertificate = deserializeAws_queryHsmClientCertificate(output["HsmClientCertificate"], context);
  }
  return contents;
};

const deserializeAws_queryCreateHsmConfigurationResult = (
  output: any,
  context: __SerdeContext
): CreateHsmConfigurationResult => {
  const contents: any = {
    HsmConfiguration: undefined,
  };
  if (output["HsmConfiguration"] !== undefined) {
    contents.HsmConfiguration = deserializeAws_queryHsmConfiguration(output["HsmConfiguration"], context);
  }
  return contents;
};

const deserializeAws_queryCreateSnapshotCopyGrantResult = (
  output: any,
  context: __SerdeContext
): CreateSnapshotCopyGrantResult => {
  const contents: any = {
    SnapshotCopyGrant: undefined,
  };
  if (output["SnapshotCopyGrant"] !== undefined) {
    contents.SnapshotCopyGrant = deserializeAws_querySnapshotCopyGrant(output["SnapshotCopyGrant"], context);
  }
  return contents;
};

const deserializeAws_queryCustomerStorageMessage = (output: any, context: __SerdeContext): CustomerStorageMessage => {
  const contents: any = {
    TotalBackupSizeInMegaBytes: undefined,
    TotalProvisionedStorageInMegaBytes: undefined,
  };
  if (output["TotalBackupSizeInMegaBytes"] !== undefined) {
    contents.TotalBackupSizeInMegaBytes = __strictParseFloat(output["TotalBackupSizeInMegaBytes"]) as number;
  }
  if (output["TotalProvisionedStorageInMegaBytes"] !== undefined) {
    contents.TotalProvisionedStorageInMegaBytes = __strictParseFloat(
      output["TotalProvisionedStorageInMegaBytes"]
    ) as number;
  }
  return contents;
};

const deserializeAws_queryDataShare = (output: any, context: __SerdeContext): DataShare => {
  const contents: any = {
    DataShareArn: undefined,
    ProducerArn: undefined,
    AllowPubliclyAccessibleConsumers: undefined,
    DataShareAssociations: undefined,
    ManagedBy: undefined,
  };
  if (output["DataShareArn"] !== undefined) {
    contents.DataShareArn = __expectString(output["DataShareArn"]);
  }
  if (output["ProducerArn"] !== undefined) {
    contents.ProducerArn = __expectString(output["ProducerArn"]);
  }
  if (output["AllowPubliclyAccessibleConsumers"] !== undefined) {
    contents.AllowPubliclyAccessibleConsumers = __parseBoolean(output["AllowPubliclyAccessibleConsumers"]);
  }
  if (output.DataShareAssociations === "") {
    contents.DataShareAssociations = [];
  } else if (output["DataShareAssociations"] !== undefined && output["DataShareAssociations"]["member"] !== undefined) {
    contents.DataShareAssociations = deserializeAws_queryDataShareAssociationList(
      __getArrayIfSingleItem(output["DataShareAssociations"]["member"]),
      context
    );
  }
  if (output["ManagedBy"] !== undefined) {
    contents.ManagedBy = __expectString(output["ManagedBy"]);
  }
  return contents;
};

const deserializeAws_queryDataShareAssociation = (output: any, context: __SerdeContext): DataShareAssociation => {
  const contents: any = {
    ConsumerIdentifier: undefined,
    Status: undefined,
    ConsumerRegion: undefined,
    CreatedDate: undefined,
    StatusChangeDate: undefined,
  };
  if (output["ConsumerIdentifier"] !== undefined) {
    contents.ConsumerIdentifier = __expectString(output["ConsumerIdentifier"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["ConsumerRegion"] !== undefined) {
    contents.ConsumerRegion = __expectString(output["ConsumerRegion"]);
  }
  if (output["CreatedDate"] !== undefined) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedDate"]));
  }
  if (output["StatusChangeDate"] !== undefined) {
    contents.StatusChangeDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StatusChangeDate"]));
  }
  return contents;
};

const deserializeAws_queryDataShareAssociationList = (output: any, context: __SerdeContext): DataShareAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDataShareAssociation(entry, context);
    });
};

const deserializeAws_queryDataShareList = (output: any, context: __SerdeContext): DataShare[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDataShare(entry, context);
    });
};

const deserializeAws_queryDataTransferProgress = (output: any, context: __SerdeContext): DataTransferProgress => {
  const contents: any = {
    Status: undefined,
    CurrentRateInMegaBytesPerSecond: undefined,
    TotalDataInMegaBytes: undefined,
    DataTransferredInMegaBytes: undefined,
    EstimatedTimeToCompletionInSeconds: undefined,
    ElapsedTimeInSeconds: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CurrentRateInMegaBytesPerSecond"] !== undefined) {
    contents.CurrentRateInMegaBytesPerSecond = __strictParseFloat(output["CurrentRateInMegaBytesPerSecond"]) as number;
  }
  if (output["TotalDataInMegaBytes"] !== undefined) {
    contents.TotalDataInMegaBytes = __strictParseLong(output["TotalDataInMegaBytes"]) as number;
  }
  if (output["DataTransferredInMegaBytes"] !== undefined) {
    contents.DataTransferredInMegaBytes = __strictParseLong(output["DataTransferredInMegaBytes"]) as number;
  }
  if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
    contents.EstimatedTimeToCompletionInSeconds = __strictParseLong(
      output["EstimatedTimeToCompletionInSeconds"]
    ) as number;
  }
  if (output["ElapsedTimeInSeconds"] !== undefined) {
    contents.ElapsedTimeInSeconds = __strictParseLong(output["ElapsedTimeInSeconds"]) as number;
  }
  return contents;
};

const deserializeAws_queryDefaultClusterParameters = (
  output: any,
  context: __SerdeContext
): DefaultClusterParameters => {
  const contents: any = {
    ParameterGroupFamily: undefined,
    Marker: undefined,
    Parameters: undefined,
  };
  if (output["ParameterGroupFamily"] !== undefined) {
    contents.ParameterGroupFamily = __expectString(output["ParameterGroupFamily"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = deserializeAws_queryParametersList(
      __getArrayIfSingleItem(output["Parameters"]["Parameter"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeferredMaintenanceWindow = (
  output: any,
  context: __SerdeContext
): DeferredMaintenanceWindow => {
  const contents: any = {
    DeferMaintenanceIdentifier: undefined,
    DeferMaintenanceStartTime: undefined,
    DeferMaintenanceEndTime: undefined,
  };
  if (output["DeferMaintenanceIdentifier"] !== undefined) {
    contents.DeferMaintenanceIdentifier = __expectString(output["DeferMaintenanceIdentifier"]);
  }
  if (output["DeferMaintenanceStartTime"] !== undefined) {
    contents.DeferMaintenanceStartTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["DeferMaintenanceStartTime"])
    );
  }
  if (output["DeferMaintenanceEndTime"] !== undefined) {
    contents.DeferMaintenanceEndTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["DeferMaintenanceEndTime"])
    );
  }
  return contents;
};

const deserializeAws_queryDeferredMaintenanceWindowsList = (
  output: any,
  context: __SerdeContext
): DeferredMaintenanceWindow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDeferredMaintenanceWindow(entry, context);
    });
};

const deserializeAws_queryDeleteAuthenticationProfileResult = (
  output: any,
  context: __SerdeContext
): DeleteAuthenticationProfileResult => {
  const contents: any = {
    AuthenticationProfileName: undefined,
  };
  if (output["AuthenticationProfileName"] !== undefined) {
    contents.AuthenticationProfileName = __expectString(output["AuthenticationProfileName"]);
  }
  return contents;
};

const deserializeAws_queryDeleteClusterResult = (output: any, context: __SerdeContext): DeleteClusterResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteClusterSnapshotResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryDependentServiceRequestThrottlingFault = (
  output: any,
  context: __SerdeContext
): DependentServiceRequestThrottlingFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDependentServiceUnavailableFault = (
  output: any,
  context: __SerdeContext
): DependentServiceUnavailableFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDescribeAuthenticationProfilesResult = (
  output: any,
  context: __SerdeContext
): DescribeAuthenticationProfilesResult => {
  const contents: any = {
    AuthenticationProfiles: undefined,
  };
  if (output.AuthenticationProfiles === "") {
    contents.AuthenticationProfiles = [];
  } else if (
    output["AuthenticationProfiles"] !== undefined &&
    output["AuthenticationProfiles"]["member"] !== undefined
  ) {
    contents.AuthenticationProfiles = deserializeAws_queryAuthenticationProfileList(
      __getArrayIfSingleItem(output["AuthenticationProfiles"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeDataSharesForConsumerResult = (
  output: any,
  context: __SerdeContext
): DescribeDataSharesForConsumerResult => {
  const contents: any = {
    DataShares: undefined,
    Marker: undefined,
  };
  if (output.DataShares === "") {
    contents.DataShares = [];
  } else if (output["DataShares"] !== undefined && output["DataShares"]["member"] !== undefined) {
    contents.DataShares = deserializeAws_queryDataShareList(
      __getArrayIfSingleItem(output["DataShares"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeDataSharesForProducerResult = (
  output: any,
  context: __SerdeContext
): DescribeDataSharesForProducerResult => {
  const contents: any = {
    DataShares: undefined,
    Marker: undefined,
  };
  if (output.DataShares === "") {
    contents.DataShares = [];
  } else if (output["DataShares"] !== undefined && output["DataShares"]["member"] !== undefined) {
    contents.DataShares = deserializeAws_queryDataShareList(
      __getArrayIfSingleItem(output["DataShares"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeDataSharesResult = (
  output: any,
  context: __SerdeContext
): DescribeDataSharesResult => {
  const contents: any = {
    DataShares: undefined,
    Marker: undefined,
  };
  if (output.DataShares === "") {
    contents.DataShares = [];
  } else if (output["DataShares"] !== undefined && output["DataShares"]["member"] !== undefined) {
    contents.DataShares = deserializeAws_queryDataShareList(
      __getArrayIfSingleItem(output["DataShares"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeDefaultClusterParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeDefaultClusterParametersResult => {
  const contents: any = {
    DefaultClusterParameters: undefined,
  };
  if (output["DefaultClusterParameters"] !== undefined) {
    contents.DefaultClusterParameters = deserializeAws_queryDefaultClusterParameters(
      output["DefaultClusterParameters"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribePartnersOutputMessage = (
  output: any,
  context: __SerdeContext
): DescribePartnersOutputMessage => {
  const contents: any = {
    PartnerIntegrationInfoList: undefined,
  };
  if (output.PartnerIntegrationInfoList === "") {
    contents.PartnerIntegrationInfoList = [];
  } else if (
    output["PartnerIntegrationInfoList"] !== undefined &&
    output["PartnerIntegrationInfoList"]["PartnerIntegrationInfo"] !== undefined
  ) {
    contents.PartnerIntegrationInfoList = deserializeAws_queryPartnerIntegrationInfoList(
      __getArrayIfSingleItem(output["PartnerIntegrationInfoList"]["PartnerIntegrationInfo"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeReservedNodeExchangeStatusOutputMessage = (
  output: any,
  context: __SerdeContext
): DescribeReservedNodeExchangeStatusOutputMessage => {
  const contents: any = {
    ReservedNodeExchangeStatusDetails: undefined,
    Marker: undefined,
  };
  if (output.ReservedNodeExchangeStatusDetails === "") {
    contents.ReservedNodeExchangeStatusDetails = [];
  } else if (
    output["ReservedNodeExchangeStatusDetails"] !== undefined &&
    output["ReservedNodeExchangeStatusDetails"]["ReservedNodeExchangeStatus"] !== undefined
  ) {
    contents.ReservedNodeExchangeStatusDetails = deserializeAws_queryReservedNodeExchangeStatusList(
      __getArrayIfSingleItem(output["ReservedNodeExchangeStatusDetails"]["ReservedNodeExchangeStatus"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeSnapshotSchedulesOutputMessage = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotSchedulesOutputMessage => {
  const contents: any = {
    SnapshotSchedules: undefined,
    Marker: undefined,
  };
  if (output.SnapshotSchedules === "") {
    contents.SnapshotSchedules = [];
  } else if (
    output["SnapshotSchedules"] !== undefined &&
    output["SnapshotSchedules"]["SnapshotSchedule"] !== undefined
  ) {
    contents.SnapshotSchedules = deserializeAws_querySnapshotScheduleList(
      __getArrayIfSingleItem(output["SnapshotSchedules"]["SnapshotSchedule"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryDisableSnapshotCopyResult = (
  output: any,
  context: __SerdeContext
): DisableSnapshotCopyResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryEC2SecurityGroup = (output: any, context: __SerdeContext): EC2SecurityGroup => {
  const contents: any = {
    Status: undefined,
    EC2SecurityGroupName: undefined,
    EC2SecurityGroupOwnerId: undefined,
    Tags: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EC2SecurityGroupName"] !== undefined) {
    contents.EC2SecurityGroupName = __expectString(output["EC2SecurityGroupName"]);
  }
  if (output["EC2SecurityGroupOwnerId"] !== undefined) {
    contents.EC2SecurityGroupOwnerId = __expectString(output["EC2SecurityGroupOwnerId"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryEC2SecurityGroupList = (output: any, context: __SerdeContext): EC2SecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEC2SecurityGroup(entry, context);
    });
};

const deserializeAws_queryElasticIpStatus = (output: any, context: __SerdeContext): ElasticIpStatus => {
  const contents: any = {
    ElasticIp: undefined,
    Status: undefined,
  };
  if (output["ElasticIp"] !== undefined) {
    contents.ElasticIp = __expectString(output["ElasticIp"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryEligibleTracksToUpdateList = (output: any, context: __SerdeContext): UpdateTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryUpdateTarget(entry, context);
    });
};

const deserializeAws_queryEnableSnapshotCopyResult = (
  output: any,
  context: __SerdeContext
): EnableSnapshotCopyResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryEndpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {
    Address: undefined,
    Port: undefined,
    VpcEndpoints: undefined,
  };
  if (output["Address"] !== undefined) {
    contents.Address = __expectString(output["Address"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output.VpcEndpoints === "") {
    contents.VpcEndpoints = [];
  } else if (output["VpcEndpoints"] !== undefined && output["VpcEndpoints"]["VpcEndpoint"] !== undefined) {
    contents.VpcEndpoints = deserializeAws_queryVpcEndpointsList(
      __getArrayIfSingleItem(output["VpcEndpoints"]["VpcEndpoint"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEndpointAccess = (output: any, context: __SerdeContext): EndpointAccess => {
  const contents: any = {
    ClusterIdentifier: undefined,
    ResourceOwner: undefined,
    SubnetGroupName: undefined,
    EndpointStatus: undefined,
    EndpointName: undefined,
    EndpointCreateTime: undefined,
    Port: undefined,
    Address: undefined,
    VpcSecurityGroups: undefined,
    VpcEndpoint: undefined,
  };
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["ResourceOwner"] !== undefined) {
    contents.ResourceOwner = __expectString(output["ResourceOwner"]);
  }
  if (output["SubnetGroupName"] !== undefined) {
    contents.SubnetGroupName = __expectString(output["SubnetGroupName"]);
  }
  if (output["EndpointStatus"] !== undefined) {
    contents.EndpointStatus = __expectString(output["EndpointStatus"]);
  }
  if (output["EndpointName"] !== undefined) {
    contents.EndpointName = __expectString(output["EndpointName"]);
  }
  if (output["EndpointCreateTime"] !== undefined) {
    contents.EndpointCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EndpointCreateTime"]));
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["Address"] !== undefined) {
    contents.Address = __expectString(output["Address"]);
  }
  if (output.VpcSecurityGroups === "") {
    contents.VpcSecurityGroups = [];
  } else if (
    output["VpcSecurityGroups"] !== undefined &&
    output["VpcSecurityGroups"]["VpcSecurityGroup"] !== undefined
  ) {
    contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroup"]),
      context
    );
  }
  if (output["VpcEndpoint"] !== undefined) {
    contents.VpcEndpoint = deserializeAws_queryVpcEndpoint(output["VpcEndpoint"], context);
  }
  return contents;
};

const deserializeAws_queryEndpointAccesses = (output: any, context: __SerdeContext): EndpointAccess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEndpointAccess(entry, context);
    });
};

const deserializeAws_queryEndpointAccessList = (output: any, context: __SerdeContext): EndpointAccessList => {
  const contents: any = {
    EndpointAccessList: undefined,
    Marker: undefined,
  };
  if (output.EndpointAccessList === "") {
    contents.EndpointAccessList = [];
  } else if (output["EndpointAccessList"] !== undefined && output["EndpointAccessList"]["member"] !== undefined) {
    contents.EndpointAccessList = deserializeAws_queryEndpointAccesses(
      __getArrayIfSingleItem(output["EndpointAccessList"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryEndpointAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): EndpointAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEndpointAuthorization = (output: any, context: __SerdeContext): EndpointAuthorization => {
  const contents: any = {
    Grantor: undefined,
    Grantee: undefined,
    ClusterIdentifier: undefined,
    AuthorizeTime: undefined,
    ClusterStatus: undefined,
    Status: undefined,
    AllowedAllVPCs: undefined,
    AllowedVPCs: undefined,
    EndpointCount: undefined,
  };
  if (output["Grantor"] !== undefined) {
    contents.Grantor = __expectString(output["Grantor"]);
  }
  if (output["Grantee"] !== undefined) {
    contents.Grantee = __expectString(output["Grantee"]);
  }
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["AuthorizeTime"] !== undefined) {
    contents.AuthorizeTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["AuthorizeTime"]));
  }
  if (output["ClusterStatus"] !== undefined) {
    contents.ClusterStatus = __expectString(output["ClusterStatus"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["AllowedAllVPCs"] !== undefined) {
    contents.AllowedAllVPCs = __parseBoolean(output["AllowedAllVPCs"]);
  }
  if (output.AllowedVPCs === "") {
    contents.AllowedVPCs = [];
  } else if (output["AllowedVPCs"] !== undefined && output["AllowedVPCs"]["VpcIdentifier"] !== undefined) {
    contents.AllowedVPCs = deserializeAws_queryVpcIdentifierList(
      __getArrayIfSingleItem(output["AllowedVPCs"]["VpcIdentifier"]),
      context
    );
  }
  if (output["EndpointCount"] !== undefined) {
    contents.EndpointCount = __strictParseInt32(output["EndpointCount"]) as number;
  }
  return contents;
};

const deserializeAws_queryEndpointAuthorizationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): EndpointAuthorizationAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEndpointAuthorizationList = (
  output: any,
  context: __SerdeContext
): EndpointAuthorizationList => {
  const contents: any = {
    EndpointAuthorizationList: undefined,
    Marker: undefined,
  };
  if (output.EndpointAuthorizationList === "") {
    contents.EndpointAuthorizationList = [];
  } else if (
    output["EndpointAuthorizationList"] !== undefined &&
    output["EndpointAuthorizationList"]["member"] !== undefined
  ) {
    contents.EndpointAuthorizationList = deserializeAws_queryEndpointAuthorizations(
      __getArrayIfSingleItem(output["EndpointAuthorizationList"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryEndpointAuthorizationNotFoundFault = (
  output: any,
  context: __SerdeContext
): EndpointAuthorizationNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEndpointAuthorizations = (output: any, context: __SerdeContext): EndpointAuthorization[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEndpointAuthorization(entry, context);
    });
};

const deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFault = (
  output: any,
  context: __SerdeContext
): EndpointAuthorizationsPerClusterLimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEndpointNotFoundFault = (output: any, context: __SerdeContext): EndpointNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEndpointsPerAuthorizationLimitExceededFault = (
  output: any,
  context: __SerdeContext
): EndpointsPerAuthorizationLimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEndpointsPerClusterLimitExceededFault = (
  output: any,
  context: __SerdeContext
): EndpointsPerClusterLimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEvent = (output: any, context: __SerdeContext): Event => {
  const contents: any = {
    SourceIdentifier: undefined,
    SourceType: undefined,
    Message: undefined,
    EventCategories: undefined,
    Severity: undefined,
    Date: undefined,
    EventId: undefined,
  };
  if (output["SourceIdentifier"] !== undefined) {
    contents.SourceIdentifier = __expectString(output["SourceIdentifier"]);
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  } else if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
    contents.EventCategories = deserializeAws_queryEventCategoriesList(
      __getArrayIfSingleItem(output["EventCategories"]["EventCategory"]),
      context
    );
  }
  if (output["Severity"] !== undefined) {
    contents.Severity = __expectString(output["Severity"]);
  }
  if (output["Date"] !== undefined) {
    contents.Date = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Date"]));
  }
  if (output["EventId"] !== undefined) {
    contents.EventId = __expectString(output["EventId"]);
  }
  return contents;
};

const deserializeAws_queryEventCategoriesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryEventCategoriesMap = (output: any, context: __SerdeContext): EventCategoriesMap => {
  const contents: any = {
    SourceType: undefined,
    Events: undefined,
  };
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output.Events === "") {
    contents.Events = [];
  } else if (output["Events"] !== undefined && output["Events"]["EventInfoMap"] !== undefined) {
    contents.Events = deserializeAws_queryEventInfoMapList(
      __getArrayIfSingleItem(output["Events"]["EventInfoMap"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEventCategoriesMapList = (output: any, context: __SerdeContext): EventCategoriesMap[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEventCategoriesMap(entry, context);
    });
};

const deserializeAws_queryEventCategoriesMessage = (output: any, context: __SerdeContext): EventCategoriesMessage => {
  const contents: any = {
    EventCategoriesMapList: undefined,
  };
  if (output.EventCategoriesMapList === "") {
    contents.EventCategoriesMapList = [];
  } else if (
    output["EventCategoriesMapList"] !== undefined &&
    output["EventCategoriesMapList"]["EventCategoriesMap"] !== undefined
  ) {
    contents.EventCategoriesMapList = deserializeAws_queryEventCategoriesMapList(
      __getArrayIfSingleItem(output["EventCategoriesMapList"]["EventCategoriesMap"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEventInfoMap = (output: any, context: __SerdeContext): EventInfoMap => {
  const contents: any = {
    EventId: undefined,
    EventCategories: undefined,
    EventDescription: undefined,
    Severity: undefined,
  };
  if (output["EventId"] !== undefined) {
    contents.EventId = __expectString(output["EventId"]);
  }
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  } else if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
    contents.EventCategories = deserializeAws_queryEventCategoriesList(
      __getArrayIfSingleItem(output["EventCategories"]["EventCategory"]),
      context
    );
  }
  if (output["EventDescription"] !== undefined) {
    contents.EventDescription = __expectString(output["EventDescription"]);
  }
  if (output["Severity"] !== undefined) {
    contents.Severity = __expectString(output["Severity"]);
  }
  return contents;
};

const deserializeAws_queryEventInfoMapList = (output: any, context: __SerdeContext): EventInfoMap[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEventInfoMap(entry, context);
    });
};

const deserializeAws_queryEventList = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEvent(entry, context);
    });
};

const deserializeAws_queryEventsMessage = (output: any, context: __SerdeContext): EventsMessage => {
  const contents: any = {
    Marker: undefined,
    Events: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Events === "") {
    contents.Events = [];
  } else if (output["Events"] !== undefined && output["Events"]["Event"] !== undefined) {
    contents.Events = deserializeAws_queryEventList(__getArrayIfSingleItem(output["Events"]["Event"]), context);
  }
  return contents;
};

const deserializeAws_queryEventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  const contents: any = {
    CustomerAwsId: undefined,
    CustSubscriptionId: undefined,
    SnsTopicArn: undefined,
    Status: undefined,
    SubscriptionCreationTime: undefined,
    SourceType: undefined,
    SourceIdsList: undefined,
    EventCategoriesList: undefined,
    Severity: undefined,
    Enabled: undefined,
    Tags: undefined,
  };
  if (output["CustomerAwsId"] !== undefined) {
    contents.CustomerAwsId = __expectString(output["CustomerAwsId"]);
  }
  if (output["CustSubscriptionId"] !== undefined) {
    contents.CustSubscriptionId = __expectString(output["CustSubscriptionId"]);
  }
  if (output["SnsTopicArn"] !== undefined) {
    contents.SnsTopicArn = __expectString(output["SnsTopicArn"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SubscriptionCreationTime"] !== undefined) {
    contents.SubscriptionCreationTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["SubscriptionCreationTime"])
    );
  }
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output.SourceIdsList === "") {
    contents.SourceIdsList = [];
  } else if (output["SourceIdsList"] !== undefined && output["SourceIdsList"]["SourceId"] !== undefined) {
    contents.SourceIdsList = deserializeAws_querySourceIdsList(
      __getArrayIfSingleItem(output["SourceIdsList"]["SourceId"]),
      context
    );
  }
  if (output.EventCategoriesList === "") {
    contents.EventCategoriesList = [];
  } else if (
    output["EventCategoriesList"] !== undefined &&
    output["EventCategoriesList"]["EventCategory"] !== undefined
  ) {
    contents.EventCategoriesList = deserializeAws_queryEventCategoriesList(
      __getArrayIfSingleItem(output["EventCategoriesList"]["EventCategory"]),
      context
    );
  }
  if (output["Severity"] !== undefined) {
    contents.Severity = __expectString(output["Severity"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryEventSubscriptionQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): EventSubscriptionQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEventSubscriptionsList = (output: any, context: __SerdeContext): EventSubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEventSubscription(entry, context);
    });
};

const deserializeAws_queryEventSubscriptionsMessage = (
  output: any,
  context: __SerdeContext
): EventSubscriptionsMessage => {
  const contents: any = {
    Marker: undefined,
    EventSubscriptionsList: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.EventSubscriptionsList === "") {
    contents.EventSubscriptionsList = [];
  } else if (
    output["EventSubscriptionsList"] !== undefined &&
    output["EventSubscriptionsList"]["EventSubscription"] !== undefined
  ) {
    contents.EventSubscriptionsList = deserializeAws_queryEventSubscriptionsList(
      __getArrayIfSingleItem(output["EventSubscriptionsList"]["EventSubscription"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsOutputMessage = (
  output: any,
  context: __SerdeContext
): GetReservedNodeExchangeConfigurationOptionsOutputMessage => {
  const contents: any = {
    Marker: undefined,
    ReservedNodeConfigurationOptionList: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedNodeConfigurationOptionList === "") {
    contents.ReservedNodeConfigurationOptionList = [];
  } else if (
    output["ReservedNodeConfigurationOptionList"] !== undefined &&
    output["ReservedNodeConfigurationOptionList"]["ReservedNodeConfigurationOption"] !== undefined
  ) {
    contents.ReservedNodeConfigurationOptionList = deserializeAws_queryReservedNodeConfigurationOptionList(
      __getArrayIfSingleItem(output["ReservedNodeConfigurationOptionList"]["ReservedNodeConfigurationOption"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage = (
  output: any,
  context: __SerdeContext
): GetReservedNodeExchangeOfferingsOutputMessage => {
  const contents: any = {
    Marker: undefined,
    ReservedNodeOfferings: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedNodeOfferings === "") {
    contents.ReservedNodeOfferings = [];
  } else if (
    output["ReservedNodeOfferings"] !== undefined &&
    output["ReservedNodeOfferings"]["ReservedNodeOffering"] !== undefined
  ) {
    contents.ReservedNodeOfferings = deserializeAws_queryReservedNodeOfferingList(
      __getArrayIfSingleItem(output["ReservedNodeOfferings"]["ReservedNodeOffering"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryHsmClientCertificate = (output: any, context: __SerdeContext): HsmClientCertificate => {
  const contents: any = {
    HsmClientCertificateIdentifier: undefined,
    HsmClientCertificatePublicKey: undefined,
    Tags: undefined,
  };
  if (output["HsmClientCertificateIdentifier"] !== undefined) {
    contents.HsmClientCertificateIdentifier = __expectString(output["HsmClientCertificateIdentifier"]);
  }
  if (output["HsmClientCertificatePublicKey"] !== undefined) {
    contents.HsmClientCertificatePublicKey = __expectString(output["HsmClientCertificatePublicKey"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryHsmClientCertificateAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): HsmClientCertificateAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryHsmClientCertificateList = (output: any, context: __SerdeContext): HsmClientCertificate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryHsmClientCertificate(entry, context);
    });
};

const deserializeAws_queryHsmClientCertificateMessage = (
  output: any,
  context: __SerdeContext
): HsmClientCertificateMessage => {
  const contents: any = {
    Marker: undefined,
    HsmClientCertificates: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.HsmClientCertificates === "") {
    contents.HsmClientCertificates = [];
  } else if (
    output["HsmClientCertificates"] !== undefined &&
    output["HsmClientCertificates"]["HsmClientCertificate"] !== undefined
  ) {
    contents.HsmClientCertificates = deserializeAws_queryHsmClientCertificateList(
      __getArrayIfSingleItem(output["HsmClientCertificates"]["HsmClientCertificate"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryHsmClientCertificateNotFoundFault = (
  output: any,
  context: __SerdeContext
): HsmClientCertificateNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryHsmClientCertificateQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): HsmClientCertificateQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryHsmConfiguration = (output: any, context: __SerdeContext): HsmConfiguration => {
  const contents: any = {
    HsmConfigurationIdentifier: undefined,
    Description: undefined,
    HsmIpAddress: undefined,
    HsmPartitionName: undefined,
    Tags: undefined,
  };
  if (output["HsmConfigurationIdentifier"] !== undefined) {
    contents.HsmConfigurationIdentifier = __expectString(output["HsmConfigurationIdentifier"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["HsmIpAddress"] !== undefined) {
    contents.HsmIpAddress = __expectString(output["HsmIpAddress"]);
  }
  if (output["HsmPartitionName"] !== undefined) {
    contents.HsmPartitionName = __expectString(output["HsmPartitionName"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryHsmConfigurationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): HsmConfigurationAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryHsmConfigurationList = (output: any, context: __SerdeContext): HsmConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryHsmConfiguration(entry, context);
    });
};

const deserializeAws_queryHsmConfigurationMessage = (output: any, context: __SerdeContext): HsmConfigurationMessage => {
  const contents: any = {
    Marker: undefined,
    HsmConfigurations: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.HsmConfigurations === "") {
    contents.HsmConfigurations = [];
  } else if (
    output["HsmConfigurations"] !== undefined &&
    output["HsmConfigurations"]["HsmConfiguration"] !== undefined
  ) {
    contents.HsmConfigurations = deserializeAws_queryHsmConfigurationList(
      __getArrayIfSingleItem(output["HsmConfigurations"]["HsmConfiguration"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryHsmConfigurationNotFoundFault = (
  output: any,
  context: __SerdeContext
): HsmConfigurationNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryHsmConfigurationQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): HsmConfigurationQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryHsmStatus = (output: any, context: __SerdeContext): HsmStatus => {
  const contents: any = {
    HsmClientCertificateIdentifier: undefined,
    HsmConfigurationIdentifier: undefined,
    Status: undefined,
  };
  if (output["HsmClientCertificateIdentifier"] !== undefined) {
    contents.HsmClientCertificateIdentifier = __expectString(output["HsmClientCertificateIdentifier"]);
  }
  if (output["HsmConfigurationIdentifier"] !== undefined) {
    contents.HsmConfigurationIdentifier = __expectString(output["HsmConfigurationIdentifier"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryImportTablesCompleted = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryImportTablesInProgress = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryImportTablesNotStarted = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryIncompatibleOrderableOptions = (
  output: any,
  context: __SerdeContext
): IncompatibleOrderableOptions => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInProgressTableRestoreQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): InProgressTableRestoreQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInsufficientClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientClusterCapacityFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInsufficientS3BucketPolicyFault = (
  output: any,
  context: __SerdeContext
): InsufficientS3BucketPolicyFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidAuthenticationProfileRequestFault = (
  output: any,
  context: __SerdeContext
): InvalidAuthenticationProfileRequestFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidAuthorizationStateFault = (
  output: any,
  context: __SerdeContext
): InvalidAuthorizationStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidClusterParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterParameterGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidClusterSecurityGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSecurityGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidClusterSnapshotScheduleStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSnapshotScheduleStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidClusterSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSnapshotStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidClusterSubnetGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSubnetGroupStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidClusterSubnetStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSubnetStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidClusterTrackFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterTrackFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidDataShareFault = (output: any, context: __SerdeContext): InvalidDataShareFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidElasticIpFault = (output: any, context: __SerdeContext): InvalidElasticIpFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidEndpointStateFault = (
  output: any,
  context: __SerdeContext
): InvalidEndpointStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidHsmClientCertificateStateFault = (
  output: any,
  context: __SerdeContext
): InvalidHsmClientCertificateStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidHsmConfigurationStateFault = (
  output: any,
  context: __SerdeContext
): InvalidHsmConfigurationStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidNamespaceFault = (output: any, context: __SerdeContext): InvalidNamespaceFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidReservedNodeStateFault = (
  output: any,
  context: __SerdeContext
): InvalidReservedNodeStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidRestoreFault = (output: any, context: __SerdeContext): InvalidRestoreFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidRetentionPeriodFault = (
  output: any,
  context: __SerdeContext
): InvalidRetentionPeriodFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidS3BucketNameFault = (
  output: any,
  context: __SerdeContext
): InvalidS3BucketNameFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidS3KeyPrefixFault = (output: any, context: __SerdeContext): InvalidS3KeyPrefixFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidScheduledActionFault = (
  output: any,
  context: __SerdeContext
): InvalidScheduledActionFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidScheduleFault = (output: any, context: __SerdeContext): InvalidScheduleFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSnapshotCopyGrantStateFault = (
  output: any,
  context: __SerdeContext
): InvalidSnapshotCopyGrantStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSubscriptionStateFault = (
  output: any,
  context: __SerdeContext
): InvalidSubscriptionStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidTableRestoreArgumentFault = (
  output: any,
  context: __SerdeContext
): InvalidTableRestoreArgumentFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidTagFault = (output: any, context: __SerdeContext): InvalidTagFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidUsageLimitFault = (output: any, context: __SerdeContext): InvalidUsageLimitFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidVPCNetworkStateFault = (
  output: any,
  context: __SerdeContext
): InvalidVPCNetworkStateFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryIPRange = (output: any, context: __SerdeContext): IPRange => {
  const contents: any = {
    Status: undefined,
    CIDRIP: undefined,
    Tags: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CIDRIP"] !== undefined) {
    contents.CIDRIP = __expectString(output["CIDRIP"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryIPRangeList = (output: any, context: __SerdeContext): IPRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryIPRange(entry, context);
    });
};

const deserializeAws_queryLimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryLoggingStatus = (output: any, context: __SerdeContext): LoggingStatus => {
  const contents: any = {
    LoggingEnabled: undefined,
    BucketName: undefined,
    S3KeyPrefix: undefined,
    LastSuccessfulDeliveryTime: undefined,
    LastFailureTime: undefined,
    LastFailureMessage: undefined,
    LogDestinationType: undefined,
    LogExports: undefined,
  };
  if (output["LoggingEnabled"] !== undefined) {
    contents.LoggingEnabled = __parseBoolean(output["LoggingEnabled"]);
  }
  if (output["BucketName"] !== undefined) {
    contents.BucketName = __expectString(output["BucketName"]);
  }
  if (output["S3KeyPrefix"] !== undefined) {
    contents.S3KeyPrefix = __expectString(output["S3KeyPrefix"]);
  }
  if (output["LastSuccessfulDeliveryTime"] !== undefined) {
    contents.LastSuccessfulDeliveryTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["LastSuccessfulDeliveryTime"])
    );
  }
  if (output["LastFailureTime"] !== undefined) {
    contents.LastFailureTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastFailureTime"]));
  }
  if (output["LastFailureMessage"] !== undefined) {
    contents.LastFailureMessage = __expectString(output["LastFailureMessage"]);
  }
  if (output["LogDestinationType"] !== undefined) {
    contents.LogDestinationType = __expectString(output["LogDestinationType"]);
  }
  if (output.LogExports === "") {
    contents.LogExports = [];
  } else if (output["LogExports"] !== undefined && output["LogExports"]["member"] !== undefined) {
    contents.LogExports = deserializeAws_queryLogTypeList(
      __getArrayIfSingleItem(output["LogExports"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryLogTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryMaintenanceTrack = (output: any, context: __SerdeContext): MaintenanceTrack => {
  const contents: any = {
    MaintenanceTrackName: undefined,
    DatabaseVersion: undefined,
    UpdateTargets: undefined,
  };
  if (output["MaintenanceTrackName"] !== undefined) {
    contents.MaintenanceTrackName = __expectString(output["MaintenanceTrackName"]);
  }
  if (output["DatabaseVersion"] !== undefined) {
    contents.DatabaseVersion = __expectString(output["DatabaseVersion"]);
  }
  if (output.UpdateTargets === "") {
    contents.UpdateTargets = [];
  } else if (output["UpdateTargets"] !== undefined && output["UpdateTargets"]["UpdateTarget"] !== undefined) {
    contents.UpdateTargets = deserializeAws_queryEligibleTracksToUpdateList(
      __getArrayIfSingleItem(output["UpdateTargets"]["UpdateTarget"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyAquaOutputMessage = (output: any, context: __SerdeContext): ModifyAquaOutputMessage => {
  const contents: any = {
    AquaConfiguration: undefined,
  };
  if (output["AquaConfiguration"] !== undefined) {
    contents.AquaConfiguration = deserializeAws_queryAquaConfiguration(output["AquaConfiguration"], context);
  }
  return contents;
};

const deserializeAws_queryModifyAuthenticationProfileResult = (
  output: any,
  context: __SerdeContext
): ModifyAuthenticationProfileResult => {
  const contents: any = {
    AuthenticationProfileName: undefined,
    AuthenticationProfileContent: undefined,
  };
  if (output["AuthenticationProfileName"] !== undefined) {
    contents.AuthenticationProfileName = __expectString(output["AuthenticationProfileName"]);
  }
  if (output["AuthenticationProfileContent"] !== undefined) {
    contents.AuthenticationProfileContent = __expectString(output["AuthenticationProfileContent"]);
  }
  return contents;
};

const deserializeAws_queryModifyClusterDbRevisionResult = (
  output: any,
  context: __SerdeContext
): ModifyClusterDbRevisionResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryModifyClusterIamRolesResult = (
  output: any,
  context: __SerdeContext
): ModifyClusterIamRolesResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryModifyClusterMaintenanceResult = (
  output: any,
  context: __SerdeContext
): ModifyClusterMaintenanceResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryModifyClusterResult = (output: any, context: __SerdeContext): ModifyClusterResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryModifyClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): ModifyClusterSnapshotResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryModifyClusterSubnetGroupResult = (
  output: any,
  context: __SerdeContext
): ModifyClusterSubnetGroupResult => {
  const contents: any = {
    ClusterSubnetGroup: undefined,
  };
  if (output["ClusterSubnetGroup"] !== undefined) {
    contents.ClusterSubnetGroup = deserializeAws_queryClusterSubnetGroup(output["ClusterSubnetGroup"], context);
  }
  return contents;
};

const deserializeAws_queryModifyEventSubscriptionResult = (
  output: any,
  context: __SerdeContext
): ModifyEventSubscriptionResult => {
  const contents: any = {
    EventSubscription: undefined,
  };
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

const deserializeAws_queryModifySnapshotCopyRetentionPeriodResult = (
  output: any,
  context: __SerdeContext
): ModifySnapshotCopyRetentionPeriodResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryNetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  const contents: any = {
    NetworkInterfaceId: undefined,
    SubnetId: undefined,
    PrivateIpAddress: undefined,
    AvailabilityZone: undefined,
  };
  if (output["NetworkInterfaceId"] !== undefined) {
    contents.NetworkInterfaceId = __expectString(output["NetworkInterfaceId"]);
  }
  if (output["SubnetId"] !== undefined) {
    contents.SubnetId = __expectString(output["SubnetId"]);
  }
  if (output["PrivateIpAddress"] !== undefined) {
    contents.PrivateIpAddress = __expectString(output["PrivateIpAddress"]);
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  return contents;
};

const deserializeAws_queryNetworkInterfaceList = (output: any, context: __SerdeContext): NetworkInterface[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryNetworkInterface(entry, context);
    });
};

const deserializeAws_queryNodeConfigurationOption = (output: any, context: __SerdeContext): NodeConfigurationOption => {
  const contents: any = {
    NodeType: undefined,
    NumberOfNodes: undefined,
    EstimatedDiskUtilizationPercent: undefined,
    Mode: undefined,
  };
  if (output["NodeType"] !== undefined) {
    contents.NodeType = __expectString(output["NodeType"]);
  }
  if (output["NumberOfNodes"] !== undefined) {
    contents.NumberOfNodes = __strictParseInt32(output["NumberOfNodes"]) as number;
  }
  if (output["EstimatedDiskUtilizationPercent"] !== undefined) {
    contents.EstimatedDiskUtilizationPercent = __strictParseFloat(output["EstimatedDiskUtilizationPercent"]) as number;
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  return contents;
};

const deserializeAws_queryNodeConfigurationOptionList = (
  output: any,
  context: __SerdeContext
): NodeConfigurationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryNodeConfigurationOption(entry, context);
    });
};

const deserializeAws_queryNodeConfigurationOptionsMessage = (
  output: any,
  context: __SerdeContext
): NodeConfigurationOptionsMessage => {
  const contents: any = {
    NodeConfigurationOptionList: undefined,
    Marker: undefined,
  };
  if (output.NodeConfigurationOptionList === "") {
    contents.NodeConfigurationOptionList = [];
  } else if (
    output["NodeConfigurationOptionList"] !== undefined &&
    output["NodeConfigurationOptionList"]["NodeConfigurationOption"] !== undefined
  ) {
    contents.NodeConfigurationOptionList = deserializeAws_queryNodeConfigurationOptionList(
      __getArrayIfSingleItem(output["NodeConfigurationOptionList"]["NodeConfigurationOption"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault = (
  output: any,
  context: __SerdeContext
): NumberOfNodesPerClusterLimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryNumberOfNodesQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): NumberOfNodesQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryOrderableClusterOption = (output: any, context: __SerdeContext): OrderableClusterOption => {
  const contents: any = {
    ClusterVersion: undefined,
    ClusterType: undefined,
    NodeType: undefined,
    AvailabilityZones: undefined,
  };
  if (output["ClusterVersion"] !== undefined) {
    contents.ClusterVersion = __expectString(output["ClusterVersion"]);
  }
  if (output["ClusterType"] !== undefined) {
    contents.ClusterType = __expectString(output["ClusterType"]);
  }
  if (output["NodeType"] !== undefined) {
    contents.NodeType = __expectString(output["NodeType"]);
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["AvailabilityZone"] !== undefined
  ) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZoneList(
      __getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryOrderableClusterOptionsList = (
  output: any,
  context: __SerdeContext
): OrderableClusterOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryOrderableClusterOption(entry, context);
    });
};

const deserializeAws_queryOrderableClusterOptionsMessage = (
  output: any,
  context: __SerdeContext
): OrderableClusterOptionsMessage => {
  const contents: any = {
    OrderableClusterOptions: undefined,
    Marker: undefined,
  };
  if (output.OrderableClusterOptions === "") {
    contents.OrderableClusterOptions = [];
  } else if (
    output["OrderableClusterOptions"] !== undefined &&
    output["OrderableClusterOptions"]["OrderableClusterOption"] !== undefined
  ) {
    contents.OrderableClusterOptions = deserializeAws_queryOrderableClusterOptionsList(
      __getArrayIfSingleItem(output["OrderableClusterOptions"]["OrderableClusterOption"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryParameter = (output: any, context: __SerdeContext): Parameter => {
  const contents: any = {
    ParameterName: undefined,
    ParameterValue: undefined,
    Description: undefined,
    Source: undefined,
    DataType: undefined,
    AllowedValues: undefined,
    ApplyType: undefined,
    IsModifiable: undefined,
    MinimumEngineVersion: undefined,
  };
  if (output["ParameterName"] !== undefined) {
    contents.ParameterName = __expectString(output["ParameterName"]);
  }
  if (output["ParameterValue"] !== undefined) {
    contents.ParameterValue = __expectString(output["ParameterValue"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Source"] !== undefined) {
    contents.Source = __expectString(output["Source"]);
  }
  if (output["DataType"] !== undefined) {
    contents.DataType = __expectString(output["DataType"]);
  }
  if (output["AllowedValues"] !== undefined) {
    contents.AllowedValues = __expectString(output["AllowedValues"]);
  }
  if (output["ApplyType"] !== undefined) {
    contents.ApplyType = __expectString(output["ApplyType"]);
  }
  if (output["IsModifiable"] !== undefined) {
    contents.IsModifiable = __parseBoolean(output["IsModifiable"]);
  }
  if (output["MinimumEngineVersion"] !== undefined) {
    contents.MinimumEngineVersion = __expectString(output["MinimumEngineVersion"]);
  }
  return contents;
};

const deserializeAws_queryParameterGroupList = (output: any, context: __SerdeContext): ClusterParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryClusterParameterGroup(entry, context);
    });
};

const deserializeAws_queryParametersList = (output: any, context: __SerdeContext): Parameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryParameter(entry, context);
    });
};

const deserializeAws_queryPartnerIntegrationInfo = (output: any, context: __SerdeContext): PartnerIntegrationInfo => {
  const contents: any = {
    DatabaseName: undefined,
    PartnerName: undefined,
    Status: undefined,
    StatusMessage: undefined,
    CreatedAt: undefined,
    UpdatedAt: undefined,
  };
  if (output["DatabaseName"] !== undefined) {
    contents.DatabaseName = __expectString(output["DatabaseName"]);
  }
  if (output["PartnerName"] !== undefined) {
    contents.PartnerName = __expectString(output["PartnerName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusMessage"] !== undefined) {
    contents.StatusMessage = __expectString(output["StatusMessage"]);
  }
  if (output["CreatedAt"] !== undefined) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedAt"]));
  }
  if (output["UpdatedAt"] !== undefined) {
    contents.UpdatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UpdatedAt"]));
  }
  return contents;
};

const deserializeAws_queryPartnerIntegrationInfoList = (
  output: any,
  context: __SerdeContext
): PartnerIntegrationInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPartnerIntegrationInfo(entry, context);
    });
};

const deserializeAws_queryPartnerIntegrationOutputMessage = (
  output: any,
  context: __SerdeContext
): PartnerIntegrationOutputMessage => {
  const contents: any = {
    DatabaseName: undefined,
    PartnerName: undefined,
  };
  if (output["DatabaseName"] !== undefined) {
    contents.DatabaseName = __expectString(output["DatabaseName"]);
  }
  if (output["PartnerName"] !== undefined) {
    contents.PartnerName = __expectString(output["PartnerName"]);
  }
  return contents;
};

const deserializeAws_queryPartnerNotFoundFault = (output: any, context: __SerdeContext): PartnerNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryPauseClusterMessage = (output: any, context: __SerdeContext): PauseClusterMessage => {
  const contents: any = {
    ClusterIdentifier: undefined,
  };
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  return contents;
};

const deserializeAws_queryPauseClusterResult = (output: any, context: __SerdeContext): PauseClusterResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryPendingActionsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryPendingModifiedValues = (output: any, context: __SerdeContext): PendingModifiedValues => {
  const contents: any = {
    MasterUserPassword: undefined,
    NodeType: undefined,
    NumberOfNodes: undefined,
    ClusterType: undefined,
    ClusterVersion: undefined,
    AutomatedSnapshotRetentionPeriod: undefined,
    ClusterIdentifier: undefined,
    PubliclyAccessible: undefined,
    EnhancedVpcRouting: undefined,
    MaintenanceTrackName: undefined,
    EncryptionType: undefined,
  };
  if (output["MasterUserPassword"] !== undefined) {
    contents.MasterUserPassword = __expectString(output["MasterUserPassword"]);
  }
  if (output["NodeType"] !== undefined) {
    contents.NodeType = __expectString(output["NodeType"]);
  }
  if (output["NumberOfNodes"] !== undefined) {
    contents.NumberOfNodes = __strictParseInt32(output["NumberOfNodes"]) as number;
  }
  if (output["ClusterType"] !== undefined) {
    contents.ClusterType = __expectString(output["ClusterType"]);
  }
  if (output["ClusterVersion"] !== undefined) {
    contents.ClusterVersion = __expectString(output["ClusterVersion"]);
  }
  if (output["AutomatedSnapshotRetentionPeriod"] !== undefined) {
    contents.AutomatedSnapshotRetentionPeriod = __strictParseInt32(
      output["AutomatedSnapshotRetentionPeriod"]
    ) as number;
  }
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["PubliclyAccessible"] !== undefined) {
    contents.PubliclyAccessible = __parseBoolean(output["PubliclyAccessible"]);
  }
  if (output["EnhancedVpcRouting"] !== undefined) {
    contents.EnhancedVpcRouting = __parseBoolean(output["EnhancedVpcRouting"]);
  }
  if (output["MaintenanceTrackName"] !== undefined) {
    contents.MaintenanceTrackName = __expectString(output["MaintenanceTrackName"]);
  }
  if (output["EncryptionType"] !== undefined) {
    contents.EncryptionType = __expectString(output["EncryptionType"]);
  }
  return contents;
};

const deserializeAws_queryPurchaseReservedNodeOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseReservedNodeOfferingResult => {
  const contents: any = {
    ReservedNode: undefined,
  };
  if (output["ReservedNode"] !== undefined) {
    contents.ReservedNode = deserializeAws_queryReservedNode(output["ReservedNode"], context);
  }
  return contents;
};

const deserializeAws_queryRebootClusterResult = (output: any, context: __SerdeContext): RebootClusterResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryRecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  const contents: any = {
    RecurringChargeAmount: undefined,
    RecurringChargeFrequency: undefined,
  };
  if (output["RecurringChargeAmount"] !== undefined) {
    contents.RecurringChargeAmount = __strictParseFloat(output["RecurringChargeAmount"]) as number;
  }
  if (output["RecurringChargeFrequency"] !== undefined) {
    contents.RecurringChargeFrequency = __expectString(output["RecurringChargeFrequency"]);
  }
  return contents;
};

const deserializeAws_queryRecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryRecurringCharge(entry, context);
    });
};

const deserializeAws_queryReservedNode = (output: any, context: __SerdeContext): ReservedNode => {
  const contents: any = {
    ReservedNodeId: undefined,
    ReservedNodeOfferingId: undefined,
    NodeType: undefined,
    StartTime: undefined,
    Duration: undefined,
    FixedPrice: undefined,
    UsagePrice: undefined,
    CurrencyCode: undefined,
    NodeCount: undefined,
    State: undefined,
    OfferingType: undefined,
    RecurringCharges: undefined,
    ReservedNodeOfferingType: undefined,
  };
  if (output["ReservedNodeId"] !== undefined) {
    contents.ReservedNodeId = __expectString(output["ReservedNodeId"]);
  }
  if (output["ReservedNodeOfferingId"] !== undefined) {
    contents.ReservedNodeOfferingId = __expectString(output["ReservedNodeOfferingId"]);
  }
  if (output["NodeType"] !== undefined) {
    contents.NodeType = __expectString(output["NodeType"]);
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StartTime"]));
  }
  if (output["Duration"] !== undefined) {
    contents.Duration = __strictParseInt32(output["Duration"]) as number;
  }
  if (output["FixedPrice"] !== undefined) {
    contents.FixedPrice = __strictParseFloat(output["FixedPrice"]) as number;
  }
  if (output["UsagePrice"] !== undefined) {
    contents.UsagePrice = __strictParseFloat(output["UsagePrice"]) as number;
  }
  if (output["CurrencyCode"] !== undefined) {
    contents.CurrencyCode = __expectString(output["CurrencyCode"]);
  }
  if (output["NodeCount"] !== undefined) {
    contents.NodeCount = __strictParseInt32(output["NodeCount"]) as number;
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["OfferingType"] !== undefined) {
    contents.OfferingType = __expectString(output["OfferingType"]);
  }
  if (output.RecurringCharges === "") {
    contents.RecurringCharges = [];
  } else if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
    contents.RecurringCharges = deserializeAws_queryRecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  if (output["ReservedNodeOfferingType"] !== undefined) {
    contents.ReservedNodeOfferingType = __expectString(output["ReservedNodeOfferingType"]);
  }
  return contents;
};

const deserializeAws_queryReservedNodeAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedNodeAlreadyMigratedFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeAlreadyMigratedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedNodeConfigurationOption = (
  output: any,
  context: __SerdeContext
): ReservedNodeConfigurationOption => {
  const contents: any = {
    SourceReservedNode: undefined,
    TargetReservedNodeCount: undefined,
    TargetReservedNodeOffering: undefined,
  };
  if (output["SourceReservedNode"] !== undefined) {
    contents.SourceReservedNode = deserializeAws_queryReservedNode(output["SourceReservedNode"], context);
  }
  if (output["TargetReservedNodeCount"] !== undefined) {
    contents.TargetReservedNodeCount = __strictParseInt32(output["TargetReservedNodeCount"]) as number;
  }
  if (output["TargetReservedNodeOffering"] !== undefined) {
    contents.TargetReservedNodeOffering = deserializeAws_queryReservedNodeOffering(
      output["TargetReservedNodeOffering"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedNodeConfigurationOptionList = (
  output: any,
  context: __SerdeContext
): ReservedNodeConfigurationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReservedNodeConfigurationOption(entry, context);
    });
};

const deserializeAws_queryReservedNodeExchangeNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeExchangeNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedNodeExchangeStatus = (
  output: any,
  context: __SerdeContext
): ReservedNodeExchangeStatus => {
  const contents: any = {
    ReservedNodeExchangeRequestId: undefined,
    Status: undefined,
    RequestTime: undefined,
    SourceReservedNodeId: undefined,
    SourceReservedNodeType: undefined,
    SourceReservedNodeCount: undefined,
    TargetReservedNodeOfferingId: undefined,
    TargetReservedNodeType: undefined,
    TargetReservedNodeCount: undefined,
  };
  if (output["ReservedNodeExchangeRequestId"] !== undefined) {
    contents.ReservedNodeExchangeRequestId = __expectString(output["ReservedNodeExchangeRequestId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["RequestTime"] !== undefined) {
    contents.RequestTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["RequestTime"]));
  }
  if (output["SourceReservedNodeId"] !== undefined) {
    contents.SourceReservedNodeId = __expectString(output["SourceReservedNodeId"]);
  }
  if (output["SourceReservedNodeType"] !== undefined) {
    contents.SourceReservedNodeType = __expectString(output["SourceReservedNodeType"]);
  }
  if (output["SourceReservedNodeCount"] !== undefined) {
    contents.SourceReservedNodeCount = __strictParseInt32(output["SourceReservedNodeCount"]) as number;
  }
  if (output["TargetReservedNodeOfferingId"] !== undefined) {
    contents.TargetReservedNodeOfferingId = __expectString(output["TargetReservedNodeOfferingId"]);
  }
  if (output["TargetReservedNodeType"] !== undefined) {
    contents.TargetReservedNodeType = __expectString(output["TargetReservedNodeType"]);
  }
  if (output["TargetReservedNodeCount"] !== undefined) {
    contents.TargetReservedNodeCount = __strictParseInt32(output["TargetReservedNodeCount"]) as number;
  }
  return contents;
};

const deserializeAws_queryReservedNodeExchangeStatusList = (
  output: any,
  context: __SerdeContext
): ReservedNodeExchangeStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReservedNodeExchangeStatus(entry, context);
    });
};

const deserializeAws_queryReservedNodeList = (output: any, context: __SerdeContext): ReservedNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReservedNode(entry, context);
    });
};

const deserializeAws_queryReservedNodeNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedNodeOffering = (output: any, context: __SerdeContext): ReservedNodeOffering => {
  const contents: any = {
    ReservedNodeOfferingId: undefined,
    NodeType: undefined,
    Duration: undefined,
    FixedPrice: undefined,
    UsagePrice: undefined,
    CurrencyCode: undefined,
    OfferingType: undefined,
    RecurringCharges: undefined,
    ReservedNodeOfferingType: undefined,
  };
  if (output["ReservedNodeOfferingId"] !== undefined) {
    contents.ReservedNodeOfferingId = __expectString(output["ReservedNodeOfferingId"]);
  }
  if (output["NodeType"] !== undefined) {
    contents.NodeType = __expectString(output["NodeType"]);
  }
  if (output["Duration"] !== undefined) {
    contents.Duration = __strictParseInt32(output["Duration"]) as number;
  }
  if (output["FixedPrice"] !== undefined) {
    contents.FixedPrice = __strictParseFloat(output["FixedPrice"]) as number;
  }
  if (output["UsagePrice"] !== undefined) {
    contents.UsagePrice = __strictParseFloat(output["UsagePrice"]) as number;
  }
  if (output["CurrencyCode"] !== undefined) {
    contents.CurrencyCode = __expectString(output["CurrencyCode"]);
  }
  if (output["OfferingType"] !== undefined) {
    contents.OfferingType = __expectString(output["OfferingType"]);
  }
  if (output.RecurringCharges === "") {
    contents.RecurringCharges = [];
  } else if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
    contents.RecurringCharges = deserializeAws_queryRecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  if (output["ReservedNodeOfferingType"] !== undefined) {
    contents.ReservedNodeOfferingType = __expectString(output["ReservedNodeOfferingType"]);
  }
  return contents;
};

const deserializeAws_queryReservedNodeOfferingList = (output: any, context: __SerdeContext): ReservedNodeOffering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryReservedNodeOffering(entry, context);
    });
};

const deserializeAws_queryReservedNodeOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeOfferingNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedNodeOfferingsMessage = (
  output: any,
  context: __SerdeContext
): ReservedNodeOfferingsMessage => {
  const contents: any = {
    Marker: undefined,
    ReservedNodeOfferings: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedNodeOfferings === "") {
    contents.ReservedNodeOfferings = [];
  } else if (
    output["ReservedNodeOfferings"] !== undefined &&
    output["ReservedNodeOfferings"]["ReservedNodeOffering"] !== undefined
  ) {
    contents.ReservedNodeOfferings = deserializeAws_queryReservedNodeOfferingList(
      __getArrayIfSingleItem(output["ReservedNodeOfferings"]["ReservedNodeOffering"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryReservedNodeQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryReservedNodesMessage = (output: any, context: __SerdeContext): ReservedNodesMessage => {
  const contents: any = {
    Marker: undefined,
    ReservedNodes: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedNodes === "") {
    contents.ReservedNodes = [];
  } else if (output["ReservedNodes"] !== undefined && output["ReservedNodes"]["ReservedNode"] !== undefined) {
    contents.ReservedNodes = deserializeAws_queryReservedNodeList(
      __getArrayIfSingleItem(output["ReservedNodes"]["ReservedNode"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryResizeClusterMessage = (output: any, context: __SerdeContext): ResizeClusterMessage => {
  const contents: any = {
    ClusterIdentifier: undefined,
    ClusterType: undefined,
    NodeType: undefined,
    NumberOfNodes: undefined,
    Classic: undefined,
    ReservedNodeId: undefined,
    TargetReservedNodeOfferingId: undefined,
  };
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["ClusterType"] !== undefined) {
    contents.ClusterType = __expectString(output["ClusterType"]);
  }
  if (output["NodeType"] !== undefined) {
    contents.NodeType = __expectString(output["NodeType"]);
  }
  if (output["NumberOfNodes"] !== undefined) {
    contents.NumberOfNodes = __strictParseInt32(output["NumberOfNodes"]) as number;
  }
  if (output["Classic"] !== undefined) {
    contents.Classic = __parseBoolean(output["Classic"]);
  }
  if (output["ReservedNodeId"] !== undefined) {
    contents.ReservedNodeId = __expectString(output["ReservedNodeId"]);
  }
  if (output["TargetReservedNodeOfferingId"] !== undefined) {
    contents.TargetReservedNodeOfferingId = __expectString(output["TargetReservedNodeOfferingId"]);
  }
  return contents;
};

const deserializeAws_queryResizeClusterResult = (output: any, context: __SerdeContext): ResizeClusterResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryResizeInfo = (output: any, context: __SerdeContext): ResizeInfo => {
  const contents: any = {
    ResizeType: undefined,
    AllowCancelResize: undefined,
  };
  if (output["ResizeType"] !== undefined) {
    contents.ResizeType = __expectString(output["ResizeType"]);
  }
  if (output["AllowCancelResize"] !== undefined) {
    contents.AllowCancelResize = __parseBoolean(output["AllowCancelResize"]);
  }
  return contents;
};

const deserializeAws_queryResizeNotFoundFault = (output: any, context: __SerdeContext): ResizeNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryResizeProgressMessage = (output: any, context: __SerdeContext): ResizeProgressMessage => {
  const contents: any = {
    TargetNodeType: undefined,
    TargetNumberOfNodes: undefined,
    TargetClusterType: undefined,
    Status: undefined,
    ImportTablesCompleted: undefined,
    ImportTablesInProgress: undefined,
    ImportTablesNotStarted: undefined,
    AvgResizeRateInMegaBytesPerSecond: undefined,
    TotalResizeDataInMegaBytes: undefined,
    ProgressInMegaBytes: undefined,
    ElapsedTimeInSeconds: undefined,
    EstimatedTimeToCompletionInSeconds: undefined,
    ResizeType: undefined,
    Message: undefined,
    TargetEncryptionType: undefined,
    DataTransferProgressPercent: undefined,
  };
  if (output["TargetNodeType"] !== undefined) {
    contents.TargetNodeType = __expectString(output["TargetNodeType"]);
  }
  if (output["TargetNumberOfNodes"] !== undefined) {
    contents.TargetNumberOfNodes = __strictParseInt32(output["TargetNumberOfNodes"]) as number;
  }
  if (output["TargetClusterType"] !== undefined) {
    contents.TargetClusterType = __expectString(output["TargetClusterType"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.ImportTablesCompleted === "") {
    contents.ImportTablesCompleted = [];
  } else if (output["ImportTablesCompleted"] !== undefined && output["ImportTablesCompleted"]["member"] !== undefined) {
    contents.ImportTablesCompleted = deserializeAws_queryImportTablesCompleted(
      __getArrayIfSingleItem(output["ImportTablesCompleted"]["member"]),
      context
    );
  }
  if (output.ImportTablesInProgress === "") {
    contents.ImportTablesInProgress = [];
  } else if (
    output["ImportTablesInProgress"] !== undefined &&
    output["ImportTablesInProgress"]["member"] !== undefined
  ) {
    contents.ImportTablesInProgress = deserializeAws_queryImportTablesInProgress(
      __getArrayIfSingleItem(output["ImportTablesInProgress"]["member"]),
      context
    );
  }
  if (output.ImportTablesNotStarted === "") {
    contents.ImportTablesNotStarted = [];
  } else if (
    output["ImportTablesNotStarted"] !== undefined &&
    output["ImportTablesNotStarted"]["member"] !== undefined
  ) {
    contents.ImportTablesNotStarted = deserializeAws_queryImportTablesNotStarted(
      __getArrayIfSingleItem(output["ImportTablesNotStarted"]["member"]),
      context
    );
  }
  if (output["AvgResizeRateInMegaBytesPerSecond"] !== undefined) {
    contents.AvgResizeRateInMegaBytesPerSecond = __strictParseFloat(
      output["AvgResizeRateInMegaBytesPerSecond"]
    ) as number;
  }
  if (output["TotalResizeDataInMegaBytes"] !== undefined) {
    contents.TotalResizeDataInMegaBytes = __strictParseLong(output["TotalResizeDataInMegaBytes"]) as number;
  }
  if (output["ProgressInMegaBytes"] !== undefined) {
    contents.ProgressInMegaBytes = __strictParseLong(output["ProgressInMegaBytes"]) as number;
  }
  if (output["ElapsedTimeInSeconds"] !== undefined) {
    contents.ElapsedTimeInSeconds = __strictParseLong(output["ElapsedTimeInSeconds"]) as number;
  }
  if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
    contents.EstimatedTimeToCompletionInSeconds = __strictParseLong(
      output["EstimatedTimeToCompletionInSeconds"]
    ) as number;
  }
  if (output["ResizeType"] !== undefined) {
    contents.ResizeType = __expectString(output["ResizeType"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["TargetEncryptionType"] !== undefined) {
    contents.TargetEncryptionType = __expectString(output["TargetEncryptionType"]);
  }
  if (output["DataTransferProgressPercent"] !== undefined) {
    contents.DataTransferProgressPercent = __strictParseFloat(output["DataTransferProgressPercent"]) as number;
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundFault = (output: any, context: __SerdeContext): ResourceNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryRestorableNodeTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryRestoreFromClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreFromClusterSnapshotResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryRestoreStatus = (output: any, context: __SerdeContext): RestoreStatus => {
  const contents: any = {
    Status: undefined,
    CurrentRestoreRateInMegaBytesPerSecond: undefined,
    SnapshotSizeInMegaBytes: undefined,
    ProgressInMegaBytes: undefined,
    ElapsedTimeInSeconds: undefined,
    EstimatedTimeToCompletionInSeconds: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CurrentRestoreRateInMegaBytesPerSecond"] !== undefined) {
    contents.CurrentRestoreRateInMegaBytesPerSecond = __strictParseFloat(
      output["CurrentRestoreRateInMegaBytesPerSecond"]
    ) as number;
  }
  if (output["SnapshotSizeInMegaBytes"] !== undefined) {
    contents.SnapshotSizeInMegaBytes = __strictParseLong(output["SnapshotSizeInMegaBytes"]) as number;
  }
  if (output["ProgressInMegaBytes"] !== undefined) {
    contents.ProgressInMegaBytes = __strictParseLong(output["ProgressInMegaBytes"]) as number;
  }
  if (output["ElapsedTimeInSeconds"] !== undefined) {
    contents.ElapsedTimeInSeconds = __strictParseLong(output["ElapsedTimeInSeconds"]) as number;
  }
  if (output["EstimatedTimeToCompletionInSeconds"] !== undefined) {
    contents.EstimatedTimeToCompletionInSeconds = __strictParseLong(
      output["EstimatedTimeToCompletionInSeconds"]
    ) as number;
  }
  return contents;
};

const deserializeAws_queryRestoreTableFromClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreTableFromClusterSnapshotResult => {
  const contents: any = {
    TableRestoreStatus: undefined,
  };
  if (output["TableRestoreStatus"] !== undefined) {
    contents.TableRestoreStatus = deserializeAws_queryTableRestoreStatus(output["TableRestoreStatus"], context);
  }
  return contents;
};

const deserializeAws_queryResumeClusterMessage = (output: any, context: __SerdeContext): ResumeClusterMessage => {
  const contents: any = {
    ClusterIdentifier: undefined,
  };
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  return contents;
};

const deserializeAws_queryResumeClusterResult = (output: any, context: __SerdeContext): ResumeClusterResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryRevisionTarget = (output: any, context: __SerdeContext): RevisionTarget => {
  const contents: any = {
    DatabaseRevision: undefined,
    Description: undefined,
    DatabaseRevisionReleaseDate: undefined,
  };
  if (output["DatabaseRevision"] !== undefined) {
    contents.DatabaseRevision = __expectString(output["DatabaseRevision"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["DatabaseRevisionReleaseDate"] !== undefined) {
    contents.DatabaseRevisionReleaseDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["DatabaseRevisionReleaseDate"])
    );
  }
  return contents;
};

const deserializeAws_queryRevisionTargetsList = (output: any, context: __SerdeContext): RevisionTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryRevisionTarget(entry, context);
    });
};

const deserializeAws_queryRevokeClusterSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): RevokeClusterSecurityGroupIngressResult => {
  const contents: any = {
    ClusterSecurityGroup: undefined,
  };
  if (output["ClusterSecurityGroup"] !== undefined) {
    contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
  }
  return contents;
};

const deserializeAws_queryRevokeSnapshotAccessResult = (
  output: any,
  context: __SerdeContext
): RevokeSnapshotAccessResult => {
  const contents: any = {
    Snapshot: undefined,
  };
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
  }
  return contents;
};

const deserializeAws_queryRotateEncryptionKeyResult = (
  output: any,
  context: __SerdeContext
): RotateEncryptionKeyResult => {
  const contents: any = {
    Cluster: undefined,
  };
  if (output["Cluster"] !== undefined) {
    contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
  }
  return contents;
};

const deserializeAws_queryScheduledAction = (output: any, context: __SerdeContext): ScheduledAction => {
  const contents: any = {
    ScheduledActionName: undefined,
    TargetAction: undefined,
    Schedule: undefined,
    IamRole: undefined,
    ScheduledActionDescription: undefined,
    State: undefined,
    NextInvocations: undefined,
    StartTime: undefined,
    EndTime: undefined,
  };
  if (output["ScheduledActionName"] !== undefined) {
    contents.ScheduledActionName = __expectString(output["ScheduledActionName"]);
  }
  if (output["TargetAction"] !== undefined) {
    contents.TargetAction = deserializeAws_queryScheduledActionType(output["TargetAction"], context);
  }
  if (output["Schedule"] !== undefined) {
    contents.Schedule = __expectString(output["Schedule"]);
  }
  if (output["IamRole"] !== undefined) {
    contents.IamRole = __expectString(output["IamRole"]);
  }
  if (output["ScheduledActionDescription"] !== undefined) {
    contents.ScheduledActionDescription = __expectString(output["ScheduledActionDescription"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output.NextInvocations === "") {
    contents.NextInvocations = [];
  } else if (
    output["NextInvocations"] !== undefined &&
    output["NextInvocations"]["ScheduledActionTime"] !== undefined
  ) {
    contents.NextInvocations = deserializeAws_queryScheduledActionTimeList(
      __getArrayIfSingleItem(output["NextInvocations"]["ScheduledActionTime"]),
      context
    );
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StartTime"]));
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EndTime"]));
  }
  return contents;
};

const deserializeAws_queryScheduledActionAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ScheduledActionAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryScheduledActionList = (output: any, context: __SerdeContext): ScheduledAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryScheduledAction(entry, context);
    });
};

const deserializeAws_queryScheduledActionNotFoundFault = (
  output: any,
  context: __SerdeContext
): ScheduledActionNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryScheduledActionQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ScheduledActionQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryScheduledActionsMessage = (output: any, context: __SerdeContext): ScheduledActionsMessage => {
  const contents: any = {
    Marker: undefined,
    ScheduledActions: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ScheduledActions === "") {
    contents.ScheduledActions = [];
  } else if (output["ScheduledActions"] !== undefined && output["ScheduledActions"]["ScheduledAction"] !== undefined) {
    contents.ScheduledActions = deserializeAws_queryScheduledActionList(
      __getArrayIfSingleItem(output["ScheduledActions"]["ScheduledAction"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryScheduledActionTimeList = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
};

const deserializeAws_queryScheduledActionType = (output: any, context: __SerdeContext): ScheduledActionType => {
  const contents: any = {
    ResizeCluster: undefined,
    PauseCluster: undefined,
    ResumeCluster: undefined,
  };
  if (output["ResizeCluster"] !== undefined) {
    contents.ResizeCluster = deserializeAws_queryResizeClusterMessage(output["ResizeCluster"], context);
  }
  if (output["PauseCluster"] !== undefined) {
    contents.PauseCluster = deserializeAws_queryPauseClusterMessage(output["PauseCluster"], context);
  }
  if (output["ResumeCluster"] !== undefined) {
    contents.ResumeCluster = deserializeAws_queryResumeClusterMessage(output["ResumeCluster"], context);
  }
  return contents;
};

const deserializeAws_queryScheduledActionTypeUnsupportedFault = (
  output: any,
  context: __SerdeContext
): ScheduledActionTypeUnsupportedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryScheduleDefinitionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryScheduleDefinitionTypeUnsupportedFault = (
  output: any,
  context: __SerdeContext
): ScheduleDefinitionTypeUnsupportedFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryScheduledSnapshotTimeList = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
};

const deserializeAws_querySnapshot = (output: any, context: __SerdeContext): Snapshot => {
  const contents: any = {
    SnapshotIdentifier: undefined,
    ClusterIdentifier: undefined,
    SnapshotCreateTime: undefined,
    Status: undefined,
    Port: undefined,
    AvailabilityZone: undefined,
    ClusterCreateTime: undefined,
    MasterUsername: undefined,
    ClusterVersion: undefined,
    EngineFullVersion: undefined,
    SnapshotType: undefined,
    NodeType: undefined,
    NumberOfNodes: undefined,
    DBName: undefined,
    VpcId: undefined,
    Encrypted: undefined,
    KmsKeyId: undefined,
    EncryptedWithHSM: undefined,
    AccountsWithRestoreAccess: undefined,
    OwnerAccount: undefined,
    TotalBackupSizeInMegaBytes: undefined,
    ActualIncrementalBackupSizeInMegaBytes: undefined,
    BackupProgressInMegaBytes: undefined,
    CurrentBackupRateInMegaBytesPerSecond: undefined,
    EstimatedSecondsToCompletion: undefined,
    ElapsedTimeInSeconds: undefined,
    SourceRegion: undefined,
    Tags: undefined,
    RestorableNodeTypes: undefined,
    EnhancedVpcRouting: undefined,
    MaintenanceTrackName: undefined,
    ManualSnapshotRetentionPeriod: undefined,
    ManualSnapshotRemainingDays: undefined,
    SnapshotRetentionStartTime: undefined,
  };
  if (output["SnapshotIdentifier"] !== undefined) {
    contents.SnapshotIdentifier = __expectString(output["SnapshotIdentifier"]);
  }
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["SnapshotCreateTime"] !== undefined) {
    contents.SnapshotCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["SnapshotCreateTime"]));
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["ClusterCreateTime"] !== undefined) {
    contents.ClusterCreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ClusterCreateTime"]));
  }
  if (output["MasterUsername"] !== undefined) {
    contents.MasterUsername = __expectString(output["MasterUsername"]);
  }
  if (output["ClusterVersion"] !== undefined) {
    contents.ClusterVersion = __expectString(output["ClusterVersion"]);
  }
  if (output["EngineFullVersion"] !== undefined) {
    contents.EngineFullVersion = __expectString(output["EngineFullVersion"]);
  }
  if (output["SnapshotType"] !== undefined) {
    contents.SnapshotType = __expectString(output["SnapshotType"]);
  }
  if (output["NodeType"] !== undefined) {
    contents.NodeType = __expectString(output["NodeType"]);
  }
  if (output["NumberOfNodes"] !== undefined) {
    contents.NumberOfNodes = __strictParseInt32(output["NumberOfNodes"]) as number;
  }
  if (output["DBName"] !== undefined) {
    contents.DBName = __expectString(output["DBName"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["Encrypted"] !== undefined) {
    contents.Encrypted = __parseBoolean(output["Encrypted"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output["EncryptedWithHSM"] !== undefined) {
    contents.EncryptedWithHSM = __parseBoolean(output["EncryptedWithHSM"]);
  }
  if (output.AccountsWithRestoreAccess === "") {
    contents.AccountsWithRestoreAccess = [];
  } else if (
    output["AccountsWithRestoreAccess"] !== undefined &&
    output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"] !== undefined
  ) {
    contents.AccountsWithRestoreAccess = deserializeAws_queryAccountsWithRestoreAccessList(
      __getArrayIfSingleItem(output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"]),
      context
    );
  }
  if (output["OwnerAccount"] !== undefined) {
    contents.OwnerAccount = __expectString(output["OwnerAccount"]);
  }
  if (output["TotalBackupSizeInMegaBytes"] !== undefined) {
    contents.TotalBackupSizeInMegaBytes = __strictParseFloat(output["TotalBackupSizeInMegaBytes"]) as number;
  }
  if (output["ActualIncrementalBackupSizeInMegaBytes"] !== undefined) {
    contents.ActualIncrementalBackupSizeInMegaBytes = __strictParseFloat(
      output["ActualIncrementalBackupSizeInMegaBytes"]
    ) as number;
  }
  if (output["BackupProgressInMegaBytes"] !== undefined) {
    contents.BackupProgressInMegaBytes = __strictParseFloat(output["BackupProgressInMegaBytes"]) as number;
  }
  if (output["CurrentBackupRateInMegaBytesPerSecond"] !== undefined) {
    contents.CurrentBackupRateInMegaBytesPerSecond = __strictParseFloat(
      output["CurrentBackupRateInMegaBytesPerSecond"]
    ) as number;
  }
  if (output["EstimatedSecondsToCompletion"] !== undefined) {
    contents.EstimatedSecondsToCompletion = __strictParseLong(output["EstimatedSecondsToCompletion"]) as number;
  }
  if (output["ElapsedTimeInSeconds"] !== undefined) {
    contents.ElapsedTimeInSeconds = __strictParseLong(output["ElapsedTimeInSeconds"]) as number;
  }
  if (output["SourceRegion"] !== undefined) {
    contents.SourceRegion = __expectString(output["SourceRegion"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  if (output.RestorableNodeTypes === "") {
    contents.RestorableNodeTypes = [];
  } else if (output["RestorableNodeTypes"] !== undefined && output["RestorableNodeTypes"]["NodeType"] !== undefined) {
    contents.RestorableNodeTypes = deserializeAws_queryRestorableNodeTypeList(
      __getArrayIfSingleItem(output["RestorableNodeTypes"]["NodeType"]),
      context
    );
  }
  if (output["EnhancedVpcRouting"] !== undefined) {
    contents.EnhancedVpcRouting = __parseBoolean(output["EnhancedVpcRouting"]);
  }
  if (output["MaintenanceTrackName"] !== undefined) {
    contents.MaintenanceTrackName = __expectString(output["MaintenanceTrackName"]);
  }
  if (output["ManualSnapshotRetentionPeriod"] !== undefined) {
    contents.ManualSnapshotRetentionPeriod = __strictParseInt32(output["ManualSnapshotRetentionPeriod"]) as number;
  }
  if (output["ManualSnapshotRemainingDays"] !== undefined) {
    contents.ManualSnapshotRemainingDays = __strictParseInt32(output["ManualSnapshotRemainingDays"]) as number;
  }
  if (output["SnapshotRetentionStartTime"] !== undefined) {
    contents.SnapshotRetentionStartTime = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["SnapshotRetentionStartTime"])
    );
  }
  return contents;
};

const deserializeAws_querySnapshotCopyAlreadyDisabledFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyAlreadyDisabledFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotCopyAlreadyEnabledFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyAlreadyEnabledFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotCopyDisabledFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyDisabledFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotCopyGrant = (output: any, context: __SerdeContext): SnapshotCopyGrant => {
  const contents: any = {
    SnapshotCopyGrantName: undefined,
    KmsKeyId: undefined,
    Tags: undefined,
  };
  if (output["SnapshotCopyGrantName"] !== undefined) {
    contents.SnapshotCopyGrantName = __expectString(output["SnapshotCopyGrantName"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_querySnapshotCopyGrantAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyGrantAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotCopyGrantList = (output: any, context: __SerdeContext): SnapshotCopyGrant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySnapshotCopyGrant(entry, context);
    });
};

const deserializeAws_querySnapshotCopyGrantMessage = (
  output: any,
  context: __SerdeContext
): SnapshotCopyGrantMessage => {
  const contents: any = {
    Marker: undefined,
    SnapshotCopyGrants: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.SnapshotCopyGrants === "") {
    contents.SnapshotCopyGrants = [];
  } else if (
    output["SnapshotCopyGrants"] !== undefined &&
    output["SnapshotCopyGrants"]["SnapshotCopyGrant"] !== undefined
  ) {
    contents.SnapshotCopyGrants = deserializeAws_querySnapshotCopyGrantList(
      __getArrayIfSingleItem(output["SnapshotCopyGrants"]["SnapshotCopyGrant"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySnapshotCopyGrantNotFoundFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyGrantNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotCopyGrantQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyGrantQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotErrorMessage = (output: any, context: __SerdeContext): SnapshotErrorMessage => {
  const contents: any = {
    SnapshotIdentifier: undefined,
    SnapshotClusterIdentifier: undefined,
    FailureCode: undefined,
    FailureReason: undefined,
  };
  if (output["SnapshotIdentifier"] !== undefined) {
    contents.SnapshotIdentifier = __expectString(output["SnapshotIdentifier"]);
  }
  if (output["SnapshotClusterIdentifier"] !== undefined) {
    contents.SnapshotClusterIdentifier = __expectString(output["SnapshotClusterIdentifier"]);
  }
  if (output["FailureCode"] !== undefined) {
    contents.FailureCode = __expectString(output["FailureCode"]);
  }
  if (output["FailureReason"] !== undefined) {
    contents.FailureReason = __expectString(output["FailureReason"]);
  }
  return contents;
};

const deserializeAws_querySnapshotIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySnapshot(entry, context);
    });
};

const deserializeAws_querySnapshotMessage = (output: any, context: __SerdeContext): SnapshotMessage => {
  const contents: any = {
    Marker: undefined,
    Snapshots: undefined,
  };
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Snapshots === "") {
    contents.Snapshots = [];
  } else if (output["Snapshots"] !== undefined && output["Snapshots"]["Snapshot"] !== undefined) {
    contents.Snapshots = deserializeAws_querySnapshotList(
      __getArrayIfSingleItem(output["Snapshots"]["Snapshot"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySnapshotSchedule = (output: any, context: __SerdeContext): SnapshotSchedule => {
  const contents: any = {
    ScheduleDefinitions: undefined,
    ScheduleIdentifier: undefined,
    ScheduleDescription: undefined,
    Tags: undefined,
    NextInvocations: undefined,
    AssociatedClusterCount: undefined,
    AssociatedClusters: undefined,
  };
  if (output.ScheduleDefinitions === "") {
    contents.ScheduleDefinitions = [];
  } else if (
    output["ScheduleDefinitions"] !== undefined &&
    output["ScheduleDefinitions"]["ScheduleDefinition"] !== undefined
  ) {
    contents.ScheduleDefinitions = deserializeAws_queryScheduleDefinitionList(
      __getArrayIfSingleItem(output["ScheduleDefinitions"]["ScheduleDefinition"]),
      context
    );
  }
  if (output["ScheduleIdentifier"] !== undefined) {
    contents.ScheduleIdentifier = __expectString(output["ScheduleIdentifier"]);
  }
  if (output["ScheduleDescription"] !== undefined) {
    contents.ScheduleDescription = __expectString(output["ScheduleDescription"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  if (output.NextInvocations === "") {
    contents.NextInvocations = [];
  } else if (output["NextInvocations"] !== undefined && output["NextInvocations"]["SnapshotTime"] !== undefined) {
    contents.NextInvocations = deserializeAws_queryScheduledSnapshotTimeList(
      __getArrayIfSingleItem(output["NextInvocations"]["SnapshotTime"]),
      context
    );
  }
  if (output["AssociatedClusterCount"] !== undefined) {
    contents.AssociatedClusterCount = __strictParseInt32(output["AssociatedClusterCount"]) as number;
  }
  if (output.AssociatedClusters === "") {
    contents.AssociatedClusters = [];
  } else if (
    output["AssociatedClusters"] !== undefined &&
    output["AssociatedClusters"]["ClusterAssociatedToSchedule"] !== undefined
  ) {
    contents.AssociatedClusters = deserializeAws_queryAssociatedClusterList(
      __getArrayIfSingleItem(output["AssociatedClusters"]["ClusterAssociatedToSchedule"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySnapshotScheduleAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SnapshotScheduleAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotScheduleList = (output: any, context: __SerdeContext): SnapshotSchedule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySnapshotSchedule(entry, context);
    });
};

const deserializeAws_querySnapshotScheduleNotFoundFault = (
  output: any,
  context: __SerdeContext
): SnapshotScheduleNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotScheduleQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SnapshotScheduleQuotaExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySnapshotScheduleUpdateInProgressFault = (
  output: any,
  context: __SerdeContext
): SnapshotScheduleUpdateInProgressFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySNSInvalidTopicFault = (output: any, context: __SerdeContext): SNSInvalidTopicFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySNSNoAuthorizationFault = (output: any, context: __SerdeContext): SNSNoAuthorizationFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySNSTopicArnNotFoundFault = (
  output: any,
  context: __SerdeContext
): SNSTopicArnNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySourceIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySourceNotFoundFault = (output: any, context: __SerdeContext): SourceNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubnet = (output: any, context: __SerdeContext): Subnet => {
  const contents: any = {
    SubnetIdentifier: undefined,
    SubnetAvailabilityZone: undefined,
    SubnetStatus: undefined,
  };
  if (output["SubnetIdentifier"] !== undefined) {
    contents.SubnetIdentifier = __expectString(output["SubnetIdentifier"]);
  }
  if (output["SubnetAvailabilityZone"] !== undefined) {
    contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
  }
  if (output["SubnetStatus"] !== undefined) {
    contents.SubnetStatus = __expectString(output["SubnetStatus"]);
  }
  return contents;
};

const deserializeAws_querySubnetAlreadyInUse = (output: any, context: __SerdeContext): SubnetAlreadyInUse => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySubnet(entry, context);
    });
};

const deserializeAws_querySubscriptionAlreadyExistFault = (
  output: any,
  context: __SerdeContext
): SubscriptionAlreadyExistFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubscriptionCategoryNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionCategoryNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubscriptionEventIdNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionEventIdNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubscriptionNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubscriptionSeverityNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionSeverityNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySupportedOperation = (output: any, context: __SerdeContext): SupportedOperation => {
  const contents: any = {
    OperationName: undefined,
  };
  if (output["OperationName"] !== undefined) {
    contents.OperationName = __expectString(output["OperationName"]);
  }
  return contents;
};

const deserializeAws_querySupportedOperationList = (output: any, context: __SerdeContext): SupportedOperation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySupportedOperation(entry, context);
    });
};

const deserializeAws_querySupportedPlatform = (output: any, context: __SerdeContext): SupportedPlatform => {
  const contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_querySupportedPlatformsList = (output: any, context: __SerdeContext): SupportedPlatform[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySupportedPlatform(entry, context);
    });
};

const deserializeAws_queryTableLimitExceededFault = (output: any, context: __SerdeContext): TableLimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTableRestoreNotFoundFault = (
  output: any,
  context: __SerdeContext
): TableRestoreNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTableRestoreStatus = (output: any, context: __SerdeContext): TableRestoreStatus => {
  const contents: any = {
    TableRestoreRequestId: undefined,
    Status: undefined,
    Message: undefined,
    RequestTime: undefined,
    ProgressInMegaBytes: undefined,
    TotalDataInMegaBytes: undefined,
    ClusterIdentifier: undefined,
    SnapshotIdentifier: undefined,
    SourceDatabaseName: undefined,
    SourceSchemaName: undefined,
    SourceTableName: undefined,
    TargetDatabaseName: undefined,
    TargetSchemaName: undefined,
    NewTableName: undefined,
  };
  if (output["TableRestoreRequestId"] !== undefined) {
    contents.TableRestoreRequestId = __expectString(output["TableRestoreRequestId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["RequestTime"] !== undefined) {
    contents.RequestTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["RequestTime"]));
  }
  if (output["ProgressInMegaBytes"] !== undefined) {
    contents.ProgressInMegaBytes = __strictParseLong(output["ProgressInMegaBytes"]) as number;
  }
  if (output["TotalDataInMegaBytes"] !== undefined) {
    contents.TotalDataInMegaBytes = __strictParseLong(output["TotalDataInMegaBytes"]) as number;
  }
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["SnapshotIdentifier"] !== undefined) {
    contents.SnapshotIdentifier = __expectString(output["SnapshotIdentifier"]);
  }
  if (output["SourceDatabaseName"] !== undefined) {
    contents.SourceDatabaseName = __expectString(output["SourceDatabaseName"]);
  }
  if (output["SourceSchemaName"] !== undefined) {
    contents.SourceSchemaName = __expectString(output["SourceSchemaName"]);
  }
  if (output["SourceTableName"] !== undefined) {
    contents.SourceTableName = __expectString(output["SourceTableName"]);
  }
  if (output["TargetDatabaseName"] !== undefined) {
    contents.TargetDatabaseName = __expectString(output["TargetDatabaseName"]);
  }
  if (output["TargetSchemaName"] !== undefined) {
    contents.TargetSchemaName = __expectString(output["TargetSchemaName"]);
  }
  if (output["NewTableName"] !== undefined) {
    contents.NewTableName = __expectString(output["NewTableName"]);
  }
  return contents;
};

const deserializeAws_queryTableRestoreStatusList = (output: any, context: __SerdeContext): TableRestoreStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTableRestoreStatus(entry, context);
    });
};

const deserializeAws_queryTableRestoreStatusMessage = (
  output: any,
  context: __SerdeContext
): TableRestoreStatusMessage => {
  const contents: any = {
    TableRestoreStatusDetails: undefined,
    Marker: undefined,
  };
  if (output.TableRestoreStatusDetails === "") {
    contents.TableRestoreStatusDetails = [];
  } else if (
    output["TableRestoreStatusDetails"] !== undefined &&
    output["TableRestoreStatusDetails"]["TableRestoreStatus"] !== undefined
  ) {
    contents.TableRestoreStatusDetails = deserializeAws_queryTableRestoreStatusList(
      __getArrayIfSingleItem(output["TableRestoreStatusDetails"]["TableRestoreStatus"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryTaggedResource = (output: any, context: __SerdeContext): TaggedResource => {
  const contents: any = {
    Tag: undefined,
    ResourceName: undefined,
    ResourceType: undefined,
  };
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_queryTag(output["Tag"], context);
  }
  if (output["ResourceName"] !== undefined) {
    contents.ResourceName = __expectString(output["ResourceName"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  return contents;
};

const deserializeAws_queryTaggedResourceList = (output: any, context: __SerdeContext): TaggedResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTaggedResource(entry, context);
    });
};

const deserializeAws_queryTaggedResourceListMessage = (
  output: any,
  context: __SerdeContext
): TaggedResourceListMessage => {
  const contents: any = {
    TaggedResources: undefined,
    Marker: undefined,
  };
  if (output.TaggedResources === "") {
    contents.TaggedResources = [];
  } else if (output["TaggedResources"] !== undefined && output["TaggedResources"]["TaggedResource"] !== undefined) {
    contents.TaggedResources = deserializeAws_queryTaggedResourceList(
      __getArrayIfSingleItem(output["TaggedResources"]["TaggedResource"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryTagLimitExceededFault = (output: any, context: __SerdeContext): TagLimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTrackList = (output: any, context: __SerdeContext): MaintenanceTrack[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryMaintenanceTrack(entry, context);
    });
};

const deserializeAws_queryTrackListMessage = (output: any, context: __SerdeContext): TrackListMessage => {
  const contents: any = {
    MaintenanceTracks: undefined,
    Marker: undefined,
  };
  if (output.MaintenanceTracks === "") {
    contents.MaintenanceTracks = [];
  } else if (
    output["MaintenanceTracks"] !== undefined &&
    output["MaintenanceTracks"]["MaintenanceTrack"] !== undefined
  ) {
    contents.MaintenanceTracks = deserializeAws_queryTrackList(
      __getArrayIfSingleItem(output["MaintenanceTracks"]["MaintenanceTrack"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryUnauthorizedOperation = (output: any, context: __SerdeContext): UnauthorizedOperation => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUnauthorizedPartnerIntegrationFault = (
  output: any,
  context: __SerdeContext
): UnauthorizedPartnerIntegrationFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUnknownSnapshotCopyRegionFault = (
  output: any,
  context: __SerdeContext
): UnknownSnapshotCopyRegionFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUnsupportedOperationFault = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUnsupportedOptionFault = (output: any, context: __SerdeContext): UnsupportedOptionFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUpdateTarget = (output: any, context: __SerdeContext): UpdateTarget => {
  const contents: any = {
    MaintenanceTrackName: undefined,
    DatabaseVersion: undefined,
    SupportedOperations: undefined,
  };
  if (output["MaintenanceTrackName"] !== undefined) {
    contents.MaintenanceTrackName = __expectString(output["MaintenanceTrackName"]);
  }
  if (output["DatabaseVersion"] !== undefined) {
    contents.DatabaseVersion = __expectString(output["DatabaseVersion"]);
  }
  if (output.SupportedOperations === "") {
    contents.SupportedOperations = [];
  } else if (
    output["SupportedOperations"] !== undefined &&
    output["SupportedOperations"]["SupportedOperation"] !== undefined
  ) {
    contents.SupportedOperations = deserializeAws_querySupportedOperationList(
      __getArrayIfSingleItem(output["SupportedOperations"]["SupportedOperation"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryUsageLimit = (output: any, context: __SerdeContext): UsageLimit => {
  const contents: any = {
    UsageLimitId: undefined,
    ClusterIdentifier: undefined,
    FeatureType: undefined,
    LimitType: undefined,
    Amount: undefined,
    Period: undefined,
    BreachAction: undefined,
    Tags: undefined,
  };
  if (output["UsageLimitId"] !== undefined) {
    contents.UsageLimitId = __expectString(output["UsageLimitId"]);
  }
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["FeatureType"] !== undefined) {
    contents.FeatureType = __expectString(output["FeatureType"]);
  }
  if (output["LimitType"] !== undefined) {
    contents.LimitType = __expectString(output["LimitType"]);
  }
  if (output["Amount"] !== undefined) {
    contents.Amount = __strictParseLong(output["Amount"]) as number;
  }
  if (output["Period"] !== undefined) {
    contents.Period = __expectString(output["Period"]);
  }
  if (output["BreachAction"] !== undefined) {
    contents.BreachAction = __expectString(output["BreachAction"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryUsageLimitAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): UsageLimitAlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUsageLimitList = (output: any, context: __SerdeContext): UsageLimitList => {
  const contents: any = {
    UsageLimits: undefined,
    Marker: undefined,
  };
  if (output.UsageLimits === "") {
    contents.UsageLimits = [];
  } else if (output["UsageLimits"] !== undefined && output["UsageLimits"]["member"] !== undefined) {
    contents.UsageLimits = deserializeAws_queryUsageLimits(
      __getArrayIfSingleItem(output["UsageLimits"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

const deserializeAws_queryUsageLimitNotFoundFault = (output: any, context: __SerdeContext): UsageLimitNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryUsageLimits = (output: any, context: __SerdeContext): UsageLimit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryUsageLimit(entry, context);
    });
};

const deserializeAws_queryVpcEndpoint = (output: any, context: __SerdeContext): VpcEndpoint => {
  const contents: any = {
    VpcEndpointId: undefined,
    VpcId: undefined,
    NetworkInterfaces: undefined,
  };
  if (output["VpcEndpointId"] !== undefined) {
    contents.VpcEndpointId = __expectString(output["VpcEndpointId"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output.NetworkInterfaces === "") {
    contents.NetworkInterfaces = [];
  } else if (
    output["NetworkInterfaces"] !== undefined &&
    output["NetworkInterfaces"]["NetworkInterface"] !== undefined
  ) {
    contents.NetworkInterfaces = deserializeAws_queryNetworkInterfaceList(
      __getArrayIfSingleItem(output["NetworkInterfaces"]["NetworkInterface"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryVpcEndpointsList = (output: any, context: __SerdeContext): VpcEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryVpcEndpoint(entry, context);
    });
};

const deserializeAws_queryVpcIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryVpcSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership => {
  const contents: any = {
    VpcSecurityGroupId: undefined,
    Status: undefined,
  };
  if (output["VpcSecurityGroupId"] !== undefined) {
    contents.VpcSecurityGroupId = __expectString(output["VpcSecurityGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryVpcSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryVpcSecurityGroupMembership(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
