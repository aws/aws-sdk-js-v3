import { _UnmarshalledHttpInstanceSummary } from "./_HttpInstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DiscoverInstancesOutput shape
 */
export interface DiscoverInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains one <code>HttpInstanceSummary</code> for each registered instance.</p>
   */
  Instances?: Array<_UnmarshalledHttpInstanceSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
