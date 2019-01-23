import {_Edge, _UnmarshalledEdge} from './_Edge';
import {_ServiceStatistics, _UnmarshalledServiceStatistics} from './_ServiceStatistics';
import {_HistogramEntry, _UnmarshalledHistogramEntry} from './_HistogramEntry';

/**
 * <p>Information about an application that processed requests, users that made requests, or downstream services, resources and applications that an application used.</p>
 */
export interface _Service {
    /**
     * <p>Identifier for the service. Unique within the service map.</p>
     */
    ReferenceId?: number;

    /**
     * <p>The canonical name of the service.</p>
     */
    Name?: string;

    /**
     * <p>A list of names for the service, including the canonical name.</p>
     */
    Names?: Array<string>|Iterable<string>;

    /**
     * <p>Indicates that the service was the first service to process a request.</p>
     */
    Root?: boolean;

    /**
     * <p>Identifier of the AWS account in which the service runs.</p>
     */
    AccountId?: string;

    /**
     * <p>The type of service.</p> <ul> <li> <p>AWS Resource - The type of an AWS resource. For example, <code>AWS::EC2::Instance</code> for a application running on Amazon EC2 or <code>AWS::DynamoDB::Table</code> for an Amazon DynamoDB table that the application used.</p> </li> <li> <p>AWS Service - The type of an AWS service. For example, <code>AWS::DynamoDB</code> for downstream calls to Amazon DynamoDB that didn't target a specific table.</p> </li> <li> <p> <code>client</code> - Represents the clients that sent requests to a root service.</p> </li> <li> <p> <code>remote</code> - A downstream service of indeterminate type.</p> </li> </ul>
     */
    Type?: string;

    /**
     * <p>The service's state.</p>
     */
    State?: string;

    /**
     * <p>The start time of the first segment that the service generated.</p>
     */
    StartTime?: Date|string|number;

    /**
     * <p>The end time of the last segment that the service generated.</p>
     */
    EndTime?: Date|string|number;

    /**
     * <p>Connections to downstream services.</p>
     */
    Edges?: Array<_Edge>|Iterable<_Edge>;

    /**
     * <p>Aggregated statistics for the service.</p>
     */
    SummaryStatistics?: _ServiceStatistics;

    /**
     * <p>A histogram that maps the spread of service durations.</p>
     */
    DurationHistogram?: Array<_HistogramEntry>|Iterable<_HistogramEntry>;

    /**
     * <p>A histogram that maps the spread of service response times.</p>
     */
    ResponseTimeHistogram?: Array<_HistogramEntry>|Iterable<_HistogramEntry>;
}

export interface _UnmarshalledService extends _Service {
    /**
     * <p>A list of names for the service, including the canonical name.</p>
     */
    Names?: Array<string>;

    /**
     * <p>The start time of the first segment that the service generated.</p>
     */
    StartTime?: Date;

    /**
     * <p>The end time of the last segment that the service generated.</p>
     */
    EndTime?: Date;

    /**
     * <p>Connections to downstream services.</p>
     */
    Edges?: Array<_UnmarshalledEdge>;

    /**
     * <p>Aggregated statistics for the service.</p>
     */
    SummaryStatistics?: _UnmarshalledServiceStatistics;

    /**
     * <p>A histogram that maps the spread of service durations.</p>
     */
    DurationHistogram?: Array<_UnmarshalledHistogramEntry>;

    /**
     * <p>A histogram that maps the spread of service response times.</p>
     */
    ResponseTimeHistogram?: Array<_UnmarshalledHistogramEntry>;
}