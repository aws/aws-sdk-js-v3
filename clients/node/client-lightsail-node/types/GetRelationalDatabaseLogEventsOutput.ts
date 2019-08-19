import { _UnmarshalledLogEvent } from "./_LogEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseLogEventsOutput shape
 */
export interface GetRelationalDatabaseLogEventsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the result of your get relational database log events request.</p>
   */
  resourceLogEvents?: Array<_UnmarshalledLogEvent>;

  /**
   * <p>A token used for advancing to the previous page of results from your get relational database log events request.</p>
   */
  nextBackwardToken?: string;

  /**
   * <p>A token used for advancing to the next page of results from your get relational database log events request.</p>
   */
  nextForwardToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
