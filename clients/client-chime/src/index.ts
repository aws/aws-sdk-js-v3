// smithy-typescript generated code
/* eslint-disable */
/**
 * <important>
 *             <p>
 *                <b>Most of these APIs are no longer supported and will not be updated.</b> We recommend using the latest versions in the
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/welcome.html">Amazon Chime SDK API reference</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest versions requires migrating to dedicated namespaces. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *          <p>The Amazon Chime application programming interface (API) is designed so administrators can
 *             perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
 *             Connectors. This guide provides detailed information about the Amazon Chime API,
 *             including operations, types, inputs and outputs, and error codes.</p>
 *          <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls for Amazon Chime. We recommend using an AWS SDK or the
 *             AWS CLI. The page for each API action contains a <i>See Also</i> section that includes links to information about using the action with a language-specific
 *             AWS SDK or the AWS CLI.</p>
 *          <dl>
 *             <dt>Using an AWS SDK</dt>
 *             <dd>
 *                <p>
 *                         You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the
 *                         <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.
 *                     </p>
 *             </dd>
 *             <dt>Using the AWS CLI</dt>
 *             <dd>
 *                <p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see
 *                         <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a>
 *                         in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the
 *                         <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
 *                         <i>AWS CLI Command Reference</i>.
 *                     </p>
 *             </dd>
 *             <dt>Using REST APIs</dt>
 *             <dd>
 *                <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports Signature Version 4. For more information, see
 *                         <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>
 *                         in the <i>Amazon Web Services General Reference</i>.</p>
 *                <p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see
 *             <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a>
 *             in the <i>Amazon Chime Administration Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./ChimeClient";
export * from "./Chime";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { ChimeServiceException } from "./models/ChimeServiceException";
