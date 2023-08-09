// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS Signer is a fully managed code signing service to help you ensure the trust and
 * 			integrity of your code. </p>
 * 		       <p>AWS Signer supports the following applications:</p>
 * 		       <p>With code signing for AWS Lambda, you can sign <a href="http://docs.aws.amazon.com/lambda/latest/dg/">AWS
 * 				Lambda</a> deployment packages. Integrated support is provided for <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/">Amazon S3</a>, <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/">Amazon
 * 				CloudWatch</a>, and <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/">AWS CloudTrail</a>. In order
 * 			to sign code, you create a signing profile and then use Signer to sign Lambda zip files
 * 			in S3. </p>
 * 		       <p>With code signing for IoT, you can sign code for any IoT device that is supported by AWS.
 * 			IoT code signing is available for <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and is integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager (ACM)</a>. In order to sign code, you import a third-party code signing
 * 			certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management. </p>
 * 		       <p>With code signing for
 * 			containers …(TBD)</p>
 * 		       <p>For more information about AWS Signer, see the <a href="https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">AWS Signer Developer
 * 			Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./SignerClient";
export * from "./Signer";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { SignerServiceException } from "./models/SignerServiceException";
