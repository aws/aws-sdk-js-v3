import {
  _ReplicationRuleFilter,
  _UnmarshalledReplicationRuleFilter
} from "./_ReplicationRuleFilter";
import {
  _SourceSelectionCriteria,
  _UnmarshalledSourceSelectionCriteria
} from "./_SourceSelectionCriteria";
import { _Destination, _UnmarshalledDestination } from "./_Destination";
import {
  _DeleteMarkerReplication,
  _UnmarshalledDeleteMarkerReplication
} from "./_DeleteMarkerReplication";

/**
 * <p>Specifies which Amazon S3 objects to replicate and where to store the replicas.</p>
 */
export interface _ReplicationRule {
  /**
   * <p>A unique identifier for the rule. The maximum value is 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>The priority associated with the rule. If you specify multiple rules in a replication configuration, Amazon S3 prioritizes the rules to prevent conflicts when filtering. If two or more rules identify the same object based on a specified filter, the rule with higher priority takes precedence. For example:</p> <ul> <li> <p>Same object quality prefix based filter criteria If prefixes you specified in multiple rules overlap </p> </li> <li> <p>Same object qualify tag based filter criteria specified in multiple rules</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html">Cross-Region Replication (CRR)</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  Priority?: number;

  /**
   * <p>An object keyname prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string. </p>
   */
  Prefix?: string;

  /**
   * <p/>
   */
  Filter?: _ReplicationRuleFilter;

  /**
   * <p>Specifies whether the rule is enabled.</p>
   */
  Status: "Enabled" | "Disabled" | string;

  /**
   * <p>A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using an AWS KMS-Managed Key (SSE-KMS).</p>
   */
  SourceSelectionCriteria?: _SourceSelectionCriteria;

  /**
   * <p>A container for information about the replication destination.</p>
   */
  Destination: _Destination;

  /**
   * <p/>
   */
  DeleteMarkerReplication?: _DeleteMarkerReplication;
}

export interface _UnmarshalledReplicationRule extends _ReplicationRule {
  /**
   * <p/>
   */
  Filter?: _UnmarshalledReplicationRuleFilter;

  /**
   * <p>A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using an AWS KMS-Managed Key (SSE-KMS).</p>
   */
  SourceSelectionCriteria?: _UnmarshalledSourceSelectionCriteria;

  /**
   * <p>A container for information about the replication destination.</p>
   */
  Destination: _UnmarshalledDestination;

  /**
   * <p/>
   */
  DeleteMarkerReplication?: _UnmarshalledDeleteMarkerReplication;
}
