// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CreateCellCommand, CreateCellCommandInput, CreateCellCommandOutput } from "./commands/CreateCellCommand";
import {
  CreateCrossAccountAuthorizationCommand,
  CreateCrossAccountAuthorizationCommandInput,
  CreateCrossAccountAuthorizationCommandOutput,
} from "./commands/CreateCrossAccountAuthorizationCommand";
import {
  CreateReadinessCheckCommand,
  CreateReadinessCheckCommandInput,
  CreateReadinessCheckCommandOutput,
} from "./commands/CreateReadinessCheckCommand";
import {
  CreateRecoveryGroupCommand,
  CreateRecoveryGroupCommandInput,
  CreateRecoveryGroupCommandOutput,
} from "./commands/CreateRecoveryGroupCommand";
import {
  CreateResourceSetCommand,
  CreateResourceSetCommandInput,
  CreateResourceSetCommandOutput,
} from "./commands/CreateResourceSetCommand";
import { DeleteCellCommand, DeleteCellCommandInput, DeleteCellCommandOutput } from "./commands/DeleteCellCommand";
import {
  DeleteCrossAccountAuthorizationCommand,
  DeleteCrossAccountAuthorizationCommandInput,
  DeleteCrossAccountAuthorizationCommandOutput,
} from "./commands/DeleteCrossAccountAuthorizationCommand";
import {
  DeleteReadinessCheckCommand,
  DeleteReadinessCheckCommandInput,
  DeleteReadinessCheckCommandOutput,
} from "./commands/DeleteReadinessCheckCommand";
import {
  DeleteRecoveryGroupCommand,
  DeleteRecoveryGroupCommandInput,
  DeleteRecoveryGroupCommandOutput,
} from "./commands/DeleteRecoveryGroupCommand";
import {
  DeleteResourceSetCommand,
  DeleteResourceSetCommandInput,
  DeleteResourceSetCommandOutput,
} from "./commands/DeleteResourceSetCommand";
import {
  GetArchitectureRecommendationsCommand,
  GetArchitectureRecommendationsCommandInput,
  GetArchitectureRecommendationsCommandOutput,
} from "./commands/GetArchitectureRecommendationsCommand";
import { GetCellCommand, GetCellCommandInput, GetCellCommandOutput } from "./commands/GetCellCommand";
import {
  GetCellReadinessSummaryCommand,
  GetCellReadinessSummaryCommandInput,
  GetCellReadinessSummaryCommandOutput,
} from "./commands/GetCellReadinessSummaryCommand";
import {
  GetReadinessCheckCommand,
  GetReadinessCheckCommandInput,
  GetReadinessCheckCommandOutput,
} from "./commands/GetReadinessCheckCommand";
import {
  GetReadinessCheckResourceStatusCommand,
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput,
} from "./commands/GetReadinessCheckResourceStatusCommand";
import {
  GetReadinessCheckStatusCommand,
  GetReadinessCheckStatusCommandInput,
  GetReadinessCheckStatusCommandOutput,
} from "./commands/GetReadinessCheckStatusCommand";
import {
  GetRecoveryGroupCommand,
  GetRecoveryGroupCommandInput,
  GetRecoveryGroupCommandOutput,
} from "./commands/GetRecoveryGroupCommand";
import {
  GetRecoveryGroupReadinessSummaryCommand,
  GetRecoveryGroupReadinessSummaryCommandInput,
  GetRecoveryGroupReadinessSummaryCommandOutput,
} from "./commands/GetRecoveryGroupReadinessSummaryCommand";
import {
  GetResourceSetCommand,
  GetResourceSetCommandInput,
  GetResourceSetCommandOutput,
} from "./commands/GetResourceSetCommand";
import { ListCellsCommand, ListCellsCommandInput, ListCellsCommandOutput } from "./commands/ListCellsCommand";
import {
  ListCrossAccountAuthorizationsCommand,
  ListCrossAccountAuthorizationsCommandInput,
  ListCrossAccountAuthorizationsCommandOutput,
} from "./commands/ListCrossAccountAuthorizationsCommand";
import {
  ListReadinessChecksCommand,
  ListReadinessChecksCommandInput,
  ListReadinessChecksCommandOutput,
} from "./commands/ListReadinessChecksCommand";
import {
  ListRecoveryGroupsCommand,
  ListRecoveryGroupsCommandInput,
  ListRecoveryGroupsCommandOutput,
} from "./commands/ListRecoveryGroupsCommand";
import {
  ListResourceSetsCommand,
  ListResourceSetsCommandInput,
  ListResourceSetsCommandOutput,
} from "./commands/ListResourceSetsCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListTagsForResourcesCommand,
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "./commands/ListTagsForResourcesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateCellCommand, UpdateCellCommandInput, UpdateCellCommandOutput } from "./commands/UpdateCellCommand";
import {
  UpdateReadinessCheckCommand,
  UpdateReadinessCheckCommandInput,
  UpdateReadinessCheckCommandOutput,
} from "./commands/UpdateReadinessCheckCommand";
import {
  UpdateRecoveryGroupCommand,
  UpdateRecoveryGroupCommandInput,
  UpdateRecoveryGroupCommandOutput,
} from "./commands/UpdateRecoveryGroupCommand";
import {
  UpdateResourceSetCommand,
  UpdateResourceSetCommandInput,
  UpdateResourceSetCommandOutput,
} from "./commands/UpdateResourceSetCommand";
import { Route53RecoveryReadinessClient } from "./Route53RecoveryReadinessClient";

