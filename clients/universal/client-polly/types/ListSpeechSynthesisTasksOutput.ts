import { _UnmarshalledSynthesisTask } from "./_SynthesisTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSpeechSynthesisTasksOutput shape
 */
export interface ListSpeechSynthesisTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An opaque pagination token returned from the previous List operation in this request. If present, this indicates where to continue the listing.</p>
   */
  NextToken?: string;

  /**
   * <p>List of SynthesisTask objects that provides information from the specified task in the list request, including output format, creation time, task status, and so on.</p>
   */
  SynthesisTasks?: Array<_UnmarshalledSynthesisTask>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
