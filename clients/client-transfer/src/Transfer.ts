// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { TransferClient } from "./TransferClient";

/**
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
export class Transfer extends TransferClient {
  /**
   * <p>Used by administrators to choose which groups in the directory should have access to
   *       upload and download files over the enabled protocols using Transfer Family. For example, a
   *       Microsoft Active Directory might contain 50,000 users, but only a small fraction might need
   *       the ability to transfer files to the server. An administrator can use
   *         <code>CreateAccess</code> to limit the access to the correct set of users who need this
   *       ability.</p>
   */
  public createAccess(
    args: CreateAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessCommandOutput>;
  public createAccess(args: CreateAccessCommandInput, cb: (err: any, data?: CreateAccessCommandOutput) => void): void;
  public createAccess(
    args: CreateAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessCommandOutput) => void
  ): void;
  public createAccess(
    args: CreateAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessCommandOutput) => void
  ): Promise<CreateAccessCommandOutput> | void {
    const command = new CreateAccessCommand(args);
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
   * <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership,
   *       between an Transfer Family server and an AS2 process. The agreement defines the file and message
   *       transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family
   *       combines a server, local profile, partner profile, certificate, and other
   *       attributes.</p>
   *          <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
   */
  public createAgreement(
    args: CreateAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgreementCommandOutput>;
  public createAgreement(
    args: CreateAgreementCommandInput,
    cb: (err: any, data?: CreateAgreementCommandOutput) => void
  ): void;
  public createAgreement(
    args: CreateAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgreementCommandOutput) => void
  ): void;
  public createAgreement(
    args: CreateAgreementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAgreementCommandOutput) => void),
    cb?: (err: any, data?: CreateAgreementCommandOutput) => void
  ): Promise<CreateAgreementCommandOutput> | void {
    const command = new CreateAgreementCommand(args);
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
   * <p>Creates the connector, which captures the parameters for an outbound connection for the
   *       AS2 protocol. The connector is required for sending files to an externally hosted AS2 server.
   *       For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.</p>
   */
  public createConnector(
    args: CreateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorCommandOutput>;
  public createConnector(
    args: CreateConnectorCommandInput,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;
  public createConnector(
    args: CreateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;
  public createConnector(
    args: CreateConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectorCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectorCommandOutput) => void
  ): Promise<CreateConnectorCommandOutput> | void {
    const command = new CreateConnectorCommand(args);
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
   * <p>Creates the local or partner profile to use for AS2 transfers.</p>
   */
  public createProfile(
    args: CreateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileCommandOutput>;
  public createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  public createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  public createProfile(
    args: CreateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateProfileCommandOutput) => void
  ): Promise<CreateProfileCommandOutput> | void {
    const command = new CreateProfileCommand(args);
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
   * <p>Instantiates an auto-scaling virtual server based on the selected file transfer protocol
   *       in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work
   *       with users, use the service-generated <code>ServerId</code> property that is assigned to the
   *       newly created server.</p>
   */
  public createServer(
    args: CreateServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServerCommandOutput>;
  public createServer(args: CreateServerCommandInput, cb: (err: any, data?: CreateServerCommandOutput) => void): void;
  public createServer(
    args: CreateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServerCommandOutput) => void
  ): void;
  public createServer(
    args: CreateServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServerCommandOutput) => void),
    cb?: (err: any, data?: CreateServerCommandOutput) => void
  ): Promise<CreateServerCommandOutput> | void {
    const command = new CreateServerCommand(args);
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
   * <p>Creates a user and associates them with an existing file transfer protocol-enabled server.
   *       You can only create and associate users with servers that have the
   *         <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for
   *         <code>CreateUser</code>, you can specify the user name, set the home directory, store the
   *       user's public key, and assign the user's Identity and Access Management (IAM)
   *       role. You can also optionally add a session policy, and assign metadata with tags that can
   *       be used to group and search for users.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
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
   * <p>
   *       Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes.
   *       After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations.
   *     </p>
   */
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): Promise<CreateWorkflowCommandOutput> | void {
    const command = new CreateWorkflowCommand(args);
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
   * <p>Allows you to delete the access specified in the <code>ServerID</code> and
   *       <code>ExternalID</code> parameters.</p>
   */
  public deleteAccess(
    args: DeleteAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessCommandOutput>;
  public deleteAccess(args: DeleteAccessCommandInput, cb: (err: any, data?: DeleteAccessCommandOutput) => void): void;
  public deleteAccess(
    args: DeleteAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessCommandOutput) => void
  ): void;
  public deleteAccess(
    args: DeleteAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessCommandOutput) => void
  ): Promise<DeleteAccessCommandOutput> | void {
    const command = new DeleteAccessCommand(args);
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
   * <p>Delete the agreement that's specified in the provided <code>AgreementId</code>.</p>
   */
  public deleteAgreement(
    args: DeleteAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgreementCommandOutput>;
  public deleteAgreement(
    args: DeleteAgreementCommandInput,
    cb: (err: any, data?: DeleteAgreementCommandOutput) => void
  ): void;
  public deleteAgreement(
    args: DeleteAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgreementCommandOutput) => void
  ): void;
  public deleteAgreement(
    args: DeleteAgreementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAgreementCommandOutput) => void),
    cb?: (err: any, data?: DeleteAgreementCommandOutput) => void
  ): Promise<DeleteAgreementCommandOutput> | void {
    const command = new DeleteAgreementCommand(args);
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
   * <p>Deletes the certificate that's specified in the <code>CertificateId</code>
   *       parameter.</p>
   */
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): Promise<DeleteCertificateCommandOutput> | void {
    const command = new DeleteCertificateCommand(args);
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
   * <p>Deletes the agreement that's specified in the provided <code>ConnectorId</code>.</p>
   */
  public deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorCommandOutput>;
  public deleteConnector(
    args: DeleteConnectorCommandInput,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;
  public deleteConnector(
    args: DeleteConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;
  public deleteConnector(
    args: DeleteConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): Promise<DeleteConnectorCommandOutput> | void {
    const command = new DeleteConnectorCommand(args);
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
   * <p>Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.</p>
   */
  public deleteHostKey(
    args: DeleteHostKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHostKeyCommandOutput>;
  public deleteHostKey(
    args: DeleteHostKeyCommandInput,
    cb: (err: any, data?: DeleteHostKeyCommandOutput) => void
  ): void;
  public deleteHostKey(
    args: DeleteHostKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHostKeyCommandOutput) => void
  ): void;
  public deleteHostKey(
    args: DeleteHostKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHostKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteHostKeyCommandOutput) => void
  ): Promise<DeleteHostKeyCommandOutput> | void {
    const command = new DeleteHostKeyCommand(args);
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
   * <p>Deletes the profile that's specified in the <code>ProfileId</code> parameter.</p>
   */
  public deleteProfile(
    args: DeleteProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileCommandOutput>;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteProfileCommandOutput) => void
  ): Promise<DeleteProfileCommandOutput> | void {
    const command = new DeleteProfileCommand(args);
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
   * <p>Deletes the file transfer protocol-enabled server that you specify.</p>
   *          <p>No response returns from this operation.</p>
   */
  public deleteServer(
    args: DeleteServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServerCommandOutput>;
  public deleteServer(args: DeleteServerCommandInput, cb: (err: any, data?: DeleteServerCommandOutput) => void): void;
  public deleteServer(
    args: DeleteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCommandOutput) => void
  ): void;
  public deleteServer(
    args: DeleteServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServerCommandOutput) => void),
    cb?: (err: any, data?: DeleteServerCommandOutput) => void
  ): Promise<DeleteServerCommandOutput> | void {
    const command = new DeleteServerCommand(args);
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
   * <p>Deletes a user's Secure Shell (SSH) public key.</p>
   */
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSshPublicKeyCommandOutput>;
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): void;
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): void;
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSshPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): Promise<DeleteSshPublicKeyCommandOutput> | void {
    const command = new DeleteSshPublicKeyCommand(args);
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
   * <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p>
   *          <p>No response returns from this operation.</p>
   *          <note>
   *             <p>When you delete a user from a server, the user's information is lost.</p>
   *          </note>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
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
   * <p>Deletes the specified workflow.</p>
   */
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkflowCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): Promise<DeleteWorkflowCommandOutput> | void {
    const command = new DeleteWorkflowCommand(args);
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
   * <p>Describes the access that is assigned to the specific file transfer protocol-enabled
   *       server, as identified by its <code>ServerId</code> property and its
   *       <code>ExternalId</code>.</p>
   *          <p>The response from this call returns the properties of the access that is associated with
   *       the <code>ServerId</code> value that was specified.</p>
   */
  public describeAccess(
    args: DescribeAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessCommandOutput>;
  public describeAccess(
    args: DescribeAccessCommandInput,
    cb: (err: any, data?: DescribeAccessCommandOutput) => void
  ): void;
  public describeAccess(
    args: DescribeAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessCommandOutput) => void
  ): void;
  public describeAccess(
    args: DescribeAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccessCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccessCommandOutput) => void
  ): Promise<DescribeAccessCommandOutput> | void {
    const command = new DescribeAccessCommand(args);
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
   * <p>Describes the agreement that's identified by the <code>AgreementId</code>.</p>
   */
  public describeAgreement(
    args: DescribeAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgreementCommandOutput>;
  public describeAgreement(
    args: DescribeAgreementCommandInput,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;
  public describeAgreement(
    args: DescribeAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;
  public describeAgreement(
    args: DescribeAgreementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAgreementCommandOutput) => void),
    cb?: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): Promise<DescribeAgreementCommandOutput> | void {
    const command = new DescribeAgreementCommand(args);
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
   * <p>Describes the certificate that's identified by the <code>CertificateId</code>.</p>
   */
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateCommandOutput>;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCertificateCommandOutput) => void),
    cb?: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): Promise<DescribeCertificateCommandOutput> | void {
    const command = new DescribeCertificateCommand(args);
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
   * <p>Describes the connector that's identified by the <code>ConnectorId.</code>
   *          </p>
   */
  public describeConnector(
    args: DescribeConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorCommandOutput>;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectorCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): Promise<DescribeConnectorCommandOutput> | void {
    const command = new DescribeConnectorCommand(args);
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
   * <p>You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.</p>
   */
  public describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExecutionCommandOutput>;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): Promise<DescribeExecutionCommandOutput> | void {
    const command = new DescribeExecutionCommand(args);
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
   * <p>Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.</p>
   */
  public describeHostKey(
    args: DescribeHostKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostKeyCommandOutput>;
  public describeHostKey(
    args: DescribeHostKeyCommandInput,
    cb: (err: any, data?: DescribeHostKeyCommandOutput) => void
  ): void;
  public describeHostKey(
    args: DescribeHostKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostKeyCommandOutput) => void
  ): void;
  public describeHostKey(
    args: DescribeHostKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHostKeyCommandOutput) => void),
    cb?: (err: any, data?: DescribeHostKeyCommandOutput) => void
  ): Promise<DescribeHostKeyCommandOutput> | void {
    const command = new DescribeHostKeyCommand(args);
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
   * <p>Returns the details of the profile that's specified by the <code>ProfileId</code>.</p>
   */
  public describeProfile(
    args: DescribeProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProfileCommandOutput>;
  public describeProfile(
    args: DescribeProfileCommandInput,
    cb: (err: any, data?: DescribeProfileCommandOutput) => void
  ): void;
  public describeProfile(
    args: DescribeProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProfileCommandOutput) => void
  ): void;
  public describeProfile(
    args: DescribeProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProfileCommandOutput) => void),
    cb?: (err: any, data?: DescribeProfileCommandOutput) => void
  ): Promise<DescribeProfileCommandOutput> | void {
    const command = new DescribeProfileCommand(args);
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
   * <p>Describes the security policy that is attached to your file transfer protocol-enabled
   *       server. The response contains a description of the security policy's properties. For more
   *       information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
   *         policies</a>.</p>
   */
  public describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityPolicyCommandOutput>;
  public describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): void;
  public describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): void;
  public describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSecurityPolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): Promise<DescribeSecurityPolicyCommandOutput> | void {
    const command = new DescribeSecurityPolicyCommand(args);
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
   * <p>Describes a file transfer protocol-enabled server that you specify by passing the
   *         <code>ServerId</code> parameter.</p>
   *          <p>The response contains a description of a server's properties. When you set
   *         <code>EndpointType</code> to VPC, the response will contain the
   *       <code>EndpointDetails</code>.</p>
   */
  public describeServer(
    args: DescribeServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServerCommandOutput>;
  public describeServer(
    args: DescribeServerCommandInput,
    cb: (err: any, data?: DescribeServerCommandOutput) => void
  ): void;
  public describeServer(
    args: DescribeServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServerCommandOutput) => void
  ): void;
  public describeServer(
    args: DescribeServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServerCommandOutput) => void),
    cb?: (err: any, data?: DescribeServerCommandOutput) => void
  ): Promise<DescribeServerCommandOutput> | void {
    const command = new DescribeServerCommand(args);
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
   * <p>Describes the user assigned to the specific file transfer protocol-enabled server, as
   *       identified by its <code>ServerId</code> property.</p>
   *          <p>The response from this call returns the properties of the user associated with the
   *         <code>ServerId</code> value that was specified.</p>
   */
  public describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  public describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
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
   * <p>Describes the specified workflow.</p>
   */
  public describeWorkflow(
    args: DescribeWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkflowCommandOutput>;
  public describeWorkflow(
    args: DescribeWorkflowCommandInput,
    cb: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): void;
  public describeWorkflow(
    args: DescribeWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): void;
  public describeWorkflow(
    args: DescribeWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkflowCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): Promise<DescribeWorkflowCommandOutput> | void {
    const command = new DescribeWorkflowCommand(args);
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
   * <p>Imports the signing and encryption certificates that you need to create local (AS2)
   *       profiles and partner
   *       profiles.</p>
   */
  public importCertificate(
    args: ImportCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCertificateCommandOutput>;
  public importCertificate(
    args: ImportCertificateCommandInput,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  public importCertificate(
    args: ImportCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  public importCertificate(
    args: ImportCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportCertificateCommandOutput) => void),
    cb?: (err: any, data?: ImportCertificateCommandOutput) => void
  ): Promise<ImportCertificateCommandOutput> | void {
    const command = new ImportCertificateCommand(args);
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
   * <p>Adds a host key to the server that's specified by the <code>ServerId</code>
   *       parameter.</p>
   */
  public importHostKey(
    args: ImportHostKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportHostKeyCommandOutput>;
  public importHostKey(
    args: ImportHostKeyCommandInput,
    cb: (err: any, data?: ImportHostKeyCommandOutput) => void
  ): void;
  public importHostKey(
    args: ImportHostKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportHostKeyCommandOutput) => void
  ): void;
  public importHostKey(
    args: ImportHostKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportHostKeyCommandOutput) => void),
    cb?: (err: any, data?: ImportHostKeyCommandOutput) => void
  ): Promise<ImportHostKeyCommandOutput> | void {
    const command = new ImportHostKeyCommand(args);
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
   * <p>Adds a Secure Shell (SSH) public key to a user account identified by a
   *         <code>UserName</code> value assigned to the specific file transfer protocol-enabled server,
   *       identified by <code>ServerId</code>.</p>
   *          <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and
   *       the name of the <code>SshPublicKeyId</code>.</p>
   */
  public importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSshPublicKeyCommandOutput>;
  public importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): void;
  public importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): void;
  public importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportSshPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): Promise<ImportSshPublicKeyCommandOutput> | void {
    const command = new ImportSshPublicKeyCommand(args);
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
   * <p>Lists the details for all the accesses you have on your server.</p>
   */
  public listAccesses(
    args: ListAccessesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessesCommandOutput>;
  public listAccesses(args: ListAccessesCommandInput, cb: (err: any, data?: ListAccessesCommandOutput) => void): void;
  public listAccesses(
    args: ListAccessesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessesCommandOutput) => void
  ): void;
  public listAccesses(
    args: ListAccessesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessesCommandOutput) => void),
    cb?: (err: any, data?: ListAccessesCommandOutput) => void
  ): Promise<ListAccessesCommandOutput> | void {
    const command = new ListAccessesCommand(args);
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
   * <p>Returns a list of the agreements for the server that's identified by the
   *         <code>ServerId</code> that you supply. If you want to limit the results to a certain number,
   *       supply a value for the <code>MaxResults</code> parameter. If you ran the command previously
   *       and received a value for <code>NextToken</code>, you can supply that value to continue listing
   *       agreements from where you left off.</p>
   */
  public listAgreements(
    args: ListAgreementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgreementsCommandOutput>;
  public listAgreements(
    args: ListAgreementsCommandInput,
    cb: (err: any, data?: ListAgreementsCommandOutput) => void
  ): void;
  public listAgreements(
    args: ListAgreementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgreementsCommandOutput) => void
  ): void;
  public listAgreements(
    args: ListAgreementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAgreementsCommandOutput) => void),
    cb?: (err: any, data?: ListAgreementsCommandOutput) => void
  ): Promise<ListAgreementsCommandOutput> | void {
    const command = new ListAgreementsCommand(args);
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
   * <p>Returns a list of the current certificates that have been imported into Transfer Family. If you want to
   *       limit the results to a certain number, supply a value for the <code>MaxResults</code>
   *       parameter. If you ran the command previously and received a value for the
   *         <code>NextToken</code> parameter, you can supply that value to continue listing certificates
   *       from where you left off.</p>
   */
  public listCertificates(
    args: ListCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesCommandOutput>;
  public listCertificates(
    args: ListCertificatesCommandInput,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  public listCertificates(
    args: ListCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  public listCertificates(
    args: ListCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCertificatesCommandOutput) => void),
    cb?: (err: any, data?: ListCertificatesCommandOutput) => void
  ): Promise<ListCertificatesCommandOutput> | void {
    const command = new ListCertificatesCommand(args);
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
   * <p>Lists the connectors for the specified Region.</p>
   */
  public listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  public listConnectors(
    args: ListConnectorsCommandInput,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  public listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  public listConnectors(
    args: ListConnectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectorsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectorsCommandOutput) => void
  ): Promise<ListConnectorsCommandOutput> | void {
    const command = new ListConnectorsCommand(args);
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
   * <p>Lists all executions for the specified workflow.</p>
   */
  public listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  public listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListExecutionsCommandOutput) => void
  ): Promise<ListExecutionsCommandOutput> | void {
    const command = new ListExecutionsCommand(args);
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
   * <p>Returns a list of host keys for the server that's specified by the <code>ServerId</code>
   *       parameter.</p>
   */
  public listHostKeys(
    args: ListHostKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostKeysCommandOutput>;
  public listHostKeys(args: ListHostKeysCommandInput, cb: (err: any, data?: ListHostKeysCommandOutput) => void): void;
  public listHostKeys(
    args: ListHostKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostKeysCommandOutput) => void
  ): void;
  public listHostKeys(
    args: ListHostKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHostKeysCommandOutput) => void),
    cb?: (err: any, data?: ListHostKeysCommandOutput) => void
  ): Promise<ListHostKeysCommandOutput> | void {
    const command = new ListHostKeysCommand(args);
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
   * <p>Returns a list of the profiles for your system. If you want to limit the results to a
   *       certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the
   *       command previously and received a value for <code>NextToken</code>, you can supply that value
   *       to continue listing profiles from where you left off.</p>
   */
  public listProfiles(
    args: ListProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfilesCommandOutput>;
  public listProfiles(args: ListProfilesCommandInput, cb: (err: any, data?: ListProfilesCommandOutput) => void): void;
  public listProfiles(
    args: ListProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  public listProfiles(
    args: ListProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListProfilesCommandOutput) => void
  ): Promise<ListProfilesCommandOutput> | void {
    const command = new ListProfilesCommand(args);
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
   * <p>Lists the security policies that are attached to your file transfer protocol-enabled
   *       servers.</p>
   */
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityPoliciesCommandOutput>;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): Promise<ListSecurityPoliciesCommandOutput> | void {
    const command = new ListSecurityPoliciesCommand(args);
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
   * <p>Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services
   *       account.</p>
   */
  public listServers(args: ListServersCommandInput, options?: __HttpHandlerOptions): Promise<ListServersCommandOutput>;
  public listServers(args: ListServersCommandInput, cb: (err: any, data?: ListServersCommandOutput) => void): void;
  public listServers(
    args: ListServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServersCommandOutput) => void
  ): void;
  public listServers(
    args: ListServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServersCommandOutput) => void),
    cb?: (err: any, data?: ListServersCommandOutput) => void
  ): Promise<ListServersCommandOutput> | void {
    const command = new ListServersCommand(args);
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
   * <p>Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The
   *       resource can be a user, server, or role.</p>
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
   * <p>Lists the users for a file transfer protocol-enabled server that you specify by passing
   *       the <code>ServerId</code> parameter.</p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
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
   * <p>Lists all of your workflows.</p>
   */
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowsCommandOutput>;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): Promise<ListWorkflowsCommandOutput> | void {
    const command = new ListWorkflowsCommand(args);
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
   * <p>Sends a callback for asynchronous custom steps.</p>
   *          <p>
   *       The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow.
   *       You must include those with their callback as well as providing a status.
   *     </p>
   */
  public sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendWorkflowStepStateCommandOutput>;
  public sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    cb: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): void;
  public sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): void;
  public sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendWorkflowStepStateCommandOutput) => void),
    cb?: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): Promise<SendWorkflowStepStateCommandOutput> | void {
    const command = new SendWorkflowStepStateCommand(args);
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
   * <p>Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file
   *       paths for where to send the files. </p>
   */
  public startFileTransfer(
    args: StartFileTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFileTransferCommandOutput>;
  public startFileTransfer(
    args: StartFileTransferCommandInput,
    cb: (err: any, data?: StartFileTransferCommandOutput) => void
  ): void;
  public startFileTransfer(
    args: StartFileTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFileTransferCommandOutput) => void
  ): void;
  public startFileTransfer(
    args: StartFileTransferCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFileTransferCommandOutput) => void),
    cb?: (err: any, data?: StartFileTransferCommandOutput) => void
  ): Promise<StartFileTransferCommandOutput> | void {
    const command = new StartFileTransferCommand(args);
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
   * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to
   *         <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An
   *         <code>ONLINE</code> server can accept and process file transfer jobs.</p>
   *          <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state,
   *       either not fully able to respond, or not fully online. The values of <code>START_FAILED</code>
   *       can indicate an error condition.</p>
   *          <p>No response is returned from this call.</p>
   */
  public startServer(args: StartServerCommandInput, options?: __HttpHandlerOptions): Promise<StartServerCommandOutput>;
  public startServer(args: StartServerCommandInput, cb: (err: any, data?: StartServerCommandOutput) => void): void;
  public startServer(
    args: StartServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartServerCommandOutput) => void
  ): void;
  public startServer(
    args: StartServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartServerCommandOutput) => void),
    cb?: (err: any, data?: StartServerCommandOutput) => void
  ): Promise<StartServerCommandOutput> | void {
    const command = new StartServerCommand(args);
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
   * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to
   *         <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer
   *       jobs. Information tied to your server, such as server and user properties, are not affected by
   *       stopping your server.</p>
   *          <note>
   *             <p>Stopping the server does not reduce or impact your file transfer protocol endpoint
   *         billing; you must delete the server to stop being billed.</p>
   *          </note>
   *          <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state,
   *       either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code>
   *       can indicate an error condition.</p>
   *          <p>No response is returned from this call.</p>
   */
  public stopServer(args: StopServerCommandInput, options?: __HttpHandlerOptions): Promise<StopServerCommandOutput>;
  public stopServer(args: StopServerCommandInput, cb: (err: any, data?: StopServerCommandOutput) => void): void;
  public stopServer(
    args: StopServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopServerCommandOutput) => void
  ): void;
  public stopServer(
    args: StopServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopServerCommandOutput) => void),
    cb?: (err: any, data?: StopServerCommandOutput) => void
  ): Promise<StopServerCommandOutput> | void {
    const command = new StopServerCommand(args);
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
   * <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN).
   *       Resources are users, servers, roles, and other entities.</p>
   *          <p>There is no response returned from this call.</p>
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
   * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
   *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity
   *       provider is set up successfully. We highly recommend that you call this operation to test your
   *       authentication method as soon as you create your server. By doing so, you can troubleshoot
   *       issues with the identity provider integration to ensure that your users can successfully use
   *       the service.</p>
   *          <p>
   *       The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional.
   *     </p>
   *          <note>
   *             <p>
   *         You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>.
   *       </p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *         If you provide any incorrect values for any parameters, the <code>Response</code> field is empty.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *         If you provide a server ID for a server that uses service-managed users, you get an error:
   *       </p>
   *                <p>
   *                   <code>
   *         An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth
   *       </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *           If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error:
   *         </p>
   *                <p>
   *                   <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestIdentityProviderCommandOutput>;
  public testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    cb: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): void;
  public testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): void;
  public testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): Promise<TestIdentityProviderCommandOutput> | void {
    const command = new TestIdentityProviderCommand(args);
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
   * <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name
   *       (ARN). Resources are users, servers, roles, and other entities.</p>
   *          <p>No response is returned from this call.</p>
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
   * <p>Allows you to update parameters for the access specified in the <code>ServerID</code> and
   *       <code>ExternalID</code> parameters.</p>
   */
  public updateAccess(
    args: UpdateAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessCommandOutput>;
  public updateAccess(args: UpdateAccessCommandInput, cb: (err: any, data?: UpdateAccessCommandOutput) => void): void;
  public updateAccess(
    args: UpdateAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessCommandOutput) => void
  ): void;
  public updateAccess(
    args: UpdateAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccessCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccessCommandOutput) => void
  ): Promise<UpdateAccessCommandOutput> | void {
    const command = new UpdateAccessCommand(args);
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
   * <p>Updates some of the parameters for an existing agreement. Provide the
   *         <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to
   *       update, along with the new values for the parameters to update.</p>
   */
  public updateAgreement(
    args: UpdateAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgreementCommandOutput>;
  public updateAgreement(
    args: UpdateAgreementCommandInput,
    cb: (err: any, data?: UpdateAgreementCommandOutput) => void
  ): void;
  public updateAgreement(
    args: UpdateAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgreementCommandOutput) => void
  ): void;
  public updateAgreement(
    args: UpdateAgreementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAgreementCommandOutput) => void),
    cb?: (err: any, data?: UpdateAgreementCommandOutput) => void
  ): Promise<UpdateAgreementCommandOutput> | void {
    const command = new UpdateAgreementCommand(args);
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
   * <p>Updates the active and inactive dates for a certificate.</p>
   */
  public updateCertificate(
    args: UpdateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCertificateCommandOutput>;
  public updateCertificate(
    args: UpdateCertificateCommandInput,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;
  public updateCertificate(
    args: UpdateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;
  public updateCertificate(
    args: UpdateCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCertificateCommandOutput) => void),
    cb?: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): Promise<UpdateCertificateCommandOutput> | void {
    const command = new UpdateCertificateCommand(args);
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
   * <p>Updates some of the parameters for an existing connector. Provide the
   *         <code>ConnectorId</code> for the connector that you want to update, along with the new
   *       values for the parameters to update.</p>
   */
  public updateConnector(
    args: UpdateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorCommandOutput>;
  public updateConnector(
    args: UpdateConnectorCommandInput,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
  public updateConnector(
    args: UpdateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
  public updateConnector(
    args: UpdateConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectorCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): Promise<UpdateConnectorCommandOutput> | void {
    const command = new UpdateConnectorCommand(args);
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
   * <p>Updates the description for the host key that's specified by the <code>ServerId</code> and
   *         <code>HostKeyId</code> parameters.</p>
   */
  public updateHostKey(
    args: UpdateHostKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHostKeyCommandOutput>;
  public updateHostKey(
    args: UpdateHostKeyCommandInput,
    cb: (err: any, data?: UpdateHostKeyCommandOutput) => void
  ): void;
  public updateHostKey(
    args: UpdateHostKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHostKeyCommandOutput) => void
  ): void;
  public updateHostKey(
    args: UpdateHostKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHostKeyCommandOutput) => void),
    cb?: (err: any, data?: UpdateHostKeyCommandOutput) => void
  ): Promise<UpdateHostKeyCommandOutput> | void {
    const command = new UpdateHostKeyCommand(args);
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
   * <p>Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code>
   *       for the profile that you want to update, along with the new values for the parameters to
   *       update.</p>
   */
  public updateProfile(
    args: UpdateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileCommandOutput>;
  public updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  public updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  public updateProfile(
    args: UpdateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateProfileCommandOutput) => void
  ): Promise<UpdateProfileCommandOutput> | void {
    const command = new UpdateProfileCommand(args);
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
   * <p>Updates the file transfer protocol-enabled server's properties after that server has
   *       been created.</p>
   *          <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you
   *       updated.</p>
   */
  public updateServer(
    args: UpdateServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerCommandOutput>;
  public updateServer(args: UpdateServerCommandInput, cb: (err: any, data?: UpdateServerCommandOutput) => void): void;
  public updateServer(
    args: UpdateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerCommandOutput) => void
  ): void;
  public updateServer(
    args: UpdateServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServerCommandOutput) => void),
    cb?: (err: any, data?: UpdateServerCommandOutput) => void
  ): Promise<UpdateServerCommandOutput> | void {
    const command = new UpdateServerCommand(args);
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
   * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following:
   *       the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code>
   *       you specify.</p>
   *          <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the
   *       updated user.</p>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
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
