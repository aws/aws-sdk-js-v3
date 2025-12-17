// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>AWS Partner Central API for Selling</fullname> <p> <b>AWS Partner Central API for Selling Reference Guide</b> </p> <p>This Amazon Web Services (AWS) Partner Central API reference is designed to help <a href="http://aws.amazon.com/partners/programs/">AWS Partners</a> integrate Customer Relationship Management (CRM) systems with AWS Partner Central. Partners can automate interactions with AWS Partner Central, which helps to ensure effective engagements in joint business activities.</p> <p>The API provides standard AWS API functionality. Access it by either using API <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/API_Operations.html">Actions</a> or by using an AWS SDK that's tailored to your programming language or platform. For more information, see <a href="http://aws.amazon.com/getting-started">Getting Started with AWS</a> and <a href="http://aws.amazon.com/developer/tools/">Tools to Build on AWS</a>.</p> <p class="title"> <b>Features offered by AWS Partner Central API</b> </p> <ol> <li> <p> <b>Opportunity management:</b> Manages coselling opportunities through API actions such as <code>CreateOpportunity</code>, <code>UpdateOpportunity</code>, <code>ListOpportunities</code>, <code>GetOpportunity</code>, and <code>AssignOpportunity</code>.</p> </li> <li> <p> <b>AWS referral management:</b> Manages referrals shared by AWS using actions such as <code>ListEngagementInvitations</code>, <code>GetEngagementInvitation</code>, <code>StartEngagementByAcceptingInvitation</code>, and <code>RejectEngagementInvitation</code>.</p> </li> <li> <p> <b>Entity association:</b> Associates related entities such as <i>AWS Products</i>, <i>Partner Solutions</i>, and <i>AWS Marketplace Private Offers</i> with opportunities using the actions <code>AssociateOpportunity</code>, and <code>DisassociateOpportunity</code>.</p> </li> <li> <p> <b>View AWS opportunity details:</b> Retrieves real-time summaries of AWS opportunities using the <code>GetAWSOpportunitySummary</code> action.</p> </li> <li> <p> <b>List solutions:</b> Provides list APIs for listing partner offers using <code>ListSolutions</code>.</p> </li> <li> <p> <b>Event subscription:</b> Subscribe to real-time opportunity updates through AWS EventBridge by using actions such as <i>Opportunity Created</i>, <i>Opportunity Updated</i>, <i>Engagement Invitation Accepted</i>, <i>Engagement Invitation Rejected</i>, and <i>Engagement Invitation Created</i>.</p> </li> </ol>
 *
 * @packageDocumentation
 */
export * from "./PartnerCentralSellingClient";
export * from "./PartnerCentralSelling";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PartnerCentralSellingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { PartnerCentralSellingServiceException } from "./models/PartnerCentralSellingServiceException";
