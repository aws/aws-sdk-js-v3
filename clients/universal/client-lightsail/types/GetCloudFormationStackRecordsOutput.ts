import { _UnmarshalledCloudFormationStackRecord } from "./_CloudFormationStackRecord";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCloudFormationStackRecordsOutput shape
 */
export interface GetCloudFormationStackRecordsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of objects describing the CloudFormation stack records.</p>
   */
  cloudFormationStackRecords?: Array<_UnmarshalledCloudFormationStackRecord>;

  /**
   * <p>A token used for advancing to the next page of results of your get relational database bundles request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
