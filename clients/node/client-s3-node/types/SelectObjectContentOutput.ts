import { _UnmarshalledSelectObjectContentEventStream } from "./_SelectObjectContentEventStream";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SelectObjectContentOutput shape
 */
export interface SelectObjectContentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  Payload?: _UnmarshalledSelectObjectContentEventStream;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
