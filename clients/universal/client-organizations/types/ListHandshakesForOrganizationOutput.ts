import { _UnmarshalledHandshake } from "./_Handshake";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListHandshakesForOrganizationOutput shape
 */
export interface ListHandshakesForOrganizationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <a>Handshake</a> objects with details about each of the handshakes that are associated with an organization.</p>
   */
  Handshakes?: Array<_UnmarshalledHandshake>;

  /**
   * <p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
