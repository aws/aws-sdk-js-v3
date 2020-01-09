import { HealthClient } from "./HealthClient";
import {
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
} from "./commands/DescribeAffectedEntitiesCommand";
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
  DescribeEventTypesCommand,
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput,
} from "./commands/DescribeEventTypesCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 *
 *
 *          <fullname>AWS Health</fullname>
 *
 *          <p>The AWS Health API provides programmatic access to the AWS Health information that is presented in the <a href="https://phd.aws.amazon.com/phd/home#/">AWS Personal Health Dashboard</a>. You can get information about events that affect your AWS resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEvents</a>: Summary information about events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventDetails</a>: Detailed information about one or more events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedEntities</a>: Information about AWS resources that are affected by one or more events.</p>
 *             </li>
 *          </ul>
 *          <p>In addition, these operations provide information about event types and summary counts of events or affected entities:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEventTypes</a>: Information about the kinds of events that AWS Health tracks.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventAggregates</a>: A count of the number of events that meet specified criteria.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEntityAggregates</a>: A count of the number of affected entities that meet specified criteria.</p>
 *             </li>
 *          </ul>
 *
 *          <p>The Health API requires a Business or Enterprise support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>. Calling the Health API from an account that does not have a Business or Enterprise support plan causes a <code>SubscriptionRequiredException</code>. </p>
 *
 *          <p>For authentication of requests, AWS Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p>
 *
 *          <p>See the <a href="https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html">AWS Health User Guide</a> for information about how to use the API.</p>
 *
 *          <p>
 *             <b>Service Endpoint</b>
 *          </p>
 *          <p>The HTTP endpoint for the AWS Health API is:</p>
 *          <ul>
 *             <li>
 *                <p>https://health.us-east-1.amazonaws.com </p>
 *             </li>
 *          </ul>
 *
 *
 */
export class Health extends HealthClient {
  /**
   *
   *          <p>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this.</p>
   *         <p>At least one event ARN is required. Results are sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
   *
   */
  public describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Returns the number of entities that are affected by each of the specified events. If no events are specified, the counts of all affected entities are returned.</p>
   *
   */
  public describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.</p>
   *
   */
  public describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Returns detailed information about one or more specified events. Information includes standard event data (region, service, etc., as returned by <a>DescribeEvents</a>), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the <a>DescribeAffectedEntities</a> operation.</p>
   *          <p>If a specified event cannot be retrieved, an error message is returned for that event.</p>
   *
   */
  public describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Returns the event types that meet the specified filter criteria. If no filter criteria are specified, all event types are returned, in no particular order.</p>
   *
   */
  public describeEventTypes(
    args: DescribeEventTypesCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any  additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a>DescribeEventDetails</a> and <a>DescribeAffectedEntities</a> operations.</p>
   *         <p>If no filter criteria are specified, all events are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent.</p>
   *
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

}
