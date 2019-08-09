import { _DeviceSelectionConfiguration } from "./_DeviceSelectionConfiguration";
import { _ScheduleRunTest } from "./_ScheduleRunTest";
import { _ScheduleRunConfiguration } from "./_ScheduleRunConfiguration";
import { _ExecutionConfiguration } from "./_ExecutionConfiguration";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to the schedule run operation.</p>
 */
export interface ScheduleRunInput {
  /**
   * <p>The ARN of the project for the run to be scheduled.</p>
   */
  projectArn: string;

  /**
   * <p>The ARN of the app to schedule a run.</p>
   */
  appArn?: string;

  /**
   * <p>The ARN of the device pool for the run to be scheduled.</p>
   */
  devicePoolArn?: string;

  /**
   * <p>The filter criteria used to dynamically select a set of devices for a test run, as well as the maximum number of devices to be included in the run.</p> <p>Either <b> <code>devicePoolArn</code> </b> or <b> <code>deviceSelectionConfiguration</code> </b> is required in a request.</p>
   */
  deviceSelectionConfiguration?: _DeviceSelectionConfiguration;

  /**
   * <p>The name for the run to be scheduled.</p>
   */
  name?: string;

  /**
   * <p>Information about the test for the run to be scheduled.</p>
   */
  test: _ScheduleRunTest;

  /**
   * <p>Information about the settings for the run to be scheduled.</p>
   */
  configuration?: _ScheduleRunConfiguration;

  /**
   * <p>Specifies configuration information about a test run, such as the execution timeout (in minutes).</p>
   */
  executionConfiguration?: _ExecutionConfiguration;

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
