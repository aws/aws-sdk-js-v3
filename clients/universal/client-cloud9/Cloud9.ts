import { Cloud9Client } from "./Cloud9Client";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateEnvironmentEC2Input } from "./types/CreateEnvironmentEC2Input";
import { CreateEnvironmentEC2Output } from "./types/CreateEnvironmentEC2Output";
import { CreateEnvironmentMembershipInput } from "./types/CreateEnvironmentMembershipInput";
import { CreateEnvironmentMembershipOutput } from "./types/CreateEnvironmentMembershipOutput";
import { DeleteEnvironmentInput } from "./types/DeleteEnvironmentInput";
import { DeleteEnvironmentMembershipInput } from "./types/DeleteEnvironmentMembershipInput";
import { DeleteEnvironmentMembershipOutput } from "./types/DeleteEnvironmentMembershipOutput";
import { DeleteEnvironmentOutput } from "./types/DeleteEnvironmentOutput";
import { DescribeEnvironmentMembershipsInput } from "./types/DescribeEnvironmentMembershipsInput";
import { DescribeEnvironmentMembershipsOutput } from "./types/DescribeEnvironmentMembershipsOutput";
import { DescribeEnvironmentStatusInput } from "./types/DescribeEnvironmentStatusInput";
import { DescribeEnvironmentStatusOutput } from "./types/DescribeEnvironmentStatusOutput";
import { DescribeEnvironmentsInput } from "./types/DescribeEnvironmentsInput";
import { DescribeEnvironmentsOutput } from "./types/DescribeEnvironmentsOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListEnvironmentsInput } from "./types/ListEnvironmentsInput";
import { ListEnvironmentsOutput } from "./types/ListEnvironmentsOutput";
import { NotFoundException } from "./types/NotFoundException";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UpdateEnvironmentInput } from "./types/UpdateEnvironmentInput";
import { UpdateEnvironmentMembershipInput } from "./types/UpdateEnvironmentMembershipInput";
import { UpdateEnvironmentMembershipOutput } from "./types/UpdateEnvironmentMembershipOutput";
import { UpdateEnvironmentOutput } from "./types/UpdateEnvironmentOutput";
import { CreateEnvironmentEC2Command } from "./commands/CreateEnvironmentEC2Command";
import { CreateEnvironmentMembershipCommand } from "./commands/CreateEnvironmentMembershipCommand";
import { DeleteEnvironmentCommand } from "./commands/DeleteEnvironmentCommand";
import { DeleteEnvironmentMembershipCommand } from "./commands/DeleteEnvironmentMembershipCommand";
import { DescribeEnvironmentMembershipsCommand } from "./commands/DescribeEnvironmentMembershipsCommand";
import { DescribeEnvironmentStatusCommand } from "./commands/DescribeEnvironmentStatusCommand";
import { DescribeEnvironmentsCommand } from "./commands/DescribeEnvironmentsCommand";
import { ListEnvironmentsCommand } from "./commands/ListEnvironmentsCommand";
import { UpdateEnvironmentCommand } from "./commands/UpdateEnvironmentCommand";
import { UpdateEnvironmentMembershipCommand } from "./commands/UpdateEnvironmentMembershipCommand";

