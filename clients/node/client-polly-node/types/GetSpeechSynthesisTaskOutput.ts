import { _UnmarshalledSynthesisTask } from "./_SynthesisTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSpeechSynthesisTaskOutput shape
 */
export interface GetSpeechSynthesisTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>SynthesisTask object that provides information from the requested task, including output format, creation time, task status, and so on.</p>
   */
  SynthesisTask?: _UnmarshalledSynthesisTask;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
