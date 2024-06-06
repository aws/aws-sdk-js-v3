// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Key Management Service</fullname>
 *          <p>Key Management Service (KMS) is an encryption and key management web service. This guide describes
 *       the KMS operations that you can call programmatically. For general information about KMS,
 *       see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/">
 *                <i>Key Management Service Developer Guide</i>
 *             </a>.</p>
 *          <note>
 *             <p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a
 *         convenient way to create programmatic access to KMS and other Amazon Web Services services. For example,
 *         the SDKs take care of tasks such as signing requests (see below), managing errors, and
 *         retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to
 *         download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *           Services</a>.</p>
 *          </note>
 *          <p>We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to KMS.</p>
 *          <p>If you need to use FIPS 140-2 validated cryptographic modules when communicating with
 *       Amazon Web Services, use the FIPS endpoint in your preferred Amazon Web Services Region. For more information about the
 *       available FIPS endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/kms.html#kms_region">Service endpoints</a> in the Key Management Service topic of
 *       the <i>Amazon Web Services General Reference</i>.</p>
 *          <p>All KMS API calls must be signed and be transmitted using Transport Layer Security
 *       (TLS). KMS recommends you always use the latest supported TLS version. Clients must also
 *       support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman
 *       (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7
 *       and later support these modes.</p>
 *          <p>
 *             <b>Signing Requests</b>
 *          </p>
 *          <p>Requests must be signed using an access key ID and a secret access key. We strongly
 *       recommend that you do not use your Amazon Web Services account root access key ID and secret access key for
 *       everyday work. You can use the access key ID and secret access key for an IAM user or you
 *       can use the Security Token Service (STS) to generate temporary security credentials and use those to sign
 *       requests. </p>
 *          <p>All KMS requests must be signed with <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>KMS supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your
 *       Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the
 *       information collected by CloudTrail, you can determine what requests were made to KMS, who made
 *       the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it
 *       on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p>
 *          <p>
 *             <b>Additional Resources</b>
 *          </p>
 *          <p>For more information about credentials and request signing, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">Amazon Web Services
 *             Security Credentials</a> - This topic provides general information about the types
 *           of credentials used to access Amazon Web Services.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary
 *             Security Credentials</a> - This section of the <i>IAM User Guide</i>
 *           describes how to create and use temporary security credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version
 *             4 Signing Process</a> - This set of topics walks you through the process of signing
 *           a request using an access key ID and a secret access key.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Commonly Used API Operations</b>
 *          </p>
 *          <p>Of the API operations discussed in this guide, the following will prove the most useful
 *       for most applications. You will likely perform operations other than these, such as creating
 *       keys and assigning policies, by using the console.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Decrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./KMSClient";
export * from "./KMS";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { KMSExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { KMSServiceException } from "./models/KMSServiceException";
