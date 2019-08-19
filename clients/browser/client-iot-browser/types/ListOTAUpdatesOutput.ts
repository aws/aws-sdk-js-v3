import { _UnmarshalledOTAUpdateSummary } from "./_OTAUpdateSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListOTAUpdatesOutput shape
 */
export interface ListOTAUpdatesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of OTA update jobs.</p>
   */
  otaUpdates?: Array<_UnmarshalledOTAUpdateSummary>;

  /**
   * <p>A token to use to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
