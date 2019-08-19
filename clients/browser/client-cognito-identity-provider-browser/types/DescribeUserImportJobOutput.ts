import { _UnmarshalledUserImportJobType } from "./_UserImportJobType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server to the request to describe the user import job.</p>
 */
export interface DescribeUserImportJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: _UnmarshalledUserImportJobType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
