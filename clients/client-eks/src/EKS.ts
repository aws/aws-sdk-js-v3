// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { CreateAddonCommand, CreateAddonCommandInput, CreateAddonCommandOutput } from "./commands/CreateAddonCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
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
import { DeleteAddonCommand, DeleteAddonCommandInput, DeleteAddonCommandOutput } from "./commands/DeleteAddonCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
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
  DeregisterClusterCommand,
  DeregisterClusterCommandInput,
  DeregisterClusterCommandOutput,
} from "./commands/DeregisterClusterCommand";
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
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
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
  DescribeNodegroupCommand,
  DescribeNodegroupCommandInput,
  DescribeNodegroupCommandOutput,
} from "./commands/DescribeNodegroupCommand";
import {
  DescribeUpdateCommand,
  DescribeUpdateCommandInput,
  DescribeUpdateCommandOutput,
} from "./commands/DescribeUpdateCommand";
import {
  DisassociateIdentityProviderConfigCommand,
  DisassociateIdentityProviderConfigCommandInput,
  DisassociateIdentityProviderConfigCommandOutput,
} from "./commands/DisassociateIdentityProviderConfigCommand";
import { ListAddonsCommand, ListAddonsCommandInput, ListAddonsCommandOutput } from "./commands/ListAddonsCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
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
  ListNodegroupsCommand,
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput,
} from "./commands/ListNodegroupsCommand";
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
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAddonCommand, UpdateAddonCommandInput, UpdateAddonCommandOutput } from "./commands/UpdateAddonCommand";
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
  UpdateNodegroupConfigCommand,
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
} from "./commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommand,
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
} from "./commands/UpdateNodegroupVersionCommand";
import { EKSClient, EKSClientConfig } from "./EKSClient";

const commands = {
  AssociateEncryptionConfigCommand,
  AssociateIdentityProviderConfigCommand,
  CreateAddonCommand,
  CreateClusterCommand,
  CreateFargateProfileCommand,
  CreateNodegroupCommand,
  DeleteAddonCommand,
  DeleteClusterCommand,
  DeleteFargateProfileCommand,
  DeleteNodegroupCommand,
  DeregisterClusterCommand,
  DescribeAddonCommand,
  DescribeAddonConfigurationCommand,
  DescribeAddonVersionsCommand,
  DescribeClusterCommand,
  DescribeFargateProfileCommand,
  DescribeIdentityProviderConfigCommand,
  DescribeNodegroupCommand,
  DescribeUpdateCommand,
  DisassociateIdentityProviderConfigCommand,
  ListAddonsCommand,
  ListClustersCommand,
  ListFargateProfilesCommand,
  ListIdentityProviderConfigsCommand,
  ListNodegroupsCommand,
  ListTagsForResourceCommand,
  ListUpdatesCommand,
  RegisterClusterCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAddonCommand,
  UpdateClusterConfigCommand,
  UpdateClusterVersionCommand,
  UpdateNodegroupConfigCommand,
  UpdateNodegroupVersionCommand,
};

export interface EKS {
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
   * @see {@link CreateAddonCommand}
   */
  createAddon(args: CreateAddonCommandInput, options?: __HttpHandlerOptions): Promise<CreateAddonCommandOutput>;
  createAddon(args: CreateAddonCommandInput, cb: (err: any, data?: CreateAddonCommandOutput) => void): void;
  createAddon(
    args: CreateAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddonCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
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
  createNodegroup(args: CreateNodegroupCommandInput, cb: (err: any, data?: CreateNodegroupCommandOutput) => void): void;
  createNodegroup(
    args: CreateNodegroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodegroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAddonCommand}
   */
  deleteAddon(args: DeleteAddonCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAddonCommandOutput>;
  deleteAddon(args: DeleteAddonCommandInput, cb: (err: any, data?: DeleteAddonCommandOutput) => void): void;
  deleteAddon(
    args: DeleteAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAddonCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
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
  deleteNodegroup(args: DeleteNodegroupCommandInput, cb: (err: any, data?: DeleteNodegroupCommandOutput) => void): void;
  deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNodegroupCommandOutput) => void
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
   * @see {@link DescribeAddonCommand}
   */
  describeAddon(args: DescribeAddonCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAddonCommandOutput>;
  describeAddon(args: DescribeAddonCommandInput, cb: (err: any, data?: DescribeAddonCommandOutput) => void): void;
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
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
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
   * @see {@link DescribeUpdateCommand}
   */
  describeUpdate(
    args: DescribeUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUpdateCommandOutput>;
  describeUpdate(args: DescribeUpdateCommandInput, cb: (err: any, data?: DescribeUpdateCommandOutput) => void): void;
  describeUpdate(
    args: DescribeUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUpdateCommandOutput) => void
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
   * @see {@link ListAddonsCommand}
   */
  listAddons(args: ListAddonsCommandInput, options?: __HttpHandlerOptions): Promise<ListAddonsCommandOutput>;
  listAddons(args: ListAddonsCommandInput, cb: (err: any, data?: ListAddonsCommandOutput) => void): void;
  listAddons(
    args: ListAddonsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAddonsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
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
   * @see {@link ListNodegroupsCommand}
   */
  listNodegroups(
    args: ListNodegroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodegroupsCommandOutput>;
  listNodegroups(args: ListNodegroupsCommandInput, cb: (err: any, data?: ListNodegroupsCommandOutput) => void): void;
  listNodegroups(
    args: ListNodegroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodegroupsCommandOutput) => void
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
  listUpdates(args: ListUpdatesCommandInput, options?: __HttpHandlerOptions): Promise<ListUpdatesCommandOutput>;
  listUpdates(args: ListUpdatesCommandInput, cb: (err: any, data?: ListUpdatesCommandOutput) => void): void;
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
  registerCluster(args: RegisterClusterCommandInput, cb: (err: any, data?: RegisterClusterCommandOutput) => void): void;
  registerCluster(
    args: RegisterClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAddonCommand}
   */
  updateAddon(args: UpdateAddonCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAddonCommandOutput>;
  updateAddon(args: UpdateAddonCommandInput, cb: (err: any, data?: UpdateAddonCommandOutput) => void): void;
  updateAddon(
    args: UpdateAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAddonCommandOutput) => void
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
}

/**
 * @public
 * <p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy
 *             for you to run Kubernetes on Amazon Web Services without needing to stand up or maintain
 *             your own Kubernetes control plane. Kubernetes is an open-source system for automating
 *             the deployment, scaling, and management of containerized applications. </p>
 *          <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so
 *             you can use all the existing plugins and tooling from the Kubernetes community.
 *             Applications running on Amazon EKS are fully compatible with applications
 *             running on any standard Kubernetes environment, whether running in on-premises data
 *             centers or public clouds. This means that you can easily migrate any standard Kubernetes
 *             application to Amazon EKS without any code modification required.</p>
 */
export class EKS extends EKSClient implements EKS {}
createAggregatedClient(commands, EKS);
