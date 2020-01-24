import { KafkaClient } from "./KafkaClient";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "./commands/CreateClusterCommand";
import {
  CreateConfigurationCommand,
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput
} from "./commands/CreateConfigurationCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "./commands/DeleteClusterCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "./commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommand,
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput
} from "./commands/DescribeClusterOperationCommand";
import {
  DescribeConfigurationCommand,
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput
} from "./commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommand,
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput
} from "./commands/DescribeConfigurationRevisionCommand";
import {
  GetBootstrapBrokersCommand,
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput
} from "./commands/GetBootstrapBrokersCommand";
import {
  ListClusterOperationsCommand,
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput
} from "./commands/ListClusterOperationsCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "./commands/ListClustersCommand";
import {
  ListConfigurationRevisionsCommand,
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput
} from "./commands/ListConfigurationRevisionsCommand";
import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
} from "./commands/ListConfigurationsCommand";
import {
  ListNodesCommand,
  ListNodesCommandInput,
  ListNodesCommandOutput
} from "./commands/ListNodesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateBrokerCountCommand,
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput
} from "./commands/UpdateBrokerCountCommand";
import {
  UpdateBrokerStorageCommand,
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput
} from "./commands/UpdateBrokerStorageCommand";
import {
  UpdateClusterConfigurationCommand,
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput
} from "./commands/UpdateClusterConfigurationCommand";
import {
  UpdateMonitoringCommand,
  UpdateMonitoringCommandInput,
  UpdateMonitoringCommandOutput
} from "./commands/UpdateMonitoringCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The operations for managing an Amazon MSK cluster.</p>
 */
