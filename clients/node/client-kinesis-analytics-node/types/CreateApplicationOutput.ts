import { _UnmarshalledApplicationSummary } from "./_ApplicationSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>TBD</p>
 */
export interface CreateApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>In response to your <code>CreateApplication</code> request, Amazon Kinesis Analytics returns a response with a summary of the application it created, including the application Amazon Resource Name (ARN), name, and status.</p>
   */
  ApplicationSummary: _UnmarshalledApplicationSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
