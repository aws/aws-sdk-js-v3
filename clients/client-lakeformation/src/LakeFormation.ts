import { LakeFormationClient } from "./LakeFormationClient";
import {
  BatchGrantPermissionsCommand,
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
} from "./commands/BatchGrantPermissionsCommand";
import {
  BatchRevokePermissionsCommand,
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
} from "./commands/BatchRevokePermissionsCommand";
import {
  DeregisterResourceCommand,
  DeregisterResourceCommandInput,
  DeregisterResourceCommandOutput,
} from "./commands/DeregisterResourceCommand";
import {
  DescribeResourceCommand,
  DescribeResourceCommandInput,
  DescribeResourceCommandOutput,
} from "./commands/DescribeResourceCommand";
import {
  GetDataLakeSettingsCommand,
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "./commands/GetDataLakeSettingsCommand";
import {
  GetEffectivePermissionsForPathCommand,
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "./commands/GetEffectivePermissionsForPathCommand";
import {
  GrantPermissionsCommand,
  GrantPermissionsCommandInput,
  GrantPermissionsCommandOutput,
} from "./commands/GrantPermissionsCommand";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "./commands/ListPermissionsCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  PutDataLakeSettingsCommand,
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
} from "./commands/PutDataLakeSettingsCommand";
import {
  RegisterResourceCommand,
  RegisterResourceCommandInput,
  RegisterResourceCommandOutput,
} from "./commands/RegisterResourceCommand";
import {
  RevokePermissionsCommand,
  RevokePermissionsCommandInput,
  RevokePermissionsCommandOutput,
} from "./commands/RevokePermissionsCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Lake Formation</fullname>
 *          <p>Defines the public endpoint for the AWS Lake Formation service.</p>
 */
export class LakeFormation extends LakeFormationClient {
  /**
   * <p>Batch operation to grant permissions to the principal.</p>
   */
  public batchGrantPermissions(
    args: BatchGrantPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGrantPermissionsCommandOutput>;
  public batchGrantPermissions(
    args: BatchGrantPermissionsCommandInput,
    cb: (err: any, data?: BatchGrantPermissionsCommandOutput) => void
  ): void;
  public batchGrantPermissions(
    args: BatchGrantPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGrantPermissionsCommandOutput) => void
  ): void;
  public batchGrantPermissions(
    args: BatchGrantPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGrantPermissionsCommandOutput) => void),
    cb?: (err: any, data?: BatchGrantPermissionsCommandOutput) => void
  ): Promise<BatchGrantPermissionsCommandOutput> | void {
    const command = new BatchGrantPermissionsCommand(args);
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
   * <p>Batch operation to revoke permissions from the principal.</p>
   */
  public batchRevokePermissions(
    args: BatchRevokePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchRevokePermissionsCommandOutput>;
  public batchRevokePermissions(
    args: BatchRevokePermissionsCommandInput,
    cb: (err: any, data?: BatchRevokePermissionsCommandOutput) => void
  ): void;
  public batchRevokePermissions(
    args: BatchRevokePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchRevokePermissionsCommandOutput) => void
  ): void;
  public batchRevokePermissions(
    args: BatchRevokePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchRevokePermissionsCommandOutput) => void),
    cb?: (err: any, data?: BatchRevokePermissionsCommandOutput) => void
  ): Promise<BatchRevokePermissionsCommandOutput> | void {
    const command = new BatchRevokePermissionsCommand(args);
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
   * <p>Deregisters the resource as managed by the Data Catalog.</p>
   *
   *          <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
   */
  public deregisterResource(
    args: DeregisterResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterResourceCommandOutput>;
  public deregisterResource(
    args: DeregisterResourceCommandInput,
    cb: (err: any, data?: DeregisterResourceCommandOutput) => void
  ): void;
  public deregisterResource(
    args: DeregisterResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterResourceCommandOutput) => void
  ): void;
  public deregisterResource(
    args: DeregisterResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterResourceCommandOutput) => void),
    cb?: (err: any, data?: DeregisterResourceCommandOutput) => void
  ): Promise<DeregisterResourceCommandOutput> | void {
    const command = new DeregisterResourceCommand(args);
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
   * <p>Retrieves the current data access role for the given resource registered in AWS Lake Formation.</p>
   */
  public describeResource(
    args: DescribeResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceCommandOutput>;
  public describeResource(
    args: DescribeResourceCommandInput,
    cb: (err: any, data?: DescribeResourceCommandOutput) => void
  ): void;
  public describeResource(
    args: DescribeResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceCommandOutput) => void
  ): void;
  public describeResource(
    args: DescribeResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourceCommandOutput) => void
  ): Promise<DescribeResourceCommandOutput> | void {
    const command = new DescribeResourceCommand(args);
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
   * <p>Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. </p>
   */
  public getDataLakeSettings(
    args: GetDataLakeSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataLakeSettingsCommandOutput>;
  public getDataLakeSettings(
    args: GetDataLakeSettingsCommandInput,
    cb: (err: any, data?: GetDataLakeSettingsCommandOutput) => void
  ): void;
  public getDataLakeSettings(
    args: GetDataLakeSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataLakeSettingsCommandOutput) => void
  ): void;
  public getDataLakeSettings(
    args: GetDataLakeSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataLakeSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetDataLakeSettingsCommandOutput) => void
  ): Promise<GetDataLakeSettingsCommandOutput> | void {
    const command = new GetDataLakeSettingsCommand(args);
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
   * <p>Returns the Lake Formation permissions for a specified table or database resource located
   *       at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.</p>
   */
  public getEffectivePermissionsForPath(
    args: GetEffectivePermissionsForPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEffectivePermissionsForPathCommandOutput>;
  public getEffectivePermissionsForPath(
    args: GetEffectivePermissionsForPathCommandInput,
    cb: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void
  ): void;
  public getEffectivePermissionsForPath(
    args: GetEffectivePermissionsForPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void
  ): void;
  public getEffectivePermissionsForPath(
    args: GetEffectivePermissionsForPathCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void),
    cb?: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void
  ): Promise<GetEffectivePermissionsForPathCommandOutput> | void {
    const command = new GetEffectivePermissionsForPathCommand(args);
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
   * <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
   * 	        <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
   */
  public grantPermissions(
    args: GrantPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GrantPermissionsCommandOutput>;
  public grantPermissions(
    args: GrantPermissionsCommandInput,
    cb: (err: any, data?: GrantPermissionsCommandOutput) => void
  ): void;
  public grantPermissions(
    args: GrantPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GrantPermissionsCommandOutput) => void
  ): void;
  public grantPermissions(
    args: GrantPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GrantPermissionsCommandOutput) => void),
    cb?: (err: any, data?: GrantPermissionsCommandOutput) => void
  ): Promise<GrantPermissionsCommandOutput> | void {
    const command = new GrantPermissionsCommand(args);
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
   * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p>
   * 	        <p>This operation returns only those permissions that have been explicitly granted.</p>
   * 	        <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
   */
  public listPermissions(
    args: ListPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionsCommandOutput>;
  public listPermissions(
    args: ListPermissionsCommandInput,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPermissionsCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionsCommandOutput) => void
  ): Promise<ListPermissionsCommandOutput> | void {
    const command = new ListPermissionsCommand(args);
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
   * <p>Lists the resources registered to be managed by the Data Catalog.</p>
   */
  public listResources(
    args: ListResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesCommandOutput>;
  public listResources(
    args: ListResourcesCommandInput,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  public listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  public listResources(
    args: ListResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListResourcesCommandOutput) => void
  ): Promise<ListResourcesCommandOutput> | void {
    const command = new ListResourcesCommand(args);
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
   * <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p>
   *
   * 	        <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
   */
  public putDataLakeSettings(
    args: PutDataLakeSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataLakeSettingsCommandOutput>;
  public putDataLakeSettings(
    args: PutDataLakeSettingsCommandInput,
    cb: (err: any, data?: PutDataLakeSettingsCommandOutput) => void
  ): void;
  public putDataLakeSettings(
    args: PutDataLakeSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataLakeSettingsCommandOutput) => void
  ): void;
  public putDataLakeSettings(
    args: PutDataLakeSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDataLakeSettingsCommandOutput) => void),
    cb?: (err: any, data?: PutDataLakeSettingsCommandOutput) => void
  ): Promise<PutDataLakeSettingsCommandOutput> | void {
    const command = new PutDataLakeSettingsCommand(args);
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
   * <p>Registers the resource as managed by the Data Catalog.</p>
   *
   * 	        <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
   *
   *          <p>The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.</p>
   *
   *          <p>
   *             <code>ResourceArn = arn:aws:s3:::my-bucket
   * UseServiceLinkedRole = true</code>
   *          </p>
   *
   * 	        <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p>
   *
   *          <p>
   *             <code>arn:aws:iam::12345:role/my-data-access-role</code>
   *          </p>
   */
  public registerResource(
    args: RegisterResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterResourceCommandOutput>;
  public registerResource(
    args: RegisterResourceCommandInput,
    cb: (err: any, data?: RegisterResourceCommandOutput) => void
  ): void;
  public registerResource(
    args: RegisterResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterResourceCommandOutput) => void
  ): void;
  public registerResource(
    args: RegisterResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterResourceCommandOutput) => void),
    cb?: (err: any, data?: RegisterResourceCommandOutput) => void
  ): Promise<RegisterResourceCommandOutput> | void {
    const command = new RegisterResourceCommand(args);
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
   * <p>Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
   */
  public revokePermissions(
    args: RevokePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokePermissionsCommandOutput>;
  public revokePermissions(
    args: RevokePermissionsCommandInput,
    cb: (err: any, data?: RevokePermissionsCommandOutput) => void
  ): void;
  public revokePermissions(
    args: RevokePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokePermissionsCommandOutput) => void
  ): void;
  public revokePermissions(
    args: RevokePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokePermissionsCommandOutput) => void),
    cb?: (err: any, data?: RevokePermissionsCommandOutput) => void
  ): Promise<RevokePermissionsCommandOutput> | void {
    const command = new RevokePermissionsCommand(args);
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
   * <p>Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation. </p>
   */
  public updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  public updateResource(
    args: UpdateResourceCommandInput,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceCommandOutput) => void
  ): Promise<UpdateResourceCommandOutput> | void {
    const command = new UpdateResourceCommand(args);
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
