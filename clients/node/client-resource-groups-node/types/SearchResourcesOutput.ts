import { _UnmarshalledResourceIdentifier } from "./_ResourceIdentifier";
import { _UnmarshalledQueryError } from "./_QueryError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchResourcesOutput shape
 */
export interface SearchResourcesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARNs and resource types of resources that are members of the group that you specified.</p>
   */
  ResourceIdentifiers?: Array<_UnmarshalledResourceIdentifier>;

  /**
   * <p>The NextToken value to include in a subsequent <code>SearchResources</code> request, to get more results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>QueryError</code> objects. Each error is an object that contains <code>ErrorCode</code> and <code>Message</code> structures. Possible values for <code>ErrorCode</code> are <code>CLOUDFORMATION_STACK_INACTIVE</code> and <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>.</p>
   */
  QueryErrors?: Array<_UnmarshalledQueryError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
