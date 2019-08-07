import {
  _LocalSecondaryIndexInfo,
  _UnmarshalledLocalSecondaryIndexInfo
} from "./_LocalSecondaryIndexInfo";
import {
  _GlobalSecondaryIndexInfo,
  _UnmarshalledGlobalSecondaryIndexInfo
} from "./_GlobalSecondaryIndexInfo";
import {
  _StreamSpecification,
  _UnmarshalledStreamSpecification
} from "./_StreamSpecification";
import {
  _TimeToLiveDescription,
  _UnmarshalledTimeToLiveDescription
} from "./_TimeToLiveDescription";
import {
  _SSEDescription,
  _UnmarshalledSSEDescription
} from "./_SSEDescription";

/**
 * <p>Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. </p>
 */
export interface _SourceTableFeatureDetails {
  /**
   * <p>Represents the LSI properties for the table when the backup was created. It includes the IndexName, KeySchema and Projection for the LSIs on the table at the time of backup. </p>
   */
  LocalSecondaryIndexes?:
    | Array<_LocalSecondaryIndexInfo>
    | Iterable<_LocalSecondaryIndexInfo>;

  /**
   * <p>Represents the GSI properties for the table when the backup was created. It includes the IndexName, KeySchema, Projection and ProvisionedThroughput for the GSIs on the table at the time of backup. </p>
   */
  GlobalSecondaryIndexes?:
    | Array<_GlobalSecondaryIndexInfo>
    | Iterable<_GlobalSecondaryIndexInfo>;

  /**
   * <p>Stream settings on the table when the backup was created.</p>
   */
  StreamDescription?: _StreamSpecification;

  /**
   * <p>Time to Live settings on the table when the backup was created.</p>
   */
  TimeToLiveDescription?: _TimeToLiveDescription;

  /**
   * <p>The description of the server-side encryption status on the table when the backup was created.</p>
   */
  SSEDescription?: _SSEDescription;
}

export interface _UnmarshalledSourceTableFeatureDetails
  extends _SourceTableFeatureDetails {
  /**
   * <p>Represents the LSI properties for the table when the backup was created. It includes the IndexName, KeySchema and Projection for the LSIs on the table at the time of backup. </p>
   */
  LocalSecondaryIndexes?: Array<_UnmarshalledLocalSecondaryIndexInfo>;

  /**
   * <p>Represents the GSI properties for the table when the backup was created. It includes the IndexName, KeySchema, Projection and ProvisionedThroughput for the GSIs on the table at the time of backup. </p>
   */
  GlobalSecondaryIndexes?: Array<_UnmarshalledGlobalSecondaryIndexInfo>;

  /**
   * <p>Stream settings on the table when the backup was created.</p>
   */
  StreamDescription?: _UnmarshalledStreamSpecification;

  /**
   * <p>Time to Live settings on the table when the backup was created.</p>
   */
  TimeToLiveDescription?: _UnmarshalledTimeToLiveDescription;

  /**
   * <p>The description of the server-side encryption status on the table when the backup was created.</p>
   */
  SSEDescription?: _UnmarshalledSSEDescription;
}
