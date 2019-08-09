import { _UnmarshalledDataRetrievalPolicy } from "./_DataRetrievalPolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.</p>
 */
export interface GetDataRetrievalPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the returned data retrieval policy in JSON format.</p>
   */
  Policy?: _UnmarshalledDataRetrievalPolicy;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
