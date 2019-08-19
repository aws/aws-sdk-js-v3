import { _UnmarshalledRefreshSchemasStatus } from "./_RefreshSchemasStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface RefreshSchemasOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the refreshed schema.</p>
   */
  RefreshSchemasStatus?: _UnmarshalledRefreshSchemasStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
