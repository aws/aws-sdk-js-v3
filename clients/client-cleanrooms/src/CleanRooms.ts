// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CleanRoomsClient } from "./CleanRoomsClient";
import {
  BatchGetSchemaCommand,
  BatchGetSchemaCommandInput,
  BatchGetSchemaCommandOutput,
} from "./commands/BatchGetSchemaCommand";
import {
  CreateCollaborationCommand,
  CreateCollaborationCommandInput,
  CreateCollaborationCommandOutput,
} from "./commands/CreateCollaborationCommand";
import {
  CreateConfiguredTableAnalysisRuleCommand,
  CreateConfiguredTableAnalysisRuleCommandInput,
  CreateConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/CreateConfiguredTableAnalysisRuleCommand";
import {
  CreateConfiguredTableAssociationCommand,
  CreateConfiguredTableAssociationCommandInput,
  CreateConfiguredTableAssociationCommandOutput,
} from "./commands/CreateConfiguredTableAssociationCommand";
import {
  CreateConfiguredTableCommand,
  CreateConfiguredTableCommandInput,
  CreateConfiguredTableCommandOutput,
} from "./commands/CreateConfiguredTableCommand";
import {
  CreateMembershipCommand,
  CreateMembershipCommandInput,
  CreateMembershipCommandOutput,
} from "./commands/CreateMembershipCommand";
import {
  DeleteCollaborationCommand,
  DeleteCollaborationCommandInput,
  DeleteCollaborationCommandOutput,
} from "./commands/DeleteCollaborationCommand";
import {
  DeleteConfiguredTableAnalysisRuleCommand,
  DeleteConfiguredTableAnalysisRuleCommandInput,
  DeleteConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/DeleteConfiguredTableAnalysisRuleCommand";
import {
  DeleteConfiguredTableAssociationCommand,
  DeleteConfiguredTableAssociationCommandInput,
  DeleteConfiguredTableAssociationCommandOutput,
} from "./commands/DeleteConfiguredTableAssociationCommand";
import {
  DeleteConfiguredTableCommand,
  DeleteConfiguredTableCommandInput,
  DeleteConfiguredTableCommandOutput,
} from "./commands/DeleteConfiguredTableCommand";
import {
  DeleteMemberCommand,
  DeleteMemberCommandInput,
  DeleteMemberCommandOutput,
} from "./commands/DeleteMemberCommand";
import {
  DeleteMembershipCommand,
  DeleteMembershipCommandInput,
  DeleteMembershipCommandOutput,
} from "./commands/DeleteMembershipCommand";
import {
  GetCollaborationCommand,
  GetCollaborationCommandInput,
  GetCollaborationCommandOutput,
} from "./commands/GetCollaborationCommand";
import {
  GetConfiguredTableAnalysisRuleCommand,
  GetConfiguredTableAnalysisRuleCommandInput,
  GetConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/GetConfiguredTableAnalysisRuleCommand";
import {
  GetConfiguredTableAssociationCommand,
  GetConfiguredTableAssociationCommandInput,
  GetConfiguredTableAssociationCommandOutput,
} from "./commands/GetConfiguredTableAssociationCommand";
import {
  GetConfiguredTableCommand,
  GetConfiguredTableCommandInput,
  GetConfiguredTableCommandOutput,
} from "./commands/GetConfiguredTableCommand";
import {
  GetMembershipCommand,
  GetMembershipCommandInput,
  GetMembershipCommandOutput,
} from "./commands/GetMembershipCommand";
import {
  GetProtectedQueryCommand,
  GetProtectedQueryCommandInput,
  GetProtectedQueryCommandOutput,
} from "./commands/GetProtectedQueryCommand";
import {
  GetSchemaAnalysisRuleCommand,
  GetSchemaAnalysisRuleCommandInput,
  GetSchemaAnalysisRuleCommandOutput,
} from "./commands/GetSchemaAnalysisRuleCommand";
import { GetSchemaCommand, GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import {
  ListCollaborationsCommand,
  ListCollaborationsCommandInput,
  ListCollaborationsCommandOutput,
} from "./commands/ListCollaborationsCommand";
import {
  ListConfiguredTableAssociationsCommand,
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput,
} from "./commands/ListConfiguredTableAssociationsCommand";
import {
  ListConfiguredTablesCommand,
  ListConfiguredTablesCommandInput,
  ListConfiguredTablesCommandOutput,
} from "./commands/ListConfiguredTablesCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListMembershipsCommand,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput,
} from "./commands/ListMembershipsCommand";
import {
  ListProtectedQueriesCommand,
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput,
} from "./commands/ListProtectedQueriesCommand";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  StartProtectedQueryCommand,
  StartProtectedQueryCommandInput,
  StartProtectedQueryCommandOutput,
} from "./commands/StartProtectedQueryCommand";
import {
  UpdateCollaborationCommand,
  UpdateCollaborationCommandInput,
  UpdateCollaborationCommandOutput,
} from "./commands/UpdateCollaborationCommand";
import {
  UpdateConfiguredTableAnalysisRuleCommand,
  UpdateConfiguredTableAnalysisRuleCommandInput,
  UpdateConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/UpdateConfiguredTableAnalysisRuleCommand";
import {
  UpdateConfiguredTableAssociationCommand,
  UpdateConfiguredTableAssociationCommandInput,
  UpdateConfiguredTableAssociationCommandOutput,
} from "./commands/UpdateConfiguredTableAssociationCommand";
import {
  UpdateConfiguredTableCommand,
  UpdateConfiguredTableCommandInput,
  UpdateConfiguredTableCommandOutput,
} from "./commands/UpdateConfiguredTableCommand";
import {
  UpdateMembershipCommand,
  UpdateMembershipCommandInput,
  UpdateMembershipCommandOutput,
} from "./commands/UpdateMembershipCommand";
import {
  UpdateProtectedQueryCommand,
  UpdateProtectedQueryCommandInput,
  UpdateProtectedQueryCommandOutput,
} from "./commands/UpdateProtectedQueryCommand";

/**
 * <note>
 *             <p>AWS Clean Rooms is in preview release and is subject to change.</p>
 *          </note>
 *          <p>Welcome to the <i>AWS Clean Rooms API Reference</i>.</p>
 *          <p>AWS Clean Rooms is an AWS service that helps multiple parties to join their data
 *          together in a secure collaboration workspace. In the collaboration, members who can query
 *          and receive results can get insights into the combined data without either party getting
 *          access to the other party's raw data.</p>
 *          <p>To learn more about AWS Clean Rooms concepts, procedures, and best practices, see the
 *             <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">AWS Clean
 *             Rooms User Guide</a>.</p>
 */
export class CleanRooms extends CleanRoomsClient {
  /**
   * <p>Retrieves multiple schemas by their identifiers.</p>
   */
  public batchGetSchema(
    args: BatchGetSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetSchemaCommandOutput>;
  public batchGetSchema(
    args: BatchGetSchemaCommandInput,
    cb: (err: any, data?: BatchGetSchemaCommandOutput) => void
  ): void;
  public batchGetSchema(
    args: BatchGetSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetSchemaCommandOutput) => void
  ): void;
  public batchGetSchema(
    args: BatchGetSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetSchemaCommandOutput) => void),
    cb?: (err: any, data?: BatchGetSchemaCommandOutput) => void
  ): Promise<BatchGetSchemaCommandOutput> | void {
    const command = new BatchGetSchemaCommand(args);
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
   * <p>Creates a new collaboration.</p>
   */
  public createCollaboration(
    args: CreateCollaborationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCollaborationCommandOutput>;
  public createCollaboration(
    args: CreateCollaborationCommandInput,
    cb: (err: any, data?: CreateCollaborationCommandOutput) => void
  ): void;
  public createCollaboration(
    args: CreateCollaborationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCollaborationCommandOutput) => void
  ): void;
  public createCollaboration(
    args: CreateCollaborationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCollaborationCommandOutput) => void),
    cb?: (err: any, data?: CreateCollaborationCommandOutput) => void
  ): Promise<CreateCollaborationCommandOutput> | void {
    const command = new CreateCollaborationCommand(args);
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
   * <p>Creates a new configured table resource.</p>
   */
  public createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredTableCommandOutput>;
  public createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    cb: (err: any, data?: CreateConfiguredTableCommandOutput) => void
  ): void;
  public createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredTableCommandOutput) => void
  ): void;
  public createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfiguredTableCommandOutput) => void),
    cb?: (err: any, data?: CreateConfiguredTableCommandOutput) => void
  ): Promise<CreateConfiguredTableCommandOutput> | void {
    const command = new CreateConfiguredTableCommand(args);
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
   * <p>Creates a new analysis rule for a configured table. Currently, only one analysis rule
   *          can be created for a given configured table.</p>
   */
  public createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredTableAnalysisRuleCommandOutput>;
  public createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: CreateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  public createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  public createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfiguredTableAnalysisRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateConfiguredTableAnalysisRuleCommandOutput) => void
  ): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> | void {
    const command = new CreateConfiguredTableAnalysisRuleCommand(args);
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
   * <p>Creates a configured table association. A configured table association links a
   *          configured table with a collaboration.</p>
   */
  public createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredTableAssociationCommandOutput>;
  public createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: CreateConfiguredTableAssociationCommandOutput) => void
  ): void;
  public createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredTableAssociationCommandOutput) => void
  ): void;
  public createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfiguredTableAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateConfiguredTableAssociationCommandOutput) => void
  ): Promise<CreateConfiguredTableAssociationCommandOutput> | void {
    const command = new CreateConfiguredTableAssociationCommand(args);
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
   * <p>Creates a membership for a specific collaboration identifier and joins the
   *          collaboration.</p>
   */
  public createMembership(
    args: CreateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMembershipCommandOutput>;
  public createMembership(
    args: CreateMembershipCommandInput,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;
  public createMembership(
    args: CreateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;
  public createMembership(
    args: CreateMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMembershipCommandOutput) => void),
    cb?: (err: any, data?: CreateMembershipCommandOutput) => void
  ): Promise<CreateMembershipCommandOutput> | void {
    const command = new CreateMembershipCommand(args);
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
   * <p>Deletes a collaboration. It can only be called by the collaboration owner.</p>
   */
  public deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCollaborationCommandOutput>;
  public deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    cb: (err: any, data?: DeleteCollaborationCommandOutput) => void
  ): void;
  public deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCollaborationCommandOutput) => void
  ): void;
  public deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCollaborationCommandOutput) => void),
    cb?: (err: any, data?: DeleteCollaborationCommandOutput) => void
  ): Promise<DeleteCollaborationCommandOutput> | void {
    const command = new DeleteCollaborationCommand(args);
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
   * <p>Deletes a configured table.</p>
   */
  public deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredTableCommandOutput>;
  public deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableCommandOutput) => void
  ): void;
  public deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredTableCommandOutput) => void
  ): void;
  public deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfiguredTableCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfiguredTableCommandOutput) => void
  ): Promise<DeleteConfiguredTableCommandOutput> | void {
    const command = new DeleteConfiguredTableCommand(args);
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
   * <p>Deletes a configured table analysis rule.</p>
   */
  public deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput>;
  public deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  public deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  public deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfiguredTableAnalysisRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfiguredTableAnalysisRuleCommandOutput) => void
  ): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput> | void {
    const command = new DeleteConfiguredTableAnalysisRuleCommand(args);
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
   * <p>Deletes a configured table association.</p>
   */
  public deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredTableAssociationCommandOutput>;
  public deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableAssociationCommandOutput) => void
  ): void;
  public deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredTableAssociationCommandOutput) => void
  ): void;
  public deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfiguredTableAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfiguredTableAssociationCommandOutput) => void
  ): Promise<DeleteConfiguredTableAssociationCommandOutput> | void {
    const command = new DeleteConfiguredTableAssociationCommand(args);
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
   * <p>Removes the specified member from a collaboration. The removed member is placed in the
   *          Removed status and can't interact with the collaboration. The removed member's data is
   *          inaccessible to active members of the collaboration.</p>
   */
  public deleteMember(
    args: DeleteMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMemberCommandOutput>;
  public deleteMember(args: DeleteMemberCommandInput, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
  public deleteMember(
    args: DeleteMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;
  public deleteMember(
    args: DeleteMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMemberCommandOutput) => void),
    cb?: (err: any, data?: DeleteMemberCommandOutput) => void
  ): Promise<DeleteMemberCommandOutput> | void {
    const command = new DeleteMemberCommand(args);
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
   * <p>Deletes a specified membership. All resources under a membership must be deleted.</p>
   */
  public deleteMembership(
    args: DeleteMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMembershipCommandOutput>;
  public deleteMembership(
    args: DeleteMembershipCommandInput,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;
  public deleteMembership(
    args: DeleteMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;
  public deleteMembership(
    args: DeleteMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMembershipCommandOutput) => void),
    cb?: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): Promise<DeleteMembershipCommandOutput> | void {
    const command = new DeleteMembershipCommand(args);
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
   * <p>Returns metadata about a collaboration.</p>
   */
  public getCollaboration(
    args: GetCollaborationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationCommandOutput>;
  public getCollaboration(
    args: GetCollaborationCommandInput,
    cb: (err: any, data?: GetCollaborationCommandOutput) => void
  ): void;
  public getCollaboration(
    args: GetCollaborationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationCommandOutput) => void
  ): void;
  public getCollaboration(
    args: GetCollaborationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCollaborationCommandOutput) => void),
    cb?: (err: any, data?: GetCollaborationCommandOutput) => void
  ): Promise<GetCollaborationCommandOutput> | void {
    const command = new GetCollaborationCommand(args);
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
   * <p>Retrieves a configured table.</p>
   */
  public getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredTableCommandOutput>;
  public getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    cb: (err: any, data?: GetConfiguredTableCommandOutput) => void
  ): void;
  public getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredTableCommandOutput) => void
  ): void;
  public getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfiguredTableCommandOutput) => void),
    cb?: (err: any, data?: GetConfiguredTableCommandOutput) => void
  ): Promise<GetConfiguredTableCommandOutput> | void {
    const command = new GetConfiguredTableCommand(args);
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
   * <p>Retrieves a configured table analysis rule.</p>
   */
  public getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredTableAnalysisRuleCommandOutput>;
  public getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: GetConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  public getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  public getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfiguredTableAnalysisRuleCommandOutput) => void),
    cb?: (err: any, data?: GetConfiguredTableAnalysisRuleCommandOutput) => void
  ): Promise<GetConfiguredTableAnalysisRuleCommandOutput> | void {
    const command = new GetConfiguredTableAnalysisRuleCommand(args);
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
   * <p>Retrieves a configured table association.</p>
   */
  public getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredTableAssociationCommandOutput>;
  public getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: GetConfiguredTableAssociationCommandOutput) => void
  ): void;
  public getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredTableAssociationCommandOutput) => void
  ): void;
  public getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfiguredTableAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetConfiguredTableAssociationCommandOutput) => void
  ): Promise<GetConfiguredTableAssociationCommandOutput> | void {
    const command = new GetConfiguredTableAssociationCommand(args);
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
   * <p>Retrieves a specified membership for an identifier.</p>
   */
  public getMembership(
    args: GetMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMembershipCommandOutput>;
  public getMembership(
    args: GetMembershipCommandInput,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;
  public getMembership(
    args: GetMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;
  public getMembership(
    args: GetMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMembershipCommandOutput) => void),
    cb?: (err: any, data?: GetMembershipCommandOutput) => void
  ): Promise<GetMembershipCommandOutput> | void {
    const command = new GetMembershipCommand(args);
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
   * <p>Returns query processing metadata.</p>
   */
  public getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProtectedQueryCommandOutput>;
  public getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    cb: (err: any, data?: GetProtectedQueryCommandOutput) => void
  ): void;
  public getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProtectedQueryCommandOutput) => void
  ): void;
  public getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProtectedQueryCommandOutput) => void),
    cb?: (err: any, data?: GetProtectedQueryCommandOutput) => void
  ): Promise<GetProtectedQueryCommandOutput> | void {
    const command = new GetProtectedQueryCommand(args);
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
   * <p>Retrieves the schema for a relation within a collaboration.</p>
   */
  public getSchema(args: GetSchemaCommandInput, options?: __HttpHandlerOptions): Promise<GetSchemaCommandOutput>;
  public getSchema(args: GetSchemaCommandInput, cb: (err: any, data?: GetSchemaCommandOutput) => void): void;
  public getSchema(
    args: GetSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;
  public getSchema(
    args: GetSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSchemaCommandOutput) => void),
    cb?: (err: any, data?: GetSchemaCommandOutput) => void
  ): Promise<GetSchemaCommandOutput> | void {
    const command = new GetSchemaCommand(args);
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
   * <p>Retrieves a schema analysis rule.</p>
   */
  public getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaAnalysisRuleCommandOutput>;
  public getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    cb: (err: any, data?: GetSchemaAnalysisRuleCommandOutput) => void
  ): void;
  public getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaAnalysisRuleCommandOutput) => void
  ): void;
  public getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSchemaAnalysisRuleCommandOutput) => void),
    cb?: (err: any, data?: GetSchemaAnalysisRuleCommandOutput) => void
  ): Promise<GetSchemaAnalysisRuleCommandOutput> | void {
    const command = new GetSchemaAnalysisRuleCommand(args);
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
   * <p>Lists collaborations the caller owns, is active in, or has been invited to.</p>
   */
  public listCollaborations(
    args: ListCollaborationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationsCommandOutput>;
  public listCollaborations(
    args: ListCollaborationsCommandInput,
    cb: (err: any, data?: ListCollaborationsCommandOutput) => void
  ): void;
  public listCollaborations(
    args: ListCollaborationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationsCommandOutput) => void
  ): void;
  public listCollaborations(
    args: ListCollaborationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCollaborationsCommandOutput) => void),
    cb?: (err: any, data?: ListCollaborationsCommandOutput) => void
  ): Promise<ListCollaborationsCommandOutput> | void {
    const command = new ListCollaborationsCommand(args);
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
   * <p>Lists configured table associations for a membership.</p>
   */
  public listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfiguredTableAssociationsCommandOutput>;
  public listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    cb: (err: any, data?: ListConfiguredTableAssociationsCommandOutput) => void
  ): void;
  public listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfiguredTableAssociationsCommandOutput) => void
  ): void;
  public listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfiguredTableAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListConfiguredTableAssociationsCommandOutput) => void
  ): Promise<ListConfiguredTableAssociationsCommandOutput> | void {
    const command = new ListConfiguredTableAssociationsCommand(args);
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
   * <p>Lists configured tables.</p>
   */
  public listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfiguredTablesCommandOutput>;
  public listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    cb: (err: any, data?: ListConfiguredTablesCommandOutput) => void
  ): void;
  public listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfiguredTablesCommandOutput) => void
  ): void;
  public listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfiguredTablesCommandOutput) => void),
    cb?: (err: any, data?: ListConfiguredTablesCommandOutput) => void
  ): Promise<ListConfiguredTablesCommandOutput> | void {
    const command = new ListConfiguredTablesCommand(args);
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
   * <p>Lists all members within a collaboration.</p>
   */
  public listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  public listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  public listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  public listMembers(
    args: ListMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMembersCommandOutput) => void),
    cb?: (err: any, data?: ListMembersCommandOutput) => void
  ): Promise<ListMembersCommandOutput> | void {
    const command = new ListMembersCommand(args);
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
   * <p>Lists all memberships resources within the caller's account.</p>
   */
  public listMemberships(
    args: ListMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembershipsCommandOutput>;
  public listMemberships(
    args: ListMembershipsCommandInput,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;
  public listMemberships(
    args: ListMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;
  public listMemberships(
    args: ListMembershipsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMembershipsCommandOutput) => void),
    cb?: (err: any, data?: ListMembershipsCommandOutput) => void
  ): Promise<ListMembershipsCommandOutput> | void {
    const command = new ListMembershipsCommand(args);
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
   * <p>Lists protected queries, sorted by the most recent query.</p>
   */
  public listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectedQueriesCommandOutput>;
  public listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    cb: (err: any, data?: ListProtectedQueriesCommandOutput) => void
  ): void;
  public listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectedQueriesCommandOutput) => void
  ): void;
  public listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProtectedQueriesCommandOutput) => void),
    cb?: (err: any, data?: ListProtectedQueriesCommandOutput) => void
  ): Promise<ListProtectedQueriesCommandOutput> | void {
    const command = new ListProtectedQueriesCommand(args);
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
   * <p>Lists the schemas for relations within a collaboration.</p>
   */
  public listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  public listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchemasCommandOutput) => void),
    cb?: (err: any, data?: ListSchemasCommandOutput) => void
  ): Promise<ListSchemasCommandOutput> | void {
    const command = new ListSchemasCommand(args);
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
   * <p>Creates a protected query that is started by AWS Clean Rooms.</p>
   */
  public startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProtectedQueryCommandOutput>;
  public startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    cb: (err: any, data?: StartProtectedQueryCommandOutput) => void
  ): void;
  public startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProtectedQueryCommandOutput) => void
  ): void;
  public startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartProtectedQueryCommandOutput) => void),
    cb?: (err: any, data?: StartProtectedQueryCommandOutput) => void
  ): Promise<StartProtectedQueryCommandOutput> | void {
    const command = new StartProtectedQueryCommand(args);
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
   * <p>Updates collaboration metadata and can only be called by the collaboration owner.</p>
   */
  public updateCollaboration(
    args: UpdateCollaborationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCollaborationCommandOutput>;
  public updateCollaboration(
    args: UpdateCollaborationCommandInput,
    cb: (err: any, data?: UpdateCollaborationCommandOutput) => void
  ): void;
  public updateCollaboration(
    args: UpdateCollaborationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCollaborationCommandOutput) => void
  ): void;
  public updateCollaboration(
    args: UpdateCollaborationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCollaborationCommandOutput) => void),
    cb?: (err: any, data?: UpdateCollaborationCommandOutput) => void
  ): Promise<UpdateCollaborationCommandOutput> | void {
    const command = new UpdateCollaborationCommand(args);
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
   * <p>Updates a configured table.</p>
   */
  public updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredTableCommandOutput>;
  public updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableCommandOutput) => void
  ): void;
  public updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredTableCommandOutput) => void
  ): void;
  public updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfiguredTableCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfiguredTableCommandOutput) => void
  ): Promise<UpdateConfiguredTableCommandOutput> | void {
    const command = new UpdateConfiguredTableCommand(args);
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
   * <p>Updates a configured table analysis rule.</p>
   */
  public updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput>;
  public updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  public updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  public updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfiguredTableAnalysisRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfiguredTableAnalysisRuleCommandOutput) => void
  ): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput> | void {
    const command = new UpdateConfiguredTableAnalysisRuleCommand(args);
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
   * <p>Updates a configured table association.</p>
   */
  public updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredTableAssociationCommandOutput>;
  public updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableAssociationCommandOutput) => void
  ): void;
  public updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredTableAssociationCommandOutput) => void
  ): void;
  public updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfiguredTableAssociationCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfiguredTableAssociationCommandOutput) => void
  ): Promise<UpdateConfiguredTableAssociationCommandOutput> | void {
    const command = new UpdateConfiguredTableAssociationCommand(args);
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
   * <p>Updates a membership.</p>
   */
  public updateMembership(
    args: UpdateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMembershipCommandOutput>;
  public updateMembership(
    args: UpdateMembershipCommandInput,
    cb: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): void;
  public updateMembership(
    args: UpdateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): void;
  public updateMembership(
    args: UpdateMembershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMembershipCommandOutput) => void),
    cb?: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): Promise<UpdateMembershipCommandOutput> | void {
    const command = new UpdateMembershipCommand(args);
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
   * <p>Updates the processing of a currently running query.</p>
   */
  public updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProtectedQueryCommandOutput>;
  public updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    cb: (err: any, data?: UpdateProtectedQueryCommandOutput) => void
  ): void;
  public updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProtectedQueryCommandOutput) => void
  ): void;
  public updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProtectedQueryCommandOutput) => void),
    cb?: (err: any, data?: UpdateProtectedQueryCommandOutput) => void
  ): Promise<UpdateProtectedQueryCommandOutput> | void {
    const command = new UpdateProtectedQueryCommand(args);
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
