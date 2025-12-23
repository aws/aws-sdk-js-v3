// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateAccessPolicyCommand,
  AssociateAccessPolicyCommandInput,
  AssociateAccessPolicyCommandOutput,
} from "./commands/AssociateAccessPolicyCommand";
import {
  AssociateEncryptionConfigCommand,
  AssociateEncryptionConfigCommandInput,
  AssociateEncryptionConfigCommandOutput,
} from "./commands/AssociateEncryptionConfigCommand";
import {
  AssociateIdentityProviderConfigCommand,
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
} from "./commands/AssociateIdentityProviderConfigCommand";
import {
  CreateAccessEntryCommand,
  CreateAccessEntryCommandInput,
  CreateAccessEntryCommandOutput,
} from "./commands/CreateAccessEntryCommand";
import { CreateAddonCommand, CreateAddonCommandInput, CreateAddonCommandOutput } from "./commands/CreateAddonCommand";
import {
  CreateCapabilityCommand,
  CreateCapabilityCommandInput,
  CreateCapabilityCommandOutput,
} from "./commands/CreateCapabilityCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateEksAnywhereSubscriptionCommand,
  CreateEksAnywhereSubscriptionCommandInput,
  CreateEksAnywhereSubscriptionCommandOutput,
} from "./commands/CreateEksAnywhereSubscriptionCommand";
import {
  CreateFargateProfileCommand,
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
} from "./commands/CreateFargateProfileCommand";
import {
  CreateNodegroupCommand,
  CreateNodegroupCommandInput,
  CreateNodegroupCommandOutput,
} from "./commands/CreateNodegroupCommand";
import {
  CreatePodIdentityAssociationCommand,
  CreatePodIdentityAssociationCommandInput,
  CreatePodIdentityAssociationCommandOutput,
} from "./commands/CreatePodIdentityAssociationCommand";
import {
  DeleteAccessEntryCommand,
  DeleteAccessEntryCommandInput,
  DeleteAccessEntryCommandOutput,
} from "./commands/DeleteAccessEntryCommand";
import { DeleteAddonCommand, DeleteAddonCommandInput, DeleteAddonCommandOutput } from "./commands/DeleteAddonCommand";
import {
  DeleteCapabilityCommand,
  DeleteCapabilityCommandInput,
  DeleteCapabilityCommandOutput,
} from "./commands/DeleteCapabilityCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteEksAnywhereSubscriptionCommand,
  DeleteEksAnywhereSubscriptionCommandInput,
  DeleteEksAnywhereSubscriptionCommandOutput,
} from "./commands/DeleteEksAnywhereSubscriptionCommand";
import {
  DeleteFargateProfileCommand,
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
} from "./commands/DeleteFargateProfileCommand";
import {
  DeleteNodegroupCommand,
  DeleteNodegroupCommandInput,
  DeleteNodegroupCommandOutput,
} from "./commands/DeleteNodegroupCommand";
import {
  DeletePodIdentityAssociationCommand,
  DeletePodIdentityAssociationCommandInput,
  DeletePodIdentityAssociationCommandOutput,
} from "./commands/DeletePodIdentityAssociationCommand";
import {
  DeregisterClusterCommand,
  DeregisterClusterCommandInput,
  DeregisterClusterCommandOutput,
} from "./commands/DeregisterClusterCommand";
import {
  DescribeAccessEntryCommand,
  DescribeAccessEntryCommandInput,
  DescribeAccessEntryCommandOutput,
} from "./commands/DescribeAccessEntryCommand";
import {
  DescribeAddonCommand,
  DescribeAddonCommandInput,
  DescribeAddonCommandOutput,
} from "./commands/DescribeAddonCommand";
import {
  DescribeAddonConfigurationCommand,
  DescribeAddonConfigurationCommandInput,
  DescribeAddonConfigurationCommandOutput,
} from "./commands/DescribeAddonConfigurationCommand";
import {
  DescribeAddonVersionsCommand,
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "./commands/DescribeAddonVersionsCommand";
import {
  DescribeCapabilityCommand,
  DescribeCapabilityCommandInput,
  DescribeCapabilityCommandOutput,
} from "./commands/DescribeCapabilityCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import {
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "./commands/DescribeClusterVersionsCommand";
import {
  DescribeEksAnywhereSubscriptionCommand,
  DescribeEksAnywhereSubscriptionCommandInput,
  DescribeEksAnywhereSubscriptionCommandOutput,
} from "./commands/DescribeEksAnywhereSubscriptionCommand";
import {
  DescribeFargateProfileCommand,
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput,
} from "./commands/DescribeFargateProfileCommand";
import {
  DescribeIdentityProviderConfigCommand,
  DescribeIdentityProviderConfigCommandInput,
  DescribeIdentityProviderConfigCommandOutput,
} from "./commands/DescribeIdentityProviderConfigCommand";
import {
  DescribeInsightCommand,
  DescribeInsightCommandInput,
  DescribeInsightCommandOutput,
} from "./commands/DescribeInsightCommand";
import {
  DescribeInsightsRefreshCommand,
  DescribeInsightsRefreshCommandInput,
  DescribeInsightsRefreshCommandOutput,
} from "./commands/DescribeInsightsRefreshCommand";
import {
  DescribeNodegroupCommand,
  DescribeNodegroupCommandInput,
  DescribeNodegroupCommandOutput,
} from "./commands/DescribeNodegroupCommand";
import {
  DescribePodIdentityAssociationCommand,
  DescribePodIdentityAssociationCommandInput,
  DescribePodIdentityAssociationCommandOutput,
} from "./commands/DescribePodIdentityAssociationCommand";
import {
  DescribeUpdateCommand,
  DescribeUpdateCommandInput,
  DescribeUpdateCommandOutput,
} from "./commands/DescribeUpdateCommand";
import {
  DisassociateAccessPolicyCommand,
  DisassociateAccessPolicyCommandInput,
  DisassociateAccessPolicyCommandOutput,
} from "./commands/DisassociateAccessPolicyCommand";
import {
  DisassociateIdentityProviderConfigCommand,
  DisassociateIdentityProviderConfigCommandInput,
  DisassociateIdentityProviderConfigCommandOutput,
} from "./commands/DisassociateIdentityProviderConfigCommand";
import {
  ListAccessEntriesCommand,
  ListAccessEntriesCommandInput,
  ListAccessEntriesCommandOutput,
} from "./commands/ListAccessEntriesCommand";
import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand";
import { ListAddonsCommand, ListAddonsCommandInput, ListAddonsCommandOutput } from "./commands/ListAddonsCommand";
import {
  ListAssociatedAccessPoliciesCommand,
  ListAssociatedAccessPoliciesCommandInput,
  ListAssociatedAccessPoliciesCommandOutput,
} from "./commands/ListAssociatedAccessPoliciesCommand";
import {
  ListCapabilitiesCommand,
  ListCapabilitiesCommandInput,
  ListCapabilitiesCommandOutput,
} from "./commands/ListCapabilitiesCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListEksAnywhereSubscriptionsCommand,
  ListEksAnywhereSubscriptionsCommandInput,
  ListEksAnywhereSubscriptionsCommandOutput,
} from "./commands/ListEksAnywhereSubscriptionsCommand";
import {
  ListFargateProfilesCommand,
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "./commands/ListFargateProfilesCommand";
import {
  ListIdentityProviderConfigsCommand,
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "./commands/ListIdentityProviderConfigsCommand";
import {
  ListInsightsCommand,
  ListInsightsCommandInput,
  ListInsightsCommandOutput,
} from "./commands/ListInsightsCommand";
import {
  ListNodegroupsCommand,
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput,
} from "./commands/ListNodegroupsCommand";
import {
  ListPodIdentityAssociationsCommand,
  ListPodIdentityAssociationsCommandInput,
  ListPodIdentityAssociationsCommandOutput,
} from "./commands/ListPodIdentityAssociationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUpdatesCommand, ListUpdatesCommandInput, ListUpdatesCommandOutput } from "./commands/ListUpdatesCommand";
import {
  RegisterClusterCommand,
  RegisterClusterCommandInput,
  RegisterClusterCommandOutput,
} from "./commands/RegisterClusterCommand";
import {
  StartInsightsRefreshCommand,
  StartInsightsRefreshCommandInput,
  StartInsightsRefreshCommandOutput,
} from "./commands/StartInsightsRefreshCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessEntryCommand,
  UpdateAccessEntryCommandInput,
  UpdateAccessEntryCommandOutput,
} from "./commands/UpdateAccessEntryCommand";
import { UpdateAddonCommand, UpdateAddonCommandInput, UpdateAddonCommandOutput } from "./commands/UpdateAddonCommand";
import {
  UpdateCapabilityCommand,
  UpdateCapabilityCommandInput,
  UpdateCapabilityCommandOutput,
} from "./commands/UpdateCapabilityCommand";
import {
  UpdateClusterConfigCommand,
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput,
} from "./commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommand,
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput,
} from "./commands/UpdateClusterVersionCommand";
import {
  UpdateEksAnywhereSubscriptionCommand,
  UpdateEksAnywhereSubscriptionCommandInput,
  UpdateEksAnywhereSubscriptionCommandOutput,
} from "./commands/UpdateEksAnywhereSubscriptionCommand";
import {
  UpdateNodegroupConfigCommand,
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
} from "./commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommand,
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
} from "./commands/UpdateNodegroupVersionCommand";
import {
  UpdatePodIdentityAssociationCommand,
  UpdatePodIdentityAssociationCommandInput,
  UpdatePodIdentityAssociationCommandOutput,
} from "./commands/UpdatePodIdentityAssociationCommand";
import { EKSClient } from "./EKSClient";

