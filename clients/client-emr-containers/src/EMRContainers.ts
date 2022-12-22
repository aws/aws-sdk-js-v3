// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CancelJobRunCommand,
  CancelJobRunCommandInput,
  CancelJobRunCommandOutput,
} from "./commands/CancelJobRunCommand";
import {
  CreateJobTemplateCommand,
  CreateJobTemplateCommandInput,
  CreateJobTemplateCommandOutput,
} from "./commands/CreateJobTemplateCommand";
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
  DeleteJobTemplateCommand,
  DeleteJobTemplateCommandInput,
  DeleteJobTemplateCommandOutput,
} from "./commands/DeleteJobTemplateCommand";
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
  DescribeJobTemplateCommand,
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
} from "./commands/DescribeJobTemplateCommand";
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
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "./commands/ListJobTemplatesCommand";
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
import { EMRContainersClient } from "./EMRContainersClient";

/**
 * <p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run
 *          open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With
 *          this deployment option, you can focus on running analytics workloads while Amazon EMR on
 *          EKS builds, configures, and manages containers for open-source applications. For more
 *          information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is Amazon EMR on
 *             EKS</a>.</p>
 *          <p>
 *             <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The
 *             <code>emr-containers</code> prefix is used in the following scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws
 *                   emr-containers start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example,
 *                   <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more information, see
 *                   <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example,
 *                   <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see
 *                   <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKS Service Endpoints</a>.</p>
 *             </li>
 *          </ul>
 */
export class EMRContainers extends EMRContainersClient {
  /**
   * <p>Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or
   *          SparkSQL query, that you submit to Amazon EMR on EKS.</p>
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
   * <p>Creates a job template. Job template stores values of StartJobRun API request in a
   *          template and can be used to start a job run. Job template allows two use cases: avoid
   *          repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun
   *          API request.</p>
   */
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobTemplateCommandOutput>;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): Promise<CreateJobTemplateCommandOutput> | void {
    const command = new CreateJobTemplateCommand(args);
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
   * <p>Creates a managed endpoint. A managed endpoint is a gateway that connects EMR Studio
   *          to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
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
   * <p>Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You
   *          can create, describe, list and delete virtual clusters. They do not consume any additional
   *          resource in your system. A single virtual cluster maps to a single Kubernetes namespace.
   *          Given this relationship, you can model virtual clusters the same way you model Kubernetes
   *          namespaces to meet your requirements.</p>
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
   * <p>Deletes a job template. Job template stores values of StartJobRun API request in a
   *          template and can be used to start a job run. Job template allows two use cases: avoid
   *          repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun
   *          API request.</p>
   */
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobTemplateCommandOutput>;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): Promise<DeleteJobTemplateCommandOutput> | void {
    const command = new DeleteJobTemplateCommand(args);
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
   * <p>Deletes a managed endpoint. A managed endpoint is a gateway
   *          that connects EMR Studio to Amazon EMR on EKS so that EMR Studio
   *          can communicate with your virtual cluster.</p>
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
   * <p>Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You
   *          can create, describe, list and delete virtual clusters. They do not consume any additional
   *          resource in your system. A single virtual cluster maps to a single Kubernetes namespace.
   *          Given this relationship, you can model virtual clusters the same way you model Kubernetes
   *          namespaces to meet your requirements.</p>
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
   * <p>Displays detailed information about a job run. A job run is a unit of work, such as a
   *          Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
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
   * <p>Displays detailed information about a specified job template. Job template stores values
   *          of StartJobRun API request in a template and can be used to start a job run. Job template
   *          allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing
   *          certain values in StartJobRun API request.</p>
   */
  public describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobTemplateCommandOutput>;
  public describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): void;
  public describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): void;
  public describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): Promise<DescribeJobTemplateCommandOutput> | void {
    const command = new DescribeJobTemplateCommand(args);
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
   * <p>Displays detailed information about a managed endpoint. A managed endpoint is
   *          a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can
   *          communicate with your virtual cluster.</p>
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
   * <p>Displays detailed information about a specified virtual cluster. Virtual cluster is a
   *          managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual
   *          clusters. They do not consume any additional resource in your system. A single virtual
   *          cluster maps to a single Kubernetes namespace. Given this relationship, you can model
   *          virtual clusters the same way you model Kubernetes namespaces to meet your
   *          requirements.</p>
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
   * <p>Lists job runs based on a set of parameters. A job run is a unit of work, such as a
   *          Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
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
   * <p>Lists job templates based on a set of parameters. Job template stores values of
   *          StartJobRun API request in a template and can be used to start a job run. Job template
   *          allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing
   *          certain values in StartJobRun API request.</p>
   */
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobTemplatesCommandOutput>;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): Promise<ListJobTemplatesCommandOutput> | void {
    const command = new ListJobTemplatesCommand(args);
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
   * <p>Lists managed endpoints based on a set of parameters. A managed endpoint
   *          is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio
   *          can communicate with your virtual cluster.</p>
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
   * <p>Lists information about the specified virtual cluster. Virtual cluster is a managed
   *          entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters.
   *          They do not consume any additional resource in your system. A single virtual cluster maps
   *          to a single Kubernetes namespace. Given this relationship, you can model virtual clusters
   *          the same way you model Kubernetes namespaces to meet your requirements.</p>
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
   * <p>Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or
   *          SparkSQL query, that you submit to Amazon EMR on EKS.</p>
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
   * <p>Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag
   *          consists of a key and an optional value, both of which you define. Tags enable you to
   *          categorize your AWS resources by attributes such as purpose, owner, or environment. When
   *          you have many resources of the same type, you can quickly identify a specific resource
   *          based on the tags you've assigned to it. For example, you can define a set of tags for your
   *          Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We
   *          recommend that you devise a consistent set of tag keys for each resource type. You can then
   *          search and filter the resources based on the tags that you add.</p>
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
