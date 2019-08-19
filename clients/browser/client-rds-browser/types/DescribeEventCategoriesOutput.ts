import { _UnmarshalledEventCategoriesMap } from "./_EventCategoriesMap";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Data returned from the <b>DescribeEventCategories</b> action.</p>
 */
export interface DescribeEventCategoriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of EventCategoriesMap data types.</p>
   */
  EventCategoriesMapList?: Array<_UnmarshalledEventCategoriesMap>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
