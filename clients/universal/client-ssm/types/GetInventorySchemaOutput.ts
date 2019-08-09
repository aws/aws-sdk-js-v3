import { _UnmarshalledInventoryItemSchema } from "./_InventoryItemSchema";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInventorySchemaOutput shape
 */
export interface GetInventorySchemaOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Inventory schemas returned by the request.</p>
   */
  Schemas?: Array<_UnmarshalledInventoryItemSchema>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
