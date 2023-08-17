// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>You use the Amazon Web Services Payment Cryptography Control Plane to manage the encryption keys you use for payment-related cryptographic operations. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security-iam.html">Identity and access management</a> in the <i>Amazon Web Services Payment Cryptography User Guide.</i>
 *          </p>
 *          <p>To use encryption keys for payment-related transaction processing and associated cryptographic operations, you use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/Welcome.html">Amazon Web Services Payment Cryptography Data Plane</a>. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations. </p>
 *          <p>All Amazon Web Services Payment Cryptography API calls must be signed and transmitted using Transport Layer Security (TLS). We recommend you always use the latest supported TLS version for logging API requests. </p>
 *          <p>Amazon Web Services Payment Cryptography supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to Amazon Web Services Payment Cryptography, who made the request, when it was made, and so on. If you don't conﬁgure a trail, you can still view the most recent events in the CloudTrail console. For more information, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./PaymentCryptographyClient";
export * from "./PaymentCryptography";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { PaymentCryptographyServiceException } from "./models/PaymentCryptographyServiceException";
