import { EKSClient } from "./EKSClient";
import { ClientException } from "./types/ClientException";
import { CreateClusterInput } from "./types/CreateClusterInput";
import { CreateClusterOutput } from "./types/CreateClusterOutput";
import { DeleteClusterInput } from "./types/DeleteClusterInput";
import { DeleteClusterOutput } from "./types/DeleteClusterOutput";
import { DescribeClusterInput } from "./types/DescribeClusterInput";
import { DescribeClusterOutput } from "./types/DescribeClusterOutput";
import { DescribeUpdateInput } from "./types/DescribeUpdateInput";
import { DescribeUpdateOutput } from "./types/DescribeUpdateOutput";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListClustersInput } from "./types/ListClustersInput";
import { ListClustersOutput } from "./types/ListClustersOutput";
import { ListUpdatesInput } from "./types/ListUpdatesInput";
import { ListUpdatesOutput } from "./types/ListUpdatesOutput";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceLimitExceededException } from "./types/ResourceLimitExceededException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServerException } from "./types/ServerException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { UnsupportedAvailabilityZoneException } from "./types/UnsupportedAvailabilityZoneException";
import { UpdateClusterConfigInput } from "./types/UpdateClusterConfigInput";
import { UpdateClusterConfigOutput } from "./types/UpdateClusterConfigOutput";
import { UpdateClusterVersionInput } from "./types/UpdateClusterVersionInput";
import { UpdateClusterVersionOutput } from "./types/UpdateClusterVersionOutput";
import { CreateClusterCommand } from "./commands/CreateClusterCommand";
import { DeleteClusterCommand } from "./commands/DeleteClusterCommand";
import { DescribeClusterCommand } from "./commands/DescribeClusterCommand";
import { DescribeUpdateCommand } from "./commands/DescribeUpdateCommand";
import { ListClustersCommand } from "./commands/ListClustersCommand";
import { ListUpdatesCommand } from "./commands/ListUpdatesCommand";
import { UpdateClusterConfigCommand } from "./commands/UpdateClusterConfigCommand";
import { UpdateClusterVersionCommand } from "./commands/UpdateClusterVersionCommand";

export class EKS extends EKSClient {
  /**
   * <p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the worker nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS worker nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>You can use the <code>endpointPublicAccess</code> and <code>endpointPrivateAccess</code> parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster Endpoint Access Control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <p>You can use the <code>logging</code> parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> </note> <p>Cluster creation typically takes between 10 and 15 minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch worker nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS Worker Nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceLimitExceededException} <p>You have encountered a service limit on the specified resource.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {ServiceUnavailableException} <p>The service is unavailable. Back off and retry the operation.</p>
   *   - {UnsupportedAvailabilityZoneException} <p>At least one of your specified cluster subnets is in an Availability Zone that does not support Amazon EKS. The exception output specifies the supported Availability Zones for your account, from which you can choose subnets for your cluster.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCluster(args: CreateClusterInput): Promise<CreateClusterOutput>;
  public createCluster(
    args: CreateClusterInput,
    cb: (err: any, data?: CreateClusterOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterInput,
    cb?: (err: any, data?: CreateClusterOutput) => void
  ): Promise<CreateClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the Amazon EKS cluster control plane. </p> <note> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are Region-specific.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {ServiceUnavailableException} <p>The service is unavailable. Back off and retry the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCluster(args: DeleteClusterInput): Promise<DeleteClusterOutput>;
  public deleteCluster(
    args: DeleteClusterInput,
    cb: (err: any, data?: DeleteClusterOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterInput,
    cb?: (err: any, data?: DeleteClusterOutput) => void
  ): Promise<DeleteClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are Region-specific.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {ServiceUnavailableException} <p>The service is unavailable. Back off and retry the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCluster(
    args: DescribeClusterInput
  ): Promise<DescribeClusterOutput>;
  public describeCluster(
    args: DescribeClusterInput,
    cb: (err: any, data?: DescribeClusterOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterInput,
    cb?: (err: any, data?: DescribeClusterOutput) => void
  ): Promise<DescribeClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns descriptive information about an update against your Amazon EKS cluster.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUpdate(
    args: DescribeUpdateInput
  ): Promise<DescribeUpdateOutput>;
  public describeUpdate(
    args: DescribeUpdateInput,
    cb: (err: any, data?: DescribeUpdateOutput) => void
  ): void;
  public describeUpdate(
    args: DescribeUpdateInput,
    cb?: (err: any, data?: DescribeUpdateOutput) => void
  ): Promise<DescribeUpdateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUpdateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Amazon EKS clusters in your AWS account in the specified Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {ServiceUnavailableException} <p>The service is unavailable. Back off and retry the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listClusters(args: ListClustersInput): Promise<ListClustersOutput>;
  public listClusters(
    args: ListClustersInput,
    cb: (err: any, data?: ListClustersOutput) => void
  ): void;
  public listClusters(
    args: ListClustersInput,
    cb?: (err: any, data?: ListClustersOutput) => void
  ): Promise<ListClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the updates associated with an Amazon EKS cluster in your AWS account, in the specified Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUpdates(args: ListUpdatesInput): Promise<ListUpdatesOutput>;
  public listUpdates(
    args: ListUpdatesInput,
    cb: (err: any, data?: ListUpdatesOutput) => void
  ): void;
  public listUpdates(
    args: ListUpdatesInput,
    cb?: (err: any, data?: ListUpdatesOutput) => void
  ): Promise<ListUpdatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUpdatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster Endpoint Access Control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>At this time, you can not update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are Region-specific.</p>
   *   - {InvalidRequestException} <p>The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateClusterConfig(
    args: UpdateClusterConfigInput
  ): Promise<UpdateClusterConfigOutput>;
  public updateClusterConfig(
    args: UpdateClusterConfigInput,
    cb: (err: any, data?: UpdateClusterConfigOutput) => void
  ): void;
  public updateClusterConfig(
    args: UpdateClusterConfigInput,
    cb?: (err: any, data?: UpdateClusterConfigOutput) => void
  ): Promise<UpdateClusterConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateClusterConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are Region-specific.</p>
   *   - {InvalidRequestException} <p>The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateClusterVersion(
    args: UpdateClusterVersionInput
  ): Promise<UpdateClusterVersionOutput>;
  public updateClusterVersion(
    args: UpdateClusterVersionInput,
    cb: (err: any, data?: UpdateClusterVersionOutput) => void
  ): void;
  public updateClusterVersion(
    args: UpdateClusterVersionInput,
    cb?: (err: any, data?: UpdateClusterVersionOutput) => void
  ): Promise<UpdateClusterVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateClusterVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
