// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppTestClient, AppTestClientConfig } from "./AppTestClient";
import {
  CreateTestCaseCommand,
  CreateTestCaseCommandInput,
  CreateTestCaseCommandOutput,
} from "./commands/CreateTestCaseCommand";
import {
  CreateTestConfigurationCommand,
  CreateTestConfigurationCommandInput,
  CreateTestConfigurationCommandOutput,
} from "./commands/CreateTestConfigurationCommand";
import {
  CreateTestSuiteCommand,
  CreateTestSuiteCommandInput,
  CreateTestSuiteCommandOutput,
} from "./commands/CreateTestSuiteCommand";
import {
  DeleteTestCaseCommand,
  DeleteTestCaseCommandInput,
  DeleteTestCaseCommandOutput,
} from "./commands/DeleteTestCaseCommand";
import {
  DeleteTestConfigurationCommand,
  DeleteTestConfigurationCommandInput,
  DeleteTestConfigurationCommandOutput,
} from "./commands/DeleteTestConfigurationCommand";
import {
  DeleteTestRunCommand,
  DeleteTestRunCommandInput,
  DeleteTestRunCommandOutput,
} from "./commands/DeleteTestRunCommand";
import {
  DeleteTestSuiteCommand,
  DeleteTestSuiteCommandInput,
  DeleteTestSuiteCommandOutput,
} from "./commands/DeleteTestSuiteCommand";
import { GetTestCaseCommand, GetTestCaseCommandInput, GetTestCaseCommandOutput } from "./commands/GetTestCaseCommand";
import {
  GetTestConfigurationCommand,
  GetTestConfigurationCommandInput,
  GetTestConfigurationCommandOutput,
} from "./commands/GetTestConfigurationCommand";
import {
  GetTestRunStepCommand,
  GetTestRunStepCommandInput,
  GetTestRunStepCommandOutput,
} from "./commands/GetTestRunStepCommand";
import {
  GetTestSuiteCommand,
  GetTestSuiteCommandInput,
  GetTestSuiteCommandOutput,
} from "./commands/GetTestSuiteCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestCasesCommand,
  ListTestCasesCommandInput,
  ListTestCasesCommandOutput,
} from "./commands/ListTestCasesCommand";
import {
  ListTestConfigurationsCommand,
  ListTestConfigurationsCommandInput,
  ListTestConfigurationsCommandOutput,
} from "./commands/ListTestConfigurationsCommand";
import {
  ListTestRunsCommand,
  ListTestRunsCommandInput,
  ListTestRunsCommandOutput,
} from "./commands/ListTestRunsCommand";
import {
  ListTestRunStepsCommand,
  ListTestRunStepsCommandInput,
  ListTestRunStepsCommandOutput,
} from "./commands/ListTestRunStepsCommand";
import {
  ListTestRunTestCasesCommand,
  ListTestRunTestCasesCommandInput,
  ListTestRunTestCasesCommandOutput,
} from "./commands/ListTestRunTestCasesCommand";
import {
  ListTestSuitesCommand,
  ListTestSuitesCommandInput,
  ListTestSuitesCommandOutput,
} from "./commands/ListTestSuitesCommand";
import {
  StartTestRunCommand,
  StartTestRunCommandInput,
  StartTestRunCommandOutput,
} from "./commands/StartTestRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateTestCaseCommand,
  UpdateTestCaseCommandInput,
  UpdateTestCaseCommandOutput,
} from "./commands/UpdateTestCaseCommand";
import {
  UpdateTestConfigurationCommand,
  UpdateTestConfigurationCommandInput,
  UpdateTestConfigurationCommandOutput,
} from "./commands/UpdateTestConfigurationCommand";
import {
  UpdateTestSuiteCommand,
  UpdateTestSuiteCommandInput,
  UpdateTestSuiteCommandOutput,
} from "./commands/UpdateTestSuiteCommand";

