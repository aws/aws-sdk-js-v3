import { _UnmarshalledApplicationInfo } from "./_ApplicationInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListApplicationsOutput shape
 */
export interface ListApplicationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of applications.</p>
   */
  ApplicationInfoList?: Array<_UnmarshalledApplicationInfo>;

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
