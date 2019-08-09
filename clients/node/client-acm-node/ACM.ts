import { ACMClient } from "./ACMClient";
import { AddTagsToCertificateInput } from "./types/AddTagsToCertificateInput";
import { AddTagsToCertificateOutput } from "./types/AddTagsToCertificateOutput";
import { DeleteCertificateInput } from "./types/DeleteCertificateInput";
import { DeleteCertificateOutput } from "./types/DeleteCertificateOutput";
import { DescribeCertificateInput } from "./types/DescribeCertificateInput";
import { DescribeCertificateOutput } from "./types/DescribeCertificateOutput";
import { ExportCertificateInput } from "./types/ExportCertificateInput";
import { ExportCertificateOutput } from "./types/ExportCertificateOutput";
import { GetCertificateInput } from "./types/GetCertificateInput";
import { GetCertificateOutput } from "./types/GetCertificateOutput";
import { ImportCertificateInput } from "./types/ImportCertificateInput";
import { ImportCertificateOutput } from "./types/ImportCertificateOutput";
import { InvalidArgsException } from "./types/InvalidArgsException";
import { InvalidArnException } from "./types/InvalidArnException";
import { InvalidDomainValidationOptionsException } from "./types/InvalidDomainValidationOptionsException";
import { InvalidStateException } from "./types/InvalidStateException";
import { InvalidTagException } from "./types/InvalidTagException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListCertificatesInput } from "./types/ListCertificatesInput";
import { ListCertificatesOutput } from "./types/ListCertificatesOutput";
import { ListTagsForCertificateInput } from "./types/ListTagsForCertificateInput";
import { ListTagsForCertificateOutput } from "./types/ListTagsForCertificateOutput";
import { RemoveTagsFromCertificateInput } from "./types/RemoveTagsFromCertificateInput";
import { RemoveTagsFromCertificateOutput } from "./types/RemoveTagsFromCertificateOutput";
import { RenewCertificateInput } from "./types/RenewCertificateInput";
import { RenewCertificateOutput } from "./types/RenewCertificateOutput";
import { RequestCertificateInput } from "./types/RequestCertificateInput";
import { RequestCertificateOutput } from "./types/RequestCertificateOutput";
import { RequestInProgressException } from "./types/RequestInProgressException";
import { ResendValidationEmailInput } from "./types/ResendValidationEmailInput";
import { ResendValidationEmailOutput } from "./types/ResendValidationEmailOutput";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UpdateCertificateOptionsInput } from "./types/UpdateCertificateOptionsInput";
import { UpdateCertificateOptionsOutput } from "./types/UpdateCertificateOptionsOutput";
import { AddTagsToCertificateCommand } from "./commands/AddTagsToCertificateCommand";
import { DeleteCertificateCommand } from "./commands/DeleteCertificateCommand";
import { DescribeCertificateCommand } from "./commands/DescribeCertificateCommand";
import { ExportCertificateCommand } from "./commands/ExportCertificateCommand";
import { GetCertificateCommand } from "./commands/GetCertificateCommand";
import { ImportCertificateCommand } from "./commands/ImportCertificateCommand";
import { ListCertificatesCommand } from "./commands/ListCertificatesCommand";
import { ListTagsForCertificateCommand } from "./commands/ListTagsForCertificateCommand";
import { RemoveTagsFromCertificateCommand } from "./commands/RemoveTagsFromCertificateCommand";
import { RenewCertificateCommand } from "./commands/RenewCertificateCommand";
import { RequestCertificateCommand } from "./commands/RequestCertificateCommand";
import { ResendValidationEmailCommand } from "./commands/ResendValidationEmailCommand";
import { UpdateCertificateOptionsCommand } from "./commands/UpdateCertificateOptionsCommand";