const commands = {
  CreateTestCaseCommand,
  CreateTestConfigurationCommand,
  CreateTestSuiteCommand,
  DeleteTestCaseCommand,
  DeleteTestConfigurationCommand,
  DeleteTestRunCommand,
  DeleteTestSuiteCommand,
  GetTestCaseCommand,
  GetTestConfigurationCommand,
  GetTestRunStepCommand,
  GetTestSuiteCommand,
  ListTagsForResourceCommand,
  ListTestCasesCommand,
  ListTestConfigurationsCommand,
  ListTestRunsCommand,
  ListTestRunStepsCommand,
  ListTestRunTestCasesCommand,
  ListTestSuitesCommand,
  StartTestRunCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateTestCaseCommand,
  UpdateTestConfigurationCommand,
  UpdateTestSuiteCommand,
};

export interface AppTest {
  /**
   * @see {@link CreateTestCaseCommand}
   */
  createTestCase(
    args: CreateTestCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestCaseCommandOutput>;
  createTestCase(args: CreateTestCaseCommandInput, cb: (err: any, data?: CreateTestCaseCommandOutput) => void): void;
  createTestCase(
    args: CreateTestCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTestConfigurationCommand}
   */
  createTestConfiguration(
    args: CreateTestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestConfigurationCommandOutput>;
  createTestConfiguration(
    args: CreateTestConfigurationCommandInput,
    cb: (err: any, data?: CreateTestConfigurationCommandOutput) => void
  ): void;
  createTestConfiguration(
    args: CreateTestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTestSuiteCommand}
   */
  createTestSuite(
    args: CreateTestSuiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestSuiteCommandOutput>;
  createTestSuite(args: CreateTestSuiteCommandInput, cb: (err: any, data?: CreateTestSuiteCommandOutput) => void): void;
  createTestSuite(
    args: CreateTestSuiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestSuiteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTestCaseCommand}
   */
  deleteTestCase(
    args: DeleteTestCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTestCaseCommandOutput>;
  deleteTestCase(args: DeleteTestCaseCommandInput, cb: (err: any, data?: DeleteTestCaseCommandOutput) => void): void;
  deleteTestCase(
    args: DeleteTestCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTestCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTestConfigurationCommand}
   */
  deleteTestConfiguration(
    args: DeleteTestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTestConfigurationCommandOutput>;
  deleteTestConfiguration(
    args: DeleteTestConfigurationCommandInput,
    cb: (err: any, data?: DeleteTestConfigurationCommandOutput) => void
  ): void;
  deleteTestConfiguration(
    args: DeleteTestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTestRunCommand}
   */
  deleteTestRun(args: DeleteTestRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTestRunCommandOutput>;
  deleteTestRun(args: DeleteTestRunCommandInput, cb: (err: any, data?: DeleteTestRunCommandOutput) => void): void;
  deleteTestRun(
    args: DeleteTestRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTestRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTestSuiteCommand}
   */
  deleteTestSuite(
    args: DeleteTestSuiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTestSuiteCommandOutput>;
  deleteTestSuite(args: DeleteTestSuiteCommandInput, cb: (err: any, data?: DeleteTestSuiteCommandOutput) => void): void;
  deleteTestSuite(
    args: DeleteTestSuiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTestSuiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestCaseCommand}
   */
  getTestCase(args: GetTestCaseCommandInput, options?: __HttpHandlerOptions): Promise<GetTestCaseCommandOutput>;
  getTestCase(args: GetTestCaseCommandInput, cb: (err: any, data?: GetTestCaseCommandOutput) => void): void;
  getTestCase(
    args: GetTestCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestConfigurationCommand}
   */
  getTestConfiguration(
    args: GetTestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestConfigurationCommandOutput>;
  getTestConfiguration(
    args: GetTestConfigurationCommandInput,
    cb: (err: any, data?: GetTestConfigurationCommandOutput) => void
  ): void;
  getTestConfiguration(
    args: GetTestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestRunStepCommand}
   */
  getTestRunStep(
    args: GetTestRunStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestRunStepCommandOutput>;
  getTestRunStep(args: GetTestRunStepCommandInput, cb: (err: any, data?: GetTestRunStepCommandOutput) => void): void;
  getTestRunStep(
    args: GetTestRunStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestRunStepCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestSuiteCommand}
   */
  getTestSuite(args: GetTestSuiteCommandInput, options?: __HttpHandlerOptions): Promise<GetTestSuiteCommandOutput>;
  getTestSuite(args: GetTestSuiteCommandInput, cb: (err: any, data?: GetTestSuiteCommandOutput) => void): void;
  getTestSuite(
    args: GetTestSuiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestSuiteCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestCasesCommand}
   */
  listTestCases(): Promise<ListTestCasesCommandOutput>;
  listTestCases(args: ListTestCasesCommandInput, options?: __HttpHandlerOptions): Promise<ListTestCasesCommandOutput>;
  listTestCases(args: ListTestCasesCommandInput, cb: (err: any, data?: ListTestCasesCommandOutput) => void): void;
  listTestCases(
    args: ListTestCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestConfigurationsCommand}
   */
  listTestConfigurations(): Promise<ListTestConfigurationsCommandOutput>;
  listTestConfigurations(
    args: ListTestConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestConfigurationsCommandOutput>;
  listTestConfigurations(
    args: ListTestConfigurationsCommandInput,
    cb: (err: any, data?: ListTestConfigurationsCommandOutput) => void
  ): void;
  listTestConfigurations(
    args: ListTestConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestRunsCommand}
   */
  listTestRuns(): Promise<ListTestRunsCommandOutput>;
  listTestRuns(args: ListTestRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestRunsCommandOutput>;
  listTestRuns(args: ListTestRunsCommandInput, cb: (err: any, data?: ListTestRunsCommandOutput) => void): void;
  listTestRuns(
    args: ListTestRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestRunStepsCommand}
   */
  listTestRunSteps(
    args: ListTestRunStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestRunStepsCommandOutput>;
  listTestRunSteps(
    args: ListTestRunStepsCommandInput,
    cb: (err: any, data?: ListTestRunStepsCommandOutput) => void
  ): void;
  listTestRunSteps(
    args: ListTestRunStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestRunStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestRunTestCasesCommand}
   */
  listTestRunTestCases(
    args: ListTestRunTestCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestRunTestCasesCommandOutput>;
  listTestRunTestCases(
    args: ListTestRunTestCasesCommandInput,
    cb: (err: any, data?: ListTestRunTestCasesCommandOutput) => void
  ): void;
  listTestRunTestCases(
    args: ListTestRunTestCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestRunTestCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestSuitesCommand}
   */
  listTestSuites(): Promise<ListTestSuitesCommandOutput>;
  listTestSuites(
    args: ListTestSuitesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestSuitesCommandOutput>;
  listTestSuites(args: ListTestSuitesCommandInput, cb: (err: any, data?: ListTestSuitesCommandOutput) => void): void;
  listTestSuites(
    args: ListTestSuitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestSuitesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTestRunCommand}
   */
  startTestRun(args: StartTestRunCommandInput, options?: __HttpHandlerOptions): Promise<StartTestRunCommandOutput>;
  startTestRun(args: StartTestRunCommandInput, cb: (err: any, data?: StartTestRunCommandOutput) => void): void;
  startTestRun(
    args: StartTestRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTestRunCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTestCaseCommand}
   */
  updateTestCase(
    args: UpdateTestCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTestCaseCommandOutput>;
  updateTestCase(args: UpdateTestCaseCommandInput, cb: (err: any, data?: UpdateTestCaseCommandOutput) => void): void;
  updateTestCase(
    args: UpdateTestCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTestCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTestConfigurationCommand}
   */
  updateTestConfiguration(
    args: UpdateTestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTestConfigurationCommandOutput>;
  updateTestConfiguration(
    args: UpdateTestConfigurationCommandInput,
    cb: (err: any, data?: UpdateTestConfigurationCommandOutput) => void
  ): void;
  updateTestConfiguration(
    args: UpdateTestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTestSuiteCommand}
   */
  updateTestSuite(
    args: UpdateTestSuiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTestSuiteCommandOutput>;
  updateTestSuite(args: UpdateTestSuiteCommandInput, cb: (err: any, data?: UpdateTestSuiteCommandOutput) => void): void;
  updateTestSuite(
    args: UpdateTestSuiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTestSuiteCommandOutput) => void
  ): void;
}

/**
 * <p>AWS Mainframe Modernization Application Testing provides tools and resources for automated functional equivalence testing for your migration projects.</p>
 * @public
 */
export class AppTest extends AppTestClient implements AppTest {}
createAggregatedClient(commands, AppTest);
