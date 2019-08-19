import { _UnmarshalledChangeInfo } from "./_ChangeInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the <code>ChangeInfo</code> element.</p>
 */
export interface GetChangeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains information about the specified change batch.</p>
   */
  ChangeInfo: _UnmarshalledChangeInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
