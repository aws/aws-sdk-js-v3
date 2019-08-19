import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of configuration sets in your Amazon Pinpoint account in the current AWS Region.</p>
 */
export interface ListConfigurationSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array that contains all of the configuration sets in your Amazon Pinpoint account in the current AWS Region.</p>
   */
  ConfigurationSets?: Array<string>;

  /**
   * <p>A token that indicates that there are additional configuration sets to list. To view additional configuration sets, issue another request to <code>ListConfigurationSets</code>, and pass this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
