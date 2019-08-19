import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation. </p>
 */
export interface ListElasticsearchVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of supported elastic search versions. </p>
   */
  ElasticsearchVersions?: Array<string>;

  /**
   * <p> Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
