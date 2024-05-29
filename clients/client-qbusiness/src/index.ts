// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>This is the <i>Amazon Q Business</i> API Reference. Amazon Q Business is a fully
 *             managed, generative-AI powered enterprise chat assistant that you can deploy within your
 *             organization. Amazon Q Business enhances employee productivity by supporting key tasks such
 *             as question-answering, knowledge discovery, writing email messages, summarizing text,
 *             drafting document outlines, and brainstorming ideas. Users ask questions of
 *             Amazon Q Business and get answers that are presented in a conversational manner. For an
 *             introduction to the service, see the <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/what-is.html">
 *                <i>Amazon Q Business User Guide</i>
 *             </a>.</p>
 *          <p>For an overview of the Amazon Q Business APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/api-ref.html#api-overview">Overview of Amazon Q Business API operations</a>.</p>
 *          <p>For information about the IAM access control permissions you need to
 *             use this API, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html">IAM roles for Amazon Q Business</a> in the
 *                 <i>Amazon Q Business User Guide</i>.</p>
 *          <p>You can use the following AWS SDKs to access Amazon Q Business APIs:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdk-for-cpp">AWS SDK for C++</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdk-for-go">AWS SDK for Go</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdk-for-java">AWS SDK for Java</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdk-for-javascript">AWS SDK for
 *                         JavaScript</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdk-for-net">AWS SDK for .NET</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/pythonsdk">AWS SDK for Python
 *                     (Boto3)</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdk-for-ruby">AWS SDK for Ruby</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>The following resources provide additional information about using the Amazon Q Business
 *             API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/setting-up.html">Setting up for
 *                             Amazon Q Business</a>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/qbusiness/index.html">Amazon Q Business CLI Reference</a>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://docs.aws.amazon.com/general/latest/gr/amazonq.html">Amazon Web Services General Reference</a>
 *                   </i>
 *                </p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./QBusinessClient";
export * from "./QBusiness";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export { RuntimeExtension } from "./runtimeExtensions";
export { QBusinessExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { QBusinessServiceException } from "./models/QBusinessServiceException";
