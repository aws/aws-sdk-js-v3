import { _UnmarshalledResourceDefinitionVersion } from "./_ResourceDefinitionVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResourceDefinitionVersionOutput shape
 */
export interface GetResourceDefinitionVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Arn of the resource definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the resource definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the definition.
   */
  Definition?: _UnmarshalledResourceDefinitionVersion;

  /**
   * The ID of the resource definition version.
   */
  Id?: string;

  /**
   * The version of the resource definition version.
   */
  Version?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
