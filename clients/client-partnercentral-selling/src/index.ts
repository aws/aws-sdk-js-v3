// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>AWS Partner Central API for Selling</fullname>
 *          <p>
 *             <b>AWS Partner Central API for Selling Reference Guide</b>
 *          </p>
 *          <p>
 *             Amazon Web Services (AWS) Partner Central API reference guide is designed to help
 *             <a href="https://docs.aws.amazon.com/partners/programs/">AWS Partners</a> programmatically integrate their Customer Relationship Management (CRM) systems with AWS Partner Central. Through the Partner Central APIs, partners can automate and streamline their interactions with AWS Partner Central, ensuring a more efficient and effective engagement in joint business activities.
 *         </p>
 *          <p>
 *             The AWS Partner Central API service provides standard AWS API functionality. You can directly use the API <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/API_Operations.html">Actions</a>, or you can use an AWS SDK to access an API that's tailored to the programming language or platform that you're using. For more information about AWS application development, see <a href="https://docs.aws.amazon.com/getting-started">Getting Started with AWS</a>. For more information about using AWS SDKs, see <a href="https://docs.aws.amazon.com/aws-sdk">AWS SDKs</a>.
 *         </p>
 *          <p class="title">
 *             <b>Features offered by AWS Partner Central API</b>
 *          </p>
 *          <ol>
 *             <li>
 *                <p>
 *                   <b>Opportunity management:</b> Facilitates the management of co-selling opportunities with AWS using API actions such as <code>CreateOpportunity</code>, <code>UpdateOpportunity</code>, <code>ListOpportunities</code>, <code>GetOpportunity</code>, and <code>AssignOpportunity</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>AWS referral management:</b> Facilitates receiving referrals shared by AWS using actions like <code>ListEngagementInvitations</code>, <code>GetEngagementInvitation</code>, <code>StartEngagementByAcceptingInvitation</code>, and <code>RejectEngagementInvitation</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Entity association:</b> Associate related entities such as <i>AWS Products</i>, <i>Partner Solutions</i>, and <i>AWS Marketplace Private Offers</i> with opportunities using the actions <code>AssociateOpportunity</code> and <code>DisassociateOpportunity</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>View AWS opportunity details:</b> Use the <code>GetAWSOpportunitySummary</code> action to retrieve real-time summaries of AWS opportunities that are linked to your opportunities.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>List solutions:</b> Provides list APIs for listing solutions partners offer using <code>ListSolutions</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Event subscription:</b> Partners can subscribe to real-time updates on opportunities by listening to events such as <i>Opportunity Created</i>, <i>Opportunity Updated</i>, <i>Engagement Invitation Accepted</i>, <i>Engagement Invitation Rejected</i> and <i>Engagement Invitation Created</i> using AWS EventBridge.</p>
 *             </li>
 *          </ol>
 *
 * @packageDocumentation
 */
export * from "./PartnerCentralSellingClient";
export * from "./PartnerCentralSelling";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PartnerCentralSellingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { PartnerCentralSellingServiceException } from "./models/PartnerCentralSellingServiceException";
