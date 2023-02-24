// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchAssociateScramSecretCommand,
  BatchAssociateScramSecretCommandInput,
  BatchAssociateScramSecretCommandOutput,
} from "./commands/BatchAssociateScramSecretCommand";
import {
  BatchDisassociateScramSecretCommand,
  BatchDisassociateScramSecretCommandInput,
  BatchDisassociateScramSecretCommandOutput,
} from "./commands/BatchDisassociateScramSecretCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateClusterV2Command,
  CreateClusterV2CommandInput,
  CreateClusterV2CommandOutput,
} from "./commands/CreateClusterV2Command";
import {
  CreateConfigurationCommand,
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "./commands/CreateConfigurationCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteConfigurationCommand,
  DeleteConfigurationCommandInput,
  DeleteConfigurationCommandOutput,
} from "./commands/DeleteConfigurationCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommand,
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
} from "./commands/DescribeClusterOperationCommand";
import {
  DescribeClusterV2Command,
  DescribeClusterV2CommandInput,
  DescribeClusterV2CommandOutput,
} from "./commands/DescribeClusterV2Command";
import {
  DescribeConfigurationCommand,
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
} from "./commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommand,
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
} from "./commands/DescribeConfigurationRevisionCommand";
import {
  GetBootstrapBrokersCommand,
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
} from "./commands/GetBootstrapBrokersCommand";
import {
  GetCompatibleKafkaVersionsCommand,
  GetCompatibleKafkaVersionsCommandInput,
  GetCompatibleKafkaVersionsCommandOutput,
} from "./commands/GetCompatibleKafkaVersionsCommand";
import {
  ListClusterOperationsCommand,
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "./commands/ListClusterOperationsCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListClustersV2Command,
  ListClustersV2CommandInput,
  ListClustersV2CommandOutput,
} from "./commands/ListClustersV2Command";
import {
  ListConfigurationRevisionsCommand,
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "./commands/ListConfigurationRevisionsCommand";
import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "./commands/ListConfigurationsCommand";
import {
  ListKafkaVersionsCommand,
  ListKafkaVersionsCommandInput,
  ListKafkaVersionsCommandOutput,
} from "./commands/ListKafkaVersionsCommand";
import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import {
  ListScramSecretsCommand,
  ListScramSecretsCommandInput,
  ListScramSecretsCommandOutput,
} from "./commands/ListScramSecretsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RebootBrokerCommand,
  RebootBrokerCommandInput,
  RebootBrokerCommandOutput,
} from "./commands/RebootBrokerCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBrokerCountCommand,
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput,
} from "./commands/UpdateBrokerCountCommand";
import {
  UpdateBrokerStorageCommand,
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput,
} from "./commands/UpdateBrokerStorageCommand";
import {
  UpdateBrokerTypeCommand,
  UpdateBrokerTypeCommandInput,
  UpdateBrokerTypeCommandOutput,
} from "./commands/UpdateBrokerTypeCommand";
import {
  UpdateClusterConfigurationCommand,
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput,
} from "./commands/UpdateClusterConfigurationCommand";
import {
  UpdateClusterKafkaVersionCommand,
  UpdateClusterKafkaVersionCommandInput,
  UpdateClusterKafkaVersionCommandOutput,
} from "./commands/UpdateClusterKafkaVersionCommand";
import {
  UpdateConfigurationCommand,
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import {
  UpdateConnectivityCommand,
  UpdateConnectivityCommandInput,
  UpdateConnectivityCommandOutput,
} from "./commands/UpdateConnectivityCommand";
import {
  UpdateMonitoringCommand,
  UpdateMonitoringCommandInput,
  UpdateMonitoringCommandOutput,
} from "./commands/UpdateMonitoringCommand";
import {
  UpdateSecurityCommand,
  UpdateSecurityCommandInput,
  UpdateSecurityCommandOutput,
} from "./commands/UpdateSecurityCommand";
import {
  UpdateStorageCommand,
  UpdateStorageCommandInput,
  UpdateStorageCommandOutput,
} from "./commands/UpdateStorageCommand";
import { KafkaClient } from "./KafkaClient";

/**
 * <p>The operations for managing an Amazon MSK cluster.</p>
 */
export class Kafka extends KafkaClient {
  /**
   * <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>
   */
  public batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateScramSecretCommandOutput>;
  public batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    cb: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void
  ): void;
  public batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void
  ): void;
  public batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchAssociateScramSecretCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void
  ): Promise<BatchAssociateScramSecretCommandOutput> | void {
    const command = new BatchAssociateScramSecretCommand(args);
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
   * <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>
   */
  public batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateScramSecretCommandOutput>;
  public batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    cb: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void
  ): void;
  public batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void
  ): void;
  public batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDisassociateScramSecretCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void
  ): Promise<BatchDisassociateScramSecretCommandOutput> | void {
    const command = new BatchDisassociateScramSecretCommand(args);
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
   * <p>Creates a new MSK cluster.</p>
   */
  public createClusterV2(
    args: CreateClusterV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterV2CommandOutput>;
  public createClusterV2(
    args: CreateClusterV2CommandInput,
    cb: (err: any, data?: CreateClusterV2CommandOutput) => void
  ): void;
  public createClusterV2(
    args: CreateClusterV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterV2CommandOutput) => void
  ): void;
  public createClusterV2(
    args: CreateClusterV2CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterV2CommandOutput) => void),
    cb?: (err: any, data?: CreateClusterV2CommandOutput) => void
  ): Promise<CreateClusterV2CommandOutput> | void {
    const command = new CreateClusterV2Command(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): Promise<CreateConfigurationCommandOutput> | void {
    const command = new CreateConfigurationCommand(args);
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
   * <p>Deletes an MSK Configuration.</p>
   */
  public deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationCommandOutput>;
  public deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;
  public deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;
  public deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): Promise<DeleteConfigurationCommandOutput> | void {
    const command = new DeleteConfigurationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterOperationCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterOperationCommandOutput) => void
  ): Promise<DescribeClusterOperationCommandOutput> | void {
    const command = new DescribeClusterOperationCommand(args);
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
   * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
   */
  public describeClusterV2(
    args: DescribeClusterV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterV2CommandOutput>;
  public describeClusterV2(
    args: DescribeClusterV2CommandInput,
    cb: (err: any, data?: DescribeClusterV2CommandOutput) => void
  ): void;
  public describeClusterV2(
    args: DescribeClusterV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterV2CommandOutput) => void
  ): void;
  public describeClusterV2(
    args: DescribeClusterV2CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterV2CommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterV2CommandOutput) => void
  ): Promise<DescribeClusterV2CommandOutput> | void {
    const command = new DescribeClusterV2Command(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): Promise<DescribeConfigurationCommandOutput> | void {
    const command = new DescribeConfigurationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationRevisionCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): Promise<DescribeConfigurationRevisionCommandOutput> | void {
    const command = new DescribeConfigurationRevisionCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBootstrapBrokersCommandOutput) => void),
    cb?: (err: any, data?: GetBootstrapBrokersCommandOutput) => void
  ): Promise<GetBootstrapBrokersCommandOutput> | void {
    const command = new GetBootstrapBrokersCommand(args);
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
   * <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>
   */
  public getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCompatibleKafkaVersionsCommandOutput>;
  public getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    cb: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void
  ): void;
  public getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void
  ): void;
  public getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void
  ): Promise<GetCompatibleKafkaVersionsCommandOutput> | void {
    const command = new GetCompatibleKafkaVersionsCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClusterOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListClusterOperationsCommandOutput) => void
  ): Promise<ListClusterOperationsCommandOutput> | void {
    const command = new ListClusterOperationsCommand(args);
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
   * <p>Returns a list of all the MSK clusters in the current Region.</p>
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
   * <p>Returns a list of all the MSK clusters in the current Region.</p>
   */
  public listClustersV2(
    args: ListClustersV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersV2CommandOutput>;
  public listClustersV2(
    args: ListClustersV2CommandInput,
    cb: (err: any, data?: ListClustersV2CommandOutput) => void
  ): void;
  public listClustersV2(
    args: ListClustersV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersV2CommandOutput) => void
  ): void;
  public listClustersV2(
    args: ListClustersV2CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClustersV2CommandOutput) => void),
    cb?: (err: any, data?: ListClustersV2CommandOutput) => void
  ): Promise<ListClustersV2CommandOutput> | void {
    const command = new ListClustersV2Command(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigurationRevisionsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): Promise<ListConfigurationRevisionsCommandOutput> | void {
    const command = new ListConfigurationRevisionsCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): Promise<ListConfigurationsCommandOutput> | void {
    const command = new ListConfigurationsCommand(args);
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
   * <p>Returns a list of Apache Kafka versions.</p>
   */
  public listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKafkaVersionsCommandOutput>;
  public listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    cb: (err: any, data?: ListKafkaVersionsCommandOutput) => void
  ): void;
  public listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKafkaVersionsCommandOutput) => void
  ): void;
  public listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListKafkaVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListKafkaVersionsCommandOutput) => void
  ): Promise<ListKafkaVersionsCommandOutput> | void {
    const command = new ListKafkaVersionsCommand(args);
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
   * <p>Returns a list of the broker nodes in the cluster.</p>
   */
  public listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
  public listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
  public listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  public listNodes(
    args: ListNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNodesCommandOutput) => void),
    cb?: (err: any, data?: ListNodesCommandOutput) => void
  ): Promise<ListNodesCommandOutput> | void {
    const command = new ListNodesCommand(args);
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
   * <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>
   */
  public listScramSecrets(
    args: ListScramSecretsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScramSecretsCommandOutput>;
  public listScramSecrets(
    args: ListScramSecretsCommandInput,
    cb: (err: any, data?: ListScramSecretsCommandOutput) => void
  ): void;
  public listScramSecrets(
    args: ListScramSecretsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScramSecretsCommandOutput) => void
  ): void;
  public listScramSecrets(
    args: ListScramSecretsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListScramSecretsCommandOutput) => void),
    cb?: (err: any, data?: ListScramSecretsCommandOutput) => void
  ): Promise<ListScramSecretsCommandOutput> | void {
    const command = new ListScramSecretsCommand(args);
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
   * Reboots brokers.
   */
  public rebootBroker(
    args: RebootBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootBrokerCommandOutput>;
  public rebootBroker(args: RebootBrokerCommandInput, cb: (err: any, data?: RebootBrokerCommandOutput) => void): void;
  public rebootBroker(
    args: RebootBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootBrokerCommandOutput) => void
  ): void;
  public rebootBroker(
    args: RebootBrokerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootBrokerCommandOutput) => void),
    cb?: (err: any, data?: RebootBrokerCommandOutput) => void
  ): Promise<RebootBrokerCommandOutput> | void {
    const command = new RebootBrokerCommand(args);
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
   * <p>Adds tags to the specified MSK resource.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBrokerCountCommandOutput) => void),
    cb?: (err: any, data?: UpdateBrokerCountCommandOutput) => void
  ): Promise<UpdateBrokerCountCommandOutput> | void {
    const command = new UpdateBrokerCountCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBrokerStorageCommandOutput) => void),
    cb?: (err: any, data?: UpdateBrokerStorageCommandOutput) => void
  ): Promise<UpdateBrokerStorageCommandOutput> | void {
    const command = new UpdateBrokerStorageCommand(args);
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
   * <p>Updates EC2 instance type.</p>
   */
  public updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrokerTypeCommandOutput>;
  public updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    cb: (err: any, data?: UpdateBrokerTypeCommandOutput) => void
  ): void;
  public updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrokerTypeCommandOutput) => void
  ): void;
  public updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBrokerTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateBrokerTypeCommandOutput) => void
  ): Promise<UpdateBrokerTypeCommandOutput> | void {
    const command = new UpdateBrokerTypeCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClusterConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void
  ): Promise<UpdateClusterConfigurationCommandOutput> | void {
    const command = new UpdateClusterConfigurationCommand(args);
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
   * <p>Updates the Apache Kafka version for the cluster.</p>
   */
  public updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterKafkaVersionCommandOutput>;
  public updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    cb: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void
  ): void;
  public updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void
  ): void;
  public updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void
  ): Promise<UpdateClusterKafkaVersionCommandOutput> | void {
    const command = new UpdateClusterKafkaVersionCommand(args);
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
   * <p>Updates an MSK configuration.</p>
   */
  public updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationCommandOutput>;
  public updateConfiguration(
    args: UpdateConfigurationCommandInput,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;
  public updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;
  public updateConfiguration(
    args: UpdateConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): Promise<UpdateConfigurationCommandOutput> | void {
    const command = new UpdateConfigurationCommand(args);
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
   * <p>Updates the cluster's connectivity configuration.</p>
   */
  public updateConnectivity(
    args: UpdateConnectivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectivityCommandOutput>;
  public updateConnectivity(
    args: UpdateConnectivityCommandInput,
    cb: (err: any, data?: UpdateConnectivityCommandOutput) => void
  ): void;
  public updateConnectivity(
    args: UpdateConnectivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectivityCommandOutput) => void
  ): void;
  public updateConnectivity(
    args: UpdateConnectivityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectivityCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectivityCommandOutput) => void
  ): Promise<UpdateConnectivityCommandOutput> | void {
    const command = new UpdateConnectivityCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMonitoringCommandOutput) => void),
    cb?: (err: any, data?: UpdateMonitoringCommandOutput) => void
  ): Promise<UpdateMonitoringCommandOutput> | void {
    const command = new UpdateMonitoringCommand(args);
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
   * <p>Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.</p>
   */
  public updateSecurity(
    args: UpdateSecurityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityCommandOutput>;
  public updateSecurity(
    args: UpdateSecurityCommandInput,
    cb: (err: any, data?: UpdateSecurityCommandOutput) => void
  ): void;
  public updateSecurity(
    args: UpdateSecurityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityCommandOutput) => void
  ): void;
  public updateSecurity(
    args: UpdateSecurityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecurityCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecurityCommandOutput) => void
  ): Promise<UpdateSecurityCommandOutput> | void {
    const command = new UpdateSecurityCommand(args);
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
   * Updates cluster broker volume size (or) sets cluster storage mode to TIERED.
   */
  public updateStorage(
    args: UpdateStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStorageCommandOutput>;
  public updateStorage(
    args: UpdateStorageCommandInput,
    cb: (err: any, data?: UpdateStorageCommandOutput) => void
  ): void;
  public updateStorage(
    args: UpdateStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStorageCommandOutput) => void
  ): void;
  public updateStorage(
    args: UpdateStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStorageCommandOutput) => void),
    cb?: (err: any, data?: UpdateStorageCommandOutput) => void
  ): Promise<UpdateStorageCommandOutput> | void {
    const command = new UpdateStorageCommand(args);
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
