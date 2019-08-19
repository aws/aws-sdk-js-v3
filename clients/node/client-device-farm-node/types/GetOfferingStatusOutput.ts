import { _UnmarshalledOfferingStatus } from "./_OfferingStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Returns the status result for a device offering.</p>
 */
export interface GetOfferingStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>When specified, gets the offering status for the current period.</p>
   */
  current?: { [key: string]: _UnmarshalledOfferingStatus };

  /**
   * <p>When specified, gets the offering status for the next period.</p>
   */
  nextPeriod?: { [key: string]: _UnmarshalledOfferingStatus };

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
