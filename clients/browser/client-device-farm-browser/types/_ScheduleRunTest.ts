/**
 * <p>Represents test settings. This data structure is passed in as the "test" parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p>
 */
export interface _ScheduleRunTest {
  /**
   * <p>The test's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_NODE: The Appium Node.js type.</p> </li> <li> <p>APPIUM_RUBY: The Appium Ruby type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p> </li> <li> <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p> </li> <li> <p>APPIUM_WEB_RUBY: The Appium Ruby type for web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The Xcode test type.</p> </li> <li> <p>XCTEST_UI: The Xcode UI test type.</p> </li> </ul>
   */
  type:
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
   * <p>The ARN of the uploaded test that will be run.</p>
   */
  testPackageArn?: string;

  /**
   * <p>The ARN of the YAML-formatted test specification.</p>
   */
  testSpecArn?: string;

  /**
   * <p>The test's filter.</p>
   */
  filter?: string;

  /**
   * <p>The test's parameters, such as test framework parameters and fixture settings. Parameters are represented by name-value pairs of strings.</p> <p>For all tests:</p> <ul> <li> <p>app_performance_monitoring: Performance monitoring is enabled by default. Set this parameter to "false" to disable it.</p> </li> </ul> <p>For Calabash tests:</p> <ul> <li> <p>profile: A cucumber profile, for example, "my_profile_name".</p> </li> <li> <p>tags: You can limit execution to features or scenarios that have (or don't have) certain tags, for example, "@smoke" or "@smoke,~@wip".</p> </li> </ul> <p>For Appium tests (all types):</p> <ul> <li> <p>appium_version: The Appium version. Currently supported values are "1.6.5" (and higher), "latest", and "default".</p> <ul> <li> <p>“latest” will run the latest Appium version supported by Device Farm (1.9.1).</p> </li> <li> <p>For “default”, Device Farm will choose a compatible version of Appium for the device. The current behavior is to run 1.7.2 on Android devices and iOS 9 and earlier, 1.7.2 for iOS 10 and later.</p> </li> <li> <p>This behavior is subject to change.</p> </li> </ul> </li> </ul> <p>For Fuzz tests (Android only):</p> <ul> <li> <p>event_count: The number of events, between 1 and 10000, that the UI fuzz test should perform.</p> </li> <li> <p>throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should wait between events.</p> </li> <li> <p>seed: A seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.</p> </li> </ul> <p>For Explorer tests:</p> <ul> <li> <p>username: A username to use if the Explorer encounters a login form. If not supplied, no username will be inserted.</p> </li> <li> <p>password: A password to use if the Explorer encounters a login form. If not supplied, no password will be inserted.</p> </li> </ul> <p>For Instrumentation:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test case: "com.android.abc.Test1"</p> </li> <li> <p>Running a single test: "com.android.abc.Test1#smoke"</p> </li> <li> <p>Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"</p> </li> </ul> </li> </ul> <p>For XCTest and XCTestUI:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test class: "LoginTests"</p> </li> <li> <p>Running a multiple test classes: "LoginTests,SmokeTests"</p> </li> <li> <p>Running a single test: "LoginTests/testValid"</p> </li> <li> <p>Running multiple tests: "LoginTests/testValid,LoginTests/testInvalid"</p> </li> </ul> </li> </ul> <p>For UIAutomator:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test case: "com.android.abc.Test1"</p> </li> <li> <p>Running a single test: "com.android.abc.Test1#smoke"</p> </li> <li> <p>Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"</p> </li> </ul> </li> </ul>
   */
  parameters?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledScheduleRunTest extends _ScheduleRunTest {
  /**
   * <p>The test's parameters, such as test framework parameters and fixture settings. Parameters are represented by name-value pairs of strings.</p> <p>For all tests:</p> <ul> <li> <p>app_performance_monitoring: Performance monitoring is enabled by default. Set this parameter to "false" to disable it.</p> </li> </ul> <p>For Calabash tests:</p> <ul> <li> <p>profile: A cucumber profile, for example, "my_profile_name".</p> </li> <li> <p>tags: You can limit execution to features or scenarios that have (or don't have) certain tags, for example, "@smoke" or "@smoke,~@wip".</p> </li> </ul> <p>For Appium tests (all types):</p> <ul> <li> <p>appium_version: The Appium version. Currently supported values are "1.6.5" (and higher), "latest", and "default".</p> <ul> <li> <p>“latest” will run the latest Appium version supported by Device Farm (1.9.1).</p> </li> <li> <p>For “default”, Device Farm will choose a compatible version of Appium for the device. The current behavior is to run 1.7.2 on Android devices and iOS 9 and earlier, 1.7.2 for iOS 10 and later.</p> </li> <li> <p>This behavior is subject to change.</p> </li> </ul> </li> </ul> <p>For Fuzz tests (Android only):</p> <ul> <li> <p>event_count: The number of events, between 1 and 10000, that the UI fuzz test should perform.</p> </li> <li> <p>throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should wait between events.</p> </li> <li> <p>seed: A seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.</p> </li> </ul> <p>For Explorer tests:</p> <ul> <li> <p>username: A username to use if the Explorer encounters a login form. If not supplied, no username will be inserted.</p> </li> <li> <p>password: A password to use if the Explorer encounters a login form. If not supplied, no password will be inserted.</p> </li> </ul> <p>For Instrumentation:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test case: "com.android.abc.Test1"</p> </li> <li> <p>Running a single test: "com.android.abc.Test1#smoke"</p> </li> <li> <p>Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"</p> </li> </ul> </li> </ul> <p>For XCTest and XCTestUI:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test class: "LoginTests"</p> </li> <li> <p>Running a multiple test classes: "LoginTests,SmokeTests"</p> </li> <li> <p>Running a single test: "LoginTests/testValid"</p> </li> <li> <p>Running multiple tests: "LoginTests/testValid,LoginTests/testInvalid"</p> </li> </ul> </li> </ul> <p>For UIAutomator:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test case: "com.android.abc.Test1"</p> </li> <li> <p>Running a single test: "com.android.abc.Test1#smoke"</p> </li> <li> <p>Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"</p> </li> </ul> </li> </ul>
   */
  parameters?: { [key: string]: string };
}
