import { _UnmarshalledIndexFieldStatus } from "./_IndexFieldStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.</p>
 */
export interface DescribeIndexFieldsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The index fields configured for the domain.</p>
   */
  IndexFields: Array<_UnmarshalledIndexFieldStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
