import { _UnmarshalledResourceTag } from "./_ResourceTag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface ListTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of resource tags.</p>
   */
  ResourceTagList?: Array<_UnmarshalledResourceTag>;

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
