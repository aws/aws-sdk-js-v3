import { _UnmarshalledEvaluation } from "./_Evaluation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface PutEvaluationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Requests that failed because of a client or server error.</p>
   */
  FailedEvaluations?: Array<_UnmarshalledEvaluation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
