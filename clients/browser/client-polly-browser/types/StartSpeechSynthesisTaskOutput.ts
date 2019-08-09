import { _UnmarshalledSynthesisTask } from "./_SynthesisTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartSpeechSynthesisTaskOutput shape
 */
export interface StartSpeechSynthesisTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>SynthesisTask object that provides information and attributes about a newly submitted speech synthesis task.</p>
   */
  SynthesisTask?: _UnmarshalledSynthesisTask;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
