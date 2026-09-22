// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type ActivateKeySigningKeyCommandInput,
  type ActivateKeySigningKeyCommandOutput,
  ActivateKeySigningKeyCommand,
} from "./commands/ActivateKeySigningKeyCommand";
import {
  type AssociateVPCWithHostedZoneCommandInput,
  type AssociateVPCWithHostedZoneCommandOutput,
  AssociateVPCWithHostedZoneCommand,
} from "./commands/AssociateVPCWithHostedZoneCommand";
import {
  type ChangeCidrCollectionCommandInput,
  type ChangeCidrCollectionCommandOutput,
  ChangeCidrCollectionCommand,
} from "./commands/ChangeCidrCollectionCommand";
import {
  type ChangeResourceRecordSetsCommandInput,
  type ChangeResourceRecordSetsCommandOutput,
  ChangeResourceRecordSetsCommand,
} from "./commands/ChangeResourceRecordSetsCommand";
import {
  type ChangeTagsForResourceCommandInput,
  type ChangeTagsForResourceCommandOutput,
  ChangeTagsForResourceCommand,
} from "./commands/ChangeTagsForResourceCommand";
import {
  type CreateCidrCollectionCommandInput,
  type CreateCidrCollectionCommandOutput,
  CreateCidrCollectionCommand,
} from "./commands/CreateCidrCollectionCommand";
import {
  type CreateHealthCheckCommandInput,
  type CreateHealthCheckCommandOutput,
  CreateHealthCheckCommand,
} from "./commands/CreateHealthCheckCommand";
import {
  type CreateHostedZoneCommandInput,
  type CreateHostedZoneCommandOutput,
  CreateHostedZoneCommand,
} from "./commands/CreateHostedZoneCommand";
import {
  type CreateKeySigningKeyCommandInput,
  type CreateKeySigningKeyCommandOutput,
  CreateKeySigningKeyCommand,
} from "./commands/CreateKeySigningKeyCommand";
import {
  type CreateQueryLoggingConfigCommandInput,
  type CreateQueryLoggingConfigCommandOutput,
  CreateQueryLoggingConfigCommand,
} from "./commands/CreateQueryLoggingConfigCommand";
import {
  type CreateReusableDelegationSetCommandInput,
  type CreateReusableDelegationSetCommandOutput,
  CreateReusableDelegationSetCommand,
} from "./commands/CreateReusableDelegationSetCommand";
import {
  type CreateTrafficPolicyCommandInput,
  type CreateTrafficPolicyCommandOutput,
  CreateTrafficPolicyCommand,
} from "./commands/CreateTrafficPolicyCommand";
import {
  type CreateTrafficPolicyInstanceCommandInput,
  type CreateTrafficPolicyInstanceCommandOutput,
  CreateTrafficPolicyInstanceCommand,
} from "./commands/CreateTrafficPolicyInstanceCommand";
import {
  type CreateTrafficPolicyVersionCommandInput,
  type CreateTrafficPolicyVersionCommandOutput,
  CreateTrafficPolicyVersionCommand,
} from "./commands/CreateTrafficPolicyVersionCommand";
import {
  type CreateVPCAssociationAuthorizationCommandInput,
  type CreateVPCAssociationAuthorizationCommandOutput,
  CreateVPCAssociationAuthorizationCommand,
} from "./commands/CreateVPCAssociationAuthorizationCommand";
import {
  type DeactivateKeySigningKeyCommandInput,
  type DeactivateKeySigningKeyCommandOutput,
  DeactivateKeySigningKeyCommand,
} from "./commands/DeactivateKeySigningKeyCommand";
import {
  type DeleteCidrCollectionCommandInput,
  type DeleteCidrCollectionCommandOutput,
  DeleteCidrCollectionCommand,
} from "./commands/DeleteCidrCollectionCommand";
import {
  type DeleteHealthCheckCommandInput,
  type DeleteHealthCheckCommandOutput,
  DeleteHealthCheckCommand,
} from "./commands/DeleteHealthCheckCommand";
import {
  type DeleteHostedZoneCommandInput,
  type DeleteHostedZoneCommandOutput,
  DeleteHostedZoneCommand,
} from "./commands/DeleteHostedZoneCommand";
import {
  type DeleteKeySigningKeyCommandInput,
  type DeleteKeySigningKeyCommandOutput,
  DeleteKeySigningKeyCommand,
} from "./commands/DeleteKeySigningKeyCommand";
import {
  type DeleteQueryLoggingConfigCommandInput,
  type DeleteQueryLoggingConfigCommandOutput,
  DeleteQueryLoggingConfigCommand,
} from "./commands/DeleteQueryLoggingConfigCommand";
import {
  type DeleteReusableDelegationSetCommandInput,
  type DeleteReusableDelegationSetCommandOutput,
  DeleteReusableDelegationSetCommand,
} from "./commands/DeleteReusableDelegationSetCommand";
import {
  type DeleteTrafficPolicyCommandInput,
  type DeleteTrafficPolicyCommandOutput,
  DeleteTrafficPolicyCommand,
} from "./commands/DeleteTrafficPolicyCommand";
import {
  type DeleteTrafficPolicyInstanceCommandInput,
  type DeleteTrafficPolicyInstanceCommandOutput,
  DeleteTrafficPolicyInstanceCommand,
} from "./commands/DeleteTrafficPolicyInstanceCommand";
import {
  type DeleteVPCAssociationAuthorizationCommandInput,
  type DeleteVPCAssociationAuthorizationCommandOutput,
  DeleteVPCAssociationAuthorizationCommand,
} from "./commands/DeleteVPCAssociationAuthorizationCommand";
import {
  type DisableHostedZoneDNSSECCommandInput,
  type DisableHostedZoneDNSSECCommandOutput,
  DisableHostedZoneDNSSECCommand,
} from "./commands/DisableHostedZoneDNSSECCommand";
import {
  type DisassociateVPCFromHostedZoneCommandInput,
  type DisassociateVPCFromHostedZoneCommandOutput,
  DisassociateVPCFromHostedZoneCommand,
} from "./commands/DisassociateVPCFromHostedZoneCommand";
import {
  type EnableHostedZoneDNSSECCommandInput,
  type EnableHostedZoneDNSSECCommandOutput,
  EnableHostedZoneDNSSECCommand,
} from "./commands/EnableHostedZoneDNSSECCommand";
import {
  type GetAccountLimitCommandInput,
  type GetAccountLimitCommandOutput,
  GetAccountLimitCommand,
} from "./commands/GetAccountLimitCommand";
import { type GetChangeCommandInput, type GetChangeCommandOutput, GetChangeCommand } from "./commands/GetChangeCommand";
import {
  type GetCheckerIpRangesCommandInput,
  type GetCheckerIpRangesCommandOutput,
  GetCheckerIpRangesCommand,
} from "./commands/GetCheckerIpRangesCommand";
import { type GetDNSSECCommandInput, type GetDNSSECCommandOutput, GetDNSSECCommand } from "./commands/GetDNSSECCommand";
import {
  type GetGeoLocationCommandInput,
  type GetGeoLocationCommandOutput,
  GetGeoLocationCommand,
} from "./commands/GetGeoLocationCommand";
import {
  type GetHealthCheckCommandInput,
  type GetHealthCheckCommandOutput,
  GetHealthCheckCommand,
} from "./commands/GetHealthCheckCommand";
import {
  type GetHealthCheckCountCommandInput,
  type GetHealthCheckCountCommandOutput,
  GetHealthCheckCountCommand,
} from "./commands/GetHealthCheckCountCommand";
import {
  type GetHealthCheckLastFailureReasonCommandInput,
  type GetHealthCheckLastFailureReasonCommandOutput,
  GetHealthCheckLastFailureReasonCommand,
} from "./commands/GetHealthCheckLastFailureReasonCommand";
import {
  type GetHealthCheckStatusCommandInput,
  type GetHealthCheckStatusCommandOutput,
  GetHealthCheckStatusCommand,
} from "./commands/GetHealthCheckStatusCommand";
import {
  type GetHostedZoneCommandInput,
  type GetHostedZoneCommandOutput,
  GetHostedZoneCommand,
} from "./commands/GetHostedZoneCommand";
import {
  type GetHostedZoneCountCommandInput,
  type GetHostedZoneCountCommandOutput,
  GetHostedZoneCountCommand,
} from "./commands/GetHostedZoneCountCommand";
import {
  type GetHostedZoneLimitCommandInput,
  type GetHostedZoneLimitCommandOutput,
  GetHostedZoneLimitCommand,
} from "./commands/GetHostedZoneLimitCommand";
import {
  type GetQueryLoggingConfigCommandInput,
  type GetQueryLoggingConfigCommandOutput,
  GetQueryLoggingConfigCommand,
} from "./commands/GetQueryLoggingConfigCommand";
import {
  type GetReusableDelegationSetCommandInput,
  type GetReusableDelegationSetCommandOutput,
  GetReusableDelegationSetCommand,
} from "./commands/GetReusableDelegationSetCommand";
import {
  type GetReusableDelegationSetLimitCommandInput,
  type GetReusableDelegationSetLimitCommandOutput,
  GetReusableDelegationSetLimitCommand,
} from "./commands/GetReusableDelegationSetLimitCommand";
import {
  type GetTrafficPolicyCommandInput,
  type GetTrafficPolicyCommandOutput,
  GetTrafficPolicyCommand,
} from "./commands/GetTrafficPolicyCommand";
import {
  type GetTrafficPolicyInstanceCommandInput,
  type GetTrafficPolicyInstanceCommandOutput,
  GetTrafficPolicyInstanceCommand,
} from "./commands/GetTrafficPolicyInstanceCommand";
import {
  type GetTrafficPolicyInstanceCountCommandInput,
  type GetTrafficPolicyInstanceCountCommandOutput,
  GetTrafficPolicyInstanceCountCommand,
} from "./commands/GetTrafficPolicyInstanceCountCommand";
import {
  type ListCidrBlocksCommandInput,
  type ListCidrBlocksCommandOutput,
  ListCidrBlocksCommand,
} from "./commands/ListCidrBlocksCommand";
import {
  type ListCidrCollectionsCommandInput,
  type ListCidrCollectionsCommandOutput,
  ListCidrCollectionsCommand,
} from "./commands/ListCidrCollectionsCommand";
import {
  type ListCidrLocationsCommandInput,
  type ListCidrLocationsCommandOutput,
  ListCidrLocationsCommand,
} from "./commands/ListCidrLocationsCommand";
import {
  type ListGeoLocationsCommandInput,
  type ListGeoLocationsCommandOutput,
  ListGeoLocationsCommand,
} from "./commands/ListGeoLocationsCommand";
import {
  type ListHealthChecksCommandInput,
  type ListHealthChecksCommandOutput,
  ListHealthChecksCommand,
} from "./commands/ListHealthChecksCommand";
import {
  type ListHostedZonesByNameCommandInput,
  type ListHostedZonesByNameCommandOutput,
  ListHostedZonesByNameCommand,
} from "./commands/ListHostedZonesByNameCommand";
import {
  type ListHostedZonesByVPCCommandInput,
  type ListHostedZonesByVPCCommandOutput,
  ListHostedZonesByVPCCommand,
} from "./commands/ListHostedZonesByVPCCommand";
import {
  type ListHostedZonesCommandInput,
  type ListHostedZonesCommandOutput,
  ListHostedZonesCommand,
} from "./commands/ListHostedZonesCommand";
import {
  type ListQueryLoggingConfigsCommandInput,
  type ListQueryLoggingConfigsCommandOutput,
  ListQueryLoggingConfigsCommand,
} from "./commands/ListQueryLoggingConfigsCommand";
import {
  type ListResourceRecordSetsCommandInput,
  type ListResourceRecordSetsCommandOutput,
  ListResourceRecordSetsCommand,
} from "./commands/ListResourceRecordSetsCommand";
import {
  type ListReusableDelegationSetsCommandInput,
  type ListReusableDelegationSetsCommandOutput,
  ListReusableDelegationSetsCommand,
} from "./commands/ListReusableDelegationSetsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTagsForResourcesCommandInput,
  type ListTagsForResourcesCommandOutput,
  ListTagsForResourcesCommand,
} from "./commands/ListTagsForResourcesCommand";
import {
  type ListTrafficPoliciesCommandInput,
  type ListTrafficPoliciesCommandOutput,
  ListTrafficPoliciesCommand,
} from "./commands/ListTrafficPoliciesCommand";
import {
  type ListTrafficPolicyInstancesByHostedZoneCommandInput,
  type ListTrafficPolicyInstancesByHostedZoneCommandOutput,
  ListTrafficPolicyInstancesByHostedZoneCommand,
} from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import {
  type ListTrafficPolicyInstancesByPolicyCommandInput,
  type ListTrafficPolicyInstancesByPolicyCommandOutput,
  ListTrafficPolicyInstancesByPolicyCommand,
} from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import {
  type ListTrafficPolicyInstancesCommandInput,
  type ListTrafficPolicyInstancesCommandOutput,
  ListTrafficPolicyInstancesCommand,
} from "./commands/ListTrafficPolicyInstancesCommand";
import {
  type ListTrafficPolicyVersionsCommandInput,
  type ListTrafficPolicyVersionsCommandOutput,
  ListTrafficPolicyVersionsCommand,
} from "./commands/ListTrafficPolicyVersionsCommand";
import {
  type ListVPCAssociationAuthorizationsCommandInput,
  type ListVPCAssociationAuthorizationsCommandOutput,
  ListVPCAssociationAuthorizationsCommand,
} from "./commands/ListVPCAssociationAuthorizationsCommand";
import {
  type TestDNSAnswerCommandInput,
  type TestDNSAnswerCommandOutput,
  TestDNSAnswerCommand,
} from "./commands/TestDNSAnswerCommand";
import {
  type UpdateHealthCheckCommandInput,
  type UpdateHealthCheckCommandOutput,
  UpdateHealthCheckCommand,
} from "./commands/UpdateHealthCheckCommand";
import {
  type UpdateHostedZoneCommentCommandInput,
  type UpdateHostedZoneCommentCommandOutput,
  UpdateHostedZoneCommentCommand,
} from "./commands/UpdateHostedZoneCommentCommand";
import {
  type UpdateHostedZoneFeaturesCommandInput,
  type UpdateHostedZoneFeaturesCommandOutput,
  UpdateHostedZoneFeaturesCommand,
} from "./commands/UpdateHostedZoneFeaturesCommand";
import {
  type UpdateTrafficPolicyCommentCommandInput,
  type UpdateTrafficPolicyCommentCommandOutput,
  UpdateTrafficPolicyCommentCommand,
} from "./commands/UpdateTrafficPolicyCommentCommand";
import {
  type UpdateTrafficPolicyInstanceCommandInput,
  type UpdateTrafficPolicyInstanceCommandOutput,
  UpdateTrafficPolicyInstanceCommand,
} from "./commands/UpdateTrafficPolicyInstanceCommand";
import type { Route53ServiceException } from "./models/Route53ServiceException";
import { paginateListCidrBlocks } from "./pagination/ListCidrBlocksPaginator";
import { paginateListCidrCollections } from "./pagination/ListCidrCollectionsPaginator";
import { paginateListCidrLocations } from "./pagination/ListCidrLocationsPaginator";
import { paginateListHealthChecks } from "./pagination/ListHealthChecksPaginator";
import { paginateListHostedZones } from "./pagination/ListHostedZonesPaginator";
import { paginateListQueryLoggingConfigs } from "./pagination/ListQueryLoggingConfigsPaginator";
import { Route53Client } from "./Route53Client";
import { waitUntilResourceRecordSetsChanged } from "./waiters/waitForResourceRecordSetsChanged";

