// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS Marketplace is a curated digital catalog that customers can use to find, buy, deploy, and manage third-party software, data, and services to build solutions and run their businesses. The AWS Marketplace Agreement Service provides an API interface that helps AWS Marketplace sellers manage their product-related agreements, including listing, searching, and filtering agreements.</p>
 *          <p>To manage agreements in AWS Marketplace, you must ensure that your AWS Identity and
 *          Access Management (IAM) policies and roles are set up. The user must have the required
 *          policies/permissions that allow them to carry out the actions in AWS:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DescribeAgreement</code> – Grants permission to users to obtain detailed
 *                meta data about any of their agreements.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetAgreementTerms</code> – Grants permission to users to obtain details
 *                about the terms of an agreement.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SearchAgreements</code> – Grants permission to users to search through all
 *                their agreements.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./MarketplaceAgreementClient";
export * from "./MarketplaceAgreement";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MarketplaceAgreementExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { MarketplaceAgreementServiceException } from "./models/MarketplaceAgreementServiceException";
