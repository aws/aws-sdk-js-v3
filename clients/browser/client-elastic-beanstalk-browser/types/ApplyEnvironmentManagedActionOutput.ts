import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result message containing information about the managed action.</p>
 */
export interface ApplyEnvironmentManagedActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The action ID of the managed action.</p>
   */
  ActionId?: string;

  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>The type of managed action.</p>
   */
  ActionType?: "InstanceRefresh" | "PlatformUpdate" | "Unknown" | string;

  /**
   * <p>The status of the managed action.</p>
   */
  Status?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
