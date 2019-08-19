import { _Configuration } from "./_Configuration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateEventConfigurationsInput shape
 */
export interface UpdateEventConfigurationsInput {
  /**
   * <p>The new event configuration values.</p>
   */
  eventConfigurations?:
    | {
        [key in
          | "THING"
          | "THING_GROUP"
          | "THING_TYPE"
          | "THING_GROUP_MEMBERSHIP"
          | "THING_GROUP_HIERARCHY"
          | "THING_TYPE_ASSOCIATION"
          | "JOB"
          | "JOB_EXECUTION"
          | "POLICY"
          | "CERTIFICATE"
          | "CA_CERTIFICATE"
          | string]: _Configuration
      }
    | Iterable<
        [

            | "THING"
            | "THING_GROUP"
            | "THING_TYPE"
            | "THING_GROUP_MEMBERSHIP"
            | "THING_GROUP_HIERARCHY"
            | "THING_TYPE_ASSOCIATION"
            | "JOB"
            | "JOB_EXECUTION"
            | "POLICY"
            | "CERTIFICATE"
            | "CA_CERTIFICATE"
            | string,
          _Configuration
        ]
      >;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
