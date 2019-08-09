import { _UnmarshalledLag } from "./_Lag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLagsOutput shape
 */
export interface DescribeLagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The LAGs.</p>
   */
  lags?: Array<_UnmarshalledLag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
