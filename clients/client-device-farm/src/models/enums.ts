// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DevicePlatform = {
  ANDROID: "ANDROID",
  IOS: "IOS",
} as const;
/**
 * @public
 */
export type DevicePlatform = (typeof DevicePlatform)[keyof typeof DevicePlatform];

/**
 * @public
 * @enum
 */
export const ArtifactType = {
  APPIUM_JAVA_OUTPUT: "APPIUM_JAVA_OUTPUT",
  APPIUM_JAVA_XML_OUTPUT: "APPIUM_JAVA_XML_OUTPUT",
  APPIUM_PYTHON_OUTPUT: "APPIUM_PYTHON_OUTPUT",
  APPIUM_PYTHON_XML_OUTPUT: "APPIUM_PYTHON_XML_OUTPUT",
  APPIUM_SERVER_OUTPUT: "APPIUM_SERVER_OUTPUT",
  APPLICATION_CRASH_REPORT: "APPLICATION_CRASH_REPORT",
  AUTOMATION_OUTPUT: "AUTOMATION_OUTPUT",
  CALABASH_JAVA_XML_OUTPUT: "CALABASH_JAVA_XML_OUTPUT",
  CALABASH_JSON_OUTPUT: "CALABASH_JSON_OUTPUT",
  CALABASH_PRETTY_OUTPUT: "CALABASH_PRETTY_OUTPUT",
  CALABASH_STANDARD_OUTPUT: "CALABASH_STANDARD_OUTPUT",
  CUSTOMER_ARTIFACT: "CUSTOMER_ARTIFACT",
  CUSTOMER_ARTIFACT_LOG: "CUSTOMER_ARTIFACT_LOG",
  DEVICE_LOG: "DEVICE_LOG",
  EXERCISER_MONKEY_OUTPUT: "EXERCISER_MONKEY_OUTPUT",
  EXPLORER_EVENT_LOG: "EXPLORER_EVENT_LOG",
  EXPLORER_SUMMARY_LOG: "EXPLORER_SUMMARY_LOG",
  INSTRUMENTATION_OUTPUT: "INSTRUMENTATION_OUTPUT",
  MESSAGE_LOG: "MESSAGE_LOG",
  RESULT_LOG: "RESULT_LOG",
  SCREENSHOT: "SCREENSHOT",
  SERVICE_LOG: "SERVICE_LOG",
  TESTSPEC_OUTPUT: "TESTSPEC_OUTPUT",
  UNKNOWN: "UNKNOWN",
  VIDEO: "VIDEO",
  VIDEO_LOG: "VIDEO_LOG",
  WEBKIT_LOG: "WEBKIT_LOG",
  XCTEST_LOG: "XCTEST_LOG",
} as const;
/**
 * @public
 */
export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType];

/**
 * @public
 * @enum
 */
export const ArtifactCategory = {
  FILE: "FILE",
  LOG: "LOG",
  SCREENSHOT: "SCREENSHOT",
} as const;
/**
 * @public
 */
export type ArtifactCategory = (typeof ArtifactCategory)[keyof typeof ArtifactCategory];

/**
 * @public
 * @enum
 */
export const BillingMethod = {
  METERED: "METERED",
  UNMETERED: "UNMETERED",
} as const;
/**
 * @public
 */
export type BillingMethod = (typeof BillingMethod)[keyof typeof BillingMethod];

/**
 * @public
 * @enum
 */
export const DeviceAttribute = {
  APPIUM_VERSION: "APPIUM_VERSION",
  ARN: "ARN",
  AVAILABILITY: "AVAILABILITY",
  FLEET_TYPE: "FLEET_TYPE",
  FORM_FACTOR: "FORM_FACTOR",
  INSTANCE_ARN: "INSTANCE_ARN",
  INSTANCE_LABELS: "INSTANCE_LABELS",
  MANUFACTURER: "MANUFACTURER",
  MODEL: "MODEL",
  OS_VERSION: "OS_VERSION",
  PLATFORM: "PLATFORM",
  REMOTE_ACCESS_ENABLED: "REMOTE_ACCESS_ENABLED",
  REMOTE_DEBUG_ENABLED: "REMOTE_DEBUG_ENABLED",
} as const;
/**
 * @public
 */
