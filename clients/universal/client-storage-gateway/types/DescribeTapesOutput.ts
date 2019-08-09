import { _UnmarshalledTape } from "./_Tape";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeTapesOutput</p>
 */
export interface DescribeTapesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of virtual tape descriptions.</p>
   */
  Tapes?: Array<_UnmarshalledTape>;

  /**
   * <p>An opaque string which can be used as part of a subsequent DescribeTapes call to retrieve the next page of results.</p> <p>If a response does not contain a marker, then there are no more results to be retrieved.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
