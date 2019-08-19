import { _UnmarshalledGroup } from "./_Group";
import { _UnmarshalledResourceQuery } from "./_ResourceQuery";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGroupOutput shape
 */
export interface CreateGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A full description of the resource group after it is created.</p>
   */
  Group?: _UnmarshalledGroup;

  /**
   * <p>The resource query associated with the group.</p>
   */
  ResourceQuery?: _UnmarshalledResourceQuery;

  /**
   * <p>The tags associated with the group.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
