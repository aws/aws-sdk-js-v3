import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Sends Conflict Exception.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>Sends Conflict Exception message.</p>
   */
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Lists all the devices under test</p>
 */
export interface DeviceUnderTest {
  /**
   * <p>Lists devices thing arn</p>
   */
  thingArn?: string;

  /**
   * <p>Lists devices certificate arn</p>
   */
  certificateArn?: string;
}

export namespace DeviceUnderTest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceUnderTest): any => ({
    ...obj,
  });
}

/**
 * <p>Gets Suite Definition Configuration.</p>
 */
export interface SuiteDefinitionConfiguration {
  /**
   * <p>Gets Suite Definition Configuration name.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Gets the devices configured.</p>
   */
  devices?: DeviceUnderTest[];

  /**
   * <p>Gets the tests intended for qualification in a suite.</p>
   */
  intendedForQualification?: boolean;

  /**
   * <p>Gets test suite root group.</p>
   */
  rootGroup?: string;

  /**
   * <p>Gets device permission arn.</p>
   */
  devicePermissionRoleArn?: string;
}

export namespace SuiteDefinitionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuiteDefinitionConfiguration): any => ({
    ...obj,
  });
}

export interface CreateSuiteDefinitionRequest {
  /**
   * <p>Creates a Device Advisor test suite with suite definition configuration.</p>
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;

  /**
   * <p>The tags to be attached to the suite definition.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateSuiteDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateSuiteDefinitionResponse {
  /**
   * <p>Creates a Device Advisor test suite with suite UUID.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Creates a Device Advisor test suite with Amazon Resource name.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Creates a Device Advisor test suite with suite definition name.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Creates a Device Advisor test suite with TimeStamp of when it was created.</p>
   */
  createdAt?: Date;
}

export namespace CreateSuiteDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSuiteDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Sends Internal Failure Exception.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>Sends Internal Failure Exception message.</p>
   */
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>Sends invalid request exception.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>Sends invalid request exception message.</p>
   */
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteSuiteDefinitionRequest {
  /**
   * <p>Suite definition Id of the test suite to be deleted.</p>
   */
  suiteDefinitionId: string | undefined;
}

export namespace DeleteSuiteDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSuiteDefinitionResponse {}

export namespace DeleteSuiteDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSuiteDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetSuiteDefinitionRequest {
  /**
   * <p>Suite definition Id of the test suite to get.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite definition version of the test suite to get.</p>
   */
  suiteDefinitionVersion?: string;
}

export namespace GetSuiteDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetSuiteDefinitionResponse {
  /**
   * <p>Suite definition Id of the suite definition.</p>
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
  tags?: { [key: string]: string };
}

export namespace GetSuiteDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Sends Resource Not Found Exception.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Sends Resource Not Found Exception message.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface GetSuiteRunRequest {
  /**
   * <p>Suite definition Id for the test suite run.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run Id for the test suite run.</p>
   */
  suiteRunId: string | undefined;
}

export namespace GetSuiteRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteRunRequest): any => ({
    ...obj,
  });
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
   * <p>Gets the primary device for suite run.</p>
   */
  primaryDevice?: DeviceUnderTest;

  /**
   * <p>Gets test case list.</p>
   */
  selectedTestList?: string[];
}

export namespace SuiteRunConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuiteRunConfiguration): any => ({
    ...obj,
  });
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

/**
 * <p>Provides test case run.</p>
 */
export interface TestCaseRun {
  /**
   * <p>Provides test case run Id.</p>
   */
  testCaseRunId?: string;

  /**
   * <p>Provides test case run definition Id.</p>
   */
  testCaseDefinitionId?: string;

  /**
   * <p>Provides test case run definition Name.</p>
   */
  testCaseDefinitionName?: string;

  /**
   * <p>Provides test case run status.</p>
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
   * <p>Provides test case run log Url.</p>
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
}

export namespace TestCaseRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestCaseRun): any => ({
    ...obj,
  });
}

/**
 * <p>Show Group Result.</p>
 */
export interface GroupResult {
  /**
   * <p>Group result Id.</p>
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

export namespace GroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupResult): any => ({
    ...obj,
  });
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

export namespace TestResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestResult): any => ({
    ...obj,
  });
}

export interface GetSuiteRunResponse {
  /**
   * <p>Suite definition Id for the test suite run.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Suite definition version for the test suite run.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Suite run Id for the test suite run.</p>
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
   * <p>Date (in Unix epoch time) when the test suite run was started.</p>
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
  tags?: { [key: string]: string };
}

export namespace GetSuiteRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteRunResponse): any => ({
    ...obj,
  });
}

export interface GetSuiteRunReportRequest {
  /**
   * <p>Suite definition Id of the test suite.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run Id of the test suite run.</p>
   */
  suiteRunId: string | undefined;
}

export namespace GetSuiteRunReportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteRunReportRequest): any => ({
    ...obj,
  });
}

