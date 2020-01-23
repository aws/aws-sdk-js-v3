import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum ArtifactCategory {
  FILE = "FILE",
  LOG = "LOG",
  SCREENSHOT = "SCREENSHOT"
}

export enum ArtifactType {
  APPIUM_JAVA_OUTPUT = "APPIUM_JAVA_OUTPUT",
  APPIUM_JAVA_XML_OUTPUT = "APPIUM_JAVA_XML_OUTPUT",
  APPIUM_PYTHON_OUTPUT = "APPIUM_PYTHON_OUTPUT",
  APPIUM_PYTHON_XML_OUTPUT = "APPIUM_PYTHON_XML_OUTPUT",
  APPIUM_SERVER_OUTPUT = "APPIUM_SERVER_OUTPUT",
  APPLICATION_CRASH_REPORT = "APPLICATION_CRASH_REPORT",
  AUTOMATION_OUTPUT = "AUTOMATION_OUTPUT",
  CALABASH_JAVA_XML_OUTPUT = "CALABASH_JAVA_XML_OUTPUT",
  CALABASH_JSON_OUTPUT = "CALABASH_JSON_OUTPUT",
  CALABASH_PRETTY_OUTPUT = "CALABASH_PRETTY_OUTPUT",
  CALABASH_STANDARD_OUTPUT = "CALABASH_STANDARD_OUTPUT",
  CUSTOMER_ARTIFACT = "CUSTOMER_ARTIFACT",
  CUSTOMER_ARTIFACT_LOG = "CUSTOMER_ARTIFACT_LOG",
  DEVICE_LOG = "DEVICE_LOG",
  EXERCISER_MONKEY_OUTPUT = "EXERCISER_MONKEY_OUTPUT",
  EXPLORER_EVENT_LOG = "EXPLORER_EVENT_LOG",
  EXPLORER_SUMMARY_LOG = "EXPLORER_SUMMARY_LOG",
  INSTRUMENTATION_OUTPUT = "INSTRUMENTATION_OUTPUT",
  MESSAGE_LOG = "MESSAGE_LOG",
  RESULT_LOG = "RESULT_LOG",
  SCREENSHOT = "SCREENSHOT",
  SERVICE_LOG = "SERVICE_LOG",
  TESTSPEC_OUTPUT = "TESTSPEC_OUTPUT",
  UNKNOWN = "UNKNOWN",
  VIDEO = "VIDEO",
  VIDEO_LOG = "VIDEO_LOG",
  WEBKIT_LOG = "WEBKIT_LOG",
  XCTEST_LOG = "XCTEST_LOG"
}

export enum BillingMethod {
  METERED = "METERED",
  UNMETERED = "UNMETERED"
}

export enum CurrencyCode {
  USD = "USD"
}

export enum DeviceAttribute {
  APPIUM_VERSION = "APPIUM_VERSION",
  ARN = "ARN",
  AVAILABILITY = "AVAILABILITY",
  FLEET_TYPE = "FLEET_TYPE",
  FORM_FACTOR = "FORM_FACTOR",
  INSTANCE_ARN = "INSTANCE_ARN",
  INSTANCE_LABELS = "INSTANCE_LABELS",
  MANUFACTURER = "MANUFACTURER",
  MODEL = "MODEL",
  OS_VERSION = "OS_VERSION",
  PLATFORM = "PLATFORM",
  REMOTE_ACCESS_ENABLED = "REMOTE_ACCESS_ENABLED",
  REMOTE_DEBUG_ENABLED = "REMOTE_DEBUG_ENABLED"
}

export enum DeviceAvailability {
  AVAILABLE = "AVAILABLE",
  BUSY = "BUSY",
  HIGHLY_AVAILABLE = "HIGHLY_AVAILABLE",
  TEMPORARY_NOT_AVAILABLE = "TEMPORARY_NOT_AVAILABLE"
}

export enum DeviceFilterAttribute {
  ARN = "ARN",
  AVAILABILITY = "AVAILABILITY",
  FLEET_TYPE = "FLEET_TYPE",
  FORM_FACTOR = "FORM_FACTOR",
  INSTANCE_ARN = "INSTANCE_ARN",
  INSTANCE_LABELS = "INSTANCE_LABELS",
  MANUFACTURER = "MANUFACTURER",
  MODEL = "MODEL",
  OS_VERSION = "OS_VERSION",
  PLATFORM = "PLATFORM",
  REMOTE_ACCESS_ENABLED = "REMOTE_ACCESS_ENABLED",
  REMOTE_DEBUG_ENABLED = "REMOTE_DEBUG_ENABLED"
}

export enum DeviceFormFactor {
  PHONE = "PHONE",
  TABLET = "TABLET"
}

export enum DevicePlatform {
  ANDROID = "ANDROID",
  IOS = "IOS"
}

export enum DevicePoolType {
  CURATED = "CURATED",
  PRIVATE = "PRIVATE"
}

export enum ExecutionResult {
  ERRORED = "ERRORED",
  FAILED = "FAILED",
  PASSED = "PASSED",
  PENDING = "PENDING",
  SKIPPED = "SKIPPED",
  STOPPED = "STOPPED",
  WARNED = "WARNED"
}

export enum ExecutionResultCode {
  PARSING_FAILED = "PARSING_FAILED",
  VPC_ENDPOINT_SETUP_FAILED = "VPC_ENDPOINT_SETUP_FAILED"
}

export enum ExecutionStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  PENDING_CONCURRNECY = "PENDING_CONCURRENCY",
  PENDING_DEVICE = "PENDING_DEVICE",
  PREPARING = "PREPARING",
  PROCESSING = "PROCESSING",
  RUNNING = "RUNNING",
  SCHEDULING = "SCHEDULING",
  STOPPING = "STOPPING"
}

export enum InstanceStatus {
  AVAILABLE = "AVAILABLE",
  IN_USE = "IN_USE",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PREPARING = "PREPARING"
}

export enum InteractionMode {
  INTERACTIVE = "INTERACTIVE",
  NO_VIDEO = "NO_VIDEO",
  VIDEO_ONLY = "VIDEO_ONLY"
}

export enum NetworkProfileType {
  CURATED = "CURATED",
  PRIVATE = "PRIVATE"
}

export enum OfferingTransactionType {
  PURCHASE = "PURCHASE",
  RENEW = "RENEW",
  SYSTEM = "SYSTEM"
}

export enum OfferingType {
  RECURRING = "RECURRING"
}

export enum RecurringChargeFrequency {
  MONTHLY = "MONTHLY"
}

export enum RuleOperator {
  CONTAINS = "CONTAINS",
  EQUALS = "EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUALS = "GREATER_THAN_OR_EQUALS",
  IN = "IN",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUALS = "LESS_THAN_OR_EQUALS",
  NOT_IN = "NOT_IN"
}

export enum SampleType {
  CPU = "CPU",
  MEMORY = "MEMORY",
  NATIVE_AVG_DRAWTIME = "NATIVE_AVG_DRAWTIME",
  NATIVE_FPS = "NATIVE_FPS",
  NATIVE_FRAMES = "NATIVE_FRAMES",
  NATIVE_MAX_DRAWTIME = "NATIVE_MAX_DRAWTIME",
  NATIVE_MIN_DRAWTIME = "NATIVE_MIN_DRAWTIME",
  OPENGL_AVG_DRAWTIME = "OPENGL_AVG_DRAWTIME",
  OPENGL_FPS = "OPENGL_FPS",
  OPENGL_FRAMES = "OPENGL_FRAMES",
  OPENGL_MAX_DRAWTIME = "OPENGL_MAX_DRAWTIME",
  OPENGL_MIN_DRAWTIME = "OPENGL_MIN_DRAWTIME",
  RX = "RX",
  RX_RATE = "RX_RATE",
  THREADS = "THREADS",
  TX = "TX",
  TX_RATE = "TX_RATE"
}

export enum TestType {
  APPIUM_JAVA_JUNIT = "APPIUM_JAVA_JUNIT",
  APPIUM_JAVA_TESTNG = "APPIUM_JAVA_TESTNG",
  APPIUM_NODE = "APPIUM_NODE",
  APPIUM_PYTHON = "APPIUM_PYTHON",
  APPIUM_RUBY = "APPIUM_RUBY",
  APPIUM_WEB_JAVA_JUNIT = "APPIUM_WEB_JAVA_JUNIT",
  APPIUM_WEB_JAVA_TESTNG = "APPIUM_WEB_JAVA_TESTNG",
  APPIUM_WEB_NODE = "APPIUM_WEB_NODE",
  APPIUM_WEB_PYTHON = "APPIUM_WEB_PYTHON",
  APPIUM_WEB_RUBY = "APPIUM_WEB_RUBY",
  BUILTIN_EXPLORER = "BUILTIN_EXPLORER",
  BUILTIN_FUZZ = "BUILTIN_FUZZ",
  CALABASH = "CALABASH",
  INSTRUMENTATION = "INSTRUMENTATION",
  REMOTE_ACCESS_RECORD = "REMOTE_ACCESS_RECORD",
  REMOTE_ACCESS_REPLAY = "REMOTE_ACCESS_REPLAY",
  UIAUTOMATION = "UIAUTOMATION",
  UIAUTOMATOR = "UIAUTOMATOR",
  WEB_PERFORMANCE_PROFILE = "WEB_PERFORMANCE_PROFILE",
  XCTEST = "XCTEST",
  XCTEST_UI = "XCTEST_UI"
}

export enum UploadCategory {
  CURATED = "CURATED",
  PRIVATE = "PRIVATE"
}

export enum UploadStatus {
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  PROCESSING = "PROCESSING",
  SUCCEEDED = "SUCCEEDED"
}

export enum UploadType {
  ANDROID_APP = "ANDROID_APP",
  APPIUM_JAVA_JUNIT_TEST_PACKAGE = "APPIUM_JAVA_JUNIT_TEST_PACKAGE",
  APPIUM_JAVA_JUNIT_TEST_SPEC = "APPIUM_JAVA_JUNIT_TEST_SPEC",
  APPIUM_JAVA_TESTNG_TEST_PACKAGE = "APPIUM_JAVA_TESTNG_TEST_PACKAGE",
  APPIUM_JAVA_TESTNG_TEST_SPEC = "APPIUM_JAVA_TESTNG_TEST_SPEC",
  APPIUM_NODE_TEST_PACKAGE = "APPIUM_NODE_TEST_PACKAGE",
  APPIUM_NODE_TEST_SPEC = "APPIUM_NODE_TEST_SPEC",
  APPIUM_PYTHON_TEST_PACKAGE = "APPIUM_PYTHON_TEST_PACKAGE",
  APPIUM_PYTHON_TEST_SPEC = "APPIUM_PYTHON_TEST_SPEC",
  APPIUM_RUBY_TEST_PACKAGE = "APPIUM_RUBY_TEST_PACKAGE",
  APPIUM_RUBY_TEST_SPEC = "APPIUM_RUBY_TEST_SPEC",
  APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE = "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE",
  APPIUM_WEB_JAVA_JUNIT_TEST_SPEC = "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC",
  APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE = "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE",
  APPIUM_WEB_JAVA_TESTNG_TEST_SPEC = "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC",
  APPIUM_WEB_NODE_TEST_PACKAGE = "APPIUM_WEB_NODE_TEST_PACKAGE",
  APPIUM_WEB_NODE_TEST_SPEC = "APPIUM_WEB_NODE_TEST_SPEC",
  APPIUM_WEB_PYTHON_TEST_PACKAGE = "APPIUM_WEB_PYTHON_TEST_PACKAGE",
  APPIUM_WEB_PYTHON_TEST_SPEC = "APPIUM_WEB_PYTHON_TEST_SPEC",
  APPIUM_WEB_RUBY_TEST_PACKAGE = "APPIUM_WEB_RUBY_TEST_PACKAGE",
  APPIUM_WEB_RUBY_TEST_SPEC = "APPIUM_WEB_RUBY_TEST_SPEC",
  CALABASH_TEST_PACKAGE = "CALABASH_TEST_PACKAGE",
  EXTERNAL_DATA = "EXTERNAL_DATA",
  INSTRUMENTATION_TEST_PACKAGE = "INSTRUMENTATION_TEST_PACKAGE",
  INSTRUMENTATION_TEST_SPEC = "INSTRUMENTATION_TEST_SPEC",
  IOS_APP = "IOS_APP",
  UIAUTOMATION_TEST_PACKAGE = "UIAUTOMATION_TEST_PACKAGE",
  UIAUTOMATOR_TEST_PACKAGE = "UIAUTOMATOR_TEST_PACKAGE",
  WEB_APP = "WEB_APP",
  XCTEST_TEST_PACKAGE = "XCTEST_TEST_PACKAGE",
  XCTEST_UI_TEST_PACKAGE = "XCTEST_UI_TEST_PACKAGE",
  XCTEST_UI_TEST_SPEC = "XCTEST_UI_TEST_SPEC"
}

/**
 *
 *         <p>A container for account-level settings within AWS Device Farm.</p>
 *
 */
export interface AccountSettings {
  __type?: "AccountSettings";
  /**
   *
   *         <p>The AWS account number specified in the <code>AccountSettings</code> container.</p>
   *
   */
  awsAccountNumber?: string;

  /**
   *
   *         <p>The default number of minutes (at the account level) a test run will execute before it times out. The
   *             default value is 150 minutes.</p>
   *
   */
  defaultJobTimeoutMinutes?: number;

  /**
   *
   *         <p>The maximum number of minutes a test run will execute before it times out.</p>
   *
   */
  maxJobTimeoutMinutes?: number;

  /**
   *
   *         <p>The maximum number of device slots that the AWS account can purchase. Each maximum is expressed as an
   *                 <code>offering-id:number</code> pair, where the <code>offering-id</code> represents one of the IDs
   *             returned by the <code>ListOfferings</code> command.</p>
   *
   */
  maxSlots?: { [key: string]: number };

  /**
   *
   *         <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public
   *             devices, Device Farm always signs your apps again and this parameter has no effect.</p>
   *         <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   *
   */
  skipAppResign?: boolean;

  /**
   *
   *         <p>Information about an AWS account's usage of free trial device minutes.</p>
   *
   */
  trialMinutes?: TrialMinutes;

  /**
   *
   *         <p>Returns the unmetered devices you have purchased or want to purchase.</p>
   *
   */
  unmeteredDevices?: { [key: string]: number };

  /**
   *
   *         <p>Returns the unmetered remote access devices you have purchased or want to purchase.</p>
   *
   */
  unmeteredRemoteAccessDevices?: { [key: string]: number };
}

export namespace AccountSettings {
  export function isa(o: any): o is AccountSettings {
    return _smithy.isa(o, "AccountSettings");
  }
}

/**
 *
 *         <p>An invalid argument was specified.</p>
 *
 */
export interface ArgumentException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ArgumentException";
  name: "ArgumentException";
  $fault: "client";
  /**
   *
   *         <p>Any additional information about the exception.</p>
   *
   */
  message?: string;
}

export namespace ArgumentException {
  export function isa(o: any): o is ArgumentException {
    return _smithy.isa(o, "ArgumentException");
  }
}

/**
 *
 *         <p>Represents the output of a test. Examples of artifacts include logs and screenshots.</p>
 *
 */
export interface Artifact {
  __type?: "Artifact";
  /**
   *
   *         <p>The artifact's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The artifact's file extension.</p>
   *
   */
  extension?: string;

  /**
   *
   *         <p>The artifact's name.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The artifact's type.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>UNKNOWN: An unknown type.</p>
   *             </li>
   *             <li>
   *                 <p>SCREENSHOT: The screenshot type.</p>
   *             </li>
   *             <li>
   *                 <p>DEVICE_LOG: The device log type.</p>
   *             </li>
   *             <li>
   *                 <p>MESSAGE_LOG: The message log type.</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_LOG: The video log type.</p>
   *             </li>
   *             <li>
   *                 <p>RESULT_LOG: The result log type.</p>
   *             </li>
   *             <li>
   *                 <p>SERVICE_LOG: The service log type.</p>
   *             </li>
   *             <li>
   *                 <p>WEBKIT_LOG: The web kit log type.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_OUTPUT: The instrumentation type.</p>
   *             </li>
   *             <li>
   *                 <p>EXERCISER_MONKEY_OUTPUT: For Android, the artifact (log) generated by an Android fuzz
   *                     test.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_JSON_OUTPUT: The Calabash JSON output type.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_PRETTY_OUTPUT: The Calabash pretty output type.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_STANDARD_OUTPUT: The Calabash standard output type.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_JAVA_XML_OUTPUT: The Calabash Java XML output type.</p>
   *             </li>
   *             <li>
   *                 <p>AUTOMATION_OUTPUT: The automation output type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_SERVER_OUTPUT: The Appium server output type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_OUTPUT: The Appium Java output type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_XML_OUTPUT: The Appium Java XML output type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_OUTPUT: The Appium Python output type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_XML_OUTPUT: The Appium Python XML output type.</p>
   *             </li>
   *             <li>
   *                 <p>EXPLORER_EVENT_LOG: The Explorer event log output type.</p>
   *             </li>
   *             <li>
   *                 <p>EXPLORER_SUMMARY_LOG: The Explorer summary log output type.</p>
   *             </li>
   *             <li>
   *                 <p>APPLICATION_CRASH_REPORT: The application crash report output type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_LOG: The Xcode test output type.</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO: The Video output type.</p>
   *             </li>
   *             <li>
   *                 <p>CUSTOMER_ARTIFACT:The Customer Artifact output type.</p>
   *             </li>
   *             <li>
   *                 <p>CUSTOMER_ARTIFACT_LOG: The Customer Artifact Log output type.</p>
   *             </li>
   *             <li>
   *                 <p>TESTSPEC_OUTPUT: The Test Spec Output type.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: ArtifactType | string;

  /**
   *
   *         <p>The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the
   *             artifact's file.</p>
   *
   */
  url?: string;
}

export namespace Artifact {
  export function isa(o: any): o is Artifact {
    return _smithy.isa(o, "Artifact");
  }
}

/**
 *
 *         <p>Represents the amount of CPU that an app is using on a physical device.</p>
 *         <p>Note that this does not represent system-wide CPU usage.</p>
 *
 */
export interface CPU {
  __type?: "CPU";
  /**
   *
   *         <p>The CPU's architecture, for example x86 or ARM.</p>
   *
   */
  architecture?: string;

  /**
   *
   *         <p>The clock speed of the device's CPU, expressed in hertz (Hz). For example, a 1.2 GHz CPU is expressed
   *             as 1200000000.</p>
   *
   */
  clock?: number;

  /**
   *
   *
   *         <p>The CPU's frequency.</p>
   *
   */
  frequency?: string;
}

export namespace CPU {
  export function isa(o: any): o is CPU {
    return _smithy.isa(o, "CPU");
  }
}

/**
 *
 *         <p>Represents entity counters.</p>
 *
 */
export interface Counters {
  __type?: "Counters";
  /**
   *
   *         <p>The number of errored entities.</p>
   *
   */
  errored?: number;

  /**
   *
   *         <p>The number of failed entities.</p>
   *
   */
  failed?: number;

  /**
   *
   *         <p>The number of passed entities.</p>
   *
   */
  passed?: number;

  /**
   *
   *         <p>The number of skipped entities.</p>
   *
   */
  skipped?: number;

  /**
   *
   *         <p>The number of stopped entities.</p>
   *
   */
  stopped?: number;

  /**
   *
   *         <p>The total number of entities.</p>
   *
   */
  total?: number;

  /**
   *
   *         <p>The number of warned entities.</p>
   *
   */
  warned?: number;
}

export namespace Counters {
  export function isa(o: any): o is Counters {
    return _smithy.isa(o, "Counters");
  }
}

