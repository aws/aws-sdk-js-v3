import { _UnmarshalledCloudFrontOriginAccessIdentityList } from "./_CloudFrontOriginAccessIdentityList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListCloudFrontOriginAccessIdentitiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>CloudFrontOriginAccessIdentityList</code> type. </p>
   */
  CloudFrontOriginAccessIdentityList?: _UnmarshalledCloudFrontOriginAccessIdentityList;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
