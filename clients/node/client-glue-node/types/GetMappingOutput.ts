import { _UnmarshalledMappingEntry } from "./_MappingEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMappingOutput shape
 */
export interface GetMappingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of mappings to the specified targets.</p>
   */
  Mapping: Array<_UnmarshalledMappingEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
