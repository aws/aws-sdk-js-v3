// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a
 *          service that uses program analysis and machine learning to detect potential defects that
 *          are difficult for developers to find and recommends fixes in your Java and Python
 *          code.</p>
 *          <p>By proactively detecting and providing recommendations for addressing code defects and
 *          implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of
 *          your code base during the code review stage. For more information about CodeGuru Reviewer, see the
 *                <i>
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i>
 *          </p>
 *          <p>To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection
 *          between your VPC and CodeGuru Reviewer by creating an <i>interface VPC endpoint</i>. For
 *          more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface VPC
 *             endpoints (Amazon Web Services PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User
 *          Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./CodeGuruReviewerClient";
export * from "./CodeGuruReviewer";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { CodeGuruReviewerServiceException } from "./models/CodeGuruReviewerServiceException";
