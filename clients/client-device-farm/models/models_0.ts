import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Represents information about free trial device minutes for an AWS
 *             account.</p>
 */
export interface TrialMinutes {
  /**
   * <p>The total number of free trial minutes that the account started with.</p>
   */
  total?: number;

  /**
   * <p>The number of free trial minutes remaining in the account.</p>
   */
  remaining?: number;
}

export namespace TrialMinutes {
  export const filterSensitiveLog = (obj: TrialMinutes): any => ({
    ...obj,
  });
}

export enum DevicePlatform {
  ANDROID = "ANDROID",
  IOS = "IOS",
}

/**
 * <p>A container for account-level settings in AWS Device Farm.</p>
 */
export interface AccountSettings {
  /**
   * <p>The AWS account number specified in the <code>AccountSettings</code>
   *             container.</p>
   */
  awsAccountNumber?: string;

  /**
   * <p>Returns the unmetered devices you have purchased or want to purchase.</p>
   */
  unmeteredDevices?: { [key: string]: number };

  /**
   * <p>Returns the unmetered remote access devices you have purchased or want to
   *             purchase.</p>
   */
  unmeteredRemoteAccessDevices?: { [key: string]: number };

  /**
   * <p>The maximum number of minutes a test run executes before it times out.</p>
   */
  maxJobTimeoutMinutes?: number;

  /**
   * <p>Information about an AWS account's usage of free trial device minutes.</p>
   */
  trialMinutes?: TrialMinutes;

  /**
   * <p>The maximum number of device slots that the AWS account can purchase. Each maximum
   *             is expressed as an <code>offering-id:number</code> pair, where the
   *                 <code>offering-id</code> represents one of the IDs returned by the
   *                 <code>ListOfferings</code> command.</p>
   */
  maxSlots?: { [key: string]: number };

  /**
   * <p>The default number of minutes (at the account level) a test run executes before it times out. The
   *             default value is 150 minutes.</p>
   */
  defaultJobTimeoutMinutes?: number;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information about how Device Farm re-signs your apps, see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;
}

export namespace AccountSettings {
  export const filterSensitiveLog = (obj: AccountSettings): any => ({
    ...obj,
  });
}

/**
 * <p>An invalid argument was specified.</p>
 */
export interface ArgumentException extends __SmithyException, $MetadataBearer {
  name: "ArgumentException";
  $fault: "client";
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}

export namespace ArgumentException {
  export const filterSensitiveLog = (obj: ArgumentException): any => ({
    ...obj,
  });
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
  XCTEST_LOG = "XCTEST_LOG",
}

/**
 * <p>Represents the output of a test. Examples of artifacts include logs and
 *             screenshots.</p>
 */
export interface Artifact {
  /**
   * <p>The artifact's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The artifact's name.</p>
   */
  name?: string;

  /**
   * <p>The artifact's type.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>UNKNOWN</p>
   *             </li>
   *             <li>
   *                 <p>SCREENSHOT</p>
   *             </li>
   *             <li>
   *                 <p>DEVICE_LOG</p>
   *             </li>
   *             <li>
   *                 <p>MESSAGE_LOG</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_LOG</p>
   *             </li>
   *             <li>
   *                 <p>RESULT_LOG</p>
   *             </li>
   *             <li>
   *                 <p>SERVICE_LOG</p>
   *             </li>
   *             <li>
   *                 <p>WEBKIT_LOG</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>EXERCISER_MONKEY_OUTPUT: the artifact (log) generated by an Android fuzz test.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_JSON_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_PRETTY_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_STANDARD_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_JAVA_XML_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>AUTOMATION_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_SERVER_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_XML_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_XML_OUTPUT</p>
   *             </li>
   *             <li>
   *                 <p>EXPLORER_EVENT_LOG</p>
   *             </li>
   *             <li>
   *                 <p>EXPLORER_SUMMARY_LOG</p>
   *             </li>
   *             <li>
   *                 <p>APPLICATION_CRASH_REPORT</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_LOG</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO</p>
   *             </li>
   *             <li>
   *                 <p>CUSTOMER_ARTIFACT</p>
   *             </li>
   *             <li>
   *                 <p>CUSTOMER_ARTIFACT_LOG</p>
   *             </li>
   *             <li>
   *                 <p>TESTSPEC_OUTPUT</p>
   *             </li>
   *          </ul>
   */
  type?: ArtifactType | string;

  /**
   * <p>The artifact's file extension.</p>
   */
  extension?: string;

  /**
   * <p>The presigned Amazon S3 URL that can be used with a GET request to download the artifact's
   *             file.</p>
   */
  url?: string;
}

export namespace Artifact {
  export const filterSensitiveLog = (obj: Artifact): any => ({
    ...obj,
  });
}

export enum ArtifactCategory {
  FILE = "FILE",
  LOG = "LOG",
  SCREENSHOT = "SCREENSHOT",
}

export enum BillingMethod {
  METERED = "METERED",
  UNMETERED = "UNMETERED",
}

/**
 * <p>The requested object could not be deleted.</p>
 */
export interface CannotDeleteException extends __SmithyException, $MetadataBearer {
  name: "CannotDeleteException";
  $fault: "client";
  message?: string;
}

