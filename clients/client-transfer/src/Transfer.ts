// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type CreateAccessCommandInput,
  type CreateAccessCommandOutput,
  CreateAccessCommand,
} from "./commands/CreateAccessCommand";
import {
  type CreateAgreementCommandInput,
  type CreateAgreementCommandOutput,
  CreateAgreementCommand,
} from "./commands/CreateAgreementCommand";
import {
  type CreateConnectorCommandInput,
  type CreateConnectorCommandOutput,
  CreateConnectorCommand,
} from "./commands/CreateConnectorCommand";
import {
  type CreateProfileCommandInput,
  type CreateProfileCommandOutput,
  CreateProfileCommand,
} from "./commands/CreateProfileCommand";
import {
  type CreateServerCommandInput,
  type CreateServerCommandOutput,
  CreateServerCommand,
} from "./commands/CreateServerCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type CreateWebAppCommandInput,
  type CreateWebAppCommandOutput,
  CreateWebAppCommand,
} from "./commands/CreateWebAppCommand";
import {
  type CreateWorkflowCommandInput,
  type CreateWorkflowCommandOutput,
  CreateWorkflowCommand,
} from "./commands/CreateWorkflowCommand";
import {
  type DeleteAccessCommandInput,
  type DeleteAccessCommandOutput,
  DeleteAccessCommand,
} from "./commands/DeleteAccessCommand";
import {
  type DeleteAgreementCommandInput,
  type DeleteAgreementCommandOutput,
  DeleteAgreementCommand,
} from "./commands/DeleteAgreementCommand";
import {
  type DeleteCertificateCommandInput,
  type DeleteCertificateCommandOutput,
  DeleteCertificateCommand,
} from "./commands/DeleteCertificateCommand";
import {
  type DeleteConnectorCommandInput,
  type DeleteConnectorCommandOutput,
  DeleteConnectorCommand,
} from "./commands/DeleteConnectorCommand";
import {
  type DeleteHostKeyCommandInput,
  type DeleteHostKeyCommandOutput,
  DeleteHostKeyCommand,
} from "./commands/DeleteHostKeyCommand";
import {
  type DeleteProfileCommandInput,
  type DeleteProfileCommandOutput,
  DeleteProfileCommand,
} from "./commands/DeleteProfileCommand";
import {
  type DeleteServerCommandInput,
  type DeleteServerCommandOutput,
  DeleteServerCommand,
} from "./commands/DeleteServerCommand";
import {
  type DeleteSshPublicKeyCommandInput,
  type DeleteSshPublicKeyCommandOutput,
  DeleteSshPublicKeyCommand,
} from "./commands/DeleteSshPublicKeyCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DeleteWebAppCommandInput,
  type DeleteWebAppCommandOutput,
  DeleteWebAppCommand,
} from "./commands/DeleteWebAppCommand";
import {
  type DeleteWebAppCustomizationCommandInput,
  type DeleteWebAppCustomizationCommandOutput,
  DeleteWebAppCustomizationCommand,
} from "./commands/DeleteWebAppCustomizationCommand";
import {
  type DeleteWorkflowCommandInput,
  type DeleteWorkflowCommandOutput,
  DeleteWorkflowCommand,
} from "./commands/DeleteWorkflowCommand";
import {
  type DescribeAccessCommandInput,
  type DescribeAccessCommandOutput,
  DescribeAccessCommand,
} from "./commands/DescribeAccessCommand";
import {
  type DescribeAgreementCommandInput,
  type DescribeAgreementCommandOutput,
  DescribeAgreementCommand,
} from "./commands/DescribeAgreementCommand";
import {
  type DescribeCertificateCommandInput,
  type DescribeCertificateCommandOutput,
  DescribeCertificateCommand,
} from "./commands/DescribeCertificateCommand";
import {
  type DescribeConnectorCommandInput,
  type DescribeConnectorCommandOutput,
  DescribeConnectorCommand,
} from "./commands/DescribeConnectorCommand";
import {
  type DescribeExecutionCommandInput,
  type DescribeExecutionCommandOutput,
  DescribeExecutionCommand,
} from "./commands/DescribeExecutionCommand";
import {
  type DescribeHostKeyCommandInput,
  type DescribeHostKeyCommandOutput,
  DescribeHostKeyCommand,
} from "./commands/DescribeHostKeyCommand";
import {
  type DescribeProfileCommandInput,
  type DescribeProfileCommandOutput,
  DescribeProfileCommand,
} from "./commands/DescribeProfileCommand";
import {
  type DescribeSecurityPolicyCommandInput,
  type DescribeSecurityPolicyCommandOutput,
  DescribeSecurityPolicyCommand,
} from "./commands/DescribeSecurityPolicyCommand";
import {
  type DescribeServerCommandInput,
  type DescribeServerCommandOutput,
  DescribeServerCommand,
} from "./commands/DescribeServerCommand";
import {
  type DescribeUserCommandInput,
  type DescribeUserCommandOutput,
  DescribeUserCommand,
} from "./commands/DescribeUserCommand";
import {
  type DescribeWebAppCommandInput,
  type DescribeWebAppCommandOutput,
  DescribeWebAppCommand,
} from "./commands/DescribeWebAppCommand";
import {
  type DescribeWebAppCustomizationCommandInput,
  type DescribeWebAppCustomizationCommandOutput,
  DescribeWebAppCustomizationCommand,
} from "./commands/DescribeWebAppCustomizationCommand";
import {
  type DescribeWorkflowCommandInput,
  type DescribeWorkflowCommandOutput,
  DescribeWorkflowCommand,
} from "./commands/DescribeWorkflowCommand";
import {
  type ImportCertificateCommandInput,
  type ImportCertificateCommandOutput,
  ImportCertificateCommand,
} from "./commands/ImportCertificateCommand";
import {
  type ImportHostKeyCommandInput,
  type ImportHostKeyCommandOutput,
  ImportHostKeyCommand,
} from "./commands/ImportHostKeyCommand";
import {
  type ImportSshPublicKeyCommandInput,
  type ImportSshPublicKeyCommandOutput,
  ImportSshPublicKeyCommand,
} from "./commands/ImportSshPublicKeyCommand";
import {
  type ListAccessesCommandInput,
  type ListAccessesCommandOutput,
  ListAccessesCommand,
} from "./commands/ListAccessesCommand";
import {
  type ListAgreementsCommandInput,
  type ListAgreementsCommandOutput,
  ListAgreementsCommand,
} from "./commands/ListAgreementsCommand";
import {
  type ListCertificatesCommandInput,
  type ListCertificatesCommandOutput,
  ListCertificatesCommand,
} from "./commands/ListCertificatesCommand";
import {
  type ListConnectorsCommandInput,
  type ListConnectorsCommandOutput,
  ListConnectorsCommand,
} from "./commands/ListConnectorsCommand";
import {
  type ListExecutionsCommandInput,
  type ListExecutionsCommandOutput,
  ListExecutionsCommand,
} from "./commands/ListExecutionsCommand";
import {
  type ListFileTransferResultsCommandInput,
  type ListFileTransferResultsCommandOutput,
  ListFileTransferResultsCommand,
} from "./commands/ListFileTransferResultsCommand";
import {
  type ListHostKeysCommandInput,
  type ListHostKeysCommandOutput,
  ListHostKeysCommand,
} from "./commands/ListHostKeysCommand";
import {
  type ListProfilesCommandInput,
  type ListProfilesCommandOutput,
  ListProfilesCommand,
} from "./commands/ListProfilesCommand";
import {
  type ListSecurityPoliciesCommandInput,
  type ListSecurityPoliciesCommandOutput,
  ListSecurityPoliciesCommand,
} from "./commands/ListSecurityPoliciesCommand";
import {
  type ListServersCommandInput,
  type ListServersCommandOutput,
  ListServersCommand,
} from "./commands/ListServersCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import {
  type ListWebAppsCommandInput,
  type ListWebAppsCommandOutput,
  ListWebAppsCommand,
} from "./commands/ListWebAppsCommand";
import {
  type ListWorkflowsCommandInput,
  type ListWorkflowsCommandOutput,
  ListWorkflowsCommand,
} from "./commands/ListWorkflowsCommand";
import {
  type SendWorkflowStepStateCommandInput,
  type SendWorkflowStepStateCommandOutput,
  SendWorkflowStepStateCommand,
} from "./commands/SendWorkflowStepStateCommand";
import {
  type StartDirectoryListingCommandInput,
  type StartDirectoryListingCommandOutput,
  StartDirectoryListingCommand,
} from "./commands/StartDirectoryListingCommand";
import {
  type StartFileTransferCommandInput,
  type StartFileTransferCommandOutput,
  StartFileTransferCommand,
} from "./commands/StartFileTransferCommand";
import {
  type StartRemoteDeleteCommandInput,
  type StartRemoteDeleteCommandOutput,
  StartRemoteDeleteCommand,
} from "./commands/StartRemoteDeleteCommand";
import {
  type StartRemoteMoveCommandInput,
  type StartRemoteMoveCommandOutput,
  StartRemoteMoveCommand,
} from "./commands/StartRemoteMoveCommand";
import {
  type StartServerCommandInput,
  type StartServerCommandOutput,
  StartServerCommand,
} from "./commands/StartServerCommand";
import {
  type StopServerCommandInput,
  type StopServerCommandOutput,
  StopServerCommand,
} from "./commands/StopServerCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestConnectionCommandInput,
  type TestConnectionCommandOutput,
  TestConnectionCommand,
} from "./commands/TestConnectionCommand";
import {
  type TestIdentityProviderCommandInput,
  type TestIdentityProviderCommandOutput,
  TestIdentityProviderCommand,
} from "./commands/TestIdentityProviderCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAccessCommandInput,
  type UpdateAccessCommandOutput,
  UpdateAccessCommand,
} from "./commands/UpdateAccessCommand";
import {
  type UpdateAgreementCommandInput,
  type UpdateAgreementCommandOutput,
  UpdateAgreementCommand,
} from "./commands/UpdateAgreementCommand";
import {
  type UpdateCertificateCommandInput,
  type UpdateCertificateCommandOutput,
  UpdateCertificateCommand,
} from "./commands/UpdateCertificateCommand";
import {
  type UpdateConnectorCommandInput,
  type UpdateConnectorCommandOutput,
  UpdateConnectorCommand,
} from "./commands/UpdateConnectorCommand";
import {
  type UpdateHostKeyCommandInput,
  type UpdateHostKeyCommandOutput,
  UpdateHostKeyCommand,
} from "./commands/UpdateHostKeyCommand";
import {
  type UpdateProfileCommandInput,
  type UpdateProfileCommandOutput,
  UpdateProfileCommand,
} from "./commands/UpdateProfileCommand";
import {
  type UpdateServerCommandInput,
  type UpdateServerCommandOutput,
  UpdateServerCommand,
} from "./commands/UpdateServerCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import {
  type UpdateWebAppCommandInput,
  type UpdateWebAppCommandOutput,
  UpdateWebAppCommand,
} from "./commands/UpdateWebAppCommand";
import {
  type UpdateWebAppCustomizationCommandInput,
  type UpdateWebAppCustomizationCommandOutput,
  UpdateWebAppCustomizationCommand,
} from "./commands/UpdateWebAppCustomizationCommand";
import type { TransferServiceException } from "./models/TransferServiceException";
import { paginateListAccesses } from "./pagination/ListAccessesPaginator";
import { paginateListAgreements } from "./pagination/ListAgreementsPaginator";
import { paginateListCertificates } from "./pagination/ListCertificatesPaginator";
import { paginateListConnectors } from "./pagination/ListConnectorsPaginator";
import { paginateListExecutions } from "./pagination/ListExecutionsPaginator";
import { paginateListFileTransferResults } from "./pagination/ListFileTransferResultsPaginator";
import { paginateListProfiles } from "./pagination/ListProfilesPaginator";
import { paginateListSecurityPolicies } from "./pagination/ListSecurityPoliciesPaginator";
import { paginateListServers } from "./pagination/ListServersPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";
import { paginateListWebApps } from "./pagination/ListWebAppsPaginator";
import { paginateListWorkflows } from "./pagination/ListWorkflowsPaginator";
import { TransferClient } from "./TransferClient";
import { waitUntilServerOffline } from "./waiters/waitForServerOffline";
import { waitUntilServerOnline } from "./waiters/waitForServerOnline";

