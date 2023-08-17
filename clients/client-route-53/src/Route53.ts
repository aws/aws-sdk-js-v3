// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ActivateKeySigningKeyCommand,
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
} from "./commands/ActivateKeySigningKeyCommand";
import {
  AssociateVPCWithHostedZoneCommand,
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "./commands/AssociateVPCWithHostedZoneCommand";
import {
  ChangeCidrCollectionCommand,
  ChangeCidrCollectionCommandInput,
  ChangeCidrCollectionCommandOutput,
} from "./commands/ChangeCidrCollectionCommand";
import {
  ChangeResourceRecordSetsCommand,
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "./commands/ChangeResourceRecordSetsCommand";
import {
  ChangeTagsForResourceCommand,
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "./commands/ChangeTagsForResourceCommand";
import {
  CreateCidrCollectionCommand,
  CreateCidrCollectionCommandInput,
  CreateCidrCollectionCommandOutput,
} from "./commands/CreateCidrCollectionCommand";
import {
  CreateHealthCheckCommand,
  CreateHealthCheckCommandInput,
  CreateHealthCheckCommandOutput,
} from "./commands/CreateHealthCheckCommand";
import {
  CreateHostedZoneCommand,
  CreateHostedZoneCommandInput,
  CreateHostedZoneCommandOutput,
} from "./commands/CreateHostedZoneCommand";
import {
  CreateKeySigningKeyCommand,
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
} from "./commands/CreateKeySigningKeyCommand";
import {
  CreateQueryLoggingConfigCommand,
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
} from "./commands/CreateQueryLoggingConfigCommand";
import {
  CreateReusableDelegationSetCommand,
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
} from "./commands/CreateReusableDelegationSetCommand";
import {
  CreateTrafficPolicyCommand,
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand";
import {
  CreateTrafficPolicyInstanceCommand,
  CreateTrafficPolicyInstanceCommandInput,
  CreateTrafficPolicyInstanceCommandOutput,
} from "./commands/CreateTrafficPolicyInstanceCommand";
import {
  CreateTrafficPolicyVersionCommand,
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
} from "./commands/CreateTrafficPolicyVersionCommand";
import {
  CreateVPCAssociationAuthorizationCommand,
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
} from "./commands/CreateVPCAssociationAuthorizationCommand";
import {
  DeactivateKeySigningKeyCommand,
  DeactivateKeySigningKeyCommandInput,
  DeactivateKeySigningKeyCommandOutput,
} from "./commands/DeactivateKeySigningKeyCommand";
import {
  DeleteCidrCollectionCommand,
  DeleteCidrCollectionCommandInput,
  DeleteCidrCollectionCommandOutput,
} from "./commands/DeleteCidrCollectionCommand";
import {
  DeleteHealthCheckCommand,
  DeleteHealthCheckCommandInput,
  DeleteHealthCheckCommandOutput,
} from "./commands/DeleteHealthCheckCommand";
import {
  DeleteHostedZoneCommand,
  DeleteHostedZoneCommandInput,
  DeleteHostedZoneCommandOutput,
} from "./commands/DeleteHostedZoneCommand";
import {
  DeleteKeySigningKeyCommand,
  DeleteKeySigningKeyCommandInput,
  DeleteKeySigningKeyCommandOutput,
} from "./commands/DeleteKeySigningKeyCommand";
import {
  DeleteQueryLoggingConfigCommand,
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
} from "./commands/DeleteQueryLoggingConfigCommand";
import {
  DeleteReusableDelegationSetCommand,
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
} from "./commands/DeleteReusableDelegationSetCommand";
import {
  DeleteTrafficPolicyCommand,
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand";
import {
  DeleteTrafficPolicyInstanceCommand,
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
} from "./commands/DeleteTrafficPolicyInstanceCommand";
import {
  DeleteVPCAssociationAuthorizationCommand,
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
} from "./commands/DeleteVPCAssociationAuthorizationCommand";
import {
  DisableHostedZoneDNSSECCommand,
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
} from "./commands/DisableHostedZoneDNSSECCommand";
import {
  DisassociateVPCFromHostedZoneCommand,
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
} from "./commands/DisassociateVPCFromHostedZoneCommand";
import {
  EnableHostedZoneDNSSECCommand,
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
} from "./commands/EnableHostedZoneDNSSECCommand";
import {
  GetAccountLimitCommand,
  GetAccountLimitCommandInput,
  GetAccountLimitCommandOutput,
} from "./commands/GetAccountLimitCommand";
import { GetChangeCommand, GetChangeCommandInput, GetChangeCommandOutput } from "./commands/GetChangeCommand";
import {
  GetCheckerIpRangesCommand,
  GetCheckerIpRangesCommandInput,
  GetCheckerIpRangesCommandOutput,
} from "./commands/GetCheckerIpRangesCommand";
import { GetDNSSECCommand, GetDNSSECCommandInput, GetDNSSECCommandOutput } from "./commands/GetDNSSECCommand";
import {
  GetGeoLocationCommand,
  GetGeoLocationCommandInput,
  GetGeoLocationCommandOutput,
} from "./commands/GetGeoLocationCommand";
import {
  GetHealthCheckCommand,
  GetHealthCheckCommandInput,
  GetHealthCheckCommandOutput,
} from "./commands/GetHealthCheckCommand";
import {
  GetHealthCheckCountCommand,
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
} from "./commands/GetHealthCheckCountCommand";
import {
  GetHealthCheckLastFailureReasonCommand,
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
} from "./commands/GetHealthCheckLastFailureReasonCommand";
import {
  GetHealthCheckStatusCommand,
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
} from "./commands/GetHealthCheckStatusCommand";
import {
  GetHostedZoneCommand,
  GetHostedZoneCommandInput,
  GetHostedZoneCommandOutput,
} from "./commands/GetHostedZoneCommand";
import {
  GetHostedZoneCountCommand,
  GetHostedZoneCountCommandInput,
  GetHostedZoneCountCommandOutput,
} from "./commands/GetHostedZoneCountCommand";
import {
  GetHostedZoneLimitCommand,
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
} from "./commands/GetHostedZoneLimitCommand";
import {
  GetQueryLoggingConfigCommand,
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
} from "./commands/GetQueryLoggingConfigCommand";
import {
  GetReusableDelegationSetCommand,
  GetReusableDelegationSetCommandInput,
  GetReusableDelegationSetCommandOutput,
} from "./commands/GetReusableDelegationSetCommand";
import {
  GetReusableDelegationSetLimitCommand,
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
} from "./commands/GetReusableDelegationSetLimitCommand";
import {
  GetTrafficPolicyCommand,
  GetTrafficPolicyCommandInput,
  GetTrafficPolicyCommandOutput,
} from "./commands/GetTrafficPolicyCommand";
import {
  GetTrafficPolicyInstanceCommand,
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCommand";
import {
  GetTrafficPolicyInstanceCountCommand,
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCountCommand";
import {
  ListCidrBlocksCommand,
  ListCidrBlocksCommandInput,
  ListCidrBlocksCommandOutput,
} from "./commands/ListCidrBlocksCommand";
import {
  ListCidrCollectionsCommand,
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "./commands/ListCidrCollectionsCommand";
import {
  ListCidrLocationsCommand,
  ListCidrLocationsCommandInput,
  ListCidrLocationsCommandOutput,
} from "./commands/ListCidrLocationsCommand";
import {
  ListGeoLocationsCommand,
  ListGeoLocationsCommandInput,
  ListGeoLocationsCommandOutput,
} from "./commands/ListGeoLocationsCommand";
import {
  ListHealthChecksCommand,
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
} from "./commands/ListHealthChecksCommand";
import {
  ListHostedZonesByNameCommand,
  ListHostedZonesByNameCommandInput,
  ListHostedZonesByNameCommandOutput,
} from "./commands/ListHostedZonesByNameCommand";
import {
  ListHostedZonesByVPCCommand,
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
} from "./commands/ListHostedZonesByVPCCommand";
import {
  ListHostedZonesCommand,
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
} from "./commands/ListHostedZonesCommand";
import {
  ListQueryLoggingConfigsCommand,
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "./commands/ListQueryLoggingConfigsCommand";
import {
  ListResourceRecordSetsCommand,
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
} from "./commands/ListResourceRecordSetsCommand";
import {
  ListReusableDelegationSetsCommand,
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
} from "./commands/ListReusableDelegationSetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTagsForResourcesCommand,
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "./commands/ListTagsForResourcesCommand";
import {
  ListTrafficPoliciesCommand,
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand";
import {
  ListTrafficPolicyInstancesByHostedZoneCommand,
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import {
  ListTrafficPolicyInstancesByPolicyCommand,
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import {
  ListTrafficPolicyInstancesCommand,
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
} from "./commands/ListTrafficPolicyInstancesCommand";
import {
  ListTrafficPolicyVersionsCommand,
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
} from "./commands/ListTrafficPolicyVersionsCommand";
import {
  ListVPCAssociationAuthorizationsCommand,
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
} from "./commands/ListVPCAssociationAuthorizationsCommand";
import {
  TestDNSAnswerCommand,
  TestDNSAnswerCommandInput,
  TestDNSAnswerCommandOutput,
} from "./commands/TestDNSAnswerCommand";
import {
  UpdateHealthCheckCommand,
  UpdateHealthCheckCommandInput,
  UpdateHealthCheckCommandOutput,
} from "./commands/UpdateHealthCheckCommand";
import {
  UpdateHostedZoneCommentCommand,
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
} from "./commands/UpdateHostedZoneCommentCommand";
import {
  UpdateTrafficPolicyCommentCommand,
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
} from "./commands/UpdateTrafficPolicyCommentCommand";
import {
  UpdateTrafficPolicyInstanceCommand,
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
} from "./commands/UpdateTrafficPolicyInstanceCommand";
import { Route53Client, Route53ClientConfig } from "./Route53Client";

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
  UpdateTrafficPolicyCommentCommand,
  UpdateTrafficPolicyInstanceCommand,
};

export interface Route53 {
  /**
   * @see {@link ActivateKeySigningKeyCommand}
   */
  activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateKeySigningKeyCommandOutput>;
  activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    cb: (err: any, data?: ActivateKeySigningKeyCommandOutput) => void
  ): void;
  activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateKeySigningKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateVPCWithHostedZoneCommand}
   */
  associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVPCWithHostedZoneCommandOutput>;
  associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    cb: (err: any, data?: AssociateVPCWithHostedZoneCommandOutput) => void
  ): void;
  associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVPCWithHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeCidrCollectionCommand}
   */
  changeCidrCollection(
    args: ChangeCidrCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeCidrCollectionCommandOutput>;
  changeCidrCollection(
    args: ChangeCidrCollectionCommandInput,
    cb: (err: any, data?: ChangeCidrCollectionCommandOutput) => void
  ): void;
  changeCidrCollection(
    args: ChangeCidrCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeCidrCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeResourceRecordSetsCommand}
   */
  changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeResourceRecordSetsCommandOutput>;
  changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    cb: (err: any, data?: ChangeResourceRecordSetsCommandOutput) => void
  ): void;
  changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeResourceRecordSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeTagsForResourceCommand}
   */
  changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeTagsForResourceCommandOutput>;
  changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    cb: (err: any, data?: ChangeTagsForResourceCommandOutput) => void
  ): void;
  changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCidrCollectionCommand}
   */
  createCidrCollection(
    args: CreateCidrCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCidrCollectionCommandOutput>;
  createCidrCollection(
    args: CreateCidrCollectionCommandInput,
    cb: (err: any, data?: CreateCidrCollectionCommandOutput) => void
  ): void;
  createCidrCollection(
    args: CreateCidrCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCidrCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHealthCheckCommand}
   */
  createHealthCheck(
    args: CreateHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHealthCheckCommandOutput>;
  createHealthCheck(
    args: CreateHealthCheckCommandInput,
    cb: (err: any, data?: CreateHealthCheckCommandOutput) => void
  ): void;
  createHealthCheck(
    args: CreateHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHostedZoneCommand}
   */
  createHostedZone(
    args: CreateHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHostedZoneCommandOutput>;
  createHostedZone(
    args: CreateHostedZoneCommandInput,
    cb: (err: any, data?: CreateHostedZoneCommandOutput) => void
  ): void;
  createHostedZone(
    args: CreateHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeySigningKeyCommand}
   */
  createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeySigningKeyCommandOutput>;
  createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    cb: (err: any, data?: CreateKeySigningKeyCommandOutput) => void
  ): void;
  createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeySigningKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueryLoggingConfigCommand}
   */
  createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQueryLoggingConfigCommandOutput>;
  createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    cb: (err: any, data?: CreateQueryLoggingConfigCommandOutput) => void
  ): void;
  createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueryLoggingConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReusableDelegationSetCommand}
   */
  createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReusableDelegationSetCommandOutput>;
  createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    cb: (err: any, data?: CreateReusableDelegationSetCommandOutput) => void
  ): void;
  createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReusableDelegationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficPolicyCommand}
   */
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficPolicyCommandOutput>;
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): void;
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficPolicyInstanceCommand}
   */
  createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficPolicyInstanceCommandOutput>;
  createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyInstanceCommandOutput) => void
  ): void;
  createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficPolicyInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficPolicyVersionCommand}
   */
  createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficPolicyVersionCommandOutput>;
  createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyVersionCommandOutput) => void
  ): void;
  createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVPCAssociationAuthorizationCommand}
   */
  createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVPCAssociationAuthorizationCommandOutput>;
  createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    cb: (err: any, data?: CreateVPCAssociationAuthorizationCommandOutput) => void
  ): void;
  createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVPCAssociationAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateKeySigningKeyCommand}
   */
  deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateKeySigningKeyCommandOutput>;
  deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    cb: (err: any, data?: DeactivateKeySigningKeyCommandOutput) => void
  ): void;
  deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateKeySigningKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCidrCollectionCommand}
   */
  deleteCidrCollection(
    args: DeleteCidrCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCidrCollectionCommandOutput>;
  deleteCidrCollection(
    args: DeleteCidrCollectionCommandInput,
    cb: (err: any, data?: DeleteCidrCollectionCommandOutput) => void
  ): void;
  deleteCidrCollection(
    args: DeleteCidrCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCidrCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHealthCheckCommand}
   */
  deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHealthCheckCommandOutput>;
  deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    cb: (err: any, data?: DeleteHealthCheckCommandOutput) => void
  ): void;
  deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHostedZoneCommand}
   */
  deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHostedZoneCommandOutput>;
  deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    cb: (err: any, data?: DeleteHostedZoneCommandOutput) => void
  ): void;
  deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeySigningKeyCommand}
   */
  deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeySigningKeyCommandOutput>;
  deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    cb: (err: any, data?: DeleteKeySigningKeyCommandOutput) => void
  ): void;
  deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeySigningKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueryLoggingConfigCommand}
   */
  deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueryLoggingConfigCommandOutput>;
  deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    cb: (err: any, data?: DeleteQueryLoggingConfigCommandOutput) => void
  ): void;
  deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueryLoggingConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReusableDelegationSetCommand}
   */
  deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReusableDelegationSetCommandOutput>;
  deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    cb: (err: any, data?: DeleteReusableDelegationSetCommandOutput) => void
  ): void;
  deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReusableDelegationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficPolicyCommand}
   */
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficPolicyCommandOutput>;
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    cb: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): void;
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficPolicyInstanceCommand}
   */
  deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficPolicyInstanceCommandOutput>;
  deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: DeleteTrafficPolicyInstanceCommandOutput) => void
  ): void;
  deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficPolicyInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVPCAssociationAuthorizationCommand}
   */
  deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVPCAssociationAuthorizationCommandOutput>;
  deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    cb: (err: any, data?: DeleteVPCAssociationAuthorizationCommandOutput) => void
  ): void;
  deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVPCAssociationAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableHostedZoneDNSSECCommand}
   */
  disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableHostedZoneDNSSECCommandOutput>;
  disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    cb: (err: any, data?: DisableHostedZoneDNSSECCommandOutput) => void
  ): void;
  disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableHostedZoneDNSSECCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateVPCFromHostedZoneCommand}
   */
  disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateVPCFromHostedZoneCommandOutput>;
  disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    cb: (err: any, data?: DisassociateVPCFromHostedZoneCommandOutput) => void
  ): void;
  disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateVPCFromHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableHostedZoneDNSSECCommand}
   */
  enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableHostedZoneDNSSECCommandOutput>;
  enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    cb: (err: any, data?: EnableHostedZoneDNSSECCommandOutput) => void
  ): void;
  enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableHostedZoneDNSSECCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountLimitCommand}
   */
  getAccountLimit(
    args: GetAccountLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountLimitCommandOutput>;
  getAccountLimit(args: GetAccountLimitCommandInput, cb: (err: any, data?: GetAccountLimitCommandOutput) => void): void;
  getAccountLimit(
    args: GetAccountLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChangeCommand}
   */
  getChange(args: GetChangeCommandInput, options?: __HttpHandlerOptions): Promise<GetChangeCommandOutput>;
  getChange(args: GetChangeCommandInput, cb: (err: any, data?: GetChangeCommandOutput) => void): void;
  getChange(
    args: GetChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCheckerIpRangesCommand}
   */
  getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCheckerIpRangesCommandOutput>;
  getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    cb: (err: any, data?: GetCheckerIpRangesCommandOutput) => void
  ): void;
  getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCheckerIpRangesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDNSSECCommand}
   */
  getDNSSEC(args: GetDNSSECCommandInput, options?: __HttpHandlerOptions): Promise<GetDNSSECCommandOutput>;
  getDNSSEC(args: GetDNSSECCommandInput, cb: (err: any, data?: GetDNSSECCommandOutput) => void): void;
  getDNSSEC(
    args: GetDNSSECCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDNSSECCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGeoLocationCommand}
   */
  getGeoLocation(
    args: GetGeoLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGeoLocationCommandOutput>;
  getGeoLocation(args: GetGeoLocationCommandInput, cb: (err: any, data?: GetGeoLocationCommandOutput) => void): void;
  getGeoLocation(
    args: GetGeoLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeoLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthCheckCommand}
   */
  getHealthCheck(
    args: GetHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthCheckCommandOutput>;
  getHealthCheck(args: GetHealthCheckCommandInput, cb: (err: any, data?: GetHealthCheckCommandOutput) => void): void;
  getHealthCheck(
    args: GetHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthCheckCountCommand}
   */
  getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthCheckCountCommandOutput>;
  getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    cb: (err: any, data?: GetHealthCheckCountCommandOutput) => void
  ): void;
  getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthCheckCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthCheckLastFailureReasonCommand}
   */
  getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthCheckLastFailureReasonCommandOutput>;
  getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    cb: (err: any, data?: GetHealthCheckLastFailureReasonCommandOutput) => void
  ): void;
  getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthCheckLastFailureReasonCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthCheckStatusCommand}
   */
  getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthCheckStatusCommandOutput>;
  getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    cb: (err: any, data?: GetHealthCheckStatusCommandOutput) => void
  ): void;
  getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthCheckStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostedZoneCommand}
   */
  getHostedZone(args: GetHostedZoneCommandInput, options?: __HttpHandlerOptions): Promise<GetHostedZoneCommandOutput>;
  getHostedZone(args: GetHostedZoneCommandInput, cb: (err: any, data?: GetHostedZoneCommandOutput) => void): void;
  getHostedZone(
    args: GetHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostedZoneCountCommand}
   */
  getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedZoneCountCommandOutput>;
  getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    cb: (err: any, data?: GetHostedZoneCountCommandOutput) => void
  ): void;
  getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedZoneCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostedZoneLimitCommand}
   */
  getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedZoneLimitCommandOutput>;
  getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    cb: (err: any, data?: GetHostedZoneLimitCommandOutput) => void
  ): void;
  getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedZoneLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryLoggingConfigCommand}
   */
  getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryLoggingConfigCommandOutput>;
  getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    cb: (err: any, data?: GetQueryLoggingConfigCommandOutput) => void
  ): void;
  getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryLoggingConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReusableDelegationSetCommand}
   */
  getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReusableDelegationSetCommandOutput>;
  getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    cb: (err: any, data?: GetReusableDelegationSetCommandOutput) => void
  ): void;
  getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReusableDelegationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReusableDelegationSetLimitCommand}
   */
  getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReusableDelegationSetLimitCommandOutput>;
  getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    cb: (err: any, data?: GetReusableDelegationSetLimitCommandOutput) => void
  ): void;
  getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReusableDelegationSetLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrafficPolicyCommand}
   */
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrafficPolicyCommandOutput>;
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    cb: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): void;
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrafficPolicyInstanceCommand}
   */
  getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrafficPolicyInstanceCommandOutput>;
  getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: GetTrafficPolicyInstanceCommandOutput) => void
  ): void;
  getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrafficPolicyInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrafficPolicyInstanceCountCommand}
   */
  getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrafficPolicyInstanceCountCommandOutput>;
  getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    cb: (err: any, data?: GetTrafficPolicyInstanceCountCommandOutput) => void
  ): void;
  getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrafficPolicyInstanceCountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCidrBlocksCommand}
   */
  listCidrBlocks(
    args: ListCidrBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCidrBlocksCommandOutput>;
  listCidrBlocks(args: ListCidrBlocksCommandInput, cb: (err: any, data?: ListCidrBlocksCommandOutput) => void): void;
  listCidrBlocks(
    args: ListCidrBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCidrBlocksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCidrCollectionsCommand}
   */
  listCidrCollections(
    args: ListCidrCollectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCidrCollectionsCommandOutput>;
  listCidrCollections(
    args: ListCidrCollectionsCommandInput,
    cb: (err: any, data?: ListCidrCollectionsCommandOutput) => void
  ): void;
  listCidrCollections(
    args: ListCidrCollectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCidrCollectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCidrLocationsCommand}
   */
  listCidrLocations(
    args: ListCidrLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCidrLocationsCommandOutput>;
  listCidrLocations(
    args: ListCidrLocationsCommandInput,
    cb: (err: any, data?: ListCidrLocationsCommandOutput) => void
  ): void;
  listCidrLocations(
    args: ListCidrLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCidrLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGeoLocationsCommand}
   */
  listGeoLocations(
    args: ListGeoLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeoLocationsCommandOutput>;
  listGeoLocations(
    args: ListGeoLocationsCommandInput,
    cb: (err: any, data?: ListGeoLocationsCommandOutput) => void
  ): void;
  listGeoLocations(
    args: ListGeoLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeoLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHealthChecksCommand}
   */
  listHealthChecks(
    args: ListHealthChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHealthChecksCommandOutput>;
  listHealthChecks(
    args: ListHealthChecksCommandInput,
    cb: (err: any, data?: ListHealthChecksCommandOutput) => void
  ): void;
  listHealthChecks(
    args: ListHealthChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHealthChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostedZonesCommand}
   */
  listHostedZones(
    args: ListHostedZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedZonesCommandOutput>;
  listHostedZones(args: ListHostedZonesCommandInput, cb: (err: any, data?: ListHostedZonesCommandOutput) => void): void;
  listHostedZones(
    args: ListHostedZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostedZonesByNameCommand}
   */
  listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedZonesByNameCommandOutput>;
  listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    cb: (err: any, data?: ListHostedZonesByNameCommandOutput) => void
  ): void;
  listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedZonesByNameCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostedZonesByVPCCommand}
   */
  listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedZonesByVPCCommandOutput>;
  listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    cb: (err: any, data?: ListHostedZonesByVPCCommandOutput) => void
  ): void;
  listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedZonesByVPCCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueryLoggingConfigsCommand}
   */
  listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueryLoggingConfigsCommandOutput>;
  listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    cb: (err: any, data?: ListQueryLoggingConfigsCommandOutput) => void
  ): void;
  listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueryLoggingConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceRecordSetsCommand}
   */
  listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceRecordSetsCommandOutput>;
  listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    cb: (err: any, data?: ListResourceRecordSetsCommandOutput) => void
  ): void;
  listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceRecordSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReusableDelegationSetsCommand}
   */
  listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReusableDelegationSetsCommandOutput>;
  listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    cb: (err: any, data?: ListReusableDelegationSetsCommandOutput) => void
  ): void;
  listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReusableDelegationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourcesCommand}
   */
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourcesCommandOutput>;
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPoliciesCommand}
   */
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPoliciesCommandOutput>;
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    cb: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): void;
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPolicyInstancesCommand}
   */
  listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPolicyInstancesCommandOutput>;
  listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesCommandOutput) => void
  ): void;
  listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPolicyInstancesByHostedZoneCommand}
   */
  listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput>;
  listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneCommandOutput) => void
  ): void;
  listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPolicyInstancesByPolicyCommand}
   */
  listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput>;
  listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesByPolicyCommandOutput) => void
  ): void;
  listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesByPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficPolicyVersionsCommand}
   */
  listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPolicyVersionsCommandOutput>;
  listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    cb: (err: any, data?: ListTrafficPolicyVersionsCommandOutput) => void
  ): void;
  listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPolicyVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVPCAssociationAuthorizationsCommand}
   */
  listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVPCAssociationAuthorizationsCommandOutput>;
  listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    cb: (err: any, data?: ListVPCAssociationAuthorizationsCommandOutput) => void
  ): void;
  listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVPCAssociationAuthorizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link TestDNSAnswerCommand}
   */
  testDNSAnswer(args: TestDNSAnswerCommandInput, options?: __HttpHandlerOptions): Promise<TestDNSAnswerCommandOutput>;
  testDNSAnswer(args: TestDNSAnswerCommandInput, cb: (err: any, data?: TestDNSAnswerCommandOutput) => void): void;
  testDNSAnswer(
    args: TestDNSAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestDNSAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHealthCheckCommand}
   */
  updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHealthCheckCommandOutput>;
  updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    cb: (err: any, data?: UpdateHealthCheckCommandOutput) => void
  ): void;
  updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHostedZoneCommentCommand}
   */
  updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHostedZoneCommentCommandOutput>;
  updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    cb: (err: any, data?: UpdateHostedZoneCommentCommandOutput) => void
  ): void;
  updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHostedZoneCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrafficPolicyCommentCommand}
   */
  updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrafficPolicyCommentCommandOutput>;
  updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    cb: (err: any, data?: UpdateTrafficPolicyCommentCommandOutput) => void
  ): void;
  updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrafficPolicyCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrafficPolicyInstanceCommand}
   */
  updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrafficPolicyInstanceCommandOutput>;
  updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: UpdateTrafficPolicyInstanceCommandOutput) => void
  ): void;
  updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrafficPolicyInstanceCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class Route53 extends Route53Client implements Route53 {}
createAggregatedClient(commands, Route53);
