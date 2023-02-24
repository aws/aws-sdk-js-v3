// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IotDeviceAdvisorServiceException as __BaseException } from "./IotDeviceAdvisorServiceException";

/**
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
 * <p>Information of a test device. A thing ARN or a certificate ARN is required.</p>
 */
export interface DeviceUnderTest {
  /**
   * <p>Lists devices thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>Lists devices certificate ARN.</p>
   */
  certificateArn?: string;
}

export enum Protocol {
  MqttV3_1_1 = "MqttV3_1_1",
  MqttV5 = "MqttV5",
}

/**
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
   * <p>Gets the test suite root group. This is a required parameter.</p>
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

export interface DeleteSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to be deleted.</p>
   */
  suiteDefinitionId: string | undefined;
}

export interface DeleteSuiteDefinitionResponse {}

export interface GetEndpointRequest {
  /**
   * <p>The thing ARN of the device. This is an optional parameter.</p>
   */
  thingArn?: string;

  /**
   * <p>The certificate ARN of the device. This is an optional parameter.</p>
   */
  certificateArn?: string;
}

export interface GetEndpointResponse {
  /**
   * <p>The response of an Device Advisor endpoint.</p>
   */
  endpoint?: string;
}

/**
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

export enum SuiteRunStatus {
  CANCELED = "CANCELED",
  ERROR = "ERROR",
  FAIL = "FAIL",
  PASS = "PASS",
  PASS_WITH_WARNINGS = "PASS_WITH_WARNINGS",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

/**
 * <p>Gets suite run configuration.</p>
 */
export interface SuiteRunConfiguration {
  /**
   * <p>Sets the primary device for the test suite run. This requires
   *         a thing ARN or a certificate ARN.</p>
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

export enum Status {
  CANCELED = "CANCELED",
  ERROR = "ERROR",
  FAIL = "FAIL",
  PASS = "PASS",
  PASS_WITH_WARNINGS = "PASS_WITH_WARNINGS",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

export enum TestCaseScenarioStatus {
  CANCELED = "CANCELED",
  ERROR = "ERROR",
  FAIL = "FAIL",
  PASS = "PASS",
  PASS_WITH_WARNINGS = "PASS_WITH_WARNINGS",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

export enum TestCaseScenarioType {
  Advanced = "Advanced",
  Basic = "Basic",
}

/**
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
   * <p>
   *         </p>
   */
  systemMessage?: string;
}

/**
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
 * <p>Show each group result.</p>
 */
export interface TestResult {
  /**
   * <p>Show each group of test results.</p>
   */
  groups?: GroupResult[];
}

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

export interface GetSuiteRunReportResponse {
  /**
   * <p>Download URL of the qualification report.</p>
   */
  qualificationReportDownloadUrl?: string;
}

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

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN of the IoT Device Advisor resource.
   *         This can be SuiteDefinition ARN or SuiteRun ARN.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags attached to the IoT Device Advisor resource.</p>
   */
  tags?: Record<string, string>;
}

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

export interface StopSuiteRunResponse {}

export interface TagResourceRequest {
  /**
   * <p>The resource ARN of an IoT Device Advisor resource.
   *             This can be SuiteDefinition ARN or SuiteRun ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be attached to the IoT Device Advisor resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The resource ARN of an IoT Device Advisor resource.
   *             This can be SuiteDefinition ARN or SuiteRun ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>List of tag keys to remove from the IoT Device Advisor resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

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

/**
 * @internal
 */
export const DeviceUnderTestFilterSensitiveLog = (obj: DeviceUnderTest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuiteDefinitionConfigurationFilterSensitiveLog = (obj: SuiteDefinitionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSuiteDefinitionRequestFilterSensitiveLog = (obj: CreateSuiteDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSuiteDefinitionResponseFilterSensitiveLog = (obj: CreateSuiteDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSuiteDefinitionRequestFilterSensitiveLog = (obj: DeleteSuiteDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSuiteDefinitionResponseFilterSensitiveLog = (obj: DeleteSuiteDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEndpointRequestFilterSensitiveLog = (obj: GetEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEndpointResponseFilterSensitiveLog = (obj: GetEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSuiteDefinitionRequestFilterSensitiveLog = (obj: GetSuiteDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSuiteDefinitionResponseFilterSensitiveLog = (obj: GetSuiteDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSuiteRunRequestFilterSensitiveLog = (obj: GetSuiteRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuiteRunConfigurationFilterSensitiveLog = (obj: SuiteRunConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestCaseScenarioFilterSensitiveLog = (obj: TestCaseScenario): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestCaseRunFilterSensitiveLog = (obj: TestCaseRun): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupResultFilterSensitiveLog = (obj: GroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestResultFilterSensitiveLog = (obj: TestResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSuiteRunResponseFilterSensitiveLog = (obj: GetSuiteRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSuiteRunReportRequestFilterSensitiveLog = (obj: GetSuiteRunReportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSuiteRunReportResponseFilterSensitiveLog = (obj: GetSuiteRunReportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSuiteDefinitionsRequestFilterSensitiveLog = (obj: ListSuiteDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuiteDefinitionInformationFilterSensitiveLog = (obj: SuiteDefinitionInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSuiteDefinitionsResponseFilterSensitiveLog = (obj: ListSuiteDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSuiteRunsRequestFilterSensitiveLog = (obj: ListSuiteRunsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuiteRunInformationFilterSensitiveLog = (obj: SuiteRunInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSuiteRunsResponseFilterSensitiveLog = (obj: ListSuiteRunsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSuiteRunRequestFilterSensitiveLog = (obj: StartSuiteRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSuiteRunResponseFilterSensitiveLog = (obj: StartSuiteRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopSuiteRunRequestFilterSensitiveLog = (obj: StopSuiteRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopSuiteRunResponseFilterSensitiveLog = (obj: StopSuiteRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSuiteDefinitionRequestFilterSensitiveLog = (obj: UpdateSuiteDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSuiteDefinitionResponseFilterSensitiveLog = (obj: UpdateSuiteDefinitionResponse): any => ({
  ...obj,
});
