import { _Counters, _UnmarshalledCounters } from "./_Counters";
import { _DeviceMinutes, _UnmarshalledDeviceMinutes } from "./_DeviceMinutes";
import {
  _NetworkProfile,
  _UnmarshalledNetworkProfile
} from "./_NetworkProfile";
import { _Radios, _UnmarshalledRadios } from "./_Radios";
import { _Location, _UnmarshalledLocation } from "./_Location";
import {
  _CustomerArtifactPaths,
  _UnmarshalledCustomerArtifactPaths
} from "./_CustomerArtifactPaths";
import {
  _DeviceSelectionResult,
  _UnmarshalledDeviceSelectionResult
} from "./_DeviceSelectionResult";

/**
 * <p>Represents a test run on a set of devices with a given app package, test parameters, etc.</p>
 */
export interface _Run {
  /**
   * <p>The run's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The run's name.</p>
   */
  name?: string;

  /**
   * <p>The run's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_NODE: The Appium Node.js type.</p> </li> <li> <p>APPIUM_RUBY: The Appium Ruby type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p> </li> <li> <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p> </li> <li> <p>APPIUM_WEB_RUBY: The Appium Ruby type for web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The Xcode test type.</p> </li> <li> <p>XCTEST_UI: The Xcode UI test type.</p> </li> </ul>
   */
  type?:
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
   * <p>The run's platform.</p> <p>Allowed values include:</p> <ul> <li> <p>ANDROID: The Android platform.</p> </li> <li> <p>IOS: The iOS platform.</p> </li> </ul>
   */
  platform?: "ANDROID" | "IOS" | string;

  /**
   * <p>When the run was created.</p>
   */
  created?: Date | string | number;

  /**
   * <p>The run's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending status.</p> </li> <li> <p>PENDING_CONCURRENCY: A pending concurrency status.</p> </li> <li> <p>PENDING_DEVICE: A pending device status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SCHEDULING: A scheduling status.</p> </li> <li> <p>PREPARING: A preparing status.</p> </li> <li> <p>RUNNING: A running status.</p> </li> <li> <p>COMPLETED: A completed status.</p> </li> <li> <p>STOPPING: A stopping status.</p> </li> </ul>
   */
  status?:
    | "PENDING"
    | "PENDING_CONCURRENCY"
    | "PENDING_DEVICE"
    | "PROCESSING"
    | "SCHEDULING"
    | "PREPARING"
    | "RUNNING"
    | "COMPLETED"
    | "STOPPING"
    | string;

  /**
   * <p>The run's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>
   */
  result?:
    | "PENDING"
    | "PASSED"
    | "WARNED"
    | "FAILED"
    | "SKIPPED"
    | "ERRORED"
    | "STOPPED"
    | string;

  /**
   * <p>The run's start time.</p>
   */
  started?: Date | string | number;

  /**
   * <p>The run's stop time.</p>
   */
  stopped?: Date | string | number;

  /**
   * <p>The run's result counters.</p>
   */
  counters?: _Counters;

  /**
   * <p>A message about the run's result.</p>
   */
  message?: string;

  /**
   * <p>The total number of jobs for the run.</p>
   */
  totalJobs?: number;

  /**
   * <p>The total number of completed jobs.</p>
   */
  completedJobs?: number;

  /**
   * <p>Specifies the billing method for a test run: <code>metered</code> or <code>unmetered</code>. If the parameter is not specified, the default value is <code>metered</code>.</p>
   */
  billingMethod?: "METERED" | "UNMETERED" | string;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the test run.</p>
   */
  deviceMinutes?: _DeviceMinutes;

  /**
   * <p>The network profile being used for a test run.</p>
   */
  networkProfile?: _NetworkProfile;

  /**
   * <p>Read-only URL for an object in S3 bucket where you can get the parsing results of the test package. If the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points to.</p>
   */
  parsingResultUrl?: string;

  /**
   * <p>Supporting field for the result field. Set only if <code>result</code> is <code>SKIPPED</code>. <code>PARSING_FAILED</code> if the result is skipped because of test package parsing failure.</p>
   */
  resultCode?: "PARSING_FAILED" | "VPC_ENDPOINT_SETUP_FAILED" | string;

  /**
   * <p>For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.</p>
   */
  seed?: number;

  /**
   * <p>An app to upload or that has been uploaded.</p>
   */
  appUpload?: string;

  /**
   * <p>For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz test should perform.</p>
   */
  eventCount?: number;

  /**
   * <p>The number of minutes the job will execute before it times out.</p>
   */
  jobTimeoutMinutes?: number;

  /**
   * <p>The ARN of the device pool for the run.</p>
   */
  devicePoolArn?: string;

  /**
   * <p>Information about the locale that is used for the run.</p>
   */
  locale?: string;

  /**
   * <p>Information about the radio states for the run.</p>
   */
  radios?: _Radios;

  /**
   * <p>Information about the location that is used for the run.</p>
   */
  location?: _Location;

  /**
   * <p>Output <code>CustomerArtifactPaths</code> object for the test run.</p>
   */
  customerArtifactPaths?: _CustomerArtifactPaths;

  /**
   * <p>The Device Farm console URL for the recording of the run.</p>
   */
  webUrl?: string;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;

  /**
   * <p>The ARN of the YAML-formatted test specification for the run.</p>
   */
  testSpecArn?: string;

  /**
   * <p>The results of a device filter used to select the devices for a test run.</p>
   */
  deviceSelectionResult?: _DeviceSelectionResult;
}

export interface _UnmarshalledRun extends _Run {
  /**
   * <p>When the run was created.</p>
   */
  created?: Date;

  /**
   * <p>The run's start time.</p>
   */
  started?: Date;

  /**
   * <p>The run's stop time.</p>
   */
  stopped?: Date;

  /**
   * <p>The run's result counters.</p>
   */
  counters?: _UnmarshalledCounters;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the test run.</p>
   */
  deviceMinutes?: _UnmarshalledDeviceMinutes;

  /**
   * <p>The network profile being used for a test run.</p>
   */
  networkProfile?: _UnmarshalledNetworkProfile;

  /**
   * <p>Information about the radio states for the run.</p>
   */
  radios?: _UnmarshalledRadios;

  /**
   * <p>Information about the location that is used for the run.</p>
   */
  location?: _UnmarshalledLocation;

  /**
   * <p>Output <code>CustomerArtifactPaths</code> object for the test run.</p>
   */
  customerArtifactPaths?: _UnmarshalledCustomerArtifactPaths;

  /**
   * <p>The results of a device filter used to select the devices for a test run.</p>
   */
  deviceSelectionResult?: _UnmarshalledDeviceSelectionResult;
}
