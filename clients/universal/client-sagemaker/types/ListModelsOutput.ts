import { _UnmarshalledModelSummary } from "./_ModelSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListModelsOutput shape
 */
export interface ListModelsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a model.</p>
   */
  Models: Array<_UnmarshalledModelSummary>;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of models, use it in the subsequent request. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
