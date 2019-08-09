import { _UnmarshalledDelegate } from "./_Delegate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourceDelegatesOutput shape
 */
export interface ListResourceDelegatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>One page of the resource's delegates.</p>
   */
  Delegates?: Array<_UnmarshalledDelegate>;

  /**
   * <p>The token used to paginate through the delegates associated with a resource. While results are still available, it has an associated value. When the last page is reached, the token is empty. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
