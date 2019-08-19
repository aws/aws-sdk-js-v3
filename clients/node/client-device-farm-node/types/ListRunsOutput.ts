import { _UnmarshalledRun } from "./_Run";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a list runs request.</p>
 */
export interface ListRunsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the runs.</p>
   */
  runs?: Array<_UnmarshalledRun>;

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
