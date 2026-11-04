// smithy-typescript generated code
/* eslint-disable */
/**
 * Partner Central
 *
 * This Amazon Web Services (AWS) Partner Central API reference is designed to help [AWS Partners](http://aws.amazon.com/partners/programs/) integrate Customer Relationship Management (CRM) systems with AWS Partner Central. Partners can automate interactions with AWS Partner Central, which helps to ensure effective engagements in joint business activities.
 *
 * The API provides standard AWS API functionality. Access it by either using API [Actions](https://docs.aws.amazon.com/partner-central/latest/selling-api/API_Operations.html) or by using an AWS SDK that's tailored to your programming language or platform. For more information, see [Getting Started with AWS](http://aws.amazon.com/getting-started) and [Tools to Build on AWS](http://aws.amazon.com/developer/tools/).
 *
 * **Features offered by AWS Partner Central API**
 *
 * 1. **Opportunity management:** Manages coselling opportunities through API actions such as `CreateOpportunity`, `UpdateOpportunity`, `ListOpportunities`, `GetOpportunity`, and `AssignOpportunity`.
 * 2. **AWS referral management:** Manages referrals shared by AWS using actions such as `ListEngagementInvitations`, `GetEngagementInvitation`, `StartEngagementByAcceptingInvitation`, and `RejectEngagementInvitation`.
 * 3. **Entity association:** Associates related entities such as *AWS Products*, *Partner Solutions*, and *AWS Marketplace Private Offers* with opportunities using the actions `AssociateOpportunity`, and `DisassociateOpportunity`.
 * 4. **View AWS opportunity details:** Retrieves real-time summaries of AWS opportunities using the `GetAWSOpportunitySummary` action.
 * 5. **List solutions:** Provides list APIs for listing partner offers using `ListSolutions`.
 * 6. **Event subscription:** Subscribe to real-time opportunity updates through AWS EventBridge by using actions such as *Opportunity Created*, *Opportunity Updated*, *Engagement Invitation Accepted*, *Engagement Invitation Rejected*, and *Engagement Invitation Created*.
 *
 * @packageDocumentation
 */
export * from "./PartnerCentralSellingClient";
export * from "./PartnerCentralSelling";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PartnerCentralSellingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { PartnerCentralSellingServiceException } from "./models/PartnerCentralSellingServiceException";
