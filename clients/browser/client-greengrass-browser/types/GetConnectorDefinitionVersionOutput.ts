import { _UnmarshalledConnectorDefinitionVersion } from "./_ConnectorDefinitionVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConnectorDefinitionVersionOutput shape
 */
export interface GetConnectorDefinitionVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the connector definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the connector definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the connector definition version.
   */
  Definition?: _UnmarshalledConnectorDefinitionVersion;

  /**
   * The ID of the connector definition version.
   */
  Id?: string;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * The version of the connector definition version.
   */
  Version?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