const commands = {
  CreateAccessCommand,
  CreateAgreementCommand,
  CreateConnectorCommand,
  CreateProfileCommand,
  CreateServerCommand,
  CreateUserCommand,
  CreateWebAppCommand,
  CreateWorkflowCommand,
  DeleteAccessCommand,
  DeleteAgreementCommand,
  DeleteCertificateCommand,
  DeleteConnectorCommand,
  DeleteHostKeyCommand,
  DeleteProfileCommand,
  DeleteServerCommand,
  DeleteSshPublicKeyCommand,
  DeleteUserCommand,
  DeleteWebAppCommand,
  DeleteWebAppCustomizationCommand,
  DeleteWorkflowCommand,
  DescribeAccessCommand,
  DescribeAgreementCommand,
  DescribeCertificateCommand,
  DescribeConnectorCommand,
  DescribeExecutionCommand,
  DescribeHostKeyCommand,
  DescribeProfileCommand,
  DescribeSecurityPolicyCommand,
  DescribeServerCommand,
  DescribeUserCommand,
  DescribeWebAppCommand,
  DescribeWebAppCustomizationCommand,
  DescribeWorkflowCommand,
  ImportCertificateCommand,
  ImportHostKeyCommand,
  ImportSshPublicKeyCommand,
  ListAccessesCommand,
  ListAgreementsCommand,
  ListCertificatesCommand,
  ListConnectorsCommand,
  ListExecutionsCommand,
  ListFileTransferResultsCommand,
  ListHostKeysCommand,
  ListProfilesCommand,
  ListSecurityPoliciesCommand,
  ListServersCommand,
  ListTagsForResourceCommand,
  ListUsersCommand,
  ListWebAppsCommand,
  ListWorkflowsCommand,
  SendWorkflowStepStateCommand,
  StartDirectoryListingCommand,
  StartFileTransferCommand,
  StartRemoteDeleteCommand,
  StartRemoteMoveCommand,
  StartServerCommand,
  StopServerCommand,
  TagResourceCommand,
  TestConnectionCommand,
  TestIdentityProviderCommand,
  UntagResourceCommand,
  UpdateAccessCommand,
  UpdateAgreementCommand,
  UpdateCertificateCommand,
  UpdateConnectorCommand,
  UpdateHostKeyCommand,
  UpdateProfileCommand,
  UpdateServerCommand,
  UpdateUserCommand,
  UpdateWebAppCommand,
  UpdateWebAppCustomizationCommand,
};
const paginators = {
  paginateListAccesses,
  paginateListAgreements,
  paginateListCertificates,
  paginateListConnectors,
  paginateListExecutions,
  paginateListFileTransferResults,
  paginateListProfiles,
  paginateListSecurityPolicies,
  paginateListServers,
  paginateListTagsForResource,
  paginateListUsers,
  paginateListWebApps,
  paginateListWorkflows,
};
const waiters = {
  waitUntilServerOffline,
  waitUntilServerOnline,
};

