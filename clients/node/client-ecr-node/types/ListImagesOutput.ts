import { _UnmarshalledImageIdentifier } from "./_ImageIdentifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListImagesOutput shape
 */
export interface ListImagesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of image IDs for the requested repository.</p>
   */
  imageIds?: Array<_UnmarshalledImageIdentifier>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListImages</code> request. When the results of a <code>ListImages</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
