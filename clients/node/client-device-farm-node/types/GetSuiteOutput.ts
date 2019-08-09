import { _UnmarshalledSuite } from "./_Suite";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a get suite request.</p>
 */
export interface GetSuiteOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A collection of one or more tests.</p>
   */
  suite?: _UnmarshalledSuite;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
