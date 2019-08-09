import {
  _ClusterParameterStatus,
  _UnmarshalledClusterParameterStatus
} from "./_ClusterParameterStatus";

/**
 * <p>Describes the status of a parameter group.</p>
 */
export interface _ClusterParameterGroupStatus {
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The list of parameter statuses.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  ClusterParameterStatusList?:
    | Array<_ClusterParameterStatus>
    | Iterable<_ClusterParameterStatus>;
}

export interface _UnmarshalledClusterParameterGroupStatus
  extends _ClusterParameterGroupStatus {
  /**
   * <p>The list of parameter statuses.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  ClusterParameterStatusList?: Array<_UnmarshalledClusterParameterStatus>;
}
