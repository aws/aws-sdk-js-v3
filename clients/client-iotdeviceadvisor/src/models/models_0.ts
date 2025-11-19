// smithy-typescript generated code
import {
  AuthenticationMethod,
  Protocol,
  Status,
  SuiteRunStatus,
  TestCaseScenarioStatus,
  TestCaseScenarioType,
} from "./enums";

/**
 * <p>Information of a test device. A thing ARN, certificate ARN
 *             or device role ARN is required.</p>
 * @public
 */
export interface DeviceUnderTest {
  /**
   * <p>Lists device's thing ARN.</p>
   * @public
   */
  thingArn?: string | undefined;

  /**
   * <p>Lists device's certificate ARN.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>Lists device's role ARN.</p>
   * @public
   */
  deviceRoleArn?: string | undefined;
}

/**
 * <p>Gets the suite definition configuration.</p>
 * @public
 */
export interface SuiteDefinitionConfiguration {
  /**
   * <p>Gets the suite definition name. This is a required parameter.</p>
   * @public
   */
  suiteDefinitionName: string | undefined;

  /**
   * <p>Gets the devices configured.</p>
   * @public
   */
  devices?: DeviceUnderTest[] | undefined;

  /**
   * <p>Gets the tests intended for qualification in a suite.</p>
   * @public
   */
  intendedForQualification?: boolean | undefined;

  /**
   * <p>Verifies if the test suite is a long duration test.</p>
   * @public
   */
  isLongDurationTest?: boolean | undefined;

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
   * @public
   */
  rootGroup: string | undefined;

  /**
   * <p>Gets the device permission ARN. This is a required parameter.</p>
   * @public
   */
  devicePermissionRoleArn: string | undefined;

  /**
   * <p>Sets the MQTT protocol that is configured in the suite definition.</p>
   * @public
   */
  protocol?: Protocol | undefined;
}

/**
 * @public
 */
export interface CreateSuiteDefinitionRequest {
  /**
   * <p>Creates a Device Advisor test suite with suite definition configuration.</p>
   * @public
   */
  suiteDefinitionConfiguration: SuiteDefinitionConfiguration | undefined;

  /**
   * <p>The tags to be attached to the suite definition.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The client token for the test suite definition creation.
   *             This token is used for tracking test suite definition creation
   *             using retries and obtaining its status. This parameter is optional.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSuiteDefinitionResponse {
  /**
   * <p>The UUID of the test suite created.</p>
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the test suite.</p>
   * @public
   */
  suiteDefinitionArn?: string | undefined;

  /**
   * <p>The suite definition name of the test suite. This is a required parameter.</p>
   * @public
   */
  suiteDefinitionName?: string | undefined;

  /**
   * <p>The timestamp of when the test suite was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to be deleted.</p>
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
   * <p>The thing ARN of the device. This is an optional parameter.</p>
   * @public
   */
  thingArn?: string | undefined;

  /**
   * <p>The certificate ARN of the device. This is an optional parameter.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The device role ARN of the device. This is an optional parameter.</p>
   * @public
   */
  deviceRoleArn?: string | undefined;

  /**
   * <p>The authentication method used during the device connection.</p>
   * @public
   */
  authenticationMethod?: AuthenticationMethod | undefined;
}

/**
 * @public
 */
export interface GetEndpointResponse {
  /**
   * <p>The response of an Device Advisor endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to get.</p>
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite definition version of the test suite to get.</p>
   * @public
   */
  suiteDefinitionVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetSuiteDefinitionResponse {
  /**
   * <p>Suite definition ID of the suite definition.</p>
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * <p>The ARN of the suite definition.</p>
   * @public
   */
  suiteDefinitionArn?: string | undefined;

  /**
   * <p>Suite definition version of the suite definition.</p>
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * <p>Latest suite definition version of the suite definition.</p>
   * @public
   */
  latestVersion?: string | undefined;

  /**
   * <p>Suite configuration of the suite definition.</p>
   * @public
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration | undefined;

  /**
   * <p>Date (in Unix epoch time) when the suite definition was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Date (in Unix epoch time) when the suite definition was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>Tags attached to the suite definition.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunRequest {
  /**
   * <p>Suite definition ID for the test suite run.</p>
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID for the test suite run.</p>
   * @public
   */
  suiteRunId: string | undefined;
}

/**
 * <p>Gets suite run configuration.</p>
 * @public
 */
export interface SuiteRunConfiguration {
  /**
   * <p>Sets the primary device for the test suite run. This requires a thing ARN or a
   *             certificate ARN.</p>
   * @public
   */
  primaryDevice: DeviceUnderTest | undefined;

