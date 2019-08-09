import { _UnmarshalledUserImportJobType } from "./_UserImportJobType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server to the request to list the user import jobs.</p>
 */
export interface ListUserImportJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user import jobs.</p>
   */
  UserImportJobs?: Array<_UnmarshalledUserImportJobType>;

  /**
   * <p>An identifier that can be used to return the next set of user import jobs in the list.</p>
   */
  PaginationToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
