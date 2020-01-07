import { HealthClient } from "./HealthClient";
import { DescribeAffectedAccountsForOrganizationCommandInput, DescribeAffectedAccountsForOrganizationCommandOutput } from "./commands/DescribeAffectedAccountsForOrganizationCommand";
import { DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput } from "./commands/DescribeAffectedEntitiesCommand";
import { DescribeAffectedEntitiesForOrganizationCommandInput, DescribeAffectedEntitiesForOrganizationCommandOutput } from "./commands/DescribeAffectedEntitiesForOrganizationCommand";
import { DescribeEntityAggregatesCommandInput, DescribeEntityAggregatesCommandOutput } from "./commands/DescribeEntityAggregatesCommand";
import { DescribeEventAggregatesCommandInput, DescribeEventAggregatesCommandOutput } from "./commands/DescribeEventAggregatesCommand";
import { DescribeEventDetailsCommandInput, DescribeEventDetailsCommandOutput } from "./commands/DescribeEventDetailsCommand";
import { DescribeEventDetailsForOrganizationCommandInput, DescribeEventDetailsForOrganizationCommandOutput } from "./commands/DescribeEventDetailsForOrganizationCommand";
import { DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput } from "./commands/DescribeEventTypesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeEventsForOrganizationCommandInput, DescribeEventsForOrganizationCommandOutput } from "./commands/DescribeEventsForOrganizationCommand";
import { DescribeHealthServiceStatusForOrganizationCommandInput, DescribeHealthServiceStatusForOrganizationCommandOutput } from "./commands/DescribeHealthServiceStatusForOrganizationCommand";
import { DisableHealthServiceAccessForOrganizationCommandInput, DisableHealthServiceAccessForOrganizationCommandOutput } from "./commands/DisableHealthServiceAccessForOrganizationCommand";
import { EnableHealthServiceAccessForOrganizationCommandInput, EnableHealthServiceAccessForOrganizationCommandOutput } from "./commands/EnableHealthServiceAccessForOrganizationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Health</fullname>
 *
 *          <p>The AWS Health API provides programmatic access to the AWS Health information
 *          that is presented in the <a href="https://phd.aws.amazon.com/phd/home#/">AWS Personal Health Dashboard</a>. You can get information about events that affect your AWS
 *          resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEvents</a>: Summary information about events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventDetails</a>: Detailed information about one or more
 *                events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedEntities</a>: Information about AWS resources
 *                that are affected by one or more events.</p>
 *             </li>
 *          </ul>
 *          <p>In addition, these operations provide information about event types and summary
 *          counts of events or affected entities:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEventTypes</a>: Information about the kinds of events
 *                that AWS Health tracks.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventAggregates</a>: A count of the number of events that
 *                meet specified criteria.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEntityAggregates</a>: A count of the number of affected
 *                entities that meet specified criteria.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>AWS Health integrates with AWS Organizations to provide a centralized view of AWS Health
 *          events across all accounts in your organization.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEventsForOrganization</a>: Summary information about
 *                events across the organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedAccountsForOrganization</a>: List of accounts in
 *                your organization impacted by an event.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventDetailsForOrganization</a>: Detailed information
 *                about events in your organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedEntitiesForOrganization</a>: Information about
 *                AWS resources in your organization that are affected by events.</p>
 *             </li>
 *          </ul>
 *          <p>You can use the following operations to enable or disable AWS Health from working
 *          with AWS Organizations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>EnableHealthServiceAccessForOrganization</a>: Enables AWS Health
 *                to work with AWS Organizations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisableHealthServiceAccessForOrganization</a>: Disables
 *                AWS Health from working with AWS Organizations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeHealthServiceStatusForOrganization</a>: Status
 *                information about enabling or disabling AWS Health from working with
 *                AWS Organizations.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>The Health API requires a Business or Enterprise support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>. Calling the Health API
 *          from an account that does not have a Business or Enterprise support plan causes a
 *             <code>SubscriptionRequiredException</code>.</p>
 *          <p>For authentication of requests, AWS Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *             Process</a>.</p>
 *          <p>See the <a href="https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html">AWS Health User Guide</a> for information about how to use the API.</p>
 *          <p>
 *             <b>Service Endpoint</b>
 *          </p>
 *          <p>The HTTP endpoint for the AWS Health API is:</p>
 *          <ul>
 *             <li>
 *                <p>https://health.us-east-1.amazonaws.com </p>
 *             </li>
 *          </ul>
 */
