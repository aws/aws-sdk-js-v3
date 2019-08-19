import { _UnmarshalledAuthEventType } from "./_AuthEventType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AdminListUserAuthEventsOutput shape
 */
export interface AdminListUserAuthEventsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The response object. It includes the <code>EventID</code>, <code>EventType</code>, <code>CreationDate</code>, <code>EventRisk</code>, and <code>EventResponse</code>.</p>
   */
  AuthEvents?: Array<_UnmarshalledAuthEventType>;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
