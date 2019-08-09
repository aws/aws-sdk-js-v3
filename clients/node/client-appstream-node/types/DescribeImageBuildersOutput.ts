import { _UnmarshalledImageBuilder } from "./_ImageBuilder";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImageBuildersOutput shape
 */
export interface DescribeImageBuildersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the image builders.</p>
   */
  ImageBuilders?: Array<_UnmarshalledImageBuilder>;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
