import { _UnmarshalledDistribution } from "./_Distribution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateDistributionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: _UnmarshalledDistribution;

  /**
   * <p>The fully qualified URI of the new distribution resource just created. For example: <code>https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5</code>.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the distribution created.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