export interface GetSuiteRunReportResponse {
  /**
   * <p>Download URL of the qualification report.</p>
   */
  qualificationReportDownloadUrl?: string;
}

export namespace GetSuiteRunReportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteRunReportResponse): any => ({
    ...obj,
  });
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

export namespace ListSuiteDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSuiteDefinitionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the suite definition.</p>
 */
export interface SuiteDefinitionInformation {
  /**
   * <p>Suite definition Id of the test suite.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Suite name of the test suite.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Specifies the devices under test for the test suite.</p>
   */
  defaultDevices?: DeviceUnderTest[];

  /**
   * <p>Specifies if the test suite is intended for qualification.</p>
   */
  intendedForQualification?: boolean;

  /**
   * <p>Date (in Unix epoch time) when the test suite was created.</p>
   */
  createdAt?: Date;
}

export namespace SuiteDefinitionInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuiteDefinitionInformation): any => ({
    ...obj,
  });
}

export interface ListSuiteDefinitionsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the suite definitions in the list.</p>
   */
  suiteDefinitionInformationList?: SuiteDefinitionInformation[];

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSuiteDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListSuiteRunsRequest {
  /**
   * <p>Lists the test suite runs of the specified test suite based on suite definition Id.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Must be passed along with suiteDefinitionId. Lists the test suite runs of the specified test suite based on suite definition version.</p>
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

export namespace ListSuiteRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSuiteRunsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the suite run.</p>
 */
export interface SuiteRunInformation {
  /**
   * <p>Suite definition Id of the suite run.</p>
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
   * <p>Suite run Id of the suite run.</p>
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

export namespace SuiteRunInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuiteRunInformation): any => ({
    ...obj,
  });
}

export interface ListSuiteRunsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the suite runs in the list.</p>
   */
  suiteRunsList?: SuiteRunInformation[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSuiteRunsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the IoT Device Advisor resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags attached to the IoT Device Advisor resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface StartSuiteRunRequest {
  /**
   * <p>Suite definition Id of the test suite.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite definition version of the test suite.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Suite run configuration.</p>
   */
  suiteRunConfiguration?: SuiteRunConfiguration;

  /**
   * <p>The tags to be attached to the suite run.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StartSuiteRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSuiteRunRequest): any => ({
    ...obj,
  });
}

export interface StartSuiteRunResponse {
  /**
   * <p>Suite Run Id of the started suite run.</p>
   */
  suiteRunId?: string;

  /**
   * <p>Amazon resource name of the started suite run.</p>
   */
  suiteRunArn?: string;

  /**
   * <p>Date (in Unix epoch time) when the suite run was created.</p>
   */
  createdAt?: Date;
}

export namespace StartSuiteRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSuiteRunResponse): any => ({
    ...obj,
  });
}

export interface StopSuiteRunRequest {
  /**
   * <p>Suite definition Id of the test suite run to be stopped.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run Id of the test suite run to be stopped.</p>
   */
  suiteRunId: string | undefined;
}

export namespace StopSuiteRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSuiteRunRequest): any => ({
    ...obj,
  });
}

export interface StopSuiteRunResponse {}

export namespace StopSuiteRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSuiteRunResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The resource ARN of an IoT Device Advisor resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be attached to the IoT Device Advisor resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The resource ARN of an IoT Device Advisor resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>List of tag keys to remove from the IoT Device Advisor resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateSuiteDefinitionRequest {
  /**
   * <p>Suite definition Id of the test suite to be updated.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Updates a Device Advisor test suite with suite definition configuration.</p>
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
}

export namespace UpdateSuiteDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateSuiteDefinitionResponse {
  /**
   * <p>Suite definition Id of the updated test suite.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Amazon Resource name of the updated test suite.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Suite definition name of the updated test suite.</p>
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

export namespace UpdateSuiteDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSuiteDefinitionResponse): any => ({
    ...obj,
  });
}
