// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DescribeAffectedAccountsForOrganizationCommand,
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput,
} from "./commands/DescribeAffectedAccountsForOrganizationCommand";
import {
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
} from "./commands/DescribeAffectedEntitiesCommand";
import {
  DescribeAffectedEntitiesForOrganizationCommand,
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
} from "./commands/DescribeAffectedEntitiesForOrganizationCommand";
import {
  DescribeEntityAggregatesCommand,
  DescribeEntityAggregatesCommandInput,
  DescribeEntityAggregatesCommandOutput,
} from "./commands/DescribeEntityAggregatesCommand";
import {
  DescribeEventAggregatesCommand,
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput,
} from "./commands/DescribeEventAggregatesCommand";
import {
  DescribeEventDetailsCommand,
  DescribeEventDetailsCommandInput,
  DescribeEventDetailsCommandOutput,
} from "./commands/DescribeEventDetailsCommand";
import {
  DescribeEventDetailsForOrganizationCommand,
  DescribeEventDetailsForOrganizationCommandInput,
  DescribeEventDetailsForOrganizationCommandOutput,
} from "./commands/DescribeEventDetailsForOrganizationCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeEventsForOrganizationCommand,
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
} from "./commands/DescribeEventsForOrganizationCommand";
import {
  DescribeEventTypesCommand,
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput,
} from "./commands/DescribeEventTypesCommand";
import {
  DescribeHealthServiceStatusForOrganizationCommand,
  DescribeHealthServiceStatusForOrganizationCommandInput,
  DescribeHealthServiceStatusForOrganizationCommandOutput,
} from "./commands/DescribeHealthServiceStatusForOrganizationCommand";
import {
  DisableHealthServiceAccessForOrganizationCommand,
  DisableHealthServiceAccessForOrganizationCommandInput,
  DisableHealthServiceAccessForOrganizationCommandOutput,
} from "./commands/DisableHealthServiceAccessForOrganizationCommand";
import {
  EnableHealthServiceAccessForOrganizationCommand,
  EnableHealthServiceAccessForOrganizationCommandInput,
  EnableHealthServiceAccessForOrganizationCommandOutput,
} from "./commands/EnableHealthServiceAccessForOrganizationCommand";
import { HealthClient } from "./HealthClient";

