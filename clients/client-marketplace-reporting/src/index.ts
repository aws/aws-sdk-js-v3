// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The AWS Marketplace <code>GetBuyerDashboard</code> API enables you to get a procurement insights dashboard
 *       programmatically. The API gets the agreement and cost analysis dashboards with data for all of the Amazon Web Services accounts in your Amazon Web Services organization. </p>
 *          <p>To use the API, you must complete the following prerequisites:</p>
 *          <ul>
 *             <li>
 *                <p>Enable all features for your organization. For more information, see
 *           <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features for an organization with Amazon Web Services Organizations</a>,
 *         in the <i>Amazon Web Services Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Call the service as the Amazon Web Services Organizations management account or an account registered as a delegated administrator for the procurement insights service.
 *             Users without management or delegated administrator accounts can use the dashboard, but they only see data for their accounts.</p>
 *                <p>For more information about management accounts, see
 *             <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tutorials_basic.html">Tutorial: Creating and configuring an organization</a>
 *             and <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs-manage_accounts_management.html">Managing the management account with Amazon Web Services Organizations</a>,
 *             both in the <i>Amazon Web Services Organizations User Guide</i>.</p>
 *                <p>For more information about delegated administrators, see <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/management-delegates.html">Using delegated administrators</a>,
 *           in the <i>AWS Marketplace Buyer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Create an IAM policy that enables the <code>aws-marketplace:GetBuyerDashboard</code> and <code>organizations:DescribeOrganization</code> permissions. In addition,
 *           the management account requires the <code>organizations:EnableAWSServiceAccess</code> and <code>iam:CreateServiceLinkedRole</code> permissions to create
 *           For more information about creating the policy, see
 *           <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">Policies and permissions in Amazon Web Services Identity and Access Management</a>,
 *           in the <i>IAM User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Use the Amazon Web Services Marketplace console to create the <code>AWSServiceRoleForProcurementInsightsPolicy</code> service-linked role.
 *           The role enables  AWS Marketplace procurement visibility integration. The management account requires an IAM policy with the <code>organizations:EnableAWSServiceAccess</code> and <code>iam:CreateServiceLinkedRole</code> permissions
 *           to create the service-linked role and enable the service access. For more information, see
 *           <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/orgs-access-slr.html">Granting access to
 *             Amazon Web Services Organizations</a>, and
 *           <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-service-linked-role-procurement.html">Service-linked role to share procurement data</a>,
 *           in the <i>Amazon Web Services Marketplace Buyer Guide</i>.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./MarketplaceReportingClient";
export * from "./MarketplaceReporting";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MarketplaceReportingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./models";

export { MarketplaceReportingServiceException } from "./models/MarketplaceReportingServiceException";