export type DeviceAttribute = (typeof DeviceAttribute)[keyof typeof DeviceAttribute];

/**
 * @public
 * @enum
 */
export const RuleOperator = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUALS: "GREATER_THAN_OR_EQUALS",
  IN: "IN",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUALS: "LESS_THAN_OR_EQUALS",
  NOT_IN: "NOT_IN",
} as const;
/**
 * @public
 */
export type RuleOperator = (typeof RuleOperator)[keyof typeof RuleOperator];

/**
 * @public
 * @enum
 */
export const DevicePoolType = {
  CURATED: "CURATED",
  PRIVATE: "PRIVATE",
} as const;
/**
 * @public
 */
export type DevicePoolType = (typeof DevicePoolType)[keyof typeof DevicePoolType];

/**
 * @public
 * @enum
 */
export const NetworkProfileType = {
  CURATED: "CURATED",
  PRIVATE: "PRIVATE",
} as const;
/**
 * @public
 */
export type NetworkProfileType = (typeof NetworkProfileType)[keyof typeof NetworkProfileType];

/**
 * @public
 * @enum
 */
export const InteractionMode = {
  INTERACTIVE: "INTERACTIVE",
  NO_VIDEO: "NO_VIDEO",
  VIDEO_ONLY: "VIDEO_ONLY",
} as const;
/**
 * @public
 */
export type InteractionMode = (typeof InteractionMode)[keyof typeof InteractionMode];

/**
 * @public
 * @enum
 */
export const DeviceAvailability = {
  AVAILABLE: "AVAILABLE",
  BUSY: "BUSY",
  HIGHLY_AVAILABLE: "HIGHLY_AVAILABLE",
  TEMPORARY_NOT_AVAILABLE: "TEMPORARY_NOT_AVAILABLE",
} as const;
/**
 * @public
 */
export type DeviceAvailability = (typeof DeviceAvailability)[keyof typeof DeviceAvailability];

/**
 * @public
 * @enum
 */
export const DeviceFormFactor = {
  PHONE: "PHONE",
  TABLET: "TABLET",
} as const;
/**
 * @public
 */
export type DeviceFormFactor = (typeof DeviceFormFactor)[keyof typeof DeviceFormFactor];

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  AVAILABLE: "AVAILABLE",
  IN_USE: "IN_USE",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PREPARING: "PREPARING",
} as const;
/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * @public
 * @enum
 */
export const ExecutionResult = {
  ERRORED: "ERRORED",
  FAILED: "FAILED",
  PASSED: "PASSED",
  PENDING: "PENDING",
  SKIPPED: "SKIPPED",
  STOPPED: "STOPPED",
  WARNED: "WARNED",
} as const;
/**
 * @public
 */
