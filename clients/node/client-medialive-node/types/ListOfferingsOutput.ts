import { _UnmarshalledOffering } from "./_Offering";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for ListOfferingsResponse
 */
export interface ListOfferingsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;

  /**
   * List of offerings
   */
  Offerings?: Array<_UnmarshalledOffering>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
