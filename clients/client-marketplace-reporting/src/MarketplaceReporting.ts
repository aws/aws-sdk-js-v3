// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GetBuyerDashboardCommandInput,
  type GetBuyerDashboardCommandOutput,
  GetBuyerDashboardCommand,
} from "./commands/GetBuyerDashboardCommand";
import { MarketplaceReportingClient } from "./MarketplaceReportingClient";

const commands = {
  GetBuyerDashboardCommand,
};

/**
 * @public
 */
export interface MarketplaceReportingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MarketplaceReporting {
  /**
   * @see {@link GetBuyerDashboardCommand}
   */
  getBuyerDashboard(
    args: GetBuyerDashboardCommandInput,
    options?: MarketplaceReportingRequestOptions
  ): Promise<GetBuyerDashboardCommandOutput>;
  getBuyerDashboard(
    args: GetBuyerDashboardCommandInput,
    cb: (err: any, data?: GetBuyerDashboardCommandOutput) => void
  ): void;
  getBuyerDashboard(
    args: GetBuyerDashboardCommandInput,
    options: MarketplaceReportingRequestOptions,
    cb: (err: any, data?: GetBuyerDashboardCommandOutput) => void
  ): void;
}

/**
 * The Amazon Web Services Marketplace `GetBuyerDashboard` API enables you to get a procurement insights dashboard programmatically. The API gets the agreement and cost analysis dashboards with data for all of the Amazon Web Services accounts in your Amazon Web Services Organization.
 *
 * To use the Amazon Web Services Marketplace Reporting API, you must complete the following prerequisites:
 *
 * - Enable all features for your organization. For more information, see [Enabling all features for an organization with Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), in the *Organizations User Guide*.
 * - Call the service as the Organizations management account or an account registered as a delegated administrator for the procurement insights service.
 *
 *   For more information about management accounts, see [Tutorial: Creating and configuring an organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tutorials_basic.html) and [Managing the management account with Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs-manage_accounts_management.html), both in the *Organizations User Guide*.
 *
 *   For more information about delegated administrators, see [Using delegated administrators](https://docs.aws.amazon.com/marketplace/latest/buyerguide/management-delegates.html), in the *Amazon Web Services Marketplace Buyer Guide*.
 * - Create an IAM policy that enables the `aws-marketplace:GetBuyerDashboard` and `organizations:DescribeOrganization` permissions. In addition, the management account requires the `organizations:EnableAWSServiceAccess` and `iam:CreateServiceLinkedRole` permissions to create. For more information about creating the policy, see [Policies and permissions in Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html), in the *IAM User Guide*.
 *
 *   > **Note:** Access can be shared only by registering the desired linked account as a delegated administrator. That requires `organizations:RegisterDelegatedAdministrator` `organizations:ListDelegatedAdministrators` and `organizations:DeregisterDelegatedAdministrator` permissions.
 * - Use the Amazon Web Services Marketplace console to create the `AWSServiceRoleForProcurementInsightsPolicy` service-linked role. The role enables Amazon Web Services Marketplace procurement visibility integration. The management account requires an IAM policy with the `organizations:EnableAWSServiceAccess` and `iam:CreateServiceLinkedRole` permissions to create the service-linked role and enable the service access. For more information, see [Granting access to Organizations](https://docs.aws.amazon.com/marketplace/latest/buyerguide/orgs-access-slr.html) and [Service-linked role to share procurement data](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-service-linked-role-procurement.html) in the *Amazon Web Services Marketplace Buyer Guide*.
 * - After creating the service-linked role, you must enable trusted access that grants Amazon Web Services Marketplace permission to access data from your Organizations. For more information, see [Granting access to Organizations](https://docs.aws.amazon.com/marketplace/latest/buyerguide/orgs-access-slr.html) in the *Amazon Web Services Marketplace Buyer Guide*.
 *
 * @public
 */
export class MarketplaceReporting extends MarketplaceReportingClient implements MarketplaceReporting {}
createAggregatedClient(commands, MarketplaceReporting);
