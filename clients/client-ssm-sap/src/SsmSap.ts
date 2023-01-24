// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DeleteResourcePermissionCommand,
  DeleteResourcePermissionCommandInput,
  DeleteResourcePermissionCommandOutput,
} from "./commands/DeleteResourcePermissionCommand";
import {
  DeregisterApplicationCommand,
  DeregisterApplicationCommandInput,
  DeregisterApplicationCommandOutput,
} from "./commands/DeregisterApplicationCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import { GetDatabaseCommand, GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import {
  GetOperationCommand,
  GetOperationCommandInput,
  GetOperationCommandOutput,
} from "./commands/GetOperationCommand";
import {
  GetResourcePermissionCommand,
  GetResourcePermissionCommandInput,
  GetResourcePermissionCommandOutput,
} from "./commands/GetResourcePermissionCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "./commands/ListDatabasesCommand";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "./commands/ListOperationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutResourcePermissionCommand,
  PutResourcePermissionCommandInput,
  PutResourcePermissionCommandOutput,
} from "./commands/PutResourcePermissionCommand";
import {
  RegisterApplicationCommand,
  RegisterApplicationCommandInput,
  RegisterApplicationCommandOutput,
} from "./commands/RegisterApplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationSettingsCommand,
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
} from "./commands/UpdateApplicationSettingsCommand";
import { SsmSapClient } from "./SsmSapClient";

/**
 * <p>This API reference provides descriptions, syntax, and other details about each of the
 *          actions and data types for AWS Systems Manager for SAP. The topic for each action shows
 *          the API request parameters and responses. </p>
 */
