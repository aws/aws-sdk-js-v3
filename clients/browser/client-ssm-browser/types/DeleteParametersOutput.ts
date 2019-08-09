import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteParametersOutput shape
 */
export interface DeleteParametersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the deleted parameters.</p>
   */
  DeletedParameters?: Array<string>;

  /**
   * <p>The names of parameters that weren't deleted because the parameters are not valid.</p>
   */
  InvalidParameters?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
