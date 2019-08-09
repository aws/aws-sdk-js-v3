import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * An object that contains information about the configuration sets for your account in the current region.
 */
export interface ListConfigurationSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * An object that contains a list of configuration sets for your account in the current region.
   */
  ConfigurationSets?: Array<string>;

  /**
   * A token returned from a previous call to ListConfigurationSets to indicate the position in the list of configuration sets.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
