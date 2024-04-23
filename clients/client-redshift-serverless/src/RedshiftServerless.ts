// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ConvertRecoveryPointToSnapshotCommand,
  ConvertRecoveryPointToSnapshotCommandInput,
  ConvertRecoveryPointToSnapshotCommandOutput,
} from "./commands/ConvertRecoveryPointToSnapshotCommand";
import {
  CreateCustomDomainAssociationCommand,
  CreateCustomDomainAssociationCommandInput,
  CreateCustomDomainAssociationCommandOutput,
} from "./commands/CreateCustomDomainAssociationCommand";
import {
  CreateEndpointAccessCommand,
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import {
  CreateNamespaceCommand,
  CreateNamespaceCommandInput,
  CreateNamespaceCommandOutput,
} from "./commands/CreateNamespaceCommand";
import {
  CreateScheduledActionCommand,
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
} from "./commands/CreateScheduledActionCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  CreateSnapshotCopyConfigurationCommand,
  CreateSnapshotCopyConfigurationCommandInput,
  CreateSnapshotCopyConfigurationCommandOutput,
} from "./commands/CreateSnapshotCopyConfigurationCommand";
import {
  CreateUsageLimitCommand,
  CreateUsageLimitCommandInput,
  CreateUsageLimitCommandOutput,
} from "./commands/CreateUsageLimitCommand";
import {
  CreateWorkgroupCommand,
  CreateWorkgroupCommandInput,
  CreateWorkgroupCommandOutput,
} from "./commands/CreateWorkgroupCommand";
import {
  DeleteCustomDomainAssociationCommand,
  DeleteCustomDomainAssociationCommandInput,
  DeleteCustomDomainAssociationCommandOutput,
} from "./commands/DeleteCustomDomainAssociationCommand";
import {
  DeleteEndpointAccessCommand,
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import {
  DeleteNamespaceCommand,
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput,
} from "./commands/DeleteNamespaceCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteScheduledActionCommand,
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import {
  DeleteSnapshotCopyConfigurationCommand,
  DeleteSnapshotCopyConfigurationCommandInput,
  DeleteSnapshotCopyConfigurationCommandOutput,
} from "./commands/DeleteSnapshotCopyConfigurationCommand";
import {
  DeleteUsageLimitCommand,
  DeleteUsageLimitCommandInput,
  DeleteUsageLimitCommandOutput,
} from "./commands/DeleteUsageLimitCommand";
import {
  DeleteWorkgroupCommand,
  DeleteWorkgroupCommandInput,
  DeleteWorkgroupCommandOutput,
} from "./commands/DeleteWorkgroupCommand";
import {
  GetCredentialsCommand,
  GetCredentialsCommandInput,
  GetCredentialsCommandOutput,
} from "./commands/GetCredentialsCommand";
import {
  GetCustomDomainAssociationCommand,
  GetCustomDomainAssociationCommandInput,
  GetCustomDomainAssociationCommandOutput,
} from "./commands/GetCustomDomainAssociationCommand";
import {
  GetEndpointAccessCommand,
  GetEndpointAccessCommandInput,
  GetEndpointAccessCommandOutput,
} from "./commands/GetEndpointAccessCommand";
import {
  GetNamespaceCommand,
  GetNamespaceCommandInput,
  GetNamespaceCommandOutput,
} from "./commands/GetNamespaceCommand";
import {
  GetRecoveryPointCommand,
  GetRecoveryPointCommandInput,
  GetRecoveryPointCommandOutput,
} from "./commands/GetRecoveryPointCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  GetScheduledActionCommand,
  GetScheduledActionCommandInput,
  GetScheduledActionCommandOutput,
} from "./commands/GetScheduledActionCommand";
import { GetSnapshotCommand, GetSnapshotCommandInput, GetSnapshotCommandOutput } from "./commands/GetSnapshotCommand";
import {
  GetTableRestoreStatusCommand,
  GetTableRestoreStatusCommandInput,
  GetTableRestoreStatusCommandOutput,
} from "./commands/GetTableRestoreStatusCommand";
import {
  GetUsageLimitCommand,
  GetUsageLimitCommandInput,
  GetUsageLimitCommandOutput,
} from "./commands/GetUsageLimitCommand";
import {
  GetWorkgroupCommand,
  GetWorkgroupCommandInput,
  GetWorkgroupCommandOutput,
} from "./commands/GetWorkgroupCommand";
import {
  ListCustomDomainAssociationsCommand,
  ListCustomDomainAssociationsCommandInput,
  ListCustomDomainAssociationsCommandOutput,
} from "./commands/ListCustomDomainAssociationsCommand";
import {
  ListEndpointAccessCommand,
  ListEndpointAccessCommandInput,
  ListEndpointAccessCommandOutput,
} from "./commands/ListEndpointAccessCommand";
import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "./commands/ListNamespacesCommand";
import {
  ListRecoveryPointsCommand,
  ListRecoveryPointsCommandInput,
  ListRecoveryPointsCommandOutput,
} from "./commands/ListRecoveryPointsCommand";
import {
  ListScheduledActionsCommand,
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "./commands/ListScheduledActionsCommand";
import {
  ListSnapshotCopyConfigurationsCommand,
  ListSnapshotCopyConfigurationsCommandInput,
  ListSnapshotCopyConfigurationsCommandOutput,
} from "./commands/ListSnapshotCopyConfigurationsCommand";
import {
  ListSnapshotsCommand,
  ListSnapshotsCommandInput,
  ListSnapshotsCommandOutput,
} from "./commands/ListSnapshotsCommand";
import {
  ListTableRestoreStatusCommand,
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
} from "./commands/ListTableRestoreStatusCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListUsageLimitsCommand,
  ListUsageLimitsCommandInput,
  ListUsageLimitsCommandOutput,
} from "./commands/ListUsageLimitsCommand";
import {
  ListWorkgroupsCommand,
  ListWorkgroupsCommandInput,
  ListWorkgroupsCommandOutput,
} from "./commands/ListWorkgroupsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RestoreFromRecoveryPointCommand,
  RestoreFromRecoveryPointCommandInput,
  RestoreFromRecoveryPointCommandOutput,
} from "./commands/RestoreFromRecoveryPointCommand";
import {
  RestoreFromSnapshotCommand,
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import {
  RestoreTableFromRecoveryPointCommand,
  RestoreTableFromRecoveryPointCommandInput,
  RestoreTableFromRecoveryPointCommandOutput,
} from "./commands/RestoreTableFromRecoveryPointCommand";
import {
  RestoreTableFromSnapshotCommand,
  RestoreTableFromSnapshotCommandInput,
  RestoreTableFromSnapshotCommandOutput,
} from "./commands/RestoreTableFromSnapshotCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCustomDomainAssociationCommand,
  UpdateCustomDomainAssociationCommandInput,
  UpdateCustomDomainAssociationCommandOutput,
} from "./commands/UpdateCustomDomainAssociationCommand";
import {
  UpdateEndpointAccessCommand,
  UpdateEndpointAccessCommandInput,
  UpdateEndpointAccessCommandOutput,
} from "./commands/UpdateEndpointAccessCommand";
import {
  UpdateNamespaceCommand,
  UpdateNamespaceCommandInput,
  UpdateNamespaceCommandOutput,
} from "./commands/UpdateNamespaceCommand";
import {
  UpdateScheduledActionCommand,
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
} from "./commands/UpdateScheduledActionCommand";
import {
  UpdateSnapshotCommand,
  UpdateSnapshotCommandInput,
  UpdateSnapshotCommandOutput,
} from "./commands/UpdateSnapshotCommand";
import {
  UpdateSnapshotCopyConfigurationCommand,
  UpdateSnapshotCopyConfigurationCommandInput,
  UpdateSnapshotCopyConfigurationCommandOutput,
} from "./commands/UpdateSnapshotCopyConfigurationCommand";
import {
  UpdateUsageLimitCommand,
  UpdateUsageLimitCommandInput,
  UpdateUsageLimitCommandOutput,
} from "./commands/UpdateUsageLimitCommand";
import {
  UpdateWorkgroupCommand,
  UpdateWorkgroupCommandInput,
  UpdateWorkgroupCommandOutput,
} from "./commands/UpdateWorkgroupCommand";
import { RedshiftServerlessClient, RedshiftServerlessClientConfig } from "./RedshiftServerlessClient";

