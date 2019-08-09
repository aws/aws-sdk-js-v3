import { _ErrorInfo, _UnmarshalledErrorInfo } from "./_ErrorInfo";
import {
  _MutableClusterInfo,
  _UnmarshalledMutableClusterInfo
} from "./_MutableClusterInfo";

/**
 *
 *             <p>Returns information about a cluster operation.</p>
 *
 */
export interface _ClusterOperationInfo {
  /**
   *
   *             <p>The ID of the API request that triggered this operation.</p>
   *
   */
  ClientRequestId?: string;

  /**
   *
   *             <p>ARN of the cluster.</p>
   *
   */
  ClusterArn?: string;

  /**
   *
   *             <p>The time that the operation was created.</p>
   *
   */
  CreationTime?: Date | string | number;

  /**
   *
   *             <p>The time at which the operation finished.</p>
   *
   */
  EndTime?: Date | string | number;

  /**
   *
   *             <p>Describes the error if the operation fails.</p>
   *
   */
  ErrorInfo?: _ErrorInfo;

  /**
   *
   *             <p>ARN of the cluster operation.</p>
   *
   */
  OperationArn?: string;

  /**
   *
   *             <p>State of the cluster operation.</p>
   *
   */
  OperationState?: string;

  /**
   *
   *             <p>Type of the cluster operation.</p>
   *
   */
  OperationType?: string;

  /**
   *
   *             <p>Information about cluster attributes before a cluster is updated.</p>
   *
   */
  SourceClusterInfo?: _MutableClusterInfo;

  /**
   *
   *             <p>Information about cluster attributes after a cluster is updated.</p>
   *
   */
  TargetClusterInfo?: _MutableClusterInfo;
}

export interface _UnmarshalledClusterOperationInfo
  extends _ClusterOperationInfo {
  /**
   *
   *             <p>The time that the operation was created.</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *             <p>The time at which the operation finished.</p>
   *
   */
  EndTime?: Date;

  /**
   *
   *             <p>Describes the error if the operation fails.</p>
   *
   */
  ErrorInfo?: _UnmarshalledErrorInfo;

  /**
   *
   *             <p>Information about cluster attributes before a cluster is updated.</p>
   *
   */
  SourceClusterInfo?: _UnmarshalledMutableClusterInfo;

  /**
   *
   *             <p>Information about cluster attributes after a cluster is updated.</p>
   *
   */
  TargetClusterInfo?: _UnmarshalledMutableClusterInfo;
}
