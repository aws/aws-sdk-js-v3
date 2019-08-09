import { _UnmarshalledPartnerEventSource } from "./_PartnerEventSource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPartnerEventSourcesOutput shape
 */
export interface ListPartnerEventSourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSources?: Array<_UnmarshalledPartnerEventSource>;

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
