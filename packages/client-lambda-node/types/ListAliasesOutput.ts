import { _UnmarshalledAliasConfiguration } from "./_AliasConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAliasesOutput shape
 */
export interface ListAliasesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A string, present if there are more aliases.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of aliases.</p>
   */
  Aliases?: Array<_UnmarshalledAliasConfiguration>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
