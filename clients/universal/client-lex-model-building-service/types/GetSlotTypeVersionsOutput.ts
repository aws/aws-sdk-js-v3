import { _UnmarshalledSlotTypeMetadata } from "./_SlotTypeMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSlotTypeVersionsOutput shape
 */
export interface GetSlotTypeVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>SlotTypeMetadata</code> objects, one for each numbered version of the slot type plus one for the <code>$LATEST</code> version.</p>
   */
  slotTypes?: Array<_UnmarshalledSlotTypeMetadata>;

  /**
   * <p>A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
