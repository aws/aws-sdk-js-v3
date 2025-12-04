import {
  AuthenticationMethod,
  CreateSuiteDefinitionCommand,
  DeleteSuiteDefinitionCommand,
  GetEndpointCommand,
  GetSuiteDefinitionCommand,
  GetSuiteRunCommand,
  GetSuiteRunReportCommand,
  IotDeviceAdvisor,
  IotDeviceAdvisorClient,
  IotDeviceAdvisorServiceException,
  ListSuiteDefinitionsCommand,
  ListSuiteRunsCommand,
  ListTagsForResourceCommand,
  Protocol,
  StartSuiteRunCommand,
  Status,
  StopSuiteRunCommand,
  SuiteRunStatus,
  TagResourceCommand,
  TestCaseScenarioStatus,
  TestCaseScenarioType,
  UntagResourceCommand,
  UpdateSuiteDefinitionCommand,
  paginateListSuiteDefinitions,
  paginateListSuiteRuns,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IotDeviceAdvisorClient === "function");
assert(typeof IotDeviceAdvisor === "function");
// commands
assert(typeof CreateSuiteDefinitionCommand === "function");
assert(typeof DeleteSuiteDefinitionCommand === "function");
assert(typeof GetEndpointCommand === "function");
assert(typeof GetSuiteDefinitionCommand === "function");
assert(typeof GetSuiteRunCommand === "function");
assert(typeof GetSuiteRunReportCommand === "function");
assert(typeof ListSuiteDefinitionsCommand === "function");
assert(typeof ListSuiteRunsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartSuiteRunCommand === "function");
assert(typeof StopSuiteRunCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateSuiteDefinitionCommand === "function");
// enums
assert(typeof AuthenticationMethod === "object");
assert(typeof Protocol === "object");
assert(typeof Status === "object");
assert(typeof SuiteRunStatus === "object");
assert(typeof TestCaseScenarioStatus === "object");
assert(typeof TestCaseScenarioType === "object");
// errors
assert(IotDeviceAdvisorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSuiteDefinitions === "function");
assert(typeof paginateListSuiteRuns === "function");
console.log(`IotDeviceAdvisor index test passed.`);