export class SsmSap extends SsmSapClient {
  /**
   * <p>Removes permissions associated with the target database.</p>
   */
  public deleteResourcePermission(
    args: DeleteResourcePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePermissionCommandOutput>;
  public deleteResourcePermission(
    args: DeleteResourcePermissionCommandInput,
    cb: (err: any, data?: DeleteResourcePermissionCommandOutput) => void
  ): void;
  public deleteResourcePermission(
    args: DeleteResourcePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePermissionCommandOutput) => void
  ): void;
  public deleteResourcePermission(
    args: DeleteResourcePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePermissionCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePermissionCommandOutput) => void
  ): Promise<DeleteResourcePermissionCommandOutput> | void {
    const command = new DeleteResourcePermissionCommand(args);
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
   * <p>Deregister an SAP application with AWS Systems Manager for SAP. This action does not
   *          aﬀect the existing setup of your SAP workloads on Amazon EC2.</p>
   */
  public deregisterApplication(
    args: DeregisterApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterApplicationCommandOutput>;
  public deregisterApplication(
    args: DeregisterApplicationCommandInput,
    cb: (err: any, data?: DeregisterApplicationCommandOutput) => void
  ): void;
  public deregisterApplication(
    args: DeregisterApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterApplicationCommandOutput) => void
  ): void;
  public deregisterApplication(
    args: DeregisterApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeregisterApplicationCommandOutput) => void
  ): Promise<DeregisterApplicationCommandOutput> | void {
    const command = new DeregisterApplicationCommand(args);
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
   * <p>Gets an application registered with AWS Systems Manager for SAP. It also returns the
   *          components of the application.</p>
   */
  public getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  public getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationCommandOutput) => void
  ): Promise<GetApplicationCommandOutput> | void {
    const command = new GetApplicationCommand(args);
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
   * <p>Gets the component of an application registered with AWS Systems Manager for
   *          SAP.</p>
   */
  public getComponent(
    args: GetComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentCommandOutput>;
  public getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  public getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;
  public getComponent(
    args: GetComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComponentCommandOutput) => void),
    cb?: (err: any, data?: GetComponentCommandOutput) => void
  ): Promise<GetComponentCommandOutput> | void {
    const command = new GetComponentCommand(args);
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
   * <p>Gets the SAP HANA database of an application registered with AWS Systems Manager for
   *          SAP.</p>
   */
  public getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
  public getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
  public getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;
  public getDatabase(
    args: GetDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatabaseCommandOutput) => void),
    cb?: (err: any, data?: GetDatabaseCommandOutput) => void
  ): Promise<GetDatabaseCommandOutput> | void {
    const command = new GetDatabaseCommand(args);
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
   * <p>Gets the details of an operation by specifying the operation ID.</p>
   */
  public getOperation(
    args: GetOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperationCommandOutput>;
  public getOperation(args: GetOperationCommandInput, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
  public getOperation(
    args: GetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationCommandOutput) => void
  ): void;
  public getOperation(
    args: GetOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOperationCommandOutput) => void),
    cb?: (err: any, data?: GetOperationCommandOutput) => void
  ): Promise<GetOperationCommandOutput> | void {
    const command = new GetOperationCommand(args);
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
   * <p>Gets permissions associated with the target database.</p>
   */
  public getResourcePermission(
    args: GetResourcePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePermissionCommandOutput>;
  public getResourcePermission(
    args: GetResourcePermissionCommandInput,
    cb: (err: any, data?: GetResourcePermissionCommandOutput) => void
  ): void;
  public getResourcePermission(
    args: GetResourcePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePermissionCommandOutput) => void
  ): void;
  public getResourcePermission(
    args: GetResourcePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePermissionCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePermissionCommandOutput) => void
  ): Promise<GetResourcePermissionCommandOutput> | void {
    const command = new GetResourcePermissionCommand(args);
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
   * <p>Lists all the applications registered with AWS Systems Manager for SAP.</p>
   */
  public listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  public listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationsCommandOutput) => void
  ): Promise<ListApplicationsCommandOutput> | void {
    const command = new ListApplicationsCommand(args);
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
   * <p>Lists all the components registered with AWS Systems Manager for SAP.</p>
   */
  public listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  public listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentsCommandOutput) => void
  ): Promise<ListComponentsCommandOutput> | void {
    const command = new ListComponentsCommand(args);
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
   * <p>Lists the SAP HANA databases of an application registered with AWS Systems Manager for
   *          SAP.</p>
   */
  public listDatabases(
    args: ListDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatabasesCommandOutput>;
  public listDatabases(
    args: ListDatabasesCommandInput,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  public listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  public listDatabases(
    args: ListDatabasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatabasesCommandOutput) => void),
    cb?: (err: any, data?: ListDatabasesCommandOutput) => void
  ): Promise<ListDatabasesCommandOutput> | void {
    const command = new ListDatabasesCommand(args);
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
   * <p>Lists the operations performed by AWS Systems Manager for SAP.</p>
   */
  public listOperations(
    args: ListOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOperationsCommandOutput>;
  public listOperations(
    args: ListOperationsCommandInput,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
  public listOperations(
    args: ListOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
  public listOperations(
    args: ListOperationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListOperationsCommandOutput) => void
  ): Promise<ListOperationsCommandOutput> | void {
    const command = new ListOperationsCommand(args);
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
   * <p>Lists all tags on an SAP HANA application and/or database registered with AWS Systems
   *          Manager for SAP.</p>
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
   * <p>Adds permissions to the target database.</p>
   */
  public putResourcePermission(
    args: PutResourcePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePermissionCommandOutput>;
  public putResourcePermission(
    args: PutResourcePermissionCommandInput,
    cb: (err: any, data?: PutResourcePermissionCommandOutput) => void
  ): void;
  public putResourcePermission(
    args: PutResourcePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePermissionCommandOutput) => void
  ): void;
  public putResourcePermission(
    args: PutResourcePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePermissionCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePermissionCommandOutput) => void
  ): Promise<PutResourcePermissionCommandOutput> | void {
    const command = new PutResourcePermissionCommand(args);
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
   * <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the
   *          following requirements before registering. </p>
   *          <p>The SAP application you want to register with AWS Systems Manager for SAP is running
   *          on Amazon EC2.</p>
   *          <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required
   *          IAM permissions.</p>
   *          <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to
   *          manage SAP applications and components.</p>
   */
  public registerApplication(
    args: RegisterApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterApplicationCommandOutput>;
  public registerApplication(
    args: RegisterApplicationCommandInput,
    cb: (err: any, data?: RegisterApplicationCommandOutput) => void
  ): void;
  public registerApplication(
    args: RegisterApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterApplicationCommandOutput) => void
  ): void;
  public registerApplication(
    args: RegisterApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterApplicationCommandOutput) => void),
    cb?: (err: any, data?: RegisterApplicationCommandOutput) => void
  ): Promise<RegisterApplicationCommandOutput> | void {
    const command = new RegisterApplicationCommand(args);
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
   * <p>Creates tag for a resource by specifying the ARN.</p>
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
   * <p>Delete the tags for a resource.</p>
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
   * <p>Updates the settings of an application registered with AWS Systems Manager for
   *          SAP.</p>
   */
  public updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationSettingsCommandOutput>;
  public updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    cb: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): void;
  public updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): void;
  public updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): Promise<UpdateApplicationSettingsCommandOutput> | void {
    const command = new UpdateApplicationSettingsCommand(args);
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
