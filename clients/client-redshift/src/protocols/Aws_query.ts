// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeDateTime as __serializeDateTime,
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
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "../commands/CreateIntegrationCommand";
import {
  CreateRedshiftIdcApplicationCommandInput,
  CreateRedshiftIdcApplicationCommandOutput,
} from "../commands/CreateRedshiftIdcApplicationCommand";
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
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import { DeletePartnerCommandInput, DeletePartnerCommandOutput } from "../commands/DeletePartnerCommand";
import {
  DeleteRedshiftIdcApplicationCommandInput,
  DeleteRedshiftIdcApplicationCommandOutput,
} from "../commands/DeleteRedshiftIdcApplicationCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
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
  DeregisterNamespaceCommandInput,
  DeregisterNamespaceCommandOutput,
} from "../commands/DeregisterNamespaceCommand";
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
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
} from "../commands/DescribeInboundIntegrationsCommand";
import {
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "../commands/DescribeIntegrationsCommand";
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
  DescribeRedshiftIdcApplicationsCommandInput,
  DescribeRedshiftIdcApplicationsCommandOutput,
} from "../commands/DescribeRedshiftIdcApplicationsCommand";
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
  FailoverPrimaryComputeCommandInput,
  FailoverPrimaryComputeCommandOutput,
} from "../commands/FailoverPrimaryComputeCommand";
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
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
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
import { ModifyIntegrationCommandInput, ModifyIntegrationCommandOutput } from "../commands/ModifyIntegrationCommand";
import {
  ModifyRedshiftIdcApplicationCommandInput,
  ModifyRedshiftIdcApplicationCommandOutput,
} from "../commands/ModifyRedshiftIdcApplicationCommand";
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
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { RebootClusterCommandInput, RebootClusterCommandOutput } from "../commands/RebootClusterCommand";
import { RegisterNamespaceCommandInput, RegisterNamespaceCommandOutput } from "../commands/RegisterNamespaceCommand";
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
  AuthorizedTokenIssuer,
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
  ConflictPolicyUpdateFault,
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
  CreateIntegrationMessage,
  CreateRedshiftIdcApplicationMessage,
  CreateRedshiftIdcApplicationResult,
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
  DeleteIntegrationMessage,
  DeleteRedshiftIdcApplicationMessage,
  DeleteResourcePolicyMessage,
  DeleteScheduledActionMessage,
  DeleteSnapshotCopyGrantMessage,
  DeleteSnapshotScheduleMessage,
  DeleteTagsMessage,
  DeleteUsageLimitMessage,
  DependentServiceAccessDeniedFault,
  DependentServiceRequestThrottlingFault,
  DependentServiceUnavailableFault,
  DeregisterNamespaceInputMessage,
  EC2SecurityGroup,
  ElasticIpStatus,
  Endpoint,
  EndpointAccess,
  EndpointAlreadyExistsFault,
  EndpointAuthorization,
  EndpointAuthorizationAlreadyExistsFault,
  EndpointAuthorizationsPerClusterLimitExceededFault,
  EndpointNotFoundFault,
  EndpointsPerAuthorizationLimitExceededFault,
  EndpointsPerClusterLimitExceededFault,
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
  Integration,
  IntegrationAlreadyExistsFault,
  IntegrationConflictOperationFault,
  IntegrationConflictStateFault,
  IntegrationError,
  IntegrationNotFoundFault,
  IntegrationQuotaExceededFault,
  IntegrationSourceNotFoundFault,
  IntegrationTargetNotFoundFault,
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
  Ipv6CidrBlockNotFoundFault,
  LakeFormationQuery,
  LakeFormationScopeUnion,
  LimitExceededFault,
  NamespaceIdentifierUnion,
  NetworkInterface,
  NumberOfNodesPerClusterLimitExceededFault,
  NumberOfNodesQuotaExceededFault,
  Parameter,
  PartnerIntegrationInputMessage,
  PartnerIntegrationOutputMessage,
  PartnerNotFoundFault,
  PauseClusterMessage,
  PendingModifiedValues,
  ProvisionedIdentifier,
  ReadWriteAccess,
  RecurringCharge,
  RedshiftIdcApplication,
  RedshiftIdcApplicationAlreadyExistsFault,
  RedshiftIdcApplicationNotExistsFault,
  RedshiftIdcApplicationQuotaExceededFault,
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
  S3AccessGrantsScopeUnion,
  ScheduledAction,
  ScheduledActionAlreadyExistsFault,
  ScheduledActionNotFoundFault,
  ScheduledActionQuotaExceededFault,
  ScheduledActionType,
  ScheduledActionTypeUnsupportedFault,
  ScheduleDefinitionTypeUnsupportedFault,
  SecondaryClusterInfo,
  ServerlessIdentifier,
  ServiceIntegrationsUnion,
  Snapshot,
  SnapshotCopyGrant,
  SnapshotCopyGrantAlreadyExistsFault,
  SnapshotCopyGrantNotFoundFault,
  SnapshotCopyGrantQuotaExceededFault,
  SnapshotErrorMessage,
  SnapshotSchedule,
  SnapshotScheduleAlreadyExistsFault,
  SnapshotScheduleNotFoundFault,
  SnapshotScheduleQuotaExceededFault,
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
  SupportedPlatform,
  Tag,
  TagLimitExceededFault,
  UnauthorizedOperation,
  UnauthorizedPartnerIntegrationFault,
  UnsupportedOperationFault,
  UsageLimit,
  UsageLimitAlreadyExistsFault,
  UsageLimitNotFoundFault,
  VpcEndpoint,
  VpcSecurityGroupMembership,
} from "../models/models_0";
import {
  DeregisterNamespaceOutputMessage,
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
  DescribeEventsMessage,
  DescribeEventSubscriptionsMessage,
  DescribeHsmClientCertificatesMessage,
  DescribeHsmConfigurationsMessage,
  DescribeInboundIntegrationsMessage,
  DescribeIntegrationsFilter,
  DescribeIntegrationsMessage,
  DescribeLoggingStatusMessage,
  DescribeNodeConfigurationOptionsMessage,
  DescribeOrderableClusterOptionsMessage,
  DescribePartnersInputMessage,
  DescribePartnersOutputMessage,
  DescribeRedshiftIdcApplicationsMessage,
  DescribeRedshiftIdcApplicationsResult,
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
  EndpointAccessList,
  EndpointAuthorizationList,
  EndpointAuthorizationNotFoundFault,
  Event,
  EventCategoriesMap,
  EventCategoriesMessage,
  EventInfoMap,
  EventsMessage,
  EventSubscriptionsMessage,
  FailoverPrimaryComputeInputMessage,
  FailoverPrimaryComputeResult,
  GetClusterCredentialsMessage,
  GetClusterCredentialsWithIAMMessage,
  GetReservedNodeExchangeConfigurationOptionsInputMessage,
  GetReservedNodeExchangeConfigurationOptionsOutputMessage,
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsOutputMessage,
  GetResourcePolicyMessage,
  GetResourcePolicyResult,
  HsmClientCertificateMessage,
  HsmConfigurationMessage,
  InboundIntegration,
  InboundIntegrationsMessage,
  IncompatibleOrderableOptions,
  InProgressTableRestoreQuotaExceededFault,
  InsufficientS3BucketPolicyFault,
  IntegrationsMessage,
  InvalidPolicyFault,
  InvalidRestoreFault,
  InvalidS3BucketNameFault,
  InvalidS3KeyPrefixFault,
  InvalidTableRestoreArgumentFault,
  ListRecommendationsMessage,
  ListRecommendationsResult,
  LoggingStatus,
  MaintenanceTrack,
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
  ModifyIntegrationMessage,
  ModifyRedshiftIdcApplicationMessage,
  ModifyRedshiftIdcApplicationResult,
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
  PutResourcePolicyMessage,
  PutResourcePolicyResult,
  RebootClusterMessage,
  RebootClusterResult,
  Recommendation,
  RecommendedAction,
  ReferenceLink,
  RegisterNamespaceInputMessage,
  RegisterNamespaceOutputMessage,
  RejectDataShareMessage,
  ReservedNodeConfigurationOption,
  ReservedNodeExchangeNotFoundFault,
  ReservedNodeOffering,
  ReservedNodeOfferingsMessage,
  ReservedNodeQuotaExceededFault,
  ReservedNodesMessage,
  ResetClusterParameterGroupMessage,
  ResizeClusterResult,
  ResourcePolicy,
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
  SnapshotMessage,
  SnapshotScheduleUpdateInProgressFault,
  SnapshotSortingEntity,
  SubnetAlreadyInUse,
  SupportedOperation,
  TableLimitExceededFault,
  TableRestoreNotFoundFault,
  TableRestoreStatus,
  TableRestoreStatusMessage,
  TaggedResource,
  TaggedResourceListMessage,
  TrackListMessage,
  UnknownSnapshotCopyRegionFault,
  UnsupportedOptionFault,
  UpdatePartnerStatusInputMessage,
  UpdateTarget,
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
    [_A]: _ARNE,
    [_V]: _,
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
    [_A]: _AP,
    [_V]: _,
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
    [_A]: _ADSC,
    [_V]: _,
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
    [_A]: _ACSGI,
    [_V]: _,
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
    [_A]: _ADS,
    [_V]: _,
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
    [_A]: _AEA,
    [_V]: _,
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
    [_A]: _ASA,
    [_V]: _,
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
    [_A]: _BDCS,
    [_V]: _,
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
    [_A]: _BMCS,
    [_V]: _,
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
    [_A]: _CR,
    [_V]: _,
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
    [_A]: _CCS,
    [_V]: _,
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
    [_A]: _CAP,
    [_V]: _,
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
    [_A]: _CC,
    [_V]: _,
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
    [_A]: _CCPG,
    [_V]: _,
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
    [_A]: _CCSG,
    [_V]: _,
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
    [_A]: _CCSr,
    [_V]: _,
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
    [_A]: _CCSGr,
    [_V]: _,
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
    [_A]: _CCDA,
    [_V]: _,
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
    [_A]: _CEA,
    [_V]: _,
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
    [_A]: _CES,
    [_V]: _,
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
    [_A]: _CHCC,
    [_V]: _,
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
    [_A]: _CHC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateIntegrationCommand
 */
export const se_CreateIntegrationCommand = async (
  input: CreateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateIntegrationMessage(input, context),
    [_A]: _CI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateRedshiftIdcApplicationCommand
 */
export const se_CreateRedshiftIdcApplicationCommand = async (
  input: CreateRedshiftIdcApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateRedshiftIdcApplicationMessage(input, context),
    [_A]: _CRIA,
    [_V]: _,
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
    [_A]: _CSA,
    [_V]: _,
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
    [_A]: _CSCG,
    [_V]: _,
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
    [_A]: _CSS,
    [_V]: _,
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
    [_A]: _CT,
    [_V]: _,
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
    [_A]: _CUL,
    [_V]: _,
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
    [_A]: _DDS,
    [_V]: _,
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
    [_A]: _DAP,
    [_V]: _,
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
    [_A]: _DC,
    [_V]: _,
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
    [_A]: _DCPG,
    [_V]: _,
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
    [_A]: _DCSG,
    [_V]: _,
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
    [_A]: _DCS,
    [_V]: _,
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
    [_A]: _DCSGe,
    [_V]: _,
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
    [_A]: _DCDA,
    [_V]: _,
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
    [_A]: _DEA,
    [_V]: _,
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
    [_A]: _DES,
    [_V]: _,
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
    [_A]: _DHCC,
    [_V]: _,
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
    [_A]: _DHC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteIntegrationCommand
 */
export const se_DeleteIntegrationCommand = async (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteIntegrationMessage(input, context),
    [_A]: _DI,
    [_V]: _,
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
    [_A]: _DP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteRedshiftIdcApplicationCommand
 */
export const se_DeleteRedshiftIdcApplicationCommand = async (
  input: DeleteRedshiftIdcApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteRedshiftIdcApplicationMessage(input, context),
    [_A]: _DRIA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteResourcePolicyMessage(input, context),
    [_A]: _DRP,
    [_V]: _,
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
    [_A]: _DSA,
    [_V]: _,
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
    [_A]: _DSCG,
    [_V]: _,
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
    [_A]: _DSS,
    [_V]: _,
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
    [_A]: _DT,
    [_V]: _,
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
    [_A]: _DUL,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeregisterNamespaceCommand
 */
export const se_DeregisterNamespaceCommand = async (
  input: DeregisterNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeregisterNamespaceInputMessage(input, context),
    [_A]: _DN,
    [_V]: _,
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
    [_A]: _DAA,
    [_V]: _,
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
    [_A]: _DAPe,
    [_V]: _,
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
    [_A]: _DCDR,
    [_V]: _,
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
    [_A]: _DCPGe,
    [_V]: _,
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
    [_A]: _DCP,
    [_V]: _,
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
    [_A]: _DCe,
    [_V]: _,
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
    [_A]: _DCSGes,
    [_V]: _,
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
    [_A]: _DCSe,
    [_V]: _,
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
    [_A]: _DCSGesc,
    [_V]: _,
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
    [_A]: _DCT,
    [_V]: _,
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
    [_A]: _DCV,
    [_V]: _,
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
    [_A]: _DCDAe,
    [_V]: _,
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
    [_A]: _DDSe,
    [_V]: _,
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
    [_A]: _DDSFC,
    [_V]: _,
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
    [_A]: _DDSFP,
    [_V]: _,
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
    [_A]: _DDCP,
    [_V]: _,
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
    [_A]: _DEAe,
    [_V]: _,
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
    [_A]: _DEAes,
    [_V]: _,
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
    [_A]: _DEC,
    [_V]: _,
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
    [_A]: _DE,
    [_V]: _,
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
    [_A]: _DESe,
    [_V]: _,
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
    [_A]: _DHCCe,
    [_V]: _,
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
    [_A]: _DHCe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeInboundIntegrationsCommand
 */
export const se_DescribeInboundIntegrationsCommand = async (
  input: DescribeInboundIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeInboundIntegrationsMessage(input, context),
    [_A]: _DII,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeIntegrationsCommand
 */
export const se_DescribeIntegrationsCommand = async (
  input: DescribeIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeIntegrationsMessage(input, context),
    [_A]: _DIe,
    [_V]: _,
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
    [_A]: _DLS,
    [_V]: _,
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
    [_A]: _DNCO,
    [_V]: _,
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
    [_A]: _DOCO,
    [_V]: _,
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
    [_A]: _DPe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeRedshiftIdcApplicationsCommand
 */
export const se_DescribeRedshiftIdcApplicationsCommand = async (
  input: DescribeRedshiftIdcApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeRedshiftIdcApplicationsMessage(input, context),
    [_A]: _DRIAe,
    [_V]: _,
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
    [_A]: _DRNES,
    [_V]: _,
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
    [_A]: _DRNO,
    [_V]: _,
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
    [_A]: _DRN,
    [_V]: _,
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
    [_A]: _DR,
    [_V]: _,
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
    [_A]: _DSAe,
    [_V]: _,
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
    [_A]: _DSCGe,
    [_V]: _,
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
    [_A]: _DSSe,
    [_V]: _,
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
    [_A]: _DS,
    [_V]: _,
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
    [_A]: _DTRS,
    [_V]: _,
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
    [_A]: _DTe,
    [_V]: _,
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
    [_A]: _DULe,
    [_V]: _,
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
    [_A]: _DL,
    [_V]: _,
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
    [_A]: _DSC,
    [_V]: _,
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
    [_A]: _DDSC,
    [_V]: _,
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
    [_A]: _EL,
    [_V]: _,
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
    [_A]: _ESC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryFailoverPrimaryComputeCommand
 */
export const se_FailoverPrimaryComputeCommand = async (
  input: FailoverPrimaryComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_FailoverPrimaryComputeInputMessage(input, context),
    [_A]: _FPC,
    [_V]: _,
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
    [_A]: _GCC,
    [_V]: _,
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
    [_A]: _GCCWIAM,
    [_V]: _,
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
    [_A]: _GRNECO,
    [_V]: _,
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
    [_A]: _GRNEO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetResourcePolicyMessage(input, context),
    [_A]: _GRP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListRecommendationsCommand
 */
export const se_ListRecommendationsCommand = async (
  input: ListRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListRecommendationsMessage(input, context),
    [_A]: _LR,
    [_V]: _,
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
    [_A]: _MAC,
    [_V]: _,
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
    [_A]: _MAP,
    [_V]: _,
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
    [_A]: _MC,
    [_V]: _,
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
    [_A]: _MCDR,
    [_V]: _,
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
    [_A]: _MCIR,
    [_V]: _,
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
    [_A]: _MCM,
    [_V]: _,
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
    [_A]: _MCPG,
    [_V]: _,
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
    [_A]: _MCS,
    [_V]: _,
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
    [_A]: _MCSS,
    [_V]: _,
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
    [_A]: _MCSG,
    [_V]: _,
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
    [_A]: _MCDA,
    [_V]: _,
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
    [_A]: _MEA,
    [_V]: _,
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
    [_A]: _MES,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyIntegrationCommand
 */
export const se_ModifyIntegrationCommand = async (
  input: ModifyIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyIntegrationMessage(input, context),
    [_A]: _MI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyRedshiftIdcApplicationCommand
 */
export const se_ModifyRedshiftIdcApplicationCommand = async (
  input: ModifyRedshiftIdcApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyRedshiftIdcApplicationMessage(input, context),
    [_A]: _MRIA,
    [_V]: _,
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
    [_A]: _MSA,
    [_V]: _,
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
    [_A]: _MSCRP,
    [_V]: _,
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
    [_A]: _MSS,
    [_V]: _,
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
    [_A]: _MUL,
    [_V]: _,
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
    [_A]: _PC,
    [_V]: _,
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
    [_A]: _PRNO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutResourcePolicyMessage(input, context),
    [_A]: _PRP,
    [_V]: _,
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
    [_A]: _RC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRegisterNamespaceCommand
 */
export const se_RegisterNamespaceCommand = async (
  input: RegisterNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RegisterNamespaceInputMessage(input, context),
    [_A]: _RN,
    [_V]: _,
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
    [_A]: _RDS,
    [_V]: _,
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
    [_A]: _RCPG,
    [_V]: _,
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
    [_A]: _RCe,
    [_V]: _,
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
    [_A]: _RFCS,
    [_V]: _,
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
    [_A]: _RTFCS,
    [_V]: _,
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
    [_A]: _RCes,
    [_V]: _,
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
    [_A]: _RCSGI,
    [_V]: _,
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
    [_A]: _REA,
    [_V]: _,
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
    [_A]: _RSA,
    [_V]: _,
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
    [_A]: _REK,
    [_V]: _,
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
    [_A]: _UPS,
    [_V]: _,
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
    return de_CommandError(output, context);
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
 * deserializeAws_queryAddPartnerCommand
 */
export const de_AddPartnerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPartnerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAssociateDataShareConsumerCommand
 */
export const de_AssociateDataShareConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDataShareConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand
 */
export const de_AuthorizeClusterSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAuthorizeDataShareCommand
 */
export const de_AuthorizeDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAuthorizeEndpointAccessCommand
 */
export const de_AuthorizeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAuthorizeSnapshotAccessCommand
 */
export const de_AuthorizeSnapshotAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeSnapshotAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryBatchDeleteClusterSnapshotsCommand
 */
export const de_BatchDeleteClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryBatchModifyClusterSnapshotsCommand
 */
export const de_BatchModifyClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchModifyClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCancelResizeCommand
 */
export const de_CancelResizeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelResizeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCopyClusterSnapshotCommand
 */
export const de_CopyClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateAuthenticationProfileCommand
 */
export const de_CreateAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateClusterParameterGroupCommand
 */
export const de_CreateClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateClusterSecurityGroupCommand
 */
export const de_CreateClusterSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateClusterSnapshotCommand
 */
export const de_CreateClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateClusterSubnetGroupCommand
 */
export const de_CreateClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateCustomDomainAssociationCommand
 */
export const de_CreateCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateEndpointAccessCommand
 */
export const de_CreateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateEventSubscriptionCommand
 */
export const de_CreateEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateHsmClientCertificateCommand
 */
export const de_CreateHsmClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmClientCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateHsmConfigurationCommand
 */
export const de_CreateHsmConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateIntegrationCommand
 */
export const de_CreateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Integration(data.CreateIntegrationResult, context);
  const response: CreateIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateRedshiftIdcApplicationCommand
 */
export const de_CreateRedshiftIdcApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRedshiftIdcApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRedshiftIdcApplicationResult(data.CreateRedshiftIdcApplicationResult, context);
  const response: CreateRedshiftIdcApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateScheduledActionCommand
 */
export const de_CreateScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateSnapshotCopyGrantCommand
 */
export const de_CreateSnapshotCopyGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCopyGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateSnapshotScheduleCommand
 */
export const de_CreateSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateUsageLimitCommand
 */
export const de_CreateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeauthorizeDataShareCommand
 */
export const de_DeauthorizeDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteAuthenticationProfileCommand
 */
export const de_DeleteAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteClusterParameterGroupCommand
 */
export const de_DeleteClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteClusterSecurityGroupCommand
 */
export const de_DeleteClusterSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSecurityGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteClusterSnapshotCommand
 */
export const de_DeleteClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteClusterSubnetGroupCommand
 */
export const de_DeleteClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteClusterSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCustomDomainAssociationCommand
 */
export const de_DeleteCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEndpointAccessCommand
 */
export const de_DeleteEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteEventSubscriptionCommand
 */
export const de_DeleteEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteHsmClientCertificateCommand
 */
export const de_DeleteHsmClientCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmClientCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHsmClientCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteHsmConfigurationCommand
 */
export const de_DeleteHsmConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHsmConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteIntegrationCommand
 */
export const de_DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Integration(data.DeleteIntegrationResult, context);
  const response: DeleteIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeletePartnerCommand
 */
export const de_DeletePartnerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteRedshiftIdcApplicationCommand
 */
export const de_DeleteRedshiftIdcApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRedshiftIdcApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRedshiftIdcApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteScheduledActionCommand
 */
export const de_DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSnapshotCopyGrantCommand
 */
export const de_DeleteSnapshotCopyGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCopyGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSnapshotCopyGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSnapshotScheduleCommand
 */
export const de_DeleteSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUsageLimitCommand
 */
export const de_DeleteUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeregisterNamespaceCommand
 */
export const de_DeregisterNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterNamespaceOutputMessage(data.DeregisterNamespaceResult, context);
  const response: DeregisterNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAuthenticationProfilesCommand
 */
export const de_DescribeAuthenticationProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuthenticationProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClusterDbRevisionsCommand
 */
export const de_DescribeClusterDbRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterDbRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClusterParameterGroupsCommand
 */
export const de_DescribeClusterParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClusterParametersCommand
 */
export const de_DescribeClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClustersCommand
 */
export const de_DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClusterSecurityGroupsCommand
 */
export const de_DescribeClusterSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClusterSnapshotsCommand
 */
export const de_DescribeClusterSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClusterSubnetGroupsCommand
 */
export const de_DescribeClusterSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClusterTracksCommand
 */
export const de_DescribeClusterTracksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterTracksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeClusterVersionsCommand
 */
export const de_DescribeClusterVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeCustomDomainAssociationsCommand
 */
export const de_DescribeCustomDomainAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDataSharesCommand
 */
export const de_DescribeDataSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDataSharesForConsumerCommand
 */
export const de_DescribeDataSharesForConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesForConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDataSharesForProducerCommand
 */
export const de_DescribeDataSharesForProducerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSharesForProducerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDefaultClusterParametersCommand
 */
export const de_DescribeDefaultClusterParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultClusterParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeEndpointAccessCommand
 */
export const de_DescribeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeEndpointAuthorizationCommand
 */
export const de_DescribeEndpointAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeEventCategoriesCommand
 */
export const de_DescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeEventSubscriptionsCommand
 */
export const de_DescribeEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeHsmClientCertificatesCommand
 */
export const de_DescribeHsmClientCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmClientCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeHsmConfigurationsCommand
 */
export const de_DescribeHsmConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeInboundIntegrationsCommand
 */
export const de_DescribeInboundIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundIntegrationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InboundIntegrationsMessage(data.DescribeInboundIntegrationsResult, context);
  const response: DescribeInboundIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeIntegrationsCommand
 */
export const de_DescribeIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIntegrationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IntegrationsMessage(data.DescribeIntegrationsResult, context);
  const response: DescribeIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoggingStatusCommand
 */
export const de_DescribeLoggingStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeNodeConfigurationOptionsCommand
 */
export const de_DescribeNodeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeOrderableClusterOptionsCommand
 */
export const de_DescribeOrderableClusterOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableClusterOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribePartnersCommand
 */
export const de_DescribePartnersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeRedshiftIdcApplicationsCommand
 */
export const de_DescribeRedshiftIdcApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRedshiftIdcApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRedshiftIdcApplicationsResult(data.DescribeRedshiftIdcApplicationsResult, context);
  const response: DescribeRedshiftIdcApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReservedNodeExchangeStatusCommand
 */
export const de_DescribeReservedNodeExchangeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodeExchangeStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeReservedNodeOfferingsCommand
 */
export const de_DescribeReservedNodeOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodeOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeReservedNodesCommand
 */
export const de_DescribeReservedNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeResizeCommand
 */
export const de_DescribeResizeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResizeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeScheduledActionsCommand
 */
export const de_DescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeSnapshotCopyGrantsCommand
 */
export const de_DescribeSnapshotCopyGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotCopyGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeSnapshotSchedulesCommand
 */
export const de_DescribeSnapshotSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotSchedulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeStorageCommand
 */
export const de_DescribeStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeTableRestoreStatusCommand
 */
export const de_DescribeTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeUsageLimitsCommand
 */
export const de_DescribeUsageLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDisableLoggingCommand
 */
export const de_DisableLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDisableSnapshotCopyCommand
 */
export const de_DisableSnapshotCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSnapshotCopyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDisassociateDataShareConsumerCommand
 */
export const de_DisassociateDataShareConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDataShareConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryEnableLoggingCommand
 */
export const de_EnableLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryEnableSnapshotCopyCommand
 */
export const de_EnableSnapshotCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSnapshotCopyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryFailoverPrimaryComputeCommand
 */
export const de_FailoverPrimaryComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FailoverPrimaryComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FailoverPrimaryComputeResult(data.FailoverPrimaryComputeResult, context);
  const response: FailoverPrimaryComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetClusterCredentialsCommand
 */
export const de_GetClusterCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryGetClusterCredentialsWithIAMCommand
 */
export const de_GetClusterCredentialsWithIAMCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCredentialsWithIAMCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryGetReservedNodeExchangeConfigurationOptionsCommand
 */
export const de_GetReservedNodeExchangeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryGetReservedNodeExchangeOfferingsCommand
 */
export const de_GetReservedNodeExchangeOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservedNodeExchangeOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryGetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePolicyResult(data.GetResourcePolicyResult, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListRecommendationsCommand
 */
export const de_ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRecommendationsResult(data.ListRecommendationsResult, context);
  const response: ListRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyAquaConfigurationCommand
 */
export const de_ModifyAquaConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAquaConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyAuthenticationProfileCommand
 */
export const de_ModifyAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAuthenticationProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyClusterCommand
 */
export const de_ModifyClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyClusterDbRevisionCommand
 */
export const de_ModifyClusterDbRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterDbRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyClusterIamRolesCommand
 */
export const de_ModifyClusterIamRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterIamRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyClusterMaintenanceCommand
 */
export const de_ModifyClusterMaintenanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterMaintenanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyClusterParameterGroupCommand
 */
export const de_ModifyClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyClusterSnapshotCommand
 */
export const de_ModifyClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyClusterSnapshotScheduleCommand
 */
export const de_ModifyClusterSnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ModifyClusterSnapshotScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryModifyClusterSubnetGroupCommand
 */
export const de_ModifyClusterSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyCustomDomainAssociationCommand
 */
export const de_ModifyCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyEndpointAccessCommand
 */
export const de_ModifyEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyEventSubscriptionCommand
 */
export const de_ModifyEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyIntegrationCommand
 */
export const de_ModifyIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Integration(data.ModifyIntegrationResult, context);
  const response: ModifyIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyRedshiftIdcApplicationCommand
 */
export const de_ModifyRedshiftIdcApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyRedshiftIdcApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyRedshiftIdcApplicationResult(data.ModifyRedshiftIdcApplicationResult, context);
  const response: ModifyRedshiftIdcApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyScheduledActionCommand
 */
export const de_ModifyScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand
 */
export const de_ModifySnapshotCopyRetentionPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifySnapshotScheduleCommand
 */
export const de_ModifySnapshotScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySnapshotScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyUsageLimitCommand
 */
export const de_ModifyUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryPauseClusterCommand
 */
export const de_PauseClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryPurchaseReservedNodeOfferingCommand
 */
export const de_PurchaseReservedNodeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedNodeOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryPutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyResult(data.PutResourcePolicyResult, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRebootClusterCommand
 */
export const de_RebootClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRegisterNamespaceCommand
 */
export const de_RegisterNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterNamespaceOutputMessage(data.RegisterNamespaceResult, context);
  const response: RegisterNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRejectDataShareCommand
 */
export const de_RejectDataShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectDataShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryResetClusterParameterGroupCommand
 */
export const de_ResetClusterParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetClusterParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryResizeClusterCommand
 */
export const de_ResizeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResizeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRestoreFromClusterSnapshotCommand
 */
export const de_RestoreFromClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRestoreTableFromClusterSnapshotCommand
 */
export const de_RestoreTableFromClusterSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromClusterSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryResumeClusterCommand
 */
export const de_ResumeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRevokeClusterSecurityGroupIngressCommand
 */
export const de_RevokeClusterSecurityGroupIngressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeClusterSecurityGroupIngressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRevokeEndpointAccessCommand
 */
export const de_RevokeEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRevokeSnapshotAccessCommand
 */
export const de_RevokeSnapshotAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSnapshotAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRotateEncryptionKeyCommand
 */
export const de_RotateEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryUpdatePartnerStatusCommand
 */
export const de_UpdatePartnerStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnerStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ClusterNotFound":
    case "com.amazonaws.redshift#ClusterNotFoundFault":
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "PartnerNotFound":
    case "com.amazonaws.redshift#PartnerNotFoundFault":
      throw await de_PartnerNotFoundFaultRes(parsedOutput, context);
    case "UnauthorizedPartnerIntegration":
    case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
      throw await de_UnauthorizedPartnerIntegrationFaultRes(parsedOutput, context);
    case "InvalidDataShareFault":
    case "com.amazonaws.redshift#InvalidDataShareFault":
      throw await de_InvalidDataShareFaultRes(parsedOutput, context);
    case "InvalidNamespaceFault":
    case "com.amazonaws.redshift#InvalidNamespaceFault":
      throw await de_InvalidNamespaceFaultRes(parsedOutput, context);
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
    case "BatchDeleteRequestSizeExceeded":
    case "com.amazonaws.redshift#BatchDeleteRequestSizeExceededFault":
      throw await de_BatchDeleteRequestSizeExceededFaultRes(parsedOutput, context);
    case "BatchModifyClusterSnapshotsLimitExceededFault":
    case "com.amazonaws.redshift#BatchModifyClusterSnapshotsLimitExceededFault":
      throw await de_BatchModifyClusterSnapshotsLimitExceededFaultRes(parsedOutput, context);
    case "InvalidRetentionPeriodFault":
    case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
      throw await de_InvalidRetentionPeriodFaultRes(parsedOutput, context);
    case "ResizeNotFound":
    case "com.amazonaws.redshift#ResizeNotFoundFault":
      throw await de_ResizeNotFoundFaultRes(parsedOutput, context);
    case "ClusterSnapshotAlreadyExists":
    case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
      throw await de_ClusterSnapshotAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterSnapshotQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
      throw await de_ClusterSnapshotQuotaExceededFaultRes(parsedOutput, context);
    case "AuthenticationProfileAlreadyExistsFault":
    case "com.amazonaws.redshift#AuthenticationProfileAlreadyExistsFault":
      throw await de_AuthenticationProfileAlreadyExistsFaultRes(parsedOutput, context);
    case "AuthenticationProfileQuotaExceededFault":
    case "com.amazonaws.redshift#AuthenticationProfileQuotaExceededFault":
      throw await de_AuthenticationProfileQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidAuthenticationProfileRequestFault":
    case "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault":
      throw await de_InvalidAuthenticationProfileRequestFaultRes(parsedOutput, context);
    case "ClusterAlreadyExists":
    case "com.amazonaws.redshift#ClusterAlreadyExistsFault":
      throw await de_ClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterParameterGroupNotFound":
    case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
      throw await de_ClusterParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ClusterQuotaExceeded":
    case "com.amazonaws.redshift#ClusterQuotaExceededFault":
      throw await de_ClusterQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSubnetGroupNotFoundFault":
    case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
      throw await de_ClusterSubnetGroupNotFoundFaultRes(parsedOutput, context);
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
    case "InvalidSubnet":
    case "com.amazonaws.redshift#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "InvalidTagFault":
    case "com.amazonaws.redshift#InvalidTagFault":
      throw await de_InvalidTagFaultRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.redshift#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "Ipv6CidrBlockNotFoundFault":
    case "com.amazonaws.redshift#Ipv6CidrBlockNotFoundFault":
      throw await de_Ipv6CidrBlockNotFoundFaultRes(parsedOutput, context);
    case "NumberOfNodesPerClusterLimitExceeded":
    case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
      throw await de_NumberOfNodesPerClusterLimitExceededFaultRes(parsedOutput, context);
    case "NumberOfNodesQuotaExceeded":
    case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
      throw await de_NumberOfNodesQuotaExceededFaultRes(parsedOutput, context);
    case "RedshiftIdcApplicationNotExists":
    case "com.amazonaws.redshift#RedshiftIdcApplicationNotExistsFault":
      throw await de_RedshiftIdcApplicationNotExistsFaultRes(parsedOutput, context);
    case "SnapshotScheduleNotFound":
    case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
      throw await de_SnapshotScheduleNotFoundFaultRes(parsedOutput, context);
    case "TagLimitExceededFault":
    case "com.amazonaws.redshift#TagLimitExceededFault":
      throw await de_TagLimitExceededFaultRes(parsedOutput, context);
    case "UnauthorizedOperation":
    case "com.amazonaws.redshift#UnauthorizedOperation":
      throw await de_UnauthorizedOperationRes(parsedOutput, context);
    case "ClusterParameterGroupAlreadyExists":
    case "com.amazonaws.redshift#ClusterParameterGroupAlreadyExistsFault":
      throw await de_ClusterParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterParameterGroupQuotaExceeded":
    case "com.amazonaws.redshift#ClusterParameterGroupQuotaExceededFault":
      throw await de_ClusterParameterGroupQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSecurityGroupAlreadyExists":
    case "com.amazonaws.redshift#ClusterSecurityGroupAlreadyExistsFault":
      throw await de_ClusterSecurityGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "QuotaExceeded.ClusterSecurityGroup":
    case "com.amazonaws.redshift#ClusterSecurityGroupQuotaExceededFault":
      throw await de_ClusterSecurityGroupQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSubnetGroupAlreadyExists":
    case "com.amazonaws.redshift#ClusterSubnetGroupAlreadyExistsFault":
      throw await de_ClusterSubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterSubnetGroupQuotaExceeded":
    case "com.amazonaws.redshift#ClusterSubnetGroupQuotaExceededFault":
      throw await de_ClusterSubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "ClusterSubnetQuotaExceededFault":
    case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault":
      throw await de_ClusterSubnetQuotaExceededFaultRes(parsedOutput, context);
    case "CustomCnameAssociationFault":
    case "com.amazonaws.redshift#CustomCnameAssociationFault":
      throw await de_CustomCnameAssociationFaultRes(parsedOutput, context);
    case "AccessToClusterDenied":
    case "com.amazonaws.redshift#AccessToClusterDeniedFault":
      throw await de_AccessToClusterDeniedFaultRes(parsedOutput, context);
    case "EndpointAlreadyExists":
    case "com.amazonaws.redshift#EndpointAlreadyExistsFault":
      throw await de_EndpointAlreadyExistsFaultRes(parsedOutput, context);
    case "EndpointsPerAuthorizationLimitExceeded":
    case "com.amazonaws.redshift#EndpointsPerAuthorizationLimitExceededFault":
      throw await de_EndpointsPerAuthorizationLimitExceededFaultRes(parsedOutput, context);
    case "EndpointsPerClusterLimitExceeded":
    case "com.amazonaws.redshift#EndpointsPerClusterLimitExceededFault":
      throw await de_EndpointsPerClusterLimitExceededFaultRes(parsedOutput, context);
    case "EventSubscriptionQuotaExceeded":
    case "com.amazonaws.redshift#EventSubscriptionQuotaExceededFault":
      throw await de_EventSubscriptionQuotaExceededFaultRes(parsedOutput, context);
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
    case "HsmClientCertificateAlreadyExistsFault":
    case "com.amazonaws.redshift#HsmClientCertificateAlreadyExistsFault":
      throw await de_HsmClientCertificateAlreadyExistsFaultRes(parsedOutput, context);
    case "HsmClientCertificateQuotaExceededFault":
    case "com.amazonaws.redshift#HsmClientCertificateQuotaExceededFault":
      throw await de_HsmClientCertificateQuotaExceededFaultRes(parsedOutput, context);
    case "HsmConfigurationAlreadyExistsFault":
    case "com.amazonaws.redshift#HsmConfigurationAlreadyExistsFault":
      throw await de_HsmConfigurationAlreadyExistsFaultRes(parsedOutput, context);
    case "HsmConfigurationQuotaExceededFault":
    case "com.amazonaws.redshift#HsmConfigurationQuotaExceededFault":
      throw await de_HsmConfigurationQuotaExceededFaultRes(parsedOutput, context);
    case "IntegrationAlreadyExistsFault":
    case "com.amazonaws.redshift#IntegrationAlreadyExistsFault":
      throw await de_IntegrationAlreadyExistsFaultRes(parsedOutput, context);
    case "IntegrationConflictOperationFault":
    case "com.amazonaws.redshift#IntegrationConflictOperationFault":
      throw await de_IntegrationConflictOperationFaultRes(parsedOutput, context);
    case "IntegrationQuotaExceededFault":
    case "com.amazonaws.redshift#IntegrationQuotaExceededFault":
      throw await de_IntegrationQuotaExceededFaultRes(parsedOutput, context);
    case "IntegrationSourceNotFoundFault":
    case "com.amazonaws.redshift#IntegrationSourceNotFoundFault":
      throw await de_IntegrationSourceNotFoundFaultRes(parsedOutput, context);
    case "IntegrationTargetNotFoundFault":
    case "com.amazonaws.redshift#IntegrationTargetNotFoundFault":
      throw await de_IntegrationTargetNotFoundFaultRes(parsedOutput, context);
    case "DependentServiceAccessDenied":
    case "com.amazonaws.redshift#DependentServiceAccessDeniedFault":
      throw await de_DependentServiceAccessDeniedFaultRes(parsedOutput, context);
    case "RedshiftIdcApplicationAlreadyExists":
    case "com.amazonaws.redshift#RedshiftIdcApplicationAlreadyExistsFault":
      throw await de_RedshiftIdcApplicationAlreadyExistsFaultRes(parsedOutput, context);
    case "RedshiftIdcApplicationQuotaExceeded":
    case "com.amazonaws.redshift#RedshiftIdcApplicationQuotaExceededFault":
      throw await de_RedshiftIdcApplicationQuotaExceededFaultRes(parsedOutput, context);
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
    case "SnapshotCopyGrantAlreadyExistsFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantAlreadyExistsFault":
      throw await de_SnapshotCopyGrantAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotCopyGrantQuotaExceededFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantQuotaExceededFault":
      throw await de_SnapshotCopyGrantQuotaExceededFaultRes(parsedOutput, context);
    case "ScheduleDefinitionTypeUnsupported":
    case "com.amazonaws.redshift#ScheduleDefinitionTypeUnsupportedFault":
      throw await de_ScheduleDefinitionTypeUnsupportedFaultRes(parsedOutput, context);
    case "SnapshotScheduleAlreadyExists":
    case "com.amazonaws.redshift#SnapshotScheduleAlreadyExistsFault":
      throw await de_SnapshotScheduleAlreadyExistsFaultRes(parsedOutput, context);
    case "SnapshotScheduleQuotaExceeded":
    case "com.amazonaws.redshift#SnapshotScheduleQuotaExceededFault":
      throw await de_SnapshotScheduleQuotaExceededFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.redshift#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "InvalidUsageLimit":
    case "com.amazonaws.redshift#InvalidUsageLimitFault":
      throw await de_InvalidUsageLimitFaultRes(parsedOutput, context);
    case "UsageLimitAlreadyExists":
    case "com.amazonaws.redshift#UsageLimitAlreadyExistsFault":
      throw await de_UsageLimitAlreadyExistsFaultRes(parsedOutput, context);
    case "AuthenticationProfileNotFoundFault":
    case "com.amazonaws.redshift#AuthenticationProfileNotFoundFault":
      throw await de_AuthenticationProfileNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterParameterGroupState":
    case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
      throw await de_InvalidClusterParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidClusterSubnetStateFault":
    case "com.amazonaws.redshift#InvalidClusterSubnetStateFault":
      throw await de_InvalidClusterSubnetStateFaultRes(parsedOutput, context);
    case "CustomDomainAssociationNotFoundFault":
    case "com.amazonaws.redshift#CustomDomainAssociationNotFoundFault":
      throw await de_CustomDomainAssociationNotFoundFaultRes(parsedOutput, context);
    case "EndpointNotFound":
    case "com.amazonaws.redshift#EndpointNotFoundFault":
      throw await de_EndpointNotFoundFaultRes(parsedOutput, context);
    case "InvalidEndpointState":
    case "com.amazonaws.redshift#InvalidEndpointStateFault":
      throw await de_InvalidEndpointStateFaultRes(parsedOutput, context);
    case "InvalidSubscriptionStateFault":
    case "com.amazonaws.redshift#InvalidSubscriptionStateFault":
      throw await de_InvalidSubscriptionStateFaultRes(parsedOutput, context);
    case "SubscriptionNotFound":
    case "com.amazonaws.redshift#SubscriptionNotFoundFault":
      throw await de_SubscriptionNotFoundFaultRes(parsedOutput, context);
    case "InvalidHsmClientCertificateStateFault":
    case "com.amazonaws.redshift#InvalidHsmClientCertificateStateFault":
      throw await de_InvalidHsmClientCertificateStateFaultRes(parsedOutput, context);
    case "InvalidHsmConfigurationStateFault":
    case "com.amazonaws.redshift#InvalidHsmConfigurationStateFault":
      throw await de_InvalidHsmConfigurationStateFaultRes(parsedOutput, context);
    case "IntegrationConflictStateFault":
    case "com.amazonaws.redshift#IntegrationConflictStateFault":
      throw await de_IntegrationConflictStateFaultRes(parsedOutput, context);
    case "IntegrationNotFoundFault":
    case "com.amazonaws.redshift#IntegrationNotFoundFault":
      throw await de_IntegrationNotFoundFaultRes(parsedOutput, context);
    case "ScheduledActionNotFound":
    case "com.amazonaws.redshift#ScheduledActionNotFoundFault":
      throw await de_ScheduledActionNotFoundFaultRes(parsedOutput, context);
    case "InvalidSnapshotCopyGrantStateFault":
    case "com.amazonaws.redshift#InvalidSnapshotCopyGrantStateFault":
      throw await de_InvalidSnapshotCopyGrantStateFaultRes(parsedOutput, context);
    case "SnapshotCopyGrantNotFoundFault":
    case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
      throw await de_SnapshotCopyGrantNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterSnapshotScheduleState":
    case "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault":
      throw await de_InvalidClusterSnapshotScheduleStateFaultRes(parsedOutput, context);
    case "UsageLimitNotFound":
    case "com.amazonaws.redshift#UsageLimitNotFoundFault":
      throw await de_UsageLimitNotFoundFaultRes(parsedOutput, context);
    case "AccessToSnapshotDenied":
    case "com.amazonaws.redshift#AccessToSnapshotDeniedFault":
      throw await de_AccessToSnapshotDeniedFaultRes(parsedOutput, context);
    case "ReservedNodeExchangeNotFond":
    case "com.amazonaws.redshift#ReservedNodeExchangeNotFoundFault":
      throw await de_ReservedNodeExchangeNotFoundFaultRes(parsedOutput, context);
    case "TableRestoreNotFoundFault":
    case "com.amazonaws.redshift#TableRestoreNotFoundFault":
      throw await de_TableRestoreNotFoundFaultRes(parsedOutput, context);
    case "SnapshotCopyAlreadyDisabledFault":
    case "com.amazonaws.redshift#SnapshotCopyAlreadyDisabledFault":
      throw await de_SnapshotCopyAlreadyDisabledFaultRes(parsedOutput, context);
    case "BucketNotFoundFault":
    case "com.amazonaws.redshift#BucketNotFoundFault":
      throw await de_BucketNotFoundFaultRes(parsedOutput, context);
    case "InsufficientS3BucketPolicyFault":
    case "com.amazonaws.redshift#InsufficientS3BucketPolicyFault":
      throw await de_InsufficientS3BucketPolicyFaultRes(parsedOutput, context);
    case "InvalidS3BucketNameFault":
    case "com.amazonaws.redshift#InvalidS3BucketNameFault":
      throw await de_InvalidS3BucketNameFaultRes(parsedOutput, context);
    case "InvalidS3KeyPrefixFault":
    case "com.amazonaws.redshift#InvalidS3KeyPrefixFault":
      throw await de_InvalidS3KeyPrefixFaultRes(parsedOutput, context);
    case "CopyToRegionDisabledFault":
    case "com.amazonaws.redshift#CopyToRegionDisabledFault":
      throw await de_CopyToRegionDisabledFaultRes(parsedOutput, context);
    case "IncompatibleOrderableOptions":
    case "com.amazonaws.redshift#IncompatibleOrderableOptions":
      throw await de_IncompatibleOrderableOptionsRes(parsedOutput, context);
    case "SnapshotCopyAlreadyEnabledFault":
    case "com.amazonaws.redshift#SnapshotCopyAlreadyEnabledFault":
      throw await de_SnapshotCopyAlreadyEnabledFaultRes(parsedOutput, context);
    case "UnknownSnapshotCopyRegionFault":
    case "com.amazonaws.redshift#UnknownSnapshotCopyRegionFault":
      throw await de_UnknownSnapshotCopyRegionFaultRes(parsedOutput, context);
    case "InvalidPolicyFault":
    case "com.amazonaws.redshift#InvalidPolicyFault":
      throw await de_InvalidPolicyFaultRes(parsedOutput, context);
    case "TableLimitExceeded":
    case "com.amazonaws.redshift#TableLimitExceededFault":
      throw await de_TableLimitExceededFaultRes(parsedOutput, context);
    case "UnsupportedOptionFault":
    case "com.amazonaws.redshift#UnsupportedOptionFault":
      throw await de_UnsupportedOptionFaultRes(parsedOutput, context);
    case "ClusterOnLatestRevision":
    case "com.amazonaws.redshift#ClusterOnLatestRevisionFault":
      throw await de_ClusterOnLatestRevisionFaultRes(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.redshift#SubnetAlreadyInUse":
      throw await de_SubnetAlreadyInUseRes(parsedOutput, context);
    case "SnapshotCopyDisabledFault":
    case "com.amazonaws.redshift#SnapshotCopyDisabledFault":
      throw await de_SnapshotCopyDisabledFaultRes(parsedOutput, context);
    case "SnapshotScheduleUpdateInProgress":
    case "com.amazonaws.redshift#SnapshotScheduleUpdateInProgressFault":
      throw await de_SnapshotScheduleUpdateInProgressFaultRes(parsedOutput, context);
    case "ReservedNodeQuotaExceeded":
    case "com.amazonaws.redshift#ReservedNodeQuotaExceededFault":
      throw await de_ReservedNodeQuotaExceededFaultRes(parsedOutput, context);
    case "ConflictPolicyUpdateFault":
    case "com.amazonaws.redshift#ConflictPolicyUpdateFault":
      throw await de_ConflictPolicyUpdateFaultRes(parsedOutput, context);
    case "InvalidRestore":
    case "com.amazonaws.redshift#InvalidRestoreFault":
      throw await de_InvalidRestoreFaultRes(parsedOutput, context);
    case "InProgressTableRestoreQuotaExceededFault":
    case "com.amazonaws.redshift#InProgressTableRestoreQuotaExceededFault":
      throw await de_InProgressTableRestoreQuotaExceededFaultRes(parsedOutput, context);
    case "InvalidTableRestoreArgument":
    case "com.amazonaws.redshift#InvalidTableRestoreArgumentFault":
      throw await de_InvalidTableRestoreArgumentFaultRes(parsedOutput, context);
    case "AuthorizationNotFound":
    case "com.amazonaws.redshift#AuthorizationNotFoundFault":
      throw await de_AuthorizationNotFoundFaultRes(parsedOutput, context);
    case "EndpointAuthorizationNotFound":
    case "com.amazonaws.redshift#EndpointAuthorizationNotFoundFault":
      throw await de_EndpointAuthorizationNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
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
 * deserializeAws_queryConflictPolicyUpdateFaultRes
 */
const de_ConflictPolicyUpdateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictPolicyUpdateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictPolicyUpdateFault(body.Error, context);
  const exception = new ConflictPolicyUpdateFault({
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
 * deserializeAws_queryDependentServiceAccessDeniedFaultRes
 */
const de_DependentServiceAccessDeniedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependentServiceAccessDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DependentServiceAccessDeniedFault(body.Error, context);
  const exception = new DependentServiceAccessDeniedFault({
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
 * deserializeAws_queryIntegrationAlreadyExistsFaultRes
 */
const de_IntegrationAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationAlreadyExistsFault(body.Error, context);
  const exception = new IntegrationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationConflictOperationFaultRes
 */
const de_IntegrationConflictOperationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationConflictOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationConflictOperationFault(body.Error, context);
  const exception = new IntegrationConflictOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationConflictStateFaultRes
 */
const de_IntegrationConflictStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationConflictStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationConflictStateFault(body.Error, context);
  const exception = new IntegrationConflictStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationNotFoundFaultRes
 */
const de_IntegrationNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationNotFoundFault(body.Error, context);
  const exception = new IntegrationNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationQuotaExceededFaultRes
 */
const de_IntegrationQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationQuotaExceededFault(body.Error, context);
  const exception = new IntegrationQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationSourceNotFoundFaultRes
 */
const de_IntegrationSourceNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationSourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationSourceNotFoundFault(body.Error, context);
  const exception = new IntegrationSourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIntegrationTargetNotFoundFaultRes
 */
const de_IntegrationTargetNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IntegrationTargetNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IntegrationTargetNotFoundFault(body.Error, context);
  const exception = new IntegrationTargetNotFoundFault({
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
 * deserializeAws_queryInvalidPolicyFaultRes
 */
const de_InvalidPolicyFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidPolicyFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPolicyFault(body.Error, context);
  const exception = new InvalidPolicyFault({
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
 * deserializeAws_queryIpv6CidrBlockNotFoundFaultRes
 */
const de_Ipv6CidrBlockNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<Ipv6CidrBlockNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_Ipv6CidrBlockNotFoundFault(body.Error, context);
  const exception = new Ipv6CidrBlockNotFoundFault({
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
 * deserializeAws_queryRedshiftIdcApplicationAlreadyExistsFaultRes
 */
const de_RedshiftIdcApplicationAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RedshiftIdcApplicationAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RedshiftIdcApplicationAlreadyExistsFault(body.Error, context);
  const exception = new RedshiftIdcApplicationAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRedshiftIdcApplicationNotExistsFaultRes
 */
const de_RedshiftIdcApplicationNotExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RedshiftIdcApplicationNotExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RedshiftIdcApplicationNotExistsFault(body.Error, context);
  const exception = new RedshiftIdcApplicationNotExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRedshiftIdcApplicationQuotaExceededFaultRes
 */
const de_RedshiftIdcApplicationQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RedshiftIdcApplicationQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RedshiftIdcApplicationQuotaExceededFault(body.Error, context);
  const exception = new RedshiftIdcApplicationQuotaExceededFault({
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
  if (input[_RNI] != null) {
    entries[_RNI] = input[_RNI];
  }
  if (input[_TRNOI] != null) {
    entries[_TRNOI] = input[_TRNOI];
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
  if (input[_DSAa] != null) {
    entries[_DSAa] = input[_DSAa];
  }
  if (input[_AEAs] != null) {
    entries[_AEAs] = input[_AEAs];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_CRo] != null) {
    entries[_CRo] = input[_CRo];
  }
  if (input[_AW] != null) {
    entries[_AW] = input[_AW];
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
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  if (input[_CIDRIP] != null) {
    entries[_CIDRIP] = input[_CIDRIP];
  }
  if (input[_ECSGN] != null) {
    entries[_ECSGN] = input[_ECSGN];
  }
  if (input[_ECSGOI] != null) {
    entries[_ECSGOI] = input[_ECSGOI];
  }
  return entries;
};

/**
 * serializeAws_queryAuthorizeDataShareMessage
 */
const se_AuthorizeDataShareMessage = (input: AuthorizeDataShareMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DSAa] != null) {
    entries[_DSAa] = input[_DSAa];
  }
  if (input[_CIo] != null) {
    entries[_CIo] = input[_CIo];
  }
  if (input[_AW] != null) {
    entries[_AW] = input[_AW];
  }
  return entries;
};

/**
 * serializeAws_queryAuthorizedAudienceList
 */
const se_AuthorizedAudienceList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryAuthorizedTokenIssuer
 */
const se_AuthorizedTokenIssuer = (input: AuthorizedTokenIssuer, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TTIA] != null) {
    entries[_TTIA] = input[_TTIA];
  }
  if (input[_AAL] != null) {
    const memberEntries = se_AuthorizedAudienceList(input[_AAL], context);
    if (input[_AAL]?.length === 0) {
      entries.AuthorizedAudiencesList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthorizedAudiencesList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAuthorizedTokenIssuerList
 */
const se_AuthorizedTokenIssuerList = (input: AuthorizedTokenIssuer[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_AuthorizedTokenIssuer(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAuthorizeEndpointAccessMessage
 */
const se_AuthorizeEndpointAccessMessage = (input: AuthorizeEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_Ac] != null) {
    entries[_Ac] = input[_Ac];
  }
  if (input[_VI] != null) {
    const memberEntries = se_VpcIdentifierList(input[_VI], context);
    if (input[_VI]?.length === 0) {
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
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_SCI] != null) {
    entries[_SCI] = input[_SCI];
  }
  if (input[_AWRA] != null) {
    entries[_AWRA] = input[_AWRA];
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
  if (input[_I] != null) {
    const memberEntries = se_DeleteClusterSnapshotMessageList(input[_I], context);
    if (input[_I]?.length === 0) {
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
  if (input[_SIL] != null) {
    const memberEntries = se_SnapshotIdentifierList(input[_SIL], context);
    if (input[_SIL]?.length === 0) {
      entries.SnapshotIdentifierList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SnapshotIdentifierList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MSRP] != null) {
    entries[_MSRP] = input[_MSRP];
  }
  if (input[_F] != null) {
    entries[_F] = input[_F];
  }
  return entries;
};

/**
 * serializeAws_queryCancelResizeMessage
 */
const se_CancelResizeMessage = (input: CancelResizeMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
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
 * serializeAws_queryConsumerIdentifierList
 */
const se_ConsumerIdentifierList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryCopyClusterSnapshotMessage
 */
const se_CopyClusterSnapshotMessage = (input: CopyClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSI] != null) {
    entries[_SSI] = input[_SSI];
  }
  if (input[_SSCI] != null) {
    entries[_SSCI] = input[_SSCI];
  }
  if (input[_TSI] != null) {
    entries[_TSI] = input[_TSI];
  }
  if (input[_MSRP] != null) {
    entries[_MSRP] = input[_MSRP];
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
  if (input[_APN] != null) {
    entries[_APN] = input[_APN];
  }
  if (input[_APC] != null) {
    entries[_APC] = input[_APC];
  }
  return entries;
};

/**
 * serializeAws_queryCreateClusterMessage
 */
const se_CreateClusterMessage = (input: CreateClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DBN] != null) {
    entries[_DBN] = input[_DBN];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_CTl] != null) {
    entries[_CTl] = input[_CTl];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MU] != null) {
    entries[_MU] = input[_MU];
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_CSG] != null) {
    const memberEntries = se_ClusterSecurityGroupNameList(input[_CSG], context);
    if (input[_CSG]?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSGNl] != null) {
    entries[_CSGNl] = input[_CSGNl];
  }
  if (input[_AZ] != null) {
    entries[_AZ] = input[_AZ];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_ASRP] != null) {
    entries[_ASRP] = input[_ASRP];
  }
  if (input[_MSRP] != null) {
    entries[_MSRP] = input[_MSRP];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_CV] != null) {
    entries[_CV] = input[_CV];
  }
  if (input[_AVU] != null) {
    entries[_AVU] = input[_AVU];
  }
  if (input[_NON] != null) {
    entries[_NON] = input[_NON];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_HCCI] != null) {
    entries[_HCCI] = input[_HCCI];
  }
  if (input[_HCI] != null) {
    entries[_HCI] = input[_HCI];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_EVR] != null) {
    entries[_EVR] = input[_EVR];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_IR] != null) {
    const memberEntries = se_IamRoleArnList(input[_IR], context);
    if (input[_IR]?.length === 0) {
      entries.IamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MTN] != null) {
    entries[_MTN] = input[_MTN];
  }
  if (input[_SSIn] != null) {
    entries[_SSIn] = input[_SSIn];
  }
  if (input[_AZR] != null) {
    entries[_AZR] = input[_AZR];
  }
  if (input[_ACS] != null) {
    entries[_ACS] = input[_ACS];
  }
  if (input[_DIRA] != null) {
    entries[_DIRA] = input[_DIRA];
  }
  if (input[_LSD] != null) {
    entries[_LSD] = input[_LSD];
  }
  if (input[_MMP] != null) {
    entries[_MMP] = input[_MMP];
  }
  if (input[_MPSKKI] != null) {
    entries[_MPSKKI] = input[_MPSKKI];
  }
  if (input[_IAT] != null) {
    entries[_IAT] = input[_IAT];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
  }
  if (input[_RIAA] != null) {
    entries[_RIAA] = input[_RIAA];
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
  if (input[_PGN] != null) {
    entries[_PGN] = input[_PGN];
  }
  if (input[_PGF] != null) {
    entries[_PGF] = input[_PGF];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_MSRP] != null) {
    entries[_MSRP] = input[_MSRP];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_CSGNl] != null) {
    entries[_CSGNl] = input[_CSGNl];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_SIu] != null) {
    const memberEntries = se_SubnetIdentifierList(input[_SIu], context);
    if (input[_SIu]?.length === 0) {
      entries.SubnetIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_CDN] != null) {
    entries[_CDN] = input[_CDN];
  }
  if (input[_CDCA] != null) {
    entries[_CDCA] = input[_CDCA];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  return entries;
};

/**
 * serializeAws_queryCreateEndpointAccessMessage
 */
const se_CreateEndpointAccessMessage = (input: CreateEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_RO] != null) {
    entries[_RO] = input[_RO];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_SGN] != null) {
    entries[_SGN] = input[_SGN];
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_STA] != null) {
    entries[_STA] = input[_STA];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_SIo] != null) {
    const memberEntries = se_SourceIdsList(input[_SIo], context);
    if (input[_SIo]?.length === 0) {
      entries.SourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EC] != null) {
    const memberEntries = se_EventCategoriesList(input[_EC], context);
    if (input[_EC]?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_En] != null) {
    entries[_En] = input[_En];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_HCCI] != null) {
    entries[_HCCI] = input[_HCCI];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_HCI] != null) {
    entries[_HCI] = input[_HCI];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_HIA] != null) {
    entries[_HIA] = input[_HIA];
  }
  if (input[_HPN] != null) {
    entries[_HPN] = input[_HPN];
  }
  if (input[_HPP] != null) {
    entries[_HPP] = input[_HPP];
  }
  if (input[_HSPC] != null) {
    entries[_HSPC] = input[_HSPC];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
 * serializeAws_queryCreateIntegrationMessage
 */
const se_CreateIntegrationMessage = (input: CreateIntegrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_IN] != null) {
    entries[_IN] = input[_IN];
  }
  if (input[_KMSKI] != null) {
    entries[_KMSKI] = input[_KMSKI];
  }
  if (input[_TL] != null) {
    const memberEntries = se_TagList(input[_TL], context);
    if (input[_TL]?.length === 0) {
      entries.TagList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AEC] != null) {
    const memberEntries = se_EncryptionContextMap(input[_AEC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AdditionalEncryptionContext.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryCreateRedshiftIdcApplicationMessage
 */
const se_CreateRedshiftIdcApplicationMessage = (
  input: CreateRedshiftIdcApplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_IIA] != null) {
    entries[_IIA] = input[_IIA];
  }
  if (input[_RIAN] != null) {
    entries[_RIAN] = input[_RIAN];
  }
  if (input[_INd] != null) {
    entries[_INd] = input[_INd];
  }
  if (input[_IDN] != null) {
    entries[_IDN] = input[_IDN];
  }
  if (input[_IRA] != null) {
    entries[_IRA] = input[_IRA];
  }
  if (input[_ATIL] != null) {
    const memberEntries = se_AuthorizedTokenIssuerList(input[_ATIL], context);
    if (input[_ATIL]?.length === 0) {
      entries.AuthorizedTokenIssuerList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthorizedTokenIssuerList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SIe] != null) {
    const memberEntries = se_ServiceIntegrationList(input[_SIe], context);
    if (input[_SIe]?.length === 0) {
      entries.ServiceIntegrations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceIntegrations.${key}`;
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
  if (input[_SAN] != null) {
    entries[_SAN] = input[_SAN];
  }
  if (input[_TAa] != null) {
    const memberEntries = se_ScheduledActionType(input[_TAa], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Sc] != null) {
    entries[_Sc] = input[_Sc];
  }
  if (input[_IRa] != null) {
    entries[_IRa] = input[_IRa];
  }
  if (input[_SAD] != null) {
    entries[_SAD] = input[_SAD];
  }
  if (input[_STt] != null) {
    entries[_STt] = __serializeDateTime(input[_STt]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_Ena] != null) {
    entries[_Ena] = input[_Ena];
  }
  return entries;
};

/**
 * serializeAws_queryCreateSnapshotCopyGrantMessage
 */
const se_CreateSnapshotCopyGrantMessage = (input: CreateSnapshotCopyGrantMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCGN] != null) {
    entries[_SCGN] = input[_SCGN];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_SD] != null) {
    const memberEntries = se_ScheduleDefinitionList(input[_SD], context);
    if (input[_SD]?.length === 0) {
      entries.ScheduleDefinitions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduleDefinitions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SIc] != null) {
    entries[_SIc] = input[_SIc];
  }
  if (input[_SDc] != null) {
    entries[_SDc] = input[_SDc];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DRr] != null) {
    entries[_DRr] = input[_DRr];
  }
  if (input[_NI] != null) {
    entries[_NI] = input[_NI];
  }
  return entries;
};

/**
 * serializeAws_queryCreateTagsMessage
 */
const se_CreateTagsMessage = (input: CreateTagsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RNe] != null) {
    entries[_RNe] = input[_RNe];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_FT] != null) {
    entries[_FT] = input[_FT];
  }
  if (input[_LT] != null) {
    entries[_LT] = input[_LT];
  }
  if (input[_Am] != null) {
    entries[_Am] = input[_Am];
  }
  if (input[_Pe] != null) {
    entries[_Pe] = input[_Pe];
  }
  if (input[_BA] != null) {
    entries[_BA] = input[_BA];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_DSAa] != null) {
    entries[_DSAa] = input[_DSAa];
  }
  if (input[_CIo] != null) {
    entries[_CIo] = input[_CIo];
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
  if (input[_APN] != null) {
    entries[_APN] = input[_APN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteClusterMessage
 */
const se_DeleteClusterMessage = (input: DeleteClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_SFCS] != null) {
    entries[_SFCS] = input[_SFCS];
  }
  if (input[_FCSI] != null) {
    entries[_FCSI] = input[_FCSI];
  }
  if (input[_FCSRP] != null) {
    entries[_FCSRP] = input[_FCSRP];
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
  if (input[_PGN] != null) {
    entries[_PGN] = input[_PGN];
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
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteClusterSnapshotMessage
 */
const se_DeleteClusterSnapshotMessage = (input: DeleteClusterSnapshotMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_SCI] != null) {
    entries[_SCI] = input[_SCI];
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
  if (input[_CSGNl] != null) {
    entries[_CSGNl] = input[_CSGNl];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_CDN] != null) {
    entries[_CDN] = input[_CDN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteEndpointAccessMessage
 */
const se_DeleteEndpointAccessMessage = (input: DeleteEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteEventSubscriptionMessage
 */
const se_DeleteEventSubscriptionMessage = (input: DeleteEventSubscriptionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
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
  if (input[_HCCI] != null) {
    entries[_HCCI] = input[_HCCI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteHsmConfigurationMessage
 */
const se_DeleteHsmConfigurationMessage = (input: DeleteHsmConfigurationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_HCI] != null) {
    entries[_HCI] = input[_HCI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteIntegrationMessage
 */
const se_DeleteIntegrationMessage = (input: DeleteIntegrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IA] != null) {
    entries[_IA] = input[_IA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteRedshiftIdcApplicationMessage
 */
const se_DeleteRedshiftIdcApplicationMessage = (
  input: DeleteRedshiftIdcApplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RIAA] != null) {
    entries[_RIAA] = input[_RIAA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteResourcePolicyMessage
 */
const se_DeleteResourcePolicyMessage = (input: DeleteResourcePolicyMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteScheduledActionMessage
 */
const se_DeleteScheduledActionMessage = (input: DeleteScheduledActionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAN] != null) {
    entries[_SAN] = input[_SAN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSnapshotCopyGrantMessage
 */
const se_DeleteSnapshotCopyGrantMessage = (input: DeleteSnapshotCopyGrantMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCGN] != null) {
    entries[_SCGN] = input[_SCGN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSnapshotScheduleMessage
 */
const se_DeleteSnapshotScheduleMessage = (input: DeleteSnapshotScheduleMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SIc] != null) {
    entries[_SIc] = input[_SIc];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTagsMessage
 */
const se_DeleteTagsMessage = (input: DeleteTagsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RNe] != null) {
    entries[_RNe] = input[_RNe];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
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
  if (input[_ULI] != null) {
    entries[_ULI] = input[_ULI];
  }
  return entries;
};

/**
 * serializeAws_queryDeregisterNamespaceInputMessage
 */
const se_DeregisterNamespaceInputMessage = (input: DeregisterNamespaceInputMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NIa] != null) {
    const memberEntries = se_NamespaceIdentifierUnion(input[_NIa], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NamespaceIdentifier.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CIon] != null) {
    const memberEntries = se_ConsumerIdentifierList(input[_CIon], context);
    if (input[_CIon]?.length === 0) {
      entries.ConsumerIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConsumerIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountAttributesMessage
 */
const se_DescribeAccountAttributesMessage = (input: DescribeAccountAttributesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AN] != null) {
    const memberEntries = se_AttributeNameList(input[_AN], context);
    if (input[_AN]?.length === 0) {
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
  if (input[_APN] != null) {
    entries[_APN] = input[_APN];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_PGN] != null) {
    entries[_PGN] = input[_PGN];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_PGN] != null) {
    entries[_PGN] = input[_PGN];
  }
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_STn] != null) {
    entries[_STn] = input[_STn];
  }
  if (input[_STt] != null) {
    entries[_STt] = __serializeDateTime(input[_STt]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_OA] != null) {
    entries[_OA] = input[_OA];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CE] != null) {
    entries[_CE] = input[_CE];
  }
  if (input[_SE] != null) {
    const memberEntries = se_SnapshotSortingEntityList(input[_SE], context);
    if (input[_SE]?.length === 0) {
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
  if (input[_CSGNl] != null) {
    entries[_CSGNl] = input[_CSGNl];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_MTN] != null) {
    entries[_MTN] = input[_MTN];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeClusterVersionsMessage
 */
const se_DescribeClusterVersionsMessage = (input: DescribeClusterVersionsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CV] != null) {
    entries[_CV] = input[_CV];
  }
  if (input[_CPGF] != null) {
    entries[_CPGF] = input[_CPGF];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_CDN] != null) {
    entries[_CDN] = input[_CDN];
  }
  if (input[_CDCA] != null) {
    entries[_CDCA] = input[_CDCA];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_PAr] != null) {
    entries[_PAr] = input[_PAr];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDataSharesMessage
 */
const se_DescribeDataSharesMessage = (input: DescribeDataSharesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DSAa] != null) {
    entries[_DSAa] = input[_DSAa];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_PGF] != null) {
    entries[_PGF] = input[_PGF];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEndpointAccessMessage
 */
const se_DescribeEndpointAccessMessage = (input: DescribeEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_RO] != null) {
    entries[_RO] = input[_RO];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_VIp] != null) {
    entries[_VIp] = input[_VIp];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_Ac] != null) {
    entries[_Ac] = input[_Ac];
  }
  if (input[_G] != null) {
    entries[_G] = input[_G];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEventCategoriesMessage
 */
const se_DescribeEventCategoriesMessage = (input: DescribeEventCategoriesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEventsMessage
 */
const se_DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SIou] != null) {
    entries[_SIou] = input[_SIou];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_STt] != null) {
    entries[_STt] = __serializeDateTime(input[_STt]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_Du] != null) {
    entries[_Du] = input[_Du];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_HCCI] != null) {
    entries[_HCCI] = input[_HCCI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_HCI] != null) {
    entries[_HCI] = input[_HCI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
 * serializeAws_queryDescribeInboundIntegrationsMessage
 */
const se_DescribeInboundIntegrationsMessage = (
  input: DescribeInboundIntegrationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_IA] != null) {
    entries[_IA] = input[_IA];
  }
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeIntegrationsFilter
 */
const se_DescribeIntegrationsFilter = (input: DescribeIntegrationsFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    const memberEntries = se_DescribeIntegrationsFilterValueList(input[_Va], context);
    if (input[_Va]?.length === 0) {
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
 * serializeAws_queryDescribeIntegrationsFilterList
 */
const se_DescribeIntegrationsFilterList = (input: DescribeIntegrationsFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_DescribeIntegrationsFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`DescribeIntegrationsFilter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeIntegrationsFilterValueList
 */
const se_DescribeIntegrationsFilterValueList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`Value.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeIntegrationsMessage
 */
const se_DescribeIntegrationsMessage = (input: DescribeIntegrationsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IA] != null) {
    entries[_IA] = input[_IA];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Fi] != null) {
    const memberEntries = se_DescribeIntegrationsFilterList(input[_Fi], context);
    if (input[_Fi]?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
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
  if (input[_AT] != null) {
    entries[_AT] = input[_AT];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_OA] != null) {
    entries[_OA] = input[_OA];
  }
  if (input[_Fi] != null) {
    const memberEntries = se_NodeConfigurationOptionsFilterList(input[_Fi], context);
    if (input[_Fi]?.length === 0) {
      entries.Filter = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
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
  if (input[_CV] != null) {
    entries[_CV] = input[_CV];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribePartnersInputMessage
 */
const se_DescribePartnersInputMessage = (input: DescribePartnersInputMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AIc] != null) {
    entries[_AIc] = input[_AIc];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_DNa] != null) {
    entries[_DNa] = input[_DNa];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeRedshiftIdcApplicationsMessage
 */
const se_DescribeRedshiftIdcApplicationsMessage = (
  input: DescribeRedshiftIdcApplicationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RIAA] != null) {
    entries[_RIAA] = input[_RIAA];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_RNI] != null) {
    entries[_RNI] = input[_RNI];
  }
  if (input[_RNERI] != null) {
    entries[_RNERI] = input[_RNERI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_RNOI] != null) {
    entries[_RNOI] = input[_RNOI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReservedNodesMessage
 */
const se_DescribeReservedNodesMessage = (input: DescribeReservedNodesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RNI] != null) {
    entries[_RNI] = input[_RNI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeResizeMessage
 */
const se_DescribeResizeMessage = (input: DescribeResizeMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeScheduledActionsMessage
 */
const se_DescribeScheduledActionsMessage = (input: DescribeScheduledActionsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAN] != null) {
    entries[_SAN] = input[_SAN];
  }
  if (input[_TAT] != null) {
    entries[_TAT] = input[_TAT];
  }
  if (input[_STt] != null) {
    entries[_STt] = __serializeDateTime(input[_STt]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_Act] != null) {
    entries[_Act] = input[_Act];
  }
  if (input[_Fi] != null) {
    const memberEntries = se_ScheduledActionFilterList(input[_Fi], context);
    if (input[_Fi]?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
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
  if (input[_SCGN] != null) {
    entries[_SCGN] = input[_SCGN];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_SIc] != null) {
    entries[_SIc] = input[_SIc];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
      entries.TagValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_TRRI] != null) {
    entries[_TRRI] = input[_TRRI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTagsMessage
 */
const se_DescribeTagsMessage = (input: DescribeTagsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RNe] != null) {
    entries[_RNe] = input[_RNe];
  }
  if (input[_RT] != null) {
    entries[_RT] = input[_RT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_ULI] != null) {
    entries[_ULI] = input[_ULI];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_FT] != null) {
    entries[_FT] = input[_FT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    const memberEntries = se_TagValueList(input[_TV], context);
    if (input[_TV]?.length === 0) {
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  return entries;
};

/**
 * serializeAws_queryDisableSnapshotCopyMessage
 */
const se_DisableSnapshotCopyMessage = (input: DisableSnapshotCopyMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
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
  if (input[_DSAa] != null) {
    entries[_DSAa] = input[_DSAa];
  }
  if (input[_DEAi] != null) {
    entries[_DEAi] = input[_DEAi];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_CRo] != null) {
    entries[_CRo] = input[_CRo];
  }
  return entries;
};

/**
 * serializeAws_queryEnableLoggingMessage
 */
const se_EnableLoggingMessage = (input: EnableLoggingMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_BN] != null) {
    entries[_BN] = input[_BN];
  }
  if (input[_SKP] != null) {
    entries[_SKP] = input[_SKP];
  }
  if (input[_LDT] != null) {
    entries[_LDT] = input[_LDT];
  }
  if (input[_LE] != null) {
    const memberEntries = se_LogTypeList(input[_LE], context);
    if (input[_LE]?.length === 0) {
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_DRe] != null) {
    entries[_DRe] = input[_DRe];
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_SCGN] != null) {
    entries[_SCGN] = input[_SCGN];
  }
  if (input[_MSRP] != null) {
    entries[_MSRP] = input[_MSRP];
  }
  return entries;
};

/**
 * serializeAws_queryEncryptionContextMap
 */
const se_EncryptionContextMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
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
 * serializeAws_queryFailoverPrimaryComputeInputMessage
 */
const se_FailoverPrimaryComputeInputMessage = (
  input: FailoverPrimaryComputeInputMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  return entries;
};

/**
 * serializeAws_queryGetClusterCredentialsMessage
 */
const se_GetClusterCredentialsMessage = (input: GetClusterCredentialsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DU] != null) {
    entries[_DU] = input[_DU];
  }
  if (input[_DNb] != null) {
    entries[_DNb] = input[_DNb];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_DSu] != null) {
    entries[_DSu] = input[_DSu];
  }
  if (input[_AC] != null) {
    entries[_AC] = input[_AC];
  }
  if (input[_DG] != null) {
    const memberEntries = se_DbGroupList(input[_DG], context);
    if (input[_DG]?.length === 0) {
      entries.DbGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DbGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CDN] != null) {
    entries[_CDN] = input[_CDN];
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
  if (input[_DNb] != null) {
    entries[_DNb] = input[_DNb];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_DSu] != null) {
    entries[_DSu] = input[_DSu];
  }
  if (input[_CDN] != null) {
    entries[_CDN] = input[_CDN];
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
  if (input[_AT] != null) {
    entries[_AT] = input[_AT];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_RNI] != null) {
    entries[_RNI] = input[_RNI];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryGetResourcePolicyMessage
 */
const se_GetResourcePolicyMessage = (input: GetResourcePolicyMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
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
 * serializeAws_queryLakeFormationQuery
 */
const se_LakeFormationQuery = (input: LakeFormationQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Au] != null) {
    entries[_Au] = input[_Au];
  }
  return entries;
};

/**
 * serializeAws_queryLakeFormationScopeUnion
 */
const se_LakeFormationScopeUnion = (input: LakeFormationScopeUnion, context: __SerdeContext): any => {
  const entries: any = {};
  LakeFormationScopeUnion.visit(input, {
    LakeFormationQuery: (value) => {
      const memberEntries = se_LakeFormationQuery(value, context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        const loc = `LakeFormationQuery.${key}`;
        entries[loc] = value;
      });
    },
    _: (name: string, value: any) => {
      entries[name] = value;
    },
  });
  return entries;
};

/**
 * serializeAws_queryLakeFormationServiceIntegrations
 */
const se_LakeFormationServiceIntegrations = (input: LakeFormationScopeUnion[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_LakeFormationScopeUnion(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryListRecommendationsMessage
 */
const se_ListRecommendationsMessage = (input: ListRecommendationsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_NA] != null) {
    entries[_NA] = input[_NA];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_ACS] != null) {
    entries[_ACS] = input[_ACS];
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
  if (input[_APN] != null) {
    entries[_APN] = input[_APN];
  }
  if (input[_APC] != null) {
    entries[_APC] = input[_APC];
  }
  return entries;
};

/**
 * serializeAws_queryModifyClusterDbRevisionMessage
 */
const se_ModifyClusterDbRevisionMessage = (input: ModifyClusterDbRevisionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_RTe] != null) {
    entries[_RTe] = input[_RTe];
  }
  return entries;
};

/**
 * serializeAws_queryModifyClusterIamRolesMessage
 */
const se_ModifyClusterIamRolesMessage = (input: ModifyClusterIamRolesMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_AIR] != null) {
    const memberEntries = se_IamRoleArnList(input[_AIR], context);
    if (input[_AIR]?.length === 0) {
      entries.AddIamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AddIamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RIR] != null) {
    const memberEntries = se_IamRoleArnList(input[_RIR], context);
    if (input[_RIR]?.length === 0) {
      entries.RemoveIamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RemoveIamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DIRA] != null) {
    entries[_DIRA] = input[_DIRA];
  }
  return entries;
};

/**
 * serializeAws_queryModifyClusterMaintenanceMessage
 */
const se_ModifyClusterMaintenanceMessage = (input: ModifyClusterMaintenanceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_DM] != null) {
    entries[_DM] = input[_DM];
  }
  if (input[_DMI] != null) {
    entries[_DMI] = input[_DMI];
  }
  if (input[_DMST] != null) {
    entries[_DMST] = __serializeDateTime(input[_DMST]);
  }
  if (input[_DMET] != null) {
    entries[_DMET] = __serializeDateTime(input[_DMET]);
  }
  if (input[_DMD] != null) {
    entries[_DMD] = input[_DMD];
  }
  return entries;
};

/**
 * serializeAws_queryModifyClusterMessage
 */
const se_ModifyClusterMessage = (input: ModifyClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_CTl] != null) {
    entries[_CTl] = input[_CTl];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_NON] != null) {
    entries[_NON] = input[_NON];
  }
  if (input[_CSG] != null) {
    const memberEntries = se_ClusterSecurityGroupNameList(input[_CSG], context);
    if (input[_CSG]?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MUP] != null) {
    entries[_MUP] = input[_MUP];
  }
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_ASRP] != null) {
    entries[_ASRP] = input[_ASRP];
  }
  if (input[_MSRP] != null) {
    entries[_MSRP] = input[_MSRP];
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_CV] != null) {
    entries[_CV] = input[_CV];
  }
  if (input[_AVU] != null) {
    entries[_AVU] = input[_AVU];
  }
  if (input[_HCCI] != null) {
    entries[_HCCI] = input[_HCCI];
  }
  if (input[_HCI] != null) {
    entries[_HCI] = input[_HCI];
  }
  if (input[_NCI] != null) {
    entries[_NCI] = input[_NCI];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EVR] != null) {
    entries[_EVR] = input[_EVR];
  }
  if (input[_MTN] != null) {
    entries[_MTN] = input[_MTN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_AZR] != null) {
    entries[_AZR] = input[_AZR];
  }
  if (input[_AZ] != null) {
    entries[_AZ] = input[_AZ];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_MMP] != null) {
    entries[_MMP] = input[_MMP];
  }
  if (input[_MPSKKI] != null) {
    entries[_MPSKKI] = input[_MPSKKI];
  }
  if (input[_IAT] != null) {
    entries[_IAT] = input[_IAT];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
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
  if (input[_PGN] != null) {
    entries[_PGN] = input[_PGN];
  }
  if (input[_Pa] != null) {
    const memberEntries = se_ParametersList(input[_Pa], context);
    if (input[_Pa]?.length === 0) {
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
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_MSRP] != null) {
    entries[_MSRP] = input[_MSRP];
  }
  if (input[_F] != null) {
    entries[_F] = input[_F];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_SIc] != null) {
    entries[_SIc] = input[_SIc];
  }
  if (input[_DSi] != null) {
    entries[_DSi] = input[_DSi];
  }
  return entries;
};

/**
 * serializeAws_queryModifyClusterSubnetGroupMessage
 */
const se_ModifyClusterSubnetGroupMessage = (input: ModifyClusterSubnetGroupMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSGNl] != null) {
    entries[_CSGNl] = input[_CSGNl];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_SIu] != null) {
    const memberEntries = se_SubnetIdentifierList(input[_SIu], context);
    if (input[_SIu]?.length === 0) {
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
  if (input[_CDN] != null) {
    entries[_CDN] = input[_CDN];
  }
  if (input[_CDCA] != null) {
    entries[_CDCA] = input[_CDCA];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  return entries;
};

/**
 * serializeAws_queryModifyEndpointAccessMessage
 */
const se_ModifyEndpointAccessMessage = (input: ModifyEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_STA] != null) {
    entries[_STA] = input[_STA];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_SIo] != null) {
    const memberEntries = se_SourceIdsList(input[_SIo], context);
    if (input[_SIo]?.length === 0) {
      entries.SourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EC] != null) {
    const memberEntries = se_EventCategoriesList(input[_EC], context);
    if (input[_EC]?.length === 0) {
      entries.EventCategories = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventCategories.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_En] != null) {
    entries[_En] = input[_En];
  }
  return entries;
};

/**
 * serializeAws_queryModifyIntegrationMessage
 */
const se_ModifyIntegrationMessage = (input: ModifyIntegrationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IA] != null) {
    entries[_IA] = input[_IA];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_IN] != null) {
    entries[_IN] = input[_IN];
  }
  return entries;
};

/**
 * serializeAws_queryModifyRedshiftIdcApplicationMessage
 */
const se_ModifyRedshiftIdcApplicationMessage = (
  input: ModifyRedshiftIdcApplicationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RIAA] != null) {
    entries[_RIAA] = input[_RIAA];
  }
  if (input[_INd] != null) {
    entries[_INd] = input[_INd];
  }
  if (input[_IRA] != null) {
    entries[_IRA] = input[_IRA];
  }
  if (input[_IDN] != null) {
    entries[_IDN] = input[_IDN];
  }
  if (input[_ATIL] != null) {
    const memberEntries = se_AuthorizedTokenIssuerList(input[_ATIL], context);
    if (input[_ATIL]?.length === 0) {
      entries.AuthorizedTokenIssuerList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthorizedTokenIssuerList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SIe] != null) {
    const memberEntries = se_ServiceIntegrationList(input[_SIe], context);
    if (input[_SIe]?.length === 0) {
      entries.ServiceIntegrations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceIntegrations.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyScheduledActionMessage
 */
const se_ModifyScheduledActionMessage = (input: ModifyScheduledActionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAN] != null) {
    entries[_SAN] = input[_SAN];
  }
  if (input[_TAa] != null) {
    const memberEntries = se_ScheduledActionType(input[_TAa], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Sc] != null) {
    entries[_Sc] = input[_Sc];
  }
  if (input[_IRa] != null) {
    entries[_IRa] = input[_IRa];
  }
  if (input[_SAD] != null) {
    entries[_SAD] = input[_SAD];
  }
  if (input[_STt] != null) {
    entries[_STt] = __serializeDateTime(input[_STt]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_Ena] != null) {
    entries[_Ena] = input[_Ena];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryModifySnapshotScheduleMessage
 */
const se_ModifySnapshotScheduleMessage = (input: ModifySnapshotScheduleMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SIc] != null) {
    entries[_SIc] = input[_SIc];
  }
  if (input[_SD] != null) {
    const memberEntries = se_ScheduleDefinitionList(input[_SD], context);
    if (input[_SD]?.length === 0) {
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
  if (input[_ULI] != null) {
    entries[_ULI] = input[_ULI];
  }
  if (input[_Am] != null) {
    entries[_Am] = input[_Am];
  }
  if (input[_BA] != null) {
    entries[_BA] = input[_BA];
  }
  return entries;
};

/**
 * serializeAws_queryNamespaceIdentifierUnion
 */
const se_NamespaceIdentifierUnion = (input: NamespaceIdentifierUnion, context: __SerdeContext): any => {
  const entries: any = {};
  NamespaceIdentifierUnion.visit(input, {
    ServerlessIdentifier: (value) => {
      const memberEntries = se_ServerlessIdentifier(value, context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        const loc = `ServerlessIdentifier.${key}`;
        entries[loc] = value;
      });
    },
    ProvisionedIdentifier: (value) => {
      const memberEntries = se_ProvisionedIdentifier(value, context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        const loc = `ProvisionedIdentifier.${key}`;
        entries[loc] = value;
      });
    },
    _: (name: string, value: any) => {
      entries[name] = value;
    },
  });
  return entries;
};

/**
 * serializeAws_queryNodeConfigurationOptionsFilter
 */
const se_NodeConfigurationOptionsFilter = (input: NodeConfigurationOptionsFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_O] != null) {
    entries[_O] = input[_O];
  }
  if (input[_Va] != null) {
    const memberEntries = se_ValueStringList(input[_Va], context);
    if (input[_Va]?.length === 0) {
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
  if (input[_PNa] != null) {
    entries[_PNa] = input[_PNa];
  }
  if (input[_PV] != null) {
    entries[_PV] = input[_PV];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_DTa] != null) {
    entries[_DTa] = input[_DTa];
  }
  if (input[_AV] != null) {
    entries[_AV] = input[_AV];
  }
  if (input[_ATp] != null) {
    entries[_ATp] = input[_ATp];
  }
  if (input[_IM] != null) {
    entries[_IM] = input[_IM];
  }
  if (input[_MEV] != null) {
    entries[_MEV] = input[_MEV];
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
  if (input[_AIc] != null) {
    entries[_AIc] = input[_AIc];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_DNa] != null) {
    entries[_DNa] = input[_DNa];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryPauseClusterMessage
 */
const se_PauseClusterMessage = (input: PauseClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  return entries;
};

/**
 * serializeAws_queryProvisionedIdentifier
 */
const se_ProvisionedIdentifier = (input: ProvisionedIdentifier, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
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
  if (input[_RNOI] != null) {
    entries[_RNOI] = input[_RNOI];
  }
  if (input[_NC] != null) {
    entries[_NC] = input[_NC];
  }
  return entries;
};

/**
 * serializeAws_queryPutResourcePolicyMessage
 */
const se_PutResourcePolicyMessage = (input: PutResourcePolicyMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  return entries;
};

/**
 * serializeAws_queryReadWriteAccess
 */
const se_ReadWriteAccess = (input: ReadWriteAccess, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Au] != null) {
    entries[_Au] = input[_Au];
  }
  return entries;
};

/**
 * serializeAws_queryRebootClusterMessage
 */
const se_RebootClusterMessage = (input: RebootClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  return entries;
};

/**
 * serializeAws_queryRegisterNamespaceInputMessage
 */
const se_RegisterNamespaceInputMessage = (input: RegisterNamespaceInputMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NIa] != null) {
    const memberEntries = se_NamespaceIdentifierUnion(input[_NIa], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NamespaceIdentifier.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CIon] != null) {
    const memberEntries = se_ConsumerIdentifierList(input[_CIon], context);
    if (input[_CIon]?.length === 0) {
      entries.ConsumerIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConsumerIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRejectDataShareMessage
 */
const se_RejectDataShareMessage = (input: RejectDataShareMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DSAa] != null) {
    entries[_DSAa] = input[_DSAa];
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
  if (input[_PGN] != null) {
    entries[_PGN] = input[_PGN];
  }
  if (input[_RAP] != null) {
    entries[_RAP] = input[_RAP];
  }
  if (input[_Pa] != null) {
    const memberEntries = se_ParametersList(input[_Pa], context);
    if (input[_Pa]?.length === 0) {
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_CTl] != null) {
    entries[_CTl] = input[_CTl];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_NON] != null) {
    entries[_NON] = input[_NON];
  }
  if (input[_C] != null) {
    entries[_C] = input[_C];
  }
  if (input[_RNI] != null) {
    entries[_RNI] = input[_RNI];
  }
  if (input[_TRNOI] != null) {
    entries[_TRNOI] = input[_TRNOI];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_SCI] != null) {
    entries[_SCI] = input[_SCI];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_AZ] != null) {
    entries[_AZ] = input[_AZ];
  }
  if (input[_AVU] != null) {
    entries[_AVU] = input[_AVU];
  }
  if (input[_CSGNl] != null) {
    entries[_CSGNl] = input[_CSGNl];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_OA] != null) {
    entries[_OA] = input[_OA];
  }
  if (input[_HCCI] != null) {
    entries[_HCCI] = input[_HCCI];
  }
  if (input[_HCI] != null) {
    entries[_HCI] = input[_HCI];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_CPGN] != null) {
    entries[_CPGN] = input[_CPGN];
  }
  if (input[_CSG] != null) {
    const memberEntries = se_ClusterSecurityGroupNameList(input[_CSG], context);
    if (input[_CSG]?.length === 0) {
      entries.ClusterSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClusterSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VSGI] != null) {
    const memberEntries = se_VpcSecurityGroupIdList(input[_VSGI], context);
    if (input[_VSGI]?.length === 0) {
      entries.VpcSecurityGroupIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcSecurityGroupIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PMW] != null) {
    entries[_PMW] = input[_PMW];
  }
  if (input[_ASRP] != null) {
    entries[_ASRP] = input[_ASRP];
  }
  if (input[_MSRP] != null) {
    entries[_MSRP] = input[_MSRP];
  }
  if (input[_KKI] != null) {
    entries[_KKI] = input[_KKI];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_EVR] != null) {
    entries[_EVR] = input[_EVR];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_IR] != null) {
    const memberEntries = se_IamRoleArnList(input[_IR], context);
    if (input[_IR]?.length === 0) {
      entries.IamRoles = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IamRoles.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MTN] != null) {
    entries[_MTN] = input[_MTN];
  }
  if (input[_SSIn] != null) {
    entries[_SSIn] = input[_SSIn];
  }
  if (input[_NON] != null) {
    entries[_NON] = input[_NON];
  }
  if (input[_AZR] != null) {
    entries[_AZR] = input[_AZR];
  }
  if (input[_ACS] != null) {
    entries[_ACS] = input[_ACS];
  }
  if (input[_DIRA] != null) {
    entries[_DIRA] = input[_DIRA];
  }
  if (input[_RNI] != null) {
    entries[_RNI] = input[_RNI];
  }
  if (input[_TRNOI] != null) {
    entries[_TRNOI] = input[_TRNOI];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MMP] != null) {
    entries[_MMP] = input[_MMP];
  }
  if (input[_MPSKKI] != null) {
    entries[_MPSKKI] = input[_MPSKKI];
  }
  if (input[_IAT] != null) {
    entries[_IAT] = input[_IAT];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
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
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_SDN] != null) {
    entries[_SDN] = input[_SDN];
  }
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_STN] != null) {
    entries[_STN] = input[_STN];
  }
  if (input[_TDN] != null) {
    entries[_TDN] = input[_TDN];
  }
  if (input[_TSN] != null) {
    entries[_TSN] = input[_TSN];
  }
  if (input[_NTN] != null) {
    entries[_NTN] = input[_NTN];
  }
  if (input[_ECSI] != null) {
    entries[_ECSI] = input[_ECSI];
  }
  return entries;
};

/**
 * serializeAws_queryResumeClusterMessage
 */
const se_ResumeClusterMessage = (input: ResumeClusterMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
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
  if (input[_CSGN] != null) {
    entries[_CSGN] = input[_CSGN];
  }
  if (input[_CIDRIP] != null) {
    entries[_CIDRIP] = input[_CIDRIP];
  }
  if (input[_ECSGN] != null) {
    entries[_ECSGN] = input[_ECSGN];
  }
  if (input[_ECSGOI] != null) {
    entries[_ECSGOI] = input[_ECSGOI];
  }
  return entries;
};

/**
 * serializeAws_queryRevokeEndpointAccessMessage
 */
const se_RevokeEndpointAccessMessage = (input: RevokeEndpointAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_Ac] != null) {
    entries[_Ac] = input[_Ac];
  }
  if (input[_VI] != null) {
    const memberEntries = se_VpcIdentifierList(input[_VI], context);
    if (input[_VI]?.length === 0) {
      entries.VpcIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VpcIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_F] != null) {
    entries[_F] = input[_F];
  }
  return entries;
};

/**
 * serializeAws_queryRevokeSnapshotAccessMessage
 */
const se_RevokeSnapshotAccessMessage = (input: RevokeSnapshotAccessMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_SCI] != null) {
    entries[_SCI] = input[_SCI];
  }
  if (input[_AWRA] != null) {
    entries[_AWRA] = input[_AWRA];
  }
  return entries;
};

/**
 * serializeAws_queryRotateEncryptionKeyMessage
 */
const se_RotateEncryptionKeyMessage = (input: RotateEncryptionKeyMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  return entries;
};

/**
 * serializeAws_queryS3AccessGrantsScopeUnion
 */
const se_S3AccessGrantsScopeUnion = (input: S3AccessGrantsScopeUnion, context: __SerdeContext): any => {
  const entries: any = {};
  S3AccessGrantsScopeUnion.visit(input, {
    ReadWriteAccess: (value) => {
      const memberEntries = se_ReadWriteAccess(value, context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        const loc = `ReadWriteAccess.${key}`;
        entries[loc] = value;
      });
    },
    _: (name: string, value: any) => {
      entries[name] = value;
    },
  });
  return entries;
};

/**
 * serializeAws_queryS3AccessGrantsServiceIntegrations
 */
const se_S3AccessGrantsServiceIntegrations = (input: S3AccessGrantsScopeUnion[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_S3AccessGrantsScopeUnion(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryScheduledActionFilter
 */
const se_ScheduledActionFilter = (input: ScheduledActionFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    const memberEntries = se_ValueStringList(input[_Va], context);
    if (input[_Va]?.length === 0) {
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
  if (input[_RCe] != null) {
    const memberEntries = se_ResizeClusterMessage(input[_RCe], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResizeCluster.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PC] != null) {
    const memberEntries = se_PauseClusterMessage(input[_PC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PauseCluster.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RCes] != null) {
    const memberEntries = se_ResumeClusterMessage(input[_RCes], context);
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
 * serializeAws_queryServerlessIdentifier
 */
const se_ServerlessIdentifier = (input: ServerlessIdentifier, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NIa] != null) {
    entries[_NIa] = input[_NIa];
  }
  if (input[_WI] != null) {
    entries[_WI] = input[_WI];
  }
  return entries;
};

/**
 * serializeAws_queryServiceIntegrationList
 */
const se_ServiceIntegrationList = (input: ServiceIntegrationsUnion[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ServiceIntegrationsUnion(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryServiceIntegrationsUnion
 */
const se_ServiceIntegrationsUnion = (input: ServiceIntegrationsUnion, context: __SerdeContext): any => {
  const entries: any = {};
  ServiceIntegrationsUnion.visit(input, {
    LakeFormation: (value) => {
      const memberEntries = se_LakeFormationServiceIntegrations(value, context);
      if (value?.length === 0) {
        entries.LakeFormation = [];
      }
      Object.entries(memberEntries).forEach(([key, value]) => {
        const loc = `LakeFormation.${key}`;
        entries[loc] = value;
      });
    },
    S3AccessGrants: (value) => {
      const memberEntries = se_S3AccessGrantsServiceIntegrations(value, context);
      if (value?.length === 0) {
        entries.S3AccessGrants = [];
      }
      Object.entries(memberEntries).forEach(([key, value]) => {
        const loc = `S3AccessGrants.${key}`;
        entries[loc] = value;
      });
    },
    _: (name: string, value: any) => {
      entries[name] = value;
    },
  });
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
  if (input[_At] != null) {
    entries[_At] = input[_At];
  }
  if (input[_SO] != null) {
    entries[_SO] = input[_SO];
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
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
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
  if (input[_AIc] != null) {
    entries[_AIc] = input[_AIc];
  }
  if (input[_CIl] != null) {
    entries[_CIl] = input[_CIl];
  }
  if (input[_DNa] != null) {
    entries[_DNa] = input[_DNa];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_SM] != null) {
    entries[_SM] = input[_SM];
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
  if (output[_ERN] != null) {
    contents[_ERN] = de_ReservedNode(output[_ERN], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAccessToClusterDeniedFault
 */
const de_AccessToClusterDeniedFault = (output: any, context: __SerdeContext): AccessToClusterDeniedFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccessToSnapshotDeniedFault
 */
const de_AccessToSnapshotDeniedFault = (output: any, context: __SerdeContext): AccessToSnapshotDeniedFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccountAttribute
 */
const de_AccountAttribute = (output: any, context: __SerdeContext): AccountAttribute => {
  const contents: any = {};
  if (output[_ANt] != null) {
    contents[_ANt] = __expectString(output[_ANt]);
  }
  if (output.AttributeValues === "") {
    contents[_AVt] = [];
  } else if (output[_AVt] != null && output[_AVt][_AVT] != null) {
    contents[_AVt] = de_AttributeValueList(__getArrayIfSingleItem(output[_AVt][_AVT]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAccountAttributeList
 */
const de_AccountAttributeList = (output: any, context: __SerdeContext): AccountAttributeList => {
  const contents: any = {};
  if (output.AccountAttributes === "") {
    contents[_AA] = [];
  } else if (output[_AA] != null && output[_AA][_AAc] != null) {
    contents[_AA] = de_AttributeList(__getArrayIfSingleItem(output[_AA][_AAc]), context);
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
  if (output[_AIc] != null) {
    contents[_AIc] = __expectString(output[_AIc]);
  }
  if (output[_AAcc] != null) {
    contents[_AAcc] = __expectString(output[_AAcc]);
  }
  return contents;
};

/**
 * deserializeAws_queryAquaConfiguration
 */
const de_AquaConfiguration = (output: any, context: __SerdeContext): AquaConfiguration => {
  const contents: any = {};
  if (output[_AS] != null) {
    contents[_AS] = __expectString(output[_AS]);
  }
  if (output[_ACS] != null) {
    contents[_ACS] = __expectString(output[_ACS]);
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
  if (output[_CDCA] != null) {
    contents[_CDCA] = __expectString(output[_CDCA]);
  }
  if (output[_CDCED] != null) {
    contents[_CDCED] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CDCED]));
  }
  if (output.CertificateAssociations === "") {
    contents[_CAe] = [];
  } else if (output[_CAe] != null && output[_CAe][_CAer] != null) {
    contents[_CAe] = de_CertificateAssociationList(__getArrayIfSingleItem(output[_CAe][_CAer]), context);
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
  if (output[_AVtt] != null) {
    contents[_AVtt] = __expectString(output[_AVtt]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticationProfile
 */
const de_AuthenticationProfile = (output: any, context: __SerdeContext): AuthenticationProfile => {
  const contents: any = {};
  if (output[_APN] != null) {
    contents[_APN] = __expectString(output[_APN]);
  }
  if (output[_APC] != null) {
    contents[_APC] = __expectString(output[_APC]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationAlreadyExistsFault
 */
const de_AuthorizationAlreadyExistsFault = (output: any, context: __SerdeContext): AuthorizationAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationNotFoundFault
 */
const de_AuthorizationNotFoundFault = (output: any, context: __SerdeContext): AuthorizationNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizationQuotaExceededFault
 */
const de_AuthorizationQuotaExceededFault = (output: any, context: __SerdeContext): AuthorizationQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_CSGl] != null) {
    contents[_CSGl] = de_ClusterSecurityGroup(output[_CSGl], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizedAudienceList
 */
const de_AuthorizedAudienceList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAuthorizedTokenIssuer
 */
const de_AuthorizedTokenIssuer = (output: any, context: __SerdeContext): AuthorizedTokenIssuer => {
  const contents: any = {};
  if (output[_TTIA] != null) {
    contents[_TTIA] = __expectString(output[_TTIA]);
  }
  if (output.AuthorizedAudiencesList === "") {
    contents[_AAL] = [];
  } else if (output[_AAL] != null && output[_AAL][_me] != null) {
    contents[_AAL] = de_AuthorizedAudienceList(__getArrayIfSingleItem(output[_AAL][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthorizedTokenIssuerList
 */
const de_AuthorizedTokenIssuerList = (output: any, context: __SerdeContext): AuthorizedTokenIssuer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuthorizedTokenIssuer(entry, context);
    });
};

/**
 * deserializeAws_queryAuthorizeSnapshotAccessResult
 */
const de_AuthorizeSnapshotAccessResult = (output: any, context: __SerdeContext): AuthorizeSnapshotAccessResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output.SupportedPlatforms === "") {
    contents[_SP] = [];
  } else if (output[_SP] != null && output[_SP][_SPu] != null) {
    contents[_SP] = de_SupportedPlatformsList(__getArrayIfSingleItem(output[_SP][_SPu]), context);
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
    contents[_R] = [];
  } else if (output[_R] != null && output[_R][_Str] != null) {
    contents[_R] = de_SnapshotIdentifierList(__getArrayIfSingleItem(output[_R][_Str]), context);
  }
  if (output.Errors === "") {
    contents[_Er] = [];
  } else if (output[_Er] != null && output[_Er][_SEM] != null) {
    contents[_Er] = de_BatchSnapshotOperationErrorList(__getArrayIfSingleItem(output[_Er][_SEM]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
    contents[_R] = [];
  } else if (output[_R] != null && output[_R][_Str] != null) {
    contents[_R] = de_SnapshotIdentifierList(__getArrayIfSingleItem(output[_R][_Str]), context);
  }
  if (output.Errors === "") {
    contents[_Er] = [];
  } else if (output[_Er] != null && output[_Er][_SEM] != null) {
    contents[_Er] = de_BatchSnapshotOperationErrors(__getArrayIfSingleItem(output[_Er][_SEM]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateAssociation
 */
const de_CertificateAssociation = (output: any, context: __SerdeContext): CertificateAssociation => {
  const contents: any = {};
  if (output[_CDN] != null) {
    contents[_CDN] = __expectString(output[_CDN]);
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
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
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_CS] != null) {
    contents[_CS] = __expectString(output[_CS]);
  }
  if (output[_CAS] != null) {
    contents[_CAS] = __expectString(output[_CAS]);
  }
  if (output[_MS] != null) {
    contents[_MS] = __expectString(output[_MS]);
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_DBN] != null) {
    contents[_DBN] = __expectString(output[_DBN]);
  }
  if (output[_End] != null) {
    contents[_End] = de_Endpoint(output[_End], context);
  }
  if (output[_CCT] != null) {
    contents[_CCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CCT]));
  }
  if (output[_ASRP] != null) {
    contents[_ASRP] = __strictParseInt32(output[_ASRP]) as number;
  }
  if (output[_MSRP] != null) {
    contents[_MSRP] = __strictParseInt32(output[_MSRP]) as number;
  }
  if (output.ClusterSecurityGroups === "") {
    contents[_CSG] = [];
  } else if (output[_CSG] != null && output[_CSG][_CSGl] != null) {
    contents[_CSG] = de_ClusterSecurityGroupMembershipList(__getArrayIfSingleItem(output[_CSG][_CSGl]), context);
  }
  if (output.VpcSecurityGroups === "") {
    contents[_VSG] = [];
  } else if (output[_VSG] != null && output[_VSG][_VSGp] != null) {
    contents[_VSG] = de_VpcSecurityGroupMembershipList(__getArrayIfSingleItem(output[_VSG][_VSGp]), context);
  }
  if (output.ClusterParameterGroups === "") {
    contents[_CPG] = [];
  } else if (output[_CPG] != null && output[_CPG][_CPGl] != null) {
    contents[_CPG] = de_ClusterParameterGroupStatusList(__getArrayIfSingleItem(output[_CPG][_CPGl]), context);
  }
  if (output[_CSGNl] != null) {
    contents[_CSGNl] = __expectString(output[_CSGNl]);
  }
  if (output[_VIp] != null) {
    contents[_VIp] = __expectString(output[_VIp]);
  }
  if (output[_AZ] != null) {
    contents[_AZ] = __expectString(output[_AZ]);
  }
  if (output[_PMW] != null) {
    contents[_PMW] = __expectString(output[_PMW]);
  }
  if (output[_PMV] != null) {
    contents[_PMV] = de_PendingModifiedValues(output[_PMV], context);
  }
  if (output[_CV] != null) {
    contents[_CV] = __expectString(output[_CV]);
  }
  if (output[_AVU] != null) {
    contents[_AVU] = __parseBoolean(output[_AVU]);
  }
  if (output[_NON] != null) {
    contents[_NON] = __strictParseInt32(output[_NON]) as number;
  }
  if (output[_PA] != null) {
    contents[_PA] = __parseBoolean(output[_PA]);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_RS] != null) {
    contents[_RS] = de_RestoreStatus(output[_RS], context);
  }
  if (output[_DTP] != null) {
    contents[_DTP] = de_DataTransferProgress(output[_DTP], context);
  }
  if (output[_HS] != null) {
    contents[_HS] = de_HsmStatus(output[_HS], context);
  }
  if (output[_CSCS] != null) {
    contents[_CSCS] = de_ClusterSnapshotCopyStatus(output[_CSCS], context);
  }
  if (output[_CPK] != null) {
    contents[_CPK] = __expectString(output[_CPK]);
  }
  if (output.ClusterNodes === "") {
    contents[_CN] = [];
  } else if (output[_CN] != null && output[_CN][_me] != null) {
    contents[_CN] = de_ClusterNodesList(__getArrayIfSingleItem(output[_CN][_me]), context);
  }
  if (output[_EIS] != null) {
    contents[_EIS] = de_ElasticIpStatus(output[_EIS], context);
  }
  if (output[_CRN] != null) {
    contents[_CRN] = __expectString(output[_CRN]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_EVR] != null) {
    contents[_EVR] = __parseBoolean(output[_EVR]);
  }
  if (output.IamRoles === "") {
    contents[_IR] = [];
  } else if (output[_IR] != null && output[_IR][_CIR] != null) {
    contents[_IR] = de_ClusterIamRoleList(__getArrayIfSingleItem(output[_IR][_CIR]), context);
  }
  if (output.PendingActions === "") {
    contents[_PAe] = [];
  } else if (output[_PAe] != null && output[_PAe][_me] != null) {
    contents[_PAe] = de_PendingActionsList(__getArrayIfSingleItem(output[_PAe][_me]), context);
  }
  if (output[_MTN] != null) {
    contents[_MTN] = __expectString(output[_MTN]);
  }
  if (output[_ERNONO] != null) {
    contents[_ERNONO] = __expectString(output[_ERNONO]);
  }
  if (output.DeferredMaintenanceWindows === "") {
    contents[_DMW] = [];
  } else if (output[_DMW] != null && output[_DMW][_DMWe] != null) {
    contents[_DMW] = de_DeferredMaintenanceWindowsList(__getArrayIfSingleItem(output[_DMW][_DMWe]), context);
  }
  if (output[_SSIn] != null) {
    contents[_SSIn] = __expectString(output[_SSIn]);
  }
  if (output[_SSS] != null) {
    contents[_SSS] = __expectString(output[_SSS]);
  }
  if (output[_ENSST] != null) {
    contents[_ENSST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ENSST]));
  }
  if (output[_ENSSTS] != null) {
    contents[_ENSSTS] = __expectString(output[_ENSSTS]);
  }
  if (output[_NMWST] != null) {
    contents[_NMWST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NMWST]));
  }
  if (output[_RI] != null) {
    contents[_RI] = de_ResizeInfo(output[_RI], context);
  }
  if (output[_AZRS] != null) {
    contents[_AZRS] = __expectString(output[_AZRS]);
  }
  if (output[_CNA] != null) {
    contents[_CNA] = __expectString(output[_CNA]);
  }
  if (output[_TSCIMB] != null) {
    contents[_TSCIMB] = __strictParseLong(output[_TSCIMB]) as number;
  }
  if (output[_ACq] != null) {
    contents[_ACq] = de_AquaConfiguration(output[_ACq], context);
  }
  if (output[_DIRA] != null) {
    contents[_DIRA] = __expectString(output[_DIRA]);
  }
  if (output[_RNES] != null) {
    contents[_RNES] = de_ReservedNodeExchangeStatus(output[_RNES], context);
  }
  if (output[_CDN] != null) {
    contents[_CDN] = __expectString(output[_CDN]);
  }
  if (output[_CDCA] != null) {
    contents[_CDCA] = __expectString(output[_CDCA]);
  }
  if (output[_CDCED] != null) {
    contents[_CDCED] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CDCED]));
  }
  if (output[_MPSA] != null) {
    contents[_MPSA] = __expectString(output[_MPSA]);
  }
  if (output[_MPSKKI] != null) {
    contents[_MPSKKI] = __expectString(output[_MPSKKI]);
  }
  if (output[_IAT] != null) {
    contents[_IAT] = __expectString(output[_IAT]);
  }
  if (output[_MAZ] != null) {
    contents[_MAZ] = __expectString(output[_MAZ]);
  }
  if (output[_MAZS] != null) {
    contents[_MAZS] = de_SecondaryClusterInfo(output[_MAZS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterAlreadyExistsFault
 */
const de_ClusterAlreadyExistsFault = (output: any, context: __SerdeContext): ClusterAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterAssociatedToSchedule
 */
const de_ClusterAssociatedToSchedule = (output: any, context: __SerdeContext): ClusterAssociatedToSchedule => {
  const contents: any = {};
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_SAS] != null) {
    contents[_SAS] = __expectString(output[_SAS]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterCredentials
 */
const de_ClusterCredentials = (output: any, context: __SerdeContext): ClusterCredentials => {
  const contents: any = {};
  if (output[_DU] != null) {
    contents[_DU] = __expectString(output[_DU]);
  }
  if (output[_DPb] != null) {
    contents[_DPb] = __expectString(output[_DPb]);
  }
  if (output[_Ex] != null) {
    contents[_Ex] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ex]));
  }
  return contents;
};

/**
 * deserializeAws_queryClusterDbRevision
 */
const de_ClusterDbRevision = (output: any, context: __SerdeContext): ClusterDbRevision => {
  const contents: any = {};
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_CDR] != null) {
    contents[_CDR] = __expectString(output[_CDR]);
  }
  if (output[_DRRD] != null) {
    contents[_DRRD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DRRD]));
  }
  if (output.RevisionTargets === "") {
    contents[_RTev] = [];
  } else if (output[_RTev] != null && output[_RTev][_RTe] != null) {
    contents[_RTev] = de_RevisionTargetsList(__getArrayIfSingleItem(output[_RTev][_RTe]), context);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ClusterDbRevisions === "") {
    contents[_CDRl] = [];
  } else if (output[_CDRl] != null && output[_CDRl][_CDRlu] != null) {
    contents[_CDRl] = de_ClusterDbRevisionsList(__getArrayIfSingleItem(output[_CDRl][_CDRlu]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterExtendedCredentials
 */
const de_ClusterExtendedCredentials = (output: any, context: __SerdeContext): ClusterExtendedCredentials => {
  const contents: any = {};
  if (output[_DU] != null) {
    contents[_DU] = __expectString(output[_DU]);
  }
  if (output[_DPb] != null) {
    contents[_DPb] = __expectString(output[_DPb]);
  }
  if (output[_Ex] != null) {
    contents[_Ex] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ex]));
  }
  if (output[_NRT] != null) {
    contents[_NRT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_NRT]));
  }
  return contents;
};

/**
 * deserializeAws_queryClusterIamRole
 */
const de_ClusterIamRole = (output: any, context: __SerdeContext): ClusterIamRole => {
  const contents: any = {};
  if (output[_IRA] != null) {
    contents[_IRA] = __expectString(output[_IRA]);
  }
  if (output[_ASp] != null) {
    contents[_ASp] = __expectString(output[_ASp]);
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
  if (output[_NR] != null) {
    contents[_NR] = __expectString(output[_NR]);
  }
  if (output[_PIPA] != null) {
    contents[_PIPA] = __expectString(output[_PIPA]);
  }
  if (output[_PIPAu] != null) {
    contents[_PIPAu] = __expectString(output[_PIPAu]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterOnLatestRevisionFault
 */
const de_ClusterOnLatestRevisionFault = (output: any, context: __SerdeContext): ClusterOnLatestRevisionFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroup
 */
const de_ClusterParameterGroup = (output: any, context: __SerdeContext): ClusterParameterGroup => {
  const contents: any = {};
  if (output[_PGN] != null) {
    contents[_PGN] = __expectString(output[_PGN]);
  }
  if (output[_PGF] != null) {
    contents[_PGF] = __expectString(output[_PGF]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupDetails
 */
const de_ClusterParameterGroupDetails = (output: any, context: __SerdeContext): ClusterParameterGroupDetails => {
  const contents: any = {};
  if (output.Parameters === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_Par] != null) {
    contents[_Pa] = de_ParametersList(__getArrayIfSingleItem(output[_Pa][_Par]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_PGN] != null) {
    contents[_PGN] = __expectString(output[_PGN]);
  }
  if (output[_PGS] != null) {
    contents[_PGS] = __expectString(output[_PGS]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupsMessage
 */
const de_ClusterParameterGroupsMessage = (output: any, context: __SerdeContext): ClusterParameterGroupsMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ParameterGroups === "") {
    contents[_PG] = [];
  } else if (output[_PG] != null && output[_PG][_CPGl] != null) {
    contents[_PG] = de_ParameterGroupList(__getArrayIfSingleItem(output[_PG][_CPGl]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterParameterGroupStatus
 */
const de_ClusterParameterGroupStatus = (output: any, context: __SerdeContext): ClusterParameterGroupStatus => {
  const contents: any = {};
  if (output[_PGN] != null) {
    contents[_PGN] = __expectString(output[_PGN]);
  }
  if (output[_PAS] != null) {
    contents[_PAS] = __expectString(output[_PAS]);
  }
  if (output.ClusterParameterStatusList === "") {
    contents[_CPSL] = [];
  } else if (output[_CPSL] != null && output[_CPSL][_me] != null) {
    contents[_CPSL] = de_ClusterParameterStatusList(__getArrayIfSingleItem(output[_CPSL][_me]), context);
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
  if (output[_PNa] != null) {
    contents[_PNa] = __expectString(output[_PNa]);
  }
  if (output[_PAS] != null) {
    contents[_PAS] = __expectString(output[_PAS]);
  }
  if (output[_PAED] != null) {
    contents[_PAED] = __expectString(output[_PAED]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroup
 */
const de_ClusterSecurityGroup = (output: any, context: __SerdeContext): ClusterSecurityGroup => {
  const contents: any = {};
  if (output[_CSGN] != null) {
    contents[_CSGN] = __expectString(output[_CSGN]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output.EC2SecurityGroups === "") {
    contents[_ECSG] = [];
  } else if (output[_ECSG] != null && output[_ECSG][_ECSGe] != null) {
    contents[_ECSG] = de_EC2SecurityGroupList(__getArrayIfSingleItem(output[_ECSG][_ECSGe]), context);
  }
  if (output.IPRanges === "") {
    contents[_IPR] = [];
  } else if (output[_IPR] != null && output[_IPR][_IPRa] != null) {
    contents[_IPR] = de_IPRangeList(__getArrayIfSingleItem(output[_IPR][_IPRa]), context);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSecurityGroupMembership
 */
const de_ClusterSecurityGroupMembership = (output: any, context: __SerdeContext): ClusterSecurityGroupMembership => {
  const contents: any = {};
  if (output[_CSGN] != null) {
    contents[_CSGN] = __expectString(output[_CSGN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ClusterSecurityGroups === "") {
    contents[_CSG] = [];
  } else if (output[_CSG] != null && output[_CSG][_CSGl] != null) {
    contents[_CSG] = de_ClusterSecurityGroups(__getArrayIfSingleItem(output[_CSG][_CSGl]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.Clusters === "") {
    contents[_Cl] = [];
  } else if (output[_Cl] != null && output[_Cl][_Clu] != null) {
    contents[_Cl] = de_ClusterList(__getArrayIfSingleItem(output[_Cl][_Clu]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSnapshotCopyStatus
 */
const de_ClusterSnapshotCopyStatus = (output: any, context: __SerdeContext): ClusterSnapshotCopyStatus => {
  const contents: any = {};
  if (output[_DRe] != null) {
    contents[_DRe] = __expectString(output[_DRe]);
  }
  if (output[_RP] != null) {
    contents[_RP] = __strictParseLong(output[_RP]) as number;
  }
  if (output[_MSRP] != null) {
    contents[_MSRP] = __strictParseInt32(output[_MSRP]) as number;
  }
  if (output[_SCGN] != null) {
    contents[_SCGN] = __expectString(output[_SCGN]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSnapshotNotFoundFault
 */
const de_ClusterSnapshotNotFoundFault = (output: any, context: __SerdeContext): ClusterSnapshotNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroup
 */
const de_ClusterSubnetGroup = (output: any, context: __SerdeContext): ClusterSubnetGroup => {
  const contents: any = {};
  if (output[_CSGNl] != null) {
    contents[_CSGNl] = __expectString(output[_CSGNl]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_VIp] != null) {
    contents[_VIp] = __expectString(output[_VIp]);
  }
  if (output[_SGS] != null) {
    contents[_SGS] = __expectString(output[_SGS]);
  }
  if (output.Subnets === "") {
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_Sub] != null) {
    contents[_Su] = de_SubnetList(__getArrayIfSingleItem(output[_Su][_Sub]), context);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
  }
  if (output.SupportedClusterIpAddressTypes === "") {
    contents[_SCIAT] = [];
  } else if (output[_SCIAT] != null && output[_SCIAT][_i] != null) {
    contents[_SCIAT] = de_ValueStringList(__getArrayIfSingleItem(output[_SCIAT][_i]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroupMessage
 */
const de_ClusterSubnetGroupMessage = (output: any, context: __SerdeContext): ClusterSubnetGroupMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ClusterSubnetGroups === "") {
    contents[_CSGlu] = [];
  } else if (output[_CSGlu] != null && output[_CSGlu][_CSGlus] != null) {
    contents[_CSGlu] = de_ClusterSubnetGroups(__getArrayIfSingleItem(output[_CSGlu][_CSGlus]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterSubnetGroupNotFoundFault
 */
const de_ClusterSubnetGroupNotFoundFault = (output: any, context: __SerdeContext): ClusterSubnetGroupNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryClusterVersion
 */
const de_ClusterVersion = (output: any, context: __SerdeContext): ClusterVersion => {
  const contents: any = {};
  if (output[_CV] != null) {
    contents[_CV] = __expectString(output[_CV]);
  }
  if (output[_CPGF] != null) {
    contents[_CPGF] = __expectString(output[_CPGF]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ClusterVersions === "") {
    contents[_CVl] = [];
  } else if (output[_CVl] != null && output[_CVl][_CV] != null) {
    contents[_CVl] = de_ClusterVersionList(__getArrayIfSingleItem(output[_CVl][_CV]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryConflictPolicyUpdateFault
 */
const de_ConflictPolicyUpdateFault = (output: any, context: __SerdeContext): ConflictPolicyUpdateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyClusterSnapshotResult
 */
const de_CopyClusterSnapshotResult = (output: any, context: __SerdeContext): CopyClusterSnapshotResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCopyToRegionDisabledFault
 */
const de_CopyToRegionDisabledFault = (output: any, context: __SerdeContext): CopyToRegionDisabledFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_APN] != null) {
    contents[_APN] = __expectString(output[_APN]);
  }
  if (output[_APC] != null) {
    contents[_APC] = __expectString(output[_APC]);
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
  if (output[_CPGl] != null) {
    contents[_CPGl] = de_ClusterParameterGroup(output[_CPGl], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateClusterResult
 */
const de_CreateClusterResult = (output: any, context: __SerdeContext): CreateClusterResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
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
  if (output[_CSGl] != null) {
    contents[_CSGl] = de_ClusterSecurityGroup(output[_CSGl], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateClusterSnapshotResult
 */
const de_CreateClusterSnapshotResult = (output: any, context: __SerdeContext): CreateClusterSnapshotResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateClusterSubnetGroupResult
 */
const de_CreateClusterSubnetGroupResult = (output: any, context: __SerdeContext): CreateClusterSubnetGroupResult => {
  const contents: any = {};
  if (output[_CSGlus] != null) {
    contents[_CSGlus] = de_ClusterSubnetGroup(output[_CSGlus], context);
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
  if (output[_CDN] != null) {
    contents[_CDN] = __expectString(output[_CDN]);
  }
  if (output[_CDCA] != null) {
    contents[_CDCA] = __expectString(output[_CDCA]);
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_CDCET] != null) {
    contents[_CDCET] = __expectString(output[_CDCET]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateEventSubscriptionResult
 */
const de_CreateEventSubscriptionResult = (output: any, context: __SerdeContext): CreateEventSubscriptionResult => {
  const contents: any = {};
  if (output[_ES] != null) {
    contents[_ES] = de_EventSubscription(output[_ES], context);
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
  if (output[_HCC] != null) {
    contents[_HCC] = de_HsmClientCertificate(output[_HCC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateHsmConfigurationResult
 */
const de_CreateHsmConfigurationResult = (output: any, context: __SerdeContext): CreateHsmConfigurationResult => {
  const contents: any = {};
  if (output[_HC] != null) {
    contents[_HC] = de_HsmConfiguration(output[_HC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateRedshiftIdcApplicationResult
 */
const de_CreateRedshiftIdcApplicationResult = (
  output: any,
  context: __SerdeContext
): CreateRedshiftIdcApplicationResult => {
  const contents: any = {};
  if (output[_RIA] != null) {
    contents[_RIA] = de_RedshiftIdcApplication(output[_RIA], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateSnapshotCopyGrantResult
 */
const de_CreateSnapshotCopyGrantResult = (output: any, context: __SerdeContext): CreateSnapshotCopyGrantResult => {
  const contents: any = {};
  if (output[_SCG] != null) {
    contents[_SCG] = de_SnapshotCopyGrant(output[_SCG], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomCnameAssociationFault
 */
const de_CustomCnameAssociationFault = (output: any, context: __SerdeContext): CustomCnameAssociationFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomDomainAssociationsMessage
 */
const de_CustomDomainAssociationsMessage = (output: any, context: __SerdeContext): CustomDomainAssociationsMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.Associations === "") {
    contents[_As] = [];
  } else if (output[_As] != null && output[_As][_Ass] != null) {
    contents[_As] = de_AssociationList(__getArrayIfSingleItem(output[_As][_Ass]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomerStorageMessage
 */
const de_CustomerStorageMessage = (output: any, context: __SerdeContext): CustomerStorageMessage => {
  const contents: any = {};
  if (output[_TBSIMB] != null) {
    contents[_TBSIMB] = __strictParseFloat(output[_TBSIMB]) as number;
  }
  if (output[_TPSIMB] != null) {
    contents[_TPSIMB] = __strictParseFloat(output[_TPSIMB]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDataShare
 */
const de_DataShare = (output: any, context: __SerdeContext): DataShare => {
  const contents: any = {};
  if (output[_DSAa] != null) {
    contents[_DSAa] = __expectString(output[_DSAa]);
  }
  if (output[_PAr] != null) {
    contents[_PAr] = __expectString(output[_PAr]);
  }
  if (output[_APAC] != null) {
    contents[_APAC] = __parseBoolean(output[_APAC]);
  }
  if (output.DataShareAssociations === "") {
    contents[_DSAat] = [];
  } else if (output[_DSAat] != null && output[_DSAat][_me] != null) {
    contents[_DSAat] = de_DataShareAssociationList(__getArrayIfSingleItem(output[_DSAat][_me]), context);
  }
  if (output[_MB] != null) {
    contents[_MB] = __expectString(output[_MB]);
  }
  if (output[_DST] != null) {
    contents[_DST] = __expectString(output[_DST]);
  }
  return contents;
};

/**
 * deserializeAws_queryDataShareAssociation
 */
const de_DataShareAssociation = (output: any, context: __SerdeContext): DataShareAssociation => {
  const contents: any = {};
  if (output[_CIo] != null) {
    contents[_CIo] = __expectString(output[_CIo]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CRo] != null) {
    contents[_CRo] = __expectString(output[_CRo]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_SCD] != null) {
    contents[_SCD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SCD]));
  }
  if (output[_PAW] != null) {
    contents[_PAW] = __parseBoolean(output[_PAW]);
  }
  if (output[_CAW] != null) {
    contents[_CAW] = __parseBoolean(output[_CAW]);
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
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CRIMBPS] != null) {
    contents[_CRIMBPS] = __strictParseFloat(output[_CRIMBPS]) as number;
  }
  if (output[_TDIMB] != null) {
    contents[_TDIMB] = __strictParseLong(output[_TDIMB]) as number;
  }
  if (output[_DTIMB] != null) {
    contents[_DTIMB] = __strictParseLong(output[_DTIMB]) as number;
  }
  if (output[_ETTCIS] != null) {
    contents[_ETTCIS] = __strictParseLong(output[_ETTCIS]) as number;
  }
  if (output[_ETIS] != null) {
    contents[_ETIS] = __strictParseLong(output[_ETIS]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDefaultClusterParameters
 */
const de_DefaultClusterParameters = (output: any, context: __SerdeContext): DefaultClusterParameters => {
  const contents: any = {};
  if (output[_PGF] != null) {
    contents[_PGF] = __expectString(output[_PGF]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.Parameters === "") {
    contents[_Pa] = [];
  } else if (output[_Pa] != null && output[_Pa][_Par] != null) {
    contents[_Pa] = de_ParametersList(__getArrayIfSingleItem(output[_Pa][_Par]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeferredMaintenanceWindow
 */
const de_DeferredMaintenanceWindow = (output: any, context: __SerdeContext): DeferredMaintenanceWindow => {
  const contents: any = {};
  if (output[_DMI] != null) {
    contents[_DMI] = __expectString(output[_DMI]);
  }
  if (output[_DMST] != null) {
    contents[_DMST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DMST]));
  }
  if (output[_DMET] != null) {
    contents[_DMET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DMET]));
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
  if (output[_APN] != null) {
    contents[_APN] = __expectString(output[_APN]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteClusterResult
 */
const de_DeleteClusterResult = (output: any, context: __SerdeContext): DeleteClusterResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteClusterSnapshotResult
 */
const de_DeleteClusterSnapshotResult = (output: any, context: __SerdeContext): DeleteClusterSnapshotResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDependentServiceAccessDeniedFault
 */
const de_DependentServiceAccessDeniedFault = (
  output: any,
  context: __SerdeContext
): DependentServiceAccessDeniedFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeregisterNamespaceOutputMessage
 */
const de_DeregisterNamespaceOutputMessage = (
  output: any,
  context: __SerdeContext
): DeregisterNamespaceOutputMessage => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
    contents[_APu] = [];
  } else if (output[_APu] != null && output[_APu][_me] != null) {
    contents[_APu] = de_AuthenticationProfileList(__getArrayIfSingleItem(output[_APu][_me]), context);
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
    contents[_DSa] = [];
  } else if (output[_DSa] != null && output[_DSa][_me] != null) {
    contents[_DSa] = de_DataShareList(__getArrayIfSingleItem(output[_DSa][_me]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
    contents[_DSa] = [];
  } else if (output[_DSa] != null && output[_DSa][_me] != null) {
    contents[_DSa] = de_DataShareList(__getArrayIfSingleItem(output[_DSa][_me]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDataSharesResult
 */
const de_DescribeDataSharesResult = (output: any, context: __SerdeContext): DescribeDataSharesResult => {
  const contents: any = {};
  if (output.DataShares === "") {
    contents[_DSa] = [];
  } else if (output[_DSa] != null && output[_DSa][_me] != null) {
    contents[_DSa] = de_DataShareList(__getArrayIfSingleItem(output[_DSa][_me]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_DCPe] != null) {
    contents[_DCPe] = de_DefaultClusterParameters(output[_DCPe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribePartnersOutputMessage
 */
const de_DescribePartnersOutputMessage = (output: any, context: __SerdeContext): DescribePartnersOutputMessage => {
  const contents: any = {};
  if (output.PartnerIntegrationInfoList === "") {
    contents[_PIIL] = [];
  } else if (output[_PIIL] != null && output[_PIIL][_PII] != null) {
    contents[_PIIL] = de_PartnerIntegrationInfoList(__getArrayIfSingleItem(output[_PIIL][_PII]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeRedshiftIdcApplicationsResult
 */
const de_DescribeRedshiftIdcApplicationsResult = (
  output: any,
  context: __SerdeContext
): DescribeRedshiftIdcApplicationsResult => {
  const contents: any = {};
  if (output.RedshiftIdcApplications === "") {
    contents[_RIAe] = [];
  } else if (output[_RIAe] != null && output[_RIAe][_me] != null) {
    contents[_RIAe] = de_RedshiftIdcApplicationList(__getArrayIfSingleItem(output[_RIAe][_me]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
    contents[_RNESD] = [];
  } else if (output[_RNESD] != null && output[_RNESD][_RNES] != null) {
    contents[_RNESD] = de_ReservedNodeExchangeStatusList(__getArrayIfSingleItem(output[_RNESD][_RNES]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
    contents[_SS] = [];
  } else if (output[_SS] != null && output[_SS][_SSn] != null) {
    contents[_SS] = de_SnapshotScheduleList(__getArrayIfSingleItem(output[_SS][_SSn]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryDisableSnapshotCopyResult
 */
const de_DisableSnapshotCopyResult = (output: any, context: __SerdeContext): DisableSnapshotCopyResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEC2SecurityGroup
 */
const de_EC2SecurityGroup = (output: any, context: __SerdeContext): EC2SecurityGroup => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_ECSGN] != null) {
    contents[_ECSGN] = __expectString(output[_ECSGN]);
  }
  if (output[_ECSGOI] != null) {
    contents[_ECSGOI] = __expectString(output[_ECSGOI]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
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
  if (output[_EI] != null) {
    contents[_EI] = __expectString(output[_EI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEncryptionContextMap
 */
const de_EncryptionContextMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryEndpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {};
  if (output[_Ad] != null) {
    contents[_Ad] = __expectString(output[_Ad]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output.VpcEndpoints === "") {
    contents[_VE] = [];
  } else if (output[_VE] != null && output[_VE][_VEp] != null) {
    contents[_VE] = de_VpcEndpointsList(__getArrayIfSingleItem(output[_VE][_VEp]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAccess
 */
const de_EndpointAccess = (output: any, context: __SerdeContext): EndpointAccess => {
  const contents: any = {};
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_RO] != null) {
    contents[_RO] = __expectString(output[_RO]);
  }
  if (output[_SGN] != null) {
    contents[_SGN] = __expectString(output[_SGN]);
  }
  if (output[_ESn] != null) {
    contents[_ESn] = __expectString(output[_ESn]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_ECT] != null) {
    contents[_ECT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ECT]));
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_Ad] != null) {
    contents[_Ad] = __expectString(output[_Ad]);
  }
  if (output.VpcSecurityGroups === "") {
    contents[_VSG] = [];
  } else if (output[_VSG] != null && output[_VSG][_VSGp] != null) {
    contents[_VSG] = de_VpcSecurityGroupMembershipList(__getArrayIfSingleItem(output[_VSG][_VSGp]), context);
  }
  if (output[_VEp] != null) {
    contents[_VEp] = de_VpcEndpoint(output[_VEp], context);
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
    contents[_EAL] = [];
  } else if (output[_EAL] != null && output[_EAL][_me] != null) {
    contents[_EAL] = de_EndpointAccesses(__getArrayIfSingleItem(output[_EAL][_me]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAlreadyExistsFault
 */
const de_EndpointAlreadyExistsFault = (output: any, context: __SerdeContext): EndpointAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAuthorization
 */
const de_EndpointAuthorization = (output: any, context: __SerdeContext): EndpointAuthorization => {
  const contents: any = {};
  if (output[_Gr] != null) {
    contents[_Gr] = __expectString(output[_Gr]);
  }
  if (output[_G] != null) {
    contents[_G] = __expectString(output[_G]);
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_ATu] != null) {
    contents[_ATu] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ATu]));
  }
  if (output[_CS] != null) {
    contents[_CS] = __expectString(output[_CS]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_AAVPC] != null) {
    contents[_AAVPC] = __parseBoolean(output[_AAVPC]);
  }
  if (output.AllowedVPCs === "") {
    contents[_AVPC] = [];
  } else if (output[_AVPC] != null && output[_AVPC][_VIpc] != null) {
    contents[_AVPC] = de_VpcIdentifierList(__getArrayIfSingleItem(output[_AVPC][_VIpc]), context);
  }
  if (output[_ECn] != null) {
    contents[_ECn] = __strictParseInt32(output[_ECn]) as number;
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointAuthorizationList
 */
const de_EndpointAuthorizationList = (output: any, context: __SerdeContext): EndpointAuthorizationList => {
  const contents: any = {};
  if (output.EndpointAuthorizationList === "") {
    contents[_EALn] = [];
  } else if (output[_EALn] != null && output[_EALn][_me] != null) {
    contents[_EALn] = de_EndpointAuthorizations(__getArrayIfSingleItem(output[_EALn][_me]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointNotFoundFault
 */
const de_EndpointNotFoundFault = (output: any, context: __SerdeContext): EndpointNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEvent
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  const contents: any = {};
  if (output[_SIou] != null) {
    contents[_SIou] = __expectString(output[_SIou]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output.EventCategories === "") {
    contents[_EC] = [];
  } else if (output[_EC] != null && output[_EC][_ECv] != null) {
    contents[_EC] = de_EventCategoriesList(__getArrayIfSingleItem(output[_EC][_ECv]), context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_Da] != null) {
    contents[_Da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Da]));
  }
  if (output[_EIv] != null) {
    contents[_EIv] = __expectString(output[_EIv]);
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
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output.Events === "") {
    contents[_Ev] = [];
  } else if (output[_Ev] != null && output[_Ev][_EIM] != null) {
    contents[_Ev] = de_EventInfoMapList(__getArrayIfSingleItem(output[_Ev][_EIM]), context);
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
    contents[_ECML] = [];
  } else if (output[_ECML] != null && output[_ECML][_ECM] != null) {
    contents[_ECML] = de_EventCategoriesMapList(__getArrayIfSingleItem(output[_ECML][_ECM]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEventInfoMap
 */
const de_EventInfoMap = (output: any, context: __SerdeContext): EventInfoMap => {
  const contents: any = {};
  if (output[_EIv] != null) {
    contents[_EIv] = __expectString(output[_EIv]);
  }
  if (output.EventCategories === "") {
    contents[_EC] = [];
  } else if (output[_EC] != null && output[_EC][_ECv] != null) {
    contents[_EC] = de_EventCategoriesList(__getArrayIfSingleItem(output[_EC][_ECv]), context);
  }
  if (output[_ED] != null) {
    contents[_ED] = __expectString(output[_ED]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.Events === "") {
    contents[_Ev] = [];
  } else if (output[_Ev] != null && output[_Ev][_Eve] != null) {
    contents[_Ev] = de_EventList(__getArrayIfSingleItem(output[_Ev][_Eve]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEventSubscription
 */
const de_EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  const contents: any = {};
  if (output[_CAI] != null) {
    contents[_CAI] = __expectString(output[_CAI]);
  }
  if (output[_CSI] != null) {
    contents[_CSI] = __expectString(output[_CSI]);
  }
  if (output[_STA] != null) {
    contents[_STA] = __expectString(output[_STA]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SCT] != null) {
    contents[_SCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SCT]));
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output.SourceIdsList === "") {
    contents[_SILo] = [];
  } else if (output[_SILo] != null && output[_SILo][_SIour] != null) {
    contents[_SILo] = de_SourceIdsList(__getArrayIfSingleItem(output[_SILo][_SIour]), context);
  }
  if (output.EventCategoriesList === "") {
    contents[_ECL] = [];
  } else if (output[_ECL] != null && output[_ECL][_ECv] != null) {
    contents[_ECL] = de_EventCategoriesList(__getArrayIfSingleItem(output[_ECL][_ECv]), context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_En] != null) {
    contents[_En] = __parseBoolean(output[_En]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.EventSubscriptionsList === "") {
    contents[_ESL] = [];
  } else if (output[_ESL] != null && output[_ESL][_ES] != null) {
    contents[_ESL] = de_EventSubscriptionsList(__getArrayIfSingleItem(output[_ESL][_ES]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryFailoverPrimaryComputeResult
 */
const de_FailoverPrimaryComputeResult = (output: any, context: __SerdeContext): FailoverPrimaryComputeResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ReservedNodeConfigurationOptionList === "") {
    contents[_RNCOL] = [];
  } else if (output[_RNCOL] != null && output[_RNCOL][_RNCO] != null) {
    contents[_RNCOL] = de_ReservedNodeConfigurationOptionList(__getArrayIfSingleItem(output[_RNCOL][_RNCO]), context);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ReservedNodeOfferings === "") {
    contents[_RNO] = [];
  } else if (output[_RNO] != null && output[_RNO][_RNOe] != null) {
    contents[_RNO] = de_ReservedNodeOfferingList(__getArrayIfSingleItem(output[_RNO][_RNOe]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetResourcePolicyResult
 */
const de_GetResourcePolicyResult = (output: any, context: __SerdeContext): GetResourcePolicyResult => {
  const contents: any = {};
  if (output[_RPe] != null) {
    contents[_RPe] = de_ResourcePolicy(output[_RPe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmClientCertificate
 */
const de_HsmClientCertificate = (output: any, context: __SerdeContext): HsmClientCertificate => {
  const contents: any = {};
  if (output[_HCCI] != null) {
    contents[_HCCI] = __expectString(output[_HCCI]);
  }
  if (output[_HCCPK] != null) {
    contents[_HCCPK] = __expectString(output[_HCCPK]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.HsmClientCertificates === "") {
    contents[_HCCs] = [];
  } else if (output[_HCCs] != null && output[_HCCs][_HCC] != null) {
    contents[_HCCs] = de_HsmClientCertificateList(__getArrayIfSingleItem(output[_HCCs][_HCC]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmConfiguration
 */
const de_HsmConfiguration = (output: any, context: __SerdeContext): HsmConfiguration => {
  const contents: any = {};
  if (output[_HCI] != null) {
    contents[_HCI] = __expectString(output[_HCI]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_HIA] != null) {
    contents[_HIA] = __expectString(output[_HIA]);
  }
  if (output[_HPN] != null) {
    contents[_HPN] = __expectString(output[_HPN]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.HsmConfigurations === "") {
    contents[_HCs] = [];
  } else if (output[_HCs] != null && output[_HCs][_HC] != null) {
    contents[_HCs] = de_HsmConfigurationList(__getArrayIfSingleItem(output[_HCs][_HC]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmConfigurationNotFoundFault
 */
const de_HsmConfigurationNotFoundFault = (output: any, context: __SerdeContext): HsmConfigurationNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryHsmStatus
 */
const de_HsmStatus = (output: any, context: __SerdeContext): HsmStatus => {
  const contents: any = {};
  if (output[_HCCI] != null) {
    contents[_HCCI] = __expectString(output[_HCCI]);
  }
  if (output[_HCI] != null) {
    contents[_HCI] = __expectString(output[_HCI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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
 * deserializeAws_queryInboundIntegration
 */
const de_InboundIntegration = (output: any, context: __SerdeContext): InboundIntegration => {
  const contents: any = {};
  if (output[_IA] != null) {
    contents[_IA] = __expectString(output[_IA]);
  }
  if (output[_SAo] != null) {
    contents[_SAo] = __expectString(output[_SAo]);
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output.Errors === "") {
    contents[_Er] = [];
  } else if (output[_Er] != null && output[_Er][_IE] != null) {
    contents[_Er] = de_IntegrationErrorList(__getArrayIfSingleItem(output[_Er][_IE]), context);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  return contents;
};

/**
 * deserializeAws_queryInboundIntegrationList
 */
const de_InboundIntegrationList = (output: any, context: __SerdeContext): InboundIntegration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InboundIntegration(entry, context);
    });
};

/**
 * deserializeAws_queryInboundIntegrationsMessage
 */
const de_InboundIntegrationsMessage = (output: any, context: __SerdeContext): InboundIntegrationsMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.InboundIntegrations === "") {
    contents[_II] = [];
  } else if (output[_II] != null && output[_II][_IIn] != null) {
    contents[_II] = de_InboundIntegrationList(__getArrayIfSingleItem(output[_II][_IIn]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIncompatibleOrderableOptions
 */
const de_IncompatibleOrderableOptions = (output: any, context: __SerdeContext): IncompatibleOrderableOptions => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientS3BucketPolicyFault
 */
const de_InsufficientS3BucketPolicyFault = (output: any, context: __SerdeContext): InsufficientS3BucketPolicyFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegration
 */
const de_Integration = (output: any, context: __SerdeContext): Integration => {
  const contents: any = {};
  if (output[_IA] != null) {
    contents[_IA] = __expectString(output[_IA]);
  }
  if (output[_IN] != null) {
    contents[_IN] = __expectString(output[_IN]);
  }
  if (output[_SAo] != null) {
    contents[_SAo] = __expectString(output[_SAo]);
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output.Errors === "") {
    contents[_Er] = [];
  } else if (output[_Er] != null && output[_Er][_IE] != null) {
    contents[_Er] = de_IntegrationErrorList(__getArrayIfSingleItem(output[_Er][_IE]), context);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_KMSKI] != null) {
    contents[_KMSKI] = __expectString(output[_KMSKI]);
  }
  if (output.AdditionalEncryptionContext === "") {
    contents[_AEC] = {};
  } else if (output[_AEC] != null && output[_AEC][_e] != null) {
    contents[_AEC] = de_EncryptionContextMap(__getArrayIfSingleItem(output[_AEC][_e]), context);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationAlreadyExistsFault
 */
const de_IntegrationAlreadyExistsFault = (output: any, context: __SerdeContext): IntegrationAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationConflictOperationFault
 */
const de_IntegrationConflictOperationFault = (
  output: any,
  context: __SerdeContext
): IntegrationConflictOperationFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationConflictStateFault
 */
const de_IntegrationConflictStateFault = (output: any, context: __SerdeContext): IntegrationConflictStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationError
 */
const de_IntegrationError = (output: any, context: __SerdeContext): IntegrationError => {
  const contents: any = {};
  if (output[_ECr] != null) {
    contents[_ECr] = __expectString(output[_ECr]);
  }
  if (output[_EM] != null) {
    contents[_EM] = __expectString(output[_EM]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationErrorList
 */
const de_IntegrationErrorList = (output: any, context: __SerdeContext): IntegrationError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IntegrationError(entry, context);
    });
};

/**
 * deserializeAws_queryIntegrationList
 */
const de_IntegrationList = (output: any, context: __SerdeContext): Integration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Integration(entry, context);
    });
};

/**
 * deserializeAws_queryIntegrationNotFoundFault
 */
const de_IntegrationNotFoundFault = (output: any, context: __SerdeContext): IntegrationNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationQuotaExceededFault
 */
const de_IntegrationQuotaExceededFault = (output: any, context: __SerdeContext): IntegrationQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationsMessage
 */
const de_IntegrationsMessage = (output: any, context: __SerdeContext): IntegrationsMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.Integrations === "") {
    contents[_In] = [];
  } else if (output[_In] != null && output[_In][_Int] != null) {
    contents[_In] = de_IntegrationList(__getArrayIfSingleItem(output[_In][_Int]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationSourceNotFoundFault
 */
const de_IntegrationSourceNotFoundFault = (output: any, context: __SerdeContext): IntegrationSourceNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegrationTargetNotFoundFault
 */
const de_IntegrationTargetNotFoundFault = (output: any, context: __SerdeContext): IntegrationTargetNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidAuthorizationStateFault
 */
const de_InvalidAuthorizationStateFault = (output: any, context: __SerdeContext): InvalidAuthorizationStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterStateFault
 */
const de_InvalidClusterStateFault = (output: any, context: __SerdeContext): InvalidClusterStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterSubnetStateFault
 */
const de_InvalidClusterSubnetStateFault = (output: any, context: __SerdeContext): InvalidClusterSubnetStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidClusterTrackFault
 */
const de_InvalidClusterTrackFault = (output: any, context: __SerdeContext): InvalidClusterTrackFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDataShareFault
 */
const de_InvalidDataShareFault = (output: any, context: __SerdeContext): InvalidDataShareFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidElasticIpFault
 */
const de_InvalidElasticIpFault = (output: any, context: __SerdeContext): InvalidElasticIpFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidEndpointStateFault
 */
const de_InvalidEndpointStateFault = (output: any, context: __SerdeContext): InvalidEndpointStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidNamespaceFault
 */
const de_InvalidNamespaceFault = (output: any, context: __SerdeContext): InvalidNamespaceFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidPolicyFault
 */
const de_InvalidPolicyFault = (output: any, context: __SerdeContext): InvalidPolicyFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidReservedNodeStateFault
 */
const de_InvalidReservedNodeStateFault = (output: any, context: __SerdeContext): InvalidReservedNodeStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRestoreFault
 */
const de_InvalidRestoreFault = (output: any, context: __SerdeContext): InvalidRestoreFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRetentionPeriodFault
 */
const de_InvalidRetentionPeriodFault = (output: any, context: __SerdeContext): InvalidRetentionPeriodFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidS3BucketNameFault
 */
const de_InvalidS3BucketNameFault = (output: any, context: __SerdeContext): InvalidS3BucketNameFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidS3KeyPrefixFault
 */
const de_InvalidS3KeyPrefixFault = (output: any, context: __SerdeContext): InvalidS3KeyPrefixFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidScheduledActionFault
 */
const de_InvalidScheduledActionFault = (output: any, context: __SerdeContext): InvalidScheduledActionFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidScheduleFault
 */
const de_InvalidScheduleFault = (output: any, context: __SerdeContext): InvalidScheduleFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubnet
 */
const de_InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubscriptionStateFault
 */
const de_InvalidSubscriptionStateFault = (output: any, context: __SerdeContext): InvalidSubscriptionStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTagFault
 */
const de_InvalidTagFault = (output: any, context: __SerdeContext): InvalidTagFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidUsageLimitFault
 */
const de_InvalidUsageLimitFault = (output: any, context: __SerdeContext): InvalidUsageLimitFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidVPCNetworkStateFault
 */
const de_InvalidVPCNetworkStateFault = (output: any, context: __SerdeContext): InvalidVPCNetworkStateFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIPRange
 */
const de_IPRange = (output: any, context: __SerdeContext): IPRange => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CIDRIP] != null) {
    contents[_CIDRIP] = __expectString(output[_CIDRIP]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
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
 * deserializeAws_queryIpv6CidrBlockNotFoundFault
 */
const de_Ipv6CidrBlockNotFoundFault = (output: any, context: __SerdeContext): Ipv6CidrBlockNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryLakeFormationQuery
 */
const de_LakeFormationQuery = (output: any, context: __SerdeContext): LakeFormationQuery => {
  const contents: any = {};
  if (output[_Au] != null) {
    contents[_Au] = __expectString(output[_Au]);
  }
  return contents;
};

/**
 * deserializeAws_queryLakeFormationScopeUnion
 */
const de_LakeFormationScopeUnion = (output: any, context: __SerdeContext): LakeFormationScopeUnion => {
  if (output[_LFQ] != null) {
    return {
      LakeFormationQuery: de_LakeFormationQuery(output[_LFQ], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_queryLakeFormationServiceIntegrations
 */
const de_LakeFormationServiceIntegrations = (output: any, context: __SerdeContext): LakeFormationScopeUnion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LakeFormationScopeUnion(__expectUnion(entry), context);
    });
};

/**
 * deserializeAws_queryLimitExceededFault
 */
const de_LimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryListRecommendationsResult
 */
const de_ListRecommendationsResult = (output: any, context: __SerdeContext): ListRecommendationsResult => {
  const contents: any = {};
  if (output.Recommendations === "") {
    contents[_Re] = [];
  } else if (output[_Re] != null && output[_Re][_Rec] != null) {
    contents[_Re] = de_RecommendationList(__getArrayIfSingleItem(output[_Re][_Rec]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoggingStatus
 */
const de_LoggingStatus = (output: any, context: __SerdeContext): LoggingStatus => {
  const contents: any = {};
  if (output[_LEo] != null) {
    contents[_LEo] = __parseBoolean(output[_LEo]);
  }
  if (output[_BN] != null) {
    contents[_BN] = __expectString(output[_BN]);
  }
  if (output[_SKP] != null) {
    contents[_SKP] = __expectString(output[_SKP]);
  }
  if (output[_LSDT] != null) {
    contents[_LSDT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LSDT]));
  }
  if (output[_LFT] != null) {
    contents[_LFT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LFT]));
  }
  if (output[_LFM] != null) {
    contents[_LFM] = __expectString(output[_LFM]);
  }
  if (output[_LDT] != null) {
    contents[_LDT] = __expectString(output[_LDT]);
  }
  if (output.LogExports === "") {
    contents[_LE] = [];
  } else if (output[_LE] != null && output[_LE][_me] != null) {
    contents[_LE] = de_LogTypeList(__getArrayIfSingleItem(output[_LE][_me]), context);
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
  if (output[_MTN] != null) {
    contents[_MTN] = __expectString(output[_MTN]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output.UpdateTargets === "") {
    contents[_UT] = [];
  } else if (output[_UT] != null && output[_UT][_UTp] != null) {
    contents[_UT] = de_EligibleTracksToUpdateList(__getArrayIfSingleItem(output[_UT][_UTp]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyAquaOutputMessage
 */
const de_ModifyAquaOutputMessage = (output: any, context: __SerdeContext): ModifyAquaOutputMessage => {
  const contents: any = {};
  if (output[_ACq] != null) {
    contents[_ACq] = de_AquaConfiguration(output[_ACq], context);
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
  if (output[_APN] != null) {
    contents[_APN] = __expectString(output[_APN]);
  }
  if (output[_APC] != null) {
    contents[_APC] = __expectString(output[_APC]);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterDbRevisionResult
 */
const de_ModifyClusterDbRevisionResult = (output: any, context: __SerdeContext): ModifyClusterDbRevisionResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterIamRolesResult
 */
const de_ModifyClusterIamRolesResult = (output: any, context: __SerdeContext): ModifyClusterIamRolesResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterMaintenanceResult
 */
const de_ModifyClusterMaintenanceResult = (output: any, context: __SerdeContext): ModifyClusterMaintenanceResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterResult
 */
const de_ModifyClusterResult = (output: any, context: __SerdeContext): ModifyClusterResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterSnapshotResult
 */
const de_ModifyClusterSnapshotResult = (output: any, context: __SerdeContext): ModifyClusterSnapshotResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyClusterSubnetGroupResult
 */
const de_ModifyClusterSubnetGroupResult = (output: any, context: __SerdeContext): ModifyClusterSubnetGroupResult => {
  const contents: any = {};
  if (output[_CSGlus] != null) {
    contents[_CSGlus] = de_ClusterSubnetGroup(output[_CSGlus], context);
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
  if (output[_CDN] != null) {
    contents[_CDN] = __expectString(output[_CDN]);
  }
  if (output[_CDCA] != null) {
    contents[_CDCA] = __expectString(output[_CDCA]);
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_CDCET] != null) {
    contents[_CDCET] = __expectString(output[_CDCET]);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyEventSubscriptionResult
 */
const de_ModifyEventSubscriptionResult = (output: any, context: __SerdeContext): ModifyEventSubscriptionResult => {
  const contents: any = {};
  if (output[_ES] != null) {
    contents[_ES] = de_EventSubscription(output[_ES], context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyRedshiftIdcApplicationResult
 */
const de_ModifyRedshiftIdcApplicationResult = (
  output: any,
  context: __SerdeContext
): ModifyRedshiftIdcApplicationResult => {
  const contents: any = {};
  if (output[_RIA] != null) {
    contents[_RIA] = de_RedshiftIdcApplication(output[_RIA], context);
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
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  const contents: any = {};
  if (output[_NII] != null) {
    contents[_NII] = __expectString(output[_NII]);
  }
  if (output[_SIub] != null) {
    contents[_SIub] = __expectString(output[_SIub]);
  }
  if (output[_PIA] != null) {
    contents[_PIA] = __expectString(output[_PIA]);
  }
  if (output[_AZ] != null) {
    contents[_AZ] = __expectString(output[_AZ]);
  }
  if (output[_IAp] != null) {
    contents[_IAp] = __expectString(output[_IAp]);
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
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_NON] != null) {
    contents[_NON] = __strictParseInt32(output[_NON]) as number;
  }
  if (output[_EDUP] != null) {
    contents[_EDUP] = __strictParseFloat(output[_EDUP]) as number;
  }
  if (output[_Mo] != null) {
    contents[_Mo] = __expectString(output[_Mo]);
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
    contents[_NCOL] = [];
  } else if (output[_NCOL] != null && output[_NCOL][_NCO] != null) {
    contents[_NCOL] = de_NodeConfigurationOptionList(__getArrayIfSingleItem(output[_NCOL][_NCO]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryNumberOfNodesQuotaExceededFault
 */
const de_NumberOfNodesQuotaExceededFault = (output: any, context: __SerdeContext): NumberOfNodesQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryOrderableClusterOption
 */
const de_OrderableClusterOption = (output: any, context: __SerdeContext): OrderableClusterOption => {
  const contents: any = {};
  if (output[_CV] != null) {
    contents[_CV] = __expectString(output[_CV]);
  }
  if (output[_CTl] != null) {
    contents[_CTl] = __expectString(output[_CTl]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output.AvailabilityZones === "") {
    contents[_AZv] = [];
  } else if (output[_AZv] != null && output[_AZv][_AZ] != null) {
    contents[_AZv] = de_AvailabilityZoneList(__getArrayIfSingleItem(output[_AZv][_AZ]), context);
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
    contents[_OCO] = [];
  } else if (output[_OCO] != null && output[_OCO][_OCOr] != null) {
    contents[_OCO] = de_OrderableClusterOptionsList(__getArrayIfSingleItem(output[_OCO][_OCOr]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryParameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  const contents: any = {};
  if (output[_PNa] != null) {
    contents[_PNa] = __expectString(output[_PNa]);
  }
  if (output[_PV] != null) {
    contents[_PV] = __expectString(output[_PV]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_So] != null) {
    contents[_So] = __expectString(output[_So]);
  }
  if (output[_DTa] != null) {
    contents[_DTa] = __expectString(output[_DTa]);
  }
  if (output[_AV] != null) {
    contents[_AV] = __expectString(output[_AV]);
  }
  if (output[_ATp] != null) {
    contents[_ATp] = __expectString(output[_ATp]);
  }
  if (output[_IM] != null) {
    contents[_IM] = __parseBoolean(output[_IM]);
  }
  if (output[_MEV] != null) {
    contents[_MEV] = __expectString(output[_MEV]);
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
  if (output[_DNa] != null) {
    contents[_DNa] = __expectString(output[_DNa]);
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SM] != null) {
    contents[_SM] = __expectString(output[_SM]);
  }
  if (output[_CAr] != null) {
    contents[_CAr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CAr]));
  }
  if (output[_UA] != null) {
    contents[_UA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UA]));
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
  if (output[_DNa] != null) {
    contents[_DNa] = __expectString(output[_DNa]);
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  return contents;
};

/**
 * deserializeAws_queryPartnerNotFoundFault
 */
const de_PartnerNotFoundFault = (output: any, context: __SerdeContext): PartnerNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryPauseClusterMessage
 */
const de_PauseClusterMessage = (output: any, context: __SerdeContext): PauseClusterMessage => {
  const contents: any = {};
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  return contents;
};

/**
 * deserializeAws_queryPauseClusterResult
 */
const de_PauseClusterResult = (output: any, context: __SerdeContext): PauseClusterResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
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
  if (output[_MUP] != null) {
    contents[_MUP] = __expectString(output[_MUP]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_NON] != null) {
    contents[_NON] = __strictParseInt32(output[_NON]) as number;
  }
  if (output[_CTl] != null) {
    contents[_CTl] = __expectString(output[_CTl]);
  }
  if (output[_CV] != null) {
    contents[_CV] = __expectString(output[_CV]);
  }
  if (output[_ASRP] != null) {
    contents[_ASRP] = __strictParseInt32(output[_ASRP]) as number;
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __parseBoolean(output[_PA]);
  }
  if (output[_EVR] != null) {
    contents[_EVR] = __parseBoolean(output[_EVR]);
  }
  if (output[_MTN] != null) {
    contents[_MTN] = __expectString(output[_MTN]);
  }
  if (output[_ETn] != null) {
    contents[_ETn] = __expectString(output[_ETn]);
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
  if (output[_RNes] != null) {
    contents[_RNes] = de_ReservedNode(output[_RNes], context);
  }
  return contents;
};

/**
 * deserializeAws_queryPutResourcePolicyResult
 */
const de_PutResourcePolicyResult = (output: any, context: __SerdeContext): PutResourcePolicyResult => {
  const contents: any = {};
  if (output[_RPe] != null) {
    contents[_RPe] = de_ResourcePolicy(output[_RPe], context);
  }
  return contents;
};

/**
 * deserializeAws_queryReadWriteAccess
 */
const de_ReadWriteAccess = (output: any, context: __SerdeContext): ReadWriteAccess => {
  const contents: any = {};
  if (output[_Au] != null) {
    contents[_Au] = __expectString(output[_Au]);
  }
  return contents;
};

/**
 * deserializeAws_queryRebootClusterResult
 */
const de_RebootClusterResult = (output: any, context: __SerdeContext): RebootClusterResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRecommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_NA] != null) {
    contents[_NA] = __expectString(output[_NA]);
  }
  if (output[_CAr] != null) {
    contents[_CAr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CAr]));
  }
  if (output[_RTec] != null) {
    contents[_RTec] = __expectString(output[_RTec]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectString(output[_Ti]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_Ob] != null) {
    contents[_Ob] = __expectString(output[_Ob]);
  }
  if (output[_IRm] != null) {
    contents[_IRm] = __expectString(output[_IRm]);
  }
  if (output[_RTeco] != null) {
    contents[_RTeco] = __expectString(output[_RTeco]);
  }
  if (output.RecommendedActions === "") {
    contents[_RAe] = [];
  } else if (output[_RAe] != null && output[_RAe][_RAec] != null) {
    contents[_RAe] = de_RecommendedActionList(__getArrayIfSingleItem(output[_RAe][_RAec]), context);
  }
  if (output.ReferenceLinks === "") {
    contents[_RL] = [];
  } else if (output[_RL] != null && output[_RL][_RLe] != null) {
    contents[_RL] = de_ReferenceLinkList(__getArrayIfSingleItem(output[_RL][_RLe]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryRecommendationList
 */
const de_RecommendationList = (output: any, context: __SerdeContext): Recommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Recommendation(entry, context);
    });
};

/**
 * deserializeAws_queryRecommendedAction
 */
const de_RecommendedAction = (output: any, context: __SerdeContext): RecommendedAction => {
  const contents: any = {};
  if (output[_Te] != null) {
    contents[_Te] = __expectString(output[_Te]);
  }
  if (output[_Dat] != null) {
    contents[_Dat] = __expectString(output[_Dat]);
  }
  if (output[_Co] != null) {
    contents[_Co] = __expectString(output[_Co]);
  }
  if (output[_Ty] != null) {
    contents[_Ty] = __expectString(output[_Ty]);
  }
  return contents;
};

/**
 * deserializeAws_queryRecommendedActionList
 */
const de_RecommendedActionList = (output: any, context: __SerdeContext): RecommendedAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendedAction(entry, context);
    });
};

/**
 * deserializeAws_queryRecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  const contents: any = {};
  if (output[_RCA] != null) {
    contents[_RCA] = __strictParseFloat(output[_RCA]) as number;
  }
  if (output[_RCF] != null) {
    contents[_RCF] = __expectString(output[_RCF]);
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
 * deserializeAws_queryRedshiftIdcApplication
 */
const de_RedshiftIdcApplication = (output: any, context: __SerdeContext): RedshiftIdcApplication => {
  const contents: any = {};
  if (output[_IIA] != null) {
    contents[_IIA] = __expectString(output[_IIA]);
  }
  if (output[_RIAN] != null) {
    contents[_RIAN] = __expectString(output[_RIAN]);
  }
  if (output[_RIAA] != null) {
    contents[_RIAA] = __expectString(output[_RIAA]);
  }
  if (output[_INd] != null) {
    contents[_INd] = __expectString(output[_INd]);
  }
  if (output[_IDN] != null) {
    contents[_IDN] = __expectString(output[_IDN]);
  }
  if (output[_IRA] != null) {
    contents[_IRA] = __expectString(output[_IRA]);
  }
  if (output[_IMAA] != null) {
    contents[_IMAA] = __expectString(output[_IMAA]);
  }
  if (output[_IOS] != null) {
    contents[_IOS] = __expectString(output[_IOS]);
  }
  if (output.AuthorizedTokenIssuerList === "") {
    contents[_ATIL] = [];
  } else if (output[_ATIL] != null && output[_ATIL][_me] != null) {
    contents[_ATIL] = de_AuthorizedTokenIssuerList(__getArrayIfSingleItem(output[_ATIL][_me]), context);
  }
  if (output.ServiceIntegrations === "") {
    contents[_SIe] = [];
  } else if (output[_SIe] != null && output[_SIe][_me] != null) {
    contents[_SIe] = de_ServiceIntegrationList(__getArrayIfSingleItem(output[_SIe][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryRedshiftIdcApplicationAlreadyExistsFault
 */
const de_RedshiftIdcApplicationAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): RedshiftIdcApplicationAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryRedshiftIdcApplicationList
 */
const de_RedshiftIdcApplicationList = (output: any, context: __SerdeContext): RedshiftIdcApplication[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RedshiftIdcApplication(entry, context);
    });
};

/**
 * deserializeAws_queryRedshiftIdcApplicationNotExistsFault
 */
const de_RedshiftIdcApplicationNotExistsFault = (
  output: any,
  context: __SerdeContext
): RedshiftIdcApplicationNotExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryRedshiftIdcApplicationQuotaExceededFault
 */
const de_RedshiftIdcApplicationQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): RedshiftIdcApplicationQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReferenceLink
 */
const de_ReferenceLink = (output: any, context: __SerdeContext): ReferenceLink => {
  const contents: any = {};
  if (output[_Te] != null) {
    contents[_Te] = __expectString(output[_Te]);
  }
  if (output[_L] != null) {
    contents[_L] = __expectString(output[_L]);
  }
  return contents;
};

/**
 * deserializeAws_queryReferenceLinkList
 */
const de_ReferenceLinkList = (output: any, context: __SerdeContext): ReferenceLink[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReferenceLink(entry, context);
    });
};

/**
 * deserializeAws_queryRegisterNamespaceOutputMessage
 */
const de_RegisterNamespaceOutputMessage = (output: any, context: __SerdeContext): RegisterNamespaceOutputMessage => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNode
 */
const de_ReservedNode = (output: any, context: __SerdeContext): ReservedNode => {
  const contents: any = {};
  if (output[_RNI] != null) {
    contents[_RNI] = __expectString(output[_RNI]);
  }
  if (output[_RNOI] != null) {
    contents[_RNOI] = __expectString(output[_RNOI]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STt]));
  }
  if (output[_Du] != null) {
    contents[_Du] = __strictParseInt32(output[_Du]) as number;
  }
  if (output[_FP] != null) {
    contents[_FP] = __strictParseFloat(output[_FP]) as number;
  }
  if (output[_UP] != null) {
    contents[_UP] = __strictParseFloat(output[_UP]) as number;
  }
  if (output[_CCu] != null) {
    contents[_CCu] = __expectString(output[_CCu]);
  }
  if (output[_NC] != null) {
    contents[_NC] = __strictParseInt32(output[_NC]) as number;
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_OT] != null) {
    contents[_OT] = __expectString(output[_OT]);
  }
  if (output.RecurringCharges === "") {
    contents[_RCec] = [];
  } else if (output[_RCec] != null && output[_RCec][_RCecu] != null) {
    contents[_RCec] = de_RecurringChargeList(__getArrayIfSingleItem(output[_RCec][_RCecu]), context);
  }
  if (output[_RNOT] != null) {
    contents[_RNOT] = __expectString(output[_RNOT]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeAlreadyExistsFault
 */
const de_ReservedNodeAlreadyExistsFault = (output: any, context: __SerdeContext): ReservedNodeAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeConfigurationOption
 */
const de_ReservedNodeConfigurationOption = (output: any, context: __SerdeContext): ReservedNodeConfigurationOption => {
  const contents: any = {};
  if (output[_SRN] != null) {
    contents[_SRN] = de_ReservedNode(output[_SRN], context);
  }
  if (output[_TRNC] != null) {
    contents[_TRNC] = __strictParseInt32(output[_TRNC]) as number;
  }
  if (output[_TRNO] != null) {
    contents[_TRNO] = de_ReservedNodeOffering(output[_TRNO], context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeExchangeStatus
 */
const de_ReservedNodeExchangeStatus = (output: any, context: __SerdeContext): ReservedNodeExchangeStatus => {
  const contents: any = {};
  if (output[_RNERI] != null) {
    contents[_RNERI] = __expectString(output[_RNERI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_RTeq] != null) {
    contents[_RTeq] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RTeq]));
  }
  if (output[_SRNI] != null) {
    contents[_SRNI] = __expectString(output[_SRNI]);
  }
  if (output[_SRNT] != null) {
    contents[_SRNT] = __expectString(output[_SRNT]);
  }
  if (output[_SRNC] != null) {
    contents[_SRNC] = __strictParseInt32(output[_SRNC]) as number;
  }
  if (output[_TRNOI] != null) {
    contents[_TRNOI] = __expectString(output[_TRNOI]);
  }
  if (output[_TRNT] != null) {
    contents[_TRNT] = __expectString(output[_TRNT]);
  }
  if (output[_TRNC] != null) {
    contents[_TRNC] = __strictParseInt32(output[_TRNC]) as number;
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeOffering
 */
const de_ReservedNodeOffering = (output: any, context: __SerdeContext): ReservedNodeOffering => {
  const contents: any = {};
  if (output[_RNOI] != null) {
    contents[_RNOI] = __expectString(output[_RNOI]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_Du] != null) {
    contents[_Du] = __strictParseInt32(output[_Du]) as number;
  }
  if (output[_FP] != null) {
    contents[_FP] = __strictParseFloat(output[_FP]) as number;
  }
  if (output[_UP] != null) {
    contents[_UP] = __strictParseFloat(output[_UP]) as number;
  }
  if (output[_CCu] != null) {
    contents[_CCu] = __expectString(output[_CCu]);
  }
  if (output[_OT] != null) {
    contents[_OT] = __expectString(output[_OT]);
  }
  if (output.RecurringCharges === "") {
    contents[_RCec] = [];
  } else if (output[_RCec] != null && output[_RCec][_RCecu] != null) {
    contents[_RCec] = de_RecurringChargeList(__getArrayIfSingleItem(output[_RCec][_RCecu]), context);
  }
  if (output[_RNOT] != null) {
    contents[_RNOT] = __expectString(output[_RNOT]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeOfferingsMessage
 */
const de_ReservedNodeOfferingsMessage = (output: any, context: __SerdeContext): ReservedNodeOfferingsMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ReservedNodeOfferings === "") {
    contents[_RNO] = [];
  } else if (output[_RNO] != null && output[_RNO][_RNOe] != null) {
    contents[_RNO] = de_ReservedNodeOfferingList(__getArrayIfSingleItem(output[_RNO][_RNOe]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodeQuotaExceededFault
 */
const de_ReservedNodeQuotaExceededFault = (output: any, context: __SerdeContext): ReservedNodeQuotaExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryReservedNodesMessage
 */
const de_ReservedNodesMessage = (output: any, context: __SerdeContext): ReservedNodesMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ReservedNodes === "") {
    contents[_RNese] = [];
  } else if (output[_RNese] != null && output[_RNese][_RNes] != null) {
    contents[_RNese] = de_ReservedNodeList(__getArrayIfSingleItem(output[_RNese][_RNes]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryResizeClusterMessage
 */
const de_ResizeClusterMessage = (output: any, context: __SerdeContext): ResizeClusterMessage => {
  const contents: any = {};
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_CTl] != null) {
    contents[_CTl] = __expectString(output[_CTl]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_NON] != null) {
    contents[_NON] = __strictParseInt32(output[_NON]) as number;
  }
  if (output[_C] != null) {
    contents[_C] = __parseBoolean(output[_C]);
  }
  if (output[_RNI] != null) {
    contents[_RNI] = __expectString(output[_RNI]);
  }
  if (output[_TRNOI] != null) {
    contents[_TRNOI] = __expectString(output[_TRNOI]);
  }
  return contents;
};

/**
 * deserializeAws_queryResizeClusterResult
 */
const de_ResizeClusterResult = (output: any, context: __SerdeContext): ResizeClusterResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResizeInfo
 */
const de_ResizeInfo = (output: any, context: __SerdeContext): ResizeInfo => {
  const contents: any = {};
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_ACR] != null) {
    contents[_ACR] = __parseBoolean(output[_ACR]);
  }
  return contents;
};

/**
 * deserializeAws_queryResizeNotFoundFault
 */
const de_ResizeNotFoundFault = (output: any, context: __SerdeContext): ResizeNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryResizeProgressMessage
 */
const de_ResizeProgressMessage = (output: any, context: __SerdeContext): ResizeProgressMessage => {
  const contents: any = {};
  if (output[_TNT] != null) {
    contents[_TNT] = __expectString(output[_TNT]);
  }
  if (output[_TNON] != null) {
    contents[_TNON] = __strictParseInt32(output[_TNON]) as number;
  }
  if (output[_TCT] != null) {
    contents[_TCT] = __expectString(output[_TCT]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output.ImportTablesCompleted === "") {
    contents[_ITC] = [];
  } else if (output[_ITC] != null && output[_ITC][_me] != null) {
    contents[_ITC] = de_ImportTablesCompleted(__getArrayIfSingleItem(output[_ITC][_me]), context);
  }
  if (output.ImportTablesInProgress === "") {
    contents[_ITIP] = [];
  } else if (output[_ITIP] != null && output[_ITIP][_me] != null) {
    contents[_ITIP] = de_ImportTablesInProgress(__getArrayIfSingleItem(output[_ITIP][_me]), context);
  }
  if (output.ImportTablesNotStarted === "") {
    contents[_ITNS] = [];
  } else if (output[_ITNS] != null && output[_ITNS][_me] != null) {
    contents[_ITNS] = de_ImportTablesNotStarted(__getArrayIfSingleItem(output[_ITNS][_me]), context);
  }
  if (output[_ARRIMBPS] != null) {
    contents[_ARRIMBPS] = __strictParseFloat(output[_ARRIMBPS]) as number;
  }
  if (output[_TRDIMB] != null) {
    contents[_TRDIMB] = __strictParseLong(output[_TRDIMB]) as number;
  }
  if (output[_PIMB] != null) {
    contents[_PIMB] = __strictParseLong(output[_PIMB]) as number;
  }
  if (output[_ETIS] != null) {
    contents[_ETIS] = __strictParseLong(output[_ETIS]) as number;
  }
  if (output[_ETTCIS] != null) {
    contents[_ETTCIS] = __strictParseLong(output[_ETTCIS]) as number;
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output[_TET] != null) {
    contents[_TET] = __expectString(output[_TET]);
  }
  if (output[_DTPP] != null) {
    contents[_DTPP] = __strictParseFloat(output[_DTPP]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundFault
 */
const de_ResourceNotFoundFault = (output: any, context: __SerdeContext): ResourceNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourcePolicy
 */
const de_ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  const contents: any = {};
  if (output[_RA] != null) {
    contents[_RA] = __expectString(output[_RA]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __expectString(output[_Po]);
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
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRestoreStatus
 */
const de_RestoreStatus = (output: any, context: __SerdeContext): RestoreStatus => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CRRIMBPS] != null) {
    contents[_CRRIMBPS] = __strictParseFloat(output[_CRRIMBPS]) as number;
  }
  if (output[_SSIMB] != null) {
    contents[_SSIMB] = __strictParseLong(output[_SSIMB]) as number;
  }
  if (output[_PIMB] != null) {
    contents[_PIMB] = __strictParseLong(output[_PIMB]) as number;
  }
  if (output[_ETIS] != null) {
    contents[_ETIS] = __strictParseLong(output[_ETIS]) as number;
  }
  if (output[_ETTCIS] != null) {
    contents[_ETTCIS] = __strictParseLong(output[_ETTCIS]) as number;
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
  if (output[_TRS] != null) {
    contents[_TRS] = de_TableRestoreStatus(output[_TRS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResumeClusterMessage
 */
const de_ResumeClusterMessage = (output: any, context: __SerdeContext): ResumeClusterMessage => {
  const contents: any = {};
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  return contents;
};

/**
 * deserializeAws_queryResumeClusterResult
 */
const de_ResumeClusterResult = (output: any, context: __SerdeContext): ResumeClusterResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRevisionTarget
 */
const de_RevisionTarget = (output: any, context: __SerdeContext): RevisionTarget => {
  const contents: any = {};
  if (output[_DRa] != null) {
    contents[_DRa] = __expectString(output[_DRa]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_DRRD] != null) {
    contents[_DRRD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DRRD]));
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
  if (output[_CSGl] != null) {
    contents[_CSGl] = de_ClusterSecurityGroup(output[_CSGl], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRevokeSnapshotAccessResult
 */
const de_RevokeSnapshotAccessResult = (output: any, context: __SerdeContext): RevokeSnapshotAccessResult => {
  const contents: any = {};
  if (output[_Sn] != null) {
    contents[_Sn] = de_Snapshot(output[_Sn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRotateEncryptionKeyResult
 */
const de_RotateEncryptionKeyResult = (output: any, context: __SerdeContext): RotateEncryptionKeyResult => {
  const contents: any = {};
  if (output[_Clu] != null) {
    contents[_Clu] = de_Cluster(output[_Clu], context);
  }
  return contents;
};

/**
 * deserializeAws_queryS3AccessGrantsScopeUnion
 */
const de_S3AccessGrantsScopeUnion = (output: any, context: __SerdeContext): S3AccessGrantsScopeUnion => {
  if (output[_RWA] != null) {
    return {
      ReadWriteAccess: de_ReadWriteAccess(output[_RWA], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_queryS3AccessGrantsServiceIntegrations
 */
const de_S3AccessGrantsServiceIntegrations = (output: any, context: __SerdeContext): S3AccessGrantsScopeUnion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3AccessGrantsScopeUnion(__expectUnion(entry), context);
    });
};

/**
 * deserializeAws_queryScheduledAction
 */
const de_ScheduledAction = (output: any, context: __SerdeContext): ScheduledAction => {
  const contents: any = {};
  if (output[_SAN] != null) {
    contents[_SAN] = __expectString(output[_SAN]);
  }
  if (output[_TAa] != null) {
    contents[_TAa] = de_ScheduledActionType(output[_TAa], context);
  }
  if (output[_Sc] != null) {
    contents[_Sc] = __expectString(output[_Sc]);
  }
  if (output[_IRa] != null) {
    contents[_IRa] = __expectString(output[_IRa]);
  }
  if (output[_SAD] != null) {
    contents[_SAD] = __expectString(output[_SAD]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output.NextInvocations === "") {
    contents[_NI] = [];
  } else if (output[_NI] != null && output[_NI][_SAT] != null) {
    contents[_NI] = de_ScheduledActionTimeList(__getArrayIfSingleItem(output[_NI][_SAT]), context);
  }
  if (output[_STt] != null) {
    contents[_STt] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STt]));
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ET]));
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledActionsMessage
 */
const de_ScheduledActionsMessage = (output: any, context: __SerdeContext): ScheduledActionsMessage => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.ScheduledActions === "") {
    contents[_SAc] = [];
  } else if (output[_SAc] != null && output[_SAc][_SAch] != null) {
    contents[_SAc] = de_ScheduledActionList(__getArrayIfSingleItem(output[_SAc][_SAch]), context);
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
  if (output[_RCe] != null) {
    contents[_RCe] = de_ResizeClusterMessage(output[_RCe], context);
  }
  if (output[_PC] != null) {
    contents[_PC] = de_PauseClusterMessage(output[_PC], context);
  }
  if (output[_RCes] != null) {
    contents[_RCes] = de_ResumeClusterMessage(output[_RCes], context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_querySecondaryClusterInfo
 */
const de_SecondaryClusterInfo = (output: any, context: __SerdeContext): SecondaryClusterInfo => {
  const contents: any = {};
  if (output[_AZ] != null) {
    contents[_AZ] = __expectString(output[_AZ]);
  }
  if (output.ClusterNodes === "") {
    contents[_CN] = [];
  } else if (output[_CN] != null && output[_CN][_me] != null) {
    contents[_CN] = de_ClusterNodesList(__getArrayIfSingleItem(output[_CN][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceIntegrationList
 */
const de_ServiceIntegrationList = (output: any, context: __SerdeContext): ServiceIntegrationsUnion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceIntegrationsUnion(__expectUnion(entry), context);
    });
};

/**
 * deserializeAws_queryServiceIntegrationsUnion
 */
const de_ServiceIntegrationsUnion = (output: any, context: __SerdeContext): ServiceIntegrationsUnion => {
  if (output.LakeFormation === "") {
    return {
      [_LF]: [],
    };
  } else if (output[_LF] != null && output[_LF][_me] != null) {
    return {
      LakeFormation: de_LakeFormationServiceIntegrations(__getArrayIfSingleItem(output[_LF][_me]), context),
    };
  }
  if (output.S3AccessGrants === "") {
    return {
      [_SAG]: [],
    };
  } else if (output[_SAG] != null && output[_SAG][_me] != null) {
    return {
      S3AccessGrants: de_S3AccessGrantsServiceIntegrations(__getArrayIfSingleItem(output[_SAG][_me]), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_querySnapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  const contents: any = {};
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_SCTn] != null) {
    contents[_SCTn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SCTn]));
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_AZ] != null) {
    contents[_AZ] = __expectString(output[_AZ]);
  }
  if (output[_CCT] != null) {
    contents[_CCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CCT]));
  }
  if (output[_MU] != null) {
    contents[_MU] = __expectString(output[_MU]);
  }
  if (output[_CV] != null) {
    contents[_CV] = __expectString(output[_CV]);
  }
  if (output[_EFV] != null) {
    contents[_EFV] = __expectString(output[_EFV]);
  }
  if (output[_STn] != null) {
    contents[_STn] = __expectString(output[_STn]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_NON] != null) {
    contents[_NON] = __strictParseInt32(output[_NON]) as number;
  }
  if (output[_DBN] != null) {
    contents[_DBN] = __expectString(output[_DBN]);
  }
  if (output[_VIp] != null) {
    contents[_VIp] = __expectString(output[_VIp]);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output[_EWHSM] != null) {
    contents[_EWHSM] = __parseBoolean(output[_EWHSM]);
  }
  if (output.AccountsWithRestoreAccess === "") {
    contents[_AWRAc] = [];
  } else if (output[_AWRAc] != null && output[_AWRAc][_AWRA] != null) {
    contents[_AWRAc] = de_AccountsWithRestoreAccessList(__getArrayIfSingleItem(output[_AWRAc][_AWRA]), context);
  }
  if (output[_OA] != null) {
    contents[_OA] = __expectString(output[_OA]);
  }
  if (output[_TBSIMB] != null) {
    contents[_TBSIMB] = __strictParseFloat(output[_TBSIMB]) as number;
  }
  if (output[_AIBSIMB] != null) {
    contents[_AIBSIMB] = __strictParseFloat(output[_AIBSIMB]) as number;
  }
  if (output[_BPIMB] != null) {
    contents[_BPIMB] = __strictParseFloat(output[_BPIMB]) as number;
  }
  if (output[_CBRIMBPS] != null) {
    contents[_CBRIMBPS] = __strictParseFloat(output[_CBRIMBPS]) as number;
  }
  if (output[_ESTC] != null) {
    contents[_ESTC] = __strictParseLong(output[_ESTC]) as number;
  }
  if (output[_ETIS] != null) {
    contents[_ETIS] = __strictParseLong(output[_ETIS]) as number;
  }
  if (output[_SR] != null) {
    contents[_SR] = __expectString(output[_SR]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
  }
  if (output.RestorableNodeTypes === "") {
    contents[_RNT] = [];
  } else if (output[_RNT] != null && output[_RNT][_NT] != null) {
    contents[_RNT] = de_RestorableNodeTypeList(__getArrayIfSingleItem(output[_RNT][_NT]), context);
  }
  if (output[_EVR] != null) {
    contents[_EVR] = __parseBoolean(output[_EVR]);
  }
  if (output[_MTN] != null) {
    contents[_MTN] = __expectString(output[_MTN]);
  }
  if (output[_MSRP] != null) {
    contents[_MSRP] = __strictParseInt32(output[_MSRP]) as number;
  }
  if (output[_MSRD] != null) {
    contents[_MSRD] = __strictParseInt32(output[_MSRD]) as number;
  }
  if (output[_SRST] != null) {
    contents[_SRST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SRST]));
  }
  if (output[_MPSA] != null) {
    contents[_MPSA] = __expectString(output[_MPSA]);
  }
  if (output[_MPSKKI] != null) {
    contents[_MPSKKI] = __expectString(output[_MPSKKI]);
  }
  if (output[_SA] != null) {
    contents[_SA] = __expectString(output[_SA]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyAlreadyEnabledFault
 */
const de_SnapshotCopyAlreadyEnabledFault = (output: any, context: __SerdeContext): SnapshotCopyAlreadyEnabledFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyDisabledFault
 */
const de_SnapshotCopyDisabledFault = (output: any, context: __SerdeContext): SnapshotCopyDisabledFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyGrant
 */
const de_SnapshotCopyGrant = (output: any, context: __SerdeContext): SnapshotCopyGrant => {
  const contents: any = {};
  if (output[_SCGN] != null) {
    contents[_SCGN] = __expectString(output[_SCGN]);
  }
  if (output[_KKI] != null) {
    contents[_KKI] = __expectString(output[_KKI]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.SnapshotCopyGrants === "") {
    contents[_SCGn] = [];
  } else if (output[_SCGn] != null && output[_SCGn][_SCG] != null) {
    contents[_SCGn] = de_SnapshotCopyGrantList(__getArrayIfSingleItem(output[_SCGn][_SCG]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotCopyGrantNotFoundFault
 */
const de_SnapshotCopyGrantNotFoundFault = (output: any, context: __SerdeContext): SnapshotCopyGrantNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotErrorMessage
 */
const de_SnapshotErrorMessage = (output: any, context: __SerdeContext): SnapshotErrorMessage => {
  const contents: any = {};
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_SCI] != null) {
    contents[_SCI] = __expectString(output[_SCI]);
  }
  if (output[_FC] != null) {
    contents[_FC] = __expectString(output[_FC]);
  }
  if (output[_FR] != null) {
    contents[_FR] = __expectString(output[_FR]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output.Snapshots === "") {
    contents[_Sna] = [];
  } else if (output[_Sna] != null && output[_Sna][_Sn] != null) {
    contents[_Sna] = de_SnapshotList(__getArrayIfSingleItem(output[_Sna][_Sn]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySnapshotSchedule
 */
const de_SnapshotSchedule = (output: any, context: __SerdeContext): SnapshotSchedule => {
  const contents: any = {};
  if (output.ScheduleDefinitions === "") {
    contents[_SD] = [];
  } else if (output[_SD] != null && output[_SD][_SDch] != null) {
    contents[_SD] = de_ScheduleDefinitionList(__getArrayIfSingleItem(output[_SD][_SDch]), context);
  }
  if (output[_SIc] != null) {
    contents[_SIc] = __expectString(output[_SIc]);
  }
  if (output[_SDc] != null) {
    contents[_SDc] = __expectString(output[_SDc]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
  }
  if (output.NextInvocations === "") {
    contents[_NI] = [];
  } else if (output[_NI] != null && output[_NI][_STna] != null) {
    contents[_NI] = de_ScheduledSnapshotTimeList(__getArrayIfSingleItem(output[_NI][_STna]), context);
  }
  if (output[_ACC] != null) {
    contents[_ACC] = __strictParseInt32(output[_ACC]) as number;
  }
  if (output.AssociatedClusters === "") {
    contents[_ACs] = [];
  } else if (output[_ACs] != null && output[_ACs][_CATS] != null) {
    contents[_ACs] = de_AssociatedClusterList(__getArrayIfSingleItem(output[_ACs][_CATS]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSInvalidTopicFault
 */
const de_SNSInvalidTopicFault = (output: any, context: __SerdeContext): SNSInvalidTopicFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSNoAuthorizationFault
 */
const de_SNSNoAuthorizationFault = (output: any, context: __SerdeContext): SNSNoAuthorizationFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSTopicArnNotFoundFault
 */
const de_SNSTopicArnNotFoundFault = (output: any, context: __SerdeContext): SNSTopicArnNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnet
 */
const de_Subnet = (output: any, context: __SerdeContext): Subnet => {
  const contents: any = {};
  if (output[_SIubn] != null) {
    contents[_SIubn] = __expectString(output[_SIubn]);
  }
  if (output[_SAZ] != null) {
    contents[_SAZ] = de_AvailabilityZone(output[_SAZ], context);
  }
  if (output[_SSu] != null) {
    contents[_SSu] = __expectString(output[_SSu]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetAlreadyInUse
 */
const de_SubnetAlreadyInUse = (output: any, context: __SerdeContext): SubnetAlreadyInUse => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionNotFoundFault
 */
const de_SubscriptionNotFoundFault = (output: any, context: __SerdeContext): SubscriptionNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySupportedOperation
 */
const de_SupportedOperation = (output: any, context: __SerdeContext): SupportedOperation => {
  const contents: any = {};
  if (output[_ON] != null) {
    contents[_ON] = __expectString(output[_ON]);
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
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTableRestoreNotFoundFault
 */
const de_TableRestoreNotFoundFault = (output: any, context: __SerdeContext): TableRestoreNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTableRestoreStatus
 */
const de_TableRestoreStatus = (output: any, context: __SerdeContext): TableRestoreStatus => {
  const contents: any = {};
  if (output[_TRRI] != null) {
    contents[_TRRI] = __expectString(output[_TRRI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output[_RTeq] != null) {
    contents[_RTeq] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RTeq]));
  }
  if (output[_PIMB] != null) {
    contents[_PIMB] = __strictParseLong(output[_PIMB]) as number;
  }
  if (output[_TDIMB] != null) {
    contents[_TDIMB] = __strictParseLong(output[_TDIMB]) as number;
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_SDN] != null) {
    contents[_SDN] = __expectString(output[_SDN]);
  }
  if (output[_SSN] != null) {
    contents[_SSN] = __expectString(output[_SSN]);
  }
  if (output[_STN] != null) {
    contents[_STN] = __expectString(output[_STN]);
  }
  if (output[_TDN] != null) {
    contents[_TDN] = __expectString(output[_TDN]);
  }
  if (output[_TSN] != null) {
    contents[_TSN] = __expectString(output[_TSN]);
  }
  if (output[_NTN] != null) {
    contents[_NTN] = __expectString(output[_NTN]);
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
    contents[_TRSD] = [];
  } else if (output[_TRSD] != null && output[_TRSD][_TRS] != null) {
    contents[_TRSD] = de_TableRestoreStatusList(__getArrayIfSingleItem(output[_TRSD][_TRS]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryTaggedResource
 */
const de_TaggedResource = (output: any, context: __SerdeContext): TaggedResource => {
  const contents: any = {};
  if (output[_Ta] != null) {
    contents[_Ta] = de_Tag(output[_Ta], context);
  }
  if (output[_RNe] != null) {
    contents[_RNe] = __expectString(output[_RNe]);
  }
  if (output[_RT] != null) {
    contents[_RT] = __expectString(output[_RT]);
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
    contents[_TR] = [];
  } else if (output[_TR] != null && output[_TR][_TRa] != null) {
    contents[_TR] = de_TaggedResourceList(__getArrayIfSingleItem(output[_TR][_TRa]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagLimitExceededFault
 */
const de_TagLimitExceededFault = (output: any, context: __SerdeContext): TagLimitExceededFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
    contents[_MT] = [];
  } else if (output[_MT] != null && output[_MT][_MTa] != null) {
    contents[_MT] = de_TrackList(__getArrayIfSingleItem(output[_MT][_MTa]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnauthorizedOperation
 */
const de_UnauthorizedOperation = (output: any, context: __SerdeContext): UnauthorizedOperation => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnknownSnapshotCopyRegionFault
 */
const de_UnknownSnapshotCopyRegionFault = (output: any, context: __SerdeContext): UnknownSnapshotCopyRegionFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnsupportedOperationFault
 */
const de_UnsupportedOperationFault = (output: any, context: __SerdeContext): UnsupportedOperationFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnsupportedOptionFault
 */
const de_UnsupportedOptionFault = (output: any, context: __SerdeContext): UnsupportedOptionFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateTarget
 */
const de_UpdateTarget = (output: any, context: __SerdeContext): UpdateTarget => {
  const contents: any = {};
  if (output[_MTN] != null) {
    contents[_MTN] = __expectString(output[_MTN]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output.SupportedOperations === "") {
    contents[_SOu] = [];
  } else if (output[_SOu] != null && output[_SOu][_SOup] != null) {
    contents[_SOu] = de_SupportedOperationList(__getArrayIfSingleItem(output[_SOu][_SOup]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimit
 */
const de_UsageLimit = (output: any, context: __SerdeContext): UsageLimit => {
  const contents: any = {};
  if (output[_ULI] != null) {
    contents[_ULI] = __expectString(output[_ULI]);
  }
  if (output[_CIl] != null) {
    contents[_CIl] = __expectString(output[_CIl]);
  }
  if (output[_FT] != null) {
    contents[_FT] = __expectString(output[_FT]);
  }
  if (output[_LT] != null) {
    contents[_LT] = __expectString(output[_LT]);
  }
  if (output[_Am] != null) {
    contents[_Am] = __strictParseLong(output[_Am]) as number;
  }
  if (output[_Pe] != null) {
    contents[_Pe] = __expectString(output[_Pe]);
  }
  if (output[_BA] != null) {
    contents[_BA] = __expectString(output[_BA]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_Ta] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_Ta]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimitAlreadyExistsFault
 */
const de_UsageLimitAlreadyExistsFault = (output: any, context: __SerdeContext): UsageLimitAlreadyExistsFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimitList
 */
const de_UsageLimitList = (output: any, context: __SerdeContext): UsageLimitList => {
  const contents: any = {};
  if (output.UsageLimits === "") {
    contents[_UL] = [];
  } else if (output[_UL] != null && output[_UL][_me] != null) {
    contents[_UL] = de_UsageLimits(__getArrayIfSingleItem(output[_UL][_me]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryUsageLimitNotFoundFault
 */
const de_UsageLimitNotFoundFault = (output: any, context: __SerdeContext): UsageLimitNotFoundFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
 * deserializeAws_queryValueStringList
 */
const de_ValueStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryVpcEndpoint
 */
const de_VpcEndpoint = (output: any, context: __SerdeContext): VpcEndpoint => {
  const contents: any = {};
  if (output[_VEI] != null) {
    contents[_VEI] = __expectString(output[_VEI]);
  }
  if (output[_VIp] != null) {
    contents[_VIp] = __expectString(output[_VIp]);
  }
  if (output.NetworkInterfaces === "") {
    contents[_NIe] = [];
  } else if (output[_NIe] != null && output[_NIe][_NIet] != null) {
    contents[_NIe] = de_NetworkInterfaceList(__getArrayIfSingleItem(output[_NIe][_NIet]), context);
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
  if (output[_VSGIp] != null) {
    contents[_VSGIp] = __expectString(output[_VSGIp]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
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

const _ = "2012-12-01";
const _A = "Action";
const _AA = "AccountAttributes";
const _AAL = "AuthorizedAudiencesList";
const _AAVPC = "AllowedAllVPCs";
const _AAc = "AccountAttribute";
const _AAcc = "AccountAlias";
const _AC = "AutoCreate";
const _ACC = "AssociatedClusterCount";
const _ACR = "AllowCancelResize";
const _ACS = "AquaConfigurationStatus";
const _ACSGI = "AuthorizeClusterSecurityGroupIngress";
const _ACq = "AquaConfiguration";
const _ACs = "AssociatedClusters";
const _ADS = "AuthorizeDataShare";
const _ADSC = "AssociateDataShareConsumer";
const _AEA = "AuthorizeEndpointAccess";
const _AEAs = "AssociateEntireAccount";
const _AEC = "AdditionalEncryptionContext";
const _AI = "AdditionalInfo";
const _AIBSIMB = "ActualIncrementalBackupSizeInMegaBytes";
const _AIR = "AddIamRoles";
const _AIc = "AccountId";
const _AN = "AttributeNames";
const _ANt = "AttributeName";
const _AP = "AddPartner";
const _APAC = "AllowPubliclyAccessibleConsumers";
const _APC = "AuthenticationProfileContent";
const _APN = "AuthenticationProfileName";
const _APu = "AuthenticationProfiles";
const _ARNE = "AcceptReservedNodeExchange";
const _ARRIMBPS = "AvgResizeRateInMegaBytesPerSecond";
const _AS = "AquaStatus";
const _ASA = "AuthorizeSnapshotAccess";
const _ASRP = "AutomatedSnapshotRetentionPeriod";
const _ASp = "ApplyStatus";
const _AT = "ActionType";
const _ATIL = "AuthorizedTokenIssuerList";
const _ATp = "ApplyType";
const _ATu = "AuthorizeTime";
const _AV = "AllowedValues";
const _AVPC = "AllowedVPCs";
const _AVT = "AttributeValueTarget";
const _AVU = "AllowVersionUpgrade";
const _AVt = "AttributeValues";
const _AVtt = "AttributeValue";
const _AW = "AllowWrites";
const _AWRA = "AccountWithRestoreAccess";
const _AWRAc = "AccountsWithRestoreAccess";
const _AZ = "AvailabilityZone";
const _AZR = "AvailabilityZoneRelocation";
const _AZRS = "AvailabilityZoneRelocationStatus";
const _AZv = "AvailabilityZones";
const _Ac = "Account";
const _Act = "Active";
const _Ad = "Address";
const _Am = "Amount";
const _As = "Associations";
const _Ass = "Association";
const _At = "Attribute";
const _Au = "Authorization";
const _BA = "BreachAction";
const _BDCS = "BatchDeleteClusterSnapshots";
const _BMCS = "BatchModifyClusterSnapshots";
const _BN = "BucketName";
const _BPIMB = "BackupProgressInMegaBytes";
const _C = "Classic";
const _CA = "ConsumerArn";
const _CAI = "CustomerAwsId";
const _CAP = "CreateAuthenticationProfile";
const _CAS = "ClusterAvailabilityStatus";
const _CATS = "ClusterAssociatedToSchedule";
const _CAW = "ConsumerAcceptedWrites";
const _CAe = "CertificateAssociations";
const _CAer = "CertificateAssociation";
const _CAr = "CreatedAt";
const _CBRIMBPS = "CurrentBackupRateInMegaBytesPerSecond";
const _CC = "CreateCluster";
const _CCDA = "CreateCustomDomainAssociation";
const _CCPG = "CreateClusterParameterGroup";
const _CCS = "CopyClusterSnapshot";
const _CCSG = "CreateClusterSecurityGroup";
const _CCSGr = "CreateClusterSubnetGroup";
const _CCSr = "CreateClusterSnapshot";
const _CCT = "ClusterCreateTime";
const _CCu = "CurrencyCode";
const _CD = "CreatedDate";
const _CDCA = "CustomDomainCertificateArn";
const _CDCED = "CustomDomainCertificateExpiryDate";
const _CDCET = "CustomDomainCertExpiryTime";
const _CDN = "CustomDomainName";
const _CDR = "CurrentDatabaseRevision";
const _CDRl = "ClusterDbRevisions";
const _CDRlu = "ClusterDbRevision";
const _CE = "ClusterExists";
const _CEA = "CreateEndpointAccess";
const _CES = "CreateEventSubscription";
const _CHC = "CreateHsmConfiguration";
const _CHCC = "CreateHsmClientCertificate";
const _CI = "CreateIntegration";
const _CIDRIP = "CIDRIP";
const _CIR = "ClusterIamRole";
const _CIl = "ClusterIdentifier";
const _CIo = "ConsumerIdentifier";
const _CIon = "ConsumerIdentifiers";
const _CN = "ClusterNodes";
const _CNA = "ClusterNamespaceArn";
const _CPG = "ClusterParameterGroups";
const _CPGF = "ClusterParameterGroupFamily";
const _CPGN = "ClusterParameterGroupName";
const _CPGl = "ClusterParameterGroup";
const _CPK = "ClusterPublicKey";
const _CPSL = "ClusterParameterStatusList";
const _CR = "CancelResize";
const _CRIA = "CreateRedshiftIdcApplication";
const _CRIMBPS = "CurrentRateInMegaBytesPerSecond";
const _CRN = "ClusterRevisionNumber";
const _CRRIMBPS = "CurrentRestoreRateInMegaBytesPerSecond";
const _CRo = "ConsumerRegion";
const _CS = "ClusterStatus";
const _CSA = "CreateScheduledAction";
const _CSCG = "CreateSnapshotCopyGrant";
const _CSCS = "ClusterSnapshotCopyStatus";
const _CSG = "ClusterSecurityGroups";
const _CSGN = "ClusterSecurityGroupName";
const _CSGNl = "ClusterSubnetGroupName";
const _CSGl = "ClusterSecurityGroup";
const _CSGlu = "ClusterSubnetGroups";
const _CSGlus = "ClusterSubnetGroup";
const _CSI = "CustSubscriptionId";
const _CSS = "CreateSnapshotSchedule";
const _CT = "CreateTags";
const _CTl = "ClusterType";
const _CTr = "CreateTime";
const _CUL = "CreateUsageLimit";
const _CV = "ClusterVersion";
const _CVl = "ClusterVersions";
const _Cl = "Clusters";
const _Clu = "Cluster";
const _Co = "Command";
const _D = "Description";
const _DAA = "DescribeAccountAttributes";
const _DAP = "DeleteAuthenticationProfile";
const _DAPe = "DescribeAuthenticationProfiles";
const _DBN = "DBName";
const _DC = "DeleteCluster";
const _DCDA = "DeleteCustomDomainAssociation";
const _DCDAe = "DescribeCustomDomainAssociations";
const _DCDR = "DescribeClusterDbRevisions";
const _DCP = "DescribeClusterParameters";
const _DCPG = "DeleteClusterParameterGroup";
const _DCPGe = "DescribeClusterParameterGroups";
const _DCPe = "DefaultClusterParameters";
const _DCS = "DeleteClusterSnapshot";
const _DCSG = "DeleteClusterSecurityGroup";
const _DCSGe = "DeleteClusterSubnetGroup";
const _DCSGes = "DescribeClusterSecurityGroups";
const _DCSGesc = "DescribeClusterSubnetGroups";
const _DCSe = "DescribeClusterSnapshots";
const _DCT = "DescribeClusterTracks";
const _DCV = "DescribeClusterVersions";
const _DCe = "DescribeClusters";
const _DDCP = "DescribeDefaultClusterParameters";
const _DDS = "DeauthorizeDataShare";
const _DDSC = "DisassociateDataShareConsumer";
const _DDSFC = "DescribeDataSharesForConsumer";
const _DDSFP = "DescribeDataSharesForProducer";
const _DDSe = "DescribeDataShares";
const _DE = "DescribeEvents";
const _DEA = "DeleteEndpointAccess";
const _DEAe = "DescribeEndpointAccess";
const _DEAes = "DescribeEndpointAuthorization";
const _DEAi = "DisassociateEntireAccount";
const _DEC = "DescribeEventCategories";
const _DES = "DeleteEventSubscription";
const _DESe = "DescribeEventSubscriptions";
const _DG = "DbGroups";
const _DHC = "DeleteHsmConfiguration";
const _DHCC = "DeleteHsmClientCertificate";
const _DHCCe = "DescribeHsmClientCertificates";
const _DHCe = "DescribeHsmConfigurations";
const _DI = "DeleteIntegration";
const _DII = "DescribeInboundIntegrations";
const _DIRA = "DefaultIamRoleArn";
const _DIe = "DescribeIntegrations";
const _DL = "DisableLogging";
const _DLS = "DescribeLoggingStatus";
const _DM = "DeferMaintenance";
const _DMD = "DeferMaintenanceDuration";
const _DMET = "DeferMaintenanceEndTime";
const _DMI = "DeferMaintenanceIdentifier";
const _DMST = "DeferMaintenanceStartTime";
const _DMW = "DeferredMaintenanceWindows";
const _DMWe = "DeferredMaintenanceWindow";
const _DN = "DeregisterNamespace";
const _DNCO = "DescribeNodeConfigurationOptions";
const _DNa = "DatabaseName";
const _DNb = "DbName";
const _DOCO = "DescribeOrderableClusterOptions";
const _DP = "DeletePartner";
const _DPb = "DbPassword";
const _DPe = "DescribePartners";
const _DR = "DescribeResize";
const _DRIA = "DeleteRedshiftIdcApplication";
const _DRIAe = "DescribeRedshiftIdcApplications";
const _DRN = "DescribeReservedNodes";
const _DRNES = "DescribeReservedNodeExchangeStatus";
const _DRNO = "DescribeReservedNodeOfferings";
const _DRP = "DeleteResourcePolicy";
const _DRRD = "DatabaseRevisionReleaseDate";
const _DRa = "DatabaseRevision";
const _DRe = "DestinationRegion";
const _DRr = "DryRun";
const _DS = "DescribeStorage";
const _DSA = "DeleteScheduledAction";
const _DSAa = "DataShareArn";
const _DSAat = "DataShareAssociations";
const _DSAe = "DescribeScheduledActions";
const _DSC = "DisableSnapshotCopy";
const _DSCG = "DeleteSnapshotCopyGrant";
const _DSCGe = "DescribeSnapshotCopyGrants";
const _DSS = "DeleteSnapshotSchedule";
const _DSSe = "DescribeSnapshotSchedules";
const _DST = "DataShareType";
const _DSa = "DataShares";
const _DSi = "DisassociateSchedule";
const _DSu = "DurationSeconds";
const _DT = "DeleteTags";
const _DTIMB = "DataTransferredInMegaBytes";
const _DTP = "DataTransferProgress";
const _DTPP = "DataTransferProgressPercent";
const _DTRS = "DescribeTableRestoreStatus";
const _DTa = "DataType";
const _DTe = "DescribeTags";
const _DU = "DbUser";
const _DUL = "DeleteUsageLimit";
const _DULe = "DescribeUsageLimits";
const _DV = "DatabaseVersion";
const _Da = "Date";
const _Dat = "Database";
const _Du = "Duration";
const _E = "Encrypted";
const _EAL = "EndpointAccessList";
const _EALn = "EndpointAuthorizationList";
const _EC = "EventCategories";
const _ECL = "EventCategoriesList";
const _ECM = "EventCategoriesMap";
const _ECML = "EventCategoriesMapList";
const _ECSG = "EC2SecurityGroups";
const _ECSGN = "EC2SecurityGroupName";
const _ECSGOI = "EC2SecurityGroupOwnerId";
const _ECSGe = "EC2SecurityGroup";
const _ECSI = "EnableCaseSensitiveIdentifier";
const _ECT = "EndpointCreateTime";
const _ECn = "EndpointCount";
const _ECr = "ErrorCode";
const _ECv = "EventCategory";
const _ED = "EventDescription";
const _EDUP = "EstimatedDiskUtilizationPercent";
const _EFV = "EngineFullVersion";
const _EI = "ElasticIp";
const _EIM = "EventInfoMap";
const _EIS = "ElasticIpStatus";
const _EIv = "EventId";
const _EL = "EnableLogging";
const _EM = "ErrorMessage";
const _EN = "EndpointName";
const _ENSST = "ExpectedNextSnapshotScheduleTime";
const _ENSSTS = "ExpectedNextSnapshotScheduleTimeStatus";
const _ERN = "ExchangedReservedNode";
const _ERNONO = "ElasticResizeNumberOfNodeOptions";
const _ES = "EventSubscription";
const _ESC = "EnableSnapshotCopy";
const _ESL = "EventSubscriptionsList";
const _ESTC = "EstimatedSecondsToCompletion";
const _ESn = "EndpointStatus";
const _ET = "EndTime";
const _ETIS = "ElapsedTimeInSeconds";
const _ETTCIS = "EstimatedTimeToCompletionInSeconds";
const _ETn = "EncryptionType";
const _EVR = "EnhancedVpcRouting";
const _EWHSM = "EncryptedWithHSM";
const _En = "Enabled";
const _Ena = "Enable";
const _End = "Endpoint";
const _Er = "Errors";
const _Ev = "Events";
const _Eve = "Event";
const _Ex = "Expiration";
const _F = "Force";
const _FC = "FailureCode";
const _FCSI = "FinalClusterSnapshotIdentifier";
const _FCSRP = "FinalClusterSnapshotRetentionPeriod";
const _FP = "FixedPrice";
const _FPC = "FailoverPrimaryCompute";
const _FR = "FailureReason";
const _FT = "FeatureType";
const _Fi = "Filters";
const _G = "Grantee";
const _GCC = "GetClusterCredentials";
const _GCCWIAM = "GetClusterCredentialsWithIAM";
const _GRNECO = "GetReservedNodeExchangeConfigurationOptions";
const _GRNEO = "GetReservedNodeExchangeOfferings";
const _GRP = "GetResourcePolicy";
const _Gr = "Grantor";
const _HC = "HsmConfiguration";
const _HCC = "HsmClientCertificate";
const _HCCI = "HsmClientCertificateIdentifier";
const _HCCPK = "HsmClientCertificatePublicKey";
const _HCCs = "HsmClientCertificates";
const _HCI = "HsmConfigurationIdentifier";
const _HCs = "HsmConfigurations";
const _HIA = "HsmIpAddress";
const _HPN = "HsmPartitionName";
const _HPP = "HsmPartitionPassword";
const _HS = "HsmStatus";
const _HSPC = "HsmServerPublicCertificate";
const _I = "Identifiers";
const _IA = "IntegrationArn";
const _IAT = "IpAddressType";
const _IAp = "Ipv6Address";
const _IDN = "IdcDisplayName";
const _IE = "IntegrationError";
const _II = "InboundIntegrations";
const _IIA = "IdcInstanceArn";
const _IIn = "InboundIntegration";
const _IM = "IsModifiable";
const _IMAA = "IdcManagedApplicationArn";
const _IN = "IntegrationName";
const _INd = "IdentityNamespace";
const _IOS = "IdcOnboardStatus";
const _IPR = "IPRanges";
const _IPRa = "IPRange";
const _IR = "IamRoles";
const _IRA = "IamRoleArn";
const _IRa = "IamRole";
const _IRm = "ImpactRanking";
const _ITC = "ImportTablesCompleted";
const _ITIP = "ImportTablesInProgress";
const _ITNS = "ImportTablesNotStarted";
const _Id = "Id";
const _In = "Integrations";
const _Int = "Integration";
const _K = "Key";
const _KKI = "KmsKeyId";
const _KMSKI = "KMSKeyId";
const _L = "Link";
const _LDT = "LogDestinationType";
const _LE = "LogExports";
const _LEo = "LoggingEnabled";
const _LF = "LakeFormation";
const _LFM = "LastFailureMessage";
const _LFQ = "LakeFormationQuery";
const _LFT = "LastFailureTime";
const _LR = "ListRecommendations";
const _LSD = "LoadSampleData";
const _LSDT = "LastSuccessfulDeliveryTime";
const _LT = "LimitType";
const _M = "Marker";
const _MAC = "ModifyAquaConfiguration";
const _MAP = "ModifyAuthenticationProfile";
const _MAZ = "MultiAZ";
const _MAZS = "MultiAZSecondary";
const _MB = "ManagedBy";
const _MC = "ModifyCluster";
const _MCDA = "ModifyCustomDomainAssociation";
const _MCDR = "ModifyClusterDbRevision";
const _MCIR = "ModifyClusterIamRoles";
const _MCM = "ModifyClusterMaintenance";
const _MCPG = "ModifyClusterParameterGroup";
const _MCS = "ModifyClusterSnapshot";
const _MCSG = "ModifyClusterSubnetGroup";
const _MCSS = "ModifyClusterSnapshotSchedule";
const _MEA = "ModifyEndpointAccess";
const _MES = "ModifyEventSubscription";
const _MEV = "MinimumEngineVersion";
const _MI = "ModifyIntegration";
const _MMP = "ManageMasterPassword";
const _MPSA = "MasterPasswordSecretArn";
const _MPSKKI = "MasterPasswordSecretKmsKeyId";
const _MR = "MaxRecords";
const _MRIA = "ModifyRedshiftIdcApplication";
const _MS = "ModifyStatus";
const _MSA = "ModifyScheduledAction";
const _MSCRP = "ModifySnapshotCopyRetentionPeriod";
const _MSRD = "ManualSnapshotRemainingDays";
const _MSRP = "ManualSnapshotRetentionPeriod";
const _MSS = "ModifySnapshotSchedule";
const _MT = "MaintenanceTracks";
const _MTN = "MaintenanceTrackName";
const _MTa = "MaintenanceTrack";
const _MU = "MasterUsername";
const _MUL = "ModifyUsageLimit";
const _MUP = "MasterUserPassword";
const _Ma = "Manual";
const _Me = "Message";
const _Mo = "Mode";
const _N = "Name";
const _NA = "NamespaceArn";
const _NC = "NodeCount";
const _NCI = "NewClusterIdentifier";
const _NCO = "NodeConfigurationOption";
const _NCOL = "NodeConfigurationOptionList";
const _NI = "NextInvocations";
const _NII = "NetworkInterfaceId";
const _NIa = "NamespaceIdentifier";
const _NIe = "NetworkInterfaces";
const _NIet = "NetworkInterface";
const _NMWST = "NextMaintenanceWindowStartTime";
const _NON = "NumberOfNodes";
const _NR = "NodeRole";
const _NRT = "NextRefreshTime";
const _NT = "NodeType";
const _NTN = "NewTableName";
const _O = "Operator";
const _OA = "OwnerAccount";
const _OCO = "OrderableClusterOptions";
const _OCOr = "OrderableClusterOption";
const _ON = "OperationName";
const _OT = "OfferingType";
const _Ob = "Observation";
const _P = "Port";
const _PA = "PubliclyAccessible";
const _PAED = "ParameterApplyErrorDescription";
const _PAS = "ParameterApplyStatus";
const _PAW = "ProducerAllowedWrites";
const _PAe = "PendingActions";
const _PAr = "ProducerArn";
const _PC = "PauseCluster";
const _PG = "ParameterGroups";
const _PGF = "ParameterGroupFamily";
const _PGN = "ParameterGroupName";
const _PGS = "ParameterGroupStatus";
const _PIA = "PrivateIpAddress";
const _PII = "PartnerIntegrationInfo";
const _PIIL = "PartnerIntegrationInfoList";
const _PIMB = "ProgressInMegaBytes";
const _PIPA = "PrivateIPAddress";
const _PIPAu = "PublicIPAddress";
const _PMV = "PendingModifiedValues";
const _PMW = "PreferredMaintenanceWindow";
const _PN = "PartnerName";
const _PNa = "ParameterName";
const _PRNO = "PurchaseReservedNodeOffering";
const _PRP = "PutResourcePolicy";
const _PV = "ParameterValue";
const _Pa = "Parameters";
const _Par = "Parameter";
const _Pe = "Period";
const _Po = "Policy";
const _R = "Resources";
const _RA = "ResourceArn";
const _RAP = "ResetAllParameters";
const _RAe = "RecommendedActions";
const _RAec = "RecommendedAction";
const _RC = "RebootCluster";
const _RCA = "RecurringChargeAmount";
const _RCF = "RecurringChargeFrequency";
const _RCPG = "ResetClusterParameterGroup";
const _RCSGI = "RevokeClusterSecurityGroupIngress";
const _RCe = "ResizeCluster";
const _RCec = "RecurringCharges";
const _RCecu = "RecurringCharge";
const _RCes = "ResumeCluster";
const _RDS = "RejectDataShare";
const _REA = "RevokeEndpointAccess";
const _REK = "RotateEncryptionKey";
const _RFCS = "RestoreFromClusterSnapshot";
const _RI = "ResizeInfo";
const _RIA = "RedshiftIdcApplication";
const _RIAA = "RedshiftIdcApplicationArn";
const _RIAN = "RedshiftIdcApplicationName";
const _RIAe = "RedshiftIdcApplications";
const _RIR = "RemoveIamRoles";
const _RL = "ReferenceLinks";
const _RLe = "ReferenceLink";
const _RN = "RegisterNamespace";
const _RNCO = "ReservedNodeConfigurationOption";
const _RNCOL = "ReservedNodeConfigurationOptionList";
const _RNERI = "ReservedNodeExchangeRequestId";
const _RNES = "ReservedNodeExchangeStatus";
const _RNESD = "ReservedNodeExchangeStatusDetails";
const _RNI = "ReservedNodeId";
const _RNO = "ReservedNodeOfferings";
const _RNOI = "ReservedNodeOfferingId";
const _RNOT = "ReservedNodeOfferingType";
const _RNOe = "ReservedNodeOffering";
const _RNT = "RestorableNodeTypes";
const _RNe = "ResourceName";
const _RNes = "ReservedNode";
const _RNese = "ReservedNodes";
const _RO = "ResourceOwner";
const _RP = "RetentionPeriod";
const _RPe = "ResourcePolicy";
const _RS = "RestoreStatus";
const _RSA = "RevokeSnapshotAccess";
const _RT = "ResourceType";
const _RTFCS = "RestoreTableFromClusterSnapshot";
const _RTe = "RevisionTarget";
const _RTec = "RecommendationType";
const _RTeco = "RecommendationText";
const _RTeq = "RequestTime";
const _RTes = "ResizeType";
const _RTev = "RevisionTargets";
const _RWA = "ReadWriteAccess";
const _Re = "Recommendations";
const _Rec = "Recommendation";
const _S = "Severity";
const _SA = "SnapshotArn";
const _SAD = "ScheduledActionDescription";
const _SAG = "S3AccessGrants";
const _SAN = "ScheduledActionName";
const _SAS = "ScheduleAssociationState";
const _SAT = "ScheduledActionTime";
const _SAZ = "SubnetAvailabilityZone";
const _SAc = "ScheduledActions";
const _SAch = "ScheduledAction";
const _SAo = "SourceArn";
const _SCD = "StatusChangeDate";
const _SCG = "SnapshotCopyGrant";
const _SCGN = "SnapshotCopyGrantName";
const _SCGn = "SnapshotCopyGrants";
const _SCI = "SnapshotClusterIdentifier";
const _SCIAT = "SupportedClusterIpAddressTypes";
const _SCT = "SubscriptionCreationTime";
const _SCTn = "SnapshotCreateTime";
const _SD = "ScheduleDefinitions";
const _SDN = "SourceDatabaseName";
const _SDc = "ScheduleDescription";
const _SDch = "ScheduleDefinition";
const _SE = "SortingEntities";
const _SEM = "SnapshotErrorMessage";
const _SFCS = "SkipFinalClusterSnapshot";
const _SGN = "SubnetGroupName";
const _SGS = "SubnetGroupStatus";
const _SI = "SnapshotIdentifier";
const _SIL = "SnapshotIdentifierList";
const _SILo = "SourceIdsList";
const _SIc = "ScheduleIdentifier";
const _SIe = "ServiceIntegrations";
const _SIo = "SourceIds";
const _SIou = "SourceIdentifier";
const _SIour = "SourceId";
const _SIu = "SubnetIds";
const _SIub = "SubnetId";
const _SIubn = "SubnetIdentifier";
const _SKP = "S3KeyPrefix";
const _SM = "StatusMessage";
const _SN = "SubscriptionName";
const _SO = "SortOrder";
const _SOu = "SupportedOperations";
const _SOup = "SupportedOperation";
const _SP = "SupportedPlatforms";
const _SPu = "SupportedPlatform";
const _SR = "SourceRegion";
const _SRN = "SourceReservedNode";
const _SRNC = "SourceReservedNodeCount";
const _SRNI = "SourceReservedNodeId";
const _SRNT = "SourceReservedNodeType";
const _SRST = "SnapshotRetentionStartTime";
const _SS = "SnapshotSchedules";
const _SSCI = "SourceSnapshotClusterIdentifier";
const _SSI = "SourceSnapshotIdentifier";
const _SSIMB = "SnapshotSizeInMegaBytes";
const _SSIn = "SnapshotScheduleIdentifier";
const _SSN = "SourceSchemaName";
const _SSS = "SnapshotScheduleState";
const _SSn = "SnapshotSchedule";
const _SSu = "SubnetStatus";
const _ST = "SourceType";
const _STA = "SnsTopicArn";
const _STN = "SourceTableName";
const _STn = "SnapshotType";
const _STna = "SnapshotTime";
const _STt = "StartTime";
const _Sc = "Schedule";
const _Sn = "Snapshot";
const _Sna = "Snapshots";
const _So = "Source";
const _St = "Status";
const _Sta = "State";
const _Str = "String";
const _Su = "Subnets";
const _Sub = "Subnet";
const _T = "Tags";
const _TA = "TargetArn";
const _TAT = "TargetActionType";
const _TAa = "TargetAction";
const _TBSIMB = "TotalBackupSizeInMegaBytes";
const _TCT = "TargetClusterType";
const _TDIMB = "TotalDataInMegaBytes";
const _TDN = "TargetDatabaseName";
const _TET = "TargetEncryptionType";
const _TK = "TagKeys";
const _TL = "TagList";
const _TNON = "TargetNumberOfNodes";
const _TNT = "TargetNodeType";
const _TPSIMB = "TotalProvisionedStorageInMegaBytes";
const _TR = "TaggedResources";
const _TRDIMB = "TotalResizeDataInMegaBytes";
const _TRNC = "TargetReservedNodeCount";
const _TRNO = "TargetReservedNodeOffering";
const _TRNOI = "TargetReservedNodeOfferingId";
const _TRNT = "TargetReservedNodeType";
const _TRRI = "TableRestoreRequestId";
const _TRS = "TableRestoreStatus";
const _TRSD = "TableRestoreStatusDetails";
const _TRa = "TaggedResource";
const _TSCIMB = "TotalStorageCapacityInMegaBytes";
const _TSI = "TargetSnapshotIdentifier";
const _TSN = "TargetSchemaName";
const _TTIA = "TrustedTokenIssuerArn";
const _TV = "TagValues";
const _Ta = "Tag";
const _Te = "Text";
const _Ti = "Title";
const _Ty = "Type";
const _UA = "UpdatedAt";
const _UL = "UsageLimits";
const _ULI = "UsageLimitId";
const _UP = "UsagePrice";
const _UPS = "UpdatePartnerStatus";
const _UT = "UpdateTargets";
const _UTp = "UpdateTarget";
const _V = "Version";
const _VE = "VpcEndpoints";
const _VEI = "VpcEndpointId";
const _VEp = "VpcEndpoint";
const _VI = "VpcIds";
const _VIp = "VpcId";
const _VIpc = "VpcIdentifier";
const _VSG = "VpcSecurityGroups";
const _VSGI = "VpcSecurityGroupIds";
const _VSGIp = "VpcSecurityGroupId";
const _VSGp = "VpcSecurityGroup";
const _Va = "Values";
const _Val = "Value";
const _WI = "WorkgroupIdentifier";
const _e = "entry";
const _i = "item";
const _m = "message";
const _me = "member";

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
