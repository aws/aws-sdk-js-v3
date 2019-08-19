import { KafkaClient } from "./KafkaClient";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateClusterInput } from "./types/CreateClusterInput";
import { CreateClusterOutput } from "./types/CreateClusterOutput";
import { CreateConfigurationInput } from "./types/CreateConfigurationInput";
import { CreateConfigurationOutput } from "./types/CreateConfigurationOutput";
import { DeleteClusterInput } from "./types/DeleteClusterInput";
import { DeleteClusterOutput } from "./types/DeleteClusterOutput";
import { DescribeClusterInput } from "./types/DescribeClusterInput";
import { DescribeClusterOperationInput } from "./types/DescribeClusterOperationInput";
import { DescribeClusterOperationOutput } from "./types/DescribeClusterOperationOutput";
import { DescribeClusterOutput } from "./types/DescribeClusterOutput";
import { DescribeConfigurationInput } from "./types/DescribeConfigurationInput";
import { DescribeConfigurationOutput } from "./types/DescribeConfigurationOutput";
import { DescribeConfigurationRevisionInput } from "./types/DescribeConfigurationRevisionInput";
import { DescribeConfigurationRevisionOutput } from "./types/DescribeConfigurationRevisionOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GetBootstrapBrokersInput } from "./types/GetBootstrapBrokersInput";
import { GetBootstrapBrokersOutput } from "./types/GetBootstrapBrokersOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListClusterOperationsInput } from "./types/ListClusterOperationsInput";
import { ListClusterOperationsOutput } from "./types/ListClusterOperationsOutput";
import { ListClustersInput } from "./types/ListClustersInput";
import { ListClustersOutput } from "./types/ListClustersOutput";
import { ListConfigurationRevisionsInput } from "./types/ListConfigurationRevisionsInput";
import { ListConfigurationRevisionsOutput } from "./types/ListConfigurationRevisionsOutput";
import { ListConfigurationsInput } from "./types/ListConfigurationsInput";
import { ListConfigurationsOutput } from "./types/ListConfigurationsOutput";
import { ListNodesInput } from "./types/ListNodesInput";
import { ListNodesOutput } from "./types/ListNodesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { NotFoundException } from "./types/NotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateBrokerStorageInput } from "./types/UpdateBrokerStorageInput";
import { UpdateBrokerStorageOutput } from "./types/UpdateBrokerStorageOutput";
import { UpdateClusterConfigurationInput } from "./types/UpdateClusterConfigurationInput";
import { UpdateClusterConfigurationOutput } from "./types/UpdateClusterConfigurationOutput";
import { CreateClusterCommand } from "./commands/CreateClusterCommand";
import { CreateConfigurationCommand } from "./commands/CreateConfigurationCommand";
import { DeleteClusterCommand } from "./commands/DeleteClusterCommand";
import { DescribeClusterCommand } from "./commands/DescribeClusterCommand";
import { DescribeClusterOperationCommand } from "./commands/DescribeClusterOperationCommand";
import { DescribeConfigurationCommand } from "./commands/DescribeConfigurationCommand";
import { DescribeConfigurationRevisionCommand } from "./commands/DescribeConfigurationRevisionCommand";
import { GetBootstrapBrokersCommand } from "./commands/GetBootstrapBrokersCommand";
import { ListClusterOperationsCommand } from "./commands/ListClusterOperationsCommand";
import { ListClustersCommand } from "./commands/ListClustersCommand";
import { ListConfigurationRevisionsCommand } from "./commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommand } from "./commands/ListConfigurationsCommand";
import { ListNodesCommand } from "./commands/ListNodesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateBrokerStorageCommand } from "./commands/UpdateBrokerStorageCommand";
import { UpdateClusterConfigurationCommand } from "./commands/UpdateClusterConfigurationCommand";

