import { _UnmarshalledSlotTypeMetadata } from "./_SlotTypeMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSlotTypesOutput shape
 */
export interface GetSlotTypesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of objects, one for each slot type, that provides information such as the name of the slot type, the version, and a description.</p>
   */
  slotTypes?: Array<_UnmarshalledSlotTypeMetadata>;

  /**
   * <p>If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of slot types.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
