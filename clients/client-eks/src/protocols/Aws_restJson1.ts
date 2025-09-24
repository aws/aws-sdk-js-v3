// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import {
  AssociateAccessPolicyCommandInput,
  AssociateAccessPolicyCommandOutput,
} from "../commands/AssociateAccessPolicyCommand";
import {
  AssociateEncryptionConfigCommandInput,
  AssociateEncryptionConfigCommandOutput,
} from "../commands/AssociateEncryptionConfigCommand";
import {
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
} from "../commands/AssociateIdentityProviderConfigCommand";
import { CreateAccessEntryCommandInput, CreateAccessEntryCommandOutput } from "../commands/CreateAccessEntryCommand";
import { CreateAddonCommandInput, CreateAddonCommandOutput } from "../commands/CreateAddonCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateEksAnywhereSubscriptionCommandInput,
  CreateEksAnywhereSubscriptionCommandOutput,
} from "../commands/CreateEksAnywhereSubscriptionCommand";
import {
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
} from "../commands/CreateFargateProfileCommand";
import { CreateNodegroupCommandInput, CreateNodegroupCommandOutput } from "../commands/CreateNodegroupCommand";
import {
  CreatePodIdentityAssociationCommandInput,
  CreatePodIdentityAssociationCommandOutput,
} from "../commands/CreatePodIdentityAssociationCommand";
import { DeleteAccessEntryCommandInput, DeleteAccessEntryCommandOutput } from "../commands/DeleteAccessEntryCommand";
import { DeleteAddonCommandInput, DeleteAddonCommandOutput } from "../commands/DeleteAddonCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteEksAnywhereSubscriptionCommandInput,
  DeleteEksAnywhereSubscriptionCommandOutput,
} from "../commands/DeleteEksAnywhereSubscriptionCommand";
import {
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
} from "../commands/DeleteFargateProfileCommand";
import { DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput } from "../commands/DeleteNodegroupCommand";
import {
  DeletePodIdentityAssociationCommandInput,
  DeletePodIdentityAssociationCommandOutput,
} from "../commands/DeletePodIdentityAssociationCommand";
import { DeregisterClusterCommandInput, DeregisterClusterCommandOutput } from "../commands/DeregisterClusterCommand";
import {
  DescribeAccessEntryCommandInput,
  DescribeAccessEntryCommandOutput,
} from "../commands/DescribeAccessEntryCommand";
import { DescribeAddonCommandInput, DescribeAddonCommandOutput } from "../commands/DescribeAddonCommand";
import {
  DescribeAddonConfigurationCommandInput,
  DescribeAddonConfigurationCommandOutput,
} from "../commands/DescribeAddonConfigurationCommand";
import {
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "../commands/DescribeAddonVersionsCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "../commands/DescribeClusterCommand";
import {
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "../commands/DescribeClusterVersionsCommand";
import {
  DescribeEksAnywhereSubscriptionCommandInput,
  DescribeEksAnywhereSubscriptionCommandOutput,
} from "../commands/DescribeEksAnywhereSubscriptionCommand";
import {
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput,
} from "../commands/DescribeFargateProfileCommand";
import {
  DescribeIdentityProviderConfigCommandInput,
  DescribeIdentityProviderConfigCommandOutput,
} from "../commands/DescribeIdentityProviderConfigCommand";
import { DescribeInsightCommandInput, DescribeInsightCommandOutput } from "../commands/DescribeInsightCommand";
import {
  DescribeInsightsRefreshCommandInput,
  DescribeInsightsRefreshCommandOutput,
} from "../commands/DescribeInsightsRefreshCommand";
import { DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput } from "../commands/DescribeNodegroupCommand";
import {
  DescribePodIdentityAssociationCommandInput,
  DescribePodIdentityAssociationCommandOutput,
} from "../commands/DescribePodIdentityAssociationCommand";
import { DescribeUpdateCommandInput, DescribeUpdateCommandOutput } from "../commands/DescribeUpdateCommand";
import {
  DisassociateAccessPolicyCommandInput,
  DisassociateAccessPolicyCommandOutput,
} from "../commands/DisassociateAccessPolicyCommand";
import {
  DisassociateIdentityProviderConfigCommandInput,
  DisassociateIdentityProviderConfigCommandOutput,
} from "../commands/DisassociateIdentityProviderConfigCommand";
import { ListAccessEntriesCommandInput, ListAccessEntriesCommandOutput } from "../commands/ListAccessEntriesCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "../commands/ListAccessPoliciesCommand";
import { ListAddonsCommandInput, ListAddonsCommandOutput } from "../commands/ListAddonsCommand";
import {
  ListAssociatedAccessPoliciesCommandInput,
  ListAssociatedAccessPoliciesCommandOutput,
} from "../commands/ListAssociatedAccessPoliciesCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import {
  ListEksAnywhereSubscriptionsCommandInput,
  ListEksAnywhereSubscriptionsCommandOutput,
} from "../commands/ListEksAnywhereSubscriptionsCommand";
import {
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "../commands/ListFargateProfilesCommand";
import {
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "../commands/ListIdentityProviderConfigsCommand";
import { ListInsightsCommandInput, ListInsightsCommandOutput } from "../commands/ListInsightsCommand";
import { ListNodegroupsCommandInput, ListNodegroupsCommandOutput } from "../commands/ListNodegroupsCommand";
import {
  ListPodIdentityAssociationsCommandInput,
  ListPodIdentityAssociationsCommandOutput,
} from "../commands/ListPodIdentityAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUpdatesCommandInput, ListUpdatesCommandOutput } from "../commands/ListUpdatesCommand";
import { RegisterClusterCommandInput, RegisterClusterCommandOutput } from "../commands/RegisterClusterCommand";
import {
  StartInsightsRefreshCommandInput,
  StartInsightsRefreshCommandOutput,
} from "../commands/StartInsightsRefreshCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAccessEntryCommandInput, UpdateAccessEntryCommandOutput } from "../commands/UpdateAccessEntryCommand";
import { UpdateAddonCommandInput, UpdateAddonCommandOutput } from "../commands/UpdateAddonCommand";
import {
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput,
} from "../commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput,
} from "../commands/UpdateClusterVersionCommand";
import {
  UpdateEksAnywhereSubscriptionCommandInput,
  UpdateEksAnywhereSubscriptionCommandOutput,
} from "../commands/UpdateEksAnywhereSubscriptionCommand";
import {
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
} from "../commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
} from "../commands/UpdateNodegroupVersionCommand";
import {
  UpdatePodIdentityAssociationCommandInput,
  UpdatePodIdentityAssociationCommandOutput,
} from "../commands/UpdatePodIdentityAssociationCommand";
import { EKSServiceException as __BaseException } from "../models/EKSServiceException";
import {
  AccessDeniedException,
  AccessEntry,
  AccessScope,
  Addon,
  AddonNamespaceConfigRequest,
  AddonPodIdentityAssociations,
  AssociatedAccessPolicy,
  BadRequestException,
  BlockStorage,
  Category,
  ClientException,
  ClientStat,
  Cluster,
  ClusterVersionInformation,
  ComputeConfigRequest,
  ConnectorConfigRequest,
  ConnectorConfigResponse,
  ControlPlanePlacementRequest,
  CreateAccessConfigRequest,
  DeprecationDetail,
  EksAnywhereSubscription,
  EksAnywhereSubscriptionTerm,
  ElasticLoadBalancing,
  EncryptionConfig,
  FargateProfile,
  FargateProfileSelector,
  IdentityProviderConfig,
  Insight,
  InsightCategorySpecificSummary,
  InsightsFilter,
  InsightStatusValue,
  InsightSummary,
  InvalidParameterException,
  InvalidRequestException,
  InvalidStateException,
  KubernetesNetworkConfigRequest,
  LaunchTemplateSpecification,
  Logging,
  LogSetup,
  LogType,
  Nodegroup,
  NodegroupScalingConfig,
  NodegroupUpdateConfig,
  NodeRepairConfig,
  NodeRepairConfigOverrides,
  NotFoundException,
  OidcIdentityProviderConfigRequest,
  OutpostConfigRequest,
  PodIdentityAssociation,
  Provider,
  RemoteAccessConfig,
  RemoteNetworkConfigRequest,
  RemoteNodeNetwork,
  RemotePodNetwork,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourcePropagationDelayException,
  ServerException,
  ServiceUnavailableException,
  StorageConfigRequest,
  Taint,
  ThrottlingException,
  UnsupportedAvailabilityZoneException,
  Update,
  UpdateAccessConfigRequest,
  UpdateLabelsPayload,
  UpdateTaintsPayload,
  UpgradePolicyRequest,
  VpcConfigRequest,
  ZonalShiftConfigRequest,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateAccessPolicyCommand
 */
export const se_AssociateAccessPolicyCommand = async (
  input: AssociateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/access-entries/{principalArn}/access-policies");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("principalArn", () => input.principalArn!, "{principalArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessScope: (_) => _json(_),
      policyArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateEncryptionConfigCommand
 */
export const se_AssociateEncryptionConfigCommand = async (
  input: AssociateEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/encryption-config/associate");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      encryptionConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateIdentityProviderConfigCommand
 */
export const se_AssociateIdentityProviderConfigCommand = async (
  input: AssociateIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/identity-provider-configs/associate");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      oidc: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAccessEntryCommand
 */
export const se_CreateAccessEntryCommand = async (
  input: CreateAccessEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/access-entries");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      kubernetesGroups: (_) => _json(_),
      principalArn: [],
      tags: (_) => _json(_),
      type: [],
      username: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAddonCommand
 */
export const se_CreateAddonCommand = async (
  input: CreateAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/addons");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      addonName: [],
      addonVersion: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configurationValues: [],
      namespaceConfig: (_) => _json(_),
      podIdentityAssociations: (_) => _json(_),
      resolveConflicts: [],
      serviceAccountRoleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessConfig: (_) => _json(_),
      bootstrapSelfManagedAddons: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      computeConfig: (_) => _json(_),
      deletionProtection: [],
      encryptionConfig: (_) => _json(_),
      kubernetesNetworkConfig: (_) => _json(_),
      logging: (_) => _json(_),
      name: [],
      outpostConfig: (_) => _json(_),
      remoteNetworkConfig: (_) => _json(_),
      resourcesVpcConfig: (_) => _json(_),
      roleArn: [],
      storageConfig: (_) => _json(_),
      tags: (_) => _json(_),
      upgradePolicy: (_) => _json(_),
      version: [],
      zonalShiftConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEksAnywhereSubscriptionCommand
 */
export const se_CreateEksAnywhereSubscriptionCommand = async (
  input: CreateEksAnywhereSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/eks-anywhere-subscriptions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoRenew: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      licenseQuantity: [],
      licenseType: [],
      name: [],
      tags: (_) => _json(_),
      term: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFargateProfileCommand
 */
export const se_CreateFargateProfileCommand = async (
  input: CreateFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/fargate-profiles");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      fargateProfileName: [],
      podExecutionRoleArn: [],
      selectors: (_) => _json(_),
      subnets: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNodegroupCommand
 */
export const se_CreateNodegroupCommand = async (
  input: CreateNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/node-groups");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      amiType: [],
      capacityType: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      diskSize: [],
      instanceTypes: (_) => _json(_),
      labels: (_) => _json(_),
      launchTemplate: (_) => _json(_),
      nodeRepairConfig: (_) => _json(_),
      nodeRole: [],
      nodegroupName: [],
      releaseVersion: [],
      remoteAccess: (_) => _json(_),
      scalingConfig: (_) => _json(_),
      subnets: (_) => _json(_),
      tags: (_) => _json(_),
      taints: (_) => _json(_),
      updateConfig: (_) => _json(_),
      version: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePodIdentityAssociationCommand
 */
export const se_CreatePodIdentityAssociationCommand = async (
  input: CreatePodIdentityAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/pod-identity-associations");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      disableSessionTags: [],
      namespace: [],
      roleArn: [],
      serviceAccount: [],
      tags: (_) => _json(_),
      targetRoleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccessEntryCommand
 */
export const se_DeleteAccessEntryCommand = async (
  input: DeleteAccessEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/access-entries/{principalArn}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("principalArn", () => input.principalArn!, "{principalArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAddonCommand
 */
export const se_DeleteAddonCommand = async (
  input: DeleteAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/addons/{addonName}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("addonName", () => input.addonName!, "{addonName}", false);
  const query: any = map({
    [_p]: [() => input.preserve !== void 0, () => input[_p]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEksAnywhereSubscriptionCommand
 */
export const se_DeleteEksAnywhereSubscriptionCommand = async (
  input: DeleteEksAnywhereSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/eks-anywhere-subscriptions/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFargateProfileCommand
 */
export const se_DeleteFargateProfileCommand = async (
  input: DeleteFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/fargate-profiles/{fargateProfileName}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("fargateProfileName", () => input.fargateProfileName!, "{fargateProfileName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNodegroupCommand
 */
export const se_DeleteNodegroupCommand = async (
  input: DeleteNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/node-groups/{nodegroupName}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("nodegroupName", () => input.nodegroupName!, "{nodegroupName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePodIdentityAssociationCommand
 */
export const se_DeletePodIdentityAssociationCommand = async (
  input: DeletePodIdentityAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/pod-identity-associations/{associationId}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterClusterCommand
 */
export const se_DeregisterClusterCommand = async (
  input: DeregisterClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/cluster-registrations/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAccessEntryCommand
 */
export const se_DescribeAccessEntryCommand = async (
  input: DescribeAccessEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/access-entries/{principalArn}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("principalArn", () => input.principalArn!, "{principalArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAddonCommand
 */
export const se_DescribeAddonCommand = async (
  input: DescribeAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/addons/{addonName}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("addonName", () => input.addonName!, "{addonName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAddonConfigurationCommand
 */
export const se_DescribeAddonConfigurationCommand = async (
  input: DescribeAddonConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/addons/configuration-schemas");
  const query: any = map({
    [_aN]: [, __expectNonNull(input[_aN]!, `addonName`)],
    [_aV]: [, __expectNonNull(input[_aV]!, `addonVersion`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAddonVersionsCommand
 */
export const se_DescribeAddonVersionsCommand = async (
  input: DescribeAddonVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/addons/supported-versions");
  const query: any = map({
    [_kV]: [, input[_kV]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_aN]: [, input[_aN]!],
    [_t]: [() => input.types !== void 0, () => input[_t]! || []],
    [_pu]: [() => input.publishers !== void 0, () => input[_pu]! || []],
    [_o]: [() => input.owners !== void 0, () => input[_o]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeClusterCommand
 */
export const se_DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeClusterVersionsCommand
 */
export const se_DescribeClusterVersionsCommand = async (
  input: DescribeClusterVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/cluster-versions");
  const query: any = map({
    [_cT]: [, input[_cT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_dO]: [() => input.defaultOnly !== void 0, () => input[_dO]!.toString()],
    [_iA]: [() => input.includeAll !== void 0, () => input[_iA]!.toString()],
    [_cV]: [() => input.clusterVersions !== void 0, () => input[_cV]! || []],
    [_s]: [, input[_s]!],
    [_vS]: [, input[_vS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeEksAnywhereSubscriptionCommand
 */
export const se_DescribeEksAnywhereSubscriptionCommand = async (
  input: DescribeEksAnywhereSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/eks-anywhere-subscriptions/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeFargateProfileCommand
 */
export const se_DescribeFargateProfileCommand = async (
  input: DescribeFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/fargate-profiles/{fargateProfileName}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("fargateProfileName", () => input.fargateProfileName!, "{fargateProfileName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeIdentityProviderConfigCommand
 */
export const se_DescribeIdentityProviderConfigCommand = async (
  input: DescribeIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/identity-provider-configs/describe");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      identityProviderConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInsightCommand
 */
export const se_DescribeInsightCommand = async (
  input: DescribeInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/insights/{id}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInsightsRefreshCommand
 */
export const se_DescribeInsightsRefreshCommand = async (
  input: DescribeInsightsRefreshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/insights-refresh");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeNodegroupCommand
 */
export const se_DescribeNodegroupCommand = async (
  input: DescribeNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/node-groups/{nodegroupName}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("nodegroupName", () => input.nodegroupName!, "{nodegroupName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePodIdentityAssociationCommand
 */
export const se_DescribePodIdentityAssociationCommand = async (
  input: DescribePodIdentityAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/pod-identity-associations/{associationId}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeUpdateCommand
 */
export const se_DescribeUpdateCommand = async (
  input: DescribeUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{name}/updates/{updateId}");
  b.p("name", () => input.name!, "{name}", false);
  b.p("updateId", () => input.updateId!, "{updateId}", false);
  const query: any = map({
    [_nN]: [, input[_nN]!],
    [_aN]: [, input[_aN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateAccessPolicyCommand
 */
export const se_DisassociateAccessPolicyCommand = async (
  input: DisassociateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/access-entries/{principalArn}/access-policies/{policyArn}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("principalArn", () => input.principalArn!, "{principalArn}", false);
  b.p("policyArn", () => input.policyArn!, "{policyArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateIdentityProviderConfigCommand
 */
export const se_DisassociateIdentityProviderConfigCommand = async (
  input: DisassociateIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/identity-provider-configs/disassociate");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      identityProviderConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccessEntriesCommand
 */
export const se_ListAccessEntriesCommand = async (
  input: ListAccessEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/access-entries");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  const query: any = map({
    [_aPA]: [, input[_aPA]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccessPoliciesCommand
 */
export const se_ListAccessPoliciesCommand = async (
  input: ListAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/access-policies");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAddonsCommand
 */
export const se_ListAddonsCommand = async (
  input: ListAddonsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/addons");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssociatedAccessPoliciesCommand
 */
export const se_ListAssociatedAccessPoliciesCommand = async (
  input: ListAssociatedAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/access-entries/{principalArn}/access-policies");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("principalArn", () => input.principalArn!, "{principalArn}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_i]: [() => input.include !== void 0, () => input[_i]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEksAnywhereSubscriptionsCommand
 */
export const se_ListEksAnywhereSubscriptionsCommand = async (
  input: ListEksAnywhereSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/eks-anywhere-subscriptions");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_iS]: [() => input.includeStatus !== void 0, () => input[_iS]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFargateProfilesCommand
 */
export const se_ListFargateProfilesCommand = async (
  input: ListFargateProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/fargate-profiles");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIdentityProviderConfigsCommand
 */
export const se_ListIdentityProviderConfigsCommand = async (
  input: ListIdentityProviderConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/identity-provider-configs");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInsightsCommand
 */
export const se_ListInsightsCommand = async (
  input: ListInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/insights");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNodegroupsCommand
 */
export const se_ListNodegroupsCommand = async (
  input: ListNodegroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/node-groups");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPodIdentityAssociationsCommand
 */
export const se_ListPodIdentityAssociationsCommand = async (
  input: ListPodIdentityAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/pod-identity-associations");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  const query: any = map({
    [_n]: [, input[_n]!],
    [_sA]: [, input[_sA]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUpdatesCommand
 */
export const se_ListUpdatesCommand = async (
  input: ListUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{name}/updates");
  b.p("name", () => input.name!, "{name}", false);
  const query: any = map({
    [_nN]: [, input[_nN]!],
    [_aN]: [, input[_aN]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterClusterCommand
 */
export const se_RegisterClusterCommand = async (
  input: RegisterClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cluster-registrations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      connectorConfig: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartInsightsRefreshCommand
 */
export const se_StartInsightsRefreshCommand = async (
  input: StartInsightsRefreshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/clusters/{clusterName}/insights-refresh");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccessEntryCommand
 */
export const se_UpdateAccessEntryCommand = async (
  input: UpdateAccessEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/access-entries/{principalArn}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("principalArn", () => input.principalArn!, "{principalArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      kubernetesGroups: (_) => _json(_),
      username: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAddonCommand
 */
export const se_UpdateAddonCommand = async (
  input: UpdateAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/addons/{addonName}/update");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("addonName", () => input.addonName!, "{addonName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      addonVersion: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configurationValues: [],
      podIdentityAssociations: (_) => _json(_),
      resolveConflicts: [],
      serviceAccountRoleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateClusterConfigCommand
 */
export const se_UpdateClusterConfigCommand = async (
  input: UpdateClusterConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{name}/update-config");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessConfig: (_) => _json(_),
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      computeConfig: (_) => _json(_),
      deletionProtection: [],
      kubernetesNetworkConfig: (_) => _json(_),
      logging: (_) => _json(_),
      remoteNetworkConfig: (_) => _json(_),
      resourcesVpcConfig: (_) => _json(_),
      storageConfig: (_) => _json(_),
      upgradePolicy: (_) => _json(_),
      zonalShiftConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateClusterVersionCommand
 */
export const se_UpdateClusterVersionCommand = async (
  input: UpdateClusterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{name}/updates");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      force: [],
      version: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEksAnywhereSubscriptionCommand
 */
export const se_UpdateEksAnywhereSubscriptionCommand = async (
  input: UpdateEksAnywhereSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/eks-anywhere-subscriptions/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoRenew: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNodegroupConfigCommand
 */
export const se_UpdateNodegroupConfigCommand = async (
  input: UpdateNodegroupConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/node-groups/{nodegroupName}/update-config");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("nodegroupName", () => input.nodegroupName!, "{nodegroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      labels: (_) => _json(_),
      nodeRepairConfig: (_) => _json(_),
      scalingConfig: (_) => _json(_),
      taints: (_) => _json(_),
      updateConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNodegroupVersionCommand
 */
export const se_UpdateNodegroupVersionCommand = async (
  input: UpdateNodegroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/node-groups/{nodegroupName}/update-version");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("nodegroupName", () => input.nodegroupName!, "{nodegroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      force: [],
      launchTemplate: (_) => _json(_),
      releaseVersion: [],
      version: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePodIdentityAssociationCommand
 */
export const se_UpdatePodIdentityAssociationCommand = async (
  input: UpdatePodIdentityAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/clusters/{clusterName}/pod-identity-associations/{associationId}");
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      disableSessionTags: [],
      roleArn: [],
      targetRoleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateAccessPolicyCommand
 */
export const de_AssociateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associatedAccessPolicy: (_) => de_AssociatedAccessPolicy(_, context),
    clusterName: __expectString,
    principalArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateEncryptionConfigCommand
 */
export const de_AssociateEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateIdentityProviderConfigCommand
 */
export const de_AssociateIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccessEntryCommand
 */
export const de_CreateAccessEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessEntryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessEntry: (_) => de_AccessEntry(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAddonCommand
 */
export const de_CreateAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    addon: (_) => de_Addon(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEksAnywhereSubscriptionCommand
 */
export const de_CreateEksAnywhereSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEksAnywhereSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscription: (_) => de_EksAnywhereSubscription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFargateProfileCommand
 */
export const de_CreateFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fargateProfile: (_) => de_FargateProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNodegroupCommand
 */
export const de_CreateNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nodegroup: (_) => de_Nodegroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePodIdentityAssociationCommand
 */
export const de_CreatePodIdentityAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePodIdentityAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    association: (_) => de_PodIdentityAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessEntryCommand
 */
export const de_DeleteAccessEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessEntryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAddonCommand
 */
export const de_DeleteAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    addon: (_) => de_Addon(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEksAnywhereSubscriptionCommand
 */
export const de_DeleteEksAnywhereSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEksAnywhereSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscription: (_) => de_EksAnywhereSubscription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFargateProfileCommand
 */
export const de_DeleteFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fargateProfile: (_) => de_FargateProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNodegroupCommand
 */
export const de_DeleteNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nodegroup: (_) => de_Nodegroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePodIdentityAssociationCommand
 */
export const de_DeletePodIdentityAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePodIdentityAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    association: (_) => de_PodIdentityAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterClusterCommand
 */
export const de_DeregisterClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccessEntryCommand
 */
export const de_DescribeAccessEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessEntryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessEntry: (_) => de_AccessEntry(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAddonCommand
 */
export const de_DescribeAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    addon: (_) => de_Addon(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAddonConfigurationCommand
 */
export const de_DescribeAddonConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    addonName: __expectString,
    addonVersion: __expectString,
    configurationSchema: __expectString,
    podIdentityConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAddonVersionsCommand
 */
export const de_DescribeAddonVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    addons: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeClusterCommand
 */
export const de_DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeClusterVersionsCommand
 */
export const de_DescribeClusterVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clusterVersions: (_) => de_ClusterVersionList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEksAnywhereSubscriptionCommand
 */
export const de_DescribeEksAnywhereSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEksAnywhereSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscription: (_) => de_EksAnywhereSubscription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFargateProfileCommand
 */
export const de_DescribeFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fargateProfile: (_) => de_FargateProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIdentityProviderConfigCommand
 */
export const de_DescribeIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    identityProviderConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInsightCommand
 */
export const de_DescribeInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    insight: (_) => de_Insight(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInsightsRefreshCommand
 */
export const de_DescribeInsightsRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightsRefreshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    startedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNodegroupCommand
 */
export const de_DescribeNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nodegroup: (_) => de_Nodegroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePodIdentityAssociationCommand
 */
export const de_DescribePodIdentityAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePodIdentityAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    association: (_) => de_PodIdentityAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUpdateCommand
 */
export const de_DescribeUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAccessPolicyCommand
 */
export const de_DisassociateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateIdentityProviderConfigCommand
 */
export const de_DisassociateIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessEntriesCommand
 */
export const de_ListAccessEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessEntriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessEntries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessPoliciesCommand
 */
export const de_ListAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessPolicies: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAddonsCommand
 */
export const de_ListAddonsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddonsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    addons: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociatedAccessPoliciesCommand
 */
export const de_ListAssociatedAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedAccessPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associatedAccessPolicies: (_) => de_AssociatedAccessPoliciesList(_, context),
    clusterName: __expectString,
    nextToken: __expectString,
    principalArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clusters: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEksAnywhereSubscriptionsCommand
 */
export const de_ListEksAnywhereSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEksAnywhereSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    subscriptions: (_) => de_EksAnywhereSubscriptionList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFargateProfilesCommand
 */
export const de_ListFargateProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fargateProfileNames: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityProviderConfigsCommand
 */
export const de_ListIdentityProviderConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    identityProviderConfigs: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInsightsCommand
 */
export const de_ListInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    insights: (_) => de_InsightSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNodegroupsCommand
 */
export const de_ListNodegroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    nodegroups: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPodIdentityAssociationsCommand
 */
export const de_ListPodIdentityAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPodIdentityAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUpdatesCommand
 */
export const de_ListUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    updateIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterClusterCommand
 */
export const de_RegisterClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartInsightsRefreshCommand
 */
export const de_StartInsightsRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInsightsRefreshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccessEntryCommand
 */
export const de_UpdateAccessEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessEntryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessEntry: (_) => de_AccessEntry(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAddonCommand
 */
export const de_UpdateAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClusterConfigCommand
 */
export const de_UpdateClusterConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClusterVersionCommand
 */
export const de_UpdateClusterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEksAnywhereSubscriptionCommand
 */
export const de_UpdateEksAnywhereSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEksAnywhereSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscription: (_) => de_EksAnywhereSubscription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNodegroupConfigCommand
 */
export const de_UpdateNodegroupConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNodegroupVersionCommand
 */
export const de_UpdateNodegroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePodIdentityAssociationCommand
 */
export const de_UpdatePodIdentityAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePodIdentityAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    association: (_) => de_PodIdentityAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.eks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      throw await de_UnsupportedAvailabilityZoneExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.eks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourcePropagationDelayException":
    case "com.amazonaws.eks#ResourcePropagationDelayException":
      throw await de_ResourcePropagationDelayExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.eks#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ClientExceptionRes
 */
const de_ClientExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
    subscriptionId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    fargateProfileName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
    subscriptionId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
    subscriptionId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    clusterName: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
    subscriptionId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    fargateProfileName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
    subscriptionId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourcePropagationDelayExceptionRes
 */
const de_ResourcePropagationDelayExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePropagationDelayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourcePropagationDelayException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServerExceptionRes
 */
const de_ServerExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
    subscriptionId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    clusterName: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionRes
 */
const de_UnsupportedAvailabilityZoneExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZoneException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
    validZones: _json,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedAvailabilityZoneException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccessScope omitted.

// se_AddonNamespaceConfigRequest omitted.

// se_AddonPodIdentityAssociations omitted.

// se_AddonPodIdentityAssociationsList omitted.

// se_BlockStorage omitted.

// se_CategoryList omitted.

// se_ComputeConfigRequest omitted.

// se_ConnectorConfigRequest omitted.

// se_ControlPlanePlacementRequest omitted.

// se_CreateAccessConfigRequest omitted.

// se_EksAnywhereSubscriptionTerm omitted.

// se_ElasticLoadBalancing omitted.

// se_EncryptionConfig omitted.

// se_EncryptionConfigList omitted.

// se_FargateProfileLabel omitted.

// se_FargateProfileSelector omitted.

// se_FargateProfileSelectors omitted.

// se_IdentityProviderConfig omitted.

// se_InsightsFilter omitted.

// se_InsightStatusValueList omitted.

// se_KubernetesNetworkConfigRequest omitted.

// se_labelsKeyList omitted.

// se_labelsMap omitted.

// se_LaunchTemplateSpecification omitted.

// se_Logging omitted.

// se_LogSetup omitted.

// se_LogSetups omitted.

// se_LogTypes omitted.

// se_NodegroupScalingConfig omitted.

// se_NodegroupUpdateConfig omitted.

// se_NodeRepairConfig omitted.

// se_NodeRepairConfigOverrides omitted.

// se_NodeRepairConfigOverridesList omitted.

// se_OidcIdentityProviderConfigRequest omitted.

// se_OutpostConfigRequest omitted.

// se_Provider omitted.

// se_RemoteAccessConfig omitted.

// se_RemoteNetworkConfigRequest omitted.

// se_RemoteNodeNetwork omitted.

// se_RemoteNodeNetworkList omitted.

// se_RemotePodNetwork omitted.

// se_RemotePodNetworkList omitted.

// se_requiredClaimsMap omitted.

// se_StorageConfigRequest omitted.

// se_StringList omitted.

// se_TagMap omitted.

// se_Taint omitted.

// se_taintsList omitted.

// se_UpdateAccessConfigRequest omitted.

// se_UpdateLabelsPayload omitted.

// se_UpdateTaintsPayload omitted.

// se_UpgradePolicyRequest omitted.

// se_VpcConfigRequest omitted.

// se_ZonalShiftConfigRequest omitted.

// de_AccessConfigResponse omitted.

/**
 * deserializeAws_restJson1AccessEntry
 */
const de_AccessEntry = (output: any, context: __SerdeContext): AccessEntry => {
  return take(output, {
    accessEntryArn: __expectString,
    clusterName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    kubernetesGroups: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    principalArn: __expectString,
    tags: _json,
    type: __expectString,
    username: __expectString,
  }) as any;
};

// de_AccessPoliciesList omitted.

// de_AccessPolicy omitted.

// de_AccessScope omitted.

// de_AdditionalInfoMap omitted.

/**
 * deserializeAws_restJson1Addon
 */
const de_Addon = (output: any, context: __SerdeContext): Addon => {
  return take(output, {
    addonArn: __expectString,
    addonName: __expectString,
    addonVersion: __expectString,
    clusterName: __expectString,
    configurationValues: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    health: _json,
    marketplaceInformation: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    namespaceConfig: _json,
    owner: __expectString,
    podIdentityAssociations: _json,
    publisher: __expectString,
    serviceAccountRoleArn: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

// de_AddonCompatibilityDetail omitted.

// de_AddonCompatibilityDetails omitted.

// de_AddonHealth omitted.

// de_AddonInfo omitted.

// de_AddonIssue omitted.

// de_AddonIssueList omitted.

// de_AddonNamespaceConfigResponse omitted.

// de_AddonPodIdentityConfiguration omitted.

// de_AddonPodIdentityConfigurationList omitted.

// de_Addons omitted.

// de_AddonVersionInfo omitted.

// de_AddonVersionInfoList omitted.

/**
 * deserializeAws_restJson1AssociatedAccessPoliciesList
 */
const de_AssociatedAccessPoliciesList = (output: any, context: __SerdeContext): AssociatedAccessPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociatedAccessPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssociatedAccessPolicy
 */
const de_AssociatedAccessPolicy = (output: any, context: __SerdeContext): AssociatedAccessPolicy => {
  return take(output, {
    accessScope: _json,
    associatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    policyArn: __expectString,
  }) as any;
};

// de_AutoScalingGroup omitted.

// de_AutoScalingGroupList omitted.

// de_BlockStorage omitted.

// de_Certificate omitted.

/**
 * deserializeAws_restJson1ClientStat
 */
const de_ClientStat = (output: any, context: __SerdeContext): ClientStat => {
  return take(output, {
    lastRequestTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    numberOfRequestsLast30Days: __expectInt32,
    userAgent: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ClientStats
 */
const de_ClientStats = (output: any, context: __SerdeContext): ClientStat[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClientStat(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return take(output, {
    accessConfig: _json,
    arn: __expectString,
    certificateAuthority: _json,
    clientRequestToken: __expectString,
    computeConfig: _json,
    connectorConfig: (_: any) => de_ConnectorConfigResponse(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletionProtection: __expectBoolean,
    encryptionConfig: _json,
    endpoint: __expectString,
    health: _json,
    id: __expectString,
    identity: _json,
    kubernetesNetworkConfig: _json,
    logging: _json,
    name: __expectString,
    outpostConfig: _json,
    platformVersion: __expectString,
    remoteNetworkConfig: _json,
    resourcesVpcConfig: _json,
    roleArn: __expectString,
    status: __expectString,
    storageConfig: _json,
    tags: _json,
    upgradePolicy: _json,
    version: __expectString,
    zonalShiftConfig: _json,
  }) as any;
};

// de_ClusterHealth omitted.

// de_ClusterIssue omitted.

// de_ClusterIssueList omitted.

/**
 * deserializeAws_restJson1ClusterVersionInformation
 */
const de_ClusterVersionInformation = (output: any, context: __SerdeContext): ClusterVersionInformation => {
  return take(output, {
    clusterType: __expectString,
    clusterVersion: __expectString,
    defaultPlatformVersion: __expectString,
    defaultVersion: __expectBoolean,
    endOfExtendedSupportDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    endOfStandardSupportDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    kubernetesPatchVersion: __expectString,
    releaseDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    versionStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterVersionList
 */
const de_ClusterVersionList = (output: any, context: __SerdeContext): ClusterVersionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterVersionInformation(entry, context);
    });
  return retVal;
};

// de_Compatibilities omitted.

// de_Compatibility omitted.

// de_ComputeConfigResponse omitted.

/**
 * deserializeAws_restJson1ConnectorConfigResponse
 */
const de_ConnectorConfigResponse = (output: any, context: __SerdeContext): ConnectorConfigResponse => {
  return take(output, {
    activationCode: __expectString,
    activationExpiry: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    activationId: __expectString,
    provider: __expectString,
    roleArn: __expectString,
  }) as any;
};

// de_ControlPlanePlacementResponse omitted.

/**
 * deserializeAws_restJson1DeprecationDetail
 */
const de_DeprecationDetail = (output: any, context: __SerdeContext): DeprecationDetail => {
  return take(output, {
    clientStats: (_: any) => de_ClientStats(_, context),
    replacedWith: __expectString,
    startServingReplacementVersion: __expectString,
    stopServingVersion: __expectString,
    usage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeprecationDetails
 */
const de_DeprecationDetails = (output: any, context: __SerdeContext): DeprecationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeprecationDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EksAnywhereSubscription
 */
const de_EksAnywhereSubscription = (output: any, context: __SerdeContext): EksAnywhereSubscription => {
  return take(output, {
    arn: __expectString,
    autoRenew: __expectBoolean,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    effectiveDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    licenseArns: _json,
    licenseQuantity: __expectInt32,
    licenseType: __expectString,
    licenses: _json,
    status: __expectString,
    tags: _json,
    term: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1EksAnywhereSubscriptionList
 */
const de_EksAnywhereSubscriptionList = (output: any, context: __SerdeContext): EksAnywhereSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EksAnywhereSubscription(entry, context);
    });
  return retVal;
};

// de_EksAnywhereSubscriptionTerm omitted.

// de_ElasticLoadBalancing omitted.

// de_EncryptionConfig omitted.

// de_EncryptionConfigList omitted.

// de_ErrorDetail omitted.

// de_ErrorDetails omitted.

/**
 * deserializeAws_restJson1FargateProfile
 */
const de_FargateProfile = (output: any, context: __SerdeContext): FargateProfile => {
  return take(output, {
    clusterName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fargateProfileArn: __expectString,
    fargateProfileName: __expectString,
    health: _json,
    podExecutionRoleArn: __expectString,
    selectors: _json,
    status: __expectString,
    subnets: _json,
    tags: _json,
  }) as any;
};

// de_FargateProfileHealth omitted.

// de_FargateProfileIssue omitted.

// de_FargateProfileIssueList omitted.

// de_FargateProfileLabel omitted.

// de_FargateProfileSelector omitted.

// de_FargateProfileSelectors omitted.

// de_Identity omitted.

// de_IdentityProviderConfig omitted.

// de_IdentityProviderConfigResponse omitted.

// de_IdentityProviderConfigs omitted.

/**
 * deserializeAws_restJson1Insight
 */
const de_Insight = (output: any, context: __SerdeContext): Insight => {
  return take(output, {
    additionalInfo: _json,
    category: __expectString,
    categorySpecificSummary: (_: any) => de_InsightCategorySpecificSummary(_, context),
    description: __expectString,
    id: __expectString,
    insightStatus: _json,
    kubernetesVersion: __expectString,
    lastRefreshTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastTransitionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    recommendation: __expectString,
    resources: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1InsightCategorySpecificSummary
 */
const de_InsightCategorySpecificSummary = (output: any, context: __SerdeContext): InsightCategorySpecificSummary => {
  return take(output, {
    addonCompatibilityDetails: _json,
    deprecationDetails: (_: any) => de_DeprecationDetails(_, context),
  }) as any;
};

// de_InsightResourceDetail omitted.

// de_InsightResourceDetails omitted.

// de_InsightStatus omitted.

/**
 * deserializeAws_restJson1InsightSummaries
 */
const de_InsightSummaries = (output: any, context: __SerdeContext): InsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InsightSummary
 */
const de_InsightSummary = (output: any, context: __SerdeContext): InsightSummary => {
  return take(output, {
    category: __expectString,
    description: __expectString,
    id: __expectString,
    insightStatus: _json,
    kubernetesVersion: __expectString,
    lastRefreshTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastTransitionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

// de_Issue omitted.

// de_IssueList omitted.

// de_KubernetesNetworkConfigResponse omitted.

// de_labelsMap omitted.

// de_LaunchTemplateSpecification omitted.

// de_License omitted.

// de_LicenseList omitted.

// de_Logging omitted.

// de_LogSetup omitted.

// de_LogSetups omitted.

// de_LogTypes omitted.

// de_MarketplaceInformation omitted.

/**
 * deserializeAws_restJson1Nodegroup
 */
const de_Nodegroup = (output: any, context: __SerdeContext): Nodegroup => {
  return take(output, {
    amiType: __expectString,
    capacityType: __expectString,
    clusterName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    diskSize: __expectInt32,
    health: _json,
    instanceTypes: _json,
    labels: _json,
    launchTemplate: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nodeRepairConfig: _json,
    nodeRole: __expectString,
    nodegroupArn: __expectString,
    nodegroupName: __expectString,
    releaseVersion: __expectString,
    remoteAccess: _json,
    resources: _json,
    scalingConfig: _json,
    status: __expectString,
    subnets: _json,
    tags: _json,
    taints: _json,
    updateConfig: _json,
    version: __expectString,
  }) as any;
};

// de_NodegroupHealth omitted.

// de_NodegroupResources omitted.

// de_NodegroupScalingConfig omitted.

// de_NodegroupUpdateConfig omitted.

// de_NodeRepairConfig omitted.

// de_NodeRepairConfigOverrides omitted.

// de_NodeRepairConfigOverridesList omitted.

// de_OIDC omitted.

// de_OidcIdentityProviderConfig omitted.

// de_OutpostConfigResponse omitted.

/**
 * deserializeAws_restJson1PodIdentityAssociation
 */
const de_PodIdentityAssociation = (output: any, context: __SerdeContext): PodIdentityAssociation => {
  return take(output, {
    associationArn: __expectString,
    associationId: __expectString,
    clusterName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    disableSessionTags: __expectBoolean,
    externalId: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    namespace: __expectString,
    ownerArn: __expectString,
    roleArn: __expectString,
    serviceAccount: __expectString,
    tags: _json,
    targetRoleArn: __expectString,
  }) as any;
};

// de_PodIdentityAssociationSummaries omitted.

// de_PodIdentityAssociationSummary omitted.

// de_Provider omitted.

// de_RemoteAccessConfig omitted.

// de_RemoteNetworkConfigResponse omitted.

// de_RemoteNodeNetwork omitted.

// de_RemoteNodeNetworkList omitted.

// de_RemotePodNetwork omitted.

// de_RemotePodNetworkList omitted.

// de_requiredClaimsMap omitted.

// de_StorageConfigResponse omitted.

// de_StringList omitted.

// de_TagMap omitted.

// de_Taint omitted.

// de_taintsList omitted.

/**
 * deserializeAws_restJson1Update
 */
const de_Update = (output: any, context: __SerdeContext): Update => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errors: _json,
    id: __expectString,
    params: _json,
    status: __expectString,
    type: __expectString,
  }) as any;
};

// de_UpdateParam omitted.

// de_UpdateParams omitted.

// de_UpgradePolicyResponse omitted.

// de_VpcConfigResponse omitted.

// de_ZonalShiftConfigResponse omitted.

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

const _aN = "addonName";
const _aPA = "associatedPolicyArn";
const _aV = "addonVersion";
const _cT = "clusterType";
const _cV = "clusterVersions";
const _dO = "defaultOnly";
const _i = "include";
const _iA = "includeAll";
const _iS = "includeStatus";
const _kV = "kubernetesVersion";
const _mR = "maxResults";
const _n = "namespace";
const _nN = "nodegroupName";
const _nT = "nextToken";
const _o = "owners";
const _p = "preserve";
const _pu = "publishers";
const _s = "status";
const _sA = "serviceAccount";
const _t = "types";
const _tK = "tagKeys";
const _vS = "versionStatus";
