import { _UnmarshalledInventoryDeletionStatusItem } from "./_InventoryDeletionStatusItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInventoryDeletionsOutput shape
 */
export interface DescribeInventoryDeletionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of status items for deleted inventory.</p>
   */
  InventoryDeletions?: Array<_UnmarshalledInventoryDeletionStatusItem>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
