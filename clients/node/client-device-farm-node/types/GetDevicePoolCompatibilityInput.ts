import { _ScheduleRunTest } from "./_ScheduleRunTest";
import { _ScheduleRunConfiguration } from "./_ScheduleRunConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to the get device pool compatibility operation.</p>
 */
export interface GetDevicePoolCompatibilityInput {
  /**
   * <p>The device pool's ARN.</p>
   */
  devicePoolArn: string;

  /**
   * <p>The ARN of the app that is associated with the specified device pool.</p>
   */
  appArn?: string;

  /**
   * <p>The test type for the specified device pool.</p> <p>Allowed values include the following:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_NODE: The Appium Node.js type.</p> </li> <li> <p>APPIUM_RUBY: The Appium Ruby type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p> </li> <li> <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p> </li> <li> <p>APPIUM_WEB_RUBY: The Appium Ruby type for web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The Xcode test type.</p> </li> <li> <p>XCTEST_UI: The Xcode UI test type.</p> </li> </ul>
   */
  testType?:
    | "BUILTIN_FUZZ"
    | "BUILTIN_EXPLORER"
    | "WEB_PERFORMANCE_PROFILE"
    | "APPIUM_JAVA_JUNIT"
    | "APPIUM_JAVA_TESTNG"
    | "APPIUM_PYTHON"
    | "APPIUM_NODE"
    | "APPIUM_RUBY"
    | "APPIUM_WEB_JAVA_JUNIT"
    | "APPIUM_WEB_JAVA_TESTNG"
    | "APPIUM_WEB_PYTHON"
    | "APPIUM_WEB_NODE"
    | "APPIUM_WEB_RUBY"
    | "CALABASH"
    | "INSTRUMENTATION"
    | "UIAUTOMATION"
    | "UIAUTOMATOR"
    | "XCTEST"
    | "XCTEST_UI"
    | "REMOTE_ACCESS_RECORD"
    | "REMOTE_ACCESS_REPLAY"
    | string;

  /**
   * <p>Information about the uploaded test to be run against the device pool.</p>
   */
  test?: _ScheduleRunTest;

  /**
   * <p>An object containing information about the settings for a run.</p>
   */
  configuration?: _ScheduleRunConfiguration;

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