/**
 * <p>Recovery readiness</p>
 */
export class Route53RecoveryReadiness extends Route53RecoveryReadinessClient {
  /**
   * <p>Creates a cell in an account.</p>
   */
  public createCell(args: CreateCellCommandInput, options?: __HttpHandlerOptions): Promise<CreateCellCommandOutput>;
  public createCell(args: CreateCellCommandInput, cb: (err: any, data?: CreateCellCommandOutput) => void): void;
  public createCell(
    args: CreateCellCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCellCommandOutput) => void
  ): void;
  public createCell(
    args: CreateCellCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCellCommandOutput) => void),
    cb?: (err: any, data?: CreateCellCommandOutput) => void
  ): Promise<CreateCellCommandOutput> | void {
    const command = new CreateCellCommand(args);
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
   * <p>Creates a cross-account readiness authorization. This lets you authorize another account to work with Route 53 Application Recovery Controller, for example, to check the readiness status of resources in a separate account.</p>
   */
  public createCrossAccountAuthorization(
    args: CreateCrossAccountAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCrossAccountAuthorizationCommandOutput>;
  public createCrossAccountAuthorization(
    args: CreateCrossAccountAuthorizationCommandInput,
    cb: (err: any, data?: CreateCrossAccountAuthorizationCommandOutput) => void
  ): void;
  public createCrossAccountAuthorization(
    args: CreateCrossAccountAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCrossAccountAuthorizationCommandOutput) => void
  ): void;
  public createCrossAccountAuthorization(
    args: CreateCrossAccountAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCrossAccountAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: CreateCrossAccountAuthorizationCommandOutput) => void
  ): Promise<CreateCrossAccountAuthorizationCommandOutput> | void {
    const command = new CreateCrossAccountAuthorizationCommand(args);
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
   * <p>Creates a readiness check in an account. A readiness check monitors a resource set in your application, such as a set of Amazon Aurora instances, that Application Recovery Controller is auditing recovery readiness for. The audits run once every minute on every resource that's associated with a readiness check.</p>
   */
  public createReadinessCheck(
    args: CreateReadinessCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReadinessCheckCommandOutput>;
  public createReadinessCheck(
    args: CreateReadinessCheckCommandInput,
    cb: (err: any, data?: CreateReadinessCheckCommandOutput) => void
  ): void;
  public createReadinessCheck(
    args: CreateReadinessCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReadinessCheckCommandOutput) => void
  ): void;
  public createReadinessCheck(
    args: CreateReadinessCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReadinessCheckCommandOutput) => void),
    cb?: (err: any, data?: CreateReadinessCheckCommandOutput) => void
  ): Promise<CreateReadinessCheckCommandOutput> | void {
    const command = new CreateReadinessCheckCommand(args);
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
   * <p>Creates a recovery group in an account. A recovery group corresponds to an application and includes a list of the cells that make up the application.</p>
   */
  public createRecoveryGroup(
    args: CreateRecoveryGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecoveryGroupCommandOutput>;
  public createRecoveryGroup(
    args: CreateRecoveryGroupCommandInput,
    cb: (err: any, data?: CreateRecoveryGroupCommandOutput) => void
  ): void;
  public createRecoveryGroup(
    args: CreateRecoveryGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecoveryGroupCommandOutput) => void
  ): void;
  public createRecoveryGroup(
    args: CreateRecoveryGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRecoveryGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateRecoveryGroupCommandOutput) => void
  ): Promise<CreateRecoveryGroupCommandOutput> | void {
    const command = new CreateRecoveryGroupCommand(args);
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
   * <p>Creates a resource set. A resource set is a set of resources of one type that span multiple cells. You can associate a resource set with a readiness check to monitor the resources for failover readiness.</p>
   */
  public createResourceSet(
    args: CreateResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceSetCommandOutput>;
  public createResourceSet(
    args: CreateResourceSetCommandInput,
    cb: (err: any, data?: CreateResourceSetCommandOutput) => void
  ): void;
  public createResourceSet(
    args: CreateResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceSetCommandOutput) => void
  ): void;
  public createResourceSet(
    args: CreateResourceSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceSetCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceSetCommandOutput) => void
  ): Promise<CreateResourceSetCommandOutput> | void {
    const command = new CreateResourceSetCommand(args);
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
   * <p>Delete a cell. When successful, the response code is 204, with no response body.</p>
   */
  public deleteCell(args: DeleteCellCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCellCommandOutput>;
  public deleteCell(args: DeleteCellCommandInput, cb: (err: any, data?: DeleteCellCommandOutput) => void): void;
  public deleteCell(
    args: DeleteCellCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCellCommandOutput) => void
  ): void;
  public deleteCell(
    args: DeleteCellCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCellCommandOutput) => void),
    cb?: (err: any, data?: DeleteCellCommandOutput) => void
  ): Promise<DeleteCellCommandOutput> | void {
    const command = new DeleteCellCommand(args);
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
   * <p>Deletes cross account readiness authorization.</p>
   */
  public deleteCrossAccountAuthorization(
    args: DeleteCrossAccountAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCrossAccountAuthorizationCommandOutput>;
  public deleteCrossAccountAuthorization(
    args: DeleteCrossAccountAuthorizationCommandInput,
    cb: (err: any, data?: DeleteCrossAccountAuthorizationCommandOutput) => void
  ): void;
  public deleteCrossAccountAuthorization(
    args: DeleteCrossAccountAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCrossAccountAuthorizationCommandOutput) => void
  ): void;
  public deleteCrossAccountAuthorization(
    args: DeleteCrossAccountAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCrossAccountAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: DeleteCrossAccountAuthorizationCommandOutput) => void
  ): Promise<DeleteCrossAccountAuthorizationCommandOutput> | void {
    const command = new DeleteCrossAccountAuthorizationCommand(args);
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
   * <p>Deletes a readiness check.</p>
   */
  public deleteReadinessCheck(
    args: DeleteReadinessCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReadinessCheckCommandOutput>;
  public deleteReadinessCheck(
    args: DeleteReadinessCheckCommandInput,
    cb: (err: any, data?: DeleteReadinessCheckCommandOutput) => void
  ): void;
  public deleteReadinessCheck(
    args: DeleteReadinessCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReadinessCheckCommandOutput) => void
  ): void;
  public deleteReadinessCheck(
    args: DeleteReadinessCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReadinessCheckCommandOutput) => void),
    cb?: (err: any, data?: DeleteReadinessCheckCommandOutput) => void
  ): Promise<DeleteReadinessCheckCommandOutput> | void {
    const command = new DeleteReadinessCheckCommand(args);
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
   * <p>Deletes a recovery group.</p>
   */
  public deleteRecoveryGroup(
    args: DeleteRecoveryGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecoveryGroupCommandOutput>;
  public deleteRecoveryGroup(
    args: DeleteRecoveryGroupCommandInput,
    cb: (err: any, data?: DeleteRecoveryGroupCommandOutput) => void
  ): void;
  public deleteRecoveryGroup(
    args: DeleteRecoveryGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecoveryGroupCommandOutput) => void
  ): void;
  public deleteRecoveryGroup(
    args: DeleteRecoveryGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRecoveryGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteRecoveryGroupCommandOutput) => void
  ): Promise<DeleteRecoveryGroupCommandOutput> | void {
    const command = new DeleteRecoveryGroupCommand(args);
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
   * <p>Deletes a resource set.</p>
   */
  public deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceSetCommandOutput>;
  public deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    cb: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): void;
  public deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): void;
  public deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): Promise<DeleteResourceSetCommandOutput> | void {
    const command = new DeleteResourceSetCommand(args);
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
   * <p>Gets recommendations about architecture designs for improving resiliency for an application, based on a recovery group.</p>
   */
  public getArchitectureRecommendations(
    args: GetArchitectureRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchitectureRecommendationsCommandOutput>;
  public getArchitectureRecommendations(
    args: GetArchitectureRecommendationsCommandInput,
    cb: (err: any, data?: GetArchitectureRecommendationsCommandOutput) => void
  ): void;
  public getArchitectureRecommendations(
    args: GetArchitectureRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchitectureRecommendationsCommandOutput) => void
  ): void;
  public getArchitectureRecommendations(
    args: GetArchitectureRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetArchitectureRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: GetArchitectureRecommendationsCommandOutput) => void
  ): Promise<GetArchitectureRecommendationsCommandOutput> | void {
    const command = new GetArchitectureRecommendationsCommand(args);
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
   * <p>Gets information about a cell including cell name, cell Amazon Resource Name (ARN), ARNs of nested cells for this cell, and a list of those cell ARNs with their associated recovery group ARNs.</p>
   */
  public getCell(args: GetCellCommandInput, options?: __HttpHandlerOptions): Promise<GetCellCommandOutput>;
  public getCell(args: GetCellCommandInput, cb: (err: any, data?: GetCellCommandOutput) => void): void;
  public getCell(
    args: GetCellCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCellCommandOutput) => void
  ): void;
  public getCell(
    args: GetCellCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCellCommandOutput) => void),
    cb?: (err: any, data?: GetCellCommandOutput) => void
  ): Promise<GetCellCommandOutput> | void {
    const command = new GetCellCommand(args);
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
   * <p>Gets readiness for a cell. Aggregates the readiness of all the resources that are associated with the cell into a single value.</p>
   */
  public getCellReadinessSummary(
    args: GetCellReadinessSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCellReadinessSummaryCommandOutput>;
  public getCellReadinessSummary(
    args: GetCellReadinessSummaryCommandInput,
    cb: (err: any, data?: GetCellReadinessSummaryCommandOutput) => void
  ): void;
  public getCellReadinessSummary(
    args: GetCellReadinessSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCellReadinessSummaryCommandOutput) => void
  ): void;
  public getCellReadinessSummary(
    args: GetCellReadinessSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCellReadinessSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetCellReadinessSummaryCommandOutput) => void
  ): Promise<GetCellReadinessSummaryCommandOutput> | void {
    const command = new GetCellReadinessSummaryCommand(args);
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
   * <p>Gets details about a readiness check.</p>
   */
  public getReadinessCheck(
    args: GetReadinessCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadinessCheckCommandOutput>;
  public getReadinessCheck(
    args: GetReadinessCheckCommandInput,
    cb: (err: any, data?: GetReadinessCheckCommandOutput) => void
  ): void;
  public getReadinessCheck(
    args: GetReadinessCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadinessCheckCommandOutput) => void
  ): void;
  public getReadinessCheck(
    args: GetReadinessCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReadinessCheckCommandOutput) => void),
    cb?: (err: any, data?: GetReadinessCheckCommandOutput) => void
  ): Promise<GetReadinessCheckCommandOutput> | void {
    const command = new GetReadinessCheckCommand(args);
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
   * <p>Gets individual readiness status for a readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in the recovery group, use GetRecoveryGroupReadinessSummary.</p>
   */
  public getReadinessCheckResourceStatus(
    args: GetReadinessCheckResourceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadinessCheckResourceStatusCommandOutput>;
  public getReadinessCheckResourceStatus(
    args: GetReadinessCheckResourceStatusCommandInput,
    cb: (err: any, data?: GetReadinessCheckResourceStatusCommandOutput) => void
  ): void;
  public getReadinessCheckResourceStatus(
    args: GetReadinessCheckResourceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadinessCheckResourceStatusCommandOutput) => void
  ): void;
  public getReadinessCheckResourceStatus(
    args: GetReadinessCheckResourceStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReadinessCheckResourceStatusCommandOutput) => void),
    cb?: (err: any, data?: GetReadinessCheckResourceStatusCommandOutput) => void
  ): Promise<GetReadinessCheckResourceStatusCommandOutput> | void {
    const command = new GetReadinessCheckResourceStatusCommand(args);
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
   * <p>Gets the readiness status for an individual readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in a recovery group, use GetRecoveryGroupReadinessSummary.</p>
   */
  public getReadinessCheckStatus(
    args: GetReadinessCheckStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadinessCheckStatusCommandOutput>;
  public getReadinessCheckStatus(
    args: GetReadinessCheckStatusCommandInput,
    cb: (err: any, data?: GetReadinessCheckStatusCommandOutput) => void
  ): void;
  public getReadinessCheckStatus(
    args: GetReadinessCheckStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadinessCheckStatusCommandOutput) => void
  ): void;
  public getReadinessCheckStatus(
    args: GetReadinessCheckStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReadinessCheckStatusCommandOutput) => void),
    cb?: (err: any, data?: GetReadinessCheckStatusCommandOutput) => void
  ): Promise<GetReadinessCheckStatusCommandOutput> | void {
    const command = new GetReadinessCheckStatusCommand(args);
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
   * <p>Gets details about a recovery group, including a list of the cells that are included in it.</p>
   */
  public getRecoveryGroup(
    args: GetRecoveryGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryGroupCommandOutput>;
  public getRecoveryGroup(
    args: GetRecoveryGroupCommandInput,
    cb: (err: any, data?: GetRecoveryGroupCommandOutput) => void
  ): void;
  public getRecoveryGroup(
    args: GetRecoveryGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryGroupCommandOutput) => void
  ): void;
  public getRecoveryGroup(
    args: GetRecoveryGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecoveryGroupCommandOutput) => void),
    cb?: (err: any, data?: GetRecoveryGroupCommandOutput) => void
  ): Promise<GetRecoveryGroupCommandOutput> | void {
    const command = new GetRecoveryGroupCommand(args);
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
   * <p>Displays a summary of information about a recovery group's readiness status. Includes the readiness checks for resources in the recovery group and the readiness status of each one.</p>
   */
  public getRecoveryGroupReadinessSummary(
    args: GetRecoveryGroupReadinessSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryGroupReadinessSummaryCommandOutput>;
  public getRecoveryGroupReadinessSummary(
    args: GetRecoveryGroupReadinessSummaryCommandInput,
    cb: (err: any, data?: GetRecoveryGroupReadinessSummaryCommandOutput) => void
  ): void;
  public getRecoveryGroupReadinessSummary(
    args: GetRecoveryGroupReadinessSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryGroupReadinessSummaryCommandOutput) => void
  ): void;
  public getRecoveryGroupReadinessSummary(
    args: GetRecoveryGroupReadinessSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecoveryGroupReadinessSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetRecoveryGroupReadinessSummaryCommandOutput) => void
  ): Promise<GetRecoveryGroupReadinessSummaryCommandOutput> | void {
    const command = new GetRecoveryGroupReadinessSummaryCommand(args);
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
   * <p>Displays the details about a resource set, including a list of the resources in the set.</p>
   */
  public getResourceSet(
    args: GetResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceSetCommandOutput>;
  public getResourceSet(
    args: GetResourceSetCommandInput,
    cb: (err: any, data?: GetResourceSetCommandOutput) => void
  ): void;
  public getResourceSet(
    args: GetResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceSetCommandOutput) => void
  ): void;
  public getResourceSet(
    args: GetResourceSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceSetCommandOutput) => void),
    cb?: (err: any, data?: GetResourceSetCommandOutput) => void
  ): Promise<GetResourceSetCommandOutput> | void {
    const command = new GetResourceSetCommand(args);
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
   * <p>Lists the cells for an account.</p>
   */
  public listCells(args: ListCellsCommandInput, options?: __HttpHandlerOptions): Promise<ListCellsCommandOutput>;
  public listCells(args: ListCellsCommandInput, cb: (err: any, data?: ListCellsCommandOutput) => void): void;
  public listCells(
    args: ListCellsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCellsCommandOutput) => void
  ): void;
  public listCells(
    args: ListCellsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCellsCommandOutput) => void),
    cb?: (err: any, data?: ListCellsCommandOutput) => void
  ): Promise<ListCellsCommandOutput> | void {
    const command = new ListCellsCommand(args);
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
   * <p>Lists the cross-account readiness authorizations that are in place for an account.</p>
   */
  public listCrossAccountAuthorizations(
    args: ListCrossAccountAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCrossAccountAuthorizationsCommandOutput>;
  public listCrossAccountAuthorizations(
    args: ListCrossAccountAuthorizationsCommandInput,
    cb: (err: any, data?: ListCrossAccountAuthorizationsCommandOutput) => void
  ): void;
  public listCrossAccountAuthorizations(
    args: ListCrossAccountAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrossAccountAuthorizationsCommandOutput) => void
  ): void;
  public listCrossAccountAuthorizations(
    args: ListCrossAccountAuthorizationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCrossAccountAuthorizationsCommandOutput) => void),
    cb?: (err: any, data?: ListCrossAccountAuthorizationsCommandOutput) => void
  ): Promise<ListCrossAccountAuthorizationsCommandOutput> | void {
    const command = new ListCrossAccountAuthorizationsCommand(args);
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
   * <p>Lists the readiness checks for an account.</p>
   */
  public listReadinessChecks(
    args: ListReadinessChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadinessChecksCommandOutput>;
  public listReadinessChecks(
    args: ListReadinessChecksCommandInput,
    cb: (err: any, data?: ListReadinessChecksCommandOutput) => void
  ): void;
  public listReadinessChecks(
    args: ListReadinessChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadinessChecksCommandOutput) => void
  ): void;
  public listReadinessChecks(
    args: ListReadinessChecksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReadinessChecksCommandOutput) => void),
    cb?: (err: any, data?: ListReadinessChecksCommandOutput) => void
  ): Promise<ListReadinessChecksCommandOutput> | void {
    const command = new ListReadinessChecksCommand(args);
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
   * <p>Lists the recovery groups in an account.</p>
   */
  public listRecoveryGroups(
    args: ListRecoveryGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryGroupsCommandOutput>;
  public listRecoveryGroups(
    args: ListRecoveryGroupsCommandInput,
    cb: (err: any, data?: ListRecoveryGroupsCommandOutput) => void
  ): void;
  public listRecoveryGroups(
    args: ListRecoveryGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryGroupsCommandOutput) => void
  ): void;
  public listRecoveryGroups(
    args: ListRecoveryGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecoveryGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListRecoveryGroupsCommandOutput) => void
  ): Promise<ListRecoveryGroupsCommandOutput> | void {
    const command = new ListRecoveryGroupsCommand(args);
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
   * <p>Lists the resource sets in an account.</p>
   */
  public listResourceSets(
    args: ListResourceSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSetsCommandOutput>;
  public listResourceSets(
    args: ListResourceSetsCommandInput,
    cb: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): void;
  public listResourceSets(
    args: ListResourceSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): void;
  public listResourceSets(
    args: ListResourceSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceSetsCommandOutput) => void),
    cb?: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): Promise<ListResourceSetsCommandOutput> | void {
    const command = new ListResourceSetsCommand(args);
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
   * <p>Lists all readiness rules, or lists the readiness rules for a specific resource type.</p>
   */
  public listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  public listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  public listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  public listRules(
    args: ListRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRulesCommandOutput) => void),
    cb?: (err: any, data?: ListRulesCommandOutput) => void
  ): Promise<ListRulesCommandOutput> | void {
    const command = new ListRulesCommand(args);
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
   * <p>Lists the tags for a resource.</p>
   */
  public listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourcesCommandOutput>;
  public listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;
  public listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;
  public listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): Promise<ListTagsForResourcesCommandOutput> | void {
    const command = new ListTagsForResourcesCommand(args);
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
   * <p>Adds a tag to a resource.</p>
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
   * <p>Removes a tag from a resource.</p>
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
   * <p>Updates a cell to replace the list of nested cells with a new list of nested cells.</p>
   */
  public updateCell(args: UpdateCellCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCellCommandOutput>;
  public updateCell(args: UpdateCellCommandInput, cb: (err: any, data?: UpdateCellCommandOutput) => void): void;
  public updateCell(
    args: UpdateCellCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCellCommandOutput) => void
  ): void;
  public updateCell(
    args: UpdateCellCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCellCommandOutput) => void),
    cb?: (err: any, data?: UpdateCellCommandOutput) => void
  ): Promise<UpdateCellCommandOutput> | void {
    const command = new UpdateCellCommand(args);
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
   * <p>Updates a readiness check.</p>
   */
  public updateReadinessCheck(
    args: UpdateReadinessCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReadinessCheckCommandOutput>;
  public updateReadinessCheck(
    args: UpdateReadinessCheckCommandInput,
    cb: (err: any, data?: UpdateReadinessCheckCommandOutput) => void
  ): void;
  public updateReadinessCheck(
    args: UpdateReadinessCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReadinessCheckCommandOutput) => void
  ): void;
  public updateReadinessCheck(
    args: UpdateReadinessCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateReadinessCheckCommandOutput) => void),
    cb?: (err: any, data?: UpdateReadinessCheckCommandOutput) => void
  ): Promise<UpdateReadinessCheckCommandOutput> | void {
    const command = new UpdateReadinessCheckCommand(args);
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
   * <p>Updates a recovery group.</p>
   */
  public updateRecoveryGroup(
    args: UpdateRecoveryGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecoveryGroupCommandOutput>;
  public updateRecoveryGroup(
    args: UpdateRecoveryGroupCommandInput,
    cb: (err: any, data?: UpdateRecoveryGroupCommandOutput) => void
  ): void;
  public updateRecoveryGroup(
    args: UpdateRecoveryGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecoveryGroupCommandOutput) => void
  ): void;
  public updateRecoveryGroup(
    args: UpdateRecoveryGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRecoveryGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateRecoveryGroupCommandOutput) => void
  ): Promise<UpdateRecoveryGroupCommandOutput> | void {
    const command = new UpdateRecoveryGroupCommand(args);
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
   * <p>Updates a resource set.</p>
   */
  public updateResourceSet(
    args: UpdateResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceSetCommandOutput>;
  public updateResourceSet(
    args: UpdateResourceSetCommandInput,
    cb: (err: any, data?: UpdateResourceSetCommandOutput) => void
  ): void;
  public updateResourceSet(
    args: UpdateResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceSetCommandOutput) => void
  ): void;
  public updateResourceSet(
    args: UpdateResourceSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceSetCommandOutput) => void
  ): Promise<UpdateResourceSetCommandOutput> | void {
    const command = new UpdateResourceSetCommand(args);
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
