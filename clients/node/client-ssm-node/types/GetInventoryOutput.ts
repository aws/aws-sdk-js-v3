import { _UnmarshalledInventoryResultEntity } from "./_InventoryResultEntity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInventoryOutput shape
 */
export interface GetInventoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Collection of inventory entities such as a collection of instance inventory. </p>
   */
  Entities?: Array<_UnmarshalledInventoryResultEntity>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
