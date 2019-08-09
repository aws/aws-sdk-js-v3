import { _UnmarshalledHostedZone } from "./_HostedZone";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.</p>
 */
export interface UpdateHostedZoneCommentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.</p>
   */
  HostedZone: _UnmarshalledHostedZone;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
