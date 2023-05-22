// smithy-typescript generated code
/* eslint-disable */
/**
 * <p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in
 * 			business critical operational applications. You specify the Amazon Web Services resources that you
 * 			want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those
 * 			resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an
 * 				<i>insight</i> that includes recommendations, related events, and
 * 			related metrics that can help you improve your operational applications. For more
 * 			information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
 *          <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight
 * 			is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each
 * 			insight to help you manage and track your work addressing insights. </p>
 *          <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
 * 			learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>
 *
 * @packageDocumentation
 */
export * from "./DevOpsGuruClient";
export * from "./DevOpsGuru";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { DevOpsGuruServiceException } from "./models/DevOpsGuruServiceException";
