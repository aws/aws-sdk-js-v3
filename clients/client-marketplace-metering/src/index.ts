// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon Web Services Marketplace Metering Service</fullname>
 *          <p>This reference provides descriptions of the low-level Marketplace Metering Service API.</p>
 *          <p>Amazon Web Services Marketplace sellers can use this API to submit usage data for custom usage
 *             dimensions.</p>
 *          <p>For information about the permissions that you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">Amazon Web Services Marketplace metering and entitlement API permissions</a> in the <i>Amazon Web Services Marketplace
 *                 Seller Guide.</i>
 *          </p>
 *          <p>
 *             <b>Submitting metering records</b>
 *          </p>
 *          <p>
 *             <i>MeterUsage</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Submits the metering record for an Amazon Web Services Marketplace product.</p>
 *             </li>
 *             <li>
 *                <p>Called from: Amazon Elastic Compute Cloud (Amazon EC2) instance or a container running on either
 *                     Amazon Elastic Kubernetes Service (Amazon EKS) or Amazon Elastic Container Service (Amazon ECS)</p>
 *             </li>
 *             <li>
 *                <p>Supported product types: Amazon Machine Images (AMIs) and containers</p>
 *             </li>
 *             <li>
 *                <p>Vendor-metered tagging: Supported allocation tagging</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <i>BatchMeterUsage</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Submits the metering record for a set of customers.
 *                         <code>BatchMeterUsage</code> API calls are captured by CloudTrail. You can use
 *                     CloudTrail to verify that the software as a subscription (SaaS) metering records that
 *                     you sent are accurate by searching for records with the <code>eventName</code>
 *                     of <code>BatchMeterUsage</code>. You can also use CloudTrail to audit records over
 *                     time. For more information, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">CloudTrail User
 *                         Guide</a>.</p>
 *             </li>
 *             <li>
 *                <p>Called from: SaaS applications</p>
 *             </li>
 *             <li>
 *                <p>Supported product type: SaaS</p>
 *             </li>
 *             <li>
 *                <p>Vendor-metered tagging: Supports allocation tagging</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Accepting new customers</b>
 *          </p>
 *          <p>
 *             <i>ResolveCustomer</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Resolves the registration token that the buyer submits through the browser
 *                     during the registration process. Obtains a <code>CustomerIdentifier</code> along
 *                     with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p>
 *             </li>
 *             <li>
 *                <p>Called from: SaaS application during the registration process</p>
 *             </li>
 *             <li>
 *                <p>Supported product type: SaaS</p>
 *             </li>
 *             <li>
 *                <p>Vendor-metered tagging: Not applicable</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Entitlement and metering for paid container
 *             products</b>
 *          </p>
 *          <p>
 *             <i>RegisteredUsage</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Provides software entitlement and metering. Paid container software products
 *                     sold through Amazon Web Services Marketplace must integrate with the Marketplace Metering Service and call the
 *                         <code>RegisterUsage</code> operation. Free and Bring Your Own License model
 *                     (BYOL) products for Amazon ECS or Amazon EKS aren't required to call
 *                         <code>RegisterUsage</code>. However, you can do so if you want to receive
 *                     usage data in your seller reports. For more information about using the
 *                         <code>RegisterUsage</code> operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-based products</a>.</p>
 *             </li>
 *             <li>
 *                <p>Called from: Paid container software products</p>
 *             </li>
 *             <li>
 *                <p>Supported product type: Containers</p>
 *             </li>
 *             <li>
 *                <p>Vendor-metered tagging: Not applicable</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Entitlement custom metering for container
 *             products</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>MeterUsage API is available in GovCloud Regions but only supports AMI
 *                     FCP products in GovCloud Regions. Flexible Consumption Pricing (FCP) Container
 *                     products aren’t supported in GovCloud Regions: us-gov-west-1 and us-gov-east-1.
 *                     For more information, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-based products</a>.</p>
 *             </li>
 *             <li>
 *                <p>Custom metering for container products are called using the
 *                     MeterUsage API. The API is used for FCP AMI and FCP Container product
 *                     metering.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Custom metering for Amazon EKS is available in 17
 *                 Amazon Web Services Regions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The metering service supports Amazon ECS and EKS for Flexible Consumption Pricing
 *                     (FCP) products using MeterUsage API. Amazon ECS is supported in all
 *                     Amazon Web Services Regions that MeterUsage API is available except for
 *                     GovCloud.</p>
 *             </li>
 *             <li>
 *                <p>Amazon EKS is supported in the following: us-east-1, us-east-2, us-west-1,
 *                     us-west-2, eu-west-1, eu-central-1, eu-west-2, eu-west-3, eu-north-1, ap-east-1,
 *                     ap-southeast-1, ap-northeast-1, ap-southeast-2, ap-northeast-2, ap-south-1,
 *                     ca-central-1, sa-east-1.</p>
 *                <note>
 *                   <p>For questions about adding Amazon Web Services Regions for metering, contact <a href="mailto://aws.amazon.com/marketplace/management/contact-us/">Amazon Web Services
 *                             Marketplace Seller Operations</a>.</p>
 *                </note>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./MarketplaceMeteringClient";
export * from "./MarketplaceMetering";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MarketplaceMeteringExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { MarketplaceMeteringServiceException } from "./models/MarketplaceMeteringServiceException";
