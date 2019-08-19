import { _UnmarshalledDescribedServer } from "./_DescribedServer";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeServerOutput shape
 */
export interface DescribeServerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array containing the properties of the server with the <code>ServerID</code> you specified.</p>
   */
  Server: _UnmarshalledDescribedServer;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
