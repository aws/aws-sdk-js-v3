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
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteSuiteDefinitionRequest {
  /**
   * <p>Deletes a Device Advisor test suite with defined suite Id.</p>
   */
  suiteDefinitionId: string | undefined;
}

export namespace DeleteSuiteDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSuiteDefinitionResponse {}

export namespace DeleteSuiteDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteSuiteDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetSuiteDefinitionRequest {
  /**
   * <p>Requests suite definition Id with GetSuiteDefinition API call.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Requests the suite definition version of a test suite.</p>
   */
  suiteDefinitionVersion?: string;
}

export namespace GetSuiteDefinitionRequest {
  export const filterSensitiveLog = (obj: GetSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetSuiteDefinitionResponse {
  /**
   * <p>Gets suite definition Id with GetSuiteDefinition API call.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>The ARN of the suite definition.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Gets suite definition version with GetSuiteDefinition API call.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Gets latest suite definition version with GetSuiteDefinition API call.</p>
   */
  latestVersion?: string;

  /**
   * <p>Gets the suite configuration with GetSuiteDefinition API call.</p>
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;

  /**
   * <p>Gets the timestamp of the time suite was created with GetSuiteDefinition API call.</p>
   */
  createdAt?: Date;

  /**
   * <p>Gets the timestamp of the time suite was modified with GetSuiteDefinition API call.</p>
   */
  lastModifiedAt?: Date;

  /**
   * <p>Tags attached to the suite definition.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetSuiteDefinitionResponse {
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
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface GetSuiteRunRequest {
  /**
   * <p>Requests the information about Device Advisor test suite run based on suite definition Id.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Requests the information about Device Advisor test suite run based on suite run Id.</p>
   */
  suiteRunId: string | undefined;
}

export namespace GetSuiteRunRequest {
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
   * <p>Gets the secondary device for suite run.</p>
   */
  secondaryDevice?: DeviceUnderTest;

  /**
   * <p>Gets test case list.</p>
   */
  selectedTestList?: string[];
}

export namespace SuiteRunConfiguration {
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
  export const filterSensitiveLog = (obj: TestCaseRun): any => ({
    ...obj,
  });
}

/**
 * <p>Show Group Result.</p>
 */
export interface GroupResult {
  /**
   * <p>Show Group Result Id.</p>
   */
  groupId?: string;

  /**
   * <p>Show Group Result Name.</p>
   */
  groupName?: string;

  /**
   * <p>Show Group Result.</p>
   */
  tests?: TestCaseRun[];
}

export namespace GroupResult {
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
  export const filterSensitiveLog = (obj: TestResult): any => ({
    ...obj,
  });
}

export interface GetSuiteRunResponse {
  /**
   * <p>Gets the information about Device Advisor test suite run based on suite definition Id.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Gets the information about Device Advisor test suite run based on suite definition version.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Gets the information about Device Advisor test suite run based on suite run Id.</p>
   */
  suiteRunId?: string;

  /**
   * <p>The ARN of the suite run.</p>
   */
  suiteRunArn?: string;

  /**
   * <p>Gets the information about Device Advisor test suite run based on suite configuration.</p>
   */
  suiteRunConfiguration?: SuiteRunConfiguration;

  /**
   * <p>Gets the information about Device Advisor test suite run based on test case runs.</p>
   */
  testResult?: TestResult;

  /**
   * <p>Gets the information about Device Advisor test suite run based on start time.</p>
   */
  startTime?: Date;

  /**
   * <p>Gets the information about Device Advisor test suite run based on end time.</p>
   */
  endTime?: Date;

  /**
   * <p>Gets the information about Device Advisor test suite run based on its status.</p>
   */
  status?: SuiteRunStatus | string;

  /**
   * <p>Gets the information about Device Advisor test suite run based on error.</p>
   */
  errorReason?: string;

  /**
   * <p>The tags attached to the suite run.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetSuiteRunResponse {
  export const filterSensitiveLog = (obj: GetSuiteRunResponse): any => ({
    ...obj,
  });
}

export interface GetSuiteRunReportRequest {
  /**
   * <p>Device Advisor suite definition Id.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Device Advisor suite run Id.</p>
   */
  suiteRunId: string | undefined;
}

export namespace GetSuiteRunReportRequest {
  export const filterSensitiveLog = (obj: GetSuiteRunReportRequest): any => ({
    ...obj,
  });
}

export interface GetSuiteRunReportResponse {
  /**
   * <p>Gets the download URL of the qualification report.</p>
   */
  qualificationReportDownloadUrl?: string;
}

export namespace GetSuiteRunReportResponse {
  export const filterSensitiveLog = (obj: GetSuiteRunReportResponse): any => ({
    ...obj,
  });
}

export interface ListSuiteDefinitionsRequest {
  /**
   * <p>Request the list of all the Device Advisor test suites.</p>
   */
  maxResults?: number;

  /**
   * <p>Requests the Device Advisor test suites next token.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListSuiteDefinitionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Get suite definition information.</p>
 */
export interface SuiteDefinitionInformation {
  /**
   * <p>Get suite definition Id.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Get test suite name.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Specifies the devices under test.</p>
   */
  defaultDevices?: DeviceUnderTest[];

  /**
   * <p>Gets the test suites which will be used for qualification.</p>
   */
  intendedForQualification?: boolean;

  /**
   * <p>Gets the information of when the test suite was created.</p>
   */
  createdAt?: Date;
}

export namespace SuiteDefinitionInformation {
  export const filterSensitiveLog = (obj: SuiteDefinitionInformation): any => ({
    ...obj,
  });
}

export interface ListSuiteDefinitionsResponse {
  /**
   * <p>Lists test suite information using List suite definition.</p>
   */
  suiteDefinitionInformationList?: SuiteDefinitionInformation[];

  /**
   * <p>Creates a Device Advisor test suite.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListSuiteDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListSuiteRunsRequest {
  /**
   * <p>Lists the runs of the specified Device Advisor test suite based on suite definition Id.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Lists the runs of the specified Device Advisor test suite based on suite definition version.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>MaxResults for list suite run API request.</p>
   */
  maxResults?: number;

  /**
   * <p>Next pagination token for list suite run request.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteRunsRequest {
  export const filterSensitiveLog = (obj: ListSuiteRunsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Get suite run information.</p>
 */
export interface SuiteRunInformation {
  /**
   * <p>Get suite run information based on suite definition Id.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Get suite run information based on suite definition version.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Get suite run information based on suite definition name.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Get suite run information based on suite run Id.</p>
   */
  suiteRunId?: string;

  /**
   * <p>Get suite run information based on time suite was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Get suite run information based on start time of the run.</p>
   */
  startedAt?: Date;

  /**
   * <p>Get suite run information based on end time of the run.</p>
   */
  endAt?: Date;

  /**
   * <p>Get suite run information based on test run status.</p>
   */
  status?: SuiteRunStatus | string;

  /**
   * <p>Get suite run information based on result of the test suite run.</p>
   */
  passed?: number;

  /**
   * <p>Get suite run information based on result of the test suite run.</p>
   */
  failed?: number;
}

export namespace SuiteRunInformation {
  export const filterSensitiveLog = (obj: SuiteRunInformation): any => ({
    ...obj,
  });
}

export interface ListSuiteRunsResponse {
  /**
   * <p>Lists the runs of the specified Device Advisor test suite.</p>
   */
  suiteRunsList?: SuiteRunInformation[];

  /**
   * <p>Next pagination token for list suite run response.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteRunsResponse {
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTestCasesRequest {
  /**
   * <p>Lists all the qualification test cases in the test suite.</p>
   */
  intendedForQualification?: boolean;

  /**
   * <p>Requests the test cases max results.</p>
   */
  maxResults?: number;

  /**
   * <p>Requests the test cases next token.</p>
   */
  nextToken?: string;
}

export namespace ListTestCasesRequest {
  export const filterSensitiveLog = (obj: ListTestCasesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides test case definition.</p>
 */
export interface TestCaseDefinition {
  /**
   * <p>Provides test case definition Id.</p>
   */
  id?: string;

  /**
   * <p>Provides test case definition version.</p>
   */
  testCaseVersion?: string;
}

export namespace TestCaseDefinition {
  export const filterSensitiveLog = (obj: TestCaseDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Shows tests in a test group.</p>
 */
export interface TestCase {
  /**
   * <p>Shows test case name.</p>
   */
  name?: string;

  /**
   * <p>Shows test case configuration.</p>
   */
  configuration?: { [key: string]: string };

  /**
   * <p>Specifies a test.</p>
   */
  test?: TestCaseDefinition;
}

export namespace TestCase {
  export const filterSensitiveLog = (obj: TestCase): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the test case category.</p>
 */
export interface TestCaseCategory {
  /**
   * <p>Lists all the tests name in the specified category.</p>
   */
  name?: string;

  /**
   * <p>Lists all the tests in the specified category.</p>
   */
  tests?: TestCase[];
}

export namespace TestCaseCategory {
  export const filterSensitiveLog = (obj: TestCaseCategory): any => ({
    ...obj,
  });
}

export interface ListTestCasesResponse {
  /**
   * <p>Gets the category of test case.</p>
   */
  categories?: TestCaseCategory[];

  /**
   * <p>Gets the configuration of root test group.</p>
   */
  rootGroupConfiguration?: { [key: string]: string };

  /**
   * <p>Gets the configuration of test group.</p>
   */
  groupConfiguration?: { [key: string]: string };

  /**
   * <p>Test cases next token response.</p>
   */
  nextToken?: string;
}

export namespace ListTestCasesResponse {
  export const filterSensitiveLog = (obj: ListTestCasesResponse): any => ({
    ...obj,
  });
}

export interface StartSuiteRunRequest {
  /**
   * <p>Request to start suite run based on suite definition Id.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Request to start suite run based on suite definition version.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Request to start suite run based on suite configuration.</p>
   */
  suiteRunConfiguration?: SuiteRunConfiguration;

  /**
   * <p>The tags to be attached to the suite run.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StartSuiteRunRequest {
  export const filterSensitiveLog = (obj: StartSuiteRunRequest): any => ({
    ...obj,
  });
}

export interface StartSuiteRunResponse {
  /**
   * <p>Starts a Device Advisor test suite run based on suite Run Id.</p>
   */
  suiteRunId?: string;

  /**
   * <p>Starts a Device Advisor test suite run based on suite run arn.</p>
   */
  suiteRunArn?: string;

  /**
   * <p>Starts a Device Advisor test suite run based on suite create time.</p>
   */
  createdAt?: Date;
}

export namespace StartSuiteRunResponse {
  export const filterSensitiveLog = (obj: StartSuiteRunResponse): any => ({
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

export interface UpdateSuiteDefinitionRequest {
  /**
   * <p>Updates a Device Advisor test suite with suite definition id.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Updates a Device Advisor test suite with suite definition configuration.</p>
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
}

export namespace UpdateSuiteDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateSuiteDefinitionResponse {
  /**
   * <p>Updates a Device Advisor test suite with suite UUID.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Updates a Device Advisor test suite with Amazon Resource name.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Updates a Device Advisor test suite with suite definition name.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Updates a Device Advisor test suite with suite definition version.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Updates a Device Advisor test suite with TimeStamp of when it was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Updates a Device Advisor test suite with TimeStamp of when it was updated.</p>
   */
  lastUpdatedAt?: Date;
}

export namespace UpdateSuiteDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateSuiteDefinitionResponse): any => ({
    ...obj,
  });
}
