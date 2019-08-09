import { ACMPCAClient } from "./ACMPCAClient";
import { CertificateMismatchException } from "./types/CertificateMismatchException";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateCertificateAuthorityAuditReportInput } from "./types/CreateCertificateAuthorityAuditReportInput";
import { CreateCertificateAuthorityAuditReportOutput } from "./types/CreateCertificateAuthorityAuditReportOutput";
import { CreateCertificateAuthorityInput } from "./types/CreateCertificateAuthorityInput";
import { CreateCertificateAuthorityOutput } from "./types/CreateCertificateAuthorityOutput";
import { CreatePermissionInput } from "./types/CreatePermissionInput";
import { CreatePermissionOutput } from "./types/CreatePermissionOutput";
import { DeleteCertificateAuthorityInput } from "./types/DeleteCertificateAuthorityInput";
import { DeleteCertificateAuthorityOutput } from "./types/DeleteCertificateAuthorityOutput";
import { DeletePermissionInput } from "./types/DeletePermissionInput";
import { DeletePermissionOutput } from "./types/DeletePermissionOutput";
import { DescribeCertificateAuthorityAuditReportInput } from "./types/DescribeCertificateAuthorityAuditReportInput";
import { DescribeCertificateAuthorityAuditReportOutput } from "./types/DescribeCertificateAuthorityAuditReportOutput";
import { DescribeCertificateAuthorityInput } from "./types/DescribeCertificateAuthorityInput";
import { DescribeCertificateAuthorityOutput } from "./types/DescribeCertificateAuthorityOutput";
import { GetCertificateAuthorityCertificateInput } from "./types/GetCertificateAuthorityCertificateInput";
import { GetCertificateAuthorityCertificateOutput } from "./types/GetCertificateAuthorityCertificateOutput";
import { GetCertificateAuthorityCsrInput } from "./types/GetCertificateAuthorityCsrInput";
import { GetCertificateAuthorityCsrOutput } from "./types/GetCertificateAuthorityCsrOutput";
import { GetCertificateInput } from "./types/GetCertificateInput";
import { GetCertificateOutput } from "./types/GetCertificateOutput";
import { ImportCertificateAuthorityCertificateInput } from "./types/ImportCertificateAuthorityCertificateInput";
import { ImportCertificateAuthorityCertificateOutput } from "./types/ImportCertificateAuthorityCertificateOutput";
import { InvalidArgsException } from "./types/InvalidArgsException";
import { InvalidArnException } from "./types/InvalidArnException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidPolicyException } from "./types/InvalidPolicyException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { InvalidStateException } from "./types/InvalidStateException";
import { InvalidTagException } from "./types/InvalidTagException";
import { IssueCertificateInput } from "./types/IssueCertificateInput";
import { IssueCertificateOutput } from "./types/IssueCertificateOutput";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListCertificateAuthoritiesInput } from "./types/ListCertificateAuthoritiesInput";
import { ListCertificateAuthoritiesOutput } from "./types/ListCertificateAuthoritiesOutput";
import { ListPermissionsInput } from "./types/ListPermissionsInput";
import { ListPermissionsOutput } from "./types/ListPermissionsOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { MalformedCSRException } from "./types/MalformedCSRException";
import { MalformedCertificateException } from "./types/MalformedCertificateException";
import { PermissionAlreadyExistsException } from "./types/PermissionAlreadyExistsException";
import { RequestAlreadyProcessedException } from "./types/RequestAlreadyProcessedException";
import { RequestFailedException } from "./types/RequestFailedException";
import { RequestInProgressException } from "./types/RequestInProgressException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RestoreCertificateAuthorityInput } from "./types/RestoreCertificateAuthorityInput";
import { RestoreCertificateAuthorityOutput } from "./types/RestoreCertificateAuthorityOutput";
import { RevokeCertificateInput } from "./types/RevokeCertificateInput";
import { RevokeCertificateOutput } from "./types/RevokeCertificateOutput";
import { TagCertificateAuthorityInput } from "./types/TagCertificateAuthorityInput";
import { TagCertificateAuthorityOutput } from "./types/TagCertificateAuthorityOutput";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UntagCertificateAuthorityInput } from "./types/UntagCertificateAuthorityInput";
import { UntagCertificateAuthorityOutput } from "./types/UntagCertificateAuthorityOutput";
import { UpdateCertificateAuthorityInput } from "./types/UpdateCertificateAuthorityInput";
import { UpdateCertificateAuthorityOutput } from "./types/UpdateCertificateAuthorityOutput";
import { CreateCertificateAuthorityAuditReportCommand } from "./commands/CreateCertificateAuthorityAuditReportCommand";
import { CreateCertificateAuthorityCommand } from "./commands/CreateCertificateAuthorityCommand";
import { CreatePermissionCommand } from "./commands/CreatePermissionCommand";
import { DeleteCertificateAuthorityCommand } from "./commands/DeleteCertificateAuthorityCommand";
import { DeletePermissionCommand } from "./commands/DeletePermissionCommand";
import { DescribeCertificateAuthorityAuditReportCommand } from "./commands/DescribeCertificateAuthorityAuditReportCommand";
import { DescribeCertificateAuthorityCommand } from "./commands/DescribeCertificateAuthorityCommand";
import { GetCertificateAuthorityCertificateCommand } from "./commands/GetCertificateAuthorityCertificateCommand";
import { GetCertificateAuthorityCsrCommand } from "./commands/GetCertificateAuthorityCsrCommand";
import { GetCertificateCommand } from "./commands/GetCertificateCommand";
import { ImportCertificateAuthorityCertificateCommand } from "./commands/ImportCertificateAuthorityCertificateCommand";
import { IssueCertificateCommand } from "./commands/IssueCertificateCommand";
import { ListCertificateAuthoritiesCommand } from "./commands/ListCertificateAuthoritiesCommand";
import { ListPermissionsCommand } from "./commands/ListPermissionsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { RestoreCertificateAuthorityCommand } from "./commands/RestoreCertificateAuthorityCommand";
import { RevokeCertificateCommand } from "./commands/RevokeCertificateCommand";
import { TagCertificateAuthorityCommand } from "./commands/TagCertificateAuthorityCommand";
import { UntagCertificateAuthorityCommand } from "./commands/UntagCertificateAuthorityCommand";
import { UpdateCertificateAuthorityCommand } from "./commands/UpdateCertificateAuthorityCommand";

