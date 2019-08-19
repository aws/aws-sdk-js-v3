import { _UnmarshalledBlacklistEntry } from "./_BlacklistEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>An object that contains information about blacklist events.</p>
 */
export interface GetBlacklistReportsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains information about a blacklist that one of your dedicated IP addresses appears on.</p>
   */
  BlacklistReport: { [key: string]: Array<_UnmarshalledBlacklistEntry> };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
