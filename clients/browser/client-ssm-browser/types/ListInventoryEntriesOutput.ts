import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListInventoryEntriesOutput shape
 */
export interface ListInventoryEntriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The type of inventory item returned by the request.</p>
   */
  TypeName?: string;

  /**
   * <p>The instance ID targeted by the request to query inventory information.</p>
   */
  InstanceId?: string;

  /**
   * <p>The inventory schema version used by the instance(s).</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The time that inventory information was collected for the instance(s).</p>
   */
  CaptureTime?: string;

  /**
   * <p>A list of inventory items on the instance(s).</p>
   */
  Entries?: Array<{ [key: string]: string }>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