export class ACMPCA extends ACMPCAClient {
  /**
   * <p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, the certificate revocation list (CRL) configuration, the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgsException} <p>One or more of the specified arguments was not valid.</p>
   *   - {InvalidPolicyException} <p>The S3 bucket policy is not valid. The policy must give ACM Private CA rights to read from and write to the bucket and find the bucket location.</p>
   *   - {InvalidTagException} <p>The tag associated with the CA is not valid. The invalid argument is contained in the message field.</p>
   *   - {LimitExceededException} <p>An ACM Private CA limit has been exceeded. See the exception message returned to determine the limit that was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCertificateAuthority(
    args: CreateCertificateAuthorityInput
  ): Promise<CreateCertificateAuthorityOutput>;
  public createCertificateAuthority(
    args: CreateCertificateAuthorityInput,
    cb: (err: any, data?: CreateCertificateAuthorityOutput) => void
  ): void;
  public createCertificateAuthority(
    args: CreateCertificateAuthorityInput,
    cb?: (err: any, data?: CreateCertificateAuthorityOutput) => void
  ): Promise<CreateCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a>IssueCertificate</a> and <a>RevokeCertificate</a> actions use the private key.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RequestInProgressException} <p>Your request is already in progress.</p>
   *   - {RequestFailedException} <p>The request has failed for an unspecified reason.</p>
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidArgsException} <p>One or more of the specified arguments was not valid.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportInput
  ): Promise<CreateCertificateAuthorityAuditReportOutput>;
  public createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportInput,
    cb: (err: any, data?: CreateCertificateAuthorityAuditReportOutput) => void
  ): void;
  public createCertificateAuthorityAuditReport(
    args: CreateCertificateAuthorityAuditReportInput,
    cb?: (err: any, data?: CreateCertificateAuthorityAuditReportOutput) => void
  ): Promise<CreateCertificateAuthorityAuditReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCertificateAuthorityAuditReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns permissions from a private CA to a designated AWS service. Services are specified by their service principals and can be given permission to create and retrieve certificates on a private CA. Services can also be given permission to list the active permissions that the private CA has granted. For ACM to automatically renew your private CA's certificates, you must assign all possible permissions from the CA to the ACM service principal.</p> <p>At this time, you can only assign permissions to ACM (<code>acm.amazonaws.com</code>). Permissions can be revoked with the <a>DeletePermission</a> action and listed with the <a>ListPermissions</a> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {PermissionAlreadyExistsException} <p>The designated permission has already been given to the user.</p>
   *   - {LimitExceededException} <p>An ACM Private CA limit has been exceeded. See the exception message returned to determine the limit that was exceeded.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {RequestFailedException} <p>The request has failed for an unspecified reason.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPermission(
    args: CreatePermissionInput
  ): Promise<CreatePermissionOutput>;
  public createPermission(
    args: CreatePermissionInput,
    cb: (err: any, data?: CreatePermissionOutput) => void
  ): void;
  public createPermission(
    args: CreatePermissionInput,
    cb?: (err: any, data?: CreatePermissionOutput) => void
  ): Promise<CreatePermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a>ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a>UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into ACM Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a>DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a>DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a>RestoreCertificateAuthority</a> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>A previous update to your private CA is still ongoing.</p>
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCertificateAuthority(
    args: DeleteCertificateAuthorityInput
  ): Promise<DeleteCertificateAuthorityOutput>;
  public deleteCertificateAuthority(
    args: DeleteCertificateAuthorityInput,
    cb: (err: any, data?: DeleteCertificateAuthorityOutput) => void
  ): void;
  public deleteCertificateAuthority(
    args: DeleteCertificateAuthorityInput,
    cb?: (err: any, data?: DeleteCertificateAuthorityOutput) => void
  ): Promise<DeleteCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Revokes permissions that a private CA assigned to a designated AWS service. Permissions can be created with the <a>CreatePermission</a> action and listed with the <a>ListPermissions</a> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {RequestFailedException} <p>The request has failed for an unspecified reason.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePermission(
    args: DeletePermissionInput
  ): Promise<DeletePermissionOutput>;
  public deletePermission(
    args: DeletePermissionInput,
    cb: (err: any, data?: DeletePermissionOutput) => void
  ): void;
  public deletePermission(
    args: DeletePermissionInput,
    cb?: (err: any, data?: DeletePermissionOutput) => void
  ): Promise<DeletePermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about your private certificate authority (CA). You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - ACM Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your ACM Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into PCA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or backend AWS failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCertificateAuthority(
    args: DescribeCertificateAuthorityInput
  ): Promise<DescribeCertificateAuthorityOutput>;
  public describeCertificateAuthority(
    args: DescribeCertificateAuthorityInput,
    cb: (err: any, data?: DescribeCertificateAuthorityOutput) => void
  ): void;
  public describeCertificateAuthority(
    args: DescribeCertificateAuthorityInput,
    cb?: (err: any, data?: DescribeCertificateAuthorityOutput) => void
  ): Promise<DescribeCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about a specific audit report created by calling the <a>CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a>IssueCertificate</a> action or the <a>RevokeCertificate</a> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidArgsException} <p>One or more of the specified arguments was not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportInput
  ): Promise<DescribeCertificateAuthorityAuditReportOutput>;
  public describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportInput,
    cb: (err: any, data?: DescribeCertificateAuthorityAuditReportOutput) => void
  ): void;
  public describeCertificateAuthorityAuditReport(
    args: DescribeCertificateAuthorityAuditReportInput,
    cb?: (
      err: any,
      data?: DescribeCertificateAuthorityAuditReportOutput
    ) => void
  ): Promise<DescribeCertificateAuthorityAuditReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCertificateAuthorityAuditReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a certificate from your private CA. The ARN of the certificate is returned when you call the <a>IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a>CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {RequestInProgressException} <p>Your request is already in progress.</p>
   *   - {RequestFailedException} <p>The request has failed for an unspecified reason.</p>
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCertificate(
    args: GetCertificateInput
  ): Promise<GetCertificateOutput>;
  public getCertificate(
    args: GetCertificateInput,
    cb: (err: any, data?: GetCertificateOutput) => void
  ): void;
  public getCertificate(
    args: GetCertificateInput,
    cb?: (err: any, data?: GetCertificateOutput) => void
  ): Promise<GetCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the certificate and certificate chain for your private certificate authority (CA). Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateInput
  ): Promise<GetCertificateAuthorityCertificateOutput>;
  public getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateInput,
    cb: (err: any, data?: GetCertificateAuthorityCertificateOutput) => void
  ): void;
  public getCertificateAuthorityCertificate(
    args: GetCertificateAuthorityCertificateInput,
    cb?: (err: any, data?: GetCertificateAuthorityCertificateOutput) => void
  ): Promise<GetCertificateAuthorityCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCertificateAuthorityCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a>CreateCertificateAuthority</a> action. Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into ACM Private CA by calling the <a>ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {RequestInProgressException} <p>Your request is already in progress.</p>
   *   - {RequestFailedException} <p>The request has failed for an unspecified reason.</p>
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrInput
  ): Promise<GetCertificateAuthorityCsrOutput>;
  public getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrInput,
    cb: (err: any, data?: GetCertificateAuthorityCsrOutput) => void
  ): void;
  public getCertificateAuthorityCsr(
    args: GetCertificateAuthorityCsrInput,
    cb?: (err: any, data?: GetCertificateAuthorityCsrOutput) => void
  ): Promise<GetCertificateAuthorityCsrOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCertificateAuthorityCsrCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Imports a signed private CA certificate into ACM Private CA. This action is used when you are using a chain of trust whose root is located outside ACM Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In ACM Private CA, call the <a>CreateCertificateAuthority</a> action to create the private CA that that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a>GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted either by an on-premises PKI hierarchy or a commercial CA..</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>The following requirements apply when you import a CA certificate.</p> <ul> <li> <p>You cannot import a non-self-signed certificate for use as a root CA.</p> </li> <li> <p>You cannot import a self-signed certificate for use as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your ACM Private CA-hosted or on-premises CA certificate must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>A previous update to your private CA is still ongoing.</p>
   *   - {RequestInProgressException} <p>Your request is already in progress.</p>
   *   - {RequestFailedException} <p>The request has failed for an unspecified reason.</p>
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidRequestException} <p>The request action cannot be performed or is prohibited.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {MalformedCertificateException} <p>One or more fields in the certificate are invalid.</p>
   *   - {CertificateMismatchException} <p>The certificate authority certificate you are importing does not comply with conditions specified in the certificate that signed it.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateInput
  ): Promise<ImportCertificateAuthorityCertificateOutput>;
  public importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateInput,
    cb: (err: any, data?: ImportCertificateAuthorityCertificateOutput) => void
  ): void;
  public importCertificateAuthorityCertificate(
    args: ImportCertificateAuthorityCertificateInput,
    cb?: (err: any, data?: ImportCertificateAuthorityCertificateOutput) => void
  ): Promise<ImportCertificateAuthorityCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportCertificateAuthorityCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uses your private certificate authority (CA) to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a>GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using ACM Private CA.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>An ACM Private CA limit has been exceeded. See the exception message returned to determine the limit that was exceeded.</p>
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidArgsException} <p>One or more of the specified arguments was not valid.</p>
   *   - {MalformedCSRException} <p>The certificate signing request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public issueCertificate(
    args: IssueCertificateInput
  ): Promise<IssueCertificateOutput>;
  public issueCertificate(
    args: IssueCertificateInput,
    cb: (err: any, data?: IssueCertificateOutput) => void
  ): void;
  public issueCertificate(
    args: IssueCertificateInput,
    cb?: (err: any, data?: IssueCertificateOutput) => void
  ): Promise<IssueCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new IssueCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the private certificate authorities that you created by using the <a>CreateCertificateAuthority</a> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The token specified in the <code>NextToken</code> argument is not valid. Use the token returned from your previous call to <a>ListCertificateAuthorities</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCertificateAuthorities(
    args: ListCertificateAuthoritiesInput
  ): Promise<ListCertificateAuthoritiesOutput>;
  public listCertificateAuthorities(
    args: ListCertificateAuthoritiesInput,
    cb: (err: any, data?: ListCertificateAuthoritiesOutput) => void
  ): void;
  public listCertificateAuthorities(
    args: ListCertificateAuthoritiesInput,
    cb?: (err: any, data?: ListCertificateAuthoritiesOutput) => void
  ): Promise<ListCertificateAuthoritiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCertificateAuthoritiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the permissions, if any, that have been assigned by a private CA. Permissions can be granted with the <a>CreatePermission</a> action and revoked with the <a>DeletePermission</a> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidNextTokenException} <p>The token specified in the <code>NextToken</code> argument is not valid. Use the token returned from your previous call to <a>ListCertificateAuthorities</a>.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {RequestFailedException} <p>The request has failed for an unspecified reason.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPermissions(
    args: ListPermissionsInput
  ): Promise<ListPermissionsOutput>;
  public listPermissions(
    args: ListPermissionsInput,
    cb: (err: any, data?: ListPermissionsOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsInput,
    cb?: (err: any, data?: ListPermissionsOutput) => void
  ): Promise<ListPermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags, if any, that are associated with your private CA. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a>TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a>UntagCertificateAuthority</a> action to remove tags. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a>DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a>DescribeCertificateAuthority</a> or <a>ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a>UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a>ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreCertificateAuthority(
    args: RestoreCertificateAuthorityInput
  ): Promise<RestoreCertificateAuthorityOutput>;
  public restoreCertificateAuthority(
    args: RestoreCertificateAuthorityInput,
    cb: (err: any, data?: RestoreCertificateAuthorityOutput) => void
  ): void;
  public restoreCertificateAuthority(
    args: RestoreCertificateAuthorityInput,
    cb?: (err: any, data?: RestoreCertificateAuthorityOutput) => void
  ): Promise<RestoreCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Revokes a certificate that was issued inside ACM Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. ACM Private CA writes the CRL to an S3 bucket that you specify. For more information about revocation, see the <a>CrlConfiguration</a> structure. ACM Private CA also writes revocation information to the audit report. For more information, see <a>CreateCertificateAuthorityAuditReport</a>. </p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>A previous update to your private CA is still ongoing.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidRequestException} <p>The request action cannot be performed or is prohibited.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {LimitExceededException} <p>An ACM Private CA limit has been exceeded. See the exception message returned to determine the limit that was exceeded.</p>
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {RequestAlreadyProcessedException} <p>Your request has already been completed.</p>
   *   - {RequestInProgressException} <p>Your request is already in progress.</p>
   *   - {RequestFailedException} <p>The request has failed for an unspecified reason.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeCertificate(
    args: RevokeCertificateInput
  ): Promise<RevokeCertificateOutput>;
  public revokeCertificate(
    args: RevokeCertificateInput,
    cb: (err: any, data?: RevokeCertificateOutput) => void
  ): void;
  public revokeCertificate(
    args: RevokeCertificateInput,
    cb?: (err: any, data?: RevokeCertificateOutput) => void
  ): Promise<RevokeCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a>UntagCertificateAuthority</a> action. Call the <a>ListTags</a> action to see what tags are associated with your CA. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {InvalidTagException} <p>The tag associated with the CA is not valid. The invalid argument is contained in the message field.</p>
   *   - {TooManyTagsException} <p>You can associate up to 50 tags with a private CA. Exception information is contained in the exception message field.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagCertificateAuthority(
    args: TagCertificateAuthorityInput
  ): Promise<TagCertificateAuthorityOutput>;
  public tagCertificateAuthority(
    args: TagCertificateAuthorityInput,
    cb: (err: any, data?: TagCertificateAuthorityOutput) => void
  ): void;
  public tagCertificateAuthority(
    args: TagCertificateAuthorityInput,
    cb?: (err: any, data?: TagCertificateAuthorityOutput) => void
  ): Promise<TagCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a>TagCertificateAuthority</a>. Call the <a>ListTags</a> action to see what tags are associated with your CA. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {InvalidTagException} <p>The tag associated with the CA is not valid. The invalid argument is contained in the message field.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagCertificateAuthority(
    args: UntagCertificateAuthorityInput
  ): Promise<UntagCertificateAuthorityOutput>;
  public untagCertificateAuthority(
    args: UntagCertificateAuthorityInput,
    cb: (err: any, data?: UntagCertificateAuthorityOutput) => void
  ): void;
  public untagCertificateAuthority(
    args: UntagCertificateAuthorityInput,
    cb?: (err: any, data?: UntagCertificateAuthorityOutput) => void
  ): Promise<UntagCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>A previous update to your private CA is still ongoing.</p>
   *   - {ResourceNotFoundException} <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
   *   - {InvalidArgsException} <p>One or more of the specified arguments was not valid.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidStateException} <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
   *   - {InvalidPolicyException} <p>The S3 bucket policy is not valid. The policy must give ACM Private CA rights to read from and write to the bucket and find the bucket location.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCertificateAuthority(
    args: UpdateCertificateAuthorityInput
  ): Promise<UpdateCertificateAuthorityOutput>;
  public updateCertificateAuthority(
    args: UpdateCertificateAuthorityInput,
    cb: (err: any, data?: UpdateCertificateAuthorityOutput) => void
  ): void;
  public updateCertificateAuthority(
    args: UpdateCertificateAuthorityInput,
    cb?: (err: any, data?: UpdateCertificateAuthorityOutput) => void
  ): Promise<UpdateCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
