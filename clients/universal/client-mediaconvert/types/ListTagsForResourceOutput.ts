import { _UnmarshalledResourceTags } from "./_ResourceTags";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceOutput shape
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
   */
  ResourceTags?: _UnmarshalledResourceTags;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
