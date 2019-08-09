import { _UnmarshalledSetting } from "./_Setting";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAccountSettingsOutput shape
 */
export interface ListAccountSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The account settings for the resource.</p>
   */
  settings?: Array<_UnmarshalledSetting>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListAccountSettings</code> request. When the results of a <code>ListAccountSettings</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