/**
 *
 *         <p>Represents a request to the create device pool operation.</p>
 *
 */
export interface CreateDevicePoolRequest {
  __type?: "CreateDevicePoolRequest";
  /**
   *
   *         <p>The device pool's description.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are
   *             available and that meet the criteria that you assign for the <code>rules</code> parameter. Depending on how
   *             many devices meet these constraints, your device pool might contain fewer devices than the value for this
   *             parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur by running
   *             tests.</p>
   *
   */
  maxDevices?: number;

  /**
   *
   *         <p>The device pool's name.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *         <p>The ARN of the project for the device pool.</p>
   *
   */
  projectArn: string | undefined;

  /**
   *
   *         <p>The device pool's rules.</p>
   *
   */
  rules: Array<Rule> | undefined;
}

export namespace CreateDevicePoolRequest {
  export function isa(o: any): o is CreateDevicePoolRequest {
    return _smithy.isa(o, "CreateDevicePoolRequest");
  }
}

/**
 *
 *         <p>Represents the result of a create device pool request.</p>
 *
 */
export interface CreateDevicePoolResult extends $MetadataBearer {
  __type?: "CreateDevicePoolResult";
  /**
   *
   *         <p>The newly created device pool.</p>
   *
   */
  devicePool?: DevicePool;
}

export namespace CreateDevicePoolResult {
  export function isa(o: any): o is CreateDevicePoolResult {
    return _smithy.isa(o, "CreateDevicePoolResult");
  }
}

export interface CreateInstanceProfileRequest {
  __type?: "CreateInstanceProfileRequest";
  /**
   *
   *         <p>The description of your instance profile.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>An array of strings specifying the list of app packages that should not be cleaned up from the device
   *             after a test run is over.</p>
   *         <p>The list of packages is only considered if you set <code>packageCleanup</code> to
   *             <code>true</code>.</p>
   *
   */
  excludeAppPackagesFromCleanup?: Array<string>;

  /**
   *
   *         <p>The name of your instance profile.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *         <p>When set to <code>true</code>, Device Farm will remove app packages after a test run. The default value is
   *                 <code>false</code> for private devices.</p>
   *
   */
  packageCleanup?: boolean;

  /**
   *
   *         <p>When set to <code>true</code>, Device Farm will reboot the instance after a test run. The default value is
   *                 <code>true</code>.</p>
   *
   */
  rebootAfterUse?: boolean;
}

export namespace CreateInstanceProfileRequest {
  export function isa(o: any): o is CreateInstanceProfileRequest {
    return _smithy.isa(o, "CreateInstanceProfileRequest");
  }
}

export interface CreateInstanceProfileResult extends $MetadataBearer {
  __type?: "CreateInstanceProfileResult";
  /**
   *
   *         <p>An object containing information about your instance profile.</p>
   *
   */
  instanceProfile?: InstanceProfile;
}

export namespace CreateInstanceProfileResult {
  export function isa(o: any): o is CreateInstanceProfileResult {
    return _smithy.isa(o, "CreateInstanceProfileResult");
  }
}

export interface CreateNetworkProfileRequest {
  __type?: "CreateNetworkProfileRequest";
  /**
   *
   *         <p>The description of the network profile.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>
   *
   */
  downlinkBandwidthBits?: number;

  /**
   *
   *         <p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  downlinkDelayMs?: number;

  /**
   *
   *         <p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  downlinkJitterMs?: number;

  /**
   *
   *         <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   *
   */
  downlinkLossPercent?: number;

  /**
   *
   *         <p>The name you wish to specify for the new network profile.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project for which you want to create a network profile.</p>
   *
   */
  projectArn: string | undefined;

  /**
   *
   *         <p>The type of network profile you wish to create. Valid values are listed below.</p>
   *
   */
  type?: NetworkProfileType | string;

  /**
   *
   *         <p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>
   *
   */
  uplinkBandwidthBits?: number;

  /**
   *
   *         <p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  uplinkDelayMs?: number;

  /**
   *
   *         <p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  uplinkJitterMs?: number;

  /**
   *
   *         <p>Proportion of transmitted packets that fail to arrive from 0 to 100 percent.</p>
   *
   */
  uplinkLossPercent?: number;
}

export namespace CreateNetworkProfileRequest {
  export function isa(o: any): o is CreateNetworkProfileRequest {
    return _smithy.isa(o, "CreateNetworkProfileRequest");
  }
}

export interface CreateNetworkProfileResult extends $MetadataBearer {
  __type?: "CreateNetworkProfileResult";
  /**
   *
   *         <p>The network profile that is returned by the create network profile request.</p>
   *
   */
  networkProfile?: NetworkProfile;
}

export namespace CreateNetworkProfileResult {
  export function isa(o: any): o is CreateNetworkProfileResult {
    return _smithy.isa(o, "CreateNetworkProfileResult");
  }
}

/**
 *
 *         <p>Represents a request to the create project operation.</p>
 *
 */
export interface CreateProjectRequest {
  __type?: "CreateProjectRequest";
  /**
   *
   *         <p>Sets the execution timeout value (in minutes) for a project. All test runs in this project will use the
   *             specified execution timeout value unless overridden when scheduling a run.</p>
   *
   */
  defaultJobTimeoutMinutes?: number;

  /**
   *
   *         <p>The project's name.</p>
   *
   */
  name: string | undefined;
}

export namespace CreateProjectRequest {
  export function isa(o: any): o is CreateProjectRequest {
    return _smithy.isa(o, "CreateProjectRequest");
  }
}

/**
 *
 *         <p>Represents the result of a create project request.</p>
 *
 */
export interface CreateProjectResult extends $MetadataBearer {
  __type?: "CreateProjectResult";
  /**
   *
   *         <p>The newly created project.</p>
   *
   */
  project?: Project;
}

export namespace CreateProjectResult {
  export function isa(o: any): o is CreateProjectResult {
    return _smithy.isa(o, "CreateProjectResult");
  }
}

/**
 *
 *         <p>Configuration settings for a remote access session, including billing method.</p>
 *
 */
export interface CreateRemoteAccessSessionConfiguration {
  __type?: "CreateRemoteAccessSessionConfiguration";
  /**
   *
   *         <p>The billing method for the remote access session.</p>
   *
   */
  billingMethod?: BillingMethod | string;

  /**
   *
   *         <p>An array of Amazon Resource Names (ARNs) included in the VPC endpoint configuration.</p>
   *
   */
  vpceConfigurationArns?: Array<string>;
}

export namespace CreateRemoteAccessSessionConfiguration {
  export function isa(o: any): o is CreateRemoteAccessSessionConfiguration {
    return _smithy.isa(o, "CreateRemoteAccessSessionConfiguration");
  }
}

/**
 *
 *         <p>Creates and submits a request to start a remote access session.</p>
 *
 */
export interface CreateRemoteAccessSessionRequest {
  __type?: "CreateRemoteAccessSessionRequest";
  /**
   *
   *         <p>Unique identifier for the client. If you want access to multiple devices on the same client, you should
   *             pass the same <code>clientId</code> value in each call to <code>CreateRemoteAccessSession</code>. This is
   *             required only if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p>
   *         <p>
   *             <i>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</i>
   *          </p>
   *
   */
  clientId?: string;

  /**
   *
   *         <p>The configuration information for the remote access session request.</p>
   *
   */
  configuration?: CreateRemoteAccessSessionConfiguration;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the device for which you want to create a remote access
   *             session.</p>
   *
   */
  deviceArn: string | undefined;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the device instance for which you want to create a remote access
   *             session.</p>
   *
   */
  instanceArn?: string;

  /**
   *
   *         <p>The interaction mode of the remote access session. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the
   *                     screen. You <b>cannot</b> run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>NO_VIDEO: You are connected to the device but cannot interact with it or view the screen. This
   *                     mode has the fastest test execution speed. You <b>can</b> run XCUITest
   *                     framework-based tests in this mode.</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_ONLY: You can view the screen but cannot touch or rotate it. You <b>can</b> run XCUITest framework-based tests and watch the screen in this mode.</p>
   *             </li>
   *          </ul>
   *
   */
  interactionMode?: InteractionMode | string;

  /**
   *
   *         <p>The name of the remote access session that you wish to create.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project for which you want to create a remote access
   *             session.</p>
   *
   */
  projectArn: string | undefined;

  /**
   *
   *         <p>Set to <code>true</code> if you want to access devices remotely for debugging in your remote access
   *             session.</p>
   *         <p>
   *             <i>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</i>
   *          </p>
   *
   */
  remoteDebugEnabled?: boolean;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.</p>
   *
   */
  remoteRecordAppArn?: string;

  /**
   *
   *         <p>Set to <code>true</code> to enable remote recording for the remote access session.</p>
   *
   */
  remoteRecordEnabled?: boolean;

  /**
   *
   *         <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public
   *             devices, Device Farm always signs your apps again and this parameter has no effect.</p>
   *         <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   *
   */
  skipAppResign?: boolean;

  /**
   *
   *         <p>
   *             <i>Ignored.</i> The public key of the <code>ssh</code> key pair you want to use for
   *             connecting to remote devices in your remote debugging session. This is only required if
   *                 <code>remoteDebugEnabled</code> is set to <code>true</code>.</p>
   *         <p>
   *             <i>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</i>
   *          </p>
   *
   */
  sshPublicKey?: string;
}

export namespace CreateRemoteAccessSessionRequest {
  export function isa(o: any): o is CreateRemoteAccessSessionRequest {
    return _smithy.isa(o, "CreateRemoteAccessSessionRequest");
  }
}

/**
 *
 *         <p>Represents the server response from a request to create a remote access session.</p>
 *
 */
export interface CreateRemoteAccessSessionResult extends $MetadataBearer {
  __type?: "CreateRemoteAccessSessionResult";
  /**
   *
   *         <p>A container that describes the remote access session when the request to create a remote access session
   *             is sent.</p>
   *
   */
  remoteAccessSession?: RemoteAccessSession;
}

export namespace CreateRemoteAccessSessionResult {
  export function isa(o: any): o is CreateRemoteAccessSessionResult {
    return _smithy.isa(o, "CreateRemoteAccessSessionResult");
  }
}

/**
 *
 *         <p>Represents a request to the create upload operation.</p>
 *
 */
export interface CreateUploadRequest {
  __type?: "CreateUploadRequest";
  /**
   *
   *         <p>The upload's content type (for example, "application/octet-stream").</p>
   *
   */
  contentType?: string;

  /**
   *
   *         <p>The upload's file name. The name should not contain the '/' character. If uploading an iOS app, the
   *             file name needs to end with the <code>.ipa</code> extension. If uploading an Android app, the file name
   *             needs to end with the <code>.apk</code> extension. For all others, the file name must end with the
   *                 <code>.zip</code> file extension.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *         <p>The ARN of the project for the upload.</p>
   *
   */
  projectArn: string | undefined;

  /**
   *
   *         <p>The upload's upload type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP: An Android upload.</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP: An iOS upload.</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP: A web application upload.</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA: An external data upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE: An Appium Node.js test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE: An Appium Ruby test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload for a web
   *                     app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload for a web
   *                     app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE: An Appium Node.js test package upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE: An Appium Ruby test package upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_TEST_PACKAGE: A Calabash test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE: An Xcode test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE: An Xcode UI test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC: An Appium Node.js test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_SPEC: An Appium Ruby test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC: An Appium Node.js test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC: An Appium Ruby test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC: An Xcode UI test spec upload.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Note</b> If you call <code>CreateUpload</code> with <code>WEB_APP</code>
   *             specified, AWS Device Farm throws an <code>ArgumentException</code> error.</p>
   *
   */
  type: UploadType | string | undefined;
}

export namespace CreateUploadRequest {
  export function isa(o: any): o is CreateUploadRequest {
    return _smithy.isa(o, "CreateUploadRequest");
  }
}

/**
 *
 *         <p>Represents the result of a create upload request.</p>
 *
 */
export interface CreateUploadResult extends $MetadataBearer {
  __type?: "CreateUploadResult";
  /**
   *
   *         <p>The newly created upload.</p>
   *
   */
  upload?: Upload;
}

export namespace CreateUploadResult {
  export function isa(o: any): o is CreateUploadResult {
    return _smithy.isa(o, "CreateUploadResult");
  }
}

export interface CreateVPCEConfigurationRequest {
  __type?: "CreateVPCEConfigurationRequest";
  /**
   *
   *         <p>The DNS name of the service running in your VPC that you want Device Farm to test.</p>
   *
   */
  serviceDnsName: string | undefined;

  /**
   *
   *         <p>An optional description, providing more details about your VPC endpoint configuration.</p>
   *
   */
  vpceConfigurationDescription?: string;

  /**
   *
   *         <p>The friendly name you give to your VPC endpoint configuration, to manage your configurations more
   *             easily.</p>
   *
   */
  vpceConfigurationName: string | undefined;

  /**
   *
   *         <p>The name of the VPC endpoint service running inside your AWS account that you want Device Farm to
   *             test.</p>
   *
   */
  vpceServiceName: string | undefined;
}

export namespace CreateVPCEConfigurationRequest {
  export function isa(o: any): o is CreateVPCEConfigurationRequest {
    return _smithy.isa(o, "CreateVPCEConfigurationRequest");
  }
}

export interface CreateVPCEConfigurationResult extends $MetadataBearer {
  __type?: "CreateVPCEConfigurationResult";
  /**
   *
   *         <p>An object containing information about your VPC endpoint configuration.</p>
   *
   */
  vpceConfiguration?: VPCEConfiguration;
}

export namespace CreateVPCEConfigurationResult {
  export function isa(o: any): o is CreateVPCEConfigurationResult {
    return _smithy.isa(o, "CreateVPCEConfigurationResult");
  }
}

/**
 *
 *         <p>A JSON object specifying the paths where the artifacts generated by the customer's tests, on the device
 *             or in the test environment, will be pulled from.</p>
 *         <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or
 *                 <code>androidPaths</code>.</p>
 *         <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p>
 *
 */
export interface CustomerArtifactPaths {
  __type?: "CustomerArtifactPaths";
  /**
   *
   *         <p>Comma-separated list of paths on the Android device where the artifacts generated by the customer's
   *             tests will be pulled from.</p>
   *
   */
  androidPaths?: Array<string>;

  /**
   *
   *         <p>Comma-separated list of paths in the test execution environment where the artifacts generated by the
   *             customer's tests will be pulled from.</p>
   *
   */
  deviceHostPaths?: Array<string>;

  /**
   *
   *         <p>Comma-separated list of paths on the iOS device where the artifacts generated by the customer's tests
   *             will be pulled from.</p>
   *
   */
  iosPaths?: Array<string>;
}

export namespace CustomerArtifactPaths {
  export function isa(o: any): o is CustomerArtifactPaths {
    return _smithy.isa(o, "CustomerArtifactPaths");
  }
}

/**
 *
 *         <p>Represents a request to the delete device pool operation.</p>
 *
 */
export interface DeleteDevicePoolRequest {
  __type?: "DeleteDevicePoolRequest";
  /**
   *
   *         <p>Represents the Amazon Resource Name (ARN) of the Device Farm device pool you wish to delete.</p>
   *
   */
  arn: string | undefined;
}

export namespace DeleteDevicePoolRequest {
  export function isa(o: any): o is DeleteDevicePoolRequest {
    return _smithy.isa(o, "DeleteDevicePoolRequest");
  }
}

/**
 *
 *         <p>Represents the result of a delete device pool request.</p>
 *
 */
export interface DeleteDevicePoolResult extends $MetadataBearer {
  __type?: "DeleteDevicePoolResult";
}

export namespace DeleteDevicePoolResult {
  export function isa(o: any): o is DeleteDevicePoolResult {
    return _smithy.isa(o, "DeleteDevicePoolResult");
  }
}

export interface DeleteInstanceProfileRequest {
  __type?: "DeleteInstanceProfileRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the instance profile you are requesting to delete.</p>
   *
   */
  arn: string | undefined;
}

export namespace DeleteInstanceProfileRequest {
  export function isa(o: any): o is DeleteInstanceProfileRequest {
    return _smithy.isa(o, "DeleteInstanceProfileRequest");
  }
}

export interface DeleteInstanceProfileResult extends $MetadataBearer {
  __type?: "DeleteInstanceProfileResult";
}

export namespace DeleteInstanceProfileResult {
  export function isa(o: any): o is DeleteInstanceProfileResult {
    return _smithy.isa(o, "DeleteInstanceProfileResult");
  }
}

export interface DeleteNetworkProfileRequest {
  __type?: "DeleteNetworkProfileRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the network profile you want to delete.</p>
   *
   */
  arn: string | undefined;
}

export namespace DeleteNetworkProfileRequest {
  export function isa(o: any): o is DeleteNetworkProfileRequest {
    return _smithy.isa(o, "DeleteNetworkProfileRequest");
  }
}

export interface DeleteNetworkProfileResult extends $MetadataBearer {
  __type?: "DeleteNetworkProfileResult";
}

export namespace DeleteNetworkProfileResult {
  export function isa(o: any): o is DeleteNetworkProfileResult {
    return _smithy.isa(o, "DeleteNetworkProfileResult");
  }
}

/**
 *
 *         <p>Represents a request to the delete project operation.</p>
 *
 */
export interface DeleteProjectRequest {
  __type?: "DeleteProjectRequest";
  /**
   *
   *         <p>Represents the Amazon Resource Name (ARN) of the Device Farm project you wish to delete.</p>
   *
   */
  arn: string | undefined;
}

export namespace DeleteProjectRequest {
  export function isa(o: any): o is DeleteProjectRequest {
    return _smithy.isa(o, "DeleteProjectRequest");
  }
}

/**
 *
 *         <p>Represents the result of a delete project request.</p>
 *
 */
export interface DeleteProjectResult extends $MetadataBearer {
  __type?: "DeleteProjectResult";
}

export namespace DeleteProjectResult {
  export function isa(o: any): o is DeleteProjectResult {
    return _smithy.isa(o, "DeleteProjectResult");
  }
}

/**
 *
 *         <p>Represents the request to delete the specified remote access session.</p>
 *
 */
export interface DeleteRemoteAccessSessionRequest {
  __type?: "DeleteRemoteAccessSessionRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the session for which you want to delete remote access.</p>
   *
   */
  arn: string | undefined;
}

export namespace DeleteRemoteAccessSessionRequest {
  export function isa(o: any): o is DeleteRemoteAccessSessionRequest {
    return _smithy.isa(o, "DeleteRemoteAccessSessionRequest");
  }
}

/**
 *
 *         <p>The response from the server when a request is made to delete the remote access session.</p>
 *
 */
export interface DeleteRemoteAccessSessionResult extends $MetadataBearer {
  __type?: "DeleteRemoteAccessSessionResult";
}

export namespace DeleteRemoteAccessSessionResult {
  export function isa(o: any): o is DeleteRemoteAccessSessionResult {
    return _smithy.isa(o, "DeleteRemoteAccessSessionResult");
  }
}

/**
 *
 *         <p>Represents a request to the delete run operation.</p>
 *
 */
export interface DeleteRunRequest {
  __type?: "DeleteRunRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) for the run you wish to delete.</p>
   *
   */
  arn: string | undefined;
}

export namespace DeleteRunRequest {
  export function isa(o: any): o is DeleteRunRequest {
    return _smithy.isa(o, "DeleteRunRequest");
  }
}

/**
 *
 *         <p>Represents the result of a delete run request.</p>
 *
 */
export interface DeleteRunResult extends $MetadataBearer {
  __type?: "DeleteRunResult";
}

