import { _UnmarshalledResponseLaunchTemplateData } from "./_ResponseLaunchTemplateData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLaunchTemplateDataOutput shape
 */
export interface GetLaunchTemplateDataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The instance data.</p>
   */
  LaunchTemplateData?: _UnmarshalledResponseLaunchTemplateData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