export declare class Health extends HealthClient {
    /**
     * <p>Returns a list of accounts in the organization from AWS Organizations that are affected by the
     *          provided event.</p>
     *          <p>Before you can call this operation, you must first enable AWS Health to work with
     *          AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a>
     *          operation from your organization's master account.</p>
     */
    describeAffectedAccountsForOrganization(args: DescribeAffectedAccountsForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAffectedAccountsForOrganizationCommandOutput>;
    describeAffectedAccountsForOrganization(args: DescribeAffectedAccountsForOrganizationCommandInput, cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void): void;
    describeAffectedAccountsForOrganization(args: DescribeAffectedAccountsForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns a list of entities that have been affected by the specified events, based on
     *          the specified filter criteria. Entities can refer to individual customer resources, groups
     *          of customer resources, or any other construct, depending on the AWS service. Events that
     *          have impact beyond that of the affected entities, or where the extent of impact is unknown,
     *          include at least one entity indicating this.</p>
     *          <p>At least one event ARN is required. Results are sorted by the
     *             <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
     */
    describeAffectedEntities(args: DescribeAffectedEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAffectedEntitiesCommandOutput>;
    describeAffectedEntities(args: DescribeAffectedEntitiesCommandInput, cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void): void;
    describeAffectedEntities(args: DescribeAffectedEntitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void): void;
    /**
     * <p>Returns a list of entities that have been affected by one or more events for one or more
     *          accounts in your organization in AWS Organizations, based on the filter criteria. Entities can refer
     *          to individual customer resources, groups of customer resources, or any other construct,
     *          depending on the AWS service.</p>
     *          <p>At least one event ARN and account ID are required. Results are sorted by the
     *             <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
     *          <p>Before you can call this operation, you must first enable AWS Health to work with
     *          AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a>
     *          operation from your organization's master account. </p>
     */
    describeAffectedEntitiesForOrganization(args: DescribeAffectedEntitiesForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput>;
    describeAffectedEntitiesForOrganization(args: DescribeAffectedEntitiesForOrganizationCommandInput, cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void): void;
    describeAffectedEntitiesForOrganization(args: DescribeAffectedEntitiesForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns the number of entities that are affected by each of the specified events. If
     *          no events are specified, the counts of all affected entities are returned.</p>
     */
    describeEntityAggregates(args: DescribeEntityAggregatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEntityAggregatesCommandOutput>;
    describeEntityAggregates(args: DescribeEntityAggregatesCommandInput, cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void): void;
    describeEntityAggregates(args: DescribeEntityAggregatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void): void;
    /**
     * <p>Returns the number of events of each event type (issue, scheduled change, and account
     *          notification). If no filter is specified, the counts of all events in each category are
     *          returned.</p>
     */
    describeEventAggregates(args: DescribeEventAggregatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventAggregatesCommandOutput>;
    describeEventAggregates(args: DescribeEventAggregatesCommandInput, cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void): void;
    describeEventAggregates(args: DescribeEventAggregatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about one or more specified events. Information includes
     *          standard event data (region, service, and so on, as returned by <a>DescribeEvents</a>), a detailed event description, and possible additional
     *          metadata that depends upon the nature of the event. Affected entities are not included; to
     *          retrieve those, use the <a>DescribeAffectedEntities</a> operation.</p>
     *          <p>If a specified event cannot be retrieved, an error message is returned for that
     *          event.</p>
     */
    describeEventDetails(args: DescribeEventDetailsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventDetailsCommandOutput>;
    describeEventDetails(args: DescribeEventDetailsCommandInput, cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void): void;
    describeEventDetails(args: DescribeEventDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about one or more specified events for one or more accounts
     *          in your organization. Information includes standard event data (Region, service, and so on,
     *          as returned by <a>DescribeEventsForOrganization</a>, a detailed event
     *          description, and possible additional metadata that depends upon the nature of the event.
     *          Affected entities are not included; to retrieve those, use the <a>DescribeAffectedEntitiesForOrganization</a> operation.</p>
     *          <p>Before you can call this operation, you must first enable AWS Health to work with
     *          AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a>
     *          operation from your organization's master account.</p>
     */
    describeEventDetailsForOrganization(args: DescribeEventDetailsForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventDetailsForOrganizationCommandOutput>;
    describeEventDetailsForOrganization(args: DescribeEventDetailsForOrganizationCommandInput, cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void): void;
    describeEventDetailsForOrganization(args: DescribeEventDetailsForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns the event types that meet the specified filter criteria. If no filter
     *          criteria are specified, all event types are returned, in no particular order.</p>
     */
    describeEventTypes(args: DescribeEventTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventTypesCommandOutput>;
    describeEventTypes(args: DescribeEventTypesCommandInput, cb: (err: any, data?: DescribeEventTypesCommandOutput) => void): void;
    describeEventTypes(args: DescribeEventTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventTypesCommandOutput) => void): void;
    /**
     * <p>Returns information about events that meet the specified filter criteria. Events are
     *          returned in a summary form and do not include the detailed description, any additional
     *          metadata that depends on the event type, or any affected resources. To retrieve that
     *          information, use the <a>DescribeEventDetails</a> and <a>DescribeAffectedEntities</a> operations.</p>
     *          <p>If no filter criteria are specified, all events are returned. Results are sorted by
     *             <code>lastModifiedTime</code>, starting with the most recent.</p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Returns information about events across your organization in AWS Organizations, meeting the
     *          specified filter criteria. Events are returned in a summary form and do not include the
     *          accounts impacted, detailed description, any additional metadata that depends on the event
     *          type, or any affected resources. To retrieve that information, use the <a>DescribeAffectedAccountsForOrganization</a>, <a>DescribeEventDetailsForOrganization</a>, and <a>DescribeAffectedEntitiesForOrganization</a> operations.</p>
     *          <p>If no filter criteria are specified, all events across your organization are returned.
     *          Results are sorted by <code>lastModifiedTime</code>, starting with the most recent.</p>
     *          <p>Before you can call this operation, you must first enable Health to work with AWS
     *          Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's
     *          master account.</p>
     */
    describeEventsForOrganization(args: DescribeEventsForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsForOrganizationCommandOutput>;
    describeEventsForOrganization(args: DescribeEventsForOrganizationCommandInput, cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void): void;
    describeEventsForOrganization(args: DescribeEventsForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void): void;
    /**
     * <p>This operation provides status information on enabling or disabling AWS Health to work
     *          with your organization. To call this operation, you must sign in as an IAM user, assume
     *          an IAM role, or sign in as the root user (not recommended) in the organization's master
     *          account.</p>
     */
    describeHealthServiceStatusForOrganization(args: DescribeHealthServiceStatusForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput>;
    describeHealthServiceStatusForOrganization(args: DescribeHealthServiceStatusForOrganizationCommandInput, cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void): void;
    describeHealthServiceStatusForOrganization(args: DescribeHealthServiceStatusForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void): void;
    /**
     * <p>Calling this operation disables Health from working with AWS Organizations. This does not remove
     *          the Service Linked Role (SLR) from the the master account in your organization. Use the
     *          IAM console, API, or AWS CLI to remove the SLR if desired. To call this operation, you
     *          must sign in as an IAM user, assume an IAM role, or sign in as the root user (not
     *          recommended) in the organization's master account.</p>
     */
    disableHealthServiceAccessForOrganization(args: DisableHealthServiceAccessForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DisableHealthServiceAccessForOrganizationCommandOutput>;
    disableHealthServiceAccessForOrganization(args: DisableHealthServiceAccessForOrganizationCommandInput, cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void): void;
    disableHealthServiceAccessForOrganization(args: DisableHealthServiceAccessForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void): void;
    /**
     * <p>Calling this operation enables AWS Health to work with AWS Organizations. This applies a Service
     *          Linked Role (SLR) to the master account in the organization. To learn more about the steps
     *          in this process, visit enabling service access for AWS Health in AWS Organizations. To call this
     *          operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root
     *          user (not recommended) in the organization's master account.</p>
     */
    enableHealthServiceAccessForOrganization(args: EnableHealthServiceAccessForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<EnableHealthServiceAccessForOrganizationCommandOutput>;
    enableHealthServiceAccessForOrganization(args: EnableHealthServiceAccessForOrganizationCommandInput, cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void): void;
    enableHealthServiceAccessForOrganization(args: EnableHealthServiceAccessForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void): void;
}