const commands = {
  ActivateKeySigningKeyCommand,
  AssociateVPCWithHostedZoneCommand,
  ChangeCidrCollectionCommand,
  ChangeResourceRecordSetsCommand,
  ChangeTagsForResourceCommand,
  CreateCidrCollectionCommand,
  CreateHealthCheckCommand,
  CreateHostedZoneCommand,
  CreateKeySigningKeyCommand,
  CreateQueryLoggingConfigCommand,
  CreateReusableDelegationSetCommand,
  CreateTrafficPolicyCommand,
  CreateTrafficPolicyInstanceCommand,
  CreateTrafficPolicyVersionCommand,
  CreateVPCAssociationAuthorizationCommand,
  DeactivateKeySigningKeyCommand,
  DeleteCidrCollectionCommand,
  DeleteHealthCheckCommand,
  DeleteHostedZoneCommand,
  DeleteKeySigningKeyCommand,
  DeleteQueryLoggingConfigCommand,
  DeleteReusableDelegationSetCommand,
  DeleteTrafficPolicyCommand,
  DeleteTrafficPolicyInstanceCommand,
  DeleteVPCAssociationAuthorizationCommand,
  DisableHostedZoneDNSSECCommand,
  DisassociateVPCFromHostedZoneCommand,
  EnableHostedZoneDNSSECCommand,
  GetAccountLimitCommand,
  GetChangeCommand,
  GetCheckerIpRangesCommand,
  GetDNSSECCommand,
  GetGeoLocationCommand,
  GetHealthCheckCommand,
  GetHealthCheckCountCommand,
  GetHealthCheckLastFailureReasonCommand,
  GetHealthCheckStatusCommand,
  GetHostedZoneCommand,
  GetHostedZoneCountCommand,
  GetHostedZoneLimitCommand,
  GetQueryLoggingConfigCommand,
  GetReusableDelegationSetCommand,
  GetReusableDelegationSetLimitCommand,
  GetTrafficPolicyCommand,
  GetTrafficPolicyInstanceCommand,
  GetTrafficPolicyInstanceCountCommand,
  ListCidrBlocksCommand,
  ListCidrCollectionsCommand,
  ListCidrLocationsCommand,
  ListGeoLocationsCommand,
  ListHealthChecksCommand,
  ListHostedZonesCommand,
  ListHostedZonesByNameCommand,
  ListHostedZonesByVPCCommand,
  ListQueryLoggingConfigsCommand,
  ListResourceRecordSetsCommand,
  ListReusableDelegationSetsCommand,
  ListTagsForResourceCommand,
  ListTagsForResourcesCommand,
  ListTrafficPoliciesCommand,
  ListTrafficPolicyInstancesCommand,
  ListTrafficPolicyInstancesByHostedZoneCommand,
  ListTrafficPolicyInstancesByPolicyCommand,
  ListTrafficPolicyVersionsCommand,
  ListVPCAssociationAuthorizationsCommand,
  TestDNSAnswerCommand,
  UpdateHealthCheckCommand,
  UpdateHostedZoneCommentCommand,
  UpdateHostedZoneFeaturesCommand,
  UpdateTrafficPolicyCommentCommand,
  UpdateTrafficPolicyInstanceCommand,
};
const paginators = {
  paginateListCidrBlocks,
  paginateListCidrCollections,
  paginateListCidrLocations,
  paginateListHealthChecks,
  paginateListHostedZones,
  paginateListQueryLoggingConfigs,
};
const waiters = {
  waitUntilResourceRecordSetsChanged,
};