export class Kafka extends KafkaClient {
  /**
   *
              <p>Creates a new MSK cluster.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {ServiceUnavailableException}
              <p>Returns information about an error.</p>

   *   - {TooManyRequestsException}
              <p>Returns information about an error.</p>

   *   - {ConflictException}
              <p>Returns information about an error.</p>

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
   *
              <p>Creates a new MSK configuration.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {ServiceUnavailableException}
              <p>Returns information about an error.</p>

   *   - {TooManyRequestsException}
              <p>Returns information about an error.</p>

   *   - {ConflictException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfiguration(
    args: CreateConfigurationInput
  ): Promise<CreateConfigurationOutput>;
  public createConfiguration(
    args: CreateConfigurationInput,
    cb: (err: any, data?: CreateConfigurationOutput) => void
  ): void;
  public createConfiguration(
    args: CreateConfigurationInput,
    cb?: (err: any, data?: CreateConfigurationOutput) => void
  ): Promise<CreateConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

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
   *
              <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

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
   *
              <p>Returns a description of the cluster operation specified by the ARN.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusterOperation(
    args: DescribeClusterOperationInput
  ): Promise<DescribeClusterOperationOutput>;
  public describeClusterOperation(
    args: DescribeClusterOperationInput,
    cb: (err: any, data?: DescribeClusterOperationOutput) => void
  ): void;
  public describeClusterOperation(
    args: DescribeClusterOperationInput,
    cb?: (err: any, data?: DescribeClusterOperationOutput) => void
  ): Promise<DescribeClusterOperationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterOperationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Returns a description of this MSK configuration.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {ServiceUnavailableException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfiguration(
    args: DescribeConfigurationInput
  ): Promise<DescribeConfigurationOutput>;
  public describeConfiguration(
    args: DescribeConfigurationInput,
    cb: (err: any, data?: DescribeConfigurationOutput) => void
  ): void;
  public describeConfiguration(
    args: DescribeConfigurationInput,
    cb?: (err: any, data?: DescribeConfigurationOutput) => void
  ): Promise<DescribeConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Returns a description of this revision of the configuration.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {ServiceUnavailableException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurationRevision(
    args: DescribeConfigurationRevisionInput
  ): Promise<DescribeConfigurationRevisionOutput>;
  public describeConfigurationRevision(
    args: DescribeConfigurationRevisionInput,
    cb: (err: any, data?: DescribeConfigurationRevisionOutput) => void
  ): void;
  public describeConfigurationRevision(
    args: DescribeConfigurationRevisionInput,
    cb?: (err: any, data?: DescribeConfigurationRevisionOutput) => void
  ): Promise<DescribeConfigurationRevisionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationRevisionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>A list of brokers that a client application can use to bootstrap.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ConflictException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBootstrapBrokers(
    args: GetBootstrapBrokersInput
  ): Promise<GetBootstrapBrokersOutput>;
  public getBootstrapBrokers(
    args: GetBootstrapBrokersInput,
    cb: (err: any, data?: GetBootstrapBrokersOutput) => void
  ): void;
  public getBootstrapBrokers(
    args: GetBootstrapBrokersInput,
    cb?: (err: any, data?: GetBootstrapBrokersOutput) => void
  ): Promise<GetBootstrapBrokersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBootstrapBrokersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listClusterOperations(
    args: ListClusterOperationsInput
  ): Promise<ListClusterOperationsOutput>;
  public listClusterOperations(
    args: ListClusterOperationsInput,
    cb: (err: any, data?: ListClusterOperationsOutput) => void
  ): void;
  public listClusterOperations(
    args: ListClusterOperationsInput,
    cb?: (err: any, data?: ListClusterOperationsOutput) => void
  ): Promise<ListClusterOperationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListClusterOperationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Returns a list of all the MSK clusters in the current Region.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

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
   *
              <p>Returns a list of all the MSK configurations in this Region.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {ServiceUnavailableException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConfigurationRevisions(
    args: ListConfigurationRevisionsInput
  ): Promise<ListConfigurationRevisionsOutput>;
  public listConfigurationRevisions(
    args: ListConfigurationRevisionsInput,
    cb: (err: any, data?: ListConfigurationRevisionsOutput) => void
  ): void;
  public listConfigurationRevisions(
    args: ListConfigurationRevisionsInput,
    cb?: (err: any, data?: ListConfigurationRevisionsOutput) => void
  ): Promise<ListConfigurationRevisionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConfigurationRevisionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Returns a list of all the MSK configurations in this Region.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConfigurations(
    args: ListConfigurationsInput
  ): Promise<ListConfigurationsOutput>;
  public listConfigurations(
    args: ListConfigurationsInput,
    cb: (err: any, data?: ListConfigurationsOutput) => void
  ): void;
  public listConfigurations(
    args: ListConfigurationsInput,
    cb?: (err: any, data?: ListConfigurationsOutput) => void
  ): Promise<ListConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Returns a list of the broker nodes in the cluster.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listNodes(args: ListNodesInput): Promise<ListNodesOutput>;
  public listNodes(
    args: ListNodesInput,
    cb: (err: any, data?: ListNodesOutput) => void
  ): void;
  public listNodes(
    args: ListNodesInput,
    cb?: (err: any, data?: ListNodesOutput) => void
  ): Promise<ListNodesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListNodesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Returns a list of the tags associated with the specified resource.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Adds tags to the specified MSK resource.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Removes the tags associated with the keys that are provided in the query.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Updates the EBS storage associated with MSK brokers.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException}
              <p>Returns information about an error.</p>

   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBrokerStorage(
    args: UpdateBrokerStorageInput
  ): Promise<UpdateBrokerStorageOutput>;
  public updateBrokerStorage(
    args: UpdateBrokerStorageInput,
    cb: (err: any, data?: UpdateBrokerStorageOutput) => void
  ): void;
  public updateBrokerStorage(
    args: UpdateBrokerStorageInput,
    cb?: (err: any, data?: UpdateBrokerStorageOutput) => void
  ): Promise<UpdateBrokerStorageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBrokerStorageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *
              <p>Updates the cluster with the configuration that is specified in the request body.</p>

   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException}
              <p>Returns information about an error.</p>

   *   - {UnauthorizedException}
              <p>Returns information about an error.</p>

   *   - {InternalServerErrorException}
              <p>Returns information about an error.</p>

   *   - {ForbiddenException}
              <p>Returns information about an error.</p>

   *   - {NotFoundException}
              <p>Returns information about an error.</p>

   *   - {ServiceUnavailableException}
              <p>Returns information about an error.</p>

   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateClusterConfiguration(
    args: UpdateClusterConfigurationInput
  ): Promise<UpdateClusterConfigurationOutput>;
  public updateClusterConfiguration(
    args: UpdateClusterConfigurationInput,
    cb: (err: any, data?: UpdateClusterConfigurationOutput) => void
  ): void;
  public updateClusterConfiguration(
    args: UpdateClusterConfigurationInput,
    cb?: (err: any, data?: UpdateClusterConfigurationOutput) => void
  ): Promise<UpdateClusterConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateClusterConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
