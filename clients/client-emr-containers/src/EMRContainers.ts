// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import {
  GetManagedEndpointSessionCredentialsCommand,
  GetManagedEndpointSessionCredentialsCommandInput,
  GetManagedEndpointSessionCredentialsCommandOutput,
} from "./commands/GetManagedEndpointSessionCredentialsCommand";
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
import { EMRContainersClient, EMRContainersClientConfig } from "./EMRContainersClient";

const commands = {
  CancelJobRunCommand,
  CreateJobTemplateCommand,
  CreateManagedEndpointCommand,
  CreateVirtualClusterCommand,
  DeleteJobTemplateCommand,
  DeleteManagedEndpointCommand,
  DeleteVirtualClusterCommand,
  DescribeJobRunCommand,
  DescribeJobTemplateCommand,
  DescribeManagedEndpointCommand,
  DescribeVirtualClusterCommand,
  GetManagedEndpointSessionCredentialsCommand,
  ListJobRunsCommand,
  ListJobTemplatesCommand,
  ListManagedEndpointsCommand,
  ListTagsForResourceCommand,
  ListVirtualClustersCommand,
  StartJobRunCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface EMRContainers {
  /**
   * @see {@link CancelJobRunCommand}
   */
  cancelJobRun(args: CancelJobRunCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobRunCommandOutput>;
  cancelJobRun(args: CancelJobRunCommandInput, cb: (err: any, data?: CancelJobRunCommandOutput) => void): void;
  cancelJobRun(
    args: CancelJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobTemplateCommand}
   */
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobTemplateCommandOutput>;
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateManagedEndpointCommand}
   */
  createManagedEndpoint(
    args: CreateManagedEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateManagedEndpointCommandOutput>;
  createManagedEndpoint(
    args: CreateManagedEndpointCommandInput,
    cb: (err: any, data?: CreateManagedEndpointCommandOutput) => void
  ): void;
  createManagedEndpoint(
    args: CreateManagedEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateManagedEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVirtualClusterCommand}
   */
  createVirtualCluster(
    args: CreateVirtualClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualClusterCommandOutput>;
  createVirtualCluster(
    args: CreateVirtualClusterCommandInput,
    cb: (err: any, data?: CreateVirtualClusterCommandOutput) => void
  ): void;
  createVirtualCluster(
    args: CreateVirtualClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobTemplateCommand}
   */
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobTemplateCommandOutput>;
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteManagedEndpointCommand}
   */
  deleteManagedEndpoint(
    args: DeleteManagedEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteManagedEndpointCommandOutput>;
  deleteManagedEndpoint(
    args: DeleteManagedEndpointCommandInput,
    cb: (err: any, data?: DeleteManagedEndpointCommandOutput) => void
  ): void;
  deleteManagedEndpoint(
    args: DeleteManagedEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteManagedEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVirtualClusterCommand}
   */
  deleteVirtualCluster(
    args: DeleteVirtualClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualClusterCommandOutput>;
  deleteVirtualCluster(
    args: DeleteVirtualClusterCommandInput,
    cb: (err: any, data?: DeleteVirtualClusterCommandOutput) => void
  ): void;
  deleteVirtualCluster(
    args: DeleteVirtualClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobRunCommand}
   */
  describeJobRun(
    args: DescribeJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobRunCommandOutput>;
  describeJobRun(args: DescribeJobRunCommandInput, cb: (err: any, data?: DescribeJobRunCommandOutput) => void): void;
  describeJobRun(
    args: DescribeJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobTemplateCommand}
   */
  describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobTemplateCommandOutput>;
  describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): void;
  describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedEndpointCommand}
   */
  describeManagedEndpoint(
    args: DescribeManagedEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedEndpointCommandOutput>;
  describeManagedEndpoint(
    args: DescribeManagedEndpointCommandInput,
    cb: (err: any, data?: DescribeManagedEndpointCommandOutput) => void
  ): void;
  describeManagedEndpoint(
    args: DescribeManagedEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVirtualClusterCommand}
   */
  describeVirtualCluster(
    args: DescribeVirtualClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualClusterCommandOutput>;
  describeVirtualCluster(
    args: DescribeVirtualClusterCommandInput,
    cb: (err: any, data?: DescribeVirtualClusterCommandOutput) => void
  ): void;
  describeVirtualCluster(
    args: DescribeVirtualClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedEndpointSessionCredentialsCommand}
   */
  getManagedEndpointSessionCredentials(
    args: GetManagedEndpointSessionCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedEndpointSessionCredentialsCommandOutput>;
  getManagedEndpointSessionCredentials(
    args: GetManagedEndpointSessionCredentialsCommandInput,
    cb: (err: any, data?: GetManagedEndpointSessionCredentialsCommandOutput) => void
  ): void;
  getManagedEndpointSessionCredentials(
    args: GetManagedEndpointSessionCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedEndpointSessionCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobRunsCommand}
   */
  listJobRuns(args: ListJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobRunsCommandOutput>;
  listJobRuns(args: ListJobRunsCommandInput, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
  listJobRuns(
    args: ListJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobTemplatesCommand}
   */
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobTemplatesCommandOutput>;
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedEndpointsCommand}
   */
  listManagedEndpoints(
    args: ListManagedEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedEndpointsCommandOutput>;
  listManagedEndpoints(
    args: ListManagedEndpointsCommandInput,
    cb: (err: any, data?: ListManagedEndpointsCommandOutput) => void
  ): void;
  listManagedEndpoints(
    args: ListManagedEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedEndpointsCommandOutput) => void
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
   * @see {@link ListVirtualClustersCommand}
   */
  listVirtualClusters(
    args: ListVirtualClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualClustersCommandOutput>;
  listVirtualClusters(
    args: ListVirtualClustersCommandInput,
    cb: (err: any, data?: ListVirtualClustersCommandOutput) => void
  ): void;
  listVirtualClusters(
    args: ListVirtualClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartJobRunCommand}
   */
  startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
  startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
  startJobRun(
    args: StartJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
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
}

/**
 * @public
 * <p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows
 *          you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS).
 *          With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications.
 *          For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is
 *             shared id="EMR-EKS"/></a>.</p>
 *          <p>
 *             <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following
 *          scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example,
 *                   <code>aws emr-containers start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For
 *                example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more
 *                information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example,
 *                   <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see
 *                   <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKSService Endpoints</a>.</p>
 *             </li>
 *          </ul>
 */
export class EMRContainers extends EMRContainersClient implements EMRContainers {}
createAggregatedClient(commands, EMRContainers);