const commands = {
  AssociateAccessPolicyCommand,
  AssociateEncryptionConfigCommand,
  AssociateIdentityProviderConfigCommand,
  CreateAccessEntryCommand,
  CreateAddonCommand,
  CreateCapabilityCommand,
  CreateClusterCommand,
  CreateEksAnywhereSubscriptionCommand,
  CreateFargateProfileCommand,
  CreateNodegroupCommand,
  CreatePodIdentityAssociationCommand,
  DeleteAccessEntryCommand,
  DeleteAddonCommand,
  DeleteCapabilityCommand,
  DeleteClusterCommand,
  DeleteEksAnywhereSubscriptionCommand,
  DeleteFargateProfileCommand,
  DeleteNodegroupCommand,
  DeletePodIdentityAssociationCommand,
  DeregisterClusterCommand,
  DescribeAccessEntryCommand,
  DescribeAddonCommand,
  DescribeAddonConfigurationCommand,
  DescribeAddonVersionsCommand,
  DescribeCapabilityCommand,
  DescribeClusterCommand,
  DescribeClusterVersionsCommand,
  DescribeEksAnywhereSubscriptionCommand,
  DescribeFargateProfileCommand,
  DescribeIdentityProviderConfigCommand,
  DescribeInsightCommand,
  DescribeInsightsRefreshCommand,
  DescribeNodegroupCommand,
  DescribePodIdentityAssociationCommand,
  DescribeUpdateCommand,
  DisassociateAccessPolicyCommand,
  DisassociateIdentityProviderConfigCommand,
  ListAccessEntriesCommand,
  ListAccessPoliciesCommand,
  ListAddonsCommand,
  ListAssociatedAccessPoliciesCommand,
  ListCapabilitiesCommand,
  ListClustersCommand,
  ListEksAnywhereSubscriptionsCommand,
  ListFargateProfilesCommand,
  ListIdentityProviderConfigsCommand,
  ListInsightsCommand,
  ListNodegroupsCommand,
  ListPodIdentityAssociationsCommand,
  ListTagsForResourceCommand,
  ListUpdatesCommand,
  RegisterClusterCommand,
  StartInsightsRefreshCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessEntryCommand,
  UpdateAddonCommand,
  UpdateCapabilityCommand,
  UpdateClusterConfigCommand,
  UpdateClusterVersionCommand,
  UpdateEksAnywhereSubscriptionCommand,
  UpdateNodegroupConfigCommand,
  UpdateNodegroupVersionCommand,
  UpdatePodIdentityAssociationCommand,
};

