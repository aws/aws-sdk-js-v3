// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
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
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  CreateCustomDomainAssociationCommandInput,
  CreateCustomDomainAssociationCommandOutput,
} from "../commands/CreateCustomDomainAssociationCommand";
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
  DeleteCustomDomainAssociationCommandInput,
  DeleteCustomDomainAssociationCommandOutput,
} from "../commands/DeleteCustomDomainAssociationCommand";
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
import {
  DescribeCustomDomainAssociationsCommandInput,
  DescribeCustomDomainAssociationsCommandOutput,
} from "../commands/DescribeCustomDomainAssociationsCommand";
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
  ModifyCustomDomainAssociationCommandInput,
  ModifyCustomDomainAssociationCommandOutput,
} from "../commands/ModifyCustomDomainAssociationCommand";
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
  Association,
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
  CertificateAssociation,
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
  CreateCustomDomainAssociationMessage,
  CreateCustomDomainAssociationResult,
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
  CustomCnameAssociationFault,
  CustomDomainAssociationNotFoundFault,
  CustomDomainAssociationsMessage,
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
  DeleteCustomDomainAssociationMessage,
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
  DescribeCustomDomainAssociationsMessage,
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
  EventCategoriesMap,
  EventInfoMap,
  EventSubscription,
  EventSubscriptionQuotaExceededFault,
  HsmClientCertificate,
  HsmClientCertificateAlreadyExistsFault,
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
  DescribeEventsMessage,
  DescribeEventSubscriptionsMessage,
  DescribeHsmClientCertificatesMessage,
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
  Event,
  EventCategoriesMessage,
  EventsMessage,
  EventSubscriptionsMessage,
  GetClusterCredentialsMessage,
  GetClusterCredentialsWithIAMMessage,
  GetReservedNodeExchangeConfigurationOptionsInputMessage,
  GetReservedNodeExchangeConfigurationOptionsOutputMessage,
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsOutputMessage,
  HsmClientCertificateMessage,
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
  ModifyCustomDomainAssociationMessage,
  ModifyCustomDomainAssociationResult,
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

/**
 * serializeAws_queryAcceptReservedNodeExchangeCommand
 */
