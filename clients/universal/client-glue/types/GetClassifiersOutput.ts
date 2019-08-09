import { _UnmarshalledClassifier } from "./_Classifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetClassifiersOutput shape
 */
export interface GetClassifiersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested list of classifier objects.</p>
   */
  Classifiers?: Array<_UnmarshalledClassifier>;

  /**
   * <p>A continuation token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
