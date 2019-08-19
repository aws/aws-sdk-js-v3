import { _UnmarshalledListener } from "./_Listener";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListListenersOutput shape
 */
export interface ListListenersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of listeners for an accelerator.</p>
   */
  Listeners?: Array<_UnmarshalledListener>;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