  /**
   * <p>Sets test case list.</p>
   * @public
   */
  selectedTestList?: string[] | undefined;

  /**
   * <p>TRUE if multiple test suites run in parallel.</p>
   * @public
   */
  parallelRun?: boolean | undefined;
}

/**
 * <p>Provides test case scenario.</p>
 * @public
 */
export interface TestCaseScenario {
  /**
   * <p>Provides test case scenario ID.</p>
   * @public
   */
  testCaseScenarioId?: string | undefined;

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
   * @public
   */
  testCaseScenarioType?: TestCaseScenarioType | undefined;

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
   * @public
   */
  status?: TestCaseScenarioStatus | undefined;

  /**
   * <p>Provides test case scenario failure result.</p>
   * @public
   */
  failure?: string | undefined;

  /**
   * <p>Provides test case scenario system messages if any.</p>
   * @public
   */
  systemMessage?: string | undefined;
}

/**
 * <p>Provides the test case run.</p>
 * @public
 */
export interface TestCaseRun {
  /**
   * <p>Provides the test case run ID.</p>
   * @public
   */
  testCaseRunId?: string | undefined;

  /**
   * <p>Provides the test case run definition ID.</p>
   * @public
   */
  testCaseDefinitionId?: string | undefined;

  /**
   * <p>Provides the test case run definition name.</p>
   * @public
   */
  testCaseDefinitionName?: string | undefined;

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
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>Provides test case run start time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>Provides test case run end time.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Provides test case run log URL.</p>
   * @public
   */
  logUrl?: string | undefined;

  /**
   * <p>Provides test case run warnings.</p>
   * @public
   */
  warnings?: string | undefined;

  /**
   * <p>Provides test case run failure result.</p>
   * @public
   */
  failure?: string | undefined;

  /**
   * <p> Provides the test scenarios for the test case run. </p>
   * @public
   */
  testScenarios?: TestCaseScenario[] | undefined;
}

/**
 * <p>Show Group Result.</p>
 * @public
 */
export interface GroupResult {
  /**
   * <p>Group result ID.</p>
   * @public
   */
  groupId?: string | undefined;

