import { _UnmarshalledConsumedCapacity } from "./_ConsumedCapacity";
import { _UnmarshalledItemResponse } from "./_ItemResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TransactGetItemsOutput shape
 */
export interface TransactGetItemsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the <i>ReturnConsumedCapacity</i> value was <code>TOTAL</code>, this is an array of <code>ConsumedCapacity</code> objects, one for each table addressed by <code>TransactGetItem</code> objects in the <i>TransactItems</i> parameter. These <code>ConsumedCapacity</code> objects report the read-capacity units consumed by the <code>TransactGetItems</code> call in that table.</p>
   */
  ConsumedCapacity?: Array<_UnmarshalledConsumedCapacity>;

  /**
   * <p>An ordered array of up to 25 <code>ItemResponse</code> objects, each of which corresponds to the <code>TransactGetItem</code> object in the same position in the <i>TransactItems</i> array. Each <code>ItemResponse</code> object contains a Map of the name-value pairs that are the projected attributes of the requested item.</p> <p>If a requested item could not be retrieved, the corresponding <code>ItemResponse</code> object is Null, or if the requested item has no projected attributes, the corresponding <code>ItemResponse</code> object is an empty Map. </p>
   */
  Responses?: Array<_UnmarshalledItemResponse>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
