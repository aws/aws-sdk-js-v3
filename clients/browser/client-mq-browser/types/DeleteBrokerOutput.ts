import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteBrokerOutput shape
 */
export interface DeleteBrokerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
