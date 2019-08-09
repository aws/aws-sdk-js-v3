import { _UnmarshalledContact } from "./_Contact";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetContactOutput shape
 */
export interface GetContactOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the requested contact.</p>
   */
  Contact?: _UnmarshalledContact;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
