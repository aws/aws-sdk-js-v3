import { _UnmarshalledSpotPrice } from "./_SpotPrice";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token required to retrieve the next set of results. This value is null or an empty string when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The historical Spot prices.</p>
   */
  SpotPriceHistory?: Array<_UnmarshalledSpotPrice>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
