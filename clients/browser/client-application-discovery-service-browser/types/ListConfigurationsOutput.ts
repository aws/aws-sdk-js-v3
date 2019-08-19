import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListConfigurationsOutput shape
 */
export interface ListConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns configuration details, including the configuration ID, attribute names, and attribute values.</p>
   */
  configurations?: Array<{ [key: string]: string }>;

  /**
   * <p>Token to retrieve the next set of results. For example, if your call to ListConfigurations returned 100 items, but you set <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