export const se_AcceptReservedNodeExchangeCommand = async (
  input: AcceptReservedNodeExchangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AcceptReservedNodeExchangeInputMessage(input, context),
    Action: "AcceptReservedNodeExchange",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAddPartnerCommand
 */
export const se_AddPartnerCommand = async (
  input: AddPartnerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PartnerIntegrationInputMessage(input, context),
    Action: "AddPartner",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAssociateDataShareConsumerCommand
 */
export const se_AssociateDataShareConsumerCommand = async (
  input: AssociateDataShareConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AssociateDataShareConsumerMessage(input, context),
    Action: "AssociateDataShareConsumer",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand
 */
export const se_AuthorizeClusterSecurityGroupIngressCommand = async (
  input: AuthorizeClusterSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AuthorizeClusterSecurityGroupIngressMessage(input, context),
    Action: "AuthorizeClusterSecurityGroupIngress",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAuthorizeDataShareCommand
 */
export const se_AuthorizeDataShareCommand = async (
  input: AuthorizeDataShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AuthorizeDataShareMessage(input, context),
    Action: "AuthorizeDataShare",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAuthorizeEndpointAccessCommand
 */
export const se_AuthorizeEndpointAccessCommand = async (
  input: AuthorizeEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AuthorizeEndpointAccessMessage(input, context),
    Action: "AuthorizeEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAuthorizeSnapshotAccessCommand
 */
export const se_AuthorizeSnapshotAccessCommand = async (
  input: AuthorizeSnapshotAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AuthorizeSnapshotAccessMessage(input, context),
    Action: "AuthorizeSnapshotAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryBatchDeleteClusterSnapshotsCommand
 */
export const se_BatchDeleteClusterSnapshotsCommand = async (
  input: BatchDeleteClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BatchDeleteClusterSnapshotsRequest(input, context),
    Action: "BatchDeleteClusterSnapshots",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryBatchModifyClusterSnapshotsCommand
 */
export const se_BatchModifyClusterSnapshotsCommand = async (
  input: BatchModifyClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BatchModifyClusterSnapshotsMessage(input, context),
    Action: "BatchModifyClusterSnapshots",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCancelResizeCommand
 */
export const se_CancelResizeCommand = async (
  input: CancelResizeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CancelResizeMessage(input, context),
    Action: "CancelResize",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCopyClusterSnapshotCommand
 */
export const se_CopyClusterSnapshotCommand = async (
  input: CopyClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CopyClusterSnapshotMessage(input, context),
    Action: "CopyClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateAuthenticationProfileCommand
 */
export const se_CreateAuthenticationProfileCommand = async (
  input: CreateAuthenticationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateAuthenticationProfileMessage(input, context),
    Action: "CreateAuthenticationProfile",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateClusterMessage(input, context),
    Action: "CreateCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateClusterParameterGroupCommand
 */
export const se_CreateClusterParameterGroupCommand = async (
  input: CreateClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateClusterParameterGroupMessage(input, context),
    Action: "CreateClusterParameterGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateClusterSecurityGroupCommand
 */
export const se_CreateClusterSecurityGroupCommand = async (
  input: CreateClusterSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateClusterSecurityGroupMessage(input, context),
    Action: "CreateClusterSecurityGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateClusterSnapshotCommand
 */
export const se_CreateClusterSnapshotCommand = async (
  input: CreateClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateClusterSnapshotMessage(input, context),
    Action: "CreateClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateClusterSubnetGroupCommand
 */
export const se_CreateClusterSubnetGroupCommand = async (
  input: CreateClusterSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateClusterSubnetGroupMessage(input, context),
    Action: "CreateClusterSubnetGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateCustomDomainAssociationCommand
 */
export const se_CreateCustomDomainAssociationCommand = async (
  input: CreateCustomDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateCustomDomainAssociationMessage(input, context),
    Action: "CreateCustomDomainAssociation",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateEndpointAccessCommand
 */
export const se_CreateEndpointAccessCommand = async (
  input: CreateEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateEndpointAccessMessage(input, context),
    Action: "CreateEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateEventSubscriptionCommand
 */
export const se_CreateEventSubscriptionCommand = async (
  input: CreateEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateEventSubscriptionMessage(input, context),
    Action: "CreateEventSubscription",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateHsmClientCertificateCommand
 */
export const se_CreateHsmClientCertificateCommand = async (
  input: CreateHsmClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateHsmClientCertificateMessage(input, context),
    Action: "CreateHsmClientCertificate",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateHsmConfigurationCommand
 */
export const se_CreateHsmConfigurationCommand = async (
  input: CreateHsmConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateHsmConfigurationMessage(input, context),
    Action: "CreateHsmConfiguration",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateScheduledActionCommand
 */
export const se_CreateScheduledActionCommand = async (
  input: CreateScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateScheduledActionMessage(input, context),
    Action: "CreateScheduledAction",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateSnapshotCopyGrantCommand
 */
export const se_CreateSnapshotCopyGrantCommand = async (
  input: CreateSnapshotCopyGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateSnapshotCopyGrantMessage(input, context),
    Action: "CreateSnapshotCopyGrant",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateSnapshotScheduleCommand
 */
export const se_CreateSnapshotScheduleCommand = async (
  input: CreateSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateSnapshotScheduleMessage(input, context),
    Action: "CreateSnapshotSchedule",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateTagsCommand
 */
export const se_CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateTagsMessage(input, context),
    Action: "CreateTags",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateUsageLimitCommand
 */
export const se_CreateUsageLimitCommand = async (
  input: CreateUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateUsageLimitMessage(input, context),
    Action: "CreateUsageLimit",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeauthorizeDataShareCommand
 */
export const se_DeauthorizeDataShareCommand = async (
  input: DeauthorizeDataShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeauthorizeDataShareMessage(input, context),
    Action: "DeauthorizeDataShare",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteAuthenticationProfileCommand
 */
export const se_DeleteAuthenticationProfileCommand = async (
  input: DeleteAuthenticationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteAuthenticationProfileMessage(input, context),
    Action: "DeleteAuthenticationProfile",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteClusterMessage(input, context),
    Action: "DeleteCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteClusterParameterGroupCommand
 */
export const se_DeleteClusterParameterGroupCommand = async (
  input: DeleteClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteClusterParameterGroupMessage(input, context),
    Action: "DeleteClusterParameterGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteClusterSecurityGroupCommand
 */
export const se_DeleteClusterSecurityGroupCommand = async (
  input: DeleteClusterSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteClusterSecurityGroupMessage(input, context),
    Action: "DeleteClusterSecurityGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteClusterSnapshotCommand
 */
export const se_DeleteClusterSnapshotCommand = async (
  input: DeleteClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteClusterSnapshotMessage(input, context),
    Action: "DeleteClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteClusterSubnetGroupCommand
 */
export const se_DeleteClusterSubnetGroupCommand = async (
  input: DeleteClusterSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteClusterSubnetGroupMessage(input, context),
    Action: "DeleteClusterSubnetGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteCustomDomainAssociationCommand
 */
export const se_DeleteCustomDomainAssociationCommand = async (
  input: DeleteCustomDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteCustomDomainAssociationMessage(input, context),
    Action: "DeleteCustomDomainAssociation",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteEndpointAccessCommand
 */
export const se_DeleteEndpointAccessCommand = async (
  input: DeleteEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteEndpointAccessMessage(input, context),
    Action: "DeleteEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteEventSubscriptionCommand
 */
export const se_DeleteEventSubscriptionCommand = async (
  input: DeleteEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteEventSubscriptionMessage(input, context),
    Action: "DeleteEventSubscription",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteHsmClientCertificateCommand
 */
export const se_DeleteHsmClientCertificateCommand = async (
  input: DeleteHsmClientCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteHsmClientCertificateMessage(input, context),
    Action: "DeleteHsmClientCertificate",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteHsmConfigurationCommand
 */
export const se_DeleteHsmConfigurationCommand = async (
  input: DeleteHsmConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteHsmConfigurationMessage(input, context),
    Action: "DeleteHsmConfiguration",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeletePartnerCommand
 */
export const se_DeletePartnerCommand = async (
  input: DeletePartnerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PartnerIntegrationInputMessage(input, context),
    Action: "DeletePartner",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteScheduledActionCommand
 */
export const se_DeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteScheduledActionMessage(input, context),
    Action: "DeleteScheduledAction",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSnapshotCopyGrantCommand
 */
export const se_DeleteSnapshotCopyGrantCommand = async (
  input: DeleteSnapshotCopyGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSnapshotCopyGrantMessage(input, context),
    Action: "DeleteSnapshotCopyGrant",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSnapshotScheduleCommand
 */
export const se_DeleteSnapshotScheduleCommand = async (
  input: DeleteSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSnapshotScheduleMessage(input, context),
    Action: "DeleteSnapshotSchedule",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteTagsMessage(input, context),
    Action: "DeleteTags",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteUsageLimitCommand
 */
export const se_DeleteUsageLimitCommand = async (
  input: DeleteUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteUsageLimitMessage(input, context),
    Action: "DeleteUsageLimit",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAccountAttributesCommand
 */
export const se_DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAccountAttributesMessage(input, context),
    Action: "DescribeAccountAttributes",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAuthenticationProfilesCommand
 */
export const se_DescribeAuthenticationProfilesCommand = async (
  input: DescribeAuthenticationProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAuthenticationProfilesMessage(input, context),
    Action: "DescribeAuthenticationProfiles",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClusterDbRevisionsCommand
 */
export const se_DescribeClusterDbRevisionsCommand = async (
  input: DescribeClusterDbRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClusterDbRevisionsMessage(input, context),
    Action: "DescribeClusterDbRevisions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClusterParameterGroupsCommand
 */
export const se_DescribeClusterParameterGroupsCommand = async (
  input: DescribeClusterParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClusterParameterGroupsMessage(input, context),
    Action: "DescribeClusterParameterGroups",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClusterParametersCommand
 */
export const se_DescribeClusterParametersCommand = async (
  input: DescribeClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClusterParametersMessage(input, context),
    Action: "DescribeClusterParameters",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClustersCommand
 */
export const se_DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClustersMessage(input, context),
    Action: "DescribeClusters",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClusterSecurityGroupsCommand
 */
export const se_DescribeClusterSecurityGroupsCommand = async (
  input: DescribeClusterSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClusterSecurityGroupsMessage(input, context),
    Action: "DescribeClusterSecurityGroups",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClusterSnapshotsCommand
 */
export const se_DescribeClusterSnapshotsCommand = async (
  input: DescribeClusterSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClusterSnapshotsMessage(input, context),
    Action: "DescribeClusterSnapshots",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClusterSubnetGroupsCommand
 */
export const se_DescribeClusterSubnetGroupsCommand = async (
  input: DescribeClusterSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClusterSubnetGroupsMessage(input, context),
    Action: "DescribeClusterSubnetGroups",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClusterTracksCommand
 */
export const se_DescribeClusterTracksCommand = async (
  input: DescribeClusterTracksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClusterTracksMessage(input, context),
    Action: "DescribeClusterTracks",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeClusterVersionsCommand
 */
export const se_DescribeClusterVersionsCommand = async (
  input: DescribeClusterVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeClusterVersionsMessage(input, context),
    Action: "DescribeClusterVersions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeCustomDomainAssociationsCommand
 */
export const se_DescribeCustomDomainAssociationsCommand = async (
  input: DescribeCustomDomainAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCustomDomainAssociationsMessage(input, context),
    Action: "DescribeCustomDomainAssociations",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDataSharesCommand
 */
export const se_DescribeDataSharesCommand = async (
  input: DescribeDataSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDataSharesMessage(input, context),
    Action: "DescribeDataShares",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDataSharesForConsumerCommand
 */
export const se_DescribeDataSharesForConsumerCommand = async (
  input: DescribeDataSharesForConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDataSharesForConsumerMessage(input, context),
    Action: "DescribeDataSharesForConsumer",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDataSharesForProducerCommand
 */
export const se_DescribeDataSharesForProducerCommand = async (
  input: DescribeDataSharesForProducerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDataSharesForProducerMessage(input, context),
    Action: "DescribeDataSharesForProducer",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDefaultClusterParametersCommand
 */
export const se_DescribeDefaultClusterParametersCommand = async (
  input: DescribeDefaultClusterParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDefaultClusterParametersMessage(input, context),
    Action: "DescribeDefaultClusterParameters",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEndpointAccessCommand
 */
export const se_DescribeEndpointAccessCommand = async (
  input: DescribeEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEndpointAccessMessage(input, context),
    Action: "DescribeEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEndpointAuthorizationCommand
 */
export const se_DescribeEndpointAuthorizationCommand = async (
  input: DescribeEndpointAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEndpointAuthorizationMessage(input, context),
    Action: "DescribeEndpointAuthorization",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEventCategoriesCommand
 */
export const se_DescribeEventCategoriesCommand = async (
  input: DescribeEventCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEventCategoriesMessage(input, context),
    Action: "DescribeEventCategories",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEventsCommand
 */
export const se_DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEventsMessage(input, context),
    Action: "DescribeEvents",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEventSubscriptionsCommand
 */
export const se_DescribeEventSubscriptionsCommand = async (
  input: DescribeEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEventSubscriptionsMessage(input, context),
    Action: "DescribeEventSubscriptions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeHsmClientCertificatesCommand
 */
export const se_DescribeHsmClientCertificatesCommand = async (
  input: DescribeHsmClientCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeHsmClientCertificatesMessage(input, context),
    Action: "DescribeHsmClientCertificates",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeHsmConfigurationsCommand
 */
export const se_DescribeHsmConfigurationsCommand = async (
  input: DescribeHsmConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeHsmConfigurationsMessage(input, context),
    Action: "DescribeHsmConfigurations",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoggingStatusCommand
 */
export const se_DescribeLoggingStatusCommand = async (
  input: DescribeLoggingStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoggingStatusMessage(input, context),
    Action: "DescribeLoggingStatus",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeNodeConfigurationOptionsCommand
 */
export const se_DescribeNodeConfigurationOptionsCommand = async (
  input: DescribeNodeConfigurationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeNodeConfigurationOptionsMessage(input, context),
    Action: "DescribeNodeConfigurationOptions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeOrderableClusterOptionsCommand
 */
export const se_DescribeOrderableClusterOptionsCommand = async (
  input: DescribeOrderableClusterOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeOrderableClusterOptionsMessage(input, context),
    Action: "DescribeOrderableClusterOptions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribePartnersCommand
 */
export const se_DescribePartnersCommand = async (
  input: DescribePartnersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribePartnersInputMessage(input, context),
    Action: "DescribePartners",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReservedNodeExchangeStatusCommand
 */
export const se_DescribeReservedNodeExchangeStatusCommand = async (
  input: DescribeReservedNodeExchangeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReservedNodeExchangeStatusInputMessage(input, context),
    Action: "DescribeReservedNodeExchangeStatus",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReservedNodeOfferingsCommand
 */
export const se_DescribeReservedNodeOfferingsCommand = async (
  input: DescribeReservedNodeOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReservedNodeOfferingsMessage(input, context),
    Action: "DescribeReservedNodeOfferings",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReservedNodesCommand
 */
export const se_DescribeReservedNodesCommand = async (
  input: DescribeReservedNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReservedNodesMessage(input, context),
    Action: "DescribeReservedNodes",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeResizeCommand
 */
export const se_DescribeResizeCommand = async (
  input: DescribeResizeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeResizeMessage(input, context),
    Action: "DescribeResize",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeScheduledActionsCommand
 */
export const se_DescribeScheduledActionsCommand = async (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeScheduledActionsMessage(input, context),
    Action: "DescribeScheduledActions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeSnapshotCopyGrantsCommand
 */
export const se_DescribeSnapshotCopyGrantsCommand = async (
  input: DescribeSnapshotCopyGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeSnapshotCopyGrantsMessage(input, context),
    Action: "DescribeSnapshotCopyGrants",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeSnapshotSchedulesCommand
 */
export const se_DescribeSnapshotSchedulesCommand = async (
  input: DescribeSnapshotSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeSnapshotSchedulesMessage(input, context),
    Action: "DescribeSnapshotSchedules",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStorageCommand
 */
export const se_DescribeStorageCommand = async (
  input: DescribeStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DescribeStorage",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTableRestoreStatusCommand
 */
export const se_DescribeTableRestoreStatusCommand = async (
  input: DescribeTableRestoreStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTableRestoreStatusMessage(input, context),
    Action: "DescribeTableRestoreStatus",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTagsMessage(input, context),
    Action: "DescribeTags",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeUsageLimitsCommand
 */
export const se_DescribeUsageLimitsCommand = async (
  input: DescribeUsageLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeUsageLimitsMessage(input, context),
    Action: "DescribeUsageLimits",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableLoggingCommand
 */
export const se_DisableLoggingCommand = async (
  input: DisableLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisableLoggingMessage(input, context),
    Action: "DisableLogging",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableSnapshotCopyCommand
 */
export const se_DisableSnapshotCopyCommand = async (
  input: DisableSnapshotCopyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisableSnapshotCopyMessage(input, context),
    Action: "DisableSnapshotCopy",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisassociateDataShareConsumerCommand
 */
export const se_DisassociateDataShareConsumerCommand = async (
  input: DisassociateDataShareConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisassociateDataShareConsumerMessage(input, context),
    Action: "DisassociateDataShareConsumer",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableLoggingCommand
 */
export const se_EnableLoggingCommand = async (
  input: EnableLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableLoggingMessage(input, context),
    Action: "EnableLogging",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableSnapshotCopyCommand
 */
export const se_EnableSnapshotCopyCommand = async (
  input: EnableSnapshotCopyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableSnapshotCopyMessage(input, context),
    Action: "EnableSnapshotCopy",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetClusterCredentialsCommand
 */
export const se_GetClusterCredentialsCommand = async (
  input: GetClusterCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetClusterCredentialsMessage(input, context),
    Action: "GetClusterCredentials",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetClusterCredentialsWithIAMCommand
 */
export const se_GetClusterCredentialsWithIAMCommand = async (
  input: GetClusterCredentialsWithIAMCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetClusterCredentialsWithIAMMessage(input, context),
    Action: "GetClusterCredentialsWithIAM",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetReservedNodeExchangeConfigurationOptionsCommand
 */
export const se_GetReservedNodeExchangeConfigurationOptionsCommand = async (
  input: GetReservedNodeExchangeConfigurationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetReservedNodeExchangeConfigurationOptionsInputMessage(input, context),
    Action: "GetReservedNodeExchangeConfigurationOptions",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetReservedNodeExchangeOfferingsCommand
 */
export const se_GetReservedNodeExchangeOfferingsCommand = async (
  input: GetReservedNodeExchangeOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetReservedNodeExchangeOfferingsInputMessage(input, context),
    Action: "GetReservedNodeExchangeOfferings",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyAquaConfigurationCommand
 */
export const se_ModifyAquaConfigurationCommand = async (
  input: ModifyAquaConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyAquaInputMessage(input, context),
    Action: "ModifyAquaConfiguration",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyAuthenticationProfileCommand
 */
export const se_ModifyAuthenticationProfileCommand = async (
  input: ModifyAuthenticationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyAuthenticationProfileMessage(input, context),
    Action: "ModifyAuthenticationProfile",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyClusterCommand
 */
export const se_ModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyClusterMessage(input, context),
    Action: "ModifyCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyClusterDbRevisionCommand
 */
export const se_ModifyClusterDbRevisionCommand = async (
  input: ModifyClusterDbRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyClusterDbRevisionMessage(input, context),
    Action: "ModifyClusterDbRevision",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyClusterIamRolesCommand
 */
export const se_ModifyClusterIamRolesCommand = async (
  input: ModifyClusterIamRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyClusterIamRolesMessage(input, context),
    Action: "ModifyClusterIamRoles",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyClusterMaintenanceCommand
 */
export const se_ModifyClusterMaintenanceCommand = async (
  input: ModifyClusterMaintenanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyClusterMaintenanceMessage(input, context),
    Action: "ModifyClusterMaintenance",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyClusterParameterGroupCommand
 */
export const se_ModifyClusterParameterGroupCommand = async (
  input: ModifyClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyClusterParameterGroupMessage(input, context),
    Action: "ModifyClusterParameterGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyClusterSnapshotCommand
 */
export const se_ModifyClusterSnapshotCommand = async (
  input: ModifyClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyClusterSnapshotMessage(input, context),
    Action: "ModifyClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyClusterSnapshotScheduleCommand
 */
export const se_ModifyClusterSnapshotScheduleCommand = async (
  input: ModifyClusterSnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyClusterSnapshotScheduleMessage(input, context),
    Action: "ModifyClusterSnapshotSchedule",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyClusterSubnetGroupCommand
 */
export const se_ModifyClusterSubnetGroupCommand = async (
  input: ModifyClusterSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyClusterSubnetGroupMessage(input, context),
    Action: "ModifyClusterSubnetGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyCustomDomainAssociationCommand
 */
export const se_ModifyCustomDomainAssociationCommand = async (
  input: ModifyCustomDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyCustomDomainAssociationMessage(input, context),
    Action: "ModifyCustomDomainAssociation",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyEndpointAccessCommand
 */
export const se_ModifyEndpointAccessCommand = async (
  input: ModifyEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyEndpointAccessMessage(input, context),
    Action: "ModifyEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyEventSubscriptionCommand
 */
export const se_ModifyEventSubscriptionCommand = async (
  input: ModifyEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyEventSubscriptionMessage(input, context),
    Action: "ModifyEventSubscription",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyScheduledActionCommand
 */
export const se_ModifyScheduledActionCommand = async (
  input: ModifyScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyScheduledActionMessage(input, context),
    Action: "ModifyScheduledAction",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifySnapshotCopyRetentionPeriodCommand
 */
export const se_ModifySnapshotCopyRetentionPeriodCommand = async (
  input: ModifySnapshotCopyRetentionPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifySnapshotCopyRetentionPeriodMessage(input, context),
    Action: "ModifySnapshotCopyRetentionPeriod",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifySnapshotScheduleCommand
 */
export const se_ModifySnapshotScheduleCommand = async (
  input: ModifySnapshotScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifySnapshotScheduleMessage(input, context),
    Action: "ModifySnapshotSchedule",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyUsageLimitCommand
 */
export const se_ModifyUsageLimitCommand = async (
  input: ModifyUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyUsageLimitMessage(input, context),
    Action: "ModifyUsageLimit",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPauseClusterCommand
 */
export const se_PauseClusterCommand = async (
  input: PauseClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PauseClusterMessage(input, context),
    Action: "PauseCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPurchaseReservedNodeOfferingCommand
 */
export const se_PurchaseReservedNodeOfferingCommand = async (
  input: PurchaseReservedNodeOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PurchaseReservedNodeOfferingMessage(input, context),
    Action: "PurchaseReservedNodeOffering",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRebootClusterCommand
 */
export const se_RebootClusterCommand = async (
  input: RebootClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RebootClusterMessage(input, context),
    Action: "RebootCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRejectDataShareCommand
 */
export const se_RejectDataShareCommand = async (
  input: RejectDataShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RejectDataShareMessage(input, context),
    Action: "RejectDataShare",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResetClusterParameterGroupCommand
 */
export const se_ResetClusterParameterGroupCommand = async (
  input: ResetClusterParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ResetClusterParameterGroupMessage(input, context),
    Action: "ResetClusterParameterGroup",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResizeClusterCommand
 */
export const se_ResizeClusterCommand = async (
  input: ResizeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ResizeClusterMessage(input, context),
    Action: "ResizeCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRestoreFromClusterSnapshotCommand
 */
export const se_RestoreFromClusterSnapshotCommand = async (
  input: RestoreFromClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestoreFromClusterSnapshotMessage(input, context),
    Action: "RestoreFromClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRestoreTableFromClusterSnapshotCommand
 */
export const se_RestoreTableFromClusterSnapshotCommand = async (
  input: RestoreTableFromClusterSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestoreTableFromClusterSnapshotMessage(input, context),
    Action: "RestoreTableFromClusterSnapshot",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResumeClusterCommand
 */
export const se_ResumeClusterCommand = async (
  input: ResumeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ResumeClusterMessage(input, context),
    Action: "ResumeCluster",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRevokeClusterSecurityGroupIngressCommand
 */
export const se_RevokeClusterSecurityGroupIngressCommand = async (
  input: RevokeClusterSecurityGroupIngressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RevokeClusterSecurityGroupIngressMessage(input, context),
    Action: "RevokeClusterSecurityGroupIngress",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRevokeEndpointAccessCommand
 */
export const se_RevokeEndpointAccessCommand = async (
  input: RevokeEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RevokeEndpointAccessMessage(input, context),
    Action: "RevokeEndpointAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRevokeSnapshotAccessCommand
 */
export const se_RevokeSnapshotAccessCommand = async (
  input: RevokeSnapshotAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RevokeSnapshotAccessMessage(input, context),
    Action: "RevokeSnapshotAccess",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRotateEncryptionKeyCommand
 */
export const se_RotateEncryptionKeyCommand = async (
  input: RotateEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RotateEncryptionKeyMessage(input, context),
    Action: "RotateEncryptionKey",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdatePartnerStatusCommand
 */
export const se_UpdatePartnerStatusCommand = async (
  input: UpdatePartnerStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdatePartnerStatusInputMessage(input, context),
    Action: "UpdatePartnerStatus",
    Version: "2012-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAcceptReservedNodeExchangeCommand
 */
export const de_AcceptReservedNodeExchangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptReservedNodeExchangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptReservedNodeExchangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptReservedNodeExchangeOutputMessage(data.AcceptReservedNodeExchangeResult, context);
  const response: AcceptReservedNodeExchangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAcceptReservedNodeExchangeCommandError
 */
const de_AcceptReservedNodeExchangeCommandError = async (
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
      throw await de_DependentServiceUnavailableFaultRes(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await de_InvalidReservedNodeStateFaultRes(parsedOutput, context);
    case "ReservedNodeAlreadyExists":
    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
      throw await de_ReservedNodeAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await de_ReservedNodeAlreadyMigratedFaultRes(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await de_ReservedNodeNotFoundFaultRes(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await de_ReservedNodeOfferingNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAddPartnerCommand
 */
export const de_AddPartnerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPartnerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddPartnerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PartnerIntegrationOutputMessage(data.AddPartnerResult, context);
  const response: AddPartnerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAddPartnerCommandError
 */
const de_AddPartnerCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "PartnerNotFound":
    case "com.amazonaws.redshift#PartnerNotFoundFault":
      throw await de_PartnerNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await de_UnauthorizedPartnerIntegrationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAssociateDataShareConsumerCommand
 */
export const de_AssociateDataShareConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDataShareConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateDataShareConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DataShare(data.AssociateDataShareConsumerResult, context);
  const response: AssociateDataShareConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAssociateDataShareConsumerCommandError
 */
const de_AssociateDataShareConsumerCommandError = async (
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
      throw await de_InvalidDataShareFaultRes(parsedOutput, context);
    case "InvalidNamespaceFault":
    case "com.amazonaws.redshift#InvalidNamespaceFault":
      throw await de_InvalidNamespaceFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand
 */
export const de_AuthorizeClusterSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AuthorizeClusterSecurityGroupIngressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AuthorizeClusterSecurityGroupIngressResult(data.AuthorizeClusterSecurityGroupIngressResult, context);
  const response: AuthorizeClusterSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError
 */
const de_AuthorizeClusterSecurityGroupIngressCommandError = async (
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
      throw await de_AuthorizationAlreadyExistsFaultRes(parsedOutput, context);
    case "AuthorizationQuotaExceeded":
    case "com.amazonaws.redshift#AuthorizationQuotaExceededFault":
      throw await de_AuthorizationQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await de_ClusterSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await de_InvalidClusterSecurityGroupStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAuthorizeDataShareCommand
 */
export const de_AuthorizeDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AuthorizeDataShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DataShare(data.AuthorizeDataShareResult, context);
  const response: AuthorizeDataShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAuthorizeDataShareCommandError
 */
const de_AuthorizeDataShareCommandError = async (
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
      throw await de_InvalidDataShareFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAuthorizeEndpointAccessCommand
 */
export const de_AuthorizeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AuthorizeEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EndpointAuthorization(data.AuthorizeEndpointAccessResult, context);
  const response: AuthorizeEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAuthorizeEndpointAccessCommandError
 */
const de_AuthorizeEndpointAccessCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "EndpointAuthorizationAlreadyExists":
    case "com.amazonaws.redshift#EndpointAuthorizationAlreadyExistsFault":
      throw await de_EndpointAuthorizationAlreadyExistsFaultRes(parsedOutput, context);
    case "EndpointAuthorizationsPerClusterLimitExceeded":
    case "com.amazonaws.redshift#EndpointAuthorizationsPerClusterLimitExceededFault":
      throw await de_EndpointAuthorizationsPerClusterLimitExceededFaultRes(parsedOutput, context);
    case "InvalidAuthorizationState":
    case "com.amazonaws.redshift#InvalidAuthorizationStateFault":
      throw await de_InvalidAuthorizationStateFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAuthorizeSnapshotAccessCommand
 */
export const de_AuthorizeSnapshotAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeSnapshotAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AuthorizeSnapshotAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AuthorizeSnapshotAccessResult(data.AuthorizeSnapshotAccessResult, context);
  const response: AuthorizeSnapshotAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAuthorizeSnapshotAccessCommandError
 */
const de_AuthorizeSnapshotAccessCommandError = async (
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
      throw await de_AuthorizationAlreadyExistsFaultRes(parsedOutput, context);
    case "AuthorizationQuotaExceeded":
    case "com.amazonaws.redshift#AuthorizationQuotaExceededFault":
      throw await de_AuthorizationQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await de_InvalidClusterSnapshotStateFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryBatchDeleteClusterSnapshotsCommand
 */
export const de_BatchDeleteClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteClusterSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDeleteClusterSnapshotsResult(data.BatchDeleteClusterSnapshotsResult, context);
  const response: BatchDeleteClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBatchDeleteClusterSnapshotsCommandError
 */
const de_BatchDeleteClusterSnapshotsCommandError = async (
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
      throw await de_BatchDeleteRequestSizeExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryBatchModifyClusterSnapshotsCommand
 */
export const de_BatchModifyClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchModifyClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchModifyClusterSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchModifyClusterSnapshotsOutputMessage(data.BatchModifyClusterSnapshotsResult, context);
  const response: BatchModifyClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBatchModifyClusterSnapshotsCommandError
 */
const de_BatchModifyClusterSnapshotsCommandError = async (
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
      throw await de_BatchModifyClusterSnapshotsLimitExceededFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCancelResizeCommand
 */
export const de_CancelResizeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelResizeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelResizeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResizeProgressMessage(data.CancelResizeResult, context);
  const response: CancelResizeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCancelResizeCommandError
 */
const de_CancelResizeCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "ResizeNotFound":
    case "com.amazonaws.redshift#ResizeNotFoundFault":
      throw await de_ResizeNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCopyClusterSnapshotCommand
 */
export const de_CopyClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyClusterSnapshotResult(data.CopyClusterSnapshotResult, context);
  const response: CopyClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCopyClusterSnapshotCommandError
 */
const de_CopyClusterSnapshotCommandError = async (
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
      throw await de_ClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
      throw await de_ClusterSnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await de_InvalidClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateAuthenticationProfileCommand
 */
export const de_CreateAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAuthenticationProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAuthenticationProfileResult(data.CreateAuthenticationProfileResult, context);
  const response: CreateAuthenticationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateAuthenticationProfileCommandError
 */
const de_CreateAuthenticationProfileCommandError = async (
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
      throw await de_AuthenticationProfileAlreadyExistsFaultRes(parsedOutput, context);
    case "AuthenticationProfileQuotaExceededFault":
    case "com.amazonaws.redshift#AuthenticationProfileQuotaExceededFault":
      throw await de_AuthenticationProfileQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await de_InvalidAuthenticationProfileRequestFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterResult(data.CreateClusterResult, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateClusterCommandError
 */
const de_CreateClusterCommandError = async (
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
      throw await de_ClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ClusterQuotaExceeded":
    case "com.amazonaws.redshift#ClusterQuotaExceededFault":
      throw await de_ClusterQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await de_ClusterSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await de_ClusterSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "HsmClientCertificateNotFoundFault":
    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
      throw await de_HsmClientCertificateNotFoundFaultRes(parsedOutput, context);
    case "HsmConfigurationNotFoundFault":
    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
      throw await de_HsmConfigurationNotFoundFaultRes(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await de_InsufficientClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidClusterSubnetGroupStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
      throw await de_InvalidClusterSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterTrack":
    case "com.amazonaws.redshift#InvalidClusterTrackFault":
      throw await de_InvalidClusterTrackFaultRes(parsedOutput, context);
    case "InvalidElasticIpFault":
    case "com.amazonaws.redshift#InvalidElasticIpFault":
      throw await de_InvalidElasticIpFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.redshift#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await de_NumberOfNodesPerClusterLimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await de_NumberOfNodesQuotaExceededFaultRes(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await de_SnapshotScheduleNotFoundFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateClusterParameterGroupCommand
 */
export const de_CreateClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterParameterGroupResult(data.CreateClusterParameterGroupResult, context);
  const response: CreateClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateClusterParameterGroupCommandError
 */
const de_CreateClusterParameterGroupCommandError = async (
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
      throw await de_ClusterParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterParameterGroupQuotaExceeded":
    case "com.amazonaws.redshift#ClusterParameterGroupQuotaExceededFault":
      throw await de_ClusterParameterGroupQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateClusterSecurityGroupCommand
 */
export const de_CreateClusterSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterSecurityGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterSecurityGroupResult(data.CreateClusterSecurityGroupResult, context);
  const response: CreateClusterSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateClusterSecurityGroupCommandError
 */
const de_CreateClusterSecurityGroupCommandError = async (
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
      throw await de_ClusterSecurityGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "QuotaExceeded.ClusterSecurityGroup":
    case "com.amazonaws.redshift#ClusterSecurityGroupQuotaExceededFault":
      throw await de_ClusterSecurityGroupQuotaExceededFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateClusterSnapshotCommand
 */
export const de_CreateClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterSnapshotResult(data.CreateClusterSnapshotResult, context);
  const response: CreateClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateClusterSnapshotCommandError
 */
const de_CreateClusterSnapshotCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotAlreadyExists":
    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
      throw await de_ClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterSnapshotQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
      throw await de_ClusterSnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateClusterSubnetGroupCommand
 */
export const de_CreateClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterSubnetGroupResult(data.CreateClusterSubnetGroupResult, context);
  const response: CreateClusterSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateClusterSubnetGroupCommandError
 */
const de_CreateClusterSubnetGroupCommandError = async (
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
      throw await de_ClusterSubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterSubnetGroupQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSubnetGroupQuotaExceededFault":
      throw await de_ClusterSubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSubnetQuotaExceededFault":
    case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault":
      throw await de_ClusterSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateCustomDomainAssociationCommand
 */
export const de_CreateCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomDomainAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCustomDomainAssociationResult(data.CreateCustomDomainAssociationResult, context);
  const response: CreateCustomDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateCustomDomainAssociationCommandError
 */
const de_CreateCustomDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "CustomCnameAssociationFault":
    case "com.amazonaws.redshift#CustomCnameAssociationFault":
      throw await de_CustomCnameAssociationFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateEndpointAccessCommand
 */
export const de_CreateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EndpointAccess(data.CreateEndpointAccessResult, context);
  const response: CreateEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateEndpointAccessCommandError
 */
const de_CreateEndpointAccessCommandError = async (
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
      throw await de_AccessToClusterDeniedFaultRes(parsedOutput, context);
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await de_ClusterSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "EndpointAlreadyExists":
    case "com.amazonaws.redshift#EndpointAlreadyExistsFault":
      throw await de_EndpointAlreadyExistsFaultRes(parsedOutput, context);
    case "EndpointsPerAuthorizationLimitExceeded":
    case "com.amazonaws.redshift#EndpointsPerAuthorizationLimitExceededFault":
      throw await de_EndpointsPerAuthorizationLimitExceededFaultRes(parsedOutput, context);
    case "EndpointsPerClusterLimitExceeded":
    case "com.amazonaws.redshift#EndpointsPerClusterLimitExceededFault":
      throw await de_EndpointsPerClusterLimitExceededFaultRes(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await de_InvalidClusterSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateEventSubscriptionCommand
 */
export const de_CreateEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEventSubscriptionResult(data.CreateEventSubscriptionResult, context);
  const response: CreateEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateEventSubscriptionCommandError
 */
const de_CreateEventSubscriptionCommandError = async (
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
      throw await de_EventSubscriptionQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.redshift#SNSInvalidTopicFault":
      throw await de_SNSInvalidTopicFaultRes(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.redshift#SNSNoAuthorizationFault":
      throw await de_SNSNoAuthorizationFaultRes(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.redshift#SNSTopicArnNotFoundFault":
      throw await de_SNSTopicArnNotFoundFaultRes(parsedOutput, context);
    case "SourceNotFound":
    case "com.amazonaws.redshift#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionAlreadyExist":
    case "com.amazonaws.redshift#SubscriptionAlreadyExistFault":
      throw await de_SubscriptionAlreadyExistFaultRes(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault":
      throw await de_SubscriptionCategoryNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionEventIdNotFound":
    case "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault":
      throw await de_SubscriptionEventIdNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionSeverityNotFound":
    case "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault":
      throw await de_SubscriptionSeverityNotFoundFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateHsmClientCertificateCommand
 */
export const de_CreateHsmClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmClientCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHsmClientCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHsmClientCertificateResult(data.CreateHsmClientCertificateResult, context);
  const response: CreateHsmClientCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateHsmClientCertificateCommandError
 */
const de_CreateHsmClientCertificateCommandError = async (
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
      throw await de_HsmClientCertificateAlreadyExistsFaultRes(parsedOutput, context);
    case "HsmClientCertificateQuotaExceededFault":
    case "com.amazonaws.redshift#HsmClientCertificateQuotaExceededFault":
      throw await de_HsmClientCertificateQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateHsmConfigurationCommand
 */
export const de_CreateHsmConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHsmConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHsmConfigurationResult(data.CreateHsmConfigurationResult, context);
  const response: CreateHsmConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateHsmConfigurationCommandError
 */
const de_CreateHsmConfigurationCommandError = async (
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
      throw await de_HsmConfigurationAlreadyExistsFaultRes(parsedOutput, context);
    case "HsmConfigurationQuotaExceededFault":
    case "com.amazonaws.redshift#HsmConfigurationQuotaExceededFault":
      throw await de_HsmConfigurationQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateScheduledActionCommand
 */
export const de_CreateScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ScheduledAction(data.CreateScheduledActionResult, context);
  const response: CreateScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateScheduledActionCommandError
 */
const de_CreateScheduledActionCommandError = async (
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
      throw await de_InvalidScheduleFaultRes(parsedOutput, context);
    case "InvalidScheduledAction":
    case "com.amazonaws.redshift#InvalidScheduledActionFault":
      throw await de_InvalidScheduledActionFaultRes(parsedOutput, context);
    case "ScheduledActionAlreadyExists":
    case "com.amazonaws.redshift#ScheduledActionAlreadyExistsFault":
      throw await de_ScheduledActionAlreadyExistsFaultRes(parsedOutput, context);
    case "ScheduledActionQuotaExceeded":
    case "com.amazonaws.redshift#ScheduledActionQuotaExceededFault":
      throw await de_ScheduledActionQuotaExceededFaultRes(parsedOutput, context);
    case "ScheduledActionTypeUnsupported":
    case "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault":
      throw await de_ScheduledActionTypeUnsupportedFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateSnapshotCopyGrantCommand
 */
export const de_CreateSnapshotCopyGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCopyGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSnapshotCopyGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSnapshotCopyGrantResult(data.CreateSnapshotCopyGrantResult, context);
  const response: CreateSnapshotCopyGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateSnapshotCopyGrantCommandError
 */
const de_CreateSnapshotCopyGrantCommandError = async (
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
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "SnapshotCopyGrantAlreadyExistsFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantAlreadyExistsFault":
      throw await de_SnapshotCopyGrantAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotCopyGrantQuotaExceededFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantQuotaExceededFault":
      throw await de_SnapshotCopyGrantQuotaExceededFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateSnapshotScheduleCommand
 */
export const de_CreateSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SnapshotSchedule(data.CreateSnapshotScheduleResult, context);
  const response: CreateSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateSnapshotScheduleCommandError
 */
const de_CreateSnapshotScheduleCommandError = async (
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
      throw await de_InvalidScheduleFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "ScheduleDefinitionTypeUnsupported":
    case "com.amazonaws.redshift#ScheduleDefinitionTypeUnsupportedFault":
      throw await de_ScheduleDefinitionTypeUnsupportedFaultRes(parsedOutput, context);
    case "SnapshotScheduleAlreadyExists":
    case "com.amazonaws.redshift#SnapshotScheduleAlreadyExistsFault":
      throw await de_SnapshotScheduleAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotScheduleQuotaExceeded":
    case "com.amazonaws.redshift#SnapshotScheduleQuotaExceededFault":
      throw await de_SnapshotScheduleQuotaExceededFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateTagsCommandError
 */
const de_CreateTagsCommandError = async (
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
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.redshift#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateUsageLimitCommand
 */
export const de_CreateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UsageLimit(data.CreateUsageLimitResult, context);
  const response: CreateUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateUsageLimitCommandError
 */
const de_CreateUsageLimitCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidUsageLimit":
    case "com.amazonaws.redshift#InvalidUsageLimitFault":
      throw await de_InvalidUsageLimitFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    case "UsageLimitAlreadyExists":
    case "com.amazonaws.redshift#UsageLimitAlreadyExistsFault":
      throw await de_UsageLimitAlreadyExistsFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeauthorizeDataShareCommand
 */
export const de_DeauthorizeDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeauthorizeDataShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DataShare(data.DeauthorizeDataShareResult, context);
  const response: DeauthorizeDataShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeauthorizeDataShareCommandError
 */
const de_DeauthorizeDataShareCommandError = async (
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
      throw await de_InvalidDataShareFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteAuthenticationProfileCommand
 */
export const de_DeleteAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAuthenticationProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAuthenticationProfileResult(data.DeleteAuthenticationProfileResult, context);
  const response: DeleteAuthenticationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAuthenticationProfileCommandError
 */
const de_DeleteAuthenticationProfileCommandError = async (
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
      throw await de_AuthenticationProfileNotFoundFaultRes(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await de_InvalidAuthenticationProfileRequestFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClusterResult(data.DeleteClusterResult, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteClusterCommandError
 */
const de_DeleteClusterCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotAlreadyExists":
    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
      throw await de_ClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterSnapshotQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
      throw await de_ClusterSnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteClusterParameterGroupCommand
 */
export const de_DeleteClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterParameterGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteClusterParameterGroupCommandError
 */
const de_DeleteClusterParameterGroupCommandError = async (
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
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterParameterGroupState":
    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
      throw await de_InvalidClusterParameterGroupStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteClusterSecurityGroupCommand
 */
export const de_DeleteClusterSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterSecurityGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteClusterSecurityGroupCommandError
 */
const de_DeleteClusterSecurityGroupCommandError = async (
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
      throw await de_ClusterSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await de_InvalidClusterSecurityGroupStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteClusterSnapshotCommand
 */
export const de_DeleteClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClusterSnapshotResult(data.DeleteClusterSnapshotResult, context);
  const response: DeleteClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteClusterSnapshotCommandError
 */
const de_DeleteClusterSnapshotCommandError = async (
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
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await de_InvalidClusterSnapshotStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteClusterSubnetGroupCommand
 */
export const de_DeleteClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterSubnetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteClusterSubnetGroupCommandError
 */
const de_DeleteClusterSubnetGroupCommandError = async (
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
      throw await de_ClusterSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSubnetGroupStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
      throw await de_InvalidClusterSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterSubnetStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetStateFault":
      throw await de_InvalidClusterSubnetStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteCustomDomainAssociationCommand
 */
export const de_DeleteCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomDomainAssociationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCustomDomainAssociationCommandError
 */
const de_DeleteCustomDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "CustomCnameAssociationFault":
    case "com.amazonaws.redshift#CustomCnameAssociationFault":
      throw await de_CustomCnameAssociationFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteEndpointAccessCommand
 */
export const de_DeleteEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EndpointAccess(data.DeleteEndpointAccessResult, context);
  const response: DeleteEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEndpointAccessCommandError
 */
const de_DeleteEndpointAccessCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await de_EndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await de_InvalidClusterSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidEndpointState":
    case "com.amazonaws.redshift#InvalidEndpointStateFault":
      throw await de_InvalidEndpointStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteEventSubscriptionCommand
 */
export const de_DeleteEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventSubscriptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEventSubscriptionCommandError
 */
const de_DeleteEventSubscriptionCommandError = async (
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
      throw await de_InvalidSubscriptionStateFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.redshift#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteHsmClientCertificateCommand
 */
export const de_DeleteHsmClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmClientCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHsmClientCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHsmClientCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteHsmClientCertificateCommandError
 */
const de_DeleteHsmClientCertificateCommandError = async (
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
      throw await de_HsmClientCertificateNotFoundFaultRes(parsedOutput, context);
    case "InvalidHsmClientCertificateStateFault":
    case "com.amazonaws.redshift#InvalidHsmClientCertificateStateFault":
      throw await de_InvalidHsmClientCertificateStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteHsmConfigurationCommand
 */
export const de_DeleteHsmConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHsmConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHsmConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteHsmConfigurationCommandError
 */
const de_DeleteHsmConfigurationCommandError = async (
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
      throw await de_HsmConfigurationNotFoundFaultRes(parsedOutput, context);
    case "InvalidHsmConfigurationStateFault":
    case "com.amazonaws.redshift#InvalidHsmConfigurationStateFault":
      throw await de_InvalidHsmConfigurationStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeletePartnerCommand
 */
export const de_DeletePartnerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePartnerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PartnerIntegrationOutputMessage(data.DeletePartnerResult, context);
  const response: DeletePartnerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeletePartnerCommandError
 */
const de_DeletePartnerCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "PartnerNotFound":
    case "com.amazonaws.redshift#PartnerNotFoundFault":
      throw await de_PartnerNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await de_UnauthorizedPartnerIntegrationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteScheduledActionCommand
 */
export const de_DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteScheduledActionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteScheduledActionCommandError
 */
const de_DeleteScheduledActionCommandError = async (
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
      throw await de_ScheduledActionNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteSnapshotCopyGrantCommand
 */
export const de_DeleteSnapshotCopyGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCopyGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSnapshotCopyGrantCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSnapshotCopyGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSnapshotCopyGrantCommandError
 */
const de_DeleteSnapshotCopyGrantCommandError = async (
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
      throw await de_InvalidSnapshotCopyGrantStateFaultRes(parsedOutput, context);
    case "SnapshotCopyGrantNotFoundFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
      throw await de_SnapshotCopyGrantNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteSnapshotScheduleCommand
 */
export const de_DeleteSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSnapshotScheduleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSnapshotScheduleCommandError
 */
const de_DeleteSnapshotScheduleCommandError = async (
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
      throw await de_InvalidClusterSnapshotScheduleStateFaultRes(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await de_SnapshotScheduleNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
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
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.redshift#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteUsageLimitCommand
 */
export const de_DeleteUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUsageLimitCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUsageLimitCommandError
 */
const de_DeleteUsageLimitCommandError = async (
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
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    case "UsageLimitNotFound":
    case "com.amazonaws.redshift#UsageLimitNotFoundFault":
      throw await de_UsageLimitNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AccountAttributeList(data.DescribeAccountAttributesResult, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAccountAttributesCommandError
 */
const de_DescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeAuthenticationProfilesCommand
 */
export const de_DescribeAuthenticationProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuthenticationProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAuthenticationProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAuthenticationProfilesResult(data.DescribeAuthenticationProfilesResult, context);
  const response: DescribeAuthenticationProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAuthenticationProfilesCommandError
 */
const de_DescribeAuthenticationProfilesCommandError = async (
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
      throw await de_AuthenticationProfileNotFoundFaultRes(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await de_InvalidAuthenticationProfileRequestFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClusterDbRevisionsCommand
 */
export const de_DescribeClusterDbRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterDbRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterDbRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterDbRevisionsMessage(data.DescribeClusterDbRevisionsResult, context);
  const response: DescribeClusterDbRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClusterDbRevisionsCommandError
 */
const de_DescribeClusterDbRevisionsCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClusterParameterGroupsCommand
 */
export const de_DescribeClusterParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterParameterGroupsMessage(data.DescribeClusterParameterGroupsResult, context);
  const response: DescribeClusterParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClusterParameterGroupsCommandError
 */
const de_DescribeClusterParameterGroupsCommandError = async (
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
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClusterParametersCommand
 */
export const de_DescribeClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterParameterGroupDetails(data.DescribeClusterParametersResult, context);
  const response: DescribeClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClusterParametersCommandError
 */
const de_DescribeClusterParametersCommandError = async (
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
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClustersCommand
 */
export const de_DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClustersMessage(data.DescribeClustersResult, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClustersCommandError
 */
const de_DescribeClustersCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClusterSecurityGroupsCommand
 */
export const de_DescribeClusterSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterSecurityGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterSecurityGroupMessage(data.DescribeClusterSecurityGroupsResult, context);
  const response: DescribeClusterSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClusterSecurityGroupsCommandError
 */
const de_DescribeClusterSecurityGroupsCommandError = async (
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
      throw await de_ClusterSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClusterSnapshotsCommand
 */
export const de_DescribeClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SnapshotMessage(data.DescribeClusterSnapshotsResult, context);
  const response: DescribeClusterSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClusterSnapshotsCommandError
 */
const de_DescribeClusterSnapshotsCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClusterSubnetGroupsCommand
 */
export const de_DescribeClusterSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterSubnetGroupMessage(data.DescribeClusterSubnetGroupsResult, context);
  const response: DescribeClusterSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClusterSubnetGroupsCommandError
 */
const de_DescribeClusterSubnetGroupsCommandError = async (
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
      throw await de_ClusterSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClusterTracksCommand
 */
export const de_DescribeClusterTracksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterTracksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterTracksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TrackListMessage(data.DescribeClusterTracksResult, context);
  const response: DescribeClusterTracksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClusterTracksCommandError
 */
const de_DescribeClusterTracksCommandError = async (
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
      throw await de_InvalidClusterTrackFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeClusterVersionsCommand
 */
export const de_DescribeClusterVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterVersionsMessage(data.DescribeClusterVersionsResult, context);
  const response: DescribeClusterVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeClusterVersionsCommandError
 */
const de_DescribeClusterVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeCustomDomainAssociationsCommand
 */
export const de_DescribeCustomDomainAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCustomDomainAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CustomDomainAssociationsMessage(data.DescribeCustomDomainAssociationsResult, context);
  const response: DescribeCustomDomainAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeCustomDomainAssociationsCommandError
 */
const de_DescribeCustomDomainAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomDomainAssociationNotFoundFault":
    case "com.amazonaws.redshift#CustomDomainAssociationNotFoundFault":
      throw await de_CustomDomainAssociationNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeDataSharesCommand
 */
export const de_DescribeDataSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataSharesResult(data.DescribeDataSharesResult, context);
  const response: DescribeDataSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDataSharesCommandError
 */
const de_DescribeDataSharesCommandError = async (
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
      throw await de_InvalidDataShareFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeDataSharesForConsumerCommand
 */
export const de_DescribeDataSharesForConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesForConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataSharesForConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataSharesForConsumerResult(data.DescribeDataSharesForConsumerResult, context);
  const response: DescribeDataSharesForConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDataSharesForConsumerCommandError
 */
const de_DescribeDataSharesForConsumerCommandError = async (
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
      throw await de_InvalidNamespaceFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeDataSharesForProducerCommand
 */
export const de_DescribeDataSharesForProducerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesForProducerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataSharesForProducerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataSharesForProducerResult(data.DescribeDataSharesForProducerResult, context);
  const response: DescribeDataSharesForProducerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDataSharesForProducerCommandError
 */
const de_DescribeDataSharesForProducerCommandError = async (
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
      throw await de_InvalidNamespaceFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeDefaultClusterParametersCommand
 */
export const de_DescribeDefaultClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDefaultClusterParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDefaultClusterParametersResult(data.DescribeDefaultClusterParametersResult, context);
  const response: DescribeDefaultClusterParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDefaultClusterParametersCommandError
 */
const de_DescribeDefaultClusterParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultClusterParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeEndpointAccessCommand
 */
export const de_DescribeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EndpointAccessList(data.DescribeEndpointAccessResult, context);
  const response: DescribeEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEndpointAccessCommandError
 */
const de_DescribeEndpointAccessCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await de_EndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeEndpointAuthorizationCommand
 */
export const de_DescribeEndpointAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EndpointAuthorizationList(data.DescribeEndpointAuthorizationResult, context);
  const response: DescribeEndpointAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEndpointAuthorizationCommandError
 */
const de_DescribeEndpointAuthorizationCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeEventCategoriesCommand
 */
export const de_DescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EventCategoriesMessage(data.DescribeEventCategoriesResult, context);
  const response: DescribeEventCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEventCategoriesCommandError
 */
const de_DescribeEventCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EventsMessage(data.DescribeEventsResult, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEventsCommandError
 */
const de_DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeEventSubscriptionsCommand
 */
export const de_DescribeEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EventSubscriptionsMessage(data.DescribeEventSubscriptionsResult, context);
  const response: DescribeEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEventSubscriptionsCommandError
 */
const de_DescribeEventSubscriptionsCommandError = async (
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
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.redshift#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeHsmClientCertificatesCommand
 */
export const de_DescribeHsmClientCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmClientCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHsmClientCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_HsmClientCertificateMessage(data.DescribeHsmClientCertificatesResult, context);
  const response: DescribeHsmClientCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeHsmClientCertificatesCommandError
 */
const de_DescribeHsmClientCertificatesCommandError = async (
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
      throw await de_HsmClientCertificateNotFoundFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeHsmConfigurationsCommand
 */
export const de_DescribeHsmConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHsmConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_HsmConfigurationMessage(data.DescribeHsmConfigurationsResult, context);
  const response: DescribeHsmConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeHsmConfigurationsCommandError
 */
const de_DescribeHsmConfigurationsCommandError = async (
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
      throw await de_HsmConfigurationNotFoundFaultRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoggingStatusCommand
 */
export const de_DescribeLoggingStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoggingStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_LoggingStatus(data.DescribeLoggingStatusResult, context);
  const response: DescribeLoggingStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoggingStatusCommandError
 */
const de_DescribeLoggingStatusCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeNodeConfigurationOptionsCommand
 */
export const de_DescribeNodeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNodeConfigurationOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NodeConfigurationOptionsMessage(data.DescribeNodeConfigurationOptionsResult, context);
  const response: DescribeNodeConfigurationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeNodeConfigurationOptionsCommandError
 */
const de_DescribeNodeConfigurationOptionsCommandError = async (
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
      throw await de_AccessToSnapshotDeniedFaultRes(parsedOutput, context);
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await de_InvalidClusterSnapshotStateFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeOrderableClusterOptionsCommand
 */
export const de_DescribeOrderableClusterOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableClusterOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrderableClusterOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OrderableClusterOptionsMessage(data.DescribeOrderableClusterOptionsResult, context);
  const response: DescribeOrderableClusterOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeOrderableClusterOptionsCommandError
 */
const de_DescribeOrderableClusterOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableClusterOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribePartnersCommand
 */
export const de_DescribePartnersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePartnersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePartnersOutputMessage(data.DescribePartnersResult, context);
  const response: DescribePartnersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribePartnersCommandError
 */
const de_DescribePartnersCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await de_UnauthorizedPartnerIntegrationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeReservedNodeExchangeStatusCommand
 */
export const de_DescribeReservedNodeExchangeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodeExchangeStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedNodeExchangeStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReservedNodeExchangeStatusOutputMessage(data.DescribeReservedNodeExchangeStatusResult, context);
  const response: DescribeReservedNodeExchangeStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReservedNodeExchangeStatusCommandError
 */
const de_DescribeReservedNodeExchangeStatusCommandError = async (
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
      throw await de_ReservedNodeExchangeNotFoundFaultRes(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await de_ReservedNodeNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeReservedNodeOfferingsCommand
 */
export const de_DescribeReservedNodeOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodeOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedNodeOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReservedNodeOfferingsMessage(data.DescribeReservedNodeOfferingsResult, context);
  const response: DescribeReservedNodeOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReservedNodeOfferingsCommandError
 */
const de_DescribeReservedNodeOfferingsCommandError = async (
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
      throw await de_DependentServiceUnavailableFaultRes(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await de_ReservedNodeOfferingNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeReservedNodesCommand
 */
export const de_DescribeReservedNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReservedNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReservedNodesMessage(data.DescribeReservedNodesResult, context);
  const response: DescribeReservedNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReservedNodesCommandError
 */
const de_DescribeReservedNodesCommandError = async (
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
      throw await de_DependentServiceUnavailableFaultRes(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await de_ReservedNodeNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeResizeCommand
 */
export const de_DescribeResizeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResizeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeResizeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResizeProgressMessage(data.DescribeResizeResult, context);
  const response: DescribeResizeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeResizeCommandError
 */
const de_DescribeResizeCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ResizeNotFound":
    case "com.amazonaws.redshift#ResizeNotFoundFault":
      throw await de_ResizeNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeScheduledActionsCommand
 */
export const de_DescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScheduledActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ScheduledActionsMessage(data.DescribeScheduledActionsResult, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeScheduledActionsCommandError
 */
const de_DescribeScheduledActionsCommandError = async (
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
      throw await de_ScheduledActionNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeSnapshotCopyGrantsCommand
 */
export const de_DescribeSnapshotCopyGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotCopyGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSnapshotCopyGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SnapshotCopyGrantMessage(data.DescribeSnapshotCopyGrantsResult, context);
  const response: DescribeSnapshotCopyGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeSnapshotCopyGrantsCommandError
 */
const de_DescribeSnapshotCopyGrantsCommandError = async (
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
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "SnapshotCopyGrantNotFoundFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
      throw await de_SnapshotCopyGrantNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeSnapshotSchedulesCommand
 */
export const de_DescribeSnapshotSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotSchedulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSnapshotSchedulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSnapshotSchedulesOutputMessage(data.DescribeSnapshotSchedulesResult, context);
  const response: DescribeSnapshotSchedulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeSnapshotSchedulesCommandError
 */
const de_DescribeSnapshotSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeStorageCommand
 */
export const de_DescribeStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStorageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CustomerStorageMessage(data.DescribeStorageResult, context);
  const response: DescribeStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStorageCommandError
 */
const de_DescribeStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeTableRestoreStatusCommand
 */
export const de_DescribeTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTableRestoreStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TableRestoreStatusMessage(data.DescribeTableRestoreStatusResult, context);
  const response: DescribeTableRestoreStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTableRestoreStatusCommandError
 */
const de_DescribeTableRestoreStatusCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "TableRestoreNotFoundFault":
    case "com.amazonaws.redshift#TableRestoreNotFoundFault":
      throw await de_TableRestoreNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TaggedResourceListMessage(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
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
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.redshift#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeUsageLimitsCommand
 */
export const de_DescribeUsageLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUsageLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UsageLimitList(data.DescribeUsageLimitsResult, context);
  const response: DescribeUsageLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeUsageLimitsCommandError
 */
const de_DescribeUsageLimitsCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDisableLoggingCommand
 */
export const de_DisableLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_LoggingStatus(data.DisableLoggingResult, context);
  const response: DisableLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDisableLoggingCommandError
 */
const de_DisableLoggingCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDisableSnapshotCopyCommand
 */
export const de_DisableSnapshotCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSnapshotCopyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableSnapshotCopyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableSnapshotCopyResult(data.DisableSnapshotCopyResult, context);
  const response: DisableSnapshotCopyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDisableSnapshotCopyCommandError
 */
const de_DisableSnapshotCopyCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "SnapshotCopyAlreadyDisabledFault":
    case "com.amazonaws.redshift#SnapshotCopyAlreadyDisabledFault":
      throw await de_SnapshotCopyAlreadyDisabledFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDisassociateDataShareConsumerCommand
 */
export const de_DisassociateDataShareConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDataShareConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateDataShareConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DataShare(data.DisassociateDataShareConsumerResult, context);
  const response: DisassociateDataShareConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDisassociateDataShareConsumerCommandError
 */
const de_DisassociateDataShareConsumerCommandError = async (
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
      throw await de_InvalidDataShareFaultRes(parsedOutput, context);
    case "InvalidNamespaceFault":
    case "com.amazonaws.redshift#InvalidNamespaceFault":
      throw await de_InvalidNamespaceFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryEnableLoggingCommand
 */
export const de_EnableLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_LoggingStatus(data.EnableLoggingResult, context);
  const response: EnableLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEnableLoggingCommandError
 */
const de_EnableLoggingCommandError = async (
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
      throw await de_BucketNotFoundFaultRes(parsedOutput, context);
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InsufficientS3BucketPolicyFault":
    case "com.amazonaws.redshift#InsufficientS3BucketPolicyFault":
      throw await de_InsufficientS3BucketPolicyFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidS3BucketNameFault":
    case "com.amazonaws.redshift#InvalidS3BucketNameFault":
      throw await de_InvalidS3BucketNameFaultRes(parsedOutput, context);
    case "InvalidS3KeyPrefixFault":
    case "com.amazonaws.redshift#InvalidS3KeyPrefixFault":
      throw await de_InvalidS3KeyPrefixFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryEnableSnapshotCopyCommand
 */
export const de_EnableSnapshotCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSnapshotCopyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableSnapshotCopyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableSnapshotCopyResult(data.EnableSnapshotCopyResult, context);
  const response: EnableSnapshotCopyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEnableSnapshotCopyCommandError
 */
const de_EnableSnapshotCopyCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "CopyToRegionDisabledFault":
    case "com.amazonaws.redshift#CopyToRegionDisabledFault":
      throw await de_CopyToRegionDisabledFaultRes(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "IncompatibleOrderableOptions":
    case "com.amazonaws.redshift#IncompatibleOrderableOptions":
      throw await de_IncompatibleOrderableOptionsRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "SnapshotCopyAlreadyEnabledFault":
    case "com.amazonaws.redshift#SnapshotCopyAlreadyEnabledFault":
      throw await de_SnapshotCopyAlreadyEnabledFaultRes(parsedOutput, context);
    case "SnapshotCopyGrantNotFoundFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
      throw await de_SnapshotCopyGrantNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    case "UnknownSnapshotCopyRegionFault":
    case "com.amazonaws.redshift#UnknownSnapshotCopyRegionFault":
      throw await de_UnknownSnapshotCopyRegionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetClusterCredentialsCommand
 */
export const de_GetClusterCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetClusterCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterCredentials(data.GetClusterCredentialsResult, context);
  const response: GetClusterCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetClusterCredentialsCommandError
 */
const de_GetClusterCredentialsCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetClusterCredentialsWithIAMCommand
 */
export const de_GetClusterCredentialsWithIAMCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCredentialsWithIAMCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetClusterCredentialsWithIAMCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterExtendedCredentials(data.GetClusterCredentialsWithIAMResult, context);
  const response: GetClusterCredentialsWithIAMCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetClusterCredentialsWithIAMCommandError
 */
const de_GetClusterCredentialsWithIAMCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsCommand
 */
export const de_GetReservedNodeExchangeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetReservedNodeExchangeConfigurationOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReservedNodeExchangeConfigurationOptionsOutputMessage(
    data.GetReservedNodeExchangeConfigurationOptionsResult,
    context
  );
  const response: GetReservedNodeExchangeConfigurationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsCommandError
 */
const de_GetReservedNodeExchangeConfigurationOptionsCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await de_DependentServiceUnavailableFaultRes(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await de_InvalidReservedNodeStateFaultRes(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await de_ReservedNodeAlreadyMigratedFaultRes(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await de_ReservedNodeNotFoundFaultRes(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await de_ReservedNodeOfferingNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetReservedNodeExchangeOfferingsCommand
 */
export const de_GetReservedNodeExchangeOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservedNodeExchangeOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetReservedNodeExchangeOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReservedNodeExchangeOfferingsOutputMessage(data.GetReservedNodeExchangeOfferingsResult, context);
  const response: GetReservedNodeExchangeOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError
 */
const de_GetReservedNodeExchangeOfferingsCommandError = async (
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
      throw await de_DependentServiceUnavailableFaultRes(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await de_InvalidReservedNodeStateFaultRes(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await de_ReservedNodeAlreadyMigratedFaultRes(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await de_ReservedNodeNotFoundFaultRes(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await de_ReservedNodeOfferingNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyAquaConfigurationCommand
 */
export const de_ModifyAquaConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAquaConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyAquaConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyAquaOutputMessage(data.ModifyAquaConfigurationResult, context);
  const response: ModifyAquaConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyAquaConfigurationCommandError
 */
const de_ModifyAquaConfigurationCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyAuthenticationProfileCommand
 */
export const de_ModifyAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyAuthenticationProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyAuthenticationProfileResult(data.ModifyAuthenticationProfileResult, context);
  const response: ModifyAuthenticationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyAuthenticationProfileCommandError
 */
const de_ModifyAuthenticationProfileCommandError = async (
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
      throw await de_AuthenticationProfileNotFoundFaultRes(parsedOutput, context);
    case "AuthenticationProfileQuotaExceededFault":
    case "com.amazonaws.redshift#AuthenticationProfileQuotaExceededFault":
      throw await de_AuthenticationProfileQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await de_InvalidAuthenticationProfileRequestFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyClusterCommand
 */
export const de_ModifyClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterResult(data.ModifyClusterResult, context);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterCommandError
 */
const de_ModifyClusterCommandError = async (
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
      throw await de_ClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await de_ClusterSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "CustomCnameAssociationFault":
    case "com.amazonaws.redshift#CustomCnameAssociationFault":
      throw await de_CustomCnameAssociationFaultRes(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "HsmClientCertificateNotFoundFault":
    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
      throw await de_HsmClientCertificateNotFoundFaultRes(parsedOutput, context);
    case "HsmConfigurationNotFoundFault":
    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
      throw await de_HsmConfigurationNotFoundFaultRes(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await de_InsufficientClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await de_InvalidClusterSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidClusterTrack":
    case "com.amazonaws.redshift#InvalidClusterTrackFault":
      throw await de_InvalidClusterTrackFaultRes(parsedOutput, context);
    case "InvalidElasticIpFault":
    case "com.amazonaws.redshift#InvalidElasticIpFault":
      throw await de_InvalidElasticIpFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await de_NumberOfNodesPerClusterLimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await de_NumberOfNodesQuotaExceededFaultRes(parsedOutput, context);
    case "TableLimitExceeded":
    case "com.amazonaws.redshift#TableLimitExceededFault":
      throw await de_TableLimitExceededFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    case "UnsupportedOptionFault":
    case "com.amazonaws.redshift#UnsupportedOptionFault":
      throw await de_UnsupportedOptionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyClusterDbRevisionCommand
 */
export const de_ModifyClusterDbRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterDbRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterDbRevisionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterDbRevisionResult(data.ModifyClusterDbRevisionResult, context);
  const response: ModifyClusterDbRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterDbRevisionCommandError
 */
const de_ModifyClusterDbRevisionCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterOnLatestRevision":
    case "com.amazonaws.redshift#ClusterOnLatestRevisionFault":
      throw await de_ClusterOnLatestRevisionFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyClusterIamRolesCommand
 */
export const de_ModifyClusterIamRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterIamRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterIamRolesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterIamRolesResult(data.ModifyClusterIamRolesResult, context);
  const response: ModifyClusterIamRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterIamRolesCommandError
 */
const de_ModifyClusterIamRolesCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyClusterMaintenanceCommand
 */
export const de_ModifyClusterMaintenanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterMaintenanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterMaintenanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterMaintenanceResult(data.ModifyClusterMaintenanceResult, context);
  const response: ModifyClusterMaintenanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterMaintenanceCommandError
 */
const de_ModifyClusterMaintenanceCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyClusterParameterGroupCommand
 */
export const de_ModifyClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterParameterGroupNameMessage(data.ModifyClusterParameterGroupResult, context);
  const response: ModifyClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterParameterGroupCommandError
 */
const de_ModifyClusterParameterGroupCommandError = async (
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
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterParameterGroupState":
    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
      throw await de_InvalidClusterParameterGroupStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyClusterSnapshotCommand
 */
export const de_ModifyClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterSnapshotResult(data.ModifyClusterSnapshotResult, context);
  const response: ModifyClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterSnapshotCommandError
 */
const de_ModifyClusterSnapshotCommandError = async (
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
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await de_InvalidClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyClusterSnapshotScheduleCommand
 */
export const de_ModifyClusterSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterSnapshotScheduleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ModifyClusterSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterSnapshotScheduleCommandError
 */
const de_ModifyClusterSnapshotScheduleCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotScheduleState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault":
      throw await de_InvalidClusterSnapshotScheduleStateFaultRes(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await de_SnapshotScheduleNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyClusterSubnetGroupCommand
 */
export const de_ModifyClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterSubnetGroupResult(data.ModifyClusterSubnetGroupResult, context);
  const response: ModifyClusterSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterSubnetGroupCommandError
 */
const de_ModifyClusterSubnetGroupCommandError = async (
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
      throw await de_ClusterSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "ClusterSubnetQuotaExceededFault":
    case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault":
      throw await de_ClusterSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.redshift#SubnetAlreadyInUse":
      throw await de_SubnetAlreadyInUseRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyCustomDomainAssociationCommand
 */
export const de_ModifyCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyCustomDomainAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyCustomDomainAssociationResult(data.ModifyCustomDomainAssociationResult, context);
  const response: ModifyCustomDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyCustomDomainAssociationCommandError
 */
const de_ModifyCustomDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCustomDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "CustomCnameAssociationFault":
    case "com.amazonaws.redshift#CustomCnameAssociationFault":
      throw await de_CustomCnameAssociationFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyEndpointAccessCommand
 */
export const de_ModifyEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EndpointAccess(data.ModifyEndpointAccessResult, context);
  const response: ModifyEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyEndpointAccessCommandError
 */
const de_ModifyEndpointAccessCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await de_EndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await de_InvalidClusterSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidEndpointState":
    case "com.amazonaws.redshift#InvalidEndpointStateFault":
      throw await de_InvalidEndpointStateFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyEventSubscriptionCommand
 */
export const de_ModifyEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyEventSubscriptionResult(data.ModifyEventSubscriptionResult, context);
  const response: ModifyEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyEventSubscriptionCommandError
 */
const de_ModifyEventSubscriptionCommandError = async (
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
      throw await de_InvalidSubscriptionStateFaultRes(parsedOutput, context);
    case "SNSInvalidTopic":
    case "com.amazonaws.redshift#SNSInvalidTopicFault":
      throw await de_SNSInvalidTopicFaultRes(parsedOutput, context);
    case "SNSNoAuthorization":
    case "com.amazonaws.redshift#SNSNoAuthorizationFault":
      throw await de_SNSNoAuthorizationFaultRes(parsedOutput, context);
    case "SNSTopicArnNotFound":
    case "com.amazonaws.redshift#SNSTopicArnNotFoundFault":
      throw await de_SNSTopicArnNotFoundFaultRes(parsedOutput, context);
    case "SourceNotFound":
    case "com.amazonaws.redshift#SourceNotFoundFault":
      throw await de_SourceNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionCategoryNotFound":
    case "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault":
      throw await de_SubscriptionCategoryNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionEventIdNotFound":
    case "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault":
      throw await de_SubscriptionEventIdNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.redshift#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
    case "SubscriptionSeverityNotFound":
    case "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault":
      throw await de_SubscriptionSeverityNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyScheduledActionCommand
 */
export const de_ModifyScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ScheduledAction(data.ModifyScheduledActionResult, context);
  const response: ModifyScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyScheduledActionCommandError
 */
const de_ModifyScheduledActionCommandError = async (
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
      throw await de_InvalidScheduleFaultRes(parsedOutput, context);
    case "InvalidScheduledAction":
    case "com.amazonaws.redshift#InvalidScheduledActionFault":
      throw await de_InvalidScheduledActionFaultRes(parsedOutput, context);
    case "ScheduledActionNotFound":
    case "com.amazonaws.redshift#ScheduledActionNotFoundFault":
      throw await de_ScheduledActionNotFoundFaultRes(parsedOutput, context);
    case "ScheduledActionTypeUnsupported":
    case "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault":
      throw await de_ScheduledActionTypeUnsupportedFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand
 */
export const de_ModifySnapshotCopyRetentionPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifySnapshotCopyRetentionPeriodCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifySnapshotCopyRetentionPeriodResult(data.ModifySnapshotCopyRetentionPeriodResult, context);
  const response: ModifySnapshotCopyRetentionPeriodCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError
 */
const de_ModifySnapshotCopyRetentionPeriodCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    case "SnapshotCopyDisabledFault":
    case "com.amazonaws.redshift#SnapshotCopyDisabledFault":
      throw await de_SnapshotCopyDisabledFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifySnapshotScheduleCommand
 */
export const de_ModifySnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifySnapshotScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SnapshotSchedule(data.ModifySnapshotScheduleResult, context);
  const response: ModifySnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifySnapshotScheduleCommandError
 */
const de_ModifySnapshotScheduleCommandError = async (
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
      throw await de_InvalidScheduleFaultRes(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await de_SnapshotScheduleNotFoundFaultRes(parsedOutput, context);
    case "SnapshotScheduleUpdateInProgress":
    case "com.amazonaws.redshift#SnapshotScheduleUpdateInProgressFault":
      throw await de_SnapshotScheduleUpdateInProgressFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyUsageLimitCommand
 */
export const de_ModifyUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyUsageLimitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UsageLimit(data.ModifyUsageLimitResult, context);
  const response: ModifyUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyUsageLimitCommandError
 */
const de_ModifyUsageLimitCommandError = async (
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
      throw await de_InvalidUsageLimitFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    case "UsageLimitNotFound":
    case "com.amazonaws.redshift#UsageLimitNotFoundFault":
      throw await de_UsageLimitNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPauseClusterCommand
 */
export const de_PauseClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PauseClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PauseClusterResult(data.PauseClusterResult, context);
  const response: PauseClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPauseClusterCommandError
 */
const de_PauseClusterCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPurchaseReservedNodeOfferingCommand
 */
export const de_PurchaseReservedNodeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedNodeOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PurchaseReservedNodeOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PurchaseReservedNodeOfferingResult(data.PurchaseReservedNodeOfferingResult, context);
  const response: PurchaseReservedNodeOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPurchaseReservedNodeOfferingCommandError
 */
const de_PurchaseReservedNodeOfferingCommandError = async (
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
      throw await de_ReservedNodeAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await de_ReservedNodeOfferingNotFoundFaultRes(parsedOutput, context);
    case "ReservedNodeQuotaExceeded":
    case "com.amazonaws.redshift#ReservedNodeQuotaExceededFault":
      throw await de_ReservedNodeQuotaExceededFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRebootClusterCommand
 */
export const de_RebootClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootClusterResult(data.RebootClusterResult, context);
  const response: RebootClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRebootClusterCommandError
 */
const de_RebootClusterCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRejectDataShareCommand
 */
export const de_RejectDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectDataShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DataShare(data.RejectDataShareResult, context);
  const response: RejectDataShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRejectDataShareCommandError
 */
const de_RejectDataShareCommandError = async (
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
      throw await de_InvalidDataShareFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryResetClusterParameterGroupCommand
 */
export const de_ResetClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetClusterParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClusterParameterGroupNameMessage(data.ResetClusterParameterGroupResult, context);
  const response: ResetClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryResetClusterParameterGroupCommandError
 */
const de_ResetClusterParameterGroupCommandError = async (
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
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterParameterGroupState":
    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
      throw await de_InvalidClusterParameterGroupStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryResizeClusterCommand
 */
export const de_ResizeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResizeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResizeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResizeClusterResult(data.ResizeClusterResult, context);
  const response: ResizeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryResizeClusterCommandError
 */
const de_ResizeClusterCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await de_DependentServiceUnavailableFaultRes(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await de_InsufficientClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await de_InvalidReservedNodeStateFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await de_NumberOfNodesPerClusterLimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await de_NumberOfNodesQuotaExceededFaultRes(parsedOutput, context);
    case "ReservedNodeAlreadyExists":
    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
      throw await de_ReservedNodeAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await de_ReservedNodeAlreadyMigratedFaultRes(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await de_ReservedNodeNotFoundFaultRes(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await de_ReservedNodeOfferingNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    case "UnsupportedOptionFault":
    case "com.amazonaws.redshift#UnsupportedOptionFault":
      throw await de_UnsupportedOptionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRestoreFromClusterSnapshotCommand
 */
export const de_RestoreFromClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreFromClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreFromClusterSnapshotResult(data.RestoreFromClusterSnapshotResult, context);
  const response: RestoreFromClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRestoreFromClusterSnapshotCommandError
 */
const de_RestoreFromClusterSnapshotCommandError = async (
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
      throw await de_AccessToSnapshotDeniedFaultRes(parsedOutput, context);
    case "ClusterAlreadyExists":
    case "com.amazonaws.redshift#ClusterAlreadyExistsFault":
      throw await de_ClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ClusterQuotaExceeded":
    case "com.amazonaws.redshift#ClusterQuotaExceededFault":
      throw await de_ClusterQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await de_ClusterSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await de_ClusterSubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "DependentServiceUnavailableFault":
    case "com.amazonaws.redshift#DependentServiceUnavailableFault":
      throw await de_DependentServiceUnavailableFaultRes(parsedOutput, context);
    case "HsmClientCertificateNotFoundFault":
    case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
      throw await de_HsmClientCertificateNotFoundFaultRes(parsedOutput, context);
    case "HsmConfigurationNotFoundFault":
    case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
      throw await de_HsmConfigurationNotFoundFaultRes(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await de_InsufficientClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await de_InvalidClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidClusterSubnetGroupStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
      throw await de_InvalidClusterSubnetGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterTrack":
    case "com.amazonaws.redshift#InvalidClusterTrackFault":
      throw await de_InvalidClusterTrackFaultRes(parsedOutput, context);
    case "InvalidElasticIpFault":
    case "com.amazonaws.redshift#InvalidElasticIpFault":
      throw await de_InvalidElasticIpFaultRes(parsedOutput, context);
    case "InvalidReservedNodeState":
    case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
      throw await de_InvalidReservedNodeStateFaultRes(parsedOutput, context);
    case "InvalidRestore":
    case "com.amazonaws.redshift#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.redshift#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.redshift#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await de_NumberOfNodesPerClusterLimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await de_NumberOfNodesQuotaExceededFaultRes(parsedOutput, context);
    case "ReservedNodeAlreadyExists":
    case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
      throw await de_ReservedNodeAlreadyExistsFaultRes(parsedOutput, context);
    case "ReservedNodeAlreadyMigrated":
    case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
      throw await de_ReservedNodeAlreadyMigratedFaultRes(parsedOutput, context);
    case "ReservedNodeNotFound":
    case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
      throw await de_ReservedNodeNotFoundFaultRes(parsedOutput, context);
    case "ReservedNodeOfferingNotFound":
    case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
      throw await de_ReservedNodeOfferingNotFoundFaultRes(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await de_SnapshotScheduleNotFoundFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRestoreTableFromClusterSnapshotCommand
 */
export const de_RestoreTableFromClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreTableFromClusterSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreTableFromClusterSnapshotResult(data.RestoreTableFromClusterSnapshotResult, context);
  const response: RestoreTableFromClusterSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRestoreTableFromClusterSnapshotCommandError
 */
const de_RestoreTableFromClusterSnapshotCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "InProgressTableRestoreQuotaExceededFault":
    case "com.amazonaws.redshift#InProgressTableRestoreQuotaExceededFault":
      throw await de_InProgressTableRestoreQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
      throw await de_InvalidClusterSnapshotStateFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidTableRestoreArgument":
    case "com.amazonaws.redshift#InvalidTableRestoreArgumentFault":
      throw await de_InvalidTableRestoreArgumentFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryResumeClusterCommand
 */
export const de_ResumeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResumeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResumeClusterResult(data.ResumeClusterResult, context);
  const response: ResumeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryResumeClusterCommandError
 */
const de_ResumeClusterCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InsufficientClusterCapacity":
    case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
      throw await de_InsufficientClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRevokeClusterSecurityGroupIngressCommand
 */
export const de_RevokeClusterSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeClusterSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeClusterSecurityGroupIngressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RevokeClusterSecurityGroupIngressResult(data.RevokeClusterSecurityGroupIngressResult, context);
  const response: RevokeClusterSecurityGroupIngressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError
 */
const de_RevokeClusterSecurityGroupIngressCommandError = async (
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
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "ClusterSecurityGroupNotFound":
    case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
      throw await de_ClusterSecurityGroupNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await de_InvalidClusterSecurityGroupStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRevokeEndpointAccessCommand
 */
export const de_RevokeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeEndpointAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EndpointAuthorization(data.RevokeEndpointAccessResult, context);
  const response: RevokeEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRevokeEndpointAccessCommandError
 */
const de_RevokeEndpointAccessCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "EndpointAuthorizationNotFound":
    case "com.amazonaws.redshift#EndpointAuthorizationNotFoundFault":
      throw await de_EndpointAuthorizationNotFoundFaultRes(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await de_EndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidAuthorizationState":
    case "com.amazonaws.redshift#InvalidAuthorizationStateFault":
      throw await de_InvalidAuthorizationStateFaultRes(parsedOutput, context);
    case "InvalidClusterSecurityGroupState":
    case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
      throw await de_InvalidClusterSecurityGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidEndpointState":
    case "com.amazonaws.redshift#InvalidEndpointStateFault":
      throw await de_InvalidEndpointStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRevokeSnapshotAccessCommand
 */
export const de_RevokeSnapshotAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSnapshotAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeSnapshotAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RevokeSnapshotAccessResult(data.RevokeSnapshotAccessResult, context);
  const response: RevokeSnapshotAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRevokeSnapshotAccessCommandError
 */
const de_RevokeSnapshotAccessCommandError = async (
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
      throw await de_AccessToSnapshotDeniedFaultRes(parsedOutput, context);
    case "AuthorizationNotFound":
    case "com.amazonaws.redshift#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotNotFound":
    case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
      throw await de_ClusterSnapshotNotFoundFaultRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.redshift#UnsupportedOperationFault":
      throw await de_UnsupportedOperationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRotateEncryptionKeyCommand
 */
export const de_RotateEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RotateEncryptionKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RotateEncryptionKeyResult(data.RotateEncryptionKeyResult, context);
  const response: RotateEncryptionKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRotateEncryptionKeyCommandError
 */
const de_RotateEncryptionKeyCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "DependentServiceRequestThrottlingFault":
    case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
      throw await de_DependentServiceRequestThrottlingFaultRes(parsedOutput, context);
    case "InvalidClusterState":
    case "com.amazonaws.redshift#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdatePartnerStatusCommand
 */
export const de_UpdatePartnerStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnerStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePartnerStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PartnerIntegrationOutputMessage(data.UpdatePartnerStatusResult, context);
  const response: UpdatePartnerStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdatePartnerStatusCommandError
 */
const de_UpdatePartnerStatusCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "PartnerNotFound":
    case "com.amazonaws.redshift#PartnerNotFoundFault":
      throw await de_PartnerNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await de_UnauthorizedPartnerIntegrationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAccessToClusterDeniedFaultRes
 */
const de_AccessToClusterDeniedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessToClusterDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessToClusterDeniedFault(body.Error, context);
  const exception = new AccessToClusterDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAccessToSnapshotDeniedFaultRes
 */
const de_AccessToSnapshotDeniedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessToSnapshotDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessToSnapshotDeniedFault(body.Error, context);
  const exception = new AccessToSnapshotDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAuthenticationProfileAlreadyExistsFaultRes
 */
const de_AuthenticationProfileAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthenticationProfileAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthenticationProfileAlreadyExistsFault(body.Error, context);
  const exception = new AuthenticationProfileAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAuthenticationProfileNotFoundFaultRes
 */
const de_AuthenticationProfileNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthenticationProfileNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthenticationProfileNotFoundFault(body.Error, context);
  const exception = new AuthenticationProfileNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAuthenticationProfileQuotaExceededFaultRes
 */
const de_AuthenticationProfileQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthenticationProfileQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthenticationProfileQuotaExceededFault(body.Error, context);
  const exception = new AuthenticationProfileQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAuthorizationAlreadyExistsFaultRes
 */
const de_AuthorizationAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationAlreadyExistsFault(body.Error, context);
  const exception = new AuthorizationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAuthorizationNotFoundFaultRes
 */
const de_AuthorizationNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationNotFoundFault(body.Error, context);
  const exception = new AuthorizationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAuthorizationQuotaExceededFaultRes
 */
const de_AuthorizationQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationQuotaExceededFault(body.Error, context);
  const exception = new AuthorizationQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBatchDeleteRequestSizeExceededFaultRes
 */
const de_BatchDeleteRequestSizeExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchDeleteRequestSizeExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BatchDeleteRequestSizeExceededFault(body.Error, context);
  const exception = new BatchDeleteRequestSizeExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultRes
 */
const de_BatchModifyClusterSnapshotsLimitExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchModifyClusterSnapshotsLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BatchModifyClusterSnapshotsLimitExceededFault(body.Error, context);
  const exception = new BatchModifyClusterSnapshotsLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBucketNotFoundFaultRes
 */
const de_BucketNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<BucketNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BucketNotFoundFault(body.Error, context);
  const exception = new BucketNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterAlreadyExistsFaultRes
 */
const de_ClusterAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterAlreadyExistsFault(body.Error, context);
  const exception = new ClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterNotFoundFaultRes
 */
const de_ClusterNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterNotFoundFault(body.Error, context);
  const exception = new ClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterOnLatestRevisionFaultRes
 */
const de_ClusterOnLatestRevisionFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterOnLatestRevisionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterOnLatestRevisionFault(body.Error, context);
  const exception = new ClusterOnLatestRevisionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterParameterGroupAlreadyExistsFaultRes
 */
const de_ClusterParameterGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterParameterGroupAlreadyExistsFault(body.Error, context);
  const exception = new ClusterParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterParameterGroupNotFoundFaultRes
 */
const de_ClusterParameterGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterParameterGroupNotFoundFault(body.Error, context);
  const exception = new ClusterParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterParameterGroupQuotaExceededFaultRes
 */
const de_ClusterParameterGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterParameterGroupQuotaExceededFault(body.Error, context);
  const exception = new ClusterParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterQuotaExceededFaultRes
 */
const de_ClusterQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterQuotaExceededFault(body.Error, context);
  const exception = new ClusterQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultRes
 */
const de_ClusterSecurityGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSecurityGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSecurityGroupAlreadyExistsFault(body.Error, context);
  const exception = new ClusterSecurityGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSecurityGroupNotFoundFaultRes
 */
const de_ClusterSecurityGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSecurityGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSecurityGroupNotFoundFault(body.Error, context);
  const exception = new ClusterSecurityGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSecurityGroupQuotaExceededFaultRes
 */
const de_ClusterSecurityGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSecurityGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSecurityGroupQuotaExceededFault(body.Error, context);
  const exception = new ClusterSecurityGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSnapshotAlreadyExistsFaultRes
 */
const de_ClusterSnapshotAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSnapshotAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSnapshotAlreadyExistsFault(body.Error, context);
  const exception = new ClusterSnapshotAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSnapshotNotFoundFaultRes
 */
const de_ClusterSnapshotNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSnapshotNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSnapshotNotFoundFault(body.Error, context);
  const exception = new ClusterSnapshotNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSnapshotQuotaExceededFaultRes
 */
const de_ClusterSnapshotQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSnapshotQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSnapshotQuotaExceededFault(body.Error, context);
  const exception = new ClusterSnapshotQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultRes
 */
const de_ClusterSubnetGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSubnetGroupAlreadyExistsFault(body.Error, context);
  const exception = new ClusterSubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSubnetGroupNotFoundFaultRes
 */
const de_ClusterSubnetGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSubnetGroupNotFoundFault(body.Error, context);
  const exception = new ClusterSubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSubnetGroupQuotaExceededFaultRes
 */
const de_ClusterSubnetGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSubnetGroupQuotaExceededFault(body.Error, context);
  const exception = new ClusterSubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryClusterSubnetQuotaExceededFaultRes
 */
const de_ClusterSubnetQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterSubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterSubnetQuotaExceededFault(body.Error, context);
  const exception = new ClusterSubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCopyToRegionDisabledFaultRes
 */
const de_CopyToRegionDisabledFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CopyToRegionDisabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CopyToRegionDisabledFault(body.Error, context);
  const exception = new CopyToRegionDisabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomCnameAssociationFaultRes
 */
const de_CustomCnameAssociationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomCnameAssociationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomCnameAssociationFault(body.Error, context);
  const exception = new CustomCnameAssociationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomDomainAssociationNotFoundFaultRes
 */
const de_CustomDomainAssociationNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomDomainAssociationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomDomainAssociationNotFoundFault(body.Error, context);
  const exception = new CustomDomainAssociationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDependentServiceRequestThrottlingFaultRes
 */
const de_DependentServiceRequestThrottlingFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependentServiceRequestThrottlingFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DependentServiceRequestThrottlingFault(body.Error, context);
  const exception = new DependentServiceRequestThrottlingFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDependentServiceUnavailableFaultRes
 */
const de_DependentServiceUnavailableFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependentServiceUnavailableFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DependentServiceUnavailableFault(body.Error, context);
  const exception = new DependentServiceUnavailableFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEndpointAlreadyExistsFaultRes
 */
const de_EndpointAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointAlreadyExistsFault(body.Error, context);
  const exception = new EndpointAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEndpointAuthorizationAlreadyExistsFaultRes
 */
const de_EndpointAuthorizationAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAuthorizationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointAuthorizationAlreadyExistsFault(body.Error, context);
  const exception = new EndpointAuthorizationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEndpointAuthorizationNotFoundFaultRes
 */
const de_EndpointAuthorizationNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAuthorizationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointAuthorizationNotFoundFault(body.Error, context);
  const exception = new EndpointAuthorizationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFaultRes
 */
const de_EndpointAuthorizationsPerClusterLimitExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAuthorizationsPerClusterLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointAuthorizationsPerClusterLimitExceededFault(body.Error, context);
  const exception = new EndpointAuthorizationsPerClusterLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEndpointNotFoundFaultRes
 */
const de_EndpointNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointNotFoundFault(body.Error, context);
  const exception = new EndpointNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEndpointsPerAuthorizationLimitExceededFaultRes
 */
const de_EndpointsPerAuthorizationLimitExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointsPerAuthorizationLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointsPerAuthorizationLimitExceededFault(body.Error, context);
  const exception = new EndpointsPerAuthorizationLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEndpointsPerClusterLimitExceededFaultRes
 */
const de_EndpointsPerClusterLimitExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointsPerClusterLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointsPerClusterLimitExceededFault(body.Error, context);
  const exception = new EndpointsPerClusterLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEventSubscriptionQuotaExceededFaultRes
 */
const de_EventSubscriptionQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventSubscriptionQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventSubscriptionQuotaExceededFault(body.Error, context);
  const exception = new EventSubscriptionQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryHsmClientCertificateAlreadyExistsFaultRes
 */
const de_HsmClientCertificateAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmClientCertificateAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HsmClientCertificateAlreadyExistsFault(body.Error, context);
  const exception = new HsmClientCertificateAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryHsmClientCertificateNotFoundFaultRes
 */
const de_HsmClientCertificateNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmClientCertificateNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HsmClientCertificateNotFoundFault(body.Error, context);
  const exception = new HsmClientCertificateNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryHsmClientCertificateQuotaExceededFaultRes
 */
const de_HsmClientCertificateQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmClientCertificateQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HsmClientCertificateQuotaExceededFault(body.Error, context);
  const exception = new HsmClientCertificateQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryHsmConfigurationAlreadyExistsFaultRes
 */
const de_HsmConfigurationAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmConfigurationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HsmConfigurationAlreadyExistsFault(body.Error, context);
  const exception = new HsmConfigurationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryHsmConfigurationNotFoundFaultRes
 */
const de_HsmConfigurationNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmConfigurationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HsmConfigurationNotFoundFault(body.Error, context);
  const exception = new HsmConfigurationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryHsmConfigurationQuotaExceededFaultRes
 */
const de_HsmConfigurationQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HsmConfigurationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HsmConfigurationQuotaExceededFault(body.Error, context);
  const exception = new HsmConfigurationQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIncompatibleOrderableOptionsRes
 */
const de_IncompatibleOrderableOptionsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleOrderableOptions> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IncompatibleOrderableOptions(body.Error, context);
  const exception = new IncompatibleOrderableOptions({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInProgressTableRestoreQuotaExceededFaultRes
 */
const de_InProgressTableRestoreQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InProgressTableRestoreQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InProgressTableRestoreQuotaExceededFault(body.Error, context);
  const exception = new InProgressTableRestoreQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientClusterCapacityFaultRes
 */
const de_InsufficientClusterCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientClusterCapacityFault(body.Error, context);
  const exception = new InsufficientClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientS3BucketPolicyFaultRes
 */
const de_InsufficientS3BucketPolicyFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientS3BucketPolicyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientS3BucketPolicyFault(body.Error, context);
  const exception = new InsufficientS3BucketPolicyFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidAuthenticationProfileRequestFaultRes
 */
const de_InvalidAuthenticationProfileRequestFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthenticationProfileRequestFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAuthenticationProfileRequestFault(body.Error, context);
  const exception = new InvalidAuthenticationProfileRequestFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidAuthorizationStateFaultRes
 */
const de_InvalidAuthorizationStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthorizationStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAuthorizationStateFault(body.Error, context);
  const exception = new InvalidAuthorizationStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidClusterParameterGroupStateFaultRes
 */
const de_InvalidClusterParameterGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterParameterGroupStateFault(body.Error, context);
  const exception = new InvalidClusterParameterGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidClusterSecurityGroupStateFaultRes
 */
const de_InvalidClusterSecurityGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSecurityGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterSecurityGroupStateFault(body.Error, context);
  const exception = new InvalidClusterSecurityGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultRes
 */
const de_InvalidClusterSnapshotScheduleStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSnapshotScheduleStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterSnapshotScheduleStateFault(body.Error, context);
  const exception = new InvalidClusterSnapshotScheduleStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidClusterSnapshotStateFaultRes
 */
const de_InvalidClusterSnapshotStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSnapshotStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterSnapshotStateFault(body.Error, context);
  const exception = new InvalidClusterSnapshotStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidClusterStateFaultRes
 */
const de_InvalidClusterStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterStateFault(body.Error, context);
  const exception = new InvalidClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidClusterSubnetGroupStateFaultRes
 */
const de_InvalidClusterSubnetGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSubnetGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterSubnetGroupStateFault(body.Error, context);
  const exception = new InvalidClusterSubnetGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidClusterSubnetStateFaultRes
 */
const de_InvalidClusterSubnetStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterSubnetStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterSubnetStateFault(body.Error, context);
  const exception = new InvalidClusterSubnetStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidClusterTrackFaultRes
 */
const de_InvalidClusterTrackFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterTrackFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterTrackFault(body.Error, context);
  const exception = new InvalidClusterTrackFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDataShareFaultRes
 */
const de_InvalidDataShareFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDataShareFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDataShareFault(body.Error, context);
  const exception = new InvalidDataShareFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidElasticIpFaultRes
 */
const de_InvalidElasticIpFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidElasticIpFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidElasticIpFault(body.Error, context);
  const exception = new InvalidElasticIpFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidEndpointStateFaultRes
 */
const de_InvalidEndpointStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEndpointStateFault(body.Error, context);
  const exception = new InvalidEndpointStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidHsmClientCertificateStateFaultRes
 */
const de_InvalidHsmClientCertificateStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHsmClientCertificateStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidHsmClientCertificateStateFault(body.Error, context);
  const exception = new InvalidHsmClientCertificateStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidHsmConfigurationStateFaultRes
 */
const de_InvalidHsmConfigurationStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHsmConfigurationStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidHsmConfigurationStateFault(body.Error, context);
  const exception = new InvalidHsmConfigurationStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidNamespaceFaultRes
 */
const de_InvalidNamespaceFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNamespaceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNamespaceFault(body.Error, context);
  const exception = new InvalidNamespaceFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidReservedNodeStateFaultRes
 */
const de_InvalidReservedNodeStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReservedNodeStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidReservedNodeStateFault(body.Error, context);
  const exception = new InvalidReservedNodeStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidRestoreFaultRes
 */
const de_InvalidRestoreFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidRestoreFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRestoreFault(body.Error, context);
  const exception = new InvalidRestoreFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidRetentionPeriodFaultRes
 */
const de_InvalidRetentionPeriodFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRetentionPeriodFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRetentionPeriodFault(body.Error, context);
  const exception = new InvalidRetentionPeriodFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidS3BucketNameFaultRes
 */
const de_InvalidS3BucketNameFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketNameFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3BucketNameFault(body.Error, context);
  const exception = new InvalidS3BucketNameFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidS3KeyPrefixFaultRes
 */
const de_InvalidS3KeyPrefixFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KeyPrefixFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3KeyPrefixFault(body.Error, context);
  const exception = new InvalidS3KeyPrefixFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidScheduledActionFaultRes
 */
const de_InvalidScheduledActionFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidScheduledActionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidScheduledActionFault(body.Error, context);
  const exception = new InvalidScheduledActionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidScheduleFaultRes
 */
const de_InvalidScheduleFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidScheduleFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidScheduleFault(body.Error, context);
  const exception = new InvalidScheduleFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSnapshotCopyGrantStateFaultRes
 */
const de_InvalidSnapshotCopyGrantStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnapshotCopyGrantStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSnapshotCopyGrantStateFault(body.Error, context);
  const exception = new InvalidSnapshotCopyGrantStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSubnetRes
 */
const de_InvalidSubnetRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSubnet(body.Error, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSubscriptionStateFaultRes
 */
const de_InvalidSubscriptionStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubscriptionStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSubscriptionStateFault(body.Error, context);
  const exception = new InvalidSubscriptionStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidTableRestoreArgumentFaultRes
 */
const de_InvalidTableRestoreArgumentFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTableRestoreArgumentFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTableRestoreArgumentFault(body.Error, context);
  const exception = new InvalidTableRestoreArgumentFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidTagFaultRes
 */
const de_InvalidTagFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTagFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagFault(body.Error, context);
  const exception = new InvalidTagFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidUsageLimitFaultRes
 */
const de_InvalidUsageLimitFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUsageLimitFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidUsageLimitFault(body.Error, context);
  const exception = new InvalidUsageLimitFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidVPCNetworkStateFaultRes
 */
const de_InvalidVPCNetworkStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidVPCNetworkStateFault(body.Error, context);
  const exception = new InvalidVPCNetworkStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLimitExceededFaultRes
 */
const de_LimitExceededFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededFault(body.Error, context);
  const exception = new LimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultRes
 */
const de_NumberOfNodesPerClusterLimitExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfNodesPerClusterLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NumberOfNodesPerClusterLimitExceededFault(body.Error, context);
  const exception = new NumberOfNodesPerClusterLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNumberOfNodesQuotaExceededFaultRes
 */
const de_NumberOfNodesQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfNodesQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NumberOfNodesQuotaExceededFault(body.Error, context);
  const exception = new NumberOfNodesQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPartnerNotFoundFaultRes
 */
const de_PartnerNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PartnerNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PartnerNotFoundFault(body.Error, context);
  const exception = new PartnerNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedNodeAlreadyExistsFaultRes
 */
const de_ReservedNodeAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeAlreadyExistsFault(body.Error, context);
  const exception = new ReservedNodeAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedNodeAlreadyMigratedFaultRes
 */
const de_ReservedNodeAlreadyMigratedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeAlreadyMigratedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeAlreadyMigratedFault(body.Error, context);
  const exception = new ReservedNodeAlreadyMigratedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedNodeExchangeNotFoundFaultRes
 */
const de_ReservedNodeExchangeNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeExchangeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeExchangeNotFoundFault(body.Error, context);
  const exception = new ReservedNodeExchangeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedNodeNotFoundFaultRes
 */
const de_ReservedNodeNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeNotFoundFault(body.Error, context);
  const exception = new ReservedNodeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedNodeOfferingNotFoundFaultRes
 */
const de_ReservedNodeOfferingNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeOfferingNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeOfferingNotFoundFault(body.Error, context);
  const exception = new ReservedNodeOfferingNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReservedNodeQuotaExceededFaultRes
 */
const de_ReservedNodeQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNodeQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNodeQuotaExceededFault(body.Error, context);
  const exception = new ReservedNodeQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResizeNotFoundFaultRes
 */
const de_ResizeNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResizeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResizeNotFoundFault(body.Error, context);
  const exception = new ResizeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceNotFoundFaultRes
 */
const de_ResourceNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundFault(body.Error, context);
  const exception = new ResourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryScheduledActionAlreadyExistsFaultRes
 */
const de_ScheduledActionAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduledActionAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ScheduledActionAlreadyExistsFault(body.Error, context);
  const exception = new ScheduledActionAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryScheduledActionNotFoundFaultRes
 */
const de_ScheduledActionNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduledActionNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ScheduledActionNotFoundFault(body.Error, context);
  const exception = new ScheduledActionNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryScheduledActionQuotaExceededFaultRes
 */
const de_ScheduledActionQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduledActionQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ScheduledActionQuotaExceededFault(body.Error, context);
  const exception = new ScheduledActionQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryScheduledActionTypeUnsupportedFaultRes
 */
const de_ScheduledActionTypeUnsupportedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduledActionTypeUnsupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ScheduledActionTypeUnsupportedFault(body.Error, context);
  const exception = new ScheduledActionTypeUnsupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultRes
 */
const de_ScheduleDefinitionTypeUnsupportedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScheduleDefinitionTypeUnsupportedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ScheduleDefinitionTypeUnsupportedFault(body.Error, context);
  const exception = new ScheduleDefinitionTypeUnsupportedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotCopyAlreadyDisabledFaultRes
 */
const de_SnapshotCopyAlreadyDisabledFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyAlreadyDisabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotCopyAlreadyDisabledFault(body.Error, context);
  const exception = new SnapshotCopyAlreadyDisabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotCopyAlreadyEnabledFaultRes
 */
const de_SnapshotCopyAlreadyEnabledFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyAlreadyEnabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotCopyAlreadyEnabledFault(body.Error, context);
  const exception = new SnapshotCopyAlreadyEnabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotCopyDisabledFaultRes
 */
const de_SnapshotCopyDisabledFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyDisabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotCopyDisabledFault(body.Error, context);
  const exception = new SnapshotCopyDisabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultRes
 */
const de_SnapshotCopyGrantAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyGrantAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotCopyGrantAlreadyExistsFault(body.Error, context);
  const exception = new SnapshotCopyGrantAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotCopyGrantNotFoundFaultRes
 */
const de_SnapshotCopyGrantNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyGrantNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotCopyGrantNotFoundFault(body.Error, context);
  const exception = new SnapshotCopyGrantNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotCopyGrantQuotaExceededFaultRes
 */
const de_SnapshotCopyGrantQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotCopyGrantQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotCopyGrantQuotaExceededFault(body.Error, context);
  const exception = new SnapshotCopyGrantQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotScheduleAlreadyExistsFaultRes
 */
const de_SnapshotScheduleAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotScheduleAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotScheduleAlreadyExistsFault(body.Error, context);
  const exception = new SnapshotScheduleAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotScheduleNotFoundFaultRes
 */
const de_SnapshotScheduleNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotScheduleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotScheduleNotFoundFault(body.Error, context);
  const exception = new SnapshotScheduleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotScheduleQuotaExceededFaultRes
 */
const de_SnapshotScheduleQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotScheduleQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotScheduleQuotaExceededFault(body.Error, context);
  const exception = new SnapshotScheduleQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySnapshotScheduleUpdateInProgressFaultRes
 */
const de_SnapshotScheduleUpdateInProgressFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotScheduleUpdateInProgressFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotScheduleUpdateInProgressFault(body.Error, context);
  const exception = new SnapshotScheduleUpdateInProgressFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySNSInvalidTopicFaultRes
 */
const de_SNSInvalidTopicFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSInvalidTopicFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SNSInvalidTopicFault(body.Error, context);
  const exception = new SNSInvalidTopicFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySNSNoAuthorizationFaultRes
 */
const de_SNSNoAuthorizationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSNoAuthorizationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SNSNoAuthorizationFault(body.Error, context);
  const exception = new SNSNoAuthorizationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySNSTopicArnNotFoundFaultRes
 */
const de_SNSTopicArnNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSTopicArnNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SNSTopicArnNotFoundFault(body.Error, context);
  const exception = new SNSTopicArnNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySourceNotFoundFaultRes
 */
const de_SourceNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<SourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SourceNotFoundFault(body.Error, context);
  const exception = new SourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubnetAlreadyInUseRes
 */
const de_SubnetAlreadyInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<SubnetAlreadyInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetAlreadyInUse(body.Error, context);
  const exception = new SubnetAlreadyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionAlreadyExistFaultRes
 */
const de_SubscriptionAlreadyExistFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionAlreadyExistFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionAlreadyExistFault(body.Error, context);
  const exception = new SubscriptionAlreadyExistFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionCategoryNotFoundFaultRes
 */
const de_SubscriptionCategoryNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionCategoryNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionCategoryNotFoundFault(body.Error, context);
  const exception = new SubscriptionCategoryNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionEventIdNotFoundFaultRes
 */
const de_SubscriptionEventIdNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionEventIdNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionEventIdNotFoundFault(body.Error, context);
  const exception = new SubscriptionEventIdNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionNotFoundFaultRes
 */
const de_SubscriptionNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionNotFoundFault(body.Error, context);
  const exception = new SubscriptionNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionSeverityNotFoundFaultRes
 */
const de_SubscriptionSeverityNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionSeverityNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionSeverityNotFoundFault(body.Error, context);
  const exception = new SubscriptionSeverityNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTableLimitExceededFaultRes
 */
const de_TableLimitExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TableLimitExceededFault(body.Error, context);
  const exception = new TableLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTableRestoreNotFoundFaultRes
 */
const de_TableRestoreNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableRestoreNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TableRestoreNotFoundFault(body.Error, context);
  const exception = new TableRestoreNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTagLimitExceededFaultRes
 */
const de_TagLimitExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagLimitExceededFault(body.Error, context);
  const exception = new TagLimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnauthorizedOperationRes
 */
const de_UnauthorizedOperationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnauthorizedOperation(body.Error, context);
  const exception = new UnauthorizedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnauthorizedPartnerIntegrationFaultRes
 */
const de_UnauthorizedPartnerIntegrationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedPartnerIntegrationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnauthorizedPartnerIntegrationFault(body.Error, context);
  const exception = new UnauthorizedPartnerIntegrationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnknownSnapshotCopyRegionFaultRes
 */
const de_UnknownSnapshotCopyRegionFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownSnapshotCopyRegionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnknownSnapshotCopyRegionFault(body.Error, context);
  const exception = new UnknownSnapshotCopyRegionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnsupportedOperationFaultRes
 */
const de_UnsupportedOperationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOperationFault(body.Error, context);
  const exception = new UnsupportedOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnsupportedOptionFaultRes
 */
const de_UnsupportedOptionFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOptionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOptionFault(body.Error, context);
  const exception = new UnsupportedOptionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUsageLimitAlreadyExistsFaultRes
 */
const de_UsageLimitAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UsageLimitAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UsageLimitAlreadyExistsFault(body.Error, context);
  const exception = new UsageLimitAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUsageLimitNotFoundFaultRes
 */
const de_UsageLimitNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UsageLimitNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UsageLimitNotFoundFault(body.Error, context);
  const exception = new UsageLimitNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAcceptReservedNodeExchangeInputMessage
 */
const se_AcceptReservedNodeExchangeInputMessage = (
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

/**
 * serializeAws_queryAssociateDataShareConsumerMessage
 */
const se_AssociateDataShareConsumerMessage = (
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

/**
 * serializeAws_queryAttributeNameList
 */
const se_AttributeNameList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage
 */
const se_AuthorizeClusterSecurityGroupIngressMessage = (
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

/**
 * serializeAws_queryAuthorizeDataShareMessage
 */
const se_AuthorizeDataShareMessage = (input: AuthorizeDataShareMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  if (input.ConsumerIdentifier != null) {
    entries["ConsumerIdentifier"] = input.ConsumerIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryAuthorizeEndpointAccessMessage
 */
const se_AuthorizeEndpointAccessMessage = (input: AuthorizeEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.Account != null) {
    entries["Account"] = input.Account;
  }
  if (input.VpcIds != null) {
    const memberEntries = se_VpcIdentifierList(input.VpcIds, context);
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

/**
 * serializeAws_queryAuthorizeSnapshotAccessMessage
 */
const se_AuthorizeSnapshotAccessMessage = (input: AuthorizeSnapshotAccessMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryBatchDeleteClusterSnapshotsRequest
 */
const se_BatchDeleteClusterSnapshotsRequest = (
  input: BatchDeleteClusterSnapshotsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Identifiers != null) {
    const memberEntries = se_DeleteClusterSnapshotMessageList(input.Identifiers, context);
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

/**
 * serializeAws_queryBatchModifyClusterSnapshotsMessage
 */
const se_BatchModifyClusterSnapshotsMessage = (
  input: BatchModifyClusterSnapshotsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SnapshotIdentifierList != null) {
    const memberEntries = se_SnapshotIdentifierList(input.SnapshotIdentifierList, context);
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

/**
 * serializeAws_queryCancelResizeMessage
 */
const se_CancelResizeMessage = (input: CancelResizeMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryClusterSecurityGroupNameList
 */
const se_ClusterSecurityGroupNameList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryCopyClusterSnapshotMessage
 */
const se_CopyClusterSnapshotMessage = (input: CopyClusterSnapshotMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryCreateAuthenticationProfileMessage
 */
const se_CreateAuthenticationProfileMessage = (
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

/**
 * serializeAws_queryCreateClusterMessage
 */
const se_CreateClusterMessage = (input: CreateClusterMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_ClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
    if (input.ClusterSecurityGroups?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
    const memberEntries = se_TagList(input.Tags, context);
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
    const memberEntries = se_IamRoleArnList(input.IamRoles, context);
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

/**
 * serializeAws_queryCreateClusterParameterGroupMessage
 */
const se_CreateClusterParameterGroupMessage = (
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
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateClusterSecurityGroupMessage
 */
const se_CreateClusterSecurityGroupMessage = (
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
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateClusterSnapshotMessage
 */
const se_CreateClusterSnapshotMessage = (input: CreateClusterSnapshotMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateClusterSubnetGroupMessage
 */
const se_CreateClusterSubnetGroupMessage = (input: CreateClusterSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.SubnetIds != null) {
    const memberEntries = se_SubnetIdentifierList(input.SubnetIds, context);
    if (input.SubnetIds?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateCustomDomainAssociationMessage
 */
const se_CreateCustomDomainAssociationMessage = (
  input: CreateCustomDomainAssociationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CustomDomainName != null) {
    entries["CustomDomainName"] = input.CustomDomainName;
  }
  if (input.CustomDomainCertificateArn != null) {
    entries["CustomDomainCertificateArn"] = input.CustomDomainCertificateArn;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryCreateEndpointAccessMessage
 */
const se_CreateEndpointAccessMessage = (input: CreateEndpointAccessMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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

/**
 * serializeAws_queryCreateEventSubscriptionMessage
 */
const se_CreateEventSubscriptionMessage = (input: CreateEventSubscriptionMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_SourceIdsList(input.SourceIds, context);
    if (input.SourceIds?.length === 0) {
      entries.SourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EventCategories != null) {
    const memberEntries = se_EventCategoriesList(input.EventCategories, context);
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
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateHsmClientCertificateMessage
 */
const se_CreateHsmClientCertificateMessage = (
  input: CreateHsmClientCertificateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HsmClientCertificateIdentifier != null) {
    entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateHsmConfigurationMessage
 */
const se_CreateHsmConfigurationMessage = (input: CreateHsmConfigurationMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateScheduledActionMessage
 */
const se_CreateScheduledActionMessage = (input: CreateScheduledActionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.TargetAction != null) {
    const memberEntries = se_ScheduledActionType(input.TargetAction, context);
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

/**
 * serializeAws_queryCreateSnapshotCopyGrantMessage
 */
const se_CreateSnapshotCopyGrantMessage = (input: CreateSnapshotCopyGrantMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SnapshotCopyGrantName != null) {
    entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
  }
  if (input.KmsKeyId != null) {
    entries["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateSnapshotScheduleMessage
 */
const se_CreateSnapshotScheduleMessage = (input: CreateSnapshotScheduleMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ScheduleDefinitions != null) {
    const memberEntries = se_ScheduleDefinitionList(input.ScheduleDefinitions, context);
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
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateTagsMessage
 */
const se_CreateTagsMessage = (input: CreateTagsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryCreateUsageLimitMessage
 */
const se_CreateUsageLimitMessage = (input: CreateUsageLimitMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_TagList(input.Tags, context);
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

/**
 * serializeAws_queryDbGroupList
 */
const se_DbGroupList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDeauthorizeDataShareMessage
 */
const se_DeauthorizeDataShareMessage = (input: DeauthorizeDataShareMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  if (input.ConsumerIdentifier != null) {
    entries["ConsumerIdentifier"] = input.ConsumerIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAuthenticationProfileMessage
 */
const se_DeleteAuthenticationProfileMessage = (
  input: DeleteAuthenticationProfileMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticationProfileName != null) {
    entries["AuthenticationProfileName"] = input.AuthenticationProfileName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteClusterMessage
 */
const se_DeleteClusterMessage = (input: DeleteClusterMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDeleteClusterParameterGroupMessage
 */
const se_DeleteClusterParameterGroupMessage = (
  input: DeleteClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupName != null) {
    entries["ParameterGroupName"] = input.ParameterGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteClusterSecurityGroupMessage
 */
const se_DeleteClusterSecurityGroupMessage = (
  input: DeleteClusterSecurityGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterSecurityGroupName != null) {
    entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteClusterSnapshotMessage
 */
const se_DeleteClusterSnapshotMessage = (input: DeleteClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SnapshotIdentifier != null) {
    entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
  }
  if (input.SnapshotClusterIdentifier != null) {
    entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteClusterSnapshotMessageList
 */
const se_DeleteClusterSnapshotMessageList = (input: DeleteClusterSnapshotMessage[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_DeleteClusterSnapshotMessage(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`DeleteClusterSnapshotMessage.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteClusterSubnetGroupMessage
 */
const se_DeleteClusterSubnetGroupMessage = (input: DeleteClusterSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCustomDomainAssociationMessage
 */
const se_DeleteCustomDomainAssociationMessage = (
  input: DeleteCustomDomainAssociationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteEndpointAccessMessage
 */
const se_DeleteEndpointAccessMessage = (input: DeleteEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EndpointName != null) {
    entries["EndpointName"] = input.EndpointName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteEventSubscriptionMessage
 */
const se_DeleteEventSubscriptionMessage = (input: DeleteEventSubscriptionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SubscriptionName != null) {
    entries["SubscriptionName"] = input.SubscriptionName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteHsmClientCertificateMessage
 */
const se_DeleteHsmClientCertificateMessage = (
  input: DeleteHsmClientCertificateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HsmClientCertificateIdentifier != null) {
    entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteHsmConfigurationMessage
 */
const se_DeleteHsmConfigurationMessage = (input: DeleteHsmConfigurationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.HsmConfigurationIdentifier != null) {
    entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteScheduledActionMessage
 */
const se_DeleteScheduledActionMessage = (input: DeleteScheduledActionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSnapshotCopyGrantMessage
 */
const se_DeleteSnapshotCopyGrantMessage = (input: DeleteSnapshotCopyGrantMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SnapshotCopyGrantName != null) {
    entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSnapshotScheduleMessage
 */
const se_DeleteSnapshotScheduleMessage = (input: DeleteSnapshotScheduleMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ScheduleIdentifier != null) {
    entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTagsMessage
 */
const se_DeleteTagsMessage = (input: DeleteTagsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_TagKeyList(input.TagKeys, context);
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

/**
 * serializeAws_queryDeleteUsageLimitMessage
 */
const se_DeleteUsageLimitMessage = (input: DeleteUsageLimitMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UsageLimitId != null) {
    entries["UsageLimitId"] = input.UsageLimitId;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountAttributesMessage
 */
const se_DescribeAccountAttributesMessage = (input: DescribeAccountAttributesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AttributeNames != null) {
    const memberEntries = se_AttributeNameList(input.AttributeNames, context);
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

/**
 * serializeAws_queryDescribeAuthenticationProfilesMessage
 */
const se_DescribeAuthenticationProfilesMessage = (
  input: DescribeAuthenticationProfilesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticationProfileName != null) {
    entries["AuthenticationProfileName"] = input.AuthenticationProfileName;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeClusterDbRevisionsMessage
 */
const se_DescribeClusterDbRevisionsMessage = (
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

/**
 * serializeAws_queryDescribeClusterParameterGroupsMessage
 */
const se_DescribeClusterParameterGroupsMessage = (
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeClusterParametersMessage
 */
const se_DescribeClusterParametersMessage = (input: DescribeClusterParametersMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDescribeClusterSecurityGroupsMessage
 */
const se_DescribeClusterSecurityGroupsMessage = (
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeClustersMessage
 */
const se_DescribeClustersMessage = (input: DescribeClustersMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeClusterSnapshotsMessage
 */
const se_DescribeClusterSnapshotsMessage = (input: DescribeClusterSnapshotsMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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
    const memberEntries = se_SnapshotSortingEntityList(input.SortingEntities, context);
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

/**
 * serializeAws_queryDescribeClusterSubnetGroupsMessage
 */
const se_DescribeClusterSubnetGroupsMessage = (
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeClusterTracksMessage
 */
const se_DescribeClusterTracksMessage = (input: DescribeClusterTracksMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDescribeClusterVersionsMessage
 */
const se_DescribeClusterVersionsMessage = (input: DescribeClusterVersionsMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDescribeCustomDomainAssociationsMessage
 */
const se_DescribeCustomDomainAssociationsMessage = (
  input: DescribeCustomDomainAssociationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CustomDomainName != null) {
    entries["CustomDomainName"] = input.CustomDomainName;
  }
  if (input.CustomDomainCertificateArn != null) {
    entries["CustomDomainCertificateArn"] = input.CustomDomainCertificateArn;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDataSharesForConsumerMessage
 */
const se_DescribeDataSharesForConsumerMessage = (
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

/**
 * serializeAws_queryDescribeDataSharesForProducerMessage
 */
const se_DescribeDataSharesForProducerMessage = (
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

/**
 * serializeAws_queryDescribeDataSharesMessage
 */
const se_DescribeDataSharesMessage = (input: DescribeDataSharesMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDescribeDefaultClusterParametersMessage
 */
const se_DescribeDefaultClusterParametersMessage = (
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

/**
 * serializeAws_queryDescribeEndpointAccessMessage
 */
const se_DescribeEndpointAccessMessage = (input: DescribeEndpointAccessMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDescribeEndpointAuthorizationMessage
 */
const se_DescribeEndpointAuthorizationMessage = (
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

/**
 * serializeAws_queryDescribeEventCategoriesMessage
 */
const se_DescribeEventCategoriesMessage = (input: DescribeEventCategoriesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEventsMessage
 */
const se_DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDescribeEventSubscriptionsMessage
 */
const se_DescribeEventSubscriptionsMessage = (
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeHsmClientCertificatesMessage
 */
const se_DescribeHsmClientCertificatesMessage = (
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeHsmConfigurationsMessage
 */
const se_DescribeHsmConfigurationsMessage = (input: DescribeHsmConfigurationsMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeLoggingStatusMessage
 */
const se_DescribeLoggingStatusMessage = (input: DescribeLoggingStatusMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeNodeConfigurationOptionsMessage
 */
const se_DescribeNodeConfigurationOptionsMessage = (
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
    const memberEntries = se_NodeConfigurationOptionsFilterList(input.Filters, context);
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

/**
 * serializeAws_queryDescribeOrderableClusterOptionsMessage
 */
const se_DescribeOrderableClusterOptionsMessage = (
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

/**
 * serializeAws_queryDescribePartnersInputMessage
 */
const se_DescribePartnersInputMessage = (input: DescribePartnersInputMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDescribeReservedNodeExchangeStatusInputMessage
 */
const se_DescribeReservedNodeExchangeStatusInputMessage = (
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

/**
 * serializeAws_queryDescribeReservedNodeOfferingsMessage
 */
const se_DescribeReservedNodeOfferingsMessage = (
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

/**
 * serializeAws_queryDescribeReservedNodesMessage
 */
const se_DescribeReservedNodesMessage = (input: DescribeReservedNodesMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryDescribeResizeMessage
 */
const se_DescribeResizeMessage = (input: DescribeResizeMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeScheduledActionsMessage
 */
const se_DescribeScheduledActionsMessage = (input: DescribeScheduledActionsMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_ScheduledActionFilterList(input.Filters, context);
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

/**
 * serializeAws_queryDescribeSnapshotCopyGrantsMessage
 */
const se_DescribeSnapshotCopyGrantsMessage = (
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeSnapshotSchedulesMessage
 */
const se_DescribeSnapshotSchedulesMessage = (input: DescribeSnapshotSchedulesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.ScheduleIdentifier != null) {
    entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeTableRestoreStatusMessage
 */
const se_DescribeTableRestoreStatusMessage = (
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

/**
 * serializeAws_queryDescribeTagsMessage
 */
const se_DescribeTagsMessage = (input: DescribeTagsMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDescribeUsageLimitsMessage
 */
const se_DescribeUsageLimitsMessage = (input: DescribeUsageLimitsMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagValues != null) {
    const memberEntries = se_TagValueList(input.TagValues, context);
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

/**
 * serializeAws_queryDisableLoggingMessage
 */
const se_DisableLoggingMessage = (input: DisableLoggingMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDisableSnapshotCopyMessage
 */
const se_DisableSnapshotCopyMessage = (input: DisableSnapshotCopyMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryDisassociateDataShareConsumerMessage
 */
const se_DisassociateDataShareConsumerMessage = (
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

/**
 * serializeAws_queryEnableLoggingMessage
 */
const se_EnableLoggingMessage = (input: EnableLoggingMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_LogTypeList(input.LogExports, context);
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

/**
 * serializeAws_queryEnableSnapshotCopyMessage
 */
const se_EnableSnapshotCopyMessage = (input: EnableSnapshotCopyMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryEventCategoriesList
 */
const se_EventCategoriesList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryGetClusterCredentialsMessage
 */
const se_GetClusterCredentialsMessage = (input: GetClusterCredentialsMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_DbGroupList(input.DbGroups, context);
    if (input.DbGroups?.length === 0) {
      entries.DbGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DbGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomDomainName != null) {
    entries["CustomDomainName"] = input.CustomDomainName;
  }
  return entries;
};

/**
 * serializeAws_queryGetClusterCredentialsWithIAMMessage
 */
const se_GetClusterCredentialsWithIAMMessage = (
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
  if (input.CustomDomainName != null) {
    entries["CustomDomainName"] = input.CustomDomainName;
  }
  return entries;
};

/**
 * serializeAws_queryGetReservedNodeExchangeConfigurationOptionsInputMessage
 */
const se_GetReservedNodeExchangeConfigurationOptionsInputMessage = (
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

/**
 * serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage
 */
const se_GetReservedNodeExchangeOfferingsInputMessage = (
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

/**
 * serializeAws_queryIamRoleArnList
 */
const se_IamRoleArnList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryLogTypeList
 */
const se_LogTypeList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryModifyAquaInputMessage
 */
const se_ModifyAquaInputMessage = (input: ModifyAquaInputMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.AquaConfigurationStatus != null) {
    entries["AquaConfigurationStatus"] = input.AquaConfigurationStatus;
  }
  return entries;
};

/**
 * serializeAws_queryModifyAuthenticationProfileMessage
 */
const se_ModifyAuthenticationProfileMessage = (
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

/**
 * serializeAws_queryModifyClusterDbRevisionMessage
 */
const se_ModifyClusterDbRevisionMessage = (input: ModifyClusterDbRevisionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.RevisionTarget != null) {
    entries["RevisionTarget"] = input.RevisionTarget;
  }
  return entries;
};

/**
 * serializeAws_queryModifyClusterIamRolesMessage
 */
const se_ModifyClusterIamRolesMessage = (input: ModifyClusterIamRolesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.AddIamRoles != null) {
    const memberEntries = se_IamRoleArnList(input.AddIamRoles, context);
    if (input.AddIamRoles?.length === 0) {
      entries.AddIamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AddIamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RemoveIamRoles != null) {
    const memberEntries = se_IamRoleArnList(input.RemoveIamRoles, context);
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

/**
 * serializeAws_queryModifyClusterMaintenanceMessage
 */
const se_ModifyClusterMaintenanceMessage = (input: ModifyClusterMaintenanceMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryModifyClusterMessage
 */
const se_ModifyClusterMessage = (input: ModifyClusterMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_ClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
    if (input.ClusterSecurityGroups?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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

/**
 * serializeAws_queryModifyClusterParameterGroupMessage
 */
const se_ModifyClusterParameterGroupMessage = (
  input: ModifyClusterParameterGroupMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ParameterGroupName != null) {
    entries["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.Parameters != null) {
    const memberEntries = se_ParametersList(input.Parameters, context);
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

/**
 * serializeAws_queryModifyClusterSnapshotMessage
 */
const se_ModifyClusterSnapshotMessage = (input: ModifyClusterSnapshotMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryModifyClusterSnapshotScheduleMessage
 */
const se_ModifyClusterSnapshotScheduleMessage = (
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

/**
 * serializeAws_queryModifyClusterSubnetGroupMessage
 */
const se_ModifyClusterSubnetGroupMessage = (input: ModifyClusterSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterSubnetGroupName != null) {
    entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.SubnetIds != null) {
    const memberEntries = se_SubnetIdentifierList(input.SubnetIds, context);
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

/**
 * serializeAws_queryModifyCustomDomainAssociationMessage
 */
const se_ModifyCustomDomainAssociationMessage = (
  input: ModifyCustomDomainAssociationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CustomDomainName != null) {
    entries["CustomDomainName"] = input.CustomDomainName;
  }
  if (input.CustomDomainCertificateArn != null) {
    entries["CustomDomainCertificateArn"] = input.CustomDomainCertificateArn;
  }
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryModifyEndpointAccessMessage
 */
const se_ModifyEndpointAccessMessage = (input: ModifyEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EndpointName != null) {
    entries["EndpointName"] = input.EndpointName;
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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

/**
 * serializeAws_queryModifyEventSubscriptionMessage
 */
const se_ModifyEventSubscriptionMessage = (input: ModifyEventSubscriptionMessage, context: __SerdeContext): any => {
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
    const memberEntries = se_SourceIdsList(input.SourceIds, context);
    if (input.SourceIds?.length === 0) {
      entries.SourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EventCategories != null) {
    const memberEntries = se_EventCategoriesList(input.EventCategories, context);
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

/**
 * serializeAws_queryModifyScheduledActionMessage
 */
const se_ModifyScheduledActionMessage = (input: ModifyScheduledActionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.TargetAction != null) {
    const memberEntries = se_ScheduledActionType(input.TargetAction, context);
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

/**
 * serializeAws_queryModifySnapshotCopyRetentionPeriodMessage
 */
const se_ModifySnapshotCopyRetentionPeriodMessage = (
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

/**
 * serializeAws_queryModifySnapshotScheduleMessage
 */
const se_ModifySnapshotScheduleMessage = (input: ModifySnapshotScheduleMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ScheduleIdentifier != null) {
    entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
  }
  if (input.ScheduleDefinitions != null) {
    const memberEntries = se_ScheduleDefinitionList(input.ScheduleDefinitions, context);
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

/**
 * serializeAws_queryModifyUsageLimitMessage
 */
const se_ModifyUsageLimitMessage = (input: ModifyUsageLimitMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryNodeConfigurationOptionsFilter
 */
const se_NodeConfigurationOptionsFilter = (input: NodeConfigurationOptionsFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Operator != null) {
    entries["Operator"] = input.Operator;
  }
  if (input.Values != null) {
    const memberEntries = se_ValueStringList(input.Values, context);
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

/**
 * serializeAws_queryNodeConfigurationOptionsFilterList
 */
const se_NodeConfigurationOptionsFilterList = (
  input: NodeConfigurationOptionsFilter[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_NodeConfigurationOptionsFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`NodeConfigurationOptionsFilter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryParameter
 */
const se_Parameter = (input: Parameter, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryParametersList
 */
const se_ParametersList = (input: Parameter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Parameter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Parameter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPartnerIntegrationInputMessage
 */
const se_PartnerIntegrationInputMessage = (input: PartnerIntegrationInputMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryPauseClusterMessage
 */
const se_PauseClusterMessage = (input: PauseClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryPurchaseReservedNodeOfferingMessage
 */
const se_PurchaseReservedNodeOfferingMessage = (
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

/**
 * serializeAws_queryRebootClusterMessage
 */
const se_RebootClusterMessage = (input: RebootClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryRejectDataShareMessage
 */
const se_RejectDataShareMessage = (input: RejectDataShareMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DataShareArn != null) {
    entries["DataShareArn"] = input.DataShareArn;
  }
  return entries;
};

/**
 * serializeAws_queryResetClusterParameterGroupMessage
 */
const se_ResetClusterParameterGroupMessage = (
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
    const memberEntries = se_ParametersList(input.Parameters, context);
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

/**
 * serializeAws_queryResizeClusterMessage
 */
const se_ResizeClusterMessage = (input: ResizeClusterMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryRestoreFromClusterSnapshotMessage
 */
const se_RestoreFromClusterSnapshotMessage = (
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
    const memberEntries = se_ClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
    if (input.ClusterSecurityGroups?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VpcSecurityGroupIds != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
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
    const memberEntries = se_IamRoleArnList(input.IamRoles, context);
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

/**
 * serializeAws_queryRestoreTableFromClusterSnapshotMessage
 */
const se_RestoreTableFromClusterSnapshotMessage = (
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

/**
 * serializeAws_queryResumeClusterMessage
 */
const se_ResumeClusterMessage = (input: ResumeClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryRevokeClusterSecurityGroupIngressMessage
 */
const se_RevokeClusterSecurityGroupIngressMessage = (
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

/**
 * serializeAws_queryRevokeEndpointAccessMessage
 */
const se_RevokeEndpointAccessMessage = (input: RevokeEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  if (input.Account != null) {
    entries["Account"] = input.Account;
  }
  if (input.VpcIds != null) {
    const memberEntries = se_VpcIdentifierList(input.VpcIds, context);
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

/**
 * serializeAws_queryRevokeSnapshotAccessMessage
 */
const se_RevokeSnapshotAccessMessage = (input: RevokeSnapshotAccessMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryRotateEncryptionKeyMessage
 */
const se_RotateEncryptionKeyMessage = (input: RotateEncryptionKeyMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ClusterIdentifier != null) {
    entries["ClusterIdentifier"] = input.ClusterIdentifier;
  }
  return entries;
};

/**
 * serializeAws_queryScheduledActionFilter
 */
const se_ScheduledActionFilter = (input: ScheduledActionFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Values != null) {
    const memberEntries = se_ValueStringList(input.Values, context);
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

/**
 * serializeAws_queryScheduledActionFilterList
 */
const se_ScheduledActionFilterList = (input: ScheduledActionFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ScheduledActionFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`ScheduledActionFilter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryScheduledActionType
 */
const se_ScheduledActionType = (input: ScheduledActionType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResizeCluster != null) {
    const memberEntries = se_ResizeClusterMessage(input.ResizeCluster, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResizeCluster.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PauseCluster != null) {
    const memberEntries = se_PauseClusterMessage(input.PauseCluster, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PauseCluster.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResumeCluster != null) {
    const memberEntries = se_ResumeClusterMessage(input.ResumeCluster, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResumeCluster.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryScheduleDefinitionList
 */
const se_ScheduleDefinitionList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_querySnapshotIdentifierList
 */
const se_SnapshotIdentifierList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_querySnapshotSortingEntity
 */
const se_SnapshotSortingEntity = (input: SnapshotSortingEntity, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Attribute != null) {
    entries["Attribute"] = input.Attribute;
  }
  if (input.SortOrder != null) {
    entries["SortOrder"] = input.SortOrder;
  }
  return entries;
};

/**
 * serializeAws_querySnapshotSortingEntityList
 */
const se_SnapshotSortingEntityList = (input: SnapshotSortingEntity[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_SnapshotSortingEntity(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`SnapshotSortingEntity.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySourceIdsList
 */
const se_SourceIdsList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_querySubnetIdentifierList
 */
const se_SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryTagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Tag.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagValueList
 */
const se_TagValueList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryUpdatePartnerStatusInputMessage
 */
const se_UpdatePartnerStatusInputMessage = (input: UpdatePartnerStatusInputMessage, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryValueStringList
 */
const se_ValueStringList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryVpcIdentifierList
 */
const se_VpcIdentifierList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryVpcSecurityGroupIdList
 */
const se_VpcSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
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

/**
 * deserializeAws_queryAcceptReservedNodeExchangeOutputMessage
 */
const de_AcceptReservedNodeExchangeOutputMessage = (
  output: any,
  context: __SerdeContext
): AcceptReservedNodeExchangeOutputMessage => {
  const contents: any = {};
  if (output["ExchangedReservedNode"] !== undefined) {
    contents.ExchangedReservedNode = de_ReservedNode(output["ExchangedReservedNode"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAccessToClusterDeniedFault
 */
const de_AccessToClusterDeniedFault = (output: any, context: __SerdeContext): AccessToClusterDeniedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccessToSnapshotDeniedFault
 */
const de_AccessToSnapshotDeniedFault = (output: any, context: __SerdeContext): AccessToSnapshotDeniedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccountAttribute
 */
const de_AccountAttribute = (output: any, context: __SerdeContext): AccountAttribute => {
  const contents: any = {};
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName = __expectString(output["AttributeName"]);
  }
  if (output.AttributeValues === "") {
    contents.AttributeValues = [];
  } else if (
    output["AttributeValues"] !== undefined &&
    output["AttributeValues"]["AttributeValueTarget"] !== undefined
  ) {
    contents.AttributeValues = de_AttributeValueList(
      __getArrayIfSingleItem(output["AttributeValues"]["AttributeValueTarget"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryAccountAttributeList
 */
const de_AccountAttributeList = (output: any, context: __SerdeContext): AccountAttributeList => {
  const contents: any = {};
  if (output.AccountAttributes === "") {
    contents.AccountAttributes = [];
  } else if (
    output["AccountAttributes"] !== undefined &&
    output["AccountAttributes"]["AccountAttribute"] !== undefined
  ) {
    contents.AccountAttributes = de_AttributeList(
      __getArrayIfSingleItem(output["AccountAttributes"]["AccountAttribute"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryAccountsWithRestoreAccessList
 */
const de_AccountsWithRestoreAccessList = (output: any, context: __SerdeContext): AccountWithRestoreAccess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountWithRestoreAccess(entry, context);
    });
};

/**
 * deserializeAws_queryAccountWithRestoreAccess
 */
const de_AccountWithRestoreAccess = (output: any, context: __SerdeContext): AccountWithRestoreAccess => {
  const contents: any = {};
  if (output["AccountId"] !== undefined) {
    contents.AccountId = __expectString(output["AccountId"]);
  }
  if (output["AccountAlias"] !== undefined) {
    contents.AccountAlias = __expectString(output["AccountAlias"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAquaConfiguration
 */
const de_AquaConfiguration = (output: any, context: __SerdeContext): AquaConfiguration => {
  const contents: any = {};
  if (output["AquaStatus"] !== undefined) {
    contents.AquaStatus = __expectString(output["AquaStatus"]);
  }
  if (output["AquaConfigurationStatus"] !== undefined) {
    contents.AquaConfigurationStatus = __expectString(output["AquaConfigurationStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAssociatedClusterList
 */
const de_AssociatedClusterList = (output: any, context: __SerdeContext): ClusterAssociatedToSchedule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterAssociatedToSchedule(entry, context);
    });
};

/**
 * deserializeAws_queryAssociation
 */
const de_Association = (output: any, context: __SerdeContext): Association => {
  const contents: any = {};
  if (output["CustomDomainCertificateArn"] !== undefined) {
    contents.CustomDomainCertificateArn = __expectString(output["CustomDomainCertificateArn"]);
  }
  if (output["CustomDomainCertificateExpiryDate"] !== undefined) {
    contents.CustomDomainCertificateExpiryDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["CustomDomainCertificateExpiryDate"])
    );
  }
  if (output.CertificateAssociations === "") {
    contents.CertificateAssociations = [];
  } else if (
    output["CertificateAssociations"] !== undefined &&
    output["CertificateAssociations"]["CertificateAssociation"] !== undefined
  ) {
    contents.CertificateAssociations = de_CertificateAssociationList(
      __getArrayIfSingleItem(output["CertificateAssociations"]["CertificateAssociation"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryAssociationList
 */
const de_AssociationList = (output: any, context: __SerdeContext): Association[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Association(entry, context);
    });
};

/**
 * deserializeAws_queryAttributeList
 */
const de_AttributeList = (output: any, context: __SerdeContext): AccountAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountAttribute(entry, context);
    });
};

/**
 * deserializeAws_queryAttributeValueList
 */
const de_AttributeValueList = (output: any, context: __SerdeContext): AttributeValueTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeValueTarget(entry, context);
    });
};

/**
 * deserializeAws_queryAttributeValueTarget
 */
const de_AttributeValueTarget = (output: any, context: __SerdeContext): AttributeValueTarget => {
  const contents: any = {};
  if (output["AttributeValue"] !== undefined) {
    contents.AttributeValue = __expectString(output["AttributeValue"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticationProfile
 */
const de_AuthenticationProfile = (output: any, context: __SerdeContext): AuthenticationProfile => {
  const contents: any = {};
  if (output["AuthenticationProfileName"] !== undefined) {
    contents.AuthenticationProfileName = __expectString(output["AuthenticationProfileName"]);
  }
  if (output["AuthenticationProfileContent"] !== undefined) {
    contents.AuthenticationProfileContent = __expectString(output["AuthenticationProfileContent"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticationProfileAlreadyExistsFault
 */
const de_AuthenticationProfileAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): AuthenticationProfileAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticationProfileList
 */
const de_AuthenticationProfileList = (output: any, context: __SerdeContext): AuthenticationProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuthenticationProfile(entry, context);
    });
};

/**
 * deserializeAws_queryAuthenticationProfileNotFoundFault
 */
const de_AuthenticationProfileNotFoundFault = (
  output: any,
  context: __SerdeContext
): AuthenticationProfileNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticationProfileQuotaExceededFault
 */
const de_AuthenticationProfileQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): AuthenticationProfileQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationAlreadyExistsFault
 */
const de_AuthorizationAlreadyExistsFault = (output: any, context: __SerdeContext): AuthorizationAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationNotFoundFault
 */
const de_AuthorizationNotFoundFault = (output: any, context: __SerdeContext): AuthorizationNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationQuotaExceededFault
 */
const de_AuthorizationQuotaExceededFault = (output: any, context: __SerdeContext): AuthorizationQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult
 */
const de_AuthorizeClusterSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): AuthorizeClusterSecurityGroupIngressResult => {
  const contents: any = {};
  if (output["ClusterSecurityGroup"] !== undefined) {
    contents.ClusterSecurityGroup = de_ClusterSecurityGroup(output["ClusterSecurityGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizeSnapshotAccessResult
 */
const de_AuthorizeSnapshotAccessResult = (output: any, context: __SerdeContext): AuthorizeSnapshotAccessResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output.SupportedPlatforms === "") {
    contents.SupportedPlatforms = [];
  } else if (
    output["SupportedPlatforms"] !== undefined &&
    output["SupportedPlatforms"]["SupportedPlatform"] !== undefined
  ) {
    contents.SupportedPlatforms = de_SupportedPlatformsList(
      __getArrayIfSingleItem(output["SupportedPlatforms"]["SupportedPlatform"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZoneList
 */
const de_AvailabilityZoneList = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AvailabilityZone(entry, context);
    });
};

/**
 * deserializeAws_queryBatchDeleteClusterSnapshotsResult
 */
const de_BatchDeleteClusterSnapshotsResult = (
  output: any,
  context: __SerdeContext
): BatchDeleteClusterSnapshotsResult => {
  const contents: any = {};
  if (output.Resources === "") {
    contents.Resources = [];
  } else if (output["Resources"] !== undefined && output["Resources"]["String"] !== undefined) {
    contents.Resources = de_SnapshotIdentifierList(__getArrayIfSingleItem(output["Resources"]["String"]), context);
  }
  if (output.Errors === "") {
    contents.Errors = [];
  } else if (output["Errors"] !== undefined && output["Errors"]["SnapshotErrorMessage"] !== undefined) {
    contents.Errors = de_BatchSnapshotOperationErrorList(
      __getArrayIfSingleItem(output["Errors"]["SnapshotErrorMessage"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryBatchDeleteRequestSizeExceededFault
 */
const de_BatchDeleteRequestSizeExceededFault = (
  output: any,
  context: __SerdeContext
): BatchDeleteRequestSizeExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault
 */
const de_BatchModifyClusterSnapshotsLimitExceededFault = (
  output: any,
  context: __SerdeContext
): BatchModifyClusterSnapshotsLimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage
 */
const de_BatchModifyClusterSnapshotsOutputMessage = (
  output: any,
  context: __SerdeContext
): BatchModifyClusterSnapshotsOutputMessage => {
  const contents: any = {};
  if (output.Resources === "") {
    contents.Resources = [];
  } else if (output["Resources"] !== undefined && output["Resources"]["String"] !== undefined) {
    contents.Resources = de_SnapshotIdentifierList(__getArrayIfSingleItem(output["Resources"]["String"]), context);
  }
  if (output.Errors === "") {
    contents.Errors = [];
  } else if (output["Errors"] !== undefined && output["Errors"]["SnapshotErrorMessage"] !== undefined) {
    contents.Errors = de_BatchSnapshotOperationErrors(
      __getArrayIfSingleItem(output["Errors"]["SnapshotErrorMessage"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryBatchSnapshotOperationErrorList
 */
const de_BatchSnapshotOperationErrorList = (output: any, context: __SerdeContext): SnapshotErrorMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SnapshotErrorMessage(entry, context);
    });
};

/**
 * deserializeAws_queryBatchSnapshotOperationErrors
 */
const de_BatchSnapshotOperationErrors = (output: any, context: __SerdeContext): SnapshotErrorMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SnapshotErrorMessage(entry, context);
    });
};

/**
 * deserializeAws_queryBucketNotFoundFault
 */
const de_BucketNotFoundFault = (output: any, context: __SerdeContext): BucketNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateAssociation
 */
const de_CertificateAssociation = (output: any, context: __SerdeContext): CertificateAssociation => {
  const contents: any = {};
  if (output["CustomDomainName"] !== undefined) {
    contents.CustomDomainName = __expectString(output["CustomDomainName"]);
  }
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateAssociationList
 */
const de_CertificateAssociationList = (output: any, context: __SerdeContext): CertificateAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CertificateAssociation(entry, context);
    });
};

/**
 * deserializeAws_queryCluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  const contents: any = {};
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
    contents.Endpoint = de_Endpoint(output["Endpoint"], context);
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
    contents.ClusterSecurityGroups = de_ClusterSecurityGroupMembershipList(
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
    contents.VpcSecurityGroups = de_VpcSecurityGroupMembershipList(
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
    contents.ClusterParameterGroups = de_ClusterParameterGroupStatusList(
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
    contents.PendingModifiedValues = de_PendingModifiedValues(output["PendingModifiedValues"], context);
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
    contents.RestoreStatus = de_RestoreStatus(output["RestoreStatus"], context);
  }
  if (output["DataTransferProgress"] !== undefined) {
    contents.DataTransferProgress = de_DataTransferProgress(output["DataTransferProgress"], context);
  }
  if (output["HsmStatus"] !== undefined) {
    contents.HsmStatus = de_HsmStatus(output["HsmStatus"], context);
  }
  if (output["ClusterSnapshotCopyStatus"] !== undefined) {
    contents.ClusterSnapshotCopyStatus = de_ClusterSnapshotCopyStatus(output["ClusterSnapshotCopyStatus"], context);
  }
  if (output["ClusterPublicKey"] !== undefined) {
    contents.ClusterPublicKey = __expectString(output["ClusterPublicKey"]);
  }
  if (output.ClusterNodes === "") {
    contents.ClusterNodes = [];
  } else if (output["ClusterNodes"] !== undefined && output["ClusterNodes"]["member"] !== undefined) {
    contents.ClusterNodes = de_ClusterNodesList(__getArrayIfSingleItem(output["ClusterNodes"]["member"]), context);
  }
  if (output["ElasticIpStatus"] !== undefined) {
    contents.ElasticIpStatus = de_ElasticIpStatus(output["ElasticIpStatus"], context);
  }
  if (output["ClusterRevisionNumber"] !== undefined) {
    contents.ClusterRevisionNumber = __expectString(output["ClusterRevisionNumber"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
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
    contents.IamRoles = de_ClusterIamRoleList(__getArrayIfSingleItem(output["IamRoles"]["ClusterIamRole"]), context);
  }
  if (output.PendingActions === "") {
    contents.PendingActions = [];
  } else if (output["PendingActions"] !== undefined && output["PendingActions"]["member"] !== undefined) {
    contents.PendingActions = de_PendingActionsList(
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
    contents.DeferredMaintenanceWindows = de_DeferredMaintenanceWindowsList(
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
    contents.ResizeInfo = de_ResizeInfo(output["ResizeInfo"], context);
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
    contents.AquaConfiguration = de_AquaConfiguration(output["AquaConfiguration"], context);
  }
  if (output["DefaultIamRoleArn"] !== undefined) {
    contents.DefaultIamRoleArn = __expectString(output["DefaultIamRoleArn"]);
  }
  if (output["ReservedNodeExchangeStatus"] !== undefined) {
    contents.ReservedNodeExchangeStatus = de_ReservedNodeExchangeStatus(output["ReservedNodeExchangeStatus"], context);
  }
  if (output["CustomDomainName"] !== undefined) {
    contents.CustomDomainName = __expectString(output["CustomDomainName"]);
  }
  if (output["CustomDomainCertificateArn"] !== undefined) {
    contents.CustomDomainCertificateArn = __expectString(output["CustomDomainCertificateArn"]);
  }
  if (output["CustomDomainCertificateExpiryDate"] !== undefined) {
    contents.CustomDomainCertificateExpiryDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["CustomDomainCertificateExpiryDate"])
    );
  }
  return contents;
};

/**
 * deserializeAws_queryClusterAlreadyExistsFault
 */
const de_ClusterAlreadyExistsFault = (output: any, context: __SerdeContext): ClusterAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterAssociatedToSchedule
 */
const de_ClusterAssociatedToSchedule = (output: any, context: __SerdeContext): ClusterAssociatedToSchedule => {
  const contents: any = {};
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["ScheduleAssociationState"] !== undefined) {
    contents.ScheduleAssociationState = __expectString(output["ScheduleAssociationState"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterCredentials
 */
const de_ClusterCredentials = (output: any, context: __SerdeContext): ClusterCredentials => {
  const contents: any = {};
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

/**
 * deserializeAws_queryClusterDbRevision
 */
const de_ClusterDbRevision = (output: any, context: __SerdeContext): ClusterDbRevision => {
  const contents: any = {};
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
    contents.RevisionTargets = de_RevisionTargetsList(
      __getArrayIfSingleItem(output["RevisionTargets"]["RevisionTarget"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryClusterDbRevisionsList
 */
const de_ClusterDbRevisionsList = (output: any, context: __SerdeContext): ClusterDbRevision[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterDbRevision(entry, context);
    });
};

/**
 * deserializeAws_queryClusterDbRevisionsMessage
 */
const de_ClusterDbRevisionsMessage = (output: any, context: __SerdeContext): ClusterDbRevisionsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ClusterDbRevisions === "") {
    contents.ClusterDbRevisions = [];
  } else if (
    output["ClusterDbRevisions"] !== undefined &&
    output["ClusterDbRevisions"]["ClusterDbRevision"] !== undefined
  ) {
    contents.ClusterDbRevisions = de_ClusterDbRevisionsList(
      __getArrayIfSingleItem(output["ClusterDbRevisions"]["ClusterDbRevision"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryClusterExtendedCredentials
 */
const de_ClusterExtendedCredentials = (output: any, context: __SerdeContext): ClusterExtendedCredentials => {
  const contents: any = {};
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

/**
 * deserializeAws_queryClusterIamRole
 */
const de_ClusterIamRole = (output: any, context: __SerdeContext): ClusterIamRole => {
  const contents: any = {};
  if (output["IamRoleArn"] !== undefined) {
    contents.IamRoleArn = __expectString(output["IamRoleArn"]);
  }
  if (output["ApplyStatus"] !== undefined) {
    contents.ApplyStatus = __expectString(output["ApplyStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterIamRoleList
 */
const de_ClusterIamRoleList = (output: any, context: __SerdeContext): ClusterIamRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterIamRole(entry, context);
    });
};

/**
 * deserializeAws_queryClusterList
 */
const de_ClusterList = (output: any, context: __SerdeContext): Cluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Cluster(entry, context);
    });
};

/**
 * deserializeAws_queryClusterNode
 */
const de_ClusterNode = (output: any, context: __SerdeContext): ClusterNode => {
  const contents: any = {};
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

/**
 * deserializeAws_queryClusterNodesList
 */
const de_ClusterNodesList = (output: any, context: __SerdeContext): ClusterNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterNode(entry, context);
    });
};

/**
 * deserializeAws_queryClusterNotFoundFault
 */
const de_ClusterNotFoundFault = (output: any, context: __SerdeContext): ClusterNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterOnLatestRevisionFault
 */
const de_ClusterOnLatestRevisionFault = (output: any, context: __SerdeContext): ClusterOnLatestRevisionFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroup
 */
const de_ClusterParameterGroup = (output: any, context: __SerdeContext): ClusterParameterGroup => {
  const contents: any = {};
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
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupAlreadyExistsFault
 */
const de_ClusterParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupDetails
 */
const de_ClusterParameterGroupDetails = (output: any, context: __SerdeContext): ClusterParameterGroupDetails => {
  const contents: any = {};
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = de_ParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupNameMessage
 */
const de_ClusterParameterGroupNameMessage = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupNameMessage => {
  const contents: any = {};
  if (output["ParameterGroupName"] !== undefined) {
    contents.ParameterGroupName = __expectString(output["ParameterGroupName"]);
  }
  if (output["ParameterGroupStatus"] !== undefined) {
    contents.ParameterGroupStatus = __expectString(output["ParameterGroupStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupNotFoundFault
 */
const de_ClusterParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupQuotaExceededFault
 */
const de_ClusterParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterParameterGroupQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupsMessage
 */
const de_ClusterParameterGroupsMessage = (output: any, context: __SerdeContext): ClusterParameterGroupsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ParameterGroups === "") {
    contents.ParameterGroups = [];
  } else if (
    output["ParameterGroups"] !== undefined &&
    output["ParameterGroups"]["ClusterParameterGroup"] !== undefined
  ) {
    contents.ParameterGroups = de_ParameterGroupList(
      __getArrayIfSingleItem(output["ParameterGroups"]["ClusterParameterGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupStatus
 */
const de_ClusterParameterGroupStatus = (output: any, context: __SerdeContext): ClusterParameterGroupStatus => {
  const contents: any = {};
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
    contents.ClusterParameterStatusList = de_ClusterParameterStatusList(
      __getArrayIfSingleItem(output["ClusterParameterStatusList"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupStatusList
 */
const de_ClusterParameterGroupStatusList = (output: any, context: __SerdeContext): ClusterParameterGroupStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterParameterGroupStatus(entry, context);
    });
};

/**
 * deserializeAws_queryClusterParameterStatus
 */
const de_ClusterParameterStatus = (output: any, context: __SerdeContext): ClusterParameterStatus => {
  const contents: any = {};
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

/**
 * deserializeAws_queryClusterParameterStatusList
 */
const de_ClusterParameterStatusList = (output: any, context: __SerdeContext): ClusterParameterStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterParameterStatus(entry, context);
    });
};

/**
 * deserializeAws_queryClusterQuotaExceededFault
 */
const de_ClusterQuotaExceededFault = (output: any, context: __SerdeContext): ClusterQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroup
 */
const de_ClusterSecurityGroup = (output: any, context: __SerdeContext): ClusterSecurityGroup => {
  const contents: any = {};
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
    contents.EC2SecurityGroups = de_EC2SecurityGroupList(
      __getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]),
      context
    );
  }
  if (output.IPRanges === "") {
    contents.IPRanges = [];
  } else if (output["IPRanges"] !== undefined && output["IPRanges"]["IPRange"] !== undefined) {
    contents.IPRanges = de_IPRangeList(__getArrayIfSingleItem(output["IPRanges"]["IPRange"]), context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroupAlreadyExistsFault
 */
const de_ClusterSecurityGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroupMembership
 */
const de_ClusterSecurityGroupMembership = (output: any, context: __SerdeContext): ClusterSecurityGroupMembership => {
  const contents: any = {};
  if (output["ClusterSecurityGroupName"] !== undefined) {
    contents.ClusterSecurityGroupName = __expectString(output["ClusterSecurityGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroupMembershipList
 */
const de_ClusterSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterSecurityGroupMembership(entry, context);
    });
};

/**
 * deserializeAws_queryClusterSecurityGroupMessage
 */
const de_ClusterSecurityGroupMessage = (output: any, context: __SerdeContext): ClusterSecurityGroupMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ClusterSecurityGroups === "") {
    contents.ClusterSecurityGroups = [];
  } else if (
    output["ClusterSecurityGroups"] !== undefined &&
    output["ClusterSecurityGroups"]["ClusterSecurityGroup"] !== undefined
  ) {
    contents.ClusterSecurityGroups = de_ClusterSecurityGroups(
      __getArrayIfSingleItem(output["ClusterSecurityGroups"]["ClusterSecurityGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroupNotFoundFault
 */
const de_ClusterSecurityGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroupQuotaExceededFault
 */
const de_ClusterSecurityGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterSecurityGroupQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroups
 */
const de_ClusterSecurityGroups = (output: any, context: __SerdeContext): ClusterSecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterSecurityGroup(entry, context);
    });
};

/**
 * deserializeAws_queryClustersMessage
 */
const de_ClustersMessage = (output: any, context: __SerdeContext): ClustersMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Clusters === "") {
    contents.Clusters = [];
  } else if (output["Clusters"] !== undefined && output["Clusters"]["Cluster"] !== undefined) {
    contents.Clusters = de_ClusterList(__getArrayIfSingleItem(output["Clusters"]["Cluster"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSnapshotAlreadyExistsFault
 */
const de_ClusterSnapshotAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterSnapshotAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSnapshotCopyStatus
 */
const de_ClusterSnapshotCopyStatus = (output: any, context: __SerdeContext): ClusterSnapshotCopyStatus => {
  const contents: any = {};
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

/**
 * deserializeAws_queryClusterSnapshotNotFoundFault
 */
const de_ClusterSnapshotNotFoundFault = (output: any, context: __SerdeContext): ClusterSnapshotNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSnapshotQuotaExceededFault
 */
const de_ClusterSnapshotQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterSnapshotQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroup
 */
const de_ClusterSubnetGroup = (output: any, context: __SerdeContext): ClusterSubnetGroup => {
  const contents: any = {};
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
    contents.Subnets = de_SubnetList(__getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroupAlreadyExistsFault
 */
const de_ClusterSubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterSubnetGroupAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroupMessage
 */
const de_ClusterSubnetGroupMessage = (output: any, context: __SerdeContext): ClusterSubnetGroupMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ClusterSubnetGroups === "") {
    contents.ClusterSubnetGroups = [];
  } else if (
    output["ClusterSubnetGroups"] !== undefined &&
    output["ClusterSubnetGroups"]["ClusterSubnetGroup"] !== undefined
  ) {
    contents.ClusterSubnetGroups = de_ClusterSubnetGroups(
      __getArrayIfSingleItem(output["ClusterSubnetGroups"]["ClusterSubnetGroup"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroupNotFoundFault
 */
const de_ClusterSubnetGroupNotFoundFault = (output: any, context: __SerdeContext): ClusterSubnetGroupNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroupQuotaExceededFault
 */
const de_ClusterSubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterSubnetGroupQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroups
 */
const de_ClusterSubnetGroups = (output: any, context: __SerdeContext): ClusterSubnetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterSubnetGroup(entry, context);
    });
};

/**
 * deserializeAws_queryClusterSubnetQuotaExceededFault
 */
const de_ClusterSubnetQuotaExceededFault = (output: any, context: __SerdeContext): ClusterSubnetQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterVersion
 */
const de_ClusterVersion = (output: any, context: __SerdeContext): ClusterVersion => {
  const contents: any = {};
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

/**
 * deserializeAws_queryClusterVersionList
 */
const de_ClusterVersionList = (output: any, context: __SerdeContext): ClusterVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterVersion(entry, context);
    });
};

/**
 * deserializeAws_queryClusterVersionsMessage
 */
const de_ClusterVersionsMessage = (output: any, context: __SerdeContext): ClusterVersionsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ClusterVersions === "") {
    contents.ClusterVersions = [];
  } else if (output["ClusterVersions"] !== undefined && output["ClusterVersions"]["ClusterVersion"] !== undefined) {
    contents.ClusterVersions = de_ClusterVersionList(
      __getArrayIfSingleItem(output["ClusterVersions"]["ClusterVersion"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCopyClusterSnapshotResult
 */
const de_CopyClusterSnapshotResult = (output: any, context: __SerdeContext): CopyClusterSnapshotResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyToRegionDisabledFault
 */
const de_CopyToRegionDisabledFault = (output: any, context: __SerdeContext): CopyToRegionDisabledFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateAuthenticationProfileResult
 */
const de_CreateAuthenticationProfileResult = (
  output: any,
  context: __SerdeContext
): CreateAuthenticationProfileResult => {
  const contents: any = {};
  if (output["AuthenticationProfileName"] !== undefined) {
    contents.AuthenticationProfileName = __expectString(output["AuthenticationProfileName"]);
  }
  if (output["AuthenticationProfileContent"] !== undefined) {
    contents.AuthenticationProfileContent = __expectString(output["AuthenticationProfileContent"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateClusterParameterGroupResult
 */
const de_CreateClusterParameterGroupResult = (
  output: any,
  context: __SerdeContext
): CreateClusterParameterGroupResult => {
  const contents: any = {};
  if (output["ClusterParameterGroup"] !== undefined) {
    contents.ClusterParameterGroup = de_ClusterParameterGroup(output["ClusterParameterGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateClusterResult
 */
const de_CreateClusterResult = (output: any, context: __SerdeContext): CreateClusterResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateClusterSecurityGroupResult
 */
const de_CreateClusterSecurityGroupResult = (
  output: any,
  context: __SerdeContext
): CreateClusterSecurityGroupResult => {
  const contents: any = {};
  if (output["ClusterSecurityGroup"] !== undefined) {
    contents.ClusterSecurityGroup = de_ClusterSecurityGroup(output["ClusterSecurityGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateClusterSnapshotResult
 */
const de_CreateClusterSnapshotResult = (output: any, context: __SerdeContext): CreateClusterSnapshotResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateClusterSubnetGroupResult
 */
const de_CreateClusterSubnetGroupResult = (output: any, context: __SerdeContext): CreateClusterSubnetGroupResult => {
  const contents: any = {};
  if (output["ClusterSubnetGroup"] !== undefined) {
    contents.ClusterSubnetGroup = de_ClusterSubnetGroup(output["ClusterSubnetGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateCustomDomainAssociationResult
 */
const de_CreateCustomDomainAssociationResult = (
  output: any,
  context: __SerdeContext
): CreateCustomDomainAssociationResult => {
  const contents: any = {};
  if (output["CustomDomainName"] !== undefined) {
    contents.CustomDomainName = __expectString(output["CustomDomainName"]);
  }
  if (output["CustomDomainCertificateArn"] !== undefined) {
    contents.CustomDomainCertificateArn = __expectString(output["CustomDomainCertificateArn"]);
  }
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["CustomDomainCertExpiryTime"] !== undefined) {
    contents.CustomDomainCertExpiryTime = __expectString(output["CustomDomainCertExpiryTime"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateEventSubscriptionResult
 */
const de_CreateEventSubscriptionResult = (output: any, context: __SerdeContext): CreateEventSubscriptionResult => {
  const contents: any = {};
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = de_EventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateHsmClientCertificateResult
 */
const de_CreateHsmClientCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateHsmClientCertificateResult => {
  const contents: any = {};
  if (output["HsmClientCertificate"] !== undefined) {
    contents.HsmClientCertificate = de_HsmClientCertificate(output["HsmClientCertificate"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateHsmConfigurationResult
 */
const de_CreateHsmConfigurationResult = (output: any, context: __SerdeContext): CreateHsmConfigurationResult => {
  const contents: any = {};
  if (output["HsmConfiguration"] !== undefined) {
    contents.HsmConfiguration = de_HsmConfiguration(output["HsmConfiguration"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateSnapshotCopyGrantResult
 */
const de_CreateSnapshotCopyGrantResult = (output: any, context: __SerdeContext): CreateSnapshotCopyGrantResult => {
  const contents: any = {};
  if (output["SnapshotCopyGrant"] !== undefined) {
    contents.SnapshotCopyGrant = de_SnapshotCopyGrant(output["SnapshotCopyGrant"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomCnameAssociationFault
 */
const de_CustomCnameAssociationFault = (output: any, context: __SerdeContext): CustomCnameAssociationFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomDomainAssociationNotFoundFault
 */
const de_CustomDomainAssociationNotFoundFault = (
  output: any,
  context: __SerdeContext
): CustomDomainAssociationNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomDomainAssociationsMessage
 */
const de_CustomDomainAssociationsMessage = (output: any, context: __SerdeContext): CustomDomainAssociationsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Associations === "") {
    contents.Associations = [];
  } else if (output["Associations"] !== undefined && output["Associations"]["Association"] !== undefined) {
    contents.Associations = de_AssociationList(__getArrayIfSingleItem(output["Associations"]["Association"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomerStorageMessage
 */
const de_CustomerStorageMessage = (output: any, context: __SerdeContext): CustomerStorageMessage => {
  const contents: any = {};
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

/**
 * deserializeAws_queryDataShare
 */
const de_DataShare = (output: any, context: __SerdeContext): DataShare => {
  const contents: any = {};
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
    contents.DataShareAssociations = de_DataShareAssociationList(
      __getArrayIfSingleItem(output["DataShareAssociations"]["member"]),
      context
    );
  }
  if (output["ManagedBy"] !== undefined) {
    contents.ManagedBy = __expectString(output["ManagedBy"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDataShareAssociation
 */
const de_DataShareAssociation = (output: any, context: __SerdeContext): DataShareAssociation => {
  const contents: any = {};
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

/**
 * deserializeAws_queryDataShareAssociationList
 */
const de_DataShareAssociationList = (output: any, context: __SerdeContext): DataShareAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataShareAssociation(entry, context);
    });
};

/**
 * deserializeAws_queryDataShareList
 */
const de_DataShareList = (output: any, context: __SerdeContext): DataShare[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataShare(entry, context);
    });
};

/**
 * deserializeAws_queryDataTransferProgress
 */
const de_DataTransferProgress = (output: any, context: __SerdeContext): DataTransferProgress => {
  const contents: any = {};
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

/**
 * deserializeAws_queryDefaultClusterParameters
 */
const de_DefaultClusterParameters = (output: any, context: __SerdeContext): DefaultClusterParameters => {
  const contents: any = {};
  if (output["ParameterGroupFamily"] !== undefined) {
    contents.ParameterGroupFamily = __expectString(output["ParameterGroupFamily"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
    contents.Parameters = de_ParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeferredMaintenanceWindow
 */
const de_DeferredMaintenanceWindow = (output: any, context: __SerdeContext): DeferredMaintenanceWindow => {
  const contents: any = {};
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

/**
 * deserializeAws_queryDeferredMaintenanceWindowsList
 */
const de_DeferredMaintenanceWindowsList = (output: any, context: __SerdeContext): DeferredMaintenanceWindow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeferredMaintenanceWindow(entry, context);
    });
};

/**
 * deserializeAws_queryDeleteAuthenticationProfileResult
 */
const de_DeleteAuthenticationProfileResult = (
  output: any,
  context: __SerdeContext
): DeleteAuthenticationProfileResult => {
  const contents: any = {};
  if (output["AuthenticationProfileName"] !== undefined) {
    contents.AuthenticationProfileName = __expectString(output["AuthenticationProfileName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteClusterResult
 */
const de_DeleteClusterResult = (output: any, context: __SerdeContext): DeleteClusterResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteClusterSnapshotResult
 */
const de_DeleteClusterSnapshotResult = (output: any, context: __SerdeContext): DeleteClusterSnapshotResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDependentServiceRequestThrottlingFault
 */
const de_DependentServiceRequestThrottlingFault = (
  output: any,
  context: __SerdeContext
): DependentServiceRequestThrottlingFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDependentServiceUnavailableFault
 */
const de_DependentServiceUnavailableFault = (
  output: any,
  context: __SerdeContext
): DependentServiceUnavailableFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAuthenticationProfilesResult
 */
const de_DescribeAuthenticationProfilesResult = (
  output: any,
  context: __SerdeContext
): DescribeAuthenticationProfilesResult => {
  const contents: any = {};
  if (output.AuthenticationProfiles === "") {
    contents.AuthenticationProfiles = [];
  } else if (
    output["AuthenticationProfiles"] !== undefined &&
    output["AuthenticationProfiles"]["member"] !== undefined
  ) {
    contents.AuthenticationProfiles = de_AuthenticationProfileList(
      __getArrayIfSingleItem(output["AuthenticationProfiles"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDataSharesForConsumerResult
 */
const de_DescribeDataSharesForConsumerResult = (
  output: any,
  context: __SerdeContext
): DescribeDataSharesForConsumerResult => {
  const contents: any = {};
  if (output.DataShares === "") {
    contents.DataShares = [];
  } else if (output["DataShares"] !== undefined && output["DataShares"]["member"] !== undefined) {
    contents.DataShares = de_DataShareList(__getArrayIfSingleItem(output["DataShares"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDataSharesForProducerResult
 */
const de_DescribeDataSharesForProducerResult = (
  output: any,
  context: __SerdeContext
): DescribeDataSharesForProducerResult => {
  const contents: any = {};
  if (output.DataShares === "") {
    contents.DataShares = [];
  } else if (output["DataShares"] !== undefined && output["DataShares"]["member"] !== undefined) {
    contents.DataShares = de_DataShareList(__getArrayIfSingleItem(output["DataShares"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDataSharesResult
 */
const de_DescribeDataSharesResult = (output: any, context: __SerdeContext): DescribeDataSharesResult => {
  const contents: any = {};
  if (output.DataShares === "") {
    contents.DataShares = [];
  } else if (output["DataShares"] !== undefined && output["DataShares"]["member"] !== undefined) {
    contents.DataShares = de_DataShareList(__getArrayIfSingleItem(output["DataShares"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDefaultClusterParametersResult
 */
const de_DescribeDefaultClusterParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeDefaultClusterParametersResult => {
  const contents: any = {};
  if (output["DefaultClusterParameters"] !== undefined) {
    contents.DefaultClusterParameters = de_DefaultClusterParameters(output["DefaultClusterParameters"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribePartnersOutputMessage
 */
const de_DescribePartnersOutputMessage = (output: any, context: __SerdeContext): DescribePartnersOutputMessage => {
  const contents: any = {};
  if (output.PartnerIntegrationInfoList === "") {
    contents.PartnerIntegrationInfoList = [];
  } else if (
    output["PartnerIntegrationInfoList"] !== undefined &&
    output["PartnerIntegrationInfoList"]["PartnerIntegrationInfo"] !== undefined
  ) {
    contents.PartnerIntegrationInfoList = de_PartnerIntegrationInfoList(
      __getArrayIfSingleItem(output["PartnerIntegrationInfoList"]["PartnerIntegrationInfo"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeReservedNodeExchangeStatusOutputMessage
 */
const de_DescribeReservedNodeExchangeStatusOutputMessage = (
  output: any,
  context: __SerdeContext
): DescribeReservedNodeExchangeStatusOutputMessage => {
  const contents: any = {};
  if (output.ReservedNodeExchangeStatusDetails === "") {
    contents.ReservedNodeExchangeStatusDetails = [];
  } else if (
    output["ReservedNodeExchangeStatusDetails"] !== undefined &&
    output["ReservedNodeExchangeStatusDetails"]["ReservedNodeExchangeStatus"] !== undefined
  ) {
    contents.ReservedNodeExchangeStatusDetails = de_ReservedNodeExchangeStatusList(
      __getArrayIfSingleItem(output["ReservedNodeExchangeStatusDetails"]["ReservedNodeExchangeStatus"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeSnapshotSchedulesOutputMessage
 */
const de_DescribeSnapshotSchedulesOutputMessage = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotSchedulesOutputMessage => {
  const contents: any = {};
  if (output.SnapshotSchedules === "") {
    contents.SnapshotSchedules = [];
  } else if (
    output["SnapshotSchedules"] !== undefined &&
    output["SnapshotSchedules"]["SnapshotSchedule"] !== undefined
  ) {
    contents.SnapshotSchedules = de_SnapshotScheduleList(
      __getArrayIfSingleItem(output["SnapshotSchedules"]["SnapshotSchedule"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDisableSnapshotCopyResult
 */
const de_DisableSnapshotCopyResult = (output: any, context: __SerdeContext): DisableSnapshotCopyResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEC2SecurityGroup
 */
const de_EC2SecurityGroup = (output: any, context: __SerdeContext): EC2SecurityGroup => {
  const contents: any = {};
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
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEC2SecurityGroupList
 */
const de_EC2SecurityGroupList = (output: any, context: __SerdeContext): EC2SecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EC2SecurityGroup(entry, context);
    });
};

/**
 * deserializeAws_queryElasticIpStatus
 */
const de_ElasticIpStatus = (output: any, context: __SerdeContext): ElasticIpStatus => {
  const contents: any = {};
  if (output["ElasticIp"] !== undefined) {
    contents.ElasticIp = __expectString(output["ElasticIp"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEligibleTracksToUpdateList
 */
const de_EligibleTracksToUpdateList = (output: any, context: __SerdeContext): UpdateTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UpdateTarget(entry, context);
    });
};

/**
 * deserializeAws_queryEnableSnapshotCopyResult
 */
const de_EnableSnapshotCopyResult = (output: any, context: __SerdeContext): EnableSnapshotCopyResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {};
  if (output["Address"] !== undefined) {
    contents.Address = __expectString(output["Address"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output.VpcEndpoints === "") {
    contents.VpcEndpoints = [];
  } else if (output["VpcEndpoints"] !== undefined && output["VpcEndpoints"]["VpcEndpoint"] !== undefined) {
    contents.VpcEndpoints = de_VpcEndpointsList(__getArrayIfSingleItem(output["VpcEndpoints"]["VpcEndpoint"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAccess
 */
const de_EndpointAccess = (output: any, context: __SerdeContext): EndpointAccess => {
  const contents: any = {};
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
    contents.VpcSecurityGroups = de_VpcSecurityGroupMembershipList(
      __getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroup"]),
      context
    );
  }
  if (output["VpcEndpoint"] !== undefined) {
    contents.VpcEndpoint = de_VpcEndpoint(output["VpcEndpoint"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAccesses
 */
const de_EndpointAccesses = (output: any, context: __SerdeContext): EndpointAccess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointAccess(entry, context);
    });
};

/**
 * deserializeAws_queryEndpointAccessList
 */
const de_EndpointAccessList = (output: any, context: __SerdeContext): EndpointAccessList => {
  const contents: any = {};
  if (output.EndpointAccessList === "") {
    contents.EndpointAccessList = [];
  } else if (output["EndpointAccessList"] !== undefined && output["EndpointAccessList"]["member"] !== undefined) {
    contents.EndpointAccessList = de_EndpointAccesses(
      __getArrayIfSingleItem(output["EndpointAccessList"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAlreadyExistsFault
 */
const de_EndpointAlreadyExistsFault = (output: any, context: __SerdeContext): EndpointAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAuthorization
 */
const de_EndpointAuthorization = (output: any, context: __SerdeContext): EndpointAuthorization => {
  const contents: any = {};
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
    contents.AllowedVPCs = de_VpcIdentifierList(
      __getArrayIfSingleItem(output["AllowedVPCs"]["VpcIdentifier"]),
      context
    );
  }
  if (output["EndpointCount"] !== undefined) {
    contents.EndpointCount = __strictParseInt32(output["EndpointCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAuthorizationAlreadyExistsFault
 */
const de_EndpointAuthorizationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): EndpointAuthorizationAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAuthorizationList
 */
const de_EndpointAuthorizationList = (output: any, context: __SerdeContext): EndpointAuthorizationList => {
  const contents: any = {};
  if (output.EndpointAuthorizationList === "") {
    contents.EndpointAuthorizationList = [];
  } else if (
    output["EndpointAuthorizationList"] !== undefined &&
    output["EndpointAuthorizationList"]["member"] !== undefined
  ) {
    contents.EndpointAuthorizationList = de_EndpointAuthorizations(
      __getArrayIfSingleItem(output["EndpointAuthorizationList"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAuthorizationNotFoundFault
 */
const de_EndpointAuthorizationNotFoundFault = (
  output: any,
  context: __SerdeContext
): EndpointAuthorizationNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAuthorizations
 */
const de_EndpointAuthorizations = (output: any, context: __SerdeContext): EndpointAuthorization[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointAuthorization(entry, context);
    });
};

/**
 * deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFault
 */
const de_EndpointAuthorizationsPerClusterLimitExceededFault = (
  output: any,
  context: __SerdeContext
): EndpointAuthorizationsPerClusterLimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointNotFoundFault
 */
const de_EndpointNotFoundFault = (output: any, context: __SerdeContext): EndpointNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointsPerAuthorizationLimitExceededFault
 */
const de_EndpointsPerAuthorizationLimitExceededFault = (
  output: any,
  context: __SerdeContext
): EndpointsPerAuthorizationLimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointsPerClusterLimitExceededFault
 */
const de_EndpointsPerClusterLimitExceededFault = (
  output: any,
  context: __SerdeContext
): EndpointsPerClusterLimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEvent
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  const contents: any = {};
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
    contents.EventCategories = de_EventCategoriesList(
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

/**
 * deserializeAws_queryEventCategoriesList
 */
const de_EventCategoriesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryEventCategoriesMap
 */
const de_EventCategoriesMap = (output: any, context: __SerdeContext): EventCategoriesMap => {
  const contents: any = {};
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output.Events === "") {
    contents.Events = [];
  } else if (output["Events"] !== undefined && output["Events"]["EventInfoMap"] !== undefined) {
    contents.Events = de_EventInfoMapList(__getArrayIfSingleItem(output["Events"]["EventInfoMap"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEventCategoriesMapList
 */
const de_EventCategoriesMapList = (output: any, context: __SerdeContext): EventCategoriesMap[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventCategoriesMap(entry, context);
    });
};

/**
 * deserializeAws_queryEventCategoriesMessage
 */
const de_EventCategoriesMessage = (output: any, context: __SerdeContext): EventCategoriesMessage => {
  const contents: any = {};
  if (output.EventCategoriesMapList === "") {
    contents.EventCategoriesMapList = [];
  } else if (
    output["EventCategoriesMapList"] !== undefined &&
    output["EventCategoriesMapList"]["EventCategoriesMap"] !== undefined
  ) {
    contents.EventCategoriesMapList = de_EventCategoriesMapList(
      __getArrayIfSingleItem(output["EventCategoriesMapList"]["EventCategoriesMap"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryEventInfoMap
 */
const de_EventInfoMap = (output: any, context: __SerdeContext): EventInfoMap => {
  const contents: any = {};
  if (output["EventId"] !== undefined) {
    contents.EventId = __expectString(output["EventId"]);
  }
  if (output.EventCategories === "") {
    contents.EventCategories = [];
  } else if (output["EventCategories"] !== undefined && output["EventCategories"]["EventCategory"] !== undefined) {
    contents.EventCategories = de_EventCategoriesList(
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

/**
 * deserializeAws_queryEventInfoMapList
 */
const de_EventInfoMapList = (output: any, context: __SerdeContext): EventInfoMap[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventInfoMap(entry, context);
    });
};

/**
 * deserializeAws_queryEventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
};

/**
 * deserializeAws_queryEventsMessage
 */
const de_EventsMessage = (output: any, context: __SerdeContext): EventsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Events === "") {
    contents.Events = [];
  } else if (output["Events"] !== undefined && output["Events"]["Event"] !== undefined) {
    contents.Events = de_EventList(__getArrayIfSingleItem(output["Events"]["Event"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEventSubscription
 */
const de_EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  const contents: any = {};
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
    contents.SourceIdsList = de_SourceIdsList(__getArrayIfSingleItem(output["SourceIdsList"]["SourceId"]), context);
  }
  if (output.EventCategoriesList === "") {
    contents.EventCategoriesList = [];
  } else if (
    output["EventCategoriesList"] !== undefined &&
    output["EventCategoriesList"]["EventCategory"] !== undefined
  ) {
    contents.EventCategoriesList = de_EventCategoriesList(
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
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEventSubscriptionQuotaExceededFault
 */
const de_EventSubscriptionQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): EventSubscriptionQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventSubscriptionsList
 */
const de_EventSubscriptionsList = (output: any, context: __SerdeContext): EventSubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventSubscription(entry, context);
    });
};

/**
 * deserializeAws_queryEventSubscriptionsMessage
 */
const de_EventSubscriptionsMessage = (output: any, context: __SerdeContext): EventSubscriptionsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.EventSubscriptionsList === "") {
    contents.EventSubscriptionsList = [];
  } else if (
    output["EventSubscriptionsList"] !== undefined &&
    output["EventSubscriptionsList"]["EventSubscription"] !== undefined
  ) {
    contents.EventSubscriptionsList = de_EventSubscriptionsList(
      __getArrayIfSingleItem(output["EventSubscriptionsList"]["EventSubscription"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsOutputMessage
 */
const de_GetReservedNodeExchangeConfigurationOptionsOutputMessage = (
  output: any,
  context: __SerdeContext
): GetReservedNodeExchangeConfigurationOptionsOutputMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedNodeConfigurationOptionList === "") {
    contents.ReservedNodeConfigurationOptionList = [];
  } else if (
    output["ReservedNodeConfigurationOptionList"] !== undefined &&
    output["ReservedNodeConfigurationOptionList"]["ReservedNodeConfigurationOption"] !== undefined
  ) {
    contents.ReservedNodeConfigurationOptionList = de_ReservedNodeConfigurationOptionList(
      __getArrayIfSingleItem(output["ReservedNodeConfigurationOptionList"]["ReservedNodeConfigurationOption"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage
 */
const de_GetReservedNodeExchangeOfferingsOutputMessage = (
  output: any,
  context: __SerdeContext
): GetReservedNodeExchangeOfferingsOutputMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedNodeOfferings === "") {
    contents.ReservedNodeOfferings = [];
  } else if (
    output["ReservedNodeOfferings"] !== undefined &&
    output["ReservedNodeOfferings"]["ReservedNodeOffering"] !== undefined
  ) {
    contents.ReservedNodeOfferings = de_ReservedNodeOfferingList(
      __getArrayIfSingleItem(output["ReservedNodeOfferings"]["ReservedNodeOffering"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryHsmClientCertificate
 */
const de_HsmClientCertificate = (output: any, context: __SerdeContext): HsmClientCertificate => {
  const contents: any = {};
  if (output["HsmClientCertificateIdentifier"] !== undefined) {
    contents.HsmClientCertificateIdentifier = __expectString(output["HsmClientCertificateIdentifier"]);
  }
  if (output["HsmClientCertificatePublicKey"] !== undefined) {
    contents.HsmClientCertificatePublicKey = __expectString(output["HsmClientCertificatePublicKey"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmClientCertificateAlreadyExistsFault
 */
const de_HsmClientCertificateAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): HsmClientCertificateAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmClientCertificateList
 */
const de_HsmClientCertificateList = (output: any, context: __SerdeContext): HsmClientCertificate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HsmClientCertificate(entry, context);
    });
};

/**
 * deserializeAws_queryHsmClientCertificateMessage
 */
const de_HsmClientCertificateMessage = (output: any, context: __SerdeContext): HsmClientCertificateMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.HsmClientCertificates === "") {
    contents.HsmClientCertificates = [];
  } else if (
    output["HsmClientCertificates"] !== undefined &&
    output["HsmClientCertificates"]["HsmClientCertificate"] !== undefined
  ) {
    contents.HsmClientCertificates = de_HsmClientCertificateList(
      __getArrayIfSingleItem(output["HsmClientCertificates"]["HsmClientCertificate"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryHsmClientCertificateNotFoundFault
 */
const de_HsmClientCertificateNotFoundFault = (
  output: any,
  context: __SerdeContext
): HsmClientCertificateNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmClientCertificateQuotaExceededFault
 */
const de_HsmClientCertificateQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): HsmClientCertificateQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmConfiguration
 */
const de_HsmConfiguration = (output: any, context: __SerdeContext): HsmConfiguration => {
  const contents: any = {};
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
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmConfigurationAlreadyExistsFault
 */
const de_HsmConfigurationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): HsmConfigurationAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmConfigurationList
 */
const de_HsmConfigurationList = (output: any, context: __SerdeContext): HsmConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HsmConfiguration(entry, context);
    });
};

/**
 * deserializeAws_queryHsmConfigurationMessage
 */
const de_HsmConfigurationMessage = (output: any, context: __SerdeContext): HsmConfigurationMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.HsmConfigurations === "") {
    contents.HsmConfigurations = [];
  } else if (
    output["HsmConfigurations"] !== undefined &&
    output["HsmConfigurations"]["HsmConfiguration"] !== undefined
  ) {
    contents.HsmConfigurations = de_HsmConfigurationList(
      __getArrayIfSingleItem(output["HsmConfigurations"]["HsmConfiguration"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryHsmConfigurationNotFoundFault
 */
const de_HsmConfigurationNotFoundFault = (output: any, context: __SerdeContext): HsmConfigurationNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmConfigurationQuotaExceededFault
 */
const de_HsmConfigurationQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): HsmConfigurationQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmStatus
 */
const de_HsmStatus = (output: any, context: __SerdeContext): HsmStatus => {
  const contents: any = {};
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

/**
 * deserializeAws_queryImportTablesCompleted
 */
const de_ImportTablesCompleted = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryImportTablesInProgress
 */
const de_ImportTablesInProgress = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryImportTablesNotStarted
 */
const de_ImportTablesNotStarted = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryIncompatibleOrderableOptions
 */
const de_IncompatibleOrderableOptions = (output: any, context: __SerdeContext): IncompatibleOrderableOptions => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInProgressTableRestoreQuotaExceededFault
 */
const de_InProgressTableRestoreQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): InProgressTableRestoreQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientClusterCapacityFault
 */
const de_InsufficientClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientClusterCapacityFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientS3BucketPolicyFault
 */
const de_InsufficientS3BucketPolicyFault = (output: any, context: __SerdeContext): InsufficientS3BucketPolicyFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidAuthenticationProfileRequestFault
 */
const de_InvalidAuthenticationProfileRequestFault = (
  output: any,
  context: __SerdeContext
): InvalidAuthenticationProfileRequestFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidAuthorizationStateFault
 */
const de_InvalidAuthorizationStateFault = (output: any, context: __SerdeContext): InvalidAuthorizationStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterParameterGroupStateFault
 */
const de_InvalidClusterParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterParameterGroupStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterSecurityGroupStateFault
 */
const de_InvalidClusterSecurityGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSecurityGroupStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterSnapshotScheduleStateFault
 */
const de_InvalidClusterSnapshotScheduleStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSnapshotScheduleStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterSnapshotStateFault
 */
const de_InvalidClusterSnapshotStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSnapshotStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterStateFault
 */
const de_InvalidClusterStateFault = (output: any, context: __SerdeContext): InvalidClusterStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterSubnetGroupStateFault
 */
const de_InvalidClusterSubnetGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterSubnetGroupStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterSubnetStateFault
 */
const de_InvalidClusterSubnetStateFault = (output: any, context: __SerdeContext): InvalidClusterSubnetStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterTrackFault
 */
const de_InvalidClusterTrackFault = (output: any, context: __SerdeContext): InvalidClusterTrackFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDataShareFault
 */
const de_InvalidDataShareFault = (output: any, context: __SerdeContext): InvalidDataShareFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidElasticIpFault
 */
const de_InvalidElasticIpFault = (output: any, context: __SerdeContext): InvalidElasticIpFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidEndpointStateFault
 */
const de_InvalidEndpointStateFault = (output: any, context: __SerdeContext): InvalidEndpointStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidHsmClientCertificateStateFault
 */
const de_InvalidHsmClientCertificateStateFault = (
  output: any,
  context: __SerdeContext
): InvalidHsmClientCertificateStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidHsmConfigurationStateFault
 */
const de_InvalidHsmConfigurationStateFault = (
  output: any,
  context: __SerdeContext
): InvalidHsmConfigurationStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidNamespaceFault
 */
const de_InvalidNamespaceFault = (output: any, context: __SerdeContext): InvalidNamespaceFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidReservedNodeStateFault
 */
const de_InvalidReservedNodeStateFault = (output: any, context: __SerdeContext): InvalidReservedNodeStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRestoreFault
 */
const de_InvalidRestoreFault = (output: any, context: __SerdeContext): InvalidRestoreFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRetentionPeriodFault
 */
const de_InvalidRetentionPeriodFault = (output: any, context: __SerdeContext): InvalidRetentionPeriodFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidS3BucketNameFault
 */
const de_InvalidS3BucketNameFault = (output: any, context: __SerdeContext): InvalidS3BucketNameFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidS3KeyPrefixFault
 */
const de_InvalidS3KeyPrefixFault = (output: any, context: __SerdeContext): InvalidS3KeyPrefixFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidScheduledActionFault
 */
const de_InvalidScheduledActionFault = (output: any, context: __SerdeContext): InvalidScheduledActionFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidScheduleFault
 */
const de_InvalidScheduleFault = (output: any, context: __SerdeContext): InvalidScheduleFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSnapshotCopyGrantStateFault
 */
const de_InvalidSnapshotCopyGrantStateFault = (
  output: any,
  context: __SerdeContext
): InvalidSnapshotCopyGrantStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubnet
 */
const de_InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubscriptionStateFault
 */
const de_InvalidSubscriptionStateFault = (output: any, context: __SerdeContext): InvalidSubscriptionStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTableRestoreArgumentFault
 */
const de_InvalidTableRestoreArgumentFault = (
  output: any,
  context: __SerdeContext
): InvalidTableRestoreArgumentFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTagFault
 */
const de_InvalidTagFault = (output: any, context: __SerdeContext): InvalidTagFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidUsageLimitFault
 */
const de_InvalidUsageLimitFault = (output: any, context: __SerdeContext): InvalidUsageLimitFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidVPCNetworkStateFault
 */
const de_InvalidVPCNetworkStateFault = (output: any, context: __SerdeContext): InvalidVPCNetworkStateFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIPRange
 */
const de_IPRange = (output: any, context: __SerdeContext): IPRange => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CIDRIP"] !== undefined) {
    contents.CIDRIP = __expectString(output["CIDRIP"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIPRangeList
 */
const de_IPRangeList = (output: any, context: __SerdeContext): IPRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IPRange(entry, context);
    });
};

/**
 * deserializeAws_queryLimitExceededFault
 */
const de_LimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoggingStatus
 */
const de_LoggingStatus = (output: any, context: __SerdeContext): LoggingStatus => {
  const contents: any = {};
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
    contents.LogExports = de_LogTypeList(__getArrayIfSingleItem(output["LogExports"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryLogTypeList
 */
const de_LogTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryMaintenanceTrack
 */
const de_MaintenanceTrack = (output: any, context: __SerdeContext): MaintenanceTrack => {
  const contents: any = {};
  if (output["MaintenanceTrackName"] !== undefined) {
    contents.MaintenanceTrackName = __expectString(output["MaintenanceTrackName"]);
  }
  if (output["DatabaseVersion"] !== undefined) {
    contents.DatabaseVersion = __expectString(output["DatabaseVersion"]);
  }
  if (output.UpdateTargets === "") {
    contents.UpdateTargets = [];
  } else if (output["UpdateTargets"] !== undefined && output["UpdateTargets"]["UpdateTarget"] !== undefined) {
    contents.UpdateTargets = de_EligibleTracksToUpdateList(
      __getArrayIfSingleItem(output["UpdateTargets"]["UpdateTarget"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryModifyAquaOutputMessage
 */
const de_ModifyAquaOutputMessage = (output: any, context: __SerdeContext): ModifyAquaOutputMessage => {
  const contents: any = {};
  if (output["AquaConfiguration"] !== undefined) {
    contents.AquaConfiguration = de_AquaConfiguration(output["AquaConfiguration"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyAuthenticationProfileResult
 */
const de_ModifyAuthenticationProfileResult = (
  output: any,
  context: __SerdeContext
): ModifyAuthenticationProfileResult => {
  const contents: any = {};
  if (output["AuthenticationProfileName"] !== undefined) {
    contents.AuthenticationProfileName = __expectString(output["AuthenticationProfileName"]);
  }
  if (output["AuthenticationProfileContent"] !== undefined) {
    contents.AuthenticationProfileContent = __expectString(output["AuthenticationProfileContent"]);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterDbRevisionResult
 */
const de_ModifyClusterDbRevisionResult = (output: any, context: __SerdeContext): ModifyClusterDbRevisionResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterIamRolesResult
 */
const de_ModifyClusterIamRolesResult = (output: any, context: __SerdeContext): ModifyClusterIamRolesResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterMaintenanceResult
 */
const de_ModifyClusterMaintenanceResult = (output: any, context: __SerdeContext): ModifyClusterMaintenanceResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterResult
 */
const de_ModifyClusterResult = (output: any, context: __SerdeContext): ModifyClusterResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterSnapshotResult
 */
const de_ModifyClusterSnapshotResult = (output: any, context: __SerdeContext): ModifyClusterSnapshotResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterSubnetGroupResult
 */
const de_ModifyClusterSubnetGroupResult = (output: any, context: __SerdeContext): ModifyClusterSubnetGroupResult => {
  const contents: any = {};
  if (output["ClusterSubnetGroup"] !== undefined) {
    contents.ClusterSubnetGroup = de_ClusterSubnetGroup(output["ClusterSubnetGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyCustomDomainAssociationResult
 */
const de_ModifyCustomDomainAssociationResult = (
  output: any,
  context: __SerdeContext
): ModifyCustomDomainAssociationResult => {
  const contents: any = {};
  if (output["CustomDomainName"] !== undefined) {
    contents.CustomDomainName = __expectString(output["CustomDomainName"]);
  }
  if (output["CustomDomainCertificateArn"] !== undefined) {
    contents.CustomDomainCertificateArn = __expectString(output["CustomDomainCertificateArn"]);
  }
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  if (output["CustomDomainCertExpiryTime"] !== undefined) {
    contents.CustomDomainCertExpiryTime = __expectString(output["CustomDomainCertExpiryTime"]);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyEventSubscriptionResult
 */
const de_ModifyEventSubscriptionResult = (output: any, context: __SerdeContext): ModifyEventSubscriptionResult => {
  const contents: any = {};
  if (output["EventSubscription"] !== undefined) {
    contents.EventSubscription = de_EventSubscription(output["EventSubscription"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifySnapshotCopyRetentionPeriodResult
 */
const de_ModifySnapshotCopyRetentionPeriodResult = (
  output: any,
  context: __SerdeContext
): ModifySnapshotCopyRetentionPeriodResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  const contents: any = {};
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

/**
 * deserializeAws_queryNetworkInterfaceList
 */
const de_NetworkInterfaceList = (output: any, context: __SerdeContext): NetworkInterface[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetworkInterface(entry, context);
    });
};

/**
 * deserializeAws_queryNodeConfigurationOption
 */
const de_NodeConfigurationOption = (output: any, context: __SerdeContext): NodeConfigurationOption => {
  const contents: any = {};
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

/**
 * deserializeAws_queryNodeConfigurationOptionList
 */
const de_NodeConfigurationOptionList = (output: any, context: __SerdeContext): NodeConfigurationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NodeConfigurationOption(entry, context);
    });
};

/**
 * deserializeAws_queryNodeConfigurationOptionsMessage
 */
const de_NodeConfigurationOptionsMessage = (output: any, context: __SerdeContext): NodeConfigurationOptionsMessage => {
  const contents: any = {};
  if (output.NodeConfigurationOptionList === "") {
    contents.NodeConfigurationOptionList = [];
  } else if (
    output["NodeConfigurationOptionList"] !== undefined &&
    output["NodeConfigurationOptionList"]["NodeConfigurationOption"] !== undefined
  ) {
    contents.NodeConfigurationOptionList = de_NodeConfigurationOptionList(
      __getArrayIfSingleItem(output["NodeConfigurationOptionList"]["NodeConfigurationOption"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault
 */
const de_NumberOfNodesPerClusterLimitExceededFault = (
  output: any,
  context: __SerdeContext
): NumberOfNodesPerClusterLimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryNumberOfNodesQuotaExceededFault
 */
const de_NumberOfNodesQuotaExceededFault = (output: any, context: __SerdeContext): NumberOfNodesQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOrderableClusterOption
 */
const de_OrderableClusterOption = (output: any, context: __SerdeContext): OrderableClusterOption => {
  const contents: any = {};
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
    contents.AvailabilityZones = de_AvailabilityZoneList(
      __getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryOrderableClusterOptionsList
 */
const de_OrderableClusterOptionsList = (output: any, context: __SerdeContext): OrderableClusterOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OrderableClusterOption(entry, context);
    });
};

/**
 * deserializeAws_queryOrderableClusterOptionsMessage
 */
const de_OrderableClusterOptionsMessage = (output: any, context: __SerdeContext): OrderableClusterOptionsMessage => {
  const contents: any = {};
  if (output.OrderableClusterOptions === "") {
    contents.OrderableClusterOptions = [];
  } else if (
    output["OrderableClusterOptions"] !== undefined &&
    output["OrderableClusterOptions"]["OrderableClusterOption"] !== undefined
  ) {
    contents.OrderableClusterOptions = de_OrderableClusterOptionsList(
      __getArrayIfSingleItem(output["OrderableClusterOptions"]["OrderableClusterOption"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryParameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  const contents: any = {};
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

/**
 * deserializeAws_queryParameterGroupList
 */
const de_ParameterGroupList = (output: any, context: __SerdeContext): ClusterParameterGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterParameterGroup(entry, context);
    });
};

/**
 * deserializeAws_queryParametersList
 */
const de_ParametersList = (output: any, context: __SerdeContext): Parameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Parameter(entry, context);
    });
};

/**
 * deserializeAws_queryPartnerIntegrationInfo
 */
const de_PartnerIntegrationInfo = (output: any, context: __SerdeContext): PartnerIntegrationInfo => {
  const contents: any = {};
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

/**
 * deserializeAws_queryPartnerIntegrationInfoList
 */
const de_PartnerIntegrationInfoList = (output: any, context: __SerdeContext): PartnerIntegrationInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PartnerIntegrationInfo(entry, context);
    });
};

/**
 * deserializeAws_queryPartnerIntegrationOutputMessage
 */
const de_PartnerIntegrationOutputMessage = (output: any, context: __SerdeContext): PartnerIntegrationOutputMessage => {
  const contents: any = {};
  if (output["DatabaseName"] !== undefined) {
    contents.DatabaseName = __expectString(output["DatabaseName"]);
  }
  if (output["PartnerName"] !== undefined) {
    contents.PartnerName = __expectString(output["PartnerName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPartnerNotFoundFault
 */
const de_PartnerNotFoundFault = (output: any, context: __SerdeContext): PartnerNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPauseClusterMessage
 */
const de_PauseClusterMessage = (output: any, context: __SerdeContext): PauseClusterMessage => {
  const contents: any = {};
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPauseClusterResult
 */
const de_PauseClusterResult = (output: any, context: __SerdeContext): PauseClusterResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryPendingActionsList
 */
const de_PendingActionsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryPendingModifiedValues
 */
const de_PendingModifiedValues = (output: any, context: __SerdeContext): PendingModifiedValues => {
  const contents: any = {};
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

/**
 * deserializeAws_queryPurchaseReservedNodeOfferingResult
 */
const de_PurchaseReservedNodeOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseReservedNodeOfferingResult => {
  const contents: any = {};
  if (output["ReservedNode"] !== undefined) {
    contents.ReservedNode = de_ReservedNode(output["ReservedNode"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRebootClusterResult
 */
const de_RebootClusterResult = (output: any, context: __SerdeContext): RebootClusterResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  const contents: any = {};
  if (output["RecurringChargeAmount"] !== undefined) {
    contents.RecurringChargeAmount = __strictParseFloat(output["RecurringChargeAmount"]) as number;
  }
  if (output["RecurringChargeFrequency"] !== undefined) {
    contents.RecurringChargeFrequency = __expectString(output["RecurringChargeFrequency"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRecurringChargeList
 */
const de_RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecurringCharge(entry, context);
    });
};

/**
 * deserializeAws_queryReservedNode
 */
const de_ReservedNode = (output: any, context: __SerdeContext): ReservedNode => {
  const contents: any = {};
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
    contents.RecurringCharges = de_RecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  if (output["ReservedNodeOfferingType"] !== undefined) {
    contents.ReservedNodeOfferingType = __expectString(output["ReservedNodeOfferingType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeAlreadyExistsFault
 */
const de_ReservedNodeAlreadyExistsFault = (output: any, context: __SerdeContext): ReservedNodeAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeAlreadyMigratedFault
 */
const de_ReservedNodeAlreadyMigratedFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeAlreadyMigratedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeConfigurationOption
 */
const de_ReservedNodeConfigurationOption = (output: any, context: __SerdeContext): ReservedNodeConfigurationOption => {
  const contents: any = {};
  if (output["SourceReservedNode"] !== undefined) {
    contents.SourceReservedNode = de_ReservedNode(output["SourceReservedNode"], context);
  }
  if (output["TargetReservedNodeCount"] !== undefined) {
    contents.TargetReservedNodeCount = __strictParseInt32(output["TargetReservedNodeCount"]) as number;
  }
  if (output["TargetReservedNodeOffering"] !== undefined) {
    contents.TargetReservedNodeOffering = de_ReservedNodeOffering(output["TargetReservedNodeOffering"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeConfigurationOptionList
 */
const de_ReservedNodeConfigurationOptionList = (
  output: any,
  context: __SerdeContext
): ReservedNodeConfigurationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedNodeConfigurationOption(entry, context);
    });
};

/**
 * deserializeAws_queryReservedNodeExchangeNotFoundFault
 */
const de_ReservedNodeExchangeNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeExchangeNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeExchangeStatus
 */
const de_ReservedNodeExchangeStatus = (output: any, context: __SerdeContext): ReservedNodeExchangeStatus => {
  const contents: any = {};
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

/**
 * deserializeAws_queryReservedNodeExchangeStatusList
 */
const de_ReservedNodeExchangeStatusList = (output: any, context: __SerdeContext): ReservedNodeExchangeStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedNodeExchangeStatus(entry, context);
    });
};

/**
 * deserializeAws_queryReservedNodeList
 */
const de_ReservedNodeList = (output: any, context: __SerdeContext): ReservedNode[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedNode(entry, context);
    });
};

/**
 * deserializeAws_queryReservedNodeNotFoundFault
 */
const de_ReservedNodeNotFoundFault = (output: any, context: __SerdeContext): ReservedNodeNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeOffering
 */
const de_ReservedNodeOffering = (output: any, context: __SerdeContext): ReservedNodeOffering => {
  const contents: any = {};
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
    contents.RecurringCharges = de_RecurringChargeList(
      __getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]),
      context
    );
  }
  if (output["ReservedNodeOfferingType"] !== undefined) {
    contents.ReservedNodeOfferingType = __expectString(output["ReservedNodeOfferingType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeOfferingList
 */
const de_ReservedNodeOfferingList = (output: any, context: __SerdeContext): ReservedNodeOffering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedNodeOffering(entry, context);
    });
};

/**
 * deserializeAws_queryReservedNodeOfferingNotFoundFault
 */
const de_ReservedNodeOfferingNotFoundFault = (
  output: any,
  context: __SerdeContext
): ReservedNodeOfferingNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeOfferingsMessage
 */
const de_ReservedNodeOfferingsMessage = (output: any, context: __SerdeContext): ReservedNodeOfferingsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedNodeOfferings === "") {
    contents.ReservedNodeOfferings = [];
  } else if (
    output["ReservedNodeOfferings"] !== undefined &&
    output["ReservedNodeOfferings"]["ReservedNodeOffering"] !== undefined
  ) {
    contents.ReservedNodeOfferings = de_ReservedNodeOfferingList(
      __getArrayIfSingleItem(output["ReservedNodeOfferings"]["ReservedNodeOffering"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeQuotaExceededFault
 */
const de_ReservedNodeQuotaExceededFault = (output: any, context: __SerdeContext): ReservedNodeQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodesMessage
 */
const de_ReservedNodesMessage = (output: any, context: __SerdeContext): ReservedNodesMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ReservedNodes === "") {
    contents.ReservedNodes = [];
  } else if (output["ReservedNodes"] !== undefined && output["ReservedNodes"]["ReservedNode"] !== undefined) {
    contents.ReservedNodes = de_ReservedNodeList(
      __getArrayIfSingleItem(output["ReservedNodes"]["ReservedNode"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryResizeClusterMessage
 */
const de_ResizeClusterMessage = (output: any, context: __SerdeContext): ResizeClusterMessage => {
  const contents: any = {};
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

/**
 * deserializeAws_queryResizeClusterResult
 */
const de_ResizeClusterResult = (output: any, context: __SerdeContext): ResizeClusterResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResizeInfo
 */
const de_ResizeInfo = (output: any, context: __SerdeContext): ResizeInfo => {
  const contents: any = {};
  if (output["ResizeType"] !== undefined) {
    contents.ResizeType = __expectString(output["ResizeType"]);
  }
  if (output["AllowCancelResize"] !== undefined) {
    contents.AllowCancelResize = __parseBoolean(output["AllowCancelResize"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResizeNotFoundFault
 */
const de_ResizeNotFoundFault = (output: any, context: __SerdeContext): ResizeNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResizeProgressMessage
 */
const de_ResizeProgressMessage = (output: any, context: __SerdeContext): ResizeProgressMessage => {
  const contents: any = {};
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
    contents.ImportTablesCompleted = de_ImportTablesCompleted(
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
    contents.ImportTablesInProgress = de_ImportTablesInProgress(
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
    contents.ImportTablesNotStarted = de_ImportTablesNotStarted(
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

/**
 * deserializeAws_queryResourceNotFoundFault
 */
const de_ResourceNotFoundFault = (output: any, context: __SerdeContext): ResourceNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRestorableNodeTypeList
 */
const de_RestorableNodeTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryRestoreFromClusterSnapshotResult
 */
const de_RestoreFromClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreFromClusterSnapshotResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreStatus
 */
const de_RestoreStatus = (output: any, context: __SerdeContext): RestoreStatus => {
  const contents: any = {};
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

/**
 * deserializeAws_queryRestoreTableFromClusterSnapshotResult
 */
const de_RestoreTableFromClusterSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreTableFromClusterSnapshotResult => {
  const contents: any = {};
  if (output["TableRestoreStatus"] !== undefined) {
    contents.TableRestoreStatus = de_TableRestoreStatus(output["TableRestoreStatus"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResumeClusterMessage
 */
const de_ResumeClusterMessage = (output: any, context: __SerdeContext): ResumeClusterMessage => {
  const contents: any = {};
  if (output["ClusterIdentifier"] !== undefined) {
    contents.ClusterIdentifier = __expectString(output["ClusterIdentifier"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResumeClusterResult
 */
const de_ResumeClusterResult = (output: any, context: __SerdeContext): ResumeClusterResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRevisionTarget
 */
const de_RevisionTarget = (output: any, context: __SerdeContext): RevisionTarget => {
  const contents: any = {};
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

/**
 * deserializeAws_queryRevisionTargetsList
 */
const de_RevisionTargetsList = (output: any, context: __SerdeContext): RevisionTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RevisionTarget(entry, context);
    });
};

/**
 * deserializeAws_queryRevokeClusterSecurityGroupIngressResult
 */
const de_RevokeClusterSecurityGroupIngressResult = (
  output: any,
  context: __SerdeContext
): RevokeClusterSecurityGroupIngressResult => {
  const contents: any = {};
  if (output["ClusterSecurityGroup"] !== undefined) {
    contents.ClusterSecurityGroup = de_ClusterSecurityGroup(output["ClusterSecurityGroup"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRevokeSnapshotAccessResult
 */
const de_RevokeSnapshotAccessResult = (output: any, context: __SerdeContext): RevokeSnapshotAccessResult => {
  const contents: any = {};
  if (output["Snapshot"] !== undefined) {
    contents.Snapshot = de_Snapshot(output["Snapshot"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRotateEncryptionKeyResult
 */
const de_RotateEncryptionKeyResult = (output: any, context: __SerdeContext): RotateEncryptionKeyResult => {
  const contents: any = {};
  if (output["Cluster"] !== undefined) {
    contents.Cluster = de_Cluster(output["Cluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledAction
 */
const de_ScheduledAction = (output: any, context: __SerdeContext): ScheduledAction => {
  const contents: any = {};
  if (output["ScheduledActionName"] !== undefined) {
    contents.ScheduledActionName = __expectString(output["ScheduledActionName"]);
  }
  if (output["TargetAction"] !== undefined) {
    contents.TargetAction = de_ScheduledActionType(output["TargetAction"], context);
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
    contents.NextInvocations = de_ScheduledActionTimeList(
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

/**
 * deserializeAws_queryScheduledActionAlreadyExistsFault
 */
const de_ScheduledActionAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ScheduledActionAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledActionList
 */
const de_ScheduledActionList = (output: any, context: __SerdeContext): ScheduledAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScheduledAction(entry, context);
    });
};

/**
 * deserializeAws_queryScheduledActionNotFoundFault
 */
const de_ScheduledActionNotFoundFault = (output: any, context: __SerdeContext): ScheduledActionNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledActionQuotaExceededFault
 */
const de_ScheduledActionQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ScheduledActionQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledActionsMessage
 */
const de_ScheduledActionsMessage = (output: any, context: __SerdeContext): ScheduledActionsMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.ScheduledActions === "") {
    contents.ScheduledActions = [];
  } else if (output["ScheduledActions"] !== undefined && output["ScheduledActions"]["ScheduledAction"] !== undefined) {
    contents.ScheduledActions = de_ScheduledActionList(
      __getArrayIfSingleItem(output["ScheduledActions"]["ScheduledAction"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledActionTimeList
 */
const de_ScheduledActionTimeList = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
};

/**
 * deserializeAws_queryScheduledActionType
 */
const de_ScheduledActionType = (output: any, context: __SerdeContext): ScheduledActionType => {
  const contents: any = {};
  if (output["ResizeCluster"] !== undefined) {
    contents.ResizeCluster = de_ResizeClusterMessage(output["ResizeCluster"], context);
  }
  if (output["PauseCluster"] !== undefined) {
    contents.PauseCluster = de_PauseClusterMessage(output["PauseCluster"], context);
  }
  if (output["ResumeCluster"] !== undefined) {
    contents.ResumeCluster = de_ResumeClusterMessage(output["ResumeCluster"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledActionTypeUnsupportedFault
 */
const de_ScheduledActionTypeUnsupportedFault = (
  output: any,
  context: __SerdeContext
): ScheduledActionTypeUnsupportedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduleDefinitionList
 */
const de_ScheduleDefinitionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryScheduleDefinitionTypeUnsupportedFault
 */
const de_ScheduleDefinitionTypeUnsupportedFault = (
  output: any,
  context: __SerdeContext
): ScheduleDefinitionTypeUnsupportedFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledSnapshotTimeList
 */
const de_ScheduledSnapshotTimeList = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
};

/**
 * deserializeAws_querySnapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  const contents: any = {};
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
    contents.AccountsWithRestoreAccess = de_AccountsWithRestoreAccessList(
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
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  if (output.RestorableNodeTypes === "") {
    contents.RestorableNodeTypes = [];
  } else if (output["RestorableNodeTypes"] !== undefined && output["RestorableNodeTypes"]["NodeType"] !== undefined) {
    contents.RestorableNodeTypes = de_RestorableNodeTypeList(
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

/**
 * deserializeAws_querySnapshotCopyAlreadyDisabledFault
 */
const de_SnapshotCopyAlreadyDisabledFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyAlreadyDisabledFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyAlreadyEnabledFault
 */
const de_SnapshotCopyAlreadyEnabledFault = (output: any, context: __SerdeContext): SnapshotCopyAlreadyEnabledFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyDisabledFault
 */
const de_SnapshotCopyDisabledFault = (output: any, context: __SerdeContext): SnapshotCopyDisabledFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyGrant
 */
const de_SnapshotCopyGrant = (output: any, context: __SerdeContext): SnapshotCopyGrant => {
  const contents: any = {};
  if (output["SnapshotCopyGrantName"] !== undefined) {
    contents.SnapshotCopyGrantName = __expectString(output["SnapshotCopyGrantName"]);
  }
  if (output["KmsKeyId"] !== undefined) {
    contents.KmsKeyId = __expectString(output["KmsKeyId"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyGrantAlreadyExistsFault
 */
const de_SnapshotCopyGrantAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyGrantAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyGrantList
 */
const de_SnapshotCopyGrantList = (output: any, context: __SerdeContext): SnapshotCopyGrant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SnapshotCopyGrant(entry, context);
    });
};

/**
 * deserializeAws_querySnapshotCopyGrantMessage
 */
const de_SnapshotCopyGrantMessage = (output: any, context: __SerdeContext): SnapshotCopyGrantMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.SnapshotCopyGrants === "") {
    contents.SnapshotCopyGrants = [];
  } else if (
    output["SnapshotCopyGrants"] !== undefined &&
    output["SnapshotCopyGrants"]["SnapshotCopyGrant"] !== undefined
  ) {
    contents.SnapshotCopyGrants = de_SnapshotCopyGrantList(
      __getArrayIfSingleItem(output["SnapshotCopyGrants"]["SnapshotCopyGrant"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyGrantNotFoundFault
 */
const de_SnapshotCopyGrantNotFoundFault = (output: any, context: __SerdeContext): SnapshotCopyGrantNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyGrantQuotaExceededFault
 */
const de_SnapshotCopyGrantQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SnapshotCopyGrantQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotErrorMessage
 */
const de_SnapshotErrorMessage = (output: any, context: __SerdeContext): SnapshotErrorMessage => {
  const contents: any = {};
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

/**
 * deserializeAws_querySnapshotIdentifierList
 */
const de_SnapshotIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySnapshotList
 */
const de_SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Snapshot(entry, context);
    });
};

/**
 * deserializeAws_querySnapshotMessage
 */
const de_SnapshotMessage = (output: any, context: __SerdeContext): SnapshotMessage => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output.Snapshots === "") {
    contents.Snapshots = [];
  } else if (output["Snapshots"] !== undefined && output["Snapshots"]["Snapshot"] !== undefined) {
    contents.Snapshots = de_SnapshotList(__getArrayIfSingleItem(output["Snapshots"]["Snapshot"]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotSchedule
 */
const de_SnapshotSchedule = (output: any, context: __SerdeContext): SnapshotSchedule => {
  const contents: any = {};
  if (output.ScheduleDefinitions === "") {
    contents.ScheduleDefinitions = [];
  } else if (
    output["ScheduleDefinitions"] !== undefined &&
    output["ScheduleDefinitions"]["ScheduleDefinition"] !== undefined
  ) {
    contents.ScheduleDefinitions = de_ScheduleDefinitionList(
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
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  if (output.NextInvocations === "") {
    contents.NextInvocations = [];
  } else if (output["NextInvocations"] !== undefined && output["NextInvocations"]["SnapshotTime"] !== undefined) {
    contents.NextInvocations = de_ScheduledSnapshotTimeList(
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
    contents.AssociatedClusters = de_AssociatedClusterList(
      __getArrayIfSingleItem(output["AssociatedClusters"]["ClusterAssociatedToSchedule"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotScheduleAlreadyExistsFault
 */
const de_SnapshotScheduleAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SnapshotScheduleAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotScheduleList
 */
const de_SnapshotScheduleList = (output: any, context: __SerdeContext): SnapshotSchedule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SnapshotSchedule(entry, context);
    });
};

/**
 * deserializeAws_querySnapshotScheduleNotFoundFault
 */
const de_SnapshotScheduleNotFoundFault = (output: any, context: __SerdeContext): SnapshotScheduleNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotScheduleQuotaExceededFault
 */
const de_SnapshotScheduleQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SnapshotScheduleQuotaExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotScheduleUpdateInProgressFault
 */
const de_SnapshotScheduleUpdateInProgressFault = (
  output: any,
  context: __SerdeContext
): SnapshotScheduleUpdateInProgressFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSInvalidTopicFault
 */
const de_SNSInvalidTopicFault = (output: any, context: __SerdeContext): SNSInvalidTopicFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSNoAuthorizationFault
 */
const de_SNSNoAuthorizationFault = (output: any, context: __SerdeContext): SNSNoAuthorizationFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSTopicArnNotFoundFault
 */
const de_SNSTopicArnNotFoundFault = (output: any, context: __SerdeContext): SNSTopicArnNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceIdsList
 */
const de_SourceIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySourceNotFoundFault
 */
const de_SourceNotFoundFault = (output: any, context: __SerdeContext): SourceNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnet
 */
const de_Subnet = (output: any, context: __SerdeContext): Subnet => {
  const contents: any = {};
  if (output["SubnetIdentifier"] !== undefined) {
    contents.SubnetIdentifier = __expectString(output["SubnetIdentifier"]);
  }
  if (output["SubnetAvailabilityZone"] !== undefined) {
    contents.SubnetAvailabilityZone = de_AvailabilityZone(output["SubnetAvailabilityZone"], context);
  }
  if (output["SubnetStatus"] !== undefined) {
    contents.SubnetStatus = __expectString(output["SubnetStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetAlreadyInUse
 */
const de_SubnetAlreadyInUse = (output: any, context: __SerdeContext): SubnetAlreadyInUse => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetList
 */
const de_SubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Subnet(entry, context);
    });
};

/**
 * deserializeAws_querySubscriptionAlreadyExistFault
 */
const de_SubscriptionAlreadyExistFault = (output: any, context: __SerdeContext): SubscriptionAlreadyExistFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionCategoryNotFoundFault
 */
const de_SubscriptionCategoryNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionCategoryNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionEventIdNotFoundFault
 */
const de_SubscriptionEventIdNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionEventIdNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionNotFoundFault
 */
const de_SubscriptionNotFoundFault = (output: any, context: __SerdeContext): SubscriptionNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionSeverityNotFoundFault
 */
const de_SubscriptionSeverityNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubscriptionSeverityNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySupportedOperation
 */
const de_SupportedOperation = (output: any, context: __SerdeContext): SupportedOperation => {
  const contents: any = {};
  if (output["OperationName"] !== undefined) {
    contents.OperationName = __expectString(output["OperationName"]);
  }
  return contents;
};

/**
 * deserializeAws_querySupportedOperationList
 */
const de_SupportedOperationList = (output: any, context: __SerdeContext): SupportedOperation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SupportedOperation(entry, context);
    });
};

/**
 * deserializeAws_querySupportedPlatform
 */
const de_SupportedPlatform = (output: any, context: __SerdeContext): SupportedPlatform => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

/**
 * deserializeAws_querySupportedPlatformsList
 */
const de_SupportedPlatformsList = (output: any, context: __SerdeContext): SupportedPlatform[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SupportedPlatform(entry, context);
    });
};

/**
 * deserializeAws_queryTableLimitExceededFault
 */
const de_TableLimitExceededFault = (output: any, context: __SerdeContext): TableLimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTableRestoreNotFoundFault
 */
const de_TableRestoreNotFoundFault = (output: any, context: __SerdeContext): TableRestoreNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTableRestoreStatus
 */
const de_TableRestoreStatus = (output: any, context: __SerdeContext): TableRestoreStatus => {
  const contents: any = {};
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

/**
 * deserializeAws_queryTableRestoreStatusList
 */
const de_TableRestoreStatusList = (output: any, context: __SerdeContext): TableRestoreStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableRestoreStatus(entry, context);
    });
};

/**
 * deserializeAws_queryTableRestoreStatusMessage
 */
const de_TableRestoreStatusMessage = (output: any, context: __SerdeContext): TableRestoreStatusMessage => {
  const contents: any = {};
  if (output.TableRestoreStatusDetails === "") {
    contents.TableRestoreStatusDetails = [];
  } else if (
    output["TableRestoreStatusDetails"] !== undefined &&
    output["TableRestoreStatusDetails"]["TableRestoreStatus"] !== undefined
  ) {
    contents.TableRestoreStatusDetails = de_TableRestoreStatusList(
      __getArrayIfSingleItem(output["TableRestoreStatusDetails"]["TableRestoreStatus"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTaggedResource
 */
const de_TaggedResource = (output: any, context: __SerdeContext): TaggedResource => {
  const contents: any = {};
  if (output["Tag"] !== undefined) {
    contents.Tag = de_Tag(output["Tag"], context);
  }
  if (output["ResourceName"] !== undefined) {
    contents.ResourceName = __expectString(output["ResourceName"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTaggedResourceList
 */
const de_TaggedResourceList = (output: any, context: __SerdeContext): TaggedResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaggedResource(entry, context);
    });
};

/**
 * deserializeAws_queryTaggedResourceListMessage
 */
const de_TaggedResourceListMessage = (output: any, context: __SerdeContext): TaggedResourceListMessage => {
  const contents: any = {};
  if (output.TaggedResources === "") {
    contents.TaggedResources = [];
  } else if (output["TaggedResources"] !== undefined && output["TaggedResources"]["TaggedResource"] !== undefined) {
    contents.TaggedResources = de_TaggedResourceList(
      __getArrayIfSingleItem(output["TaggedResources"]["TaggedResource"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagLimitExceededFault
 */
const de_TagLimitExceededFault = (output: any, context: __SerdeContext): TagLimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_queryTrackList
 */
const de_TrackList = (output: any, context: __SerdeContext): MaintenanceTrack[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MaintenanceTrack(entry, context);
    });
};

/**
 * deserializeAws_queryTrackListMessage
 */
const de_TrackListMessage = (output: any, context: __SerdeContext): TrackListMessage => {
  const contents: any = {};
  if (output.MaintenanceTracks === "") {
    contents.MaintenanceTracks = [];
  } else if (
    output["MaintenanceTracks"] !== undefined &&
    output["MaintenanceTracks"]["MaintenanceTrack"] !== undefined
  ) {
    contents.MaintenanceTracks = de_TrackList(
      __getArrayIfSingleItem(output["MaintenanceTracks"]["MaintenanceTrack"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnauthorizedOperation
 */
const de_UnauthorizedOperation = (output: any, context: __SerdeContext): UnauthorizedOperation => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnauthorizedPartnerIntegrationFault
 */
const de_UnauthorizedPartnerIntegrationFault = (
  output: any,
  context: __SerdeContext
): UnauthorizedPartnerIntegrationFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnknownSnapshotCopyRegionFault
 */
const de_UnknownSnapshotCopyRegionFault = (output: any, context: __SerdeContext): UnknownSnapshotCopyRegionFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnsupportedOperationFault
 */
const de_UnsupportedOperationFault = (output: any, context: __SerdeContext): UnsupportedOperationFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnsupportedOptionFault
 */
const de_UnsupportedOptionFault = (output: any, context: __SerdeContext): UnsupportedOptionFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateTarget
 */
const de_UpdateTarget = (output: any, context: __SerdeContext): UpdateTarget => {
  const contents: any = {};
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
    contents.SupportedOperations = de_SupportedOperationList(
      __getArrayIfSingleItem(output["SupportedOperations"]["SupportedOperation"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimit
 */
const de_UsageLimit = (output: any, context: __SerdeContext): UsageLimit => {
  const contents: any = {};
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
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimitAlreadyExistsFault
 */
const de_UsageLimitAlreadyExistsFault = (output: any, context: __SerdeContext): UsageLimitAlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimitList
 */
const de_UsageLimitList = (output: any, context: __SerdeContext): UsageLimitList => {
  const contents: any = {};
  if (output.UsageLimits === "") {
    contents.UsageLimits = [];
  } else if (output["UsageLimits"] !== undefined && output["UsageLimits"]["member"] !== undefined) {
    contents.UsageLimits = de_UsageLimits(__getArrayIfSingleItem(output["UsageLimits"]["member"]), context);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimitNotFoundFault
 */
const de_UsageLimitNotFoundFault = (output: any, context: __SerdeContext): UsageLimitNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimits
 */
const de_UsageLimits = (output: any, context: __SerdeContext): UsageLimit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageLimit(entry, context);
    });
};

/**
 * deserializeAws_queryVpcEndpoint
 */
const de_VpcEndpoint = (output: any, context: __SerdeContext): VpcEndpoint => {
  const contents: any = {};
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
    contents.NetworkInterfaces = de_NetworkInterfaceList(
      __getArrayIfSingleItem(output["NetworkInterfaces"]["NetworkInterface"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryVpcEndpointsList
 */
const de_VpcEndpointsList = (output: any, context: __SerdeContext): VpcEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VpcEndpoint(entry, context);
    });
};

/**
 * deserializeAws_queryVpcIdentifierList
 */
const de_VpcIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryVpcSecurityGroupMembership
 */
const de_VpcSecurityGroupMembership = (output: any, context: __SerdeContext): VpcSecurityGroupMembership => {
  const contents: any = {};
  if (output["VpcSecurityGroupId"] !== undefined) {
    contents.VpcSecurityGroupId = __expectString(output["VpcSecurityGroupId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryVpcSecurityGroupMembershipList
 */
const de_VpcSecurityGroupMembershipList = (output: any, context: __SerdeContext): VpcSecurityGroupMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VpcSecurityGroupMembership(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
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
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
