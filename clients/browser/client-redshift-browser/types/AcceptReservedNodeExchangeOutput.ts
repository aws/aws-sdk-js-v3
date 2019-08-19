import { _UnmarshalledReservedNode } from "./_ReservedNode";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AcceptReservedNodeExchangeOutput shape
 */
export interface AcceptReservedNodeExchangeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  ExchangedReservedNode?: _UnmarshalledReservedNode;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
