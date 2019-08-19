import { _UnmarshalledIamInstanceProfileAssociation } from "./_IamInstanceProfileAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeIamInstanceProfileAssociationsOutput shape
 */
export interface DescribeIamInstanceProfileAssociationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the IAM instance profile associations.</p>
   */
  IamInstanceProfileAssociations?: Array<
    _UnmarshalledIamInstanceProfileAssociation
  >;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
