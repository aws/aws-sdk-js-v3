import { _UnmarshalledTaskDefinition } from "./_TaskDefinition";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTaskDefinitionOutput shape
 */
export interface DescribeTaskDefinitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full task definition description.</p>
   */
  taskDefinition?: _UnmarshalledTaskDefinition;

  /**
   * <p>The metadata that is applied to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
