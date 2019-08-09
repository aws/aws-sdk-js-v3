import { _UnmarshalledSetting } from "./_Setting";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutAccountSettingDefaultOutput shape
 */
export interface PutAccountSettingDefaultOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current account setting for a resource.</p>
   */
  setting?: _UnmarshalledSetting;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
