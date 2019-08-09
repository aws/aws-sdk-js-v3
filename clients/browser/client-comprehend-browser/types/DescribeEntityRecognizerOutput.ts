import { _UnmarshalledEntityRecognizerProperties } from "./_EntityRecognizerProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEntityRecognizerOutput shape
 */
export interface DescribeEntityRecognizerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes information associated with an entity recognizer.</p>
   */
  EntityRecognizerProperties?: _UnmarshalledEntityRecognizerProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
