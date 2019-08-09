import { _UnmarshalledTypedLinkSpecifier } from "./_TypedLinkSpecifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AttachTypedLinkOutput shape
 */
export interface AttachTypedLinkOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: _UnmarshalledTypedLinkSpecifier;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
