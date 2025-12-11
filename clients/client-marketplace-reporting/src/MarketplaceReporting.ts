// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetBuyerDashboardCommand,
  GetBuyerDashboardCommandInput,
  GetBuyerDashboardCommandOutput,
} from "./commands/GetBuyerDashboardCommand";
import { MarketplaceReportingClient } from "./MarketplaceReportingClient";

const commands = {
  GetBuyerDashboardCommand,
};

export interface MarketplaceReporting {
  /**
   * @see {@link GetBuyerDashboardCommand}
   */
  getBuyerDashboard(
    args: GetBuyerDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBuyerDashboardCommandOutput>;
  getBuyerDashboard(
    args: GetBuyerDashboardCommandInput,
    cb: (err: any, data?: GetBuyerDashboardCommandOutput) => void
  ): void;
  getBuyerDashboard(
    args: GetBuyerDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBuyerDashboardCommandOutput) => void
  ): void;
}

/**
 * <p>The Amazon Web Services Marketplace <code>GetBuyerDashboard</code> API enables you to get a procurement insights
 *       dashboard programmatically. The API gets the agreement and cost analysis dashboards with
 *       data for all of the Amazon Web Services accounts in your Amazon Web Services Organization. </p>
 *          <p>To use the Amazon Web Services Marketplace Reporting API, you must complete the following prerequisites:</p>
 *          <ul>
 *             <li>
 *                <p>Enable all features for your organization. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features for an organization with Organizations</a>, in the
 *           <i>Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Call the service as the Organizations management account or an account registered
 *           as a delegated administrator for the procurement insights service.</p>
 *                <p>For more information about management accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tutorials_basic.html">Tutorial:
 *           Creating and configuring an organization</a> and <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs-manage_accounts_management.html">Managing the management account with Organizations</a>, both in the
 *           <i>Organizations User Guide</i>.</p>
 *                <p>For more information about delegated administrators, see <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/management-delegates.html">Using
 *           delegated administrators</a>, in the <i>Amazon Web Services Marketplace Buyer
 *             Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Create an IAM policy that enables the
 *           <code>aws-marketplace:GetBuyerDashboard</code> and
 *           <code>organizations:DescribeOrganization</code> permissions. In addition,
 *           the management account requires the
 *           <code>organizations:EnableAWSServiceAccess</code> and
 *           <code>iam:CreateServiceLinkedRole</code> permissions to create. For more
 *           information about creating the policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">Policies and permissions in
 *             Identity and Access Management</a>, in the <i>IAM User Guide</i>.</p>
 *                <note>
 *                   <p>Access can be shared only by registering the desired linked account as a
 *             delegated administrator. That requires
 *             <code>organizations:RegisterDelegatedAdministrator</code>
 *                      <code>organizations:ListDelegatedAdministrators</code> and
 *             <code>organizations:DeregisterDelegatedAdministrator</code>
 *             permissions.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>Use the Amazon Web Services Marketplace console to create the
 *           <code>AWSServiceRoleForProcurementInsightsPolicy</code> service-linked role.
 *           The role enables Amazon Web Services Marketplace procurement visibility integration. The management
 *           account requires an IAM policy with the
 *           <code>organizations:EnableAWSServiceAccess</code> and
 *           <code>iam:CreateServiceLinkedRole</code> permissions to create the
 *           service-linked role and enable the service access. For more information, see
 *           <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/orgs-access-slr.html">Granting access to
 *             Organizations</a> and <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-service-linked-role-procurement.html">Service-linked role to share procurement data</a> in the
 *           <i>Amazon Web Services Marketplace Buyer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>After creating the service-linked role, you must enable trusted access that
 *           grants Amazon Web Services Marketplace permission to access data from your Organizations. For more information,
 *           see <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/orgs-access-slr.html">Granting access to
 *             Organizations</a> in the <i>Amazon Web Services Marketplace Buyer Guide</i>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class MarketplaceReporting extends MarketplaceReportingClient implements MarketplaceReporting {}
createAggregatedClient(commands, MarketplaceReporting);