export namespace DeleteRunResult {
  export function isa(o: any): o is DeleteRunResult {
    return _smithy.isa(o, "DeleteRunResult");
  }
}

/**
 *
 *         <p>Represents a request to the delete upload operation.</p>
 *
 */
export interface DeleteUploadRequest {
  __type?: "DeleteUploadRequest";
  /**
   *
   *         <p>Represents the Amazon Resource Name (ARN) of the Device Farm upload you wish to delete.</p>
   *
   */
  arn: string | undefined;
}

export namespace DeleteUploadRequest {
  export function isa(o: any): o is DeleteUploadRequest {
    return _smithy.isa(o, "DeleteUploadRequest");
  }
}

/**
 *
 *         <p>Represents the result of a delete upload request.</p>
 *
 */
export interface DeleteUploadResult extends $MetadataBearer {
  __type?: "DeleteUploadResult";
}

export namespace DeleteUploadResult {
  export function isa(o: any): o is DeleteUploadResult {
    return _smithy.isa(o, "DeleteUploadResult");
  }
}

export interface DeleteVPCEConfigurationRequest {
  __type?: "DeleteVPCEConfigurationRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to delete.</p>
   *
   */
  arn: string | undefined;
}

export namespace DeleteVPCEConfigurationRequest {
  export function isa(o: any): o is DeleteVPCEConfigurationRequest {
    return _smithy.isa(o, "DeleteVPCEConfigurationRequest");
  }
}

export interface DeleteVPCEConfigurationResult extends $MetadataBearer {
  __type?: "DeleteVPCEConfigurationResult";
}

export namespace DeleteVPCEConfigurationResult {
  export function isa(o: any): o is DeleteVPCEConfigurationResult {
    return _smithy.isa(o, "DeleteVPCEConfigurationResult");
  }
}

/**
 *
 *         <p>Represents a device type that an app is tested against.</p>
 *
 */
export interface Device {
  __type?: "Device";
  /**
   *
   *         <p>The device's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>Reflects how likely a device will be available for a test run. It is currently available in the
   *             ListDevices and GetDevice API methods.</p>
   *
   */
  availability?: DeviceAvailability | string;

  /**
   *
   *         <p>The device's carrier.</p>
   *
   */
  carrier?: string;

  /**
   *
   *         <p>Information about the device's CPU.</p>
   *
   */
  cpu?: CPU;

  /**
   *
   *         <p>The name of the fleet to which this device belongs.</p>
   *
   */
  fleetName?: string;

  /**
   *
   *         <p>The type of fleet to which this device belongs. Possible values for fleet type are PRIVATE and
   *             PUBLIC.</p>
   *
   */
  fleetType?: string;

  /**
   *
   *         <p>The device's form factor.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PHONE: The phone form factor.</p>
   *             </li>
   *             <li>
   *                 <p>TABLET: The tablet form factor.</p>
   *             </li>
   *          </ul>
   *
   */
  formFactor?: DeviceFormFactor | string;

  /**
   *
   *         <p>The device's heap size, expressed in bytes.</p>
   *
   */
  heapSize?: number;

  /**
   *
   *
   *         <p>The device's image name.</p>
   *
   */
  image?: string;

  /**
   *
   *         <p>The instances belonging to this device.</p>
   *
   */
  instances?: Array<DeviceInstance>;

  /**
   *
   *         <p>The device's manufacturer name.</p>
   *
   */
  manufacturer?: string;

  /**
   *
   *         <p>The device's total memory size, expressed in bytes.</p>
   *
   */
  memory?: number;

  /**
   *
   *         <p>The device's model name.</p>
   *
   */
  model?: string;

  /**
   *
   *         <p>The device's model ID.</p>
   *
   */
  modelId?: string;

  /**
   *
   *         <p>The device's display name.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The device's operating system type.</p>
   *
   */
  os?: string;

  /**
   *
   *         <p>The device's platform.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID: The Android platform.</p>
   *             </li>
   *             <li>
   *                 <p>IOS: The iOS platform.</p>
   *             </li>
   *          </ul>
   *
   */
  platform?: DevicePlatform | string;

  /**
   *
   *
   *         <p>The device's radio.</p>
   *
   */
  radio?: string;

  /**
   *
   *         <p>Specifies whether remote access has been enabled for the specified device.</p>
   *
   */
  remoteAccessEnabled?: boolean;

  /**
   *
   *         <p>This flag is set to <code>true</code> if remote debugging is enabled for the device.</p>
   *         <p>
   *             <i>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</i>
   *          </p>
   *
   */
  remoteDebugEnabled?: boolean;

  /**
   *
   *         <p>The resolution of the device.</p>
   *
   */
  resolution?: Resolution;
}

export namespace Device {
  export function isa(o: any): o is Device {
    return _smithy.isa(o, "Device");
  }
}

/**
 *
 *         <p>Represents a device filter used to select a set of devices to be included in a test run. This data
 *             structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to ScheduleRun. For an
 *             example of the JSON request syntax, see <a>ScheduleRun</a>.</p>
 *         <p>It is also passed in as the <code>filters</code> parameter to ListDevices. For an example of the JSON
 *             request syntax, see <a>ListDevices</a>.</p>
 *
 */
export interface DeviceFilter {
  __type?: "DeviceFilter";
  /**
   *
   *         <p>The aspect of a device such as platform or model used as the selection criteria in a device filter.</p>
   *         <p>The supported operators for each attribute are provided in the following list.</p>
   *         <dl>
   *             <dt>ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device. For example,
   *                         "arn:aws:devicefarm:us-west-2::device:12345Example".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>PLATFORM</dt>
   *             <dd>
   *                     <p>The device platform. Valid values are "ANDROID" or "IOS".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>OS_VERSION</dt>
   *             <dd>
   *                     <p>The operating system version. For example, "10.3.2".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>GREATER_THAN</code>,
   *                             <code>GREATER_THAN_OR_EQUALS</code>, <code>IN</code>, <code>LESS_THAN</code>,
   *                             <code>LESS_THAN_OR_EQUALS</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>MODEL</dt>
   *             <dd>
   *                     <p>The device model. For example, "iPad 5th Gen".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>CONTAINS</code>, <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>AVAILABILITY</dt>
   *             <dd>
   *                     <p>The current availability of the device. Valid values are "AVAILABLE", "HIGHLY_AVAILABLE",
   *                         "BUSY", or "TEMPORARY_NOT_AVAILABLE".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FORM_FACTOR</dt>
   *             <dd>
   *                     <p>The device form factor. Valid values are "PHONE" or "TABLET".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>MANUFACTURER</dt>
   *             <dd>
   *                     <p>The device manufacturer. For example, "Apple".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_ACCESS_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote access. Valid values are "TRUE" or "FALSE".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_DEBUG_ENABLED</dt>
   *             <dd>
   *                     <p>
   *                   <i>Ignored.</i>Whether the device is enabled for remote debugging. Valid values
   *                         are "TRUE" or "FALSE".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                     <p>
   *                   <i>This filter will be ignored, as remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                         longer supported</a>.</i>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device instance.</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_LABELS</dt>
   *             <dd>
   *                     <p>The label of the device instance.</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>FLEET_TYPE</dt>
   *             <dd>
   *                     <p>The fleet type. Valid values are "PUBLIC" or "PRIVATE".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *          </dl>
   *
   */
  attribute?: DeviceFilterAttribute | string;

  /**
   *
   *         <p>Specifies how Device Farm compares the filter's attribute to the value. For the operators that are
   *             supported by each attribute, see the attribute descriptions.</p>
   *
   */
  operator?: RuleOperator | string;

  /**
   *
   *         <p>An array of one or more filter values used in a device filter.</p>
   *         <p class="title">
   *             <b>Operator Values</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>The IN and NOT_IN operators can take a values array that has more than one element.</p>
   *             </li>
   *             <li>
   *                 <p>The other operators require an array with a single element.</p>
   *             </li>
   *          </ul>
   *         <p class="title">
   *             <b>Attribute Values</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>The PLATFORM attribute can be set to "ANDROID" or "IOS".</p>
   *             </li>
   *             <li>
   *                 <p>The AVAILABILITY attribute can be set to "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or
   *                     "TEMPORARY_NOT_AVAILABLE".</p>
   *             </li>
   *             <li>
   *                 <p>The FORM_FACTOR attribute can be set to "PHONE" or "TABLET".</p>
   *             </li>
   *             <li>
   *                 <p>The FLEET_TYPE attribute can be set to "PUBLIC" or "PRIVATE".</p>
   *             </li>
   *          </ul>
   *
   */
  values?: Array<string>;
}

export namespace DeviceFilter {
  export function isa(o: any): o is DeviceFilter {
    return _smithy.isa(o, "DeviceFilter");
  }
}

/**
 *
 *         <p>Represents the device instance.</p>
 *
 */
export interface DeviceInstance {
  __type?: "DeviceInstance";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the device instance.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the device.</p>
   *
   */
  deviceArn?: string;

  /**
   *
   *         <p>A object containing information about the instance profile.</p>
   *
   */
  instanceProfile?: InstanceProfile;

  /**
   *
   *         <p>An array of strings describing the device instance.</p>
   *
   */
  labels?: Array<string>;

  /**
   *
   *         <p>The status of the device instance. Valid values are listed below.</p>
   *
   */
  status?: InstanceStatus | string;

  /**
   *
   *         <p>Unique device identifier for the device instance.</p>
   *
   */
  udid?: string;
}

export namespace DeviceInstance {
  export function isa(o: any): o is DeviceInstance {
    return _smithy.isa(o, "DeviceInstance");
  }
}

/**
 *
 *         <p>Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum
 *             of minutes consumed by all children.</p>
 *
 */
export interface DeviceMinutes {
  __type?: "DeviceMinutes";
  /**
   *
   *         <p>When specified, represents only the sum of metered minutes used by the resource to run tests.</p>
   *
   */
  metered?: number;

  /**
   *
   *         <p>When specified, represents the total minutes used by the resource to run tests.</p>
   *
   */
  total?: number;

  /**
   *
   *         <p>When specified, represents only the sum of unmetered minutes used by the resource to run
   *             tests.</p>
   *
   */
  unmetered?: number;
}

export namespace DeviceMinutes {
  export function isa(o: any): o is DeviceMinutes {
    return _smithy.isa(o, "DeviceMinutes");
  }
}

/**
 *
 *         <p>Represents a collection of device types.</p>
 *
 */
export interface DevicePool {
  __type?: "DevicePool";
  /**
   *
   *         <p>The device pool's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The device pool's description.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are
   *             available and that meet the criteria that you assign for the <code>rules</code> parameter. Depending on how
   *             many devices meet these constraints, your device pool might contain fewer devices than the value for this
   *             parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur by running
   *             tests.</p>
   *
   */
  maxDevices?: number;

  /**
   *
   *         <p>The device pool's name.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>Information about the device pool's rules.</p>
   *
   */
  rules?: Array<Rule>;

  /**
   *
   *         <p>The device pool's type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: A device pool that is created and managed by AWS Device Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: A device pool that is created and managed by the device pool developer.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: DevicePoolType | string;
}

export namespace DevicePool {
  export function isa(o: any): o is DevicePool {
    return _smithy.isa(o, "DevicePool");
  }
}

/**
 *
 *         <p>Represents a device pool compatibility result.</p>
 *
 */
export interface DevicePoolCompatibilityResult {
  __type?: "DevicePoolCompatibilityResult";
  /**
   *
   *         <p>Whether the result was compatible with the device pool.</p>
   *
   */
  compatible?: boolean;

  /**
   *
   *         <p>The device (phone or tablet) that you wish to return information about.</p>
   *
   */
  device?: Device;

  /**
   *
   *         <p>Information about the compatibility.</p>
   *
   */
  incompatibilityMessages?: Array<IncompatibilityMessage>;
}

export namespace DevicePoolCompatibilityResult {
  export function isa(o: any): o is DevicePoolCompatibilityResult {
    return _smithy.isa(o, "DevicePoolCompatibilityResult");
  }
}

/**
 *
 *         <p>Represents the device filters used in a test run as well as the maximum number of devices to be included
 *             in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.</p>
 *
 */
export interface DeviceSelectionConfiguration {
  __type?: "DeviceSelectionConfiguration";
  /**
   *
   *         <p>Used to dynamically select a set of devices for a test run. A filter is made up of an attribute, an
   *             operator, and one or more values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Attribute</b>
   *                </p>
   *                 <p>The aspect of a device such as platform or model used as the selection criteria in a device
   *                     filter.</p>
   *                 <p>Allowed values include:</p>
   *                 <ul>
   *                   <li>
   *                         <p>ARN: The Amazon Resource Name (ARN) of the device. For example,
   *                             "arn:aws:devicefarm:us-west-2::device:12345Example".</p>
   *                     </li>
   *                   <li>
   *                         <p>PLATFORM: The device platform. Valid values are "ANDROID" or "IOS".</p>
   *                     </li>
   *                   <li>
   *                         <p>OS_VERSION: The operating system version. For example, "10.3.2".</p>
   *                     </li>
   *                   <li>
   *                         <p>MODEL: The device model. For example, "iPad 5th Gen".</p>
   *                     </li>
   *                   <li>
   *                         <p>AVAILABILITY: The current availability of the device. Valid values are "AVAILABLE",
   *                             "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".</p>
   *                     </li>
   *                   <li>
   *                         <p>FORM_FACTOR: The device form factor. Valid values are "PHONE" or "TABLET".</p>
   *                     </li>
   *                   <li>
   *                         <p>MANUFACTURER: The device manufacturer. For example, "Apple".</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access. Valid values
   *                             are "TRUE" or "FALSE".</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values
   *                             are "TRUE" or "FALSE". <i>This filter will be ignored, as remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                                     longer supported</a>.</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_LABELS: The label of the device instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>FLEET_TYPE: The fleet type. Valid values are "PUBLIC" or "PRIVATE".</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Operator</b>
   *                </p>
   *                 <p>The filter operator.</p>
   *                 <ul>
   *                   <li>
   *                         <p>The EQUALS operator is available for every attribute except INSTANCE_LABELS.</p>
   *                     </li>
   *                   <li>
   *                         <p>The CONTAINS operator is available for the INSTANCE_LABELS and MODEL attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The IN and NOT_IN operators are available for the ARN, OS_VERSION, MODEL, MANUFACTURER,
   *                             and INSTANCE_ARN attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and GREATER_THAN_OR_EQUALS operators are
   *                             also available for the OS_VERSION attribute.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Values</b>
   *                </p>
   *                 <p>An array of one or more filter values.</p>
   *                 <p class="title">
   *                   <b>Operator Values</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                         <p>The IN and NOT_IN operators can take a values array that has more than one element.</p>
   *                     </li>
   *                   <li>
   *                         <p>The other operators require an array with a single element.</p>
   *                     </li>
   *                </ul>
   *                 <p class="title">
   *                   <b>Attribute Values</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                         <p>The PLATFORM attribute can be set to "ANDROID" or "IOS".</p>
   *                     </li>
   *                   <li>
   *                         <p>The AVAILABILITY attribute can be set to "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or
   *                             "TEMPORARY_NOT_AVAILABLE".</p>
   *                     </li>
   *                   <li>
   *                         <p>The FORM_FACTOR attribute can be set to "PHONE" or "TABLET".</p>
   *                     </li>
   *                   <li>
   *                         <p>The FLEET_TYPE attribute can be set to "PUBLIC" or "PRIVATE".</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   */
  filters: Array<DeviceFilter> | undefined;

  /**
   *
   *         <p>The maximum number of devices to be included in a test run.</p>
   *
   */
  maxDevices: number | undefined;
}

export namespace DeviceSelectionConfiguration {
  export function isa(o: any): o is DeviceSelectionConfiguration {
    return _smithy.isa(o, "DeviceSelectionConfiguration");
  }
}

/**
 *
 *         <p>Contains the run results requested by the device selection configuration as well as how many devices were
 *             returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.</p>
 *
 */
export interface DeviceSelectionResult {
  __type?: "DeviceSelectionResult";
  /**
   *
   *         <p>The filters in a device selection result.</p>
   *
   */
  filters?: Array<DeviceFilter>;

  /**
   *
   *         <p>The number of devices that matched the device filter selection criteria.</p>
   *
   */
  matchedDevicesCount?: number;

  /**
   *
   *         <p>The maximum number of devices to be selected by a device filter and included in a test run.</p>
   *
   */
  maxDevices?: number;
}

export namespace DeviceSelectionResult {
  export function isa(o: any): o is DeviceSelectionResult {
    return _smithy.isa(o, "DeviceSelectionResult");
  }
}

/**
 *
 *         <p>Represents configuration information about a test run, such as the execution timeout (in
 *             minutes).</p>
 *
 */
export interface ExecutionConfiguration {
  __type?: "ExecutionConfiguration";
  /**
   *
   *         <p>True if account cleanup is enabled at the beginning of the test; otherwise, false.</p>
   *
   */
  accountsCleanup?: boolean;

  /**
   *
   *         <p>True if app package cleanup is enabled at the beginning of the test; otherwise, false.</p>
   *
   */
  appPackagesCleanup?: boolean;

  /**
   *
   *         <p>The number of minutes a test run will execute before it times out.</p>
   *
   */
  jobTimeoutMinutes?: number;

  /**
   *
   *         <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public
   *             devices, Device Farm always signs your apps again and this parameter has no effect.</p>
   *         <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   *
   */
  skipAppResign?: boolean;

  /**
   *
   *         <p>Set to true to enable video capture; otherwise, set to false. The default is true.</p>
   *
   */
  videoCapture?: boolean;
}

export namespace ExecutionConfiguration {
  export function isa(o: any): o is ExecutionConfiguration {
    return _smithy.isa(o, "ExecutionConfiguration");
  }
}

/**
 *
 *         <p>Represents the request sent to retrieve the account settings.</p>
 *
 */
export interface GetAccountSettingsRequest {
  __type?: "GetAccountSettingsRequest";
}

export namespace GetAccountSettingsRequest {
  export function isa(o: any): o is GetAccountSettingsRequest {
    return _smithy.isa(o, "GetAccountSettingsRequest");
  }
}

/**
 *
 *         <p>Represents the account settings return values from the <code>GetAccountSettings</code>
 *             request.</p>
 *
 */
export interface GetAccountSettingsResult extends $MetadataBearer {
  __type?: "GetAccountSettingsResult";
  /**
   *
   *         <p>The account settings.</p>
   *
   */
  accountSettings?: AccountSettings;
}

export namespace GetAccountSettingsResult {
  export function isa(o: any): o is GetAccountSettingsResult {
    return _smithy.isa(o, "GetAccountSettingsResult");
  }
}

export interface GetDeviceInstanceRequest {
  __type?: "GetDeviceInstanceRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the instance you're requesting information about.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetDeviceInstanceRequest {
  export function isa(o: any): o is GetDeviceInstanceRequest {
    return _smithy.isa(o, "GetDeviceInstanceRequest");
  }
}

export interface GetDeviceInstanceResult extends $MetadataBearer {
  __type?: "GetDeviceInstanceResult";
  /**
   *
   *         <p>An object containing information about your device instance.</p>
   *
   */
  deviceInstance?: DeviceInstance;
}

export namespace GetDeviceInstanceResult {
  export function isa(o: any): o is GetDeviceInstanceResult {
    return _smithy.isa(o, "GetDeviceInstanceResult");
  }
}

/**
 *
 *         <p>Represents a request to the get device pool compatibility operation.</p>
 *
 */
export interface GetDevicePoolCompatibilityRequest {
  __type?: "GetDevicePoolCompatibilityRequest";
  /**
   *
   *         <p>The ARN of the app that is associated with the specified device pool.</p>
   *
   */
  appArn?: string;

