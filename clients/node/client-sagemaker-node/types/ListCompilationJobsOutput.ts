import { _UnmarshalledCompilationJobSummary } from "./_CompilationJobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCompilationJobsOutput shape
 */
export interface ListCompilationJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <a>CompilationJobSummary</a> objects, each describing a model compilation job. </p>
   */
  CompilationJobSummaries: Array<_UnmarshalledCompilationJobSummary>;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this <code>NextToken</code>. To retrieve the next set of model compilation jobs, use this token in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
