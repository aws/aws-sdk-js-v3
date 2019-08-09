import { HealthClient } from "./HealthClient";
import { DescribeAffectedEntitiesInput } from "./types/DescribeAffectedEntitiesInput";
import { DescribeAffectedEntitiesOutput } from "./types/DescribeAffectedEntitiesOutput";
import { DescribeEntityAggregatesInput } from "./types/DescribeEntityAggregatesInput";
import { DescribeEntityAggregatesOutput } from "./types/DescribeEntityAggregatesOutput";
import { DescribeEventAggregatesInput } from "./types/DescribeEventAggregatesInput";
import { DescribeEventAggregatesOutput } from "./types/DescribeEventAggregatesOutput";
import { DescribeEventDetailsInput } from "./types/DescribeEventDetailsInput";
import { DescribeEventDetailsOutput } from "./types/DescribeEventDetailsOutput";
import { DescribeEventTypesInput } from "./types/DescribeEventTypesInput";
import { DescribeEventTypesOutput } from "./types/DescribeEventTypesOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { InvalidPaginationToken } from "./types/InvalidPaginationToken";
import { UnsupportedLocale } from "./types/UnsupportedLocale";
import { DescribeAffectedEntitiesCommand } from "./commands/DescribeAffectedEntitiesCommand";
import { DescribeEntityAggregatesCommand } from "./commands/DescribeEntityAggregatesCommand";
import { DescribeEventAggregatesCommand } from "./commands/DescribeEventAggregatesCommand";
import { DescribeEventDetailsCommand } from "./commands/DescribeEventDetailsCommand";
import { DescribeEventTypesCommand } from "./commands/DescribeEventTypesCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";

export class Health extends HealthClient {
  /**
   * <p>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this.</p> <p>At least one event ARN is required. Results are sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidPaginationToken} <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
   *   - {UnsupportedLocale} <p>The specified locale is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAffectedEntities(
    args: DescribeAffectedEntitiesInput
  ): Promise<DescribeAffectedEntitiesOutput>;
  public describeAffectedEntities(
    args: DescribeAffectedEntitiesInput,
    cb: (err: any, data?: DescribeAffectedEntitiesOutput) => void
  ): void;
  public describeAffectedEntities(
    args: DescribeAffectedEntitiesInput,
    cb?: (err: any, data?: DescribeAffectedEntitiesOutput) => void
  ): Promise<DescribeAffectedEntitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAffectedEntitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the number of entities that are affected by each of the specified events. If no events are specified, the counts of all affected entities are returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEntityAggregates(
    args: DescribeEntityAggregatesInput
  ): Promise<DescribeEntityAggregatesOutput>;
  public describeEntityAggregates(
    args: DescribeEntityAggregatesInput,
    cb: (err: any, data?: DescribeEntityAggregatesOutput) => void
  ): void;
  public describeEntityAggregates(
    args: DescribeEntityAggregatesInput,
    cb?: (err: any, data?: DescribeEntityAggregatesOutput) => void
  ): Promise<DescribeEntityAggregatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEntityAggregatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidPaginationToken} <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventAggregates(
    args: DescribeEventAggregatesInput
  ): Promise<DescribeEventAggregatesOutput>;
  public describeEventAggregates(
    args: DescribeEventAggregatesInput,
    cb: (err: any, data?: DescribeEventAggregatesOutput) => void
  ): void;
  public describeEventAggregates(
    args: DescribeEventAggregatesInput,
    cb?: (err: any, data?: DescribeEventAggregatesOutput) => void
  ): Promise<DescribeEventAggregatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventAggregatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed information about one or more specified events. Information includes standard event data (region, service, etc., as returned by <a>DescribeEvents</a>), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the <a>DescribeAffectedEntities</a> operation.</p> <p>If a specified event cannot be retrieved, an error message is returned for that event.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnsupportedLocale} <p>The specified locale is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventDetails(
    args: DescribeEventDetailsInput
  ): Promise<DescribeEventDetailsOutput>;
  public describeEventDetails(
    args: DescribeEventDetailsInput,
    cb: (err: any, data?: DescribeEventDetailsOutput) => void
  ): void;
  public describeEventDetails(
    args: DescribeEventDetailsInput,
    cb?: (err: any, data?: DescribeEventDetailsOutput) => void
  ): Promise<DescribeEventDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the event types that meet the specified filter criteria. If no filter criteria are specified, all event types are returned, in no particular order.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidPaginationToken} <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
   *   - {UnsupportedLocale} <p>The specified locale is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventTypes(
    args: DescribeEventTypesInput
  ): Promise<DescribeEventTypesOutput>;
  public describeEventTypes(
    args: DescribeEventTypesInput,
    cb: (err: any, data?: DescribeEventTypesOutput) => void
  ): void;
  public describeEventTypes(
    args: DescribeEventTypesInput,
    cb?: (err: any, data?: DescribeEventTypesOutput) => void
  ): Promise<DescribeEventTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a>DescribeEventDetails</a> and <a>DescribeAffectedEntities</a> operations.</p> <p>If no filter criteria are specified, all events are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidPaginationToken} <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
   *   - {UnsupportedLocale} <p>The specified locale is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEvents(
    args: DescribeEventsInput
  ): Promise<DescribeEventsOutput>;
  public describeEvents(
    args: DescribeEventsInput,
    cb: (err: any, data?: DescribeEventsOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsInput,
    cb?: (err: any, data?: DescribeEventsOutput) => void
  ): Promise<DescribeEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
