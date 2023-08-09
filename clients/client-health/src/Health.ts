// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { HealthClient, HealthClientConfig } from "./HealthClient";

const commands = {
  DescribeAffectedAccountsForOrganizationCommand,
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesForOrganizationCommand,
  DescribeEntityAggregatesCommand,
  DescribeEventAggregatesCommand,
  DescribeEventDetailsCommand,
  DescribeEventDetailsForOrganizationCommand,
  DescribeEventsCommand,
  DescribeEventsForOrganizationCommand,
  DescribeEventTypesCommand,
  DescribeHealthServiceStatusForOrganizationCommand,
  DisableHealthServiceAccessForOrganizationCommand,
  EnableHealthServiceAccessForOrganizationCommand,
};

export interface Health {
  /**
   * @see {@link DescribeAffectedAccountsForOrganizationCommand}
   */
  describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAffectedAccountsForOrganizationCommandOutput>;
  describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void
  ): void;
  describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAffectedEntitiesCommand}
   */
  describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAffectedEntitiesCommandOutput>;
  describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void
  ): void;
  describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAffectedEntitiesForOrganizationCommand}
   */
  describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput>;
  describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void
  ): void;
  describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntityAggregatesCommand}
   */
  describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntityAggregatesCommandOutput>;
  describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void
  ): void;
  describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventAggregatesCommand}
   */
  describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventAggregatesCommandOutput>;
  describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void
  ): void;
  describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventDetailsCommand}
   */
  describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventDetailsCommandOutput>;
  describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void
  ): void;
  describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventDetailsForOrganizationCommand}
   */
  describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventDetailsForOrganizationCommandOutput>;
  describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void
  ): void;
  describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsForOrganizationCommand}
   */
  describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsForOrganizationCommandOutput>;
  describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void
  ): void;
  describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventTypesCommand}
   */
  describeEventTypes(
    args: DescribeEventTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventTypesCommandOutput>;
  describeEventTypes(
    args: DescribeEventTypesCommandInput,
    cb: (err: any, data?: DescribeEventTypesCommandOutput) => void
  ): void;
  describeEventTypes(
    args: DescribeEventTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHealthServiceStatusForOrganizationCommand}
   */
  describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput>;
  describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void
  ): void;
  describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableHealthServiceAccessForOrganizationCommand}
   */
  disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableHealthServiceAccessForOrganizationCommandOutput>;
  disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
  disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableHealthServiceAccessForOrganizationCommand}
   */
  enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableHealthServiceAccessForOrganizationCommandOutput>;
  enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
  enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Health</fullname>
 *          <p>The Health API provides access to the Health information that appears in the
 *             <a href="https://health.aws.amazon.com/health/home">Health Dashboard</a>. You can use
 *          the API operations to get information about events that might affect your Amazon Web Services and resources.</p>
 *          <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health API. If you call the Health API from an
 *             Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a
 *             <code>SubscriptionRequiredException</code> error.</p>
 *          <p>For API access, you need an access key ID and a secret access key. Use temporary
 *          credentials instead of long-term access keys when possible. Temporary credentials include
 *          an access key ID, a secret access key, and a security token that indicates when the
 *          credentials expire. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">Best practices for managing
 *             Amazon Web Services access keys</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *          <p>You can use the Health endpoint health.us-east-1.amazonaws.com (HTTPS) to call the
 *          Health API operations. Health supports a multi-Region application architecture
 *          and has two regional endpoints in an active-passive configuration. You can use the high
 *          availability endpoint example to determine which Amazon Web Services Region is active, so that you can
 *          get the latest information from the API. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/health-api.html">Accessing the Health
 *             API</a> in the <i>Health User Guide</i>.</p>
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
export class Health extends HealthClient implements Health {}
createAggregatedClient(commands, Health);
