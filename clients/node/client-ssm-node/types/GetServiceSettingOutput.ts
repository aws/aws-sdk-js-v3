import { _UnmarshalledServiceSetting } from "./_ServiceSetting";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The query result body of the GetServiceSetting API action.</p>
 */
export interface GetServiceSettingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The query result of the current service setting.</p>
   */
  ServiceSetting?: _UnmarshalledServiceSetting;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