export class Kafka extends KafkaClient {
  /**
   * <p>Creates a new MSK cluster.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterCommandOutput) => void
  ): Promise<CreateClusterCommandOutput> | void {
    const command = new CreateClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new MSK configuration.</p>
   */
  public createConfiguration(
    args: CreateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationCommandOutput>;
  public createConfiguration(
    args: CreateConfigurationCommandInput,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;
  public createConfiguration(
    args: CreateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;
  public createConfiguration(
    args: CreateConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): Promise<CreateConfigurationCommandOutput> | void {
    const command = new CreateConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterCommandOutput) => void
  ): Promise<DeleteClusterCommandOutput> | void {
    const command = new DeleteClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeClusterCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterCommandOutput) => void
  ): Promise<DescribeClusterCommandOutput> | void {
    const command = new DescribeClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a description of the cluster operation specified by the ARN.</p>
   */
  public describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterOperationCommandOutput>;
  public describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    cb: (err: any, data?: DescribeClusterOperationCommandOutput) => void
  ): void;
  public describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterOperationCommandOutput) => void
  ): void;
  public describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeClusterOperationCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterOperationCommandOutput) => void
  ): Promise<DescribeClusterOperationCommandOutput> | void {
    const command = new DescribeClusterOperationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a description of this MSK configuration.</p>
   */
  public describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationCommandOutput>;
  public describeConfiguration(
    args: DescribeConfigurationCommandInput,
    cb: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): void;
  public describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): void;
  public describeConfiguration(
    args: DescribeConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): Promise<DescribeConfigurationCommandOutput> | void {
    const command = new DescribeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a description of this revision of the configuration.</p>
   */
  public describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationRevisionCommandOutput>;
  public describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): void;
  public describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): void;
  public describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeConfigurationRevisionCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): Promise<DescribeConfigurationRevisionCommandOutput> | void {
    const command = new DescribeConfigurationRevisionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A list of brokers that a client application can use to bootstrap.</p>
   */
  public getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBootstrapBrokersCommandOutput>;
  public getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    cb: (err: any, data?: GetBootstrapBrokersCommandOutput) => void
  ): void;
  public getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBootstrapBrokersCommandOutput) => void
  ): void;
  public getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBootstrapBrokersCommandOutput) => void),
    cb?: (err: any, data?: GetBootstrapBrokersCommandOutput) => void
  ): Promise<GetBootstrapBrokersCommandOutput> | void {
    const command = new GetBootstrapBrokersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
   */
  public listClusterOperations(
    args: ListClusterOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClusterOperationsCommandOutput>;
  public listClusterOperations(
    args: ListClusterOperationsCommandInput,
    cb: (err: any, data?: ListClusterOperationsCommandOutput) => void
  ): void;
  public listClusterOperations(
    args: ListClusterOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClusterOperationsCommandOutput) => void
  ): void;
  public listClusterOperations(
    args: ListClusterOperationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListClusterOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListClusterOperationsCommandOutput) => void
  ): Promise<ListClusterOperationsCommandOutput> | void {
    const command = new ListClusterOperationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all the MSK clusters in the current Region.</p>
   */
  public listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  public listClusters(
    args: ListClustersCommandInput,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  public listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  public listClusters(
    args: ListClustersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListClustersCommandOutput) => void),
    cb?: (err: any, data?: ListClustersCommandOutput) => void
  ): Promise<ListClustersCommandOutput> | void {
    const command = new ListClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all the MSK configurations in this Region.</p>
   */
  public listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationRevisionsCommandOutput>;
  public listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): void;
  public listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): void;
  public listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListConfigurationRevisionsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): Promise<ListConfigurationRevisionsCommandOutput> | void {
    const command = new ListConfigurationRevisionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all the MSK configurations in this Region.</p>
   */
  public listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationsCommandOutput>;
  public listConfigurations(
    args: ListConfigurationsCommandInput,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  public listConfigurations(
    args: ListConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  public listConfigurations(
    args: ListConfigurationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): Promise<ListConfigurationsCommandOutput> | void {
    const command = new ListConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the broker nodes in the cluster.</p>
   */
  public listNodes(
    args: ListNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodesCommandOutput>;
  public listNodes(
    args: ListNodesCommandInput,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  public listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  public listNodes(
    args: ListNodesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListNodesCommandOutput) => void),
    cb?: (err: any, data?: ListNodesCommandOutput) => void
  ): Promise<ListNodesCommandOutput> | void {
    const command = new ListNodesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the tags associated with the specified resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds tags to the specified MSK resource.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the tags associated with the keys that are provided in the query.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the number of broker nodes in the cluster.</p>
   */
  public updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrokerCountCommandOutput>;
  public updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    cb: (err: any, data?: UpdateBrokerCountCommandOutput) => void
  ): void;
  public updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrokerCountCommandOutput) => void
  ): void;
  public updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateBrokerCountCommandOutput) => void),
    cb?: (err: any, data?: UpdateBrokerCountCommandOutput) => void
  ): Promise<UpdateBrokerCountCommandOutput> | void {
    const command = new UpdateBrokerCountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the EBS storage associated with MSK brokers.</p>
   */
  public updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrokerStorageCommandOutput>;
  public updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    cb: (err: any, data?: UpdateBrokerStorageCommandOutput) => void
  ): void;
  public updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrokerStorageCommandOutput) => void
  ): void;
  public updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateBrokerStorageCommandOutput) => void),
    cb?: (err: any, data?: UpdateBrokerStorageCommandOutput) => void
  ): Promise<UpdateBrokerStorageCommandOutput> | void {
    const command = new UpdateBrokerStorageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the cluster with the configuration that is specified in the request body.</p>
   */
  public updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterConfigurationCommandOutput>;
  public updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    cb: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void
  ): void;
  public updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void
  ): void;
  public updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateClusterConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void
  ): Promise<UpdateClusterConfigurationCommandOutput> | void {
    const command = new UpdateClusterConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
   */
  public updateMonitoring(
    args: UpdateMonitoringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMonitoringCommandOutput>;
  public updateMonitoring(
    args: UpdateMonitoringCommandInput,
    cb: (err: any, data?: UpdateMonitoringCommandOutput) => void
  ): void;
  public updateMonitoring(
    args: UpdateMonitoringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitoringCommandOutput) => void
  ): void;
  public updateMonitoring(
    args: UpdateMonitoringCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateMonitoringCommandOutput) => void),
    cb?: (err: any, data?: UpdateMonitoringCommandOutput) => void
  ): Promise<UpdateMonitoringCommandOutput> | void {
    const command = new UpdateMonitoringCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
