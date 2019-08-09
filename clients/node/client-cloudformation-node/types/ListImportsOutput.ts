import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListImportsOutput shape
 */
export interface ListImportsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of stack names that are importing the specified exported output value. </p>
   */
  Imports?: Array<string>;

  /**
   * <p>A string that identifies the next page of exports. If there is no additional page, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