const commands = {
  ConvertRecoveryPointToSnapshotCommand,
  CreateCustomDomainAssociationCommand,
  CreateEndpointAccessCommand,
  CreateNamespaceCommand,
  CreateScheduledActionCommand,
  CreateSnapshotCommand,
  CreateSnapshotCopyConfigurationCommand,
  CreateUsageLimitCommand,
  CreateWorkgroupCommand,
  DeleteCustomDomainAssociationCommand,
  DeleteEndpointAccessCommand,
  DeleteNamespaceCommand,
  DeleteResourcePolicyCommand,
  DeleteScheduledActionCommand,
  DeleteSnapshotCommand,
  DeleteSnapshotCopyConfigurationCommand,
  DeleteUsageLimitCommand,
  DeleteWorkgroupCommand,
  GetCredentialsCommand,
  GetCustomDomainAssociationCommand,
  GetEndpointAccessCommand,
  GetNamespaceCommand,
  GetRecoveryPointCommand,
  GetResourcePolicyCommand,
  GetScheduledActionCommand,
  GetSnapshotCommand,
  GetTableRestoreStatusCommand,
  GetUsageLimitCommand,
  GetWorkgroupCommand,
  ListCustomDomainAssociationsCommand,
  ListEndpointAccessCommand,
  ListNamespacesCommand,
  ListRecoveryPointsCommand,
  ListScheduledActionsCommand,
  ListSnapshotCopyConfigurationsCommand,
  ListSnapshotsCommand,
  ListTableRestoreStatusCommand,
  ListTagsForResourceCommand,
  ListUsageLimitsCommand,
  ListWorkgroupsCommand,
  PutResourcePolicyCommand,
  RestoreFromRecoveryPointCommand,
  RestoreFromSnapshotCommand,
  RestoreTableFromRecoveryPointCommand,
  RestoreTableFromSnapshotCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCustomDomainAssociationCommand,
  UpdateEndpointAccessCommand,
  UpdateNamespaceCommand,
  UpdateScheduledActionCommand,
  UpdateSnapshotCommand,
  UpdateSnapshotCopyConfigurationCommand,
  UpdateUsageLimitCommand,
  UpdateWorkgroupCommand,
};

