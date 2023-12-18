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
    [_A]: _AOA,
    [_V]: _,
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
    [_A]: _AT,
    [_V]: _,
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
    [_A]: _BDTC,
    [_V]: _,
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
    [_A]: _CUS,
    [_V]: _,
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
    [_A]: _CUR,
    [_V]: _,
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
    [_A]: _CCS,
    [_V]: _,
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
    [_A]: _CS,
    [_V]: _,
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
    [_A]: _CSI,
    [_V]: _,
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
    [_A]: _CSS,
    [_V]: _,
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
    [_A]: _DOA,
    [_V]: _,
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
    [_A]: _DT,
    [_V]: _,
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
    [_A]: _DCS,
    [_V]: _,
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
    [_A]: _DS,
    [_V]: _,
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
    [_A]: _DSI,
    [_V]: _,
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
    [_A]: _DSS,
    [_V]: _,
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
    [_A]: _DTe,
    [_V]: _,
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
    [_A]: _DAL,
    [_V]: _,
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
    [_A]: _DCSe,
    [_V]: _,
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
    [_A]: _DCSH,
    [_V]: _,
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
    [_A]: _DOAe,
    [_V]: _,
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
    [_A]: _DP,
    [_V]: _,
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
    [_A]: _DSDDS,
    [_V]: _,
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
    [_A]: _DSE,
    [_V]: _,
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
    [_A]: _DSIe,
    [_V]: _,
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
    [_A]: _DSR,
    [_V]: _,
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
    [_A]: _DSRD,
    [_V]: _,
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
    [_A]: _DSRe,
    [_V]: _,
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
    [_A]: _DSe,
    [_V]: _,
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
    [_A]: _DSSe,
    [_V]: _,
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
    [_A]: _DSSO,
    [_V]: _,
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
    [_A]: _DTes,
    [_V]: _,
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
    [_A]: _DTR,
    [_V]: _,
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
    [_A]: _DSD,
    [_V]: _,
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
    [_A]: _DSRDe,
    [_V]: _,
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
    [_A]: _DSSD,
    [_V]: _,
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
    [_A]: _ETC,
    [_V]: _,
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
    [_A]: _ECS,
    [_V]: _,
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
    [_A]: _GSP,
    [_V]: _,
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
    [_A]: _GT,
    [_V]: _,
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
    [_A]: _GTS,
    [_V]: _,
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
    [_A]: _ISTSS,
    [_V]: _,
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
    [_A]: _LCS,
    [_V]: _,
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
    [_A]: _LE,
    [_V]: _,
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
    [_A]: _LI,
    [_V]: _,
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
    [_A]: _LSIRD,
    [_V]: _,
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
    [_A]: _LSI,
    [_V]: _,
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
    [_A]: _LSR,
    [_V]: _,
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
    [_A]: _LS,
    [_V]: _,
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
    [_A]: _LSSOR,
    [_V]: _,
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
    [_A]: _LSSO,
    [_V]: _,
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
    [_A]: _LSS,
    [_V]: _,
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
    [_A]: _LTR,
    [_V]: _,
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
    [_A]: _LT,
    [_V]: _,
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
    [_A]: _LTV,
    [_V]: _,
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
    [_A]: _PT,
    [_V]: _,
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
    [_A]: _RHP,
    [_V]: _,
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
    [_A]: _RP,
    [_V]: _,
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
    [_A]: _RT,
    [_V]: _,
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
    [_A]: _RS,
    [_V]: _,
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
    [_A]: _SSP,
    [_V]: _,
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
    [_A]: _STC,
    [_V]: _,
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
    [_A]: _STDV,
    [_V]: _,
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
    [_A]: _SR,
    [_V]: _,
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
    [_A]: _SSSO,
    [_V]: _,
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
    [_A]: _TT,
    [_V]: _,
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
    [_A]: _US,
    [_V]: _,
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
    [_A]: _USI,
    [_V]: _,
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
    [_A]: _USS,
    [_V]: _,
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
    [_A]: _UTP,
    [_V]: _,
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
    [_A]: _VT,
    [_V]: _,
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
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_PTA] != null) {
    entries[_PTA] = input[_PTA];
  }
  if (input[_PI] != null) {
    entries[_PI] = input[_PI];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_TNA] != null) {
    entries[_TNA] = input[_TNA];
  }
  if (input[_AU] != null) {
    entries[_AU] = input[_AU];
  }
  if (input[_LC] != null) {
    const memberEntries = se_LoggingConfig(input[_LC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoggingConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ERA] != null) {
    entries[_ERA] = input[_ERA];
  }
  if (input[_VB] != null) {
    entries[_VB] = input[_VB];
  }
  if (input[_MV] != null) {
    entries[_MV] = input[_MV];
  }
  return entries;
};

/**
 * serializeAws_queryAutoDeployment
 */
const se_AutoDeployment = (input: AutoDeployment, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_RSOAR] != null) {
    entries[_RSOAR] = input[_RSOAR];
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
  if (input[_TCI] != null) {
    const memberEntries = se_TypeConfigurationIdentifiers(input[_TCI], context);
    if (input[_TCI]?.length === 0) {
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_RTS] != null) {
    const memberEntries = se_ResourcesToSkip(input[_RTS], context);
    if (input[_RTS]?.length === 0) {
      entries.ResourcesToSkip = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourcesToSkip.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
  }
  return entries;
};

/**
 * serializeAws_queryCreateChangeSetInput
 */
const se_CreateChangeSetInput = (input: CreateChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_TURL] != null) {
    entries[_TURL] = input[_TURL];
  }
  if (input[_UPT] != null) {
    entries[_UPT] = input[_UPT];
  }
  if (input[_P] != null) {
    const memberEntries = se_Parameters(input[_P], context);
    if (input[_P]?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_C] != null) {
    const memberEntries = se_Capabilities(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTe] != null) {
    const memberEntries = se_ResourceTypes(input[_RTe], context);
    if (input[_RTe]?.length === 0) {
      entries.ResourceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_RC] != null) {
    const memberEntries = se_RollbackConfiguration(input[_RC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NARN] != null) {
    const memberEntries = se_NotificationARNs(input[_NARN], context);
    if (input[_NARN]?.length === 0) {
      entries.NotificationARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_Tags(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_CT] != null) {
    entries[_CT] = input[_CT];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_CST] != null) {
    entries[_CST] = input[_CST];
  }
  if (input[_RTI] != null) {
    const memberEntries = se_ResourcesToImport(input[_RTI], context);
    if (input[_RTI]?.length === 0) {
      entries.ResourcesToImport = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourcesToImport.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_INS] != null) {
    entries[_INS] = input[_INS];
  }
  if (input[_OSF] != null) {
    entries[_OSF] = input[_OSF];
  }
  if (input[_IER] != null) {
    entries[_IER] = input[_IER];
  }
  return entries;
};

/**
 * serializeAws_queryCreateStackInput
 */