export type ExecutionResult = (typeof ExecutionResult)[keyof typeof ExecutionResult];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
  PENDING_CONCURRNECY: "PENDING_CONCURRENCY",
  PENDING_DEVICE: "PENDING_DEVICE",
  PREPARING: "PREPARING",
  PROCESSING: "PROCESSING",
  RUNNING: "RUNNING",
  SCHEDULING: "SCHEDULING",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const UploadType = {
  ANDROID_APP: "ANDROID_APP",
  APPIUM_JAVA_JUNIT_TEST_PACKAGE: "APPIUM_JAVA_JUNIT_TEST_PACKAGE",
  APPIUM_JAVA_JUNIT_TEST_SPEC: "APPIUM_JAVA_JUNIT_TEST_SPEC",
  APPIUM_JAVA_TESTNG_TEST_PACKAGE: "APPIUM_JAVA_TESTNG_TEST_PACKAGE",
  APPIUM_JAVA_TESTNG_TEST_SPEC: "APPIUM_JAVA_TESTNG_TEST_SPEC",
  APPIUM_NODE_TEST_PACKAGE: "APPIUM_NODE_TEST_PACKAGE",
  APPIUM_NODE_TEST_SPEC: "APPIUM_NODE_TEST_SPEC",
  APPIUM_PYTHON_TEST_PACKAGE: "APPIUM_PYTHON_TEST_PACKAGE",
  APPIUM_PYTHON_TEST_SPEC: "APPIUM_PYTHON_TEST_SPEC",
  APPIUM_RUBY_TEST_PACKAGE: "APPIUM_RUBY_TEST_PACKAGE",
  APPIUM_RUBY_TEST_SPEC: "APPIUM_RUBY_TEST_SPEC",
  APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE",
  APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC",
  APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE",
  APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC",
  APPIUM_WEB_NODE_TEST_PACKAGE: "APPIUM_WEB_NODE_TEST_PACKAGE",
  APPIUM_WEB_NODE_TEST_SPEC: "APPIUM_WEB_NODE_TEST_SPEC",
  APPIUM_WEB_PYTHON_TEST_PACKAGE: "APPIUM_WEB_PYTHON_TEST_PACKAGE",
  APPIUM_WEB_PYTHON_TEST_SPEC: "APPIUM_WEB_PYTHON_TEST_SPEC",
  APPIUM_WEB_RUBY_TEST_PACKAGE: "APPIUM_WEB_RUBY_TEST_PACKAGE",
  APPIUM_WEB_RUBY_TEST_SPEC: "APPIUM_WEB_RUBY_TEST_SPEC",
  CALABASH_TEST_PACKAGE: "CALABASH_TEST_PACKAGE",
  EXTERNAL_DATA: "EXTERNAL_DATA",
  INSTRUMENTATION_TEST_PACKAGE: "INSTRUMENTATION_TEST_PACKAGE",
  INSTRUMENTATION_TEST_SPEC: "INSTRUMENTATION_TEST_SPEC",
  IOS_APP: "IOS_APP",
  UIAUTOMATION_TEST_PACKAGE: "UIAUTOMATION_TEST_PACKAGE",
  UIAUTOMATOR_TEST_PACKAGE: "UIAUTOMATOR_TEST_PACKAGE",
  WEB_APP: "WEB_APP",
  XCTEST_TEST_PACKAGE: "XCTEST_TEST_PACKAGE",
  XCTEST_UI_TEST_PACKAGE: "XCTEST_UI_TEST_PACKAGE",
  XCTEST_UI_TEST_SPEC: "XCTEST_UI_TEST_SPEC",
} as const;
/**
 * @public
 */
export type UploadType = (typeof UploadType)[keyof typeof UploadType];

/**
 * @public
 * @enum
 */
export const UploadCategory = {
  CURATED: "CURATED",
  PRIVATE: "PRIVATE",
} as const;
/**
 * @public
 */
export type UploadCategory = (typeof UploadCategory)[keyof typeof UploadCategory];

/**
 * @public
 * @enum
 */
export const UploadStatus = {
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus];

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  USD: "USD",
} as const;
/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * @public
 * @enum
 */
export const TestType = {
  APPIUM_JAVA_JUNIT: "APPIUM_JAVA_JUNIT",
  APPIUM_JAVA_TESTNG: "APPIUM_JAVA_TESTNG",
  APPIUM_NODE: "APPIUM_NODE",
  APPIUM_PYTHON: "APPIUM_PYTHON",
  APPIUM_RUBY: "APPIUM_RUBY",
  APPIUM_WEB_JAVA_JUNIT: "APPIUM_WEB_JAVA_JUNIT",
  APPIUM_WEB_JAVA_TESTNG: "APPIUM_WEB_JAVA_TESTNG",
  APPIUM_WEB_NODE: "APPIUM_WEB_NODE",
  APPIUM_WEB_PYTHON: "APPIUM_WEB_PYTHON",
  APPIUM_WEB_RUBY: "APPIUM_WEB_RUBY",
  BUILTIN_FUZZ: "BUILTIN_FUZZ",
  INSTRUMENTATION: "INSTRUMENTATION",
  XCTEST: "XCTEST",
  XCTEST_UI: "XCTEST_UI",
} as const;
/**
 * @public
 */
export type TestType = (typeof TestType)[keyof typeof TestType];

/**
 * @public
 * @enum
 */
export const RecurringChargeFrequency = {
  MONTHLY: "MONTHLY",
} as const;
/**
 * @public
 */