export namespace CannotDeleteException {
  export const filterSensitiveLog = (obj: CannotDeleteException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents entity counters.</p>
 */
export interface Counters {
  /**
   * <p>The total number of entities.</p>
   */
  total?: number;

  /**
   * <p>The number of passed entities.</p>
   */
  passed?: number;

  /**
   * <p>The number of failed entities.</p>
   */
  failed?: number;

  /**
   * <p>The number of warned entities.</p>
   */
  warned?: number;

  /**
   * <p>The number of errored entities.</p>
   */
  errored?: number;

  /**
   * <p>The number of stopped entities.</p>
   */
  stopped?: number;

  /**
   * <p>The number of skipped entities.</p>
   */
  skipped?: number;
}

export namespace Counters {
  export const filterSensitiveLog = (obj: Counters): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide
 *             CPU usage.</p>
 */
export interface CPU {
  /**
   * <p>The CPU's frequency.</p>
   */
  frequency?: string;

  /**
   * <p>The CPU's architecture (for example, x86 or ARM).</p>
   */
  architecture?: string;

  /**
   * <p>The clock speed of the device's CPU, expressed in hertz (Hz). For example, a 1.2
   *             GHz CPU is expressed as 1200000000.</p>
   */
  clock?: number;
}

export namespace CPU {
  export const filterSensitiveLog = (obj: CPU): any => ({
    ...obj,
  });
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
  REMOTE_DEBUG_ENABLED = "REMOTE_DEBUG_ENABLED",
}

export enum RuleOperator {
  CONTAINS = "CONTAINS",
  EQUALS = "EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUALS = "GREATER_THAN_OR_EQUALS",
  IN = "IN",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUALS = "LESS_THAN_OR_EQUALS",
  NOT_IN = "NOT_IN",
}

/**
 * <p>Represents a condition for a device pool.</p>
 */
export interface Rule {
  /**
   * <p>The rule's stringified attribute. For example, specify the value as
   *                 <code>"\"abc\""</code>.</p>
   *         <p>The supported operators for each attribute are provided in the following
   *             list.</p>
   *         <dl>
   *             <dt>APPIUM_VERSION</dt>
   *             <dd>
   *                     <p>The Appium version for the test.</p>
   *                     <p>Supported operators: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device (for example,
   *                         <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>.</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>AVAILABILITY</dt>
   *             <dd>
   *                     <p>The current availability of the device. Valid values are AVAILABLE,
   *                         HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FLEET_TYPE</dt>
   *             <dd>
   *                     <p>The fleet type. Valid values are PUBLIC or PRIVATE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FORM_FACTOR</dt>
   *             <dd>
   *                     <p>The device form factor. Valid values are PHONE or TABLET.</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device instance.</p>
   *                     <p>Supported operators: <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_LABELS</dt>
   *             <dd>
   *                     <p>The label of the device instance.</p>
   *                     <p>Supported operators: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>MANUFACTURER</dt>
   *             <dd>
   *                     <p>The device manufacturer (for example, Apple).</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>MODEL</dt>
   *             <dd>
   *                     <p>The device model, such as Apple iPad Air 2 or Google Pixel.</p>
   *                     <p>Supported operators: <code>CONTAINS</code>,
   *                             <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>OS_VERSION</dt>
   *             <dd>
   *                     <p>The operating system version (for example, 10.3.2).</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>GREATER_THAN</code>, <code>GREATER_THAN_OR_EQUALS</code>,
   *                             <code>IN</code>, <code>LESS_THAN</code>,
   *                             <code>LESS_THAN_OR_EQUALS</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>PLATFORM</dt>
   *             <dd>
   *                     <p>The device platform. Valid values are ANDROID or IOS.</p>
   *                     <p>Supported operators: <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_ACCESS_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote access. Valid values are TRUE
   *                         or FALSE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_DEBUG_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote debugging. Valid values are
   *                         TRUE or FALSE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                     <p>Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer
   *                             supported</a>, this filter is ignored.</p>
   *                 </dd>
   *          </dl>
   */
  attribute?: DeviceAttribute | string;

  /**
   * <p>Specifies how Device Farm compares the rule's attribute to the value. For the
   *             operators that are supported by each attribute, see the attribute
   *             descriptions.</p>
   */
  operator?: RuleOperator | string;

  /**
   * <p>The rule's value.</p>
   */
  value?: string;
}

export namespace Rule {
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the create device pool operation.</p>
 */
export interface CreateDevicePoolRequest {
  /**
   * <p>The ARN of the project for the device pool.</p>
   */
  projectArn: string | undefined;

  /**
   * <p>The device pool's name.</p>
   */
  name: string | undefined;

  /**
   * <p>The device pool's description.</p>
   */
  description?: string;

  /**
   * <p>The device pool's rules.</p>
   */
  rules: Rule[] | undefined;

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are
   *             available and meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many
   *             devices meet these constraints, your device pool might contain fewer devices than the value for this
   *             parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur
   *             by running tests.</p>
   */
  maxDevices?: number;
}

export namespace CreateDevicePoolRequest {
  export const filterSensitiveLog = (obj: CreateDevicePoolRequest): any => ({
    ...obj,
  });
}

export enum DevicePoolType {
  CURATED = "CURATED",
  PRIVATE = "PRIVATE",
}

/**
 * <p>Represents a collection of device types.</p>
 */
export interface DevicePool {
  /**
   * <p>The device pool's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The device pool's name.</p>
   */
  name?: string;

  /**
   * <p>The device pool's description.</p>
   */
  description?: string;

  /**
   * <p>The device pool's type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: A device pool that is created and managed by AWS Device
   *                     Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: A device pool that is created and managed by the device pool
   *                     developer.</p>
   *             </li>
   *          </ul>
   */
  type?: DevicePoolType | string;

  /**
   * <p>Information about the device pool's rules.</p>
   */
  rules?: Rule[];

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are
   *             available and meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many
   *             devices meet these constraints, your device pool might contain fewer devices than the value for this
   *             parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur
   *             by running tests.</p>
   */
  maxDevices?: number;
}

export namespace DevicePool {
  export const filterSensitiveLog = (obj: DevicePool): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a create device pool request.</p>
 */
export interface CreateDevicePoolResult {
  /**
   * <p>The newly created device pool.</p>
   */
  devicePool?: DevicePool;
}

export namespace CreateDevicePoolResult {
  export const filterSensitiveLog = (obj: CreateDevicePoolResult): any => ({
    ...obj,
  });
}

/**
 * <p>A limit was exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified entity was not found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>There was a problem with the service account.</p>
 */
export interface ServiceAccountException extends __SmithyException, $MetadataBearer {
  name: "ServiceAccountException";
  $fault: "client";
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}

export namespace ServiceAccountException {
  export const filterSensitiveLog = (obj: ServiceAccountException): any => ({
    ...obj,
  });
}

export interface CreateInstanceProfileRequest {
  /**
   * <p>The name of your instance profile.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of your instance profile.</p>
   */
  description?: string;

  /**
   * <p>When set to <code>true</code>, Device Farm removes app packages after a test run. The default value is
   *                 <code>false</code> for private devices.</p>
   */
  packageCleanup?: boolean;

  /**
   * <p>An array of strings that specifies the list of app packages that should not be cleaned up from the device
   *             after a test run.</p>
   *         <p>The list of packages is considered only if you set <code>packageCleanup</code> to
   *             <code>true</code>.</p>
   */
  excludeAppPackagesFromCleanup?: string[];

  /**
   * <p>When set to <code>true</code>, Device Farm reboots the instance after a test run. The default value is
   *                 <code>true</code>.</p>
   */
  rebootAfterUse?: boolean;
}

export namespace CreateInstanceProfileRequest {
  export const filterSensitiveLog = (obj: CreateInstanceProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the instance profile.</p>
 */
export interface InstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  arn?: string;

  /**
   * <p>When set to <code>true</code>, Device Farm removes app packages after a test run. The default value is
   *                 <code>false</code> for private devices.</p>
   */
  packageCleanup?: boolean;

  /**
   * <p>An array of strings containing the list of app packages that should not be cleaned up from the device
   *             after a test run completes.</p>
   *         <p>The list of packages is considered only if you set <code>packageCleanup</code> to
   *             <code>true</code>.</p>
   */
  excludeAppPackagesFromCleanup?: string[];

  /**
   * <p>When set to <code>true</code>, Device Farm reboots the instance after a test run. The default value is
   *                 <code>true</code>.</p>
   */
  rebootAfterUse?: boolean;

  /**
   * <p>The name of the instance profile.</p>
   */
  name?: string;

  /**
   * <p>The description of the instance profile.</p>
   */
  description?: string;
}

export namespace InstanceProfile {
  export const filterSensitiveLog = (obj: InstanceProfile): any => ({
    ...obj,
  });
}

export interface CreateInstanceProfileResult {
  /**
   * <p>An object that contains information about your instance profile.</p>
   */
  instanceProfile?: InstanceProfile;
}

export namespace CreateInstanceProfileResult {
  export const filterSensitiveLog = (obj: CreateInstanceProfileResult): any => ({
    ...obj,
  });
}

export enum NetworkProfileType {
  CURATED = "CURATED",
  PRIVATE = "PRIVATE",
}

export interface CreateNetworkProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to create a
   *             network profile.</p>
   */
  projectArn: string | undefined;

  /**
   * <p>The name for the new network profile.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the network profile.</p>
   */
  description?: string;

  /**
   * <p>The type of network profile to create. Valid values are listed here.</p>
   */
  type?: NetworkProfileType | string;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   */
  uplinkBandwidthBits?: number;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   */
  downlinkBandwidthBits?: number;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   */
  uplinkDelayMs?: number;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   */
  downlinkDelayMs?: number;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   */
  uplinkJitterMs?: number;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   */
  downlinkJitterMs?: number;

  /**
   * <p>Proportion of transmitted packets that fail to arrive from 0 to 100
   *             percent.</p>
   */
  uplinkLossPercent?: number;

  /**
   * <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   */
  downlinkLossPercent?: number;
}

export namespace CreateNetworkProfileRequest {
  export const filterSensitiveLog = (obj: CreateNetworkProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An array of settings that describes characteristics of a network profile.</p>
 */
export interface NetworkProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the network profile.</p>
   */
  arn?: string;

  /**
   * <p>The name of the network profile.</p>
   */
  name?: string;

  /**
   * <p>The description of the network profile.</p>
   */
  description?: string;

  /**
   * <p>The type of network profile. Valid values are listed here.</p>
   */
  type?: NetworkProfileType | string;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   */
  uplinkBandwidthBits?: number;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   */
  downlinkBandwidthBits?: number;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   */
  uplinkDelayMs?: number;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   */
  downlinkDelayMs?: number;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   */
  uplinkJitterMs?: number;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   */
  downlinkJitterMs?: number;

  /**
   * <p>Proportion of transmitted packets that fail to arrive from 0 to 100
   *             percent.</p>
   */
  uplinkLossPercent?: number;

  /**
   * <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   */
  downlinkLossPercent?: number;
}

export namespace NetworkProfile {
  export const filterSensitiveLog = (obj: NetworkProfile): any => ({
    ...obj,
  });
}

export interface CreateNetworkProfileResult {
  /**
   * <p>The network profile that is returned by the create network profile
   *             request.</p>
   */
  networkProfile?: NetworkProfile;
}

export namespace CreateNetworkProfileResult {
  export const filterSensitiveLog = (obj: CreateNetworkProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the create project operation.</p>
 */
export interface CreateProjectRequest {
  /**
   * <p>The project's name.</p>
   */
  name: string | undefined;

  /**
   * <p>Sets the execution timeout value (in minutes) for a project. All test runs in this project use the
   *             specified execution timeout value unless overridden when scheduling a run.</p>
   */
  defaultJobTimeoutMinutes?: number;
}

export namespace CreateProjectRequest {
  export const filterSensitiveLog = (obj: CreateProjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an operating-system neutral workspace for running and managing
 *             tests.</p>
 */
export interface Project {
  /**
   * <p>The project's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The project's name.</p>
   */
  name?: string;

  /**
   * <p>The default number of minutes (at the project level) a test run executes before it times out. The
   *             default value is 150 minutes.</p>
   */
  defaultJobTimeoutMinutes?: number;

  /**
   * <p>When the project was created.</p>
   */
  created?: Date;
}

export namespace Project {
  export const filterSensitiveLog = (obj: Project): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a create project request.</p>
 */
export interface CreateProjectResult {
  /**
   * <p>The newly created project.</p>
   */
  project?: Project;
}

export namespace CreateProjectResult {
  export const filterSensitiveLog = (obj: CreateProjectResult): any => ({
    ...obj,
  });
}

/**
 * <p>The operation was not successful. Try again.</p>
 */
export interface TagOperationException extends __SmithyException, $MetadataBearer {
  name: "TagOperationException";
  $fault: "client";
  message?: string;
  resourceName?: string;
}

export namespace TagOperationException {
  export const filterSensitiveLog = (obj: TagOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration settings for a remote access session, including billing
 *             method.</p>
 */
export interface CreateRemoteAccessSessionConfiguration {
  /**
   * <p>The billing method for the remote access session.</p>
   */
  billingMethod?: BillingMethod | string;

  /**
   * <p>An array of ARNs included in the VPC endpoint configuration.</p>
   */
  vpceConfigurationArns?: string[];
}

export namespace CreateRemoteAccessSessionConfiguration {
  export const filterSensitiveLog = (obj: CreateRemoteAccessSessionConfiguration): any => ({
    ...obj,
  });
}

export enum InteractionMode {
  INTERACTIVE = "INTERACTIVE",
  NO_VIDEO = "NO_VIDEO",
  VIDEO_ONLY = "VIDEO_ONLY",
}

/**
 * <p>Creates and submits a request to start a remote access session.</p>
 */
export interface CreateRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to create a remote
   *             access session.</p>
   */
  projectArn: string | undefined;

  /**
   * <p>The ARN of the device for which you want to create a remote access session.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device instance for which you want to create a
   *             remote access session.</p>
   */
  instanceArn?: string;

  /**
   * <p>Ignored. The public key of the <code>ssh</code> key pair you want to use for connecting to remote
   *             devices in your remote debugging session. This key is required only if <code>remoteDebugEnabled</code> is
   *             set to <code>true</code>.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                 longer supported</a>.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>Set to <code>true</code> if you want to access devices remotely for debugging in
   *             your remote access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                 longer supported</a>.</p>
   */
  remoteDebugEnabled?: boolean;

  /**
   * <p>Set to <code>true</code> to enable remote recording for the remote access
   *             session.</p>
   */
  remoteRecordEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the app to be recorded in the remote access
   *             session.</p>
   */
  remoteRecordAppArn?: string;

  /**
   * <p>The name of the remote access session to create.</p>
   */
  name?: string;

  /**
   * <p>Unique identifier for the client. If you want access to multiple devices on the same client, you should
   *             pass the same <code>clientId</code> value in each call to <code>CreateRemoteAccessSession</code>. This
   *             identifier is required only if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                 longer supported</a>.</p>
   */
  clientId?: string;

  /**
   * <p>The configuration information for the remote access session request.</p>
   */
  configuration?: CreateRemoteAccessSessionConfiguration;

  /**
   * <p>The interaction mode of the remote access session. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and
   *                     rotating the screen. You cannot run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>NO_VIDEO: You are connected to the device, but cannot interact with it or view the screen. This
   *                     mode has the fastest test execution speed. You can run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_ONLY: You can view the screen, but cannot touch or rotate it. You can run XCUITest
   *                     framework-based tests and watch the screen in this mode.</p>
   *             </li>
   *          </ul>
   */
  interactionMode?: InteractionMode | string;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information on how Device Farm modifies your uploads during tests, see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a>
   *          </p>
   */
  skipAppResign?: boolean;
}

export namespace CreateRemoteAccessSessionRequest {
  export const filterSensitiveLog = (obj: CreateRemoteAccessSessionRequest): any => ({
    ...obj,
  });
}

export enum DeviceAvailability {
  AVAILABLE = "AVAILABLE",
  BUSY = "BUSY",
  HIGHLY_AVAILABLE = "HIGHLY_AVAILABLE",
  TEMPORARY_NOT_AVAILABLE = "TEMPORARY_NOT_AVAILABLE",
}

export enum DeviceFormFactor {
  PHONE = "PHONE",
  TABLET = "TABLET",
}

export enum InstanceStatus {
  AVAILABLE = "AVAILABLE",
  IN_USE = "IN_USE",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PREPARING = "PREPARING",
}

/**
 * <p>Represents the device instance.</p>
 */
export interface DeviceInstance {
  /**
   * <p>The Amazon Resource Name (ARN) of the device instance.</p>
   */
  arn?: string;

  /**
   * <p>The ARN of the device.</p>
   */
  deviceArn?: string;

  /**
   * <p>An array of strings that describe the device instance.</p>
   */
  labels?: string[];

  /**
   * <p>The status of the device instance. Valid values are listed here.</p>
   */
  status?: InstanceStatus | string;

  /**
   * <p>Unique device identifier for the device instance.</p>
   */
  udid?: string;

  /**
   * <p>A object that contains information about the instance profile.</p>
   */
  instanceProfile?: InstanceProfile;
}

export namespace DeviceInstance {
  export const filterSensitiveLog = (obj: DeviceInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the screen resolution of a device in height and width, expressed in
 *             pixels.</p>
 */
export interface Resolution {
  /**
   * <p>The screen resolution's width, expressed in pixels.</p>
   */
  width?: number;

  /**
   * <p>The screen resolution's height, expressed in pixels.</p>
   */
  height?: number;
}

export namespace Resolution {
  export const filterSensitiveLog = (obj: Resolution): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a device type that an app is tested against.</p>
 */
export interface Device {
  /**
   * <p>The device's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The device's display name.</p>
   */
  name?: string;

  /**
   * <p>The device's manufacturer name.</p>
   */
  manufacturer?: string;

  /**
   * <p>The device's model name.</p>
   */
  model?: string;

  /**
   * <p>The device's model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The device's form factor.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PHONE</p>
   *             </li>
   *             <li>
   *                 <p>TABLET</p>
   *             </li>
   *          </ul>
   */
  formFactor?: DeviceFormFactor | string;

  /**
   * <p>The device's platform.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID</p>
   *             </li>
   *             <li>
   *                 <p>IOS</p>
   *             </li>
   *          </ul>
   */
  platform?: DevicePlatform | string;

  /**
   * <p>The device's operating system type.</p>
   */
  os?: string;

  /**
   * <p>Information about the device's CPU.</p>
   */
  cpu?: CPU;

  /**
   * <p>The resolution of the device.</p>
   */
  resolution?: Resolution;

  /**
   * <p>The device's heap size, expressed in bytes.</p>
   */
  heapSize?: number;

  /**
   * <p>The device's total memory size, expressed in bytes.</p>
   */
  memory?: number;

  /**
   * <p>The device's image name.</p>
   */
  image?: string;

  /**
   * <p>The device's carrier.</p>
   */
  carrier?: string;

  /**
   * <p>The device's radio.</p>
   */
  radio?: string;

  /**
   * <p>Specifies whether remote access has been enabled for the specified
   *             device.</p>
   */
  remoteAccessEnabled?: boolean;

  /**
   * <p>This flag is set to <code>true</code> if remote debugging is enabled for the
   *             device.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                 longer supported</a>.</p>
   */
  remoteDebugEnabled?: boolean;

  /**
   * <p>The type of fleet to which this device belongs. Possible values are PRIVATE and PUBLIC.</p>
   */
  fleetType?: string;

  /**
   * <p>The name of the fleet to which this device belongs.</p>
   */
  fleetName?: string;

  /**
   * <p>The instances that belong to this device.</p>
   */
  instances?: DeviceInstance[];

  /**
   * <p>Indicates how likely a device is available for a test run. Currently available in the <a>ListDevices</a> and GetDevice API methods.</p>
   */
  availability?: DeviceAvailability | string;
}

export namespace Device {
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the total (metered or unmetered) minutes used by the resource to run
 *             tests. Contains the sum of minutes consumed by all children.</p>
 */
export interface DeviceMinutes {
  /**
   * <p>When specified, represents the total minutes used by the resource to run
   *             tests.</p>
   */
  total?: number;

  /**
   * <p>When specified, represents only the sum of metered minutes used by the resource to
   *             run tests.</p>
   */
  metered?: number;

  /**
   * <p>When specified, represents only the sum of unmetered minutes used by the resource
   *             to run tests.</p>
   */
  unmetered?: number;
}

export namespace DeviceMinutes {
  export const filterSensitiveLog = (obj: DeviceMinutes): any => ({
    ...obj,
  });
}

export enum ExecutionResult {
  ERRORED = "ERRORED",
  FAILED = "FAILED",
  PASSED = "PASSED",
  PENDING = "PENDING",
  SKIPPED = "SKIPPED",
  STOPPED = "STOPPED",
  WARNED = "WARNED",
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
  STOPPING = "STOPPING",
}

/**
 * <p>Represents information about the remote access session.</p>
 */
export interface RemoteAccessSession {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session.</p>
   */
  arn?: string;

  /**
   * <p>The name of the remote access session.</p>
   */
  name?: string;

  /**
   * <p>The date and time the remote access session was created.</p>
   */
  created?: Date;

  /**
   * <p>The status of the remote access session. Can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY.</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE.</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING.</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING.</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING.</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING.</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING.</p>
   *             </li>
   *          </ul>
   */
  status?: ExecutionStatus | string;

  /**
   * <p>The result of the remote access session. Can be any of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING.</p>
   *             </li>
   *             <li>
   *                 <p>PASSED.</p>
   *             </li>
   *             <li>
   *                 <p>WARNED.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED.</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED.</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED.</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED.</p>
   *             </li>
   *          </ul>
   */
  result?: ExecutionResult | string;

  /**
   * <p>A message about the remote access session.</p>
   */
  message?: string;

  /**
   * <p>The date and time the remote access session was started.</p>
   */
  started?: Date;

  /**
   * <p>The date and time the remote access session was stopped.</p>
   */
  stopped?: Date;

  /**
   * <p>The device (phone or tablet) used in the remote access session.</p>
   */
  device?: Device;

  /**
   * <p>The ARN of the instance.</p>
   */
  instanceArn?: string;

  /**
   * <p>This flag is set to <code>true</code> if remote debugging is enabled for the remote
   *             access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                 longer supported</a>.</p>
   */
  remoteDebugEnabled?: boolean;

  /**
   * <p>This flag is set to <code>true</code> if remote recording is enabled for the remote
   *             access session.</p>
   */
  remoteRecordEnabled?: boolean;

  /**
   * <p>The ARN for the app to be recorded in the remote access session.</p>
   */
  remoteRecordAppArn?: string;

  /**
   * <p>IP address of the EC2 host where you need to connect to remotely debug devices.
   *             Only returned if remote debugging is enabled for the remote access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                 longer supported</a>.</p>
   */
  hostAddress?: string;

  /**
   * <p>Unique identifier of your client for the remote access session. Only returned if
   *             remote debugging is enabled for the remote access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                 longer supported</a>.</p>
   */
  clientId?: string;

  /**
   * <p>The billing method of the remote access session. Possible values include <code>METERED</code> or
   *                 <code>UNMETERED</code>. For more information about metered devices, see <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html#welcome-terminology">AWS Device Farm
   *                 terminology</a>.</p>
   */
  billingMethod?: BillingMethod | string;

  /**
   * <p>The number of minutes a device is used in a remote access session (including setup
   *             and teardown minutes).</p>
   */
  deviceMinutes?: DeviceMinutes;

  /**
   * <p>The endpoint for the remote access sesssion.</p>
   */
  endpoint?: string;

  /**
   * <p>Unique device identifier for the remote device. Only returned if remote debugging
   *             is enabled for the remote access session.</p>
   *         <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                 longer supported</a>.</p>
   */
  deviceUdid?: string;

  /**
   * <p>The interaction mode of the remote access session. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and
   *                     rotating the screen. You cannot run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>NO_VIDEO: You are connected to the device, but cannot interact with it or view the screen. This
   *                     mode has the fastest test execution speed. You can run XCUITest framework-based tests in this
   *                     mode.</p>
   *             </li>
   *             <li>
   *                 <p>VIDEO_ONLY: You can view the screen, but cannot touch or rotate it. You can run XCUITest
   *                     framework-based tests and watch the screen in this mode.</p>
   *             </li>
   *          </ul>
   */
  interactionMode?: InteractionMode | string;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information about how Device Farm re-signs your apps, see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;
}

export namespace RemoteAccessSession {
  export const filterSensitiveLog = (obj: RemoteAccessSession): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the server response from a request to create a remote access
 *             session.</p>
 */
export interface CreateRemoteAccessSessionResult {
  /**
   * <p>A container that describes the remote access session when the request to create a
   *             remote access session is sent.</p>
   */
  remoteAccessSession?: RemoteAccessSession;
}

export namespace CreateRemoteAccessSessionResult {
  export const filterSensitiveLog = (obj: CreateRemoteAccessSessionResult): any => ({
    ...obj,
  });
}

export interface CreateTestGridProjectRequest {
  /**
   * <p>Human-readable name of the Selenium testing project.</p>
   */
  name: string | undefined;

  /**
   * <p>Human-readable description of the project.</p>
   */
  description?: string;
}

export namespace CreateTestGridProjectRequest {
  export const filterSensitiveLog = (obj: CreateTestGridProjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A Selenium testing project. Projects are used to collect and collate sessions.</p>
 */
export interface TestGridProject {
  /**
   * <p>The ARN for the project.</p>
   */
  arn?: string;

  /**
   * <p>A human-readable name for the project.</p>
   */
  name?: string;

  /**
   * <p>A human-readable description for the project.</p>
   */
  description?: string;

  /**
   * <p>When the project was created.</p>
   */
  created?: Date;
}

export namespace TestGridProject {
  export const filterSensitiveLog = (obj: TestGridProject): any => ({
    ...obj,
  });
}

export interface CreateTestGridProjectResult {
  /**
   * <p>ARN of the Selenium testing project that was created.</p>
   */
  testGridProject?: TestGridProject;
}

export namespace CreateTestGridProjectResult {
  export const filterSensitiveLog = (obj: CreateTestGridProjectResult): any => ({
    ...obj,
  });
}

/**
 * <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

export interface CreateTestGridUrlRequest {
  /**
   * <p>ARN (from <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>) to associate
   *          with the short-term URL. </p>
   */
  projectArn: string | undefined;

  /**
   * <p>Lifetime, in seconds, of the URL.</p>
   */
  expiresInSeconds: number | undefined;
}

export namespace CreateTestGridUrlRequest {
  export const filterSensitiveLog = (obj: CreateTestGridUrlRequest): any => ({
    ...obj,
  });
}

export interface CreateTestGridUrlResult {
  /**
   * <p>A signed URL, expiring in <a>CreateTestGridUrlRequest$expiresInSeconds</a> seconds, to be passed
   *          to a <code>RemoteWebDriver</code>. </p>
   */
  url?: string;

  /**
   * <p>The number of seconds the URL from <a>CreateTestGridUrlResult$url</a> stays active.</p>
   */
  expires?: Date;
}

export namespace CreateTestGridUrlResult {
  export const filterSensitiveLog = (obj: CreateTestGridUrlResult): any => ({
    ...obj,
  });
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
  XCTEST_UI_TEST_SPEC = "XCTEST_UI_TEST_SPEC",
}

/**
 * <p>Represents a request to the create upload operation.</p>
 */
export interface CreateUploadRequest {
  /**
   * <p>The ARN of the project for the upload.</p>
   */
  projectArn: string | undefined;

  /**
   * <p>The upload's file name. The name should not contain any forward slashes (<code>/</code>). If you are
   *             uploading an iOS app, the file name must end with the <code>.ipa</code> extension. If you are uploading an
   *             Android app, the file name must end with the <code>.apk</code> extension. For all others, the file name must
   *             end with the <code>.zip</code> file extension.</p>
   */
  name: string | undefined;

  /**
   * <p>The upload's upload type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC</p>
   *             </li>
   *          </ul>
   *         <p> If you call <code>CreateUpload</code> with <code>WEB_APP</code> specified, AWS
   *             Device Farm throws an <code>ArgumentException</code> error.</p>
   */
  type: UploadType | string | undefined;

  /**
   * <p>The upload's content type (for example, <code>application/octet-stream</code>).</p>
   */
  contentType?: string;
}

export namespace CreateUploadRequest {
  export const filterSensitiveLog = (obj: CreateUploadRequest): any => ({
    ...obj,
  });
}

export enum UploadCategory {
  CURATED = "CURATED",
  PRIVATE = "PRIVATE",
}

export enum UploadStatus {
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  PROCESSING = "PROCESSING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>An app or a set of one or more tests to upload or that have been
 *             uploaded.</p>
 */
export interface Upload {
  /**
   * <p>The upload's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The upload's file name.</p>
   */
  name?: string;

  /**
   * <p>When the upload was created.</p>
   */
  created?: Date;

  /**
   * <p>The upload's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC</p>
   *             </li>
   *          </ul>
   */
  type?: UploadType | string;

  /**
   * <p>The upload's status.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>INITIALIZED</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SUCCEEDED</p>
   *             </li>
   *          </ul>
   */
  status?: UploadStatus | string;

  /**
   * <p>The presigned Amazon S3 URL that was used to store a file using a PUT request.</p>
   */
  url?: string;

  /**
   * <p>The upload's metadata. For example, for Android, this contains information that is
   *             parsed from the manifest and is displayed in the AWS Device Farm console after the
   *             associated app is uploaded.</p>
   */
  metadata?: string;

  /**
   * <p>The upload's content type (for example, <code>application/octet-stream</code>).</p>
   */
  contentType?: string;

  /**
   * <p>A message about the upload's result.</p>
   */
  message?: string;

  /**
   * <p>The upload's category. Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: An upload managed by AWS Device Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: An upload managed by the AWS Device Farm customer.</p>
   *             </li>
   *          </ul>
   */
  category?: UploadCategory | string;
}

export namespace Upload {
  export const filterSensitiveLog = (obj: Upload): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a create upload request.</p>
 */
export interface CreateUploadResult {
  /**
   * <p>The newly created upload.</p>
   */
  upload?: Upload;
}

export namespace CreateUploadResult {
  export const filterSensitiveLog = (obj: CreateUploadResult): any => ({
    ...obj,
  });
}

export interface CreateVPCEConfigurationRequest {
  /**
   * <p>The friendly name you give to your VPC endpoint configuration, to manage your
   *             configurations more easily.</p>
   */
  vpceConfigurationName: string | undefined;

  /**
   * <p>The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.</p>
   */
  vpceServiceName: string | undefined;

  /**
   * <p>The DNS name of the service running in your VPC that you want Device Farm to
   *             test.</p>
   */
  serviceDnsName: string | undefined;

  /**
   * <p>An optional description that provides details about your VPC endpoint configuration.</p>
   */
  vpceConfigurationDescription?: string;
}

export namespace CreateVPCEConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateVPCEConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
 */
export interface VPCEConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration.</p>
   */
  arn?: string;

  /**
   * <p>The friendly name you give to your VPC endpoint configuration to manage your configurations more
   *             easily.</p>
   */
  vpceConfigurationName?: string;

  /**
   * <p>The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.</p>
   */
  vpceServiceName?: string;

  /**
   * <p>The DNS name that maps to the private IP address of the service you want to
   *             access.</p>
   */
  serviceDnsName?: string;

  /**
   * <p>An optional description that provides details about your VPC endpoint configuration.</p>
   */
  vpceConfigurationDescription?: string;
}

export namespace VPCEConfiguration {
  export const filterSensitiveLog = (obj: VPCEConfiguration): any => ({
    ...obj,
  });
}

export interface CreateVPCEConfigurationResult {
  /**
   * <p>An object that contains information about your VPC endpoint configuration.</p>
   */
  vpceConfiguration?: VPCEConfiguration;
}

export namespace CreateVPCEConfigurationResult {
  export const filterSensitiveLog = (obj: CreateVPCEConfigurationResult): any => ({
    ...obj,
  });
}

export enum CurrencyCode {
  USD = "USD",
}

/**
 * <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the
 *             device or in the test environment, are pulled from.</p>
 *         <p>Specify <code>deviceHostPaths</code> and optionally specify either
 *                 <code>iosPaths</code> or <code>androidPaths</code>.</p>
 *         <p>For web app tests, you can specify both <code>iosPaths</code> and
 *                 <code>androidPaths</code>.</p>
 */
export interface CustomerArtifactPaths {
  /**
   * <p>Comma-separated list of paths on the iOS device where the artifacts generated by the customer's tests
   *             are pulled from.</p>
   */
  iosPaths?: string[];

  /**
   * <p>Comma-separated list of paths on the Android device where the artifacts generated by the customer's
   *             tests are pulled from.</p>
   */
  androidPaths?: string[];

  /**
   * <p>Comma-separated list of paths in the test execution environment where the artifacts generated by the
   *             customer's tests are pulled from.</p>
   */
  deviceHostPaths?: string[];
}

export namespace CustomerArtifactPaths {
  export const filterSensitiveLog = (obj: CustomerArtifactPaths): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the delete device pool operation.</p>
 */
export interface DeleteDevicePoolRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm device pool to delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteDevicePoolRequest {
  export const filterSensitiveLog = (obj: DeleteDevicePoolRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a delete device pool request.</p>
 */
export interface DeleteDevicePoolResult {}

export namespace DeleteDevicePoolResult {
  export const filterSensitiveLog = (obj: DeleteDevicePoolResult): any => ({
    ...obj,
  });
}

export interface DeleteInstanceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile you are requesting to
   *             delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteInstanceProfileRequest {
  export const filterSensitiveLog = (obj: DeleteInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteInstanceProfileResult {}

export namespace DeleteInstanceProfileResult {
  export const filterSensitiveLog = (obj: DeleteInstanceProfileResult): any => ({
    ...obj,
  });
}

export interface DeleteNetworkProfileRequest {
  /**
   * <p>The ARN of the network profile to delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteNetworkProfileRequest {
  export const filterSensitiveLog = (obj: DeleteNetworkProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkProfileResult {}

export namespace DeleteNetworkProfileResult {
  export const filterSensitiveLog = (obj: DeleteNetworkProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the delete project operation.</p>
 */
export interface DeleteProjectRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm project to delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteProjectRequest {
  export const filterSensitiveLog = (obj: DeleteProjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a delete project request.</p>
 */
export interface DeleteProjectResult {}

export namespace DeleteProjectResult {
  export const filterSensitiveLog = (obj: DeleteProjectResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to delete the specified remote access session.</p>
 */
export interface DeleteRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the session for which you want to delete remote
   *             access.</p>
   */
  arn: string | undefined;
}

export namespace DeleteRemoteAccessSessionRequest {
  export const filterSensitiveLog = (obj: DeleteRemoteAccessSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response from the server when a request is made to delete the remote access
 *             session.</p>
 */
export interface DeleteRemoteAccessSessionResult {}

export namespace DeleteRemoteAccessSessionResult {
  export const filterSensitiveLog = (obj: DeleteRemoteAccessSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the delete run operation.</p>
 */
export interface DeleteRunRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the run to delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteRunRequest {
  export const filterSensitiveLog = (obj: DeleteRunRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a delete run request.</p>
 */
export interface DeleteRunResult {}

export namespace DeleteRunResult {
  export const filterSensitiveLog = (obj: DeleteRunResult): any => ({
    ...obj,
  });
}

export interface DeleteTestGridProjectRequest {
  /**
   * <p>The ARN of the project to delete, from <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>.</p>
   */
  projectArn: string | undefined;
}

export namespace DeleteTestGridProjectRequest {
  export const filterSensitiveLog = (obj: DeleteTestGridProjectRequest): any => ({
    ...obj,
  });
}

export interface DeleteTestGridProjectResult {}

export namespace DeleteTestGridProjectResult {
  export const filterSensitiveLog = (obj: DeleteTestGridProjectResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the delete upload operation.</p>
 */
export interface DeleteUploadRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm upload to delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteUploadRequest {
  export const filterSensitiveLog = (obj: DeleteUploadRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a delete upload request.</p>
 */
export interface DeleteUploadResult {}

export namespace DeleteUploadResult {
  export const filterSensitiveLog = (obj: DeleteUploadResult): any => ({
    ...obj,
  });
}

export interface DeleteVPCEConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to
   *             delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteVPCEConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteVPCEConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVPCEConfigurationResult {}

export namespace DeleteVPCEConfigurationResult {
  export const filterSensitiveLog = (obj: DeleteVPCEConfigurationResult): any => ({
    ...obj,
  });
}

/**
 * <p>There was an error with the update request, or you do not have sufficient permissions
 *             to update this VPC endpoint configuration.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidOperationException {
  export const filterSensitiveLog = (obj: InvalidOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request sent to retrieve the account settings.</p>
 */
export interface GetAccountSettingsRequest {}

export namespace GetAccountSettingsRequest {
  export const filterSensitiveLog = (obj: GetAccountSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the account settings return values from the
 *                 <code>GetAccountSettings</code> request.</p>
 */
export interface GetAccountSettingsResult {
  /**
   * <p>The account settings.</p>
   */
  accountSettings?: AccountSettings;
}

export namespace GetAccountSettingsResult {
  export const filterSensitiveLog = (obj: GetAccountSettingsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get device request.</p>
 */
export interface GetDeviceRequest {
  /**
   * <p>The device type's ARN.</p>
   */
  arn: string | undefined;
}

export namespace GetDeviceRequest {
  export const filterSensitiveLog = (obj: GetDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a get device request.</p>
 */
export interface GetDeviceResult {
  /**
   * <p>An object that contains information about the requested device.</p>
   */
  device?: Device;
}

export namespace GetDeviceResult {
  export const filterSensitiveLog = (obj: GetDeviceResult): any => ({
    ...obj,
  });
}

export interface GetDeviceInstanceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance you're requesting information
   *             about.</p>
   */
  arn: string | undefined;
}

export namespace GetDeviceInstanceRequest {
  export const filterSensitiveLog = (obj: GetDeviceInstanceRequest): any => ({
    ...obj,
  });
}

export interface GetDeviceInstanceResult {
  /**
   * <p>An object that contains information about your device instance.</p>
   */
  deviceInstance?: DeviceInstance;
}

export namespace GetDeviceInstanceResult {
  export const filterSensitiveLog = (obj: GetDeviceInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get device pool operation.</p>
 */
export interface GetDevicePoolRequest {
  /**
   * <p>The device pool's ARN.</p>
   */
  arn: string | undefined;
}

export namespace GetDevicePoolRequest {
  export const filterSensitiveLog = (obj: GetDevicePoolRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a get device pool request.</p>
 */
export interface GetDevicePoolResult {
  /**
   * <p>An object that contains information about the requested device pool.</p>
   */
  devicePool?: DevicePool;
}

export namespace GetDevicePoolResult {
  export const filterSensitiveLog = (obj: GetDevicePoolResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for
 *             example, 47.6204, -122.3491).</p>
 *         <p>Elevation is currently not supported.</p>
 */
export interface Location {
  /**
   * <p>The latitude.</p>
   */
  latitude: number | undefined;

  /**
   * <p>The longitude.</p>
   */
  longitude: number | undefined;
}

export namespace Location {
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the set of radios and their states on a device. Examples of radios
 *             include Wi-Fi, GPS, Bluetooth, and NFC.</p>
 */
export interface Radios {
  /**
   * <p>True if Wi-Fi is enabled at the beginning of the test. Otherwise, false.</p>
   */
  wifi?: boolean;

  /**
   * <p>True if Bluetooth is enabled at the beginning of the test. Otherwise, false.</p>
   */
  bluetooth?: boolean;

  /**
   * <p>True if NFC is enabled at the beginning of the test. Otherwise, false.</p>
   */
  nfc?: boolean;

  /**
   * <p>True if GPS is enabled at the beginning of the test. Otherwise, false.</p>
   */
  gps?: boolean;
}

export namespace Radios {
  export const filterSensitiveLog = (obj: Radios): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings for a run. Includes things like location, radio states,
 *             auxiliary apps, and network profiles.</p>
 */
export interface ScheduleRunConfiguration {
  /**
   * <p>The ARN of the extra data for the run. The extra data is a .zip file that AWS Device Farm extracts to
   *             external data for Android or the app's sandbox for iOS.</p>
   */
  extraDataPackageArn?: string;

  /**
   * <p>Reserved for internal use.</p>
   */
  networkProfileArn?: string;

  /**
   * <p>Information about the locale that is used for the run.</p>
   */
  locale?: string;

  /**
   * <p>Information about the location that is used for the run.</p>
   */
  location?: Location;

  /**
   * <p>An array of ARNs for your VPC endpoint configurations.</p>
   */
  vpceConfigurationArns?: string[];

  /**
   * <p>Input <code>CustomerArtifactPaths</code> object for the scheduled run
   *             configuration.</p>
   */
  customerArtifactPaths?: CustomerArtifactPaths;

  /**
   * <p>Information about the radio states for the run.</p>
   */
  radios?: Radios;

  /**
   * <p>A list of upload ARNs for app packages to be installed with your app.</p>
   */
  auxiliaryApps?: string[];

  /**
   * <p>Specifies the billing method for a test run: <code>metered</code> or
   *                 <code>unmetered</code>. If the parameter is not specified, the default value is
   *                 <code>metered</code>.</p>
   *         <note>
   *             <p>If you have purchased unmetered device slots, you must set this parameter to <code>unmetered</code> to
   *                 make use of them. Otherwise, your run counts against your metered time.</p>
   *         </note>
   */
  billingMethod?: BillingMethod | string;
}

export namespace ScheduleRunConfiguration {
  export const filterSensitiveLog = (obj: ScheduleRunConfiguration): any => ({
    ...obj,
  });
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
  XCTEST_UI = "XCTEST_UI",
}

/**
 * <p>Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an
 *             example of the JSON request syntax, see <a>ScheduleRun</a>.</p>
 */
export interface ScheduleRunTest {
  /**
   * <p>The test's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER. For Android, an app explorer that traverses an
   *                     Android app, interacting with it and capturing screenshots at the same
   *                     time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   */
  type: TestType | string | undefined;

  /**
   * <p>The ARN of the uploaded test to be run.</p>
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
   * <p>The test's parameters, such as test framework parameters and fixture settings.
   *             Parameters are represented by name-value pairs of strings.</p>
   *         <p>For all tests:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>app_performance_monitoring</code>: Performance monitoring is enabled by default.
   *                     Set this parameter to false to disable it.</p>
   *             </li>
   *          </ul>
   *         <p>For Calabash tests:</p>
   *         <ul>
   *             <li>
   *                 <p>profile: A cucumber profile (for example, <code>my_profile_name</code>).</p>
   *             </li>
   *             <li>
   *                 <p>tags: You can limit execution to features or scenarios that have (or don't
   *                     have) certain tags (for example, @smoke or @smoke,~@wip).</p>
   *             </li>
   *          </ul>
   *         <p>For Appium tests (all types):</p>
   *         <ul>
   *             <li>
   *                 <p>appium_version: The Appium version. Currently supported values are 1.6.5
   *                     (and later), latest, and default.</p>
   *                 <ul>
   *                   <li>
   *
   *                         <p>latest runs the latest Appium version supported by Device
   *                             Farm (1.9.1).</p>
   *                     </li>
   *                   <li>
   *                         <p>For default, Device Farm selects a compatible version of
   *                             Appium for the device. The current behavior is to run 1.7.2 on Android
   *                             devices and iOS 9 and earlier and 1.7.2 for iOS 10 and later.</p>
   *                     </li>
   *                   <li>
   *                         <p>This behavior is subject to change.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>For fuzz tests (Android only):</p>
   *         <ul>
   *             <li>
   *                 <p>event_count: The number of events, between 1 and 10000, that the UI fuzz
   *                     test should perform.</p>
   *             </li>
   *             <li>
   *                 <p>throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should
   *                     wait between events.</p>
   *             </li>
   *             <li>
   *                 <p>seed: A seed to use for randomizing the UI fuzz test. Using the same seed
   *                     value between tests ensures identical event sequences.</p>
   *             </li>
   *          </ul>
   *         <p>For Explorer tests:</p>
   *         <ul>
   *             <li>
   *                 <p>username: A user name to use if the Explorer encounters a login form. If not supplied, no user
   *                     name is inserted.</p>
   *             </li>
   *             <li>
   *                 <p>password: A password to use if the Explorer encounters a login form. If not supplied, no
   *                     password is inserted.</p>
   *             </li>
   *          </ul>
   *         <p>For Instrumentation:</p>
   *         <ul>
   *             <li>
   *                 <p>filter: A test filter string. Examples:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Running a single test case: <code>com.android.abc.Test1</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running a single test: <code>com.android.abc.Test1#smoke</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running multiple tests:
   *                             <code>com.android.abc.Test1,com.android.abc.Test2</code>
   *                      </p>
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
   *                         <p>Running a single test class: <code>LoginTests</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running a multiple test classes: <code>LoginTests,SmokeTests</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running a single test: <code>LoginTests/testValid</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running multiple tests:
   *                             <code>LoginTests/testValid,LoginTests/testInvalid</code>
   *                      </p>
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
   *                         <p>Running a single test case: <code>com.android.abc.Test1</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running a single test: <code>com.android.abc.Test1#smoke</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Running multiple tests:
   *                             <code>com.android.abc.Test1,com.android.abc.Test2</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  parameters?: { [key: string]: string };
}

export namespace ScheduleRunTest {
  export const filterSensitiveLog = (obj: ScheduleRunTest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get device pool compatibility operation.</p>
 */
export interface GetDevicePoolCompatibilityRequest {
  /**
   * <p>The device pool's ARN.</p>
   */
  devicePoolArn: string | undefined;

  /**
   * <p>The ARN of the app that is associated with the specified device pool.</p>
   */
  appArn?: string;

  /**
   * <p>The test type for the specified device pool.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ.</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER. For Android, an app explorer that traverses an Android app, interacting with
   *                     it and capturing screenshots at the same time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY.</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH.</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION.</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST.</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI.</p>
   *             </li>
   *          </ul>
   */
  testType?: TestType | string;

  /**
   * <p>Information about the uploaded test to be run against the device pool.</p>
   */
  test?: ScheduleRunTest;

  /**
   * <p>An object that contains information about the settings for a run.</p>
   */
  configuration?: ScheduleRunConfiguration;
}

export namespace GetDevicePoolCompatibilityRequest {
  export const filterSensitiveLog = (obj: GetDevicePoolCompatibilityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents information about incompatibility.</p>
 */
export interface IncompatibilityMessage {
  /**
   * <p>A message about the incompatibility.</p>
   */
  message?: string;

  /**
   * <p>The type of incompatibility.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ARN</p>
   *             </li>
   *             <li>
   *                 <p>FORM_FACTOR (for example, phone or tablet)</p>
   *             </li>
   *             <li>
   *                 <p>MANUFACTURER</p>
   *             </li>
   *             <li>
   *                 <p>PLATFORM (for example, Android or iOS)</p>
   *             </li>
   *             <li>
   *                 <p>REMOTE_ACCESS_ENABLED</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_VERSION</p>
   *             </li>
   *          </ul>
   */
  type?: DeviceAttribute | string;
}

export namespace IncompatibilityMessage {
  export const filterSensitiveLog = (obj: IncompatibilityMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a device pool compatibility result.</p>
 */
export interface DevicePoolCompatibilityResult {
  /**
   * <p>The device (phone or tablet) to return information about.</p>
   */
  device?: Device;

  /**
   * <p>Whether the result was compatible with the device pool.</p>
   */
  compatible?: boolean;

  /**
   * <p>Information about the compatibility.</p>
   */
  incompatibilityMessages?: IncompatibilityMessage[];
}

export namespace DevicePoolCompatibilityResult {
  export const filterSensitiveLog = (obj: DevicePoolCompatibilityResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of describe device pool compatibility request.</p>
 */
export interface GetDevicePoolCompatibilityResult {
  /**
   * <p>Information about compatible devices.</p>
   */
  compatibleDevices?: DevicePoolCompatibilityResult[];

  /**
   * <p>Information about incompatible devices.</p>
   */
  incompatibleDevices?: DevicePoolCompatibilityResult[];
}

export namespace GetDevicePoolCompatibilityResult {
  export const filterSensitiveLog = (obj: GetDevicePoolCompatibilityResult): any => ({
    ...obj,
  });
}

export interface GetInstanceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an instance profile.</p>
   */
  arn: string | undefined;
}

export namespace GetInstanceProfileRequest {
  export const filterSensitiveLog = (obj: GetInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface GetInstanceProfileResult {
  /**
   * <p>An object that contains information about an instance profile.</p>
   */
  instanceProfile?: InstanceProfile;
}

export namespace GetInstanceProfileResult {
  export const filterSensitiveLog = (obj: GetInstanceProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get job operation.</p>
 */
export interface GetJobRequest {
  /**
   * <p>The job's ARN.</p>
   */
  arn: string | undefined;
}

export namespace GetJobRequest {
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a device.</p>
 */
export interface Job {
  /**
   * <p>The job's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The job's name.</p>
   */
  name?: string;

  /**
   * <p>The job's type.</p>
   *         <p>Allowed values include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER. For Android, an app explorer that traverses an Android app, interacting with
   *                     it and capturing screenshots at the same time.</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   */
  type?: TestType | string;

  /**
   * <p>When the job was created.</p>
   */
  created?: Date;

  /**
   * <p>The job's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING</p>
   *             </li>
   *          </ul>
   */
  status?: ExecutionStatus | string;

  /**
   * <p>The job's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   */
  result?: ExecutionResult | string;

  /**
   * <p>The job's start time.</p>
   */
  started?: Date;

  /**
   * <p>The job's stop time.</p>
   */
  stopped?: Date;

  /**
   * <p>The job's result counters.</p>
   */
  counters?: Counters;

  /**
   * <p>A message about the job's result.</p>
   */
  message?: string;

  /**
   * <p>The device (phone or tablet).</p>
   */
  device?: Device;

  /**
   * <p>The ARN of the instance.</p>
   */
  instanceArn?: string;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the job.</p>
   */
  deviceMinutes?: DeviceMinutes;

  /**
   * <p>The endpoint for streaming device video.</p>
   */
  videoEndpoint?: string;

  /**
   * <p>This value is set to true if video capture is enabled. Otherwise, it is set to false.</p>
   */
  videoCapture?: boolean;
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a get job request.</p>
 */
export interface GetJobResult {
  /**
   * <p>An object that contains information about the requested job.</p>
   */
  job?: Job;
}

export namespace GetJobResult {
  export const filterSensitiveLog = (obj: GetJobResult): any => ({
    ...obj,
  });
}

export interface GetNetworkProfileRequest {
  /**
   * <p>The ARN of the network profile to return information about.</p>
   */
  arn: string | undefined;
}

export namespace GetNetworkProfileRequest {
  export const filterSensitiveLog = (obj: GetNetworkProfileRequest): any => ({
    ...obj,
  });
}

export interface GetNetworkProfileResult {
  /**
   * <p>The network profile.</p>
   */
  networkProfile?: NetworkProfile;
}

export namespace GetNetworkProfileResult {
  export const filterSensitiveLog = (obj: GetNetworkProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to retrieve the offering status for the specified customer
 *             or account.</p>
 */
export interface GetOfferingStatusRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace GetOfferingStatusRequest {
  export const filterSensitiveLog = (obj: GetOfferingStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A number that represents the monetary amount for an offering or transaction.</p>
 */
export interface MonetaryAmount {
  /**
   * <p>The numerical amount of an offering or transaction.</p>
   */
  amount?: number;

  /**
   * <p>The currency code of a monetary amount. For example, <code>USD</code> means U.S. dollars.</p>
   */
  currencyCode?: CurrencyCode | string;
}

export namespace MonetaryAmount {
  export const filterSensitiveLog = (obj: MonetaryAmount): any => ({
    ...obj,
  });
}

export enum RecurringChargeFrequency {
  MONTHLY = "MONTHLY",
}

/**
 * <p>Specifies whether charges for devices are recurring.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The cost of the recurring charge.</p>
   */
  cost?: MonetaryAmount;

  /**
   * <p>The frequency in which charges recur.</p>
   */
  frequency?: RecurringChargeFrequency | string;
}

export namespace RecurringCharge {
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

export enum OfferingType {
  RECURRING = "RECURRING",
}

/**
 * <p>Represents the metadata of a device offering.</p>
 */
export interface Offering {
  /**
   * <p>The ID that corresponds to a device offering.</p>
   */
  id?: string;

  /**
   * <p>A string that describes the offering.</p>
   */
  description?: string;

  /**
   * <p>The type of offering (for example, <code>RECURRING</code>) for a device.</p>
   */
  type?: OfferingType | string;

  /**
   * <p>The platform of the device (for example, <code>ANDROID</code> or <code>IOS</code>).</p>
   */
  platform?: DevicePlatform | string;

  /**
   * <p>Specifies whether there are recurring charges for the offering.</p>
   */
  recurringCharges?: RecurringCharge[];
}

export namespace Offering {
  export const filterSensitiveLog = (obj: Offering): any => ({
    ...obj,
  });
}

export enum OfferingTransactionType {
  PURCHASE = "PURCHASE",
  RENEW = "RENEW",
  SYSTEM = "SYSTEM",
}

/**
 * <p>The status of the offering.</p>
 */
export interface OfferingStatus {
  /**
   * <p>The type specified for the offering status.</p>
   */
  type?: OfferingTransactionType | string;

  /**
   * <p>Represents the metadata of an offering status.</p>
   */
  offering?: Offering;

  /**
   * <p>The number of available devices in the offering.</p>
   */
  quantity?: number;

  /**
   * <p>The date on which the offering is effective.</p>
   */
  effectiveOn?: Date;
}

export namespace OfferingStatus {
  export const filterSensitiveLog = (obj: OfferingStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the status result for a device offering.</p>
 */
export interface GetOfferingStatusResult {
  /**
   * <p>When specified, gets the offering status for the current period.</p>
   */
  current?: { [key: string]: OfferingStatus };

  /**
   * <p>When specified, gets the offering status for the next period.</p>
   */
  nextPeriod?: { [key: string]: OfferingStatus };

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace GetOfferingStatusResult {
  export const filterSensitiveLog = (obj: GetOfferingStatusResult): any => ({
    ...obj,
  });
}

/**
 * <p>Exception gets thrown when a user is not eligible to perform the specified
 *             transaction.</p>
 */
export interface NotEligibleException extends __SmithyException, $MetadataBearer {
  name: "NotEligibleException";
  $fault: "client";
  /**
   * <p>The HTTP response code of a Not Eligible exception.</p>
   */
  message?: string;
}

export namespace NotEligibleException {
  export const filterSensitiveLog = (obj: NotEligibleException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get project operation.</p>
 */
export interface GetProjectRequest {
  /**
   * <p>The project's ARN.</p>
   */
  arn: string | undefined;
}

export namespace GetProjectRequest {
  export const filterSensitiveLog = (obj: GetProjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a get project request.</p>
 */
export interface GetProjectResult {
  /**
   * <p>The project to get information about.</p>
   */
  project?: Project;
}

export namespace GetProjectResult {
  export const filterSensitiveLog = (obj: GetProjectResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to get information about the specified remote access
 *             session.</p>
 */
export interface GetRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session about which you want to
   *             get session information.</p>
   */
  arn: string | undefined;
}

export namespace GetRemoteAccessSessionRequest {
  export const filterSensitiveLog = (obj: GetRemoteAccessSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server that lists detailed information about the
 *             remote access session.</p>
 */
export interface GetRemoteAccessSessionResult {
  /**
   * <p>A container that lists detailed information about the remote access
   *             session.</p>
   */
  remoteAccessSession?: RemoteAccessSession;
}

export namespace GetRemoteAccessSessionResult {
  export const filterSensitiveLog = (obj: GetRemoteAccessSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get run operation.</p>
 */
export interface GetRunRequest {
  /**
   * <p>The run's ARN.</p>
   */
  arn: string | undefined;
}

export namespace GetRunRequest {
  export const filterSensitiveLog = (obj: GetRunRequest): any => ({
    ...obj,
  });
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
  REMOTE_DEBUG_ENABLED = "REMOTE_DEBUG_ENABLED",
}

/**
 * <p>Represents a device filter used to select a set of devices to be included in a test
 *             run. This data structure is passed in as the <code>deviceSelectionConfiguration</code>
 *             parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see
 *                 <a>ScheduleRun</a>.</p>
 *         <p>It is also passed in as the <code>filters</code> parameter to
 *             <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>
 */
export interface DeviceFilter {
  /**
   * <p>The aspect of a device such as platform or model used as the selection criteria in a
   *             device filter.</p>
   *         <p>The supported operators for each attribute are provided in the following list.</p>
   *         <dl>
   *             <dt>ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device (for example,
   *                             <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p>
   *                     <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>PLATFORM</dt>
   *             <dd>
   *                     <p>The device platform. Valid values are ANDROID or IOS.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>OS_VERSION</dt>
   *             <dd>
   *                     <p>The operating system version (for example, 10.3.2).</p>
   *                     <p>Supported operators: <code>EQUALS</code>, <code>GREATER_THAN</code>,
   *                             <code>GREATER_THAN_OR_EQUALS</code>, <code>IN</code>,
   *                             <code>LESS_THAN</code>, <code>LESS_THAN_OR_EQUALS</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>MODEL</dt>
   *             <dd>
   *                     <p>The device model (for example, iPad 5th Gen).</p>
   *                     <p>Supported operators: <code>CONTAINS</code>, <code>EQUALS</code>,
   *                             <code>IN</code>, <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>AVAILABILITY</dt>
   *             <dd>
   *                     <p>The current availability of the device. Valid values are AVAILABLE,
   *                         HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>FORM_FACTOR</dt>
   *             <dd>
   *                     <p>The device form factor. Valid values are PHONE or TABLET.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>MANUFACTURER</dt>
   *             <dd>
   *                     <p>The device manufacturer (for example, Apple).</p>
   *                     <p>Supported operators: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_ACCESS_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote access. Valid values are TRUE or
   *                         FALSE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *             <dt>REMOTE_DEBUG_ENABLED</dt>
   *             <dd>
   *                     <p>Whether the device is enabled for remote debugging. Valid values are TRUE or FALSE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                     <p>Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer
   *                             supported</a>, this filter is ignored.</p>
   *                 </dd>
   *             <dt>INSTANCE_ARN</dt>
   *             <dd>
   *                     <p>The Amazon Resource Name (ARN) of the device instance.</p>
   *                     <p>Supported operators: <code>EQUALS</code>, <code>IN</code>,
   *                             <code>NOT_IN</code>
   *                </p>
   *                 </dd>
   *             <dt>INSTANCE_LABELS</dt>
   *             <dd>
   *                     <p>The label of the device instance.</p>
   *                     <p>Supported operators: <code>CONTAINS</code>
   *                </p>
   *                 </dd>
   *             <dt>FLEET_TYPE</dt>
   *             <dd>
   *                     <p>The fleet type. Valid values are PUBLIC or PRIVATE.</p>
   *                     <p>Supported operators: <code>EQUALS</code>
   *                </p>
   *                 </dd>
   *          </dl>
   */
  attribute?: DeviceFilterAttribute | string;

  /**
   * <p>Specifies how Device Farm compares the filter's attribute to the value. See the attribute
   *             descriptions.</p>
   */
  operator?: RuleOperator | string;

  /**
   * <p>An array of one or more filter values used in a device filter.</p>
   *         <p class="title">
   *             <b>Operator Values</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>The IN and NOT_IN operators can take a values array that has more than one
   *                     element.</p>
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
   *                 <p>The PLATFORM attribute can be set to ANDROID or IOS.</p>
   *             </li>
   *             <li>
   *                 <p>The AVAILABILITY attribute can be set to AVAILABLE, HIGHLY_AVAILABLE, BUSY, or
   *                     TEMPORARY_NOT_AVAILABLE.</p>
   *             </li>
   *             <li>
   *                 <p>The FORM_FACTOR attribute can be set to PHONE or TABLET.</p>
   *             </li>
   *             <li>
   *                 <p>The FLEET_TYPE attribute can be set to PUBLIC or PRIVATE.</p>
   *             </li>
   *          </ul>
   */
  values?: string[];
}

export namespace DeviceFilter {
  export const filterSensitiveLog = (obj: DeviceFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the run results requested by the device selection configuration and how many devices were
 *             returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.</p>
 */
export interface DeviceSelectionResult {
  /**
   * <p>The filters in a device selection result.</p>
   */
  filters?: DeviceFilter[];

  /**
   * <p>The number of devices that matched the device filter selection criteria.</p>
   */
  matchedDevicesCount?: number;

  /**
   * <p>The maximum number of devices to be selected by a device filter and included in a test
   *             run.</p>
   */
  maxDevices?: number;
}

export namespace DeviceSelectionResult {
  export const filterSensitiveLog = (obj: DeviceSelectionResult): any => ({
    ...obj,
  });
}

export enum ExecutionResultCode {
  PARSING_FAILED = "PARSING_FAILED",
  VPC_ENDPOINT_SETUP_FAILED = "VPC_ENDPOINT_SETUP_FAILED",
}

/**
 * <p>Represents a test run on a set of devices with a given app package, test parameters, and so
 *             on.</p>
 */
export interface Run {
  /**
   * <p>The run's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The run's name.</p>
   */
  name?: string;

  /**
   * <p>The run's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER</p>
   *                 <note>
   *                     <p>For Android, an app explorer that traverses an Android app, interacting with it and capturing
   *                         screenshots at the same time.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   */
  type?: TestType | string;

  /**
   * <p>The run's platform.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID</p>
   *             </li>
   *             <li>
   *                 <p>IOS</p>
   *             </li>
   *          </ul>
   */
  platform?: DevicePlatform | string;

  /**
   * <p>When the run was created.</p>
   */
  created?: Date;

  /**
   * <p>The run's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING</p>
   *             </li>
   *          </ul>
   */
  status?: ExecutionStatus | string;

  /**
   * <p>The run's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   */
  result?: ExecutionResult | string;

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
  counters?: Counters;

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
   * <p>Specifies the billing method for a test run: <code>metered</code> or
   *                 <code>unmetered</code>. If the parameter is not specified, the default value is
   *                 <code>metered</code>.</p>
   *         <note>
   *             <p>If you have unmetered device slots, you must set this to <code>unmetered</code> to use them.
   *                 Otherwise, the run is counted toward metered device minutes.</p>
   *         </note>
   */
  billingMethod?: BillingMethod | string;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the test run.</p>
   */
  deviceMinutes?: DeviceMinutes;

  /**
   * <p>The network profile being used for a test run.</p>
   */
  networkProfile?: NetworkProfile;

  /**
   * <p>Read-only URL for an object in an S3 bucket where you can get the parsing results of the test package.
   *             If the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points
   *             to.</p>
   */
  parsingResultUrl?: string;

  /**
   * <p>Supporting field for the result field. Set only if <code>result</code> is <code>SKIPPED</code>.
   *                 <code>PARSING_FAILED</code> if the result is skipped because of test package parsing failure.</p>
   */
  resultCode?: ExecutionResultCode | string;

  /**
   * <p>For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same
   *             seed value between tests ensures identical event sequences.</p>
   */
  seed?: number;

  /**
   * <p>An app to upload or that has been uploaded.</p>
   */
  appUpload?: string;

  /**
   * <p>For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz
   *             test should perform.</p>
   */
  eventCount?: number;

  /**
   * <p>The number of minutes the job executes before it times out.</p>
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
  radios?: Radios;

  /**
   * <p>Information about the location that is used for the run.</p>
   */
  location?: Location;

  /**
   * <p>Output <code>CustomerArtifactPaths</code> object for the test run.</p>
   */
  customerArtifactPaths?: CustomerArtifactPaths;

  /**
   * <p>The Device Farm console URL for the recording of the run.</p>
   */
  webUrl?: string;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information about how Device Farm re-signs your apps, see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;

  /**
   * <p>The ARN of the YAML-formatted test specification for the run.</p>
   */
  testSpecArn?: string;

  /**
   * <p>The results of a device filter used to select the devices for a test run.</p>
   */
  deviceSelectionResult?: DeviceSelectionResult;
}

export namespace Run {
  export const filterSensitiveLog = (obj: Run): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a get run request.</p>
 */
export interface GetRunResult {
  /**
   * <p>The run to get results from.</p>
   */
  run?: Run;
}

export namespace GetRunResult {
  export const filterSensitiveLog = (obj: GetRunResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get suite operation.</p>
 */
export interface GetSuiteRequest {
  /**
   * <p>The suite's ARN.</p>
   */
  arn: string | undefined;
}

export namespace GetSuiteRequest {
  export const filterSensitiveLog = (obj: GetSuiteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of one or more tests.</p>
 */
export interface Suite {
  /**
   * <p>The suite's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The suite's name.</p>
   */
  name?: string;

  /**
   * <p>The suite's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER </p>
   *                 <note>
   *                     <p>Only available for Android; an app explorer that traverses an Android app, interacting with it
   *                         and capturing screenshots at the same time.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   */
  type?: TestType | string;

  /**
   * <p>When the suite was created.</p>
   */
  created?: Date;

  /**
   * <p>The suite's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING</p>
   *             </li>
   *          </ul>
   */
  status?: ExecutionStatus | string;

  /**
   * <p>The suite's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   */
  result?: ExecutionResult | string;

  /**
   * <p>The suite's start time.</p>
   */
  started?: Date;

  /**
   * <p>The suite's stop time.</p>
   */
  stopped?: Date;

  /**
   * <p>The suite's result counters.</p>
   */
  counters?: Counters;

  /**
   * <p>A message about the suite's result.</p>
   */
  message?: string;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the test
   *             suite.</p>
   */
  deviceMinutes?: DeviceMinutes;
}

export namespace Suite {
  export const filterSensitiveLog = (obj: Suite): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a get suite request.</p>
 */
export interface GetSuiteResult {
  /**
   * <p>A collection of one or more tests.</p>
   */
  suite?: Suite;
}

export namespace GetSuiteResult {
  export const filterSensitiveLog = (obj: GetSuiteResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get test operation.</p>
 */
export interface GetTestRequest {
  /**
   * <p>The test's ARN.</p>
   */
  arn: string | undefined;
}

export namespace GetTestRequest {
  export const filterSensitiveLog = (obj: GetTestRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a condition that is evaluated.</p>
 */
export interface Test {
  /**
   * <p>The test's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The test's name.</p>
   */
  name?: string;

  /**
   * <p>The test's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>BUILTIN_FUZZ</p>
   *             </li>
   *             <li>
   *                 <p>BUILTIN_EXPLORER</p>
   *                 <note>
   *                     <p>For Android, an app explorer that traverses an Android app, interacting with it and capturing
   *                         screenshots at the same time.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI</p>
   *             </li>
   *          </ul>
   */
  type?: TestType | string;

  /**
   * <p>When the test was created.</p>
   */
  created?: Date;

  /**
   * <p>The test's status.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_CONCURRENCY</p>
   *             </li>
   *             <li>
   *                 <p>PENDING_DEVICE</p>
   *             </li>
   *             <li>
   *                 <p>PROCESSING</p>
   *             </li>
   *             <li>
   *                 <p>SCHEDULING</p>
   *             </li>
   *             <li>
   *                 <p>PREPARING</p>
   *             </li>
   *             <li>
   *                 <p>RUNNING</p>
   *             </li>
   *             <li>
   *                 <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPING</p>
   *             </li>
   *          </ul>
   */
  status?: ExecutionStatus | string;

  /**
   * <p>The test's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   */
  result?: ExecutionResult | string;

  /**
   * <p>The test's start time.</p>
   */
  started?: Date;

  /**
   * <p>The test's stop time.</p>
   */
  stopped?: Date;

  /**
   * <p>The test's result counters.</p>
   */
  counters?: Counters;

  /**
   * <p>A message about the test's result.</p>
   */
  message?: string;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the test.</p>
   */
  deviceMinutes?: DeviceMinutes;
}

export namespace Test {
  export const filterSensitiveLog = (obj: Test): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a get test request.</p>
 */
export interface GetTestResult {
  /**
   * <p>A test condition that is evaluated.</p>
   */
  test?: Test;
}

export namespace GetTestResult {
  export const filterSensitiveLog = (obj: GetTestResult): any => ({
    ...obj,
  });
}

export interface GetTestGridProjectRequest {
  /**
   * <p>The ARN of the Selenium testing project, from either <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>.</p>
   */
  projectArn: string | undefined;
}

export namespace GetTestGridProjectRequest {
  export const filterSensitiveLog = (obj: GetTestGridProjectRequest): any => ({
    ...obj,
  });
}

export interface GetTestGridProjectResult {
  /**
   * <p>A <a>TestGridProject</a>.</p>
   */
  testGridProject?: TestGridProject;
}

export namespace GetTestGridProjectResult {
  export const filterSensitiveLog = (obj: GetTestGridProjectResult): any => ({
    ...obj,
  });
}

export interface GetTestGridSessionRequest {
  /**
   * <p>The ARN for the project that this session belongs to. See <a>CreateTestGridProject</a> and <a>ListTestGridProjects</a>.</p>
   */
  projectArn?: string;

  /**
   * <p>An ID associated with this session.</p>
   */
  sessionId?: string;

  /**
   * <p>An ARN that uniquely identifies a <a>TestGridSession</a>.</p>
   */
  sessionArn?: string;
}

export namespace GetTestGridSessionRequest {
  export const filterSensitiveLog = (obj: GetTestGridSessionRequest): any => ({
    ...obj,
  });
}

export enum TestGridSessionStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
  ERRORED = "ERRORED",
}

/**
 * <p>A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a
 *          call to <a>CreateTestGridUrl</a>.</p>
 */
export interface TestGridSession {
  /**
   * <p>The ARN of the session.</p>
   */
  arn?: string;

  /**
   * <p>The state of the session.</p>
   */
  status?: TestGridSessionStatus | string;

  /**
   * <p>The time that the session was started.</p>
   */
  created?: Date;

  /**
   * <p>The time the session ended.</p>
   */
  ended?: Date;

  /**
   * <p>The number of billed minutes that were used for this session. </p>
   */
  billingMinutes?: number;

  /**
   * <p>A JSON object of options and parameters passed to the Selenium WebDriver.</p>
   */
  seleniumProperties?: string;
}

export namespace TestGridSession {
  export const filterSensitiveLog = (obj: TestGridSession): any => ({
    ...obj,
  });
}

export interface GetTestGridSessionResult {
  /**
   * <p>The <a>TestGridSession</a> that was requested.</p>
   */
  testGridSession?: TestGridSession;
}

export namespace GetTestGridSessionResult {
  export const filterSensitiveLog = (obj: GetTestGridSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the get upload operation.</p>
 */
export interface GetUploadRequest {
  /**
   * <p>The upload's ARN.</p>
   */
  arn: string | undefined;
}

export namespace GetUploadRequest {
  export const filterSensitiveLog = (obj: GetUploadRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a get upload request.</p>
 */
export interface GetUploadResult {
  /**
   * <p>An app or a set of one or more tests to upload or that have been
   *             uploaded.</p>
   */
  upload?: Upload;
}

export namespace GetUploadResult {
  export const filterSensitiveLog = (obj: GetUploadResult): any => ({
    ...obj,
  });
}

export interface GetVPCEConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to
   *             describe.</p>
   */
  arn: string | undefined;
}

export namespace GetVPCEConfigurationRequest {
  export const filterSensitiveLog = (obj: GetVPCEConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetVPCEConfigurationResult {
  /**
   * <p>An object that contains information about your VPC endpoint configuration.</p>
   */
  vpceConfiguration?: VPCEConfiguration;
}

export namespace GetVPCEConfigurationResult {
  export const filterSensitiveLog = (obj: GetVPCEConfigurationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to install an Android application (in .apk format) or an iOS
 *             application (in .ipa format) as part of a remote access session.</p>
 */
export interface InstallToRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session about which you are
   *             requesting information.</p>
   */
  remoteAccessSessionArn: string | undefined;

  /**
   * <p>The ARN of the app about which you are requesting information.</p>
   */
  appArn: string | undefined;
}

export namespace InstallToRemoteAccessSessionRequest {
  export const filterSensitiveLog = (obj: InstallToRemoteAccessSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server after AWS Device Farm makes a request to
 *             install to a remote access session.</p>
 */
export interface InstallToRemoteAccessSessionResult {
  /**
   * <p>An app to upload or that has been uploaded.</p>
   */
  appUpload?: Upload;
}

export namespace InstallToRemoteAccessSessionResult {
  export const filterSensitiveLog = (obj: InstallToRemoteAccessSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list artifacts operation.</p>
 */
export interface ListArtifactsRequest {
  /**
   * <p>The run, job, suite, or test ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The artifacts' type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>FILE</p>
   *             </li>
   *             <li>
   *                 <p>LOG</p>
   *             </li>
   *             <li>
   *                 <p>SCREENSHOT</p>
   *             </li>
   *          </ul>
   */
  type: ArtifactCategory | string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListArtifactsRequest {
  export const filterSensitiveLog = (obj: ListArtifactsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list artifacts operation.</p>
 */
export interface ListArtifactsResult {
  /**
   * <p>Information about the artifacts.</p>
   */
  artifacts?: Artifact[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListArtifactsResult {
  export const filterSensitiveLog = (obj: ListArtifactsResult): any => ({
    ...obj,
  });
}

export interface ListDeviceInstancesRequest {
  /**
   * <p>An integer that specifies the maximum number of items you want to return in the API response.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListDeviceInstancesRequest {
  export const filterSensitiveLog = (obj: ListDeviceInstancesRequest): any => ({
    ...obj,
  });
}

export interface ListDeviceInstancesResult {
  /**
   * <p>An object that contains information about your device instances.</p>
   */
  deviceInstances?: DeviceInstance[];

  /**
   * <p>An identifier that can be used in the next call to this operation to return the next
   *             set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListDeviceInstancesResult {
  export const filterSensitiveLog = (obj: ListDeviceInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list device pools request.</p>
 */
export interface ListDevicePoolsRequest {
  /**
   * <p>The project ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The device pools' type.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>CURATED: A device pool that is created and managed by AWS Device
   *                     Farm.</p>
   *             </li>
   *             <li>
   *                 <p>PRIVATE: A device pool that is created and managed by the device pool
   *                     developer.</p>
   *             </li>
   *          </ul>
   */
  type?: DevicePoolType | string;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListDevicePoolsRequest {
  export const filterSensitiveLog = (obj: ListDevicePoolsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list device pools request.</p>
 */
export interface ListDevicePoolsResult {
  /**
   * <p>Information about the device pools.</p>
   */
  devicePools?: DevicePool[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListDevicePoolsResult {
  export const filterSensitiveLog = (obj: ListDevicePoolsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list devices request.</p>
 */
export interface ListDevicesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  arn?: string;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>Used to select a set of devices. A filter is made up of an attribute, an operator, and
   *             one or more values.</p>
   *         <ul>
   *             <li>
   *                 <p>Attribute: The aspect of a device such as platform or model used as the
   *                     selection criteria in a device filter.</p>
   *                 <p>Allowed values include:</p>
   *                 <ul>
   *                   <li>
   *                         <p>ARN: The Amazon Resource Name (ARN) of the device (for example,
   *                                 <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p>
   *                     </li>
   *                   <li>
   *                         <p>PLATFORM: The device platform. Valid values are ANDROID or IOS.</p>
   *                     </li>
   *                   <li>
   *                         <p>OS_VERSION: The operating system version (for example, 10.3.2).</p>
   *                     </li>
   *                   <li>
   *                         <p>MODEL: The device model (for example, iPad 5th Gen).</p>
   *                     </li>
   *                   <li>
   *                         <p>AVAILABILITY: The current availability of the device. Valid values are AVAILABLE,
   *                             HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p>
   *                     </li>
   *                   <li>
   *                         <p>FORM_FACTOR: The device form factor. Valid values are PHONE or TABLET.</p>
   *                     </li>
   *                   <li>
   *                         <p>MANUFACTURER: The device manufacturer (for example, Apple).</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access. Valid values
   *                             are TRUE or FALSE.</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values
   *                             are TRUE or FALSE. Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                                 longer supported</a>, this attribute is ignored.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device
   *                             instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_LABELS: The label of the device instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>FLEET_TYPE: The fleet type. Valid values are PUBLIC or PRIVATE.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Operator: The filter operator.</p>
   *                 <ul>
   *                   <li>
   *                         <p>The EQUALS operator is available for every attribute except
   *                             INSTANCE_LABELS.</p>
   *                     </li>
   *                   <li>
   *                         <p>The CONTAINS operator is available for the INSTANCE_LABELS and MODEL
   *                             attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The IN and NOT_IN operators are available for the ARN, OS_VERSION,
   *                             MODEL, MANUFACTURER, and INSTANCE_ARN attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and
   *                             GREATER_THAN_OR_EQUALS operators are also available for the OS_VERSION
   *                             attribute.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Values: An array of one or more filter values.</p>
   *                 <ul>
   *                   <li>
   *                         <p>The IN and NOT_IN operators take a values array that has one or more
   *                             elements.</p>
   *                     </li>
   *                   <li>
   *                         <p>The other operators require an array with a single element.</p>
   *                     </li>
   *                   <li>
   *                         <p>In a request, the AVAILABILITY attribute takes the following values: AVAILABLE,
   *                             HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  filters?: DeviceFilter[];
}

export namespace ListDevicesRequest {
  export const filterSensitiveLog = (obj: ListDevicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list devices operation.</p>
 */
export interface ListDevicesResult {
  /**
   * <p>Information about the devices.</p>
   */
  devices?: Device[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListDevicesResult {
  export const filterSensitiveLog = (obj: ListDevicesResult): any => ({
    ...obj,
  });
}

export interface ListInstanceProfilesRequest {
  /**
   * <p>An integer that specifies the maximum number of items you want to return in the API response.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListInstanceProfilesRequest {
  export const filterSensitiveLog = (obj: ListInstanceProfilesRequest): any => ({
    ...obj,
  });
}

export interface ListInstanceProfilesResult {
  /**
   * <p>An object that contains information about your instance profiles.</p>
   */
  instanceProfiles?: InstanceProfile[];

  /**
   * <p>An identifier that can be used in the next call to this operation to return the next
   *             set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListInstanceProfilesResult {
  export const filterSensitiveLog = (obj: ListInstanceProfilesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list jobs operation.</p>
 */
export interface ListJobsRequest {
  /**
   * <p>The run's Amazon Resource Name (ARN).</p>
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list jobs request.</p>
 */
export interface ListJobsResult {
  /**
   * <p>Information about the jobs.</p>
   */
  jobs?: Job[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListJobsResult {
  export const filterSensitiveLog = (obj: ListJobsResult): any => ({
    ...obj,
  });
}

export interface ListNetworkProfilesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to list network
   *             profiles.</p>
   */
  arn: string | undefined;

  /**
   * <p>The type of network profile to return information about. Valid values are listed here.</p>
   */
  type?: NetworkProfileType | string;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListNetworkProfilesRequest {
  export const filterSensitiveLog = (obj: ListNetworkProfilesRequest): any => ({
    ...obj,
  });
}

export interface ListNetworkProfilesResult {
  /**
   * <p>A list of the available network profiles.</p>
   */
  networkProfiles?: NetworkProfile[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListNetworkProfilesResult {
  export const filterSensitiveLog = (obj: ListNetworkProfilesResult): any => ({
    ...obj,
  });
}

export interface ListOfferingPromotionsRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListOfferingPromotionsRequest {
  export const filterSensitiveLog = (obj: ListOfferingPromotionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents information about an offering promotion.</p>
 */
export interface OfferingPromotion {
  /**
   * <p>The ID of the offering promotion.</p>
   */
  id?: string;

  /**
   * <p>A string that describes the offering promotion.</p>
   */
  description?: string;
}

export namespace OfferingPromotion {
  export const filterSensitiveLog = (obj: OfferingPromotion): any => ({
    ...obj,
  });
}

export interface ListOfferingPromotionsResult {
  /**
   * <p>Information about the offering promotions.</p>
   */
  offeringPromotions?: OfferingPromotion[];

  /**
   * <p>An identifier to be used in the next call to this operation, to return the next set
   *             of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListOfferingPromotionsResult {
  export const filterSensitiveLog = (obj: ListOfferingPromotionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to list all offerings.</p>
 */
export interface ListOfferingsRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListOfferingsRequest {
  export const filterSensitiveLog = (obj: ListOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the return values of the list of offerings.</p>
 */
export interface ListOfferingsResult {
  /**
   * <p>A value that represents the list offering results.</p>
   */
  offerings?: Offering[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListOfferingsResult {
  export const filterSensitiveLog = (obj: ListOfferingsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to list the offering transaction history.</p>
 */
export interface ListOfferingTransactionsRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListOfferingTransactionsRequest {
  export const filterSensitiveLog = (obj: ListOfferingTransactionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the metadata of an offering transaction.</p>
 */
export interface OfferingTransaction {
  /**
   * <p>The status of an offering transaction.</p>
   */
  offeringStatus?: OfferingStatus;

  /**
   * <p>The transaction ID of the offering transaction.</p>
   */
  transactionId?: string;

  /**
   * <p>The ID that corresponds to a device offering promotion.</p>
   */
  offeringPromotionId?: string;

  /**
   * <p>The date on which an offering transaction was created.</p>
   */
  createdOn?: Date;

  /**
   * <p>The cost of an offering transaction.</p>
   */
  cost?: MonetaryAmount;
}

export namespace OfferingTransaction {
  export const filterSensitiveLog = (obj: OfferingTransaction): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the transaction log of the specified offerings.</p>
 */
export interface ListOfferingTransactionsResult {
  /**
   * <p>The audit log of subscriptions you have purchased and modified through AWS Device
   *             Farm.</p>
   */
  offeringTransactions?: OfferingTransaction[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListOfferingTransactionsResult {
  export const filterSensitiveLog = (obj: ListOfferingTransactionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list projects operation.</p>
 */
export interface ListProjectsRequest {
  /**
   * <p>Optional. If no Amazon Resource Name (ARN) is specified, then AWS Device Farm
   *             returns a list of all projects for the AWS account. You can also specify a project
   *             ARN.</p>
   */
  arn?: string;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListProjectsRequest {
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list projects request.</p>
 */
export interface ListProjectsResult {
  /**
   * <p>Information about the projects.</p>
   */
  projects?: Project[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListProjectsResult {
  export const filterSensitiveLog = (obj: ListProjectsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to return information about the remote access
 *             session.</p>
 */
export interface ListRemoteAccessSessionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project about which you are requesting
   *             information.</p>
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListRemoteAccessSessionsRequest {
  export const filterSensitiveLog = (obj: ListRemoteAccessSessionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server after AWS Device Farm makes a request to
 *             return information about the remote access session.</p>
 */
export interface ListRemoteAccessSessionsResult {
  /**
   * <p>A container that represents the metadata from the service about each remote access session you are
   *             requesting.</p>
   */
  remoteAccessSessions?: RemoteAccessSession[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListRemoteAccessSessionsResult {
  export const filterSensitiveLog = (obj: ListRemoteAccessSessionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list runs operation.</p>
 */
export interface ListRunsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to list
   *             runs.</p>
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListRunsRequest {
  export const filterSensitiveLog = (obj: ListRunsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list runs request.</p>
 */
export interface ListRunsResult {
  /**
   * <p>Information about the runs.</p>
   */
  runs?: Run[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListRunsResult {
  export const filterSensitiveLog = (obj: ListRunsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list samples operation.</p>
 */
export interface ListSamplesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the job used to list samples.</p>
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListSamplesRequest {
  export const filterSensitiveLog = (obj: ListSamplesRequest): any => ({
    ...obj,
  });
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
  TX_RATE = "TX_RATE",
}

/**
 * <p>Represents a sample of performance data.</p>
 */
export interface Sample {
  /**
   * <p>The sample's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The sample's type.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>CPU: A CPU sample type. This is expressed as the app processing CPU time
   *                     (including child processes) as reported by process, as a percentage.</p>
   *             </li>
   *             <li>
   *                 <p>MEMORY: A memory usage sample type. This is expressed as the total
   *                     proportional set size of an app process, in kilobytes.</p>
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
   *                 <p>RX_RATE: The total number of bytes per second (TCP and UDP) that are sent,
   *                     by app process.</p>
   *             </li>
   *             <li>
   *                 <p>THREADS: A threads sample type. This is expressed as the total number of
   *                     threads per app process.</p>
   *             </li>
   *             <li>
   *                 <p>TX</p>
   *             </li>
   *             <li>
   *                 <p>TX_RATE: The total number of bytes per second (TCP and UDP) that are
   *                     received, by app process.</p>
   *             </li>
   *          </ul>
   */
  type?: SampleType | string;

  /**
   * <p>The presigned Amazon S3 URL that can be used with a GET request to download the sample's
   *             file.</p>
   */
  url?: string;
}

export namespace Sample {
  export const filterSensitiveLog = (obj: Sample): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list samples request.</p>
 */
export interface ListSamplesResult {
  /**
   * <p>Information about the samples.</p>
   */
  samples?: Sample[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListSamplesResult {
  export const filterSensitiveLog = (obj: ListSamplesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list suites operation.</p>
 */
export interface ListSuitesRequest {
  /**
   * <p>The job's Amazon Resource Name (ARN).</p>
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListSuitesRequest {
  export const filterSensitiveLog = (obj: ListSuitesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list suites request.</p>
 */
export interface ListSuitesResult {
  /**
   * <p>Information about the suites.</p>
   */
  suites?: Suite[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListSuitesResult {
  export const filterSensitiveLog = (obj: ListSuitesResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource or resources for which to list tags. You can associate tags
   *             with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>,
   *                 <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>,
   *                 <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and
   *             <code>VPCE_CONFIGURATION</code>.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a
 *             key and an optional value, both of which you define. Tag keys can have a maximum character length of 128
 *             characters. Tag values can have a maximum length of 256 characters. </p>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A <code>key</code> is a general label that acts like a
   *             category for more specific tag values.</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that makes up a tag. A <code>value</code> acts as a descriptor in a
   *             tag category (key).</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum
   *             character length of 128 characters. Tag values can have a maximum length of 256 characters.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTestGridProjectsRequest {
  /**
   * <p>Return no more than this number of results.</p>
   */
  maxResult?: number;

  /**
   * <p>From a response, used to continue a paginated listing. </p>
   */
  nextToken?: string;
}

export namespace ListTestGridProjectsRequest {
  export const filterSensitiveLog = (obj: ListTestGridProjectsRequest): any => ({
    ...obj,
  });
}

export interface ListTestGridProjectsResult {
  /**
   * <p>The list of TestGridProjects, based on a <a>ListTestGridProjectsRequest</a>.</p>
   */
  testGridProjects?: TestGridProject[];

  /**
   * <p>Used for pagination. Pass into <a>ListTestGridProjects</a> to get more results in a paginated
   *          request.</p>
   */
  nextToken?: string;
}

export namespace ListTestGridProjectsResult {
  export const filterSensitiveLog = (obj: ListTestGridProjectsResult): any => ({
    ...obj,
  });
}

export interface ListTestGridSessionActionsRequest {
  /**
   * <p>The ARN of the session to retrieve.</p>
   */
  sessionArn: string | undefined;

  /**
   * <p>The maximum number of sessions to return per response.</p>
   */
  maxResult?: number;

  /**
   * <p>Pagination token.</p>
   */
  nextToken?: string;
}

export namespace ListTestGridSessionActionsRequest {
  export const filterSensitiveLog = (obj: ListTestGridSessionActionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An action taken by a <a>TestGridSession</a> browser instance.</p>
 */
export interface TestGridSessionAction {
  /**
   * <p>The action taken by the session.</p>
   */
  action?: string;

  /**
   * <p>The time that the session invoked the action.</p>
   */
  started?: Date;

  /**
   * <p>The time, in milliseconds, that the action took to complete in the browser.</p>
   */
  duration?: number;

  /**
   * <p>HTTP status code returned to the browser when the action was taken.</p>
   */
  statusCode?: string;

  /**
   * <p>HTTP method that the browser used to make the request.</p>
   */
  requestMethod?: string;
}

export namespace TestGridSessionAction {
  export const filterSensitiveLog = (obj: TestGridSessionAction): any => ({
    ...obj,
  });
}

export interface ListTestGridSessionActionsResult {
  /**
   * <p>The action taken by the session.</p>
   */
  actions?: TestGridSessionAction[];

  /**
   * <p>Pagination token.</p>
   */
  nextToken?: string;
}

export namespace ListTestGridSessionActionsResult {
  export const filterSensitiveLog = (obj: ListTestGridSessionActionsResult): any => ({
    ...obj,
  });
}

export enum TestGridSessionArtifactCategory {
  LOG = "LOG",
  VIDEO = "VIDEO",
}

export interface ListTestGridSessionArtifactsRequest {
  /**
   * <p>The ARN of a <a>TestGridSession</a>. </p>
   */
  sessionArn: string | undefined;

  /**
   * <p>Limit results to a specified type of artifact.</p>
   */
  type?: TestGridSessionArtifactCategory | string;

  /**
   * <p>The maximum number of results to be returned by a request.</p>
   */
  maxResult?: number;

  /**
   * <p>Pagination token.</p>
   */
  nextToken?: string;
}

export namespace ListTestGridSessionArtifactsRequest {
  export const filterSensitiveLog = (obj: ListTestGridSessionArtifactsRequest): any => ({
    ...obj,
  });
}

export enum TestGridSessionArtifactType {
  SELENIUM_LOG = "SELENIUM_LOG",
  UNKNOWN = "UNKNOWN",
  VIDEO = "VIDEO",
}

/**
 * <p>Artifacts are video and other files that are produced in the process of running a browser in an automated
 *          context. </p>
 *          <note>
 *             <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p>
 *          </note>
 */
export interface TestGridSessionArtifact {
  /**
   * <p>The file name of the artifact.</p>
   */
  filename?: string;

  /**
   * <p>The kind of artifact.</p>
   */
  type?: TestGridSessionArtifactType | string;

  /**
   * <p>A semi-stable URL to the content of the object.</p>
   */
  url?: string;
}

export namespace TestGridSessionArtifact {
  export const filterSensitiveLog = (obj: TestGridSessionArtifact): any => ({
    ...obj,
  });
}

export interface ListTestGridSessionArtifactsResult {
  /**
   * <p>A list of test grid session artifacts for a <a>TestGridSession</a>.</p>
   */
  artifacts?: TestGridSessionArtifact[];

  /**
   * <p>Pagination token.</p>
   */
  nextToken?: string;
}

export namespace ListTestGridSessionArtifactsResult {
  export const filterSensitiveLog = (obj: ListTestGridSessionArtifactsResult): any => ({
    ...obj,
  });
}

export interface ListTestGridSessionsRequest {
  /**
   * <p>ARN of a <a>TestGridProject</a>.</p>
   */
  projectArn: string | undefined;

  /**
   * <p>Return only sessions in this state.</p>
   */
  status?: TestGridSessionStatus | string;

  /**
   * <p>Return only sessions created after this time.</p>
   */
  creationTimeAfter?: Date;

  /**
   * <p>Return only  sessions created before this time.</p>
   */
  creationTimeBefore?: Date;

  /**
   * <p>Return only sessions that ended after this time.</p>
   */
  endTimeAfter?: Date;

  /**
   * <p>Return only sessions that ended before this time.</p>
   */
  endTimeBefore?: Date;

  /**
   * <p>Return only this many results at a time.</p>
   */
  maxResult?: number;

  /**
   * <p>Pagination token.</p>
   */
  nextToken?: string;
}

export namespace ListTestGridSessionsRequest {
  export const filterSensitiveLog = (obj: ListTestGridSessionsRequest): any => ({
    ...obj,
  });
}

export interface ListTestGridSessionsResult {
  /**
   * <p>The sessions that match the criteria in a <a>ListTestGridSessionsRequest</a>. </p>
   */
  testGridSessions?: TestGridSession[];

  /**
   * <p>Pagination token.</p>
   */
  nextToken?: string;
}

export namespace ListTestGridSessionsResult {
  export const filterSensitiveLog = (obj: ListTestGridSessionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list tests operation.</p>
 */
export interface ListTestsRequest {
  /**
   * <p>The test suite's Amazon Resource Name (ARN).</p>
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListTestsRequest {
  export const filterSensitiveLog = (obj: ListTestsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list tests request.</p>
 */
export interface ListTestsResult {
  /**
   * <p>Information about the tests.</p>
   */
  tests?: Test[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListTestsResult {
  export const filterSensitiveLog = (obj: ListTestsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list unique problems operation.</p>
 */
export interface ListUniqueProblemsRequest {
  /**
   * <p>The unique problems' ARNs.</p>
   */
  arn: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListUniqueProblemsRequest {
  export const filterSensitiveLog = (obj: ListUniqueProblemsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a problem detail.</p>
 */
export interface ProblemDetail {
  /**
   * <p>The problem detail's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The problem detail's name.</p>
   */
  name?: string;
}

export namespace ProblemDetail {
  export const filterSensitiveLog = (obj: ProblemDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a specific warning or failure.</p>
 */
export interface Problem {
  /**
   * <p>Information about the associated run.</p>
   */
  run?: ProblemDetail;

  /**
   * <p>Information about the associated job.</p>
   */
  job?: ProblemDetail;

  /**
   * <p>Information about the associated suite.</p>
   */
  suite?: ProblemDetail;

  /**
   * <p>Information about the associated test.</p>
   */
  test?: ProblemDetail;

  /**
   * <p>Information about the associated device.</p>
   */
  device?: Device;

  /**
   * <p>The problem's result.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   */
  result?: ExecutionResult | string;

  /**
   * <p>A message about the problem's result.</p>
   */
  message?: string;
}

export namespace Problem {
  export const filterSensitiveLog = (obj: Problem): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of one or more problems, grouped by their result.</p>
 */
export interface UniqueProblem {
  /**
   * <p>A message about the unique problems' result.</p>
   */
  message?: string;

  /**
   * <p>Information about the problems.</p>
   */
  problems?: Problem[];
}

export namespace UniqueProblem {
  export const filterSensitiveLog = (obj: UniqueProblem): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list unique problems request.</p>
 */
export interface ListUniqueProblemsResult {
  /**
   * <p>Information about the unique problems.</p>
   *         <p>Allowed values include:</p>
   *         <ul>
   *             <li>
   *                 <p>PENDING</p>
   *             </li>
   *             <li>
   *                 <p>PASSED</p>
   *             </li>
   *             <li>
   *                 <p>WARNED</p>
   *             </li>
   *             <li>
   *                 <p>FAILED</p>
   *             </li>
   *             <li>
   *                 <p>SKIPPED</p>
   *             </li>
   *             <li>
   *                 <p>ERRORED</p>
   *             </li>
   *             <li>
   *                 <p>STOPPED</p>
   *             </li>
   *          </ul>
   */
  uniqueProblems?: { [key: string]: UniqueProblem[] };

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListUniqueProblemsResult {
  export const filterSensitiveLog = (obj: ListUniqueProblemsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the list uploads operation.</p>
 */
export interface ListUploadsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to list
   *             uploads.</p>
   */
  arn: string | undefined;

  /**
   * <p>The type of upload.</p>
   *         <p>Must be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>ANDROID_APP</p>
   *             </li>
   *             <li>
   *                 <p>IOS_APP</p>
   *             </li>
   *             <li>
   *                 <p>WEB_APP</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_DATA</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>CALABASH_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATION_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>UIAUTOMATOR_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_PACKAGE</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p> APPIUM_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_PYTHON_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_NODE_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>APPIUM_WEB_RUBY_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>INSTRUMENTATION_TEST_SPEC</p>
   *             </li>
   *             <li>
   *                 <p>XCTEST_UI_TEST_SPEC</p>
   *             </li>
   *          </ul>
   */
  type?: UploadType | string;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can
   *             be used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListUploadsRequest {
  export const filterSensitiveLog = (obj: ListUploadsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a list uploads request.</p>
 */
export interface ListUploadsResult {
  /**
   * <p>Information about the uploads.</p>
   */
  uploads?: Upload[];

  /**
   * <p>If the number of items that are returned is significantly large, this is an identifier that is also
   *             returned. It can be used in a subsequent call to this operation to return the next set of items in the
   *             list.</p>
   */
  nextToken?: string;
}

export namespace ListUploadsResult {
  export const filterSensitiveLog = (obj: ListUploadsResult): any => ({
    ...obj,
  });
}

export interface ListVPCEConfigurationsRequest {
  /**
   * <p>An integer that specifies the maximum number of items you want to return in the API response.</p>
   */
  maxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListVPCEConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListVPCEConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListVPCEConfigurationsResult {
  /**
   * <p>An array of <code>VPCEConfiguration</code> objects that contain information about your VPC endpoint
   *             configuration.</p>
   */
  vpceConfigurations?: VPCEConfiguration[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  nextToken?: string;
}

export namespace ListVPCEConfigurationsResult {
  export const filterSensitiveLog = (obj: ListVPCEConfigurationsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request for a purchase offering.</p>
 */
export interface PurchaseOfferingRequest {
  /**
   * <p>The ID of the offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The number of device slots to purchase in an offering request.</p>
   */
  quantity?: number;

  /**
   * <p>The ID of the offering promotion to be applied to the purchase.</p>
   */
  offeringPromotionId?: string;
}

export namespace PurchaseOfferingRequest {
  export const filterSensitiveLog = (obj: PurchaseOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the purchase offering (for example, success or failure).</p>
 */
export interface PurchaseOfferingResult {
  /**
   * <p>Represents the offering transaction for the purchase result.</p>
   */
  offeringTransaction?: OfferingTransaction;
}

export namespace PurchaseOfferingResult {
  export const filterSensitiveLog = (obj: PurchaseOfferingResult): any => ({
    ...obj,
  });
}

/**
 * <p>A request that represents an offering renewal.</p>
 */
export interface RenewOfferingRequest {
  /**
   * <p>The ID of a request to renew an offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The quantity requested in an offering renewal.</p>
   */
  quantity?: number;
}

export namespace RenewOfferingRequest {
  export const filterSensitiveLog = (obj: RenewOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a renewal offering.</p>
 */
export interface RenewOfferingResult {
  /**
   * <p>Represents the status of the offering transaction for the renewal.</p>
   */
  offeringTransaction?: OfferingTransaction;
}

export namespace RenewOfferingResult {
  export const filterSensitiveLog = (obj: RenewOfferingResult): any => ({
    ...obj,
  });
}

/**
 * <p>An entity with the same name already exists.</p>
 */
export interface IdempotencyException extends __SmithyException, $MetadataBearer {
  name: "IdempotencyException";
  $fault: "client";
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}

export namespace IdempotencyException {
  export const filterSensitiveLog = (obj: IdempotencyException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the device filters used in a test run and the maximum number of devices to be included in the
 *             run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.</p>
 */
export interface DeviceSelectionConfiguration {
  /**
   * <p>Used to dynamically select a set of devices for a test run. A filter is made up of an
   *             attribute, an operator, and one or more values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Attribute</b>
   *                </p>
   *                 <p>The aspect of a device such as platform or model used as the selection
   *                     criteria in a device filter.</p>
   *                 <p>Allowed values include:</p>
   *                 <ul>
   *                   <li>
   *                         <p>ARN: The Amazon Resource Name (ARN) of the device (for example,
   *                                 <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p>
   *                     </li>
   *                   <li>
   *                         <p>PLATFORM: The device platform. Valid values are ANDROID or
   *                             IOS.</p>
   *                     </li>
   *                   <li>
   *                         <p>OS_VERSION: The operating system version (for example,
   *                             10.3.2).</p>
   *                     </li>
   *                   <li>
   *                         <p>MODEL: The device model (for example, iPad 5th Gen).</p>
   *                     </li>
   *                   <li>
   *                         <p>AVAILABILITY: The current availability of the device. Valid values
   *                             are AVAILABLE, HIGHLY_AVAILABLE, BUSY, or
   *                             TEMPORARY_NOT_AVAILABLE.</p>
   *                     </li>
   *                   <li>
   *                         <p>FORM_FACTOR: The device form factor. Valid values are PHONE or
   *                             TABLET.</p>
   *                     </li>
   *                   <li>
   *                         <p>MANUFACTURER: The device manufacturer (for example,
   *                             Apple).</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote
   *                             access. Valid values are TRUE or FALSE.</p>
   *                     </li>
   *                   <li>
   *                         <p>REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values
   *                             are TRUE or FALSE. Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no
   *                                 longer supported</a>, this filter is ignored.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device
   *                             instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>INSTANCE_LABELS: The label of the device instance.</p>
   *                     </li>
   *                   <li>
   *                         <p>FLEET_TYPE: The fleet type. Valid values are PUBLIC or PRIVATE.</p>
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
   *                         <p>The EQUALS operator is available for every attribute except
   *                             INSTANCE_LABELS.</p>
   *                     </li>
   *                   <li>
   *                         <p>The CONTAINS operator is available for the INSTANCE_LABELS and MODEL
   *                             attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The IN and NOT_IN operators are available for the ARN, OS_VERSION,
   *                             MODEL, MANUFACTURER, and INSTANCE_ARN attributes.</p>
   *                     </li>
   *                   <li>
   *                         <p>The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and
   *                             GREATER_THAN_OR_EQUALS operators are also available for the OS_VERSION
   *                             attribute.</p>
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
   *                         <p>The IN and NOT_IN operators can take a values array that has more than
   *                             one element.</p>
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
   *                         <p>The PLATFORM attribute can be set to ANDROID or IOS.</p>
   *                     </li>
   *                   <li>
   *                         <p>The AVAILABILITY attribute can be set to AVAILABLE, HIGHLY_AVAILABLE, BUSY, or
   *                             TEMPORARY_NOT_AVAILABLE.</p>
   *                     </li>
   *                   <li>
   *                         <p>The FORM_FACTOR attribute can be set to PHONE or TABLET.</p>
   *                     </li>
   *                   <li>
   *                         <p>The FLEET_TYPE attribute can be set to PUBLIC or PRIVATE.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  filters: DeviceFilter[] | undefined;

  /**
   * <p>The maximum number of devices to be included in a test run.</p>
   */
  maxDevices: number | undefined;
}

export namespace DeviceSelectionConfiguration {
  export const filterSensitiveLog = (obj: DeviceSelectionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents configuration information about a test run, such as the execution
 *             timeout (in minutes).</p>
 */
export interface ExecutionConfiguration {
  /**
   * <p>The number of minutes a test run executes before it times out.</p>
   */
  jobTimeoutMinutes?: number;

  /**
   * <p>True if account cleanup is enabled at the beginning of the test. Otherwise, false.</p>
   */
  accountsCleanup?: boolean;

  /**
   * <p>True if app package cleanup is enabled at the beginning of the test. Otherwise, false.</p>
   */
  appPackagesCleanup?: boolean;

  /**
   * <p>Set to true to enable video capture. Otherwise, set to false. The default is true.</p>
   */
  videoCapture?: boolean;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public
   *             devices, Device Farm always signs your apps again.</p>
   *         <p>For more information about how Device Farm re-signs your apps, see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device
   *                 Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;
}

export namespace ExecutionConfiguration {
  export const filterSensitiveLog = (obj: ExecutionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the schedule run operation.</p>
 */
export interface ScheduleRunRequest {
  /**
   * <p>The ARN of the project for the run to be scheduled.</p>
   */
  projectArn: string | undefined;

  /**
   * <p>The ARN of an application package to run tests against, created with <a>CreateUpload</a>.
   *             See <a>ListUploads</a>.</p>
   */
  appArn?: string;

  /**
   * <p>The ARN of the device pool for the run to be scheduled.</p>
   */
  devicePoolArn?: string;

  /**
   * <p>The filter criteria used to dynamically select a set of devices for a test run and the maximum number of
   *             devices to be included in the run.</p>
   *         <p>Either <b>
   *                <code>devicePoolArn</code>
   *             </b> or <b>
   *                <code>deviceSelectionConfiguration</code>
   *             </b> is required in a
   *             request.</p>
   */
  deviceSelectionConfiguration?: DeviceSelectionConfiguration;

  /**
   * <p>The name for the run to be scheduled.</p>
   */
  name?: string;

  /**
   * <p>Information about the test for the run to be scheduled.</p>
   */
  test: ScheduleRunTest | undefined;

  /**
   * <p>Information about the settings for the run to be scheduled.</p>
   */
  configuration?: ScheduleRunConfiguration;

  /**
   * <p>Specifies configuration information about a test run, such as the execution timeout
   *             (in minutes).</p>
   */
  executionConfiguration?: ExecutionConfiguration;
}

export namespace ScheduleRunRequest {
  export const filterSensitiveLog = (obj: ScheduleRunRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of a schedule run request.</p>
 */
export interface ScheduleRunResult {
  /**
   * <p>Information about the scheduled run.</p>
   */
  run?: Run;
}

export namespace ScheduleRunResult {
  export const filterSensitiveLog = (obj: ScheduleRunResult): any => ({
    ...obj,
  });
}

export interface StopJobRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm job to stop.</p>
   */
  arn: string | undefined;
}

export namespace StopJobRequest {
  export const filterSensitiveLog = (obj: StopJobRequest): any => ({
    ...obj,
  });
}

export interface StopJobResult {
  /**
   * <p>The job that was stopped.</p>
   */
  job?: Job;
}

export namespace StopJobResult {
  export const filterSensitiveLog = (obj: StopJobResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to stop the remote access session.</p>
 */
export interface StopRemoteAccessSessionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session to stop.</p>
   */
  arn: string | undefined;
}

export namespace StopRemoteAccessSessionRequest {
  export const filterSensitiveLog = (obj: StopRemoteAccessSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server that describes the remote access session
 *             when AWS Device Farm stops the session.</p>
 */
export interface StopRemoteAccessSessionResult {
  /**
   * <p>A container that represents the metadata from the service about the remote access session you are
   *             stopping.</p>
   */
  remoteAccessSession?: RemoteAccessSession;
}

export namespace StopRemoteAccessSessionResult {
  export const filterSensitiveLog = (obj: StopRemoteAccessSessionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to stop a specific run.</p>
 */
export interface StopRunRequest {
  /**
   * <p>Represents the Amazon Resource Name (ARN) of the Device Farm run to stop.</p>
   */
  arn: string | undefined;
}

export namespace StopRunRequest {
  export const filterSensitiveLog = (obj: StopRunRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the results of your stop run attempt.</p>
 */
export interface StopRunResult {
  /**
   * <p>The run that was stopped.</p>
   */
  run?: Run;
}

export namespace StopRunResult {
  export const filterSensitiveLog = (obj: StopRunResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request doesn't comply with the AWS Identity and Access Management (IAM) tag
 *             policy. Correct your request and then retry it.</p>
 */
export interface TagPolicyException extends __SmithyException, $MetadataBearer {
  name: "TagPolicyException";
  $fault: "client";
  message?: string;
  resourceName?: string;
}

export namespace TagPolicyException {
  export const filterSensitiveLog = (obj: TagPolicyException): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource or resources to which to add tags. You can associate tags
   *             with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>,
   *                 <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>,
   *                 <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and
   *             <code>VPCE_CONFIGURATION</code>.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum
   *             character length of 128 characters. Tag values can have a maximum length of 256 characters.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *             can be applied to a repository is 50. </p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
  resourceName?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource or resources from which to delete tags. You can associate
   *             tags with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>,
   *                 <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>,
   *                 <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and
   *             <code>VPCE_CONFIGURATION</code>.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDeviceInstanceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the device instance.</p>
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the profile that you want to associate with the device instance.</p>
   */
  profileArn?: string;

  /**
   * <p>An array of strings that you want to associate with the device instance.</p>
   */
  labels?: string[];
}

export namespace UpdateDeviceInstanceRequest {
  export const filterSensitiveLog = (obj: UpdateDeviceInstanceRequest): any => ({
    ...obj,
  });
}

export interface UpdateDeviceInstanceResult {
  /**
   * <p>An object that contains information about your device instance.</p>
   */
  deviceInstance?: DeviceInstance;
}

export namespace UpdateDeviceInstanceResult {
  export const filterSensitiveLog = (obj: UpdateDeviceInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the update device pool operation.</p>
 */
export interface UpdateDevicePoolRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Device Farm device pool to update.</p>
   */
  arn: string | undefined;

  /**
   * <p>A string that represents the name of the device pool to update.</p>
   */
  name?: string;

  /**
   * <p>A description of the device pool to update.</p>
   */
  description?: string;

  /**
   * <p>Represents the rules to modify for the device pool. Updating rules is optional. If you update rules for
   *             your request, the update replaces the existing rules.</p>
   */
  rules?: Rule[];

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds
   *             devices that are available and that meet the criteria that you assign for the
   *                 <code>rules</code> parameter. Depending on how many devices meet these constraints,
   *             your device pool might contain fewer devices than the value for this parameter.</p>
   *         <p>By specifying the maximum number of devices, you can control the costs that you incur
   *             by running tests.</p>
   *         <p>If you use this parameter in your request, you cannot use the
   *                 <code>clearMaxDevices</code> parameter in the same request.</p>
   */
  maxDevices?: number;

  /**
   * <p>Sets whether the <code>maxDevices</code> parameter applies to your device pool. If you set this parameter
   *             to <code>true</code>, the <code>maxDevices</code> parameter does not apply, and Device Farm does not limit
   *             the number of devices that it adds to your device pool. In this case, Device Farm adds all available devices
   *             that meet the criteria specified in the <code>rules</code> parameter.</p>
   *         <p>If you use this parameter in your request, you cannot use the <code>maxDevices</code>
   *             parameter in the same request.</p>
   */
  clearMaxDevices?: boolean;
}

export namespace UpdateDevicePoolRequest {
  export const filterSensitiveLog = (obj: UpdateDevicePoolRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of an update device pool request.</p>
 */
export interface UpdateDevicePoolResult {
  /**
   * <p>The device pool you just updated.</p>
   */
  devicePool?: DevicePool;
}

export namespace UpdateDevicePoolResult {
  export const filterSensitiveLog = (obj: UpdateDevicePoolResult): any => ({
    ...obj,
  });
}

export interface UpdateInstanceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  arn: string | undefined;

  /**
   * <p>The updated name for your instance profile.</p>
   */
  name?: string;

  /**
   * <p>The updated description for your instance profile.</p>
   */
  description?: string;

  /**
   * <p>The updated choice for whether you want to specify package cleanup. The default value
   *             is <code>false</code> for private devices.</p>
   */
  packageCleanup?: boolean;

  /**
   * <p>An array of strings that specifies the list of app packages that should not be cleaned up from the device
   *             after a test run is over.</p>
   *         <p>The list of packages is only considered if you set <code>packageCleanup</code> to
   *                 <code>true</code>.</p>
   */
  excludeAppPackagesFromCleanup?: string[];

  /**
   * <p>The updated choice for whether you want to reboot the device after use. The default
   *             value is <code>true</code>.</p>
   */
  rebootAfterUse?: boolean;
}

export namespace UpdateInstanceProfileRequest {
  export const filterSensitiveLog = (obj: UpdateInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateInstanceProfileResult {
  /**
   * <p>An object that contains information about your instance profile.</p>
   */
  instanceProfile?: InstanceProfile;
}

export namespace UpdateInstanceProfileResult {
  export const filterSensitiveLog = (obj: UpdateInstanceProfileResult): any => ({
    ...obj,
  });
}

export interface UpdateNetworkProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to update network
   *             profile settings.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the network profile about which you are returning
   *             information.</p>
   */
  name?: string;

  /**
   * <p>The description of the network profile about which you are returning
   *             information.</p>
   */
  description?: string;

  /**
   * <p>The type of network profile to return information about. Valid values are listed here.</p>
   */
  type?: NetworkProfileType | string;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   */
  uplinkBandwidthBits?: number;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to
   *             104857600.</p>
   */
  downlinkBandwidthBits?: number;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   */
  uplinkDelayMs?: number;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to
   *             2000.</p>
   */
  downlinkDelayMs?: number;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   */
  uplinkJitterMs?: number;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from
   *             0 to 2000.</p>
   */
  downlinkJitterMs?: number;

  /**
   * <p>Proportion of transmitted packets that fail to arrive from 0 to 100
   *             percent.</p>
   */
  uplinkLossPercent?: number;

  /**
   * <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   */
  downlinkLossPercent?: number;
}

export namespace UpdateNetworkProfileRequest {
  export const filterSensitiveLog = (obj: UpdateNetworkProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateNetworkProfileResult {
  /**
   * <p>A list of the available network profiles.</p>
   */
  networkProfile?: NetworkProfile;
}

export namespace UpdateNetworkProfileResult {
  export const filterSensitiveLog = (obj: UpdateNetworkProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a request to the update project operation.</p>
 */
export interface UpdateProjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the project whose name to update.</p>
   */
  arn: string | undefined;

  /**
   * <p>A string that represents the new name of the project that you are updating.</p>
   */
  name?: string;

  /**
   * <p>The number of minutes a test run in the project executes before it times out.</p>
   */
  defaultJobTimeoutMinutes?: number;
}

export namespace UpdateProjectRequest {
  export const filterSensitiveLog = (obj: UpdateProjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the result of an update project request.</p>
 */
export interface UpdateProjectResult {
  /**
   * <p>The project to update.</p>
   */
  project?: Project;
}

export namespace UpdateProjectResult {
  export const filterSensitiveLog = (obj: UpdateProjectResult): any => ({
    ...obj,
  });
}

export interface UpdateTestGridProjectRequest {
  /**
   * <p>ARN of the project to update.</p>
   */
  projectArn: string | undefined;

  /**
   * <p>Human-readable name for the project.</p>
   */
  name?: string;

  /**
   * <p>Human-readable description for the project.</p>
   */
  description?: string;
}

export namespace UpdateTestGridProjectRequest {
  export const filterSensitiveLog = (obj: UpdateTestGridProjectRequest): any => ({
    ...obj,
  });
}

export interface UpdateTestGridProjectResult {
  /**
   * <p>The project, including updated information.</p>
   */
  testGridProject?: TestGridProject;
}

export namespace UpdateTestGridProjectResult {
  export const filterSensitiveLog = (obj: UpdateTestGridProjectResult): any => ({
    ...obj,
  });
}

export interface UpdateUploadRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the uploaded test spec.</p>
   */
  arn: string | undefined;

  /**
   * <p>The upload's test spec file name. The name must not contain any forward slashes (/). The test spec file
   *             name must end with the <code>.yaml</code> or <code>.yml</code> file extension.</p>
   */
  name?: string;

  /**
   * <p>The upload's content type (for example, <code>application/x-yaml</code>).</p>
   */
  contentType?: string;

  /**
   * <p>Set to true if the YAML file has changed and must be updated. Otherwise, set to false.</p>
   */
  editContent?: boolean;
}

export namespace UpdateUploadRequest {
  export const filterSensitiveLog = (obj: UpdateUploadRequest): any => ({
    ...obj,
  });
}

export interface UpdateUploadResult {
  /**
   * <p>A test spec uploaded to Device Farm.</p>
   */
  upload?: Upload;
}

export namespace UpdateUploadResult {
  export const filterSensitiveLog = (obj: UpdateUploadResult): any => ({
    ...obj,
  });
}

export interface UpdateVPCEConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to
   *             update.</p>
   */
  arn: string | undefined;

  /**
   * <p>The friendly name you give to your VPC endpoint configuration to manage your configurations more
   *             easily.</p>
   */
  vpceConfigurationName?: string;

  /**
   * <p>The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.</p>
   */
  vpceServiceName?: string;

  /**
   * <p>The DNS (domain) name used to connect to your private service in your VPC. The DNS name must not already
   *             be in use on the internet.</p>
   */
  serviceDnsName?: string;

  /**
   * <p>An optional description that provides details about your VPC endpoint configuration.</p>
   */
  vpceConfigurationDescription?: string;
}

export namespace UpdateVPCEConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateVPCEConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateVPCEConfigurationResult {
  /**
   * <p>An object that contains information about your VPC endpoint configuration.</p>
   */
  vpceConfiguration?: VPCEConfiguration;
}

export namespace UpdateVPCEConfigurationResult {
  export const filterSensitiveLog = (obj: UpdateVPCEConfigurationResult): any => ({
    ...obj,
  });
}
