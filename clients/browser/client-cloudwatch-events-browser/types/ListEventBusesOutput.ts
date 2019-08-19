import { _UnmarshalledEventBus } from "./_EventBus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEventBusesOutput shape
 */
export interface ListEventBusesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>This list of event buses.</p>
   */
  EventBuses?: Array<_UnmarshalledEventBus>;

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
