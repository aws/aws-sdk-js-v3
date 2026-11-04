// smithy-typescript generated code
import type {
  AuthenticationMethod,
  Protocol,
  Status,
  SuiteRunStatus,
  TestCaseScenarioStatus,
  TestCaseScenarioType,
} from "./enums";

/**
 * Information of a test device. A thing ARN, certificate ARN or device role ARN is required.
 *
 * @public
 */
export interface DeviceUnderTest {
  /**
   * Lists device's thing ARN.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * Lists device's certificate ARN.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * Lists device's role ARN.
   *
   * @public
   */
  deviceRoleArn?: string | undefined;
}

/**
 * Gets the suite definition configuration.
 *
 * @public
 */
export interface SuiteDefinitionConfiguration {
  /**
   * Gets the suite definition name. This is a required parameter.
   *
   * @public
   */
  suiteDefinitionName: string | undefined;

  /**
   * Gets the devices configured.
   *
   * @public
   */
  devices?: DeviceUnderTest[] | undefined;

  /**
   * Gets the tests intended for qualification in a suite.
   *
   * @public
   */
  intendedForQualification?: boolean | undefined;

  /**
   * Verifies if the test suite is a long duration test.
   *
   * @public
   */
  isLongDurationTest?: boolean | undefined;

  /**
   * Gets the test suite root group. This is a required parameter. For updating or creating the latest qualification suite, if `intendedForQualification` is set to true, `rootGroup` can be an empty string. If `intendedForQualification` is false, `rootGroup` cannot be an empty string. If `rootGroup` is empty, and `intendedForQualification` is set to true, all the qualification tests are included, and the configuration is default.
   *
   * For a qualification suite, the minimum length is 0, and the maximum is 2048. For a non-qualification suite, the minimum length is 1, and the maximum is 2048.
   *
   * @public
   */
  rootGroup: string | undefined;

  /**
   * Gets the device permission ARN. This is a required parameter.
   *
   * @public
   */
  devicePermissionRoleArn: string | undefined;

  /**
   * Sets the MQTT protocol that is configured in the suite definition.
   *
   * @public
   */
  protocol?: Protocol | undefined;
}

/**
 * @public
 */
export interface CreateSuiteDefinitionRequest {
  /**
   * Creates a Device Advisor test suite with suite definition configuration.
   *
   * @public
   */
  suiteDefinitionConfiguration: SuiteDefinitionConfiguration | undefined;

  /**
   * The tags to be attached to the suite definition.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The client token for the test suite definition creation. This token is used for tracking test suite definition creation using retries and obtaining its status. This parameter is optional.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSuiteDefinitionResponse {
  /**
   * The UUID of the test suite created.
   *
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the test suite.
   *
   * @public
   */
  suiteDefinitionArn?: string | undefined;

  /**
   * The suite definition name of the test suite. This is a required parameter.
   *
   * @public
   */
  suiteDefinitionName?: string | undefined;

  /**
   * The timestamp of when the test suite was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteSuiteDefinitionRequest {
  /**
   * Suite definition ID of the test suite to be deleted.
   *
   * @public
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
   * The thing ARN of the device. This is an optional parameter.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * The certificate ARN of the device. This is an optional parameter.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The device role ARN of the device. This is an optional parameter.
   *
   * @public
   */
  deviceRoleArn?: string | undefined;

  /**
   * The authentication method used during the device connection.
   *
   * @public
   */
  authenticationMethod?: AuthenticationMethod | undefined;
}

/**
 * @public
 */
export interface GetEndpointResponse {
  /**
   * The response of an Device Advisor endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetSuiteDefinitionRequest {
  /**
   * Suite definition ID of the test suite to get.
   *
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * Suite definition version of the test suite to get.
   *
   * @public
   */
  suiteDefinitionVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetSuiteDefinitionResponse {
  /**
   * Suite definition ID of the suite definition.
   *
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * The ARN of the suite definition.
   *
   * @public
   */
  suiteDefinitionArn?: string | undefined;

  /**
   * Suite definition version of the suite definition.
   *
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * Latest suite definition version of the suite definition.
   *
   * @public
   */
  latestVersion?: string | undefined;

  /**
   * Suite configuration of the suite definition.
   *
   * @public
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration | undefined;

  /**
   * Date (in Unix epoch time) when the suite definition was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Date (in Unix epoch time) when the suite definition was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * Tags attached to the suite definition.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunRequest {
  /**
   * Suite definition ID for the test suite run.
   *
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * Suite run ID for the test suite run.
   *
   * @public
   */
  suiteRunId: string | undefined;
}

/**
 * Gets suite run configuration.
 *
 * @public
 */
export interface SuiteRunConfiguration {
  /**
   * Sets the primary device for the test suite run. This requires a thing ARN or a certificate ARN.
   *
   * @public
   */
  primaryDevice: DeviceUnderTest | undefined;

