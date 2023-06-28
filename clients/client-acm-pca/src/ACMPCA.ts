// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ACMPCAClient, ACMPCAClientConfig } from "./ACMPCAClient";
import {
  CreateCertificateAuthorityAuditReportCommand,
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput,
} from "./commands/CreateCertificateAuthorityAuditReportCommand";
import {
  CreateCertificateAuthorityCommand,
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
} from "./commands/CreateCertificateAuthorityCommand";
import {
  CreatePermissionCommand,
  CreatePermissionCommandInput,
  CreatePermissionCommandOutput,
} from "./commands/CreatePermissionCommand";
import {
  DeleteCertificateAuthorityCommand,
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput,
} from "./commands/DeleteCertificateAuthorityCommand";
import {
  DeletePermissionCommand,
  DeletePermissionCommandInput,
  DeletePermissionCommandOutput,
} from "./commands/DeletePermissionCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DescribeCertificateAuthorityAuditReportCommand,
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput,
} from "./commands/DescribeCertificateAuthorityAuditReportCommand";
import {
  DescribeCertificateAuthorityCommand,
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput,
} from "./commands/DescribeCertificateAuthorityCommand";
import {
  GetCertificateAuthorityCertificateCommand,
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput,
} from "./commands/GetCertificateAuthorityCertificateCommand";
import {
  GetCertificateAuthorityCsrCommand,
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput,
} from "./commands/GetCertificateAuthorityCsrCommand";
import {
  GetCertificateCommand,
  GetCertificateCommandInput,
  GetCertificateCommandOutput,
} from "./commands/GetCertificateCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  ImportCertificateAuthorityCertificateCommand,
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput,
} from "./commands/ImportCertificateAuthorityCertificateCommand";
import {
  IssueCertificateCommand,
  IssueCertificateCommandInput,
  IssueCertificateCommandOutput,
} from "./commands/IssueCertificateCommand";
import {
  ListCertificateAuthoritiesCommand,
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "./commands/ListCertificateAuthoritiesCommand";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "./commands/ListPermissionsCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { PutPolicyCommand, PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand";
import {
  RestoreCertificateAuthorityCommand,
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput,
} from "./commands/RestoreCertificateAuthorityCommand";
import {
  RevokeCertificateCommand,
  RevokeCertificateCommandInput,
  RevokeCertificateCommandOutput,
} from "./commands/RevokeCertificateCommand";
import {
  TagCertificateAuthorityCommand,
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
} from "./commands/TagCertificateAuthorityCommand";
import {
  UntagCertificateAuthorityCommand,
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput,
} from "./commands/UntagCertificateAuthorityCommand";
import {
  UpdateCertificateAuthorityCommand,
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput,
} from "./commands/UpdateCertificateAuthorityCommand";

const commands = {
  CreateCertificateAuthorityCommand,
  CreateCertificateAuthorityAuditReportCommand,
  CreatePermissionCommand,
  DeleteCertificateAuthorityCommand,
  DeletePermissionCommand,
  DeletePolicyCommand,
  DescribeCertificateAuthorityCommand,
  DescribeCertificateAuthorityAuditReportCommand,
  GetCertificateCommand,
  GetCertificateAuthorityCertificateCommand,
  GetCertificateAuthorityCsrCommand,
  GetPolicyCommand,
  ImportCertificateAuthorityCertificateCommand,
  IssueCertificateCommand,
  ListCertificateAuthoritiesCommand,
  ListPermissionsCommand,
  ListTagsCommand,
  PutPolicyCommand,
  RestoreCertificateAuthorityCommand,
  RevokeCertificateCommand,
  TagCertificateAuthorityCommand,
  UntagCertificateAuthorityCommand,
  UpdateCertificateAuthorityCommand,
};

export interface ACMPCA {
  /**
   * @see {@link CreateCertificateAuthorityCommand}
   */
  createCertificateAuthority(
    args: CreateCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCertificateAuthorityCommandOutput>;
  createCertificateAuthority(
    args: CreateCertificateAuthorityCommandInput,
    cb: (err: any, data?: CreateCertificateAuthorityCommandOutput) => void
  ): void;
  createCertificateAuthority(
    args: CreateCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCertificateAuthorityAuditReportCommand}
   */
  createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCertificateAuthorityAuditReportCommandOutput>;
  createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportCommandInput,
    cb: (err: any, data?: CreateCertificateAuthorityAuditReportCommandOutput) => void
  ): void;
  createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCertificateAuthorityAuditReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePermissionCommand}
   */
  createPermission(
    args: CreatePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePermissionCommandOutput>;
  createPermission(
    args: CreatePermissionCommandInput,
    cb: (err: any, data?: CreatePermissionCommandOutput) => void
  ): void;
  createPermission(
    args: CreatePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCertificateAuthorityCommand}
   */
  deleteCertificateAuthority(
    args: DeleteCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateAuthorityCommandOutput>;
  deleteCertificateAuthority(
    args: DeleteCertificateAuthorityCommandInput,
    cb: (err: any, data?: DeleteCertificateAuthorityCommandOutput) => void
  ): void;
  deleteCertificateAuthority(
    args: DeleteCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionCommand}
   */
  deletePermission(
    args: DeletePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionCommandOutput>;
  deletePermission(
    args: DeletePermissionCommandInput,
    cb: (err: any, data?: DeletePermissionCommandOutput) => void
  ): void;
  deletePermission(
    args: DeletePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificateAuthorityCommand}
   */
  describeCertificateAuthority(
    args: DescribeCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateAuthorityCommandOutput>;
  describeCertificateAuthority(
    args: DescribeCertificateAuthorityCommandInput,
    cb: (err: any, data?: DescribeCertificateAuthorityCommandOutput) => void
  ): void;
  describeCertificateAuthority(
    args: DescribeCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificateAuthorityAuditReportCommand}
   */
  describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateAuthorityAuditReportCommandOutput>;
  describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportCommandInput,
    cb: (err: any, data?: DescribeCertificateAuthorityAuditReportCommandOutput) => void
  ): void;
  describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateAuthorityAuditReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCertificateCommand}
   */
  getCertificate(
    args: GetCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateCommandOutput>;
  getCertificate(args: GetCertificateCommandInput, cb: (err: any, data?: GetCertificateCommandOutput) => void): void;
  getCertificate(
    args: GetCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCertificateAuthorityCertificateCommand}
   */
  getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateAuthorityCertificateCommandOutput>;
  getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateCommandInput,
    cb: (err: any, data?: GetCertificateAuthorityCertificateCommandOutput) => void
  ): void;
  getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificateAuthorityCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCertificateAuthorityCsrCommand}
   */
  getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateAuthorityCsrCommandOutput>;
  getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrCommandInput,
    cb: (err: any, data?: GetCertificateAuthorityCsrCommandOutput) => void
  ): void;
  getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificateAuthorityCsrCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCertificateAuthorityCertificateCommand}
   */
  importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCertificateAuthorityCertificateCommandOutput>;
  importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateCommandInput,
    cb: (err: any, data?: ImportCertificateAuthorityCertificateCommandOutput) => void
  ): void;
  importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCertificateAuthorityCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link IssueCertificateCommand}
   */
  issueCertificate(
    args: IssueCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IssueCertificateCommandOutput>;
  issueCertificate(
    args: IssueCertificateCommandInput,
    cb: (err: any, data?: IssueCertificateCommandOutput) => void
  ): void;
  issueCertificate(
    args: IssueCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IssueCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificateAuthoritiesCommand}
   */
  listCertificateAuthorities(
    args: ListCertificateAuthoritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificateAuthoritiesCommandOutput>;
  listCertificateAuthorities(
    args: ListCertificateAuthoritiesCommandInput,
    cb: (err: any, data?: ListCertificateAuthoritiesCommandOutput) => void
  ): void;
  listCertificateAuthorities(
    args: ListCertificateAuthoritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificateAuthoritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionsCommand}
   */
  listPermissions(
    args: ListPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionsCommandOutput>;
  listPermissions(args: ListPermissionsCommandInput, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
  listPermissions(
    args: ListPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPolicyCommand}
   */
  putPolicy(args: PutPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutPolicyCommandOutput>;
  putPolicy(args: PutPolicyCommandInput, cb: (err: any, data?: PutPolicyCommandOutput) => void): void;
  putPolicy(
    args: PutPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreCertificateAuthorityCommand}
   */
  restoreCertificateAuthority(
    args: RestoreCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreCertificateAuthorityCommandOutput>;
  restoreCertificateAuthority(
    args: RestoreCertificateAuthorityCommandInput,
    cb: (err: any, data?: RestoreCertificateAuthorityCommandOutput) => void
  ): void;
  restoreCertificateAuthority(
    args: RestoreCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeCertificateCommand}
   */
  revokeCertificate(
    args: RevokeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeCertificateCommandOutput>;
  revokeCertificate(
    args: RevokeCertificateCommandInput,
    cb: (err: any, data?: RevokeCertificateCommandOutput) => void
  ): void;
  revokeCertificate(
    args: RevokeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link TagCertificateAuthorityCommand}
   */
  tagCertificateAuthority(
    args: TagCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagCertificateAuthorityCommandOutput>;
  tagCertificateAuthority(
    args: TagCertificateAuthorityCommandInput,
    cb: (err: any, data?: TagCertificateAuthorityCommandOutput) => void
  ): void;
  tagCertificateAuthority(
    args: TagCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagCertificateAuthorityCommand}
   */
  untagCertificateAuthority(
    args: UntagCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagCertificateAuthorityCommandOutput>;
  untagCertificateAuthority(
    args: UntagCertificateAuthorityCommandInput,
    cb: (err: any, data?: UntagCertificateAuthorityCommandOutput) => void
  ): void;
  untagCertificateAuthority(
    args: UntagCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCertificateAuthorityCommand}
   */
  updateCertificateAuthority(
    args: UpdateCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCertificateAuthorityCommandOutput>;
  updateCertificateAuthority(
    args: UpdateCertificateAuthorityCommandInput,
    cb: (err: any, data?: UpdateCertificateAuthorityCommandOutput) => void
  ): void;
  updateCertificateAuthority(
    args: UpdateCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCertificateAuthorityCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the <i>Amazon Web Services Private Certificate Authority API Reference</i>. It provides descriptions,
 * 			syntax, and usage examples for each of the actions and data types involved in creating
 * 			and managing a private certificate authority (CA) for your organization.</p>
 *          <p>The documentation for each action shows the API request parameters and the JSON
 * 			response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is
 * 			tailored to the programming language or platform that you prefer. For more information,
 * 			see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>Each Amazon Web Services Private CA API operation has a quota that determines the number of times the
 * 			operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates
 * 			depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid
 * 			request because the request exceeds the operation's quota for the number of requests per
 * 			second. When a request is throttled, Amazon Web Services Private CA returns a <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/CommonErrors.html">ThrottlingException</a> error. Amazon Web Services Private CA does not guarantee a minimum request
 * 			rate for APIs. </p>
 *          <p>To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase,
 * 			log into your Amazon Web Services account and visit the <a href="https://console.aws.amazon.com/servicequotas/">Service Quotas</a>
 * 			console.</p>
 */
export class ACMPCA extends ACMPCAClient implements ACMPCA {}
createAggregatedClient(commands, ACMPCA);
