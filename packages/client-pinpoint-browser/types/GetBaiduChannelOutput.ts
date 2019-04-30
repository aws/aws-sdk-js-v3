import { _UnmarshalledBaiduChannelResponse } from "./_BaiduChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBaiduChannelOutput shape
 */
export interface GetBaiduChannelOutput {
  /**
   * Baidu Cloud Messaging channel definition
   */
  BaiduChannelResponse: _UnmarshalledBaiduChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
