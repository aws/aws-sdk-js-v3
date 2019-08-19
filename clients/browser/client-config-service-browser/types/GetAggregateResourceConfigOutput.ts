import { _UnmarshalledConfigurationItem } from "./_ConfigurationItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAggregateResourceConfigOutput shape
 */
export interface GetAggregateResourceConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a <code>ConfigurationItem</code> object.</p>
   */
  ConfigurationItem?: _UnmarshalledConfigurationItem;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