export type RecurringChargeFrequency = (typeof RecurringChargeFrequency)[keyof typeof RecurringChargeFrequency];

/**
 * @public
 * @enum
 */
export const OfferingType = {
  RECURRING: "RECURRING",
} as const;
/**
 * @public
 */
export type OfferingType = (typeof OfferingType)[keyof typeof OfferingType];

/**
 * @public
 * @enum
 */
export const OfferingTransactionType = {
  PURCHASE: "PURCHASE",
  RENEW: "RENEW",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type OfferingTransactionType = (typeof OfferingTransactionType)[keyof typeof OfferingTransactionType];

/**
 * @public
 * @enum
 */
export const DeviceFilterAttribute = {
  ARN: "ARN",
  AVAILABILITY: "AVAILABILITY",
  FLEET_TYPE: "FLEET_TYPE",
  FORM_FACTOR: "FORM_FACTOR",
  INSTANCE_ARN: "INSTANCE_ARN",
  INSTANCE_LABELS: "INSTANCE_LABELS",
  MANUFACTURER: "MANUFACTURER",
  MODEL: "MODEL",
  OS_VERSION: "OS_VERSION",
  PLATFORM: "PLATFORM",
  REMOTE_ACCESS_ENABLED: "REMOTE_ACCESS_ENABLED",
  REMOTE_DEBUG_ENABLED: "REMOTE_DEBUG_ENABLED",
} as const;
/**
 * @public
 */
export type DeviceFilterAttribute = (typeof DeviceFilterAttribute)[keyof typeof DeviceFilterAttribute];

/**
 * @public
 * @enum
 */
export const ExecutionResultCode = {
  PARSING_FAILED: "PARSING_FAILED",
  VPC_ENDPOINT_SETUP_FAILED: "VPC_ENDPOINT_SETUP_FAILED",
} as const;
/**
 * @public
 */
export type ExecutionResultCode = (typeof ExecutionResultCode)[keyof typeof ExecutionResultCode];

/**
 * @public
 * @enum
 */
export const TestGridSessionStatus = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  ERRORED: "ERRORED",
} as const;
/**
 * @public
 */
export type TestGridSessionStatus = (typeof TestGridSessionStatus)[keyof typeof TestGridSessionStatus];

/**
 * @public
 * @enum
 */
export const SampleType = {
  CPU: "CPU",
  MEMORY: "MEMORY",
  NATIVE_AVG_DRAWTIME: "NATIVE_AVG_DRAWTIME",
  NATIVE_FPS: "NATIVE_FPS",
  NATIVE_FRAMES: "NATIVE_FRAMES",
  NATIVE_MAX_DRAWTIME: "NATIVE_MAX_DRAWTIME",
  NATIVE_MIN_DRAWTIME: "NATIVE_MIN_DRAWTIME",
  OPENGL_AVG_DRAWTIME: "OPENGL_AVG_DRAWTIME",
  OPENGL_FPS: "OPENGL_FPS",
  OPENGL_FRAMES: "OPENGL_FRAMES",
  OPENGL_MAX_DRAWTIME: "OPENGL_MAX_DRAWTIME",
  OPENGL_MIN_DRAWTIME: "OPENGL_MIN_DRAWTIME",
  RX: "RX",
  RX_RATE: "RX_RATE",
  THREADS: "THREADS",
  TX: "TX",
  TX_RATE: "TX_RATE",
} as const;
/**
 * @public
 */
export type SampleType = (typeof SampleType)[keyof typeof SampleType];

/**
 * @public
 * @enum
 */
export const TestGridSessionArtifactCategory = {
  LOG: "LOG",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type TestGridSessionArtifactCategory =
  (typeof TestGridSessionArtifactCategory)[keyof typeof TestGridSessionArtifactCategory];

/**
 * @public
 * @enum
 */
export const TestGridSessionArtifactType = {
  SELENIUM_LOG: "SELENIUM_LOG",
  UNKNOWN: "UNKNOWN",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type TestGridSessionArtifactType =
  (typeof TestGridSessionArtifactType)[keyof typeof TestGridSessionArtifactType];
