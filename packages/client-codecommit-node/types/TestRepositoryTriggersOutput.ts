import { _UnmarshalledRepositoryTriggerExecutionFailure } from "./_RepositoryTriggerExecutionFailure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersOutput {
  /**
   * <p>The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.</p>
   */
  successfulExecutions?: Array<string>;

  /**
   * <p>The list of triggers that were not able to be tested. This list provides the names of the triggers that could not be tested, separated by commas.</p>
   */
  failedExecutions?: Array<_UnmarshalledRepositoryTriggerExecutionFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
