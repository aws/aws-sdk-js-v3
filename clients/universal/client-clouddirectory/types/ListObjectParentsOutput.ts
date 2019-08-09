import { _UnmarshalledObjectIdentifierAndLinkNameTuple } from "./_ObjectIdentifierAndLinkNameTuple";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListObjectParentsOutput shape
 */
export interface ListObjectParentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The parent structure, which is a map with key as the <code>ObjectIdentifier</code> and LinkName as the value.</p>
   */
  Parents?: { [key: string]: string };

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   */
  ParentLinks?: Array<_UnmarshalledObjectIdentifierAndLinkNameTuple>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
