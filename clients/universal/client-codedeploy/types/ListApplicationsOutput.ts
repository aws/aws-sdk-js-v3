import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a ListApplications operation.</p>
 */
export interface ListApplicationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of application names.</p>
   */
  applications?: Array<string>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list applications call to return the next set of applications in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
