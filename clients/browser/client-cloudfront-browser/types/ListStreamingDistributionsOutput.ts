import { _UnmarshalledStreamingDistributionList } from "./_StreamingDistributionList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListStreamingDistributionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>StreamingDistributionList</code> type. </p>
   */
  StreamingDistributionList?: _UnmarshalledStreamingDistributionList;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
