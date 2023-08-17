// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateAccessCommand,
  CreateAccessCommandInput,
  CreateAccessCommandOutput,
} from "./commands/CreateAccessCommand";
import {
  CreateAgreementCommand,
  CreateAgreementCommandInput,
  CreateAgreementCommandOutput,
} from "./commands/CreateAgreementCommand";
import {
  CreateConnectorCommand,
  CreateConnectorCommandInput,
  CreateConnectorCommandOutput,
} from "./commands/CreateConnectorCommand";
import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import {
  CreateServerCommand,
  CreateServerCommandInput,
  CreateServerCommandOutput,
} from "./commands/CreateServerCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  DeleteAccessCommand,
  DeleteAccessCommandInput,
  DeleteAccessCommandOutput,
} from "./commands/DeleteAccessCommand";
import {
  DeleteAgreementCommand,
  DeleteAgreementCommandInput,
  DeleteAgreementCommandOutput,
} from "./commands/DeleteAgreementCommand";
import {
  DeleteCertificateCommand,
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import {
  DeleteConnectorCommand,
  DeleteConnectorCommandInput,
  DeleteConnectorCommandOutput,
} from "./commands/DeleteConnectorCommand";
import {
  DeleteHostKeyCommand,
  DeleteHostKeyCommandInput,
  DeleteHostKeyCommandOutput,
} from "./commands/DeleteHostKeyCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import {
  DeleteServerCommand,
  DeleteServerCommandInput,
  DeleteServerCommandOutput,
} from "./commands/DeleteServerCommand";
import {
  DeleteSshPublicKeyCommand,
  DeleteSshPublicKeyCommandInput,
  DeleteSshPublicKeyCommandOutput,
} from "./commands/DeleteSshPublicKeyCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  DescribeAccessCommand,
  DescribeAccessCommandInput,
  DescribeAccessCommandOutput,
} from "./commands/DescribeAccessCommand";
import {
  DescribeAgreementCommand,
  DescribeAgreementCommandInput,
  DescribeAgreementCommandOutput,
} from "./commands/DescribeAgreementCommand";
import {
  DescribeCertificateCommand,
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import {
  DescribeConnectorCommand,
  DescribeConnectorCommandInput,
  DescribeConnectorCommandOutput,
} from "./commands/DescribeConnectorCommand";
import {
  DescribeExecutionCommand,
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import {
  DescribeHostKeyCommand,
  DescribeHostKeyCommandInput,
  DescribeHostKeyCommandOutput,
} from "./commands/DescribeHostKeyCommand";
import {
  DescribeProfileCommand,
  DescribeProfileCommandInput,
  DescribeProfileCommandOutput,
} from "./commands/DescribeProfileCommand";
import {
  DescribeSecurityPolicyCommand,
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
} from "./commands/DescribeSecurityPolicyCommand";
import {
  DescribeServerCommand,
  DescribeServerCommandInput,
  DescribeServerCommandOutput,
} from "./commands/DescribeServerCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import {
  DescribeWorkflowCommand,
  DescribeWorkflowCommandInput,
  DescribeWorkflowCommandOutput,
} from "./commands/DescribeWorkflowCommand";
import {
  ImportCertificateCommand,
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput,
} from "./commands/ImportCertificateCommand";
import {
  ImportHostKeyCommand,
  ImportHostKeyCommandInput,
  ImportHostKeyCommandOutput,
} from "./commands/ImportHostKeyCommand";
import {
  ImportSshPublicKeyCommand,
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput,
} from "./commands/ImportSshPublicKeyCommand";
import {
  ListAccessesCommand,
  ListAccessesCommandInput,
  ListAccessesCommandOutput,
} from "./commands/ListAccessesCommand";
import {
  ListAgreementsCommand,
  ListAgreementsCommandInput,
  ListAgreementsCommandOutput,
} from "./commands/ListAgreementsCommand";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "./commands/ListCertificatesCommand";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "./commands/ListConnectorsCommand";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "./commands/ListExecutionsCommand";
import {
  ListHostKeysCommand,
  ListHostKeysCommandInput,
  ListHostKeysCommandOutput,
} from "./commands/ListHostKeysCommand";
import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "./commands/ListProfilesCommand";
import {
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "./commands/ListSecurityPoliciesCommand";
import { ListServersCommand, ListServersCommandInput, ListServersCommandOutput } from "./commands/ListServersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  SendWorkflowStepStateCommand,
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "./commands/SendWorkflowStepStateCommand";
import {
  StartFileTransferCommand,
  StartFileTransferCommandInput,
  StartFileTransferCommandOutput,
} from "./commands/StartFileTransferCommand";
import { StartServerCommand, StartServerCommandInput, StartServerCommandOutput } from "./commands/StartServerCommand";
import { StopServerCommand, StopServerCommandInput, StopServerCommandOutput } from "./commands/StopServerCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestConnectionCommand,
  TestConnectionCommandInput,
  TestConnectionCommandOutput,
} from "./commands/TestConnectionCommand";
import {
  TestIdentityProviderCommand,
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
} from "./commands/TestIdentityProviderCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessCommand,
  UpdateAccessCommandInput,
  UpdateAccessCommandOutput,
} from "./commands/UpdateAccessCommand";
import {
  UpdateAgreementCommand,
  UpdateAgreementCommandInput,
  UpdateAgreementCommandOutput,
} from "./commands/UpdateAgreementCommand";
import {
  UpdateCertificateCommand,
  UpdateCertificateCommandInput,
  UpdateCertificateCommandOutput,
} from "./commands/UpdateCertificateCommand";
import {
  UpdateConnectorCommand,
  UpdateConnectorCommandInput,
  UpdateConnectorCommandOutput,
} from "./commands/UpdateConnectorCommand";
import {
  UpdateHostKeyCommand,
  UpdateHostKeyCommandInput,
  UpdateHostKeyCommandOutput,
} from "./commands/UpdateHostKeyCommand";
import {
  UpdateProfileCommand,
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
} from "./commands/UpdateProfileCommand";
import {
  UpdateServerCommand,
  UpdateServerCommandInput,
  UpdateServerCommandOutput,
} from "./commands/UpdateServerCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { TransferClient, TransferClientConfig } from "./TransferClient";

