// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateBrokerCommand,
  CreateBrokerCommandInput,
  CreateBrokerCommandOutput,
} from "./commands/CreateBrokerCommand";
import {
  CreateConfigurationCommand,
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "./commands/CreateConfigurationCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteBrokerCommand,
  DeleteBrokerCommandInput,
  DeleteBrokerCommandOutput,
} from "./commands/DeleteBrokerCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeBrokerCommand,
  DescribeBrokerCommandInput,
  DescribeBrokerCommandOutput,
} from "./commands/DescribeBrokerCommand";
import {
  DescribeBrokerEngineTypesCommand,
  DescribeBrokerEngineTypesCommandInput,
  DescribeBrokerEngineTypesCommandOutput,
} from "./commands/DescribeBrokerEngineTypesCommand";
import {
  DescribeBrokerInstanceOptionsCommand,
  DescribeBrokerInstanceOptionsCommandInput,
  DescribeBrokerInstanceOptionsCommandOutput,
} from "./commands/DescribeBrokerInstanceOptionsCommand";
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
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import { ListBrokersCommand, ListBrokersCommandInput, ListBrokersCommandOutput } from "./commands/ListBrokersCommand";
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
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  RebootBrokerCommand,
  RebootBrokerCommandInput,
  RebootBrokerCommandOutput,
} from "./commands/RebootBrokerCommand";
import {
  UpdateBrokerCommand,
  UpdateBrokerCommandInput,
  UpdateBrokerCommandOutput,
} from "./commands/UpdateBrokerCommand";
import {
  UpdateConfigurationCommand,
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { MqClient } from "./MqClient";

/**
 * <p>Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.</p>
 */
export class Mq extends MqClient {
  /**
   * <p>Creates a broker. Note: This API is asynchronous.</p> <p>To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy.</p> <ul><li><p>ec2:CreateNetworkInterface</p> <p>This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account.</p></li> <li><p>ec2:CreateNetworkInterfacePermission</p> <p>This permission is required to attach the ENI to the broker instance.</p></li> <li><p>ec2:DeleteNetworkInterface</p></li> <li><p>ec2:DeleteNetworkInterfacePermission</p></li> <li><p>ec2:DetachNetworkInterface</p></li> <li><p>ec2:DescribeInternetGateways</p></li> <li><p>ec2:DescribeNetworkInterfaces</p></li> <li><p>ec2:DescribeNetworkInterfacePermissions</p></li> <li><p>ec2:DescribeRouteTables</p></li> <li><p>ec2:DescribeSecurityGroups</p></li> <li><p>ec2:DescribeSubnets</p></li> <li><p>ec2:DescribeVpcs</p></li></ul> <p>For more information, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/amazon-mq-setting-up.html#create-iam-user">Create an IAM User and Get Your AWS Credentials</a> and <a href="https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/connecting-to-amazon-mq.html#never-modify-delete-elastic-network-interface">Never Modify or Delete the Amazon MQ Elastic Network Interface</a> in the <i>Amazon MQ Developer Guide</i>.</p>
   */
  public createBroker(
    args: CreateBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBrokerCommandOutput>;
  public createBroker(args: CreateBrokerCommandInput, cb: (err: any, data?: CreateBrokerCommandOutput) => void): void;
  public createBroker(
    args: CreateBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBrokerCommandOutput) => void
  ): void;
  public createBroker(
    args: CreateBrokerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBrokerCommandOutput) => void),
    cb?: (err: any, data?: CreateBrokerCommandOutput) => void
  ): Promise<CreateBrokerCommandOutput> | void {
    const command = new CreateBrokerCommand(args);
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
   * <p>Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).</p>
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
   * <p>Add a tag to a resource.</p>
   */
  public createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  public createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
  public createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateTagsCommandOutput) => void
  ): Promise<CreateTagsCommandOutput> | void {
    const command = new CreateTagsCommand(args);
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
   * <p>Creates an ActiveMQ user.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
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
   * <p>Deletes a broker. Note: This API is asynchronous.</p>
   */
  public deleteBroker(
    args: DeleteBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBrokerCommandOutput>;
  public deleteBroker(args: DeleteBrokerCommandInput, cb: (err: any, data?: DeleteBrokerCommandOutput) => void): void;
  public deleteBroker(
    args: DeleteBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrokerCommandOutput) => void
  ): void;
  public deleteBroker(
    args: DeleteBrokerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBrokerCommandOutput) => void),
    cb?: (err: any, data?: DeleteBrokerCommandOutput) => void
  ): Promise<DeleteBrokerCommandOutput> | void {
    const command = new DeleteBrokerCommand(args);
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
   * <p>Removes a tag from a resource.</p>
   */
  public deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  public deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
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
   * <p>Deletes an ActiveMQ user.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
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
   * <p>Returns information about the specified broker.</p>
   */
  public describeBroker(
    args: DescribeBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrokerCommandOutput>;
  public describeBroker(
    args: DescribeBrokerCommandInput,
    cb: (err: any, data?: DescribeBrokerCommandOutput) => void
  ): void;
  public describeBroker(
    args: DescribeBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrokerCommandOutput) => void
  ): void;
  public describeBroker(
    args: DescribeBrokerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBrokerCommandOutput) => void),
    cb?: (err: any, data?: DescribeBrokerCommandOutput) => void
  ): Promise<DescribeBrokerCommandOutput> | void {
    const command = new DescribeBrokerCommand(args);
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
   * <p>Describe available engine types and versions.</p>
   */
  public describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrokerEngineTypesCommandOutput>;
  public describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    cb: (err: any, data?: DescribeBrokerEngineTypesCommandOutput) => void
  ): void;
  public describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrokerEngineTypesCommandOutput) => void
  ): void;
  public describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBrokerEngineTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeBrokerEngineTypesCommandOutput) => void
  ): Promise<DescribeBrokerEngineTypesCommandOutput> | void {
    const command = new DescribeBrokerEngineTypesCommand(args);
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
   * <p>Describe available broker instance options.</p>
   */
  public describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrokerInstanceOptionsCommandOutput>;
  public describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    cb: (err: any, data?: DescribeBrokerInstanceOptionsCommandOutput) => void
  ): void;
  public describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrokerInstanceOptionsCommandOutput) => void
  ): void;
  public describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBrokerInstanceOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeBrokerInstanceOptionsCommandOutput) => void
  ): Promise<DescribeBrokerInstanceOptionsCommandOutput> | void {
    const command = new DescribeBrokerInstanceOptionsCommand(args);
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
   * <p>Returns information about the specified configuration.</p>
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
   * <p>Returns the specified configuration revision for the specified configuration.</p>
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
   * <p>Returns information about an ActiveMQ user.</p>
   */
  public describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  public describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
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
   * <p>Returns a list of all brokers.</p>
   */
  public listBrokers(args: ListBrokersCommandInput, options?: __HttpHandlerOptions): Promise<ListBrokersCommandOutput>;
  public listBrokers(args: ListBrokersCommandInput, cb: (err: any, data?: ListBrokersCommandOutput) => void): void;
  public listBrokers(
    args: ListBrokersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBrokersCommandOutput) => void
  ): void;
  public listBrokers(
    args: ListBrokersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBrokersCommandOutput) => void),
    cb?: (err: any, data?: ListBrokersCommandOutput) => void
  ): Promise<ListBrokersCommandOutput> | void {
    const command = new ListBrokersCommand(args);
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
   * <p>Returns a list of all revisions for the specified configuration.</p>
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
   * <p>Returns a list of all configurations.</p>
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
   * <p>Lists tags for a resource.</p>
   */
  public listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  public listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
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
   * <p>Returns a list of all ActiveMQ users.</p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
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
   * <p>Reboots a broker. Note: This API is asynchronous.</p>
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
   * <p>Adds a pending configuration change to a broker.</p>
   */
  public updateBroker(
    args: UpdateBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrokerCommandOutput>;
  public updateBroker(args: UpdateBrokerCommandInput, cb: (err: any, data?: UpdateBrokerCommandOutput) => void): void;
  public updateBroker(
    args: UpdateBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrokerCommandOutput) => void
  ): void;
  public updateBroker(
    args: UpdateBrokerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBrokerCommandOutput) => void),
    cb?: (err: any, data?: UpdateBrokerCommandOutput) => void
  ): Promise<UpdateBrokerCommandOutput> | void {
    const command = new UpdateBrokerCommand(args);
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
   * <p>Updates the specified configuration.</p>
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
   * <p>Updates the information for an ActiveMQ user.</p>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
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
