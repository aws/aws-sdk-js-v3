import { _UnmarshalledInstanceInformation } from "./_InstanceInformation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstanceInformationOutput shape
 */
export interface DescribeInstanceInformationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The instance information list.</p>
   */
  InstanceInformationList?: Array<_UnmarshalledInstanceInformation>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
