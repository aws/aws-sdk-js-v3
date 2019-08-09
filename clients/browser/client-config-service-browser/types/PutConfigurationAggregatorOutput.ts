import { _UnmarshalledConfigurationAggregator } from "./_ConfigurationAggregator";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutConfigurationAggregatorOutput shape
 */
export interface PutConfigurationAggregatorOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a ConfigurationAggregator object.</p>
   */
  ConfigurationAggregator?: _UnmarshalledConfigurationAggregator;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
