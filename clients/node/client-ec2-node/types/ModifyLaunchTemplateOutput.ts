import { _UnmarshalledLaunchTemplate } from "./_LaunchTemplate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyLaunchTemplateOutput shape
 */
export interface ModifyLaunchTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: _UnmarshalledLaunchTemplate;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
