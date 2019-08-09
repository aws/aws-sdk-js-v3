import { _UnmarshalledTapeArchive } from "./_TapeArchive";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeTapeArchivesOutput</p>
 */
export interface DescribeTapeArchivesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of virtual tape objects in the virtual tape shelf (VTS). The description includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the tapes, progress of the description and tape barcode.</p>
   */
  TapeArchives?: Array<_UnmarshalledTapeArchive>;

  /**
   * <p>An opaque string that indicates the position at which the virtual tapes that were fetched for description ended. Use this marker in your next request to fetch the next set of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to describe, this field does not appear in the response.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
