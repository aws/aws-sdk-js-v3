import { _UnmarshalledTagInfoForResource } from "./_TagInfoForResource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceOutput shape
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _NextMarker shape
   */
  NextMarker?: string;

  /**
   * _TagInfoForResource shape
   */
  TagInfoForResource?: _UnmarshalledTagInfoForResource;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
