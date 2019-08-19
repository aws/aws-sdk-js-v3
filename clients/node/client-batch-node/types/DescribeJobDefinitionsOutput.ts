import { _UnmarshalledJobDefinition } from "./_JobDefinition";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeJobDefinitionsOutput shape
 */
export interface DescribeJobDefinitionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of job definitions. </p>
   */
  jobDefinitions?: Array<_UnmarshalledJobDefinition>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeJobDefinitions</code> request. When the results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
