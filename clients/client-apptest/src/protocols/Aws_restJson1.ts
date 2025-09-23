// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateTestCaseCommandInput, CreateTestCaseCommandOutput } from "../commands/CreateTestCaseCommand";
import {
  CreateTestConfigurationCommandInput,
  CreateTestConfigurationCommandOutput,
} from "../commands/CreateTestConfigurationCommand";
import { CreateTestSuiteCommandInput, CreateTestSuiteCommandOutput } from "../commands/CreateTestSuiteCommand";
import { DeleteTestCaseCommandInput, DeleteTestCaseCommandOutput } from "../commands/DeleteTestCaseCommand";
import {
  DeleteTestConfigurationCommandInput,
  DeleteTestConfigurationCommandOutput,
} from "../commands/DeleteTestConfigurationCommand";
import { DeleteTestRunCommandInput, DeleteTestRunCommandOutput } from "../commands/DeleteTestRunCommand";
import { DeleteTestSuiteCommandInput, DeleteTestSuiteCommandOutput } from "../commands/DeleteTestSuiteCommand";
import { GetTestCaseCommandInput, GetTestCaseCommandOutput } from "../commands/GetTestCaseCommand";
import {
  GetTestConfigurationCommandInput,
  GetTestConfigurationCommandOutput,
} from "../commands/GetTestConfigurationCommand";
import { GetTestRunStepCommandInput, GetTestRunStepCommandOutput } from "../commands/GetTestRunStepCommand";
import { GetTestSuiteCommandInput, GetTestSuiteCommandOutput } from "../commands/GetTestSuiteCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTestCasesCommandInput, ListTestCasesCommandOutput } from "../commands/ListTestCasesCommand";
import {
  ListTestConfigurationsCommandInput,
  ListTestConfigurationsCommandOutput,
} from "../commands/ListTestConfigurationsCommand";
import { ListTestRunsCommandInput, ListTestRunsCommandOutput } from "../commands/ListTestRunsCommand";
import { ListTestRunStepsCommandInput, ListTestRunStepsCommandOutput } from "../commands/ListTestRunStepsCommand";
import {
  ListTestRunTestCasesCommandInput,
  ListTestRunTestCasesCommandOutput,
} from "../commands/ListTestRunTestCasesCommand";
import { ListTestSuitesCommandInput, ListTestSuitesCommandOutput } from "../commands/ListTestSuitesCommand";
import { StartTestRunCommandInput, StartTestRunCommandOutput } from "../commands/StartTestRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateTestCaseCommandInput, UpdateTestCaseCommandOutput } from "../commands/UpdateTestCaseCommand";
import {
  UpdateTestConfigurationCommandInput,
  UpdateTestConfigurationCommandOutput,
} from "../commands/UpdateTestConfigurationCommand";
import { UpdateTestSuiteCommandInput, UpdateTestSuiteCommandOutput } from "../commands/UpdateTestSuiteCommand";
import { AppTestServiceException as __BaseException } from "../models/AppTestServiceException";
import {
  AccessDeniedException,
  Batch,
  CloudFormation,
  CloudFormationAction,
  CompareAction,
  ConflictException,
  DatabaseCDC,
  DataSet,
  FileMetadata,
  Input,
  InputFile,
  InternalServerException,
  M2ManagedActionProperties,
  M2ManagedApplication,
  M2ManagedApplicationAction,
  M2NonManagedApplication,
  M2NonManagedApplicationAction,
  MainframeAction,
  MainframeActionProperties,
  MainframeActionType,
  Output,
  OutputFile,
  Resource,
  ResourceAction,
  ResourceNotFoundException,
  ResourceType,
  Script,
  ServiceQuotaExceededException,
  ServiceSettings,
  SourceDatabaseMetadata,
  Step,
  StepAction,
  TargetDatabaseMetadata,
  TestCaseRunSummary,
  TestCases,
  TestCaseSummary,
  TestConfigurationSummary,
  TestRunStepSummary,
  TestRunSummary,
  TestSuiteSummary,
  ThrottlingException,
  TN3270,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateTestCaseCommand
 */
export const se_CreateTestCaseCommand = async (
  input: CreateTestCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/testcase");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      steps: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTestConfigurationCommand
 */
export const se_CreateTestConfigurationCommand = async (
  input: CreateTestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/testconfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      properties: (_) => _json(_),
      resources: (_) => _json(_),
      serviceSettings: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTestSuiteCommand
 */
export const se_CreateTestSuiteCommand = async (
  input: CreateTestSuiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/testsuite");
  let body: any;
  body = JSON.stringify(
    take(input, {
      afterSteps: (_) => _json(_),
      beforeSteps: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      tags: (_) => _json(_),
      testCases: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTestCaseCommand
 */
export const se_DeleteTestCaseCommand = async (
  input: DeleteTestCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testcases/{testCaseId}");
  b.p("testCaseId", () => input.testCaseId!, "{testCaseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTestConfigurationCommand
 */
export const se_DeleteTestConfigurationCommand = async (
  input: DeleteTestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testconfigurations/{testConfigurationId}");
  b.p("testConfigurationId", () => input.testConfigurationId!, "{testConfigurationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTestRunCommand
 */
export const se_DeleteTestRunCommand = async (
  input: DeleteTestRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testruns/{testRunId}");
  b.p("testRunId", () => input.testRunId!, "{testRunId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTestSuiteCommand
 */
export const se_DeleteTestSuiteCommand = async (
  input: DeleteTestSuiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testsuites/{testSuiteId}");
  b.p("testSuiteId", () => input.testSuiteId!, "{testSuiteId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTestCaseCommand
 */
export const se_GetTestCaseCommand = async (
  input: GetTestCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testcases/{testCaseId}");
  b.p("testCaseId", () => input.testCaseId!, "{testCaseId}", false);
  const query: any = map({
    [_tCV]: [() => input.testCaseVersion !== void 0, () => input[_tCV]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTestConfigurationCommand
 */
export const se_GetTestConfigurationCommand = async (
  input: GetTestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testconfigurations/{testConfigurationId}");
  b.p("testConfigurationId", () => input.testConfigurationId!, "{testConfigurationId}", false);
  const query: any = map({
    [_tCVe]: [() => input.testConfigurationVersion !== void 0, () => input[_tCVe]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTestRunStepCommand
 */
export const se_GetTestRunStepCommand = async (
  input: GetTestRunStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testruns/{testRunId}/steps/{stepName}");
  b.p("testRunId", () => input.testRunId!, "{testRunId}", false);
  b.p("stepName", () => input.stepName!, "{stepName}", false);
  const query: any = map({
    [_tCI]: [, input[_tCI]!],
    [_tSI]: [, input[_tSI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTestSuiteCommand
 */
export const se_GetTestSuiteCommand = async (
  input: GetTestSuiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testsuites/{testSuiteId}");
  b.p("testSuiteId", () => input.testSuiteId!, "{testSuiteId}", false);
  const query: any = map({
    [_tSV]: [() => input.testSuiteVersion !== void 0, () => input[_tSV]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTestCasesCommand
 */
export const se_ListTestCasesCommand = async (
  input: ListTestCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testcases");
  const query: any = map({
    [_tCIe]: [() => input.testCaseIds !== void 0, () => input[_tCIe]! || []],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTestConfigurationsCommand
 */
export const se_ListTestConfigurationsCommand = async (
  input: ListTestConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testconfigurations");
  const query: any = map({
    [_tCIes]: [() => input.testConfigurationIds !== void 0, () => input[_tCIes]! || []],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTestRunsCommand
 */
export const se_ListTestRunsCommand = async (
  input: ListTestRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testruns");
  const query: any = map({
    [_tSI]: [, input[_tSI]!],
    [_tI]: [() => input.testRunIds !== void 0, () => input[_tRI]! || []],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTestRunStepsCommand
 */
export const se_ListTestRunStepsCommand = async (
  input: ListTestRunStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testruns/{testRunId}/steps");
  b.p("testRunId", () => input.testRunId!, "{testRunId}", false);
  const query: any = map({
    [_tCI]: [, input[_tCI]!],
    [_tSI]: [, input[_tSI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTestRunTestCasesCommand
 */
export const se_ListTestRunTestCasesCommand = async (
  input: ListTestRunTestCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testruns/{testRunId}/testcases");
  b.p("testRunId", () => input.testRunId!, "{testRunId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTestSuitesCommand
 */
export const se_ListTestSuitesCommand = async (
  input: ListTestSuitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/testsuites");
  const query: any = map({
    [_tSIe]: [() => input.testSuiteIds !== void 0, () => input[_tSIe]! || []],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTestRunCommand
 */
export const se_StartTestRunCommand = async (
  input: StartTestRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/testrun");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
      testConfigurationId: [],
      testSuiteId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTestCaseCommand
 */
export const se_UpdateTestCaseCommand = async (
  input: UpdateTestCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/testcases/{testCaseId}");
  b.p("testCaseId", () => input.testCaseId!, "{testCaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      steps: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTestConfigurationCommand
 */
export const se_UpdateTestConfigurationCommand = async (
  input: UpdateTestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/testconfigurations/{testConfigurationId}");
  b.p("testConfigurationId", () => input.testConfigurationId!, "{testConfigurationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      properties: (_) => _json(_),
      resources: (_) => _json(_),
      serviceSettings: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTestSuiteCommand
 */
export const se_UpdateTestSuiteCommand = async (
  input: UpdateTestSuiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/testsuites/{testSuiteId}");
  b.p("testSuiteId", () => input.testSuiteId!, "{testSuiteId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      afterSteps: (_) => _json(_),
      beforeSteps: (_) => _json(_),
      description: [],
      testCases: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateTestCaseCommand
 */
export const de_CreateTestCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestCaseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testCaseId: __expectString,
    testCaseVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTestConfigurationCommand
 */
export const de_CreateTestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testConfigurationId: __expectString,
    testConfigurationVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTestSuiteCommand
 */
export const de_CreateTestSuiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestSuiteCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testSuiteId: __expectString,
    testSuiteVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTestCaseCommand
 */
export const de_DeleteTestCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestCaseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTestConfigurationCommand
 */
export const de_DeleteTestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTestRunCommand
 */
export const de_DeleteTestRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestRunCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTestSuiteCommand
 */
export const de_DeleteTestSuiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestSuiteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetTestCaseCommand
 */
export const de_GetTestCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestVersion: _json,
    name: __expectString,
    status: __expectString,
    statusReason: __expectString,
    steps: _json,
    tags: _json,
    testCaseArn: __expectString,
    testCaseId: __expectString,
    testCaseVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTestConfigurationCommand
 */
export const de_GetTestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestVersion: _json,
    name: __expectString,
    properties: _json,
    resources: _json,
    serviceSettings: _json,
    status: __expectString,
    statusReason: __expectString,
    tags: _json,
    testConfigurationArn: __expectString,
    testConfigurationId: __expectString,
    testConfigurationVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTestRunStepCommand
 */
export const de_GetTestRunStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestRunStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    afterStep: __expectBoolean,
    beforeStep: __expectBoolean,
    runEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    runStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    stepName: __expectString,
    stepRunSummary: (_) => _json(__expectUnion(_)),
    testCaseId: __expectString,
    testCaseVersion: __expectInt32,
    testRunId: __expectString,
    testSuiteId: __expectString,
    testSuiteVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTestSuiteCommand
 */
export const de_GetTestSuiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestSuiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    afterSteps: _json,
    beforeSteps: _json,
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestVersion: _json,
    name: __expectString,
    status: __expectString,
    statusReason: __expectString,
    tags: _json,
    testCases: (_) => _json(__expectUnion(_)),
    testSuiteArn: __expectString,
    testSuiteId: __expectString,
    testSuiteVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestCasesCommand
 */
export const de_ListTestCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testCases: (_) => de_TestCaseSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestConfigurationsCommand
 */
export const de_ListTestConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testConfigurations: (_) => de_TestConfigurationList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestRunsCommand
 */
export const de_ListTestRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testRuns: (_) => de_TestRunSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestRunStepsCommand
 */
export const de_ListTestRunStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestRunStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testRunSteps: (_) => de_TestRunStepSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestRunTestCasesCommand
 */
export const de_ListTestRunTestCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestRunTestCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testRunTestCases: (_) => de_TestCaseRunSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestSuitesCommand
 */
export const de_ListTestSuitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestSuitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testSuites: (_) => de_TestSuiteList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTestRunCommand
 */
export const de_StartTestRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testRunId: __expectString,
    testRunStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTestCaseCommand
 */
export const de_UpdateTestCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testCaseId: __expectString,
    testCaseVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTestConfigurationCommand
 */
export const de_UpdateTestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testConfigurationId: __expectString,
    testConfigurationVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTestSuiteCommand
 */
export const de_UpdateTestSuiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestSuiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testSuiteId: __expectString,
    testSuiteVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.apptest#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.apptest#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.apptest#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apptest#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.apptest#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.apptest#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apptest#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Batch omitted.

// se_BatchJobParameters omitted.

// se_CloudFormation omitted.

// se_CloudFormationAction omitted.

// se_CompareAction omitted.

// se_DatabaseCDC omitted.

// se_DataSet omitted.

// se_DataSetList omitted.

// se_ExportDataSetNames omitted.

// se_FileMetadata omitted.

// se_Input omitted.

// se_InputFile omitted.

// se_M2ManagedActionProperties omitted.

// se_M2ManagedApplication omitted.

// se_M2ManagedApplicationAction omitted.

// se_M2NonManagedApplication omitted.

// se_M2NonManagedApplicationAction omitted.

// se_MainframeAction omitted.

// se_MainframeActionProperties omitted.

// se_MainframeActionType omitted.

// se_Output omitted.

// se_OutputFile omitted.

// se_Properties omitted.

// se_Resource omitted.

// se_ResourceAction omitted.

// se_ResourceList omitted.

// se_ResourceType omitted.

// se_Script omitted.

// se_ServiceSettings omitted.

// se_SourceDatabaseMetadata omitted.

// se_Step omitted.

// se_StepAction omitted.

// se_StepList omitted.

// se_TagMap omitted.

// se_TargetDatabaseMetadata omitted.

// se_TestCaseList omitted.

// se_TestCases omitted.

// se_TN3270 omitted.

// de_Batch omitted.

// de_BatchJobParameters omitted.

// de_BatchStepInput omitted.

// de_BatchStepOutput omitted.

// de_BatchSummary omitted.

// de_CloudFormation omitted.

// de_CloudFormationAction omitted.

// de_CloudFormationStepSummary omitted.

// de_CompareAction omitted.

// de_CompareActionSummary omitted.

// de_CompareDatabaseCDCStepInput omitted.

// de_CompareDatabaseCDCStepOutput omitted.

// de_CompareDatabaseCDCSummary omitted.

// de_CompareDataSetsStepInput omitted.

// de_CompareDataSetsStepOutput omitted.

// de_CompareDataSetsSummary omitted.

// de_CompareFileType omitted.

// de_CreateCloudFormationStepInput omitted.

// de_CreateCloudFormationStepOutput omitted.

// de_CreateCloudFormationSummary omitted.

// de_DatabaseCDC omitted.

// de_DataSet omitted.

// de_DataSetList omitted.

// de_DeleteCloudFormationStepInput omitted.

// de_DeleteCloudFormationStepOutput omitted.

// de_DeleteCloudFormationSummary omitted.

// de_ExportDataSetNames omitted.

// de_File omitted.

// de_FileMetadata omitted.

// de_Input omitted.

// de_InputFile omitted.

// de_M2ManagedActionProperties omitted.

// de_M2ManagedApplication omitted.

// de_M2ManagedApplicationAction omitted.

// de_M2ManagedApplicationStepInput omitted.

// de_M2ManagedApplicationStepOutput omitted.

// de_M2ManagedApplicationStepSummary omitted.

// de_M2ManagedApplicationSummary omitted.

// de_M2NonManagedApplication omitted.

// de_M2NonManagedApplicationAction omitted.

// de_M2NonManagedApplicationStepInput omitted.

// de_M2NonManagedApplicationStepOutput omitted.

// de_M2NonManagedApplicationStepSummary omitted.

// de_M2NonManagedApplicationSummary omitted.

// de_MainframeAction omitted.

// de_MainframeActionProperties omitted.

// de_MainframeActionSummary omitted.

// de_MainframeActionType omitted.

// de_MainframeResourceSummary omitted.

// de_Output omitted.

// de_OutputFile omitted.

// de_Properties omitted.

// de_Resource omitted.

// de_ResourceAction omitted.

// de_ResourceActionSummary omitted.

// de_ResourceList omitted.

// de_ResourceType omitted.

// de_Script omitted.

// de_ScriptSummary omitted.

// de_ServiceSettings omitted.

// de_SourceDatabaseMetadata omitted.

// de_Step omitted.

// de_StepAction omitted.

// de_StepList omitted.

// de_StepRunSummary omitted.

// de_TagMap omitted.

// de_TargetDatabaseMetadata omitted.

// de_TestCaseLatestVersion omitted.

// de_TestCaseList omitted.

/**
 * deserializeAws_restJson1TestCaseRunSummary
 */
const de_TestCaseRunSummary = (output: any, context: __SerdeContext): TestCaseRunSummary => {
  return take(output, {
    runEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    runStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    testCaseId: __expectString,
    testCaseVersion: __expectInt32,
    testRunId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TestCaseRunSummaryList
 */
const de_TestCaseRunSummaryList = (output: any, context: __SerdeContext): TestCaseRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestCaseRunSummary(entry, context);
    });
  return retVal;
};

// de_TestCases omitted.

/**
 * deserializeAws_restJson1TestCaseSummary
 */
const de_TestCaseSummary = (output: any, context: __SerdeContext): TestCaseSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestVersion: __expectInt32,
    name: __expectString,
    status: __expectString,
    statusReason: __expectString,
    testCaseArn: __expectString,
    testCaseId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TestCaseSummaryList
 */
const de_TestCaseSummaryList = (output: any, context: __SerdeContext): TestCaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestCaseSummary(entry, context);
    });
  return retVal;
};

// de_TestConfigurationLatestVersion omitted.

/**
 * deserializeAws_restJson1TestConfigurationList
 */
const de_TestConfigurationList = (output: any, context: __SerdeContext): TestConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TestConfigurationSummary
 */
const de_TestConfigurationSummary = (output: any, context: __SerdeContext): TestConfigurationSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestVersion: __expectInt32,
    name: __expectString,
    status: __expectString,
    statusReason: __expectString,
    testConfigurationArn: __expectString,
    testConfigurationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TestRunStepSummary
 */
const de_TestRunStepSummary = (output: any, context: __SerdeContext): TestRunStepSummary => {
  return take(output, {
    afterStep: __expectBoolean,
    beforeStep: __expectBoolean,
    runEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    runStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    stepName: __expectString,
    testCaseId: __expectString,
    testCaseVersion: __expectInt32,
    testRunId: __expectString,
    testSuiteId: __expectString,
    testSuiteVersion: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1TestRunStepSummaryList
 */
const de_TestRunStepSummaryList = (output: any, context: __SerdeContext): TestRunStepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestRunStepSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TestRunSummary
 */
const de_TestRunSummary = (output: any, context: __SerdeContext): TestRunSummary => {
  return take(output, {
    runEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    runStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    testConfigurationId: __expectString,
    testConfigurationVersion: __expectInt32,
    testRunArn: __expectString,
    testRunId: __expectString,
    testSuiteId: __expectString,
    testSuiteVersion: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1TestRunSummaryList
 */
const de_TestRunSummaryList = (output: any, context: __SerdeContext): TestRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestRunSummary(entry, context);
    });
  return retVal;
};

// de_TestSuiteLatestVersion omitted.

/**
 * deserializeAws_restJson1TestSuiteList
 */
const de_TestSuiteList = (output: any, context: __SerdeContext): TestSuiteSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestSuiteSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TestSuiteSummary
 */
const de_TestSuiteSummary = (output: any, context: __SerdeContext): TestSuiteSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestVersion: __expectInt32,
    name: __expectString,
    status: __expectString,
    statusReason: __expectString,
    testSuiteArn: __expectString,
    testSuiteId: __expectString,
  }) as any;
};

// de_TN3270 omitted.

// de_TN3270StepInput omitted.

// de_TN3270StepOutput omitted.

// de_TN3270Summary omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _mR = "maxResults";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tCI = "testCaseId";
const _tCIe = "testCaseIds";
const _tCIes = "testConfigurationIds";
const _tCV = "testCaseVersion";
const _tCVe = "testConfigurationVersion";
const _tI = "testrunIds";
const _tK = "tagKeys";
const _tRI = "testRunIds";
const _tSI = "testSuiteId";
const _tSIe = "testSuiteIds";
const _tSV = "testSuiteVersion";
