import { _UnmarshalledTag } from "./_Tag";
import { _UnmarshalledClusterAssociatedToSchedule } from "./_ClusterAssociatedToSchedule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. </p>
 */
export interface CreateSnapshotScheduleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of ScheduleDefinitions.</p>
   */
  ScheduleDefinitions?: Array<string>;

  /**
   * <p>A unique identifier for the schedule.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>The description of the schedule.</p>
   */
  ScheduleDescription?: string;

  /**
   * <p>An optional set of tags describing the schedule.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p/>
   */
  NextInvocations?: Array<Date>;

  /**
   * <p>The number of clusters associated with the schedule.</p>
   */
  AssociatedClusterCount?: number;

  /**
   * <p>A list of clusters associated with the schedule. A maximum of 100 clusters is returned.</p>
   */
  AssociatedClusters?: Array<_UnmarshalledClusterAssociatedToSchedule>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
