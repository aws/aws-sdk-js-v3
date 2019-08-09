import { _UnmarshalledFileShareInfo } from "./_FileShareInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListFileShareOutput</p>
 */
export interface ListFileSharesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the request includes <code>Marker</code>, the response returns that value in this field. </p>
   */
  Marker?: string;

  /**
   * <p>If a value is present, there are more file shares to return. In a subsequent request, use <code>NextMarker</code> as the value for <code>Marker</code> to retrieve the next set of file shares. </p>
   */
  NextMarker?: string;

  /**
   * <p>An array of information about the file gateway's file shares. </p>
   */
  FileShareInfoList?: Array<_UnmarshalledFileShareInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