const se_CreateStackInput = (input: CreateStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_TURL] != null) {
    entries[_TURL] = input[_TURL];
  }
  if (input[_P] != null) {
    const memberEntries = se_Parameters(input[_P], context);
    if (input[_P]?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DR] != null) {
    entries[_DR] = input[_DR];
  }
  if (input[_RC] != null) {
    const memberEntries = se_RollbackConfiguration(input[_RC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TIM] != null) {
    entries[_TIM] = input[_TIM];
  }
  if (input[_NARN] != null) {
    const memberEntries = se_NotificationARNs(input[_NARN], context);
    if (input[_NARN]?.length === 0) {
      entries.NotificationARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_C] != null) {
    const memberEntries = se_Capabilities(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTe] != null) {
    const memberEntries = se_ResourceTypes(input[_RTe], context);
    if (input[_RTe]?.length === 0) {
      entries.ResourceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_OF] != null) {
    entries[_OF] = input[_OF];
  }
  if (input[_SPB] != null) {
    entries[_SPB] = input[_SPB];
  }
  if (input[_SPURL] != null) {
    entries[_SPURL] = input[_SPURL];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_Tags(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
  }
  if (input[_ETP] != null) {
    entries[_ETP] = input[_ETP];
  }
  if (input[_REOC] != null) {
    entries[_REOC] = input[_REOC];
  }
  return entries;
};

/**
 * serializeAws_queryCreateStackInstancesInput
 */
const se_CreateStackInstancesInput = (input: CreateStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_Ac] != null) {
    const memberEntries = se_AccountList(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DTep] != null) {
    const memberEntries = se_DeploymentTargets(input[_DTep], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_R] != null) {
    const memberEntries = se_RegionList(input[_R], context);
    if (input[_R]?.length === 0) {
      entries.Regions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PO] != null) {
    const memberEntries = se_Parameters(input[_PO], context);
    if (input[_PO]?.length === 0) {
      entries.ParameterOverrides = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OP] != null) {
    const memberEntries = se_StackSetOperationPreferences(input[_OP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OI] === undefined) {
    input[_OI] = generateIdempotencyToken();
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryCreateStackSetInput
 */
const se_CreateStackSetInput = (input: CreateStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_TURL] != null) {
    entries[_TURL] = input[_TURL];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_P] != null) {
    const memberEntries = se_Parameters(input[_P], context);
    if (input[_P]?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_C] != null) {
    const memberEntries = se_Capabilities(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_Tags(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ARARN] != null) {
    entries[_ARARN] = input[_ARARN];
  }
  if (input[_ERN] != null) {
    entries[_ERN] = input[_ERN];
  }
  if (input[_PM] != null) {
    entries[_PM] = input[_PM];
  }
  if (input[_AD] != null) {
    const memberEntries = se_AutoDeployment(input[_AD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoDeployment.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_CRT] === undefined) {
    input[_CRT] = generateIdempotencyToken();
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
  }
  if (input[_ME] != null) {
    const memberEntries = se_ManagedExecution(input[_ME], context);
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
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteChangeSetInput
 */
const se_DeleteChangeSetInput = (input: DeleteChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteStackInput
 */
const se_DeleteStackInput = (input: DeleteStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_RR] != null) {
    const memberEntries = se_RetainResources(input[_RR], context);
    if (input[_RR]?.length === 0) {
      entries.RetainResources = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RetainResources.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteStackInstancesInput
 */
const se_DeleteStackInstancesInput = (input: DeleteStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_Ac] != null) {
    const memberEntries = se_AccountList(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DTep] != null) {
    const memberEntries = se_DeploymentTargets(input[_DTep], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_R] != null) {
    const memberEntries = se_RegionList(input[_R], context);
    if (input[_R]?.length === 0) {
      entries.Regions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OP] != null) {
    const memberEntries = se_StackSetOperationPreferences(input[_OP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RSe] != null) {
    entries[_RSe] = input[_RSe];
  }
  if (input[_OI] === undefined) {
    input[_OI] = generateIdempotencyToken();
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteStackSetInput
 */
const se_DeleteStackSetInput = (input: DeleteStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryDeploymentTargets
 */
const se_DeploymentTargets = (input: DeploymentTargets, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ac] != null) {
    const memberEntries = se_AccountList(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AUc] != null) {
    entries[_AUc] = input[_AUc];
  }
  if (input[_OUI] != null) {
    const memberEntries = se_OrganizationalUnitIdList(input[_OUI], context);
    if (input[_OUI]?.length === 0) {
      entries.OrganizationalUnitIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OrganizationalUnitIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AFT] != null) {
    entries[_AFT] = input[_AFT];
  }
  return entries;
};

/**
 * serializeAws_queryDeregisterTypeInput
 */
const se_DeregisterTypeInput = (input: DeregisterTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_VI] != null) {
    entries[_VI] = input[_VI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountLimitsInput
 */
const se_DescribeAccountLimitsInput = (input: DescribeAccountLimitsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeChangeSetHooksInput
 */
const se_DescribeChangeSetHooksInput = (input: DescribeChangeSetHooksInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_LRI] != null) {
    entries[_LRI] = input[_LRI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeChangeSetInput
 */
const se_DescribeChangeSetInput = (input: DescribeChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeOrganizationsAccessInput
 */
const se_DescribeOrganizationsAccessInput = (input: DescribeOrganizationsAccessInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribePublisherInput
 */
const se_DescribePublisherInput = (input: DescribePublisherInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PI] != null) {
    entries[_PI] = input[_PI];
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
  if (input[_SDDI] != null) {
    entries[_SDDI] = input[_SDDI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackEventsInput
 */
const se_DescribeStackEventsInput = (input: DescribeStackEventsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackInstanceInput
 */
const se_DescribeStackInstanceInput = (input: DescribeStackInstanceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_SIA] != null) {
    entries[_SIA] = input[_SIA];
  }
  if (input[_SIR] != null) {
    entries[_SIR] = input[_SIR];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackResourceDriftsInput
 */
const se_DescribeStackResourceDriftsInput = (input: DescribeStackResourceDriftsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_SRDSF] != null) {
    const memberEntries = se_StackResourceDriftStatusFilters(input[_SRDSF], context);
    if (input[_SRDSF]?.length === 0) {
      entries.StackResourceDriftStatusFilters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackResourceDriftStatusFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackResourceInput
 */
const se_DescribeStackResourceInput = (input: DescribeStackResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_LRI] != null) {
    entries[_LRI] = input[_LRI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackResourcesInput
 */
const se_DescribeStackResourcesInput = (input: DescribeStackResourcesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_LRI] != null) {
    entries[_LRI] = input[_LRI];
  }
  if (input[_PRI] != null) {
    entries[_PRI] = input[_PRI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackSetInput
 */
const se_DescribeStackSetInput = (input: DescribeStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStackSetOperationInput
 */
const se_DescribeStackSetOperationInput = (input: DescribeStackSetOperationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeStacksInput
 */
const se_DescribeStacksInput = (input: DescribeStacksInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTypeInput
 */
const se_DescribeTypeInput = (input: DescribeTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_VI] != null) {
    entries[_VI] = input[_VI];
  }
  if (input[_PI] != null) {
    entries[_PI] = input[_PI];
  }
  if (input[_PVN] != null) {
    entries[_PVN] = input[_PVN];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTypeRegistrationInput
 */
const se_DescribeTypeRegistrationInput = (input: DescribeTypeRegistrationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RTeg] != null) {
    entries[_RTeg] = input[_RTeg];
  }
  return entries;
};

/**
 * serializeAws_queryDetectStackDriftInput
 */
const se_DetectStackDriftInput = (input: DetectStackDriftInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_LRIo] != null) {
    const memberEntries = se_LogicalResourceIds(input[_LRIo], context);
    if (input[_LRIo]?.length === 0) {
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_LRI] != null) {
    entries[_LRI] = input[_LRI];
  }
  return entries;
};

/**
 * serializeAws_queryDetectStackSetDriftInput
 */
const se_DetectStackSetDriftInput = (input: DetectStackSetDriftInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_OP] != null) {
    const memberEntries = se_StackSetOperationPreferences(input[_OP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OI] === undefined) {
    input[_OI] = generateIdempotencyToken();
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryEstimateTemplateCostInput
 */
const se_EstimateTemplateCostInput = (input: EstimateTemplateCostInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_TURL] != null) {
    entries[_TURL] = input[_TURL];
  }
  if (input[_P] != null) {
    const memberEntries = se_Parameters(input[_P], context);
    if (input[_P]?.length === 0) {
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
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
  }
  if (input[_DR] != null) {
    entries[_DR] = input[_DR];
  }
  if (input[_REOC] != null) {
    entries[_REOC] = input[_REOC];
  }
  return entries;
};

/**
 * serializeAws_queryGetStackPolicyInput
 */
const se_GetStackPolicyInput = (input: GetStackPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  return entries;
};

/**
 * serializeAws_queryGetTemplateInput
 */
const se_GetTemplateInput = (input: GetTemplateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_TS] != null) {
    entries[_TS] = input[_TS];
  }
  return entries;
};

/**
 * serializeAws_queryGetTemplateSummaryInput
 */
const se_GetTemplateSummaryInput = (input: GetTemplateSummaryInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_TURL] != null) {
    entries[_TURL] = input[_TURL];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_TSC] != null) {
    const memberEntries = se_TemplateSummaryConfig(input[_TSC], context);
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
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_SIt] != null) {
    const memberEntries = se_StackIdList(input[_SIt], context);
    if (input[_SIt]?.length === 0) {
      entries.StackIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SIU] != null) {
    entries[_SIU] = input[_SIU];
  }
  if (input[_OUI] != null) {
    const memberEntries = se_OrganizationalUnitIdList(input[_OUI], context);
    if (input[_OUI]?.length === 0) {
      entries.OrganizationalUnitIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OrganizationalUnitIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OP] != null) {
    const memberEntries = se_StackSetOperationPreferences(input[_OP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OI] === undefined) {
    input[_OI] = generateIdempotencyToken();
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryListChangeSetsInput
 */
const se_ListChangeSetsInput = (input: ListChangeSetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListExportsInput
 */
const se_ListExportsInput = (input: ListExportsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListImportsInput
 */
const se_ListImportsInput = (input: ListImportsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
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
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_SIRDS] != null) {
    const memberEntries = se_StackResourceDriftStatusFilters(input[_SIRDS], context);
    if (input[_SIRDS]?.length === 0) {
      entries.StackInstanceResourceDriftStatuses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackInstanceResourceDriftStatuses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SIA] != null) {
    entries[_SIA] = input[_SIA];
  }
  if (input[_SIR] != null) {
    entries[_SIR] = input[_SIR];
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryListStackInstancesInput
 */
const se_ListStackInstancesInput = (input: ListStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_F] != null) {
    const memberEntries = se_StackInstanceFilters(input[_F], context);
    if (input[_F]?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SIA] != null) {
    entries[_SIA] = input[_SIA];
  }
  if (input[_SIR] != null) {
    entries[_SIR] = input[_SIR];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryListStackResourcesInput
 */
const se_ListStackResourcesInput = (input: ListStackResourcesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
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
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_F] != null) {
    const memberEntries = se_OperationResultFilters(input[_F], context);
    if (input[_F]?.length === 0) {
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
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryListStackSetsInput
 */
const se_ListStackSetsInput = (input: ListStackSetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryListStacksInput
 */
const se_ListStacksInput = (input: ListStacksInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_SSF] != null) {
    const memberEntries = se_StackStatusFilter(input[_SSF], context);
    if (input[_SSF]?.length === 0) {
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
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_RSF] != null) {
    entries[_RSF] = input[_RSF];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListTypesInput
 */
const se_ListTypesInput = (input: ListTypesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Vi] != null) {
    entries[_Vi] = input[_Vi];
  }
  if (input[_PTr] != null) {
    entries[_PTr] = input[_PTr];
  }
  if (input[_DSep] != null) {
    entries[_DSep] = input[_DSep];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_F] != null) {
    const memberEntries = se_TypeFilters(input[_F], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListTypeVersionsInput
 */
const se_ListTypeVersionsInput = (input: ListTypeVersionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_DSep] != null) {
    entries[_DSep] = input[_DSep];
  }
  if (input[_PI] != null) {
    entries[_PI] = input[_PI];
  }
  return entries;
};

/**
 * serializeAws_queryLoggingConfig
 */
const se_LoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LRA] != null) {
    entries[_LRA] = input[_LRA];
  }
  if (input[_LGN] != null) {
    entries[_LGN] = input[_LGN];
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
  if (input[_Act] != null) {
    entries[_Act] = input[_Act];
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
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
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
  if (input[_PK] != null) {
    entries[_PK] = input[_PK];
  }
  if (input[_PV] != null) {
    entries[_PV] = input[_PV];
  }
  if (input[_UPV] != null) {
    entries[_UPV] = input[_UPV];
  }
  if (input[_RV] != null) {
    entries[_RV] = input[_RV];
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
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_PVN] != null) {
    entries[_PVN] = input[_PVN];
  }
  return entries;
};

/**
 * serializeAws_queryRecordHandlerProgressInput
 */
const se_RecordHandlerProgressInput = (input: RecordHandlerProgressInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_BT] != null) {
    entries[_BT] = input[_BT];
  }
  if (input[_OS] != null) {
    entries[_OS] = input[_OS];
  }
  if (input[_COS] != null) {
    entries[_COS] = input[_COS];
  }
  if (input[_SM] != null) {
    entries[_SM] = input[_SM];
  }
  if (input[_EC] != null) {
    entries[_EC] = input[_EC];
  }
  if (input[_RM] != null) {
    entries[_RM] = input[_RM];
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
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
  if (input[_ATAC] != null) {
    entries[_ATAC] = input[_ATAC];
  }
  if (input[_CAo] != null) {
    entries[_CAo] = input[_CAo];
  }
  return entries;
};

/**
 * serializeAws_queryRegisterTypeInput
 */
const se_RegisterTypeInput = (input: RegisterTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_SHP] != null) {
    entries[_SHP] = input[_SHP];
  }
  if (input[_LC] != null) {
    const memberEntries = se_LoggingConfig(input[_LC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoggingConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ERA] != null) {
    entries[_ERA] = input[_ERA];
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
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
  if (input[_RTes] != null) {
    entries[_RTes] = input[_RTes];
  }
  if (input[_LRI] != null) {
    entries[_LRI] = input[_LRI];
  }
  if (input[_RI] != null) {
    const memberEntries = se_ResourceIdentifierProperties(input[_RI], context);
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
  if (input[_RTo] != null) {
    const memberEntries = se_RollbackTriggers(input[_RTo], context);
    if (input[_RTo]?.length === 0) {
      entries.RollbackTriggers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackTriggers.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MTIM] != null) {
    entries[_MTIM] = input[_MTIM];
  }
  return entries;
};

/**
 * serializeAws_queryRollbackStackInput
 */
const se_RollbackStackInput = (input: RollbackStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
  }
  if (input[_REOC] != null) {
    entries[_REOC] = input[_REOC];
  }
  return entries;
};

/**
 * serializeAws_queryRollbackTrigger
 */
const se_RollbackTrigger = (input: RollbackTrigger, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_SPB] != null) {
    entries[_SPB] = input[_SPB];
  }
  if (input[_SPURL] != null) {
    entries[_SPURL] = input[_SPURL];
  }
  return entries;
};

/**
 * serializeAws_querySetTypeConfigurationInput
 */
const se_SetTypeConfigurationInput = (input: SetTypeConfigurationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_Co] != null) {
    entries[_Co] = input[_Co];
  }
  if (input[_CAon] != null) {
    entries[_CAon] = input[_CAon];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  return entries;
};

/**
 * serializeAws_querySetTypeDefaultVersionInput
 */
const se_SetTypeDefaultVersionInput = (input: SetTypeDefaultVersionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_VI] != null) {
    entries[_VI] = input[_VI];
  }
  return entries;
};

/**
 * serializeAws_querySignalResourceInput
 */
const se_SignalResourceInput = (input: SignalResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_LRI] != null) {
    entries[_LRI] = input[_LRI];
  }
  if (input[_UI] != null) {
    entries[_UI] = input[_UI];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
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
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
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
  if (input[_RCT] != null) {
    entries[_RCT] = input[_RCT];
  }
  if (input[_RO] != null) {
    const memberEntries = se_RegionList(input[_RO], context);
    if (input[_RO]?.length === 0) {
      entries.RegionOrder = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RegionOrder.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_FTC] != null) {
    entries[_FTC] = input[_FTC];
  }
  if (input[_FTP] != null) {
    entries[_FTP] = input[_FTP];
  }
  if (input[_MCC] != null) {
    entries[_MCC] = input[_MCC];
  }
  if (input[_MCP] != null) {
    entries[_MCP] = input[_MCP];
  }
  if (input[_CM] != null) {
    entries[_CM] = input[_CM];
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
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
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
  if (input[_TURTAW] != null) {
    entries[_TURTAW] = input[_TURTAW];
  }
  return entries;
};

/**
 * serializeAws_queryTestTypeInput
 */
const se_TestTypeInput = (input: TestTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_VI] != null) {
    entries[_VI] = input[_VI];
  }
  if (input[_LDB] != null) {
    entries[_LDB] = input[_LDB];
  }
  return entries;
};

/**
 * serializeAws_queryTypeConfigurationIdentifier
 */
const se_TypeConfigurationIdentifier = (input: TypeConfigurationIdentifier, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_TCA] != null) {
    entries[_TCA] = input[_TCA];
  }
  if (input[_TCAy] != null) {
    entries[_TCAy] = input[_TCAy];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
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
  if (input[_Ca] != null) {
    entries[_Ca] = input[_Ca];
  }
  if (input[_PI] != null) {
    entries[_PI] = input[_PI];
  }
  if (input[_TNP] != null) {
    entries[_TNP] = input[_TNP];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateStackInput
 */
const se_UpdateStackInput = (input: UpdateStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_TURL] != null) {
    entries[_TURL] = input[_TURL];
  }
  if (input[_UPT] != null) {
    entries[_UPT] = input[_UPT];
  }
  if (input[_SPDUB] != null) {
    entries[_SPDUB] = input[_SPDUB];
  }
  if (input[_SPDUURL] != null) {
    entries[_SPDUURL] = input[_SPDUURL];
  }
  if (input[_P] != null) {
    const memberEntries = se_Parameters(input[_P], context);
    if (input[_P]?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_C] != null) {
    const memberEntries = se_Capabilities(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTe] != null) {
    const memberEntries = se_ResourceTypes(input[_RTe], context);
    if (input[_RTe]?.length === 0) {
      entries.ResourceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_RC] != null) {
    const memberEntries = se_RollbackConfiguration(input[_RC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SPB] != null) {
    entries[_SPB] = input[_SPB];
  }
  if (input[_SPURL] != null) {
    entries[_SPURL] = input[_SPURL];
  }
  if (input[_NARN] != null) {
    const memberEntries = se_NotificationARNs(input[_NARN], context);
    if (input[_NARN]?.length === 0) {
      entries.NotificationARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_Tags(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DR] != null) {
    entries[_DR] = input[_DR];
  }
  if (input[_CRT] != null) {
    entries[_CRT] = input[_CRT];
  }
  if (input[_REOC] != null) {
    entries[_REOC] = input[_REOC];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateStackInstancesInput
 */
const se_UpdateStackInstancesInput = (input: UpdateStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_Ac] != null) {
    const memberEntries = se_AccountList(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DTep] != null) {
    const memberEntries = se_DeploymentTargets(input[_DTep], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_R] != null) {
    const memberEntries = se_RegionList(input[_R], context);
    if (input[_R]?.length === 0) {
      entries.Regions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PO] != null) {
    const memberEntries = se_Parameters(input[_PO], context);
    if (input[_PO]?.length === 0) {
      entries.ParameterOverrides = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OP] != null) {
    const memberEntries = se_StackSetOperationPreferences(input[_OP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OI] === undefined) {
    input[_OI] = generateIdempotencyToken();
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateStackSetInput
 */
const se_UpdateStackSetInput = (input: UpdateStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_TURL] != null) {
    entries[_TURL] = input[_TURL];
  }
  if (input[_UPT] != null) {
    entries[_UPT] = input[_UPT];
  }
  if (input[_P] != null) {
    const memberEntries = se_Parameters(input[_P], context);
    if (input[_P]?.length === 0) {
      entries.Parameters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_C] != null) {
    const memberEntries = se_Capabilities(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Capabilities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_Tags(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OP] != null) {
    const memberEntries = se_StackSetOperationPreferences(input[_OP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ARARN] != null) {
    entries[_ARARN] = input[_ARARN];
  }
  if (input[_ERN] != null) {
    entries[_ERN] = input[_ERN];
  }
  if (input[_DTep] != null) {
    const memberEntries = se_DeploymentTargets(input[_DTep], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PM] != null) {
    entries[_PM] = input[_PM];
  }
  if (input[_AD] != null) {
    const memberEntries = se_AutoDeployment(input[_AD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoDeployment.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OI] === undefined) {
    input[_OI] = generateIdempotencyToken();
  }
  if (input[_OI] != null) {
    entries[_OI] = input[_OI];
  }
  if (input[_Ac] != null) {
    const memberEntries = se_AccountList(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Accounts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_R] != null) {
    const memberEntries = se_RegionList(input[_R], context);
    if (input[_R]?.length === 0) {
      entries.Regions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_ME] != null) {
    const memberEntries = se_ManagedExecution(input[_ME], context);
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
  if (input[_ETP] != null) {
    entries[_ETP] = input[_ETP];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  return entries;
};

/**
 * serializeAws_queryValidateTemplateInput
 */
const se_ValidateTemplateInput = (input: ValidateTemplateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TB] != null) {
    entries[_TB] = input[_TB];
  }
  if (input[_TURL] != null) {
    entries[_TURL] = input[_TURL];
  }
  return entries;
};

/**
 * deserializeAws_queryAccountGateResult
 */
const de_AccountGateResult = (output: any, context: __SerdeContext): AccountGateResult => {
  const contents: any = {};
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccountLimit
 */
const de_AccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __strictParseInt32(output[_Val]) as number;
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
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoDeployment
 */
const de_AutoDeployment = (output: any, context: __SerdeContext): AutoDeployment => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_RSOAR] != null) {
    contents[_RSOAR] = __parseBoolean(output[_RSOAR]);
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
  if (output[_EC] != null) {
    contents[_EC] = __expectString(output[_EC]);
  }
  if (output[_EM] != null) {
    contents[_EM] = __expectString(output[_EM]);
  }
  if (output[_TCIy] != null) {
    contents[_TCIy] = de_TypeConfigurationIdentifier(output[_TCIy], context);
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
    contents[_Er] = [];
  } else if (output[_Er] != null && output[_Er][_m] != null) {
    contents[_Er] = de_BatchDescribeTypeConfigurationsErrors(__getArrayIfSingleItem(output[_Er][_m]), context);
  }
  if (output.UnprocessedTypeConfigurations === "") {
    contents[_UTC] = [];
  } else if (output[_UTC] != null && output[_UTC][_m] != null) {
    contents[_UTC] = de_UnprocessedTypeConfigurations(__getArrayIfSingleItem(output[_UTC][_m]), context);
  }
  if (output.TypeConfigurations === "") {
    contents[_TC] = [];
  } else if (output[_TC] != null && output[_TC][_m] != null) {
    contents[_TC] = de_TypeConfigurationDetailsList(__getArrayIfSingleItem(output[_TC][_m]), context);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryChange
 */
const de_Change = (output: any, context: __SerdeContext): Change => {
  const contents: any = {};
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_HIC] != null) {
    contents[_HIC] = __strictParseInt32(output[_HIC]) as number;
  }
  if (output[_RCe] != null) {
    contents[_RCe] = de_ResourceChange(output[_RCe], context);
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
  if (output[_IP] != null) {
    contents[_IP] = __expectString(output[_IP]);
  }
  if (output[_FM] != null) {
    contents[_FM] = __expectString(output[_FM]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_TVI] != null) {
    contents[_TVI] = __expectString(output[_TVI]);
  }
  if (output[_TCVI] != null) {
    contents[_TCVI] = __expectString(output[_TCVI]);
  }
  if (output[_TD] != null) {
    contents[_TD] = de_ChangeSetHookTargetDetails(output[_TD], context);
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
  if (output[_LRI] != null) {
    contents[_LRI] = __expectString(output[_LRI]);
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_RA] != null) {
    contents[_RA] = __expectString(output[_RA]);
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
  if (output[_TTa] != null) {
    contents[_TTa] = __expectString(output[_TTa]);
  }
  if (output[_RTD] != null) {
    contents[_RTD] = de_ChangeSetHookResourceTargetDetails(output[_RTD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryChangeSetNotFoundException
 */
const de_ChangeSetNotFoundException = (output: any, context: __SerdeContext): ChangeSetNotFoundException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_CSIh] != null) {
    contents[_CSIh] = __expectString(output[_CSIh]);
  }
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_ES] != null) {
    contents[_ES] = __expectString(output[_ES]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_INS] != null) {
    contents[_INS] = __parseBoolean(output[_INS]);
  }
  if (output[_PCSI] != null) {
    contents[_PCSI] = __expectString(output[_PCSI]);
  }
  if (output[_RCSI] != null) {
    contents[_RCSI] = __expectString(output[_RCSI]);
  }
  if (output[_IER] != null) {
    contents[_IER] = __parseBoolean(output[_IER]);
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
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreatedButModifiedException
 */
const de_CreatedButModifiedException = (output: any, context: __SerdeContext): CreatedButModifiedException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateStackInstancesOutput
 */
const de_CreateStackInstancesOutput = (output: any, context: __SerdeContext): CreateStackInstancesOutput => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateStackOutput
 */
const de_CreateStackOutput = (output: any, context: __SerdeContext): CreateStackOutput => {
  const contents: any = {};
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateStackSetOutput
 */
const de_CreateStackSetOutput = (output: any, context: __SerdeContext): CreateStackSetOutput => {
  const contents: any = {};
  if (output[_SSI] != null) {
    contents[_SSI] = __expectString(output[_SSI]);
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
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
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
    contents[_Ac] = [];
  } else if (output[_Ac] != null && output[_Ac][_m] != null) {
    contents[_Ac] = de_AccountList(__getArrayIfSingleItem(output[_Ac][_m]), context);
  }
  if (output[_AUc] != null) {
    contents[_AUc] = __expectString(output[_AUc]);
  }
  if (output.OrganizationalUnitIds === "") {
    contents[_OUI] = [];
  } else if (output[_OUI] != null && output[_OUI][_m] != null) {
    contents[_OUI] = de_OrganizationalUnitIdList(__getArrayIfSingleItem(output[_OUI][_m]), context);
  }
  if (output[_AFT] != null) {
    contents[_AFT] = __expectString(output[_AFT]);
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
    contents[_AL] = [];
  } else if (output[_AL] != null && output[_AL][_m] != null) {
    contents[_AL] = de_AccountLimitList(__getArrayIfSingleItem(output[_AL][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeChangeSetHooksOutput
 */
const de_DescribeChangeSetHooksOutput = (output: any, context: __SerdeContext): DescribeChangeSetHooksOutput => {
  const contents: any = {};
  if (output[_CSIh] != null) {
    contents[_CSIh] = __expectString(output[_CSIh]);
  }
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output.Hooks === "") {
    contents[_H] = [];
  } else if (output[_H] != null && output[_H][_m] != null) {
    contents[_H] = de_ChangeSetHooks(__getArrayIfSingleItem(output[_H][_m]), context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeChangeSetOutput
 */
const de_DescribeChangeSetOutput = (output: any, context: __SerdeContext): DescribeChangeSetOutput => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_CSIh] != null) {
    contents[_CSIh] = __expectString(output[_CSIh]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output.Parameters === "") {
    contents[_P] = [];
  } else if (output[_P] != null && output[_P][_m] != null) {
    contents[_P] = de_Parameters(__getArrayIfSingleItem(output[_P][_m]), context);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_ES] != null) {
    contents[_ES] = __expectString(output[_ES]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output.NotificationARNs === "") {
    contents[_NARN] = [];
  } else if (output[_NARN] != null && output[_NARN][_m] != null) {
    contents[_NARN] = de_NotificationARNs(__getArrayIfSingleItem(output[_NARN][_m]), context);
  }
  if (output[_RC] != null) {
    contents[_RC] = de_RollbackConfiguration(output[_RC], context);
  }
  if (output.Capabilities === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_m] != null) {
    contents[_C] = de_Capabilities(__getArrayIfSingleItem(output[_C][_m]), context);
  }
  if (output.Tags === "") {
    contents[_Ta] = [];
  } else if (output[_Ta] != null && output[_Ta][_m] != null) {
    contents[_Ta] = de_Tags(__getArrayIfSingleItem(output[_Ta][_m]), context);
  }
  if (output.Changes === "") {
    contents[_Ch] = [];
  } else if (output[_Ch] != null && output[_Ch][_m] != null) {
    contents[_Ch] = de_Changes(__getArrayIfSingleItem(output[_Ch][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (output[_INS] != null) {
    contents[_INS] = __parseBoolean(output[_INS]);
  }
  if (output[_PCSI] != null) {
    contents[_PCSI] = __expectString(output[_PCSI]);
  }
  if (output[_RCSI] != null) {
    contents[_RCSI] = __expectString(output[_RCSI]);
  }
  if (output[_OSF] != null) {
    contents[_OSF] = __expectString(output[_OSF]);
  }
  if (output[_IER] != null) {
    contents[_IER] = __parseBoolean(output[_IER]);
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
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribePublisherOutput
 */
const de_DescribePublisherOutput = (output: any, context: __SerdeContext): DescribePublisherOutput => {
  const contents: any = {};
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  if (output[_PS] != null) {
    contents[_PS] = __expectString(output[_PS]);
  }
  if (output[_IPd] != null) {
    contents[_IPd] = __expectString(output[_IPd]);
  }
  if (output[_PP] != null) {
    contents[_PP] = __expectString(output[_PP]);
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
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_SDDI] != null) {
    contents[_SDDI] = __expectString(output[_SDDI]);
  }
  if (output[_SDS] != null) {
    contents[_SDS] = __expectString(output[_SDS]);
  }
  if (output[_DSet] != null) {
    contents[_DSet] = __expectString(output[_DSet]);
  }
  if (output[_DSRet] != null) {
    contents[_DSRet] = __expectString(output[_DSRet]);
  }
  if (output[_DSRC] != null) {
    contents[_DSRC] = __strictParseInt32(output[_DSRC]) as number;
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackEventsOutput
 */
const de_DescribeStackEventsOutput = (output: any, context: __SerdeContext): DescribeStackEventsOutput => {
  const contents: any = {};
  if (output.StackEvents === "") {
    contents[_SE] = [];
  } else if (output[_SE] != null && output[_SE][_m] != null) {
    contents[_SE] = de_StackEvents(__getArrayIfSingleItem(output[_SE][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackInstanceOutput
 */
const de_DescribeStackInstanceOutput = (output: any, context: __SerdeContext): DescribeStackInstanceOutput => {
  const contents: any = {};
  if (output[_SIta] != null) {
    contents[_SIta] = de_StackInstance(output[_SIta], context);
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
    contents[_SRD] = [];
  } else if (output[_SRD] != null && output[_SRD][_m] != null) {
    contents[_SRD] = de_StackResourceDrifts(__getArrayIfSingleItem(output[_SRD][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackResourceOutput
 */
const de_DescribeStackResourceOutput = (output: any, context: __SerdeContext): DescribeStackResourceOutput => {
  const contents: any = {};
  if (output[_SRDt] != null) {
    contents[_SRDt] = de_StackResourceDetail(output[_SRDt], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackResourcesOutput
 */
const de_DescribeStackResourcesOutput = (output: any, context: __SerdeContext): DescribeStackResourcesOutput => {
  const contents: any = {};
  if (output.StackResources === "") {
    contents[_SRta] = [];
  } else if (output[_SRta] != null && output[_SRta][_m] != null) {
    contents[_SRta] = de_StackResources(__getArrayIfSingleItem(output[_SRta][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackSetOperationOutput
 */
const de_DescribeStackSetOperationOutput = (output: any, context: __SerdeContext): DescribeStackSetOperationOutput => {
  const contents: any = {};
  if (output[_SSO] != null) {
    contents[_SSO] = de_StackSetOperation(output[_SSO], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStackSetOutput
 */
const de_DescribeStackSetOutput = (output: any, context: __SerdeContext): DescribeStackSetOutput => {
  const contents: any = {};
  if (output[_SS] != null) {
    contents[_SS] = de_StackSet(output[_SS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeStacksOutput
 */
const de_DescribeStacksOutput = (output: any, context: __SerdeContext): DescribeStacksOutput => {
  const contents: any = {};
  if (output.Stacks === "") {
    contents[_St] = [];
  } else if (output[_St] != null && output[_St][_m] != null) {
    contents[_St] = de_Stacks(__getArrayIfSingleItem(output[_St][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTypeOutput
 */
const de_DescribeTypeOutput = (output: any, context: __SerdeContext): DescribeTypeOutput => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_DVI] != null) {
    contents[_DVI] = __expectString(output[_DVI]);
  }
  if (output[_IDV] != null) {
    contents[_IDV] = __parseBoolean(output[_IDV]);
  }
  if (output[_TTS] != null) {
    contents[_TTS] = __expectString(output[_TTS]);
  }
  if (output[_TTSD] != null) {
    contents[_TTSD] = __expectString(output[_TTSD]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_Sc] != null) {
    contents[_Sc] = __expectString(output[_Sc]);
  }
  if (output[_PTr] != null) {
    contents[_PTr] = __expectString(output[_PTr]);
  }
  if (output[_DSep] != null) {
    contents[_DSep] = __expectString(output[_DSep]);
  }
  if (output[_LC] != null) {
    contents[_LC] = de_LoggingConfig(output[_LC], context);
  }
  if (output.RequiredActivatedTypes === "") {
    contents[_RAT] = [];
  } else if (output[_RAT] != null && output[_RAT][_m] != null) {
    contents[_RAT] = de_RequiredActivatedTypes(__getArrayIfSingleItem(output[_RAT][_m]), context);
  }
  if (output[_ERA] != null) {
    contents[_ERA] = __expectString(output[_ERA]);
  }
  if (output[_Vi] != null) {
    contents[_Vi] = __expectString(output[_Vi]);
  }
  if (output[_SU] != null) {
    contents[_SU] = __expectString(output[_SU]);
  }
  if (output[_DU] != null) {
    contents[_DU] = __expectString(output[_DU]);
  }
  if (output[_LU] != null) {
    contents[_LU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LU]));
  }
  if (output[_TCi] != null) {
    contents[_TCi] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_TCi]));
  }
  if (output[_CSo] != null) {
    contents[_CSo] = __expectString(output[_CSo]);
  }
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  if (output[_OTN] != null) {
    contents[_OTN] = __expectString(output[_OTN]);
  }
  if (output[_OTA] != null) {
    contents[_OTA] = __expectString(output[_OTA]);
  }
  if (output[_PVN] != null) {
    contents[_PVN] = __expectString(output[_PVN]);
  }
  if (output[_LPV] != null) {
    contents[_LPV] = __expectString(output[_LPV]);
  }
  if (output[_IA] != null) {
    contents[_IA] = __parseBoolean(output[_IA]);
  }
  if (output[_AU] != null) {
    contents[_AU] = __parseBoolean(output[_AU]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTypeRegistrationOutput
 */
const de_DescribeTypeRegistrationOutput = (output: any, context: __SerdeContext): DescribeTypeRegistrationOutput => {
  const contents: any = {};
  if (output[_PSr] != null) {
    contents[_PSr] = __expectString(output[_PSr]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_TVA] != null) {
    contents[_TVA] = __expectString(output[_TVA]);
  }
  return contents;
};

/**
 * deserializeAws_queryDetectStackDriftOutput
 */
const de_DetectStackDriftOutput = (output: any, context: __SerdeContext): DetectStackDriftOutput => {
  const contents: any = {};
  if (output[_SDDI] != null) {
    contents[_SDDI] = __expectString(output[_SDDI]);
  }
  return contents;
};

/**
 * deserializeAws_queryDetectStackResourceDriftOutput
 */
const de_DetectStackResourceDriftOutput = (output: any, context: __SerdeContext): DetectStackResourceDriftOutput => {
  const contents: any = {};
  if (output[_SRDta] != null) {
    contents[_SRDta] = de_StackResourceDrift(output[_SRDta], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDetectStackSetDriftOutput
 */
const de_DetectStackSetDriftOutput = (output: any, context: __SerdeContext): DetectStackSetDriftOutput => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  return contents;
};

/**
 * deserializeAws_queryEstimateTemplateCostOutput
 */
const de_EstimateTemplateCostOutput = (output: any, context: __SerdeContext): EstimateTemplateCostOutput => {
  const contents: any = {};
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
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
  if (output[_ESI] != null) {
    contents[_ESI] = __expectString(output[_ESI]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
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
  if (output[_SPB] != null) {
    contents[_SPB] = __expectString(output[_SPB]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTemplateOutput
 */
const de_GetTemplateOutput = (output: any, context: __SerdeContext): GetTemplateOutput => {
  const contents: any = {};
  if (output[_TB] != null) {
    contents[_TB] = __expectString(output[_TB]);
  }
  if (output.StagesAvailable === "") {
    contents[_SA] = [];
  } else if (output[_SA] != null && output[_SA][_m] != null) {
    contents[_SA] = de_StageList(__getArrayIfSingleItem(output[_SA][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTemplateSummaryOutput
 */
const de_GetTemplateSummaryOutput = (output: any, context: __SerdeContext): GetTemplateSummaryOutput => {
  const contents: any = {};
  if (output.Parameters === "") {
    contents[_P] = [];
  } else if (output[_P] != null && output[_P][_m] != null) {
    contents[_P] = de_ParameterDeclarations(__getArrayIfSingleItem(output[_P][_m]), context);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output.Capabilities === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_m] != null) {
    contents[_C] = de_Capabilities(__getArrayIfSingleItem(output[_C][_m]), context);
  }
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  if (output.ResourceTypes === "") {
    contents[_RTe] = [];
  } else if (output[_RTe] != null && output[_RTe][_m] != null) {
    contents[_RTe] = de_ResourceTypes(__getArrayIfSingleItem(output[_RTe][_m]), context);
  }
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output.DeclaredTransforms === "") {
    contents[_DTec] = [];
  } else if (output[_DTec] != null && output[_DTec][_m] != null) {
    contents[_DTec] = de_TransformsList(__getArrayIfSingleItem(output[_DTec][_m]), context);
  }
  if (output.ResourceIdentifierSummaries === "") {
    contents[_RIS] = [];
  } else if (output[_RIS] != null && output[_RIS][_m] != null) {
    contents[_RIS] = de_ResourceIdentifierSummaries(__getArrayIfSingleItem(output[_RIS][_m]), context);
  }
  if (output[_W] != null) {
    contents[_W] = de_Warnings(output[_W], context);
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
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidChangeSetStatusException
 */
const de_InvalidChangeSetStatusException = (output: any, context: __SerdeContext): InvalidChangeSetStatusException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidOperationException
 */
const de_InvalidOperationException = (output: any, context: __SerdeContext): InvalidOperationException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidStateTransitionException
 */
const de_InvalidStateTransitionException = (output: any, context: __SerdeContext): InvalidStateTransitionException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListChangeSetsOutput
 */
const de_ListChangeSetsOutput = (output: any, context: __SerdeContext): ListChangeSetsOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_m] != null) {
    contents[_Su] = de_ChangeSetSummaries(__getArrayIfSingleItem(output[_Su][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListExportsOutput
 */
const de_ListExportsOutput = (output: any, context: __SerdeContext): ListExportsOutput => {
  const contents: any = {};
  if (output.Exports === "") {
    contents[_Ex] = [];
  } else if (output[_Ex] != null && output[_Ex][_m] != null) {
    contents[_Ex] = de_Exports(__getArrayIfSingleItem(output[_Ex][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListImportsOutput
 */
const de_ListImportsOutput = (output: any, context: __SerdeContext): ListImportsOutput => {
  const contents: any = {};
  if (output.Imports === "") {
    contents[_Im] = [];
  } else if (output[_Im] != null && output[_Im][_m] != null) {
    contents[_Im] = de_Imports(__getArrayIfSingleItem(output[_Im][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
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
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_m] != null) {
    contents[_Su] = de_StackInstanceResourceDriftsSummaries(__getArrayIfSingleItem(output[_Su][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackInstancesOutput
 */
const de_ListStackInstancesOutput = (output: any, context: __SerdeContext): ListStackInstancesOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_m] != null) {
    contents[_Su] = de_StackInstanceSummaries(__getArrayIfSingleItem(output[_Su][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackResourcesOutput
 */
const de_ListStackResourcesOutput = (output: any, context: __SerdeContext): ListStackResourcesOutput => {
  const contents: any = {};
  if (output.StackResourceSummaries === "") {
    contents[_SRS] = [];
  } else if (output[_SRS] != null && output[_SRS][_m] != null) {
    contents[_SRS] = de_StackResourceSummaries(__getArrayIfSingleItem(output[_SRS][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
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
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_m] != null) {
    contents[_Su] = de_StackSetOperationResultSummaries(__getArrayIfSingleItem(output[_Su][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackSetOperationsOutput
 */
const de_ListStackSetOperationsOutput = (output: any, context: __SerdeContext): ListStackSetOperationsOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_m] != null) {
    contents[_Su] = de_StackSetOperationSummaries(__getArrayIfSingleItem(output[_Su][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStackSetsOutput
 */
const de_ListStackSetsOutput = (output: any, context: __SerdeContext): ListStackSetsOutput => {
  const contents: any = {};
  if (output.Summaries === "") {
    contents[_Su] = [];
  } else if (output[_Su] != null && output[_Su][_m] != null) {
    contents[_Su] = de_StackSetSummaries(__getArrayIfSingleItem(output[_Su][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListStacksOutput
 */
const de_ListStacksOutput = (output: any, context: __SerdeContext): ListStacksOutput => {
  const contents: any = {};
  if (output.StackSummaries === "") {
    contents[_SSt] = [];
  } else if (output[_SSt] != null && output[_SSt][_m] != null) {
    contents[_SSt] = de_StackSummaries(__getArrayIfSingleItem(output[_SSt][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTypeRegistrationsOutput
 */
const de_ListTypeRegistrationsOutput = (output: any, context: __SerdeContext): ListTypeRegistrationsOutput => {
  const contents: any = {};
  if (output.RegistrationTokenList === "") {
    contents[_RTL] = [];
  } else if (output[_RTL] != null && output[_RTL][_m] != null) {
    contents[_RTL] = de_RegistrationTokenList(__getArrayIfSingleItem(output[_RTL][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTypesOutput
 */
const de_ListTypesOutput = (output: any, context: __SerdeContext): ListTypesOutput => {
  const contents: any = {};
  if (output.TypeSummaries === "") {
    contents[_TSy] = [];
  } else if (output[_TSy] != null && output[_TSy][_m] != null) {
    contents[_TSy] = de_TypeSummaries(__getArrayIfSingleItem(output[_TSy][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTypeVersionsOutput
 */
const de_ListTypeVersionsOutput = (output: any, context: __SerdeContext): ListTypeVersionsOutput => {
  const contents: any = {};
  if (output.TypeVersionSummaries === "") {
    contents[_TVS] = [];
  } else if (output[_TVS] != null && output[_TVS][_m] != null) {
    contents[_TVS] = de_TypeVersionSummaries(__getArrayIfSingleItem(output[_TVS][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoggingConfig
 */
const de_LoggingConfig = (output: any, context: __SerdeContext): LoggingConfig => {
  const contents: any = {};
  if (output[_LRA] != null) {
    contents[_LRA] = __expectString(output[_LRA]);
  }
  if (output[_LGN] != null) {
    contents[_LGN] = __expectString(output[_LGN]);
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
  if (output[_Act] != null) {
    contents[_Act] = __parseBoolean(output[_Act]);
  }
  return contents;
};

/**
 * deserializeAws_queryModuleInfo
 */
const de_ModuleInfo = (output: any, context: __SerdeContext): ModuleInfo => {
  const contents: any = {};
  if (output[_TH] != null) {
    contents[_TH] = __expectString(output[_TH]);
  }
  if (output[_LIH] != null) {
    contents[_LIH] = __expectString(output[_LIH]);
  }
  return contents;
};

/**
 * deserializeAws_queryNameAlreadyExistsException
 */
const de_NameAlreadyExistsException = (output: any, context: __SerdeContext): NameAlreadyExistsException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationInProgressException
 */
const de_OperationInProgressException = (output: any, context: __SerdeContext): OperationInProgressException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationNotFoundException
 */
const de_OperationNotFoundException = (output: any, context: __SerdeContext): OperationNotFoundException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_OK] != null) {
    contents[_OK] = __expectString(output[_OK]);
  }
  if (output[_OV] != null) {
    contents[_OV] = __expectString(output[_OV]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
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
  if (output[_PK] != null) {
    contents[_PK] = __expectString(output[_PK]);
  }
  if (output[_PV] != null) {
    contents[_PV] = __expectString(output[_PV]);
  }
  if (output[_UPV] != null) {
    contents[_UPV] = __parseBoolean(output[_UPV]);
  }
  if (output[_RV] != null) {
    contents[_RV] = __expectString(output[_RV]);
  }
  return contents;
};

/**
 * deserializeAws_queryParameterConstraints
 */
const de_ParameterConstraints = (output: any, context: __SerdeContext): ParameterConstraints => {
  const contents: any = {};
  if (output.AllowedValues === "") {
    contents[_AV] = [];
  } else if (output[_AV] != null && output[_AV][_m] != null) {
    contents[_AV] = de_AllowedValues(__getArrayIfSingleItem(output[_AV][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryParameterDeclaration
 */
const de_ParameterDeclaration = (output: any, context: __SerdeContext): ParameterDeclaration => {
  const contents: any = {};
  if (output[_PK] != null) {
    contents[_PK] = __expectString(output[_PK]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_PTa] != null) {
    contents[_PTa] = __expectString(output[_PTa]);
  }
  if (output[_NE] != null) {
    contents[_NE] = __parseBoolean(output[_NE]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_PC] != null) {
    contents[_PC] = de_ParameterConstraints(output[_PC], context);
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
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryPropertyDifference
 */
const de_PropertyDifference = (output: any, context: __SerdeContext): PropertyDifference => {
  const contents: any = {};
  if (output[_PPr] != null) {
    contents[_PPr] = __expectString(output[_PPr]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  if (output[_AVc] != null) {
    contents[_AVc] = __expectString(output[_AVc]);
  }
  if (output[_DTi] != null) {
    contents[_DTi] = __expectString(output[_DTi]);
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
  if (output[_PTA] != null) {
    contents[_PTA] = __expectString(output[_PTA]);
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
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegisterTypeOutput
 */
const de_RegisterTypeOutput = (output: any, context: __SerdeContext): RegisterTypeOutput => {
  const contents: any = {};
  if (output[_RTeg] != null) {
    contents[_RTeg] = __expectString(output[_RTeg]);
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
  if (output[_TNA] != null) {
    contents[_TNA] = __expectString(output[_TNA]);
  }
  if (output[_OTN] != null) {
    contents[_OTN] = __expectString(output[_OTN]);
  }
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  if (output.SupportedMajorVersions === "") {
    contents[_SMV] = [];
  } else if (output[_SMV] != null && output[_SMV][_m] != null) {
    contents[_SMV] = de_SupportedMajorVersions(__getArrayIfSingleItem(output[_SMV][_m]), context);
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
  if (output[_A] != null) {
    contents[_A] = __expectString(output[_A]);
  }
  if (output[_LRI] != null) {
    contents[_LRI] = __expectString(output[_LRI]);
  }
  if (output[_PRI] != null) {
    contents[_PRI] = __expectString(output[_PRI]);
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_Re] != null) {
    contents[_Re] = __expectString(output[_Re]);
  }
  if (output.Scope === "") {
    contents[_Sco] = [];
  } else if (output[_Sco] != null && output[_Sco][_m] != null) {
    contents[_Sco] = de_Scope(__getArrayIfSingleItem(output[_Sco][_m]), context);
  }
  if (output.Details === "") {
    contents[_De] = [];
  } else if (output[_De] != null && output[_De][_m] != null) {
    contents[_De] = de_ResourceChangeDetails(__getArrayIfSingleItem(output[_De][_m]), context);
  }
  if (output[_CSIh] != null) {
    contents[_CSIh] = __expectString(output[_CSIh]);
  }
  if (output[_MI] != null) {
    contents[_MI] = de_ModuleInfo(output[_MI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceChangeDetail
 */
const de_ResourceChangeDetail = (output: any, context: __SerdeContext): ResourceChangeDetail => {
  const contents: any = {};
  if (output[_Tar] != null) {
    contents[_Tar] = de_ResourceTargetDefinition(output[_Tar], context);
  }
  if (output[_Ev] != null) {
    contents[_Ev] = __expectString(output[_Ev]);
  }
  if (output[_CSh] != null) {
    contents[_CSh] = __expectString(output[_CSh]);
  }
  if (output[_CE] != null) {
    contents[_CE] = __expectString(output[_CE]);
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
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output.LogicalResourceIds === "") {
    contents[_LRIo] = [];
  } else if (output[_LRIo] != null && output[_LRIo][_m] != null) {
    contents[_LRIo] = de_LogicalResourceIds(__getArrayIfSingleItem(output[_LRIo][_m]), context);
  }
  if (output.ResourceIdentifiers === "") {
    contents[_RIe] = [];
  } else if (output[_RIe] != null && output[_RIe][_m] != null) {
    contents[_RIe] = de_ResourceIdentifiers(__getArrayIfSingleItem(output[_RIe][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceTargetDefinition
 */
const de_ResourceTargetDefinition = (output: any, context: __SerdeContext): ResourceTargetDefinition => {
  const contents: any = {};
  if (output[_At] != null) {
    contents[_At] = __expectString(output[_At]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_RRe] != null) {
    contents[_RRe] = __expectString(output[_RRe]);
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
    contents[_RTo] = [];
  } else if (output[_RTo] != null && output[_RTo][_m] != null) {
    contents[_RTo] = de_RollbackTriggers(__getArrayIfSingleItem(output[_RTo][_m]), context);
  }
  if (output[_MTIM] != null) {
    contents[_MTIM] = __strictParseInt32(output[_MTIM]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackStackOutput
 */
const de_RollbackStackOutput = (output: any, context: __SerdeContext): RollbackStackOutput => {
  const contents: any = {};
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackTrigger
 */
const de_RollbackTrigger = (output: any, context: __SerdeContext): RollbackTrigger => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
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
  if (output[_CAonf] != null) {
    contents[_CAonf] = __expectString(output[_CAonf]);
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
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_CSIh] != null) {
    contents[_CSIh] = __expectString(output[_CSIh]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output.Parameters === "") {
    contents[_P] = [];
  } else if (output[_P] != null && output[_P][_m] != null) {
    contents[_P] = de_Parameters(__getArrayIfSingleItem(output[_P][_m]), context);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_DTel] != null) {
    contents[_DTel] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DTel]));
  }
  if (output[_LUT] != null) {
    contents[_LUT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUT]));
  }
  if (output[_RC] != null) {
    contents[_RC] = de_RollbackConfiguration(output[_RC], context);
  }
  if (output[_SSta] != null) {
    contents[_SSta] = __expectString(output[_SSta]);
  }
  if (output[_SSR] != null) {
    contents[_SSR] = __expectString(output[_SSR]);
  }
  if (output[_DR] != null) {
    contents[_DR] = __parseBoolean(output[_DR]);
  }
  if (output.NotificationARNs === "") {
    contents[_NARN] = [];
  } else if (output[_NARN] != null && output[_NARN][_m] != null) {
    contents[_NARN] = de_NotificationARNs(__getArrayIfSingleItem(output[_NARN][_m]), context);
  }
  if (output[_TIM] != null) {
    contents[_TIM] = __strictParseInt32(output[_TIM]) as number;
  }
  if (output.Capabilities === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_m] != null) {
    contents[_C] = de_Capabilities(__getArrayIfSingleItem(output[_C][_m]), context);
  }
  if (output.Outputs === "") {
    contents[_O] = [];
  } else if (output[_O] != null && output[_O][_m] != null) {
    contents[_O] = de_Outputs(__getArrayIfSingleItem(output[_O][_m]), context);
  }
  if (output[_RARN] != null) {
    contents[_RARN] = __expectString(output[_RARN]);
  }
  if (output.Tags === "") {
    contents[_Ta] = [];
  } else if (output[_Ta] != null && output[_Ta][_m] != null) {
    contents[_Ta] = de_Tags(__getArrayIfSingleItem(output[_Ta][_m]), context);
  }
  if (output[_ETP] != null) {
    contents[_ETP] = __parseBoolean(output[_ETP]);
  }
  if (output[_PIa] != null) {
    contents[_PIa] = __expectString(output[_PIa]);
  }
  if (output[_RIo] != null) {
    contents[_RIo] = __expectString(output[_RIo]);
  }
  if (output[_DI] != null) {
    contents[_DI] = de_StackDriftInformation(output[_DI], context);
  }
  if (output[_REOC] != null) {
    contents[_REOC] = __parseBoolean(output[_REOC]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackDriftInformation
 */
const de_StackDriftInformation = (output: any, context: __SerdeContext): StackDriftInformation => {
  const contents: any = {};
  if (output[_SDS] != null) {
    contents[_SDS] = __expectString(output[_SDS]);
  }
  if (output[_LCT] != null) {
    contents[_LCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LCT]));
  }
  return contents;
};

/**
 * deserializeAws_queryStackDriftInformationSummary
 */
const de_StackDriftInformationSummary = (output: any, context: __SerdeContext): StackDriftInformationSummary => {
  const contents: any = {};
  if (output[_SDS] != null) {
    contents[_SDS] = __expectString(output[_SDS]);
  }
  if (output[_LCT] != null) {
    contents[_LCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LCT]));
  }
  return contents;
};

/**
 * deserializeAws_queryStackEvent
 */
const de_StackEvent = (output: any, context: __SerdeContext): StackEvent => {
  const contents: any = {};
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_EI] != null) {
    contents[_EI] = __expectString(output[_EI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_LRI] != null) {
    contents[_LRI] = __expectString(output[_LRI]);
  }
  if (output[_PRI] != null) {
    contents[_PRI] = __expectString(output[_PRI]);
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_RSes] != null) {
    contents[_RSes] = __expectString(output[_RSes]);
  }
  if (output[_RSR] != null) {
    contents[_RSR] = __expectString(output[_RSR]);
  }
  if (output[_RPe] != null) {
    contents[_RPe] = __expectString(output[_RPe]);
  }
  if (output[_CRT] != null) {
    contents[_CRT] = __expectString(output[_CRT]);
  }
  if (output[_HT] != null) {
    contents[_HT] = __expectString(output[_HT]);
  }
  if (output[_HS] != null) {
    contents[_HS] = __expectString(output[_HS]);
  }
  if (output[_HSR] != null) {
    contents[_HSR] = __expectString(output[_HSR]);
  }
  if (output[_HIP] != null) {
    contents[_HIP] = __expectString(output[_HIP]);
  }
  if (output[_HFM] != null) {
    contents[_HFM] = __expectString(output[_HFM]);
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
  if (output[_SSI] != null) {
    contents[_SSI] = __expectString(output[_SSI]);
  }
  if (output[_Reg] != null) {
    contents[_Reg] = __expectString(output[_Reg]);
  }
  if (output[_Acc] != null) {
    contents[_Acc] = __expectString(output[_Acc]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output.ParameterOverrides === "") {
    contents[_PO] = [];
  } else if (output[_PO] != null && output[_PO][_m] != null) {
    contents[_PO] = de_Parameters(__getArrayIfSingleItem(output[_PO][_m]), context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_SIS] != null) {
    contents[_SIS] = de_StackInstanceComprehensiveStatus(output[_SIS], context);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_OUIr] != null) {
    contents[_OUIr] = __expectString(output[_OUIr]);
  }
  if (output[_DSr] != null) {
    contents[_DSr] = __expectString(output[_DSr]);
  }
  if (output[_LDCT] != null) {
    contents[_LDCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LDCT]));
  }
  if (output[_LOI] != null) {
    contents[_LOI] = __expectString(output[_LOI]);
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
  if (output[_DSeta] != null) {
    contents[_DSeta] = __expectString(output[_DSeta]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackInstanceNotFoundException
 */
const de_StackInstanceNotFoundException = (output: any, context: __SerdeContext): StackInstanceNotFoundException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_LRI] != null) {
    contents[_LRI] = __expectString(output[_LRI]);
  }
  if (output[_PRI] != null) {
    contents[_PRI] = __expectString(output[_PRI]);
  }
  if (output.PhysicalResourceIdContext === "") {
    contents[_PRIC] = [];
  } else if (output[_PRIC] != null && output[_PRIC][_m] != null) {
    contents[_PRIC] = de_PhysicalResourceIdContext(__getArrayIfSingleItem(output[_PRIC][_m]), context);
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output.PropertyDifferences === "") {
    contents[_PD] = [];
  } else if (output[_PD] != null && output[_PD][_m] != null) {
    contents[_PD] = de_PropertyDifferences(__getArrayIfSingleItem(output[_PD][_m]), context);
  }
  if (output[_SRDS] != null) {
    contents[_SRDS] = __expectString(output[_SRDS]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
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
  if (output[_SSI] != null) {
    contents[_SSI] = __expectString(output[_SSI]);
  }
  if (output[_Reg] != null) {
    contents[_Reg] = __expectString(output[_Reg]);
  }
  if (output[_Acc] != null) {
    contents[_Acc] = __expectString(output[_Acc]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_SIS] != null) {
    contents[_SIS] = de_StackInstanceComprehensiveStatus(output[_SIS], context);
  }
  if (output[_OUIr] != null) {
    contents[_OUIr] = __expectString(output[_OUIr]);
  }
  if (output[_DSr] != null) {
    contents[_DSr] = __expectString(output[_DSr]);
  }
  if (output[_LDCT] != null) {
    contents[_LDCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LDCT]));
  }
  if (output[_LOI] != null) {
    contents[_LOI] = __expectString(output[_LOI]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackNotFoundException
 */
const de_StackNotFoundException = (output: any, context: __SerdeContext): StackNotFoundException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackResource
 */
const de_StackResource = (output: any, context: __SerdeContext): StackResource => {
  const contents: any = {};
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_LRI] != null) {
    contents[_LRI] = __expectString(output[_LRI]);
  }
  if (output[_PRI] != null) {
    contents[_PRI] = __expectString(output[_PRI]);
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_RSes] != null) {
    contents[_RSes] = __expectString(output[_RSes]);
  }
  if (output[_RSR] != null) {
    contents[_RSR] = __expectString(output[_RSR]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_DI] != null) {
    contents[_DI] = de_StackResourceDriftInformation(output[_DI], context);
  }
  if (output[_MI] != null) {
    contents[_MI] = de_ModuleInfo(output[_MI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackResourceDetail
 */
const de_StackResourceDetail = (output: any, context: __SerdeContext): StackResourceDetail => {
  const contents: any = {};
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_LRI] != null) {
    contents[_LRI] = __expectString(output[_LRI]);
  }
  if (output[_PRI] != null) {
    contents[_PRI] = __expectString(output[_PRI]);
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_LUTa] != null) {
    contents[_LUTa] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUTa]));
  }
  if (output[_RSes] != null) {
    contents[_RSes] = __expectString(output[_RSes]);
  }
  if (output[_RSR] != null) {
    contents[_RSR] = __expectString(output[_RSR]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output[_DI] != null) {
    contents[_DI] = de_StackResourceDriftInformation(output[_DI], context);
  }
  if (output[_MI] != null) {
    contents[_MI] = de_ModuleInfo(output[_MI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackResourceDrift
 */
const de_StackResourceDrift = (output: any, context: __SerdeContext): StackResourceDrift => {
  const contents: any = {};
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_LRI] != null) {
    contents[_LRI] = __expectString(output[_LRI]);
  }
  if (output[_PRI] != null) {
    contents[_PRI] = __expectString(output[_PRI]);
  }
  if (output.PhysicalResourceIdContext === "") {
    contents[_PRIC] = [];
  } else if (output[_PRIC] != null && output[_PRIC][_m] != null) {
    contents[_PRIC] = de_PhysicalResourceIdContext(__getArrayIfSingleItem(output[_PRIC][_m]), context);
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_EP] != null) {
    contents[_EP] = __expectString(output[_EP]);
  }
  if (output[_AP] != null) {
    contents[_AP] = __expectString(output[_AP]);
  }
  if (output.PropertyDifferences === "") {
    contents[_PD] = [];
  } else if (output[_PD] != null && output[_PD][_m] != null) {
    contents[_PD] = de_PropertyDifferences(__getArrayIfSingleItem(output[_PD][_m]), context);
  }
  if (output[_SRDS] != null) {
    contents[_SRDS] = __expectString(output[_SRDS]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_MI] != null) {
    contents[_MI] = de_ModuleInfo(output[_MI], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackResourceDriftInformation
 */
const de_StackResourceDriftInformation = (output: any, context: __SerdeContext): StackResourceDriftInformation => {
  const contents: any = {};
  if (output[_SRDS] != null) {
    contents[_SRDS] = __expectString(output[_SRDS]);
  }
  if (output[_LCT] != null) {
    contents[_LCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LCT]));
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
  if (output[_SRDS] != null) {
    contents[_SRDS] = __expectString(output[_SRDS]);
  }
  if (output[_LCT] != null) {
    contents[_LCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LCT]));
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
  if (output[_LRI] != null) {
    contents[_LRI] = __expectString(output[_LRI]);
  }
  if (output[_PRI] != null) {
    contents[_PRI] = __expectString(output[_PRI]);
  }
  if (output[_RTes] != null) {
    contents[_RTes] = __expectString(output[_RTes]);
  }
  if (output[_LUTa] != null) {
    contents[_LUTa] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUTa]));
  }
  if (output[_RSes] != null) {
    contents[_RSes] = __expectString(output[_RSes]);
  }
  if (output[_RSR] != null) {
    contents[_RSR] = __expectString(output[_RSR]);
  }
  if (output[_DI] != null) {
    contents[_DI] = de_StackResourceDriftInformationSummary(output[_DI], context);
  }
  if (output[_MI] != null) {
    contents[_MI] = de_ModuleInfo(output[_MI], context);
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
  if (output[_SSN] != null) {
    contents[_SSN] = __expectString(output[_SSN]);
  }
  if (output[_SSI] != null) {
    contents[_SSI] = __expectString(output[_SSI]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_TB] != null) {
    contents[_TB] = __expectString(output[_TB]);
  }
  if (output.Parameters === "") {
    contents[_P] = [];
  } else if (output[_P] != null && output[_P][_m] != null) {
    contents[_P] = de_Parameters(__getArrayIfSingleItem(output[_P][_m]), context);
  }
  if (output.Capabilities === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_m] != null) {
    contents[_C] = de_Capabilities(__getArrayIfSingleItem(output[_C][_m]), context);
  }
  if (output.Tags === "") {
    contents[_Ta] = [];
  } else if (output[_Ta] != null && output[_Ta][_m] != null) {
    contents[_Ta] = de_Tags(__getArrayIfSingleItem(output[_Ta][_m]), context);
  }
  if (output[_SSARN] != null) {
    contents[_SSARN] = __expectString(output[_SSARN]);
  }
  if (output[_ARARN] != null) {
    contents[_ARARN] = __expectString(output[_ARARN]);
  }
  if (output[_ERN] != null) {
    contents[_ERN] = __expectString(output[_ERN]);
  }
  if (output[_SSDDD] != null) {
    contents[_SSDDD] = de_StackSetDriftDetectionDetails(output[_SSDDD], context);
  }
  if (output[_AD] != null) {
    contents[_AD] = de_AutoDeployment(output[_AD], context);
  }
  if (output[_PM] != null) {
    contents[_PM] = __expectString(output[_PM]);
  }
  if (output.OrganizationalUnitIds === "") {
    contents[_OUI] = [];
  } else if (output[_OUI] != null && output[_OUI][_m] != null) {
    contents[_OUI] = de_OrganizationalUnitIdList(__getArrayIfSingleItem(output[_OUI][_m]), context);
  }
  if (output[_ME] != null) {
    contents[_ME] = de_ManagedExecution(output[_ME], context);
  }
  if (output.Regions === "") {
    contents[_R] = [];
  } else if (output[_R] != null && output[_R][_m] != null) {
    contents[_R] = de_RegionList(__getArrayIfSingleItem(output[_R][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetDriftDetectionDetails
 */
const de_StackSetDriftDetectionDetails = (output: any, context: __SerdeContext): StackSetDriftDetectionDetails => {
  const contents: any = {};
  if (output[_DSr] != null) {
    contents[_DSr] = __expectString(output[_DSr]);
  }
  if (output[_DDS] != null) {
    contents[_DDS] = __expectString(output[_DDS]);
  }
  if (output[_LDCT] != null) {
    contents[_LDCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LDCT]));
  }
  if (output[_TSIC] != null) {
    contents[_TSIC] = __strictParseInt32(output[_TSIC]) as number;
  }
  if (output[_DSIC] != null) {
    contents[_DSIC] = __strictParseInt32(output[_DSIC]) as number;
  }
  if (output[_ISSIC] != null) {
    contents[_ISSIC] = __strictParseInt32(output[_ISSIC]) as number;
  }
  if (output[_IPSIC] != null) {
    contents[_IPSIC] = __strictParseInt32(output[_IPSIC]) as number;
  }
  if (output[_FSIC] != null) {
    contents[_FSIC] = __strictParseInt32(output[_FSIC]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetNotEmptyException
 */
const de_StackSetNotEmptyException = (output: any, context: __SerdeContext): StackSetNotEmptyException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetNotFoundException
 */
const de_StackSetNotFoundException = (output: any, context: __SerdeContext): StackSetNotFoundException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetOperation
 */
const de_StackSetOperation = (output: any, context: __SerdeContext): StackSetOperation => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (output[_SSI] != null) {
    contents[_SSI] = __expectString(output[_SSI]);
  }
  if (output[_A] != null) {
    contents[_A] = __expectString(output[_A]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_OP] != null) {
    contents[_OP] = de_StackSetOperationPreferences(output[_OP], context);
  }
  if (output[_RSe] != null) {
    contents[_RSe] = __parseBoolean(output[_RSe]);
  }
  if (output[_ARARN] != null) {
    contents[_ARARN] = __expectString(output[_ARARN]);
  }
  if (output[_ERN] != null) {
    contents[_ERN] = __expectString(output[_ERN]);
  }
  if (output[_CTre] != null) {
    contents[_CTre] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTre]));
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ET]));
  }
  if (output[_DTep] != null) {
    contents[_DTep] = de_DeploymentTargets(output[_DTep], context);
  }
  if (output[_SSDDD] != null) {
    contents[_SSDDD] = de_StackSetDriftDetectionDetails(output[_SSDDD], context);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_SD] != null) {
    contents[_SD] = de_StackSetOperationStatusDetails(output[_SD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetOperationPreferences
 */
const de_StackSetOperationPreferences = (output: any, context: __SerdeContext): StackSetOperationPreferences => {
  const contents: any = {};
  if (output[_RCT] != null) {
    contents[_RCT] = __expectString(output[_RCT]);
  }
  if (output.RegionOrder === "") {
    contents[_RO] = [];
  } else if (output[_RO] != null && output[_RO][_m] != null) {
    contents[_RO] = de_RegionList(__getArrayIfSingleItem(output[_RO][_m]), context);
  }
  if (output[_FTC] != null) {
    contents[_FTC] = __strictParseInt32(output[_FTC]) as number;
  }
  if (output[_FTP] != null) {
    contents[_FTP] = __strictParseInt32(output[_FTP]) as number;
  }
  if (output[_MCC] != null) {
    contents[_MCC] = __strictParseInt32(output[_MCC]) as number;
  }
  if (output[_MCP] != null) {
    contents[_MCP] = __strictParseInt32(output[_MCP]) as number;
  }
  if (output[_CM] != null) {
    contents[_CM] = __expectString(output[_CM]);
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
  if (output[_Acc] != null) {
    contents[_Acc] = __expectString(output[_Acc]);
  }
  if (output[_Reg] != null) {
    contents[_Reg] = __expectString(output[_Reg]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_AGR] != null) {
    contents[_AGR] = de_AccountGateResult(output[_AGR], context);
  }
  if (output[_OUIr] != null) {
    contents[_OUIr] = __expectString(output[_OUIr]);
  }
  return contents;
};

/**
 * deserializeAws_queryStackSetOperationStatusDetails
 */
const de_StackSetOperationStatusDetails = (output: any, context: __SerdeContext): StackSetOperationStatusDetails => {
  const contents: any = {};
  if (output[_FSIC] != null) {
    contents[_FSIC] = __strictParseInt32(output[_FSIC]) as number;
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
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (output[_A] != null) {
    contents[_A] = __expectString(output[_A]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_CTre] != null) {
    contents[_CTre] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTre]));
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ET]));
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_SD] != null) {
    contents[_SD] = de_StackSetOperationStatusDetails(output[_SD], context);
  }
  if (output[_OP] != null) {
    contents[_OP] = de_StackSetOperationPreferences(output[_OP], context);
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
  if (output[_SSN] != null) {
    contents[_SSN] = __expectString(output[_SSN]);
  }
  if (output[_SSI] != null) {
    contents[_SSI] = __expectString(output[_SSI]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_AD] != null) {
    contents[_AD] = de_AutoDeployment(output[_AD], context);
  }
  if (output[_PM] != null) {
    contents[_PM] = __expectString(output[_PM]);
  }
  if (output[_DSr] != null) {
    contents[_DSr] = __expectString(output[_DSr]);
  }
  if (output[_LDCT] != null) {
    contents[_LDCT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LDCT]));
  }
  if (output[_ME] != null) {
    contents[_ME] = de_ManagedExecution(output[_ME], context);
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
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_TDe] != null) {
    contents[_TDe] = __expectString(output[_TDe]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_LUT] != null) {
    contents[_LUT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUT]));
  }
  if (output[_DTel] != null) {
    contents[_DTel] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DTel]));
  }
  if (output[_SSta] != null) {
    contents[_SSta] = __expectString(output[_SSta]);
  }
  if (output[_SSR] != null) {
    contents[_SSR] = __expectString(output[_SSR]);
  }
  if (output[_PIa] != null) {
    contents[_PIa] = __expectString(output[_PIa]);
  }
  if (output[_RIo] != null) {
    contents[_RIo] = __expectString(output[_RIo]);
  }
  if (output[_DI] != null) {
    contents[_DI] = de_StackDriftInformationSummary(output[_DI], context);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
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
  if (output[_PK] != null) {
    contents[_PK] = __expectString(output[_PK]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_NE] != null) {
    contents[_NE] = __parseBoolean(output[_NE]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
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
  if (output[_TVA] != null) {
    contents[_TVA] = __expectString(output[_TVA]);
  }
  return contents;
};

/**
 * deserializeAws_queryTokenAlreadyExistsException
 */
const de_TokenAlreadyExistsException = (output: any, context: __SerdeContext): TokenAlreadyExistsException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_Al] != null) {
    contents[_Al] = __expectString(output[_Al]);
  }
  if (output[_Co] != null) {
    contents[_Co] = __expectString(output[_Co]);
  }
  if (output[_LU] != null) {
    contents[_LU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LU]));
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_IDC] != null) {
    contents[_IDC] = __parseBoolean(output[_IDC]);
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
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_TCA] != null) {
    contents[_TCA] = __expectString(output[_TCA]);
  }
  if (output[_TCAy] != null) {
    contents[_TCAy] = __expectString(output[_TCAy]);
  }
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
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
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryTypeNotFoundException
 */
const de_TypeNotFoundException = (output: any, context: __SerdeContext): TypeNotFoundException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_DVI] != null) {
    contents[_DVI] = __expectString(output[_DVI]);
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_LU] != null) {
    contents[_LU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LU]));
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  if (output[_OTN] != null) {
    contents[_OTN] = __expectString(output[_OTN]);
  }
  if (output[_PVN] != null) {
    contents[_PVN] = __expectString(output[_PVN]);
  }
  if (output[_LPV] != null) {
    contents[_LPV] = __expectString(output[_LPV]);
  }
  if (output[_PIu] != null) {
    contents[_PIu] = __expectString(output[_PIu]);
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_IA] != null) {
    contents[_IA] = __parseBoolean(output[_IA]);
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
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_IDV] != null) {
    contents[_IDV] = __parseBoolean(output[_IDV]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_TCi] != null) {
    contents[_TCi] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_TCi]));
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_PVN] != null) {
    contents[_PVN] = __expectString(output[_PVN]);
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
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateStackOutput
 */
const de_UpdateStackOutput = (output: any, context: __SerdeContext): UpdateStackOutput => {
  const contents: any = {};
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateStackSetOutput
 */
const de_UpdateStackSetOutput = (output: any, context: __SerdeContext): UpdateStackSetOutput => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
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
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  return contents;
};

/**
 * deserializeAws_queryValidateTemplateOutput
 */
const de_ValidateTemplateOutput = (output: any, context: __SerdeContext): ValidateTemplateOutput => {
  const contents: any = {};
  if (output.Parameters === "") {
    contents[_P] = [];
  } else if (output[_P] != null && output[_P][_m] != null) {
    contents[_P] = de_TemplateParameters(__getArrayIfSingleItem(output[_P][_m]), context);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output.Capabilities === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_m] != null) {
    contents[_C] = de_Capabilities(__getArrayIfSingleItem(output[_C][_m]), context);
  }
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  if (output.DeclaredTransforms === "") {
    contents[_DTec] = [];
  } else if (output[_DTec] != null && output[_DTec][_m] != null) {
    contents[_DTec] = de_TransformsList(__getArrayIfSingleItem(output[_DTec][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryWarnings
 */
const de_Warnings = (output: any, context: __SerdeContext): Warnings => {
  const contents: any = {};
  if (output.UnrecognizedResourceTypes === "") {
    contents[_URT] = [];
  } else if (output[_URT] != null && output[_URT][_m] != null) {
    contents[_URT] = de_ResourceTypes(__getArrayIfSingleItem(output[_URT][_m]), context);
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

const _ = "2010-05-15";
const _A = "Action";
const _AD = "AutoDeployment";
const _AFT = "AccountFilterType";
const _AGR = "AccountGateResult";
const _AL = "AccountLimits";
const _AOA = "ActivateOrganizationsAccess";
const _AP = "ActualProperties";
const _ARARN = "AdministrationRoleARN";
const _AT = "ActivateType";
const _ATAC = "AcceptTermsAndConditions";
const _AU = "AutoUpdate";
const _AUc = "AccountsUrl";
const _AV = "AllowedValues";
const _AVc = "ActualValue";
const _Ac = "Accounts";
const _Acc = "Account";
const _Act = "Active";
const _Al = "Alias";
const _Ar = "Arn";
const _At = "Attribute";
const _BDTC = "BatchDescribeTypeConfigurations";
const _BT = "BearerToken";
const _C = "Capabilities";
const _CA = "CallAs";
const _CAo = "ConnectionArn";
const _CAon = "ConfigurationAlias";
const _CAonf = "ConfigurationArn";
const _CCS = "CreateChangeSet";
const _CE = "CausingEntity";
const _CM = "ConcurrencyMode";
const _COS = "CurrentOperationStatus";
const _CR = "CapabilitiesReason";
const _CRT = "ClientRequestToken";
const _CS = "CreateStack";
const _CSI = "CreateStackInstances";
const _CSIh = "ChangeSetId";
const _CSN = "ChangeSetName";
const _CSS = "CreateStackSet";
const _CST = "ChangeSetType";
const _CSh = "ChangeSource";
const _CSo = "ConfigurationSchema";
const _CT = "ClientToken";
const _CTr = "CreationTime";
const _CTre = "CreationTimestamp";
const _CUR = "ContinueUpdateRollback";
const _CUS = "CancelUpdateStack";
const _Ca = "Category";
const _Ch = "Changes";
const _Co = "Configuration";
const _D = "Description";
const _DAL = "DescribeAccountLimits";
const _DCS = "DeleteChangeSet";
const _DCSH = "DescribeChangeSetHooks";
const _DCSe = "DescribeChangeSet";
const _DDS = "DriftDetectionStatus";
const _DI = "DriftInformation";
const _DOA = "DeactivateOrganizationsAccess";
const _DOAe = "DescribeOrganizationsAccess";
const _DP = "DescribePublisher";
const _DR = "DisableRollback";
const _DS = "DeleteStack";
const _DSD = "DetectStackDrift";
const _DSDDS = "DescribeStackDriftDetectionStatus";
const _DSE = "DescribeStackEvents";
const _DSI = "DeleteStackInstances";
const _DSIC = "DriftedStackInstancesCount";
const _DSIe = "DescribeStackInstance";
const _DSR = "DescribeStackResource";
const _DSRC = "DriftedStackResourceCount";
const _DSRD = "DescribeStackResourceDrifts";
const _DSRDe = "DetectStackResourceDrift";
const _DSRe = "DescribeStackResources";
const _DSRet = "DetectionStatusReason";
const _DSS = "DeleteStackSet";
const _DSSD = "DetectStackSetDrift";
const _DSSO = "DescribeStackSetOperation";
const _DSSe = "DescribeStackSet";
const _DSe = "DescribeStacks";
const _DSep = "DeprecatedStatus";
const _DSet = "DetectionStatus";
const _DSeta = "DetailedStatus";
const _DSr = "DriftStatus";
const _DT = "DeactivateType";
const _DTR = "DescribeTypeRegistration";
const _DTe = "DeregisterType";
const _DTec = "DeclaredTransforms";
const _DTel = "DeletionTime";
const _DTep = "DeploymentTargets";
const _DTes = "DescribeType";
const _DTi = "DifferenceType";
const _DU = "DocumentationUrl";
const _DV = "DefaultValue";
const _DVI = "DefaultVersionId";
const _De = "Details";
const _E = "Enabled";
const _EC = "ErrorCode";
const _ECS = "ExecuteChangeSet";
const _EI = "EventId";
const _EM = "ErrorMessage";
const _EN = "ExportName";
const _EP = "ExpectedProperties";
const _ERA = "ExecutionRoleArn";
const _ERN = "ExecutionRoleName";
const _ES = "ExecutionStatus";
const _ESI = "ExportingStackId";
const _ET = "EndTimestamp";
const _ETC = "EstimateTemplateCost";
const _ETP = "EnableTerminationProtection";
const _EV = "ExpectedValue";
const _Er = "Errors";
const _Ev = "Evaluation";
const _Ex = "Exports";
const _F = "Filters";
const _FM = "FailureMode";
const _FSIC = "FailedStackInstancesCount";
const _FTC = "FailureToleranceCount";
const _FTP = "FailureTolerancePercentage";
const _GSP = "GetStackPolicy";
const _GT = "GetTemplate";
const _GTS = "GetTemplateSummary";
const _H = "Hooks";
const _HFM = "HookFailureMode";
const _HIC = "HookInvocationCount";
const _HIP = "HookInvocationPoint";
const _HS = "HookStatus";
const _HSR = "HookStatusReason";
const _HT = "HookType";
const _I = "Id";
const _IA = "IsActivated";
const _IDC = "IsDefaultConfiguration";
const _IDV = "IsDefaultVersion";
const _IER = "ImportExistingResources";
const _INS = "IncludeNestedStacks";
const _IP = "InvocationPoint";
const _IPSIC = "InProgressStackInstancesCount";
const _IPd = "IdentityProvider";
const _ISSIC = "InSyncStackInstancesCount";
const _ISTSS = "ImportStacksToStackSet";
const _Im = "Imports";
const _K = "Key";
const _LC = "LoggingConfig";
const _LCS = "ListChangeSets";
const _LCT = "LastCheckTimestamp";
const _LDB = "LogDeliveryBucket";
const _LDCT = "LastDriftCheckTimestamp";
const _LE = "ListExports";
const _LGN = "LogGroupName";
const _LI = "ListImports";
const _LIH = "LogicalIdHierarchy";
const _LOI = "LastOperationId";
const _LPV = "LatestPublicVersion";
const _LRA = "LogRoleArn";
const _LRI = "LogicalResourceId";
const _LRIo = "LogicalResourceIds";
const _LS = "ListStacks";
const _LSI = "ListStackInstances";
const _LSIRD = "ListStackInstanceResourceDrifts";
const _LSR = "ListStackResources";
const _LSS = "ListStackSets";
const _LSSO = "ListStackSetOperations";
const _LSSOR = "ListStackSetOperationResults";
const _LT = "ListTypes";
const _LTR = "ListTypeRegistrations";
const _LTV = "ListTypeVersions";
const _LU = "LastUpdated";
const _LUT = "LastUpdatedTime";
const _LUTa = "LastUpdatedTimestamp";
const _M = "Message";
const _MCC = "MaxConcurrentCount";
const _MCP = "MaxConcurrentPercentage";
const _ME = "ManagedExecution";
const _MI = "ModuleInfo";
const _MR = "MaxResults";
const _MTIM = "MonitoringTimeInMinutes";
const _MV = "MajorVersion";
const _Me = "Metadata";
const _N = "Name";
const _NARN = "NotificationARNs";
const _NE = "NoEcho";
const _NT = "NextToken";
const _O = "Outputs";
const _OF = "OnFailure";
const _OI = "OperationId";
const _OK = "OutputKey";
const _OP = "OperationPreferences";
const _OS = "OperationStatus";
const _OSF = "OnStackFailure";
const _OTA = "OriginalTypeArn";
const _OTN = "OriginalTypeName";
const _OUI = "OrganizationalUnitIds";
const _OUIr = "OrganizationalUnitId";
const _OV = "OutputValue";
const _P = "Parameters";
const _PC = "ParameterConstraints";
const _PCSI = "ParentChangeSetId";
const _PD = "PropertyDifferences";
const _PI = "PublisherId";
const _PIa = "ParentId";
const _PIu = "PublisherIdentity";
const _PK = "ParameterKey";
const _PM = "PermissionModel";
const _PN = "PublisherName";
const _PO = "ParameterOverrides";
const _PP = "PublisherProfile";
const _PPr = "PropertyPath";
const _PRI = "PhysicalResourceId";
const _PRIC = "PhysicalResourceIdContext";
const _PS = "PublisherStatus";
const _PSr = "ProgressStatus";
const _PT = "PublishType";
const _PTA = "PublicTypeArn";
const _PTa = "ParameterType";
const _PTr = "ProvisioningType";
const _PV = "ParameterValue";
const _PVN = "PublicVersionNumber";
const _R = "Regions";
const _RA = "ResourceAction";
const _RARN = "RoleARN";
const _RAT = "RequiredActivatedTypes";
const _RC = "RollbackConfiguration";
const _RCSI = "RootChangeSetId";
const _RCT = "RegionConcurrencyType";
const _RCe = "ResourceChange";
const _REOC = "RetainExceptOnCreate";
const _RHP = "RecordHandlerProgress";
const _RI = "ResourceIdentifier";
const _RIS = "ResourceIdentifierSummaries";
const _RIe = "ResourceIdentifiers";
const _RIo = "RootId";
const _RM = "ResourceModel";
const _RO = "RegionOrder";
const _RP = "RegisterPublisher";
const _RPe = "ResourceProperties";
const _RR = "RetainResources";
const _RRe = "RequiresRecreation";
const _RS = "RollbackStack";
const _RSF = "RegistrationStatusFilter";
const _RSOAR = "RetainStacksOnAccountRemoval";
const _RSR = "ResourceStatusReason";
const _RSe = "RetainStacks";
const _RSes = "ResourceStatus";
const _RT = "RegisterType";
const _RTD = "ResourceTargetDetails";
const _RTI = "ResourcesToImport";
const _RTL = "RegistrationTokenList";
const _RTS = "ResourcesToSkip";
const _RTe = "ResourceTypes";
const _RTeg = "RegistrationToken";
const _RTes = "ResourceType";
const _RTo = "RollbackTriggers";
const _RV = "ResolvedValue";
const _Re = "Replacement";
const _Reg = "Region";
const _S = "Status";
const _SA = "StagesAvailable";
const _SD = "StatusDetails";
const _SDDI = "StackDriftDetectionId";
const _SDS = "StackDriftStatus";
const _SE = "StackEvents";
const _SHP = "SchemaHandlerPackage";
const _SI = "StackId";
const _SIA = "StackInstanceAccount";
const _SIR = "StackInstanceRegion";
const _SIRDS = "StackInstanceResourceDriftStatuses";
const _SIS = "StackInstanceStatus";
const _SIU = "StackIdsUrl";
const _SIt = "StackIds";
const _SIta = "StackInstance";
const _SM = "StatusMessage";
const _SMV = "SupportedMajorVersions";
const _SN = "StackName";
const _SPB = "StackPolicyBody";
const _SPDUB = "StackPolicyDuringUpdateBody";
const _SPDUURL = "StackPolicyDuringUpdateURL";
const _SPURL = "StackPolicyURL";
const _SR = "SignalResource";
const _SRD = "StackResourceDrifts";
const _SRDS = "StackResourceDriftStatus";
const _SRDSF = "StackResourceDriftStatusFilters";
const _SRDt = "StackResourceDetail";
const _SRDta = "StackResourceDrift";
const _SRS = "StackResourceSummaries";
const _SRt = "StatusReason";
const _SRta = "StackResources";
const _SS = "StackSet";
const _SSARN = "StackSetARN";
const _SSDDD = "StackSetDriftDetectionDetails";
const _SSF = "StackStatusFilter";
const _SSI = "StackSetId";
const _SSN = "StackSetName";
const _SSO = "StackSetOperation";
const _SSP = "SetStackPolicy";
const _SSR = "StackStatusReason";
const _SSSO = "StopStackSetOperation";
const _SSt = "StackSummaries";
const _SSta = "StackStatus";
const _STC = "SetTypeConfiguration";
const _STDV = "SetTypeDefaultVersion";
const _SU = "SourceUrl";
const _Sc = "Schema";
const _Sco = "Scope";
const _St = "Stacks";
const _Su = "Summaries";
const _T = "Type";
const _TA = "TypeArn";
const _TB = "TemplateBody";
const _TC = "TypeConfigurations";
const _TCA = "TypeConfigurationAlias";
const _TCAy = "TypeConfigurationArn";
const _TCI = "TypeConfigurationIdentifiers";
const _TCIy = "TypeConfigurationIdentifier";
const _TCVI = "TypeConfigurationVersionId";
const _TCi = "TimeCreated";
const _TD = "TargetDetails";
const _TDe = "TemplateDescription";
const _TH = "TypeHierarchy";
const _TIM = "TimeoutInMinutes";
const _TN = "TypeName";
const _TNA = "TypeNameAlias";
const _TNP = "TypeNamePrefix";
const _TS = "TemplateStage";
const _TSC = "TemplateSummaryConfig";
const _TSIC = "TotalStackInstancesCount";
const _TSy = "TypeSummaries";
const _TT = "TestType";
const _TTS = "TypeTestsStatus";
const _TTSD = "TypeTestsStatusDescription";
const _TTa = "TargetType";
const _TURL = "TemplateURL";
const _TURTAW = "TreatUnrecognizedResourceTypesAsWarnings";
const _TVA = "TypeVersionArn";
const _TVI = "TypeVersionId";
const _TVS = "TypeVersionSummaries";
const _Ta = "Tags";
const _Tar = "Target";
const _Ti = "Timestamp";
const _U = "Url";
const _UI = "UniqueId";
const _UPT = "UsePreviousTemplate";
const _UPV = "UsePreviousValue";
const _URT = "UnrecognizedResourceTypes";
const _US = "UpdateStack";
const _USI = "UpdateStackInstances";
const _USS = "UpdateStackSet";
const _UTC = "UnprocessedTypeConfigurations";
const _UTP = "UpdateTerminationProtection";
const _V = "Version";
const _VB = "VersionBump";
const _VI = "VersionId";
const _VT = "ValidateTemplate";
const _Va = "Values";
const _Val = "Value";
const _Vi = "Visibility";
const _W = "Warnings";
const _m = "member";

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
