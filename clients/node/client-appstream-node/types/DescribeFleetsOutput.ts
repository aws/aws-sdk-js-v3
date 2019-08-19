import { _UnmarshalledFleet } from "./_Fleet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFleetsOutput shape
 */
export interface DescribeFleetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the fleets.</p>
   */
  Fleets?: Array<_UnmarshalledFleet>;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