/**
 * @public
 */
export interface TransferRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Transfer {
  /**
   * @see {@link CreateAccessCommand}
   */
  createAccess(
    args: CreateAccessCommandInput,
    options?: TransferRequestOptions
  ): Promise<CreateAccessCommandOutput>;
  createAccess(
    args: CreateAccessCommandInput,
    cb: (err: any, data?: CreateAccessCommandOutput) => void
  ): void;
  createAccess(
    args: CreateAccessCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: CreateAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgreementCommand}
   */
  createAgreement(
    args: CreateAgreementCommandInput,
    options?: TransferRequestOptions
  ): Promise<CreateAgreementCommandOutput>;
  createAgreement(
    args: CreateAgreementCommandInput,
    cb: (err: any, data?: CreateAgreementCommandOutput) => void
  ): void;
  createAgreement(
    args: CreateAgreementCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: CreateAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorCommand}
   */
  createConnector(
    args: CreateConnectorCommandInput,
    options?: TransferRequestOptions
  ): Promise<CreateConnectorCommandOutput>;
  createConnector(
    args: CreateConnectorCommandInput,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;
  createConnector(
    args: CreateConnectorCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(
    args: CreateProfileCommandInput,
    options?: TransferRequestOptions
  ): Promise<CreateProfileCommandOutput>;
  createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServerCommand}
   */
  createServer(): Promise<CreateServerCommandOutput>;
  createServer(
    args: CreateServerCommandInput,
    options?: TransferRequestOptions
  ): Promise<CreateServerCommandOutput>;
  createServer(
    args: CreateServerCommandInput,
    cb: (err: any, data?: CreateServerCommandOutput) => void
  ): void;
  createServer(
    args: CreateServerCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: CreateServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: TransferRequestOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebAppCommand}
   */
  createWebApp(
    args: CreateWebAppCommandInput,
    options?: TransferRequestOptions
  ): Promise<CreateWebAppCommandOutput>;
  createWebApp(
    args: CreateWebAppCommandInput,
    cb: (err: any, data?: CreateWebAppCommandOutput) => void
  ): void;
  createWebApp(
    args: CreateWebAppCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: CreateWebAppCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: TransferRequestOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessCommand}
   */
  deleteAccess(
    args: DeleteAccessCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteAccessCommandOutput>;
  deleteAccess(
    args: DeleteAccessCommandInput,
    cb: (err: any, data?: DeleteAccessCommandOutput) => void
  ): void;
  deleteAccess(
    args: DeleteAccessCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgreementCommand}
   */
  deleteAgreement(
    args: DeleteAgreementCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteAgreementCommandOutput>;
  deleteAgreement(
    args: DeleteAgreementCommandInput,
    cb: (err: any, data?: DeleteAgreementCommandOutput) => void
  ): void;
  deleteAgreement(
    args: DeleteAgreementCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCertificateCommand}
   */
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteCertificateCommandOutput>;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorCommand}
   */
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteConnectorCommandOutput>;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHostKeyCommand}
   */
  deleteHostKey(
    args: DeleteHostKeyCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteHostKeyCommandOutput>;
  deleteHostKey(
    args: DeleteHostKeyCommandInput,
    cb: (err: any, data?: DeleteHostKeyCommandOutput) => void
  ): void;
  deleteHostKey(
    args: DeleteHostKeyCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteHostKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(
    args: DeleteProfileCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteProfileCommandOutput>;
  deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServerCommand}
   */
  deleteServer(
    args: DeleteServerCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteServerCommandOutput>;
  deleteServer(
    args: DeleteServerCommandInput,
    cb: (err: any, data?: DeleteServerCommandOutput) => void
  ): void;
  deleteServer(
    args: DeleteServerCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSshPublicKeyCommand}
   */
  deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteSshPublicKeyCommandOutput>;
  deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): void;
  deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebAppCommand}
   */
  deleteWebApp(
    args: DeleteWebAppCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteWebAppCommandOutput>;
  deleteWebApp(
    args: DeleteWebAppCommandInput,
    cb: (err: any, data?: DeleteWebAppCommandOutput) => void
  ): void;
  deleteWebApp(
    args: DeleteWebAppCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteWebAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebAppCustomizationCommand}
   */
  deleteWebAppCustomization(
    args: DeleteWebAppCustomizationCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteWebAppCustomizationCommandOutput>;
  deleteWebAppCustomization(
    args: DeleteWebAppCustomizationCommandInput,
    cb: (err: any, data?: DeleteWebAppCustomizationCommandOutput) => void
  ): void;
  deleteWebAppCustomization(
    args: DeleteWebAppCustomizationCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteWebAppCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: TransferRequestOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessCommand}
   */
  describeAccess(
    args: DescribeAccessCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeAccessCommandOutput>;
  describeAccess(
    args: DescribeAccessCommandInput,
    cb: (err: any, data?: DescribeAccessCommandOutput) => void
  ): void;
  describeAccess(
    args: DescribeAccessCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgreementCommand}
   */
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeAgreementCommandOutput>;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificateCommand}
   */
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeCertificateCommandOutput>;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorCommand}
   */
  describeConnector(
    args: DescribeConnectorCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeConnectorCommandOutput>;
  describeConnector(
    args: DescribeConnectorCommandInput,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  describeConnector(
    args: DescribeConnectorCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeExecutionCommandOutput>;
  describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  describeExecution(
    args: DescribeExecutionCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHostKeyCommand}
   */
  describeHostKey(
    args: DescribeHostKeyCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeHostKeyCommandOutput>;
  describeHostKey(
    args: DescribeHostKeyCommandInput,
    cb: (err: any, data?: DescribeHostKeyCommandOutput) => void
  ): void;
  describeHostKey(
    args: DescribeHostKeyCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeHostKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProfileCommand}
   */
  describeProfile(
    args: DescribeProfileCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeProfileCommandOutput>;
  describeProfile(
    args: DescribeProfileCommandInput,
    cb: (err: any, data?: DescribeProfileCommandOutput) => void
  ): void;
  describeProfile(
    args: DescribeProfileCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityPolicyCommand}
   */
  describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeSecurityPolicyCommandOutput>;
  describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): void;
  describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServerCommand}
   */
  describeServer(
    args: DescribeServerCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeServerCommandOutput>;
  describeServer(
    args: DescribeServerCommandInput,
    cb: (err: any, data?: DescribeServerCommandOutput) => void
  ): void;
  describeServer(
    args: DescribeServerCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(
    args: DescribeUserCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeUserCommandOutput>;
  describeUser(
    args: DescribeUserCommandInput,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWebAppCommand}
   */
  describeWebApp(
    args: DescribeWebAppCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeWebAppCommandOutput>;
  describeWebApp(
    args: DescribeWebAppCommandInput,
    cb: (err: any, data?: DescribeWebAppCommandOutput) => void
  ): void;
  describeWebApp(
    args: DescribeWebAppCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeWebAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWebAppCustomizationCommand}
   */
  describeWebAppCustomization(
    args: DescribeWebAppCustomizationCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeWebAppCustomizationCommandOutput>;
  describeWebAppCustomization(
    args: DescribeWebAppCustomizationCommandInput,
    cb: (err: any, data?: DescribeWebAppCustomizationCommandOutput) => void
  ): void;
  describeWebAppCustomization(
    args: DescribeWebAppCustomizationCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeWebAppCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkflowCommand}
   */
  describeWorkflow(
    args: DescribeWorkflowCommandInput,
    options?: TransferRequestOptions
  ): Promise<DescribeWorkflowCommandOutput>;
  describeWorkflow(
    args: DescribeWorkflowCommandInput,
    cb: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): void;
  describeWorkflow(
    args: DescribeWorkflowCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCertificateCommand}
   */
  importCertificate(
    args: ImportCertificateCommandInput,
    options?: TransferRequestOptions
  ): Promise<ImportCertificateCommandOutput>;
  importCertificate(
    args: ImportCertificateCommandInput,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  importCertificate(
    args: ImportCertificateCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportHostKeyCommand}
   */
  importHostKey(
    args: ImportHostKeyCommandInput,
    options?: TransferRequestOptions
  ): Promise<ImportHostKeyCommandOutput>;
  importHostKey(
    args: ImportHostKeyCommandInput,
    cb: (err: any, data?: ImportHostKeyCommandOutput) => void
  ): void;
  importHostKey(
    args: ImportHostKeyCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ImportHostKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportSshPublicKeyCommand}
   */
  importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    options?: TransferRequestOptions
  ): Promise<ImportSshPublicKeyCommandOutput>;
  importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): void;
  importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessesCommand}
   */
  listAccesses(
    args: ListAccessesCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListAccessesCommandOutput>;
  listAccesses(
    args: ListAccessesCommandInput,
    cb: (err: any, data?: ListAccessesCommandOutput) => void
  ): void;
  listAccesses(
    args: ListAccessesCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListAccessesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementsCommand}
   */
  listAgreements(
    args: ListAgreementsCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListAgreementsCommandOutput>;
  listAgreements(
    args: ListAgreementsCommandInput,
    cb: (err: any, data?: ListAgreementsCommandOutput) => void
  ): void;
  listAgreements(
    args: ListAgreementsCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListAgreementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificatesCommand}
   */
  listCertificates(): Promise<ListCertificatesCommandOutput>;
  listCertificates(
    args: ListCertificatesCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListCertificatesCommandOutput>;
  listCertificates(
    args: ListCertificatesCommandInput,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  listCertificates(
    args: ListCertificatesCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFileTransferResultsCommand}
   */
  listFileTransferResults(
    args: ListFileTransferResultsCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListFileTransferResultsCommandOutput>;
  listFileTransferResults(
    args: ListFileTransferResultsCommandInput,
    cb: (err: any, data?: ListFileTransferResultsCommandOutput) => void
  ): void;
  listFileTransferResults(
    args: ListFileTransferResultsCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListFileTransferResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostKeysCommand}
   */
  listHostKeys(
    args: ListHostKeysCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListHostKeysCommandOutput>;
  listHostKeys(
    args: ListHostKeysCommandInput,
    cb: (err: any, data?: ListHostKeysCommandOutput) => void
  ): void;
  listHostKeys(
    args: ListHostKeysCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListHostKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   */
  listSecurityPolicies(): Promise<ListSecurityPoliciesCommandOutput>;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListSecurityPoliciesCommandOutput>;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServersCommand}
   */
  listServers(): Promise<ListServersCommandOutput>;
  listServers(
    args: ListServersCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListServersCommandOutput>;
  listServers(
    args: ListServersCommandInput,
    cb: (err: any, data?: ListServersCommandOutput) => void
  ): void;
  listServers(
    args: ListServersCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebAppsCommand}
   */
  listWebApps(): Promise<ListWebAppsCommandOutput>;
  listWebApps(
    args: ListWebAppsCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListWebAppsCommandOutput>;
  listWebApps(
    args: ListWebAppsCommandInput,
    cb: (err: any, data?: ListWebAppsCommandOutput) => void
  ): void;
  listWebApps(
    args: ListWebAppsCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListWebAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: TransferRequestOptions
  ): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendWorkflowStepStateCommand}
   */
  sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    options?: TransferRequestOptions
  ): Promise<SendWorkflowStepStateCommandOutput>;
  sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    cb: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): void;
  sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDirectoryListingCommand}
   */
  startDirectoryListing(
    args: StartDirectoryListingCommandInput,
    options?: TransferRequestOptions
  ): Promise<StartDirectoryListingCommandOutput>;
  startDirectoryListing(
    args: StartDirectoryListingCommandInput,
    cb: (err: any, data?: StartDirectoryListingCommandOutput) => void
  ): void;
  startDirectoryListing(
    args: StartDirectoryListingCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: StartDirectoryListingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFileTransferCommand}
   */
  startFileTransfer(
    args: StartFileTransferCommandInput,
    options?: TransferRequestOptions
  ): Promise<StartFileTransferCommandOutput>;
  startFileTransfer(
    args: StartFileTransferCommandInput,
    cb: (err: any, data?: StartFileTransferCommandOutput) => void
  ): void;
  startFileTransfer(
    args: StartFileTransferCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: StartFileTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRemoteDeleteCommand}
   */
  startRemoteDelete(
    args: StartRemoteDeleteCommandInput,
    options?: TransferRequestOptions
  ): Promise<StartRemoteDeleteCommandOutput>;
  startRemoteDelete(
    args: StartRemoteDeleteCommandInput,
    cb: (err: any, data?: StartRemoteDeleteCommandOutput) => void
  ): void;
  startRemoteDelete(
    args: StartRemoteDeleteCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: StartRemoteDeleteCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRemoteMoveCommand}
   */
  startRemoteMove(
    args: StartRemoteMoveCommandInput,
    options?: TransferRequestOptions
  ): Promise<StartRemoteMoveCommandOutput>;
  startRemoteMove(
    args: StartRemoteMoveCommandInput,
    cb: (err: any, data?: StartRemoteMoveCommandOutput) => void
  ): void;
  startRemoteMove(
    args: StartRemoteMoveCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: StartRemoteMoveCommandOutput) => void
  ): void;

  /**
   * @see {@link StartServerCommand}
   */
  startServer(
    args: StartServerCommandInput,
    options?: TransferRequestOptions
  ): Promise<StartServerCommandOutput>;
  startServer(
    args: StartServerCommandInput,
    cb: (err: any, data?: StartServerCommandOutput) => void
  ): void;
  startServer(
    args: StartServerCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: StartServerCommandOutput) => void
  ): void;

  /**
   * @see {@link StopServerCommand}
   */
  stopServer(
    args: StopServerCommandInput,
    options?: TransferRequestOptions
  ): Promise<StopServerCommandOutput>;
  stopServer(
    args: StopServerCommandInput,
    cb: (err: any, data?: StopServerCommandOutput) => void
  ): void;
  stopServer(
    args: StopServerCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: StopServerCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: TransferRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestConnectionCommand}
   */
  testConnection(
    args: TestConnectionCommandInput,
    options?: TransferRequestOptions
  ): Promise<TestConnectionCommandOutput>;
  testConnection(
    args: TestConnectionCommandInput,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;
  testConnection(
    args: TestConnectionCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link TestIdentityProviderCommand}
   */
  testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    options?: TransferRequestOptions
  ): Promise<TestIdentityProviderCommandOutput>;
  testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    cb: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): void;
  testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: TransferRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessCommand}
   */
  updateAccess(
    args: UpdateAccessCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateAccessCommandOutput>;
  updateAccess(
    args: UpdateAccessCommandInput,
    cb: (err: any, data?: UpdateAccessCommandOutput) => void
  ): void;
  updateAccess(
    args: UpdateAccessCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgreementCommand}
   */
  updateAgreement(
    args: UpdateAgreementCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateAgreementCommandOutput>;
  updateAgreement(
    args: UpdateAgreementCommandInput,
    cb: (err: any, data?: UpdateAgreementCommandOutput) => void
  ): void;
  updateAgreement(
    args: UpdateAgreementCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCertificateCommand}
   */
  updateCertificate(
    args: UpdateCertificateCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateCertificateCommandOutput>;
  updateCertificate(
    args: UpdateCertificateCommandInput,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;
  updateCertificate(
    args: UpdateCertificateCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectorCommand}
   */
  updateConnector(
    args: UpdateConnectorCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateConnectorCommandOutput>;
  updateConnector(
    args: UpdateConnectorCommandInput,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
  updateConnector(
    args: UpdateConnectorCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHostKeyCommand}
   */
  updateHostKey(
    args: UpdateHostKeyCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateHostKeyCommandOutput>;
  updateHostKey(
    args: UpdateHostKeyCommandInput,
    cb: (err: any, data?: UpdateHostKeyCommandOutput) => void
  ): void;
  updateHostKey(
    args: UpdateHostKeyCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateHostKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(
    args: UpdateProfileCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateProfileCommandOutput>;
  updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServerCommand}
   */
  updateServer(
    args: UpdateServerCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateServerCommandOutput>;
  updateServer(
    args: UpdateServerCommandInput,
    cb: (err: any, data?: UpdateServerCommandOutput) => void
  ): void;
  updateServer(
    args: UpdateServerCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateServerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebAppCommand}
   */
  updateWebApp(
    args: UpdateWebAppCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateWebAppCommandOutput>;
  updateWebApp(
    args: UpdateWebAppCommandInput,
    cb: (err: any, data?: UpdateWebAppCommandOutput) => void
  ): void;
  updateWebApp(
    args: UpdateWebAppCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateWebAppCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebAppCustomizationCommand}
   */
  updateWebAppCustomization(
    args: UpdateWebAppCustomizationCommandInput,
    options?: TransferRequestOptions
  ): Promise<UpdateWebAppCustomizationCommandOutput>;
  updateWebAppCustomization(
    args: UpdateWebAppCustomizationCommandInput,
    cb: (err: any, data?: UpdateWebAppCustomizationCommandOutput) => void
  ): void;
  updateWebAppCustomization(
    args: UpdateWebAppCustomizationCommandInput,
    options: TransferRequestOptions,
    cb: (err: any, data?: UpdateWebAppCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessesCommandOutput}.
   */
  paginateListAccesses(
    args: ListAccessesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessesCommandOutput>;

  /**
   * @see {@link ListAgreementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementsCommandOutput}.
   */
  paginateListAgreements(
    args: ListAgreementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementsCommandOutput>;

  /**
   * @see {@link ListCertificatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCertificatesCommandOutput}.
   */
  paginateListCertificates(
    args?: ListCertificatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCertificatesCommandOutput>;

  /**
   * @see {@link ListConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectorsCommandOutput}.
   */
  paginateListConnectors(
    args?: ListConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectorsCommandOutput>;

  /**
   * @see {@link ListExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExecutionsCommandOutput}.
   */
  paginateListExecutions(
    args: ListExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExecutionsCommandOutput>;

  /**
   * @see {@link ListFileTransferResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFileTransferResultsCommandOutput}.
   */
  paginateListFileTransferResults(
    args: ListFileTransferResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFileTransferResultsCommandOutput>;

  /**
   * @see {@link ListProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProfilesCommandOutput}.
   */
  paginateListProfiles(
    args?: ListProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProfilesCommandOutput>;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityPoliciesCommandOutput}.
   */
  paginateListSecurityPolicies(
    args?: ListSecurityPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityPoliciesCommandOutput>;

  /**
   * @see {@link ListServersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServersCommandOutput}.
   */
  paginateListServers(
    args?: ListServersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServersCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUsersCommandOutput}.
   */
  paginateListUsers(
    args: ListUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUsersCommandOutput>;

  /**
   * @see {@link ListWebAppsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWebAppsCommandOutput}.
   */
  paginateListWebApps(
    args?: ListWebAppsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWebAppsCommandOutput>;

  /**
   * @see {@link ListWorkflowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowsCommandOutput}.
   */
  paginateListWorkflows(
    args?: ListWorkflowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowsCommandOutput>;

  /**
   * @see {@link DescribeServerCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilServerOffline(
    args: DescribeServerCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Transfer>, "client">
  ): Promise<WaiterResult<DescribeServerCommandOutput>>;

  /**
   * @see {@link DescribeServerCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilServerOnline(
    args: DescribeServerCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Transfer>, "client">
  ): Promise<WaiterResult<DescribeServerCommandOutput>>;
}

/**
 * <p>Transfer Family offers fully managed support for the transfer of files over SFTP, AS2, FTPS, FTP, and web browser-based transfers directly into and out of Amazon Web Services storage services.</p> <p>File transfer protocols are used in data exchange workflows across different industries such as financial services, healthcare, advertising, and retail, among others. Transfer Family simplifies the migration of file transfer workflows to Amazon Web Services.</p> <p>To use the Transfer Family service, you instantiate a server in the Amazon Web Services Region of your choice. You can create the server, list available servers, and update and delete servers. The server is the entity that requests file operations from Transfer Family. Servers have a number of important properties. The server is a named instance as identified by a system assigned <code>ServerId</code> identifier. You can optionally assign a hostname, or even a custom hostname to a server. The service bills for any instantiated servers (even ones <code>OFFLINE</code>), and for the amount of data transferred.</p> <p>Users must be known to the server that requests file operations. A user as identified by their username is assigned to a server. Usernames are used to authenticate requests. A server can have only one authentication method: <code>AWS_DIRECTORY_SERVICE</code>, <code>SERVICE_MANAGED</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p> <p>Transfer Family also supports web applications that provide browser-based file transfer capabilities. Web applications can be configured with VPC endpoints to enable secure, private connectivity within your Virtual Private Cloud (VPC). This allows you to control network access and route traffic through your VPC infrastructure while maintaining the managed benefits of Transfer Family.</p> <p>This API interface reference for Transfer Family contains documentation for a programming interface that you can use to manage Transfer Family. The reference structure is as follows:</p> <ul> <li> <p>For the alphabetical list of API actions, see .</p> </li> <li> <p>For the alphabetical list of data types, see .</p> </li> <li> <p>For a list of common query parameters, see <a>CommonParameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a>CommonErrors</a>.</p> </li> </ul> <note> <p>Rather than actually running a command, you can use the <code>--generate-cli-skeleton</code> parameter with any API call to generate and display a parameter template. You can then use the generated template to customize and use as input on a later command. For details, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html#cli-usage-skeleton-generate">Generate and use a parameter skeleton file</a>.</p> </note>
 * @public
 */
export class Transfer extends TransferClient implements Transfer {}
createAggregatedClient(commands, Transfer, { paginators, waiters });