/**
 * <fullname>Health</fullname>
 *
 *          <p>The Health API provides programmatic access to the Health information that
 *          appears in the <a href="https://phd.aws.amazon.com/phd/home#/">Personal Health Dashboard</a>. You
 *          can use the API operations to get information about events that might affect your Amazon Web Services services and resources.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health
 *                   API. If you call the Health API from an Amazon Web Services account that
 *                   doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a
 *                      <code>SubscriptionRequiredException</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>You can use the Health endpoint health.us-east-1.amazonaws.com (HTTPS) to
 *                   call the Health API operations. Health supports a multi-Region
 *                   application architecture and has two regional endpoints in an active-passive
 *                   configuration. You can use the high availability endpoint example to determine
 *                   which Amazon Web Services Region is active, so that you can get the latest information from the
 *                   API. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/health-api.html">Accessing the Health API</a> in the
 *                      <i>Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For authentication of requests, Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *             Process</a>.</p>
 *          <p>If your Amazon Web Services account is part of Organizations, you can use the Health organizational
 *          view feature. This feature provides a centralized view of Health events across all
 *          accounts in your organization. You can aggregate Health events in real time to
 *          identify accounts in your organization that are affected by an operational event or get
 *          notified of security vulnerabilities. Use the organizational view API operations to enable
 *          this feature and return event information. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             Health events</a> in the <i>Health User Guide</i>.</p>
 *          <note>
 *             <p>When you use the Health API operations to return Health events, see the
 *             following recommendations:</p>
 *             <ul>
 *                <li>
 *                   <p>Use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a> parameter to specify whether to return Health
 *                   events that are public or account-specific.</p>
 *                </li>
 *                <li>
 *                   <p>Use pagination to view all events from the response. For example, if you call
 *                   the <code>DescribeEventsForOrganization</code> operation to get all events in your
 *                   organization, you might receive several page results. Specify the
 *                      <code>nextToken</code> in the next request to return more results.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export class Health extends HealthClient {
  /**
   * <p>Returns a list of accounts in the organization from Organizations that are affected by the
   *          provided event. For more information about the different types of Health events, see
   *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p>
   *          <p>Before you can call this operation, you must first enable Health to work with
   *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
   *          management account.</p>
   *          <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
   *          </note>
   */
  public describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAffectedAccountsForOrganizationCommandOutput>;
  public describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void
  ): void;
  public describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void
  ): void;
  public describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void
  ): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> | void {
    const command = new DescribeAffectedAccountsForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of entities that have been affected by the specified events, based on the
   *          specified filter criteria. Entities can refer to individual customer resources, groups of
   *          customer resources, or any other construct, depending on the Amazon Web Services service. Events that
   *          have impact beyond that of the affected entities, or where the extent of impact is unknown,
   *          include at least one entity indicating this.</p>
   *          <p>At least one event ARN is required.</p>
   *
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
   *                </li>
   *                <li>
   *                   <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more
   *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAffectedEntitiesCommandOutput>;
  public describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void
  ): void;
  public describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void
  ): void;
  public describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAffectedEntitiesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void
  ): Promise<DescribeAffectedEntitiesCommandOutput> | void {
    const command = new DescribeAffectedEntitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of entities that have been affected by one or more events for one or more
   *          accounts in your organization in Organizations, based on the filter criteria. Entities can refer
   *          to individual customer resources, groups of customer resources, or any other construct,
   *          depending on the Amazon Web Services service.</p>
   *          <p>At least one event Amazon Resource Name (ARN) and account ID are required.</p>
   *          <p>Before you can call this operation, you must first enable Health to work with
   *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
   *          management account.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
   *                </li>
   *                <li>
   *                   <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more
   *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
   *                </li>
   *             </ul>
   *
   *          </note>
   */
  public describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput>;
  public describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void
  ): void;
  public describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void
  ): void;
  public describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void
  ): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> | void {
    const command = new DescribeAffectedEntitiesForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the number of entities that are affected by each of the specified events.</p>
   */
  public describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntityAggregatesCommandOutput>;
  public describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void
  ): void;
  public describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void
  ): void;
  public describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEntityAggregatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void
  ): Promise<DescribeEntityAggregatesCommandOutput> | void {
    const command = new DescribeEntityAggregatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the number of events of each event type (issue, scheduled change, and account
   *          notification). If no filter is specified, the counts of all events in each category are
   *          returned.</p>
   *          <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
   *          </note>
   */
  public describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventAggregatesCommandOutput>;
  public describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void
  ): void;
  public describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void
  ): void;
  public describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventAggregatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventAggregatesCommandOutput) => void
  ): Promise<DescribeEventAggregatesCommandOutput> | void {
    const command = new DescribeEventAggregatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed information about one or more specified events. Information includes
   *          standard event data (Amazon Web Services Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata
   *          that depends upon the nature of the event. Affected entities are not included. To retrieve
   *          the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p>
   *          <p>If a specified event can't be retrieved, an error message is returned for that
   *          event.</p>
   *          <note>
   *             <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more
   *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
   *          </note>
   */
  public describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventDetailsCommandOutput>;
  public describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void
  ): void;
  public describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void
  ): void;
  public describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventDetailsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventDetailsCommandOutput) => void
  ): Promise<DescribeEventDetailsCommandOutput> | void {
    const command = new DescribeEventDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed information about one or more specified events for one or more
   *          Amazon Web Services accounts in your organization. This information includes standard event data (such as
   *          the Amazon Web Services Region and service), an event description, and (depending on the event) possible
   *          metadata. This operation doesn't return affected entities, such as the resources related to
   *          the event. To return affected entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p>
   *          <note>
   *             <p>Before you can call this operation, you must first enable Health to work with
   *             Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
   *             management account.</p>
   *          </note>
   *          <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, specify
   *          the <code>organizationEventDetailFilters</code> object in the request. Depending on the
   *          Health event type, note the following differences:</p>
   *          <ul>
   *             <li>
   *                <p>To return event details for a public event, you must specify a null value for the
   *                   <code>awsAccountId</code> parameter. If you specify an account ID for a public
   *                event, Health returns an error message because public events aren't specific to
   *                an account.</p>
   *             </li>
   *             <li>
   *                <p>To return event details for an event that is specific to an account in your
   *                organization, you must specify the <code>awsAccountId</code> parameter in the
   *                request. If you don't specify an account ID, Health returns an error message
   *                because the event is specific to an account in your organization. </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
   *
   *          <note>
   *             <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more
   *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
   *          </note>
   */
  public describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventDetailsForOrganizationCommandOutput>;
  public describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void
  ): void;
  public describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void
  ): void;
  public describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void
  ): Promise<DescribeEventDetailsForOrganizationCommandOutput> | void {
    const command = new DescribeEventDetailsForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns information about events that meet the specified filter criteria. Events are
   *          returned in a summary form and do not include the detailed description, any additional
   *          metadata that depends on the event type, or any affected resources. To retrieve that
   *          information, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operations.</p>
   *          <p>If no filter criteria are specified, all events are returned. Results are sorted by
   *             <code>lastModifiedTime</code>, starting with the most recent event.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>When you call the <code>DescribeEvents</code> operation and specify an entity
   *                   for the <code>entityValues</code> parameter, Health might return public
   *                   events that aren't specific to that resource. For example, if you call
   *                      <code>DescribeEvents</code> and specify an ID for an Amazon Elastic Compute Cloud (Amazon EC2)
   *                   instance, Health might return events that aren't specific to that resource or
   *                   service. To get events that are specific to a service, use the
   *                      <code>services</code> parameter in the <code>filter</code> object. For more
   *                   information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
   *                </li>
   *                <li>
   *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about events across your organization in Organizations. You can use
   *             the<code>filters</code> parameter to specify the events that you want to return. Events
   *          are returned in a summary form and don't include the affected accounts, detailed
   *          description, any additional metadata that depends on the event type, or any affected
   *          resources. To retrieve that information, use the following operations:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html">DescribeAffectedAccountsForOrganization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>filter</code>, the
   *             <code>DescribeEventsForOrganizations</code> returns all events across your organization.
   *          Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event. </p>
   *          <p>For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
   *          <p>Before you can call this operation, you must first enable Health to work with
   *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
   *          management account.</p>
   *          <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
   *          </note>
   */
  public describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsForOrganizationCommandOutput>;
  public describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void
  ): void;
  public describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void
  ): void;
  public describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void
  ): Promise<DescribeEventsForOrganizationCommandOutput> | void {
    const command = new DescribeEventsForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the event types that meet the specified filter criteria. You can use this API
   *          operation to find information about the Health event, such as the category, Amazon Web Services
   *          service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p>
   *          <p>If you don't specify a filter criteria, the API operation returns all event types, in no
   *          particular order. </p>
   *          <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
   *          </note>
   */
  public describeEventTypes(
    args: DescribeEventTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventTypesCommandOutput>;
  public describeEventTypes(
    args: DescribeEventTypesCommandInput,
    cb: (err: any, data?: DescribeEventTypesCommandOutput) => void
  ): void;
  public describeEventTypes(
    args: DescribeEventTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventTypesCommandOutput) => void
  ): void;
  public describeEventTypes(
    args: DescribeEventTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventTypesCommandOutput) => void
  ): Promise<DescribeEventTypesCommandOutput> | void {
    const command = new DescribeEventTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This operation provides status information on enabling or disabling Health to work
   *          with your organization. To call this operation, you must sign in as an IAM user, assume
   *          an IAM role, or sign in as the root user (not recommended) in the organization's
   *          management account.</p>
   */
  public describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput>;
  public describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void
  ): void;
  public describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void
  ): void;
  public describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void
  ): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> | void {
    const command = new DescribeHealthServiceStatusForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables Health from working with Organizations. To call this operation, you must sign
   *          in as an Identity and Access Management (IAM) user, assume an IAM role, or sign in as the root user (not
   *          recommended) in the organization's management account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
   *             Health events</a> in the <i>Health User Guide</i>.</p>
   *          <p>This operation doesn't remove the service-linked role from the management account in your
   *          organization. You must use the IAM console, API, or Command Line Interface (CLI) to remove the
   *          service-linked role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role">Deleting a Service-Linked Role</a> in the
   *          <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>You can also disable the organizational feature by using the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html">DisableAWSServiceAccess</a> API operation. After you call this operation,
   *             Health stops aggregating events for all other Amazon Web Services accounts in your organization.
   *             If you call the Health API operations for organizational view, Health returns
   *             an error. Health continues to aggregate health events for your
   *             Amazon Web Services account.</p>
   *          </note>
   */
  public disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableHealthServiceAccessForOrganizationCommandOutput>;
  public disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
  public disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
  public disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void
  ): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> | void {
    const command = new DisableHealthServiceAccessForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables Health to work with Organizations. You can use the organizational view feature
   *          to aggregate events from all Amazon Web Services accounts in your organization in a centralized location. </p>
   *          <p>This operation also creates a service-linked role for the management account in the
   *          organization. </p>
   *          <note>
   *             <p>To call this operation, you must meet the following requirements:</p>
   *             <ul>
   *                <li>
   *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health
   *                   API. If you call the Health API from an Amazon Web Services account that doesn't have a
   *                   Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a
   *                      <code>SubscriptionRequiredException</code> error.</p>
   *                </li>
   *                <li>
   *                   <p>You must have permission to call this operation from the organization's
   *                   management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">Health
   *                      identity-based policy examples</a>.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>If you don't have the required support plan, you can instead use the Health console
   *          to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
   *             Health events</a> in the <i>Health User Guide</i>.</p>
   */
  public enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableHealthServiceAccessForOrganizationCommandOutput>;
  public enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
  public enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
  public enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void
  ): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> | void {
    const command = new EnableHealthServiceAccessForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
