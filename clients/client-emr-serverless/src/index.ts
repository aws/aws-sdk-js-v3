// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon EMR  Serverless is a new deployment option for Amazon EMR. Amazon EMR Serverless provides
 *          a serverless runtime environment that simplifies running analytics applications using the
 *          latest open source frameworks such as Apache Spark and Apache Hive. With Amazon EMR Serverless,
 *          you don’t have to configure, optimize, secure, or operate clusters to run applications with
 *          these frameworks.</p>
 *          <p>The API reference to Amazon EMR  Serverless is <code>emr-serverless</code>. The
 *             <code>emr-serverless</code> prefix is used in the following scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR  Serverless. For example,
 *                   <code>aws emr-serverless start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR  Serverless. For example,
 *                   <code>"Action": ["emr-serverless:StartJobRun"]</code>. For more information, see
 *                   <a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR  Serverless</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR  Serverless service endpoints. For example,
 *                   <code>emr-serverless.us-east-2.amazonaws.com</code>.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./EMRServerlessClient";
export * from "./EMRServerless";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { EMRServerlessServiceException } from "./models/EMRServerlessServiceException";
