import { _UnmarshalledTest } from "./_Test";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a get test request.</p>
 */
export interface GetTestOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A test condition that is evaluated.</p>
   */
  test?: _UnmarshalledTest;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
