// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudFormationClient, CloudFormationClientConfig } from "./CloudFormationClient";
import {
  ActivateOrganizationsAccessCommand,
  ActivateOrganizationsAccessCommandInput,
  ActivateOrganizationsAccessCommandOutput,
} from "./commands/ActivateOrganizationsAccessCommand";
import {
  ActivateTypeCommand,
  ActivateTypeCommandInput,
  ActivateTypeCommandOutput,
} from "./commands/ActivateTypeCommand";
import {
  BatchDescribeTypeConfigurationsCommand,
  BatchDescribeTypeConfigurationsCommandInput,
  BatchDescribeTypeConfigurationsCommandOutput,
} from "./commands/BatchDescribeTypeConfigurationsCommand";
import {
  CancelUpdateStackCommand,
  CancelUpdateStackCommandInput,
  CancelUpdateStackCommandOutput,
} from "./commands/CancelUpdateStackCommand";
import {
  ContinueUpdateRollbackCommand,
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
} from "./commands/ContinueUpdateRollbackCommand";
import {
  CreateChangeSetCommand,
  CreateChangeSetCommandInput,
  CreateChangeSetCommandOutput,
} from "./commands/CreateChangeSetCommand";
import { CreateStackCommand, CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateStackInstancesCommand,
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput,
} from "./commands/CreateStackInstancesCommand";
import {
  CreateStackSetCommand,
  CreateStackSetCommandInput,
  CreateStackSetCommandOutput,
} from "./commands/CreateStackSetCommand";
import {
  DeactivateOrganizationsAccessCommand,
  DeactivateOrganizationsAccessCommandInput,
  DeactivateOrganizationsAccessCommandOutput,
} from "./commands/DeactivateOrganizationsAccessCommand";
import {
  DeactivateTypeCommand,
  DeactivateTypeCommandInput,
  DeactivateTypeCommandOutput,
} from "./commands/DeactivateTypeCommand";
import {
  DeleteChangeSetCommand,
  DeleteChangeSetCommandInput,
  DeleteChangeSetCommandOutput,
} from "./commands/DeleteChangeSetCommand";
import { DeleteStackCommand, DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteStackInstancesCommand,
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
} from "./commands/DeleteStackInstancesCommand";
import {
  DeleteStackSetCommand,
  DeleteStackSetCommandInput,
  DeleteStackSetCommandOutput,
} from "./commands/DeleteStackSetCommand";
import {
  DeregisterTypeCommand,
  DeregisterTypeCommandInput,
  DeregisterTypeCommandOutput,
} from "./commands/DeregisterTypeCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeChangeSetCommand,
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput,
} from "./commands/DescribeChangeSetCommand";
import {
  DescribeChangeSetHooksCommand,
  DescribeChangeSetHooksCommandInput,
  DescribeChangeSetHooksCommandOutput,
} from "./commands/DescribeChangeSetHooksCommand";
import {
  DescribeOrganizationsAccessCommand,
  DescribeOrganizationsAccessCommandInput,
  DescribeOrganizationsAccessCommandOutput,
} from "./commands/DescribeOrganizationsAccessCommand";
import {
  DescribePublisherCommand,
  DescribePublisherCommandInput,
  DescribePublisherCommandOutput,
} from "./commands/DescribePublisherCommand";
import {
  DescribeStackDriftDetectionStatusCommand,
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
} from "./commands/DescribeStackDriftDetectionStatusCommand";
import {
  DescribeStackEventsCommand,
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "./commands/DescribeStackEventsCommand";
import {
  DescribeStackInstanceCommand,
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput,
} from "./commands/DescribeStackInstanceCommand";
import {
  DescribeStackResourceCommand,
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput,
} from "./commands/DescribeStackResourceCommand";
import {
  DescribeStackResourceDriftsCommand,
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
} from "./commands/DescribeStackResourceDriftsCommand";
import {
  DescribeStackResourcesCommand,
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
} from "./commands/DescribeStackResourcesCommand";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "./commands/DescribeStacksCommand";
import {
  DescribeStackSetCommand,
  DescribeStackSetCommandInput,
  DescribeStackSetCommandOutput,
} from "./commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommand,
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
} from "./commands/DescribeStackSetOperationCommand";
import {
  DescribeTypeCommand,
  DescribeTypeCommandInput,
  DescribeTypeCommandOutput,
} from "./commands/DescribeTypeCommand";
import {
  DescribeTypeRegistrationCommand,
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
} from "./commands/DescribeTypeRegistrationCommand";
import {
  DetectStackDriftCommand,
  DetectStackDriftCommandInput,
  DetectStackDriftCommandOutput,
} from "./commands/DetectStackDriftCommand";
import {
  DetectStackResourceDriftCommand,
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
} from "./commands/DetectStackResourceDriftCommand";
import {
  DetectStackSetDriftCommand,
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput,
} from "./commands/DetectStackSetDriftCommand";
import {
  EstimateTemplateCostCommand,
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
} from "./commands/EstimateTemplateCostCommand";
import {
  ExecuteChangeSetCommand,
  ExecuteChangeSetCommandInput,
  ExecuteChangeSetCommandOutput,
} from "./commands/ExecuteChangeSetCommand";
import {
  GetStackPolicyCommand,
  GetStackPolicyCommandInput,
  GetStackPolicyCommandOutput,
} from "./commands/GetStackPolicyCommand";
import { GetTemplateCommand, GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import {
  GetTemplateSummaryCommand,
  GetTemplateSummaryCommandInput,
  GetTemplateSummaryCommandOutput,
} from "./commands/GetTemplateSummaryCommand";
import {
  ImportStacksToStackSetCommand,
  ImportStacksToStackSetCommandInput,
  ImportStacksToStackSetCommandOutput,
} from "./commands/ImportStacksToStackSetCommand";
import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "./commands/ListChangeSetsCommand";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import {
  ListStackInstancesCommand,
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput,
} from "./commands/ListStackInstancesCommand";
import {
  ListStackResourcesCommand,
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput,
} from "./commands/ListStackResourcesCommand";
import { ListStacksCommand, ListStacksCommandInput, ListStacksCommandOutput } from "./commands/ListStacksCommand";
import {
  ListStackSetOperationResultsCommand,
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "./commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommand,
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "./commands/ListStackSetOperationsCommand";
import {
  ListStackSetsCommand,
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput,
} from "./commands/ListStackSetsCommand";
import {
  ListTypeRegistrationsCommand,
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "./commands/ListTypeRegistrationsCommand";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import {
  ListTypeVersionsCommand,
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput,
} from "./commands/ListTypeVersionsCommand";
import { PublishTypeCommand, PublishTypeCommandInput, PublishTypeCommandOutput } from "./commands/PublishTypeCommand";
import {
  RecordHandlerProgressCommand,
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
} from "./commands/RecordHandlerProgressCommand";
import {
  RegisterPublisherCommand,
  RegisterPublisherCommandInput,
  RegisterPublisherCommandOutput,
} from "./commands/RegisterPublisherCommand";
import {
  RegisterTypeCommand,
  RegisterTypeCommandInput,
  RegisterTypeCommandOutput,
} from "./commands/RegisterTypeCommand";
import {
  RollbackStackCommand,
  RollbackStackCommandInput,
  RollbackStackCommandOutput,
} from "./commands/RollbackStackCommand";
import {
  SetStackPolicyCommand,
  SetStackPolicyCommandInput,
  SetStackPolicyCommandOutput,
} from "./commands/SetStackPolicyCommand";
import {
  SetTypeConfigurationCommand,
  SetTypeConfigurationCommandInput,
  SetTypeConfigurationCommandOutput,
} from "./commands/SetTypeConfigurationCommand";
import {
  SetTypeDefaultVersionCommand,
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
} from "./commands/SetTypeDefaultVersionCommand";
import {
  SignalResourceCommand,
  SignalResourceCommandInput,
  SignalResourceCommandOutput,
} from "./commands/SignalResourceCommand";
import {
  StopStackSetOperationCommand,
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
} from "./commands/StopStackSetOperationCommand";
import { TestTypeCommand, TestTypeCommandInput, TestTypeCommandOutput } from "./commands/TestTypeCommand";
import { UpdateStackCommand, UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  UpdateStackInstancesCommand,
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput,
} from "./commands/UpdateStackInstancesCommand";
import {
  UpdateStackSetCommand,
  UpdateStackSetCommandInput,
  UpdateStackSetCommandOutput,
} from "./commands/UpdateStackSetCommand";
import {
  UpdateTerminationProtectionCommand,
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
} from "./commands/UpdateTerminationProtectionCommand";
import {
  ValidateTemplateCommand,
  ValidateTemplateCommandInput,
  ValidateTemplateCommandOutput,
} from "./commands/ValidateTemplateCommand";

const commands = {
  ActivateOrganizationsAccessCommand,
  ActivateTypeCommand,
  BatchDescribeTypeConfigurationsCommand,
  CancelUpdateStackCommand,
  ContinueUpdateRollbackCommand,
  CreateChangeSetCommand,
  CreateStackCommand,
  CreateStackInstancesCommand,
  CreateStackSetCommand,
  DeactivateOrganizationsAccessCommand,
  DeactivateTypeCommand,
  DeleteChangeSetCommand,
  DeleteStackCommand,
  DeleteStackInstancesCommand,
  DeleteStackSetCommand,
  DeregisterTypeCommand,
  DescribeAccountLimitsCommand,
  DescribeChangeSetCommand,
  DescribeChangeSetHooksCommand,
  DescribeOrganizationsAccessCommand,
  DescribePublisherCommand,
  DescribeStackDriftDetectionStatusCommand,
  DescribeStackEventsCommand,
  DescribeStackInstanceCommand,
  DescribeStackResourceCommand,
  DescribeStackResourceDriftsCommand,
  DescribeStackResourcesCommand,
  DescribeStacksCommand,
  DescribeStackSetCommand,
  DescribeStackSetOperationCommand,
  DescribeTypeCommand,
  DescribeTypeRegistrationCommand,
  DetectStackDriftCommand,
  DetectStackResourceDriftCommand,
  DetectStackSetDriftCommand,
  EstimateTemplateCostCommand,
  ExecuteChangeSetCommand,
  GetStackPolicyCommand,
  GetTemplateCommand,
  GetTemplateSummaryCommand,
  ImportStacksToStackSetCommand,
  ListChangeSetsCommand,
  ListExportsCommand,
  ListImportsCommand,
  ListStackInstancesCommand,
  ListStackResourcesCommand,
  ListStacksCommand,
  ListStackSetOperationResultsCommand,
  ListStackSetOperationsCommand,
  ListStackSetsCommand,
  ListTypeRegistrationsCommand,
  ListTypesCommand,
  ListTypeVersionsCommand,
  PublishTypeCommand,
  RecordHandlerProgressCommand,
  RegisterPublisherCommand,
  RegisterTypeCommand,
  RollbackStackCommand,
  SetStackPolicyCommand,
  SetTypeConfigurationCommand,
  SetTypeDefaultVersionCommand,
  SignalResourceCommand,
  StopStackSetOperationCommand,
  TestTypeCommand,
  UpdateStackCommand,
  UpdateStackInstancesCommand,
  UpdateStackSetCommand,
  UpdateTerminationProtectionCommand,
  ValidateTemplateCommand,
};

export interface CloudFormation {
  /**
   * @see {@link ActivateOrganizationsAccessCommand}
   */
  activateOrganizationsAccess(
    args: ActivateOrganizationsAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateOrganizationsAccessCommandOutput>;
  activateOrganizationsAccess(
    args: ActivateOrganizationsAccessCommandInput,
    cb: (err: any, data?: ActivateOrganizationsAccessCommandOutput) => void
  ): void;
  activateOrganizationsAccess(
    args: ActivateOrganizationsAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateOrganizationsAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ActivateTypeCommand}
   */
  activateType(args: ActivateTypeCommandInput, options?: __HttpHandlerOptions): Promise<ActivateTypeCommandOutput>;
  activateType(args: ActivateTypeCommandInput, cb: (err: any, data?: ActivateTypeCommandOutput) => void): void;
  activateType(
    args: ActivateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDescribeTypeConfigurationsCommand}
   */
  batchDescribeTypeConfigurations(
    args: BatchDescribeTypeConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeTypeConfigurationsCommandOutput>;
  batchDescribeTypeConfigurations(
    args: BatchDescribeTypeConfigurationsCommandInput,
    cb: (err: any, data?: BatchDescribeTypeConfigurationsCommandOutput) => void
  ): void;
  batchDescribeTypeConfigurations(
    args: BatchDescribeTypeConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeTypeConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelUpdateStackCommand}
   */
  cancelUpdateStack(
    args: CancelUpdateStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelUpdateStackCommandOutput>;
  cancelUpdateStack(
    args: CancelUpdateStackCommandInput,
    cb: (err: any, data?: CancelUpdateStackCommandOutput) => void
  ): void;
  cancelUpdateStack(
    args: CancelUpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelUpdateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link ContinueUpdateRollbackCommand}
   */
  continueUpdateRollback(
    args: ContinueUpdateRollbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ContinueUpdateRollbackCommandOutput>;
  continueUpdateRollback(
    args: ContinueUpdateRollbackCommandInput,
    cb: (err: any, data?: ContinueUpdateRollbackCommandOutput) => void
  ): void;
  continueUpdateRollback(
    args: ContinueUpdateRollbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ContinueUpdateRollbackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChangeSetCommand}
   */
  createChangeSet(
    args: CreateChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChangeSetCommandOutput>;
  createChangeSet(args: CreateChangeSetCommandInput, cb: (err: any, data?: CreateChangeSetCommandOutput) => void): void;
  createChangeSet(
    args: CreateChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStackCommand}
   */
  createStack(args: CreateStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateStackCommandOutput>;
  createStack(args: CreateStackCommandInput, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
  createStack(
    args: CreateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStackInstancesCommand}
   */
  createStackInstances(
    args: CreateStackInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStackInstancesCommandOutput>;
  createStackInstances(
    args: CreateStackInstancesCommandInput,
    cb: (err: any, data?: CreateStackInstancesCommandOutput) => void
  ): void;
  createStackInstances(
    args: CreateStackInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStackSetCommand}
   */
  createStackSet(
    args: CreateStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStackSetCommandOutput>;
  createStackSet(args: CreateStackSetCommandInput, cb: (err: any, data?: CreateStackSetCommandOutput) => void): void;
  createStackSet(
    args: CreateStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateOrganizationsAccessCommand}
   */
  deactivateOrganizationsAccess(
    args: DeactivateOrganizationsAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateOrganizationsAccessCommandOutput>;
  deactivateOrganizationsAccess(
    args: DeactivateOrganizationsAccessCommandInput,
    cb: (err: any, data?: DeactivateOrganizationsAccessCommandOutput) => void
  ): void;
  deactivateOrganizationsAccess(
    args: DeactivateOrganizationsAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateOrganizationsAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateTypeCommand}
   */
  deactivateType(
    args: DeactivateTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateTypeCommandOutput>;
  deactivateType(args: DeactivateTypeCommandInput, cb: (err: any, data?: DeactivateTypeCommandOutput) => void): void;
  deactivateType(
    args: DeactivateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChangeSetCommand}
   */
  deleteChangeSet(
    args: DeleteChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChangeSetCommandOutput>;
  deleteChangeSet(args: DeleteChangeSetCommandInput, cb: (err: any, data?: DeleteChangeSetCommandOutput) => void): void;
  deleteChangeSet(
    args: DeleteChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStackCommand}
   */
  deleteStack(args: DeleteStackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStackCommandOutput>;
  deleteStack(args: DeleteStackCommandInput, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
  deleteStack(
    args: DeleteStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStackInstancesCommand}
   */
  deleteStackInstances(
    args: DeleteStackInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStackInstancesCommandOutput>;
  deleteStackInstances(
    args: DeleteStackInstancesCommandInput,
    cb: (err: any, data?: DeleteStackInstancesCommandOutput) => void
  ): void;
  deleteStackInstances(
    args: DeleteStackInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStackSetCommand}
   */
  deleteStackSet(
    args: DeleteStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStackSetCommandOutput>;
  deleteStackSet(args: DeleteStackSetCommandInput, cb: (err: any, data?: DeleteStackSetCommandOutput) => void): void;
  deleteStackSet(
    args: DeleteStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTypeCommand}
   */
  deregisterType(
    args: DeregisterTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTypeCommandOutput>;
  deregisterType(args: DeregisterTypeCommandInput, cb: (err: any, data?: DeregisterTypeCommandOutput) => void): void;
  deregisterType(
    args: DeregisterTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChangeSetCommand}
   */
  describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChangeSetCommandOutput>;
  describeChangeSet(
    args: DescribeChangeSetCommandInput,
    cb: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): void;
  describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChangeSetHooksCommand}
   */
  describeChangeSetHooks(
    args: DescribeChangeSetHooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChangeSetHooksCommandOutput>;
  describeChangeSetHooks(
    args: DescribeChangeSetHooksCommandInput,
    cb: (err: any, data?: DescribeChangeSetHooksCommandOutput) => void
  ): void;
  describeChangeSetHooks(
    args: DescribeChangeSetHooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChangeSetHooksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationsAccessCommand}
   */
  describeOrganizationsAccess(
    args: DescribeOrganizationsAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationsAccessCommandOutput>;
  describeOrganizationsAccess(
    args: DescribeOrganizationsAccessCommandInput,
    cb: (err: any, data?: DescribeOrganizationsAccessCommandOutput) => void
  ): void;
  describeOrganizationsAccess(
    args: DescribeOrganizationsAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationsAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePublisherCommand}
   */
  describePublisher(
    args: DescribePublisherCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePublisherCommandOutput>;
  describePublisher(
    args: DescribePublisherCommandInput,
    cb: (err: any, data?: DescribePublisherCommandOutput) => void
  ): void;
  describePublisher(
    args: DescribePublisherCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePublisherCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackDriftDetectionStatusCommand}
   */
  describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackDriftDetectionStatusCommandOutput>;
  describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    cb: (err: any, data?: DescribeStackDriftDetectionStatusCommandOutput) => void
  ): void;
  describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackDriftDetectionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackEventsCommand}
   */
  describeStackEvents(
    args: DescribeStackEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackEventsCommandOutput>;
  describeStackEvents(
    args: DescribeStackEventsCommandInput,
    cb: (err: any, data?: DescribeStackEventsCommandOutput) => void
  ): void;
  describeStackEvents(
    args: DescribeStackEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackInstanceCommand}
   */
  describeStackInstance(
    args: DescribeStackInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackInstanceCommandOutput>;
  describeStackInstance(
    args: DescribeStackInstanceCommandInput,
    cb: (err: any, data?: DescribeStackInstanceCommandOutput) => void
  ): void;
  describeStackInstance(
    args: DescribeStackInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackResourceCommand}
   */
  describeStackResource(
    args: DescribeStackResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackResourceCommandOutput>;
  describeStackResource(
    args: DescribeStackResourceCommandInput,
    cb: (err: any, data?: DescribeStackResourceCommandOutput) => void
  ): void;
  describeStackResource(
    args: DescribeStackResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackResourceDriftsCommand}
   */
  describeStackResourceDrifts(
    args: DescribeStackResourceDriftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackResourceDriftsCommandOutput>;
  describeStackResourceDrifts(
    args: DescribeStackResourceDriftsCommandInput,
    cb: (err: any, data?: DescribeStackResourceDriftsCommandOutput) => void
  ): void;
  describeStackResourceDrifts(
    args: DescribeStackResourceDriftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackResourceDriftsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackResourcesCommand}
   */
  describeStackResources(
    args: DescribeStackResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackResourcesCommandOutput>;
  describeStackResources(
    args: DescribeStackResourcesCommandInput,
    cb: (err: any, data?: DescribeStackResourcesCommandOutput) => void
  ): void;
  describeStackResources(
    args: DescribeStackResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStacksCommand}
   */
  describeStacks(
    args: DescribeStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStacksCommandOutput>;
  describeStacks(args: DescribeStacksCommandInput, cb: (err: any, data?: DescribeStacksCommandOutput) => void): void;
  describeStacks(
    args: DescribeStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackSetCommand}
   */
  describeStackSet(
    args: DescribeStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackSetCommandOutput>;
  describeStackSet(
    args: DescribeStackSetCommandInput,
    cb: (err: any, data?: DescribeStackSetCommandOutput) => void
  ): void;
  describeStackSet(
    args: DescribeStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackSetOperationCommand}
   */
  describeStackSetOperation(
    args: DescribeStackSetOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackSetOperationCommandOutput>;
  describeStackSetOperation(
    args: DescribeStackSetOperationCommandInput,
    cb: (err: any, data?: DescribeStackSetOperationCommandOutput) => void
  ): void;
  describeStackSetOperation(
    args: DescribeStackSetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackSetOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTypeCommand}
   */
  describeType(args: DescribeTypeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTypeCommandOutput>;
  describeType(args: DescribeTypeCommandInput, cb: (err: any, data?: DescribeTypeCommandOutput) => void): void;
  describeType(
    args: DescribeTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTypeRegistrationCommand}
   */
  describeTypeRegistration(
    args: DescribeTypeRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTypeRegistrationCommandOutput>;
  describeTypeRegistration(
    args: DescribeTypeRegistrationCommandInput,
    cb: (err: any, data?: DescribeTypeRegistrationCommandOutput) => void
  ): void;
  describeTypeRegistration(
    args: DescribeTypeRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTypeRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectStackDriftCommand}
   */
  detectStackDrift(
    args: DetectStackDriftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectStackDriftCommandOutput>;
  detectStackDrift(
    args: DetectStackDriftCommandInput,
    cb: (err: any, data?: DetectStackDriftCommandOutput) => void
  ): void;
  detectStackDrift(
    args: DetectStackDriftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectStackDriftCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectStackResourceDriftCommand}
   */
  detectStackResourceDrift(
    args: DetectStackResourceDriftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectStackResourceDriftCommandOutput>;
  detectStackResourceDrift(
    args: DetectStackResourceDriftCommandInput,
    cb: (err: any, data?: DetectStackResourceDriftCommandOutput) => void
  ): void;
  detectStackResourceDrift(
    args: DetectStackResourceDriftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectStackResourceDriftCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectStackSetDriftCommand}
   */
  detectStackSetDrift(
    args: DetectStackSetDriftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectStackSetDriftCommandOutput>;
  detectStackSetDrift(
    args: DetectStackSetDriftCommandInput,
    cb: (err: any, data?: DetectStackSetDriftCommandOutput) => void
  ): void;
  detectStackSetDrift(
    args: DetectStackSetDriftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectStackSetDriftCommandOutput) => void
  ): void;

  /**
   * @see {@link EstimateTemplateCostCommand}
   */
  estimateTemplateCost(
    args: EstimateTemplateCostCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EstimateTemplateCostCommandOutput>;
  estimateTemplateCost(
    args: EstimateTemplateCostCommandInput,
    cb: (err: any, data?: EstimateTemplateCostCommandOutput) => void
  ): void;
  estimateTemplateCost(
    args: EstimateTemplateCostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EstimateTemplateCostCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteChangeSetCommand}
   */
  executeChangeSet(
    args: ExecuteChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteChangeSetCommandOutput>;
  executeChangeSet(
    args: ExecuteChangeSetCommandInput,
    cb: (err: any, data?: ExecuteChangeSetCommandOutput) => void
  ): void;
  executeChangeSet(
    args: ExecuteChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStackPolicyCommand}
   */
  getStackPolicy(
    args: GetStackPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStackPolicyCommandOutput>;
  getStackPolicy(args: GetStackPolicyCommandInput, cb: (err: any, data?: GetStackPolicyCommandOutput) => void): void;
  getStackPolicy(
    args: GetStackPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStackPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
  getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
  getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateSummaryCommand}
   */
  getTemplateSummary(
    args: GetTemplateSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateSummaryCommandOutput>;
  getTemplateSummary(
    args: GetTemplateSummaryCommandInput,
    cb: (err: any, data?: GetTemplateSummaryCommandOutput) => void
  ): void;
  getTemplateSummary(
    args: GetTemplateSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportStacksToStackSetCommand}
   */
  importStacksToStackSet(
    args: ImportStacksToStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportStacksToStackSetCommandOutput>;
  importStacksToStackSet(
    args: ImportStacksToStackSetCommandInput,
    cb: (err: any, data?: ImportStacksToStackSetCommandOutput) => void
  ): void;
  importStacksToStackSet(
    args: ImportStacksToStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportStacksToStackSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChangeSetsCommand}
   */
  listChangeSets(
    args: ListChangeSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangeSetsCommandOutput>;
  listChangeSets(args: ListChangeSetsCommandInput, cb: (err: any, data?: ListChangeSetsCommandOutput) => void): void;
  listChangeSets(
    args: ListChangeSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(args: ListExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListExportsCommandOutput>;
  listExports(args: ListExportsCommandInput, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
  listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(args: ListImportsCommandInput, options?: __HttpHandlerOptions): Promise<ListImportsCommandOutput>;
  listImports(args: ListImportsCommandInput, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
  listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStackInstancesCommand}
   */
  listStackInstances(
    args: ListStackInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackInstancesCommandOutput>;
  listStackInstances(
    args: ListStackInstancesCommandInput,
    cb: (err: any, data?: ListStackInstancesCommandOutput) => void
  ): void;
  listStackInstances(
    args: ListStackInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStackResourcesCommand}
   */
  listStackResources(
    args: ListStackResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackResourcesCommandOutput>;
  listStackResources(
    args: ListStackResourcesCommandInput,
    cb: (err: any, data?: ListStackResourcesCommandOutput) => void
  ): void;
  listStackResources(
    args: ListStackResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStacksCommand}
   */
  listStacks(args: ListStacksCommandInput, options?: __HttpHandlerOptions): Promise<ListStacksCommandOutput>;
  listStacks(args: ListStacksCommandInput, cb: (err: any, data?: ListStacksCommandOutput) => void): void;
  listStacks(
    args: ListStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStackSetOperationResultsCommand}
   */
  listStackSetOperationResults(
    args: ListStackSetOperationResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackSetOperationResultsCommandOutput>;
  listStackSetOperationResults(
    args: ListStackSetOperationResultsCommandInput,
    cb: (err: any, data?: ListStackSetOperationResultsCommandOutput) => void
  ): void;
  listStackSetOperationResults(
    args: ListStackSetOperationResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackSetOperationResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStackSetOperationsCommand}
   */
  listStackSetOperations(
    args: ListStackSetOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackSetOperationsCommandOutput>;
  listStackSetOperations(
    args: ListStackSetOperationsCommandInput,
    cb: (err: any, data?: ListStackSetOperationsCommandOutput) => void
  ): void;
  listStackSetOperations(
    args: ListStackSetOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackSetOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStackSetsCommand}
   */
  listStackSets(args: ListStackSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListStackSetsCommandOutput>;
  listStackSets(args: ListStackSetsCommandInput, cb: (err: any, data?: ListStackSetsCommandOutput) => void): void;
  listStackSets(
    args: ListStackSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTypeRegistrationsCommand}
   */
  listTypeRegistrations(
    args: ListTypeRegistrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypeRegistrationsCommandOutput>;
  listTypeRegistrations(
    args: ListTypeRegistrationsCommandInput,
    cb: (err: any, data?: ListTypeRegistrationsCommandOutput) => void
  ): void;
  listTypeRegistrations(
    args: ListTypeRegistrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypeRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTypesCommand}
   */
  listTypes(args: ListTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListTypesCommandOutput>;
  listTypes(args: ListTypesCommandInput, cb: (err: any, data?: ListTypesCommandOutput) => void): void;
  listTypes(
    args: ListTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTypeVersionsCommand}
   */
  listTypeVersions(
    args: ListTypeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypeVersionsCommandOutput>;
  listTypeVersions(
    args: ListTypeVersionsCommandInput,
    cb: (err: any, data?: ListTypeVersionsCommandOutput) => void
  ): void;
  listTypeVersions(
    args: ListTypeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypeVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishTypeCommand}
   */
  publishType(args: PublishTypeCommandInput, options?: __HttpHandlerOptions): Promise<PublishTypeCommandOutput>;
  publishType(args: PublishTypeCommandInput, cb: (err: any, data?: PublishTypeCommandOutput) => void): void;
  publishType(
    args: PublishTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link RecordHandlerProgressCommand}
   */
  recordHandlerProgress(
    args: RecordHandlerProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecordHandlerProgressCommandOutput>;
  recordHandlerProgress(
    args: RecordHandlerProgressCommandInput,
    cb: (err: any, data?: RecordHandlerProgressCommandOutput) => void
  ): void;
  recordHandlerProgress(
    args: RecordHandlerProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecordHandlerProgressCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterPublisherCommand}
   */
  registerPublisher(
    args: RegisterPublisherCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterPublisherCommandOutput>;
  registerPublisher(
    args: RegisterPublisherCommandInput,
    cb: (err: any, data?: RegisterPublisherCommandOutput) => void
  ): void;
  registerPublisher(
    args: RegisterPublisherCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterPublisherCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTypeCommand}
   */
  registerType(args: RegisterTypeCommandInput, options?: __HttpHandlerOptions): Promise<RegisterTypeCommandOutput>;
  registerType(args: RegisterTypeCommandInput, cb: (err: any, data?: RegisterTypeCommandOutput) => void): void;
  registerType(
    args: RegisterTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link RollbackStackCommand}
   */
  rollbackStack(args: RollbackStackCommandInput, options?: __HttpHandlerOptions): Promise<RollbackStackCommandOutput>;
  rollbackStack(args: RollbackStackCommandInput, cb: (err: any, data?: RollbackStackCommandOutput) => void): void;
  rollbackStack(
    args: RollbackStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RollbackStackCommandOutput) => void
  ): void;

  /**
   * @see {@link SetStackPolicyCommand}
   */
  setStackPolicy(
    args: SetStackPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetStackPolicyCommandOutput>;
  setStackPolicy(args: SetStackPolicyCommandInput, cb: (err: any, data?: SetStackPolicyCommandOutput) => void): void;
  setStackPolicy(
    args: SetStackPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetStackPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTypeConfigurationCommand}
   */
  setTypeConfiguration(
    args: SetTypeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTypeConfigurationCommandOutput>;
  setTypeConfiguration(
    args: SetTypeConfigurationCommandInput,
    cb: (err: any, data?: SetTypeConfigurationCommandOutput) => void
  ): void;
  setTypeConfiguration(
    args: SetTypeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTypeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTypeDefaultVersionCommand}
   */
  setTypeDefaultVersion(
    args: SetTypeDefaultVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTypeDefaultVersionCommandOutput>;
  setTypeDefaultVersion(
    args: SetTypeDefaultVersionCommandInput,
    cb: (err: any, data?: SetTypeDefaultVersionCommandOutput) => void
  ): void;
  setTypeDefaultVersion(
    args: SetTypeDefaultVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTypeDefaultVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link SignalResourceCommand}
   */
  signalResource(
    args: SignalResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SignalResourceCommandOutput>;
  signalResource(args: SignalResourceCommandInput, cb: (err: any, data?: SignalResourceCommandOutput) => void): void;
  signalResource(
    args: SignalResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignalResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopStackSetOperationCommand}
   */
  stopStackSetOperation(
    args: StopStackSetOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopStackSetOperationCommandOutput>;
  stopStackSetOperation(
    args: StopStackSetOperationCommandInput,
    cb: (err: any, data?: StopStackSetOperationCommandOutput) => void
  ): void;
  stopStackSetOperation(
    args: StopStackSetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStackSetOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link TestTypeCommand}
   */
  testType(args: TestTypeCommandInput, options?: __HttpHandlerOptions): Promise<TestTypeCommandOutput>;
  testType(args: TestTypeCommandInput, cb: (err: any, data?: TestTypeCommandOutput) => void): void;
  testType(
    args: TestTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStackCommand}
   */
  updateStack(args: UpdateStackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStackCommandOutput>;
  updateStack(args: UpdateStackCommandInput, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
  updateStack(
    args: UpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStackInstancesCommand}
   */
  updateStackInstances(
    args: UpdateStackInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStackInstancesCommandOutput>;
  updateStackInstances(
    args: UpdateStackInstancesCommandInput,
    cb: (err: any, data?: UpdateStackInstancesCommandOutput) => void
  ): void;
  updateStackInstances(
    args: UpdateStackInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStackSetCommand}
   */
  updateStackSet(
    args: UpdateStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStackSetCommandOutput>;
  updateStackSet(args: UpdateStackSetCommandInput, cb: (err: any, data?: UpdateStackSetCommandOutput) => void): void;
  updateStackSet(
    args: UpdateStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTerminationProtectionCommand}
   */
  updateTerminationProtection(
    args: UpdateTerminationProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTerminationProtectionCommandOutput>;
  updateTerminationProtection(
    args: UpdateTerminationProtectionCommandInput,
    cb: (err: any, data?: UpdateTerminationProtectionCommandOutput) => void
  ): void;
  updateTerminationProtection(
    args: UpdateTerminationProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTerminationProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateTemplateCommand}
   */
  validateTemplate(
    args: ValidateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateTemplateCommandOutput>;
  validateTemplate(
    args: ValidateTemplateCommandInput,
    cb: (err: any, data?: ValidateTemplateCommandOutput) => void
  ): void;
  validateTemplate(
    args: ValidateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateTemplateCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>CloudFormation</fullname>
 *          <p>CloudFormation allows you to create and manage Amazon Web Services infrastructure deployments predictably
 *    and repeatedly. You can use CloudFormation to leverage Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build
 *    highly reliable, highly scalable, cost-effective applications without creating or configuring the underlying Amazon Web Services infrastructure.</p>
 *          <p>With CloudFormation, you declare all your resources and dependencies in a template file. The template
 *    defines a collection of resources as a single unit called a stack. CloudFormation creates and deletes all member
 *    resources of the stack together and manages all dependencies between the resources for you.</p>
 *          <p>For more information about CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">CloudFormation product page</a>.</p>
 *          <p>CloudFormation makes use of other Amazon Web Services products. If you need additional technical information
 *    about a specific Amazon Web Services product, you can find the product's technical documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>
 */
export class CloudFormation extends CloudFormationClient implements CloudFormation {}
createAggregatedClient(commands, CloudFormation);
