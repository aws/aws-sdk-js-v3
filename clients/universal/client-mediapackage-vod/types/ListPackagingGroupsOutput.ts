import { _UnmarshalledPackagingGroup } from "./_PackagingGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPackagingGroupsOutput shape
 */
export interface ListPackagingGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of MediaPackage VOD PackagingGroup resources.
   */
  PackagingGroups?: Array<_UnmarshalledPackagingGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
