import { _UnmarshalledHlsIngest } from "./_HlsIngest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RotateIngestEndpointCredentialsOutput shape
 */
export interface RotateIngestEndpointCredentialsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: _UnmarshalledHlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
