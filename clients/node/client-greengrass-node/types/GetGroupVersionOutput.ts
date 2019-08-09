import { _UnmarshalledGroupVersion } from "./_GroupVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGroupVersionOutput shape
 */
export interface GetGroupVersionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the group version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the group version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the group version definition.
   */
  Definition?: _UnmarshalledGroupVersion;

  /**
   * The ID of the group version.
   */
  Id?: string;

  /**
   * The unique ID for the version of the group.
   */
  Version?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
