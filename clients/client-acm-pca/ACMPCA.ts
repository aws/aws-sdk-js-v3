import { ACMPCAClient } from "./ACMPCAClient";
import {
  CreateCertificateAuthorityAuditReportCommand,
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput
} from "./commands/CreateCertificateAuthorityAuditReportCommand";
import {
  CreateCertificateAuthorityCommand,
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput
} from "./commands/CreateCertificateAuthorityCommand";
import {
  CreatePermissionCommand,
  CreatePermissionCommandInput,
  CreatePermissionCommandOutput
} from "./commands/CreatePermissionCommand";
import {
  DeleteCertificateAuthorityCommand,
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput
} from "./commands/DeleteCertificateAuthorityCommand";
import {
  DeletePermissionCommand,
  DeletePermissionCommandInput,
  DeletePermissionCommandOutput
} from "./commands/DeletePermissionCommand";
import {
  DescribeCertificateAuthorityAuditReportCommand,
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput
} from "./commands/DescribeCertificateAuthorityAuditReportCommand";
import {
  DescribeCertificateAuthorityCommand,
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput
} from "./commands/DescribeCertificateAuthorityCommand";
import {
  GetCertificateAuthorityCertificateCommand,
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput
} from "./commands/GetCertificateAuthorityCertificateCommand";
import {
  GetCertificateAuthorityCsrCommand,
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput
} from "./commands/GetCertificateAuthorityCsrCommand";
import {
  GetCertificateCommand,
  GetCertificateCommandInput,
  GetCertificateCommandOutput
} from "./commands/GetCertificateCommand";
import {
  ImportCertificateAuthorityCertificateCommand,
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput
} from "./commands/ImportCertificateAuthorityCertificateCommand";
import {
  IssueCertificateCommand,
  IssueCertificateCommandInput,
  IssueCertificateCommandOutput
} from "./commands/IssueCertificateCommand";
import {
  ListCertificateAuthoritiesCommand,
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput
} from "./commands/ListCertificateAuthoritiesCommand";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
} from "./commands/ListPermissionsCommand";
import {
  ListTagsCommand,
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "./commands/ListTagsCommand";
import {
  RestoreCertificateAuthorityCommand,
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput
} from "./commands/RestoreCertificateAuthorityCommand";
import {
  RevokeCertificateCommand,
  RevokeCertificateCommandInput,
  RevokeCertificateCommandOutput
} from "./commands/RevokeCertificateCommand";
import {
  TagCertificateAuthorityCommand,
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput
} from "./commands/TagCertificateAuthorityCommand";
import {
  UntagCertificateAuthorityCommand,
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput
} from "./commands/UntagCertificateAuthorityCommand";
import {
  UpdateCertificateAuthorityCommand,
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput
} from "./commands/UpdateCertificateAuthorityCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>This is the <i>ACM Private CA API Reference</i>. It provides descriptions,
 * 			syntax, and usage examples for each of the actions and data types involved in creating
 * 			and managing private certificate authorities (CA) for your organization.</p>
 * 		       <p>The documentation for each action shows the Query API request parameters and the XML
 * 			response. Alternatively, you can use one of the AWS SDKs to access an API that's
 * 			tailored to the programming language or platform that you're using. For more
 * 			information, see <a href="https://aws.amazon.com/tools/#SDKs">AWS
 * 			SDKs</a>.</p>
 * 		       <note>
 * 			         <p>Each ACM Private CA API action has a throttling limit which determines the number of times
 * 				the action can be called per second. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaLimits.html#PcaLimits-api">API Rate Limits in ACM Private CA</a>
 * 				in the ACM Private CA user guide.</p>
 * 		       </note>
 */
export class ACMPCA extends ACMPCAClient {
  /**
   * <p>Creates a root or subordinate private certificate authority (CA). You must specify the CA
   * 			configuration, the certificate revocation list (CRL) configuration, the CA type, and an
   * 			optional idempotency token to avoid accidental creation of multiple CAs. The CA
   * 			configuration specifies the name of the algorithm and key size to be used to create the
   * 			CA private key, the type of signing algorithm that the CA uses, and X.500 subject
   * 			information. The CRL configuration specifies the CRL expiration period in days (the
   * 			validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME
   * 			alias for the S3 bucket that is included in certificates issued by the CA. If
   * 			successful, this action returns the Amazon Resource Name (ARN) of the CA.</p>
   */
  public createCertificateAuthority(
    args: CreateCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCertificateAuthorityCommandOutput>;
  public createCertificateAuthority(
    args: CreateCertificateAuthorityCommandInput,
    cb: (err: any, data?: CreateCertificateAuthorityCommandOutput) => void
  ): void;
  public createCertificateAuthority(
    args: CreateCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCertificateAuthorityCommandOutput) => void
  ): void;
  public createCertificateAuthority(
    args: CreateCertificateAuthorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: CreateCertificateAuthorityCommandOutput) => void
  ): Promise<CreateCertificateAuthorityCommandOutput> | void {
    const command = new CreateCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an audit report that lists every time that your CA private key is used. The report
   * 			is saved in the Amazon S3 bucket that you specify on input. The <a>IssueCertificate</a> and <a>RevokeCertificate</a> actions use the
   * 			private key.</p>
   */
  public createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCertificateAuthorityAuditReportCommandOutput>;
  public createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportCommandInput,
    cb: (
      err: any,
      data?: CreateCertificateAuthorityAuditReportCommandOutput
    ) => void
  ): void;
  public createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreateCertificateAuthorityAuditReportCommandOutput
    ) => void
  ): void;
  public createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateCertificateAuthorityAuditReportCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateCertificateAuthorityAuditReportCommandOutput
    ) => void
  ): Promise<CreateCertificateAuthorityAuditReportCommandOutput> | void {
    const command = new CreateCertificateAuthorityAuditReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns permissions from a private CA to a designated AWS service. Services are
   * 			specified by their service principals and can be given permission to create and retrieve
   * 			certificates on a private CA. Services can also be given permission to list the active
   * 			permissions that the private CA has granted. For ACM to automatically renew your
   * 			private CA's certificates, you must assign all possible permissions from the CA to the
   * 			ACM service principal.</p>
   * 		       <p>At this time, you can only assign permissions to ACM (<code>acm.amazonaws.com</code>).
   * 			Permissions can be revoked with the <a>DeletePermission</a> action and listed
   * 			with the <a>ListPermissions</a> action.</p>
   */
  public createPermission(
    args: CreatePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePermissionCommandOutput>;
  public createPermission(
    args: CreatePermissionCommandInput,
    cb: (err: any, data?: CreatePermissionCommandOutput) => void
  ): void;
  public createPermission(
    args: CreatePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePermissionCommandOutput) => void
  ): void;
  public createPermission(
    args: CreatePermissionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreatePermissionCommandOutput) => void),
    cb?: (err: any, data?: CreatePermissionCommandOutput) => void
  ): Promise<CreatePermissionCommandOutput> | void {
    const command = new CreatePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource
   * 			Name (ARN) of the private CA that you want to delete. You can find the ARN by calling
   * 			the <a>ListCertificateAuthorities</a> action. </p>
   * 		       <note>
   * 			         <p>Deleting a CA will invalidate other CAs and certificates below it in your CA
   * 				hierarchy.</p>
   * 		       </note>
   * 		       <p>Before you can delete a CA that you have created and activated, you must disable it.
   * 			To do this, call the <a>UpdateCertificateAuthority</a> action and set the
   * 				<b>CertificateAuthorityStatus</b> parameter to
   * 				<code>DISABLED</code>. </p>
   * 		       <p>Additionally, you can delete a CA if you are waiting for it to be created (that is,
   * 			the status of the CA is <code>CREATING</code>). You can also delete it if the CA has
   * 			been created but you haven't yet imported the signed certificate  into ACM Private CA (that is,
   * 			the status of the CA is <code>PENDING_CERTIFICATE</code>). </p>
   * 		       <p>When you successfully call <a>DeleteCertificateAuthority</a>, the CA's
   * 			status changes to <code>DELETED</code>. However, the CA won't be permanently deleted
   * 			until the restoration period has passed. By default, if you do not set the
   * 				<code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30
   * 			days. You can set the parameter from 7 to 30 days. The <a>DescribeCertificateAuthority</a> action returns the time remaining in the
   * 			restoration window of a private CA in the <code>DELETED</code> state. To restore an
   * 			eligible CA, call the <a>RestoreCertificateAuthority</a> action.</p>
   */
  public deleteCertificateAuthority(
    args: DeleteCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateAuthorityCommandOutput>;
  public deleteCertificateAuthority(
    args: DeleteCertificateAuthorityCommandInput,
    cb: (err: any, data?: DeleteCertificateAuthorityCommandOutput) => void
  ): void;
  public deleteCertificateAuthority(
    args: DeleteCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateAuthorityCommandOutput) => void
  ): void;
  public deleteCertificateAuthority(
    args: DeleteCertificateAuthorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: DeleteCertificateAuthorityCommandOutput) => void
  ): Promise<DeleteCertificateAuthorityCommandOutput> | void {
    const command = new DeleteCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Revokes permissions that a private CA assigned to a designated AWS service. Permissions
   * 			can be created with the <a>CreatePermission</a> action and listed with the
   * 				<a>ListPermissions</a> action. </p>
   */
  public deletePermission(
    args: DeletePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionCommandOutput>;
  public deletePermission(
    args: DeletePermissionCommandInput,
    cb: (err: any, data?: DeletePermissionCommandOutput) => void
  ): void;
  public deletePermission(
    args: DeletePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionCommandOutput) => void
  ): void;
  public deletePermission(
    args: DeletePermissionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePermissionCommandOutput) => void),
    cb?: (err: any, data?: DeletePermissionCommandOutput) => void
  ): Promise<DeletePermissionCommandOutput> | void {
    const command = new DeletePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists information about your private certificate authority (CA). You specify the
   * 			private CA on input by its ARN (Amazon Resource Name). The output contains the status of
   * 			your CA. This can be any of the following: </p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>CREATING</code> - ACM Private CA is creating your private certificate
   * 					authority.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your
   * 					ACM Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR
   * 					and then import it into PCA. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>ACTIVE</code> - Your private CA is active.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>DISABLED</code> - Your private CA has been disabled.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>EXPIRED</code> - Your private CA certificate has expired.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>FAILED</code> - Your private CA has failed. Your CA can fail because of
   * 					problems such a network outage or backend AWS failure or other errors. A
   * 					failed CA can never return to the pending state. You must create a new CA.
   * 				</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>DELETED</code> - Your private CA is within the restoration period, after which it is
   * 					permanently deleted. The length of time remaining in the CA's restoration period
   * 					is also included in this action's output.</p>
   * 			         </li>
   *          </ul>
   */
  public describeCertificateAuthority(
    args: DescribeCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateAuthorityCommandOutput>;
  public describeCertificateAuthority(
    args: DescribeCertificateAuthorityCommandInput,
    cb: (err: any, data?: DescribeCertificateAuthorityCommandOutput) => void
  ): void;
  public describeCertificateAuthority(
    args: DescribeCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateAuthorityCommandOutput) => void
  ): void;
  public describeCertificateAuthority(
    args: DescribeCertificateAuthorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: DescribeCertificateAuthorityCommandOutput) => void
  ): Promise<DescribeCertificateAuthorityCommandOutput> | void {
    const command = new DescribeCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists information about a specific audit report created by calling the <a>CreateCertificateAuthorityAuditReport</a> action. Audit information is
   * 			created every time the certificate authority (CA) private key is used. The private key
   * 			is used when you call the <a>IssueCertificate</a> action or the <a>RevokeCertificate</a> action. </p>
   */
  public describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateAuthorityAuditReportCommandOutput>;
  public describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportCommandInput,
    cb: (
      err: any,
      data?: DescribeCertificateAuthorityAuditReportCommandOutput
    ) => void
  ): void;
  public describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeCertificateAuthorityAuditReportCommandOutput
    ) => void
  ): void;
  public describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeCertificateAuthorityAuditReportCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeCertificateAuthorityAuditReportCommandOutput
    ) => void
  ): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> | void {
    const command = new DescribeCertificateAuthorityAuditReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a certificate from your private CA. The ARN of the certificate is returned when
   * 			you call the <a>IssueCertificate</a> action. You must specify both the ARN of
   * 			your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it
   * 			is in the <b>ISSUED</b> state. You can call the <a>CreateCertificateAuthorityAuditReport</a> action to create a report that
   * 			contains information about all of the certificates issued and revoked by your private
   * 			CA. </p>
   */
  public getCertificate(
    args: GetCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateCommandOutput>;
  public getCertificate(
    args: GetCertificateCommandInput,
    cb: (err: any, data?: GetCertificateCommandOutput) => void
  ): void;
  public getCertificate(
    args: GetCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificateCommandOutput) => void
  ): void;
  public getCertificate(
    args: GetCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetCertificateCommandOutput) => void),
    cb?: (err: any, data?: GetCertificateCommandOutput) => void
  ): Promise<GetCertificateCommandOutput> | void {
    const command = new GetCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the certificate and certificate chain for your private certificate authority
   * 			(CA). Both the certificate and the chain are base64 PEM-encoded. The chain does not
   * 			include the CA certificate. Each certificate in the chain signs the one before it. </p>
   */
  public getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateAuthorityCertificateCommandOutput>;
  public getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateCommandInput,
    cb: (
      err: any,
      data?: GetCertificateAuthorityCertificateCommandOutput
    ) => void
  ): void;
  public getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetCertificateAuthorityCertificateCommandOutput
    ) => void
  ): void;
  public getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetCertificateAuthorityCertificateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetCertificateAuthorityCertificateCommandOutput
    ) => void
  ): Promise<GetCertificateAuthorityCertificateCommandOutput> | void {
    const command = new GetCertificateAuthorityCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the certificate signing request (CSR) for your private certificate authority (CA).
   * 			The CSR is created when you call the <a>CreateCertificateAuthority</a>
   * 			action. Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA. Then
   * 			import the signed certificate back into ACM Private CA by calling the <a>ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a
   * 			base64 PEM-encoded string. </p>
   */
  public getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateAuthorityCsrCommandOutput>;
  public getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrCommandInput,
    cb: (err: any, data?: GetCertificateAuthorityCsrCommandOutput) => void
  ): void;
  public getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificateAuthorityCsrCommandOutput) => void
  ): void;
  public getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetCertificateAuthorityCsrCommandOutput) => void),
    cb?: (err: any, data?: GetCertificateAuthorityCsrCommandOutput) => void
  ): Promise<GetCertificateAuthorityCsrCommandOutput> | void {
    const command = new GetCertificateAuthorityCsrCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Imports a signed
   * 			private CA certificate into ACM Private CA. This action is used when you are using a chain of
   * 			trust whose root is located outside ACM Private CA. Before you can call this action, the
   * 			following preparations must in place:</p>
   *
   * 		       <ol>
   *             <li>
   *                <p>In ACM Private CA,  call the <a>CreateCertificateAuthority</a> action to create the private
   * 					CA that that you plan to back with the imported certificate.</p>
   *             </li>
   *             <li>
   *                <p>Call the <a>GetCertificateAuthorityCsr</a> action to generate a certificate signing
   * 					request (CSR).</p>
   *             </li>
   *             <li>
   *                <p>Sign the CSR using a root or intermediate CA hosted either by an on-premises PKI hierarchy or
   * 					a commercial CA..</p>
   *             </li>
   *             <li>
   *                <p>Create a
   * 					certificate chain and copy the signed certificate and the certificate chain to your
   * 					working directory.</p>
   *             </li>
   *          </ol>
   *
   * 		       <p>The following requirements apply when you import a CA certificate.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You cannot import a non-self-signed certificate for use as a root CA.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You cannot import a self-signed certificate for use as a subordinate
   * 					CA.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Your certificate chain must not include the private CA certificate that you
   * 					are importing.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Your ACM Private CA-hosted or on-premises CA certificate must be the last certificate
   * 					in your chain. The subordinate certificate, if any, that your root CA signed
   * 					must be next to last. The subordinate certificate signed by the preceding
   * 					subordinate CA must come next, and so on until your chain is built. </p>
   * 			         </li>
   *             <li>
   * 				           <p>The chain must be PEM-encoded.</p>
   * 			         </li>
   *          </ul>
   */
  public importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCertificateAuthorityCertificateCommandOutput>;
  public importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateCommandInput,
    cb: (
      err: any,
      data?: ImportCertificateAuthorityCertificateCommandOutput
    ) => void
  ): void;
  public importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ImportCertificateAuthorityCertificateCommandOutput
    ) => void
  ): void;
  public importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ImportCertificateAuthorityCertificateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ImportCertificateAuthorityCertificateCommandOutput
    ) => void
  ): Promise<ImportCertificateAuthorityCertificateCommandOutput> | void {
    const command = new ImportCertificateAuthorityCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uses your private certificate authority (CA) to issue a client certificate. This action
   * 			returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the
   * 			certificate by calling the <a>GetCertificate</a> action and specifying the
   * 			ARN. </p>
   * 		       <note>
   * 			         <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action
   * 				to retrieve the ARNs of the certificates that you issue by using ACM Private CA.</p>
   * 		       </note>
   */
  public issueCertificate(
    args: IssueCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IssueCertificateCommandOutput>;
  public issueCertificate(
    args: IssueCertificateCommandInput,
    cb: (err: any, data?: IssueCertificateCommandOutput) => void
  ): void;
  public issueCertificate(
    args: IssueCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IssueCertificateCommandOutput) => void
  ): void;
  public issueCertificate(
    args: IssueCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: IssueCertificateCommandOutput) => void),
    cb?: (err: any, data?: IssueCertificateCommandOutput) => void
  ): Promise<IssueCertificateCommandOutput> | void {
    const command = new IssueCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the private certificate authorities that you created by using the <a>CreateCertificateAuthority</a> action.</p>
   */
  public listCertificateAuthorities(
    args: ListCertificateAuthoritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificateAuthoritiesCommandOutput>;
  public listCertificateAuthorities(
    args: ListCertificateAuthoritiesCommandInput,
    cb: (err: any, data?: ListCertificateAuthoritiesCommandOutput) => void
  ): void;
  public listCertificateAuthorities(
    args: ListCertificateAuthoritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificateAuthoritiesCommandOutput) => void
  ): void;
  public listCertificateAuthorities(
    args: ListCertificateAuthoritiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCertificateAuthoritiesCommandOutput) => void),
    cb?: (err: any, data?: ListCertificateAuthoritiesCommandOutput) => void
  ): Promise<ListCertificateAuthoritiesCommandOutput> | void {
    const command = new ListCertificateAuthoritiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the permissions, if any, that have been assigned by a private CA. Permissions can
   * 			be granted with the <a>CreatePermission</a> action and revoked with the <a>DeletePermission</a> action.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPermissionsCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionsCommandOutput) => void
  ): Promise<ListPermissionsCommandOutput> | void {
    const command = new ListPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags, if any, that are associated with your private CA. Tags are labels that you
   * 			can use to identify and organize your CAs. Each tag consists of a key and an optional
   * 			value. Call the <a>TagCertificateAuthority</a> action to add one or more tags
   * 			to your CA. Call the <a>UntagCertificateAuthority</a> action to remove tags. </p>
   */
  public listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  public listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can
   * 			restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a>DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30
   * 			days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at
   * 			any time in a 30 day period. You can check the time remaining in the restoration period
   * 			of a private CA in the <code>DELETED</code> state by calling the <a>DescribeCertificateAuthority</a> or <a>ListCertificateAuthorities</a> actions. The status of a restored CA is set
   * 			to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to
   * 				<code>ACTIVE</code>, call the <a>UpdateCertificateAuthority</a> action.
   * 			If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you
   * 			must use the <a>ImportCertificateAuthorityCertificate</a> action to import a
   * 			certificate authority into the private CA before it can be activated. You cannot restore
   * 			a CA after the restoration period has ended.</p>
   */
  public restoreCertificateAuthority(
    args: RestoreCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreCertificateAuthorityCommandOutput>;
  public restoreCertificateAuthority(
    args: RestoreCertificateAuthorityCommandInput,
    cb: (err: any, data?: RestoreCertificateAuthorityCommandOutput) => void
  ): void;
  public restoreCertificateAuthority(
    args: RestoreCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreCertificateAuthorityCommandOutput) => void
  ): void;
  public restoreCertificateAuthority(
    args: RestoreCertificateAuthorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RestoreCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: RestoreCertificateAuthorityCommandOutput) => void
  ): Promise<RestoreCertificateAuthorityCommandOutput> | void {
    const command = new RestoreCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Revokes a certificate that was issued inside ACM Private CA. If you enable a certificate
   * 			revocation list (CRL) when you create or update your private CA, information about the
   * 			revoked certificates will be included in the CRL. ACM Private CA writes the CRL to an S3 bucket
   * 			that you specify. For more information about revocation, see the <a>CrlConfiguration</a> structure. ACM Private CA also writes revocation information to
   * 			the audit report. For more information, see <a>CreateCertificateAuthorityAuditReport</a>. </p>
   * 		       <note>
   * 			         <p>You cannot revoke a root CA self-signed certificate.</p>
   * 		       </note>
   */
  public revokeCertificate(
    args: RevokeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeCertificateCommandOutput>;
  public revokeCertificate(
    args: RevokeCertificateCommandInput,
    cb: (err: any, data?: RevokeCertificateCommandOutput) => void
  ): void;
  public revokeCertificate(
    args: RevokeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeCertificateCommandOutput) => void
  ): void;
  public revokeCertificate(
    args: RevokeCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RevokeCertificateCommandOutput) => void),
    cb?: (err: any, data?: RevokeCertificateCommandOutput) => void
  ): Promise<RevokeCertificateCommandOutput> | void {
    const command = new RevokeCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and
   * 			organize your AWS resources. Each tag consists of a key and an optional value. You
   * 			specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag
   * 			by using a key-value pair. You can apply a tag to just one private CA if you want to
   * 			identify a specific characteristic of that CA, or you can apply the same tag to multiple
   * 			private CAs if you want to filter for a common relationship among those CAs. To remove
   * 			one or more tags, use the <a>UntagCertificateAuthority</a> action. Call the
   * 				<a>ListTags</a> action to see what tags are associated with your CA. </p>
   */
  public tagCertificateAuthority(
    args: TagCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagCertificateAuthorityCommandOutput>;
  public tagCertificateAuthority(
    args: TagCertificateAuthorityCommandInput,
    cb: (err: any, data?: TagCertificateAuthorityCommandOutput) => void
  ): void;
  public tagCertificateAuthority(
    args: TagCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagCertificateAuthorityCommandOutput) => void
  ): void;
  public tagCertificateAuthority(
    args: TagCertificateAuthorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: TagCertificateAuthorityCommandOutput) => void
  ): Promise<TagCertificateAuthorityCommandOutput> | void {
    const command = new TagCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do
   * 			not specify the value portion of the tag when calling this action, the tag will be
   * 			removed regardless of value. If you specify a value, the tag is removed only if it is
   * 			associated with the specified value. To add tags to a private CA, use the <a>TagCertificateAuthority</a>. Call the <a>ListTags</a> action to
   * 			see what tags are associated with your CA. </p>
   */
  public untagCertificateAuthority(
    args: UntagCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagCertificateAuthorityCommandOutput>;
  public untagCertificateAuthority(
    args: UntagCertificateAuthorityCommandInput,
    cb: (err: any, data?: UntagCertificateAuthorityCommandOutput) => void
  ): void;
  public untagCertificateAuthority(
    args: UntagCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagCertificateAuthorityCommandOutput) => void
  ): void;
  public untagCertificateAuthority(
    args: UntagCertificateAuthorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: UntagCertificateAuthorityCommandOutput) => void
  ): Promise<UntagCertificateAuthorityCommandOutput> | void {
    const command = new UntagCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the status or configuration of a private certificate authority (CA). Your
   * 			private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you
   * 			can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or
   * 			make a CA that is in the <code>DISABLED</code> state active again.</p>
   */
  public updateCertificateAuthority(
    args: UpdateCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCertificateAuthorityCommandOutput>;
  public updateCertificateAuthority(
    args: UpdateCertificateAuthorityCommandInput,
    cb: (err: any, data?: UpdateCertificateAuthorityCommandOutput) => void
  ): void;
  public updateCertificateAuthority(
    args: UpdateCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCertificateAuthorityCommandOutput) => void
  ): void;
  public updateCertificateAuthority(
    args: UpdateCertificateAuthorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: UpdateCertificateAuthorityCommandOutput) => void
  ): Promise<UpdateCertificateAuthorityCommandOutput> | void {
    const command = new UpdateCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
