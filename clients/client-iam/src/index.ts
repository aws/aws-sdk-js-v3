// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Identity and Access Management</fullname>
 *          <p>Identity and Access Management (IAM) is a web service for securely controlling
 *       access to Amazon Web Services services. With IAM, you can centrally manage users, security credentials
 *       such as access keys, and permissions that control which Amazon Web Services resources users and
 *       applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Identity and Access Management User Guide</a>.</p>
 *          <p>
 *             <b>Programmatic access to IAM</b>
 *          </p>
 *          <p>We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to IAM. The Amazon Web Services
 *       SDKs consist of libraries and sample code for various programming languages and platforms
 *       (for example, Java, Ruby, .NET, iOS, and Android). The SDKs provide a convenient way to
 *       create programmatic access to IAM and Amazon Web Services. For example, the SDKs take care of tasks such as
 *       cryptographically signing requests, managing errors, and retrying requests automatically.
 *       For more information, see <a href="http://aws.amazon.com/tools/">Tools to build on
 *         Amazon Web Services</a>.</p>
 *          <p>Alternatively, you can also use the IAM Query API to make direct calls to the IAM
 *       service. For more information about calling the IAM Query API, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query
 *         requests</a> in the <i>Identity and Access Management User Guide</i>. IAM supports GET and
 *       POST requests for all actions. That is, the API does not require you to use GET for some
 *       actions and POST for others. However, GET requests are subject to the limitation size of a
 *       URL. Therefore, for operations that require larger sizes, use a POST request.</p>
 *          <p>
 *             <b>Signing requests</b>
 *          </p>
 *          <p>Requests must be signed using an access key ID and a secret access key. We strongly
 *       recommend that you do not use your Amazon Web Services account access key ID and secret access key for
 *       everyday work with IAM. You can use the access key ID and secret access key for an
 *       IAM user or you can use the Security Token Service to generate temporary security credentials and use
 *       those to sign requests.</p>
 *          <p>To sign requests, we recommend that you use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you have an
 *       existing application that uses Signature Version 2, you do not have to update it to use
 *       Signature Version 4. However, some operations now require Signature Version 4. The
 *       documentation for operations that require version 4 indicate this requirement.</p>
 *          <p>
 *             <b>Additional resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">Amazon Web Services
 *           security credentials</a>. This topic provides general information about the types of
 *           credentials used for accessing Amazon Web Services.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAMBestPractices.html">IAM best
 *           practices</a>. This topic presents a list of suggestions for using the IAM service
 *           to help secure your Amazon Web Services resources.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *           Amazon Web Services API requests</a>. This set of topics walk you through the process of signing a
 *           request using an access key ID and secret access key.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./IAMClient";
export * from "./IAM";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IAMExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";
export * from "./pagination";
export * from "./waiters";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { IAMServiceException } from "./models/IAMServiceException";