  /**
   *
   *         <p>An object containing information about the settings for a run.</p>
   *
   */
  configuration?: ScheduleRunConfiguration;

  /**
   *
   *         <p>The device pool's ARN.</p>
   *
   */
  devicePoolArn: string | undefined;

  /**
   *
   *         <p>Information about the uploaded test to be run against the device pool.</p>
   *
   */
  test?: ScheduleRunTest;

  /**
   *
   *         <p>The test type for the specified device pool.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ: The built-in fuzz type.</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting
   *                     with it and capturing screenshots at the same time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON: The Appium Python type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE: The Appium Node.js type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY: The Appium Ruby type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY: The Appium Ruby type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH: The Calabash type.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION: The Instrumentation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION: The uiautomation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR: The uiautomator type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST: The Xcode test type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI: The Xcode UI test type.</p>
   *             </li>
   *          </ul>
   *
   */
  testType?: TestType | string;
}

export namespace GetDevicePoolCompatibilityRequest {
  export function isa(o: any): o is GetDevicePoolCompatibilityRequest {
    return _smithy.isa(o, "GetDevicePoolCompatibilityRequest");
  }
}

/**
 *
 *         <p>Represents the result of describe device pool compatibility request.</p>
 *
 */
export interface GetDevicePoolCompatibilityResult extends $MetadataBearer {
  __type?: "GetDevicePoolCompatibilityResult";
  /**
   *
   *         <p>Information about compatible devices.</p>
   *
   */
  compatibleDevices?: Array<DevicePoolCompatibilityResult>;

  /**
   *
   *         <p>Information about incompatible devices.</p>
   *
   */
  incompatibleDevices?: Array<DevicePoolCompatibilityResult>;
}

export namespace GetDevicePoolCompatibilityResult {
  export function isa(o: any): o is GetDevicePoolCompatibilityResult {
    return _smithy.isa(o, "GetDevicePoolCompatibilityResult");
  }
}

/**
 *
 *         <p>Represents a request to the get device pool operation.</p>
 *
 */
export interface GetDevicePoolRequest {
  __type?: "GetDevicePoolRequest";
  /**
   *
   *         <p>The device pool's ARN.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetDevicePoolRequest {
  export function isa(o: any): o is GetDevicePoolRequest {
    return _smithy.isa(o, "GetDevicePoolRequest");
  }
}

/**
 *
 *         <p>Represents the result of a get device pool request.</p>
 *
 */
export interface GetDevicePoolResult extends $MetadataBearer {
  __type?: "GetDevicePoolResult";
  /**
   *
   *         <p>An object containing information about the requested device pool.</p>
   *
   */
  devicePool?: DevicePool;
}

export namespace GetDevicePoolResult {
  export function isa(o: any): o is GetDevicePoolResult {
    return _smithy.isa(o, "GetDevicePoolResult");
  }
}

/**
 *
 *         <p>Represents a request to the get device request.</p>
 *
 */
export interface GetDeviceRequest {
  __type?: "GetDeviceRequest";
  /**
   *
   *         <p>The device type's ARN.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetDeviceRequest {
  export function isa(o: any): o is GetDeviceRequest {
    return _smithy.isa(o, "GetDeviceRequest");
  }
}

/**
 *
 *         <p>Represents the result of a get device request.</p>
 *
 */
export interface GetDeviceResult extends $MetadataBearer {
  __type?: "GetDeviceResult";
  /**
   *
   *         <p>An object containing information about the requested device.</p>
   *
   */
  device?: Device;
}

export namespace GetDeviceResult {
  export function isa(o: any): o is GetDeviceResult {
    return _smithy.isa(o, "GetDeviceResult");
  }
}

export interface GetInstanceProfileRequest {
  __type?: "GetInstanceProfileRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of your instance profile.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetInstanceProfileRequest {
  export function isa(o: any): o is GetInstanceProfileRequest {
    return _smithy.isa(o, "GetInstanceProfileRequest");
  }
}

export interface GetInstanceProfileResult extends $MetadataBearer {
  __type?: "GetInstanceProfileResult";
  /**
   *
   *         <p>An object containing information about your instance profile.</p>
   *
   */
  instanceProfile?: InstanceProfile;
}

export namespace GetInstanceProfileResult {
  export function isa(o: any): o is GetInstanceProfileResult {
    return _smithy.isa(o, "GetInstanceProfileResult");
  }
}

/**
 *
 *         <p>Represents a request to the get job operation.</p>
 *
 */
export interface GetJobRequest {
  __type?: "GetJobRequest";
  /**
   *
   *         <p>The job's ARN.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetJobRequest {
  export function isa(o: any): o is GetJobRequest {
    return _smithy.isa(o, "GetJobRequest");
  }
}

/**
 *
 *         <p>Represents the result of a get job request.</p>
 *
 */
export interface GetJobResult extends $MetadataBearer {
  __type?: "GetJobResult";
  /**
   *
   *         <p>An object containing information about the requested job.</p>
   *
   */
  job?: Job;
}

export namespace GetJobResult {
  export function isa(o: any): o is GetJobResult {
    return _smithy.isa(o, "GetJobResult");
  }
}

export interface GetNetworkProfileRequest {
  __type?: "GetNetworkProfileRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the network profile you want to return information about.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetNetworkProfileRequest {
  export function isa(o: any): o is GetNetworkProfileRequest {
    return _smithy.isa(o, "GetNetworkProfileRequest");
  }
}

export interface GetNetworkProfileResult extends $MetadataBearer {
  __type?: "GetNetworkProfileResult";
  /**
   *
   *         <p>The network profile.</p>
   *
   */
  networkProfile?: NetworkProfile;
}

export namespace GetNetworkProfileResult {
  export function isa(o: any): o is GetNetworkProfileResult {
    return _smithy.isa(o, "GetNetworkProfileResult");
  }
}

/**
 *
 *         <p>Represents the request to retrieve the offering status for the specified customer or account.</p>
 *
 */
export interface GetOfferingStatusRequest {
  __type?: "GetOfferingStatusRequest";
  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace GetOfferingStatusRequest {
  export function isa(o: any): o is GetOfferingStatusRequest {
    return _smithy.isa(o, "GetOfferingStatusRequest");
  }
}

/**
 *
 *         <p>Returns the status result for a device offering.</p>
 *
 */
export interface GetOfferingStatusResult extends $MetadataBearer {
  __type?: "GetOfferingStatusResult";
  /**
   *
   *         <p>When specified, gets the offering status for the current period.</p>
   *
   */
  current?: { [key: string]: OfferingStatus };

  /**
   *
   *         <p>When specified, gets the offering status for the next period.</p>
   *
   */
  nextPeriod?: { [key: string]: OfferingStatus };

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace GetOfferingStatusResult {
  export function isa(o: any): o is GetOfferingStatusResult {
    return _smithy.isa(o, "GetOfferingStatusResult");
  }
}

/**
 *
 *         <p>Represents a request to the get project operation.</p>
 *
 */
export interface GetProjectRequest {
  __type?: "GetProjectRequest";
  /**
   *
   *         <p>The project's ARN.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetProjectRequest {
  export function isa(o: any): o is GetProjectRequest {
    return _smithy.isa(o, "GetProjectRequest");
  }
}

/**
 *
 *         <p>Represents the result of a get project request.</p>
 *
 */
export interface GetProjectResult extends $MetadataBearer {
  __type?: "GetProjectResult";
  /**
   *
   *         <p>The project you wish to get information about.</p>
   *
   */
  project?: Project;
}

export namespace GetProjectResult {
  export function isa(o: any): o is GetProjectResult {
    return _smithy.isa(o, "GetProjectResult");
  }
}

/**
 *
 *         <p>Represents the request to get information about the specified remote access session.</p>
 *
 */
export interface GetRemoteAccessSessionRequest {
  __type?: "GetRemoteAccessSessionRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the remote access session about which you want to get session
   *             information.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetRemoteAccessSessionRequest {
  export function isa(o: any): o is GetRemoteAccessSessionRequest {
    return _smithy.isa(o, "GetRemoteAccessSessionRequest");
  }
}

/**
 *
 *         <p>Represents the response from the server that lists detailed information about the remote access
 *             session.</p>
 *
 */
export interface GetRemoteAccessSessionResult extends $MetadataBearer {
  __type?: "GetRemoteAccessSessionResult";
  /**
   *
   *         <p>A container that lists detailed information about the remote access session.</p>
   *
   */
  remoteAccessSession?: RemoteAccessSession;
}

export namespace GetRemoteAccessSessionResult {
  export function isa(o: any): o is GetRemoteAccessSessionResult {
    return _smithy.isa(o, "GetRemoteAccessSessionResult");
  }
}

/**
 *
 *         <p>Represents a request to the get run operation.</p>
 *
 */
export interface GetRunRequest {
  __type?: "GetRunRequest";
  /**
   *
   *         <p>The run's ARN.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetRunRequest {
  export function isa(o: any): o is GetRunRequest {
    return _smithy.isa(o, "GetRunRequest");
  }
}

/**
 *
 *         <p>Represents the result of a get run request.</p>
 *
 */
export interface GetRunResult extends $MetadataBearer {
  __type?: "GetRunResult";
  /**
   *
   *         <p>The run you wish to get results from.</p>
   *
   */
  run?: Run;
}

export namespace GetRunResult {
  export function isa(o: any): o is GetRunResult {
    return _smithy.isa(o, "GetRunResult");
  }
}

/**
 *
 *         <p>Represents a request to the get suite operation.</p>
 *
 */
export interface GetSuiteRequest {
  __type?: "GetSuiteRequest";
  /**
   *
   *         <p>The suite's ARN.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetSuiteRequest {
  export function isa(o: any): o is GetSuiteRequest {
    return _smithy.isa(o, "GetSuiteRequest");
  }
}

/**
 *
 *         <p>Represents the result of a get suite request.</p>
 *
 */
export interface GetSuiteResult extends $MetadataBearer {
  __type?: "GetSuiteResult";
  /**
   *
   *         <p>A collection of one or more tests.</p>
   *
   */
  suite?: Suite;
}

export namespace GetSuiteResult {
  export function isa(o: any): o is GetSuiteResult {
    return _smithy.isa(o, "GetSuiteResult");
  }
}

/**
 *
 *         <p>Represents a request to the get test operation.</p>
 *
 */
export interface GetTestRequest {
  __type?: "GetTestRequest";
  /**
   *
   *         <p>The test's ARN.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetTestRequest {
  export function isa(o: any): o is GetTestRequest {
    return _smithy.isa(o, "GetTestRequest");
  }
}

/**
 *
 *         <p>Represents the result of a get test request.</p>
 *
 */
export interface GetTestResult extends $MetadataBearer {
  __type?: "GetTestResult";
  /**
   *
   *         <p>A test condition that is evaluated.</p>
   *
   */
  test?: Test;
}

export namespace GetTestResult {
  export function isa(o: any): o is GetTestResult {
    return _smithy.isa(o, "GetTestResult");
  }
}

/**
 *
 *         <p>Represents a request to the get upload operation.</p>
 *
 */
export interface GetUploadRequest {
  __type?: "GetUploadRequest";
  /**
   *
   *         <p>The upload's ARN.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetUploadRequest {
  export function isa(o: any): o is GetUploadRequest {
    return _smithy.isa(o, "GetUploadRequest");
  }
}

/**
 *
 *         <p>Represents the result of a get upload request.</p>
 *
 */
export interface GetUploadResult extends $MetadataBearer {
  __type?: "GetUploadResult";
  /**
   *
   *         <p>An app or a set of one or more tests to upload or that have been uploaded.</p>
   *
   */
  upload?: Upload;
}

export namespace GetUploadResult {
  export function isa(o: any): o is GetUploadResult {
    return _smithy.isa(o, "GetUploadResult");
  }
}

export interface GetVPCEConfigurationRequest {
  __type?: "GetVPCEConfigurationRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to describe.</p>
   *
   */
  arn: string | undefined;
}

export namespace GetVPCEConfigurationRequest {
  export function isa(o: any): o is GetVPCEConfigurationRequest {
    return _smithy.isa(o, "GetVPCEConfigurationRequest");
  }
}

export interface GetVPCEConfigurationResult extends $MetadataBearer {
  __type?: "GetVPCEConfigurationResult";
  /**
   *
   *         <p>An object containing information about your VPC endpoint configuration.</p>
   *
   */
  vpceConfiguration?: VPCEConfiguration;
}

export namespace GetVPCEConfigurationResult {
  export function isa(o: any): o is GetVPCEConfigurationResult {
    return _smithy.isa(o, "GetVPCEConfigurationResult");
  }
}

/**
 *
 *         <p>An entity with the same name already exists.</p>
 *
 */
export interface IdempotencyException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IdempotencyException";
  name: "IdempotencyException";
  $fault: "client";
  /**
   *
   *         <p>Any additional information about the exception.</p>
   *
   */
  message?: string;
}

export namespace IdempotencyException {
  export function isa(o: any): o is IdempotencyException {
    return _smithy.isa(o, "IdempotencyException");
  }
}

/**
 *
 *         <p>Represents information about incompatibility.</p>
 *
 */
export interface IncompatibilityMessage {
  __type?: "IncompatibilityMessage";
  /**
   *
   *         <p>A message about the incompatibility.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The type of incompatibility.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ARN: The ARN.</p>
   *             </li>
   *             <li>
   *                 <p>FORM_FACTOR: The form factor (for example, phone or tablet).</p>
   *             </li>
   *             <li>
   *                 <p>MANUFACTURER: The manufacturer.</p>
   *             </li>
   *             <li>
   *                 <p>PLATFORM: The platform (for example, Android or iOS).</p>
   *             </li>
   *             <li>
   *                 <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_VERSION: The Appium version for the test.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: DeviceAttribute | string;
}

export namespace IncompatibilityMessage {
  export function isa(o: any): o is IncompatibilityMessage {
    return _smithy.isa(o, "IncompatibilityMessage");
  }
}

/**
 *
 *         <p>Represents the request to install an Android application (in .apk format) or an iOS application (in
 *             .ipa format) as part of a remote access session.</p>
 *
 */
export interface InstallToRemoteAccessSessionRequest {
  __type?: "InstallToRemoteAccessSessionRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the app about which you are requesting information.</p>
   *
   */
  appArn: string | undefined;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the remote access session about which you are requesting
   *             information.</p>
   *
   */
  remoteAccessSessionArn: string | undefined;
}

export namespace InstallToRemoteAccessSessionRequest {
  export function isa(o: any): o is InstallToRemoteAccessSessionRequest {
    return _smithy.isa(o, "InstallToRemoteAccessSessionRequest");
  }
}

/**
 *
 *         <p>Represents the response from the server after AWS Device Farm makes a request to install to a remote
 *             access session.</p>
 *
 */
export interface InstallToRemoteAccessSessionResult extends $MetadataBearer {
  __type?: "InstallToRemoteAccessSessionResult";
  /**
   *
   *         <p>An app to upload or that has been uploaded.</p>
   *
   */
  appUpload?: Upload;
}

export namespace InstallToRemoteAccessSessionResult {
  export function isa(o: any): o is InstallToRemoteAccessSessionResult {
    return _smithy.isa(o, "InstallToRemoteAccessSessionResult");
  }
}

/**
 *
 *         <p>Represents the instance profile.</p>
 *
 */
export interface InstanceProfile {
  __type?: "InstanceProfile";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The description of the instance profile.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>An array of strings specifying the list of app packages that should not be cleaned up from the device
   *             after a test run is over.</p>
   *         <p>The list of packages is only considered if you set <code>packageCleanup</code> to
   *             <code>true</code>.</p>
   *
   */
  excludeAppPackagesFromCleanup?: Array<string>;

  /**
   *
   *         <p>The name of the instance profile.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>When set to <code>true</code>, Device Farm will remove app packages after a test run. The default value is
   *                 <code>false</code> for private devices.</p>
   *
   */
  packageCleanup?: boolean;

  /**
   *
   *         <p>When set to <code>true</code>, Device Farm will reboot the instance after a test run. The default value is
   *                 <code>true</code>.</p>
   *
   */
  rebootAfterUse?: boolean;
}

export namespace InstanceProfile {
  export function isa(o: any): o is InstanceProfile {
    return _smithy.isa(o, "InstanceProfile");
  }
}

/**
 *
 *         <p>There was an error with the update request, or you do not have sufficient permissions to update this VPC
 *             endpoint configuration.</p>
 *
 */
export interface InvalidOperationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidOperationException";
  name: "InvalidOperationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidOperationException {
  export function isa(o: any): o is InvalidOperationException {
    return _smithy.isa(o, "InvalidOperationException");
  }
}

/**
 *
 *         <p>Represents a device.</p>
 *
 */
export interface Job {
  __type?: "Job";
  /**
   *
   *         <p>The job's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The job's result counters.</p>
   *
   */
  counters?: Counters;

  /**
   *
   *         <p>When the job was created.</p>
   *
   */
  created?: Date;

  /**
   *
   *         <p>The device (phone or tablet).</p>
   *
   */
  device?: Device;

  /**
   *
   *         <p>Represents the total (metered or unmetered) minutes used by the job.</p>
   *
   */
  deviceMinutes?: DeviceMinutes;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the instance.</p>
   *
   */
  instanceArn?: string;

  /**
   *
   *         <p>A message about the job's result.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The job's name.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The job's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending condition.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED: A passing condition.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED: A warning condition.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED: A failed condition.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED: A skipped condition.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED: An error condition.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED: A stopped condition.</p>
   *             </li>
   *          </ul>
   *
   */
  result?: ExecutionResult | string;

  /**
   *
   *         <p>The job's start time.</p>
   *
   */
  started?: Date;

  /**
   *
   *         <p>The job's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY: A pending concurrency status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE: A pending device status.</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING: A processing status.</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING: A scheduling status.</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING: A preparing status.</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING: A running status.</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED: A completed status.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING: A stopping status.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: ExecutionStatus | string;

  /**
   *
   *         <p>The job's stop time.</p>
   *
   */
  stopped?: Date;

  /**
   *
   *         <p>The job's type.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ: The built-in fuzz type.</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting
   *                     with it and capturing screenshots at the same time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON: The Appium Python type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE: The Appium Node.js type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY: The Appium Ruby type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY: The Appium Ruby test type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH: The Calabash type.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION: The Instrumentation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION: The uiautomation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR: The uiautomator type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST: The Xcode test type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI: The Xcode UI test type.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: TestType | string;

  /**
   *
   *         <p>This value is set to true if video capture is enabled; otherwise, it is set to false.</p>
   *
   */
  videoCapture?: boolean;

