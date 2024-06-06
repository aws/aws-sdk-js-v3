// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>WAF</fullname>
 *          <note>
 *             <p>This is the latest version of the <b>WAF</b> API,
 *             released in November, 2019. The names of the entities that you use to access this API,
 *             like endpoints and namespaces, all have the versioning information added, like "V2" or
 *             "v2", to distinguish from the prior version. We recommend migrating your resources to
 *             this version, because it has a number of significant improvements.</p>
 *             <p>If you used WAF prior to this release, you can't use this WAFV2 API to access any
 *             WAF resources that you created before. You can access your old rules, web ACLs, and
 *             other WAF resources only through the WAF Classic APIs. The WAF Classic APIs
 *             have retained the prior names, endpoints, and namespaces. </p>
 *             <p>For information, including how to migrate your WAF resources to this version,
 *             see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
 *          </note>
 *          <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS
 *          requests that are forwarded to an Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync
 *       GraphQL API, Amazon Cognito user pool, App Runner service, or Amazon Web Services Verified Access instance. WAF also lets you control access to your content,
 *       to protect the Amazon Web Services resource that WAF is monitoring. Based on conditions that
 *          you specify, such as the IP addresses that requests originate from or the values of query
 *          strings, the protected resource responds to requests with either the requested content, an HTTP 403 status code
 *          (Forbidden), or with a custom response. </p>
 *          <p>This API guide is for developers who need detailed information about WAF API actions,
 *          data types, and errors. For detailed information about WAF features and guidance for configuring and using
 *          WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer
 *          Guide</a>.</p>
 *          <p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/waf.html">WAF endpoints and quotas</a>. </p>
 *          <ul>
 *             <li>
 *                <p>For regional applications, you can use any of the endpoints in the list.
 *                A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance. </p>
 *             </li>
 *             <li>
 *                <p>For Amazon CloudFront applications, you must use the API endpoint listed for
 *                US East (N. Virginia): us-east-1.</p>
 *             </li>
 *          </ul>
 *          <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the
 *          programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>We currently provide two versions of the WAF API: this API and the prior versions,
 *          the classic WAF APIs. This new API provides the same functionality as the older versions,
 *          with the following major improvements:</p>
 *          <ul>
 *             <li>
 *                <p>You use one API for both global and regional applications. Where you need to
 *                distinguish the scope, you specify a <code>Scope</code> parameter and set it to
 *                   <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
 *             </li>
 *             <li>
 *                <p>You can define a web ACL or rule group with a single call, and update it with a
 *                single call. You define all rule specifications in JSON format, and pass them to your
 *                rule group or web ACL calls.</p>
 *             </li>
 *             <li>
 *                <p>The limits WAF places on the use of rules more closely reflects the cost of
 *                running each type of rule. Rule groups include capacity settings, so you know the
 *                maximum cost of a rule group when you use it.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./WAFV2Client";
export * from "./WAFV2";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { WAFV2ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./models";

export { WAFV2ServiceException } from "./models/WAFV2ServiceException";