export interface RedshiftServerless {
  /**
   * @see {@link ConvertRecoveryPointToSnapshotCommand}
   */
  convertRecoveryPointToSnapshot(
    args: ConvertRecoveryPointToSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConvertRecoveryPointToSnapshotCommandOutput>;
  convertRecoveryPointToSnapshot(
    args: ConvertRecoveryPointToSnapshotCommandInput,
    cb: (err: any, data?: ConvertRecoveryPointToSnapshotCommandOutput) => void
  ): void;
  convertRecoveryPointToSnapshot(
    args: ConvertRecoveryPointToSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConvertRecoveryPointToSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomDomainAssociationCommand}
   */
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomDomainAssociationCommandOutput>;
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    cb: (err: any, data?: CreateCustomDomainAssociationCommandOutput) => void
  ): void;
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEndpointAccessCommand}
   */
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointAccessCommandOutput>;
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNamespaceCommand}
   */
  createNamespace(
    args: CreateNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNamespaceCommandOutput>;
  createNamespace(args: CreateNamespaceCommandInput, cb: (err: any, data?: CreateNamespaceCommandOutput) => void): void;
  createNamespace(
    args: CreateNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduledActionCommand}
   */
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledActionCommandOutput>;
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    cb: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): void;
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCopyConfigurationCommand}
   */
  createSnapshotCopyConfiguration(
    args: CreateSnapshotCopyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCopyConfigurationCommandOutput>;
  createSnapshotCopyConfiguration(
    args: CreateSnapshotCopyConfigurationCommandInput,
    cb: (err: any, data?: CreateSnapshotCopyConfigurationCommandOutput) => void
  ): void;
  createSnapshotCopyConfiguration(
    args: CreateSnapshotCopyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCopyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsageLimitCommand}
   */
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsageLimitCommandOutput>;
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkgroupCommand}
   */
  createWorkgroup(
    args: CreateWorkgroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkgroupCommandOutput>;
  createWorkgroup(args: CreateWorkgroupCommandInput, cb: (err: any, data?: CreateWorkgroupCommandOutput) => void): void;
  createWorkgroup(
    args: CreateWorkgroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkgroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomDomainAssociationCommand}
   */
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomDomainAssociationCommandOutput>;
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    cb: (err: any, data?: DeleteCustomDomainAssociationCommandOutput) => void
  ): void;
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointAccessCommand}
   */
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointAccessCommandOutput>;
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNamespaceCommand}
   */
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(args: DeleteNamespaceCommandInput, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledActionCommand}
   */
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledActionCommandOutput>;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  deleteSnapshot(args: DeleteSnapshotCommandInput, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotCopyConfigurationCommand}
   */
  deleteSnapshotCopyConfiguration(
    args: DeleteSnapshotCopyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCopyConfigurationCommandOutput>;
  deleteSnapshotCopyConfiguration(
    args: DeleteSnapshotCopyConfigurationCommandInput,
    cb: (err: any, data?: DeleteSnapshotCopyConfigurationCommandOutput) => void
  ): void;
  deleteSnapshotCopyConfiguration(
    args: DeleteSnapshotCopyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCopyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsageLimitCommand}
   */
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsageLimitCommandOutput>;
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkgroupCommand}
   */
  deleteWorkgroup(
    args: DeleteWorkgroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkgroupCommandOutput>;
  deleteWorkgroup(args: DeleteWorkgroupCommandInput, cb: (err: any, data?: DeleteWorkgroupCommandOutput) => void): void;
  deleteWorkgroup(
    args: DeleteWorkgroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkgroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCredentialsCommand}
   */
  getCredentials(
    args: GetCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCredentialsCommandOutput>;
  getCredentials(args: GetCredentialsCommandInput, cb: (err: any, data?: GetCredentialsCommandOutput) => void): void;
  getCredentials(
    args: GetCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomDomainAssociationCommand}
   */
  getCustomDomainAssociation(
    args: GetCustomDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomDomainAssociationCommandOutput>;
  getCustomDomainAssociation(
    args: GetCustomDomainAssociationCommandInput,
    cb: (err: any, data?: GetCustomDomainAssociationCommandOutput) => void
  ): void;
  getCustomDomainAssociation(
    args: GetCustomDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEndpointAccessCommand}
   */
  getEndpointAccess(
    args: GetEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEndpointAccessCommandOutput>;
  getEndpointAccess(
    args: GetEndpointAccessCommandInput,
    cb: (err: any, data?: GetEndpointAccessCommandOutput) => void
  ): void;
  getEndpointAccess(
    args: GetEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNamespaceCommand}
   */
  getNamespace(args: GetNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<GetNamespaceCommandOutput>;
  getNamespace(args: GetNamespaceCommandInput, cb: (err: any, data?: GetNamespaceCommandOutput) => void): void;
  getNamespace(
    args: GetNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryPointCommand}
   */
  getRecoveryPoint(
    args: GetRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryPointCommandOutput>;
  getRecoveryPoint(
    args: GetRecoveryPointCommandInput,
    cb: (err: any, data?: GetRecoveryPointCommandOutput) => void
  ): void;
  getRecoveryPoint(
    args: GetRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryPointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduledActionCommand}
   */
  getScheduledAction(
    args: GetScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScheduledActionCommandOutput>;
  getScheduledAction(
    args: GetScheduledActionCommandInput,
    cb: (err: any, data?: GetScheduledActionCommandOutput) => void
  ): void;
  getScheduledAction(
    args: GetScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnapshotCommand}
   */
  getSnapshot(args: GetSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetSnapshotCommandOutput>;
  getSnapshot(args: GetSnapshotCommandInput, cb: (err: any, data?: GetSnapshotCommandOutput) => void): void;
  getSnapshot(
    args: GetSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableRestoreStatusCommand}
   */
  getTableRestoreStatus(
    args: GetTableRestoreStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableRestoreStatusCommandOutput>;
  getTableRestoreStatus(
    args: GetTableRestoreStatusCommandInput,
    cb: (err: any, data?: GetTableRestoreStatusCommandOutput) => void
  ): void;
  getTableRestoreStatus(
    args: GetTableRestoreStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableRestoreStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageLimitCommand}
   */
  getUsageLimit(args: GetUsageLimitCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageLimitCommandOutput>;
  getUsageLimit(args: GetUsageLimitCommandInput, cb: (err: any, data?: GetUsageLimitCommandOutput) => void): void;
  getUsageLimit(
    args: GetUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkgroupCommand}
   */
  getWorkgroup(args: GetWorkgroupCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkgroupCommandOutput>;
  getWorkgroup(args: GetWorkgroupCommandInput, cb: (err: any, data?: GetWorkgroupCommandOutput) => void): void;
  getWorkgroup(
    args: GetWorkgroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkgroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomDomainAssociationsCommand}
   */
  listCustomDomainAssociations(
    args: ListCustomDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomDomainAssociationsCommandOutput>;
  listCustomDomainAssociations(
    args: ListCustomDomainAssociationsCommandInput,
    cb: (err: any, data?: ListCustomDomainAssociationsCommandOutput) => void
  ): void;
  listCustomDomainAssociations(
    args: ListCustomDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomDomainAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointAccessCommand}
   */
  listEndpointAccess(
    args: ListEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointAccessCommandOutput>;
  listEndpointAccess(
    args: ListEndpointAccessCommandInput,
    cb: (err: any, data?: ListEndpointAccessCommandOutput) => void
  ): void;
  listEndpointAccess(
    args: ListEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamespacesCommand}
   */
  listNamespaces(
    args: ListNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamespacesCommandOutput>;
  listNamespaces(args: ListNamespacesCommandInput, cb: (err: any, data?: ListNamespacesCommandOutput) => void): void;
  listNamespaces(
    args: ListNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryPointsCommand}
   */
  listRecoveryPoints(
    args: ListRecoveryPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryPointsCommandOutput>;
  listRecoveryPoints(
    args: ListRecoveryPointsCommandInput,
    cb: (err: any, data?: ListRecoveryPointsCommandOutput) => void
  ): void;
  listRecoveryPoints(
    args: ListRecoveryPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduledActionsCommand}
   */
  listScheduledActions(
    args: ListScheduledActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduledActionsCommandOutput>;
  listScheduledActions(
    args: ListScheduledActionsCommandInput,
    cb: (err: any, data?: ListScheduledActionsCommandOutput) => void
  ): void;
  listScheduledActions(
    args: ListScheduledActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduledActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSnapshotCopyConfigurationsCommand}
   */
  listSnapshotCopyConfigurations(
    args: ListSnapshotCopyConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSnapshotCopyConfigurationsCommandOutput>;
  listSnapshotCopyConfigurations(
    args: ListSnapshotCopyConfigurationsCommandInput,
    cb: (err: any, data?: ListSnapshotCopyConfigurationsCommandOutput) => void
  ): void;
  listSnapshotCopyConfigurations(
    args: ListSnapshotCopyConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSnapshotCopyConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSnapshotsCommand}
   */
  listSnapshots(args: ListSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<ListSnapshotsCommandOutput>;
  listSnapshots(args: ListSnapshotsCommandInput, cb: (err: any, data?: ListSnapshotsCommandOutput) => void): void;
  listSnapshots(
    args: ListSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableRestoreStatusCommand}
   */
  listTableRestoreStatus(
    args: ListTableRestoreStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableRestoreStatusCommandOutput>;
  listTableRestoreStatus(
    args: ListTableRestoreStatusCommandInput,
    cb: (err: any, data?: ListTableRestoreStatusCommandOutput) => void
  ): void;
  listTableRestoreStatus(
    args: ListTableRestoreStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableRestoreStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsageLimitsCommand}
   */
  listUsageLimits(
    args: ListUsageLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageLimitsCommandOutput>;
  listUsageLimits(args: ListUsageLimitsCommandInput, cb: (err: any, data?: ListUsageLimitsCommandOutput) => void): void;
  listUsageLimits(
    args: ListUsageLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsageLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkgroupsCommand}
   */
  listWorkgroups(
    args: ListWorkgroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkgroupsCommandOutput>;
  listWorkgroups(args: ListWorkgroupsCommandInput, cb: (err: any, data?: ListWorkgroupsCommandOutput) => void): void;
  listWorkgroups(
    args: ListWorkgroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkgroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreFromRecoveryPointCommand}
   */
  restoreFromRecoveryPoint(
    args: RestoreFromRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreFromRecoveryPointCommandOutput>;
  restoreFromRecoveryPoint(
    args: RestoreFromRecoveryPointCommandInput,
    cb: (err: any, data?: RestoreFromRecoveryPointCommandOutput) => void
  ): void;
  restoreFromRecoveryPoint(
    args: RestoreFromRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreFromRecoveryPointCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreFromSnapshotCommand}
   */
  restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreFromSnapshotCommandOutput>;
  restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreFromSnapshotCommandOutput) => void
  ): void;
  restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreTableFromRecoveryPointCommand}
   */
  restoreTableFromRecoveryPoint(
    args: RestoreTableFromRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableFromRecoveryPointCommandOutput>;
  restoreTableFromRecoveryPoint(
    args: RestoreTableFromRecoveryPointCommandInput,
    cb: (err: any, data?: RestoreTableFromRecoveryPointCommandOutput) => void
  ): void;
  restoreTableFromRecoveryPoint(
    args: RestoreTableFromRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableFromRecoveryPointCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreTableFromSnapshotCommand}
   */
  restoreTableFromSnapshot(
    args: RestoreTableFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableFromSnapshotCommandOutput>;
  restoreTableFromSnapshot(
    args: RestoreTableFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreTableFromSnapshotCommandOutput) => void
  ): void;
  restoreTableFromSnapshot(
    args: RestoreTableFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomDomainAssociationCommand}
   */
  updateCustomDomainAssociation(
    args: UpdateCustomDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomDomainAssociationCommandOutput>;
  updateCustomDomainAssociation(
    args: UpdateCustomDomainAssociationCommandInput,
    cb: (err: any, data?: UpdateCustomDomainAssociationCommandOutput) => void
  ): void;
  updateCustomDomainAssociation(
    args: UpdateCustomDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEndpointAccessCommand}
   */
  updateEndpointAccess(
    args: UpdateEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointAccessCommandOutput>;
  updateEndpointAccess(
    args: UpdateEndpointAccessCommandInput,
    cb: (err: any, data?: UpdateEndpointAccessCommandOutput) => void
  ): void;
  updateEndpointAccess(
    args: UpdateEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNamespaceCommand}
   */
  updateNamespace(
    args: UpdateNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNamespaceCommandOutput>;
  updateNamespace(args: UpdateNamespaceCommandInput, cb: (err: any, data?: UpdateNamespaceCommandOutput) => void): void;
  updateNamespace(
    args: UpdateNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduledActionCommand}
   */
  updateScheduledAction(
    args: UpdateScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduledActionCommandOutput>;
  updateScheduledAction(
    args: UpdateScheduledActionCommandInput,
    cb: (err: any, data?: UpdateScheduledActionCommandOutput) => void
  ): void;
  updateScheduledAction(
    args: UpdateScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSnapshotCommand}
   */
  updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotCommandOutput>;
  updateSnapshot(args: UpdateSnapshotCommandInput, cb: (err: any, data?: UpdateSnapshotCommandOutput) => void): void;
  updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSnapshotCopyConfigurationCommand}
   */
  updateSnapshotCopyConfiguration(
    args: UpdateSnapshotCopyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotCopyConfigurationCommandOutput>;
  updateSnapshotCopyConfiguration(
    args: UpdateSnapshotCopyConfigurationCommandInput,
    cb: (err: any, data?: UpdateSnapshotCopyConfigurationCommandOutput) => void
  ): void;
  updateSnapshotCopyConfiguration(
    args: UpdateSnapshotCopyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSnapshotCopyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUsageLimitCommand}
   */
  updateUsageLimit(
    args: UpdateUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUsageLimitCommandOutput>;
  updateUsageLimit(
    args: UpdateUsageLimitCommandInput,
    cb: (err: any, data?: UpdateUsageLimitCommandOutput) => void
  ): void;
  updateUsageLimit(
    args: UpdateUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkgroupCommand}
   */
  updateWorkgroup(
    args: UpdateWorkgroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkgroupCommandOutput>;
  updateWorkgroup(args: UpdateWorkgroupCommandInput, cb: (err: any, data?: UpdateWorkgroupCommandOutput) => void): void;
  updateWorkgroup(
    args: UpdateWorkgroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkgroupCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is an interface reference for Amazon Redshift Serverless.
 *            It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless.
 *         </p>
 *         <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the
 *            underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high
 *            performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you
 *            focus on using your data to acquire new insights for your business and customers.
 *         </p>
 *         <p>
 *            To learn more about Amazon Redshift Serverless,
 *            see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless</a>.
 *         </p>
 */
export class RedshiftServerless extends RedshiftServerlessClient implements RedshiftServerless {}
createAggregatedClient(commands, RedshiftServerless);