  /**
   * Sets test case list.
   *
   * @public
   */
  selectedTestList?: string[] | undefined;

  /**
   * TRUE if multiple test suites run in parallel.
   *
   * @public
   */
  parallelRun?: boolean | undefined;
}

/**
 * Provides test case scenario.
 *
 * @public
 */
export interface TestCaseScenario {
  /**
   * Provides test case scenario ID.
   *
   * @public
   */
  testCaseScenarioId?: string | undefined;

  /**
   * Provides test case scenario type. Type is one of the following:
   *
   * - Advanced
   * - Basic
   *
   * @public
   */
  testCaseScenarioType?: TestCaseScenarioType | undefined;

  /**
   * Provides the test case scenario status. Status is one of the following:
   *
   * - `PASS`: Test passed.
   * - `FAIL`: Test failed.
   * - `PENDING`: Test has not started running but is scheduled.
   * - `RUNNING`: Test is running.
   * - `STOPPING`: Test is performing cleanup steps. You will see this status only if you stop a suite run.
   * - `STOPPED` Test is stopped. You will see this status only if you stop a suite run.
   * - `PASS_WITH_WARNINGS`: Test passed with warnings.
   * - `ERORR`: Test faced an error when running due to an internal issue.
   *
   * @public
   */
  status?: TestCaseScenarioStatus | undefined;

  /**
   * Provides test case scenario failure result.
   *
   * @public
   */
  failure?: string | undefined;

  /**
   * Provides test case scenario system messages if any.
   *
   * @public
   */
  systemMessage?: string | undefined;
}

/**
 * Provides the test case run.
 *
 * @public
 */
export interface TestCaseRun {
  /**
   * Provides the test case run ID.
   *
   * @public
   */
  testCaseRunId?: string | undefined;

  /**
   * Provides the test case run definition ID.
   *
   * @public
   */
  testCaseDefinitionId?: string | undefined;

  /**
   * Provides the test case run definition name.
   *
   * @public
   */
  testCaseDefinitionName?: string | undefined;

  /**
   * Provides the test case run status. Status is one of the following:
   *
   * - `PASS`: Test passed.
   * - `FAIL`: Test failed.
   * - `PENDING`: Test has not started running but is scheduled.
   * - `RUNNING`: Test is running.
   * - `STOPPING`: Test is performing cleanup steps. You will see this status only if you stop a suite run.
   * - `STOPPED` Test is stopped. You will see this status only if you stop a suite run.
   * - `PASS_WITH_WARNINGS`: Test passed with warnings.
   * - `ERORR`: Test faced an error when running due to an internal issue.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * Provides test case run start time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Provides test case run end time.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Provides test case run log URL.
   *
   * @public
   */
  logUrl?: string | undefined;

  /**
   * Provides test case run warnings.
   *
   * @public
   */
  warnings?: string | undefined;

  /**
   * Provides test case run failure result.
   *
   * @public
   */
  failure?: string | undefined;

  /**
   * Provides the test scenarios for the test case run.
   *
   * @public
   */
  testScenarios?: TestCaseScenario[] | undefined;
}

/**
 * Show Group Result.
 *
 * @public
 */
export interface GroupResult {
  /**
   * Group result ID.
   *
   * @public
   */
  groupId?: string | undefined;

