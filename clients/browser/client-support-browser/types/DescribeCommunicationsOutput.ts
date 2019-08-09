import { _UnmarshalledCommunication } from "./_Communication";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The communications returned by the <a>DescribeCommunications</a> operation.</p>
 */
export interface DescribeCommunicationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The communications for the case.</p>
   */
  communications?: Array<_UnmarshalledCommunication>;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
