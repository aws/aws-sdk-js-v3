import { _UnmarshalledBuiltinSlotTypeMetadata } from "./_BuiltinSlotTypeMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBuiltinSlotTypesOutput shape
 */
export interface GetBuiltinSlotTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>BuiltInSlotTypeMetadata</code> objects, one entry for each slot type returned.</p>
   */
  slotTypes?: Array<_UnmarshalledBuiltinSlotTypeMetadata>;

  /**
   * <p>If the response is truncated, the response includes a pagination token that you can use in your next request to fetch the next page of slot types.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
