import {
  AuthenticationMethod,
  ConflictException,
  ConflictException$,
  CreateSuiteDefinition$,
  CreateSuiteDefinitionCommand,
  CreateSuiteDefinitionRequest$,
  CreateSuiteDefinitionResponse$,
  DeleteSuiteDefinition$,
  DeleteSuiteDefinitionCommand,
  DeleteSuiteDefinitionRequest$,
  DeleteSuiteDefinitionResponse$,
  DeviceUnderTest$,
  GetEndpoint$,
  GetEndpointCommand,
  GetEndpointRequest$,
  GetEndpointResponse$,
  GetSuiteDefinition$,
  GetSuiteDefinitionCommand,
  GetSuiteDefinitionRequest$,
  GetSuiteDefinitionResponse$,
  GetSuiteRun$,
  GetSuiteRunCommand,
  GetSuiteRunReport$,
  GetSuiteRunReportCommand,
  GetSuiteRunReportRequest$,
  GetSuiteRunReportResponse$,
  GetSuiteRunRequest$,
  GetSuiteRunResponse$,
  GroupResult$,
  InternalServerException,
  InternalServerException$,
  IotDeviceAdvisor,
  IotDeviceAdvisorClient,
  IotDeviceAdvisorServiceException,
  ListSuiteDefinitions$,
  ListSuiteDefinitionsCommand,
  ListSuiteDefinitionsRequest$,
  ListSuiteDefinitionsResponse$,
  ListSuiteRuns$,
  ListSuiteRunsCommand,
  ListSuiteRunsRequest$,
  ListSuiteRunsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListSuiteDefinitions,
  paginateListSuiteRuns,
  Protocol,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  StartSuiteRun$,
  StartSuiteRunCommand,
  StartSuiteRunRequest$,
  StartSuiteRunResponse$,
  Status,
  StopSuiteRun$,
  StopSuiteRunCommand,
  StopSuiteRunRequest$,
  StopSuiteRunResponse$,
  SuiteDefinitionConfiguration$,
  SuiteDefinitionInformation$,
  SuiteRunConfiguration$,
  SuiteRunInformation$,
  SuiteRunStatus,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TestCaseRun$,
  TestCaseScenario$,
  TestCaseScenarioStatus,
  TestCaseScenarioType,
  TestResult$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateSuiteDefinition$,
  UpdateSuiteDefinitionCommand,
  UpdateSuiteDefinitionRequest$,
  UpdateSuiteDefinitionResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IotDeviceAdvisorClient === "function");
assert(typeof IotDeviceAdvisor === "function");
// commands
assert(typeof CreateSuiteDefinitionCommand === "function");
assert(typeof CreateSuiteDefinition$ === "object");
assert(typeof DeleteSuiteDefinitionCommand === "function");
assert(typeof DeleteSuiteDefinition$ === "object");
assert(typeof GetEndpointCommand === "function");
assert(typeof GetEndpoint$ === "object");
assert(typeof GetSuiteDefinitionCommand === "function");
assert(typeof GetSuiteDefinition$ === "object");
assert(typeof GetSuiteRunCommand === "function");
assert(typeof GetSuiteRun$ === "object");
assert(typeof GetSuiteRunReportCommand === "function");
assert(typeof GetSuiteRunReport$ === "object");
assert(typeof ListSuiteDefinitionsCommand === "function");
assert(typeof ListSuiteDefinitions$ === "object");
assert(typeof ListSuiteRunsCommand === "function");
assert(typeof ListSuiteRuns$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartSuiteRunCommand === "function");
assert(typeof StartSuiteRun$ === "object");
assert(typeof StopSuiteRunCommand === "function");
assert(typeof StopSuiteRun$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateSuiteDefinitionCommand === "function");
assert(typeof UpdateSuiteDefinition$ === "object");
// structural schemas
assert(typeof CreateSuiteDefinitionRequest$ === "object");
assert(typeof CreateSuiteDefinitionResponse$ === "object");
assert(typeof DeleteSuiteDefinitionRequest$ === "object");
assert(typeof DeleteSuiteDefinitionResponse$ === "object");
assert(typeof DeviceUnderTest$ === "object");
assert(typeof GetEndpointRequest$ === "object");
assert(typeof GetEndpointResponse$ === "object");
assert(typeof GetSuiteDefinitionRequest$ === "object");
assert(typeof GetSuiteDefinitionResponse$ === "object");
assert(typeof GetSuiteRunReportRequest$ === "object");
assert(typeof GetSuiteRunReportResponse$ === "object");
assert(typeof GetSuiteRunRequest$ === "object");
assert(typeof GetSuiteRunResponse$ === "object");
assert(typeof GroupResult$ === "object");
assert(typeof ListSuiteDefinitionsRequest$ === "object");
assert(typeof ListSuiteDefinitionsResponse$ === "object");
assert(typeof ListSuiteRunsRequest$ === "object");
assert(typeof ListSuiteRunsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof StartSuiteRunRequest$ === "object");
assert(typeof StartSuiteRunResponse$ === "object");
assert(typeof StopSuiteRunRequest$ === "object");
assert(typeof StopSuiteRunResponse$ === "object");
assert(typeof SuiteDefinitionConfiguration$ === "object");
assert(typeof SuiteDefinitionInformation$ === "object");
assert(typeof SuiteRunConfiguration$ === "object");
assert(typeof SuiteRunInformation$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TestCaseRun$ === "object");
assert(typeof TestCaseScenario$ === "object");
assert(typeof TestResult$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateSuiteDefinitionRequest$ === "object");
assert(typeof UpdateSuiteDefinitionResponse$ === "object");
// enums
assert(typeof AuthenticationMethod === "object");
assert(typeof Protocol === "object");
assert(typeof Status === "object");
assert(typeof SuiteRunStatus === "object");
assert(typeof TestCaseScenarioStatus === "object");
assert(typeof TestCaseScenarioType === "object");
// errors
assert(ConflictException.prototype instanceof IotDeviceAdvisorServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof IotDeviceAdvisorServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IotDeviceAdvisorServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof IotDeviceAdvisorServiceException);
assert(typeof ValidationException$ === "object");
assert(IotDeviceAdvisorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSuiteDefinitions === "function");
assert(typeof paginateListSuiteRuns === "function");
console.log(`IotDeviceAdvisor index test passed.`);
