import { _UnmarshalledConfigurationItem } from "./_ConfigurationItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>GetResourceConfigHistory</a> action.</p>
 */
export interface GetResourceConfigHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains the configuration history of one or more resources.</p>
   */
  configurationItems?: Array<_UnmarshalledConfigurationItem>;

  /**
   * <p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
