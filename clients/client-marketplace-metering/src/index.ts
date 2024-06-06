// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>AWS Marketplace Metering Service</fullname>
 *          <p>This reference provides descriptions of the low-level AWS Marketplace Metering Service
 *             API.</p>
 *          <p>AWS Marketplace sellers can use this API to submit usage data for custom usage
 *             dimensions.</p>
 *          <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">AWS Marketplace metering and entitlement API permissions</a> in the
 *                 <i>AWS Marketplace Seller Guide.</i>
 *          </p>
 *          <p>
 *             <b>Submitting Metering Records</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>MeterUsage</i> - Submits the metering record for an AWS
 *                     Marketplace product. <code>MeterUsage</code> is called from an EC2 instance or a
 *                     container running on EKS or ECS.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>BatchMeterUsage</i> - Submits the metering record for a set of
 *                     customers. <code>BatchMeterUsage</code> is called from a software-as-a-service
 *                     (SaaS) application.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Accepting New Customers</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>ResolveCustomer</i> - Called by a SaaS application during the
 *                     registration process. When a buyer visits your website during the registration
 *                     process, the buyer submits a Registration Token through the browser. The
 *                     Registration Token is resolved through this API to obtain a
 *                         <code>CustomerIdentifier</code>
 *
 *                     along with the <code>CustomerAWSAccountId</code> and
 *                     <code>ProductCode</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Entitlement and Metering for Paid Container Products</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Paid container software products sold through AWS Marketplace must integrate
 *                     with the AWS Marketplace Metering Service and call the
 *                         <code>RegisterUsage</code> operation for software entitlement and metering.
 *                     Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call
 *                         <code>RegisterUsage</code>, but you can do so if you want to receive usage
 *                     data in your seller reports. For more information on using the
 *                         <code>RegisterUsage</code> operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>BatchMeterUsage</code> API calls are captured by AWS CloudTrail. You can use
 *             Cloudtrail to verify that the SaaS metering records that you sent are accurate by
 *             searching for records with the <code>eventName</code> of <code>BatchMeterUsage</code>.
 *             You can also use CloudTrail to audit records over time. For more information, see the
 *                     <i>
 *                <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>.</i>
 *          </p>
 *
 * @packageDocumentation
 */
export * from "./MarketplaceMeteringClient";
export * from "./MarketplaceMetering";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MarketplaceMeteringExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./models";

export { MarketplaceMeteringServiceException } from "./models/MarketplaceMeteringServiceException";
