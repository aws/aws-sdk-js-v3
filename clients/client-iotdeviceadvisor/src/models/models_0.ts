// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IotDeviceAdvisorServiceException as __BaseException } from "./IotDeviceAdvisorServiceException";

/**
 * @public
 * @enum
 */
export const AuthenticationMethod = {
  SignatureVersion4: "SignatureVersion4",
  X509ClientCertificate: "X509ClientCertificate",
} as const;

/**
 * @public
 */
export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

/**
 * @public
 * <p>Sends a Conflict Exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 * <p>Information of a test device. A thing ARN, certificate ARN
 *             or device role ARN is required.</p>
 */
export interface DeviceUnderTest {
  /**
   * <p>Lists device's thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>Lists device's certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>Lists device's role ARN.</p>
   */
  deviceRoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const Protocol = {
  MqttV3_1_1: "MqttV3_1_1",
  MqttV3_1_1_OverWebSocket: "MqttV3_1_1_OverWebSocket",
  MqttV5: "MqttV5",
  MqttV5_OverWebSocket: "MqttV5_OverWebSocket",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * <p>Gets the suite definition configuration.</p>
 */
export interface SuiteDefinitionConfiguration {
  /**
   * <p>Gets the suite definition name. This is a required parameter.</p>
   */
  suiteDefinitionName: string | undefined;

  /**
   * <p>Gets the devices configured.</p>
   */
  devices?: DeviceUnderTest[];

  /**
   * <p>Gets the tests intended for qualification in a suite.</p>
   */
  intendedForQualification?: boolean;

  /**
   * <p>Verifies if the test suite is a long duration test.</p>
   */
  isLongDurationTest?: boolean;

  /**
   * <p>Gets the test suite root group. This is a required parameter.
   *             For updating or creating the latest qualification suite,
   *             if <code>intendedForQualification</code> is set to true,
   *             <code>rootGroup</code> can be an empty string. If <code>intendedForQualification</code> is false,
   *             <code>rootGroup</code> cannot be an empty string.
   *             If <code>rootGroup</code> is empty, and
   *             <code>intendedForQualification</code> is set to true,
   *             all the qualification tests are included, and the configuration is default.</p>
   *          <p>
   *             For a qualification suite, the minimum length is 0, and the maximum is 2048.  For a
   *             non-qualification suite, the minimum length is 1, and the maximum is 2048.
   *         </p>
   */
  rootGroup: string | undefined;

  /**
   * <p>Gets the device permission ARN. This is a required parameter.</p>
   */
  devicePermissionRoleArn: string | undefined;

  /**
   * <p>Sets the MQTT protocol that is configured in the suite definition.</p>
   */
  protocol?: Protocol | string;
}

/**
 * @public
 */
export interface CreateSuiteDefinitionRequest {
  /**
   * <p>Creates a Device Advisor test suite with suite definition configuration.</p>
   */
  suiteDefinitionConfiguration: SuiteDefinitionConfiguration | undefined;

  /**
   * <p>The tags to be attached to the suite definition.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSuiteDefinitionResponse {
  /**
   * <p>The UUID of the test suite created.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the test suite.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>The suite definition name of the test suite. This is a required parameter.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>The timestamp of when the test suite was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 * <p>Sends an Internal Failure exception.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p>Sends a validation exception.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to be deleted.</p>
   */
  suiteDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSuiteDefinitionResponse {}

/**
 * @public
 */
export interface GetEndpointRequest {
  /**
   * <p>The thing ARN of the device. This is an optional parameter.</p>
   */
  thingArn?: string;

  /**
   * <p>The certificate ARN of the device. This is an optional parameter.</p>
   */
  certificateArn?: string;

  /**
   * <p>The device role ARN of the device. This is an optional parameter.</p>
   */
  deviceRoleArn?: string;

  /**
   * <p>The authentication method used during the device connection.</p>
   */
  authenticationMethod?: AuthenticationMethod | string;
}

/**
 * @public
 */
export interface GetEndpointResponse {
  /**
   * <p>The response of an Device Advisor endpoint.</p>
   */
  endpoint?: string;
}

/**
 * @public
 * <p>Sends a Resource Not Found exception.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface GetSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to get.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite definition version of the test suite to get.</p>
   */
  suiteDefinitionVersion?: string;
}

/**
 * @public
 */
export interface GetSuiteDefinitionResponse {
  /**
   * <p>Suite definition ID of the suite definition.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>The ARN of the suite definition.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Suite definition version of the suite definition.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Latest suite definition version of the suite definition.</p>
   */
  latestVersion?: string;

  /**
   * <p>Suite configuration of the suite definition.</p>
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;

  /**
   * <p>Date (in Unix epoch time) when the suite definition was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Date (in Unix epoch time) when the suite definition was last modified.</p>
   */
  lastModifiedAt?: Date;

  /**
   * <p>Tags attached to the suite definition.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSuiteRunRequest {
  /**
   * <p>Suite definition ID for the test suite run.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID for the test suite run.</p>
   */
  suiteRunId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SuiteRunStatus = {
  CANCELED: "CANCELED",
  ERROR: "ERROR",
  FAIL: "FAIL",
  PASS: "PASS",
  PASS_WITH_WARNINGS: "PASS_WITH_WARNINGS",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type SuiteRunStatus = (typeof SuiteRunStatus)[keyof typeof SuiteRunStatus];

/**
 * @public
 * <p>Gets suite run configuration.</p>
 */
export interface SuiteRunConfiguration {
  /**
   * <p>Sets the primary device for the test suite run. This requires a thing ARN or a
   *             certificate ARN.</p>
   */
  primaryDevice: DeviceUnderTest | undefined;

  /**
   * <p>Sets test case list.</p>
   */
  selectedTestList?: string[];

  /**
   * <p>TRUE if multiple test suites run in parallel.</p>
   */
  parallelRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const Status = {
  CANCELED: "CANCELED",
  ERROR: "ERROR",
  FAIL: "FAIL",
  PASS: "PASS",
  PASS_WITH_WARNINGS: "PASS_WITH_WARNINGS",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const TestCaseScenarioStatus = {
  CANCELED: "CANCELED",
  ERROR: "ERROR",
  FAIL: "FAIL",
  PASS: "PASS",
  PASS_WITH_WARNINGS: "PASS_WITH_WARNINGS",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type TestCaseScenarioStatus = (typeof TestCaseScenarioStatus)[keyof typeof TestCaseScenarioStatus];

/**
 * @public
 * @enum
 */
export const TestCaseScenarioType = {
  Advanced: "Advanced",
  Basic: "Basic",
} as const;

/**
 * @public
 */
export type TestCaseScenarioType = (typeof TestCaseScenarioType)[keyof typeof TestCaseScenarioType];

/**
 * @public
 * <p>Provides test case scenario.</p>
 */
export interface TestCaseScenario {
  /**
   * <p>Provides test case scenario ID.</p>
   */
  testCaseScenarioId?: string;

  /**
   * <p>Provides test case scenario type. Type is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Advanced</p>
   *             </li>
   *             <li>
   *                <p>Basic</p>
   *             </li>
   *          </ul>
   */
  testCaseScenarioType?: TestCaseScenarioType | string;

  /**
   * <p>Provides the test case scenario status. Status is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PASS</code>: Test passed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAIL</code>: Test failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: Test has not started running but is scheduled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: Test is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code>: Test is performing cleanup steps. You will see this
   *                     status only if you stop a suite run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> Test is stopped. You will see this status only if you
   *                     stop a suite run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASS_WITH_WARNINGS</code>: Test passed with warnings.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERORR</code>: Test faced an error when running due to an internal
   *                     issue.</p>
   *             </li>
   *          </ul>
   */
  status?: TestCaseScenarioStatus | string;

  /**
   * <p>Provides test case scenario failure result.</p>
   */
  failure?: string;

  /**
   * <p>Provides test case scenario system messages if any.</p>
   */
  systemMessage?: string;
}

/**
 * @public
 * <p>Provides the test case run.</p>
 */
export interface TestCaseRun {
  /**
   * <p>Provides the test case run ID.</p>
   */
  testCaseRunId?: string;

  /**
   * <p>Provides the test case run definition ID.</p>
   */
  testCaseDefinitionId?: string;

  /**
   * <p>Provides the test case run definition name.</p>
   */
  testCaseDefinitionName?: string;

  /**
   * <p>Provides the test case run status. Status is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PASS</code>: Test passed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAIL</code>: Test failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: Test has not started running but is scheduled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: Test is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code>: Test is performing cleanup steps. You will see this
   *                     status only if you stop a suite run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> Test is stopped. You will see this status only if you
   *                     stop a suite run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASS_WITH_WARNINGS</code>: Test passed with warnings.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERORR</code>: Test faced an error when running due to an internal
   *                     issue.</p>
   *             </li>
   *          </ul>
   */
  status?: Status | string;

  /**
   * <p>Provides test case run start time.</p>
   */
  startTime?: Date;

  /**
   * <p>Provides test case run end time.</p>
   */
  endTime?: Date;

  /**
   * <p>Provides test case run log URL.</p>
   */
  logUrl?: string;

  /**
   * <p>Provides test case run warnings.</p>
   */
  warnings?: string;

  /**
   * <p>Provides test case run failure result.</p>
   */
  failure?: string;

  /**
   * <p> Provides the test scenarios for the test case run. </p>
   */
  testScenarios?: TestCaseScenario[];
}

/**
 * @public
 * <p>Show Group Result.</p>
 */
export interface GroupResult {
  /**
   * <p>Group result ID.</p>
   */
  groupId?: string;

  /**
   * <p>Group Result Name.</p>
   */
  groupName?: string;

  /**
   * <p>Tests under Group Result.</p>
   */
  tests?: TestCaseRun[];
}

/**
 * @public
 * <p>Show each group result.</p>
 */
export interface TestResult {
  /**
   * <p>Show each group of test results.</p>
   */
  groups?: GroupResult[];
}

/**
 * @public
 */
export interface GetSuiteRunResponse {
  /**
   * <p>Suite definition ID for the test suite run.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Suite definition version for the test suite run.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Suite run ID for the test suite run.</p>
   */
  suiteRunId?: string;

  /**
   * <p>The ARN of the suite run.</p>
   */
  suiteRunArn?: string;

  /**
   * <p>Suite run configuration for the test suite run.</p>
   */
  suiteRunConfiguration?: SuiteRunConfiguration;

  /**
   * <p>Test results for the test suite run.</p>
   */
  testResult?: TestResult;

  /**
   * <p>Date (in Unix epoch time) when the test suite run started.</p>
   */
  startTime?: Date;

  /**
   * <p>Date (in Unix epoch time) when the test suite run ended.</p>
   */
  endTime?: Date;

  /**
   * <p>Status for the test suite run.</p>
   */
  status?: SuiteRunStatus | string;

  /**
   * <p>Error reason for any test suite run failure.</p>
   */
  errorReason?: string;

  /**
   * <p>The tags attached to the suite run.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSuiteRunReportRequest {
  /**
   * <p>Suite definition ID of the test suite.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID of the test suite run.</p>
   */
  suiteRunId: string | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunReportResponse {
  /**
   * <p>Download URL of the qualification report.</p>
   */
  qualificationReportDownloadUrl?: string;
}

/**
 * @public
 */
export interface ListSuiteDefinitionsRequest {
  /**
   * <p>The maximum number of results to return at once.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the suite definition.</p>
 */
export interface SuiteDefinitionInformation {
  /**
   * <p>Suite definition ID of the test suite.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Suite name of the test suite.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Specifies the devices that are under test for the test suite.</p>
   */
  defaultDevices?: DeviceUnderTest[];

  /**
   * <p>Specifies if the test suite is intended for qualification.</p>
   */
  intendedForQualification?: boolean;

  /**
   * <p>Verifies if the test suite is a long duration test.</p>
   */
  isLongDurationTest?: boolean;

  /**
   * <p>Gets the MQTT protocol that is configured in the suite definition.</p>
   */
  protocol?: Protocol | string;

  /**
   * <p>Date (in Unix epoch time) when the test suite was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface ListSuiteDefinitionsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the suite definitions
   *             in the list.</p>
   */
  suiteDefinitionInformationList?: SuiteDefinitionInformation[];

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSuiteRunsRequest {
  /**
   * <p>Lists the test suite runs of the specified test suite based on suite definition
   *             ID.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Must be passed along with <code>suiteDefinitionId</code>. Lists the test suite runs of
   *             the specified test suite based on suite definition version.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>The maximum number of results to return at once.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the suite run.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SuiteRunInformation</a> action.</p>
 */
export interface SuiteRunInformation {
  /**
   * <p>Suite definition ID of the suite run.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Suite definition version of the suite run.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Suite definition name of the suite run.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Suite run ID of the suite run.</p>
   */
  suiteRunId?: string;

  /**
   * <p>Date (in Unix epoch time) when the suite run was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Date (in Unix epoch time) when the suite run was started.</p>
   */
  startedAt?: Date;

  /**
   * <p>Date (in Unix epoch time) when the suite run ended.</p>
   */
  endAt?: Date;

  /**
   * <p>Status of the suite run.</p>
   */
  status?: SuiteRunStatus | string;

  /**
   * <p>Number of test cases that passed in the suite run.</p>
   */
  passed?: number;

  /**
   * <p>Number of test cases that failed in the suite run.</p>
   */
  failed?: number;
}

/**
 * @public
 */
export interface ListSuiteRunsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the suite runs in the
   *             list.</p>
   */
  suiteRunsList?: SuiteRunInformation[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN of the IoT Device Advisor resource. This can be SuiteDefinition ARN or
   *             SuiteRun ARN.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags attached to the IoT Device Advisor resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartSuiteRunRequest {
  /**
   * <p>Suite definition ID of the test suite.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite definition version of the test suite.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Suite run configuration.</p>
   */
  suiteRunConfiguration: SuiteRunConfiguration | undefined;

  /**
   * <p>The tags to be attached to the suite run.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartSuiteRunResponse {
  /**
   * <p>Suite Run ID of the started suite run.</p>
   */
  suiteRunId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the started suite run.</p>
   */
  suiteRunArn?: string;

  /**
   * <p>Starts a Device Advisor test suite run based on suite create time.</p>
   */
  createdAt?: Date;

  /**
   * <p>The response of an Device Advisor test endpoint.</p>
   */
  endpoint?: string;
}

/**
 * @public
 */
export interface StopSuiteRunRequest {
  /**
   * <p>Suite definition ID of the test suite run to be stopped.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID of the test suite run to be stopped.</p>
   */
  suiteRunId: string | undefined;
}

/**
 * @public
 */
export interface StopSuiteRunResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or
   *             SuiteRun ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be attached to the IoT Device Advisor resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or
   *             SuiteRun ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>List of tag keys to remove from the IoT Device Advisor resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to be updated.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Updates a Device Advisor test suite with suite definition configuration.</p>
   */
  suiteDefinitionConfiguration: SuiteDefinitionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSuiteDefinitionResponse {
  /**
   * <p>Suite definition ID of the updated test suite.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the updated test suite.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Updates the suite definition name. This is a required parameter.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Suite definition version of the updated test suite.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Timestamp of when the test suite was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Timestamp of when the test suite was updated.</p>
   */
  lastUpdatedAt?: Date;
}