/**
 * @public
 */
export interface Route53RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Route53 {
  /**
   * @see {@link ActivateKeySigningKeyCommand}
   */
  activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    options?: Route53RequestOptions
  ): Promise<ActivateKeySigningKeyCommandOutput>;
  activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    cb: (err: any, data?: ActivateKeySigningKeyCommandOutput) => void
  ): void;
  activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ActivateKeySigningKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateVPCWithHostedZoneCommand}
   */
  associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    options?: Route53RequestOptions
  ): Promise<AssociateVPCWithHostedZoneCommandOutput>;
  associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    cb: (err: any, data?: AssociateVPCWithHostedZoneCommandOutput) => void
  ): void;
  associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: AssociateVPCWithHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeCidrCollectionCommand}
   */
  changeCidrCollection(
    args: ChangeCidrCollectionCommandInput,
    options?: Route53RequestOptions
  ): Promise<ChangeCidrCollectionCommandOutput>;
  changeCidrCollection(
    args: ChangeCidrCollectionCommandInput,
    cb: (err: any, data?: ChangeCidrCollectionCommandOutput) => void
  ): void;
  changeCidrCollection(
    args: ChangeCidrCollectionCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ChangeCidrCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeResourceRecordSetsCommand}
   */
  changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ChangeResourceRecordSetsCommandOutput>;
  changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    cb: (err: any, data?: ChangeResourceRecordSetsCommandOutput) => void
  ): void;
  changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ChangeResourceRecordSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeTagsForResourceCommand}
   */
  changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    options?: Route53RequestOptions
  ): Promise<ChangeTagsForResourceCommandOutput>;
  changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    cb: (err: any, data?: ChangeTagsForResourceCommandOutput) => void
  ): void;
  changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ChangeTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCidrCollectionCommand}
   */
  createCidrCollection(
    args: CreateCidrCollectionCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateCidrCollectionCommandOutput>;
  createCidrCollection(
    args: CreateCidrCollectionCommandInput,
    cb: (err: any, data?: CreateCidrCollectionCommandOutput) => void
  ): void;
  createCidrCollection(
    args: CreateCidrCollectionCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateCidrCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHealthCheckCommand}
   */
  createHealthCheck(
    args: CreateHealthCheckCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateHealthCheckCommandOutput>;
  createHealthCheck(
    args: CreateHealthCheckCommandInput,
    cb: (err: any, data?: CreateHealthCheckCommandOutput) => void
  ): void;
  createHealthCheck(
    args: CreateHealthCheckCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHostedZoneCommand}
   */
  createHostedZone(
    args: CreateHostedZoneCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateHostedZoneCommandOutput>;
  createHostedZone(
    args: CreateHostedZoneCommandInput,
    cb: (err: any, data?: CreateHostedZoneCommandOutput) => void
  ): void;
  createHostedZone(
    args: CreateHostedZoneCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeySigningKeyCommand}
   */
  createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateKeySigningKeyCommandOutput>;
  createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    cb: (err: any, data?: CreateKeySigningKeyCommandOutput) => void
  ): void;
  createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateKeySigningKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueryLoggingConfigCommand}
   */
  createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateQueryLoggingConfigCommandOutput>;
  createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    cb: (err: any, data?: CreateQueryLoggingConfigCommandOutput) => void
  ): void;
  createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateQueryLoggingConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReusableDelegationSetCommand}
   */
  createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateReusableDelegationSetCommandOutput>;
  createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    cb: (err: any, data?: CreateReusableDelegationSetCommandOutput) => void
  ): void;
  createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateReusableDelegationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficPolicyCommand}
   */
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateTrafficPolicyCommandOutput>;
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): void;
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficPolicyInstanceCommand}
   */
  createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateTrafficPolicyInstanceCommandOutput>;
  createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyInstanceCommandOutput) => void
  ): void;
  createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateTrafficPolicyInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficPolicyVersionCommand}
   */
  createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateTrafficPolicyVersionCommandOutput>;
  createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyVersionCommandOutput) => void
  ): void;
  createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateTrafficPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVPCAssociationAuthorizationCommand}
   */
  createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    options?: Route53RequestOptions
  ): Promise<CreateVPCAssociationAuthorizationCommandOutput>;
  createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    cb: (err: any, data?: CreateVPCAssociationAuthorizationCommandOutput) => void
  ): void;
  createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: CreateVPCAssociationAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateKeySigningKeyCommand}
   */
  deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeactivateKeySigningKeyCommandOutput>;
  deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    cb: (err: any, data?: DeactivateKeySigningKeyCommandOutput) => void
  ): void;
  deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeactivateKeySigningKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCidrCollectionCommand}
   */
  deleteCidrCollection(
    args: DeleteCidrCollectionCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteCidrCollectionCommandOutput>;
  deleteCidrCollection(
    args: DeleteCidrCollectionCommandInput,
    cb: (err: any, data?: DeleteCidrCollectionCommandOutput) => void
  ): void;
  deleteCidrCollection(
    args: DeleteCidrCollectionCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteCidrCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHealthCheckCommand}
   */
  deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteHealthCheckCommandOutput>;
  deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    cb: (err: any, data?: DeleteHealthCheckCommandOutput) => void
  ): void;
  deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHostedZoneCommand}
   */
  deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteHostedZoneCommandOutput>;
  deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    cb: (err: any, data?: DeleteHostedZoneCommandOutput) => void
  ): void;
  deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeySigningKeyCommand}
   */
  deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteKeySigningKeyCommandOutput>;
  deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    cb: (err: any, data?: DeleteKeySigningKeyCommandOutput) => void
  ): void;
  deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteKeySigningKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueryLoggingConfigCommand}
   */
  deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteQueryLoggingConfigCommandOutput>;
  deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    cb: (err: any, data?: DeleteQueryLoggingConfigCommandOutput) => void
  ): void;
  deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteQueryLoggingConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReusableDelegationSetCommand}
   */
  deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteReusableDelegationSetCommandOutput>;
  deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    cb: (err: any, data?: DeleteReusableDelegationSetCommandOutput) => void
  ): void;
  deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteReusableDelegationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficPolicyCommand}
   */
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteTrafficPolicyCommandOutput>;
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    cb: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): void;
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficPolicyInstanceCommand}
   */
  deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteTrafficPolicyInstanceCommandOutput>;
  deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: DeleteTrafficPolicyInstanceCommandOutput) => void
  ): void;
  deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteTrafficPolicyInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVPCAssociationAuthorizationCommand}
   */
  deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    options?: Route53RequestOptions
  ): Promise<DeleteVPCAssociationAuthorizationCommandOutput>;
  deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    cb: (err: any, data?: DeleteVPCAssociationAuthorizationCommandOutput) => void
  ): void;
  deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DeleteVPCAssociationAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableHostedZoneDNSSECCommand}
   */
  disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    options?: Route53RequestOptions
  ): Promise<DisableHostedZoneDNSSECCommandOutput>;
  disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    cb: (err: any, data?: DisableHostedZoneDNSSECCommandOutput) => void
  ): void;
  disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DisableHostedZoneDNSSECCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateVPCFromHostedZoneCommand}
   */
  disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    options?: Route53RequestOptions
  ): Promise<DisassociateVPCFromHostedZoneCommandOutput>;
  disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    cb: (err: any, data?: DisassociateVPCFromHostedZoneCommandOutput) => void
  ): void;
  disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: DisassociateVPCFromHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableHostedZoneDNSSECCommand}
   */
  enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    options?: Route53RequestOptions
  ): Promise<EnableHostedZoneDNSSECCommandOutput>;
  enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    cb: (err: any, data?: EnableHostedZoneDNSSECCommandOutput) => void
  ): void;
  enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: EnableHostedZoneDNSSECCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountLimitCommand}
   */
  getAccountLimit(
    args: GetAccountLimitCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetAccountLimitCommandOutput>;
  getAccountLimit(
    args: GetAccountLimitCommandInput,
    cb: (err: any, data?: GetAccountLimitCommandOutput) => void
  ): void;
  getAccountLimit(
    args: GetAccountLimitCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetAccountLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChangeCommand}
   */
  getChange(
    args: GetChangeCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetChangeCommandOutput>;
  getChange(
    args: GetChangeCommandInput,
    cb: (err: any, data?: GetChangeCommandOutput) => void
  ): void;
  getChange(
    args: GetChangeCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCheckerIpRangesCommand}
   */
  getCheckerIpRanges(): Promise<GetCheckerIpRangesCommandOutput>;
  getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetCheckerIpRangesCommandOutput>;
  getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    cb: (err: any, data?: GetCheckerIpRangesCommandOutput) => void
  ): void;
  getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetCheckerIpRangesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDNSSECCommand}
   */
  getDNSSEC(
    args: GetDNSSECCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetDNSSECCommandOutput>;
  getDNSSEC(
    args: GetDNSSECCommandInput,
    cb: (err: any, data?: GetDNSSECCommandOutput) => void
  ): void;
  getDNSSEC(
    args: GetDNSSECCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetDNSSECCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGeoLocationCommand}
   */
  getGeoLocation(): Promise<GetGeoLocationCommandOutput>;
  getGeoLocation(
    args: GetGeoLocationCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetGeoLocationCommandOutput>;
  getGeoLocation(
    args: GetGeoLocationCommandInput,
    cb: (err: any, data?: GetGeoLocationCommandOutput) => void
  ): void;
  getGeoLocation(
    args: GetGeoLocationCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetGeoLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthCheckCommand}
   */
  getHealthCheck(
    args: GetHealthCheckCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetHealthCheckCommandOutput>;
  getHealthCheck(
    args: GetHealthCheckCommandInput,
    cb: (err: any, data?: GetHealthCheckCommandOutput) => void
  ): void;
  getHealthCheck(
    args: GetHealthCheckCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthCheckCountCommand}
   */
  getHealthCheckCount(): Promise<GetHealthCheckCountCommandOutput>;
  getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetHealthCheckCountCommandOutput>;
  getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    cb: (err: any, data?: GetHealthCheckCountCommandOutput) => void
  ): void;
  getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetHealthCheckCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthCheckLastFailureReasonCommand}
   */
  getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetHealthCheckLastFailureReasonCommandOutput>;
  getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    cb: (err: any, data?: GetHealthCheckLastFailureReasonCommandOutput) => void
  ): void;
  getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetHealthCheckLastFailureReasonCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthCheckStatusCommand}
   */
  getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetHealthCheckStatusCommandOutput>;
  getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    cb: (err: any, data?: GetHealthCheckStatusCommandOutput) => void
  ): void;
  getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetHealthCheckStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostedZoneCommand}
   */
  getHostedZone(
    args: GetHostedZoneCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetHostedZoneCommandOutput>;
  getHostedZone(
    args: GetHostedZoneCommandInput,
    cb: (err: any, data?: GetHostedZoneCommandOutput) => void
  ): void;
  getHostedZone(
    args: GetHostedZoneCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostedZoneCountCommand}
   */
  getHostedZoneCount(): Promise<GetHostedZoneCountCommandOutput>;
  getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetHostedZoneCountCommandOutput>;
  getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    cb: (err: any, data?: GetHostedZoneCountCommandOutput) => void
  ): void;
  getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetHostedZoneCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostedZoneLimitCommand}
   */
  getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetHostedZoneLimitCommandOutput>;
  getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    cb: (err: any, data?: GetHostedZoneLimitCommandOutput) => void
  ): void;
  getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetHostedZoneLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryLoggingConfigCommand}
   */
  getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetQueryLoggingConfigCommandOutput>;
  getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    cb: (err: any, data?: GetQueryLoggingConfigCommandOutput) => void
  ): void;
  getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetQueryLoggingConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReusableDelegationSetCommand}
   */
  getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetReusableDelegationSetCommandOutput>;
  getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    cb: (err: any, data?: GetReusableDelegationSetCommandOutput) => void
  ): void;
  getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetReusableDelegationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReusableDelegationSetLimitCommand}
   */
  getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetReusableDelegationSetLimitCommandOutput>;
  getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    cb: (err: any, data?: GetReusableDelegationSetLimitCommandOutput) => void
  ): void;
  getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetReusableDelegationSetLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrafficPolicyCommand}
   */
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetTrafficPolicyCommandOutput>;
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    cb: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): void;
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrafficPolicyInstanceCommand}
   */
  getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetTrafficPolicyInstanceCommandOutput>;
  getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: GetTrafficPolicyInstanceCommandOutput) => void
  ): void;
  getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetTrafficPolicyInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrafficPolicyInstanceCountCommand}
   */
  getTrafficPolicyInstanceCount(): Promise<GetTrafficPolicyInstanceCountCommandOutput>;
  getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    options?: Route53RequestOptions
  ): Promise<GetTrafficPolicyInstanceCountCommandOutput>;
  getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    cb: (err: any, data?: GetTrafficPolicyInstanceCountCommandOutput) => void
  ): void;
  getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: GetTrafficPolicyInstanceCountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCidrBlocksCommand}
   */
  listCidrBlocks(
    args: ListCidrBlocksCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListCidrBlocksCommandOutput>;
  listCidrBlocks(
    args: ListCidrBlocksCommandInput,
    cb: (err: any, data?: ListCidrBlocksCommandOutput) => void
  ): void;
  listCidrBlocks(
    args: ListCidrBlocksCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListCidrBlocksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCidrCollectionsCommand}
   */
  listCidrCollections(): Promise<ListCidrCollectionsCommandOutput>;
  listCidrCollections(
    args: ListCidrCollectionsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListCidrCollectionsCommandOutput>;
  listCidrCollections(
    args: ListCidrCollectionsCommandInput,
    cb: (err: any, data?: ListCidrCollectionsCommandOutput) => void
  ): void;
  listCidrCollections(
    args: ListCidrCollectionsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListCidrCollectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCidrLocationsCommand}
   */
  listCidrLocations(
    args: ListCidrLocationsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListCidrLocationsCommandOutput>;
  listCidrLocations(
    args: ListCidrLocationsCommandInput,
    cb: (err: any, data?: ListCidrLocationsCommandOutput) => void
  ): void;
  listCidrLocations(
    args: ListCidrLocationsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListCidrLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGeoLocationsCommand}
   */
  listGeoLocations(): Promise<ListGeoLocationsCommandOutput>;
  listGeoLocations(
    args: ListGeoLocationsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListGeoLocationsCommandOutput>;
  listGeoLocations(
    args: ListGeoLocationsCommandInput,
    cb: (err: any, data?: ListGeoLocationsCommandOutput) => void
  ): void;
  listGeoLocations(
    args: ListGeoLocationsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListGeoLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHealthChecksCommand}
   */
  listHealthChecks(): Promise<ListHealthChecksCommandOutput>;
  listHealthChecks(
    args: ListHealthChecksCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListHealthChecksCommandOutput>;
  listHealthChecks(
    args: ListHealthChecksCommandInput,
    cb: (err: any, data?: ListHealthChecksCommandOutput) => void
  ): void;
  listHealthChecks(
    args: ListHealthChecksCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListHealthChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostedZonesCommand}
   */
  listHostedZones(): Promise<ListHostedZonesCommandOutput>;
  listHostedZones(
    args: ListHostedZonesCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListHostedZonesCommandOutput>;
  listHostedZones(
    args: ListHostedZonesCommandInput,
    cb: (err: any, data?: ListHostedZonesCommandOutput) => void
  ): void;
  listHostedZones(
    args: ListHostedZonesCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListHostedZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostedZonesByNameCommand}
   */
  listHostedZonesByName(): Promise<ListHostedZonesByNameCommandOutput>;
  listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListHostedZonesByNameCommandOutput>;
  listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    cb: (err: any, data?: ListHostedZonesByNameCommandOutput) => void
  ): void;
  listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListHostedZonesByNameCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostedZonesByVPCCommand}
   */
  listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListHostedZonesByVPCCommandOutput>;
  listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    cb: (err: any, data?: ListHostedZonesByVPCCommandOutput) => void
  ): void;
  listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListHostedZonesByVPCCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueryLoggingConfigsCommand}
   */
  listQueryLoggingConfigs(): Promise<ListQueryLoggingConfigsCommandOutput>;
  listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListQueryLoggingConfigsCommandOutput>;
  listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    cb: (err: any, data?: ListQueryLoggingConfigsCommandOutput) => void
  ): void;
  listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListQueryLoggingConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceRecordSetsCommand}
   */
  listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListResourceRecordSetsCommandOutput>;
  listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    cb: (err: any, data?: ListResourceRecordSetsCommandOutput) => void
  ): void;
  listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListResourceRecordSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReusableDelegationSetsCommand}
   */
  listReusableDelegationSets(): Promise<ListReusableDelegationSetsCommandOutput>;
  listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListReusableDelegationSetsCommandOutput>;
  listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    cb: (err: any, data?: ListReusableDelegationSetsCommandOutput) => void
  ): void;
  listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListReusableDelegationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourcesCommand}
   */
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListTagsForResourcesCommandOutput>;
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPoliciesCommand}
   */
  listTrafficPolicies(): Promise<ListTrafficPoliciesCommandOutput>;
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListTrafficPoliciesCommandOutput>;
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    cb: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): void;
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPolicyInstancesCommand}
   */
  listTrafficPolicyInstances(): Promise<ListTrafficPolicyInstancesCommandOutput>;
  listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListTrafficPolicyInstancesCommandOutput>;
  listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesCommandOutput) => void
  ): void;
  listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPolicyInstancesByHostedZoneCommand}
   */
  listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput>;
  listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneCommandOutput) => void
  ): void;
  listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPolicyInstancesByPolicyCommand}
   */
  listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput>;
  listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesByPolicyCommandOutput) => void
  ): void;
  listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesByPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPolicyVersionsCommand}
   */
  listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListTrafficPolicyVersionsCommandOutput>;
  listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    cb: (err: any, data?: ListTrafficPolicyVersionsCommandOutput) => void
  ): void;
  listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListTrafficPolicyVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVPCAssociationAuthorizationsCommand}
   */
  listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    options?: Route53RequestOptions
  ): Promise<ListVPCAssociationAuthorizationsCommandOutput>;
  listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    cb: (err: any, data?: ListVPCAssociationAuthorizationsCommandOutput) => void
  ): void;
  listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: ListVPCAssociationAuthorizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link TestDNSAnswerCommand}
   */
  testDNSAnswer(
    args: TestDNSAnswerCommandInput,
    options?: Route53RequestOptions
  ): Promise<TestDNSAnswerCommandOutput>;
  testDNSAnswer(
    args: TestDNSAnswerCommandInput,
    cb: (err: any, data?: TestDNSAnswerCommandOutput) => void
  ): void;
  testDNSAnswer(
    args: TestDNSAnswerCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: TestDNSAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHealthCheckCommand}
   */
  updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    options?: Route53RequestOptions
  ): Promise<UpdateHealthCheckCommandOutput>;
  updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    cb: (err: any, data?: UpdateHealthCheckCommandOutput) => void
  ): void;
  updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: UpdateHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHostedZoneCommentCommand}
   */
  updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    options?: Route53RequestOptions
  ): Promise<UpdateHostedZoneCommentCommandOutput>;
  updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    cb: (err: any, data?: UpdateHostedZoneCommentCommandOutput) => void
  ): void;
  updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: UpdateHostedZoneCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHostedZoneFeaturesCommand}
   */
  updateHostedZoneFeatures(
    args: UpdateHostedZoneFeaturesCommandInput,
    options?: Route53RequestOptions
  ): Promise<UpdateHostedZoneFeaturesCommandOutput>;
  updateHostedZoneFeatures(
    args: UpdateHostedZoneFeaturesCommandInput,
    cb: (err: any, data?: UpdateHostedZoneFeaturesCommandOutput) => void
  ): void;
  updateHostedZoneFeatures(
    args: UpdateHostedZoneFeaturesCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: UpdateHostedZoneFeaturesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrafficPolicyCommentCommand}
   */
  updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    options?: Route53RequestOptions
  ): Promise<UpdateTrafficPolicyCommentCommandOutput>;
  updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    cb: (err: any, data?: UpdateTrafficPolicyCommentCommandOutput) => void
  ): void;
  updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: UpdateTrafficPolicyCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrafficPolicyInstanceCommand}
   */
  updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    options?: Route53RequestOptions
  ): Promise<UpdateTrafficPolicyInstanceCommandOutput>;
  updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: UpdateTrafficPolicyInstanceCommandOutput) => void
  ): void;
  updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    options: Route53RequestOptions,
    cb: (err: any, data?: UpdateTrafficPolicyInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCidrBlocksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCidrBlocksCommandOutput}.
   */
  paginateListCidrBlocks(
    args: ListCidrBlocksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCidrBlocksCommandOutput>;

  /**
   * @see {@link ListCidrCollectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCidrCollectionsCommandOutput}.
   */
  paginateListCidrCollections(
    args?: ListCidrCollectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCidrCollectionsCommandOutput>;

  /**
   * @see {@link ListCidrLocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCidrLocationsCommandOutput}.
   */
  paginateListCidrLocations(
    args: ListCidrLocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCidrLocationsCommandOutput>;

  /**
   * @see {@link ListHealthChecksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHealthChecksCommandOutput}.
   */
  paginateListHealthChecks(
    args?: ListHealthChecksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHealthChecksCommandOutput>;

  /**
   * @see {@link ListHostedZonesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHostedZonesCommandOutput}.
   */
  paginateListHostedZones(
    args?: ListHostedZonesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHostedZonesCommandOutput>;

  /**
   * @see {@link ListQueryLoggingConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueryLoggingConfigsCommandOutput}.
   */
  paginateListQueryLoggingConfigs(
    args?: ListQueryLoggingConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueryLoggingConfigsCommandOutput>;

  /**
   * @see {@link GetChangeCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilResourceRecordSetsChanged(
    args: GetChangeCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Route53>, "client">
  ): Promise<WaiterResult<GetChangeCommandOutput>>;
}

/**
 * <p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web
 * 			service.</p>
 *          <p>You can use Route 53 to:</p>
 *          <ul>
 *             <li>
 *                <p>Register domain names.</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-domain-registration.html">How domain registration works</a>.</p>
 *             </li>
 *             <li>
 *                <p>Route internet traffic to the resources for your domain</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">How internet traffic is routed to your website or web application</a>.</p>
 *             </li>
 *             <li>
 *                <p>Check the health of your resources.</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-health-checks.html">How Route 53 checks the health of your resources</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class Route53 extends Route53Client implements Route53 {}
createAggregatedClient(commands, Route53, { paginators, waiters });