export interface EKS {
  /**
   * @see {@link AssociateAccessPolicyCommand}
   */
  associateAccessPolicy(
    args: AssociateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAccessPolicyCommandOutput>;
  associateAccessPolicy(
    args: AssociateAccessPolicyCommandInput,
    cb: (err: any, data?: AssociateAccessPolicyCommandOutput) => void
  ): void;
  associateAccessPolicy(
    args: AssociateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateEncryptionConfigCommand}
   */
  associateEncryptionConfig(
    args: AssociateEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEncryptionConfigCommandOutput>;
  associateEncryptionConfig(
    args: AssociateEncryptionConfigCommandInput,
    cb: (err: any, data?: AssociateEncryptionConfigCommandOutput) => void
  ): void;
  associateEncryptionConfig(
    args: AssociateEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateIdentityProviderConfigCommand}
   */
  associateIdentityProviderConfig(
    args: AssociateIdentityProviderConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIdentityProviderConfigCommandOutput>;
  associateIdentityProviderConfig(
    args: AssociateIdentityProviderConfigCommandInput,
    cb: (err: any, data?: AssociateIdentityProviderConfigCommandOutput) => void
  ): void;
  associateIdentityProviderConfig(
    args: AssociateIdentityProviderConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIdentityProviderConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessEntryCommand}
   */
  createAccessEntry(
    args: CreateAccessEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessEntryCommandOutput>;
  createAccessEntry(
    args: CreateAccessEntryCommandInput,
    cb: (err: any, data?: CreateAccessEntryCommandOutput) => void
  ): void;
  createAccessEntry(
    args: CreateAccessEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAddonCommand}
   */
  createAddon(
    args: CreateAddonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddonCommandOutput>;
  createAddon(
    args: CreateAddonCommandInput,
    cb: (err: any, data?: CreateAddonCommandOutput) => void
  ): void;
  createAddon(
    args: CreateAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddonCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCapabilityCommand}
   */
  createCapability(
    args: CreateCapabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapabilityCommandOutput>;
  createCapability(
    args: CreateCapabilityCommandInput,
    cb: (err: any, data?: CreateCapabilityCommandOutput) => void
  ): void;
  createCapability(
    args: CreateCapabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEksAnywhereSubscriptionCommand}
   */
  createEksAnywhereSubscription(
    args: CreateEksAnywhereSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEksAnywhereSubscriptionCommandOutput>;
  createEksAnywhereSubscription(
    args: CreateEksAnywhereSubscriptionCommandInput,
    cb: (err: any, data?: CreateEksAnywhereSubscriptionCommandOutput) => void
  ): void;
  createEksAnywhereSubscription(
    args: CreateEksAnywhereSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEksAnywhereSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFargateProfileCommand}
   */
  createFargateProfile(
    args: CreateFargateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFargateProfileCommandOutput>;
  createFargateProfile(
    args: CreateFargateProfileCommandInput,
    cb: (err: any, data?: CreateFargateProfileCommandOutput) => void
  ): void;
  createFargateProfile(
    args: CreateFargateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFargateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNodegroupCommand}
   */
  createNodegroup(
    args: CreateNodegroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNodegroupCommandOutput>;
  createNodegroup(
    args: CreateNodegroupCommandInput,
    cb: (err: any, data?: CreateNodegroupCommandOutput) => void
  ): void;
  createNodegroup(
    args: CreateNodegroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodegroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePodIdentityAssociationCommand}
   */
  createPodIdentityAssociation(
    args: CreatePodIdentityAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePodIdentityAssociationCommandOutput>;
  createPodIdentityAssociation(
    args: CreatePodIdentityAssociationCommandInput,
    cb: (err: any, data?: CreatePodIdentityAssociationCommandOutput) => void
  ): void;
  createPodIdentityAssociation(
    args: CreatePodIdentityAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePodIdentityAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessEntryCommand}
   */
  deleteAccessEntry(
    args: DeleteAccessEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessEntryCommandOutput>;
  deleteAccessEntry(
    args: DeleteAccessEntryCommandInput,
    cb: (err: any, data?: DeleteAccessEntryCommandOutput) => void
  ): void;
  deleteAccessEntry(
    args: DeleteAccessEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAddonCommand}
   */
  deleteAddon(
    args: DeleteAddonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAddonCommandOutput>;
  deleteAddon(
    args: DeleteAddonCommandInput,
    cb: (err: any, data?: DeleteAddonCommandOutput) => void
  ): void;
  deleteAddon(
    args: DeleteAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAddonCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCapabilityCommand}
   */
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCapabilityCommandOutput>;
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    cb: (err: any, data?: DeleteCapabilityCommandOutput) => void
  ): void;
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEksAnywhereSubscriptionCommand}
   */
  deleteEksAnywhereSubscription(
    args: DeleteEksAnywhereSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEksAnywhereSubscriptionCommandOutput>;
  deleteEksAnywhereSubscription(
    args: DeleteEksAnywhereSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEksAnywhereSubscriptionCommandOutput) => void
  ): void;
  deleteEksAnywhereSubscription(
    args: DeleteEksAnywhereSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEksAnywhereSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFargateProfileCommand}
   */
  deleteFargateProfile(
    args: DeleteFargateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFargateProfileCommandOutput>;
  deleteFargateProfile(
    args: DeleteFargateProfileCommandInput,
    cb: (err: any, data?: DeleteFargateProfileCommandOutput) => void
  ): void;
  deleteFargateProfile(
    args: DeleteFargateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFargateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNodegroupCommand}
   */
  deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNodegroupCommandOutput>;
  deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    cb: (err: any, data?: DeleteNodegroupCommandOutput) => void
  ): void;
  deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNodegroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePodIdentityAssociationCommand}
   */
  deletePodIdentityAssociation(
    args: DeletePodIdentityAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePodIdentityAssociationCommandOutput>;
  deletePodIdentityAssociation(
    args: DeletePodIdentityAssociationCommandInput,
    cb: (err: any, data?: DeletePodIdentityAssociationCommandOutput) => void
  ): void;
  deletePodIdentityAssociation(
    args: DeletePodIdentityAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePodIdentityAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterClusterCommand}
   */
  deregisterCluster(
    args: DeregisterClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterClusterCommandOutput>;
  deregisterCluster(
    args: DeregisterClusterCommandInput,
    cb: (err: any, data?: DeregisterClusterCommandOutput) => void
  ): void;
  deregisterCluster(
    args: DeregisterClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessEntryCommand}
   */
  describeAccessEntry(
    args: DescribeAccessEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessEntryCommandOutput>;
  describeAccessEntry(
    args: DescribeAccessEntryCommandInput,
    cb: (err: any, data?: DescribeAccessEntryCommandOutput) => void
  ): void;
  describeAccessEntry(
    args: DescribeAccessEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddonCommand}
   */
  describeAddon(
    args: DescribeAddonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddonCommandOutput>;
  describeAddon(
    args: DescribeAddonCommandInput,
    cb: (err: any, data?: DescribeAddonCommandOutput) => void
  ): void;
  describeAddon(
    args: DescribeAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddonCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddonConfigurationCommand}
   */
  describeAddonConfiguration(
    args: DescribeAddonConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddonConfigurationCommandOutput>;
  describeAddonConfiguration(
    args: DescribeAddonConfigurationCommandInput,
    cb: (err: any, data?: DescribeAddonConfigurationCommandOutput) => void
  ): void;
  describeAddonConfiguration(
    args: DescribeAddonConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddonConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddonVersionsCommand}
   */
  describeAddonVersions(): Promise<DescribeAddonVersionsCommandOutput>;
  describeAddonVersions(
    args: DescribeAddonVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddonVersionsCommandOutput>;
  describeAddonVersions(
    args: DescribeAddonVersionsCommandInput,
    cb: (err: any, data?: DescribeAddonVersionsCommandOutput) => void
  ): void;
  describeAddonVersions(
    args: DescribeAddonVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddonVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapabilityCommand}
   */
  describeCapability(
    args: DescribeCapabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapabilityCommandOutput>;
  describeCapability(
    args: DescribeCapabilityCommandInput,
    cb: (err: any, data?: DescribeCapabilityCommandOutput) => void
  ): void;
  describeCapability(
    args: DescribeCapabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterVersionsCommand}
   */
  describeClusterVersions(): Promise<DescribeClusterVersionsCommandOutput>;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterVersionsCommandOutput>;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): void;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEksAnywhereSubscriptionCommand}
   */
  describeEksAnywhereSubscription(
    args: DescribeEksAnywhereSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEksAnywhereSubscriptionCommandOutput>;
  describeEksAnywhereSubscription(
    args: DescribeEksAnywhereSubscriptionCommandInput,
    cb: (err: any, data?: DescribeEksAnywhereSubscriptionCommandOutput) => void
  ): void;
  describeEksAnywhereSubscription(
    args: DescribeEksAnywhereSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEksAnywhereSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFargateProfileCommand}
   */
  describeFargateProfile(
    args: DescribeFargateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFargateProfileCommandOutput>;
  describeFargateProfile(
    args: DescribeFargateProfileCommandInput,
    cb: (err: any, data?: DescribeFargateProfileCommandOutput) => void
  ): void;
  describeFargateProfile(
    args: DescribeFargateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFargateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdentityProviderConfigCommand}
   */
  describeIdentityProviderConfig(
    args: DescribeIdentityProviderConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityProviderConfigCommandOutput>;
  describeIdentityProviderConfig(
    args: DescribeIdentityProviderConfigCommandInput,
    cb: (err: any, data?: DescribeIdentityProviderConfigCommandOutput) => void
  ): void;
  describeIdentityProviderConfig(
    args: DescribeIdentityProviderConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityProviderConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInsightCommand}
   */
  describeInsight(
    args: DescribeInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInsightCommandOutput>;
  describeInsight(
    args: DescribeInsightCommandInput,
    cb: (err: any, data?: DescribeInsightCommandOutput) => void
  ): void;
  describeInsight(
    args: DescribeInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInsightsRefreshCommand}
   */
  describeInsightsRefresh(
    args: DescribeInsightsRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInsightsRefreshCommandOutput>;
  describeInsightsRefresh(
    args: DescribeInsightsRefreshCommandInput,
    cb: (err: any, data?: DescribeInsightsRefreshCommandOutput) => void
  ): void;
  describeInsightsRefresh(
    args: DescribeInsightsRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInsightsRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNodegroupCommand}
   */
  describeNodegroup(
    args: DescribeNodegroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodegroupCommandOutput>;
  describeNodegroup(
    args: DescribeNodegroupCommandInput,
    cb: (err: any, data?: DescribeNodegroupCommandOutput) => void
  ): void;
  describeNodegroup(
    args: DescribeNodegroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodegroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePodIdentityAssociationCommand}
   */
  describePodIdentityAssociation(
    args: DescribePodIdentityAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePodIdentityAssociationCommandOutput>;
  describePodIdentityAssociation(
    args: DescribePodIdentityAssociationCommandInput,
    cb: (err: any, data?: DescribePodIdentityAssociationCommandOutput) => void
  ): void;
  describePodIdentityAssociation(
    args: DescribePodIdentityAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePodIdentityAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUpdateCommand}
   */
  describeUpdate(
    args: DescribeUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUpdateCommandOutput>;
  describeUpdate(
    args: DescribeUpdateCommandInput,
    cb: (err: any, data?: DescribeUpdateCommandOutput) => void
  ): void;
  describeUpdate(
    args: DescribeUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAccessPolicyCommand}
   */
  disassociateAccessPolicy(
    args: DisassociateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAccessPolicyCommandOutput>;
  disassociateAccessPolicy(
    args: DisassociateAccessPolicyCommandInput,
    cb: (err: any, data?: DisassociateAccessPolicyCommandOutput) => void
  ): void;
  disassociateAccessPolicy(
    args: DisassociateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateIdentityProviderConfigCommand}
   */
  disassociateIdentityProviderConfig(
    args: DisassociateIdentityProviderConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIdentityProviderConfigCommandOutput>;
  disassociateIdentityProviderConfig(
    args: DisassociateIdentityProviderConfigCommandInput,
    cb: (err: any, data?: DisassociateIdentityProviderConfigCommandOutput) => void
  ): void;
  disassociateIdentityProviderConfig(
    args: DisassociateIdentityProviderConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIdentityProviderConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessEntriesCommand}
   */
  listAccessEntries(
    args: ListAccessEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessEntriesCommandOutput>;
  listAccessEntries(
    args: ListAccessEntriesCommandInput,
    cb: (err: any, data?: ListAccessEntriesCommandOutput) => void
  ): void;
  listAccessEntries(
    args: ListAccessEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPoliciesCommand}
   */
  listAccessPolicies(): Promise<ListAccessPoliciesCommandOutput>;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPoliciesCommandOutput>;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAddonsCommand}
   */
  listAddons(
    args: ListAddonsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAddonsCommandOutput>;
  listAddons(
    args: ListAddonsCommandInput,
    cb: (err: any, data?: ListAddonsCommandOutput) => void
  ): void;
  listAddons(
    args: ListAddonsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAddonsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedAccessPoliciesCommand}
   */
  listAssociatedAccessPolicies(
    args: ListAssociatedAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedAccessPoliciesCommandOutput>;
  listAssociatedAccessPolicies(
    args: ListAssociatedAccessPoliciesCommandInput,
    cb: (err: any, data?: ListAssociatedAccessPoliciesCommandOutput) => void
  ): void;
  listAssociatedAccessPolicies(
    args: ListAssociatedAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedAccessPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCapabilitiesCommand}
   */
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCapabilitiesCommandOutput>;
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    cb: (err: any, data?: ListCapabilitiesCommandOutput) => void
  ): void;
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCapabilitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEksAnywhereSubscriptionsCommand}
   */
  listEksAnywhereSubscriptions(): Promise<ListEksAnywhereSubscriptionsCommandOutput>;
  listEksAnywhereSubscriptions(
    args: ListEksAnywhereSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEksAnywhereSubscriptionsCommandOutput>;
  listEksAnywhereSubscriptions(
    args: ListEksAnywhereSubscriptionsCommandInput,
    cb: (err: any, data?: ListEksAnywhereSubscriptionsCommandOutput) => void
  ): void;
  listEksAnywhereSubscriptions(
    args: ListEksAnywhereSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEksAnywhereSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFargateProfilesCommand}
   */
  listFargateProfiles(
    args: ListFargateProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFargateProfilesCommandOutput>;
  listFargateProfiles(
    args: ListFargateProfilesCommandInput,
    cb: (err: any, data?: ListFargateProfilesCommandOutput) => void
  ): void;
  listFargateProfiles(
    args: ListFargateProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFargateProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityProviderConfigsCommand}
   */
  listIdentityProviderConfigs(
    args: ListIdentityProviderConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityProviderConfigsCommandOutput>;
  listIdentityProviderConfigs(
    args: ListIdentityProviderConfigsCommandInput,
    cb: (err: any, data?: ListIdentityProviderConfigsCommandOutput) => void
  ): void;
  listIdentityProviderConfigs(
    args: ListIdentityProviderConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityProviderConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInsightsCommand}
   */
  listInsights(
    args: ListInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInsightsCommandOutput>;
  listInsights(
    args: ListInsightsCommandInput,
    cb: (err: any, data?: ListInsightsCommandOutput) => void
  ): void;
  listInsights(
    args: ListInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodegroupsCommand}
   */
  listNodegroups(
    args: ListNodegroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodegroupsCommandOutput>;
  listNodegroups(
    args: ListNodegroupsCommandInput,
    cb: (err: any, data?: ListNodegroupsCommandOutput) => void
  ): void;
  listNodegroups(
    args: ListNodegroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodegroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPodIdentityAssociationsCommand}
   */
  listPodIdentityAssociations(
    args: ListPodIdentityAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPodIdentityAssociationsCommandOutput>;
  listPodIdentityAssociations(
    args: ListPodIdentityAssociationsCommandInput,
    cb: (err: any, data?: ListPodIdentityAssociationsCommandOutput) => void
  ): void;
  listPodIdentityAssociations(
    args: ListPodIdentityAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPodIdentityAssociationsCommandOutput) => void
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
   * @see {@link ListUpdatesCommand}
   */
  listUpdates(
    args: ListUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUpdatesCommandOutput>;
  listUpdates(
    args: ListUpdatesCommandInput,
    cb: (err: any, data?: ListUpdatesCommandOutput) => void
  ): void;
  listUpdates(
    args: ListUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUpdatesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterClusterCommand}
   */
  registerCluster(
    args: RegisterClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterClusterCommandOutput>;
  registerCluster(
    args: RegisterClusterCommandInput,
    cb: (err: any, data?: RegisterClusterCommandOutput) => void
  ): void;
  registerCluster(
    args: RegisterClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInsightsRefreshCommand}
   */
  startInsightsRefresh(
    args: StartInsightsRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInsightsRefreshCommandOutput>;
  startInsightsRefresh(
    args: StartInsightsRefreshCommandInput,
    cb: (err: any, data?: StartInsightsRefreshCommandOutput) => void
  ): void;
  startInsightsRefresh(
    args: StartInsightsRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInsightsRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessEntryCommand}
   */
  updateAccessEntry(
    args: UpdateAccessEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessEntryCommandOutput>;
  updateAccessEntry(
    args: UpdateAccessEntryCommandInput,
    cb: (err: any, data?: UpdateAccessEntryCommandOutput) => void
  ): void;
  updateAccessEntry(
    args: UpdateAccessEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAddonCommand}
   */
  updateAddon(
    args: UpdateAddonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAddonCommandOutput>;
  updateAddon(
    args: UpdateAddonCommandInput,
    cb: (err: any, data?: UpdateAddonCommandOutput) => void
  ): void;
  updateAddon(
    args: UpdateAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAddonCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCapabilityCommand}
   */
  updateCapability(
    args: UpdateCapabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCapabilityCommandOutput>;
  updateCapability(
    args: UpdateCapabilityCommandInput,
    cb: (err: any, data?: UpdateCapabilityCommandOutput) => void
  ): void;
  updateCapability(
    args: UpdateCapabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterConfigCommand}
   */
  updateClusterConfig(
    args: UpdateClusterConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterConfigCommandOutput>;
  updateClusterConfig(
    args: UpdateClusterConfigCommandInput,
    cb: (err: any, data?: UpdateClusterConfigCommandOutput) => void
  ): void;
  updateClusterConfig(
    args: UpdateClusterConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterVersionCommand}
   */
  updateClusterVersion(
    args: UpdateClusterVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterVersionCommandOutput>;
  updateClusterVersion(
    args: UpdateClusterVersionCommandInput,
    cb: (err: any, data?: UpdateClusterVersionCommandOutput) => void
  ): void;
  updateClusterVersion(
    args: UpdateClusterVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEksAnywhereSubscriptionCommand}
   */
  updateEksAnywhereSubscription(
    args: UpdateEksAnywhereSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEksAnywhereSubscriptionCommandOutput>;
  updateEksAnywhereSubscription(
    args: UpdateEksAnywhereSubscriptionCommandInput,
    cb: (err: any, data?: UpdateEksAnywhereSubscriptionCommandOutput) => void
  ): void;
  updateEksAnywhereSubscription(
    args: UpdateEksAnywhereSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEksAnywhereSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNodegroupConfigCommand}
   */
  updateNodegroupConfig(
    args: UpdateNodegroupConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNodegroupConfigCommandOutput>;
  updateNodegroupConfig(
    args: UpdateNodegroupConfigCommandInput,
    cb: (err: any, data?: UpdateNodegroupConfigCommandOutput) => void
  ): void;
  updateNodegroupConfig(
    args: UpdateNodegroupConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNodegroupConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNodegroupVersionCommand}
   */
  updateNodegroupVersion(
    args: UpdateNodegroupVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNodegroupVersionCommandOutput>;
  updateNodegroupVersion(
    args: UpdateNodegroupVersionCommandInput,
    cb: (err: any, data?: UpdateNodegroupVersionCommandOutput) => void
  ): void;
  updateNodegroupVersion(
    args: UpdateNodegroupVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNodegroupVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePodIdentityAssociationCommand}
   */
  updatePodIdentityAssociation(
    args: UpdatePodIdentityAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePodIdentityAssociationCommandOutput>;
  updatePodIdentityAssociation(
    args: UpdatePodIdentityAssociationCommandInput,
    cb: (err: any, data?: UpdatePodIdentityAssociationCommandOutput) => void
  ): void;
  updatePodIdentityAssociation(
    args: UpdatePodIdentityAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePodIdentityAssociationCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on
 *             Amazon Web Services without needing to setup or maintain your own Kubernetes control plane. Kubernetes is an
 *             open-source system for automating the deployment, scaling, and management of
 *             containerized applications.</p>
 *          <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all
 *             the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS
 *             are fully compatible with applications running on any standard Kubernetes environment,
 *             whether running in on-premises data centers or public clouds. This means that you can
 *             easily migrate any standard Kubernetes application to Amazon EKS without any code modification
 *             required.</p>
 * @public
 */
export class EKS extends EKSClient implements EKS {}
createAggregatedClient(commands, EKS);
