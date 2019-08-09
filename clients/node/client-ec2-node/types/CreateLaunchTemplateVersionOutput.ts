import { _UnmarshalledLaunchTemplateVersion } from "./_LaunchTemplateVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLaunchTemplateVersionOutput shape
 */
export interface CreateLaunchTemplateVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the launch template version.</p>
   */
  LaunchTemplateVersion?: _UnmarshalledLaunchTemplateVersion;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
