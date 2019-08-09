import { _UnmarshalledClusterOperationInfo } from "./_ClusterOperationInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListClusterOperationsOutput shape
 */
export interface ListClusterOperationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>An array of cluster operation information objects.</p>
   *
   */
  ClusterOperationInfoList?: Array<_UnmarshalledClusterOperationInfo>;

  /**
   *
   *             <p>If the response of ListClusterOperations is truncated, it returns a NextToken in the response. This Nexttoken should be sent in the subsequent request to ListClusterOperations.</p>
   *
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