export class ACM extends ACMClient {
  /**
   * <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidTagException} <p>One or both of the values that make up the key-value pair is not valid. For example, you cannot specify a tag value that begins with <code>aws:</code>.</p>
   *   - {TooManyTagsException} <p>The request contains too many tags. Try the request again with fewer tags.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToCertificate(
    args: AddTagsToCertificateInput
  ): Promise<AddTagsToCertificateOutput>;
  public addTagsToCertificate(
    args: AddTagsToCertificateInput,
    cb: (err: any, data?: AddTagsToCertificateOutput) => void
  ): void;
  public addTagsToCertificate(
    args: AddTagsToCertificateInput,
    cb?: (err: any, data?: AddTagsToCertificateOutput) => void
  ): Promise<AddTagsToCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by AWS services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another AWS service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {ResourceInUseException} <p>The certificate is in use by another AWS service in the caller's account. Remove the association and try again.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCertificate(
    args: DeleteCertificateInput
  ): Promise<DeleteCertificateOutput>;
  public deleteCertificate(
    args: DeleteCertificateInput,
    cb: (err: any, data?: DeleteCertificateOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateInput,
    cb?: (err: any, data?: DeleteCertificateOutput) => void
  ): Promise<DeleteCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed metadata about the specified ACM certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCertificate(
    args: DescribeCertificateInput
  ): Promise<DescribeCertificateOutput>;
  public describeCertificate(
    args: DescribeCertificateInput,
    cb: (err: any, data?: DescribeCertificateOutput) => void
  ): void;
  public describeCertificate(
    args: DescribeCertificateInput,
    cb?: (err: any, data?: DescribeCertificateOutput) => void
  ): Promise<DescribeCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. You can export the certificate, the certificate chain, and the encrypted private key associated with the public key embedded in the certificate. You must store the private key securely. The private key is a 2048 bit RSA key. You must provide a passphrase for the private key when exporting it. You can use the following OpenSSL command to decrypt it later. Provide the passphrase when prompted. </p> <p> <code>openssl rsa -in encrypted_key.pem -out decrypted_key.pem</code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {RequestInProgressException} <p>The certificate request is in process and the certificate in your account has not yet been issued.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportCertificate(
    args: ExportCertificateInput
  ): Promise<ExportCertificateOutput>;
  public exportCertificate(
    args: ExportCertificateInput,
    cb: (err: any, data?: ExportCertificateOutput) => void
  ): void;
  public exportCertificate(
    args: ExportCertificateInput,
    cb?: (err: any, data?: ExportCertificateOutput) => void
  ): Promise<ExportCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a certificate specified by an ARN and its certificate chain . The chain is an ordered list of certificates that contains the end entity certificate, intermediate certificates of subordinate CAs, and the root certificate in that order. The certificate and certificate chain are base64 encoded. If you want to decode the certificate to see the individual fields, you can use OpenSSL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {RequestInProgressException} <p>The certificate request is in process and the certificate in your account has not yet been issued.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
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
   * <p>Imports a certificate into AWS Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>AWS Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>file://</code>. For example, you can specify a certificate saved in the <code>C:\temp</code> folder as <code>file://C:\temp\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {LimitExceededException} <p>An ACM limit has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importCertificate(
    args: ImportCertificateInput
  ): Promise<ImportCertificateOutput>;
  public importCertificate(
    args: ImportCertificateInput,
    cb: (err: any, data?: ImportCertificateOutput) => void
  ): void;
  public importCertificate(
    args: ImportCertificateInput,
    cb?: (err: any, data?: ImportCertificateOutput) => void
  ): Promise<ImportCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgsException} <p>One or more of of request parameters specified is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCertificates(
    args: ListCertificatesInput
  ): Promise<ListCertificatesOutput>;
  public listCertificates(
    args: ListCertificatesInput,
    cb: (err: any, data?: ListCertificatesOutput) => void
  ): void;
  public listCertificates(
    args: ListCertificatesInput,
    cb?: (err: any, data?: ListCertificatesOutput) => void
  ): Promise<ListCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForCertificate(
    args: ListTagsForCertificateInput
  ): Promise<ListTagsForCertificateOutput>;
  public listTagsForCertificate(
    args: ListTagsForCertificateInput,
    cb: (err: any, data?: ListTagsForCertificateOutput) => void
  ): void;
  public listTagsForCertificate(
    args: ListTagsForCertificateInput,
    cb?: (err: any, data?: ListTagsForCertificateOutput) => void
  ): Promise<ListTagsForCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidTagException} <p>One or both of the values that make up the key-value pair is not valid. For example, you cannot specify a tag value that begins with <code>aws:</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromCertificate(
    args: RemoveTagsFromCertificateInput
  ): Promise<RemoveTagsFromCertificateOutput>;
  public removeTagsFromCertificate(
    args: RemoveTagsFromCertificateInput,
    cb: (err: any, data?: RemoveTagsFromCertificateOutput) => void
  ): void;
  public removeTagsFromCertificate(
    args: RemoveTagsFromCertificateInput,
    cb?: (err: any, data?: RemoveTagsFromCertificateOutput) => void
  ): Promise<RemoveTagsFromCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Renews an eligable ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your ACM PCA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public renewCertificate(
    args: RenewCertificateInput
  ): Promise<RenewCertificateOutput>;
  public renewCertificate(
    args: RenewCertificateInput,
    cb: (err: any, data?: RenewCertificateOutput) => void
  ): void;
  public renewCertificate(
    args: RenewCertificateInput,
    cb?: (err: any, data?: RenewCertificateOutput) => void
  ): Promise<RenewCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RenewCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests an ACM certificate for use with other AWS services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>An ACM limit has been exceeded.</p>
   *   - {InvalidDomainValidationOptionsException} <p>One or more values in the <a>DomainValidationOption</a> structure is incorrect.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public requestCertificate(
    args: RequestCertificateInput
  ): Promise<RequestCertificateOutput>;
  public requestCertificate(
    args: RequestCertificateInput,
    cb: (err: any, data?: RequestCertificateOutput) => void
  ): void;
  public requestCertificate(
    args: RequestCertificateInput,
    cb?: (err: any, data?: RequestCertificateOutput) => void
  ): Promise<RequestCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RequestCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {InvalidStateException} <p>Processing has reached an invalid state.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {InvalidDomainValidationOptionsException} <p>One or more values in the <a>DomainValidationOption</a> structure is incorrect.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resendValidationEmail(
    args: ResendValidationEmailInput
  ): Promise<ResendValidationEmailOutput>;
  public resendValidationEmail(
    args: ResendValidationEmailInput,
    cb: (err: any, data?: ResendValidationEmailOutput) => void
  ): void;
  public resendValidationEmail(
    args: ResendValidationEmailInput,
    cb?: (err: any, data?: ResendValidationEmailOutput) => void
  ): Promise<ResendValidationEmailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResendValidationEmailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of Certificate Transparency Logging</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
   *   - {LimitExceededException} <p>An ACM limit has been exceeded.</p>
   *   - {InvalidStateException} <p>Processing has reached an invalid state.</p>
   *   - {InvalidArnException} <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCertificateOptions(
    args: UpdateCertificateOptionsInput
  ): Promise<UpdateCertificateOptionsOutput>;
  public updateCertificateOptions(
    args: UpdateCertificateOptionsInput,
    cb: (err: any, data?: UpdateCertificateOptionsOutput) => void
  ): void;
  public updateCertificateOptions(
    args: UpdateCertificateOptionsInput,
    cb?: (err: any, data?: UpdateCertificateOptionsOutput) => void
  ): Promise<UpdateCertificateOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCertificateOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
