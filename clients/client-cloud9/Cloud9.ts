import { Cloud9Client } from "./Cloud9Client";
import {
  CreateEnvironmentEC2Command,
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput
} from "./commands/CreateEnvironmentEC2Command";
import {
  CreateEnvironmentMembershipCommand,
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput
} from "./commands/CreateEnvironmentMembershipCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentMembershipCommand,
  DeleteEnvironmentMembershipCommandInput,
  DeleteEnvironmentMembershipCommandOutput
} from "./commands/DeleteEnvironmentMembershipCommand";
import {
  DescribeEnvironmentMembershipsCommand,
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput
} from "./commands/DescribeEnvironmentMembershipsCommand";
import {
  DescribeEnvironmentStatusCommand,
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput
} from "./commands/DescribeEnvironmentStatusCommand";
import {
  DescribeEnvironmentsCommand,
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput
} from "./commands/DescribeEnvironmentsCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
} from "./commands/ListEnvironmentsCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentMembershipCommand,
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput
} from "./commands/UpdateEnvironmentMembershipCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Cloud9</fullname>
 *          <p>AWS Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p>
 *          <p>For more information about AWS Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">AWS Cloud9 User Guide</a>.</p>
 *          <p>AWS Cloud9 supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentEC2</code>: Creates an AWS Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironments</code>: Gets information about environments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListEnvironments</code>: Gets a list of environment identifiers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p>
 *             </li>
 *          </ul>
 */
export class Cloud9 extends Cloud9Client {
  /**
   * <p>Creates an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.</p>
   */
  public createEnvironmentEC2(
    args: CreateEnvironmentEC2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentEC2CommandOutput>;
  public createEnvironmentEC2(
    args: CreateEnvironmentEC2CommandInput,
    cb: (err: any, data?: CreateEnvironmentEC2CommandOutput) => void
  ): void;
  public createEnvironmentEC2(
    args: CreateEnvironmentEC2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentEC2CommandOutput) => void
  ): void;
  public createEnvironmentEC2(
    args: CreateEnvironmentEC2CommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEnvironmentEC2CommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentEC2CommandOutput) => void
  ): Promise<CreateEnvironmentEC2CommandOutput> | void {
    const command = new CreateEnvironmentEC2Command(args);
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
   * <p>Adds an environment member to an AWS Cloud9 development environment.</p>
   */
  public createEnvironmentMembership(
    args: CreateEnvironmentMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentMembershipCommandOutput>;
  public createEnvironmentMembership(
    args: CreateEnvironmentMembershipCommandInput,
    cb: (err: any, data?: CreateEnvironmentMembershipCommandOutput) => void
  ): void;
  public createEnvironmentMembership(
    args: CreateEnvironmentMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentMembershipCommandOutput) => void
  ): void;
  public createEnvironmentMembership(
    args: CreateEnvironmentMembershipCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEnvironmentMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentMembershipCommandOutput) => void
  ): Promise<CreateEnvironmentMembershipCommandOutput> | void {
    const command = new CreateEnvironmentMembershipCommand(args);
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
   * <p>Deletes an AWS Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p>
   */
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): Promise<DeleteEnvironmentCommandOutput> | void {
    const command = new DeleteEnvironmentCommand(args);
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
   * <p>Deletes an environment member from an AWS Cloud9 development environment.</p>
   */
  public deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentMembershipCommandOutput>;
  public deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipCommandInput,
    cb: (err: any, data?: DeleteEnvironmentMembershipCommandOutput) => void
  ): void;
  public deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentMembershipCommandOutput) => void
  ): void;
  public deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEnvironmentMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentMembershipCommandOutput) => void
  ): Promise<DeleteEnvironmentMembershipCommandOutput> | void {
    const command = new DeleteEnvironmentMembershipCommand(args);
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
   * <p>Gets information about environment members for an AWS Cloud9 development environment.</p>
   */
  public describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentMembershipsCommandOutput>;
  public describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentMembershipsCommandOutput) => void
  ): void;
  public describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentMembershipsCommandOutput) => void
  ): void;
  public describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeEnvironmentMembershipsCommandOutput
        ) => void),
    cb?: (err: any, data?: DescribeEnvironmentMembershipsCommandOutput) => void
  ): Promise<DescribeEnvironmentMembershipsCommandOutput> | void {
    const command = new DescribeEnvironmentMembershipsCommand(args);
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
   * <p>Gets information about AWS Cloud9 development environments.</p>
   */
  public describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentsCommandOutput>;
  public describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;
  public describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;
  public describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): Promise<DescribeEnvironmentsCommandOutput> | void {
    const command = new DescribeEnvironmentsCommand(args);
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
   * <p>Gets status information for an AWS Cloud9 development environment.</p>
   */
  public describeEnvironmentStatus(
    args: DescribeEnvironmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentStatusCommandOutput>;
  public describeEnvironmentStatus(
    args: DescribeEnvironmentStatusCommandInput,
    cb: (err: any, data?: DescribeEnvironmentStatusCommandOutput) => void
  ): void;
  public describeEnvironmentStatus(
    args: DescribeEnvironmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentStatusCommandOutput) => void
  ): void;
  public describeEnvironmentStatus(
    args: DescribeEnvironmentStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEnvironmentStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeEnvironmentStatusCommandOutput) => void
  ): Promise<DescribeEnvironmentStatusCommandOutput> | void {
    const command = new DescribeEnvironmentStatusCommand(args);
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
   * <p>Gets a list of AWS Cloud9 development environment identifiers.</p>
   */
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): Promise<ListEnvironmentsCommandOutput> | void {
    const command = new ListEnvironmentsCommand(args);
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
   * <p>Changes the settings of an existing AWS Cloud9 development environment.</p>
   */
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): Promise<UpdateEnvironmentCommandOutput> | void {
    const command = new UpdateEnvironmentCommand(args);
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
   * <p>Changes the settings of an existing environment member for an AWS Cloud9 development environment.</p>
   */
  public updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentMembershipCommandOutput>;
  public updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipCommandInput,
    cb: (err: any, data?: UpdateEnvironmentMembershipCommandOutput) => void
  ): void;
  public updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentMembershipCommandOutput) => void
  ): void;
  public updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateEnvironmentMembershipCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentMembershipCommandOutput) => void
  ): Promise<UpdateEnvironmentMembershipCommandOutput> | void {
    const command = new UpdateEnvironmentMembershipCommand(args);
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
