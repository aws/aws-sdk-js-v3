import { _UnmarshalledPrincipal } from "./_Principal";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPrincipalsOutput shape
 */
export interface ListPrincipalsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The principals.</p>
   */
  principals?: Array<_UnmarshalledPrincipal>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
