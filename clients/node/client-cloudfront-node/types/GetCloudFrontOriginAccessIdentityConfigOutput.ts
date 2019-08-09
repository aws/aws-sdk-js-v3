import { _UnmarshalledCloudFrontOriginAccessIdentityConfig } from "./_CloudFrontOriginAccessIdentityConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetCloudFrontOriginAccessIdentityConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The origin access identity's configuration information. </p>
   */
  CloudFrontOriginAccessIdentityConfig?: _UnmarshalledCloudFrontOriginAccessIdentityConfig;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