  /**
   *
   *         <p>The endpoint for streaming device video.</p>
   *
   */
  videoEndpoint?: string;
}

export namespace Job {
  export function isa(o: any): o is Job {
    return _smithy.isa(o, "Job");
  }
}

/**
 *
 *         <p>A limit was exceeded.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  /**
   *
   *         <p>Any additional information about the exception.</p>
   *
   */
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 *
 *         <p>Represents a request to the list artifacts operation.</p>
 *
 */
export interface ListArtifactsRequest {
  __type?: "ListArtifactsRequest";
  /**
   *
   *         <p>The Run, Job, Suite, or Test ARN.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>The artifacts' type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>FILE: The artifacts are files.</p>
   *             </li>
   *             <li>
   *                 <p>LOG: The artifacts are logs.</p>
   *             </li>
   *             <li>
   *                 <p>SCREENSHOT: The artifacts are screenshots.</p>
   *             </li>
   *          </ul>
   *
   */
  type: ArtifactCategory | string | undefined;
}

export namespace ListArtifactsRequest {
  export function isa(o: any): o is ListArtifactsRequest {
    return _smithy.isa(o, "ListArtifactsRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list artifacts operation.</p>
 *
 */
export interface ListArtifactsResult extends $MetadataBearer {
  __type?: "ListArtifactsResult";
  /**
   *
   *         <p>Information about the artifacts.</p>
   *
   */
  artifacts?: Array<Artifact>;

  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListArtifactsResult {
  export function isa(o: any): o is ListArtifactsResult {
    return _smithy.isa(o, "ListArtifactsResult");
  }
}

export interface ListDeviceInstancesRequest {
  __type?: "ListDeviceInstancesRequest";
  /**
   *
   *         <p>An integer specifying the maximum number of items you want to return in the API response.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return the
   *             next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeviceInstancesRequest {
  export function isa(o: any): o is ListDeviceInstancesRequest {
    return _smithy.isa(o, "ListDeviceInstancesRequest");
  }
}

export interface ListDeviceInstancesResult extends $MetadataBearer {
  __type?: "ListDeviceInstancesResult";
  /**
   *
   *         <p>An object containing information about your device instances.</p>
   *
   */
  deviceInstances?: Array<DeviceInstance>;

  /**
   *
   *         <p>An identifier that can be used in the next call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDeviceInstancesResult {
  export function isa(o: any): o is ListDeviceInstancesResult {
    return _smithy.isa(o, "ListDeviceInstancesResult");
  }
}

/**
 *
 *         <p>Represents the result of a list device pools request.</p>
 *
 */
export interface ListDevicePoolsRequest {
  __type?: "ListDevicePoolsRequest";
  /**
   *
   *         <p>The project ARN.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>The device pools' type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: A device pool that is created and managed by AWS Device Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: A device pool that is created and managed by the device pool developer.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: DevicePoolType | string;
}

export namespace ListDevicePoolsRequest {
  export function isa(o: any): o is ListDevicePoolsRequest {
    return _smithy.isa(o, "ListDevicePoolsRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list device pools request.</p>
 *
 */
export interface ListDevicePoolsResult extends $MetadataBearer {
  __type?: "ListDevicePoolsResult";
  /**
   *
   *         <p>Information about the device pools.</p>
   *
   */
  devicePools?: Array<DevicePool>;

  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDevicePoolsResult {
  export function isa(o: any): o is ListDevicePoolsResult {
    return _smithy.isa(o, "ListDevicePoolsResult");
  }
}

/**
 *
 *         <p>Represents the result of a list devices request.</p>
 *
 */
export interface ListDevicesRequest {
  __type?: "ListDevicesRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>Used to select a set of devices. A filter is made up of an attribute, an operator, and one or more
   *             values.</p>
   *         <ul>
   *             <li>
   *                 <p>Attribute: The aspect of a device such as platform or model used as the selection criteria in a
   *                     device filter.</p>
   *                 <p>Allowed values include:</p>
   *                 <ul>
   *                   <li>
   *                         <p>ARN: The Amazon Resource Name (ARN) of the device. For example,
   *                             "arn:aws:devicefarm:us-west-2::device:12345Example".</p>
   *                     </li>
   *                   <li>
   *                         <p>PLATFORM: The device platform. Valid values are "ANDROID" or "IOS".</p>
   *                     </li>
   *                   <li>
   *                         <p>OS_VERSION: The operating system version. For example, "10.3.2".</p>
   *                     </li>
   *                   <li>
   *                         <p>MODEL: The device model. For example, "iPad 5th Gen".</p>
   *                     </li>
   *                   <li>
   *                         <p>AVAILABILITY: The current availability of the device. Valid values are "AVAILABLE",
   *                             "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".</p>
   *                     </li>
   *                   <li>
   *                         <p>FORM_FACTOR: The device form factor. Valid values are "PHONE" or "TABLET".</p>
   *                     </li>
   *                   <li>
   *                         <p>MANUFACTURER: The device manufacturer. For example, "Apple".</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access. Valid values
   *                             are "TRUE" or "FALSE".</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values
   *                             are "TRUE" or "FALSE". <i>This attribute will be ignored, as remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                                     longer supported</a>.</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_LABELS: The label of the device instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>FLEET_TYPE: The fleet type. Valid values are "PUBLIC" or "PRIVATE".</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Operator: The filter operator.</p>
   *                 <ul>
   *                   <li>
   *                         <p>The EQUALS operator is available for every attribute except INSTANCE_LABELS.</p>
   *                     </li>
   *                   <li>
   *                         <p>The CONTAINS operator is available for the INSTANCE_LABELS and MODEL attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The IN and NOT_IN operators are available for the ARN, OS_VERSION, MODEL, MANUFACTURER,
   *                             and INSTANCE_ARN attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and GREATER_THAN_OR_EQUALS operators are
   *                             also available for the OS_VERSION attribute.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Values: An array of one or more filter values.</p>
   *                 <ul>
   *                   <li>
   *                         <p>The IN and NOT_IN operators take a values array that has one or more elements.</p>
   *                     </li>
   *                   <li>
   *                         <p>The other operators require an array with a single element.</p>
   *                     </li>
   *                   <li>
   *                         <p>In a request, the AVAILABILITY attribute takes "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or
   *                             "TEMPORARY_NOT_AVAILABLE" as values.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   */
  filters?: Array<DeviceFilter>;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDevicesRequest {
  export function isa(o: any): o is ListDevicesRequest {
    return _smithy.isa(o, "ListDevicesRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list devices operation.</p>
 *
 */
export interface ListDevicesResult extends $MetadataBearer {
  __type?: "ListDevicesResult";
  /**
   *
   *         <p>Information about the devices.</p>
   *
   */
  devices?: Array<Device>;

  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDevicesResult {
  export function isa(o: any): o is ListDevicesResult {
    return _smithy.isa(o, "ListDevicesResult");
  }
}

export interface ListInstanceProfilesRequest {
  __type?: "ListInstanceProfilesRequest";
  /**
   *
   *         <p>An integer specifying the maximum number of items you want to return in the API response.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return the
   *             next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListInstanceProfilesRequest {
  export function isa(o: any): o is ListInstanceProfilesRequest {
    return _smithy.isa(o, "ListInstanceProfilesRequest");
  }
}

export interface ListInstanceProfilesResult extends $MetadataBearer {
  __type?: "ListInstanceProfilesResult";
  /**
   *
   *         <p>An object containing information about your instance profiles.</p>
   *
   */
  instanceProfiles?: Array<InstanceProfile>;

  /**
   *
   *         <p>An identifier that can be used in the next call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListInstanceProfilesResult {
  export function isa(o: any): o is ListInstanceProfilesResult {
    return _smithy.isa(o, "ListInstanceProfilesResult");
  }
}

/**
 *
 *         <p>Represents a request to the list jobs operation.</p>
 *
 */
export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   *
   *         <p>The run's Amazon Resource Name (ARN).</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListJobsRequest {
  export function isa(o: any): o is ListJobsRequest {
    return _smithy.isa(o, "ListJobsRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list jobs request.</p>
 *
 */
export interface ListJobsResult extends $MetadataBearer {
  __type?: "ListJobsResult";
  /**
   *
   *         <p>Information about the jobs.</p>
   *
   */
  jobs?: Array<Job>;

  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListJobsResult {
  export function isa(o: any): o is ListJobsResult {
    return _smithy.isa(o, "ListJobsResult");
  }
}

export interface ListNetworkProfilesRequest {
  __type?: "ListNetworkProfilesRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project for which you want to list network profiles.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>The type of network profile you wish to return information about. Valid values are listed
   *             below.</p>
   *
   */
  type?: NetworkProfileType | string;
}

export namespace ListNetworkProfilesRequest {
  export function isa(o: any): o is ListNetworkProfilesRequest {
    return _smithy.isa(o, "ListNetworkProfilesRequest");
  }
}

export interface ListNetworkProfilesResult extends $MetadataBearer {
  __type?: "ListNetworkProfilesResult";
  /**
   *
   *         <p>A list of the available network profiles.</p>
   *
   */
  networkProfiles?: Array<NetworkProfile>;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListNetworkProfilesResult {
  export function isa(o: any): o is ListNetworkProfilesResult {
    return _smithy.isa(o, "ListNetworkProfilesResult");
  }
}

export interface ListOfferingPromotionsRequest {
  __type?: "ListOfferingPromotionsRequest";
  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListOfferingPromotionsRequest {
  export function isa(o: any): o is ListOfferingPromotionsRequest {
    return _smithy.isa(o, "ListOfferingPromotionsRequest");
  }
}

export interface ListOfferingPromotionsResult extends $MetadataBearer {
  __type?: "ListOfferingPromotionsResult";
  /**
   *
   *         <p>An identifier to be used in the next call to this operation, to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>Information about the offering promotions.</p>
   *
   */
  offeringPromotions?: Array<OfferingPromotion>;
}

export namespace ListOfferingPromotionsResult {
  export function isa(o: any): o is ListOfferingPromotionsResult {
    return _smithy.isa(o, "ListOfferingPromotionsResult");
  }
}

/**
 *
 *         <p>Represents the request to list the offering transaction history.</p>
 *
 */
export interface ListOfferingTransactionsRequest {
  __type?: "ListOfferingTransactionsRequest";
  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListOfferingTransactionsRequest {
  export function isa(o: any): o is ListOfferingTransactionsRequest {
    return _smithy.isa(o, "ListOfferingTransactionsRequest");
  }
}

/**
 *
 *         <p>Returns the transaction log of the specified offerings.</p>
 *
 */
export interface ListOfferingTransactionsResult extends $MetadataBearer {
  __type?: "ListOfferingTransactionsResult";
  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>The audit log of subscriptions you have purchased and modified through AWS Device Farm.</p>
   *
   */
  offeringTransactions?: Array<OfferingTransaction>;
}

export namespace ListOfferingTransactionsResult {
  export function isa(o: any): o is ListOfferingTransactionsResult {
    return _smithy.isa(o, "ListOfferingTransactionsResult");
  }
}

/**
 *
 *         <p>Represents the request to list all offerings.</p>
 *
 */
export interface ListOfferingsRequest {
  __type?: "ListOfferingsRequest";
  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListOfferingsRequest {
  export function isa(o: any): o is ListOfferingsRequest {
    return _smithy.isa(o, "ListOfferingsRequest");
  }
}

/**
 *
 *         <p>Represents the return values of the list of offerings.</p>
 *
 */
export interface ListOfferingsResult extends $MetadataBearer {
  __type?: "ListOfferingsResult";
  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>A value representing the list offering results.</p>
   *
   */
  offerings?: Array<Offering>;
}

export namespace ListOfferingsResult {
  export function isa(o: any): o is ListOfferingsResult {
    return _smithy.isa(o, "ListOfferingsResult");
  }
}

/**
 *
 *         <p>Represents a request to the list projects operation.</p>
 *
 */
export interface ListProjectsRequest {
  __type?: "ListProjectsRequest";
  /**
   *
   *         <p>Optional. If no Amazon Resource Name (ARN) is specified, then AWS Device Farm returns a list of all
   *             projects for the AWS account. You can also specify a project ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListProjectsRequest {
  export function isa(o: any): o is ListProjectsRequest {
    return _smithy.isa(o, "ListProjectsRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list projects request.</p>
 *
 */
export interface ListProjectsResult extends $MetadataBearer {
  __type?: "ListProjectsResult";
  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>Information about the projects.</p>
   *
   */
  projects?: Array<Project>;
}

export namespace ListProjectsResult {
  export function isa(o: any): o is ListProjectsResult {
    return _smithy.isa(o, "ListProjectsResult");
  }
}

/**
 *
 *         <p>Represents the request to return information about the remote access session.</p>
 *
 */
export interface ListRemoteAccessSessionsRequest {
  __type?: "ListRemoteAccessSessionsRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project about which you are requesting
   *             information.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListRemoteAccessSessionsRequest {
  export function isa(o: any): o is ListRemoteAccessSessionsRequest {
    return _smithy.isa(o, "ListRemoteAccessSessionsRequest");
  }
}

/**
 *
 *         <p>Represents the response from the server after AWS Device Farm makes a request to return information
 *             about the remote access session.</p>
 *
 */
export interface ListRemoteAccessSessionsResult extends $MetadataBearer {
  __type?: "ListRemoteAccessSessionsResult";
  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>A container representing the metadata from the service about each remote access session you are
   *             requesting.</p>
   *
   */
  remoteAccessSessions?: Array<RemoteAccessSession>;
}

export namespace ListRemoteAccessSessionsResult {
  export function isa(o: any): o is ListRemoteAccessSessionsResult {
    return _smithy.isa(o, "ListRemoteAccessSessionsResult");
  }
}

/**
 *
 *         <p>Represents a request to the list runs operation.</p>
 *
 */
export interface ListRunsRequest {
  __type?: "ListRunsRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project for which you want to list runs.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListRunsRequest {
  export function isa(o: any): o is ListRunsRequest {
    return _smithy.isa(o, "ListRunsRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list runs request.</p>
 *
 */
export interface ListRunsResult extends $MetadataBearer {
  __type?: "ListRunsResult";
  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>Information about the runs.</p>
   *
   */
  runs?: Array<Run>;
}

export namespace ListRunsResult {
  export function isa(o: any): o is ListRunsResult {
    return _smithy.isa(o, "ListRunsResult");
  }
}

/**
 *
 *         <p>Represents a request to the list samples operation.</p>
 *
 */
export interface ListSamplesRequest {
  __type?: "ListSamplesRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the job used to list samples.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListSamplesRequest {
  export function isa(o: any): o is ListSamplesRequest {
    return _smithy.isa(o, "ListSamplesRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list samples request.</p>
 *
 */
export interface ListSamplesResult extends $MetadataBearer {
  __type?: "ListSamplesResult";
  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>Information about the samples.</p>
   *
   */
  samples?: Array<Sample>;
}

export namespace ListSamplesResult {
  export function isa(o: any): o is ListSamplesResult {
    return _smithy.isa(o, "ListSamplesResult");
  }
}

/**
 *
 *         <p>Represents a request to the list suites operation.</p>
 *
 */
export interface ListSuitesRequest {
  __type?: "ListSuitesRequest";
  /**
   *
   *         <p>The job's Amazon Resource Name (ARN).</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListSuitesRequest {
  export function isa(o: any): o is ListSuitesRequest {
    return _smithy.isa(o, "ListSuitesRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list suites request.</p>
 *
 */
export interface ListSuitesResult extends $MetadataBearer {
  __type?: "ListSuitesResult";
  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>Information about the suites.</p>
   *
   */
  suites?: Array<Suite>;
}

export namespace ListSuitesResult {
  export function isa(o: any): o is ListSuitesResult {
    return _smithy.isa(o, "ListSuitesResult");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the resource(s) for which to list tags. You can associate tags with the
   *             following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>, <code>NETWORK_PROFILE</code>,
   *                 <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>, <code>SESSION</code>,
   *                 <code>DEVICE_POOL</code>, <code>DEVICE</code>, and <code>VPCE_CONFIGURATION</code>.</p>
   *
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse extends $MetadataBearer {
  __type?: "ListTagsForResourceResponse";
  /**
   *
   *         <p>The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum
   *             character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return _smithy.isa(o, "ListTagsForResourceResponse");
  }
}

/**
 *
 *         <p>Represents a request to the list tests operation.</p>
 *
 */
export interface ListTestsRequest {
  __type?: "ListTestsRequest";
  /**
   *
   *         <p>The test suite's Amazon Resource Name (ARN).</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListTestsRequest {
  export function isa(o: any): o is ListTestsRequest {
    return _smithy.isa(o, "ListTestsRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list tests request.</p>
 *
 */
export interface ListTestsResult extends $MetadataBearer {
  __type?: "ListTestsResult";
  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>Information about the tests.</p>
   *
   */
  tests?: Array<Test>;
}

export namespace ListTestsResult {
  export function isa(o: any): o is ListTestsResult {
    return _smithy.isa(o, "ListTestsResult");
  }
}

/**
 *
 *         <p>Represents a request to the list unique problems operation.</p>
 *
 */
export interface ListUniqueProblemsRequest {
  __type?: "ListUniqueProblemsRequest";
  /**
   *
   *         <p>The unique problems' ARNs.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListUniqueProblemsRequest {
  export function isa(o: any): o is ListUniqueProblemsRequest {
    return _smithy.isa(o, "ListUniqueProblemsRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list unique problems request.</p>
 *
 */
export interface ListUniqueProblemsResult extends $MetadataBearer {
  __type?: "ListUniqueProblemsResult";
  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>Information about the unique problems.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending condition.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED: A passing condition.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED: A warning condition.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED: A failed condition.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED: A skipped condition.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED: An error condition.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED: A stopped condition.</p>
   *             </li>
   *          </ul>
   *
   */
  uniqueProblems?: { [key: string]: Array<UniqueProblem> };
}

export namespace ListUniqueProblemsResult {
  export function isa(o: any): o is ListUniqueProblemsResult {
    return _smithy.isa(o, "ListUniqueProblemsResult");
  }
}

/**
 *
 *         <p>Represents a request to the list uploads operation.</p>
 *
 */
export interface ListUploadsRequest {
  __type?: "ListUploadsRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project for which you want to list uploads.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return
   *             the next set of items in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>The type of upload.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP: An Android upload.</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP: An iOS upload.</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP: A web application upload.</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA: An external data upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE: An Appium Node.js test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE: An Appium Ruby test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload for a web
   *                     app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE: An Appium Node.js test package upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE: An Appium Ruby test package upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_TEST_PACKAGE: A Calabash test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE: An Xcode test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE: An Xcode UI test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC: An Appium Node.js test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p> APPIUM_RUBY_TEST_SPEC: An Appium Ruby test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC: An Appium Node.js test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC: An Appium Ruby test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC: An Xcode UI test spec upload.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: UploadType | string;
}

export namespace ListUploadsRequest {
  export function isa(o: any): o is ListUploadsRequest {
    return _smithy.isa(o, "ListUploadsRequest");
  }
}

/**
 *
 *         <p>Represents the result of a list uploads request.</p>
 *
 */
export interface ListUploadsResult extends $MetadataBearer {
  __type?: "ListUploadsResult";
  /**
   *
   *         <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned, which can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>Information about the uploads.</p>
   *
   */
  uploads?: Array<Upload>;
}

export namespace ListUploadsResult {
  export function isa(o: any): o is ListUploadsResult {
    return _smithy.isa(o, "ListUploadsResult");
  }
}

export interface ListVPCEConfigurationsRequest {
  __type?: "ListVPCEConfigurationsRequest";
  /**
   *
   *         <p>An integer specifying the maximum number of items you want to return in the API response.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return the
   *             next set of items in the list.</p>
   *
   */
  nextToken?: string;
}

export namespace ListVPCEConfigurationsRequest {
  export function isa(o: any): o is ListVPCEConfigurationsRequest {
    return _smithy.isa(o, "ListVPCEConfigurationsRequest");
  }
}

export interface ListVPCEConfigurationsResult extends $MetadataBearer {
  __type?: "ListVPCEConfigurationsResult";
  /**
   *
   *         <p>An identifier that was returned from the previous call to this operation, which can be used to return the
   *             next set of items in the list.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *         <p>An array of <code>VPCEConfiguration</code> objects containing information about your VPC endpoint
   *             configuration.</p>
   *
   */
  vpceConfigurations?: Array<VPCEConfiguration>;
}

export namespace ListVPCEConfigurationsResult {
  export function isa(o: any): o is ListVPCEConfigurationsResult {
    return _smithy.isa(o, "ListVPCEConfigurationsResult");
  }
}

/**
 *
 *         <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for
 *             example 47.6204, -122.3491).</p>
 *         <p>Elevation is currently not supported.</p>
 *
 */
export interface Location {
  __type?: "Location";
  /**
   *
   *         <p>The latitude.</p>
   *
   */
  latitude: number | undefined;

  /**
   *
   *         <p>The longitude.</p>
   *
   */
  longitude: number | undefined;
}

export namespace Location {
  export function isa(o: any): o is Location {
    return _smithy.isa(o, "Location");
  }
}

/**
 *
 *         <p>A number representing the monetary amount for an offering or transaction.</p>
 *
 */
export interface MonetaryAmount {
  __type?: "MonetaryAmount";
  /**
   *
   *         <p>The numerical amount of an offering or transaction.</p>
   *
   */
  amount?: number;

  /**
   *
   *         <p>The currency code of a monetary amount. For example, <code>USD</code> means "U.S. dollars."</p>
   *
   */
  currencyCode?: CurrencyCode | string;
}

export namespace MonetaryAmount {
  export function isa(o: any): o is MonetaryAmount {
    return _smithy.isa(o, "MonetaryAmount");
  }
}

/**
 *
 *         <p>An array of settings that describes characteristics of a network profile.</p>
 *
 */
export interface NetworkProfile {
  __type?: "NetworkProfile";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the network profile.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The description of the network profile.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>
   *
   */
  downlinkBandwidthBits?: number;

  /**
   *
   *         <p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  downlinkDelayMs?: number;

  /**
   *
   *         <p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  downlinkJitterMs?: number;

  /**
   *
   *         <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   *
   */
  downlinkLossPercent?: number;

  /**
   *
   *         <p>The name of the network profile.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The type of network profile. Valid values are listed below.</p>
   *
   */
  type?: NetworkProfileType | string;

  /**
   *
   *         <p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>
   *
   */
  uplinkBandwidthBits?: number;

  /**
   *
   *         <p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  uplinkDelayMs?: number;

  /**
   *
   *         <p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  uplinkJitterMs?: number;

  /**
   *
   *         <p>Proportion of transmitted packets that fail to arrive from 0 to 100 percent.</p>
   *
   */
  uplinkLossPercent?: number;
}

export namespace NetworkProfile {
  export function isa(o: any): o is NetworkProfile {
    return _smithy.isa(o, "NetworkProfile");
  }
}

/**
 *
 *         <p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>
 *
 */
export interface NotEligibleException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NotEligibleException";
  name: "NotEligibleException";
  $fault: "client";
  /**
   *
   *         <p>The HTTP response code of a Not Eligible exception.</p>
   *
   */
  message?: string;
}

export namespace NotEligibleException {
  export function isa(o: any): o is NotEligibleException {
    return _smithy.isa(o, "NotEligibleException");
  }
}

/**
 *
 *         <p>The specified entity was not found.</p>
 *
 */
export interface NotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NotFoundException";
  name: "NotFoundException";
  $fault: "client";
  /**
   *
   *         <p>Any additional information about the exception.</p>
   *
   */
  message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return _smithy.isa(o, "NotFoundException");
  }
}

/**
 *
 *         <p>Represents the metadata of a device offering.</p>
 *
 */
export interface Offering {
  __type?: "Offering";
  /**
   *
   *         <p>A string describing the offering.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>The ID that corresponds to a device offering.</p>
   *
   */
  id?: string;

  /**
   *
   *         <p>The platform of the device (e.g., ANDROID or IOS).</p>
   *
   */
  platform?: DevicePlatform | string;

  /**
   *
   *         <p>Specifies whether there are recurring charges for the offering.</p>
   *
   */
  recurringCharges?: Array<RecurringCharge>;

  /**
   *
   *         <p>The type of offering (e.g., "RECURRING") for a device.</p>
   *
   */
  type?: OfferingType | string;
}

export namespace Offering {
  export function isa(o: any): o is Offering {
    return _smithy.isa(o, "Offering");
  }
}

/**
 *
 *         <p>Represents information about an offering promotion.</p>
 *
 */
export interface OfferingPromotion {
  __type?: "OfferingPromotion";
  /**
   *
   *         <p>A string describing the offering promotion.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>The ID of the offering promotion.</p>
   *
   */
  id?: string;
}

export namespace OfferingPromotion {
  export function isa(o: any): o is OfferingPromotion {
    return _smithy.isa(o, "OfferingPromotion");
  }
}

/**
 *
 *         <p>The status of the offering.</p>
 *
 */
export interface OfferingStatus {
  __type?: "OfferingStatus";
  /**
   *
   *         <p>The date on which the offering is effective.</p>
   *
   */
  effectiveOn?: Date;

  /**
   *
   *         <p>Represents the metadata of an offering status.</p>
   *
   */
  offering?: Offering;

  /**
   *
   *         <p>The number of available devices in the offering.</p>
   *
   */
  quantity?: number;

  /**
   *
   *         <p>The type specified for the offering status.</p>
   *
   */
  type?: OfferingTransactionType | string;
}

export namespace OfferingStatus {
  export function isa(o: any): o is OfferingStatus {
    return _smithy.isa(o, "OfferingStatus");
  }
}

/**
 *
 *         <p>Represents the metadata of an offering transaction.</p>
 *
 */
export interface OfferingTransaction {
  __type?: "OfferingTransaction";
  /**
   *
   *         <p>The cost of an offering transaction.</p>
   *
   */
  cost?: MonetaryAmount;

  /**
   *
   *         <p>The date on which an offering transaction was created.</p>
   *
   */
  createdOn?: Date;

  /**
   *
   *         <p>The ID that corresponds to a device offering promotion.</p>
   *
   */
  offeringPromotionId?: string;

  /**
   *
   *         <p>The status of an offering transaction.</p>
   *
   */
  offeringStatus?: OfferingStatus;

  /**
   *
   *         <p>The transaction ID of the offering transaction.</p>
   *
   */
  transactionId?: string;
}

export namespace OfferingTransaction {
  export function isa(o: any): o is OfferingTransaction {
    return _smithy.isa(o, "OfferingTransaction");
  }
}

/**
 *
 *         <p>Represents a specific warning or failure.</p>
 *
 */
export interface Problem {
  __type?: "Problem";
  /**
   *
   *         <p>Information about the associated device.</p>
   *
   */
  device?: Device;

  /**
   *
   *         <p>Information about the associated job.</p>
   *
   */
  job?: ProblemDetail;

  /**
   *
   *         <p>A message about the problem's result.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The problem's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending condition.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED: A passing condition.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED: A warning condition.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED: A failed condition.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED: A skipped condition.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED: An error condition.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED: A stopped condition.</p>
   *             </li>
   *          </ul>
   *
   */
  result?: ExecutionResult | string;

  /**
   *
   *         <p>Information about the associated run.</p>
   *
   */
  run?: ProblemDetail;

  /**
   *
   *         <p>Information about the associated suite.</p>
   *
   */
  suite?: ProblemDetail;

  /**
   *
   *         <p>Information about the associated test.</p>
   *
   */
  test?: ProblemDetail;
}

export namespace Problem {
  export function isa(o: any): o is Problem {
    return _smithy.isa(o, "Problem");
  }
}

/**
 *
 *         <p>Information about a problem detail.</p>
 *
 */
export interface ProblemDetail {
  __type?: "ProblemDetail";
  /**
   *
   *         <p>The problem detail's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The problem detail's name.</p>
   *
   */
  name?: string;
}

export namespace ProblemDetail {
  export function isa(o: any): o is ProblemDetail {
    return _smithy.isa(o, "ProblemDetail");
  }
}

/**
 *
 *         <p>Represents an operating-system neutral workspace for running and managing tests.</p>
 *
 */
export interface Project {
  __type?: "Project";
  /**
   *
   *         <p>The project's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>When the project was created.</p>
   *
   */
  created?: Date;

  /**
   *
   *         <p>The default number of minutes (at the project level) a test run will execute before it times out. The
   *             default value is 150 minutes.</p>
   *
   */
  defaultJobTimeoutMinutes?: number;

  /**
   *
   *         <p>The project's name.</p>
   *
   */
  name?: string;
}

export namespace Project {
  export function isa(o: any): o is Project {
    return _smithy.isa(o, "Project");
  }
}

/**
 *
 *         <p>Represents a request for a purchase offering.</p>
 *
 */
export interface PurchaseOfferingRequest {
  __type?: "PurchaseOfferingRequest";
  /**
   *
   *         <p>The ID of the offering.</p>
   *
   */
  offeringId?: string;

  /**
   *
   *         <p>The ID of the offering promotion to be applied to the purchase.</p>
   *
   */
  offeringPromotionId?: string;

  /**
   *
   *         <p>The number of device slots you wish to purchase in an offering request.</p>
   *
   */
  quantity?: number;
}

export namespace PurchaseOfferingRequest {
  export function isa(o: any): o is PurchaseOfferingRequest {
    return _smithy.isa(o, "PurchaseOfferingRequest");
  }
}

/**
 *
 *         <p>The result of the purchase offering (e.g., success or failure).</p>
 *
 */
export interface PurchaseOfferingResult extends $MetadataBearer {
  __type?: "PurchaseOfferingResult";
  /**
   *
   *         <p>Represents the offering transaction for the purchase result.</p>
   *
   */
  offeringTransaction?: OfferingTransaction;
}

export namespace PurchaseOfferingResult {
  export function isa(o: any): o is PurchaseOfferingResult {
    return _smithy.isa(o, "PurchaseOfferingResult");
  }
}

/**
 *
 *         <p>Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS,
 *             Bluetooth, and NFC.</p>
 *
 */
export interface Radios {
  __type?: "Radios";
  /**
   *
   *         <p>True if Bluetooth is enabled at the beginning of the test; otherwise, false.</p>
   *
   */
  bluetooth?: boolean;

  /**
   *
   *         <p>True if GPS is enabled at the beginning of the test; otherwise, false.</p>
   *
   */
  gps?: boolean;

  /**
   *
   *         <p>True if NFC is enabled at the beginning of the test; otherwise, false.</p>
   *
   */
  nfc?: boolean;

  /**
   *
   *         <p>True if Wi-Fi is enabled at the beginning of the test; otherwise, false.</p>
   *
   */
  wifi?: boolean;
}

export namespace Radios {
  export function isa(o: any): o is Radios {
    return _smithy.isa(o, "Radios");
  }
}

/**
 *
 *         <p>Specifies whether charges for devices will be recurring.</p>
 *
 */
export interface RecurringCharge {
  __type?: "RecurringCharge";
  /**
   *
   *         <p>The cost of the recurring charge.</p>
   *
   */
  cost?: MonetaryAmount;

  /**
   *
   *         <p>The frequency in which charges will recur.</p>
   *
   */
  frequency?: RecurringChargeFrequency | string;
}

export namespace RecurringCharge {
  export function isa(o: any): o is RecurringCharge {
    return _smithy.isa(o, "RecurringCharge");
  }
}

/**
 *
 *         <p>Represents information about the remote access session.</p>
 *
 */
export interface RemoteAccessSession {
  __type?: "RemoteAccessSession";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the remote access session.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The billing method of the remote access session. Possible values include <code>METERED</code> or
   *                 <code>UNMETERED</code>. For more information about metered devices, see <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html#welcome-terminology">AWS Device Farm
   *                 terminology</a>."</p>
   *
   */
  billingMethod?: BillingMethod | string;

  /**
   *
   *         <p>Unique identifier of your client for the remote access session. Only returned if remote debugging is
   *             enabled for the remote access session.</p>
   *         <p>
   *             <i>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</i>
   *          </p>
   *
   */
  clientId?: string;

  /**
   *
   *         <p>The date and time the remote access session was created.</p>
   *
   */
  created?: Date;

  /**
   *
   *         <p>The device (phone or tablet) used in the remote access session.</p>
   *
   */
  device?: Device;

  /**
   *
   *         <p>The number of minutes a device is used in a remote access session (including setup and teardown
   *             minutes).</p>
   *
   */
  deviceMinutes?: DeviceMinutes;

  /**
   *
   *         <p>Unique device identifier for the remote device. Only returned if remote debugging is enabled for the
   *             remote access session.</p>
   *         <p>
   *             <i>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</i>
   *          </p>
   *
   */
  deviceUdid?: string;

  /**
   *
   *         <p>The endpoint for the remote access sesssion.</p>
   *
   */
  endpoint?: string;

  /**
   *
   *         <p>IP address of the EC2 host where you need to connect to remotely debug devices. Only returned if remote
   *             debugging is enabled for the remote access session.</p>
   *         <p>
   *             <i>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer
   *                     supported</a>.</i>
   *          </p>
   *
   */
  hostAddress?: string;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the instance.</p>
   *
   */
  instanceArn?: string;

  /**
   *
   *         <p>The interaction mode of the remote access session. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the
   *                     screen. You <b>cannot</b> run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>NO_VIDEO: You are connected to the device but cannot interact with it or view the screen. This
   *                     mode has the fastest test execution speed. You <b>can</b> run XCUITest
   *                     framework-based tests in this mode.</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_ONLY: You can view the screen but cannot touch or rotate it. You <b>can</b> run XCUITest framework-based tests and watch the screen in this mode.</p>
   *             </li>
   *          </ul>
   *
   */
  interactionMode?: InteractionMode | string;

  /**
   *
   *         <p>A message about the remote access session.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The name of the remote access session.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>This flag is set to <code>true</code> if remote debugging is enabled for the remote access
   *             session.</p>
   *         <p>
   *             <i>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *             longer supported</a>.</i>
   *          </p>
   *
   */
  remoteDebugEnabled?: boolean;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.</p>
   *
   */
  remoteRecordAppArn?: string;

  /**
   *
   *         <p>This flag is set to <code>true</code> if remote recording is enabled for the remote access session.</p>
   *
   */
  remoteRecordEnabled?: boolean;

  /**
   *
   *         <p>The result of the remote access session. Can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending condition.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED: A passing condition.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED: A warning condition.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED: A failed condition.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED: A skipped condition.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED: An error condition.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED: A stopped condition.</p>
   *             </li>
   *          </ul>
   *
   */
  result?: ExecutionResult | string;

  /**
   *
   *         <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public
   *             devices, Device Farm always signs your apps again and this parameter has no effect.</p>
   *         <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   *
   */
  skipAppResign?: boolean;

  /**
   *
   *         <p>The date and time the remote access session was started.</p>
   *
   */
  started?: Date;

  /**
   *
   *         <p>The status of the remote access session. Can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY: A pending concurrency status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE: A pending device status.</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING: A processing status.</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING: A scheduling status.</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING: A preparing status.</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING: A running status.</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED: A completed status.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING: A stopping status.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: ExecutionStatus | string;

  /**
   *
   *         <p>The date and time the remote access session was stopped.</p>
   *
   */
  stopped?: Date;
}

export namespace RemoteAccessSession {
  export function isa(o: any): o is RemoteAccessSession {
    return _smithy.isa(o, "RemoteAccessSession");
  }
}

/**
 *
 *         <p>A request representing an offering renewal.</p>
 *
 */
export interface RenewOfferingRequest {
  __type?: "RenewOfferingRequest";
  /**
   *
   *         <p>The ID of a request to renew an offering.</p>
   *
   */
  offeringId?: string;

  /**
   *
   *         <p>The quantity requested in an offering renewal.</p>
   *
   */
  quantity?: number;
}

export namespace RenewOfferingRequest {
  export function isa(o: any): o is RenewOfferingRequest {
    return _smithy.isa(o, "RenewOfferingRequest");
  }
}

/**
 *
 *         <p>The result of a renewal offering.</p>
 *
 */
export interface RenewOfferingResult extends $MetadataBearer {
  __type?: "RenewOfferingResult";
  /**
   *
   *         <p>Represents the status of the offering transaction for the renewal.</p>
   *
   */
  offeringTransaction?: OfferingTransaction;
}

export namespace RenewOfferingResult {
  export function isa(o: any): o is RenewOfferingResult {
    return _smithy.isa(o, "RenewOfferingResult");
  }
}

/**
 *
 *         <p>Represents the screen resolution of a device in height and width, expressed in pixels.</p>
 *
 */
export interface Resolution {
  __type?: "Resolution";
  /**
   *
   *         <p>The screen resolution's height, expressed in pixels.</p>
   *
   */
  height?: number;

  /**
   *
   *         <p>The screen resolution's width, expressed in pixels.</p>
   *
   */
  width?: number;
}

export namespace Resolution {
  export function isa(o: any): o is Resolution {
    return _smithy.isa(o, "Resolution");
  }
}

/**
 *
 *         <p>Represents a condition for a device pool.</p>
 *
 */
export interface Rule {
  __type?: "Rule";
  /**
   *
   *         <p>The rule's stringified attribute. For example, specify the value as <code>"\"abc\""</code>.</p>
   *         <p>The supported operators for each attribute are provided in the following list.</p>
   *         <dl>
   *             <dt>APPIUM_VERSION</dt>
   *             <dd>
   *                     <p>The Appium version for the test.</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device. For example,
   *                         "arn:aws:devicefarm:us-west-2::device:12345Example".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>AVAILABILITY</dt>
   *             <dd>
   *                     <p>The current availability of the device. Valid values are "AVAILABLE", "HIGHLY_AVAILABLE",
   *                         "BUSY", or "TEMPORARY_NOT_AVAILABLE".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FLEET_TYPE</dt>
   *             <dd>
   *                     <p>The fleet type. Valid values are "PUBLIC" or "PRIVATE".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FORM_FACTOR</dt>
   *             <dd>
   *                     <p>The device form factor. Valid values are "PHONE" or "TABLET".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device instance.</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_LABELS</dt>
   *             <dd>
   *                     <p>The label of the device instance.</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>MANUFACTURER</dt>
   *             <dd>
   *                     <p>The device manufacturer. For example, "Apple".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>MODEL</dt>
   *             <dd>
   *                     <p>The device model, such as "Apple iPad Air 2" or "Google Pixel".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>CONTAINS</code>, <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>OS_VERSION</dt>
   *             <dd>
   *                     <p>The operating system version. For example, "10.3.2".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>GREATER_THAN</code>,
   *                             <code>GREATER_THAN_OR_EQUALS</code>, <code>IN</code>, <code>LESS_THAN</code>,
   *                             <code>LESS_THAN_OR_EQUALS</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>PLATFORM</dt>
   *             <dd>
   *                     <p>The device platform. Valid values are "ANDROID" or "IOS".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_ACCESS_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote access. Valid values are "TRUE" or "FALSE".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_DEBUG_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote debugging. Valid values are "TRUE" or "FALSE".</p>
   *                     <p>
   *                   <i>Supported operators</i>: <code>EQUALS</code>
   *                </p>
   *                     <p>
   *                   <i>This filter will be ignored, as remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                         longer supported</a>.</i>
   *                </p>
   *                 </dd>
   *          </dl>
   *
   */
  attribute?: DeviceAttribute | string;

  /**
   *
   *         <p>Specifies how Device Farm compares the rule's attribute to the value. For the operators that are
   *             supported by each attribute, see the attribute descriptions.</p>
   *
   */
  operator?: RuleOperator | string;

  /**
   *
   *         <p>The rule's value.</p>
   *
   */
  value?: string;
}

export namespace Rule {
  export function isa(o: any): o is Rule {
    return _smithy.isa(o, "Rule");
  }
}

/**
 *
 *         <p>Represents a test run on a set of devices with a given app package, test parameters, etc.</p>
 *
 */
export interface Run {
  __type?: "Run";
  /**
   *
   *         <p>An app to upload or that has been uploaded.</p>
   *
   */
  appUpload?: string;

  /**
   *
   *         <p>The run's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>Specifies the billing method for a test run: <code>metered</code> or <code>unmetered</code>. If the
   *             parameter is not specified, the default value is <code>metered</code>.</p>
   *
   */
  billingMethod?: BillingMethod | string;

  /**
   *
   *         <p>The total number of completed jobs.</p>
   *
   */
  completedJobs?: number;

  /**
   *
   *         <p>The run's result counters.</p>
   *
   */
  counters?: Counters;

  /**
   *
   *         <p>When the run was created.</p>
   *
   */
  created?: Date;

  /**
   *
   *         <p>Output <code>CustomerArtifactPaths</code> object for the test run.</p>
   *
   */
  customerArtifactPaths?: CustomerArtifactPaths;

  /**
   *
   *         <p>Represents the total (metered or unmetered) minutes used by the test run.</p>
   *
   */
  deviceMinutes?: DeviceMinutes;

  /**
   *
   *         <p>The ARN of the device pool for the run.</p>
   *
   */
  devicePoolArn?: string;

  /**
   *
   *         <p>The results of a device filter used to select the devices for a test run.</p>
   *
   */
  deviceSelectionResult?: DeviceSelectionResult;

  /**
   *
   *         <p>For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz test should
   *             perform.</p>
   *
   */
  eventCount?: number;

  /**
   *
   *         <p>The number of minutes the job will execute before it times out.</p>
   *
   */
  jobTimeoutMinutes?: number;

  /**
   *
   *         <p>Information about the locale that is used for the run.</p>
   *
   */
  locale?: string;

  /**
   *
   *         <p>Information about the location that is used for the run.</p>
   *
   */
  location?: Location;

  /**
   *
   *         <p>A message about the run's result.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The run's name.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The network profile being used for a test run.</p>
   *
   */
  networkProfile?: NetworkProfile;

  /**
   *
   *         <p>Read-only URL for an object in S3 bucket where you can get the parsing results of the test package. If
   *             the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points
   *             to.</p>
   *
   */
  parsingResultUrl?: string;

  /**
   *
   *         <p>The run's platform.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID: The Android platform.</p>
   *             </li>
   *             <li>
   *                 <p>IOS: The iOS platform.</p>
   *             </li>
   *          </ul>
   *
   */
  platform?: DevicePlatform | string;

  /**
   *
   *         <p>Information about the radio states for the run.</p>
   *
   */
  radios?: Radios;

  /**
   *
   *         <p>The run's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending condition.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED: A passing condition.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED: A warning condition.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED: A failed condition.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED: A skipped condition.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED: An error condition.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED: A stopped condition.</p>
   *             </li>
   *          </ul>
   *
   */
  result?: ExecutionResult | string;

  /**
   *
   *         <p>Supporting field for the result field. Set only if <code>result</code> is <code>SKIPPED</code>.
   *                 <code>PARSING_FAILED</code> if the result is skipped because of test package parsing failure.</p>
   *
   */
  resultCode?: ExecutionResultCode | string;

  /**
   *
   *         <p>For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same seed value between
   *             tests ensures identical event sequences.</p>
   *
   */
  seed?: number;

  /**
   *
   *         <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public
   *             devices, Device Farm always signs your apps again and this parameter has no effect.</p>
   *         <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   *
   */
  skipAppResign?: boolean;

  /**
   *
   *         <p>The run's start time.</p>
   *
   */
  started?: Date;

  /**
   *
   *         <p>The run's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY: A pending concurrency status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE: A pending device status.</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING: A processing status.</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING: A scheduling status.</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING: A preparing status.</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING: A running status.</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED: A completed status.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING: A stopping status.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: ExecutionStatus | string;

  /**
   *
   *         <p>The run's stop time.</p>
   *
   */
  stopped?: Date;

  /**
   *
   *         <p>The ARN of the YAML-formatted test specification for the run.</p>
   *
   */
  testSpecArn?: string;

  /**
   *
   *         <p>The total number of jobs for the run.</p>
   *
   */
  totalJobs?: number;

  /**
   *
   *         <p>The run's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ: The built-in fuzz type.</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting
   *                     with it and capturing screenshots at the same time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON: The Appium Python type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE: The Appium Node.js type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY: The Appium Ruby type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY: The Appium Ruby type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH: The Calabash type.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION: The Instrumentation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION: The uiautomation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR: The uiautomator type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST: The Xcode test type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI: The Xcode UI test type.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: TestType | string;

  /**
   *
   *         <p>The Device Farm console URL for the recording of the run.</p>
   *
   */
  webUrl?: string;
}

export namespace Run {
  export function isa(o: any): o is Run {
    return _smithy.isa(o, "Run");
  }
}

/**
 *
 *         <p>Represents a sample of performance data.</p>
 *
 */
export interface Sample {
  __type?: "Sample";
  /**
   *
   *         <p>The sample's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The sample's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>CPU: A CPU sample type. This is expressed as the app processing CPU time (including child
   *                     processes) as reported by process, as a percentage.</p>
   *             </li>
   *             <li>
   *                 <p>MEMORY: A memory usage sample type. This is expressed as the total proportional set size of an
   *                     app process, in kilobytes.</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_AVG_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_FPS</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_FRAMES</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_MAX_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>NATIVE_MIN_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_AVG_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_FPS</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_FRAMES</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_MAX_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>OPENGL_MIN_DRAWTIME</p>
   *             </li>
   *             <li>
   *                 <p>RX</p>
   *             </li>
   *             <li>
   *                 <p>RX_RATE: The total number of bytes per second (TCP and UDP) that are sent, by app
   *                     process.</p>
   *             </li>
   *             <li>
   *                 <p>THREADS: A threads sample type. This is expressed as the total number of threads per app
   *                     process.</p>
   *             </li>
   *             <li>
   *                 <p>TX</p>
   *             </li>
   *             <li>
   *                 <p>TX_RATE: The total number of bytes per second (TCP and UDP) that are received, by app
   *                     process.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: SampleType | string;

  /**
   *
   *         <p>The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the sample's
   *             file.</p>
   *
   */
  url?: string;
}

export namespace Sample {
  export function isa(o: any): o is Sample {
    return _smithy.isa(o, "Sample");
  }
}

/**
 *
 *         <p>Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and
 *             network profiles.</p>
 *
 */
export interface ScheduleRunConfiguration {
  __type?: "ScheduleRunConfiguration";
  /**
   *
   *         <p>A list of Upload ARNs for app packages that will be installed alongside your app.</p>
   *
   */
  auxiliaryApps?: Array<string>;

  /**
   *
   *         <p>Specifies the billing method for a test run: <code>metered</code> or <code>unmetered</code>. If the
   *             parameter is not specified, the default value is <code>metered</code>.</p>
   *
   */
  billingMethod?: BillingMethod | string;

  /**
   *
   *         <p>Input <code>CustomerArtifactPaths</code> object for the scheduled run configuration.</p>
   *
   */
  customerArtifactPaths?: CustomerArtifactPaths;

  /**
   *
   *         <p>The ARN of the extra data for the run. The extra data is a .zip file that AWS Device Farm will extract
   *             to external data for Android or the app's sandbox for iOS.</p>
   *
   */
  extraDataPackageArn?: string;

  /**
   *
   *         <p>Information about the locale that is used for the run.</p>
   *
   */
  locale?: string;

  /**
   *
   *         <p>Information about the location that is used for the run.</p>
   *
   */
  location?: Location;

  /**
   *
   *         <p>Reserved for internal use.</p>
   *
   *
   */
  networkProfileArn?: string;

  /**
   *
   *         <p>Information about the radio states for the run.</p>
   *
   */
  radios?: Radios;

  /**
   *
   *         <p>An array of Amazon Resource Names (ARNs) for your VPC endpoint configurations.</p>
   *
   */
  vpceConfigurationArns?: Array<string>;
}

export namespace ScheduleRunConfiguration {
  export function isa(o: any): o is ScheduleRunConfiguration {
    return _smithy.isa(o, "ScheduleRunConfiguration");
  }
}

/**
 *
 *         <p>Represents a request to the schedule run operation.</p>
 *
 */
export interface ScheduleRunRequest {
  __type?: "ScheduleRunRequest";
  /**
   *
   *         <p>The ARN of the app to schedule a run.</p>
   *
   */
  appArn?: string;

  /**
   *
   *         <p>Information about the settings for the run to be scheduled.</p>
   *
   */
  configuration?: ScheduleRunConfiguration;

  /**
   *
   *         <p>The ARN of the device pool for the run to be scheduled.</p>
   *
   */
  devicePoolArn?: string;

  /**
   *
   *         <p>The filter criteria used to dynamically select a set of devices for a test run, as well as the maximum
   *             number of devices to be included in the run.</p>
   *         <p>Either <b>
   *                <code>devicePoolArn</code>
   *             </b> or <b>
   *                <code>deviceSelectionConfiguration</code>
   *             </b> is required in a request.</p>
   *
   */
  deviceSelectionConfiguration?: DeviceSelectionConfiguration;

  /**
   *
   *         <p>Specifies configuration information about a test run, such as the execution timeout (in
   *             minutes).</p>
   *
   */
  executionConfiguration?: ExecutionConfiguration;

  /**
   *
   *         <p>The name for the run to be scheduled.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The ARN of the project for the run to be scheduled.</p>
   *
   */
  projectArn: string | undefined;

  /**
   *
   *         <p>Information about the test for the run to be scheduled.</p>
   *
   */
  test: ScheduleRunTest | undefined;
}

export namespace ScheduleRunRequest {
  export function isa(o: any): o is ScheduleRunRequest {
    return _smithy.isa(o, "ScheduleRunRequest");
  }
}

/**
 *
 *         <p>Represents the result of a schedule run request.</p>
 *
 */
export interface ScheduleRunResult extends $MetadataBearer {
  __type?: "ScheduleRunResult";
  /**
   *
   *         <p>Information about the scheduled run.</p>
   *
   */
  run?: Run;
}

export namespace ScheduleRunResult {
  export function isa(o: any): o is ScheduleRunResult {
    return _smithy.isa(o, "ScheduleRunResult");
  }
}

/**
 *
 *         <p>Represents test settings. This data structure is passed in as the "test" parameter to ScheduleRun. For
 *             an example of the JSON request syntax, see <a>ScheduleRun</a>.</p>
 *
 */
export interface ScheduleRunTest {
  __type?: "ScheduleRunTest";
  /**
   *
   *
   *         <p>The test's filter.</p>
   *
   */
  filter?: string;

  /**
   *
   *         <p>The test's parameters, such as test framework parameters and fixture settings. Parameters are
   *             represented by name-value pairs of strings.</p>
   *         <p>For all tests:</p>
   *         <ul>
   *             <li>
   *                 <p>app_performance_monitoring: Performance monitoring is enabled by default. Set this parameter to
   *                     "false" to disable it.</p>
   *             </li>
   *          </ul>
   *         <p>For Calabash tests:</p>
   *         <ul>
   *             <li>
   *                 <p>profile: A cucumber profile, for example, "my_profile_name".</p>
   *             </li>
   *             <li>
   *                 <p>tags: You can limit execution to features or scenarios that have (or don't have) certain tags,
   *                     for example, "@smoke" or "@smoke,~@wip".</p>
   *             </li>
   *          </ul>
   *         <p>For Appium tests (all types):</p>
   *         <ul>
   *             <li>
   *                 <p>appium_version: The Appium version. Currently supported values are "1.6.5" (and higher),
   *                     "latest", and "default".</p>
   *                 <ul>
   *                   <li>
   *
   *                         <p>“latest” will run the latest Appium version supported by Device Farm (1.9.1).</p>
   *                     </li>
   *                   <li>
   *                         <p>For “default”, Device Farm will choose a compatible version of Appium for the device.
   *                             The current behavior is to run 1.7.2 on Android devices and iOS 9 and earlier, 1.7.2 for iOS
   *                             10 and later.</p>
   *                     </li>
   *                   <li>
   *                         <p>This behavior is subject to change.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>For Fuzz tests (Android only):</p>
   *         <ul>
   *             <li>
   *                 <p>event_count: The number of events, between 1 and 10000, that the UI fuzz test should
   *                     perform.</p>
   *             </li>
   *             <li>
   *                 <p>throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should wait between
   *                     events.</p>
   *             </li>
   *             <li>
   *                 <p>seed: A seed to use for randomizing the UI fuzz test. Using the same seed value between tests
   *                     ensures identical event sequences.</p>
   *             </li>
   *          </ul>
   *         <p>For Explorer tests:</p>
   *         <ul>
   *             <li>
   *                 <p>username: A username to use if the Explorer encounters a login form. If not supplied, no
   *                     username will be inserted.</p>
   *             </li>
   *             <li>
   *                 <p>password: A password to use if the Explorer encounters a login form. If not supplied, no
   *                     password will be inserted.</p>
   *             </li>
   *          </ul>
   *         <p>For Instrumentation:</p>
   *         <ul>
   *             <li>
   *                 <p>filter: A test filter string. Examples:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Running a single test case: "com.android.abc.Test1"</p>
   *                     </li>
   *                   <li>
   *                         <p>Running a single test: "com.android.abc.Test1#smoke"</p>
   *                     </li>
   *                   <li>
   *                         <p>Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>For XCTest and XCTestUI:</p>
   *         <ul>
   *             <li>
   *                 <p>filter: A test filter string. Examples:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Running a single test class: "LoginTests"</p>
   *                     </li>
   *                   <li>
   *                         <p>Running a multiple test classes: "LoginTests,SmokeTests"</p>
   *                     </li>
   *                   <li>
   *                         <p>Running a single test: "LoginTests/testValid"</p>
   *                     </li>
   *                   <li>
   *                         <p>Running multiple tests: "LoginTests/testValid,LoginTests/testInvalid"</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>For UIAutomator:</p>
   *         <ul>
   *             <li>
   *                 <p>filter: A test filter string. Examples:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Running a single test case: "com.android.abc.Test1"</p>
   *                     </li>
   *                   <li>
   *                         <p>Running a single test: "com.android.abc.Test1#smoke"</p>
   *                     </li>
   *                   <li>
   *                         <p>Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   */
  parameters?: { [key: string]: string };

  /**
   *
   *         <p>The ARN of the uploaded test that will be run.</p>
   *
   */
  testPackageArn?: string;

  /**
   *
   *         <p>The ARN of the YAML-formatted test specification.</p>
   *
   */
  testSpecArn?: string;

  /**
   *
   *         <p>The test's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ: The built-in fuzz type.</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting
   *                     with it and capturing screenshots at the same time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON: The Appium Python type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE: The Appium Node.js type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY: The Appium Ruby type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY: The Appium Ruby type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH: The Calabash type.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION: The Instrumentation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION: The uiautomation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR: The uiautomator type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST: The Xcode test type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI: The Xcode UI test type.</p>
   *             </li>
   *          </ul>
   *
   */
  type: TestType | string | undefined;
}

export namespace ScheduleRunTest {
  export function isa(o: any): o is ScheduleRunTest {
    return _smithy.isa(o, "ScheduleRunTest");
  }
}

/**
 *
 *         <p>There was a problem with the service account.</p>
 *
 */
export interface ServiceAccountException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceAccountException";
  name: "ServiceAccountException";
  $fault: "client";
  /**
   *
   *         <p>Any additional information about the exception.</p>
   *
   */
  message?: string;
}

export namespace ServiceAccountException {
  export function isa(o: any): o is ServiceAccountException {
    return _smithy.isa(o, "ServiceAccountException");
  }
}

export interface StopJobRequest {
  __type?: "StopJobRequest";
  /**
   *
   *         <p>Represents the Amazon Resource Name (ARN) of the Device Farm job you wish to stop.</p>
   *
   */
  arn: string | undefined;
}

export namespace StopJobRequest {
  export function isa(o: any): o is StopJobRequest {
    return _smithy.isa(o, "StopJobRequest");
  }
}

export interface StopJobResult extends $MetadataBearer {
  __type?: "StopJobResult";
  /**
   *
   *         <p>The job that was stopped.</p>
   *
   */
  job?: Job;
}

export namespace StopJobResult {
  export function isa(o: any): o is StopJobResult {
    return _smithy.isa(o, "StopJobResult");
  }
}

/**
 *
 *         <p>Represents the request to stop the remote access session.</p>
 *
 */
export interface StopRemoteAccessSessionRequest {
  __type?: "StopRemoteAccessSessionRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the remote access session you wish to stop.</p>
   *
   */
  arn: string | undefined;
}

export namespace StopRemoteAccessSessionRequest {
  export function isa(o: any): o is StopRemoteAccessSessionRequest {
    return _smithy.isa(o, "StopRemoteAccessSessionRequest");
  }
}

/**
 *
 *         <p>Represents the response from the server that describes the remote access session when AWS Device Farm
 *             stops the session.</p>
 *
 */
export interface StopRemoteAccessSessionResult extends $MetadataBearer {
  __type?: "StopRemoteAccessSessionResult";
  /**
   *
   *         <p>A container representing the metadata from the service about the remote access session you are
   *             stopping.</p>
   *
   */
  remoteAccessSession?: RemoteAccessSession;
}

export namespace StopRemoteAccessSessionResult {
  export function isa(o: any): o is StopRemoteAccessSessionResult {
    return _smithy.isa(o, "StopRemoteAccessSessionResult");
  }
}

/**
 *
 *         <p>Represents the request to stop a specific run.</p>
 *
 */
export interface StopRunRequest {
  __type?: "StopRunRequest";
  /**
   *
   *         <p>Represents the Amazon Resource Name (ARN) of the Device Farm run you wish to stop.</p>
   *
   */
  arn: string | undefined;
}

export namespace StopRunRequest {
  export function isa(o: any): o is StopRunRequest {
    return _smithy.isa(o, "StopRunRequest");
  }
}

/**
 *
 *         <p>Represents the results of your stop run attempt.</p>
 *
 */
export interface StopRunResult extends $MetadataBearer {
  __type?: "StopRunResult";
  /**
   *
   *         <p>The run that was stopped.</p>
   *
   */
  run?: Run;
}

export namespace StopRunResult {
  export function isa(o: any): o is StopRunResult {
    return _smithy.isa(o, "StopRunResult");
  }
}

/**
 *
 *         <p>Represents a collection of one or more tests.</p>
 *
 */
export interface Suite {
  __type?: "Suite";
  /**
   *
   *         <p>The suite's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The suite's result counters.</p>
   *
   */
  counters?: Counters;

  /**
   *
   *         <p>When the suite was created.</p>
   *
   */
  created?: Date;

  /**
   *
   *         <p>Represents the total (metered or unmetered) minutes used by the test suite.</p>
   *
   */
  deviceMinutes?: DeviceMinutes;

  /**
   *
   *         <p>A message about the suite's result.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The suite's name.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The suite's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending condition.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED: A passing condition.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED: A warning condition.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED: A failed condition.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED: A skipped condition.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED: An error condition.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED: A stopped condition.</p>
   *             </li>
   *          </ul>
   *
   */
  result?: ExecutionResult | string;

  /**
   *
   *         <p>The suite's start time.</p>
   *
   */
  started?: Date;

  /**
   *
   *         <p>The suite's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY: A pending concurrency status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE: A pending device status.</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING: A processing status.</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING: A scheduling status.</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING: A preparing status.</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING: A running status.</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED: A completed status.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING: A stopping status.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: ExecutionStatus | string;

  /**
   *
   *         <p>The suite's stop time.</p>
   *
   */
  stopped?: Date;

  /**
   *
   *         <p>The suite's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ: The built-in fuzz type.</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting
   *                     with it and capturing screenshots at the same time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON: The Appium Python type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE: The Appium Node.js type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY: The Appium Ruby type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY: The Appium Ruby type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH: The Calabash type.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION: The Instrumentation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION: The uiautomation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR: The uiautomator type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST: The Xcode test type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI: The Xcode UI test type.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: TestType | string;
}

export namespace Suite {
  export function isa(o: any): o is Suite {
    return _smithy.isa(o, "Suite");
  }
}

/**
 *
 *         <p>The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a
 *             key and an optional value, both of which you define. Tag keys can have a maximum character length of 128
 *             characters, and tag values can have a maximum length of 256 characters. </p>
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   *         <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label that acts like a
   *             category for more specific tag values.</p>
   *
   */
  Key: string | undefined;

  /**
   *
   *         <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a descriptor within
   *             a tag category (key).</p>
   *
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

/**
 *
 *         <p>The operation was not successful. Try again.</p>
 *
 */
export interface TagOperationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TagOperationException";
  name: "TagOperationException";
  $fault: "client";
  message?: string;
  resourceName?: string;
}

export namespace TagOperationException {
  export function isa(o: any): o is TagOperationException {
    return _smithy.isa(o, "TagOperationException");
  }
}

/**
 *
 *         <p>The request doesn't comply with the AWS Identity and Access Management (IAM) tag policy. Correct your
 *             request and then retry it.</p>
 *
 */
export interface TagPolicyException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TagPolicyException";
  name: "TagPolicyException";
  $fault: "client";
  message?: string;
  resourceName?: string;
}

export namespace TagPolicyException {
  export function isa(o: any): o is TagPolicyException {
    return _smithy.isa(o, "TagPolicyException");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the resource(s) to which to add tags. You can associate tags with the
   *             following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>, <code>NETWORK_PROFILE</code>,
   *                 <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>, <code>SESSION</code>,
   *                 <code>DEVICE_POOL</code>, <code>DEVICE</code>, and <code>VPCE_CONFIGURATION</code>.</p>
   *
   */
  ResourceARN: string | undefined;

  /**
   *
   *         <p>The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum
   *             character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse extends $MetadataBearer {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return _smithy.isa(o, "TagResourceResponse");
  }
}

/**
 *
 *         <p>Represents a condition that is evaluated.</p>
 *
 */
export interface Test {
  __type?: "Test";
  /**
   *
   *         <p>The test's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The test's result counters.</p>
   *
   */
  counters?: Counters;

  /**
   *
   *         <p>When the test was created.</p>
   *
   */
  created?: Date;

  /**
   *
   *         <p>Represents the total (metered or unmetered) minutes used by the test.</p>
   *
   */
  deviceMinutes?: DeviceMinutes;

  /**
   *
   *         <p>A message about the test's result.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The test's name.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The test's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending condition.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED: A passing condition.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED: A warning condition.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED: A failed condition.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED: A skipped condition.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED: An error condition.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED: A stopped condition.</p>
   *             </li>
   *          </ul>
   *
   */
  result?: ExecutionResult | string;

  /**
   *
   *         <p>The test's start time.</p>
   *
   */
  started?: Date;

  /**
   *
   *         <p>The test's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING: A pending status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY: A pending concurrency status.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE: A pending device status.</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING: A processing status.</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING: A scheduling status.</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING: A preparing status.</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING: A running status.</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED: A completed status.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING: A stopping status.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: ExecutionStatus | string;

  /**
   *
   *         <p>The test's stop time.</p>
   *
   */
  stopped?: Date;

  /**
   *
   *         <p>The test's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ: The built-in fuzz type.</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting
   *                     with it and capturing screenshots at the same time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON: The Appium Python type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE: The Appium Node.js type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY: The Appium Ruby type.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY: The Appium Ruby type for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH: The Calabash type.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION: The Instrumentation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION: The uiautomation type.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR: The uiautomator type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST: The Xcode test type.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI: The Xcode UI test type.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: TestType | string;
}

export namespace Test {
  export function isa(o: any): o is Test {
    return _smithy.isa(o, "Test");
  }
}

/**
 *
 *         <p>The list of tags on the repository is over the limit. The maximum number of tags that can be applied to a
 *             repository is 50. </p>
 *
 */
export interface TooManyTagsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TooManyTagsException";
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
  resourceName?: string;
}

export namespace TooManyTagsException {
  export function isa(o: any): o is TooManyTagsException {
    return _smithy.isa(o, "TooManyTagsException");
  }
}

/**
 *
 *         <p>Represents information about free trial device minutes for an AWS account.</p>
 *
 */
export interface TrialMinutes {
  __type?: "TrialMinutes";
  /**
   *
   *         <p>The number of free trial minutes remaining in the account.</p>
   *
   */
  remaining?: number;

  /**
   *
   *         <p>The total number of free trial minutes that the account started with.</p>
   *
   */
  total?: number;
}

export namespace TrialMinutes {
  export function isa(o: any): o is TrialMinutes {
    return _smithy.isa(o, "TrialMinutes");
  }
}

/**
 *
 *         <p>A collection of one or more problems, grouped by their result.</p>
 *
 */
export interface UniqueProblem {
  __type?: "UniqueProblem";
  /**
   *
   *         <p>A message about the unique problems' result.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>Information about the problems.</p>
   *
   */
  problems?: Array<Problem>;
}

export namespace UniqueProblem {
  export function isa(o: any): o is UniqueProblem {
    return _smithy.isa(o, "UniqueProblem");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the resource(s) from which to delete tags. You can associate tags with
   *             the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>, <code>NETWORK_PROFILE</code>,
   *                 <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>, <code>SESSION</code>,
   *                 <code>DEVICE_POOL</code>, <code>DEVICE</code>, and <code>VPCE_CONFIGURATION</code>.</p>
   *
   */
  ResourceARN: string | undefined;

  /**
   *
   *         <p>The keys of the tags to be removed.</p>
   *
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse extends $MetadataBearer {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return _smithy.isa(o, "UntagResourceResponse");
  }
}

export interface UpdateDeviceInstanceRequest {
  __type?: "UpdateDeviceInstanceRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the device instance.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>An array of strings that you want to associate with the device instance.</p>
   *
   */
  labels?: Array<string>;

  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the profile that you want to associate with the device instance.</p>
   *
   */
  profileArn?: string;
}

export namespace UpdateDeviceInstanceRequest {
  export function isa(o: any): o is UpdateDeviceInstanceRequest {
    return _smithy.isa(o, "UpdateDeviceInstanceRequest");
  }
}

export interface UpdateDeviceInstanceResult extends $MetadataBearer {
  __type?: "UpdateDeviceInstanceResult";
  /**
   *
   *         <p>An object containing information about your device instance.</p>
   *
   */
  deviceInstance?: DeviceInstance;
}

export namespace UpdateDeviceInstanceResult {
  export function isa(o: any): o is UpdateDeviceInstanceResult {
    return _smithy.isa(o, "UpdateDeviceInstanceResult");
  }
}

/**
 *
 *         <p>Represents a request to the update device pool operation.</p>
 *
 */
export interface UpdateDevicePoolRequest {
  __type?: "UpdateDevicePoolRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the Device Farm device pool you wish to update.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>Sets whether the <code>maxDevices</code> parameter applies to your device pool. If you set this parameter
   *             to <code>true</code>, the <code>maxDevices</code> parameter does not apply, and Device Farm does not limit
   *             the number of devices that it adds to your device pool. In this case, Device Farm adds all available devices
   *             that meet the criteria that are specified for the <code>rules</code> parameter.</p>
   *         <p>If you use this parameter in your request, you cannot use the <code>maxDevices</code> parameter in the
   *             same request.</p>
   *
   */
  clearMaxDevices?: boolean;

  /**
   *
   *         <p>A description of the device pool you wish to update.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are
   *             available and that meet the criteria that you assign for the <code>rules</code> parameter. Depending on how
   *             many devices meet these constraints, your device pool might contain fewer devices than the value for this
   *             parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur by running
   *             tests.</p>
   *         <p>If you use this parameter in your request, you cannot use the <code>clearMaxDevices</code> parameter in
   *             the same request.</p>
   *
   */
  maxDevices?: number;

  /**
   *
   *         <p>A string representing the name of the device pool you wish to update.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>Represents the rules you wish to modify for the device pool. Updating rules is optional; however, if
   *             you choose to update rules for your request, the update will replace the existing rules.</p>
   *
   */
  rules?: Array<Rule>;
}

export namespace UpdateDevicePoolRequest {
  export function isa(o: any): o is UpdateDevicePoolRequest {
    return _smithy.isa(o, "UpdateDevicePoolRequest");
  }
}

/**
 *
 *         <p>Represents the result of an update device pool request.</p>
 *
 */
export interface UpdateDevicePoolResult extends $MetadataBearer {
  __type?: "UpdateDevicePoolResult";
  /**
   *
   *         <p>The device pool you just updated.</p>
   *
   */
  devicePool?: DevicePool;
}

export namespace UpdateDevicePoolResult {
  export function isa(o: any): o is UpdateDevicePoolResult {
    return _smithy.isa(o, "UpdateDevicePoolResult");
  }
}

export interface UpdateInstanceProfileRequest {
  __type?: "UpdateInstanceProfileRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>The updated description for your instance profile.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>An array of strings specifying the list of app packages that should not be cleaned up from the device
   *             after a test run is over.</p>
   *         <p>The list of packages is only considered if you set <code>packageCleanup</code> to
   *             <code>true</code>.</p>
   *
   */
  excludeAppPackagesFromCleanup?: Array<string>;

  /**
   *
   *         <p>The updated name for your instance profile.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The updated choice for whether you want to specify package cleanup. The default value is
   *                 <code>false</code> for private devices.</p>
   *
   */
  packageCleanup?: boolean;

  /**
   *
   *         <p>The updated choice for whether you want to reboot the device after use. The default value is
   *                 <code>true</code>.</p>
   *
   */
  rebootAfterUse?: boolean;
}

export namespace UpdateInstanceProfileRequest {
  export function isa(o: any): o is UpdateInstanceProfileRequest {
    return _smithy.isa(o, "UpdateInstanceProfileRequest");
  }
}

export interface UpdateInstanceProfileResult extends $MetadataBearer {
  __type?: "UpdateInstanceProfileResult";
  /**
   *
   *         <p>An object containing information about your instance profile.</p>
   *
   */
  instanceProfile?: InstanceProfile;
}

export namespace UpdateInstanceProfileResult {
  export function isa(o: any): o is UpdateInstanceProfileResult {
    return _smithy.isa(o, "UpdateInstanceProfileResult");
  }
}

export interface UpdateNetworkProfileRequest {
  __type?: "UpdateNetworkProfileRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project for which you want to update network profile
   *             settings.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>The description of the network profile about which you are returning information.</p>
   *
   */
  description?: string;

  /**
   *
   *         <p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>
   *
   */
  downlinkBandwidthBits?: number;

  /**
   *
   *         <p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  downlinkDelayMs?: number;

  /**
   *
   *         <p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  downlinkJitterMs?: number;

  /**
   *
   *         <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   *
   */
  downlinkLossPercent?: number;

  /**
   *
   *         <p>The name of the network profile about which you are returning information.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The type of network profile you wish to return information about. Valid values are listed
   *             below.</p>
   *
   */
  type?: NetworkProfileType | string;

  /**
   *
   *         <p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>
   *
   */
  uplinkBandwidthBits?: number;

  /**
   *
   *         <p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  uplinkDelayMs?: number;

  /**
   *
   *         <p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>
   *
   */
  uplinkJitterMs?: number;

  /**
   *
   *         <p>Proportion of transmitted packets that fail to arrive from 0 to 100 percent.</p>
   *
   */
  uplinkLossPercent?: number;
}

export namespace UpdateNetworkProfileRequest {
  export function isa(o: any): o is UpdateNetworkProfileRequest {
    return _smithy.isa(o, "UpdateNetworkProfileRequest");
  }
}

export interface UpdateNetworkProfileResult extends $MetadataBearer {
  __type?: "UpdateNetworkProfileResult";
  /**
   *
   *         <p>A list of the available network profiles.</p>
   *
   */
  networkProfile?: NetworkProfile;
}

export namespace UpdateNetworkProfileResult {
  export function isa(o: any): o is UpdateNetworkProfileResult {
    return _smithy.isa(o, "UpdateNetworkProfileResult");
  }
}

/**
 *
 *         <p>Represents a request to the update project operation.</p>
 *
 */
export interface UpdateProjectRequest {
  __type?: "UpdateProjectRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the project whose name you wish to update.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>The number of minutes a test run in the project will execute before it times out.</p>
   *
   */
  defaultJobTimeoutMinutes?: number;

  /**
   *
   *         <p>A string representing the new name of the project that you are updating.</p>
   *
   */
  name?: string;
}

export namespace UpdateProjectRequest {
  export function isa(o: any): o is UpdateProjectRequest {
    return _smithy.isa(o, "UpdateProjectRequest");
  }
}

/**
 *
 *         <p>Represents the result of an update project request.</p>
 *
 */
export interface UpdateProjectResult extends $MetadataBearer {
  __type?: "UpdateProjectResult";
  /**
   *
   *         <p>The project you wish to update.</p>
   *
   */
  project?: Project;
}

export namespace UpdateProjectResult {
  export function isa(o: any): o is UpdateProjectResult {
    return _smithy.isa(o, "UpdateProjectResult");
  }
}

export interface UpdateUploadRequest {
  __type?: "UpdateUploadRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the uploaded test spec.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>The upload's content type (for example, "application/x-yaml").</p>
   *
   */
  contentType?: string;

  /**
   *
   *         <p>Set to true if the YAML file has changed and needs to be updated; otherwise, set to false.</p>
   *
   */
  editContent?: boolean;

  /**
   *
   *         <p>The upload's test spec file name. The name should not contain the '/' character. The test spec file name
   *             must end with the <code>.yaml</code> or <code>.yml</code> file extension.</p>
   *
   */
  name?: string;
}

export namespace UpdateUploadRequest {
  export function isa(o: any): o is UpdateUploadRequest {
    return _smithy.isa(o, "UpdateUploadRequest");
  }
}

export interface UpdateUploadResult extends $MetadataBearer {
  __type?: "UpdateUploadResult";
  /**
   *
   *         <p>A test spec uploaded to Device Farm.</p>
   *
   */
  upload?: Upload;
}

export namespace UpdateUploadResult {
  export function isa(o: any): o is UpdateUploadResult {
    return _smithy.isa(o, "UpdateUploadResult");
  }
}

export interface UpdateVPCEConfigurationRequest {
  __type?: "UpdateVPCEConfigurationRequest";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to update.</p>
   *
   */
  arn: string | undefined;

  /**
   *
   *         <p>The DNS (domain) name used to connect to your private service in your Amazon VPC. The DNS name must not
   *             already be in use on the Internet.</p>
   *
   */
  serviceDnsName?: string;

  /**
   *
   *         <p>An optional description, providing more details about your VPC endpoint configuration.</p>
   *
   */
  vpceConfigurationDescription?: string;

  /**
   *
   *         <p>The friendly name you give to your VPC endpoint configuration, to manage your configurations more
   *             easily.</p>
   *
   */
  vpceConfigurationName?: string;

  /**
   *
   *         <p>The name of the VPC endpoint service running inside your AWS account that you want Device Farm to
   *             test.</p>
   *
   */
  vpceServiceName?: string;
}

export namespace UpdateVPCEConfigurationRequest {
  export function isa(o: any): o is UpdateVPCEConfigurationRequest {
    return _smithy.isa(o, "UpdateVPCEConfigurationRequest");
  }
}

export interface UpdateVPCEConfigurationResult extends $MetadataBearer {
  __type?: "UpdateVPCEConfigurationResult";
  /**
   *
   *         <p>An object containing information about your VPC endpoint configuration.</p>
   *
   */
  vpceConfiguration?: VPCEConfiguration;
}

export namespace UpdateVPCEConfigurationResult {
  export function isa(o: any): o is UpdateVPCEConfigurationResult {
    return _smithy.isa(o, "UpdateVPCEConfigurationResult");
  }
}

/**
 *
 *         <p>An app or a set of one or more tests to upload or that have been uploaded.</p>
 *
 */
export interface Upload {
  __type?: "Upload";
  /**
   *
   *         <p>The upload's ARN.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The upload's category. Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: An upload managed by AWS Device Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: An upload managed by the AWS Device Farm customer.</p>
   *             </li>
   *          </ul>
   *
   */
  category?: UploadCategory | string;

  /**
   *
   *         <p>The upload's content type (for example, "application/octet-stream").</p>
   *
   */
  contentType?: string;

  /**
   *
   *         <p>When the upload was created.</p>
   *
   */
  created?: Date;

  /**
   *
   *         <p>A message about the upload's result.</p>
   *
   */
  message?: string;

  /**
   *
   *         <p>The upload's metadata. For example, for Android, this contains information that is parsed from the
   *             manifest and is displayed in the AWS Device Farm console after the associated app is uploaded.</p>
   *
   */
  metadata?: string;

  /**
   *
   *         <p>The upload's file name.</p>
   *
   */
  name?: string;

  /**
   *
   *         <p>The upload's status.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>FAILED: A failed status.</p>
   *             </li>
   *             <li>
   *                 <p>INITIALIZED: An initialized status.</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING: A processing status.</p>
   *             </li>
   *             <li>
   *                 <p>SUCCEEDED: A succeeded status.</p>
   *             </li>
   *          </ul>
   *
   */
  status?: UploadStatus | string;

  /**
   *
   *         <p>The upload's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP: An Android upload.</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP: An iOS upload.</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP: A web application upload.</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA: An external data upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE: An Appium Node.js test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE: An Appium Ruby test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload for web
   *                     apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload for web
   *                     apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE: An Appium Node.js test package upload for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE: An Appium Ruby test package upload for web apps.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_TEST_PACKAGE: A Calabash test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE: An Xcode test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE: An Xcode UI test package upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC: An Appium Node.js test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_SPEC: An Appium Ruby test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC: An Appium Node.js test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC: An Appium Ruby test spec upload for a web app.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC: An Xcode UI test spec upload.</p>
   *             </li>
   *          </ul>
   *
   */
  type?: UploadType | string;

  /**
   *
   *         <p>The pre-signed Amazon S3 URL that was used to store a file through a corresponding PUT
   *             request.</p>
   *
   */
  url?: string;
}

export namespace Upload {
  export function isa(o: any): o is Upload {
    return _smithy.isa(o, "Upload");
  }
}

/**
 *
 *         <p>Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
 *
 */
export interface VPCEConfiguration {
  __type?: "VPCEConfiguration";
  /**
   *
   *         <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration.</p>
   *
   */
  arn?: string;

  /**
   *
   *         <p>The DNS name that maps to the private IP address of the service you want to access.</p>
   *
   */
  serviceDnsName?: string;

  /**
   *
   *         <p>An optional description, providing more details about your VPC endpoint configuration.</p>
   *
   */
  vpceConfigurationDescription?: string;

  /**
   *
   *         <p>The friendly name you give to your VPC endpoint configuration, to manage your configurations more
   *             easily.</p>
   *
   */
  vpceConfigurationName?: string;

  /**
   *
   *         <p>The name of the VPC endpoint service running inside your AWS account that you want Device Farm to
   *             test.</p>
   *
   */
  vpceServiceName?: string;
}

export namespace VPCEConfiguration {
  export function isa(o: any): o is VPCEConfiguration {
    return _smithy.isa(o, "VPCEConfiguration");
  }
}
