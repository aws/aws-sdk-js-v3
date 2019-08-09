import { _UnmarshalledResourceInventory } from "./_ResourceInventory";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourceInventoryOutput shape
 */
export interface ListResourceInventoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The detailed list of resources.</p>
   */
  ResourceInventoryList?: Array<_UnmarshalledResourceInventory>;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
