import { _UnmarshalledEventCategoryGroup } from "./_EventCategoryGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeEventCategoriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of event categories.</p>
   */
  EventCategoryGroupList?: Array<_UnmarshalledEventCategoryGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
