import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>RetrieveTapeRecoveryPointOutput</p>
 */
export interface RetrieveTapeRecoveryPointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was retrieved.</p>
   */
  TapeARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
