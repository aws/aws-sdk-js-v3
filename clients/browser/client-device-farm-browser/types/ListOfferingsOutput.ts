import { _UnmarshalledOffering } from "./_Offering";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the return values of the list of offerings.</p>
 */
export interface ListOfferingsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A value representing the list offering results.</p>
   */
  offerings?: Array<_UnmarshalledOffering>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
