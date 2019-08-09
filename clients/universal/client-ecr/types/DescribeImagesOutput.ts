import { _UnmarshalledImageDetail } from "./_ImageDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImagesOutput shape
 */
export interface DescribeImagesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <a>ImageDetail</a> objects that contain data about the image.</p>
   */
  imageDetails?: Array<_UnmarshalledImageDetail>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImages</code> request. When the results of a <code>DescribeImages</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
