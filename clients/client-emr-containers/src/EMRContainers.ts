import { EMRContainersClient } from "./EMRContainersClient";
import {
  CancelJobRunCommand,
  CancelJobRunCommandInput,
  CancelJobRunCommandOutput,
} from "./commands/CancelJobRunCommand";
import {
  CreateManagedEndpointCommand,
  CreateManagedEndpointCommandInput,
  CreateManagedEndpointCommandOutput,
} from "./commands/CreateManagedEndpointCommand";
import {
  CreateVirtualClusterCommand,
  CreateVirtualClusterCommandInput,
  CreateVirtualClusterCommandOutput,
} from "./commands/CreateVirtualClusterCommand";
import {
  DeleteManagedEndpointCommand,
  DeleteManagedEndpointCommandInput,
  DeleteManagedEndpointCommandOutput,
} from "./commands/DeleteManagedEndpointCommand";
import {
  DeleteVirtualClusterCommand,
  DeleteVirtualClusterCommandInput,
  DeleteVirtualClusterCommandOutput,
} from "./commands/DeleteVirtualClusterCommand";
import {
  DescribeJobRunCommand,
  DescribeJobRunCommandInput,
  DescribeJobRunCommandOutput,
} from "./commands/DescribeJobRunCommand";
import {
  DescribeManagedEndpointCommand,
  DescribeManagedEndpointCommandInput,
  DescribeManagedEndpointCommandOutput,
} from "./commands/DescribeManagedEndpointCommand";
import {
  DescribeVirtualClusterCommand,
  DescribeVirtualClusterCommandInput,
  DescribeVirtualClusterCommandOutput,
} from "./commands/DescribeVirtualClusterCommand";
import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import {
  ListManagedEndpointsCommand,
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "./commands/ListManagedEndpointsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVirtualClustersCommand,
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
} from "./commands/ListVirtualClustersCommand";
import { StartJobRunCommand, StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run
 *          open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With
 *          this deployment option, you can focus on running analytics workloads while Amazon EMR on
 *          EKS builds, configures, and manages containers for open-source applications. For more
 *          information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is Amazon EMR on EKS</a>.</p>
 *          <p>
 *             <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The
 *             <code>emr-containers</code> prefix is used in the following scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws
 *                   emr-containers start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [
 *             "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more
 *             information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKS Service Endpoints</a>.</p>
 *             </li>
 *          </ul>
 */
export class EMRContainers extends EMRContainersClient {
  /**
   * <p>Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
   */
  public cancelJobRun(
    args: CancelJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelJobRunCommandOutput>;
  public cancelJobRun(args: CancelJobRunCommandInput, cb: (err: any, data?: CancelJobRunCommandOutput) => void): void;
  public cancelJobRun(
    args: CancelJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobRunCommandOutput) => void
  ): void;
  public cancelJobRun(
    args: CancelJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelJobRunCommandOutput) => void),
    cb?: (err: any, data?: CancelJobRunCommandOutput) => void
  ): Promise<CancelJobRunCommandOutput> | void {
    const command = new CancelJobRunCommand(args);
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
   * <p>Creates a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
   */
  public createManagedEndpoint(
    args: CreateManagedEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateManagedEndpointCommandOutput>;
  public createManagedEndpoint(
    args: CreateManagedEndpointCommandInput,
    cb: (err: any, data?: CreateManagedEndpointCommandOutput) => void
  ): void;
  public createManagedEndpoint(
    args: CreateManagedEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateManagedEndpointCommandOutput) => void
  ): void;
  public createManagedEndpoint(
    args: CreateManagedEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateManagedEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateManagedEndpointCommandOutput) => void
  ): Promise<CreateManagedEndpointCommandOutput> | void {
    const command = new CreateManagedEndpointCommand(args);
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
   * <p>Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
   */
  public createVirtualCluster(
    args: CreateVirtualClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualClusterCommandOutput>;
  public createVirtualCluster(
    args: CreateVirtualClusterCommandInput,
    cb: (err: any, data?: CreateVirtualClusterCommandOutput) => void
  ): void;
  public createVirtualCluster(
    args: CreateVirtualClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualClusterCommandOutput) => void
  ): void;
  public createVirtualCluster(
    args: CreateVirtualClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVirtualClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateVirtualClusterCommandOutput) => void
  ): Promise<CreateVirtualClusterCommandOutput> | void {
    const command = new CreateVirtualClusterCommand(args);
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
   * <p>Deletes a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
   */
  public deleteManagedEndpoint(
    args: DeleteManagedEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteManagedEndpointCommandOutput>;
  public deleteManagedEndpoint(
    args: DeleteManagedEndpointCommandInput,
    cb: (err: any, data?: DeleteManagedEndpointCommandOutput) => void
  ): void;
  public deleteManagedEndpoint(
    args: DeleteManagedEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteManagedEndpointCommandOutput) => void
  ): void;
  public deleteManagedEndpoint(
    args: DeleteManagedEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteManagedEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteManagedEndpointCommandOutput) => void
  ): Promise<DeleteManagedEndpointCommandOutput> | void {
    const command = new DeleteManagedEndpointCommand(args);
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
   * <p>Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
   */
  public deleteVirtualCluster(
    args: DeleteVirtualClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualClusterCommandOutput>;
  public deleteVirtualCluster(
    args: DeleteVirtualClusterCommandInput,
    cb: (err: any, data?: DeleteVirtualClusterCommandOutput) => void
  ): void;
  public deleteVirtualCluster(
    args: DeleteVirtualClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualClusterCommandOutput) => void
  ): void;
  public deleteVirtualCluster(
    args: DeleteVirtualClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVirtualClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteVirtualClusterCommandOutput) => void
  ): Promise<DeleteVirtualClusterCommandOutput> | void {
    const command = new DeleteVirtualClusterCommand(args);
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
   * <p>Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
   */
  public describeJobRun(
    args: DescribeJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobRunCommandOutput>;
  public describeJobRun(
    args: DescribeJobRunCommandInput,
    cb: (err: any, data?: DescribeJobRunCommandOutput) => void
  ): void;
  public describeJobRun(
    args: DescribeJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobRunCommandOutput) => void
  ): void;
  public describeJobRun(
    args: DescribeJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobRunCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobRunCommandOutput) => void
  ): Promise<DescribeJobRunCommandOutput> | void {
    const command = new DescribeJobRunCommand(args);
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
   * <p>Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
   */
  public describeManagedEndpoint(
    args: DescribeManagedEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedEndpointCommandOutput>;
  public describeManagedEndpoint(
    args: DescribeManagedEndpointCommandInput,
    cb: (err: any, data?: DescribeManagedEndpointCommandOutput) => void
  ): void;
  public describeManagedEndpoint(
    args: DescribeManagedEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedEndpointCommandOutput) => void
  ): void;
  public describeManagedEndpoint(
    args: DescribeManagedEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeManagedEndpointCommandOutput) => void),
    cb?: (err: any, data?: DescribeManagedEndpointCommandOutput) => void
  ): Promise<DescribeManagedEndpointCommandOutput> | void {
    const command = new DescribeManagedEndpointCommand(args);
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
   * <p>Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
   */
  public describeVirtualCluster(
    args: DescribeVirtualClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualClusterCommandOutput>;
  public describeVirtualCluster(
    args: DescribeVirtualClusterCommandInput,
    cb: (err: any, data?: DescribeVirtualClusterCommandOutput) => void
  ): void;
  public describeVirtualCluster(
    args: DescribeVirtualClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualClusterCommandOutput) => void
  ): void;
  public describeVirtualCluster(
    args: DescribeVirtualClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVirtualClusterCommandOutput) => void),
    cb?: (err: any, data?: DescribeVirtualClusterCommandOutput) => void
  ): Promise<DescribeVirtualClusterCommandOutput> | void {
    const command = new DescribeVirtualClusterCommand(args);
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
   * <p>Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
   */
  public listJobRuns(args: ListJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobRunsCommandOutput>;
  public listJobRuns(args: ListJobRunsCommandInput, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
  public listJobRuns(
    args: ListJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobRunsCommandOutput) => void
  ): void;
  public listJobRuns(
    args: ListJobRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobRunsCommandOutput) => void),
    cb?: (err: any, data?: ListJobRunsCommandOutput) => void
  ): Promise<ListJobRunsCommandOutput> | void {
    const command = new ListJobRunsCommand(args);
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
   * <p>Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
   */
  public listManagedEndpoints(
    args: ListManagedEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedEndpointsCommandOutput>;
  public listManagedEndpoints(
    args: ListManagedEndpointsCommandInput,
    cb: (err: any, data?: ListManagedEndpointsCommandOutput) => void
  ): void;
  public listManagedEndpoints(
    args: ListManagedEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedEndpointsCommandOutput) => void
  ): void;
  public listManagedEndpoints(
    args: ListManagedEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListManagedEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListManagedEndpointsCommandOutput) => void
  ): Promise<ListManagedEndpointsCommandOutput> | void {
    const command = new ListManagedEndpointsCommand(args);
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
   * <p>Lists the tags assigned to the resources.</p>
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
   * <p>Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
   */
  public listVirtualClusters(
    args: ListVirtualClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualClustersCommandOutput>;
  public listVirtualClusters(
    args: ListVirtualClustersCommandInput,
    cb: (err: any, data?: ListVirtualClustersCommandOutput) => void
  ): void;
  public listVirtualClusters(
    args: ListVirtualClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualClustersCommandOutput) => void
  ): void;
  public listVirtualClusters(
    args: ListVirtualClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVirtualClustersCommandOutput) => void),
    cb?: (err: any, data?: ListVirtualClustersCommandOutput) => void
  ): Promise<ListVirtualClustersCommandOutput> | void {
    const command = new ListVirtualClustersCommand(args);
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
   * <p>Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
   */
  public startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
  public startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartJobRunCommandOutput) => void),
    cb?: (err: any, data?: StartJobRunCommandOutput) => void
  ): Promise<StartJobRunCommandOutput> | void {
    const command = new StartJobRunCommand(args);
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
   * <p>Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your AWS resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.</p>
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
   * <p>Removes tags from resources.</p>
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
}
