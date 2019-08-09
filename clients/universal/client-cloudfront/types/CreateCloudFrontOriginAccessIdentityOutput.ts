import { _UnmarshalledCloudFrontOriginAccessIdentity } from "./_CloudFrontOriginAccessIdentity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateCloudFrontOriginAccessIdentityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: _UnmarshalledCloudFrontOriginAccessIdentity;

  /**
   * <p>The fully qualified URI of the new origin access identity just created. For example: <code>https://cloudfront.amazonaws.com/2010-11-01/origin-access-identity/cloudfront/E74FTE3AJFJ256A</code>.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the origin access identity created.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
