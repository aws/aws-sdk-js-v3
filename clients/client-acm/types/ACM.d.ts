import { ACMClient } from "./ACMClient";
import { AddTagsToCertificateCommandInput, AddTagsToCertificateCommandOutput } from "./commands/AddTagsToCertificateCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import { DescribeCertificateCommandInput, DescribeCertificateCommandOutput } from "./commands/DescribeCertificateCommand";
import { ExportCertificateCommandInput, ExportCertificateCommandOutput } from "./commands/ExportCertificateCommand";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "./commands/GetCertificateCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "./commands/ImportCertificateCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import { ListTagsForCertificateCommandInput, ListTagsForCertificateCommandOutput } from "./commands/ListTagsForCertificateCommand";
import { RemoveTagsFromCertificateCommandInput, RemoveTagsFromCertificateCommandOutput } from "./commands/RemoveTagsFromCertificateCommand";
import { RenewCertificateCommandInput, RenewCertificateCommandOutput } from "./commands/RenewCertificateCommand";
import { RequestCertificateCommandInput, RequestCertificateCommandOutput } from "./commands/RequestCertificateCommand";
import { ResendValidationEmailCommandInput, ResendValidationEmailCommandOutput } from "./commands/ResendValidationEmailCommand";
import { UpdateCertificateOptionsCommandInput, UpdateCertificateOptionsCommandOutput } from "./commands/UpdateCertificateOptionsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Certificate Manager</fullname>
 *          <p>Welcome to the AWS Certificate Manager (ACM) API documentation.</p>
 *          <p>You can use ACM to manage SSL/TLS certificates for your AWS-based websites and
 *       applications. For general information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">
 *                <i>AWS Certificate Manager User Guide</i>
 *             </a>.</p>
 */
