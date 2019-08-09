import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _ClusterAssociatedToSchedule,
  _UnmarshalledClusterAssociatedToSchedule
} from "./_ClusterAssociatedToSchedule";

/**
 * <p>Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. </p>
 */
export interface _SnapshotSchedule {
  /**
   * <p>A list of ScheduleDefinitions.</p>
   */
  ScheduleDefinitions?: Array<string> | Iterable<string>;

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
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p/>
   */
  NextInvocations?:
    | Array<Date | string | number>
    | Iterable<Date | string | number>;

  /**
   * <p>The number of clusters associated with the schedule.</p>
   */
  AssociatedClusterCount?: number;

  /**
   * <p>A list of clusters associated with the schedule. A maximum of 100 clusters is returned.</p>
   */
  AssociatedClusters?:
    | Array<_ClusterAssociatedToSchedule>
    | Iterable<_ClusterAssociatedToSchedule>;
}

export interface _UnmarshalledSnapshotSchedule extends _SnapshotSchedule {
  /**
   * <p>A list of ScheduleDefinitions.</p>
   */
  ScheduleDefinitions?: Array<string>;

  /**
   * <p>An optional set of tags describing the schedule.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p/>
   */
  NextInvocations?: Array<Date>;

  /**
   * <p>A list of clusters associated with the schedule. A maximum of 100 clusters is returned.</p>
   */
  AssociatedClusters?: Array<_UnmarshalledClusterAssociatedToSchedule>;
}
