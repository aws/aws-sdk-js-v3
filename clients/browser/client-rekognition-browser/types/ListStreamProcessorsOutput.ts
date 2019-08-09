import { _UnmarshalledStreamProcessor } from "./_StreamProcessor";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListStreamProcessorsOutput shape
 */
export interface ListStreamProcessorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of stream processors. </p>
   */
  NextToken?: string;

  /**
   * <p>List of stream processors that you have created.</p>
   */
  StreamProcessors?: Array<_UnmarshalledStreamProcessor>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
