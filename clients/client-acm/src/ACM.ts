// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ACMClient } from "./ACMClient";
import {
  AddTagsToCertificateCommand,
  AddTagsToCertificateCommandInput,
  AddTagsToCertificateCommandOutput,
} from "./commands/AddTagsToCertificateCommand";
import {
  DeleteCertificateCommand,
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import {
  DescribeCertificateCommand,
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import {
  ExportCertificateCommand,
  ExportCertificateCommandInput,
  ExportCertificateCommandOutput,
} from "./commands/ExportCertificateCommand";
import {
  GetAccountConfigurationCommand,
  GetAccountConfigurationCommandInput,
  GetAccountConfigurationCommandOutput,
} from "./commands/GetAccountConfigurationCommand";
import {
  GetCertificateCommand,
  GetCertificateCommandInput,
  GetCertificateCommandOutput,
} from "./commands/GetCertificateCommand";
import {
  ImportCertificateCommand,
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput,
} from "./commands/ImportCertificateCommand";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "./commands/ListCertificatesCommand";
import {
  ListTagsForCertificateCommand,
  ListTagsForCertificateCommandInput,
  ListTagsForCertificateCommandOutput,
} from "./commands/ListTagsForCertificateCommand";
import {
  PutAccountConfigurationCommand,
  PutAccountConfigurationCommandInput,
  PutAccountConfigurationCommandOutput,
} from "./commands/PutAccountConfigurationCommand";
import {
  RemoveTagsFromCertificateCommand,
  RemoveTagsFromCertificateCommandInput,
  RemoveTagsFromCertificateCommandOutput,
} from "./commands/RemoveTagsFromCertificateCommand";
import {
  RenewCertificateCommand,
  RenewCertificateCommandInput,
  RenewCertificateCommandOutput,
} from "./commands/RenewCertificateCommand";
import {
  RequestCertificateCommand,
  RequestCertificateCommandInput,
  RequestCertificateCommandOutput,
} from "./commands/RequestCertificateCommand";
import {
  ResendValidationEmailCommand,
  ResendValidationEmailCommandInput,
  ResendValidationEmailCommandOutput,
} from "./commands/ResendValidationEmailCommand";
import {
  UpdateCertificateOptionsCommand,
  UpdateCertificateOptionsCommandInput,
  UpdateCertificateOptionsCommandOutput,
} from "./commands/UpdateCertificateOptionsCommand";

/**
 * <fullname>Certificate Manager</fullname>
 *          <p>You can use Certificate Manager (ACM) to manage SSL/TLS certificates for your Amazon Web Services-based websites
 *       and applications. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>
 */
export class ACM extends ACMClient {
  /**
   * <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to
   *       identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an
   *       optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name
   *       (ARN). You specify the tag by using a key-value pair. </p>
   *          <p>You can apply a tag to just one certificate if you want to identify a specific
   *       characteristic of that certificate, or you can apply the same tag to multiple certificates if
   *       you want to filter for a common relationship among those certificates. Similarly, you can
   *       apply the same tag to multiple resources if you want to specify a relationship among those
   *       resources. For example, you can add the same tag to an ACM certificate and an Elastic Load
   *       Balancing load balancer to indicate that they are both used by the same website. For more
   *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM
   *         certificates</a>. </p>
   *          <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To
   *       view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
   */
  public addTagsToCertificate(
    args: AddTagsToCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToCertificateCommandOutput>;
  public addTagsToCertificate(
    args: AddTagsToCertificateCommandInput,
    cb: (err: any, data?: AddTagsToCertificateCommandOutput) => void
  ): void;
  public addTagsToCertificate(
    args: AddTagsToCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToCertificateCommandOutput) => void
  ): void;
  public addTagsToCertificate(
    args: AddTagsToCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToCertificateCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToCertificateCommandOutput) => void
  ): Promise<AddTagsToCertificateCommandOutput> | void {
    const command = new AddTagsToCertificateCommand(args);
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
   * <p>Deletes a certificate and its associated private key. If this action succeeds, the
   *       certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services
   *       services integrated with ACM. </p>
   *          <note>
   *             <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To
   *         delete a certificate that is in use, the certificate association must first be
   *         removed.</p>
   *          </note>
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
   * <p>Returns detailed metadata about the specified ACM certificate.</p>
   *          <p>If you have just created a certificate using the <code>RequestCertificate</code> action,
   *       there is a delay of several seconds before you can retrieve information about it.</p>
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
   * <p>Exports a private certificate issued by a private certificate authority (CA) for use
   *       anywhere. The exported file contains the certificate, the certificate chain, and the encrypted
   *       private 2048-bit RSA key associated with the public key that is embedded in the certificate.
   *       For security, you must assign a passphrase for the private key when exporting it. </p>
   *          <p>For information about exporting and formatting a certificate using the ACM console or
   *       CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a
   *         Private Certificate</a>.</p>
   */
  public exportCertificate(
    args: ExportCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportCertificateCommandOutput>;
  public exportCertificate(
    args: ExportCertificateCommandInput,
    cb: (err: any, data?: ExportCertificateCommandOutput) => void
  ): void;
  public exportCertificate(
    args: ExportCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportCertificateCommandOutput) => void
  ): void;
  public exportCertificate(
    args: ExportCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportCertificateCommandOutput) => void),
    cb?: (err: any, data?: ExportCertificateCommandOutput) => void
  ): Promise<ExportCertificateCommandOutput> | void {
    const command = new ExportCertificateCommand(args);
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
   * <p>Returns the account configuration options associated with an Amazon Web Services account.</p>
   */
  public getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountConfigurationCommandOutput>;
  public getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    cb: (err: any, data?: GetAccountConfigurationCommandOutput) => void
  ): void;
  public getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountConfigurationCommandOutput) => void
  ): void;
  public getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetAccountConfigurationCommandOutput) => void
  ): Promise<GetAccountConfigurationCommandOutput> | void {
    const command = new GetAccountConfigurationCommand(args);
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
   * <p>Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of
   *       the certificate of the issuing CA and the intermediate certificates of any other subordinate
   *       CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode
   *       the certificates and inspect individual fields.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCertificateCommandOutput) => void),
    cb?: (err: any, data?: GetCertificateCommandOutput) => void
  ): Promise<GetCertificateCommandOutput> | void {
    const command = new GetCertificateCommand(args);
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
   * <p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with
   *       ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated
   *         services</a> allow only certificate types and keys they support to be associated with
   *       their resources. Further, their support differs depending on whether the certificate is
   *       imported into IAM or into ACM. For more information, see the documentation for each
   *       service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing
   *         Certificates</a> in the <i>Certificate Manager User Guide</i>. </p>
   *          <note>
   *             <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p>
   *          </note>
   *          <p>Note the following guidelines when importing third party certificates:</p>
   *          <ul>
   *             <li>
   *                <p>You must enter the private key that matches the certificate you are importing.</p>
   *             </li>
   *             <li>
   *                <p>The private key must be unencrypted. You cannot import a private key that is protected
   *           by a password or a passphrase.</p>
   *             </li>
   *             <li>
   *                <p>The private key must be no larger than 5 KB (5,120 bytes).</p>
   *             </li>
   *             <li>
   *                <p>If the certificate you are importing is not self-signed, you must enter its
   *           certificate chain.</p>
   *             </li>
   *             <li>
   *                <p>If a certificate chain is included, the issuer must be the subject of one of the
   *           certificates in the chain.</p>
   *             </li>
   *             <li>
   *                <p>The certificate, private key, and certificate chain must be PEM-encoded.</p>
   *             </li>
   *             <li>
   *                <p>The current time must be between the <code>Not Before</code> and <code>Not
   *             After</code> certificate fields.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Issuer</code> field must not be empty.</p>
   *             </li>
   *             <li>
   *                <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p>
   *             </li>
   *             <li>
   *                <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include
   *           this argument only when you want to replace a previously imported certificate.</p>
   *             </li>
   *             <li>
   *                <p>When you import a certificate by using the CLI, you must specify the certificate, the
   *           certificate chain, and the private key by their file names preceded by
   *             <code>fileb://</code>. For example, you can specify a certificate saved in the
   *             <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>.
   *           If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs.
   *         </p>
   *             </li>
   *             <li>
   *                <p>When you import a certificate by using an SDK, you must specify the certificate, the
   *           certificate chain, and the private key files in the manner required by the programming
   *           language you're using. </p>
   *             </li>
   *             <li>
   *                <p>The cryptographic algorithm of an imported certificate must match the algorithm of the
   *           signing CA. For example, if the signing CA key type is RSA, then the certificate key type
   *           must also be RSA.</p>
   *             </li>
   *          </ul>
   *          <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *         Resource Name (ARN)</a> of the imported certificate.</p>
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
   * <p>Retrieves a list of certificate ARNs and domain names. You can request that only
   *       certificates that match a specific status be listed. You can also filter by specific
   *       attributes of the certificate. Default filtering returns only <code>RSA_2048</code>
   *       certificates. For more information, see <a>Filters</a>.</p>
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
   * <p>Lists the tags that have been applied to the ACM certificate. Use the certificate's
   *       Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate,
   *       use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. </p>
   */
  public listTagsForCertificate(
    args: ListTagsForCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForCertificateCommandOutput>;
  public listTagsForCertificate(
    args: ListTagsForCertificateCommandInput,
    cb: (err: any, data?: ListTagsForCertificateCommandOutput) => void
  ): void;
  public listTagsForCertificate(
    args: ListTagsForCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForCertificateCommandOutput) => void
  ): void;
  public listTagsForCertificate(
    args: ListTagsForCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForCertificateCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForCertificateCommandOutput) => void
  ): Promise<ListTagsForCertificateCommandOutput> | void {
    const command = new ListTagsForCertificateCommand(args);
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
   * <p>Adds or modifies account-level configurations in ACM. </p>
   *          <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies
   *       the number of days prior to certificate expiration when ACM starts generating
   *         <code>EventBridge</code> events. ACM sends one event per day per certificate until the
   *       certificate expires. By default, accounts receive events starting 45 days before certificate
   *       expiration.</p>
   */
  public putAccountConfiguration(
    args: PutAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountConfigurationCommandOutput>;
  public putAccountConfiguration(
    args: PutAccountConfigurationCommandInput,
    cb: (err: any, data?: PutAccountConfigurationCommandOutput) => void
  ): void;
  public putAccountConfiguration(
    args: PutAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountConfigurationCommandOutput) => void
  ): void;
  public putAccountConfiguration(
    args: PutAccountConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutAccountConfigurationCommandOutput) => void
  ): Promise<PutAccountConfigurationCommandOutput> | void {
    const command = new PutAccountConfigurationCommand(args);
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
   * <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If
   *       you do not specify the value portion of the tag when calling this function, the tag will be
   *       removed regardless of value. If you specify a value, the tag is removed only if it is
   *       associated with the specified value. </p>
   *          <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To
   *       view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
   */
  public removeTagsFromCertificate(
    args: RemoveTagsFromCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromCertificateCommandOutput>;
  public removeTagsFromCertificate(
    args: RemoveTagsFromCertificateCommandInput,
    cb: (err: any, data?: RemoveTagsFromCertificateCommandOutput) => void
  ): void;
  public removeTagsFromCertificate(
    args: RemoveTagsFromCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromCertificateCommandOutput) => void
  ): void;
  public removeTagsFromCertificate(
    args: RemoveTagsFromCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromCertificateCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromCertificateCommandOutput) => void
  ): Promise<RemoveTagsFromCertificateCommandOutput> | void {
    const command = new RemoveTagsFromCertificateCommand(args);
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
   * <p>Renews an eligible ACM certificate. At this time, only exported private certificates can
   *       be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you
   *       must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM
   *         service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a>
   *       in the ACM User Guide.</p>
   */
  public renewCertificate(
    args: RenewCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RenewCertificateCommandOutput>;
  public renewCertificate(
    args: RenewCertificateCommandInput,
    cb: (err: any, data?: RenewCertificateCommandOutput) => void
  ): void;
  public renewCertificate(
    args: RenewCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenewCertificateCommandOutput) => void
  ): void;
  public renewCertificate(
    args: RenewCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RenewCertificateCommandOutput) => void),
    cb?: (err: any, data?: RenewCertificateCommandOutput) => void
  ): Promise<RenewCertificateCommandOutput> | void {
    const command = new RenewCertificateCommand(args);
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
   * <p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM
   *       certificate, you must specify a fully qualified domain name (FQDN) in the
   *         <code>DomainName</code> parameter. You can also specify additional FQDNs in the
   *         <code>SubjectAlternativeNames</code> parameter. </p>
   *          <p>If you are requesting a private certificate, domain validation is not required. If you are
   *       requesting a public certificate, each domain name that you specify must be validated to verify
   *       that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>.
   *       We recommend that you use DNS validation. ACM issues public certificates after receiving
   *       approval from the domain owner. </p>
   *          <note>
   *             <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a>
   *         specification of the certificate validation process. ACM first checks for a Subject
   *         Alternative Name, and, if it finds one, ignores the common name (CN).</p>
   *          </note>
   *          <p>After successful completion of the <code>RequestCertificate</code> action, there is a
   *       delay of several seconds before you can retrieve information about the new certificate.</p>
   */
  public requestCertificate(
    args: RequestCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestCertificateCommandOutput>;
  public requestCertificate(
    args: RequestCertificateCommandInput,
    cb: (err: any, data?: RequestCertificateCommandOutput) => void
  ): void;
  public requestCertificate(
    args: RequestCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestCertificateCommandOutput) => void
  ): void;
  public requestCertificate(
    args: RequestCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RequestCertificateCommandOutput) => void),
    cb?: (err: any, data?: RequestCertificateCommandOutput) => void
  ): Promise<RequestCertificateCommandOutput> | void {
    const command = new RequestCertificateCommand(args);
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
   * <p>Resends the email that requests domain ownership validation. The domain owner or an
   *       authorized representative must approve the ACM certificate before it can be issued. The
   *       certificate can be approved by clicking a link in the mail to navigate to the Amazon
   *       certificate approval website and then clicking <b>I Approve</b>.
   *       However, the validation email can be blocked by spam filters. Therefore, if you do not receive
   *       the original mail, you can request that the mail be resent within 72 hours of requesting the
   *       ACM certificate. If more than 72 hours have elapsed since your original request or since
   *       your last attempt to resend validation mail, you must request a new certificate. For more
   *       information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. </p>
   */
  public resendValidationEmail(
    args: ResendValidationEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResendValidationEmailCommandOutput>;
  public resendValidationEmail(
    args: ResendValidationEmailCommandInput,
    cb: (err: any, data?: ResendValidationEmailCommandOutput) => void
  ): void;
  public resendValidationEmail(
    args: ResendValidationEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResendValidationEmailCommandOutput) => void
  ): void;
  public resendValidationEmail(
    args: ResendValidationEmailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResendValidationEmailCommandOutput) => void),
    cb?: (err: any, data?: ResendValidationEmailCommandOutput) => void
  ): Promise<ResendValidationEmailCommandOutput> | void {
    const command = new ResendValidationEmailCommand(args);
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
   * <p>Updates a certificate. Currently, you can use this function to specify whether to opt in
   *       to or out of recording your certificate in a certificate transparency log. For more
   *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of
   *         Certificate Transparency Logging</a>. </p>
   */
  public updateCertificateOptions(
    args: UpdateCertificateOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCertificateOptionsCommandOutput>;
  public updateCertificateOptions(
    args: UpdateCertificateOptionsCommandInput,
    cb: (err: any, data?: UpdateCertificateOptionsCommandOutput) => void
  ): void;
  public updateCertificateOptions(
    args: UpdateCertificateOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCertificateOptionsCommandOutput) => void
  ): void;
  public updateCertificateOptions(
    args: UpdateCertificateOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCertificateOptionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateCertificateOptionsCommandOutput) => void
  ): Promise<UpdateCertificateOptionsCommandOutput> | void {
    const command = new UpdateCertificateOptionsCommand(args);
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
