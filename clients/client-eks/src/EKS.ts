// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { EKSClient } from "./EKSClient";

/**
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
export class EKS extends EKSClient {
  /**
   * <p>Associate encryption configuration to an existing cluster.</p>
   *          <p>You can use this API to enable encryption on existing clusters which do not have
   *             encryption already enabled. This allows you to implement a defense-in-depth security
   *             strategy without migrating applications to new Amazon EKS clusters.</p>
   */
  public associateEncryptionConfig(
    args: AssociateEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEncryptionConfigCommandOutput>;
  public associateEncryptionConfig(
    args: AssociateEncryptionConfigCommandInput,
    cb: (err: any, data?: AssociateEncryptionConfigCommandOutput) => void
  ): void;
  public associateEncryptionConfig(
    args: AssociateEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEncryptionConfigCommandOutput) => void
  ): void;
  public associateEncryptionConfig(
    args: AssociateEncryptionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateEncryptionConfigCommandOutput) => void),
    cb?: (err: any, data?: AssociateEncryptionConfigCommandOutput) => void
  ): Promise<AssociateEncryptionConfigCommandOutput> | void {
    const command = new AssociateEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associate an identity provider configuration to a cluster.</p>
   *          <p>If you want to authenticate identities using an identity provider, you can create an
   *             identity provider configuration and associate it to your cluster. After configuring
   *             authentication to your cluster you can create Kubernetes <code>roles</code> and
   *                 <code>clusterroles</code> to assign permissions to the roles, and then bind the
   *             roles to the identities using Kubernetes <code>rolebindings</code> and
   *                 <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
   *                 Authorization</a> in the Kubernetes documentation.</p>
   */
  public associateIdentityProviderConfig(
    args: AssociateIdentityProviderConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIdentityProviderConfigCommandOutput>;
  public associateIdentityProviderConfig(
    args: AssociateIdentityProviderConfigCommandInput,
    cb: (err: any, data?: AssociateIdentityProviderConfigCommandOutput) => void
  ): void;
  public associateIdentityProviderConfig(
    args: AssociateIdentityProviderConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIdentityProviderConfigCommandOutput) => void
  ): void;
  public associateIdentityProviderConfig(
    args: AssociateIdentityProviderConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateIdentityProviderConfigCommandOutput) => void),
    cb?: (err: any, data?: AssociateIdentityProviderConfigCommandOutput) => void
  ): Promise<AssociateIdentityProviderConfigCommandOutput> | void {
    const command = new AssociateIdentityProviderConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon EKS add-on.</p>
   *          <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management
   *             of common operational software for Amazon EKS clusters. For more information,
   *             see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  public createAddon(args: CreateAddonCommandInput, options?: __HttpHandlerOptions): Promise<CreateAddonCommandOutput>;
  public createAddon(args: CreateAddonCommandInput, cb: (err: any, data?: CreateAddonCommandOutput) => void): void;
  public createAddon(
    args: CreateAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddonCommandOutput) => void
  ): void;
  public createAddon(
    args: CreateAddonCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAddonCommandOutput) => void),
    cb?: (err: any, data?: CreateAddonCommandOutput) => void
  ): Promise<CreateAddonCommandOutput> | void {
    const command = new CreateAddonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon EKS control plane. </p>
   *          <p>The Amazon EKS control plane consists of control plane instances that run the
   *             Kubernetes software, such as <code>etcd</code> and the API server. The control plane
   *             runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by
   *             the Amazon EKS API server endpoint. Each Amazon EKS cluster control
   *             plane is single tenant and unique. It runs on its own set of Amazon EC2
   *             instances.</p>
   *          <p>The cluster control plane is provisioned across multiple Availability Zones and
   *             fronted by an Elastic Load Balancing
   *             Network Load Balancer. Amazon EKS also provisions elastic network interfaces in
   *             your VPC subnets to provide connectivity from the control plane instances to the nodes
   *             (for example, to support <code>kubectl exec</code>, <code>logs</code>, and
   *                 <code>proxy</code> data flows).</p>
   *          <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your
   *             cluster's control plane over the Kubernetes API server endpoint and a certificate file
   *             that is created for your cluster.</p>
   *          <p>In most cases, it takes several minutes to create a cluster. After you create an
   *                 Amazon EKS cluster, you must configure your Kubernetes tooling to
   *             communicate with the API server and launch nodes into your cluster. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching
   *                     Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  public createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  public createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterCommandOutput) => void
  ): Promise<CreateClusterCommandOutput> | void {
    const command = new CreateClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Fargate profile for your Amazon EKS cluster. You
   *             must have at least one Fargate profile in a cluster to be able to run
   *             pods on Fargate.</p>
   *          <p>The Fargate profile allows an administrator to declare which pods run
   *             on Fargate and specify which pods run on which Fargate
   *             profile. This declaration is done through the profile’s selectors. Each profile can have
   *             up to five selectors that contain a namespace and labels. A namespace is required for
   *             every selector. The label field consists of multiple optional key-value pairs. Pods that
   *             match the selectors are scheduled on Fargate. If a to-be-scheduled pod
   *             matches any of the selectors in the Fargate profile, then that pod is run
   *             on Fargate.</p>
   *          <p>When you create a Fargate profile, you must specify a pod execution
   *             role to use with the pods that are scheduled with the profile. This role is added to the
   *             cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the
   *                 <code>kubelet</code> that is running on the Fargate infrastructure
   *             can register with your Amazon EKS cluster so that it can appear in your cluster
   *             as a node. The pod execution role also provides IAM permissions to the
   *                 Fargate infrastructure to allow read access to Amazon ECR
   *             image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod
   *                 Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p>
   *          <p>Fargate profiles are immutable. However, you can create a new updated
   *             profile to replace an existing profile and then delete the original after the updated
   *             profile has finished creating.</p>
   *          <p>If any Fargate profiles in a cluster are in the <code>DELETING</code>
   *             status, you must wait for that Fargate profile to finish deleting before
   *             you can create any other profiles in that cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   */
  public createFargateProfile(
    args: CreateFargateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFargateProfileCommandOutput>;
  public createFargateProfile(
    args: CreateFargateProfileCommandInput,
    cb: (err: any, data?: CreateFargateProfileCommandOutput) => void
  ): void;
  public createFargateProfile(
    args: CreateFargateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFargateProfileCommandOutput) => void
  ): void;
  public createFargateProfile(
    args: CreateFargateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFargateProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateFargateProfileCommandOutput) => void
  ): Promise<CreateFargateProfileCommandOutput> | void {
    const command = new CreateFargateProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a managed node group for an Amazon EKS cluster. You can only create a
   *             node group for your cluster that is equal to the current Kubernetes version for the
   *             cluster. All node groups are created with the latest AMI release version for the
   *             respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using
   *             a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch
   *                 template support</a>.</p>
   *          <p>An Amazon EKS managed node group is an Amazon EC2
   *             Auto Scaling group and associated Amazon EC2 instances that are managed by
   *                 Amazon Web Services for an Amazon EKS cluster. For more information, see
   *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p>
   *          <note>
   *             <p>Windows AMI types are only supported for commercial Regions that support Windows
   *                     Amazon EKS.</p>
   *          </note>
   */
  public createNodegroup(
    args: CreateNodegroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNodegroupCommandOutput>;
  public createNodegroup(
    args: CreateNodegroupCommandInput,
    cb: (err: any, data?: CreateNodegroupCommandOutput) => void
  ): void;
  public createNodegroup(
    args: CreateNodegroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodegroupCommandOutput) => void
  ): void;
  public createNodegroup(
    args: CreateNodegroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNodegroupCommandOutput) => void),
    cb?: (err: any, data?: CreateNodegroupCommandOutput) => void
  ): Promise<CreateNodegroupCommandOutput> | void {
    const command = new CreateNodegroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete an Amazon EKS add-on.</p>
   *          <p>When you remove the add-on, it will also be deleted from the cluster. You can always
   *             manually start an add-on on the cluster using the Kubernetes API.</p>
   */
  public deleteAddon(args: DeleteAddonCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAddonCommandOutput>;
  public deleteAddon(args: DeleteAddonCommandInput, cb: (err: any, data?: DeleteAddonCommandOutput) => void): void;
  public deleteAddon(
    args: DeleteAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAddonCommandOutput) => void
  ): void;
  public deleteAddon(
    args: DeleteAddonCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAddonCommandOutput) => void),
    cb?: (err: any, data?: DeleteAddonCommandOutput) => void
  ): Promise<DeleteAddonCommandOutput> | void {
    const command = new DeleteAddonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the Amazon EKS cluster control plane.</p>
   *          <p>If you have active services in your cluster that are associated with a load balancer,
   *             you must delete those services before deleting the cluster so that the load balancers
   *             are deleted properly. Otherwise, you can have orphaned resources in your VPC that
   *             prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a
   *                 Cluster</a> in the <i>Amazon EKS User Guide</i>.</p>
   *          <p>If you have managed node groups or Fargate profiles attached to the
   *             cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>
   */
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterCommandOutput) => void
  ): Promise<DeleteClusterCommandOutput> | void {
    const command = new DeleteClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an Fargate profile.</p>
   *          <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match
   *             another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then
   *             they are not scheduled on Fargate and they may remain in a pending
   *             state.</p>
   *          <p>Only one Fargate profile in a cluster can be in the
   *                 <code>DELETING</code> status at a time. You must wait for a Fargate
   *             profile to finish deleting before you can delete any other profiles in that
   *             cluster.</p>
   */
  public deleteFargateProfile(
    args: DeleteFargateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFargateProfileCommandOutput>;
  public deleteFargateProfile(
    args: DeleteFargateProfileCommandInput,
    cb: (err: any, data?: DeleteFargateProfileCommandOutput) => void
  ): void;
  public deleteFargateProfile(
    args: DeleteFargateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFargateProfileCommandOutput) => void
  ): void;
  public deleteFargateProfile(
    args: DeleteFargateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFargateProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteFargateProfileCommandOutput) => void
  ): Promise<DeleteFargateProfileCommandOutput> | void {
    const command = new DeleteFargateProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an Amazon EKS node group for a cluster.</p>
   */
  public deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNodegroupCommandOutput>;
  public deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    cb: (err: any, data?: DeleteNodegroupCommandOutput) => void
  ): void;
  public deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNodegroupCommandOutput) => void
  ): void;
  public deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNodegroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteNodegroupCommandOutput) => void
  ): Promise<DeleteNodegroupCommandOutput> | void {
    const command = new DeleteNodegroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters a connected cluster to remove it from the Amazon EKS control
   *             plane.</p>
   */
  public deregisterCluster(
    args: DeregisterClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterClusterCommandOutput>;
  public deregisterCluster(
    args: DeregisterClusterCommandInput,
    cb: (err: any, data?: DeregisterClusterCommandOutput) => void
  ): void;
  public deregisterCluster(
    args: DeregisterClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterClusterCommandOutput) => void
  ): void;
  public deregisterCluster(
    args: DeregisterClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterClusterCommandOutput) => void),
    cb?: (err: any, data?: DeregisterClusterCommandOutput) => void
  ): Promise<DeregisterClusterCommandOutput> | void {
    const command = new DeregisterClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an Amazon EKS add-on.</p>
   */
  public describeAddon(
    args: DescribeAddonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddonCommandOutput>;
  public describeAddon(
    args: DescribeAddonCommandInput,
    cb: (err: any, data?: DescribeAddonCommandOutput) => void
  ): void;
  public describeAddon(
    args: DescribeAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddonCommandOutput) => void
  ): void;
  public describeAddon(
    args: DescribeAddonCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAddonCommandOutput) => void),
    cb?: (err: any, data?: DescribeAddonCommandOutput) => void
  ): Promise<DescribeAddonCommandOutput> | void {
    const command = new DescribeAddonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns configuration options.</p>
   */
  public describeAddonConfiguration(
    args: DescribeAddonConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddonConfigurationCommandOutput>;
  public describeAddonConfiguration(
    args: DescribeAddonConfigurationCommandInput,
    cb: (err: any, data?: DescribeAddonConfigurationCommandOutput) => void
  ): void;
  public describeAddonConfiguration(
    args: DescribeAddonConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddonConfigurationCommandOutput) => void
  ): void;
  public describeAddonConfiguration(
    args: DescribeAddonConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAddonConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeAddonConfigurationCommandOutput) => void
  ): Promise<DescribeAddonConfigurationCommandOutput> | void {
    const command = new DescribeAddonConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the versions for an add-on. Information such as the Kubernetes versions that you
   *             can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the
   *                 <code>type</code> of the add-on are returned. </p>
   */
  public describeAddonVersions(
    args: DescribeAddonVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddonVersionsCommandOutput>;
  public describeAddonVersions(
    args: DescribeAddonVersionsCommandInput,
    cb: (err: any, data?: DescribeAddonVersionsCommandOutput) => void
  ): void;
  public describeAddonVersions(
    args: DescribeAddonVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddonVersionsCommandOutput) => void
  ): void;
  public describeAddonVersions(
    args: DescribeAddonVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAddonVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAddonVersionsCommandOutput) => void
  ): Promise<DescribeAddonVersionsCommandOutput> | void {
    const command = new DescribeAddonVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns descriptive information about an Amazon EKS cluster.</p>
   *          <p>The API server endpoint and certificate authority data returned by this operation are
   *             required for <code>kubelet</code> and <code>kubectl</code> to communicate with your
   *             Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a
   *                 kubeconfig for Amazon EKS</a>.</p>
   *          <note>
   *             <p>The API server endpoint and certificate authority data aren't available until the
   *                 cluster reaches the <code>ACTIVE</code> state.</p>
   *          </note>
   */
  public describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  public describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterCommandOutput) => void
  ): Promise<DescribeClusterCommandOutput> | void {
    const command = new DescribeClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns descriptive information about an Fargate profile.</p>
   */
  public describeFargateProfile(
    args: DescribeFargateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFargateProfileCommandOutput>;
  public describeFargateProfile(
    args: DescribeFargateProfileCommandInput,
    cb: (err: any, data?: DescribeFargateProfileCommandOutput) => void
  ): void;
  public describeFargateProfile(
    args: DescribeFargateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFargateProfileCommandOutput) => void
  ): void;
  public describeFargateProfile(
    args: DescribeFargateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFargateProfileCommandOutput) => void),
    cb?: (err: any, data?: DescribeFargateProfileCommandOutput) => void
  ): Promise<DescribeFargateProfileCommandOutput> | void {
    const command = new DescribeFargateProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns descriptive information about an identity provider configuration.</p>
   */
  public describeIdentityProviderConfig(
    args: DescribeIdentityProviderConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityProviderConfigCommandOutput>;
  public describeIdentityProviderConfig(
    args: DescribeIdentityProviderConfigCommandInput,
    cb: (err: any, data?: DescribeIdentityProviderConfigCommandOutput) => void
  ): void;
  public describeIdentityProviderConfig(
    args: DescribeIdentityProviderConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityProviderConfigCommandOutput) => void
  ): void;
  public describeIdentityProviderConfig(
    args: DescribeIdentityProviderConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIdentityProviderConfigCommandOutput) => void),
    cb?: (err: any, data?: DescribeIdentityProviderConfigCommandOutput) => void
  ): Promise<DescribeIdentityProviderConfigCommandOutput> | void {
    const command = new DescribeIdentityProviderConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns descriptive information about an Amazon EKS node group.</p>
   */
  public describeNodegroup(
    args: DescribeNodegroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodegroupCommandOutput>;
  public describeNodegroup(
    args: DescribeNodegroupCommandInput,
    cb: (err: any, data?: DescribeNodegroupCommandOutput) => void
  ): void;
  public describeNodegroup(
    args: DescribeNodegroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodegroupCommandOutput) => void
  ): void;
  public describeNodegroup(
    args: DescribeNodegroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNodegroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeNodegroupCommandOutput) => void
  ): Promise<DescribeNodegroupCommandOutput> | void {
    const command = new DescribeNodegroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns descriptive information about an update against your Amazon EKS
   *             cluster or associated managed node group or Amazon EKS add-on.</p>
   *          <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an
   *             update fails, the status is <code>Failed</code>, and an error detail explains the reason
   *             for the failure.</p>
   */
  public describeUpdate(
    args: DescribeUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUpdateCommandOutput>;
  public describeUpdate(
    args: DescribeUpdateCommandInput,
    cb: (err: any, data?: DescribeUpdateCommandOutput) => void
  ): void;
  public describeUpdate(
    args: DescribeUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUpdateCommandOutput) => void
  ): void;
  public describeUpdate(
    args: DescribeUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUpdateCommandOutput) => void),
    cb?: (err: any, data?: DescribeUpdateCommandOutput) => void
  ): Promise<DescribeUpdateCommandOutput> | void {
    const command = new DescribeUpdateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates an identity provider configuration from a cluster. If you disassociate
   *             an identity provider from your cluster, users included in the provider can no longer
   *             access the cluster. However, you can still access the cluster with Amazon Web Services
   *             IAM users.</p>
   */
  public disassociateIdentityProviderConfig(
    args: DisassociateIdentityProviderConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIdentityProviderConfigCommandOutput>;
  public disassociateIdentityProviderConfig(
    args: DisassociateIdentityProviderConfigCommandInput,
    cb: (err: any, data?: DisassociateIdentityProviderConfigCommandOutput) => void
  ): void;
  public disassociateIdentityProviderConfig(
    args: DisassociateIdentityProviderConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIdentityProviderConfigCommandOutput) => void
  ): void;
  public disassociateIdentityProviderConfig(
    args: DisassociateIdentityProviderConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateIdentityProviderConfigCommandOutput) => void),
    cb?: (err: any, data?: DisassociateIdentityProviderConfigCommandOutput) => void
  ): Promise<DisassociateIdentityProviderConfigCommandOutput> | void {
    const command = new DisassociateIdentityProviderConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the available add-ons.</p>
   */
  public listAddons(args: ListAddonsCommandInput, options?: __HttpHandlerOptions): Promise<ListAddonsCommandOutput>;
  public listAddons(args: ListAddonsCommandInput, cb: (err: any, data?: ListAddonsCommandOutput) => void): void;
  public listAddons(
    args: ListAddonsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAddonsCommandOutput) => void
  ): void;
  public listAddons(
    args: ListAddonsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAddonsCommandOutput) => void),
    cb?: (err: any, data?: ListAddonsCommandOutput) => void
  ): Promise<ListAddonsCommandOutput> | void {
    const command = new ListAddonsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon EKS clusters in your Amazon Web Services account in the
   *             specified Region.</p>
   */
  public listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  public listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  public listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  public listClusters(
    args: ListClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClustersCommandOutput) => void),
    cb?: (err: any, data?: ListClustersCommandOutput) => void
  ): Promise<ListClustersCommandOutput> | void {
    const command = new ListClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Fargate profiles associated with the specified cluster in
   *             your Amazon Web Services account in the specified Region.</p>
   */
  public listFargateProfiles(
    args: ListFargateProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFargateProfilesCommandOutput>;
  public listFargateProfiles(
    args: ListFargateProfilesCommandInput,
    cb: (err: any, data?: ListFargateProfilesCommandOutput) => void
  ): void;
  public listFargateProfiles(
    args: ListFargateProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFargateProfilesCommandOutput) => void
  ): void;
  public listFargateProfiles(
    args: ListFargateProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFargateProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListFargateProfilesCommandOutput) => void
  ): Promise<ListFargateProfilesCommandOutput> | void {
    const command = new ListFargateProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A list of identity provider configurations.</p>
   */
  public listIdentityProviderConfigs(
    args: ListIdentityProviderConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityProviderConfigsCommandOutput>;
  public listIdentityProviderConfigs(
    args: ListIdentityProviderConfigsCommandInput,
    cb: (err: any, data?: ListIdentityProviderConfigsCommandOutput) => void
  ): void;
  public listIdentityProviderConfigs(
    args: ListIdentityProviderConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityProviderConfigsCommandOutput) => void
  ): void;
  public listIdentityProviderConfigs(
    args: ListIdentityProviderConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIdentityProviderConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListIdentityProviderConfigsCommandOutput) => void
  ): Promise<ListIdentityProviderConfigsCommandOutput> | void {
    const command = new ListIdentityProviderConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon EKS managed node groups associated with the specified cluster
   *             in your Amazon Web Services account in the specified Region. Self-managed node groups are
   *             not listed.</p>
   */
  public listNodegroups(
    args: ListNodegroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodegroupsCommandOutput>;
  public listNodegroups(
    args: ListNodegroupsCommandInput,
    cb: (err: any, data?: ListNodegroupsCommandOutput) => void
  ): void;
  public listNodegroups(
    args: ListNodegroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodegroupsCommandOutput) => void
  ): void;
  public listNodegroups(
    args: ListNodegroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNodegroupsCommandOutput) => void),
    cb?: (err: any, data?: ListNodegroupsCommandOutput) => void
  ): Promise<ListNodegroupsCommandOutput> | void {
    const command = new ListNodegroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the tags for an Amazon EKS resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the updates associated with an Amazon EKS cluster or managed node group
   *             in your Amazon Web Services account, in the specified Region.</p>
   */
  public listUpdates(args: ListUpdatesCommandInput, options?: __HttpHandlerOptions): Promise<ListUpdatesCommandOutput>;
  public listUpdates(args: ListUpdatesCommandInput, cb: (err: any, data?: ListUpdatesCommandOutput) => void): void;
  public listUpdates(
    args: ListUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUpdatesCommandOutput) => void
  ): void;
  public listUpdates(
    args: ListUpdatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUpdatesCommandOutput) => void),
    cb?: (err: any, data?: ListUpdatesCommandOutput) => void
  ): Promise<ListUpdatesCommandOutput> | void {
    const command = new ListUpdatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p>
   *          <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to
   *             view current information about the cluster and its nodes. </p>
   *          <p>Cluster connection requires two steps. First, send a <code>
   *                <a>RegisterClusterRequest</a>
   *             </code> to add it to the Amazon EKS
   *             control plane.</p>
   *          <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and
   *                 <code>activationCode</code> must be applied to the Kubernetes cluster through it's
   *             native provider to provide visibility.</p>
   *          <p>After the Manifest is updated and applied, then the connected cluster is visible to
   *             the Amazon EKS control plane. If the Manifest is not applied within three days,
   *             then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>
   */
  public registerCluster(
    args: RegisterClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterClusterCommandOutput>;
  public registerCluster(
    args: RegisterClusterCommandInput,
    cb: (err: any, data?: RegisterClusterCommandOutput) => void
  ): void;
  public registerCluster(
    args: RegisterClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterClusterCommandOutput) => void
  ): void;
  public registerCluster(
    args: RegisterClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterClusterCommandOutput) => void),
    cb?: (err: any, data?: RegisterClusterCommandOutput) => void
  ): Promise<RegisterClusterCommandOutput> | void {
    const command = new RegisterClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified tags to a resource with the specified
   *                 <code>resourceArn</code>. If existing tags on a resource are not specified in the
   *             request parameters, they are not changed. When a resource is deleted, the tags
   *             associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the
   *             cluster. For example, if you tag a cluster with this operation, that tag does not
   *             automatically propagate to the subnets and nodes associated with the cluster.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes specified tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an Amazon EKS add-on.</p>
   */
  public updateAddon(args: UpdateAddonCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAddonCommandOutput>;
  public updateAddon(args: UpdateAddonCommandInput, cb: (err: any, data?: UpdateAddonCommandOutput) => void): void;
  public updateAddon(
    args: UpdateAddonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAddonCommandOutput) => void
  ): void;
  public updateAddon(
    args: UpdateAddonCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAddonCommandOutput) => void),
    cb?: (err: any, data?: UpdateAddonCommandOutput) => void
  ): Promise<UpdateAddonCommandOutput> | void {
    const command = new UpdateAddonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to
   *             function during the update. The response output includes an update ID that you can use
   *             to track the status of your cluster update with the <a>DescribeUpdate</a> API
   *             operation.</p>
   *          <p>You can use this API operation to enable or disable exporting the Kubernetes control
   *             plane logs for your cluster to CloudWatch Logs. By default, cluster control plane
   *             logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   *          <note>
   *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to
   *                 exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch
   *                 Pricing</a>.</p>
   *          </note>
   *          <p>You can also use this API operation to enable or disable public and private access to
   *             your cluster's Kubernetes API server endpoint. By default, public access is enabled, and
   *             private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>. </p>
   *          <important>
   *             <p>You can't update the subnets or security group IDs for an existing cluster.</p>
   *          </important>
   *          <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
   *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
   *             eventually consistent). When the update is complete (either <code>Failed</code> or
   *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
   */
  public updateClusterConfig(
    args: UpdateClusterConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterConfigCommandOutput>;
  public updateClusterConfig(
    args: UpdateClusterConfigCommandInput,
    cb: (err: any, data?: UpdateClusterConfigCommandOutput) => void
  ): void;
  public updateClusterConfig(
    args: UpdateClusterConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterConfigCommandOutput) => void
  ): void;
  public updateClusterConfig(
    args: UpdateClusterConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClusterConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterConfigCommandOutput) => void
  ): Promise<UpdateClusterConfigCommandOutput> | void {
    const command = new UpdateClusterConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your
   *             cluster continues to function during the update. The response output includes an update
   *             ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p>
   *          <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
   *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
   *             eventually consistent). When the update is complete (either <code>Failed</code> or
   *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
   *          <p>If your cluster has managed node groups attached to it, all of your node groups’
   *             Kubernetes versions must match the cluster’s Kubernetes version in order to update the
   *             cluster to a new Kubernetes version.</p>
   */
  public updateClusterVersion(
    args: UpdateClusterVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterVersionCommandOutput>;
  public updateClusterVersion(
    args: UpdateClusterVersionCommandInput,
    cb: (err: any, data?: UpdateClusterVersionCommandOutput) => void
  ): void;
  public updateClusterVersion(
    args: UpdateClusterVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterVersionCommandOutput) => void
  ): void;
  public updateClusterVersion(
    args: UpdateClusterVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClusterVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterVersionCommandOutput) => void
  ): Promise<UpdateClusterVersionCommandOutput> | void {
    const command = new UpdateClusterVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an Amazon EKS managed node group configuration. Your node group
   *             continues to function during the update. The response output includes an update ID that
   *             you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes
   *             labels for a node group or the scaling configuration.</p>
   */
  public updateNodegroupConfig(
    args: UpdateNodegroupConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNodegroupConfigCommandOutput>;
  public updateNodegroupConfig(
    args: UpdateNodegroupConfigCommandInput,
    cb: (err: any, data?: UpdateNodegroupConfigCommandOutput) => void
  ): void;
  public updateNodegroupConfig(
    args: UpdateNodegroupConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNodegroupConfigCommandOutput) => void
  ): void;
  public updateNodegroupConfig(
    args: UpdateNodegroupConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNodegroupConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateNodegroupConfigCommandOutput) => void
  ): Promise<UpdateNodegroupConfigCommandOutput> | void {
    const command = new UpdateNodegroupConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node
   *             group.</p>
   *          <p>You can update a node group using a launch template only if the node group was
   *             originally deployed with a launch template. If you need to update a custom AMI in a node
   *             group that was deployed with a launch template, then update your custom AMI, specify the
   *             new ID in a new version of the launch template, and then update the node group to the
   *             new version of the launch template.</p>
   *          <p>If you update without a launch template, then you can update to the latest available
   *             AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in
   *             the request. You can update to the latest AMI version of your cluster's current Kubernetes
   *             version by specifying your cluster's Kubernetes version in the request. For information about
   *             Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the
   *             <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the
   *             <i>Amazon EKS User Guide</i>. </p>
   *          <p>You cannot roll back a node group to an earlier Kubernetes version or AMI
   *             version.</p>
   *          <p>When a node in a managed node group is terminated due to a scaling action or update,
   *             the pods in that node are drained first. Amazon EKS attempts to drain the nodes
   *             gracefully and will fail if it is unable to do so. You can <code>force</code> the update
   *             if Amazon EKS is unable to drain the nodes as a result of a pod disruption
   *             budget issue.</p>
   */
  public updateNodegroupVersion(
    args: UpdateNodegroupVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNodegroupVersionCommandOutput>;
  public updateNodegroupVersion(
    args: UpdateNodegroupVersionCommandInput,
    cb: (err: any, data?: UpdateNodegroupVersionCommandOutput) => void
  ): void;
  public updateNodegroupVersion(
    args: UpdateNodegroupVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNodegroupVersionCommandOutput) => void
  ): void;
  public updateNodegroupVersion(
    args: UpdateNodegroupVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNodegroupVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateNodegroupVersionCommandOutput) => void
  ): Promise<UpdateNodegroupVersionCommandOutput> | void {
    const command = new UpdateNodegroupVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
