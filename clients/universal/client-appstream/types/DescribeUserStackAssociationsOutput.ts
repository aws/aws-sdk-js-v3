import { _UnmarshalledUserStackAssociation } from "./_UserStackAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserStackAssociationsOutput shape
 */
export interface DescribeUserStackAssociationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The UserStackAssociation objects.</p>
   */
  UserStackAssociations?: Array<_UnmarshalledUserStackAssociation>;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
