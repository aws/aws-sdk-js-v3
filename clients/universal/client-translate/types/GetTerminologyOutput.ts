import { _UnmarshalledTerminologyProperties } from "./_TerminologyProperties";
import { _UnmarshalledTerminologyDataLocation } from "./_TerminologyDataLocation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTerminologyOutput shape
 */
export interface GetTerminologyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The properties of the custom terminology being retrieved.</p>
   */
  TerminologyProperties?: _UnmarshalledTerminologyProperties;

  /**
   * <p>The data location of the custom terminology being retrieved. The custom terminology file is returned in a presigned url that has a 30 minute expiration.</p>
   */
  TerminologyDataLocation?: _UnmarshalledTerminologyDataLocation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
