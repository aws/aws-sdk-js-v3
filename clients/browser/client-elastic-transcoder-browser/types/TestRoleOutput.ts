import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>TestRoleResponse</code> structure.</p>
 */
export interface TestRoleOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the operation is successful, this value is <code>true</code>; otherwise, the value is <code>false</code>.</p>
   */
  Success?: string;

  /**
   * <p>If the <code>Success</code> element contains <code>false</code>, this value is an array of one or more error messages that were generated during the test process.</p>
   */
  Messages?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
