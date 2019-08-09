import { _UnmarshalledEventsConfiguration } from "./_EventsConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutEventsConfigurationOutput shape
 */
export interface PutEventsConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
   */
  EventsConfiguration?: _UnmarshalledEventsConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
