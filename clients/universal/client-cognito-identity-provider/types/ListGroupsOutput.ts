import { _UnmarshalledGroupType } from "./_GroupType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGroupsOutput shape
 */
export interface ListGroupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The group objects for the groups.</p>
   */
  Groups?: Array<_UnmarshalledGroupType>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