  /**
   * Group Result Name.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * Tests under Group Result.
   *
   * @public
   */
  tests?: TestCaseRun[] | undefined;
}

/**
 * Show each group result.
 *
 * @public
 */
export interface TestResult {
  /**
   * Show each group of test results.
   *
   * @public
   */
  groups?: GroupResult[] | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunResponse {
  /**
   * Suite definition ID for the test suite run.
   *
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * Suite definition version for the test suite run.
   *
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * Suite run ID for the test suite run.
   *
   * @public
   */
  suiteRunId?: string | undefined;

  /**
   * The ARN of the suite run.
   *
   * @public
   */
  suiteRunArn?: string | undefined;

  /**
   * Suite run configuration for the test suite run.
   *
   * @public
   */
  suiteRunConfiguration?: SuiteRunConfiguration | undefined;

  /**
   * Test results for the test suite run.
   *
   * @public
   */
  testResult?: TestResult | undefined;

  /**
   * Date (in Unix epoch time) when the test suite run started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Date (in Unix epoch time) when the test suite run ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Status for the test suite run.
   *
   * @public
   */
  status?: SuiteRunStatus | undefined;

  /**
   * Error reason for any test suite run failure.
   *
   * @public
   */
  errorReason?: string | undefined;

  /**
   * The tags attached to the suite run.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunReportRequest {
  /**
   * Suite definition ID of the test suite.
   *
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * Suite run ID of the test suite run.
   *
   * @public
   */
  suiteRunId: string | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunReportResponse {
  /**
   * Download URL of the qualification report.
   *
   * @public
   */
  qualificationReportDownloadUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListSuiteDefinitionsRequest {
  /**
   * The maximum number of results to return at once.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the suite definition.
 *
 * @public
 */
export interface SuiteDefinitionInformation {
  /**
   * Suite definition ID of the test suite.
   *
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * Suite name of the test suite.
   *
   * @public
   */
  suiteDefinitionName?: string | undefined;

  /**
   * Specifies the devices that are under test for the test suite.
   *
   * @public
   */
  defaultDevices?: DeviceUnderTest[] | undefined;

  /**
   * Specifies if the test suite is intended for qualification.
   *
   * @public
   */
  intendedForQualification?: boolean | undefined;

  /**
   * Verifies if the test suite is a long duration test.
   *
   * @public
   */
  isLongDurationTest?: boolean | undefined;

  /**
   * Gets the MQTT protocol that is configured in the suite definition.
   *
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * Date (in Unix epoch time) when the test suite was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSuiteDefinitionsResponse {
  /**
   * An array of objects that provide summaries of information about the suite definitions in the list.
   *
   * @public
   */
  suiteDefinitionInformationList?: SuiteDefinitionInformation[] | undefined;

  /**
   * A token used to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSuiteRunsRequest {
  /**
   * Lists the test suite runs of the specified test suite based on suite definition ID.
   *
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * Must be passed along with `suiteDefinitionId`. Lists the test suite runs of the specified test suite based on suite definition version.
   *
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * The maximum number of results to return at once.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the suite run.
 *
 * Requires permission to access the [SuiteRunInformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @public
 */
export interface SuiteRunInformation {
  /**
   * Suite definition ID of the suite run.
   *
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * Suite definition version of the suite run.
   *
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * Suite definition name of the suite run.
   *
   * @public
   */
  suiteDefinitionName?: string | undefined;

  /**
   * Suite run ID of the suite run.
   *
   * @public
   */
  suiteRunId?: string | undefined;

  /**
   * Date (in Unix epoch time) when the suite run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Date (in Unix epoch time) when the suite run was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * Date (in Unix epoch time) when the suite run ended.
   *
   * @public
   */
  endAt?: Date | undefined;

  /**
   * Status of the suite run.
   *
   * @public
   */
  status?: SuiteRunStatus | undefined;

  /**
   * Number of test cases that passed in the suite run.
   *
   * @public
   */
  passed?: number | undefined;

  /**
   * Number of test cases that failed in the suite run.
   *
   * @public
   */
  failed?: number | undefined;
}

/**
 * @public
 */
export interface ListSuiteRunsResponse {
  /**
   * An array of objects that provide summaries of information about the suite runs in the list.
   *
   * @public
   */
  suiteRunsList?: SuiteRunInformation[] | undefined;

  /**
   * A token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource ARN of the IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags attached to the IoT Device Advisor resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartSuiteRunRequest {
  /**
   * Suite definition ID of the test suite.
   *
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * Suite definition version of the test suite.
   *
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * Suite run configuration.
   *
   * @public
   */
  suiteRunConfiguration: SuiteRunConfiguration | undefined;

  /**
   * The tags to be attached to the suite run.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartSuiteRunResponse {
  /**
   * Suite Run ID of the started suite run.
   *
   * @public
   */
  suiteRunId?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the started suite run.
   *
   * @public
   */
  suiteRunArn?: string | undefined;

  /**
   * Starts a Device Advisor test suite run based on suite create time.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The response of an Device Advisor test endpoint.
   *
   * @public
   */
  endpoint?: string | undefined;
}

/**
 * @public
 */
export interface StopSuiteRunRequest {
  /**
   * Suite definition ID of the test suite run to be stopped.
   *
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * Suite run ID of the test suite run to be stopped.
   *
   * @public
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
   * The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to be attached to the IoT Device Advisor resource.
   *
   * @public
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
   * The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * List of tag keys to remove from the IoT Device Advisor resource.
   *
   * @public
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
   * Suite definition ID of the test suite to be updated.
   *
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * Updates a Device Advisor test suite with suite definition configuration.
   *
   * @public
   */
  suiteDefinitionConfiguration: SuiteDefinitionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSuiteDefinitionResponse {
  /**
   * Suite definition ID of the updated test suite.
   *
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the updated test suite.
   *
   * @public
   */
  suiteDefinitionArn?: string | undefined;

  /**
   * Updates the suite definition name. This is a required parameter.
   *
   * @public
   */
  suiteDefinitionName?: string | undefined;

  /**
   * Suite definition version of the updated test suite.
   *
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * Timestamp of when the test suite was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp of when the test suite was updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}
