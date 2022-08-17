// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddLFTagsToResourceCommand,
  AddLFTagsToResourceCommandInput,
  AddLFTagsToResourceCommandOutput,
} from "./commands/AddLFTagsToResourceCommand";
import {
  AssumeDecoratedRoleWithSAMLCommand,
  AssumeDecoratedRoleWithSAMLCommandInput,
  AssumeDecoratedRoleWithSAMLCommandOutput,
} from "./commands/AssumeDecoratedRoleWithSAMLCommand";
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
  CancelTransactionCommand,
  CancelTransactionCommandInput,
  CancelTransactionCommandOutput,
} from "./commands/CancelTransactionCommand";
import {
  CommitTransactionCommand,
  CommitTransactionCommandInput,
  CommitTransactionCommandOutput,
} from "./commands/CommitTransactionCommand";
import {
  CreateDataCellsFilterCommand,
  CreateDataCellsFilterCommandInput,
  CreateDataCellsFilterCommandOutput,
} from "./commands/CreateDataCellsFilterCommand";
import { CreateLFTagCommand, CreateLFTagCommandInput, CreateLFTagCommandOutput } from "./commands/CreateLFTagCommand";
import {
  DeleteDataCellsFilterCommand,
  DeleteDataCellsFilterCommandInput,
  DeleteDataCellsFilterCommandOutput,
} from "./commands/DeleteDataCellsFilterCommand";
import { DeleteLFTagCommand, DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "./commands/DeleteLFTagCommand";
import {
  DeleteObjectsOnCancelCommand,
  DeleteObjectsOnCancelCommandInput,
  DeleteObjectsOnCancelCommandOutput,
} from "./commands/DeleteObjectsOnCancelCommand";
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
  DescribeTransactionCommand,
  DescribeTransactionCommandInput,
  DescribeTransactionCommandOutput,
} from "./commands/DescribeTransactionCommand";
import {
  ExtendTransactionCommand,
  ExtendTransactionCommandInput,
  ExtendTransactionCommandOutput,
} from "./commands/ExtendTransactionCommand";
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
import { GetLFTagCommand, GetLFTagCommandInput, GetLFTagCommandOutput } from "./commands/GetLFTagCommand";
import {
  GetQueryStateCommand,
  GetQueryStateCommandInput,
  GetQueryStateCommandOutput,
} from "./commands/GetQueryStateCommand";
import {
  GetQueryStatisticsCommand,
  GetQueryStatisticsCommandInput,
  GetQueryStatisticsCommandOutput,
} from "./commands/GetQueryStatisticsCommand";
import {
  GetResourceLFTagsCommand,
  GetResourceLFTagsCommandInput,
  GetResourceLFTagsCommandOutput,
} from "./commands/GetResourceLFTagsCommand";
import {
  GetTableObjectsCommand,
  GetTableObjectsCommandInput,
  GetTableObjectsCommandOutput,
} from "./commands/GetTableObjectsCommand";
import {
  GetTemporaryGluePartitionCredentialsCommand,
  GetTemporaryGluePartitionCredentialsCommandInput,
  GetTemporaryGluePartitionCredentialsCommandOutput,
} from "./commands/GetTemporaryGluePartitionCredentialsCommand";
import {
  GetTemporaryGlueTableCredentialsCommand,
  GetTemporaryGlueTableCredentialsCommandInput,
  GetTemporaryGlueTableCredentialsCommandOutput,
} from "./commands/GetTemporaryGlueTableCredentialsCommand";
import {
  GetWorkUnitResultsCommand,
  GetWorkUnitResultsCommandInput,
  GetWorkUnitResultsCommandOutput,
} from "./commands/GetWorkUnitResultsCommand";
import {
  GetWorkUnitsCommand,
  GetWorkUnitsCommandInput,
  GetWorkUnitsCommandOutput,
} from "./commands/GetWorkUnitsCommand";
import {
  GrantPermissionsCommand,
  GrantPermissionsCommandInput,
  GrantPermissionsCommandOutput,
} from "./commands/GrantPermissionsCommand";
import {
  ListDataCellsFilterCommand,
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
} from "./commands/ListDataCellsFilterCommand";
import { ListLFTagsCommand, ListLFTagsCommandInput, ListLFTagsCommandOutput } from "./commands/ListLFTagsCommand";
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
  ListTableStorageOptimizersCommand,
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
} from "./commands/ListTableStorageOptimizersCommand";
import {
  ListTransactionsCommand,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput,
} from "./commands/ListTransactionsCommand";
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
  RemoveLFTagsFromResourceCommand,
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
} from "./commands/RemoveLFTagsFromResourceCommand";
import {
  RevokePermissionsCommand,
  RevokePermissionsCommandInput,
  RevokePermissionsCommandOutput,
} from "./commands/RevokePermissionsCommand";
import {
  SearchDatabasesByLFTagsCommand,
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
} from "./commands/SearchDatabasesByLFTagsCommand";
import {
  SearchTablesByLFTagsCommand,
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "./commands/SearchTablesByLFTagsCommand";
import {
  StartQueryPlanningCommand,
  StartQueryPlanningCommandInput,
  StartQueryPlanningCommandOutput,
} from "./commands/StartQueryPlanningCommand";
import {
  StartTransactionCommand,
  StartTransactionCommandInput,
  StartTransactionCommandOutput,
} from "./commands/StartTransactionCommand";
import { UpdateLFTagCommand, UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "./commands/UpdateLFTagCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";
import {
  UpdateTableObjectsCommand,
  UpdateTableObjectsCommandInput,
  UpdateTableObjectsCommandOutput,
} from "./commands/UpdateTableObjectsCommand";
import {
  UpdateTableStorageOptimizerCommand,
  UpdateTableStorageOptimizerCommandInput,
  UpdateTableStorageOptimizerCommandOutput,
} from "./commands/UpdateTableStorageOptimizerCommand";
import { LakeFormationClient } from "./LakeFormationClient";

/**
 * <fullname>Lake Formation</fullname>
 *          <p>Defines the public endpoint for the Lake Formation service.</p>
 */
export class LakeFormation extends LakeFormationClient {
  /**
   * <p>Attaches one or more LF-tags to an existing resource.</p>
   */
  public addLFTagsToResource(
    args: AddLFTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddLFTagsToResourceCommandOutput>;
  public addLFTagsToResource(
    args: AddLFTagsToResourceCommandInput,
    cb: (err: any, data?: AddLFTagsToResourceCommandOutput) => void
  ): void;
  public addLFTagsToResource(
    args: AddLFTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddLFTagsToResourceCommandOutput) => void
  ): void;
  public addLFTagsToResource(
    args: AddLFTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddLFTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddLFTagsToResourceCommandOutput) => void
  ): Promise<AddLFTagsToResourceCommandOutput> | void {
    const command = new AddLFTagsToResourceCommand(args);
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
   * <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups.  This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions.
   *       Lake Formation does not scope down the permission of the assumed role.  All permissions attached to the role via the SAML federation setup will be included in the role session.
   *     </p>
   *          <p>
   *       This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>.  Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies.  A typical IAM policy attached to such a role would look as follows:
   *     </p>
   */
  public assumeDecoratedRoleWithSAML(
    args: AssumeDecoratedRoleWithSAMLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeDecoratedRoleWithSAMLCommandOutput>;
  public assumeDecoratedRoleWithSAML(
    args: AssumeDecoratedRoleWithSAMLCommandInput,
    cb: (err: any, data?: AssumeDecoratedRoleWithSAMLCommandOutput) => void
  ): void;
  public assumeDecoratedRoleWithSAML(
    args: AssumeDecoratedRoleWithSAMLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeDecoratedRoleWithSAMLCommandOutput) => void
  ): void;
  public assumeDecoratedRoleWithSAML(
    args: AssumeDecoratedRoleWithSAMLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssumeDecoratedRoleWithSAMLCommandOutput) => void),
    cb?: (err: any, data?: AssumeDecoratedRoleWithSAMLCommandOutput) => void
  ): Promise<AssumeDecoratedRoleWithSAMLCommandOutput> | void {
    const command = new AssumeDecoratedRoleWithSAMLCommand(args);
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
   * <p>Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.</p>
   */
  public cancelTransaction(
    args: CancelTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelTransactionCommandOutput>;
  public cancelTransaction(
    args: CancelTransactionCommandInput,
    cb: (err: any, data?: CancelTransactionCommandOutput) => void
  ): void;
  public cancelTransaction(
    args: CancelTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTransactionCommandOutput) => void
  ): void;
  public cancelTransaction(
    args: CancelTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelTransactionCommandOutput) => void),
    cb?: (err: any, data?: CancelTransactionCommandOutput) => void
  ): Promise<CancelTransactionCommandOutput> | void {
    const command = new CancelTransactionCommand(args);
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
   * <p>Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.</p>
   */
  public commitTransaction(
    args: CommitTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CommitTransactionCommandOutput>;
  public commitTransaction(
    args: CommitTransactionCommandInput,
    cb: (err: any, data?: CommitTransactionCommandOutput) => void
  ): void;
  public commitTransaction(
    args: CommitTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CommitTransactionCommandOutput) => void
  ): void;
  public commitTransaction(
    args: CommitTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CommitTransactionCommandOutput) => void),
    cb?: (err: any, data?: CommitTransactionCommandOutput) => void
  ): Promise<CommitTransactionCommandOutput> | void {
    const command = new CommitTransactionCommand(args);
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
   * <p>Creates a data cell filter to allow one to grant access to certain columns on certain rows.</p>
   */
  public createDataCellsFilter(
    args: CreateDataCellsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataCellsFilterCommandOutput>;
  public createDataCellsFilter(
    args: CreateDataCellsFilterCommandInput,
    cb: (err: any, data?: CreateDataCellsFilterCommandOutput) => void
  ): void;
  public createDataCellsFilter(
    args: CreateDataCellsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataCellsFilterCommandOutput) => void
  ): void;
  public createDataCellsFilter(
    args: CreateDataCellsFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataCellsFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateDataCellsFilterCommandOutput) => void
  ): Promise<CreateDataCellsFilterCommandOutput> | void {
    const command = new CreateDataCellsFilterCommand(args);
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
   * <p>Creates an LF-tag with the specified name and values.</p>
   */
  public createLFTag(args: CreateLFTagCommandInput, options?: __HttpHandlerOptions): Promise<CreateLFTagCommandOutput>;
  public createLFTag(args: CreateLFTagCommandInput, cb: (err: any, data?: CreateLFTagCommandOutput) => void): void;
  public createLFTag(
    args: CreateLFTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLFTagCommandOutput) => void
  ): void;
  public createLFTag(
    args: CreateLFTagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLFTagCommandOutput) => void),
    cb?: (err: any, data?: CreateLFTagCommandOutput) => void
  ): Promise<CreateLFTagCommandOutput> | void {
    const command = new CreateLFTagCommand(args);
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
   * <p>Deletes a data cell filter.</p>
   */
  public deleteDataCellsFilter(
    args: DeleteDataCellsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataCellsFilterCommandOutput>;
  public deleteDataCellsFilter(
    args: DeleteDataCellsFilterCommandInput,
    cb: (err: any, data?: DeleteDataCellsFilterCommandOutput) => void
  ): void;
  public deleteDataCellsFilter(
    args: DeleteDataCellsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataCellsFilterCommandOutput) => void
  ): void;
  public deleteDataCellsFilter(
    args: DeleteDataCellsFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataCellsFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataCellsFilterCommandOutput) => void
  ): Promise<DeleteDataCellsFilterCommandOutput> | void {
    const command = new DeleteDataCellsFilterCommand(args);
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
   * <p>Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.</p>
   */
  public deleteLFTag(args: DeleteLFTagCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLFTagCommandOutput>;
  public deleteLFTag(args: DeleteLFTagCommandInput, cb: (err: any, data?: DeleteLFTagCommandOutput) => void): void;
  public deleteLFTag(
    args: DeleteLFTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLFTagCommandOutput) => void
  ): void;
  public deleteLFTag(
    args: DeleteLFTagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLFTagCommandOutput) => void),
    cb?: (err: any, data?: DeleteLFTagCommandOutput) => void
  ): Promise<DeleteLFTagCommandOutput> | void {
    const command = new DeleteLFTagCommand(args);
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
   * <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted
   *       if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels.
   *     </p>
   *          <p>
   *       The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically
   *       call <code>DeleteObjectsOnCancel</code> before writes. For more information, see
   *       <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>.
   *     </p>
   */
  public deleteObjectsOnCancel(
    args: DeleteObjectsOnCancelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObjectsOnCancelCommandOutput>;
  public deleteObjectsOnCancel(
    args: DeleteObjectsOnCancelCommandInput,
    cb: (err: any, data?: DeleteObjectsOnCancelCommandOutput) => void
  ): void;
  public deleteObjectsOnCancel(
    args: DeleteObjectsOnCancelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectsOnCancelCommandOutput) => void
  ): void;
  public deleteObjectsOnCancel(
    args: DeleteObjectsOnCancelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteObjectsOnCancelCommandOutput) => void),
    cb?: (err: any, data?: DeleteObjectsOnCancelCommandOutput) => void
  ): Promise<DeleteObjectsOnCancelCommandOutput> | void {
    const command = new DeleteObjectsOnCancelCommand(args);
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
   * <p>Retrieves the current data access role for the given resource registered in Lake Formation.</p>
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
   * <p>Returns the details of a single transaction.</p>
   */
  public describeTransaction(
    args: DescribeTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransactionCommandOutput>;
  public describeTransaction(
    args: DescribeTransactionCommandInput,
    cb: (err: any, data?: DescribeTransactionCommandOutput) => void
  ): void;
  public describeTransaction(
    args: DescribeTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransactionCommandOutput) => void
  ): void;
  public describeTransaction(
    args: DescribeTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTransactionCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransactionCommandOutput) => void
  ): Promise<DescribeTransactionCommandOutput> | void {
    const command = new DescribeTransactionCommand(args);
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
   * <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p>
   *
   * 	        <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
   */
  public extendTransaction(
    args: ExtendTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExtendTransactionCommandOutput>;
  public extendTransaction(
    args: ExtendTransactionCommandInput,
    cb: (err: any, data?: ExtendTransactionCommandOutput) => void
  ): void;
  public extendTransaction(
    args: ExtendTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExtendTransactionCommandOutput) => void
  ): void;
  public extendTransaction(
    args: ExtendTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExtendTransactionCommandOutput) => void),
    cb?: (err: any, data?: ExtendTransactionCommandOutput) => void
  ): Promise<ExtendTransactionCommandOutput> | void {
    const command = new ExtendTransactionCommand(args);
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
   * <p>Returns an LF-tag definition.</p>
   */
  public getLFTag(args: GetLFTagCommandInput, options?: __HttpHandlerOptions): Promise<GetLFTagCommandOutput>;
  public getLFTag(args: GetLFTagCommandInput, cb: (err: any, data?: GetLFTagCommandOutput) => void): void;
  public getLFTag(
    args: GetLFTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLFTagCommandOutput) => void
  ): void;
  public getLFTag(
    args: GetLFTagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLFTagCommandOutput) => void),
    cb?: (err: any, data?: GetLFTagCommandOutput) => void
  ): Promise<GetLFTagCommandOutput> | void {
    const command = new GetLFTagCommand(args);
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
   * <p>Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.</p>
   */
  public getQueryState(
    args: GetQueryStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryStateCommandOutput>;
  public getQueryState(
    args: GetQueryStateCommandInput,
    cb: (err: any, data?: GetQueryStateCommandOutput) => void
  ): void;
  public getQueryState(
    args: GetQueryStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryStateCommandOutput) => void
  ): void;
  public getQueryState(
    args: GetQueryStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQueryStateCommandOutput) => void),
    cb?: (err: any, data?: GetQueryStateCommandOutput) => void
  ): Promise<GetQueryStateCommandOutput> | void {
    const command = new GetQueryStateCommand(args);
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
   * <p>Retrieves statistics on the planning and execution of a query.</p>
   */
  public getQueryStatistics(
    args: GetQueryStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryStatisticsCommandOutput>;
  public getQueryStatistics(
    args: GetQueryStatisticsCommandInput,
    cb: (err: any, data?: GetQueryStatisticsCommandOutput) => void
  ): void;
  public getQueryStatistics(
    args: GetQueryStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryStatisticsCommandOutput) => void
  ): void;
  public getQueryStatistics(
    args: GetQueryStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQueryStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetQueryStatisticsCommandOutput) => void
  ): Promise<GetQueryStatisticsCommandOutput> | void {
    const command = new GetQueryStatisticsCommand(args);
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
   * <p>Returns the LF-tags applied to a resource.</p>
   */
  public getResourceLFTags(
    args: GetResourceLFTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceLFTagsCommandOutput>;
  public getResourceLFTags(
    args: GetResourceLFTagsCommandInput,
    cb: (err: any, data?: GetResourceLFTagsCommandOutput) => void
  ): void;
  public getResourceLFTags(
    args: GetResourceLFTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceLFTagsCommandOutput) => void
  ): void;
  public getResourceLFTags(
    args: GetResourceLFTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceLFTagsCommandOutput) => void),
    cb?: (err: any, data?: GetResourceLFTagsCommandOutput) => void
  ): Promise<GetResourceLFTagsCommandOutput> | void {
    const command = new GetResourceLFTagsCommand(args);
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
   * <p>Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.</p>
   */
  public getTableObjects(
    args: GetTableObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableObjectsCommandOutput>;
  public getTableObjects(
    args: GetTableObjectsCommandInput,
    cb: (err: any, data?: GetTableObjectsCommandOutput) => void
  ): void;
  public getTableObjects(
    args: GetTableObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableObjectsCommandOutput) => void
  ): void;
  public getTableObjects(
    args: GetTableObjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableObjectsCommandOutput) => void),
    cb?: (err: any, data?: GetTableObjectsCommandOutput) => void
  ): Promise<GetTableObjectsCommandOutput> | void {
    const command = new GetTableObjectsCommand(args);
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
   * <p>This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition.  Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.</p>
   */
  public getTemporaryGluePartitionCredentials(
    args: GetTemporaryGluePartitionCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemporaryGluePartitionCredentialsCommandOutput>;
  public getTemporaryGluePartitionCredentials(
    args: GetTemporaryGluePartitionCredentialsCommandInput,
    cb: (err: any, data?: GetTemporaryGluePartitionCredentialsCommandOutput) => void
  ): void;
  public getTemporaryGluePartitionCredentials(
    args: GetTemporaryGluePartitionCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemporaryGluePartitionCredentialsCommandOutput) => void
  ): void;
  public getTemporaryGluePartitionCredentials(
    args: GetTemporaryGluePartitionCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemporaryGluePartitionCredentialsCommandOutput) => void),
    cb?: (err: any, data?: GetTemporaryGluePartitionCredentialsCommandOutput) => void
  ): Promise<GetTemporaryGluePartitionCredentialsCommandOutput> | void {
    const command = new GetTemporaryGluePartitionCredentialsCommand(args);
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
   * <p>Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.</p>
   */
  public getTemporaryGlueTableCredentials(
    args: GetTemporaryGlueTableCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemporaryGlueTableCredentialsCommandOutput>;
  public getTemporaryGlueTableCredentials(
    args: GetTemporaryGlueTableCredentialsCommandInput,
    cb: (err: any, data?: GetTemporaryGlueTableCredentialsCommandOutput) => void
  ): void;
  public getTemporaryGlueTableCredentials(
    args: GetTemporaryGlueTableCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemporaryGlueTableCredentialsCommandOutput) => void
  ): void;
  public getTemporaryGlueTableCredentials(
    args: GetTemporaryGlueTableCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemporaryGlueTableCredentialsCommandOutput) => void),
    cb?: (err: any, data?: GetTemporaryGlueTableCredentialsCommandOutput) => void
  ): Promise<GetTemporaryGlueTableCredentialsCommandOutput> | void {
    const command = new GetTemporaryGlueTableCredentialsCommand(args);
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
   * <p>Returns the work units resulting from the query. Work units can be executed in any order and in parallel. </p>
   */
  public getWorkUnitResults(
    args: GetWorkUnitResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkUnitResultsCommandOutput>;
  public getWorkUnitResults(
    args: GetWorkUnitResultsCommandInput,
    cb: (err: any, data?: GetWorkUnitResultsCommandOutput) => void
  ): void;
  public getWorkUnitResults(
    args: GetWorkUnitResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkUnitResultsCommandOutput) => void
  ): void;
  public getWorkUnitResults(
    args: GetWorkUnitResultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkUnitResultsCommandOutput) => void),
    cb?: (err: any, data?: GetWorkUnitResultsCommandOutput) => void
  ): Promise<GetWorkUnitResultsCommandOutput> | void {
    const command = new GetWorkUnitResultsCommand(args);
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
   * <p>Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.</p>
   */
  public getWorkUnits(
    args: GetWorkUnitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkUnitsCommandOutput>;
  public getWorkUnits(args: GetWorkUnitsCommandInput, cb: (err: any, data?: GetWorkUnitsCommandOutput) => void): void;
  public getWorkUnits(
    args: GetWorkUnitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkUnitsCommandOutput) => void
  ): void;
  public getWorkUnits(
    args: GetWorkUnitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkUnitsCommandOutput) => void),
    cb?: (err: any, data?: GetWorkUnitsCommandOutput) => void
  ): Promise<GetWorkUnitsCommandOutput> | void {
    const command = new GetWorkUnitsCommand(args);
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
   * <p>Lists all the data cell filters on a table.</p>
   */
  public listDataCellsFilter(
    args: ListDataCellsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataCellsFilterCommandOutput>;
  public listDataCellsFilter(
    args: ListDataCellsFilterCommandInput,
    cb: (err: any, data?: ListDataCellsFilterCommandOutput) => void
  ): void;
  public listDataCellsFilter(
    args: ListDataCellsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataCellsFilterCommandOutput) => void
  ): void;
  public listDataCellsFilter(
    args: ListDataCellsFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataCellsFilterCommandOutput) => void),
    cb?: (err: any, data?: ListDataCellsFilterCommandOutput) => void
  ): Promise<ListDataCellsFilterCommandOutput> | void {
    const command = new ListDataCellsFilterCommand(args);
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
   * <p>Lists LF-tags that the requester has permission to view. </p>
   */
  public listLFTags(args: ListLFTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListLFTagsCommandOutput>;
  public listLFTags(args: ListLFTagsCommandInput, cb: (err: any, data?: ListLFTagsCommandOutput) => void): void;
  public listLFTags(
    args: ListLFTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLFTagsCommandOutput) => void
  ): void;
  public listLFTags(
    args: ListLFTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLFTagsCommandOutput) => void),
    cb?: (err: any, data?: ListLFTagsCommandOutput) => void
  ): Promise<ListLFTagsCommandOutput> | void {
    const command = new ListLFTagsCommand(args);
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
   * <p>Returns the configuration of all storage optimizers associated with a specified table.</p>
   */
  public listTableStorageOptimizers(
    args: ListTableStorageOptimizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableStorageOptimizersCommandOutput>;
  public listTableStorageOptimizers(
    args: ListTableStorageOptimizersCommandInput,
    cb: (err: any, data?: ListTableStorageOptimizersCommandOutput) => void
  ): void;
  public listTableStorageOptimizers(
    args: ListTableStorageOptimizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableStorageOptimizersCommandOutput) => void
  ): void;
  public listTableStorageOptimizers(
    args: ListTableStorageOptimizersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTableStorageOptimizersCommandOutput) => void),
    cb?: (err: any, data?: ListTableStorageOptimizersCommandOutput) => void
  ): Promise<ListTableStorageOptimizersCommandOutput> | void {
    const command = new ListTableStorageOptimizersCommand(args);
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
   * <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p>
   * 	        <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
   */
  public listTransactions(
    args: ListTransactionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTransactionsCommandOutput>;
  public listTransactions(
    args: ListTransactionsCommandInput,
    cb: (err: any, data?: ListTransactionsCommandOutput) => void
  ): void;
  public listTransactions(
    args: ListTransactionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTransactionsCommandOutput) => void
  ): void;
  public listTransactions(
    args: ListTransactionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTransactionsCommandOutput) => void),
    cb?: (err: any, data?: ListTransactionsCommandOutput) => void
  ): Promise<ListTransactionsCommandOutput> | void {
    const command = new ListTransactionsCommand(args);
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
   *          <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
   *
   *          <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p>
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
   * <p>Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.</p>
   */
  public removeLFTagsFromResource(
    args: RemoveLFTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveLFTagsFromResourceCommandOutput>;
  public removeLFTagsFromResource(
    args: RemoveLFTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveLFTagsFromResourceCommandOutput) => void
  ): void;
  public removeLFTagsFromResource(
    args: RemoveLFTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveLFTagsFromResourceCommandOutput) => void
  ): void;
  public removeLFTagsFromResource(
    args: RemoveLFTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveLFTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveLFTagsFromResourceCommandOutput) => void
  ): Promise<RemoveLFTagsFromResourceCommandOutput> | void {
    const command = new RemoveLFTagsFromResourceCommand(args);
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
   * <p>This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.</p>
   */
  public searchDatabasesByLFTags(
    args: SearchDatabasesByLFTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDatabasesByLFTagsCommandOutput>;
  public searchDatabasesByLFTags(
    args: SearchDatabasesByLFTagsCommandInput,
    cb: (err: any, data?: SearchDatabasesByLFTagsCommandOutput) => void
  ): void;
  public searchDatabasesByLFTags(
    args: SearchDatabasesByLFTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDatabasesByLFTagsCommandOutput) => void
  ): void;
  public searchDatabasesByLFTags(
    args: SearchDatabasesByLFTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchDatabasesByLFTagsCommandOutput) => void),
    cb?: (err: any, data?: SearchDatabasesByLFTagsCommandOutput) => void
  ): Promise<SearchDatabasesByLFTagsCommandOutput> | void {
    const command = new SearchDatabasesByLFTagsCommand(args);
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
   * <p>This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.</p>
   */
  public searchTablesByLFTags(
    args: SearchTablesByLFTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTablesByLFTagsCommandOutput>;
  public searchTablesByLFTags(
    args: SearchTablesByLFTagsCommandInput,
    cb: (err: any, data?: SearchTablesByLFTagsCommandOutput) => void
  ): void;
  public searchTablesByLFTags(
    args: SearchTablesByLFTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTablesByLFTagsCommandOutput) => void
  ): void;
  public searchTablesByLFTags(
    args: SearchTablesByLFTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchTablesByLFTagsCommandOutput) => void),
    cb?: (err: any, data?: SearchTablesByLFTagsCommandOutput) => void
  ): Promise<SearchTablesByLFTagsCommandOutput> | void {
    const command = new SearchTablesByLFTagsCommand(args);
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
   * <p>Submits a request to process a query statement.</p>
   *
   * 	        <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
   */
  public startQueryPlanning(
    args: StartQueryPlanningCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQueryPlanningCommandOutput>;
  public startQueryPlanning(
    args: StartQueryPlanningCommandInput,
    cb: (err: any, data?: StartQueryPlanningCommandOutput) => void
  ): void;
  public startQueryPlanning(
    args: StartQueryPlanningCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQueryPlanningCommandOutput) => void
  ): void;
  public startQueryPlanning(
    args: StartQueryPlanningCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartQueryPlanningCommandOutput) => void),
    cb?: (err: any, data?: StartQueryPlanningCommandOutput) => void
  ): Promise<StartQueryPlanningCommandOutput> | void {
    const command = new StartQueryPlanningCommand(args);
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
   * <p>Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.</p>
   */
  public startTransaction(
    args: StartTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTransactionCommandOutput>;
  public startTransaction(
    args: StartTransactionCommandInput,
    cb: (err: any, data?: StartTransactionCommandOutput) => void
  ): void;
  public startTransaction(
    args: StartTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTransactionCommandOutput) => void
  ): void;
  public startTransaction(
    args: StartTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTransactionCommandOutput) => void),
    cb?: (err: any, data?: StartTransactionCommandOutput) => void
  ): Promise<StartTransactionCommandOutput> | void {
    const command = new StartTransactionCommand(args);
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
   * <p>Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. </p>
   */
  public updateLFTag(args: UpdateLFTagCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLFTagCommandOutput>;
  public updateLFTag(args: UpdateLFTagCommandInput, cb: (err: any, data?: UpdateLFTagCommandOutput) => void): void;
  public updateLFTag(
    args: UpdateLFTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLFTagCommandOutput) => void
  ): void;
  public updateLFTag(
    args: UpdateLFTagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLFTagCommandOutput) => void),
    cb?: (err: any, data?: UpdateLFTagCommandOutput) => void
  ): Promise<UpdateLFTagCommandOutput> | void {
    const command = new UpdateLFTagCommand(args);
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
   * <p>Updates the data access role used for vending access to the given (registered) resource in Lake Formation. </p>
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

  /**
   * <p>Updates the manifest of Amazon S3 objects that make up the specified governed table.</p>
   */
  public updateTableObjects(
    args: UpdateTableObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableObjectsCommandOutput>;
  public updateTableObjects(
    args: UpdateTableObjectsCommandInput,
    cb: (err: any, data?: UpdateTableObjectsCommandOutput) => void
  ): void;
  public updateTableObjects(
    args: UpdateTableObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableObjectsCommandOutput) => void
  ): void;
  public updateTableObjects(
    args: UpdateTableObjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTableObjectsCommandOutput) => void),
    cb?: (err: any, data?: UpdateTableObjectsCommandOutput) => void
  ): Promise<UpdateTableObjectsCommandOutput> | void {
    const command = new UpdateTableObjectsCommand(args);
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
   * <p>Updates the configuration of the storage optimizers for a table.</p>
   */
  public updateTableStorageOptimizer(
    args: UpdateTableStorageOptimizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableStorageOptimizerCommandOutput>;
  public updateTableStorageOptimizer(
    args: UpdateTableStorageOptimizerCommandInput,
    cb: (err: any, data?: UpdateTableStorageOptimizerCommandOutput) => void
  ): void;
  public updateTableStorageOptimizer(
    args: UpdateTableStorageOptimizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableStorageOptimizerCommandOutput) => void
  ): void;
  public updateTableStorageOptimizer(
    args: UpdateTableStorageOptimizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTableStorageOptimizerCommandOutput) => void),
    cb?: (err: any, data?: UpdateTableStorageOptimizerCommandOutput) => void
  ): Promise<UpdateTableStorageOptimizerCommandOutput> | void {
    const command = new UpdateTableStorageOptimizerCommand(args);
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