const commands = {
  CreateAccessCommand,
  CreateAgreementCommand,
  CreateConnectorCommand,
  CreateProfileCommand,
  CreateServerCommand,
  CreateUserCommand,
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
  DescribeWorkflowCommand,
  ImportCertificateCommand,
  ImportHostKeyCommand,
  ImportSshPublicKeyCommand,
  ListAccessesCommand,
  ListAgreementsCommand,
  ListCertificatesCommand,
  ListConnectorsCommand,
  ListExecutionsCommand,
  ListHostKeysCommand,
  ListProfilesCommand,
  ListSecurityPoliciesCommand,
  ListServersCommand,
  ListTagsForResourceCommand,
  ListUsersCommand,
  ListWorkflowsCommand,
  SendWorkflowStepStateCommand,
  StartFileTransferCommand,
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
};

export interface Transfer {
  /**
   * @see {@link CreateAccessCommand}
   */
  createAccess(args: CreateAccessCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccessCommandOutput>;
  createAccess(args: CreateAccessCommandInput, cb: (err: any, data?: CreateAccessCommandOutput) => void): void;
  createAccess(
    args: CreateAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgreementCommand}
   */
  createAgreement(
    args: CreateAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgreementCommandOutput>;
  createAgreement(args: CreateAgreementCommandInput, cb: (err: any, data?: CreateAgreementCommandOutput) => void): void;
  createAgreement(
    args: CreateAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorCommand}
   */
  createConnector(
    args: CreateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorCommandOutput>;
  createConnector(args: CreateConnectorCommandInput, cb: (err: any, data?: CreateConnectorCommandOutput) => void): void;
  createConnector(
    args: CreateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(args: CreateProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfileCommandOutput>;
  createProfile(args: CreateProfileCommandInput, cb: (err: any, data?: CreateProfileCommandOutput) => void): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServerCommand}
   */
  createServer(args: CreateServerCommandInput, options?: __HttpHandlerOptions): Promise<CreateServerCommandOutput>;
  createServer(args: CreateServerCommandInput, cb: (err: any, data?: CreateServerCommandOutput) => void): void;
  createServer(
    args: CreateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(args: CreateWorkflowCommandInput, cb: (err: any, data?: CreateWorkflowCommandOutput) => void): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessCommand}
   */
  deleteAccess(args: DeleteAccessCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessCommandOutput>;
  deleteAccess(args: DeleteAccessCommandInput, cb: (err: any, data?: DeleteAccessCommandOutput) => void): void;
  deleteAccess(
    args: DeleteAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgreementCommand}
   */
  deleteAgreement(
    args: DeleteAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgreementCommandOutput>;
  deleteAgreement(args: DeleteAgreementCommandInput, cb: (err: any, data?: DeleteAgreementCommandOutput) => void): void;
  deleteAgreement(
    args: DeleteAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCertificateCommand}
   */
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorCommand}
   */
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorCommandOutput>;
  deleteConnector(args: DeleteConnectorCommandInput, cb: (err: any, data?: DeleteConnectorCommandOutput) => void): void;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHostKeyCommand}
   */
  deleteHostKey(args: DeleteHostKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHostKeyCommandOutput>;
  deleteHostKey(args: DeleteHostKeyCommandInput, cb: (err: any, data?: DeleteHostKeyCommandOutput) => void): void;
  deleteHostKey(
    args: DeleteHostKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHostKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(args: DeleteProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileCommandOutput>;
  deleteProfile(args: DeleteProfileCommandInput, cb: (err: any, data?: DeleteProfileCommandOutput) => void): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServerCommand}
   */
  deleteServer(args: DeleteServerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServerCommandOutput>;
  deleteServer(args: DeleteServerCommandInput, cb: (err: any, data?: DeleteServerCommandOutput) => void): void;
  deleteServer(
    args: DeleteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSshPublicKeyCommand}
   */
  deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSshPublicKeyCommandOutput>;
  deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): void;
  deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(args: DeleteWorkflowCommandInput, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessCommand}
   */
  describeAccess(
    args: DescribeAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessCommandOutput>;
  describeAccess(args: DescribeAccessCommandInput, cb: (err: any, data?: DescribeAccessCommandOutput) => void): void;
  describeAccess(
    args: DescribeAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgreementCommand}
   */
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgreementCommandOutput>;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificateCommand}
   */
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateCommandOutput>;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorCommand}
   */
  describeConnector(
    args: DescribeConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorCommandOutput>;
  describeConnector(
    args: DescribeConnectorCommandInput,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  describeConnector(
    args: DescribeConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExecutionCommandOutput>;
  describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  describeExecution(
    args: DescribeExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHostKeyCommand}
   */
  describeHostKey(
    args: DescribeHostKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostKeyCommandOutput>;
  describeHostKey(args: DescribeHostKeyCommandInput, cb: (err: any, data?: DescribeHostKeyCommandOutput) => void): void;
  describeHostKey(
    args: DescribeHostKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProfileCommand}
   */
  describeProfile(
    args: DescribeProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProfileCommandOutput>;
  describeProfile(args: DescribeProfileCommandInput, cb: (err: any, data?: DescribeProfileCommandOutput) => void): void;
  describeProfile(
    args: DescribeProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityPolicyCommand}
   */
  describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityPolicyCommandOutput>;
  describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): void;
  describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServerCommand}
   */
  describeServer(
    args: DescribeServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServerCommandOutput>;
  describeServer(args: DescribeServerCommandInput, cb: (err: any, data?: DescribeServerCommandOutput) => void): void;
  describeServer(
    args: DescribeServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
  describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkflowCommand}
   */
  describeWorkflow(
    args: DescribeWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkflowCommandOutput>;
  describeWorkflow(
    args: DescribeWorkflowCommandInput,
    cb: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): void;
  describeWorkflow(
    args: DescribeWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCertificateCommand}
   */
  importCertificate(
    args: ImportCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCertificateCommandOutput>;
  importCertificate(
    args: ImportCertificateCommandInput,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  importCertificate(
    args: ImportCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportHostKeyCommand}
   */
  importHostKey(args: ImportHostKeyCommandInput, options?: __HttpHandlerOptions): Promise<ImportHostKeyCommandOutput>;
  importHostKey(args: ImportHostKeyCommandInput, cb: (err: any, data?: ImportHostKeyCommandOutput) => void): void;
  importHostKey(
    args: ImportHostKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportHostKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportSshPublicKeyCommand}
   */
  importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSshPublicKeyCommandOutput>;
  importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): void;
  importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessesCommand}
   */
  listAccesses(args: ListAccessesCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessesCommandOutput>;
  listAccesses(args: ListAccessesCommandInput, cb: (err: any, data?: ListAccessesCommandOutput) => void): void;
  listAccesses(
    args: ListAccessesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementsCommand}
   */
  listAgreements(
    args: ListAgreementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgreementsCommandOutput>;
  listAgreements(args: ListAgreementsCommandInput, cb: (err: any, data?: ListAgreementsCommandOutput) => void): void;
  listAgreements(
    args: ListAgreementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgreementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificatesCommand}
   */
  listCertificates(
    args: ListCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesCommandOutput>;
  listCertificates(
    args: ListCertificatesCommandInput,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  listCertificates(
    args: ListCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(args: ListConnectorsCommandInput, cb: (err: any, data?: ListConnectorsCommandOutput) => void): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(args: ListExecutionsCommandInput, cb: (err: any, data?: ListExecutionsCommandOutput) => void): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostKeysCommand}
   */
  listHostKeys(args: ListHostKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListHostKeysCommandOutput>;
  listHostKeys(args: ListHostKeysCommandInput, cb: (err: any, data?: ListHostKeysCommandOutput) => void): void;
  listHostKeys(
    args: ListHostKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(args: ListProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListProfilesCommandOutput>;
  listProfiles(args: ListProfilesCommandInput, cb: (err: any, data?: ListProfilesCommandOutput) => void): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   */
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityPoliciesCommandOutput>;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServersCommand}
   */
  listServers(args: ListServersCommandInput, options?: __HttpHandlerOptions): Promise<ListServersCommandOutput>;
  listServers(args: ListServersCommandInput, cb: (err: any, data?: ListServersCommandOutput) => void): void;
  listServers(
    args: ListServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServersCommandOutput) => void
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
   * @see {@link ListUsersCommand}
   */
  listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendWorkflowStepStateCommand}
   */
  sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendWorkflowStepStateCommandOutput>;
  sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    cb: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): void;
  sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFileTransferCommand}
   */
  startFileTransfer(
    args: StartFileTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFileTransferCommandOutput>;
  startFileTransfer(
    args: StartFileTransferCommandInput,
    cb: (err: any, data?: StartFileTransferCommandOutput) => void
  ): void;
  startFileTransfer(
    args: StartFileTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFileTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link StartServerCommand}
   */
  startServer(args: StartServerCommandInput, options?: __HttpHandlerOptions): Promise<StartServerCommandOutput>;
  startServer(args: StartServerCommandInput, cb: (err: any, data?: StartServerCommandOutput) => void): void;
  startServer(
    args: StartServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartServerCommandOutput) => void
  ): void;

  /**
   * @see {@link StopServerCommand}
   */
  stopServer(args: StopServerCommandInput, options?: __HttpHandlerOptions): Promise<StopServerCommandOutput>;
  stopServer(args: StopServerCommandInput, cb: (err: any, data?: StopServerCommandOutput) => void): void;
  stopServer(
    args: StopServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopServerCommandOutput) => void
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
   * @see {@link TestConnectionCommand}
   */
  testConnection(
    args: TestConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestConnectionCommandOutput>;
  testConnection(args: TestConnectionCommandInput, cb: (err: any, data?: TestConnectionCommandOutput) => void): void;
  testConnection(
    args: TestConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link TestIdentityProviderCommand}
   */
  testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestIdentityProviderCommandOutput>;
  testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    cb: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): void;
  testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestIdentityProviderCommandOutput) => void
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
   * @see {@link UpdateAccessCommand}
   */
  updateAccess(args: UpdateAccessCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccessCommandOutput>;
  updateAccess(args: UpdateAccessCommandInput, cb: (err: any, data?: UpdateAccessCommandOutput) => void): void;
  updateAccess(
    args: UpdateAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgreementCommand}
   */
  updateAgreement(
    args: UpdateAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgreementCommandOutput>;
  updateAgreement(args: UpdateAgreementCommandInput, cb: (err: any, data?: UpdateAgreementCommandOutput) => void): void;
  updateAgreement(
    args: UpdateAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCertificateCommand}
   */
  updateCertificate(
    args: UpdateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCertificateCommandOutput>;
  updateCertificate(
    args: UpdateCertificateCommandInput,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;
  updateCertificate(
    args: UpdateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectorCommand}
   */
  updateConnector(
    args: UpdateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorCommandOutput>;
  updateConnector(args: UpdateConnectorCommandInput, cb: (err: any, data?: UpdateConnectorCommandOutput) => void): void;
  updateConnector(
    args: UpdateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHostKeyCommand}
   */
  updateHostKey(args: UpdateHostKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateHostKeyCommandOutput>;
  updateHostKey(args: UpdateHostKeyCommandInput, cb: (err: any, data?: UpdateHostKeyCommandOutput) => void): void;
  updateHostKey(
    args: UpdateHostKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHostKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(args: UpdateProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfileCommandOutput>;
  updateProfile(args: UpdateProfileCommandInput, cb: (err: any, data?: UpdateProfileCommandOutput) => void): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServerCommand}
   */
  updateServer(args: UpdateServerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServerCommandOutput>;
  updateServer(args: UpdateServerCommandInput, cb: (err: any, data?: UpdateServerCommandOutput) => void): void;
  updateServer(
    args: UpdateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Transfer Family is a fully managed service that enables the transfer of files over the File
 *       Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File
 *       Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS.
 *       Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3.
 *       Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating
 *       with existing authentication systems, and providing DNS routing with Amazon Route 53 so
 *       nothing changes for your customers and partners, or their applications. With your data in
 *       Amazon S3, you can use it with Amazon Web Services for processing, analytics, machine learning, and
 *       archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and
 *       set up.</p>
 */
export class Transfer extends TransferClient implements Transfer {}
createAggregatedClient(commands, Transfer);
