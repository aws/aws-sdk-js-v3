import { _UnmarshalledTableRestoreStatus } from "./_TableRestoreStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeTableRestoreStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of status details for one or more table restore requests.</p>
   */
  TableRestoreStatusDetails?: Array<_UnmarshalledTableRestoreStatus>;

  /**
   * <p>A pagination token that can be used in a subsequent <a>DescribeTableRestoreStatus</a> request.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
