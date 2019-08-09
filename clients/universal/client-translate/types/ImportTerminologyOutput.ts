import { _UnmarshalledTerminologyProperties } from "./_TerminologyProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportTerminologyOutput shape
 */
export interface ImportTerminologyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The properties of the custom terminology being imported.</p>
   */
  TerminologyProperties?: _UnmarshalledTerminologyProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
