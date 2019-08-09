import { _UnmarshalledDBClusterBacktrack } from "./_DBClusterBacktrack";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.</p>
 */
export interface DescribeDBClusterBacktracksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A pagination token that can be used in a subsequent <code>DescribeDBClusterBacktracks</code> request.</p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of backtracks for the user.</p>
   */
  DBClusterBacktracks?: Array<_UnmarshalledDBClusterBacktrack>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
