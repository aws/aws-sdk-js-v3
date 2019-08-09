import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The UpdateDomainNameservers response includes the following element.</p>
 */
export interface UpdateDomainNameserversOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status, use <a>GetOperationDetail</a>.</p>
   */
  OperationId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
