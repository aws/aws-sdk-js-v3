import { _UnmarshalledCoreDefinitionVersion } from "./_CoreDefinitionVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCoreDefinitionVersionOutput shape
 */
export interface GetCoreDefinitionVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the core definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the core definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the core definition version.
   */
  Definition?: _UnmarshalledCoreDefinitionVersion;

  /**
   * The ID of the core definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the core definition version.
   */
  Version?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
