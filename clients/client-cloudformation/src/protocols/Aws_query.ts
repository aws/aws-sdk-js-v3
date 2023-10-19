// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  strictParseInt32 as __strictParseInt32,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  ActivateOrganizationsAccessCommandInput,
  ActivateOrganizationsAccessCommandOutput,
} from "../commands/ActivateOrganizationsAccessCommand";
import { ActivateTypeCommandInput, ActivateTypeCommandOutput } from "../commands/ActivateTypeCommand";
import {
  BatchDescribeTypeConfigurationsCommandInput,
  BatchDescribeTypeConfigurationsCommandOutput,
} from "../commands/BatchDescribeTypeConfigurationsCommand";
import { CancelUpdateStackCommandInput, CancelUpdateStackCommandOutput } from "../commands/CancelUpdateStackCommand";
import {
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
} from "../commands/ContinueUpdateRollbackCommand";
import { CreateChangeSetCommandInput, CreateChangeSetCommandOutput } from "../commands/CreateChangeSetCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "../commands/CreateStackCommand";
import {
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput,
} from "../commands/CreateStackInstancesCommand";
import { CreateStackSetCommandInput, CreateStackSetCommandOutput } from "../commands/CreateStackSetCommand";
import {
  DeactivateOrganizationsAccessCommandInput,
  DeactivateOrganizationsAccessCommandOutput,
} from "../commands/DeactivateOrganizationsAccessCommand";
import { DeactivateTypeCommandInput, DeactivateTypeCommandOutput } from "../commands/DeactivateTypeCommand";
import { DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput } from "../commands/DeleteChangeSetCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "../commands/DeleteStackCommand";
import {
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
} from "../commands/DeleteStackInstancesCommand";
import { DeleteStackSetCommandInput, DeleteStackSetCommandOutput } from "../commands/DeleteStackSetCommand";
import { DeregisterTypeCommandInput, DeregisterTypeCommandOutput } from "../commands/DeregisterTypeCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import { DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput } from "../commands/DescribeChangeSetCommand";
import {
  DescribeChangeSetHooksCommandInput,
  DescribeChangeSetHooksCommandOutput,
} from "../commands/DescribeChangeSetHooksCommand";
import {
  DescribeOrganizationsAccessCommandInput,
  DescribeOrganizationsAccessCommandOutput,
} from "../commands/DescribeOrganizationsAccessCommand";
import { DescribePublisherCommandInput, DescribePublisherCommandOutput } from "../commands/DescribePublisherCommand";
import {
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
} from "../commands/DescribeStackDriftDetectionStatusCommand";
import {
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "../commands/DescribeStackEventsCommand";
import {
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput,
} from "../commands/DescribeStackInstanceCommand";
import {
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput,
} from "../commands/DescribeStackResourceCommand";
import {
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
} from "../commands/DescribeStackResourceDriftsCommand";
import {
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
} from "../commands/DescribeStackResourcesCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "../commands/DescribeStacksCommand";
import { DescribeStackSetCommandInput, DescribeStackSetCommandOutput } from "../commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
} from "../commands/DescribeStackSetOperationCommand";
import { DescribeTypeCommandInput, DescribeTypeCommandOutput } from "../commands/DescribeTypeCommand";
import {
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
} from "../commands/DescribeTypeRegistrationCommand";
import { DetectStackDriftCommandInput, DetectStackDriftCommandOutput } from "../commands/DetectStackDriftCommand";
import {
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
} from "../commands/DetectStackResourceDriftCommand";
import {
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput,
} from "../commands/DetectStackSetDriftCommand";
import {
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
} from "../commands/EstimateTemplateCostCommand";
import { ExecuteChangeSetCommandInput, ExecuteChangeSetCommandOutput } from "../commands/ExecuteChangeSetCommand";
import { GetStackPolicyCommandInput, GetStackPolicyCommandOutput } from "../commands/GetStackPolicyCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "../commands/GetTemplateCommand";
import { GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput } from "../commands/GetTemplateSummaryCommand";
import {
  ImportStacksToStackSetCommandInput,
  ImportStacksToStackSetCommandOutput,
} from "../commands/ImportStacksToStackSetCommand";
import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "../commands/ListChangeSetsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import {
  ListStackInstanceResourceDriftsCommandInput,
  ListStackInstanceResourceDriftsCommandOutput,
} from "../commands/ListStackInstanceResourceDriftsCommand";
import { ListStackInstancesCommandInput, ListStackInstancesCommandOutput } from "../commands/ListStackInstancesCommand";
import { ListStackResourcesCommandInput, ListStackResourcesCommandOutput } from "../commands/ListStackResourcesCommand";
import { ListStacksCommandInput, ListStacksCommandOutput } from "../commands/ListStacksCommand";
import {
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "../commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "../commands/ListStackSetOperationsCommand";
import { ListStackSetsCommandInput, ListStackSetsCommandOutput } from "../commands/ListStackSetsCommand";
import {
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "../commands/ListTypeRegistrationsCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import { ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput } from "../commands/ListTypeVersionsCommand";
import { PublishTypeCommandInput, PublishTypeCommandOutput } from "../commands/PublishTypeCommand";
import {
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
} from "../commands/RecordHandlerProgressCommand";
import { RegisterPublisherCommandInput, RegisterPublisherCommandOutput } from "../commands/RegisterPublisherCommand";
import { RegisterTypeCommandInput, RegisterTypeCommandOutput } from "../commands/RegisterTypeCommand";
import { RollbackStackCommandInput, RollbackStackCommandOutput } from "../commands/RollbackStackCommand";
import { SetStackPolicyCommandInput, SetStackPolicyCommandOutput } from "../commands/SetStackPolicyCommand";
import {
  SetTypeConfigurationCommandInput,
  SetTypeConfigurationCommandOutput,
} from "../commands/SetTypeConfigurationCommand";
import {
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
} from "../commands/SetTypeDefaultVersionCommand";
import { SignalResourceCommandInput, SignalResourceCommandOutput } from "../commands/SignalResourceCommand";
import {
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
} from "../commands/StopStackSetOperationCommand";
import { TestTypeCommandInput, TestTypeCommandOutput } from "../commands/TestTypeCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "../commands/UpdateStackCommand";
import {
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput,
} from "../commands/UpdateStackInstancesCommand";
import { UpdateStackSetCommandInput, UpdateStackSetCommandOutput } from "../commands/UpdateStackSetCommand";
import {
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
} from "../commands/UpdateTerminationProtectionCommand";
import { ValidateTemplateCommandInput, ValidateTemplateCommandOutput } from "../commands/ValidateTemplateCommand";
import { CloudFormationServiceException as __BaseException } from "../models/CloudFormationServiceException";
import {
  AccountGateResult,
  AccountLimit,
  ActivateOrganizationsAccessInput,
  ActivateOrganizationsAccessOutput,
  ActivateTypeInput,
  ActivateTypeOutput,
  AlreadyExistsException,
  AutoDeployment,
  BatchDescribeTypeConfigurationsError,
  BatchDescribeTypeConfigurationsInput,
  BatchDescribeTypeConfigurationsOutput,
  CancelUpdateStackInput,
  Capability,
  CFNRegistryException,
  Change,
  ChangeSetHook,
  ChangeSetHookResourceTargetDetails,
  ChangeSetHookTargetDetails,
  ChangeSetNotFoundException,
  ChangeSetSummary,
  ContinueUpdateRollbackInput,
  ContinueUpdateRollbackOutput,
  CreateChangeSetInput,
  CreateChangeSetOutput,
  CreatedButModifiedException,
  CreateStackInput,
  CreateStackInstancesInput,
  CreateStackInstancesOutput,
  CreateStackOutput,
  CreateStackSetInput,
  CreateStackSetOutput,
  DeactivateOrganizationsAccessInput,
  DeactivateOrganizationsAccessOutput,
  DeactivateTypeInput,
  DeactivateTypeOutput,
  DeleteChangeSetInput,
  DeleteChangeSetOutput,
  DeleteStackInput,
  DeleteStackInstancesInput,
  DeleteStackInstancesOutput,
  DeleteStackSetInput,
  DeleteStackSetOutput,
  DeploymentTargets,
  DeregisterTypeInput,
  DeregisterTypeOutput,
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeChangeSetHooksInput,
  DescribeChangeSetHooksOutput,
  DescribeChangeSetInput,
  DescribeChangeSetOutput,
  DescribeOrganizationsAccessInput,
  DescribeOrganizationsAccessOutput,
  DescribePublisherInput,
  DescribePublisherOutput,
  DescribeStackDriftDetectionStatusInput,
  DescribeStackDriftDetectionStatusOutput,
  DescribeStackEventsInput,
  DescribeStackEventsOutput,
  DescribeStackInstanceInput,
  DescribeStackInstanceOutput,
  DescribeStackResourceDriftsInput,
  DescribeStackResourceDriftsOutput,
  DescribeStackResourceInput,
  DescribeStackResourceOutput,
  DescribeStackResourcesInput,
  DescribeStackResourcesOutput,
  DescribeStackSetInput,
  DescribeStackSetOperationInput,
  DescribeStackSetOperationOutput,
  DescribeStackSetOutput,
  DescribeStacksInput,
  DescribeStacksOutput,
  DescribeTypeInput,
  DescribeTypeOutput,
  DescribeTypeRegistrationInput,
  DescribeTypeRegistrationOutput,
  DetectStackDriftInput,
  DetectStackDriftOutput,
  DetectStackResourceDriftInput,
  DetectStackResourceDriftOutput,
  DetectStackSetDriftInput,
  DetectStackSetDriftOutput,
  EstimateTemplateCostInput,
  EstimateTemplateCostOutput,
  ExecuteChangeSetInput,
  ExecuteChangeSetOutput,
  Export,
  GetStackPolicyInput,
  GetStackPolicyOutput,
  GetTemplateInput,
  GetTemplateOutput,
  GetTemplateSummaryInput,
  GetTemplateSummaryOutput,
  ImportStacksToStackSetInput,
  ImportStacksToStackSetOutput,
  InsufficientCapabilitiesException,
  InvalidChangeSetStatusException,
  InvalidOperationException,
  InvalidStateTransitionException,
  LimitExceededException,
  ListChangeSetsInput,
  ListChangeSetsOutput,
  ListExportsInput,
  ListExportsOutput,
  ListImportsInput,
  ListImportsOutput,
  ListStackInstanceResourceDriftsInput,
  ListStackInstanceResourceDriftsOutput,
  ListStackInstancesInput,
  ListStackInstancesOutput,
  ListStackResourcesInput,
  ListStackResourcesOutput,
  ListStackSetOperationResultsInput,
  ListStackSetOperationResultsOutput,
  ListStackSetOperationsInput,
  ListStackSetOperationsOutput,
  ListStackSetsInput,
  ListStackSetsOutput,
  ListStacksInput,
  ListStacksOutput,
  ListTypeRegistrationsInput,
  ListTypeRegistrationsOutput,
  ListTypesInput,
  ListTypesOutput,
  ListTypeVersionsInput,
  ListTypeVersionsOutput,
  LoggingConfig,
  ManagedExecution,
  ModuleInfo,
  NameAlreadyExistsException,
  OperationIdAlreadyExistsException,
  OperationInProgressException,
  OperationNotFoundException,
  OperationResultFilter,
  OperationStatusCheckFailedException,
  Output,
  Parameter,
  ParameterConstraints,
  ParameterDeclaration,
  PhysicalResourceIdContextKeyValuePair,
  PropertyDifference,
  PublishTypeInput,
  PublishTypeOutput,
  RecordHandlerProgressInput,
  RecordHandlerProgressOutput,
  RegisterPublisherInput,
  RegisterPublisherOutput,
  RegisterTypeInput,
  RegisterTypeOutput,
  RequiredActivatedType,
  ResourceAttribute,
  ResourceChange,
  ResourceChangeDetail,
  ResourceIdentifierSummary,
  ResourceTargetDefinition,
  ResourceToImport,
  RollbackConfiguration,
  RollbackStackInput,
  RollbackStackOutput,
  RollbackTrigger,
  SetStackPolicyInput,
  SetTypeConfigurationInput,
  SetTypeConfigurationOutput,
  SetTypeDefaultVersionInput,
  SetTypeDefaultVersionOutput,
  SignalResourceInput,
  Stack,
  StackDriftInformation,
  StackDriftInformationSummary,
  StackEvent,
  StackInstance,
  StackInstanceComprehensiveStatus,
  StackInstanceFilter,
  StackInstanceNotFoundException,
  StackInstanceResourceDriftsSummary,
  StackInstanceSummary,
  StackNotFoundException,
  StackResource,
  StackResourceDetail,
  StackResourceDrift,
  StackResourceDriftInformation,
  StackResourceDriftInformationSummary,
  StackResourceDriftStatus,
  StackResourceSummary,
  StackSet,
  StackSetDriftDetectionDetails,
  StackSetNotEmptyException,
  StackSetNotFoundException,
  StackSetOperation,
  StackSetOperationPreferences,
  StackSetOperationResultSummary,
  StackSetOperationStatusDetails,
  StackSetOperationSummary,
  StackSetSummary,
  StackStatus,
  StackSummary,
  StaleRequestException,
  StopStackSetOperationInput,
  StopStackSetOperationOutput,
  Tag,
  TemplateParameter,
  TemplateStage,
  TemplateSummaryConfig,
  TestTypeInput,
  TestTypeOutput,
  TokenAlreadyExistsException,
  TypeConfigurationDetails,
  TypeConfigurationIdentifier,
  TypeConfigurationNotFoundException,
  TypeFilters,
  TypeNotFoundException,
  TypeSummary,
  TypeVersionSummary,
  UpdateStackInput,
  UpdateStackInstancesInput,
  UpdateStackInstancesOutput,
  UpdateStackOutput,
  UpdateStackSetInput,
  UpdateStackSetOutput,
  UpdateTerminationProtectionInput,
  UpdateTerminationProtectionOutput,
  ValidateTemplateInput,
  ValidateTemplateOutput,
  Warnings,
} from "../models/models_0";

/**
 * serializeAws_queryActivateOrganizationsAccessCommand
 */
export const se_ActivateOrganizationsAccessCommand = async (
  input: ActivateOrganizationsAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ActivateOrganizationsAccessInput(input, context),
    Action: "ActivateOrganizationsAccess",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryActivateTypeCommand
 */
export const se_ActivateTypeCommand = async (
  input: ActivateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ActivateTypeInput(input, context),
    Action: "ActivateType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryBatchDescribeTypeConfigurationsCommand
 */
export const se_BatchDescribeTypeConfigurationsCommand = async (
  input: BatchDescribeTypeConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BatchDescribeTypeConfigurationsInput(input, context),
    Action: "BatchDescribeTypeConfigurations",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCancelUpdateStackCommand
 */
export const se_CancelUpdateStackCommand = async (
  input: CancelUpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CancelUpdateStackInput(input, context),
    Action: "CancelUpdateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryContinueUpdateRollbackCommand
 */
export const se_ContinueUpdateRollbackCommand = async (
  input: ContinueUpdateRollbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ContinueUpdateRollbackInput(input, context),
    Action: "ContinueUpdateRollback",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateChangeSetCommand
 */
export const se_CreateChangeSetCommand = async (
  input: CreateChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateChangeSetInput(input, context),
    Action: "CreateChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateStackCommand
 */
export const se_CreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateStackInput(input, context),
    Action: "CreateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateStackInstancesCommand
 */
export const se_CreateStackInstancesCommand = async (
  input: CreateStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateStackInstancesInput(input, context),
    Action: "CreateStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateStackSetCommand
 */
export const se_CreateStackSetCommand = async (
  input: CreateStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateStackSetInput(input, context),
    Action: "CreateStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeactivateOrganizationsAccessCommand
 */
export const se_DeactivateOrganizationsAccessCommand = async (
  input: DeactivateOrganizationsAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeactivateOrganizationsAccessInput(input, context),
    Action: "DeactivateOrganizationsAccess",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeactivateTypeCommand
 */
export const se_DeactivateTypeCommand = async (
  input: DeactivateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeactivateTypeInput(input, context),
    Action: "DeactivateType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteChangeSetCommand
 */
export const se_DeleteChangeSetCommand = async (
  input: DeleteChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteChangeSetInput(input, context),
    Action: "DeleteChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteStackCommand
 */
export const se_DeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteStackInput(input, context),
    Action: "DeleteStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteStackInstancesCommand
 */
export const se_DeleteStackInstancesCommand = async (
  input: DeleteStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteStackInstancesInput(input, context),
    Action: "DeleteStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteStackSetCommand
 */
export const se_DeleteStackSetCommand = async (
  input: DeleteStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteStackSetInput(input, context),
    Action: "DeleteStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeregisterTypeCommand
 */
export const se_DeregisterTypeCommand = async (
  input: DeregisterTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeregisterTypeInput(input, context),
    Action: "DeregisterType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAccountLimitsCommand
 */
export const se_DescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAccountLimitsInput(input, context),
    Action: "DescribeAccountLimits",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeChangeSetCommand
 */
export const se_DescribeChangeSetCommand = async (
  input: DescribeChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeChangeSetInput(input, context),
    Action: "DescribeChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeChangeSetHooksCommand
 */
export const se_DescribeChangeSetHooksCommand = async (
  input: DescribeChangeSetHooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeChangeSetHooksInput(input, context),
    Action: "DescribeChangeSetHooks",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeOrganizationsAccessCommand
 */
export const se_DescribeOrganizationsAccessCommand = async (
  input: DescribeOrganizationsAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeOrganizationsAccessInput(input, context),
    Action: "DescribeOrganizationsAccess",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribePublisherCommand
 */
export const se_DescribePublisherCommand = async (
  input: DescribePublisherCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribePublisherInput(input, context),
    Action: "DescribePublisher",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStackDriftDetectionStatusCommand
 */
export const se_DescribeStackDriftDetectionStatusCommand = async (
  input: DescribeStackDriftDetectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStackDriftDetectionStatusInput(input, context),
    Action: "DescribeStackDriftDetectionStatus",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStackEventsCommand
 */
export const se_DescribeStackEventsCommand = async (
  input: DescribeStackEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStackEventsInput(input, context),
    Action: "DescribeStackEvents",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStackInstanceCommand
 */
export const se_DescribeStackInstanceCommand = async (
  input: DescribeStackInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStackInstanceInput(input, context),
    Action: "DescribeStackInstance",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStackResourceCommand
 */
export const se_DescribeStackResourceCommand = async (
  input: DescribeStackResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStackResourceInput(input, context),
    Action: "DescribeStackResource",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStackResourceDriftsCommand
 */
export const se_DescribeStackResourceDriftsCommand = async (
  input: DescribeStackResourceDriftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStackResourceDriftsInput(input, context),
    Action: "DescribeStackResourceDrifts",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStackResourcesCommand
 */
export const se_DescribeStackResourcesCommand = async (
  input: DescribeStackResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStackResourcesInput(input, context),
    Action: "DescribeStackResources",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStacksCommand
 */
export const se_DescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStacksInput(input, context),
    Action: "DescribeStacks",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStackSetCommand
 */
export const se_DescribeStackSetCommand = async (
  input: DescribeStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStackSetInput(input, context),
    Action: "DescribeStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeStackSetOperationCommand
 */
export const se_DescribeStackSetOperationCommand = async (
  input: DescribeStackSetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeStackSetOperationInput(input, context),
    Action: "DescribeStackSetOperation",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTypeCommand
 */
export const se_DescribeTypeCommand = async (
  input: DescribeTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTypeInput(input, context),
    Action: "DescribeType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTypeRegistrationCommand
 */
export const se_DescribeTypeRegistrationCommand = async (
  input: DescribeTypeRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTypeRegistrationInput(input, context),
    Action: "DescribeTypeRegistration",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetectStackDriftCommand
 */
export const se_DetectStackDriftCommand = async (
  input: DetectStackDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetectStackDriftInput(input, context),
    Action: "DetectStackDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetectStackResourceDriftCommand
 */
export const se_DetectStackResourceDriftCommand = async (
  input: DetectStackResourceDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetectStackResourceDriftInput(input, context),
    Action: "DetectStackResourceDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetectStackSetDriftCommand
 */
export const se_DetectStackSetDriftCommand = async (
  input: DetectStackSetDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetectStackSetDriftInput(input, context),
    Action: "DetectStackSetDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEstimateTemplateCostCommand
 */
export const se_EstimateTemplateCostCommand = async (
  input: EstimateTemplateCostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EstimateTemplateCostInput(input, context),
    Action: "EstimateTemplateCost",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryExecuteChangeSetCommand
 */
export const se_ExecuteChangeSetCommand = async (
  input: ExecuteChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ExecuteChangeSetInput(input, context),
    Action: "ExecuteChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetStackPolicyCommand
 */
export const se_GetStackPolicyCommand = async (
  input: GetStackPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetStackPolicyInput(input, context),
    Action: "GetStackPolicy",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetTemplateCommand
 */
export const se_GetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetTemplateInput(input, context),
    Action: "GetTemplate",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetTemplateSummaryCommand
 */
export const se_GetTemplateSummaryCommand = async (
  input: GetTemplateSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetTemplateSummaryInput(input, context),
    Action: "GetTemplateSummary",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryImportStacksToStackSetCommand
 */
export const se_ImportStacksToStackSetCommand = async (
  input: ImportStacksToStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ImportStacksToStackSetInput(input, context),
    Action: "ImportStacksToStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListChangeSetsCommand
 */
export const se_ListChangeSetsCommand = async (
  input: ListChangeSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListChangeSetsInput(input, context),
    Action: "ListChangeSets",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListExportsCommand
 */
export const se_ListExportsCommand = async (
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListExportsInput(input, context),
    Action: "ListExports",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListImportsCommand
 */
export const se_ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListImportsInput(input, context),
    Action: "ListImports",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListStackInstanceResourceDriftsCommand
 */
export const se_ListStackInstanceResourceDriftsCommand = async (
  input: ListStackInstanceResourceDriftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListStackInstanceResourceDriftsInput(input, context),
    Action: "ListStackInstanceResourceDrifts",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListStackInstancesCommand
 */
export const se_ListStackInstancesCommand = async (
  input: ListStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListStackInstancesInput(input, context),
    Action: "ListStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListStackResourcesCommand
 */
export const se_ListStackResourcesCommand = async (
  input: ListStackResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListStackResourcesInput(input, context),
    Action: "ListStackResources",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListStacksCommand
 */
export const se_ListStacksCommand = async (
  input: ListStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListStacksInput(input, context),
    Action: "ListStacks",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListStackSetOperationResultsCommand
 */
export const se_ListStackSetOperationResultsCommand = async (
  input: ListStackSetOperationResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListStackSetOperationResultsInput(input, context),
    Action: "ListStackSetOperationResults",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListStackSetOperationsCommand
 */
export const se_ListStackSetOperationsCommand = async (
  input: ListStackSetOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListStackSetOperationsInput(input, context),
    Action: "ListStackSetOperations",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListStackSetsCommand
 */
export const se_ListStackSetsCommand = async (
  input: ListStackSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListStackSetsInput(input, context),
    Action: "ListStackSets",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTypeRegistrationsCommand
 */
export const se_ListTypeRegistrationsCommand = async (
  input: ListTypeRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTypeRegistrationsInput(input, context),
    Action: "ListTypeRegistrations",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTypesCommand
 */
export const se_ListTypesCommand = async (
  input: ListTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTypesInput(input, context),
    Action: "ListTypes",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTypeVersionsCommand
 */
export const se_ListTypeVersionsCommand = async (
  input: ListTypeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTypeVersionsInput(input, context),
    Action: "ListTypeVersions",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPublishTypeCommand
 */
export const se_PublishTypeCommand = async (
  input: PublishTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PublishTypeInput(input, context),
    Action: "PublishType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRecordHandlerProgressCommand
 */
export const se_RecordHandlerProgressCommand = async (
  input: RecordHandlerProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RecordHandlerProgressInput(input, context),
    Action: "RecordHandlerProgress",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRegisterPublisherCommand
 */
export const se_RegisterPublisherCommand = async (
  input: RegisterPublisherCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RegisterPublisherInput(input, context),
    Action: "RegisterPublisher",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRegisterTypeCommand
 */
export const se_RegisterTypeCommand = async (
  input: RegisterTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RegisterTypeInput(input, context),
    Action: "RegisterType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRollbackStackCommand
 */
export const se_RollbackStackCommand = async (
  input: RollbackStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RollbackStackInput(input, context),
    Action: "RollbackStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetStackPolicyCommand
 */
export const se_SetStackPolicyCommand = async (
  input: SetStackPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetStackPolicyInput(input, context),
    Action: "SetStackPolicy",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetTypeConfigurationCommand
 */
export const se_SetTypeConfigurationCommand = async (
  input: SetTypeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetTypeConfigurationInput(input, context),
    Action: "SetTypeConfiguration",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetTypeDefaultVersionCommand
 */
export const se_SetTypeDefaultVersionCommand = async (
  input: SetTypeDefaultVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetTypeDefaultVersionInput(input, context),
    Action: "SetTypeDefaultVersion",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySignalResourceCommand
 */
export const se_SignalResourceCommand = async (
  input: SignalResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SignalResourceInput(input, context),
    Action: "SignalResource",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStopStackSetOperationCommand
 */
export const se_StopStackSetOperationCommand = async (
  input: StopStackSetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StopStackSetOperationInput(input, context),
    Action: "StopStackSetOperation",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTestTypeCommand
 */
export const se_TestTypeCommand = async (
  input: TestTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TestTypeInput(input, context),
    Action: "TestType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateStackCommand
 */
export const se_UpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateStackInput(input, context),
    Action: "UpdateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateStackInstancesCommand
 */
export const se_UpdateStackInstancesCommand = async (
  input: UpdateStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateStackInstancesInput(input, context),
    Action: "UpdateStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateStackSetCommand
 */
export const se_UpdateStackSetCommand = async (
  input: UpdateStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateStackSetInput(input, context),
    Action: "UpdateStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateTerminationProtectionCommand
 */
export const se_UpdateTerminationProtectionCommand = async (
  input: UpdateTerminationProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateTerminationProtectionInput(input, context),
    Action: "UpdateTerminationProtection",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryValidateTemplateCommand
 */
export const se_ValidateTemplateCommand = async (
  input: ValidateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ValidateTemplateInput(input, context),
    Action: "ValidateTemplate",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryActivateOrganizationsAccessCommand
 */
export const de_ActivateOrganizationsAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateOrganizationsAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ActivateOrganizationsAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ActivateOrganizationsAccessOutput(data.ActivateOrganizationsAccessResult, context);
  const response: ActivateOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryActivateOrganizationsAccessCommandError
 */
const de_ActivateOrganizationsAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateOrganizationsAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      throw await de_OperationNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryActivateTypeCommand
 */
export const de_ActivateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ActivateTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ActivateTypeOutput(data.ActivateTypeResult, context);
  const response: ActivateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryActivateTypeCommandError
 */
const de_ActivateTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryBatchDescribeTypeConfigurationsCommand
 */
export const de_BatchDescribeTypeConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeTypeConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDescribeTypeConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDescribeTypeConfigurationsOutput(data.BatchDescribeTypeConfigurationsResult, context);
  const response: BatchDescribeTypeConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBatchDescribeTypeConfigurationsCommandError
 */
const de_BatchDescribeTypeConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeTypeConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeConfigurationNotFoundException":
    case "com.amazonaws.cloudformation#TypeConfigurationNotFoundException":
      throw await de_TypeConfigurationNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCancelUpdateStackCommand
 */
export const de_CancelUpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelUpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelUpdateStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CancelUpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCancelUpdateStackCommandError
 */
const de_CancelUpdateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelUpdateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      throw await de_TokenAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryContinueUpdateRollbackCommand
 */
export const de_ContinueUpdateRollbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueUpdateRollbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ContinueUpdateRollbackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ContinueUpdateRollbackOutput(data.ContinueUpdateRollbackResult, context);
  const response: ContinueUpdateRollbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryContinueUpdateRollbackCommandError
 */
const de_ContinueUpdateRollbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueUpdateRollbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      throw await de_TokenAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateChangeSetCommand
 */
export const de_CreateChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateChangeSetOutput(data.CreateChangeSetResult, context);
  const response: CreateChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateChangeSetCommandError
 */
const de_CreateChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudformation#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      throw await de_InsufficientCapabilitiesExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateStackCommand
 */
export const de_CreateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStackOutput(data.CreateStackResult, context);
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateStackCommandError
 */
const de_CreateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudformation#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      throw await de_InsufficientCapabilitiesExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      throw await de_TokenAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateStackInstancesCommand
 */
export const de_CreateStackInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStackInstancesOutput(data.CreateStackInstancesResult, context);
  const response: CreateStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateStackInstancesCommandError
 */
const de_CreateStackInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      throw await de_OperationIdAlreadyExistsExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      throw await de_StaleRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateStackSetCommand
 */
export const de_CreateStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStackSetOutput(data.CreateStackSetResult, context);
  const response: CreateStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateStackSetCommandError
 */
const de_CreateStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CreatedButModifiedException":
    case "com.amazonaws.cloudformation#CreatedButModifiedException":
      throw await de_CreatedButModifiedExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NameAlreadyExistsException":
    case "com.amazonaws.cloudformation#NameAlreadyExistsException":
      throw await de_NameAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeactivateOrganizationsAccessCommand
 */
export const de_DeactivateOrganizationsAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateOrganizationsAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeactivateOrganizationsAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeactivateOrganizationsAccessOutput(data.DeactivateOrganizationsAccessResult, context);
  const response: DeactivateOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeactivateOrganizationsAccessCommandError
 */
const de_DeactivateOrganizationsAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateOrganizationsAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      throw await de_OperationNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeactivateTypeCommand
 */
export const de_DeactivateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeactivateTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeactivateTypeOutput(data.DeactivateTypeResult, context);
  const response: DeactivateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeactivateTypeCommandError
 */
const de_DeactivateTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteChangeSetCommand
 */
export const de_DeleteChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteChangeSetOutput(data.DeleteChangeSetResult, context);
  const response: DeleteChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteChangeSetCommandError
 */
const de_DeleteChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidChangeSetStatus":
    case "com.amazonaws.cloudformation#InvalidChangeSetStatusException":
      throw await de_InvalidChangeSetStatusExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteStackCommand
 */
export const de_DeleteStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteStackCommandError
 */
const de_DeleteStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      throw await de_TokenAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteStackInstancesCommand
 */
export const de_DeleteStackInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteStackInstancesOutput(data.DeleteStackInstancesResult, context);
  const response: DeleteStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteStackInstancesCommandError
 */
const de_DeleteStackInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      throw await de_OperationIdAlreadyExistsExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      throw await de_StaleRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteStackSetCommand
 */
export const de_DeleteStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteStackSetOutput(data.DeleteStackSetResult, context);
  const response: DeleteStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteStackSetCommandError
 */
const de_DeleteStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "StackSetNotEmptyException":
    case "com.amazonaws.cloudformation#StackSetNotEmptyException":
      throw await de_StackSetNotEmptyExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeregisterTypeCommand
 */
export const de_DeregisterTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterTypeOutput(data.DeregisterTypeResult, context);
  const response: DeregisterTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeregisterTypeCommandError
 */
const de_DeregisterTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAccountLimitsCommand
 */
export const de_DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAccountLimitsCommandError
 */
const de_DescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeChangeSetCommand
 */
export const de_DescribeChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeChangeSetOutput(data.DescribeChangeSetResult, context);
  const response: DescribeChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeChangeSetCommandError
 */
const de_DescribeChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFound":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      throw await de_ChangeSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeChangeSetHooksCommand
 */
export const de_DescribeChangeSetHooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetHooksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeChangeSetHooksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeChangeSetHooksOutput(data.DescribeChangeSetHooksResult, context);
  const response: DescribeChangeSetHooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeChangeSetHooksCommandError
 */
const de_DescribeChangeSetHooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetHooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFound":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      throw await de_ChangeSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeOrganizationsAccessCommand
 */
export const de_DescribeOrganizationsAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationsAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrganizationsAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOrganizationsAccessOutput(data.DescribeOrganizationsAccessResult, context);
  const response: DescribeOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeOrganizationsAccessCommandError
 */
const de_DescribeOrganizationsAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationsAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      throw await de_OperationNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribePublisherCommand
 */
export const de_DescribePublisherCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublisherCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePublisherCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePublisherOutput(data.DescribePublisherResult, context);
  const response: DescribePublisherCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribePublisherCommandError
 */
const de_DescribePublisherCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublisherCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeStackDriftDetectionStatusCommand
 */
export const de_DescribeStackDriftDetectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackDriftDetectionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackDriftDetectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackDriftDetectionStatusOutput(data.DescribeStackDriftDetectionStatusResult, context);
  const response: DescribeStackDriftDetectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStackDriftDetectionStatusCommandError
 */
const de_DescribeStackDriftDetectionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackDriftDetectionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeStackEventsCommand
 */
export const de_DescribeStackEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackEventsOutput(data.DescribeStackEventsResult, context);
  const response: DescribeStackEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStackEventsCommandError
 */
const de_DescribeStackEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeStackInstanceCommand
 */
export const de_DescribeStackInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackInstanceOutput(data.DescribeStackInstanceResult, context);
  const response: DescribeStackInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStackInstanceCommandError
 */
const de_DescribeStackInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      throw await de_StackInstanceNotFoundExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeStackResourceCommand
 */
export const de_DescribeStackResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackResourceOutput(data.DescribeStackResourceResult, context);
  const response: DescribeStackResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStackResourceCommandError
 */
const de_DescribeStackResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeStackResourceDriftsCommand
 */
export const de_DescribeStackResourceDriftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceDriftsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackResourceDriftsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackResourceDriftsOutput(data.DescribeStackResourceDriftsResult, context);
  const response: DescribeStackResourceDriftsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStackResourceDriftsCommandError
 */
const de_DescribeStackResourceDriftsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceDriftsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeStackResourcesCommand
 */
export const de_DescribeStackResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackResourcesOutput(data.DescribeStackResourcesResult, context);
  const response: DescribeStackResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStackResourcesCommandError
 */
const de_DescribeStackResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeStacksCommand
 */
export const de_DescribeStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStacksOutput(data.DescribeStacksResult, context);
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStacksCommandError
 */
const de_DescribeStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeStackSetCommand
 */
export const de_DescribeStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackSetOutput(data.DescribeStackSetResult, context);
  const response: DescribeStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStackSetCommandError
 */
const de_DescribeStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeStackSetOperationCommand
 */
export const de_DescribeStackSetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackSetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStackSetOperationOutput(data.DescribeStackSetOperationResult, context);
  const response: DescribeStackSetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeStackSetOperationCommandError
 */
const de_DescribeStackSetOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      throw await de_OperationNotFoundExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTypeCommand
 */
export const de_DescribeTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTypeOutput(data.DescribeTypeResult, context);
  const response: DescribeTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTypeCommandError
 */
const de_DescribeTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTypeRegistrationCommand
 */
export const de_DescribeTypeRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeRegistrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTypeRegistrationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTypeRegistrationOutput(data.DescribeTypeRegistrationResult, context);
  const response: DescribeTypeRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTypeRegistrationCommandError
 */
const de_DescribeTypeRegistrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeRegistrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetectStackDriftCommand
 */
export const de_DetectStackDriftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackDriftCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectStackDriftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectStackDriftOutput(data.DetectStackDriftResult, context);
  const response: DetectStackDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDetectStackDriftCommandError
 */
const de_DetectStackDriftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackDriftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDetectStackResourceDriftCommand
 */
export const de_DetectStackResourceDriftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackResourceDriftCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectStackResourceDriftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectStackResourceDriftOutput(data.DetectStackResourceDriftResult, context);
  const response: DetectStackResourceDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDetectStackResourceDriftCommandError
 */
const de_DetectStackResourceDriftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackResourceDriftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDetectStackSetDriftCommand
 */
export const de_DetectStackSetDriftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackSetDriftCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectStackSetDriftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectStackSetDriftOutput(data.DetectStackSetDriftResult, context);
  const response: DetectStackSetDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDetectStackSetDriftCommandError
 */
const de_DetectStackSetDriftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackSetDriftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryEstimateTemplateCostCommand
 */
export const de_EstimateTemplateCostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EstimateTemplateCostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EstimateTemplateCostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EstimateTemplateCostOutput(data.EstimateTemplateCostResult, context);
  const response: EstimateTemplateCostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEstimateTemplateCostCommandError
 */
const de_EstimateTemplateCostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EstimateTemplateCostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryExecuteChangeSetCommand
 */
export const de_ExecuteChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExecuteChangeSetOutput(data.ExecuteChangeSetResult, context);
  const response: ExecuteChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryExecuteChangeSetCommandError
 */
const de_ExecuteChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFound":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      throw await de_ChangeSetNotFoundExceptionRes(parsedOutput, context);
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      throw await de_InsufficientCapabilitiesExceptionRes(parsedOutput, context);
    case "InvalidChangeSetStatus":
    case "com.amazonaws.cloudformation#InvalidChangeSetStatusException":
      throw await de_InvalidChangeSetStatusExceptionRes(parsedOutput, context);
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      throw await de_TokenAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetStackPolicyCommand
 */
export const de_GetStackPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStackPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetStackPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetStackPolicyOutput(data.GetStackPolicyResult, context);
  const response: GetStackPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetStackPolicyCommandError
 */
const de_GetStackPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStackPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryGetTemplateCommand
 */
export const de_GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTemplateOutput(data.GetTemplateResult, context);
  const response: GetTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetTemplateCommandError
 */
const de_GetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFound":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      throw await de_ChangeSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetTemplateSummaryCommand
 */
export const de_GetTemplateSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTemplateSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTemplateSummaryOutput(data.GetTemplateSummaryResult, context);
  const response: GetTemplateSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetTemplateSummaryCommandError
 */
const de_GetTemplateSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryImportStacksToStackSetCommand
 */
export const de_ImportStacksToStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportStacksToStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportStacksToStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportStacksToStackSetOutput(data.ImportStacksToStackSetResult, context);
  const response: ImportStacksToStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryImportStacksToStackSetCommandError
 */
const de_ImportStacksToStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportStacksToStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      throw await de_OperationIdAlreadyExistsExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "StackNotFoundException":
    case "com.amazonaws.cloudformation#StackNotFoundException":
      throw await de_StackNotFoundExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      throw await de_StaleRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListChangeSetsCommand
 */
export const de_ListChangeSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListChangeSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListChangeSetsOutput(data.ListChangeSetsResult, context);
  const response: ListChangeSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListChangeSetsCommandError
 */
const de_ListChangeSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryListExportsCommand
 */
export const de_ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExportsOutput(data.ListExportsResult, context);
  const response: ListExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListExportsCommandError
 */
const de_ListExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryListImportsCommand
 */
export const de_ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListImportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImportsOutput(data.ListImportsResult, context);
  const response: ListImportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListImportsCommandError
 */
const de_ListImportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryListStackInstanceResourceDriftsCommand
 */
export const de_ListStackInstanceResourceDriftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstanceResourceDriftsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStackInstanceResourceDriftsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStackInstanceResourceDriftsOutput(data.ListStackInstanceResourceDriftsResult, context);
  const response: ListStackInstanceResourceDriftsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListStackInstanceResourceDriftsCommandError
 */
const de_ListStackInstanceResourceDriftsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstanceResourceDriftsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      throw await de_OperationNotFoundExceptionRes(parsedOutput, context);
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      throw await de_StackInstanceNotFoundExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListStackInstancesCommand
 */
export const de_ListStackInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStackInstancesOutput(data.ListStackInstancesResult, context);
  const response: ListStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListStackInstancesCommandError
 */
const de_ListStackInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListStackResourcesCommand
 */
export const de_ListStackResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStackResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStackResourcesOutput(data.ListStackResourcesResult, context);
  const response: ListStackResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListStackResourcesCommandError
 */
const de_ListStackResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryListStacksCommand
 */
export const de_ListStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStacksOutput(data.ListStacksResult, context);
  const response: ListStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListStacksCommandError
 */
const de_ListStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryListStackSetOperationResultsCommand
 */
export const de_ListStackSetOperationResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStackSetOperationResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStackSetOperationResultsOutput(data.ListStackSetOperationResultsResult, context);
  const response: ListStackSetOperationResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListStackSetOperationResultsCommandError
 */
const de_ListStackSetOperationResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      throw await de_OperationNotFoundExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListStackSetOperationsCommand
 */
export const de_ListStackSetOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStackSetOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStackSetOperationsOutput(data.ListStackSetOperationsResult, context);
  const response: ListStackSetOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListStackSetOperationsCommandError
 */
const de_ListStackSetOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListStackSetsCommand
 */
export const de_ListStackSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStackSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStackSetsOutput(data.ListStackSetsResult, context);
  const response: ListStackSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListStackSetsCommandError
 */
const de_ListStackSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryListTypeRegistrationsCommand
 */
export const de_ListTypeRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeRegistrationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTypeRegistrationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTypeRegistrationsOutput(data.ListTypeRegistrationsResult, context);
  const response: ListTypeRegistrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTypeRegistrationsCommandError
 */
const de_ListTypeRegistrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeRegistrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListTypesCommand
 */
export const de_ListTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTypesOutput(data.ListTypesResult, context);
  const response: ListTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTypesCommandError
 */
const de_ListTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListTypeVersionsCommand
 */
export const de_ListTypeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTypeVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTypeVersionsOutput(data.ListTypeVersionsResult, context);
  const response: ListTypeVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTypeVersionsCommandError
 */
const de_ListTypeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPublishTypeCommand
 */
export const de_PublishTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PublishTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PublishTypeOutput(data.PublishTypeResult, context);
  const response: PublishTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPublishTypeCommandError
 */
const de_PublishTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRecordHandlerProgressCommand
 */
export const de_RecordHandlerProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordHandlerProgressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RecordHandlerProgressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RecordHandlerProgressOutput(data.RecordHandlerProgressResult, context);
  const response: RecordHandlerProgressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRecordHandlerProgressCommandError
 */
const de_RecordHandlerProgressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordHandlerProgressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionalCheckFailed":
    case "com.amazonaws.cloudformation#OperationStatusCheckFailedException":
      throw await de_OperationStatusCheckFailedExceptionRes(parsedOutput, context);
    case "InvalidStateTransition":
    case "com.amazonaws.cloudformation#InvalidStateTransitionException":
      throw await de_InvalidStateTransitionExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRegisterPublisherCommand
 */
export const de_RegisterPublisherCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPublisherCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterPublisherCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterPublisherOutput(data.RegisterPublisherResult, context);
  const response: RegisterPublisherCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRegisterPublisherCommandError
 */
const de_RegisterPublisherCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPublisherCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRegisterTypeCommand
 */
export const de_RegisterTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterTypeOutput(data.RegisterTypeResult, context);
  const response: RegisterTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRegisterTypeCommandError
 */
const de_RegisterTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRollbackStackCommand
 */
export const de_RollbackStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RollbackStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RollbackStackOutput(data.RollbackStackResult, context);
  const response: RollbackStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRollbackStackCommandError
 */
const de_RollbackStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      throw await de_TokenAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetStackPolicyCommand
 */
export const de_SetStackPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStackPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetStackPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetStackPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetStackPolicyCommandError
 */
const de_SetStackPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStackPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_querySetTypeConfigurationCommand
 */
export const de_SetTypeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTypeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetTypeConfigurationOutput(data.SetTypeConfigurationResult, context);
  const response: SetTypeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetTypeConfigurationCommandError
 */
const de_SetTypeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetTypeDefaultVersionCommand
 */
export const de_SetTypeDefaultVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeDefaultVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTypeDefaultVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetTypeDefaultVersionOutput(data.SetTypeDefaultVersionResult, context);
  const response: SetTypeDefaultVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetTypeDefaultVersionCommandError
 */
const de_SetTypeDefaultVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeDefaultVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySignalResourceCommand
 */
export const de_SignalResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SignalResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SignalResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySignalResourceCommandError
 */
const de_SignalResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryStopStackSetOperationCommand
 */
export const de_StopStackSetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackSetOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopStackSetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopStackSetOperationOutput(data.StopStackSetOperationResult, context);
  const response: StopStackSetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStopStackSetOperationCommandError
 */
const de_StopStackSetOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackSetOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      throw await de_OperationNotFoundExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTestTypeCommand
 */
export const de_TestTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestTypeOutput(data.TestTypeResult, context);
  const response: TestTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTestTypeCommandError
 */
const de_TestTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      throw await de_CFNRegistryExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateStackCommand
 */
export const de_UpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateStackOutput(data.UpdateStackResult, context);
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateStackCommandError
 */
const de_UpdateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      throw await de_InsufficientCapabilitiesExceptionRes(parsedOutput, context);
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      throw await de_TokenAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateStackInstancesCommand
 */
export const de_UpdateStackInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateStackInstancesOutput(data.UpdateStackInstancesResult, context);
  const response: UpdateStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateStackInstancesCommandError
 */
const de_UpdateStackInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      throw await de_OperationIdAlreadyExistsExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      throw await de_StackInstanceNotFoundExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      throw await de_StaleRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateStackSetCommand
 */
export const de_UpdateStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateStackSetOutput(data.UpdateStackSetResult, context);
  const response: UpdateStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateStackSetCommandError
 */
const de_UpdateStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      throw await de_OperationIdAlreadyExistsExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      throw await de_StackInstanceNotFoundExceptionRes(parsedOutput, context);
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      throw await de_StackSetNotFoundExceptionRes(parsedOutput, context);
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      throw await de_StaleRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateTerminationProtectionCommand
 */
export const de_UpdateTerminationProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTerminationProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTerminationProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTerminationProtectionOutput(data.UpdateTerminationProtectionResult, context);
  const response: UpdateTerminationProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateTerminationProtectionCommandError
 */
const de_UpdateTerminationProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTerminationProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryValidateTemplateCommand
 */
export const de_ValidateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ValidateTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ValidateTemplateOutput(data.ValidateTemplateResult, context);
  const response: ValidateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryValidateTemplateCommandError
 */
const de_ValidateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryAlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AlreadyExistsException(body.Error, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCFNRegistryExceptionRes
 */
const de_CFNRegistryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CFNRegistryException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CFNRegistryException(body.Error, context);
  const exception = new CFNRegistryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryChangeSetNotFoundExceptionRes
 */
const de_ChangeSetNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChangeSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ChangeSetNotFoundException(body.Error, context);
  const exception = new ChangeSetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCreatedButModifiedExceptionRes
 */
const de_CreatedButModifiedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreatedButModifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CreatedButModifiedException(body.Error, context);
  const exception = new CreatedButModifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientCapabilitiesExceptionRes
 */
const de_InsufficientCapabilitiesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapabilitiesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientCapabilitiesException(body.Error, context);
  const exception = new InsufficientCapabilitiesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidChangeSetStatusExceptionRes
 */
const de_InvalidChangeSetStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidChangeSetStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidChangeSetStatusException(body.Error, context);
  const exception = new InvalidChangeSetStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidOperationExceptionRes
 */
const de_InvalidOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOperationException(body.Error, context);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidStateTransitionExceptionRes
 */
const de_InvalidStateTransitionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidStateTransitionException(body.Error, context);
  const exception = new InvalidStateTransitionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body.Error, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNameAlreadyExistsExceptionRes
 */
const de_NameAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NameAlreadyExistsException(body.Error, context);
  const exception = new NameAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOperationIdAlreadyExistsExceptionRes
 */
const de_OperationIdAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationIdAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationIdAlreadyExistsException(body.Error, context);
  const exception = new OperationIdAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOperationInProgressExceptionRes
 */
const de_OperationInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationInProgressException(body.Error, context);
  const exception = new OperationInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOperationNotFoundExceptionRes
 */
const de_OperationNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotFoundException(body.Error, context);
  const exception = new OperationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOperationStatusCheckFailedExceptionRes
 */
const de_OperationStatusCheckFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationStatusCheckFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationStatusCheckFailedException(body.Error, context);
  const exception = new OperationStatusCheckFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryStackInstanceNotFoundExceptionRes
 */
const de_StackInstanceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackInstanceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StackInstanceNotFoundException(body.Error, context);
  const exception = new StackInstanceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryStackNotFoundExceptionRes
 */
const de_StackNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StackNotFoundException(body.Error, context);
  const exception = new StackNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryStackSetNotEmptyExceptionRes
 */
const de_StackSetNotEmptyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackSetNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StackSetNotEmptyException(body.Error, context);
  const exception = new StackSetNotEmptyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryStackSetNotFoundExceptionRes
 */
const de_StackSetNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StackSetNotFoundException(body.Error, context);
  const exception = new StackSetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryStaleRequestExceptionRes
 */
const de_StaleRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StaleRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StaleRequestException(body.Error, context);
  const exception = new StaleRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTokenAlreadyExistsExceptionRes
 */
const de_TokenAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TokenAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TokenAlreadyExistsException(body.Error, context);
  const exception = new TokenAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTypeConfigurationNotFoundExceptionRes
 */
const de_TypeConfigurationNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeConfigurationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TypeConfigurationNotFoundException(body.Error, context);
  const exception = new TypeConfigurationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTypeNotFoundExceptionRes
 */
const de_TypeNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TypeNotFoundException(body.Error, context);
  const exception = new TypeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAccountList
 */
const se_AccountList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryActivateOrganizationsAccessInput
 */
const se_ActivateOrganizationsAccessInput = (input: ActivateOrganizationsAccessInput, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryActivateTypeInput
 */
const se_ActivateTypeInput = (input: ActivateTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.PublicTypeArn != null) {
    entries["PublicTypeArn"] = input.PublicTypeArn;
  }
  if (input.PublisherId != null) {
    entries["PublisherId"] = input.PublisherId;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.TypeNameAlias != null) {
    entries["TypeNameAlias"] = input.TypeNameAlias;
  }
  if (input.AutoUpdate != null) {
    entries["AutoUpdate"] = input.AutoUpdate;
  }
  if (input.LoggingConfig != null) {
    const memberEntries = se_LoggingConfig(input.LoggingConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoggingConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExecutionRoleArn != null) {
    entries["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.VersionBump != null) {
    entries["VersionBump"] = input.VersionBump;
  }
  if (input.MajorVersion != null) {
    entries["MajorVersion"] = input.MajorVersion;
  }
  return entries;
};

/**
 * serializeAws_queryAutoDeployment
 */
const se_AutoDeployment = (input: AutoDeployment, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.RetainStacksOnAccountRemoval != null) {
    entries["RetainStacksOnAccountRemoval"] = input.RetainStacksOnAccountRemoval;
  }
  return entries;
};

/**
 * serializeAws_queryBatchDescribeTypeConfigurationsInput
 */
const se_BatchDescribeTypeConfigurationsInput = (
  input: BatchDescribeTypeConfigurationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TypeConfigurationIdentifiers != null) {
    const memberEntries = se_TypeConfigurationIdentifiers(input.TypeConfigurationIdentifiers, context);
    if (input.TypeConfigurationIdentifiers?.length === 0) {
      entries.TypeConfigurationIdentifiers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TypeConfigurationIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCancelUpdateStackInput
 */
const se_CancelUpdateStackInput = (input: CancelUpdateStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

/**
 * serializeAws_queryCapabilities
 */
const se_Capabilities = (input: Capability[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryContinueUpdateRollbackInput
 */
const se_ContinueUpdateRollbackInput = (input: ContinueUpdateRollbackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RoleARN != null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ResourcesToSkip != null) {
    const memberEntries = se_ResourcesToSkip(input.ResourcesToSkip, context);
    if (input.ResourcesToSkip?.length === 0) {
      entries.ResourcesToSkip = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourcesToSkip.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

/**
 * serializeAws_queryCreateChangeSetInput
 */
const se_CreateChangeSetInput = (input: CreateChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody != null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL != null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate != null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.Parameters != null) {
    const memberEntries = se_Parameters(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities != null) {
    const memberEntries = se_Capabilities(input.Capabilities, context);
    if (input.Capabilities?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes != null) {
    const memberEntries = se_ResourceTypes(input.ResourceTypes, context);
    if (input.ResourceTypes?.length === 0) {
      entries.ResourceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN != null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration != null) {
    const memberEntries = se_RollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NotificationARNs != null) {
    const memberEntries = se_NotificationARNs(input.NotificationARNs, context);
    if (input.NotificationARNs?.length === 0) {
      entries.NotificationARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_Tags(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ChangeSetName != null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.ClientToken != null) {
    entries["ClientToken"] = input.ClientToken;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.ChangeSetType != null) {
    entries["ChangeSetType"] = input.ChangeSetType;
  }
  if (input.ResourcesToImport != null) {
    const memberEntries = se_ResourcesToImport(input.ResourcesToImport, context);
    if (input.ResourcesToImport?.length === 0) {
      entries.ResourcesToImport = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourcesToImport.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IncludeNestedStacks != null) {
    entries["IncludeNestedStacks"] = input.IncludeNestedStacks;
  }
  if (input.OnStackFailure != null) {
    entries["OnStackFailure"] = input.OnStackFailure;
  }
  return entries;
};

/**
 * serializeAws_queryCreateStackInput
 */
const se_CreateStackInput = (input: CreateStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody != null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL != null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters != null) {
    const memberEntries = se_Parameters(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DisableRollback != null) {
    entries["DisableRollback"] = input.DisableRollback;
  }
  if (input.RollbackConfiguration != null) {
    const memberEntries = se_RollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TimeoutInMinutes != null) {
    entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
  }
  if (input.NotificationARNs != null) {
    const memberEntries = se_NotificationARNs(input.NotificationARNs, context);
    if (input.NotificationARNs?.length === 0) {
      entries.NotificationARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities != null) {
    const memberEntries = se_Capabilities(input.Capabilities, context);
    if (input.Capabilities?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes != null) {
    const memberEntries = se_ResourceTypes(input.ResourceTypes, context);
    if (input.ResourceTypes?.length === 0) {
      entries.ResourceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN != null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.OnFailure != null) {
    entries["OnFailure"] = input.OnFailure;
  }
  if (input.StackPolicyBody != null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL != null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.Tags != null) {
    const memberEntries = se_Tags(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.EnableTerminationProtection != null) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  if (input.RetainExceptOnCreate != null) {
    entries["RetainExceptOnCreate"] = input.RetainExceptOnCreate;
  }
  return entries;
};

/**
 * serializeAws_queryCreateStackInstancesInput
 */
const se_CreateStackInstancesInput = (input: CreateStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts != null) {
    const memberEntries = se_AccountList(input.Accounts, context);
    if (input.Accounts?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets != null) {
    const memberEntries = se_DeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions != null) {
    const memberEntries = se_RegionList(input.Regions, context);
    if (input.Regions?.length === 0) {
      entries.Regions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ParameterOverrides != null) {
    const memberEntries = se_Parameters(input.ParameterOverrides, context);
    if (input.ParameterOverrides?.length === 0) {
      entries.ParameterOverrides = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences != null) {
    const memberEntries = se_StackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryCreateStackSetInput
 */
const se_CreateStackSetInput = (input: CreateStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.TemplateBody != null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL != null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.StackId != null) {
    entries["StackId"] = input.StackId;
  }
  if (input.Parameters != null) {
    const memberEntries = se_Parameters(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities != null) {
    const memberEntries = se_Capabilities(input.Capabilities, context);
    if (input.Capabilities?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_Tags(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdministrationRoleARN != null) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.ExecutionRoleName != null) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.PermissionModel != null) {
    entries["PermissionModel"] = input.PermissionModel;
  }
  if (input.AutoDeployment != null) {
    const memberEntries = se_AutoDeployment(input.AutoDeployment, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoDeployment.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.ManagedExecution != null) {
    const memberEntries = se_ManagedExecution(input.ManagedExecution, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ManagedExecution.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeactivateOrganizationsAccessInput
 */
const se_DeactivateOrganizationsAccessInput = (
  input: DeactivateOrganizationsAccessInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryDeactivateTypeInput
 */
const se_DeactivateTypeInput = (input: DeactivateTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteChangeSetInput
 */
const se_DeleteChangeSetInput = (input: DeleteChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ChangeSetName != null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteStackInput
 */
const se_DeleteStackInput = (input: DeleteStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RetainResources != null) {
    const memberEntries = se_RetainResources(input.RetainResources, context);
    if (input.RetainResources?.length === 0) {
      entries.RetainResources = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RetainResources.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN != null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteStackInstancesInput
 */
const se_DeleteStackInstancesInput = (input: DeleteStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts != null) {
    const memberEntries = se_AccountList(input.Accounts, context);
    if (input.Accounts?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets != null) {
    const memberEntries = se_DeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions != null) {
    const memberEntries = se_RegionList(input.Regions, context);
    if (input.Regions?.length === 0) {
      entries.Regions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences != null) {
    const memberEntries = se_StackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RetainStacks != null) {
    entries["RetainStacks"] = input.RetainStacks;
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteStackSetInput
 */
const se_DeleteStackSetInput = (input: DeleteStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryDeploymentTargets
 */
const se_DeploymentTargets = (input: DeploymentTargets, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Accounts != null) {
    const memberEntries = se_AccountList(input.Accounts, context);
    if (input.Accounts?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AccountsUrl != null) {
    entries["AccountsUrl"] = input.AccountsUrl;
  }
  if (input.OrganizationalUnitIds != null) {
    const memberEntries = se_OrganizationalUnitIdList(input.OrganizationalUnitIds, context);
    if (input.OrganizationalUnitIds?.length === 0) {
      entries.OrganizationalUnitIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OrganizationalUnitIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AccountFilterType != null) {
    entries["AccountFilterType"] = input.AccountFilterType;
  }
  return entries;
};

/**
 * serializeAws_queryDeregisterTypeInput
 */
const se_DeregisterTypeInput = (input: DeregisterTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId != null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountLimitsInput
 */
const se_DescribeAccountLimitsInput = (input: DescribeAccountLimitsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeChangeSetHooksInput
 */
const se_DescribeChangeSetHooksInput = (input: DescribeChangeSetHooksInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ChangeSetName != null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.LogicalResourceId != null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeChangeSetInput
 */
const se_DescribeChangeSetInput = (input: DescribeChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ChangeSetName != null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeOrganizationsAccessInput
 */
const se_DescribeOrganizationsAccessInput = (input: DescribeOrganizationsAccessInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryDescribePublisherInput
 */
const se_DescribePublisherInput = (input: DescribePublisherInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PublisherId != null) {
    entries["PublisherId"] = input.PublisherId;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackDriftDetectionStatusInput
 */
const se_DescribeStackDriftDetectionStatusInput = (
  input: DescribeStackDriftDetectionStatusInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackDriftDetectionId != null) {
    entries["StackDriftDetectionId"] = input.StackDriftDetectionId;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackEventsInput
 */
const se_DescribeStackEventsInput = (input: DescribeStackEventsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackInstanceInput
 */
const se_DescribeStackInstanceInput = (input: DescribeStackInstanceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.StackInstanceAccount != null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion != null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackResourceDriftsInput
 */
const se_DescribeStackResourceDriftsInput = (input: DescribeStackResourceDriftsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackResourceDriftStatusFilters != null) {
    const memberEntries = se_StackResourceDriftStatusFilters(input.StackResourceDriftStatusFilters, context);
    if (input.StackResourceDriftStatusFilters?.length === 0) {
      entries.StackResourceDriftStatusFilters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackResourceDriftStatusFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackResourceInput
 */
const se_DescribeStackResourceInput = (input: DescribeStackResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId != null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackResourcesInput
 */
const se_DescribeStackResourcesInput = (input: DescribeStackResourcesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId != null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.PhysicalResourceId != null) {
    entries["PhysicalResourceId"] = input.PhysicalResourceId;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackSetInput
 */
const se_DescribeStackSetInput = (input: DescribeStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackSetOperationInput
 */
const se_DescribeStackSetOperationInput = (input: DescribeStackSetOperationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStacksInput
 */
const se_DescribeStacksInput = (input: DescribeStacksInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTypeInput
 */
const se_DescribeTypeInput = (input: DescribeTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.VersionId != null) {
    entries["VersionId"] = input.VersionId;
  }
  if (input.PublisherId != null) {
    entries["PublisherId"] = input.PublisherId;
  }
  if (input.PublicVersionNumber != null) {
    entries["PublicVersionNumber"] = input.PublicVersionNumber;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTypeRegistrationInput
 */
const se_DescribeTypeRegistrationInput = (input: DescribeTypeRegistrationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RegistrationToken != null) {
    entries["RegistrationToken"] = input.RegistrationToken;
  }
  return entries;
};

/**
 * serializeAws_queryDetectStackDriftInput
 */
const se_DetectStackDriftInput = (input: DetectStackDriftInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceIds != null) {
    const memberEntries = se_LogicalResourceIds(input.LogicalResourceIds, context);
    if (input.LogicalResourceIds?.length === 0) {
      entries.LogicalResourceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogicalResourceIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDetectStackResourceDriftInput
 */
const se_DetectStackResourceDriftInput = (input: DetectStackResourceDriftInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId != null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};

/**
 * serializeAws_queryDetectStackSetDriftInput
 */
const se_DetectStackSetDriftInput = (input: DetectStackSetDriftInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationPreferences != null) {
    const memberEntries = se_StackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryEstimateTemplateCostInput
 */
const se_EstimateTemplateCostInput = (input: EstimateTemplateCostInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateBody != null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL != null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters != null) {
    const memberEntries = se_Parameters(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryExecuteChangeSetInput
 */
const se_ExecuteChangeSetInput = (input: ExecuteChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ChangeSetName != null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.DisableRollback != null) {
    entries["DisableRollback"] = input.DisableRollback;
  }
  if (input.RetainExceptOnCreate != null) {
    entries["RetainExceptOnCreate"] = input.RetainExceptOnCreate;
  }
  return entries;
};

/**
 * serializeAws_queryGetStackPolicyInput
 */
const se_GetStackPolicyInput = (input: GetStackPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

/**
 * serializeAws_queryGetTemplateInput
 */
const se_GetTemplateInput = (input: GetTemplateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ChangeSetName != null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.TemplateStage != null) {
    entries["TemplateStage"] = input.TemplateStage;
  }
  return entries;
};

/**
 * serializeAws_queryGetTemplateSummaryInput
 */
const se_GetTemplateSummaryInput = (input: GetTemplateSummaryInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateBody != null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL != null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  if (input.TemplateSummaryConfig != null) {
    const memberEntries = se_TemplateSummaryConfig(input.TemplateSummaryConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TemplateSummaryConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryImportStacksToStackSetInput
 */
const se_ImportStacksToStackSetInput = (input: ImportStacksToStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.StackIds != null) {
    const memberEntries = se_StackIdList(input.StackIds, context);
    if (input.StackIds?.length === 0) {
      entries.StackIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StackIdsUrl != null) {
    entries["StackIdsUrl"] = input.StackIdsUrl;
  }
  if (input.OrganizationalUnitIds != null) {
    const memberEntries = se_OrganizationalUnitIdList(input.OrganizationalUnitIds, context);
    if (input.OrganizationalUnitIds?.length === 0) {
      entries.OrganizationalUnitIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OrganizationalUnitIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences != null) {
    const memberEntries = se_StackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryListChangeSetsInput
 */
const se_ListChangeSetsInput = (input: ListChangeSetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListExportsInput
 */
const se_ListExportsInput = (input: ListExportsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListImportsInput
 */
const se_ListImportsInput = (input: ListImportsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ExportName != null) {
    entries["ExportName"] = input.ExportName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListStackInstanceResourceDriftsInput
 */
const se_ListStackInstanceResourceDriftsInput = (
  input: ListStackInstanceResourceDriftsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.StackInstanceResourceDriftStatuses != null) {
    const memberEntries = se_StackResourceDriftStatusFilters(input.StackInstanceResourceDriftStatuses, context);
    if (input.StackInstanceResourceDriftStatuses?.length === 0) {
      entries.StackInstanceResourceDriftStatuses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackInstanceResourceDriftStatuses.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StackInstanceAccount != null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion != null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryListStackInstancesInput
 */
const se_ListStackInstancesInput = (input: ListStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Filters != null) {
    const memberEntries = se_StackInstanceFilters(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StackInstanceAccount != null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion != null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryListStackResourcesInput
 */
const se_ListStackResourcesInput = (input: ListStackResourcesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListStackSetOperationResultsInput
 */
const se_ListStackSetOperationResultsInput = (
  input: ListStackSetOperationResultsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  if (input.Filters != null) {
    const memberEntries = se_OperationResultFilters(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryListStackSetOperationsInput
 */
const se_ListStackSetOperationsInput = (input: ListStackSetOperationsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryListStackSetsInput
 */
const se_ListStackSetsInput = (input: ListStackSetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryListStacksInput
 */
const se_ListStacksInput = (input: ListStacksInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackStatusFilter != null) {
    const memberEntries = se_StackStatusFilter(input.StackStatusFilter, context);
    if (input.StackStatusFilter?.length === 0) {
      entries.StackStatusFilter = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackStatusFilter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryListTypeRegistrationsInput
 */
const se_ListTypeRegistrationsInput = (input: ListTypeRegistrationsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.TypeArn != null) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.RegistrationStatusFilter != null) {
    entries["RegistrationStatusFilter"] = input.RegistrationStatusFilter;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListTypesInput
 */
const se_ListTypesInput = (input: ListTypesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Visibility != null) {
    entries["Visibility"] = input.Visibility;
  }
  if (input.ProvisioningType != null) {
    entries["ProvisioningType"] = input.ProvisioningType;
  }
  if (input.DeprecatedStatus != null) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.Filters != null) {
    const memberEntries = se_TypeFilters(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListTypeVersionsInput
 */
const se_ListTypeVersionsInput = (input: ListTypeVersionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.DeprecatedStatus != null) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  if (input.PublisherId != null) {
    entries["PublisherId"] = input.PublisherId;
  }
  return entries;
};

/**
 * serializeAws_queryLoggingConfig
 */
const se_LoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LogRoleArn != null) {
    entries["LogRoleArn"] = input.LogRoleArn;
  }
  if (input.LogGroupName != null) {
    entries["LogGroupName"] = input.LogGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryLogicalResourceIds
 */
const se_LogicalResourceIds = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryManagedExecution
 */
const se_ManagedExecution = (input: ManagedExecution, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Active != null) {
    entries["Active"] = input.Active;
  }
  return entries;
};

/**
 * serializeAws_queryNotificationARNs
 */
const se_NotificationARNs = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryOperationResultFilter
 */
const se_OperationResultFilter = (input: OperationResultFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Values != null) {
    entries["Values"] = input.Values;
  }
  return entries;
};

/**
 * serializeAws_queryOperationResultFilters
 */
const se_OperationResultFilters = (input: OperationResultFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_OperationResultFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryOrganizationalUnitIdList
 */
const se_OrganizationalUnitIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryParameter
 */
const se_Parameter = (input: Parameter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ParameterKey != null) {
    entries["ParameterKey"] = input.ParameterKey;
  }
  if (input.ParameterValue != null) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  if (input.UsePreviousValue != null) {
    entries["UsePreviousValue"] = input.UsePreviousValue;
  }
  if (input.ResolvedValue != null) {
    entries["ResolvedValue"] = input.ResolvedValue;
  }
  return entries;
};

/**
 * serializeAws_queryParameters
 */
const se_Parameters = (input: Parameter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Parameter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPublishTypeInput
 */
const se_PublishTypeInput = (input: PublishTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.PublicVersionNumber != null) {
    entries["PublicVersionNumber"] = input.PublicVersionNumber;
  }
  return entries;
};

/**
 * serializeAws_queryRecordHandlerProgressInput
 */
const se_RecordHandlerProgressInput = (input: RecordHandlerProgressInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.BearerToken != null) {
    entries["BearerToken"] = input.BearerToken;
  }
  if (input.OperationStatus != null) {
    entries["OperationStatus"] = input.OperationStatus;
  }
  if (input.CurrentOperationStatus != null) {
    entries["CurrentOperationStatus"] = input.CurrentOperationStatus;
  }
  if (input.StatusMessage != null) {
    entries["StatusMessage"] = input.StatusMessage;
  }
  if (input.ErrorCode != null) {
    entries["ErrorCode"] = input.ErrorCode;
  }
  if (input.ResourceModel != null) {
    entries["ResourceModel"] = input.ResourceModel;
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

/**
 * serializeAws_queryRegionList
 */
const se_RegionList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRegisterPublisherInput
 */
const se_RegisterPublisherInput = (input: RegisterPublisherInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AcceptTermsAndConditions != null) {
    entries["AcceptTermsAndConditions"] = input.AcceptTermsAndConditions;
  }
  if (input.ConnectionArn != null) {
    entries["ConnectionArn"] = input.ConnectionArn;
  }
  return entries;
};

/**
 * serializeAws_queryRegisterTypeInput
 */
const se_RegisterTypeInput = (input: RegisterTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.SchemaHandlerPackage != null) {
    entries["SchemaHandlerPackage"] = input.SchemaHandlerPackage;
  }
  if (input.LoggingConfig != null) {
    const memberEntries = se_LoggingConfig(input.LoggingConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoggingConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExecutionRoleArn != null) {
    entries["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

/**
 * serializeAws_queryResourceIdentifierProperties
 */
const se_ResourceIdentifierProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryResourcesToImport
 */
const se_ResourcesToImport = (input: ResourceToImport[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ResourceToImport(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryResourcesToSkip
 */
const se_ResourcesToSkip = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryResourceToImport
 */
const se_ResourceToImport = (input: ResourceToImport, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceType != null) {
    entries["ResourceType"] = input.ResourceType;
  }
  if (input.LogicalResourceId != null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.ResourceIdentifier != null) {
    const memberEntries = se_ResourceIdentifierProperties(input.ResourceIdentifier, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceIdentifier.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryResourceTypes
 */
const se_ResourceTypes = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRetainResources
 */
const se_RetainResources = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRollbackConfiguration
 */
const se_RollbackConfiguration = (input: RollbackConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RollbackTriggers != null) {
    const memberEntries = se_RollbackTriggers(input.RollbackTriggers, context);
    if (input.RollbackTriggers?.length === 0) {
      entries.RollbackTriggers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackTriggers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MonitoringTimeInMinutes != null) {
    entries["MonitoringTimeInMinutes"] = input.MonitoringTimeInMinutes;
  }
  return entries;
};

/**
 * serializeAws_queryRollbackStackInput
 */
const se_RollbackStackInput = (input: RollbackStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RoleARN != null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.RetainExceptOnCreate != null) {
    entries["RetainExceptOnCreate"] = input.RetainExceptOnCreate;
  }
  return entries;
};

/**
 * serializeAws_queryRollbackTrigger
 */
const se_RollbackTrigger = (input: RollbackTrigger, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  return entries;
};

/**
 * serializeAws_queryRollbackTriggers
 */
const se_RollbackTriggers = (input: RollbackTrigger[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_RollbackTrigger(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySetStackPolicyInput
 */
const se_SetStackPolicyInput = (input: SetStackPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackPolicyBody != null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL != null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  return entries;
};

/**
 * serializeAws_querySetTypeConfigurationInput
 */
const se_SetTypeConfigurationInput = (input: SetTypeConfigurationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TypeArn != null) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.Configuration != null) {
    entries["Configuration"] = input.Configuration;
  }
  if (input.ConfigurationAlias != null) {
    entries["ConfigurationAlias"] = input.ConfigurationAlias;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  return entries;
};

/**
 * serializeAws_querySetTypeDefaultVersionInput
 */
const se_SetTypeDefaultVersionInput = (input: SetTypeDefaultVersionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId != null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

/**
 * serializeAws_querySignalResourceInput
 */
const se_SignalResourceInput = (input: SignalResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId != null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.UniqueId != null) {
    entries["UniqueId"] = input.UniqueId;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  return entries;
};

/**
 * serializeAws_queryStackIdList
 */
const se_StackIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryStackInstanceFilter
 */
const se_StackInstanceFilter = (input: StackInstanceFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Values != null) {
    entries["Values"] = input.Values;
  }
  return entries;
};

/**
 * serializeAws_queryStackInstanceFilters
 */
const se_StackInstanceFilters = (input: StackInstanceFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_StackInstanceFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryStackResourceDriftStatusFilters
 */
const se_StackResourceDriftStatusFilters = (input: StackResourceDriftStatus[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryStackSetOperationPreferences
 */
const se_StackSetOperationPreferences = (input: StackSetOperationPreferences, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RegionConcurrencyType != null) {
    entries["RegionConcurrencyType"] = input.RegionConcurrencyType;
  }
  if (input.RegionOrder != null) {
    const memberEntries = se_RegionList(input.RegionOrder, context);
    if (input.RegionOrder?.length === 0) {
      entries.RegionOrder = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RegionOrder.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FailureToleranceCount != null) {
    entries["FailureToleranceCount"] = input.FailureToleranceCount;
  }
  if (input.FailureTolerancePercentage != null) {
    entries["FailureTolerancePercentage"] = input.FailureTolerancePercentage;
  }
  if (input.MaxConcurrentCount != null) {
    entries["MaxConcurrentCount"] = input.MaxConcurrentCount;
  }
  if (input.MaxConcurrentPercentage != null) {
    entries["MaxConcurrentPercentage"] = input.MaxConcurrentPercentage;
  }
  return entries;
};

/**
 * serializeAws_queryStackStatusFilter
 */
const se_StackStatusFilter = (input: StackStatus[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryStopStackSetOperationInput
 */
const se_StopStackSetOperationInput = (input: StopStackSetOperationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryTags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTemplateSummaryConfig
 */
const se_TemplateSummaryConfig = (input: TemplateSummaryConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TreatUnrecognizedResourceTypesAsWarnings != null) {
    entries["TreatUnrecognizedResourceTypesAsWarnings"] = input.TreatUnrecognizedResourceTypesAsWarnings;
  }
  return entries;
};

/**
 * serializeAws_queryTestTypeInput
 */
const se_TestTypeInput = (input: TestTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId != null) {
    entries["VersionId"] = input.VersionId;
  }
  if (input.LogDeliveryBucket != null) {
    entries["LogDeliveryBucket"] = input.LogDeliveryBucket;
  }
  return entries;
};

/**
 * serializeAws_queryTypeConfigurationIdentifier
 */
const se_TypeConfigurationIdentifier = (input: TypeConfigurationIdentifier, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TypeArn != null) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.TypeConfigurationAlias != null) {
    entries["TypeConfigurationAlias"] = input.TypeConfigurationAlias;
  }
  if (input.TypeConfigurationArn != null) {
    entries["TypeConfigurationArn"] = input.TypeConfigurationArn;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName != null) {
    entries["TypeName"] = input.TypeName;
  }
  return entries;
};

/**
 * serializeAws_queryTypeConfigurationIdentifiers
 */
const se_TypeConfigurationIdentifiers = (input: TypeConfigurationIdentifier[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TypeConfigurationIdentifier(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTypeFilters
 */
const se_TypeFilters = (input: TypeFilters, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Category != null) {
    entries["Category"] = input.Category;
  }
  if (input.PublisherId != null) {
    entries["PublisherId"] = input.PublisherId;
  }
  if (input.TypeNamePrefix != null) {
    entries["TypeNamePrefix"] = input.TypeNamePrefix;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateStackInput
 */
const se_UpdateStackInput = (input: UpdateStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody != null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL != null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate != null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.StackPolicyDuringUpdateBody != null) {
    entries["StackPolicyDuringUpdateBody"] = input.StackPolicyDuringUpdateBody;
  }
  if (input.StackPolicyDuringUpdateURL != null) {
    entries["StackPolicyDuringUpdateURL"] = input.StackPolicyDuringUpdateURL;
  }
  if (input.Parameters != null) {
    const memberEntries = se_Parameters(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities != null) {
    const memberEntries = se_Capabilities(input.Capabilities, context);
    if (input.Capabilities?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes != null) {
    const memberEntries = se_ResourceTypes(input.ResourceTypes, context);
    if (input.ResourceTypes?.length === 0) {
      entries.ResourceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN != null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration != null) {
    const memberEntries = se_RollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StackPolicyBody != null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL != null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.NotificationARNs != null) {
    const memberEntries = se_NotificationARNs(input.NotificationARNs, context);
    if (input.NotificationARNs?.length === 0) {
      entries.NotificationARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_Tags(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DisableRollback != null) {
    entries["DisableRollback"] = input.DisableRollback;
  }
  if (input.ClientRequestToken != null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.RetainExceptOnCreate != null) {
    entries["RetainExceptOnCreate"] = input.RetainExceptOnCreate;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateStackInstancesInput
 */
const se_UpdateStackInstancesInput = (input: UpdateStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts != null) {
    const memberEntries = se_AccountList(input.Accounts, context);
    if (input.Accounts?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets != null) {
    const memberEntries = se_DeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions != null) {
    const memberEntries = se_RegionList(input.Regions, context);
    if (input.Regions?.length === 0) {
      entries.Regions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ParameterOverrides != null) {
    const memberEntries = se_Parameters(input.ParameterOverrides, context);
    if (input.ParameterOverrides?.length === 0) {
      entries.ParameterOverrides = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences != null) {
    const memberEntries = se_StackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateStackSetInput
 */
const se_UpdateStackSetInput = (input: UpdateStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName != null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.TemplateBody != null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL != null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate != null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.Parameters != null) {
    const memberEntries = se_Parameters(input.Parameters, context);
    if (input.Parameters?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities != null) {
    const memberEntries = se_Capabilities(input.Capabilities, context);
    if (input.Capabilities?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_Tags(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences != null) {
    const memberEntries = se_StackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdministrationRoleARN != null) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.ExecutionRoleName != null) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.DeploymentTargets != null) {
    const memberEntries = se_DeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PermissionModel != null) {
    entries["PermissionModel"] = input.PermissionModel;
  }
  if (input.AutoDeployment != null) {
    const memberEntries = se_AutoDeployment(input.AutoDeployment, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoDeployment.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId != null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.Accounts != null) {
    const memberEntries = se_AccountList(input.Accounts, context);
    if (input.Accounts?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions != null) {
    const memberEntries = se_RegionList(input.Regions, context);
    if (input.Regions?.length === 0) {
      entries.Regions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CallAs != null) {
    entries["CallAs"] = input.CallAs;
  }
  if (input.ManagedExecution != null) {
    const memberEntries = se_ManagedExecution(input.ManagedExecution, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ManagedExecution.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateTerminationProtectionInput
 */
const se_UpdateTerminationProtectionInput = (input: UpdateTerminationProtectionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnableTerminationProtection != null) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  if (input.StackName != null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

/**
 * serializeAws_queryValidateTemplateInput
 */
const se_ValidateTemplateInput = (input: ValidateTemplateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateBody != null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL != null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  return entries;
};

/**
 * deserializeAws_queryAccountGateResult
 */
const de_AccountGateResult = (output: any, context: __SerdeContext): AccountGateResult => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccountLimit
 */
const de_AccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __strictParseInt32(output["Value"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAccountLimitList
 */
const de_AccountLimitList = (output: any, context: __SerdeContext): AccountLimit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountLimit(entry, context);
    });
};

/**
 * deserializeAws_queryAccountList
 */
const de_AccountList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryActivateOrganizationsAccessOutput
 */
const de_ActivateOrganizationsAccessOutput = (
  output: any,
  context: __SerdeContext
): ActivateOrganizationsAccessOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryActivateTypeOutput
 */
const de_ActivateTypeOutput = (output: any, context: __SerdeContext): ActivateTypeOutput => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAllowedValues
 */
const de_AllowedValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAlreadyExistsException
 */
const de_AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoDeployment
 */
const de_AutoDeployment = (output: any, context: __SerdeContext): AutoDeployment => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["RetainStacksOnAccountRemoval"] !== undefined) {
    contents.RetainStacksOnAccountRemoval = __parseBoolean(output["RetainStacksOnAccountRemoval"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBatchDescribeTypeConfigurationsError
 */
const de_BatchDescribeTypeConfigurationsError = (
  output: any,
  context: __SerdeContext
): BatchDescribeTypeConfigurationsError => {
  const contents: any = {};
  if (output["ErrorCode"] !== undefined) {
    contents.ErrorCode = __expectString(output["ErrorCode"]);
  }
  if (output["ErrorMessage"] !== undefined) {
    contents.ErrorMessage = __expectString(output["ErrorMessage"]);
  }
  if (output["TypeConfigurationIdentifier"] !== undefined) {
    contents.TypeConfigurationIdentifier = de_TypeConfigurationIdentifier(
      output["TypeConfigurationIdentifier"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryBatchDescribeTypeConfigurationsErrors
 */
const de_BatchDescribeTypeConfigurationsErrors = (
  output: any,
  context: __SerdeContext
): BatchDescribeTypeConfigurationsError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchDescribeTypeConfigurationsError(entry, context);
    });
};

/**
 * deserializeAws_queryBatchDescribeTypeConfigurationsOutput
 */
const de_BatchDescribeTypeConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): BatchDescribeTypeConfigurationsOutput => {
  const contents: any = {};
  if (output.Errors === "") {
    contents.Errors = [];
  } else if (output["Errors"] !== undefined && output["Errors"]["member"] !== undefined) {
    contents.Errors = de_BatchDescribeTypeConfigurationsErrors(
      __getArrayIfSingleItem(output["Errors"]["member"]),
      context
    );
  }
  if (output.UnprocessedTypeConfigurations === "") {
    contents.UnprocessedTypeConfigurations = [];
  } else if (
    output["UnprocessedTypeConfigurations"] !== undefined &&
    output["UnprocessedTypeConfigurations"]["member"] !== undefined
  ) {
    contents.UnprocessedTypeConfigurations = de_UnprocessedTypeConfigurations(
      __getArrayIfSingleItem(output["UnprocessedTypeConfigurations"]["member"]),
      context
    );
  }
  if (output.TypeConfigurations === "") {
    contents.TypeConfigurations = [];
  } else if (output["TypeConfigurations"] !== undefined && output["TypeConfigurations"]["member"] !== undefined) {
    contents.TypeConfigurations = de_TypeConfigurationDetailsList(
      __getArrayIfSingleItem(output["TypeConfigurations"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryCapabilities
 */
const de_Capabilities = (output: any, context: __SerdeContext): Capability[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCFNRegistryException
 */
const de_CFNRegistryException = (output: any, context: __SerdeContext): CFNRegistryException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryChange
 */
const de_Change = (output: any, context: __SerdeContext): Change => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["HookInvocationCount"] !== undefined) {
    contents.HookInvocationCount = __strictParseInt32(output["HookInvocationCount"]) as number;
  }
  if (output["ResourceChange"] !== undefined) {
    contents.ResourceChange = de_ResourceChange(output["ResourceChange"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryChanges
 */
const de_Changes = (output: any, context: __SerdeContext): Change[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Change(entry, context);
    });
};

/**
 * deserializeAws_queryChangeSetHook
 */
const de_ChangeSetHook = (output: any, context: __SerdeContext): ChangeSetHook => {
  const contents: any = {};
  if (output["InvocationPoint"] !== undefined) {
    contents.InvocationPoint = __expectString(output["InvocationPoint"]);
  }
  if (output["FailureMode"] !== undefined) {
    contents.FailureMode = __expectString(output["FailureMode"]);
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = __expectString(output["TypeName"]);
  }
  if (output["TypeVersionId"] !== undefined) {
    contents.TypeVersionId = __expectString(output["TypeVersionId"]);
  }
  if (output["TypeConfigurationVersionId"] !== undefined) {
    contents.TypeConfigurationVersionId = __expectString(output["TypeConfigurationVersionId"]);
  }
  if (output["TargetDetails"] !== undefined) {
    contents.TargetDetails = de_ChangeSetHookTargetDetails(output["TargetDetails"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryChangeSetHookResourceTargetDetails
 */
const de_ChangeSetHookResourceTargetDetails = (
  output: any,
  context: __SerdeContext
): ChangeSetHookResourceTargetDetails => {
  const contents: any = {};
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = __expectString(output["LogicalResourceId"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["ResourceAction"] !== undefined) {
    contents.ResourceAction = __expectString(output["ResourceAction"]);
  }
  return contents;
};

/**
 * deserializeAws_queryChangeSetHooks
 */
const de_ChangeSetHooks = (output: any, context: __SerdeContext): ChangeSetHook[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChangeSetHook(entry, context);
    });
};

/**
 * deserializeAws_queryChangeSetHookTargetDetails
 */
const de_ChangeSetHookTargetDetails = (output: any, context: __SerdeContext): ChangeSetHookTargetDetails => {
  const contents: any = {};
  if (output["TargetType"] !== undefined) {
    contents.TargetType = __expectString(output["TargetType"]);
  }
  if (output["ResourceTargetDetails"] !== undefined) {
    contents.ResourceTargetDetails = de_ChangeSetHookResourceTargetDetails(output["ResourceTargetDetails"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryChangeSetNotFoundException
 */
const de_ChangeSetNotFoundException = (output: any, context: __SerdeContext): ChangeSetNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryChangeSetSummaries
 */
const de_ChangeSetSummaries = (output: any, context: __SerdeContext): ChangeSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChangeSetSummary(entry, context);
    });
};

/**
 * deserializeAws_queryChangeSetSummary
 */
const de_ChangeSetSummary = (output: any, context: __SerdeContext): ChangeSetSummary => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = __expectString(output["StackName"]);
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = __expectString(output["ChangeSetId"]);
  }
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName = __expectString(output["ChangeSetName"]);
  }
  if (output["ExecutionStatus"] !== undefined) {
    contents.ExecutionStatus = __expectString(output["ExecutionStatus"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTime"]));
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["IncludeNestedStacks"] !== undefined) {
    contents.IncludeNestedStacks = __parseBoolean(output["IncludeNestedStacks"]);
  }
  if (output["ParentChangeSetId"] !== undefined) {
    contents.ParentChangeSetId = __expectString(output["ParentChangeSetId"]);
  }
  if (output["RootChangeSetId"] !== undefined) {
    contents.RootChangeSetId = __expectString(output["RootChangeSetId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryContinueUpdateRollbackOutput
 */
const de_ContinueUpdateRollbackOutput = (output: any, context: __SerdeContext): ContinueUpdateRollbackOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateChangeSetOutput
 */
const de_CreateChangeSetOutput = (output: any, context: __SerdeContext): CreateChangeSetOutput => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreatedButModifiedException
 */
const de_CreatedButModifiedException = (output: any, context: __SerdeContext): CreatedButModifiedException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateStackInstancesOutput
 */
const de_CreateStackInstancesOutput = (output: any, context: __SerdeContext): CreateStackInstancesOutput => {
  const contents: any = {};
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateStackOutput
 */
const de_CreateStackOutput = (output: any, context: __SerdeContext): CreateStackOutput => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateStackSetOutput
 */
const de_CreateStackSetOutput = (output: any, context: __SerdeContext): CreateStackSetOutput => {
  const contents: any = {};
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = __expectString(output["StackSetId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeactivateOrganizationsAccessOutput
 */
const de_DeactivateOrganizationsAccessOutput = (
  output: any,
  context: __SerdeContext
): DeactivateOrganizationsAccessOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeactivateTypeOutput
 */
const de_DeactivateTypeOutput = (output: any, context: __SerdeContext): DeactivateTypeOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteChangeSetOutput
 */
const de_DeleteChangeSetOutput = (output: any, context: __SerdeContext): DeleteChangeSetOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteStackInstancesOutput
 */
const de_DeleteStackInstancesOutput = (output: any, context: __SerdeContext): DeleteStackInstancesOutput => {
  const contents: any = {};
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteStackSetOutput
 */
const de_DeleteStackSetOutput = (output: any, context: __SerdeContext): DeleteStackSetOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeploymentTargets
 */
const de_DeploymentTargets = (output: any, context: __SerdeContext): DeploymentTargets => {
  const contents: any = {};
  if (output.Accounts === "") {
    contents.Accounts = [];
  } else if (output["Accounts"] !== undefined && output["Accounts"]["member"] !== undefined) {
    contents.Accounts = de_AccountList(__getArrayIfSingleItem(output["Accounts"]["member"]), context);
  }
  if (output["AccountsUrl"] !== undefined) {
    contents.AccountsUrl = __expectString(output["AccountsUrl"]);
  }
  if (output.OrganizationalUnitIds === "") {
    contents.OrganizationalUnitIds = [];
  } else if (output["OrganizationalUnitIds"] !== undefined && output["OrganizationalUnitIds"]["member"] !== undefined) {
    contents.OrganizationalUnitIds = de_OrganizationalUnitIdList(
      __getArrayIfSingleItem(output["OrganizationalUnitIds"]["member"]),
      context
    );
  }
  if (output["AccountFilterType"] !== undefined) {
    contents.AccountFilterType = __expectString(output["AccountFilterType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeregisterTypeOutput
 */
const de_DeregisterTypeOutput = (output: any, context: __SerdeContext): DeregisterTypeOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDescribeAccountLimitsOutput
 */
const de_DescribeAccountLimitsOutput = (output: any, context: __SerdeContext): DescribeAccountLimitsOutput => {
  const contents: any = {};
  if (output.AccountLimits === "") {
    contents.AccountLimits = [];
  } else if (output["AccountLimits"] !== undefined && output["AccountLimits"]["member"] !== undefined) {
    contents.AccountLimits = de_AccountLimitList(__getArrayIfSingleItem(output["AccountLimits"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeChangeSetHooksOutput
 */
const de_DescribeChangeSetHooksOutput = (output: any, context: __SerdeContext): DescribeChangeSetHooksOutput => {
  const contents: any = {};
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = __expectString(output["ChangeSetId"]);
  }
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName = __expectString(output["ChangeSetName"]);
  }
  if (output.Hooks === "") {
    contents.Hooks = [];
  } else if (output["Hooks"] !== undefined && output["Hooks"]["member"] !== undefined) {
    contents.Hooks = de_ChangeSetHooks(__getArrayIfSingleItem(output["Hooks"]["member"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = __expectString(output["StackName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeChangeSetOutput
 */
const de_DescribeChangeSetOutput = (output: any, context: __SerdeContext): DescribeChangeSetOutput => {
  const contents: any = {};
  if (output["ChangeSetName"] !== undefined) {
    contents.ChangeSetName = __expectString(output["ChangeSetName"]);
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = __expectString(output["ChangeSetId"]);
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = __expectString(output["StackName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = de_Parameters(__getArrayIfSingleItem(output["Parameters"]["member"]), context);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTime"]));
  }
  if (output["ExecutionStatus"] !== undefined) {
    contents.ExecutionStatus = __expectString(output["ExecutionStatus"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  if (output.NotificationARNs === "") {
    contents.NotificationARNs = [];
  } else if (output["NotificationARNs"] !== undefined && output["NotificationARNs"]["member"] !== undefined) {
    contents.NotificationARNs = de_NotificationARNs(
      __getArrayIfSingleItem(output["NotificationARNs"]["member"]),
      context
    );
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = de_RollbackConfiguration(output["RollbackConfiguration"], context);
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  } else if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = de_Capabilities(__getArrayIfSingleItem(output["Capabilities"]["member"]), context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_Tags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output.Changes === "") {
    contents.Changes = [];
  } else if (output["Changes"] !== undefined && output["Changes"]["member"] !== undefined) {
    contents.Changes = de_Changes(__getArrayIfSingleItem(output["Changes"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output["IncludeNestedStacks"] !== undefined) {
    contents.IncludeNestedStacks = __parseBoolean(output["IncludeNestedStacks"]);
  }
  if (output["ParentChangeSetId"] !== undefined) {
    contents.ParentChangeSetId = __expectString(output["ParentChangeSetId"]);
  }
  if (output["RootChangeSetId"] !== undefined) {
    contents.RootChangeSetId = __expectString(output["RootChangeSetId"]);
  }
  if (output["OnStackFailure"] !== undefined) {
    contents.OnStackFailure = __expectString(output["OnStackFailure"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeOrganizationsAccessOutput
 */
const de_DescribeOrganizationsAccessOutput = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationsAccessOutput => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribePublisherOutput
 */
const de_DescribePublisherOutput = (output: any, context: __SerdeContext): DescribePublisherOutput => {
  const contents: any = {};
  if (output["PublisherId"] !== undefined) {
    contents.PublisherId = __expectString(output["PublisherId"]);
  }
  if (output["PublisherStatus"] !== undefined) {
    contents.PublisherStatus = __expectString(output["PublisherStatus"]);
  }
  if (output["IdentityProvider"] !== undefined) {
    contents.IdentityProvider = __expectString(output["IdentityProvider"]);
  }
  if (output["PublisherProfile"] !== undefined) {
    contents.PublisherProfile = __expectString(output["PublisherProfile"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackDriftDetectionStatusOutput
 */
const de_DescribeStackDriftDetectionStatusOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackDriftDetectionStatusOutput => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId = __expectString(output["StackDriftDetectionId"]);
  }
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = __expectString(output["StackDriftStatus"]);
  }
  if (output["DetectionStatus"] !== undefined) {
    contents.DetectionStatus = __expectString(output["DetectionStatus"]);
  }
  if (output["DetectionStatusReason"] !== undefined) {
    contents.DetectionStatusReason = __expectString(output["DetectionStatusReason"]);
  }
  if (output["DriftedStackResourceCount"] !== undefined) {
    contents.DriftedStackResourceCount = __strictParseInt32(output["DriftedStackResourceCount"]) as number;
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackEventsOutput
 */
const de_DescribeStackEventsOutput = (output: any, context: __SerdeContext): DescribeStackEventsOutput => {
  const contents: any = {};
  if (output.StackEvents === "") {
    contents.StackEvents = [];
  } else if (output["StackEvents"] !== undefined && output["StackEvents"]["member"] !== undefined) {
    contents.StackEvents = de_StackEvents(__getArrayIfSingleItem(output["StackEvents"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackInstanceOutput
 */
const de_DescribeStackInstanceOutput = (output: any, context: __SerdeContext): DescribeStackInstanceOutput => {
  const contents: any = {};
  if (output["StackInstance"] !== undefined) {
    contents.StackInstance = de_StackInstance(output["StackInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackResourceDriftsOutput
 */
const de_DescribeStackResourceDriftsOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackResourceDriftsOutput => {
  const contents: any = {};
  if (output.StackResourceDrifts === "") {
    contents.StackResourceDrifts = [];
  } else if (output["StackResourceDrifts"] !== undefined && output["StackResourceDrifts"]["member"] !== undefined) {
    contents.StackResourceDrifts = de_StackResourceDrifts(
      __getArrayIfSingleItem(output["StackResourceDrifts"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackResourceOutput
 */
const de_DescribeStackResourceOutput = (output: any, context: __SerdeContext): DescribeStackResourceOutput => {
  const contents: any = {};
  if (output["StackResourceDetail"] !== undefined) {
    contents.StackResourceDetail = de_StackResourceDetail(output["StackResourceDetail"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackResourcesOutput
 */
const de_DescribeStackResourcesOutput = (output: any, context: __SerdeContext): DescribeStackResourcesOutput => {
  const contents: any = {};
  if (output.StackResources === "") {
    contents.StackResources = [];
  } else if (output["StackResources"] !== undefined && output["StackResources"]["member"] !== undefined) {
    contents.StackResources = de_StackResources(__getArrayIfSingleItem(output["StackResources"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackSetOperationOutput
 */
const de_DescribeStackSetOperationOutput = (output: any, context: __SerdeContext): DescribeStackSetOperationOutput => {
  const contents: any = {};
  if (output["StackSetOperation"] !== undefined) {
    contents.StackSetOperation = de_StackSetOperation(output["StackSetOperation"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackSetOutput
 */
const de_DescribeStackSetOutput = (output: any, context: __SerdeContext): DescribeStackSetOutput => {
  const contents: any = {};
  if (output["StackSet"] !== undefined) {
    contents.StackSet = de_StackSet(output["StackSet"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStacksOutput
 */
const de_DescribeStacksOutput = (output: any, context: __SerdeContext): DescribeStacksOutput => {
  const contents: any = {};
  if (output.Stacks === "") {
    contents.Stacks = [];
  } else if (output["Stacks"] !== undefined && output["Stacks"]["member"] !== undefined) {
    contents.Stacks = de_Stacks(__getArrayIfSingleItem(output["Stacks"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTypeOutput
 */
const de_DescribeTypeOutput = (output: any, context: __SerdeContext): DescribeTypeOutput => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = __expectString(output["TypeName"]);
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = __expectString(output["DefaultVersionId"]);
  }
  if (output["IsDefaultVersion"] !== undefined) {
    contents.IsDefaultVersion = __parseBoolean(output["IsDefaultVersion"]);
  }
  if (output["TypeTestsStatus"] !== undefined) {
    contents.TypeTestsStatus = __expectString(output["TypeTestsStatus"]);
  }
  if (output["TypeTestsStatusDescription"] !== undefined) {
    contents.TypeTestsStatusDescription = __expectString(output["TypeTestsStatusDescription"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Schema"] !== undefined) {
    contents.Schema = __expectString(output["Schema"]);
  }
  if (output["ProvisioningType"] !== undefined) {
    contents.ProvisioningType = __expectString(output["ProvisioningType"]);
  }
  if (output["DeprecatedStatus"] !== undefined) {
    contents.DeprecatedStatus = __expectString(output["DeprecatedStatus"]);
  }
  if (output["LoggingConfig"] !== undefined) {
    contents.LoggingConfig = de_LoggingConfig(output["LoggingConfig"], context);
  }
  if (output.RequiredActivatedTypes === "") {
    contents.RequiredActivatedTypes = [];
  } else if (
    output["RequiredActivatedTypes"] !== undefined &&
    output["RequiredActivatedTypes"]["member"] !== undefined
  ) {
    contents.RequiredActivatedTypes = de_RequiredActivatedTypes(
      __getArrayIfSingleItem(output["RequiredActivatedTypes"]["member"]),
      context
    );
  }
  if (output["ExecutionRoleArn"] !== undefined) {
    contents.ExecutionRoleArn = __expectString(output["ExecutionRoleArn"]);
  }
  if (output["Visibility"] !== undefined) {
    contents.Visibility = __expectString(output["Visibility"]);
  }
  if (output["SourceUrl"] !== undefined) {
    contents.SourceUrl = __expectString(output["SourceUrl"]);
  }
  if (output["DocumentationUrl"] !== undefined) {
    contents.DocumentationUrl = __expectString(output["DocumentationUrl"]);
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdated"]));
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["TimeCreated"]));
  }
  if (output["ConfigurationSchema"] !== undefined) {
    contents.ConfigurationSchema = __expectString(output["ConfigurationSchema"]);
  }
  if (output["PublisherId"] !== undefined) {
    contents.PublisherId = __expectString(output["PublisherId"]);
  }
  if (output["OriginalTypeName"] !== undefined) {
    contents.OriginalTypeName = __expectString(output["OriginalTypeName"]);
  }
  if (output["OriginalTypeArn"] !== undefined) {
    contents.OriginalTypeArn = __expectString(output["OriginalTypeArn"]);
  }
  if (output["PublicVersionNumber"] !== undefined) {
    contents.PublicVersionNumber = __expectString(output["PublicVersionNumber"]);
  }
  if (output["LatestPublicVersion"] !== undefined) {
    contents.LatestPublicVersion = __expectString(output["LatestPublicVersion"]);
  }
  if (output["IsActivated"] !== undefined) {
    contents.IsActivated = __parseBoolean(output["IsActivated"]);
  }
  if (output["AutoUpdate"] !== undefined) {
    contents.AutoUpdate = __parseBoolean(output["AutoUpdate"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTypeRegistrationOutput
 */
const de_DescribeTypeRegistrationOutput = (output: any, context: __SerdeContext): DescribeTypeRegistrationOutput => {
  const contents: any = {};
  if (output["ProgressStatus"] !== undefined) {
    contents.ProgressStatus = __expectString(output["ProgressStatus"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn = __expectString(output["TypeArn"]);
  }
  if (output["TypeVersionArn"] !== undefined) {
    contents.TypeVersionArn = __expectString(output["TypeVersionArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDetectStackDriftOutput
 */
const de_DetectStackDriftOutput = (output: any, context: __SerdeContext): DetectStackDriftOutput => {
  const contents: any = {};
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId = __expectString(output["StackDriftDetectionId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDetectStackResourceDriftOutput
 */
const de_DetectStackResourceDriftOutput = (output: any, context: __SerdeContext): DetectStackResourceDriftOutput => {
  const contents: any = {};
  if (output["StackResourceDrift"] !== undefined) {
    contents.StackResourceDrift = de_StackResourceDrift(output["StackResourceDrift"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDetectStackSetDriftOutput
 */
const de_DetectStackSetDriftOutput = (output: any, context: __SerdeContext): DetectStackSetDriftOutput => {
  const contents: any = {};
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEstimateTemplateCostOutput
 */
const de_EstimateTemplateCostOutput = (output: any, context: __SerdeContext): EstimateTemplateCostOutput => {
  const contents: any = {};
  if (output["Url"] !== undefined) {
    contents.Url = __expectString(output["Url"]);
  }
  return contents;
};

/**
 * deserializeAws_queryExecuteChangeSetOutput
 */
const de_ExecuteChangeSetOutput = (output: any, context: __SerdeContext): ExecuteChangeSetOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryExport
 */
const de_Export = (output: any, context: __SerdeContext): Export => {
  const contents: any = {};
  if (output["ExportingStackId"] !== undefined) {
    contents.ExportingStackId = __expectString(output["ExportingStackId"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryExports
 */
const de_Exports = (output: any, context: __SerdeContext): Export[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Export(entry, context);
    });
};

/**
 * deserializeAws_queryGetStackPolicyOutput
 */
const de_GetStackPolicyOutput = (output: any, context: __SerdeContext): GetStackPolicyOutput => {
  const contents: any = {};
  if (output["StackPolicyBody"] !== undefined) {
    contents.StackPolicyBody = __expectString(output["StackPolicyBody"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTemplateOutput
 */
const de_GetTemplateOutput = (output: any, context: __SerdeContext): GetTemplateOutput => {
  const contents: any = {};
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody = __expectString(output["TemplateBody"]);
  }
  if (output.StagesAvailable === "") {
    contents.StagesAvailable = [];
  } else if (output["StagesAvailable"] !== undefined && output["StagesAvailable"]["member"] !== undefined) {
    contents.StagesAvailable = de_StageList(__getArrayIfSingleItem(output["StagesAvailable"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTemplateSummaryOutput
 */
const de_GetTemplateSummaryOutput = (output: any, context: __SerdeContext): GetTemplateSummaryOutput => {
  const contents: any = {};
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = de_ParameterDeclarations(__getArrayIfSingleItem(output["Parameters"]["member"]), context);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  } else if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = de_Capabilities(__getArrayIfSingleItem(output["Capabilities"]["member"]), context);
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason = __expectString(output["CapabilitiesReason"]);
  }
  if (output.ResourceTypes === "") {
    contents.ResourceTypes = [];
  } else if (output["ResourceTypes"] !== undefined && output["ResourceTypes"]["member"] !== undefined) {
    contents.ResourceTypes = de_ResourceTypes(__getArrayIfSingleItem(output["ResourceTypes"]["member"]), context);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata = __expectString(output["Metadata"]);
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  } else if (output["DeclaredTransforms"] !== undefined && output["DeclaredTransforms"]["member"] !== undefined) {
    contents.DeclaredTransforms = de_TransformsList(
      __getArrayIfSingleItem(output["DeclaredTransforms"]["member"]),
      context
    );
  }
  if (output.ResourceIdentifierSummaries === "") {
    contents.ResourceIdentifierSummaries = [];
  } else if (
    output["ResourceIdentifierSummaries"] !== undefined &&
    output["ResourceIdentifierSummaries"]["member"] !== undefined
  ) {
    contents.ResourceIdentifierSummaries = de_ResourceIdentifierSummaries(
      __getArrayIfSingleItem(output["ResourceIdentifierSummaries"]["member"]),
      context
    );
  }
  if (output["Warnings"] !== undefined) {
    contents.Warnings = de_Warnings(output["Warnings"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryImports
 */
const de_Imports = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryImportStacksToStackSetOutput
 */
const de_ImportStacksToStackSetOutput = (output: any, context: __SerdeContext): ImportStacksToStackSetOutput => {
  const contents: any = {};
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientCapabilitiesException
 */
const de_InsufficientCapabilitiesException = (
  output: any,
  context: __SerdeContext
): InsufficientCapabilitiesException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidChangeSetStatusException
 */
const de_InvalidChangeSetStatusException = (output: any, context: __SerdeContext): InvalidChangeSetStatusException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidOperationException
 */
const de_InvalidOperationException = (output: any, context: __SerdeContext): InvalidOperationException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidStateTransitionException
 */
const de_InvalidStateTransitionException = (output: any, context: __SerdeContext): InvalidStateTransitionException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListChangeSetsOutput
 */
const de_ListChangeSetsOutput = (output: any, context: __SerdeContext): ListChangeSetsOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents.Summaries = [];
  } else if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = de_ChangeSetSummaries(__getArrayIfSingleItem(output["Summaries"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListExportsOutput
 */
const de_ListExportsOutput = (output: any, context: __SerdeContext): ListExportsOutput => {
  const contents: any = {};
  if (output.Exports === "") {
    contents.Exports = [];
  } else if (output["Exports"] !== undefined && output["Exports"]["member"] !== undefined) {
    contents.Exports = de_Exports(__getArrayIfSingleItem(output["Exports"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListImportsOutput
 */
const de_ListImportsOutput = (output: any, context: __SerdeContext): ListImportsOutput => {
  const contents: any = {};
  if (output.Imports === "") {
    contents.Imports = [];
  } else if (output["Imports"] !== undefined && output["Imports"]["member"] !== undefined) {
    contents.Imports = de_Imports(__getArrayIfSingleItem(output["Imports"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackInstanceResourceDriftsOutput
 */
const de_ListStackInstanceResourceDriftsOutput = (
  output: any,
  context: __SerdeContext
): ListStackInstanceResourceDriftsOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents.Summaries = [];
  } else if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = de_StackInstanceResourceDriftsSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackInstancesOutput
 */
const de_ListStackInstancesOutput = (output: any, context: __SerdeContext): ListStackInstancesOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents.Summaries = [];
  } else if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = de_StackInstanceSummaries(__getArrayIfSingleItem(output["Summaries"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackResourcesOutput
 */
const de_ListStackResourcesOutput = (output: any, context: __SerdeContext): ListStackResourcesOutput => {
  const contents: any = {};
  if (output.StackResourceSummaries === "") {
    contents.StackResourceSummaries = [];
  } else if (
    output["StackResourceSummaries"] !== undefined &&
    output["StackResourceSummaries"]["member"] !== undefined
  ) {
    contents.StackResourceSummaries = de_StackResourceSummaries(
      __getArrayIfSingleItem(output["StackResourceSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackSetOperationResultsOutput
 */
const de_ListStackSetOperationResultsOutput = (
  output: any,
  context: __SerdeContext
): ListStackSetOperationResultsOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents.Summaries = [];
  } else if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = de_StackSetOperationResultSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackSetOperationsOutput
 */
const de_ListStackSetOperationsOutput = (output: any, context: __SerdeContext): ListStackSetOperationsOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents.Summaries = [];
  } else if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = de_StackSetOperationSummaries(__getArrayIfSingleItem(output["Summaries"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackSetsOutput
 */
const de_ListStackSetsOutput = (output: any, context: __SerdeContext): ListStackSetsOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents.Summaries = [];
  } else if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = de_StackSetSummaries(__getArrayIfSingleItem(output["Summaries"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStacksOutput
 */
const de_ListStacksOutput = (output: any, context: __SerdeContext): ListStacksOutput => {
  const contents: any = {};
  if (output.StackSummaries === "") {
    contents.StackSummaries = [];
  } else if (output["StackSummaries"] !== undefined && output["StackSummaries"]["member"] !== undefined) {
    contents.StackSummaries = de_StackSummaries(__getArrayIfSingleItem(output["StackSummaries"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTypeRegistrationsOutput
 */
const de_ListTypeRegistrationsOutput = (output: any, context: __SerdeContext): ListTypeRegistrationsOutput => {
  const contents: any = {};
  if (output.RegistrationTokenList === "") {
    contents.RegistrationTokenList = [];
  } else if (output["RegistrationTokenList"] !== undefined && output["RegistrationTokenList"]["member"] !== undefined) {
    contents.RegistrationTokenList = de_RegistrationTokenList(
      __getArrayIfSingleItem(output["RegistrationTokenList"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTypesOutput
 */
const de_ListTypesOutput = (output: any, context: __SerdeContext): ListTypesOutput => {
  const contents: any = {};
  if (output.TypeSummaries === "") {
    contents.TypeSummaries = [];
  } else if (output["TypeSummaries"] !== undefined && output["TypeSummaries"]["member"] !== undefined) {
    contents.TypeSummaries = de_TypeSummaries(__getArrayIfSingleItem(output["TypeSummaries"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTypeVersionsOutput
 */
const de_ListTypeVersionsOutput = (output: any, context: __SerdeContext): ListTypeVersionsOutput => {
  const contents: any = {};
  if (output.TypeVersionSummaries === "") {
    contents.TypeVersionSummaries = [];
  } else if (output["TypeVersionSummaries"] !== undefined && output["TypeVersionSummaries"]["member"] !== undefined) {
    contents.TypeVersionSummaries = de_TypeVersionSummaries(
      __getArrayIfSingleItem(output["TypeVersionSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoggingConfig
 */
const de_LoggingConfig = (output: any, context: __SerdeContext): LoggingConfig => {
  const contents: any = {};
  if (output["LogRoleArn"] !== undefined) {
    contents.LogRoleArn = __expectString(output["LogRoleArn"]);
  }
  if (output["LogGroupName"] !== undefined) {
    contents.LogGroupName = __expectString(output["LogGroupName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLogicalResourceIds
 */
const de_LogicalResourceIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryManagedExecution
 */
const de_ManagedExecution = (output: any, context: __SerdeContext): ManagedExecution => {
  const contents: any = {};
  if (output["Active"] !== undefined) {
    contents.Active = __parseBoolean(output["Active"]);
  }
  return contents;
};

/**
 * deserializeAws_queryModuleInfo
 */
const de_ModuleInfo = (output: any, context: __SerdeContext): ModuleInfo => {
  const contents: any = {};
  if (output["TypeHierarchy"] !== undefined) {
    contents.TypeHierarchy = __expectString(output["TypeHierarchy"]);
  }
  if (output["LogicalIdHierarchy"] !== undefined) {
    contents.LogicalIdHierarchy = __expectString(output["LogicalIdHierarchy"]);
  }
  return contents;
};

/**
 * deserializeAws_queryNameAlreadyExistsException
 */
const de_NameAlreadyExistsException = (output: any, context: __SerdeContext): NameAlreadyExistsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryNotificationARNs
 */
const de_NotificationARNs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryOperationIdAlreadyExistsException
 */
const de_OperationIdAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): OperationIdAlreadyExistsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationInProgressException
 */
const de_OperationInProgressException = (output: any, context: __SerdeContext): OperationInProgressException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationNotFoundException
 */
const de_OperationNotFoundException = (output: any, context: __SerdeContext): OperationNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationStatusCheckFailedException
 */
const de_OperationStatusCheckFailedException = (
  output: any,
  context: __SerdeContext
): OperationStatusCheckFailedException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOrganizationalUnitIdList
 */
const de_OrganizationalUnitIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryOutput
 */
const de_Output = (output: any, context: __SerdeContext): Output => {
  const contents: any = {};
  if (output["OutputKey"] !== undefined) {
    contents.OutputKey = __expectString(output["OutputKey"]);
  }
  if (output["OutputValue"] !== undefined) {
    contents.OutputValue = __expectString(output["OutputValue"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["ExportName"] !== undefined) {
    contents.ExportName = __expectString(output["ExportName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOutputs
 */
const de_Outputs = (output: any, context: __SerdeContext): Output[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Output(entry, context);
    });
};

/**
 * deserializeAws_queryParameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  const contents: any = {};
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = __expectString(output["ParameterKey"]);
  }
  if (output["ParameterValue"] !== undefined) {
    contents.ParameterValue = __expectString(output["ParameterValue"]);
  }
  if (output["UsePreviousValue"] !== undefined) {
    contents.UsePreviousValue = __parseBoolean(output["UsePreviousValue"]);
  }
  if (output["ResolvedValue"] !== undefined) {
    contents.ResolvedValue = __expectString(output["ResolvedValue"]);
  }
  return contents;
};

/**
 * deserializeAws_queryParameterConstraints
 */
const de_ParameterConstraints = (output: any, context: __SerdeContext): ParameterConstraints => {
  const contents: any = {};
  if (output.AllowedValues === "") {
    contents.AllowedValues = [];
  } else if (output["AllowedValues"] !== undefined && output["AllowedValues"]["member"] !== undefined) {
    contents.AllowedValues = de_AllowedValues(__getArrayIfSingleItem(output["AllowedValues"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryParameterDeclaration
 */
const de_ParameterDeclaration = (output: any, context: __SerdeContext): ParameterDeclaration => {
  const contents: any = {};
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = __expectString(output["ParameterKey"]);
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["ParameterType"] !== undefined) {
    contents.ParameterType = __expectString(output["ParameterType"]);
  }
  if (output["NoEcho"] !== undefined) {
    contents.NoEcho = __parseBoolean(output["NoEcho"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["ParameterConstraints"] !== undefined) {
    contents.ParameterConstraints = de_ParameterConstraints(output["ParameterConstraints"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryParameterDeclarations
 */
const de_ParameterDeclarations = (output: any, context: __SerdeContext): ParameterDeclaration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParameterDeclaration(entry, context);
    });
};

/**
 * deserializeAws_queryParameters
 */
const de_Parameters = (output: any, context: __SerdeContext): Parameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Parameter(entry, context);
    });
};

/**
 * deserializeAws_queryPhysicalResourceIdContext
 */
const de_PhysicalResourceIdContext = (
  output: any,
  context: __SerdeContext
): PhysicalResourceIdContextKeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhysicalResourceIdContextKeyValuePair(entry, context);
    });
};

/**
 * deserializeAws_queryPhysicalResourceIdContextKeyValuePair
 */
const de_PhysicalResourceIdContextKeyValuePair = (
  output: any,
  context: __SerdeContext
): PhysicalResourceIdContextKeyValuePair => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPropertyDifference
 */
const de_PropertyDifference = (output: any, context: __SerdeContext): PropertyDifference => {
  const contents: any = {};
  if (output["PropertyPath"] !== undefined) {
    contents.PropertyPath = __expectString(output["PropertyPath"]);
  }
  if (output["ExpectedValue"] !== undefined) {
    contents.ExpectedValue = __expectString(output["ExpectedValue"]);
  }
  if (output["ActualValue"] !== undefined) {
    contents.ActualValue = __expectString(output["ActualValue"]);
  }
  if (output["DifferenceType"] !== undefined) {
    contents.DifferenceType = __expectString(output["DifferenceType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPropertyDifferences
 */
const de_PropertyDifferences = (output: any, context: __SerdeContext): PropertyDifference[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PropertyDifference(entry, context);
    });
};

/**
 * deserializeAws_queryPublishTypeOutput
 */
const de_PublishTypeOutput = (output: any, context: __SerdeContext): PublishTypeOutput => {
  const contents: any = {};
  if (output["PublicTypeArn"] !== undefined) {
    contents.PublicTypeArn = __expectString(output["PublicTypeArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRecordHandlerProgressOutput
 */
const de_RecordHandlerProgressOutput = (output: any, context: __SerdeContext): RecordHandlerProgressOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryRegionList
 */
const de_RegionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryRegisterPublisherOutput
 */
const de_RegisterPublisherOutput = (output: any, context: __SerdeContext): RegisterPublisherOutput => {
  const contents: any = {};
  if (output["PublisherId"] !== undefined) {
    contents.PublisherId = __expectString(output["PublisherId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegisterTypeOutput
 */
const de_RegisterTypeOutput = (output: any, context: __SerdeContext): RegisterTypeOutput => {
  const contents: any = {};
  if (output["RegistrationToken"] !== undefined) {
    contents.RegistrationToken = __expectString(output["RegistrationToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegistrationTokenList
 */
const de_RegistrationTokenList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryRequiredActivatedType
 */
const de_RequiredActivatedType = (output: any, context: __SerdeContext): RequiredActivatedType => {
  const contents: any = {};
  if (output["TypeNameAlias"] !== undefined) {
    contents.TypeNameAlias = __expectString(output["TypeNameAlias"]);
  }
  if (output["OriginalTypeName"] !== undefined) {
    contents.OriginalTypeName = __expectString(output["OriginalTypeName"]);
  }
  if (output["PublisherId"] !== undefined) {
    contents.PublisherId = __expectString(output["PublisherId"]);
  }
  if (output.SupportedMajorVersions === "") {
    contents.SupportedMajorVersions = [];
  } else if (
    output["SupportedMajorVersions"] !== undefined &&
    output["SupportedMajorVersions"]["member"] !== undefined
  ) {
    contents.SupportedMajorVersions = de_SupportedMajorVersions(
      __getArrayIfSingleItem(output["SupportedMajorVersions"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryRequiredActivatedTypes
 */
const de_RequiredActivatedTypes = (output: any, context: __SerdeContext): RequiredActivatedType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RequiredActivatedType(entry, context);
    });
};

/**
 * deserializeAws_queryResourceChange
 */
const de_ResourceChange = (output: any, context: __SerdeContext): ResourceChange => {
  const contents: any = {};
  if (output["Action"] !== undefined) {
    contents.Action = __expectString(output["Action"]);
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = __expectString(output["LogicalResourceId"]);
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = __expectString(output["PhysicalResourceId"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["Replacement"] !== undefined) {
    contents.Replacement = __expectString(output["Replacement"]);
  }
  if (output.Scope === "") {
    contents.Scope = [];
  } else if (output["Scope"] !== undefined && output["Scope"]["member"] !== undefined) {
    contents.Scope = de_Scope(__getArrayIfSingleItem(output["Scope"]["member"]), context);
  }
  if (output.Details === "") {
    contents.Details = [];
  } else if (output["Details"] !== undefined && output["Details"]["member"] !== undefined) {
    contents.Details = de_ResourceChangeDetails(__getArrayIfSingleItem(output["Details"]["member"]), context);
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = __expectString(output["ChangeSetId"]);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = de_ModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceChangeDetail
 */
const de_ResourceChangeDetail = (output: any, context: __SerdeContext): ResourceChangeDetail => {
  const contents: any = {};
  if (output["Target"] !== undefined) {
    contents.Target = de_ResourceTargetDefinition(output["Target"], context);
  }
  if (output["Evaluation"] !== undefined) {
    contents.Evaluation = __expectString(output["Evaluation"]);
  }
  if (output["ChangeSource"] !== undefined) {
    contents.ChangeSource = __expectString(output["ChangeSource"]);
  }
  if (output["CausingEntity"] !== undefined) {
    contents.CausingEntity = __expectString(output["CausingEntity"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceChangeDetails
 */
const de_ResourceChangeDetails = (output: any, context: __SerdeContext): ResourceChangeDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceChangeDetail(entry, context);
    });
};

/**
 * deserializeAws_queryResourceIdentifiers
 */
const de_ResourceIdentifiers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryResourceIdentifierSummaries
 */
const de_ResourceIdentifierSummaries = (output: any, context: __SerdeContext): ResourceIdentifierSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceIdentifierSummary(entry, context);
    });
};

/**
 * deserializeAws_queryResourceIdentifierSummary
 */
const de_ResourceIdentifierSummary = (output: any, context: __SerdeContext): ResourceIdentifierSummary => {
  const contents: any = {};
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output.LogicalResourceIds === "") {
    contents.LogicalResourceIds = [];
  } else if (output["LogicalResourceIds"] !== undefined && output["LogicalResourceIds"]["member"] !== undefined) {
    contents.LogicalResourceIds = de_LogicalResourceIds(
      __getArrayIfSingleItem(output["LogicalResourceIds"]["member"]),
      context
    );
  }
  if (output.ResourceIdentifiers === "") {
    contents.ResourceIdentifiers = [];
  } else if (output["ResourceIdentifiers"] !== undefined && output["ResourceIdentifiers"]["member"] !== undefined) {
    contents.ResourceIdentifiers = de_ResourceIdentifiers(
      __getArrayIfSingleItem(output["ResourceIdentifiers"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryResourceTargetDefinition
 */
const de_ResourceTargetDefinition = (output: any, context: __SerdeContext): ResourceTargetDefinition => {
  const contents: any = {};
  if (output["Attribute"] !== undefined) {
    contents.Attribute = __expectString(output["Attribute"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["RequiresRecreation"] !== undefined) {
    contents.RequiresRecreation = __expectString(output["RequiresRecreation"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceTypes
 */
const de_ResourceTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryRollbackConfiguration
 */
const de_RollbackConfiguration = (output: any, context: __SerdeContext): RollbackConfiguration => {
  const contents: any = {};
  if (output.RollbackTriggers === "") {
    contents.RollbackTriggers = [];
  } else if (output["RollbackTriggers"] !== undefined && output["RollbackTriggers"]["member"] !== undefined) {
    contents.RollbackTriggers = de_RollbackTriggers(
      __getArrayIfSingleItem(output["RollbackTriggers"]["member"]),
      context
    );
  }
  if (output["MonitoringTimeInMinutes"] !== undefined) {
    contents.MonitoringTimeInMinutes = __strictParseInt32(output["MonitoringTimeInMinutes"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackStackOutput
 */
const de_RollbackStackOutput = (output: any, context: __SerdeContext): RollbackStackOutput => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackTrigger
 */
const de_RollbackTrigger = (output: any, context: __SerdeContext): RollbackTrigger => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackTriggers
 */
const de_RollbackTriggers = (output: any, context: __SerdeContext): RollbackTrigger[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RollbackTrigger(entry, context);
    });
};

/**
 * deserializeAws_queryScope
 */
const de_Scope = (output: any, context: __SerdeContext): ResourceAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySetTypeConfigurationOutput
 */
const de_SetTypeConfigurationOutput = (output: any, context: __SerdeContext): SetTypeConfigurationOutput => {
  const contents: any = {};
  if (output["ConfigurationArn"] !== undefined) {
    contents.ConfigurationArn = __expectString(output["ConfigurationArn"]);
  }
  return contents;
};

/**
 * deserializeAws_querySetTypeDefaultVersionOutput
 */
const de_SetTypeDefaultVersionOutput = (output: any, context: __SerdeContext): SetTypeDefaultVersionOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryStack
 */
const de_Stack = (output: any, context: __SerdeContext): Stack => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = __expectString(output["StackName"]);
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = __expectString(output["ChangeSetId"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = de_Parameters(__getArrayIfSingleItem(output["Parameters"]["member"]), context);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTime"]));
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DeletionTime"]));
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdatedTime"]));
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = de_RollbackConfiguration(output["RollbackConfiguration"], context);
  }
  if (output["StackStatus"] !== undefined) {
    contents.StackStatus = __expectString(output["StackStatus"]);
  }
  if (output["StackStatusReason"] !== undefined) {
    contents.StackStatusReason = __expectString(output["StackStatusReason"]);
  }
  if (output["DisableRollback"] !== undefined) {
    contents.DisableRollback = __parseBoolean(output["DisableRollback"]);
  }
  if (output.NotificationARNs === "") {
    contents.NotificationARNs = [];
  } else if (output["NotificationARNs"] !== undefined && output["NotificationARNs"]["member"] !== undefined) {
    contents.NotificationARNs = de_NotificationARNs(
      __getArrayIfSingleItem(output["NotificationARNs"]["member"]),
      context
    );
  }
  if (output["TimeoutInMinutes"] !== undefined) {
    contents.TimeoutInMinutes = __strictParseInt32(output["TimeoutInMinutes"]) as number;
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  } else if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = de_Capabilities(__getArrayIfSingleItem(output["Capabilities"]["member"]), context);
  }
  if (output.Outputs === "") {
    contents.Outputs = [];
  } else if (output["Outputs"] !== undefined && output["Outputs"]["member"] !== undefined) {
    contents.Outputs = de_Outputs(__getArrayIfSingleItem(output["Outputs"]["member"]), context);
  }
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = __expectString(output["RoleARN"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_Tags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["EnableTerminationProtection"] !== undefined) {
    contents.EnableTerminationProtection = __parseBoolean(output["EnableTerminationProtection"]);
  }
  if (output["ParentId"] !== undefined) {
    contents.ParentId = __expectString(output["ParentId"]);
  }
  if (output["RootId"] !== undefined) {
    contents.RootId = __expectString(output["RootId"]);
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = de_StackDriftInformation(output["DriftInformation"], context);
  }
  if (output["RetainExceptOnCreate"] !== undefined) {
    contents.RetainExceptOnCreate = __parseBoolean(output["RetainExceptOnCreate"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackDriftInformation
 */
const de_StackDriftInformation = (output: any, context: __SerdeContext): StackDriftInformation => {
  const contents: any = {};
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = __expectString(output["StackDriftStatus"]);
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastCheckTimestamp"]));
  }
  return contents;
};

/**
 * deserializeAws_queryStackDriftInformationSummary
 */
const de_StackDriftInformationSummary = (output: any, context: __SerdeContext): StackDriftInformationSummary => {
  const contents: any = {};
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = __expectString(output["StackDriftStatus"]);
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastCheckTimestamp"]));
  }
  return contents;
};

/**
 * deserializeAws_queryStackEvent
 */
const de_StackEvent = (output: any, context: __SerdeContext): StackEvent => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["EventId"] !== undefined) {
    contents.EventId = __expectString(output["EventId"]);
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = __expectString(output["StackName"]);
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = __expectString(output["LogicalResourceId"]);
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = __expectString(output["PhysicalResourceId"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = __expectString(output["ResourceStatus"]);
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = __expectString(output["ResourceStatusReason"]);
  }
  if (output["ResourceProperties"] !== undefined) {
    contents.ResourceProperties = __expectString(output["ResourceProperties"]);
  }
  if (output["ClientRequestToken"] !== undefined) {
    contents.ClientRequestToken = __expectString(output["ClientRequestToken"]);
  }
  if (output["HookType"] !== undefined) {
    contents.HookType = __expectString(output["HookType"]);
  }
  if (output["HookStatus"] !== undefined) {
    contents.HookStatus = __expectString(output["HookStatus"]);
  }
  if (output["HookStatusReason"] !== undefined) {
    contents.HookStatusReason = __expectString(output["HookStatusReason"]);
  }
  if (output["HookInvocationPoint"] !== undefined) {
    contents.HookInvocationPoint = __expectString(output["HookInvocationPoint"]);
  }
  if (output["HookFailureMode"] !== undefined) {
    contents.HookFailureMode = __expectString(output["HookFailureMode"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackEvents
 */
const de_StackEvents = (output: any, context: __SerdeContext): StackEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackEvent(entry, context);
    });
};

/**
 * deserializeAws_queryStackInstance
 */
const de_StackInstance = (output: any, context: __SerdeContext): StackInstance => {
  const contents: any = {};
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = __expectString(output["StackSetId"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["Account"] !== undefined) {
    contents.Account = __expectString(output["Account"]);
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output.ParameterOverrides === "") {
    contents.ParameterOverrides = [];
  } else if (output["ParameterOverrides"] !== undefined && output["ParameterOverrides"]["member"] !== undefined) {
    contents.ParameterOverrides = de_Parameters(
      __getArrayIfSingleItem(output["ParameterOverrides"]["member"]),
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StackInstanceStatus"] !== undefined) {
    contents.StackInstanceStatus = de_StackInstanceComprehensiveStatus(output["StackInstanceStatus"], context);
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = __expectString(output["OrganizationalUnitId"]);
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = __expectString(output["DriftStatus"]);
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["LastDriftCheckTimestamp"])
    );
  }
  if (output["LastOperationId"] !== undefined) {
    contents.LastOperationId = __expectString(output["LastOperationId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackInstanceComprehensiveStatus
 */
const de_StackInstanceComprehensiveStatus = (
  output: any,
  context: __SerdeContext
): StackInstanceComprehensiveStatus => {
  const contents: any = {};
  if (output["DetailedStatus"] !== undefined) {
    contents.DetailedStatus = __expectString(output["DetailedStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackInstanceNotFoundException
 */
const de_StackInstanceNotFoundException = (output: any, context: __SerdeContext): StackInstanceNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackInstanceResourceDriftsSummaries
 */
const de_StackInstanceResourceDriftsSummaries = (
  output: any,
  context: __SerdeContext
): StackInstanceResourceDriftsSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackInstanceResourceDriftsSummary(entry, context);
    });
};

/**
 * deserializeAws_queryStackInstanceResourceDriftsSummary
 */
const de_StackInstanceResourceDriftsSummary = (
  output: any,
  context: __SerdeContext
): StackInstanceResourceDriftsSummary => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = __expectString(output["LogicalResourceId"]);
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = __expectString(output["PhysicalResourceId"]);
  }
  if (output.PhysicalResourceIdContext === "") {
    contents.PhysicalResourceIdContext = [];
  } else if (
    output["PhysicalResourceIdContext"] !== undefined &&
    output["PhysicalResourceIdContext"]["member"] !== undefined
  ) {
    contents.PhysicalResourceIdContext = de_PhysicalResourceIdContext(
      __getArrayIfSingleItem(output["PhysicalResourceIdContext"]["member"]),
      context
    );
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output.PropertyDifferences === "") {
    contents.PropertyDifferences = [];
  } else if (output["PropertyDifferences"] !== undefined && output["PropertyDifferences"]["member"] !== undefined) {
    contents.PropertyDifferences = de_PropertyDifferences(
      __getArrayIfSingleItem(output["PropertyDifferences"]["member"]),
      context
    );
  }
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = __expectString(output["StackResourceDriftStatus"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  return contents;
};

/**
 * deserializeAws_queryStackInstanceSummaries
 */
const de_StackInstanceSummaries = (output: any, context: __SerdeContext): StackInstanceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackInstanceSummary(entry, context);
    });
};

/**
 * deserializeAws_queryStackInstanceSummary
 */
const de_StackInstanceSummary = (output: any, context: __SerdeContext): StackInstanceSummary => {
  const contents: any = {};
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = __expectString(output["StackSetId"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["Account"] !== undefined) {
    contents.Account = __expectString(output["Account"]);
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  if (output["StackInstanceStatus"] !== undefined) {
    contents.StackInstanceStatus = de_StackInstanceComprehensiveStatus(output["StackInstanceStatus"], context);
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = __expectString(output["OrganizationalUnitId"]);
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = __expectString(output["DriftStatus"]);
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["LastDriftCheckTimestamp"])
    );
  }
  if (output["LastOperationId"] !== undefined) {
    contents.LastOperationId = __expectString(output["LastOperationId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackNotFoundException
 */
const de_StackNotFoundException = (output: any, context: __SerdeContext): StackNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackResource
 */
const de_StackResource = (output: any, context: __SerdeContext): StackResource => {
  const contents: any = {};
  if (output["StackName"] !== undefined) {
    contents.StackName = __expectString(output["StackName"]);
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = __expectString(output["LogicalResourceId"]);
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = __expectString(output["PhysicalResourceId"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = __expectString(output["ResourceStatus"]);
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = __expectString(output["ResourceStatusReason"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = de_StackResourceDriftInformation(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = de_ModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackResourceDetail
 */
const de_StackResourceDetail = (output: any, context: __SerdeContext): StackResourceDetail => {
  const contents: any = {};
  if (output["StackName"] !== undefined) {
    contents.StackName = __expectString(output["StackName"]);
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = __expectString(output["LogicalResourceId"]);
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = __expectString(output["PhysicalResourceId"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["LastUpdatedTimestamp"] !== undefined) {
    contents.LastUpdatedTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdatedTimestamp"]));
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = __expectString(output["ResourceStatus"]);
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = __expectString(output["ResourceStatusReason"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata = __expectString(output["Metadata"]);
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = de_StackResourceDriftInformation(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = de_ModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackResourceDrift
 */
const de_StackResourceDrift = (output: any, context: __SerdeContext): StackResourceDrift => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = __expectString(output["LogicalResourceId"]);
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = __expectString(output["PhysicalResourceId"]);
  }
  if (output.PhysicalResourceIdContext === "") {
    contents.PhysicalResourceIdContext = [];
  } else if (
    output["PhysicalResourceIdContext"] !== undefined &&
    output["PhysicalResourceIdContext"]["member"] !== undefined
  ) {
    contents.PhysicalResourceIdContext = de_PhysicalResourceIdContext(
      __getArrayIfSingleItem(output["PhysicalResourceIdContext"]["member"]),
      context
    );
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["ExpectedProperties"] !== undefined) {
    contents.ExpectedProperties = __expectString(output["ExpectedProperties"]);
  }
  if (output["ActualProperties"] !== undefined) {
    contents.ActualProperties = __expectString(output["ActualProperties"]);
  }
  if (output.PropertyDifferences === "") {
    contents.PropertyDifferences = [];
  } else if (output["PropertyDifferences"] !== undefined && output["PropertyDifferences"]["member"] !== undefined) {
    contents.PropertyDifferences = de_PropertyDifferences(
      __getArrayIfSingleItem(output["PropertyDifferences"]["member"]),
      context
    );
  }
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = __expectString(output["StackResourceDriftStatus"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = de_ModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackResourceDriftInformation
 */
const de_StackResourceDriftInformation = (output: any, context: __SerdeContext): StackResourceDriftInformation => {
  const contents: any = {};
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = __expectString(output["StackResourceDriftStatus"]);
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastCheckTimestamp"]));
  }
  return contents;
};

/**
 * deserializeAws_queryStackResourceDriftInformationSummary
 */
const de_StackResourceDriftInformationSummary = (
  output: any,
  context: __SerdeContext
): StackResourceDriftInformationSummary => {
  const contents: any = {};
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = __expectString(output["StackResourceDriftStatus"]);
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastCheckTimestamp"]));
  }
  return contents;
};

/**
 * deserializeAws_queryStackResourceDrifts
 */
const de_StackResourceDrifts = (output: any, context: __SerdeContext): StackResourceDrift[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackResourceDrift(entry, context);
    });
};

/**
 * deserializeAws_queryStackResources
 */
const de_StackResources = (output: any, context: __SerdeContext): StackResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackResource(entry, context);
    });
};

/**
 * deserializeAws_queryStackResourceSummaries
 */
const de_StackResourceSummaries = (output: any, context: __SerdeContext): StackResourceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackResourceSummary(entry, context);
    });
};

/**
 * deserializeAws_queryStackResourceSummary
 */
const de_StackResourceSummary = (output: any, context: __SerdeContext): StackResourceSummary => {
  const contents: any = {};
  if (output["LogicalResourceId"] !== undefined) {
    contents.LogicalResourceId = __expectString(output["LogicalResourceId"]);
  }
  if (output["PhysicalResourceId"] !== undefined) {
    contents.PhysicalResourceId = __expectString(output["PhysicalResourceId"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["LastUpdatedTimestamp"] !== undefined) {
    contents.LastUpdatedTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdatedTimestamp"]));
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = __expectString(output["ResourceStatus"]);
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = __expectString(output["ResourceStatusReason"]);
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = de_StackResourceDriftInformationSummary(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = de_ModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStacks
 */
const de_Stacks = (output: any, context: __SerdeContext): Stack[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Stack(entry, context);
    });
};

/**
 * deserializeAws_queryStackSet
 */
const de_StackSet = (output: any, context: __SerdeContext): StackSet => {
  const contents: any = {};
  if (output["StackSetName"] !== undefined) {
    contents.StackSetName = __expectString(output["StackSetName"]);
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = __expectString(output["StackSetId"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody = __expectString(output["TemplateBody"]);
  }
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = de_Parameters(__getArrayIfSingleItem(output["Parameters"]["member"]), context);
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  } else if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = de_Capabilities(__getArrayIfSingleItem(output["Capabilities"]["member"]), context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_Tags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["StackSetARN"] !== undefined) {
    contents.StackSetARN = __expectString(output["StackSetARN"]);
  }
  if (output["AdministrationRoleARN"] !== undefined) {
    contents.AdministrationRoleARN = __expectString(output["AdministrationRoleARN"]);
  }
  if (output["ExecutionRoleName"] !== undefined) {
    contents.ExecutionRoleName = __expectString(output["ExecutionRoleName"]);
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = de_StackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  if (output["AutoDeployment"] !== undefined) {
    contents.AutoDeployment = de_AutoDeployment(output["AutoDeployment"], context);
  }
  if (output["PermissionModel"] !== undefined) {
    contents.PermissionModel = __expectString(output["PermissionModel"]);
  }
  if (output.OrganizationalUnitIds === "") {
    contents.OrganizationalUnitIds = [];
  } else if (output["OrganizationalUnitIds"] !== undefined && output["OrganizationalUnitIds"]["member"] !== undefined) {
    contents.OrganizationalUnitIds = de_OrganizationalUnitIdList(
      __getArrayIfSingleItem(output["OrganizationalUnitIds"]["member"]),
      context
    );
  }
  if (output["ManagedExecution"] !== undefined) {
    contents.ManagedExecution = de_ManagedExecution(output["ManagedExecution"], context);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["member"] !== undefined) {
    contents.Regions = de_RegionList(__getArrayIfSingleItem(output["Regions"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetDriftDetectionDetails
 */
const de_StackSetDriftDetectionDetails = (output: any, context: __SerdeContext): StackSetDriftDetectionDetails => {
  const contents: any = {};
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = __expectString(output["DriftStatus"]);
  }
  if (output["DriftDetectionStatus"] !== undefined) {
    contents.DriftDetectionStatus = __expectString(output["DriftDetectionStatus"]);
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["LastDriftCheckTimestamp"])
    );
  }
  if (output["TotalStackInstancesCount"] !== undefined) {
    contents.TotalStackInstancesCount = __strictParseInt32(output["TotalStackInstancesCount"]) as number;
  }
  if (output["DriftedStackInstancesCount"] !== undefined) {
    contents.DriftedStackInstancesCount = __strictParseInt32(output["DriftedStackInstancesCount"]) as number;
  }
  if (output["InSyncStackInstancesCount"] !== undefined) {
    contents.InSyncStackInstancesCount = __strictParseInt32(output["InSyncStackInstancesCount"]) as number;
  }
  if (output["InProgressStackInstancesCount"] !== undefined) {
    contents.InProgressStackInstancesCount = __strictParseInt32(output["InProgressStackInstancesCount"]) as number;
  }
  if (output["FailedStackInstancesCount"] !== undefined) {
    contents.FailedStackInstancesCount = __strictParseInt32(output["FailedStackInstancesCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetNotEmptyException
 */
const de_StackSetNotEmptyException = (output: any, context: __SerdeContext): StackSetNotEmptyException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetNotFoundException
 */
const de_StackSetNotFoundException = (output: any, context: __SerdeContext): StackSetNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetOperation
 */
const de_StackSetOperation = (output: any, context: __SerdeContext): StackSetOperation => {
  const contents: any = {};
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = __expectString(output["StackSetId"]);
  }
  if (output["Action"] !== undefined) {
    contents.Action = __expectString(output["Action"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["OperationPreferences"] !== undefined) {
    contents.OperationPreferences = de_StackSetOperationPreferences(output["OperationPreferences"], context);
  }
  if (output["RetainStacks"] !== undefined) {
    contents.RetainStacks = __parseBoolean(output["RetainStacks"]);
  }
  if (output["AdministrationRoleARN"] !== undefined) {
    contents.AdministrationRoleARN = __expectString(output["AdministrationRoleARN"]);
  }
  if (output["ExecutionRoleName"] !== undefined) {
    contents.ExecutionRoleName = __expectString(output["ExecutionRoleName"]);
  }
  if (output["CreationTimestamp"] !== undefined) {
    contents.CreationTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTimestamp"]));
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EndTimestamp"]));
  }
  if (output["DeploymentTargets"] !== undefined) {
    contents.DeploymentTargets = de_DeploymentTargets(output["DeploymentTargets"], context);
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = de_StackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  if (output["StatusDetails"] !== undefined) {
    contents.StatusDetails = de_StackSetOperationStatusDetails(output["StatusDetails"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetOperationPreferences
 */
const de_StackSetOperationPreferences = (output: any, context: __SerdeContext): StackSetOperationPreferences => {
  const contents: any = {};
  if (output["RegionConcurrencyType"] !== undefined) {
    contents.RegionConcurrencyType = __expectString(output["RegionConcurrencyType"]);
  }
  if (output.RegionOrder === "") {
    contents.RegionOrder = [];
  } else if (output["RegionOrder"] !== undefined && output["RegionOrder"]["member"] !== undefined) {
    contents.RegionOrder = de_RegionList(__getArrayIfSingleItem(output["RegionOrder"]["member"]), context);
  }
  if (output["FailureToleranceCount"] !== undefined) {
    contents.FailureToleranceCount = __strictParseInt32(output["FailureToleranceCount"]) as number;
  }
  if (output["FailureTolerancePercentage"] !== undefined) {
    contents.FailureTolerancePercentage = __strictParseInt32(output["FailureTolerancePercentage"]) as number;
  }
  if (output["MaxConcurrentCount"] !== undefined) {
    contents.MaxConcurrentCount = __strictParseInt32(output["MaxConcurrentCount"]) as number;
  }
  if (output["MaxConcurrentPercentage"] !== undefined) {
    contents.MaxConcurrentPercentage = __strictParseInt32(output["MaxConcurrentPercentage"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetOperationResultSummaries
 */
const de_StackSetOperationResultSummaries = (
  output: any,
  context: __SerdeContext
): StackSetOperationResultSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackSetOperationResultSummary(entry, context);
    });
};

/**
 * deserializeAws_queryStackSetOperationResultSummary
 */
const de_StackSetOperationResultSummary = (output: any, context: __SerdeContext): StackSetOperationResultSummary => {
  const contents: any = {};
  if (output["Account"] !== undefined) {
    contents.Account = __expectString(output["Account"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  if (output["AccountGateResult"] !== undefined) {
    contents.AccountGateResult = de_AccountGateResult(output["AccountGateResult"], context);
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = __expectString(output["OrganizationalUnitId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetOperationStatusDetails
 */
const de_StackSetOperationStatusDetails = (output: any, context: __SerdeContext): StackSetOperationStatusDetails => {
  const contents: any = {};
  if (output["FailedStackInstancesCount"] !== undefined) {
    contents.FailedStackInstancesCount = __strictParseInt32(output["FailedStackInstancesCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetOperationSummaries
 */
const de_StackSetOperationSummaries = (output: any, context: __SerdeContext): StackSetOperationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackSetOperationSummary(entry, context);
    });
};

/**
 * deserializeAws_queryStackSetOperationSummary
 */
const de_StackSetOperationSummary = (output: any, context: __SerdeContext): StackSetOperationSummary => {
  const contents: any = {};
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  if (output["Action"] !== undefined) {
    contents.Action = __expectString(output["Action"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CreationTimestamp"] !== undefined) {
    contents.CreationTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTimestamp"]));
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EndTimestamp"]));
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  if (output["StatusDetails"] !== undefined) {
    contents.StatusDetails = de_StackSetOperationStatusDetails(output["StatusDetails"], context);
  }
  if (output["OperationPreferences"] !== undefined) {
    contents.OperationPreferences = de_StackSetOperationPreferences(output["OperationPreferences"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetSummaries
 */
const de_StackSetSummaries = (output: any, context: __SerdeContext): StackSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackSetSummary(entry, context);
    });
};

/**
 * deserializeAws_queryStackSetSummary
 */
const de_StackSetSummary = (output: any, context: __SerdeContext): StackSetSummary => {
  const contents: any = {};
  if (output["StackSetName"] !== undefined) {
    contents.StackSetName = __expectString(output["StackSetName"]);
  }
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = __expectString(output["StackSetId"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["AutoDeployment"] !== undefined) {
    contents.AutoDeployment = de_AutoDeployment(output["AutoDeployment"], context);
  }
  if (output["PermissionModel"] !== undefined) {
    contents.PermissionModel = __expectString(output["PermissionModel"]);
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = __expectString(output["DriftStatus"]);
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["LastDriftCheckTimestamp"])
    );
  }
  if (output["ManagedExecution"] !== undefined) {
    contents.ManagedExecution = de_ManagedExecution(output["ManagedExecution"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSummaries
 */
const de_StackSummaries = (output: any, context: __SerdeContext): StackSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StackSummary(entry, context);
    });
};

/**
 * deserializeAws_queryStackSummary
 */
const de_StackSummary = (output: any, context: __SerdeContext): StackSummary => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  if (output["StackName"] !== undefined) {
    contents.StackName = __expectString(output["StackName"]);
  }
  if (output["TemplateDescription"] !== undefined) {
    contents.TemplateDescription = __expectString(output["TemplateDescription"]);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTime"]));
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdatedTime"]));
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DeletionTime"]));
  }
  if (output["StackStatus"] !== undefined) {
    contents.StackStatus = __expectString(output["StackStatus"]);
  }
  if (output["StackStatusReason"] !== undefined) {
    contents.StackStatusReason = __expectString(output["StackStatusReason"]);
  }
  if (output["ParentId"] !== undefined) {
    contents.ParentId = __expectString(output["ParentId"]);
  }
  if (output["RootId"] !== undefined) {
    contents.RootId = __expectString(output["RootId"]);
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = de_StackDriftInformationSummary(output["DriftInformation"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStageList
 */
const de_StageList = (output: any, context: __SerdeContext): TemplateStage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryStaleRequestException
 */
const de_StaleRequestException = (output: any, context: __SerdeContext): StaleRequestException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStopStackSetOperationOutput
 */
const de_StopStackSetOperationOutput = (output: any, context: __SerdeContext): StopStackSetOperationOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySupportedMajorVersions
 */
const de_SupportedMajorVersions = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_queryTemplateParameter
 */
const de_TemplateParameter = (output: any, context: __SerdeContext): TemplateParameter => {
  const contents: any = {};
  if (output["ParameterKey"] !== undefined) {
    contents.ParameterKey = __expectString(output["ParameterKey"]);
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["NoEcho"] !== undefined) {
    contents.NoEcho = __parseBoolean(output["NoEcho"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTemplateParameters
 */
const de_TemplateParameters = (output: any, context: __SerdeContext): TemplateParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TemplateParameter(entry, context);
    });
};

/**
 * deserializeAws_queryTestTypeOutput
 */
const de_TestTypeOutput = (output: any, context: __SerdeContext): TestTypeOutput => {
  const contents: any = {};
  if (output["TypeVersionArn"] !== undefined) {
    contents.TypeVersionArn = __expectString(output["TypeVersionArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTokenAlreadyExistsException
 */
const de_TokenAlreadyExistsException = (output: any, context: __SerdeContext): TokenAlreadyExistsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTransformsList
 */
const de_TransformsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryTypeConfigurationDetails
 */
const de_TypeConfigurationDetails = (output: any, context: __SerdeContext): TypeConfigurationDetails => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Alias"] !== undefined) {
    contents.Alias = __expectString(output["Alias"]);
  }
  if (output["Configuration"] !== undefined) {
    contents.Configuration = __expectString(output["Configuration"]);
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdated"]));
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn = __expectString(output["TypeArn"]);
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = __expectString(output["TypeName"]);
  }
  if (output["IsDefaultConfiguration"] !== undefined) {
    contents.IsDefaultConfiguration = __parseBoolean(output["IsDefaultConfiguration"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTypeConfigurationDetailsList
 */
const de_TypeConfigurationDetailsList = (output: any, context: __SerdeContext): TypeConfigurationDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TypeConfigurationDetails(entry, context);
    });
};

/**
 * deserializeAws_queryTypeConfigurationIdentifier
 */
const de_TypeConfigurationIdentifier = (output: any, context: __SerdeContext): TypeConfigurationIdentifier => {
  const contents: any = {};
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn = __expectString(output["TypeArn"]);
  }
  if (output["TypeConfigurationAlias"] !== undefined) {
    contents.TypeConfigurationAlias = __expectString(output["TypeConfigurationAlias"]);
  }
  if (output["TypeConfigurationArn"] !== undefined) {
    contents.TypeConfigurationArn = __expectString(output["TypeConfigurationArn"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = __expectString(output["TypeName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTypeConfigurationNotFoundException
 */
const de_TypeConfigurationNotFoundException = (
  output: any,
  context: __SerdeContext
): TypeConfigurationNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTypeNotFoundException
 */
const de_TypeNotFoundException = (output: any, context: __SerdeContext): TypeNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTypeSummaries
 */
const de_TypeSummaries = (output: any, context: __SerdeContext): TypeSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TypeSummary(entry, context);
    });
};

/**
 * deserializeAws_queryTypeSummary
 */
const de_TypeSummary = (output: any, context: __SerdeContext): TypeSummary => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = __expectString(output["TypeName"]);
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = __expectString(output["DefaultVersionId"]);
  }
  if (output["TypeArn"] !== undefined) {
    contents.TypeArn = __expectString(output["TypeArn"]);
  }
  if (output["LastUpdated"] !== undefined) {
    contents.LastUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdated"]));
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["PublisherId"] !== undefined) {
    contents.PublisherId = __expectString(output["PublisherId"]);
  }
  if (output["OriginalTypeName"] !== undefined) {
    contents.OriginalTypeName = __expectString(output["OriginalTypeName"]);
  }
  if (output["PublicVersionNumber"] !== undefined) {
    contents.PublicVersionNumber = __expectString(output["PublicVersionNumber"]);
  }
  if (output["LatestPublicVersion"] !== undefined) {
    contents.LatestPublicVersion = __expectString(output["LatestPublicVersion"]);
  }
  if (output["PublisherIdentity"] !== undefined) {
    contents.PublisherIdentity = __expectString(output["PublisherIdentity"]);
  }
  if (output["PublisherName"] !== undefined) {
    contents.PublisherName = __expectString(output["PublisherName"]);
  }
  if (output["IsActivated"] !== undefined) {
    contents.IsActivated = __parseBoolean(output["IsActivated"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTypeVersionSummaries
 */
const de_TypeVersionSummaries = (output: any, context: __SerdeContext): TypeVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TypeVersionSummary(entry, context);
    });
};

/**
 * deserializeAws_queryTypeVersionSummary
 */
const de_TypeVersionSummary = (output: any, context: __SerdeContext): TypeVersionSummary => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["TypeName"] !== undefined) {
    contents.TypeName = __expectString(output["TypeName"]);
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = __expectString(output["VersionId"]);
  }
  if (output["IsDefaultVersion"] !== undefined) {
    contents.IsDefaultVersion = __parseBoolean(output["IsDefaultVersion"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["TimeCreated"]));
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["PublicVersionNumber"] !== undefined) {
    contents.PublicVersionNumber = __expectString(output["PublicVersionNumber"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnprocessedTypeConfigurations
 */
const de_UnprocessedTypeConfigurations = (output: any, context: __SerdeContext): TypeConfigurationIdentifier[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TypeConfigurationIdentifier(entry, context);
    });
};

/**
 * deserializeAws_queryUpdateStackInstancesOutput
 */
const de_UpdateStackInstancesOutput = (output: any, context: __SerdeContext): UpdateStackInstancesOutput => {
  const contents: any = {};
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateStackOutput
 */
const de_UpdateStackOutput = (output: any, context: __SerdeContext): UpdateStackOutput => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateStackSetOutput
 */
const de_UpdateStackSetOutput = (output: any, context: __SerdeContext): UpdateStackSetOutput => {
  const contents: any = {};
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateTerminationProtectionOutput
 */
const de_UpdateTerminationProtectionOutput = (
  output: any,
  context: __SerdeContext
): UpdateTerminationProtectionOutput => {
  const contents: any = {};
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryValidateTemplateOutput
 */
const de_ValidateTemplateOutput = (output: any, context: __SerdeContext): ValidateTemplateOutput => {
  const contents: any = {};
  if (output.Parameters === "") {
    contents.Parameters = [];
  } else if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = de_TemplateParameters(__getArrayIfSingleItem(output["Parameters"]["member"]), context);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  } else if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = de_Capabilities(__getArrayIfSingleItem(output["Capabilities"]["member"]), context);
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason = __expectString(output["CapabilitiesReason"]);
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  } else if (output["DeclaredTransforms"] !== undefined && output["DeclaredTransforms"]["member"] !== undefined) {
    contents.DeclaredTransforms = de_TransformsList(
      __getArrayIfSingleItem(output["DeclaredTransforms"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryWarnings
 */
const de_Warnings = (output: any, context: __SerdeContext): Warnings => {
  const contents: any = {};
  if (output.UnrecognizedResourceTypes === "") {
    contents.UnrecognizedResourceTypes = [];
  } else if (
    output["UnrecognizedResourceTypes"] !== undefined &&
    output["UnrecognizedResourceTypes"]["member"] !== undefined
  ) {
    contents.UnrecognizedResourceTypes = de_ResourceTypes(
      __getArrayIfSingleItem(output["UnrecognizedResourceTypes"]["member"]),
      context
    );
  }
  return contents;
};

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

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
