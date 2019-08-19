import { _UnmarshalledEventCategoriesMap } from "./_EventCategoriesMap";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeEventCategoriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of event categories descriptions.</p>
   */
  EventCategoriesMapList?: Array<_UnmarshalledEventCategoriesMap>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
