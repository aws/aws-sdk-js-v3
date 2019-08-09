import { _UnmarshalledPlatformApplication } from "./_PlatformApplication";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for ListPlatformApplications action.</p>
 */
export interface ListPlatformApplicationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Platform applications returned when calling ListPlatformApplications action.</p>
   */
  PlatformApplications?: Array<_UnmarshalledPlatformApplication>;

  /**
   * <p>NextToken string is returned when calling ListPlatformApplications action if additional records are available after the first page results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