  /**
   * <p>Group Result Name.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>Tests under Group Result.</p>
   * @public
   */
  tests?: TestCaseRun[] | undefined;
}

/**
 * <p>Show each group result.</p>
 * @public
 */
export interface TestResult {
  /**
   * <p>Show each group of test results.</p>
   * @public
   */
  groups?: GroupResult[] | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunResponse {
  /**
   * <p>Suite definition ID for the test suite run.</p>
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * <p>Suite definition version for the test suite run.</p>
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * <p>Suite run ID for the test suite run.</p>
   * @public
   */
  suiteRunId?: string | undefined;

  /**
   * <p>The ARN of the suite run.</p>
   * @public
   */
  suiteRunArn?: string | undefined;

  /**
   * <p>Suite run configuration for the test suite run.</p>
   * @public
   */
  suiteRunConfiguration?: SuiteRunConfiguration | undefined;

  /**
   * <p>Test results for the test suite run.</p>
   * @public
   */
  testResult?: TestResult | undefined;

  /**
   * <p>Date (in Unix epoch time) when the test suite run started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>Date (in Unix epoch time) when the test suite run ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Status for the test suite run.</p>
   * @public
   */
  status?: SuiteRunStatus | undefined;

  /**
   * <p>Error reason for any test suite run failure.</p>
   * @public
   */
  errorReason?: string | undefined;

  /**
   * <p>The tags attached to the suite run.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunReportRequest {
  /**
   * <p>Suite definition ID of the test suite.</p>
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID of the test suite run.</p>
   * @public
   */
  suiteRunId: string | undefined;
}

/**
 * @public
 */
export interface GetSuiteRunReportResponse {
  /**
   * <p>Download URL of the qualification report.</p>
   * @public
   */
  qualificationReportDownloadUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListSuiteDefinitionsRequest {
  /**
   * <p>The maximum number of results to return at once.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used to get the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the suite definition.</p>
 * @public
 */
export interface SuiteDefinitionInformation {
  /**
   * <p>Suite definition ID of the test suite.</p>
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * <p>Suite name of the test suite.</p>
   * @public
   */
  suiteDefinitionName?: string | undefined;

  /**
   * <p>Specifies the devices that are under test for the test suite.</p>
   * @public
   */
  defaultDevices?: DeviceUnderTest[] | undefined;

  /**
   * <p>Specifies if the test suite is intended for qualification.</p>
   * @public
   */
  intendedForQualification?: boolean | undefined;

  /**
   * <p>Verifies if the test suite is a long duration test.</p>
   * @public
   */
  isLongDurationTest?: boolean | undefined;

  /**
   * <p>Gets the MQTT protocol that is configured in the suite definition.</p>
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * <p>Date (in Unix epoch time) when the test suite was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSuiteDefinitionsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the suite definitions
   *             in the list.</p>
   * @public
   */
  suiteDefinitionInformationList?: SuiteDefinitionInformation[] | undefined;

  /**
   * <p>A token used to get the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSuiteRunsRequest {
  /**
   * <p>Lists the test suite runs of the specified test suite based on suite definition
   *             ID.</p>
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * <p>Must be passed along with <code>suiteDefinitionId</code>. Lists the test suite runs of
   *             the specified test suite based on suite definition version.</p>
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * <p>The maximum number of results to return at once.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the suite run.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SuiteRunInformation</a> action.</p>
 * @public
 */
export interface SuiteRunInformation {
  /**
   * <p>Suite definition ID of the suite run.</p>
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * <p>Suite definition version of the suite run.</p>
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * <p>Suite definition name of the suite run.</p>
   * @public
   */
  suiteDefinitionName?: string | undefined;

  /**
   * <p>Suite run ID of the suite run.</p>
   * @public
   */
  suiteRunId?: string | undefined;

  /**
   * <p>Date (in Unix epoch time) when the suite run was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Date (in Unix epoch time) when the suite run was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>Date (in Unix epoch time) when the suite run ended.</p>
   * @public
   */
  endAt?: Date | undefined;

  /**
   * <p>Status of the suite run.</p>
   * @public
   */
  status?: SuiteRunStatus | undefined;

  /**
   * <p>Number of test cases that passed in the suite run.</p>
   * @public
   */
  passed?: number | undefined;

  /**
   * <p>Number of test cases that failed in the suite run.</p>
   * @public
   */
  failed?: number | undefined;
}

/**
 * @public
 */
export interface ListSuiteRunsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the suite runs in the
   *             list.</p>
   * @public
   */
  suiteRunsList?: SuiteRunInformation[] | undefined;

  /**
   * <p>A token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN of the IoT Device Advisor resource. This can be SuiteDefinition ARN or
   *             SuiteRun ARN.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags attached to the IoT Device Advisor resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartSuiteRunRequest {
  /**
   * <p>Suite definition ID of the test suite.</p>
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite definition version of the test suite.</p>
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * <p>Suite run configuration.</p>
   * @public
   */
  suiteRunConfiguration: SuiteRunConfiguration | undefined;

  /**
   * <p>The tags to be attached to the suite run.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartSuiteRunResponse {
  /**
   * <p>Suite Run ID of the started suite run.</p>
   * @public
   */
  suiteRunId?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the started suite run.</p>
   * @public
   */
  suiteRunArn?: string | undefined;

  /**
   * <p>Starts a Device Advisor test suite run based on suite create time.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The response of an Device Advisor test endpoint.</p>
   * @public
   */
  endpoint?: string | undefined;
}

/**
 * @public
 */
export interface StopSuiteRunRequest {
  /**
   * <p>Suite definition ID of the test suite run to be stopped.</p>
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID of the test suite run to be stopped.</p>
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
   * <p>The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or
   *             SuiteRun ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be attached to the IoT Device Advisor resource.</p>
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
   * <p>The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or
   *             SuiteRun ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>List of tag keys to remove from the IoT Device Advisor resource.</p>
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
   * <p>Suite definition ID of the test suite to be updated.</p>
   * @public
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Updates a Device Advisor test suite with suite definition configuration.</p>
   * @public
   */
  suiteDefinitionConfiguration: SuiteDefinitionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSuiteDefinitionResponse {
  /**
   * <p>Suite definition ID of the updated test suite.</p>
   * @public
   */
  suiteDefinitionId?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the updated test suite.</p>
   * @public
   */
  suiteDefinitionArn?: string | undefined;

  /**
   * <p>Updates the suite definition name. This is a required parameter.</p>
   * @public
   */
  suiteDefinitionName?: string | undefined;

  /**
   * <p>Suite definition version of the updated test suite.</p>
   * @public
   */
  suiteDefinitionVersion?: string | undefined;

  /**
   * <p>Timestamp of when the test suite was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Timestamp of when the test suite was updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}
