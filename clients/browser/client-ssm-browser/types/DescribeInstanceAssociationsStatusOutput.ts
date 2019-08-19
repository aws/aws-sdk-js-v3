import { _UnmarshalledInstanceAssociationStatusInfo } from "./_InstanceAssociationStatusInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstanceAssociationsStatusOutput shape
 */
export interface DescribeInstanceAssociationsStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Status information about the association.</p>
   */
  InstanceAssociationStatusInfos?: Array<
    _UnmarshalledInstanceAssociationStatusInfo
  >;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
