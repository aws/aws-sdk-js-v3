import { _UnmarshalledContainer } from "./_Container";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListContainersOutput shape
 */
export interface ListContainersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the containers.</p>
   */
  Containers: Array<_UnmarshalledContainer>;

  /**
   * <p> <code>NextToken</code> is the token to use in the next call to <code>ListContainers</code>. This token is returned only if you included the <code>MaxResults</code> tag in the original command, and only if there are still containers to return. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
