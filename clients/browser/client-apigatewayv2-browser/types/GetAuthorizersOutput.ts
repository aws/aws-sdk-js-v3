import { _UnmarshalledAuthorizer } from "./_Authorizer";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAuthorizersOutput shape
 */
export interface GetAuthorizersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<_UnmarshalledAuthorizer>;

  /**
   * <p>The next page of elements from this collection. Not valid for the last element of
   *  the collection.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
