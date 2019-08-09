import { mqClient } from "./mqClient";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateBrokerInput } from "./types/CreateBrokerInput";
import { CreateBrokerOutput } from "./types/CreateBrokerOutput";
import { CreateConfigurationInput } from "./types/CreateConfigurationInput";
import { CreateConfigurationOutput } from "./types/CreateConfigurationOutput";
import { CreateTagsInput } from "./types/CreateTagsInput";
import { CreateTagsOutput } from "./types/CreateTagsOutput";
import { CreateUserInput } from "./types/CreateUserInput";
import { CreateUserOutput } from "./types/CreateUserOutput";
import { DeleteBrokerInput } from "./types/DeleteBrokerInput";
import { DeleteBrokerOutput } from "./types/DeleteBrokerOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DescribeBrokerEngineTypesInput } from "./types/DescribeBrokerEngineTypesInput";
import { DescribeBrokerEngineTypesOutput } from "./types/DescribeBrokerEngineTypesOutput";
import { DescribeBrokerInput } from "./types/DescribeBrokerInput";
import { DescribeBrokerInstanceOptionsInput } from "./types/DescribeBrokerInstanceOptionsInput";
import { DescribeBrokerInstanceOptionsOutput } from "./types/DescribeBrokerInstanceOptionsOutput";
import { DescribeBrokerOutput } from "./types/DescribeBrokerOutput";
import { DescribeConfigurationInput } from "./types/DescribeConfigurationInput";
import { DescribeConfigurationOutput } from "./types/DescribeConfigurationOutput";
import { DescribeConfigurationRevisionInput } from "./types/DescribeConfigurationRevisionInput";
import { DescribeConfigurationRevisionOutput } from "./types/DescribeConfigurationRevisionOutput";
import { DescribeUserInput } from "./types/DescribeUserInput";
import { DescribeUserOutput } from "./types/DescribeUserOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListBrokersInput } from "./types/ListBrokersInput";
import { ListBrokersOutput } from "./types/ListBrokersOutput";
import { ListConfigurationRevisionsInput } from "./types/ListConfigurationRevisionsInput";
import { ListConfigurationRevisionsOutput } from "./types/ListConfigurationRevisionsOutput";
import { ListConfigurationsInput } from "./types/ListConfigurationsInput";
import { ListConfigurationsOutput } from "./types/ListConfigurationsOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { ListUsersInput } from "./types/ListUsersInput";
import { ListUsersOutput } from "./types/ListUsersOutput";
import { NotFoundException } from "./types/NotFoundException";
import { RebootBrokerInput } from "./types/RebootBrokerInput";
import { RebootBrokerOutput } from "./types/RebootBrokerOutput";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UpdateBrokerInput } from "./types/UpdateBrokerInput";
import { UpdateBrokerOutput } from "./types/UpdateBrokerOutput";
import { UpdateConfigurationInput } from "./types/UpdateConfigurationInput";
import { UpdateConfigurationOutput } from "./types/UpdateConfigurationOutput";
import { UpdateUserInput } from "./types/UpdateUserInput";
import { UpdateUserOutput } from "./types/UpdateUserOutput";
import { CreateBrokerCommand } from "./commands/CreateBrokerCommand";
import { CreateConfigurationCommand } from "./commands/CreateConfigurationCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeleteBrokerCommand } from "./commands/DeleteBrokerCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeBrokerCommand } from "./commands/DescribeBrokerCommand";
import { DescribeBrokerEngineTypesCommand } from "./commands/DescribeBrokerEngineTypesCommand";
import { DescribeBrokerInstanceOptionsCommand } from "./commands/DescribeBrokerInstanceOptionsCommand";
import { DescribeConfigurationCommand } from "./commands/DescribeConfigurationCommand";
import { DescribeConfigurationRevisionCommand } from "./commands/DescribeConfigurationRevisionCommand";
import { DescribeUserCommand } from "./commands/DescribeUserCommand";
import { ListBrokersCommand } from "./commands/ListBrokersCommand";
import { ListConfigurationRevisionsCommand } from "./commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommand } from "./commands/ListConfigurationsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { RebootBrokerCommand } from "./commands/RebootBrokerCommand";
import { UpdateBrokerCommand } from "./commands/UpdateBrokerCommand";
import { UpdateConfigurationCommand } from "./commands/UpdateConfigurationCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";

