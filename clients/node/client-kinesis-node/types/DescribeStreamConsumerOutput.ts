import { _UnmarshalledConsumerDescription } from "./_ConsumerDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStreamConsumerOutput shape
 */
export interface DescribeStreamConsumerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that represents the details of the consumer.</p>
   */
  ConsumerDescription: _UnmarshalledConsumerDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
