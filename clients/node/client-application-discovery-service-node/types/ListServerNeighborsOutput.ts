import { _UnmarshalledNeighborConnectionDetail } from "./_NeighborConnectionDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListServerNeighborsOutput shape
 */
export interface ListServerNeighborsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of distinct servers that are one hop away from the given server.</p>
   */
  neighbors: Array<_UnmarshalledNeighborConnectionDetail>;

  /**
   * <p>Token to retrieve the next set of results. For example, if you specified 100 IDs for <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.</p>
   */
  nextToken?: string;

  /**
   * <p>Count of distinct servers that are one hop away from the given server.</p>
   */
  knownDependencyCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