export class Cloud9 extends Cloud9Client {
  /**
   * <p>Creates an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEnvironmentEC2(
    args: CreateEnvironmentEC2Input
  ): Promise<CreateEnvironmentEC2Output>;
  public createEnvironmentEC2(
    args: CreateEnvironmentEC2Input,
    cb: (err: any, data?: CreateEnvironmentEC2Output) => void
  ): void;
  public createEnvironmentEC2(
    args: CreateEnvironmentEC2Input,
    cb?: (err: any, data?: CreateEnvironmentEC2Output) => void
  ): Promise<CreateEnvironmentEC2Output> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEnvironmentEC2Command(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an environment member to an AWS Cloud9 development environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEnvironmentMembership(
    args: CreateEnvironmentMembershipInput
  ): Promise<CreateEnvironmentMembershipOutput>;
  public createEnvironmentMembership(
    args: CreateEnvironmentMembershipInput,
    cb: (err: any, data?: CreateEnvironmentMembershipOutput) => void
  ): void;
  public createEnvironmentMembership(
    args: CreateEnvironmentMembershipInput,
    cb?: (err: any, data?: CreateEnvironmentMembershipOutput) => void
  ): Promise<CreateEnvironmentMembershipOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEnvironmentMembershipCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an AWS Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEnvironment(
    args: DeleteEnvironmentInput
  ): Promise<DeleteEnvironmentOutput>;
  public deleteEnvironment(
    args: DeleteEnvironmentInput,
    cb: (err: any, data?: DeleteEnvironmentOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentInput,
    cb?: (err: any, data?: DeleteEnvironmentOutput) => void
  ): Promise<DeleteEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an environment member from an AWS Cloud9 development environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipInput
  ): Promise<DeleteEnvironmentMembershipOutput>;
  public deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipInput,
    cb: (err: any, data?: DeleteEnvironmentMembershipOutput) => void
  ): void;
  public deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipInput,
    cb?: (err: any, data?: DeleteEnvironmentMembershipOutput) => void
  ): Promise<DeleteEnvironmentMembershipOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEnvironmentMembershipCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about environment members for an AWS Cloud9 development environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsInput
  ): Promise<DescribeEnvironmentMembershipsOutput>;
  public describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsInput,
    cb: (err: any, data?: DescribeEnvironmentMembershipsOutput) => void
  ): void;
  public describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsInput,
    cb?: (err: any, data?: DescribeEnvironmentMembershipsOutput) => void
  ): Promise<DescribeEnvironmentMembershipsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEnvironmentMembershipsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets status information for an AWS Cloud9 development environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEnvironmentStatus(
    args: DescribeEnvironmentStatusInput
  ): Promise<DescribeEnvironmentStatusOutput>;
  public describeEnvironmentStatus(
    args: DescribeEnvironmentStatusInput,
    cb: (err: any, data?: DescribeEnvironmentStatusOutput) => void
  ): void;
  public describeEnvironmentStatus(
    args: DescribeEnvironmentStatusInput,
    cb?: (err: any, data?: DescribeEnvironmentStatusOutput) => void
  ): Promise<DescribeEnvironmentStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEnvironmentStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about AWS Cloud9 development environments.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEnvironments(
    args: DescribeEnvironmentsInput
  ): Promise<DescribeEnvironmentsOutput>;
  public describeEnvironments(
    args: DescribeEnvironmentsInput,
    cb: (err: any, data?: DescribeEnvironmentsOutput) => void
  ): void;
  public describeEnvironments(
    args: DescribeEnvironmentsInput,
    cb?: (err: any, data?: DescribeEnvironmentsOutput) => void
  ): Promise<DescribeEnvironmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEnvironmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of AWS Cloud9 development environment identifiers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEnvironments(
    args: ListEnvironmentsInput
  ): Promise<ListEnvironmentsOutput>;
  public listEnvironments(
    args: ListEnvironmentsInput,
    cb: (err: any, data?: ListEnvironmentsOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsInput,
    cb?: (err: any, data?: ListEnvironmentsOutput) => void
  ): Promise<ListEnvironmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEnvironmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the settings of an existing AWS Cloud9 development environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEnvironment(
    args: UpdateEnvironmentInput
  ): Promise<UpdateEnvironmentOutput>;
  public updateEnvironment(
    args: UpdateEnvironmentInput,
    cb: (err: any, data?: UpdateEnvironmentOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentInput,
    cb?: (err: any, data?: UpdateEnvironmentOutput) => void
  ): Promise<UpdateEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the settings of an existing environment member for an AWS Cloud9 development environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The target request is invalid.</p>
   *   - {ConflictException} <p>A conflict occurred.</p>
   *   - {NotFoundException} <p>The target resource cannot be found.</p>
   *   - {ForbiddenException} <p>An access permissions issue occurred.</p>
   *   - {TooManyRequestsException} <p>Too many service requests were made over the given time period.</p>
   *   - {LimitExceededException} <p>A service limit was exceeded.</p>
   *   - {InternalServerErrorException} <p>An internal server error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipInput
  ): Promise<UpdateEnvironmentMembershipOutput>;
  public updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipInput,
    cb: (err: any, data?: UpdateEnvironmentMembershipOutput) => void
  ): void;
  public updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipInput,
    cb?: (err: any, data?: UpdateEnvironmentMembershipOutput) => void
  ): Promise<UpdateEnvironmentMembershipOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEnvironmentMembershipCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