export declare class ACM extends ACMClient {
    /**
     * <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to
     *       identify and organize your AWS resources. Each tag consists of a <code>key</code> and an
     *       optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name
     *       (ARN). You specify the tag by using a key-value pair. </p>
     *
     *          <p>You can apply a tag to just one certificate if you want to identify a specific
     *       characteristic of that certificate, or you can apply the same tag to multiple certificates if
     *       you want to filter for a common relationship among those certificates. Similarly, you can
     *       apply the same tag to multiple resources if you want to specify a relationship among those
     *       resources. For example, you can add the same tag to an ACM certificate and an Elastic Load
     *       Balancing load balancer to indicate that they are both used by the same website. For more
     *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM
     *         certificates</a>. </p>
     *
     *          <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To
     *       view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
     */
    addTagsToCertificate(args: AddTagsToCertificateCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToCertificateCommandOutput>;
    addTagsToCertificate(args: AddTagsToCertificateCommandInput, cb: (err: any, data?: AddTagsToCertificateCommandOutput) => void): void;
    addTagsToCertificate(args: AddTagsToCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToCertificateCommandOutput) => void): void;
    /**
     * <p>Deletes a certificate and its associated private key. If this action succeeds, the
     *       certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by AWS
     *       services integrated with ACM. </p>
     *          <note>
     *             <p>You cannot delete an ACM certificate that is being used by another AWS service. To
     *         delete a certificate that is in use, the certificate association must first be
     *         removed.</p>
     *          </note>
     */
    deleteCertificate(args: DeleteCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCertificateCommandOutput>;
    deleteCertificate(args: DeleteCertificateCommandInput, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    deleteCertificate(args: DeleteCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    /**
     * <p>Returns detailed metadata about the specified ACM certificate.</p>
     */
    describeCertificate(args: DescribeCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCertificateCommandOutput>;
    describeCertificate(args: DescribeCertificateCommandInput, cb: (err: any, data?: DescribeCertificateCommandOutput) => void): void;
    describeCertificate(args: DescribeCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCertificateCommandOutput) => void): void;
    /**
     * <p>Exports a private certificate issued by a private certificate authority (CA) for use
     *       anywhere. The exported file contains the certificate, the certificate chain, and the encrypted
     *       private 2048-bit RSA key associated with the public key that is embedded in the certificate.
     *       For security, you must assign a passphrase for the private key when exporting it. </p>
     *          <p>For information about exporting and formatting a certificate using the ACM console or
     *       CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a
     *         Private Certificate</a>.</p>
     */
    exportCertificate(args: ExportCertificateCommandInput, options?: __HttpHandlerOptions): Promise<ExportCertificateCommandOutput>;
    exportCertificate(args: ExportCertificateCommandInput, cb: (err: any, data?: ExportCertificateCommandOutput) => void): void;
    exportCertificate(args: ExportCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportCertificateCommandOutput) => void): void;
    /**
     * <p>Retrieves a certificate specified by an ARN and its certificate chain . The chain is an
     *       ordered list of certificates that contains the end entity certificate, intermediate
     *       certificates of subordinate CAs, and the root certificate in that order. The certificate and
     *       certificate chain are base64 encoded. If you want to decode the certificate to see the
     *       individual fields, you can use OpenSSL.</p>
     */
    getCertificate(args: GetCertificateCommandInput, options?: __HttpHandlerOptions): Promise<GetCertificateCommandOutput>;
    getCertificate(args: GetCertificateCommandInput, cb: (err: any, data?: GetCertificateCommandOutput) => void): void;
    getCertificate(args: GetCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCertificateCommandOutput) => void): void;
    /**
     * <p>Imports a certificate into AWS Certificate Manager (ACM) to use with services that are integrated with
     *       ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated
     *         services</a> allow only certificate types and keys they support to be associated with
     *       their resources. Further, their support differs depending on whether the certificate is
     *       imported into IAM or into ACM. For more information, see the documentation for each
     *       service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing
     *         Certificates</a> in the <i>AWS Certificate Manager User Guide</i>. </p>
     *
     *          <note>
     *             <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p>
     *          </note>
     *
     *          <p>Note the following guidelines when importing third party certificates:</p>
     *
     *
     *          <ul>
     *             <li>
     *                <p>You must enter the private key that matches the certificate you are importing.</p>
     *             </li>
     *             <li>
     *                <p>The private key must be unencrypted. You cannot import a private key that is protected
     *           by a password or a passphrase.</p>
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
     *           this argument only when you want to replace a previously imported certifica</p>
     *             </li>
     *             <li>
     *                <p>When you import a certificate by using the CLI, you must specify the certificate, the
     *           certificate chain, and the private key by their file names preceded by
     *             <code>file://</code>. For example, you can specify a certificate saved in the
     *             <code>C:\temp</code> folder as <code>file://C:\temp\certificate_to_import.pem</code>. If
     *           you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p>
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
     *
     *          <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
     *         Resource Name (ARN)</a> of the imported certificate.</p>
     */
    importCertificate(args: ImportCertificateCommandInput, options?: __HttpHandlerOptions): Promise<ImportCertificateCommandOutput>;
    importCertificate(args: ImportCertificateCommandInput, cb: (err: any, data?: ImportCertificateCommandOutput) => void): void;
    importCertificate(args: ImportCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportCertificateCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of certificate ARNs and domain names. You can request that only
     *       certificates that match a specific status be listed. You can also filter by specific
     *       attributes of the certificate. Default filtering returns only <code>RSA_2048</code>
     *       certificates. For more information, see <a>Filters</a>.</p>
     */
    listCertificates(args: ListCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<ListCertificatesCommandOutput>;
    listCertificates(args: ListCertificatesCommandInput, cb: (err: any, data?: ListCertificatesCommandOutput) => void): void;
    listCertificates(args: ListCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCertificatesCommandOutput) => void): void;
    /**
     * <p>Lists the tags that have been applied to the ACM certificate. Use the certificate's
     *       Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate,
     *       use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. </p>
     */
    listTagsForCertificate(args: ListTagsForCertificateCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForCertificateCommandOutput>;
    listTagsForCertificate(args: ListTagsForCertificateCommandInput, cb: (err: any, data?: ListTagsForCertificateCommandOutput) => void): void;
    listTagsForCertificate(args: ListTagsForCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForCertificateCommandOutput) => void): void;
    /**
     * <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If
     *       you do not specify the value portion of the tag when calling this function, the tag will be
     *       removed regardless of value. If you specify a value, the tag is removed only if it is
     *       associated with the specified value. </p>
     *
     *          <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To
     *       view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
     */
    removeTagsFromCertificate(args: RemoveTagsFromCertificateCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromCertificateCommandOutput>;
    removeTagsFromCertificate(args: RemoveTagsFromCertificateCommandInput, cb: (err: any, data?: RemoveTagsFromCertificateCommandOutput) => void): void;
    removeTagsFromCertificate(args: RemoveTagsFromCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromCertificateCommandOutput) => void): void;
    /**
     * <p>Renews an eligable ACM certificate. At this time, only exported private certificates can
     *       be renewed with this operation. In order to renew your ACM PCA certificates with ACM, you must
     *       first <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaPermissions.html">grant the ACM
     *         service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a>
     *       in the ACM User Guide.</p>
     */
    renewCertificate(args: RenewCertificateCommandInput, options?: __HttpHandlerOptions): Promise<RenewCertificateCommandOutput>;
    renewCertificate(args: RenewCertificateCommandInput, cb: (err: any, data?: RenewCertificateCommandOutput) => void): void;
    renewCertificate(args: RenewCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RenewCertificateCommandOutput) => void): void;
    /**
     * <p>Requests an ACM certificate for use with other AWS services. To request an ACM
     *       certificate, you must specify a fully qualified domain name (FQDN) in the
     *         <code>DomainName</code> parameter. You can also specify additional FQDNs in the
     *         <code>SubjectAlternativeNames</code> parameter. </p>
     *
     *          <p>If you are requesting a private certificate, domain validation is not required. If you are
     *       requesting a public certificate, each domain name that you specify must be validated to verify
     *       that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>.
     *       We recommend that you use DNS validation. ACM issues public certificates after receiving
     *       approval from the domain owner. </p>
     */
    requestCertificate(args: RequestCertificateCommandInput, options?: __HttpHandlerOptions): Promise<RequestCertificateCommandOutput>;
    requestCertificate(args: RequestCertificateCommandInput, cb: (err: any, data?: RequestCertificateCommandOutput) => void): void;
    requestCertificate(args: RequestCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RequestCertificateCommandOutput) => void): void;
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
    resendValidationEmail(args: ResendValidationEmailCommandInput, options?: __HttpHandlerOptions): Promise<ResendValidationEmailCommandOutput>;
    resendValidationEmail(args: ResendValidationEmailCommandInput, cb: (err: any, data?: ResendValidationEmailCommandOutput) => void): void;
    resendValidationEmail(args: ResendValidationEmailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResendValidationEmailCommandOutput) => void): void;
    /**
     * <p>Updates a certificate. Currently, you can use this function to specify whether to opt in
     *       to or out of recording your certificate in a certificate transparency log. For more
     *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of
     *         Certificate Transparency Logging</a>. </p>
     */
    updateCertificateOptions(args: UpdateCertificateOptionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCertificateOptionsCommandOutput>;
    updateCertificateOptions(args: UpdateCertificateOptionsCommandInput, cb: (err: any, data?: UpdateCertificateOptionsCommandOutput) => void): void;
    updateCertificateOptions(args: UpdateCertificateOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCertificateOptionsCommandOutput) => void): void;
}
