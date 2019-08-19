import { _UnmarshalledGroupIdentifier } from "./_GroupIdentifier";
import { _UnmarshalledGroup } from "./_Group";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGroupsOutput shape
 */
export interface ListGroupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of GroupIdentifier objects. Each identifier is an object that contains both the GroupName and the GroupArn.</p>
   */
  GroupIdentifiers?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>A list of resource groups.</p>
   */
  Groups?: Array<_UnmarshalledGroup>;

  /**
   * <p>The NextToken value to include in a subsequent <code>ListGroups</code> request, to get more results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
