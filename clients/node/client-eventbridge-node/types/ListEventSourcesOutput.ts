import { _UnmarshalledEventSource } from "./_EventSource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEventSourcesOutput shape
 */
export interface ListEventSourcesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of event sources.</p>
   */
  EventSources?: Array<_UnmarshalledEventSource>;

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
