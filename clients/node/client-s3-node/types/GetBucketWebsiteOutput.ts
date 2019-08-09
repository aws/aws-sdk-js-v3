import { _UnmarshalledRedirectAllRequestsTo } from "./_RedirectAllRequestsTo";
import { _UnmarshalledIndexDocument } from "./_IndexDocument";
import { _UnmarshalledErrorDocument } from "./_ErrorDocument";
import { _UnmarshalledRoutingRule } from "./_RoutingRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketWebsiteOutput shape
 */
export interface GetBucketWebsiteOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  RedirectAllRequestsTo?: _UnmarshalledRedirectAllRequestsTo;

  /**
   * <p/>
   */
  IndexDocument?: _UnmarshalledIndexDocument;

  /**
   * <p/>
   */
  ErrorDocument?: _UnmarshalledErrorDocument;

  /**
   * <p/>
   */
  RoutingRules?: Array<_UnmarshalledRoutingRule>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
