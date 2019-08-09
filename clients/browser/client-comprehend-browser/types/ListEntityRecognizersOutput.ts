import { _UnmarshalledEntityRecognizerProperties } from "./_EntityRecognizerProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEntityRecognizersOutput shape
 */
export interface ListEntityRecognizersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of properties of an entity recognizer.</p>
   */
  EntityRecognizerPropertiesList?: Array<
    _UnmarshalledEntityRecognizerProperties
  >;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