export class mq extends mqClient {
  /**
   * Creates a broker. Note: This API is asynchronous.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Returns information about an error.
   *   - {UnauthorizedException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ConflictException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBroker(args: CreateBrokerInput): Promise<CreateBrokerOutput>;
  public createBroker(
    args: CreateBrokerInput,
    cb: (err: any, data?: CreateBrokerOutput) => void
  ): void;
  public createBroker(
    args: CreateBrokerInput,
    cb?: (err: any, data?: CreateBrokerOutput) => void
  ): Promise<CreateBrokerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBrokerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ConflictException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
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
   * Add a tag to a resource.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTags(args: CreateTagsInput): Promise<CreateTagsOutput>;
  public createTags(
    args: CreateTagsInput,
    cb: (err: any, data?: CreateTagsOutput) => void
  ): void;
  public createTags(
    args: CreateTagsInput,
    cb?: (err: any, data?: CreateTagsOutput) => void
  ): Promise<CreateTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Creates an ActiveMQ user.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ConflictException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUser(args: CreateUserInput): Promise<CreateUserOutput>;
  public createUser(
    args: CreateUserInput,
    cb: (err: any, data?: CreateUserOutput) => void
  ): void;
  public createUser(
    args: CreateUserInput,
    cb?: (err: any, data?: CreateUserOutput) => void
  ): Promise<CreateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes a broker. Note: This API is asynchronous.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBroker(args: DeleteBrokerInput): Promise<DeleteBrokerOutput>;
  public deleteBroker(
    args: DeleteBrokerInput,
    cb: (err: any, data?: DeleteBrokerOutput) => void
  ): void;
  public deleteBroker(
    args: DeleteBrokerInput,
    cb?: (err: any, data?: DeleteBrokerOutput) => void
  ): Promise<DeleteBrokerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBrokerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Removes a tag from a resource.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Deletes an ActiveMQ user.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUser(args: DeleteUserInput): Promise<DeleteUserOutput>;
  public deleteUser(
    args: DeleteUserInput,
    cb: (err: any, data?: DeleteUserOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserInput,
    cb?: (err: any, data?: DeleteUserOutput) => void
  ): Promise<DeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns information about the specified broker.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBroker(
    args: DescribeBrokerInput
  ): Promise<DescribeBrokerOutput>;
  public describeBroker(
    args: DescribeBrokerInput,
    cb: (err: any, data?: DescribeBrokerOutput) => void
  ): void;
  public describeBroker(
    args: DescribeBrokerInput,
    cb?: (err: any, data?: DescribeBrokerOutput) => void
  ): Promise<DescribeBrokerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBrokerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Describe available engine types and versions.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesInput
  ): Promise<DescribeBrokerEngineTypesOutput>;
  public describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesInput,
    cb: (err: any, data?: DescribeBrokerEngineTypesOutput) => void
  ): void;
  public describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesInput,
    cb?: (err: any, data?: DescribeBrokerEngineTypesOutput) => void
  ): Promise<DescribeBrokerEngineTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBrokerEngineTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Describe available broker instance options.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsInput
  ): Promise<DescribeBrokerInstanceOptionsOutput>;
  public describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsInput,
    cb: (err: any, data?: DescribeBrokerInstanceOptionsOutput) => void
  ): void;
  public describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsInput,
    cb?: (err: any, data?: DescribeBrokerInstanceOptionsOutput) => void
  ): Promise<DescribeBrokerInstanceOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBrokerInstanceOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns information about the specified configuration.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
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
   * Returns the specified configuration revision for the specified configuration.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
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
   * Returns information about an ActiveMQ user.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUser(args: DescribeUserInput): Promise<DescribeUserOutput>;
  public describeUser(
    args: DescribeUserInput,
    cb: (err: any, data?: DescribeUserOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserInput,
    cb?: (err: any, data?: DescribeUserOutput) => void
  ): Promise<DescribeUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a list of all brokers.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBrokers(args: ListBrokersInput): Promise<ListBrokersOutput>;
  public listBrokers(
    args: ListBrokersInput,
    cb: (err: any, data?: ListBrokersOutput) => void
  ): void;
  public listBrokers(
    args: ListBrokersInput,
    cb?: (err: any, data?: ListBrokersOutput) => void
  ): Promise<ListBrokersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBrokersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a list of all revisions for the specified configuration.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
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
   * Returns a list of all configurations.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
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
   * Lists tags for a resource.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Returns a list of all ActiveMQ users.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUsers(args: ListUsersInput): Promise<ListUsersOutput>;
  public listUsers(
    args: ListUsersInput,
    cb: (err: any, data?: ListUsersOutput) => void
  ): void;
  public listUsers(
    args: ListUsersInput,
    cb?: (err: any, data?: ListUsersOutput) => void
  ): Promise<ListUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Reboots a broker. Note: This API is asynchronous.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootBroker(args: RebootBrokerInput): Promise<RebootBrokerOutput>;
  public rebootBroker(
    args: RebootBrokerInput,
    cb: (err: any, data?: RebootBrokerOutput) => void
  ): void;
  public rebootBroker(
    args: RebootBrokerInput,
    cb?: (err: any, data?: RebootBrokerOutput) => void
  ): Promise<RebootBrokerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootBrokerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Adds a pending configuration change to a broker.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ConflictException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBroker(args: UpdateBrokerInput): Promise<UpdateBrokerOutput>;
  public updateBroker(
    args: UpdateBrokerInput,
    cb: (err: any, data?: UpdateBrokerOutput) => void
  ): void;
  public updateBroker(
    args: UpdateBrokerInput,
    cb?: (err: any, data?: UpdateBrokerOutput) => void
  ): Promise<UpdateBrokerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBrokerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates the specified configuration.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ConflictException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfiguration(
    args: UpdateConfigurationInput
  ): Promise<UpdateConfigurationOutput>;
  public updateConfiguration(
    args: UpdateConfigurationInput,
    cb: (err: any, data?: UpdateConfigurationOutput) => void
  ): void;
  public updateConfiguration(
    args: UpdateConfigurationInput,
    cb?: (err: any, data?: UpdateConfigurationOutput) => void
  ): Promise<UpdateConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Updates the information for an ActiveMQ user.
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} Returns information about an error.
   *   - {BadRequestException} Returns information about an error.
   *   - {InternalServerErrorException} Returns information about an error.
   *   - {ConflictException} Returns information about an error.
   *   - {ForbiddenException} Returns information about an error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUser(args: UpdateUserInput): Promise<UpdateUserOutput>;
  public updateUser(
    args: UpdateUserInput,
    cb: (err: any, data?: UpdateUserOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserInput,
    cb?: (err: any, data?: UpdateUserOutput) => void
  ): Promise<UpdateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
