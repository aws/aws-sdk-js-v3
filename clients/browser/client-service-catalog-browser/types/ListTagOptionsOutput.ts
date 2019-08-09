import { _UnmarshalledTagOptionDetail } from "./_TagOptionDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagOptionsOutput shape
 */
export interface ListTagOptionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the TagOptions.</p>
   */
  TagOptionDetails?: Array<_UnmarshalledTagOptionDetail>;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
