import { _UnmarshalledResourceDetail } from "./_ResourceDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourcesForTagOptionOutput shape
 */
export interface ListResourcesForTagOptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the resources.</p>
   */
  ResourceDetails?: Array<_UnmarshalledResourceDetail>;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
