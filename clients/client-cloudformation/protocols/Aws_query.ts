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
import { DescribeStackSetCommandInput, DescribeStackSetCommandOutput } from "../commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
} from "../commands/DescribeStackSetOperationCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "../commands/DescribeStacksCommand";
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
import { ListStackInstancesCommandInput, ListStackInstancesCommandOutput } from "../commands/ListStackInstancesCommand";
import { ListStackResourcesCommandInput, ListStackResourcesCommandOutput } from "../commands/ListStackResourcesCommand";
import {
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "../commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "../commands/ListStackSetOperationsCommand";
import { ListStackSetsCommandInput, ListStackSetsCommandOutput } from "../commands/ListStackSetsCommand";
import { ListStacksCommandInput, ListStacksCommandOutput } from "../commands/ListStacksCommand";
import {
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "../commands/ListTypeRegistrationsCommand";
import { ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput } from "../commands/ListTypeVersionsCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import { PublishTypeCommandInput, PublishTypeCommandOutput } from "../commands/PublishTypeCommand";
import {
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
} from "../commands/RecordHandlerProgressCommand";
import { RegisterPublisherCommandInput, RegisterPublisherCommandOutput } from "../commands/RegisterPublisherCommand";
import { RegisterTypeCommandInput, RegisterTypeCommandOutput } from "../commands/RegisterTypeCommand";
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
import {
  AccountGateResult,
  AccountLimit,
  ActivateTypeInput,
  ActivateTypeOutput,
  AlreadyExistsException,
  AutoDeployment,
  BatchDescribeTypeConfigurationsError,
  BatchDescribeTypeConfigurationsInput,
  BatchDescribeTypeConfigurationsOutput,
  CFNRegistryException,
  CancelUpdateStackInput,
  Capability,
  Change,
  ChangeSetNotFoundException,
  ChangeSetSummary,
  ContinueUpdateRollbackInput,
  ContinueUpdateRollbackOutput,
  CreateChangeSetInput,
  CreateChangeSetOutput,
  CreateStackInput,
  CreateStackInstancesInput,
  CreateStackInstancesOutput,
  CreateStackOutput,
  CreateStackSetInput,
  CreateStackSetOutput,
  CreatedButModifiedException,
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
  DescribeChangeSetInput,
  DescribeChangeSetOutput,
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
  ListTypeVersionsInput,
  ListTypeVersionsOutput,
  ListTypesInput,
  ListTypesOutput,
  LoggingConfig,
  ModuleInfo,
  NameAlreadyExistsException,
  OperationIdAlreadyExistsException,
  OperationInProgressException,
  OperationNotFoundException,
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
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  strictParseInt as __strictParseInt,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_queryActivateTypeCommand = async (
  input: ActivateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryActivateTypeInput(input, context),
    Action: "ActivateType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchDescribeTypeConfigurationsCommand = async (
  input: BatchDescribeTypeConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchDescribeTypeConfigurationsInput(input, context),
    Action: "BatchDescribeTypeConfigurations",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCancelUpdateStackCommand = async (
  input: CancelUpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCancelUpdateStackInput(input, context),
    Action: "CancelUpdateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryContinueUpdateRollbackCommand = async (
  input: ContinueUpdateRollbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryContinueUpdateRollbackInput(input, context),
    Action: "ContinueUpdateRollback",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateChangeSetCommand = async (
  input: CreateChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateChangeSetInput(input, context),
    Action: "CreateChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateStackInput(input, context),
    Action: "CreateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateStackInstancesCommand = async (
  input: CreateStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateStackInstancesInput(input, context),
    Action: "CreateStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateStackSetCommand = async (
  input: CreateStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateStackSetInput(input, context),
    Action: "CreateStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeactivateTypeCommand = async (
  input: DeactivateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeactivateTypeInput(input, context),
    Action: "DeactivateType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteChangeSetCommand = async (
  input: DeleteChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteChangeSetInput(input, context),
    Action: "DeleteChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteStackInput(input, context),
    Action: "DeleteStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteStackInstancesCommand = async (
  input: DeleteStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteStackInstancesInput(input, context),
    Action: "DeleteStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteStackSetCommand = async (
  input: DeleteStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteStackSetInput(input, context),
    Action: "DeleteStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeregisterTypeCommand = async (
  input: DeregisterTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeregisterTypeInput(input, context),
    Action: "DeregisterType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAccountLimitsInput(input, context),
    Action: "DescribeAccountLimits",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeChangeSetCommand = async (
  input: DescribeChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeChangeSetInput(input, context),
    Action: "DescribeChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribePublisherCommand = async (
  input: DescribePublisherCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribePublisherInput(input, context),
    Action: "DescribePublisher",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStackDriftDetectionStatusCommand = async (
  input: DescribeStackDriftDetectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackDriftDetectionStatusInput(input, context),
    Action: "DescribeStackDriftDetectionStatus",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStackEventsCommand = async (
  input: DescribeStackEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackEventsInput(input, context),
    Action: "DescribeStackEvents",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStackInstanceCommand = async (
  input: DescribeStackInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackInstanceInput(input, context),
    Action: "DescribeStackInstance",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStackResourceCommand = async (
  input: DescribeStackResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackResourceInput(input, context),
    Action: "DescribeStackResource",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStackResourceDriftsCommand = async (
  input: DescribeStackResourceDriftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackResourceDriftsInput(input, context),
    Action: "DescribeStackResourceDrifts",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStackResourcesCommand = async (
  input: DescribeStackResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackResourcesInput(input, context),
    Action: "DescribeStackResources",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStacksInput(input, context),
    Action: "DescribeStacks",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStackSetCommand = async (
  input: DescribeStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackSetInput(input, context),
    Action: "DescribeStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeStackSetOperationCommand = async (
  input: DescribeStackSetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeStackSetOperationInput(input, context),
    Action: "DescribeStackSetOperation",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTypeCommand = async (
  input: DescribeTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTypeInput(input, context),
    Action: "DescribeType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTypeRegistrationCommand = async (
  input: DescribeTypeRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTypeRegistrationInput(input, context),
    Action: "DescribeTypeRegistration",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetectStackDriftCommand = async (
  input: DetectStackDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetectStackDriftInput(input, context),
    Action: "DetectStackDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetectStackResourceDriftCommand = async (
  input: DetectStackResourceDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetectStackResourceDriftInput(input, context),
    Action: "DetectStackResourceDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetectStackSetDriftCommand = async (
  input: DetectStackSetDriftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetectStackSetDriftInput(input, context),
    Action: "DetectStackSetDrift",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEstimateTemplateCostCommand = async (
  input: EstimateTemplateCostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEstimateTemplateCostInput(input, context),
    Action: "EstimateTemplateCost",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryExecuteChangeSetCommand = async (
  input: ExecuteChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryExecuteChangeSetInput(input, context),
    Action: "ExecuteChangeSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetStackPolicyCommand = async (
  input: GetStackPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetStackPolicyInput(input, context),
    Action: "GetStackPolicy",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetTemplateInput(input, context),
    Action: "GetTemplate",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetTemplateSummaryCommand = async (
  input: GetTemplateSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetTemplateSummaryInput(input, context),
    Action: "GetTemplateSummary",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryImportStacksToStackSetCommand = async (
  input: ImportStacksToStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryImportStacksToStackSetInput(input, context),
    Action: "ImportStacksToStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListChangeSetsCommand = async (
  input: ListChangeSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListChangeSetsInput(input, context),
    Action: "ListChangeSets",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListExportsCommand = async (
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListExportsInput(input, context),
    Action: "ListExports",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListImportsInput(input, context),
    Action: "ListImports",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListStackInstancesCommand = async (
  input: ListStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackInstancesInput(input, context),
    Action: "ListStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListStackResourcesCommand = async (
  input: ListStackResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackResourcesInput(input, context),
    Action: "ListStackResources",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListStacksCommand = async (
  input: ListStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStacksInput(input, context),
    Action: "ListStacks",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListStackSetOperationResultsCommand = async (
  input: ListStackSetOperationResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackSetOperationResultsInput(input, context),
    Action: "ListStackSetOperationResults",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListStackSetOperationsCommand = async (
  input: ListStackSetOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackSetOperationsInput(input, context),
    Action: "ListStackSetOperations",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListStackSetsCommand = async (
  input: ListStackSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListStackSetsInput(input, context),
    Action: "ListStackSets",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTypeRegistrationsCommand = async (
  input: ListTypeRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTypeRegistrationsInput(input, context),
    Action: "ListTypeRegistrations",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTypesCommand = async (
  input: ListTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTypesInput(input, context),
    Action: "ListTypes",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTypeVersionsCommand = async (
  input: ListTypeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTypeVersionsInput(input, context),
    Action: "ListTypeVersions",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPublishTypeCommand = async (
  input: PublishTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPublishTypeInput(input, context),
    Action: "PublishType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRecordHandlerProgressCommand = async (
  input: RecordHandlerProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRecordHandlerProgressInput(input, context),
    Action: "RecordHandlerProgress",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRegisterPublisherCommand = async (
  input: RegisterPublisherCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRegisterPublisherInput(input, context),
    Action: "RegisterPublisher",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRegisterTypeCommand = async (
  input: RegisterTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRegisterTypeInput(input, context),
    Action: "RegisterType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetStackPolicyCommand = async (
  input: SetStackPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetStackPolicyInput(input, context),
    Action: "SetStackPolicy",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetTypeConfigurationCommand = async (
  input: SetTypeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetTypeConfigurationInput(input, context),
    Action: "SetTypeConfiguration",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetTypeDefaultVersionCommand = async (
  input: SetTypeDefaultVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetTypeDefaultVersionInput(input, context),
    Action: "SetTypeDefaultVersion",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySignalResourceCommand = async (
  input: SignalResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySignalResourceInput(input, context),
    Action: "SignalResource",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStopStackSetOperationCommand = async (
  input: StopStackSetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStopStackSetOperationInput(input, context),
    Action: "StopStackSetOperation",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTestTypeCommand = async (
  input: TestTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTestTypeInput(input, context),
    Action: "TestType",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateStackInput(input, context),
    Action: "UpdateStack",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateStackInstancesCommand = async (
  input: UpdateStackInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateStackInstancesInput(input, context),
    Action: "UpdateStackInstances",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateStackSetCommand = async (
  input: UpdateStackSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateStackSetInput(input, context),
    Action: "UpdateStackSet",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateTerminationProtectionCommand = async (
  input: UpdateTerminationProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateTerminationProtectionInput(input, context),
    Action: "UpdateTerminationProtection",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryValidateTemplateCommand = async (
  input: ValidateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryValidateTemplateInput(input, context),
    Action: "ValidateTemplate",
    Version: "2010-05-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryActivateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryActivateTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryActivateTypeOutput(data.ActivateTypeResult, context);
  const response: ActivateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryActivateTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryBatchDescribeTypeConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeTypeConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchDescribeTypeConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBatchDescribeTypeConfigurationsOutput(
    data.BatchDescribeTypeConfigurationsResult,
    context
  );
  const response: BatchDescribeTypeConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchDescribeTypeConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeTypeConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeConfigurationNotFoundException":
    case "com.amazonaws.cloudformation#TypeConfigurationNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeConfigurationNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCancelUpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelUpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCancelUpdateStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CancelUpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCancelUpdateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelUpdateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryContinueUpdateRollbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueUpdateRollbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryContinueUpdateRollbackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryContinueUpdateRollbackOutput(data.ContinueUpdateRollbackResult, context);
  const response: ContinueUpdateRollbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryContinueUpdateRollbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueUpdateRollbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateChangeSetOutput(data.CreateChangeSetResult, context);
  const response: CreateChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudformation#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateStackOutput(data.CreateStackResult, context);
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudformation#AlreadyExistsException":
      response = {
        ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateStackInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateStackInstancesOutput(data.CreateStackInstancesResult, context);
  const response: CreateStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateStackInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateStackSetOutput(data.CreateStackSetResult, context);
  const response: CreateStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CreatedButModifiedException":
    case "com.amazonaws.cloudformation#CreatedButModifiedException":
      response = {
        ...(await deserializeAws_queryCreatedButModifiedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameAlreadyExistsException":
    case "com.amazonaws.cloudformation#NameAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryNameAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeactivateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeactivateTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeactivateTypeOutput(data.DeactivateTypeResult, context);
  const response: DeactivateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeactivateTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteChangeSetOutput(data.DeleteChangeSetResult, context);
  const response: DeleteChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidChangeSetStatusException":
    case "com.amazonaws.cloudformation#InvalidChangeSetStatusException":
      response = {
        ...(await deserializeAws_queryInvalidChangeSetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteStackInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteStackInstancesOutput(data.DeleteStackInstancesResult, context);
  const response: DeleteStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteStackInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteStackSetOutput(data.DeleteStackSetResult, context);
  const response: DeleteStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotEmptyException":
    case "com.amazonaws.cloudformation#StackSetNotEmptyException":
      response = {
        ...(await deserializeAws_queryStackSetNotEmptyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeregisterTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeregisterTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeregisterTypeOutput(data.DeregisterTypeResult, context);
  const response: DeregisterTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeregisterTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeChangeSetOutput(data.DescribeChangeSetResult, context);
  const response: DescribeChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribePublisherCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublisherCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribePublisherCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribePublisherOutput(data.DescribePublisherResult, context);
  const response: DescribePublisherCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribePublisherCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePublisherCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStackDriftDetectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackDriftDetectionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackDriftDetectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackDriftDetectionStatusOutput(
    data.DescribeStackDriftDetectionStatusResult,
    context
  );
  const response: DescribeStackDriftDetectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStackDriftDetectionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackDriftDetectionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStackEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackEventsOutput(data.DescribeStackEventsResult, context);
  const response: DescribeStackEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStackEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStackInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackInstanceOutput(data.DescribeStackInstanceResult, context);
  const response: DescribeStackInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStackInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStackResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackResourceOutput(data.DescribeStackResourceResult, context);
  const response: DescribeStackResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStackResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStackResourceDriftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceDriftsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackResourceDriftsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackResourceDriftsOutput(data.DescribeStackResourceDriftsResult, context);
  const response: DescribeStackResourceDriftsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStackResourceDriftsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourceDriftsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStackResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackResourcesOutput(data.DescribeStackResourcesResult, context);
  const response: DescribeStackResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStackResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStacksOutput(data.DescribeStacksResult, context);
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackSetOutput(data.DescribeStackSetResult, context);
  const response: DescribeStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeStackSetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeStackSetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeStackSetOperationOutput(data.DescribeStackSetOperationResult, context);
  const response: DescribeStackSetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeStackSetOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSetOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTypeOutput(data.DescribeTypeResult, context);
  const response: DescribeTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeTypeRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeRegistrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTypeRegistrationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTypeRegistrationOutput(data.DescribeTypeRegistrationResult, context);
  const response: DescribeTypeRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTypeRegistrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTypeRegistrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetectStackDriftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackDriftCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetectStackDriftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetectStackDriftOutput(data.DetectStackDriftResult, context);
  const response: DetectStackDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetectStackDriftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackDriftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetectStackResourceDriftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackResourceDriftCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetectStackResourceDriftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetectStackResourceDriftOutput(data.DetectStackResourceDriftResult, context);
  const response: DetectStackResourceDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetectStackResourceDriftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackResourceDriftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetectStackSetDriftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackSetDriftCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetectStackSetDriftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetectStackSetDriftOutput(data.DetectStackSetDriftResult, context);
  const response: DetectStackSetDriftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetectStackSetDriftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectStackSetDriftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryEstimateTemplateCostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EstimateTemplateCostCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEstimateTemplateCostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEstimateTemplateCostOutput(data.EstimateTemplateCostResult, context);
  const response: EstimateTemplateCostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEstimateTemplateCostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EstimateTemplateCostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryExecuteChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryExecuteChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryExecuteChangeSetOutput(data.ExecuteChangeSetResult, context);
  const response: ExecuteChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryExecuteChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidChangeSetStatusException":
    case "com.amazonaws.cloudformation#InvalidChangeSetStatusException":
      response = {
        ...(await deserializeAws_queryInvalidChangeSetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetStackPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStackPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetStackPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetStackPolicyOutput(data.GetStackPolicyResult, context);
  const response: GetStackPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetStackPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStackPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetTemplateOutput(data.GetTemplateResult, context);
  const response: GetTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChangeSetNotFoundException":
    case "com.amazonaws.cloudformation#ChangeSetNotFoundException":
      response = {
        ...(await deserializeAws_queryChangeSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetTemplateSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetTemplateSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetTemplateSummaryOutput(data.GetTemplateSummaryResult, context);
  const response: GetTemplateSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetTemplateSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryImportStacksToStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportStacksToStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryImportStacksToStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryImportStacksToStackSetOutput(data.ImportStacksToStackSetResult, context);
  const response: ImportStacksToStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryImportStacksToStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportStacksToStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudformation#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackNotFoundException":
    case "com.amazonaws.cloudformation#StackNotFoundException":
      response = {
        ...(await deserializeAws_queryStackNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListChangeSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListChangeSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListChangeSetsOutput(data.ListChangeSetsResult, context);
  const response: ListChangeSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListChangeSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangeSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListExportsOutput(data.ListExportsResult, context);
  const response: ListExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListImportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListImportsOutput(data.ListImportsResult, context);
  const response: ListImportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListImportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListStackInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackInstancesOutput(data.ListStackInstancesResult, context);
  const response: ListStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListStackInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListStackResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackResourcesOutput(data.ListStackResourcesResult, context);
  const response: ListStackResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListStackResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStacksOutput(data.ListStacksResult, context);
  const response: ListStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListStackSetOperationResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackSetOperationResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackSetOperationResultsOutput(data.ListStackSetOperationResultsResult, context);
  const response: ListStackSetOperationResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListStackSetOperationResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListStackSetOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackSetOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackSetOperationsOutput(data.ListStackSetOperationsResult, context);
  const response: ListStackSetOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListStackSetOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListStackSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListStackSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListStackSetsOutput(data.ListStackSetsResult, context);
  const response: ListStackSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListStackSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListTypeRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeRegistrationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTypeRegistrationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTypeRegistrationsOutput(data.ListTypeRegistrationsResult, context);
  const response: ListTypeRegistrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTypeRegistrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeRegistrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTypesOutput(data.ListTypesResult, context);
  const response: ListTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListTypeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTypeVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTypeVersionsOutput(data.ListTypeVersionsResult, context);
  const response: ListTypeVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTypeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPublishTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPublishTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPublishTypeOutput(data.PublishTypeResult, context);
  const response: PublishTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPublishTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRecordHandlerProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordHandlerProgressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRecordHandlerProgressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRecordHandlerProgressOutput(data.RecordHandlerProgressResult, context);
  const response: RecordHandlerProgressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRecordHandlerProgressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordHandlerProgressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateTransitionException":
    case "com.amazonaws.cloudformation#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_queryInvalidStateTransitionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationStatusCheckFailedException":
    case "com.amazonaws.cloudformation#OperationStatusCheckFailedException":
      response = {
        ...(await deserializeAws_queryOperationStatusCheckFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRegisterPublisherCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPublisherCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRegisterPublisherCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRegisterPublisherOutput(data.RegisterPublisherResult, context);
  const response: RegisterPublisherCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRegisterPublisherCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPublisherCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRegisterTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRegisterTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRegisterTypeOutput(data.RegisterTypeResult, context);
  const response: RegisterTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRegisterTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetStackPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStackPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetStackPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetStackPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetStackPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStackPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetTypeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetTypeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetTypeConfigurationOutput(data.SetTypeConfigurationResult, context);
  const response: SetTypeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetTypeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetTypeDefaultVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeDefaultVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetTypeDefaultVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetTypeDefaultVersionOutput(data.SetTypeDefaultVersionResult, context);
  const response: SetTypeDefaultVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetTypeDefaultVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTypeDefaultVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySignalResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySignalResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SignalResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySignalResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryStopStackSetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackSetOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStopStackSetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStopStackSetOperationOutput(data.StopStackSetOperationResult, context);
  const response: StopStackSetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStopStackSetOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackSetOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotFoundException":
    case "com.amazonaws.cloudformation#OperationNotFoundException":
      response = {
        ...(await deserializeAws_queryOperationNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryTestTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTestTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTestTypeOutput(data.TestTypeResult, context);
  const response: TestTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTestTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CFNRegistryException":
    case "com.amazonaws.cloudformation#CFNRegistryException":
      response = {
        ...(await deserializeAws_queryCFNRegistryExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeNotFoundException":
    case "com.amazonaws.cloudformation#TypeNotFoundException":
      response = {
        ...(await deserializeAws_queryTypeNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateStackOutput(data.UpdateStackResult, context);
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapabilitiesException":
    case "com.amazonaws.cloudformation#InsufficientCapabilitiesException":
      response = {
        ...(await deserializeAws_queryInsufficientCapabilitiesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TokenAlreadyExistsException":
    case "com.amazonaws.cloudformation#TokenAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryTokenAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateStackInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateStackInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateStackInstancesOutput(data.UpdateStackInstancesResult, context);
  const response: UpdateStackInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateStackInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateStackSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateStackSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateStackSetOutput(data.UpdateStackSetResult, context);
  const response: UpdateStackSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateStackSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudformation#InvalidOperationException":
      response = {
        ...(await deserializeAws_queryInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationIdAlreadyExistsException":
    case "com.amazonaws.cloudformation#OperationIdAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryOperationIdAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.cloudformation#OperationInProgressException":
      response = {
        ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackInstanceNotFoundException":
    case "com.amazonaws.cloudformation#StackInstanceNotFoundException":
      response = {
        ...(await deserializeAws_queryStackInstanceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StackSetNotFoundException":
    case "com.amazonaws.cloudformation#StackSetNotFoundException":
      response = {
        ...(await deserializeAws_queryStackSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StaleRequestException":
    case "com.amazonaws.cloudformation#StaleRequestException":
      response = {
        ...(await deserializeAws_queryStaleRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateTerminationProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTerminationProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateTerminationProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateTerminationProtectionOutput(data.UpdateTerminationProtectionResult, context);
  const response: UpdateTerminationProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateTerminationProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTerminationProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryValidateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryValidateTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryValidateTemplateOutput(data.ValidateTemplateResult, context);
  const response: ValidateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryValidateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAlreadyExistsException(body.Error, context);
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCFNRegistryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CFNRegistryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCFNRegistryException(body.Error, context);
  const contents: CFNRegistryException = {
    name: "CFNRegistryException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryChangeSetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChangeSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryChangeSetNotFoundException(body.Error, context);
  const contents: ChangeSetNotFoundException = {
    name: "ChangeSetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCreatedButModifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreatedButModifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCreatedButModifiedException(body.Error, context);
  const contents: CreatedButModifiedException = {
    name: "CreatedButModifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInsufficientCapabilitiesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapabilitiesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientCapabilitiesException(body.Error, context);
  const contents: InsufficientCapabilitiesException = {
    name: "InsufficientCapabilitiesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidChangeSetStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidChangeSetStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidChangeSetStatusException(body.Error, context);
  const contents: InvalidChangeSetStatusException = {
    name: "InvalidChangeSetStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidOperationException(body.Error, context);
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidStateTransitionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidStateTransitionException(body.Error, context);
  const contents: InvalidStateTransitionException = {
    name: "InvalidStateTransitionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededException(body.Error, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryNameAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNameAlreadyExistsException(body.Error, context);
  const contents: NameAlreadyExistsException = {
    name: "NameAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryOperationIdAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationIdAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationIdAlreadyExistsException(body.Error, context);
  const contents: OperationIdAlreadyExistsException = {
    name: "OperationIdAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryOperationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationInProgressException(body.Error, context);
  const contents: OperationInProgressException = {
    name: "OperationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryOperationNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationNotFoundException(body.Error, context);
  const contents: OperationNotFoundException = {
    name: "OperationNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryOperationStatusCheckFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationStatusCheckFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationStatusCheckFailedException(body.Error, context);
  const contents: OperationStatusCheckFailedException = {
    name: "OperationStatusCheckFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryStackInstanceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackInstanceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStackInstanceNotFoundException(body.Error, context);
  const contents: StackInstanceNotFoundException = {
    name: "StackInstanceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryStackNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStackNotFoundException(body.Error, context);
  const contents: StackNotFoundException = {
    name: "StackNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryStackSetNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackSetNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStackSetNotEmptyException(body.Error, context);
  const contents: StackSetNotEmptyException = {
    name: "StackSetNotEmptyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryStackSetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StackSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStackSetNotFoundException(body.Error, context);
  const contents: StackSetNotFoundException = {
    name: "StackSetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryStaleRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StaleRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStaleRequestException(body.Error, context);
  const contents: StaleRequestException = {
    name: "StaleRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTokenAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TokenAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTokenAlreadyExistsException(body.Error, context);
  const contents: TokenAlreadyExistsException = {
    name: "TokenAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTypeConfigurationNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeConfigurationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTypeConfigurationNotFoundException(body.Error, context);
  const contents: TypeConfigurationNotFoundException = {
    name: "TypeConfigurationNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTypeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTypeNotFoundException(body.Error, context);
  const contents: TypeNotFoundException = {
    name: "TypeNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryAccountList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryActivateTypeInput = (input: ActivateTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.PublicTypeArn !== undefined && input.PublicTypeArn !== null) {
    entries["PublicTypeArn"] = input.PublicTypeArn;
  }
  if (input.PublisherId !== undefined && input.PublisherId !== null) {
    entries["PublisherId"] = input.PublisherId;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.TypeNameAlias !== undefined && input.TypeNameAlias !== null) {
    entries["TypeNameAlias"] = input.TypeNameAlias;
  }
  if (input.AutoUpdate !== undefined && input.AutoUpdate !== null) {
    entries["AutoUpdate"] = input.AutoUpdate;
  }
  if (input.LoggingConfig !== undefined && input.LoggingConfig !== null) {
    const memberEntries = serializeAws_queryLoggingConfig(input.LoggingConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoggingConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExecutionRoleArn !== undefined && input.ExecutionRoleArn !== null) {
    entries["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.VersionBump !== undefined && input.VersionBump !== null) {
    entries["VersionBump"] = input.VersionBump;
  }
  if (input.MajorVersion !== undefined && input.MajorVersion !== null) {
    entries["MajorVersion"] = input.MajorVersion;
  }
  return entries;
};

const serializeAws_queryAutoDeployment = (input: AutoDeployment, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.RetainStacksOnAccountRemoval !== undefined && input.RetainStacksOnAccountRemoval !== null) {
    entries["RetainStacksOnAccountRemoval"] = input.RetainStacksOnAccountRemoval;
  }
  return entries;
};

const serializeAws_queryBatchDescribeTypeConfigurationsInput = (
  input: BatchDescribeTypeConfigurationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TypeConfigurationIdentifiers !== undefined && input.TypeConfigurationIdentifiers !== null) {
    const memberEntries = serializeAws_queryTypeConfigurationIdentifiers(input.TypeConfigurationIdentifiers, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TypeConfigurationIdentifiers.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCancelUpdateStackInput = (input: CancelUpdateStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

const serializeAws_queryCapabilities = (input: (Capability | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryContinueUpdateRollbackInput = (
  input: ContinueUpdateRollbackInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ResourcesToSkip !== undefined && input.ResourcesToSkip !== null) {
    const memberEntries = serializeAws_queryResourcesToSkip(input.ResourcesToSkip, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourcesToSkip.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

const serializeAws_queryCreateChangeSetInput = (input: CreateChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.ClientToken !== undefined && input.ClientToken !== null) {
    entries["ClientToken"] = input.ClientToken;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.ChangeSetType !== undefined && input.ChangeSetType !== null) {
    entries["ChangeSetType"] = input.ChangeSetType;
  }
  if (input.ResourcesToImport !== undefined && input.ResourcesToImport !== null) {
    const memberEntries = serializeAws_queryResourcesToImport(input.ResourcesToImport, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourcesToImport.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IncludeNestedStacks !== undefined && input.IncludeNestedStacks !== null) {
    entries["IncludeNestedStacks"] = input.IncludeNestedStacks;
  }
  return entries;
};

const serializeAws_queryCreateStackInput = (input: CreateStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DisableRollback !== undefined && input.DisableRollback !== null) {
    entries["DisableRollback"] = input.DisableRollback;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TimeoutInMinutes !== undefined && input.TimeoutInMinutes !== null) {
    entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.OnFailure !== undefined && input.OnFailure !== null) {
    entries["OnFailure"] = input.OnFailure;
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.EnableTerminationProtection !== undefined && input.EnableTerminationProtection !== null) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  return entries;
};

const serializeAws_queryCreateStackInstancesInput = (
  input: CreateStackInstancesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    const memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ParameterOverrides !== undefined && input.ParameterOverrides !== null) {
    const memberEntries = serializeAws_queryParameters(input.ParameterOverrides, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryCreateStackSetInput = (input: CreateStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.StackId !== undefined && input.StackId !== null) {
    entries["StackId"] = input.StackId;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdministrationRoleARN !== undefined && input.AdministrationRoleARN !== null) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.ExecutionRoleName !== undefined && input.ExecutionRoleName !== null) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.PermissionModel !== undefined && input.PermissionModel !== null) {
    entries["PermissionModel"] = input.PermissionModel;
  }
  if (input.AutoDeployment !== undefined && input.AutoDeployment !== null) {
    const memberEntries = serializeAws_queryAutoDeployment(input.AutoDeployment, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoDeployment.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

const serializeAws_queryDeactivateTypeInput = (input: DeactivateTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  return entries;
};

const serializeAws_queryDeleteChangeSetInput = (input: DeleteChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryDeleteStackInput = (input: DeleteStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.RetainResources !== undefined && input.RetainResources !== null) {
    const memberEntries = serializeAws_queryRetainResources(input.RetainResources, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RetainResources.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

const serializeAws_queryDeleteStackInstancesInput = (
  input: DeleteStackInstancesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    const memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RetainStacks !== undefined && input.RetainStacks !== null) {
    entries["RetainStacks"] = input.RetainStacks;
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryDeleteStackSetInput = (input: DeleteStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryDeploymentTargets = (input: DeploymentTargets, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AccountsUrl !== undefined && input.AccountsUrl !== null) {
    entries["AccountsUrl"] = input.AccountsUrl;
  }
  if (input.OrganizationalUnitIds !== undefined && input.OrganizationalUnitIds !== null) {
    const memberEntries = serializeAws_queryOrganizationalUnitIdList(input.OrganizationalUnitIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OrganizationalUnitIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeregisterTypeInput = (input: DeregisterTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

const serializeAws_queryDescribeAccountLimitsInput = (
  input: DescribeAccountLimitsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeChangeSetInput = (input: DescribeChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribePublisherInput = (input: DescribePublisherInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PublisherId !== undefined && input.PublisherId !== null) {
    entries["PublisherId"] = input.PublisherId;
  }
  return entries;
};

const serializeAws_queryDescribeStackDriftDetectionStatusInput = (
  input: DescribeStackDriftDetectionStatusInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackDriftDetectionId !== undefined && input.StackDriftDetectionId !== null) {
    entries["StackDriftDetectionId"] = input.StackDriftDetectionId;
  }
  return entries;
};

const serializeAws_queryDescribeStackEventsInput = (input: DescribeStackEventsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeStackInstanceInput = (
  input: DescribeStackInstanceInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.StackInstanceAccount !== undefined && input.StackInstanceAccount !== null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion !== undefined && input.StackInstanceRegion !== null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryDescribeStackResourceDriftsInput = (
  input: DescribeStackResourceDriftsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackResourceDriftStatusFilters !== undefined && input.StackResourceDriftStatusFilters !== null) {
    const memberEntries = serializeAws_queryStackResourceDriftStatusFilters(
      input.StackResourceDriftStatusFilters,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackResourceDriftStatusFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

const serializeAws_queryDescribeStackResourceInput = (
  input: DescribeStackResourceInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};

const serializeAws_queryDescribeStackResourcesInput = (
  input: DescribeStackResourcesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.PhysicalResourceId !== undefined && input.PhysicalResourceId !== null) {
    entries["PhysicalResourceId"] = input.PhysicalResourceId;
  }
  return entries;
};

const serializeAws_queryDescribeStackSetInput = (input: DescribeStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryDescribeStackSetOperationInput = (
  input: DescribeStackSetOperationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryDescribeStacksInput = (input: DescribeStacksInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeTypeInput = (input: DescribeTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  if (input.PublisherId !== undefined && input.PublisherId !== null) {
    entries["PublisherId"] = input.PublisherId;
  }
  if (input.PublicVersionNumber !== undefined && input.PublicVersionNumber !== null) {
    entries["PublicVersionNumber"] = input.PublicVersionNumber;
  }
  return entries;
};

const serializeAws_queryDescribeTypeRegistrationInput = (
  input: DescribeTypeRegistrationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RegistrationToken !== undefined && input.RegistrationToken !== null) {
    entries["RegistrationToken"] = input.RegistrationToken;
  }
  return entries;
};

const serializeAws_queryDetectStackDriftInput = (input: DetectStackDriftInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceIds !== undefined && input.LogicalResourceIds !== null) {
    const memberEntries = serializeAws_queryLogicalResourceIds(input.LogicalResourceIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LogicalResourceIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDetectStackResourceDriftInput = (
  input: DetectStackResourceDriftInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  return entries;
};

const serializeAws_queryDetectStackSetDriftInput = (input: DetectStackSetDriftInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryEstimateTemplateCostInput = (
  input: EstimateTemplateCostInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryExecuteChangeSetInput = (input: ExecuteChangeSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

const serializeAws_queryGetStackPolicyInput = (input: GetStackPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryGetTemplateInput = (input: GetTemplateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.ChangeSetName !== undefined && input.ChangeSetName !== null) {
    entries["ChangeSetName"] = input.ChangeSetName;
  }
  if (input.TemplateStage !== undefined && input.TemplateStage !== null) {
    entries["TemplateStage"] = input.TemplateStage;
  }
  return entries;
};

const serializeAws_queryGetTemplateSummaryInput = (input: GetTemplateSummaryInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryImportStacksToStackSetInput = (
  input: ImportStacksToStackSetInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.StackIds !== undefined && input.StackIds !== null) {
    const memberEntries = serializeAws_queryStackIdList(input.StackIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryListChangeSetsInput = (input: ListChangeSetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListExportsInput = (input: ListExportsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListImportsInput = (input: ListImportsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ExportName !== undefined && input.ExportName !== null) {
    entries["ExportName"] = input.ExportName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListStackInstancesInput = (input: ListStackInstancesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Filters !== undefined && input.Filters !== null) {
    const memberEntries = serializeAws_queryStackInstanceFilters(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StackInstanceAccount !== undefined && input.StackInstanceAccount !== null) {
    entries["StackInstanceAccount"] = input.StackInstanceAccount;
  }
  if (input.StackInstanceRegion !== undefined && input.StackInstanceRegion !== null) {
    entries["StackInstanceRegion"] = input.StackInstanceRegion;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryListStackResourcesInput = (input: ListStackResourcesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListStackSetOperationResultsInput = (
  input: ListStackSetOperationResultsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryListStackSetOperationsInput = (
  input: ListStackSetOperationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryListStackSetsInput = (input: ListStackSetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Status !== undefined && input.Status !== null) {
    entries["Status"] = input.Status;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryListStacksInput = (input: ListStacksInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StackStatusFilter !== undefined && input.StackStatusFilter !== null) {
    const memberEntries = serializeAws_queryStackStatusFilter(input.StackStatusFilter, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StackStatusFilter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryListTypeRegistrationsInput = (
  input: ListTypeRegistrationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.TypeArn !== undefined && input.TypeArn !== null) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.RegistrationStatusFilter !== undefined && input.RegistrationStatusFilter !== null) {
    entries["RegistrationStatusFilter"] = input.RegistrationStatusFilter;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListTypesInput = (input: ListTypesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Visibility !== undefined && input.Visibility !== null) {
    entries["Visibility"] = input.Visibility;
  }
  if (input.ProvisioningType !== undefined && input.ProvisioningType !== null) {
    entries["ProvisioningType"] = input.ProvisioningType;
  }
  if (input.DeprecatedStatus !== undefined && input.DeprecatedStatus !== null) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.Filters !== undefined && input.Filters !== null) {
    const memberEntries = serializeAws_queryTypeFilters(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListTypeVersionsInput = (input: ListTypeVersionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.DeprecatedStatus !== undefined && input.DeprecatedStatus !== null) {
    entries["DeprecatedStatus"] = input.DeprecatedStatus;
  }
  if (input.PublisherId !== undefined && input.PublisherId !== null) {
    entries["PublisherId"] = input.PublisherId;
  }
  return entries;
};

const serializeAws_queryLoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LogRoleArn !== undefined && input.LogRoleArn !== null) {
    entries["LogRoleArn"] = input.LogRoleArn;
  }
  if (input.LogGroupName !== undefined && input.LogGroupName !== null) {
    entries["LogGroupName"] = input.LogGroupName;
  }
  return entries;
};

const serializeAws_queryLogicalResourceIds = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryNotificationARNs = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryOrganizationalUnitIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryParameter = (input: Parameter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ParameterKey !== undefined && input.ParameterKey !== null) {
    entries["ParameterKey"] = input.ParameterKey;
  }
  if (input.ParameterValue !== undefined && input.ParameterValue !== null) {
    entries["ParameterValue"] = input.ParameterValue;
  }
  if (input.UsePreviousValue !== undefined && input.UsePreviousValue !== null) {
    entries["UsePreviousValue"] = input.UsePreviousValue;
  }
  if (input.ResolvedValue !== undefined && input.ResolvedValue !== null) {
    entries["ResolvedValue"] = input.ResolvedValue;
  }
  return entries;
};

const serializeAws_queryParameters = (input: Parameter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryParameter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPublishTypeInput = (input: PublishTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.PublicVersionNumber !== undefined && input.PublicVersionNumber !== null) {
    entries["PublicVersionNumber"] = input.PublicVersionNumber;
  }
  return entries;
};

const serializeAws_queryRecordHandlerProgressInput = (
  input: RecordHandlerProgressInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.BearerToken !== undefined && input.BearerToken !== null) {
    entries["BearerToken"] = input.BearerToken;
  }
  if (input.OperationStatus !== undefined && input.OperationStatus !== null) {
    entries["OperationStatus"] = input.OperationStatus;
  }
  if (input.CurrentOperationStatus !== undefined && input.CurrentOperationStatus !== null) {
    entries["CurrentOperationStatus"] = input.CurrentOperationStatus;
  }
  if (input.StatusMessage !== undefined && input.StatusMessage !== null) {
    entries["StatusMessage"] = input.StatusMessage;
  }
  if (input.ErrorCode !== undefined && input.ErrorCode !== null) {
    entries["ErrorCode"] = input.ErrorCode;
  }
  if (input.ResourceModel !== undefined && input.ResourceModel !== null) {
    entries["ResourceModel"] = input.ResourceModel;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

const serializeAws_queryRegionList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRegisterPublisherInput = (input: RegisterPublisherInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AcceptTermsAndConditions !== undefined && input.AcceptTermsAndConditions !== null) {
    entries["AcceptTermsAndConditions"] = input.AcceptTermsAndConditions;
  }
  if (input.ConnectionArn !== undefined && input.ConnectionArn !== null) {
    entries["ConnectionArn"] = input.ConnectionArn;
  }
  return entries;
};

const serializeAws_queryRegisterTypeInput = (input: RegisterTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.SchemaHandlerPackage !== undefined && input.SchemaHandlerPackage !== null) {
    entries["SchemaHandlerPackage"] = input.SchemaHandlerPackage;
  }
  if (input.LoggingConfig !== undefined && input.LoggingConfig !== null) {
    const memberEntries = serializeAws_queryLoggingConfig(input.LoggingConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoggingConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExecutionRoleArn !== undefined && input.ExecutionRoleArn !== null) {
    entries["ExecutionRoleArn"] = input.ExecutionRoleArn;
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

const serializeAws_queryResourceIdentifierProperties = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key];
      counter++;
    });
  return entries;
};

const serializeAws_queryResourcesToImport = (input: ResourceToImport[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryResourceToImport(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryResourcesToSkip = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryResourceToImport = (input: ResourceToImport, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceType !== undefined && input.ResourceType !== null) {
    entries["ResourceType"] = input.ResourceType;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.ResourceIdentifier !== undefined && input.ResourceIdentifier !== null) {
    const memberEntries = serializeAws_queryResourceIdentifierProperties(input.ResourceIdentifier, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceIdentifier.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryResourceTypes = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRetainResources = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRollbackConfiguration = (input: RollbackConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RollbackTriggers !== undefined && input.RollbackTriggers !== null) {
    const memberEntries = serializeAws_queryRollbackTriggers(input.RollbackTriggers, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackTriggers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MonitoringTimeInMinutes !== undefined && input.MonitoringTimeInMinutes !== null) {
    entries["MonitoringTimeInMinutes"] = input.MonitoringTimeInMinutes;
  }
  return entries;
};

const serializeAws_queryRollbackTrigger = (input: RollbackTrigger, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  return entries;
};

const serializeAws_queryRollbackTriggers = (input: RollbackTrigger[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryRollbackTrigger(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySetStackPolicyInput = (input: SetStackPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  return entries;
};

const serializeAws_querySetTypeConfigurationInput = (
  input: SetTypeConfigurationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TypeArn !== undefined && input.TypeArn !== null) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.Configuration !== undefined && input.Configuration !== null) {
    entries["Configuration"] = input.Configuration;
  }
  if (input.ConfigurationAlias !== undefined && input.ConfigurationAlias !== null) {
    entries["ConfigurationAlias"] = input.ConfigurationAlias;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  return entries;
};

const serializeAws_querySetTypeDefaultVersionInput = (
  input: SetTypeDefaultVersionInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

const serializeAws_querySignalResourceInput = (input: SignalResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.LogicalResourceId !== undefined && input.LogicalResourceId !== null) {
    entries["LogicalResourceId"] = input.LogicalResourceId;
  }
  if (input.UniqueId !== undefined && input.UniqueId !== null) {
    entries["UniqueId"] = input.UniqueId;
  }
  if (input.Status !== undefined && input.Status !== null) {
    entries["Status"] = input.Status;
  }
  return entries;
};

const serializeAws_queryStackIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStackInstanceFilter = (input: StackInstanceFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Values !== undefined && input.Values !== null) {
    entries["Values"] = input.Values;
  }
  return entries;
};

const serializeAws_queryStackInstanceFilters = (input: StackInstanceFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryStackInstanceFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryStackResourceDriftStatusFilters = (
  input: (StackResourceDriftStatus | string)[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStackSetOperationPreferences = (
  input: StackSetOperationPreferences,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RegionConcurrencyType !== undefined && input.RegionConcurrencyType !== null) {
    entries["RegionConcurrencyType"] = input.RegionConcurrencyType;
  }
  if (input.RegionOrder !== undefined && input.RegionOrder !== null) {
    const memberEntries = serializeAws_queryRegionList(input.RegionOrder, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RegionOrder.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FailureToleranceCount !== undefined && input.FailureToleranceCount !== null) {
    entries["FailureToleranceCount"] = input.FailureToleranceCount;
  }
  if (input.FailureTolerancePercentage !== undefined && input.FailureTolerancePercentage !== null) {
    entries["FailureTolerancePercentage"] = input.FailureTolerancePercentage;
  }
  if (input.MaxConcurrentCount !== undefined && input.MaxConcurrentCount !== null) {
    entries["MaxConcurrentCount"] = input.MaxConcurrentCount;
  }
  if (input.MaxConcurrentPercentage !== undefined && input.MaxConcurrentPercentage !== null) {
    entries["MaxConcurrentPercentage"] = input.MaxConcurrentPercentage;
  }
  return entries;
};

const serializeAws_queryStackStatusFilter = (input: (StackStatus | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStopStackSetOperationInput = (
  input: StopStackSetOperationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTags = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTestTypeInput = (input: TestTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Arn !== undefined && input.Arn !== null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    entries["VersionId"] = input.VersionId;
  }
  if (input.LogDeliveryBucket !== undefined && input.LogDeliveryBucket !== null) {
    entries["LogDeliveryBucket"] = input.LogDeliveryBucket;
  }
  return entries;
};

const serializeAws_queryTypeConfigurationIdentifier = (
  input: TypeConfigurationIdentifier,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TypeArn !== undefined && input.TypeArn !== null) {
    entries["TypeArn"] = input.TypeArn;
  }
  if (input.TypeConfigurationAlias !== undefined && input.TypeConfigurationAlias !== null) {
    entries["TypeConfigurationAlias"] = input.TypeConfigurationAlias;
  }
  if (input.TypeConfigurationArn !== undefined && input.TypeConfigurationArn !== null) {
    entries["TypeConfigurationArn"] = input.TypeConfigurationArn;
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TypeName !== undefined && input.TypeName !== null) {
    entries["TypeName"] = input.TypeName;
  }
  return entries;
};

const serializeAws_queryTypeConfigurationIdentifiers = (
  input: TypeConfigurationIdentifier[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTypeConfigurationIdentifier(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTypeFilters = (input: TypeFilters, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Category !== undefined && input.Category !== null) {
    entries["Category"] = input.Category;
  }
  if (input.PublisherId !== undefined && input.PublisherId !== null) {
    entries["PublisherId"] = input.PublisherId;
  }
  if (input.TypeNamePrefix !== undefined && input.TypeNamePrefix !== null) {
    entries["TypeNamePrefix"] = input.TypeNamePrefix;
  }
  return entries;
};

const serializeAws_queryUpdateStackInput = (input: UpdateStackInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.StackPolicyDuringUpdateBody !== undefined && input.StackPolicyDuringUpdateBody !== null) {
    entries["StackPolicyDuringUpdateBody"] = input.StackPolicyDuringUpdateBody;
  }
  if (input.StackPolicyDuringUpdateURL !== undefined && input.StackPolicyDuringUpdateURL !== null) {
    entries["StackPolicyDuringUpdateURL"] = input.StackPolicyDuringUpdateURL;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceTypes !== undefined && input.ResourceTypes !== null) {
    const memberEntries = serializeAws_queryResourceTypes(input.ResourceTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.RollbackConfiguration !== undefined && input.RollbackConfiguration !== null) {
    const memberEntries = serializeAws_queryRollbackConfiguration(input.RollbackConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RollbackConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StackPolicyBody !== undefined && input.StackPolicyBody !== null) {
    entries["StackPolicyBody"] = input.StackPolicyBody;
  }
  if (input.StackPolicyURL !== undefined && input.StackPolicyURL !== null) {
    entries["StackPolicyURL"] = input.StackPolicyURL;
  }
  if (input.NotificationARNs !== undefined && input.NotificationARNs !== null) {
    const memberEntries = serializeAws_queryNotificationARNs(input.NotificationARNs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClientRequestToken !== undefined && input.ClientRequestToken !== null) {
    entries["ClientRequestToken"] = input.ClientRequestToken;
  }
  return entries;
};

const serializeAws_queryUpdateStackInstancesInput = (
  input: UpdateStackInstancesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    const memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ParameterOverrides !== undefined && input.ParameterOverrides !== null) {
    const memberEntries = serializeAws_queryParameters(input.ParameterOverrides, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ParameterOverrides.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryUpdateStackSetInput = (input: UpdateStackSetInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StackSetName !== undefined && input.StackSetName !== null) {
    entries["StackSetName"] = input.StackSetName;
  }
  if (input.Description !== undefined && input.Description !== null) {
    entries["Description"] = input.Description;
  }
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  if (input.UsePreviousTemplate !== undefined && input.UsePreviousTemplate !== null) {
    entries["UsePreviousTemplate"] = input.UsePreviousTemplate;
  }
  if (input.Parameters !== undefined && input.Parameters !== null) {
    const memberEntries = serializeAws_queryParameters(input.Parameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Parameters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Capabilities !== undefined && input.Capabilities !== null) {
    const memberEntries = serializeAws_queryCapabilities(input.Capabilities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Capabilities.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationPreferences !== undefined && input.OperationPreferences !== null) {
    const memberEntries = serializeAws_queryStackSetOperationPreferences(input.OperationPreferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OperationPreferences.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdministrationRoleARN !== undefined && input.AdministrationRoleARN !== null) {
    entries["AdministrationRoleARN"] = input.AdministrationRoleARN;
  }
  if (input.ExecutionRoleName !== undefined && input.ExecutionRoleName !== null) {
    entries["ExecutionRoleName"] = input.ExecutionRoleName;
  }
  if (input.DeploymentTargets !== undefined && input.DeploymentTargets !== null) {
    const memberEntries = serializeAws_queryDeploymentTargets(input.DeploymentTargets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeploymentTargets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PermissionModel !== undefined && input.PermissionModel !== null) {
    entries["PermissionModel"] = input.PermissionModel;
  }
  if (input.AutoDeployment !== undefined && input.AutoDeployment !== null) {
    const memberEntries = serializeAws_queryAutoDeployment(input.AutoDeployment, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoDeployment.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationId === undefined) {
    input.OperationId = generateIdempotencyToken();
  }
  if (input.OperationId !== undefined && input.OperationId !== null) {
    entries["OperationId"] = input.OperationId;
  }
  if (input.Accounts !== undefined && input.Accounts !== null) {
    const memberEntries = serializeAws_queryAccountList(input.Accounts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Accounts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const memberEntries = serializeAws_queryRegionList(input.Regions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Regions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CallAs !== undefined && input.CallAs !== null) {
    entries["CallAs"] = input.CallAs;
  }
  return entries;
};

const serializeAws_queryUpdateTerminationProtectionInput = (
  input: UpdateTerminationProtectionInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnableTerminationProtection !== undefined && input.EnableTerminationProtection !== null) {
    entries["EnableTerminationProtection"] = input.EnableTerminationProtection;
  }
  if (input.StackName !== undefined && input.StackName !== null) {
    entries["StackName"] = input.StackName;
  }
  return entries;
};

const serializeAws_queryValidateTemplateInput = (input: ValidateTemplateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateBody !== undefined && input.TemplateBody !== null) {
    entries["TemplateBody"] = input.TemplateBody;
  }
  if (input.TemplateURL !== undefined && input.TemplateURL !== null) {
    entries["TemplateURL"] = input.TemplateURL;
  }
  return entries;
};

const deserializeAws_queryAccountGateResult = (output: any, context: __SerdeContext): AccountGateResult => {
  let contents: any = {
    Status: undefined,
    StatusReason: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  return contents;
};

const deserializeAws_queryAccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  let contents: any = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __strictParseInt(output["Value"]) as number;
  }
  return contents;
};

const deserializeAws_queryAccountLimitList = (output: any, context: __SerdeContext): AccountLimit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryAccountLimit(entry, context);
    });
};

const deserializeAws_queryAccountList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryActivateTypeOutput = (output: any, context: __SerdeContext): ActivateTypeOutput => {
  let contents: any = {
    Arn: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

const deserializeAws_queryAllowedValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryAlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryAutoDeployment = (output: any, context: __SerdeContext): AutoDeployment => {
  let contents: any = {
    Enabled: undefined,
    RetainStacksOnAccountRemoval: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["RetainStacksOnAccountRemoval"] !== undefined) {
    contents.RetainStacksOnAccountRemoval = __parseBoolean(output["RetainStacksOnAccountRemoval"]);
  }
  return contents;
};

const deserializeAws_queryBatchDescribeTypeConfigurationsError = (
  output: any,
  context: __SerdeContext
): BatchDescribeTypeConfigurationsError => {
  let contents: any = {
    ErrorCode: undefined,
    ErrorMessage: undefined,
    TypeConfigurationIdentifier: undefined,
  };
  if (output["ErrorCode"] !== undefined) {
    contents.ErrorCode = __expectString(output["ErrorCode"]);
  }
  if (output["ErrorMessage"] !== undefined) {
    contents.ErrorMessage = __expectString(output["ErrorMessage"]);
  }
  if (output["TypeConfigurationIdentifier"] !== undefined) {
    contents.TypeConfigurationIdentifier = deserializeAws_queryTypeConfigurationIdentifier(
      output["TypeConfigurationIdentifier"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryBatchDescribeTypeConfigurationsErrors = (
  output: any,
  context: __SerdeContext
): BatchDescribeTypeConfigurationsError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryBatchDescribeTypeConfigurationsError(entry, context);
    });
};

const deserializeAws_queryBatchDescribeTypeConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): BatchDescribeTypeConfigurationsOutput => {
  let contents: any = {
    Errors: undefined,
    UnprocessedTypeConfigurations: undefined,
    TypeConfigurations: undefined,
  };
  if (output.Errors === "") {
    contents.Errors = [];
  }
  if (output["Errors"] !== undefined && output["Errors"]["member"] !== undefined) {
    contents.Errors = deserializeAws_queryBatchDescribeTypeConfigurationsErrors(
      __getArrayIfSingleItem(output["Errors"]["member"]),
      context
    );
  }
  if (output.UnprocessedTypeConfigurations === "") {
    contents.UnprocessedTypeConfigurations = [];
  }
  if (
    output["UnprocessedTypeConfigurations"] !== undefined &&
    output["UnprocessedTypeConfigurations"]["member"] !== undefined
  ) {
    contents.UnprocessedTypeConfigurations = deserializeAws_queryUnprocessedTypeConfigurations(
      __getArrayIfSingleItem(output["UnprocessedTypeConfigurations"]["member"]),
      context
    );
  }
  if (output.TypeConfigurations === "") {
    contents.TypeConfigurations = [];
  }
  if (output["TypeConfigurations"] !== undefined && output["TypeConfigurations"]["member"] !== undefined) {
    contents.TypeConfigurations = deserializeAws_queryTypeConfigurationDetailsList(
      __getArrayIfSingleItem(output["TypeConfigurations"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCapabilities = (output: any, context: __SerdeContext): (Capability | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCFNRegistryException = (output: any, context: __SerdeContext): CFNRegistryException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryChange = (output: any, context: __SerdeContext): Change => {
  let contents: any = {
    Type: undefined,
    ResourceChange: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["ResourceChange"] !== undefined) {
    contents.ResourceChange = deserializeAws_queryResourceChange(output["ResourceChange"], context);
  }
  return contents;
};

const deserializeAws_queryChanges = (output: any, context: __SerdeContext): Change[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryChange(entry, context);
    });
};

const deserializeAws_queryChangeSetNotFoundException = (
  output: any,
  context: __SerdeContext
): ChangeSetNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryChangeSetSummaries = (output: any, context: __SerdeContext): ChangeSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryChangeSetSummary(entry, context);
    });
};

const deserializeAws_queryChangeSetSummary = (output: any, context: __SerdeContext): ChangeSetSummary => {
  let contents: any = {
    StackId: undefined,
    StackName: undefined,
    ChangeSetId: undefined,
    ChangeSetName: undefined,
    ExecutionStatus: undefined,
    Status: undefined,
    StatusReason: undefined,
    CreationTime: undefined,
    Description: undefined,
    IncludeNestedStacks: undefined,
    ParentChangeSetId: undefined,
    RootChangeSetId: undefined,
  };
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
    contents.CreationTime = new Date(output["CreationTime"]);
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

const deserializeAws_queryContinueUpdateRollbackOutput = (
  output: any,
  context: __SerdeContext
): ContinueUpdateRollbackOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryCreateChangeSetOutput = (output: any, context: __SerdeContext): CreateChangeSetOutput => {
  let contents: any = {
    Id: undefined,
    StackId: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

const deserializeAws_queryCreatedButModifiedException = (
  output: any,
  context: __SerdeContext
): CreatedButModifiedException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryCreateStackInstancesOutput = (
  output: any,
  context: __SerdeContext
): CreateStackInstancesOutput => {
  let contents: any = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

const deserializeAws_queryCreateStackOutput = (output: any, context: __SerdeContext): CreateStackOutput => {
  let contents: any = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

const deserializeAws_queryCreateStackSetOutput = (output: any, context: __SerdeContext): CreateStackSetOutput => {
  let contents: any = {
    StackSetId: undefined,
  };
  if (output["StackSetId"] !== undefined) {
    contents.StackSetId = __expectString(output["StackSetId"]);
  }
  return contents;
};

const deserializeAws_queryDeactivateTypeOutput = (output: any, context: __SerdeContext): DeactivateTypeOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteChangeSetOutput = (output: any, context: __SerdeContext): DeleteChangeSetOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteStackInstancesOutput = (
  output: any,
  context: __SerdeContext
): DeleteStackInstancesOutput => {
  let contents: any = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

const deserializeAws_queryDeleteStackSetOutput = (output: any, context: __SerdeContext): DeleteStackSetOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeploymentTargets = (output: any, context: __SerdeContext): DeploymentTargets => {
  let contents: any = {
    Accounts: undefined,
    AccountsUrl: undefined,
    OrganizationalUnitIds: undefined,
  };
  if (output.Accounts === "") {
    contents.Accounts = [];
  }
  if (output["Accounts"] !== undefined && output["Accounts"]["member"] !== undefined) {
    contents.Accounts = deserializeAws_queryAccountList(__getArrayIfSingleItem(output["Accounts"]["member"]), context);
  }
  if (output["AccountsUrl"] !== undefined) {
    contents.AccountsUrl = __expectString(output["AccountsUrl"]);
  }
  if (output.OrganizationalUnitIds === "") {
    contents.OrganizationalUnitIds = [];
  }
  if (output["OrganizationalUnitIds"] !== undefined && output["OrganizationalUnitIds"]["member"] !== undefined) {
    contents.OrganizationalUnitIds = deserializeAws_queryOrganizationalUnitIdList(
      __getArrayIfSingleItem(output["OrganizationalUnitIds"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeregisterTypeOutput = (output: any, context: __SerdeContext): DeregisterTypeOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsOutput => {
  let contents: any = {
    AccountLimits: undefined,
    NextToken: undefined,
  };
  if (output.AccountLimits === "") {
    contents.AccountLimits = [];
  }
  if (output["AccountLimits"] !== undefined && output["AccountLimits"]["member"] !== undefined) {
    contents.AccountLimits = deserializeAws_queryAccountLimitList(
      __getArrayIfSingleItem(output["AccountLimits"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeChangeSetOutput = (output: any, context: __SerdeContext): DescribeChangeSetOutput => {
  let contents: any = {
    ChangeSetName: undefined,
    ChangeSetId: undefined,
    StackId: undefined,
    StackName: undefined,
    Description: undefined,
    Parameters: undefined,
    CreationTime: undefined,
    ExecutionStatus: undefined,
    Status: undefined,
    StatusReason: undefined,
    NotificationARNs: undefined,
    RollbackConfiguration: undefined,
    Capabilities: undefined,
    Tags: undefined,
    Changes: undefined,
    NextToken: undefined,
    IncludeNestedStacks: undefined,
    ParentChangeSetId: undefined,
    RootChangeSetId: undefined,
  };
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
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
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
  }
  if (output["NotificationARNs"] !== undefined && output["NotificationARNs"]["member"] !== undefined) {
    contents.NotificationARNs = deserializeAws_queryNotificationARNs(
      __getArrayIfSingleItem(output["NotificationARNs"]["member"]),
      context
    );
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(
      output["RollbackConfiguration"],
      context
    );
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output.Changes === "") {
    contents.Changes = [];
  }
  if (output["Changes"] !== undefined && output["Changes"]["member"] !== undefined) {
    contents.Changes = deserializeAws_queryChanges(__getArrayIfSingleItem(output["Changes"]["member"]), context);
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
  return contents;
};

const deserializeAws_queryDescribePublisherOutput = (output: any, context: __SerdeContext): DescribePublisherOutput => {
  let contents: any = {
    PublisherId: undefined,
    PublisherStatus: undefined,
    IdentityProvider: undefined,
    PublisherProfile: undefined,
  };
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

const deserializeAws_queryDescribeStackDriftDetectionStatusOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackDriftDetectionStatusOutput => {
  let contents: any = {
    StackId: undefined,
    StackDriftDetectionId: undefined,
    StackDriftStatus: undefined,
    DetectionStatus: undefined,
    DetectionStatusReason: undefined,
    DriftedStackResourceCount: undefined,
    Timestamp: undefined,
  };
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
    contents.DriftedStackResourceCount = __strictParseInt(output["DriftedStackResourceCount"]) as number;
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};

const deserializeAws_queryDescribeStackEventsOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackEventsOutput => {
  let contents: any = {
    StackEvents: undefined,
    NextToken: undefined,
  };
  if (output.StackEvents === "") {
    contents.StackEvents = [];
  }
  if (output["StackEvents"] !== undefined && output["StackEvents"]["member"] !== undefined) {
    contents.StackEvents = deserializeAws_queryStackEvents(
      __getArrayIfSingleItem(output["StackEvents"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeStackInstanceOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackInstanceOutput => {
  let contents: any = {
    StackInstance: undefined,
  };
  if (output["StackInstance"] !== undefined) {
    contents.StackInstance = deserializeAws_queryStackInstance(output["StackInstance"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeStackResourceDriftsOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackResourceDriftsOutput => {
  let contents: any = {
    StackResourceDrifts: undefined,
    NextToken: undefined,
  };
  if (output.StackResourceDrifts === "") {
    contents.StackResourceDrifts = [];
  }
  if (output["StackResourceDrifts"] !== undefined && output["StackResourceDrifts"]["member"] !== undefined) {
    contents.StackResourceDrifts = deserializeAws_queryStackResourceDrifts(
      __getArrayIfSingleItem(output["StackResourceDrifts"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeStackResourceOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackResourceOutput => {
  let contents: any = {
    StackResourceDetail: undefined,
  };
  if (output["StackResourceDetail"] !== undefined) {
    contents.StackResourceDetail = deserializeAws_queryStackResourceDetail(output["StackResourceDetail"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeStackResourcesOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackResourcesOutput => {
  let contents: any = {
    StackResources: undefined,
  };
  if (output.StackResources === "") {
    contents.StackResources = [];
  }
  if (output["StackResources"] !== undefined && output["StackResources"]["member"] !== undefined) {
    contents.StackResources = deserializeAws_queryStackResources(
      __getArrayIfSingleItem(output["StackResources"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeStackSetOperationOutput = (
  output: any,
  context: __SerdeContext
): DescribeStackSetOperationOutput => {
  let contents: any = {
    StackSetOperation: undefined,
  };
  if (output["StackSetOperation"] !== undefined) {
    contents.StackSetOperation = deserializeAws_queryStackSetOperation(output["StackSetOperation"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeStackSetOutput = (output: any, context: __SerdeContext): DescribeStackSetOutput => {
  let contents: any = {
    StackSet: undefined,
  };
  if (output["StackSet"] !== undefined) {
    contents.StackSet = deserializeAws_queryStackSet(output["StackSet"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeStacksOutput = (output: any, context: __SerdeContext): DescribeStacksOutput => {
  let contents: any = {
    Stacks: undefined,
    NextToken: undefined,
  };
  if (output.Stacks === "") {
    contents.Stacks = [];
  }
  if (output["Stacks"] !== undefined && output["Stacks"]["member"] !== undefined) {
    contents.Stacks = deserializeAws_queryStacks(__getArrayIfSingleItem(output["Stacks"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeTypeOutput = (output: any, context: __SerdeContext): DescribeTypeOutput => {
  let contents: any = {
    Arn: undefined,
    Type: undefined,
    TypeName: undefined,
    DefaultVersionId: undefined,
    IsDefaultVersion: undefined,
    TypeTestsStatus: undefined,
    TypeTestsStatusDescription: undefined,
    Description: undefined,
    Schema: undefined,
    ProvisioningType: undefined,
    DeprecatedStatus: undefined,
    LoggingConfig: undefined,
    RequiredActivatedTypes: undefined,
    ExecutionRoleArn: undefined,
    Visibility: undefined,
    SourceUrl: undefined,
    DocumentationUrl: undefined,
    LastUpdated: undefined,
    TimeCreated: undefined,
    ConfigurationSchema: undefined,
    PublisherId: undefined,
    OriginalTypeName: undefined,
    OriginalTypeArn: undefined,
    PublicVersionNumber: undefined,
    LatestPublicVersion: undefined,
    IsActivated: undefined,
    AutoUpdate: undefined,
  };
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
    contents.LoggingConfig = deserializeAws_queryLoggingConfig(output["LoggingConfig"], context);
  }
  if (output.RequiredActivatedTypes === "") {
    contents.RequiredActivatedTypes = [];
  }
  if (output["RequiredActivatedTypes"] !== undefined && output["RequiredActivatedTypes"]["member"] !== undefined) {
    contents.RequiredActivatedTypes = deserializeAws_queryRequiredActivatedTypes(
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
    contents.LastUpdated = new Date(output["LastUpdated"]);
  }
  if (output["TimeCreated"] !== undefined) {
    contents.TimeCreated = new Date(output["TimeCreated"]);
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

const deserializeAws_queryDescribeTypeRegistrationOutput = (
  output: any,
  context: __SerdeContext
): DescribeTypeRegistrationOutput => {
  let contents: any = {
    ProgressStatus: undefined,
    Description: undefined,
    TypeArn: undefined,
    TypeVersionArn: undefined,
  };
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

const deserializeAws_queryDetectStackDriftOutput = (output: any, context: __SerdeContext): DetectStackDriftOutput => {
  let contents: any = {
    StackDriftDetectionId: undefined,
  };
  if (output["StackDriftDetectionId"] !== undefined) {
    contents.StackDriftDetectionId = __expectString(output["StackDriftDetectionId"]);
  }
  return contents;
};

const deserializeAws_queryDetectStackResourceDriftOutput = (
  output: any,
  context: __SerdeContext
): DetectStackResourceDriftOutput => {
  let contents: any = {
    StackResourceDrift: undefined,
  };
  if (output["StackResourceDrift"] !== undefined) {
    contents.StackResourceDrift = deserializeAws_queryStackResourceDrift(output["StackResourceDrift"], context);
  }
  return contents;
};

const deserializeAws_queryDetectStackSetDriftOutput = (
  output: any,
  context: __SerdeContext
): DetectStackSetDriftOutput => {
  let contents: any = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

const deserializeAws_queryEstimateTemplateCostOutput = (
  output: any,
  context: __SerdeContext
): EstimateTemplateCostOutput => {
  let contents: any = {
    Url: undefined,
  };
  if (output["Url"] !== undefined) {
    contents.Url = __expectString(output["Url"]);
  }
  return contents;
};

const deserializeAws_queryExecuteChangeSetOutput = (output: any, context: __SerdeContext): ExecuteChangeSetOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryExport = (output: any, context: __SerdeContext): Export => {
  let contents: any = {
    ExportingStackId: undefined,
    Name: undefined,
    Value: undefined,
  };
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

const deserializeAws_queryExports = (output: any, context: __SerdeContext): Export[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryExport(entry, context);
    });
};

const deserializeAws_queryGetStackPolicyOutput = (output: any, context: __SerdeContext): GetStackPolicyOutput => {
  let contents: any = {
    StackPolicyBody: undefined,
  };
  if (output["StackPolicyBody"] !== undefined) {
    contents.StackPolicyBody = __expectString(output["StackPolicyBody"]);
  }
  return contents;
};

const deserializeAws_queryGetTemplateOutput = (output: any, context: __SerdeContext): GetTemplateOutput => {
  let contents: any = {
    TemplateBody: undefined,
    StagesAvailable: undefined,
  };
  if (output["TemplateBody"] !== undefined) {
    contents.TemplateBody = __expectString(output["TemplateBody"]);
  }
  if (output.StagesAvailable === "") {
    contents.StagesAvailable = [];
  }
  if (output["StagesAvailable"] !== undefined && output["StagesAvailable"]["member"] !== undefined) {
    contents.StagesAvailable = deserializeAws_queryStageList(
      __getArrayIfSingleItem(output["StagesAvailable"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetTemplateSummaryOutput = (
  output: any,
  context: __SerdeContext
): GetTemplateSummaryOutput => {
  let contents: any = {
    Parameters: undefined,
    Description: undefined,
    Capabilities: undefined,
    CapabilitiesReason: undefined,
    ResourceTypes: undefined,
    Version: undefined,
    Metadata: undefined,
    DeclaredTransforms: undefined,
    ResourceIdentifierSummaries: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameterDeclarations(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason = __expectString(output["CapabilitiesReason"]);
  }
  if (output.ResourceTypes === "") {
    contents.ResourceTypes = [];
  }
  if (output["ResourceTypes"] !== undefined && output["ResourceTypes"]["member"] !== undefined) {
    contents.ResourceTypes = deserializeAws_queryResourceTypes(
      __getArrayIfSingleItem(output["ResourceTypes"]["member"]),
      context
    );
  }
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
  }
  if (output["Metadata"] !== undefined) {
    contents.Metadata = __expectString(output["Metadata"]);
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  }
  if (output["DeclaredTransforms"] !== undefined && output["DeclaredTransforms"]["member"] !== undefined) {
    contents.DeclaredTransforms = deserializeAws_queryTransformsList(
      __getArrayIfSingleItem(output["DeclaredTransforms"]["member"]),
      context
    );
  }
  if (output.ResourceIdentifierSummaries === "") {
    contents.ResourceIdentifierSummaries = [];
  }
  if (
    output["ResourceIdentifierSummaries"] !== undefined &&
    output["ResourceIdentifierSummaries"]["member"] !== undefined
  ) {
    contents.ResourceIdentifierSummaries = deserializeAws_queryResourceIdentifierSummaries(
      __getArrayIfSingleItem(output["ResourceIdentifierSummaries"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryImports = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryImportStacksToStackSetOutput = (
  output: any,
  context: __SerdeContext
): ImportStacksToStackSetOutput => {
  let contents: any = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

const deserializeAws_queryInsufficientCapabilitiesException = (
  output: any,
  context: __SerdeContext
): InsufficientCapabilitiesException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidChangeSetStatusException = (
  output: any,
  context: __SerdeContext
): InvalidChangeSetStatusException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidStateTransitionException = (
  output: any,
  context: __SerdeContext
): InvalidStateTransitionException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryListChangeSetsOutput = (output: any, context: __SerdeContext): ListChangeSetsOutput => {
  let contents: any = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryChangeSetSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListExportsOutput = (output: any, context: __SerdeContext): ListExportsOutput => {
  let contents: any = {
    Exports: undefined,
    NextToken: undefined,
  };
  if (output.Exports === "") {
    contents.Exports = [];
  }
  if (output["Exports"] !== undefined && output["Exports"]["member"] !== undefined) {
    contents.Exports = deserializeAws_queryExports(__getArrayIfSingleItem(output["Exports"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListImportsOutput = (output: any, context: __SerdeContext): ListImportsOutput => {
  let contents: any = {
    Imports: undefined,
    NextToken: undefined,
  };
  if (output.Imports === "") {
    contents.Imports = [];
  }
  if (output["Imports"] !== undefined && output["Imports"]["member"] !== undefined) {
    contents.Imports = deserializeAws_queryImports(__getArrayIfSingleItem(output["Imports"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListStackInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListStackInstancesOutput => {
  let contents: any = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackInstanceSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListStackResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListStackResourcesOutput => {
  let contents: any = {
    StackResourceSummaries: undefined,
    NextToken: undefined,
  };
  if (output.StackResourceSummaries === "") {
    contents.StackResourceSummaries = [];
  }
  if (output["StackResourceSummaries"] !== undefined && output["StackResourceSummaries"]["member"] !== undefined) {
    contents.StackResourceSummaries = deserializeAws_queryStackResourceSummaries(
      __getArrayIfSingleItem(output["StackResourceSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListStackSetOperationResultsOutput = (
  output: any,
  context: __SerdeContext
): ListStackSetOperationResultsOutput => {
  let contents: any = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetOperationResultSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListStackSetOperationsOutput = (
  output: any,
  context: __SerdeContext
): ListStackSetOperationsOutput => {
  let contents: any = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetOperationSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListStackSetsOutput = (output: any, context: __SerdeContext): ListStackSetsOutput => {
  let contents: any = {
    Summaries: undefined,
    NextToken: undefined,
  };
  if (output.Summaries === "") {
    contents.Summaries = [];
  }
  if (output["Summaries"] !== undefined && output["Summaries"]["member"] !== undefined) {
    contents.Summaries = deserializeAws_queryStackSetSummaries(
      __getArrayIfSingleItem(output["Summaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListStacksOutput = (output: any, context: __SerdeContext): ListStacksOutput => {
  let contents: any = {
    StackSummaries: undefined,
    NextToken: undefined,
  };
  if (output.StackSummaries === "") {
    contents.StackSummaries = [];
  }
  if (output["StackSummaries"] !== undefined && output["StackSummaries"]["member"] !== undefined) {
    contents.StackSummaries = deserializeAws_queryStackSummaries(
      __getArrayIfSingleItem(output["StackSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListTypeRegistrationsOutput = (
  output: any,
  context: __SerdeContext
): ListTypeRegistrationsOutput => {
  let contents: any = {
    RegistrationTokenList: undefined,
    NextToken: undefined,
  };
  if (output.RegistrationTokenList === "") {
    contents.RegistrationTokenList = [];
  }
  if (output["RegistrationTokenList"] !== undefined && output["RegistrationTokenList"]["member"] !== undefined) {
    contents.RegistrationTokenList = deserializeAws_queryRegistrationTokenList(
      __getArrayIfSingleItem(output["RegistrationTokenList"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListTypesOutput = (output: any, context: __SerdeContext): ListTypesOutput => {
  let contents: any = {
    TypeSummaries: undefined,
    NextToken: undefined,
  };
  if (output.TypeSummaries === "") {
    contents.TypeSummaries = [];
  }
  if (output["TypeSummaries"] !== undefined && output["TypeSummaries"]["member"] !== undefined) {
    contents.TypeSummaries = deserializeAws_queryTypeSummaries(
      __getArrayIfSingleItem(output["TypeSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListTypeVersionsOutput = (output: any, context: __SerdeContext): ListTypeVersionsOutput => {
  let contents: any = {
    TypeVersionSummaries: undefined,
    NextToken: undefined,
  };
  if (output.TypeVersionSummaries === "") {
    contents.TypeVersionSummaries = [];
  }
  if (output["TypeVersionSummaries"] !== undefined && output["TypeVersionSummaries"]["member"] !== undefined) {
    contents.TypeVersionSummaries = deserializeAws_queryTypeVersionSummaries(
      __getArrayIfSingleItem(output["TypeVersionSummaries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryLoggingConfig = (output: any, context: __SerdeContext): LoggingConfig => {
  let contents: any = {
    LogRoleArn: undefined,
    LogGroupName: undefined,
  };
  if (output["LogRoleArn"] !== undefined) {
    contents.LogRoleArn = __expectString(output["LogRoleArn"]);
  }
  if (output["LogGroupName"] !== undefined) {
    contents.LogGroupName = __expectString(output["LogGroupName"]);
  }
  return contents;
};

const deserializeAws_queryLogicalResourceIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryModuleInfo = (output: any, context: __SerdeContext): ModuleInfo => {
  let contents: any = {
    TypeHierarchy: undefined,
    LogicalIdHierarchy: undefined,
  };
  if (output["TypeHierarchy"] !== undefined) {
    contents.TypeHierarchy = __expectString(output["TypeHierarchy"]);
  }
  if (output["LogicalIdHierarchy"] !== undefined) {
    contents.LogicalIdHierarchy = __expectString(output["LogicalIdHierarchy"]);
  }
  return contents;
};

const deserializeAws_queryNameAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): NameAlreadyExistsException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryNotificationARNs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryOperationIdAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): OperationIdAlreadyExistsException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryOperationInProgressException = (
  output: any,
  context: __SerdeContext
): OperationInProgressException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryOperationNotFoundException = (
  output: any,
  context: __SerdeContext
): OperationNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryOperationStatusCheckFailedException = (
  output: any,
  context: __SerdeContext
): OperationStatusCheckFailedException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryOrganizationalUnitIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryOutput = (output: any, context: __SerdeContext): Output => {
  let contents: any = {
    OutputKey: undefined,
    OutputValue: undefined,
    Description: undefined,
    ExportName: undefined,
  };
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

const deserializeAws_queryOutputs = (output: any, context: __SerdeContext): Output[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryOutput(entry, context);
    });
};

const deserializeAws_queryParameter = (output: any, context: __SerdeContext): Parameter => {
  let contents: any = {
    ParameterKey: undefined,
    ParameterValue: undefined,
    UsePreviousValue: undefined,
    ResolvedValue: undefined,
  };
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

const deserializeAws_queryParameterConstraints = (output: any, context: __SerdeContext): ParameterConstraints => {
  let contents: any = {
    AllowedValues: undefined,
  };
  if (output.AllowedValues === "") {
    contents.AllowedValues = [];
  }
  if (output["AllowedValues"] !== undefined && output["AllowedValues"]["member"] !== undefined) {
    contents.AllowedValues = deserializeAws_queryAllowedValues(
      __getArrayIfSingleItem(output["AllowedValues"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryParameterDeclaration = (output: any, context: __SerdeContext): ParameterDeclaration => {
  let contents: any = {
    ParameterKey: undefined,
    DefaultValue: undefined,
    ParameterType: undefined,
    NoEcho: undefined,
    Description: undefined,
    ParameterConstraints: undefined,
  };
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
    contents.ParameterConstraints = deserializeAws_queryParameterConstraints(output["ParameterConstraints"], context);
  }
  return contents;
};

const deserializeAws_queryParameterDeclarations = (output: any, context: __SerdeContext): ParameterDeclaration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryParameterDeclaration(entry, context);
    });
};

const deserializeAws_queryParameters = (output: any, context: __SerdeContext): Parameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryParameter(entry, context);
    });
};

const deserializeAws_queryPhysicalResourceIdContext = (
  output: any,
  context: __SerdeContext
): PhysicalResourceIdContextKeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryPhysicalResourceIdContextKeyValuePair(entry, context);
    });
};

const deserializeAws_queryPhysicalResourceIdContextKeyValuePair = (
  output: any,
  context: __SerdeContext
): PhysicalResourceIdContextKeyValuePair => {
  let contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryPropertyDifference = (output: any, context: __SerdeContext): PropertyDifference => {
  let contents: any = {
    PropertyPath: undefined,
    ExpectedValue: undefined,
    ActualValue: undefined,
    DifferenceType: undefined,
  };
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

const deserializeAws_queryPropertyDifferences = (output: any, context: __SerdeContext): PropertyDifference[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryPropertyDifference(entry, context);
    });
};

const deserializeAws_queryPublishTypeOutput = (output: any, context: __SerdeContext): PublishTypeOutput => {
  let contents: any = {
    PublicTypeArn: undefined,
  };
  if (output["PublicTypeArn"] !== undefined) {
    contents.PublicTypeArn = __expectString(output["PublicTypeArn"]);
  }
  return contents;
};

const deserializeAws_queryRecordHandlerProgressOutput = (
  output: any,
  context: __SerdeContext
): RecordHandlerProgressOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryRegionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryRegisterPublisherOutput = (output: any, context: __SerdeContext): RegisterPublisherOutput => {
  let contents: any = {
    PublisherId: undefined,
  };
  if (output["PublisherId"] !== undefined) {
    contents.PublisherId = __expectString(output["PublisherId"]);
  }
  return contents;
};

const deserializeAws_queryRegisterTypeOutput = (output: any, context: __SerdeContext): RegisterTypeOutput => {
  let contents: any = {
    RegistrationToken: undefined,
  };
  if (output["RegistrationToken"] !== undefined) {
    contents.RegistrationToken = __expectString(output["RegistrationToken"]);
  }
  return contents;
};

const deserializeAws_queryRegistrationTokenList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryRequiredActivatedType = (output: any, context: __SerdeContext): RequiredActivatedType => {
  let contents: any = {
    TypeNameAlias: undefined,
    OriginalTypeName: undefined,
    PublisherId: undefined,
    SupportedMajorVersions: undefined,
  };
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
  }
  if (output["SupportedMajorVersions"] !== undefined && output["SupportedMajorVersions"]["member"] !== undefined) {
    contents.SupportedMajorVersions = deserializeAws_querySupportedMajorVersions(
      __getArrayIfSingleItem(output["SupportedMajorVersions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryRequiredActivatedTypes = (output: any, context: __SerdeContext): RequiredActivatedType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryRequiredActivatedType(entry, context);
    });
};

const deserializeAws_queryResourceChange = (output: any, context: __SerdeContext): ResourceChange => {
  let contents: any = {
    Action: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Replacement: undefined,
    Scope: undefined,
    Details: undefined,
    ChangeSetId: undefined,
    ModuleInfo: undefined,
  };
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
  }
  if (output["Scope"] !== undefined && output["Scope"]["member"] !== undefined) {
    contents.Scope = deserializeAws_queryScope(__getArrayIfSingleItem(output["Scope"]["member"]), context);
  }
  if (output.Details === "") {
    contents.Details = [];
  }
  if (output["Details"] !== undefined && output["Details"]["member"] !== undefined) {
    contents.Details = deserializeAws_queryResourceChangeDetails(
      __getArrayIfSingleItem(output["Details"]["member"]),
      context
    );
  }
  if (output["ChangeSetId"] !== undefined) {
    contents.ChangeSetId = __expectString(output["ChangeSetId"]);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

const deserializeAws_queryResourceChangeDetail = (output: any, context: __SerdeContext): ResourceChangeDetail => {
  let contents: any = {
    Target: undefined,
    Evaluation: undefined,
    ChangeSource: undefined,
    CausingEntity: undefined,
  };
  if (output["Target"] !== undefined) {
    contents.Target = deserializeAws_queryResourceTargetDefinition(output["Target"], context);
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

const deserializeAws_queryResourceChangeDetails = (output: any, context: __SerdeContext): ResourceChangeDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryResourceChangeDetail(entry, context);
    });
};

const deserializeAws_queryResourceIdentifiers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryResourceIdentifierSummaries = (
  output: any,
  context: __SerdeContext
): ResourceIdentifierSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryResourceIdentifierSummary(entry, context);
    });
};

const deserializeAws_queryResourceIdentifierSummary = (
  output: any,
  context: __SerdeContext
): ResourceIdentifierSummary => {
  let contents: any = {
    ResourceType: undefined,
    LogicalResourceIds: undefined,
    ResourceIdentifiers: undefined,
  };
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output.LogicalResourceIds === "") {
    contents.LogicalResourceIds = [];
  }
  if (output["LogicalResourceIds"] !== undefined && output["LogicalResourceIds"]["member"] !== undefined) {
    contents.LogicalResourceIds = deserializeAws_queryLogicalResourceIds(
      __getArrayIfSingleItem(output["LogicalResourceIds"]["member"]),
      context
    );
  }
  if (output.ResourceIdentifiers === "") {
    contents.ResourceIdentifiers = [];
  }
  if (output["ResourceIdentifiers"] !== undefined && output["ResourceIdentifiers"]["member"] !== undefined) {
    contents.ResourceIdentifiers = deserializeAws_queryResourceIdentifiers(
      __getArrayIfSingleItem(output["ResourceIdentifiers"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryResourceTargetDefinition = (
  output: any,
  context: __SerdeContext
): ResourceTargetDefinition => {
  let contents: any = {
    Attribute: undefined,
    Name: undefined,
    RequiresRecreation: undefined,
  };
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

const deserializeAws_queryResourceTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryRollbackConfiguration = (output: any, context: __SerdeContext): RollbackConfiguration => {
  let contents: any = {
    RollbackTriggers: undefined,
    MonitoringTimeInMinutes: undefined,
  };
  if (output.RollbackTriggers === "") {
    contents.RollbackTriggers = [];
  }
  if (output["RollbackTriggers"] !== undefined && output["RollbackTriggers"]["member"] !== undefined) {
    contents.RollbackTriggers = deserializeAws_queryRollbackTriggers(
      __getArrayIfSingleItem(output["RollbackTriggers"]["member"]),
      context
    );
  }
  if (output["MonitoringTimeInMinutes"] !== undefined) {
    contents.MonitoringTimeInMinutes = __strictParseInt(output["MonitoringTimeInMinutes"]) as number;
  }
  return contents;
};

const deserializeAws_queryRollbackTrigger = (output: any, context: __SerdeContext): RollbackTrigger => {
  let contents: any = {
    Arn: undefined,
    Type: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  return contents;
};

const deserializeAws_queryRollbackTriggers = (output: any, context: __SerdeContext): RollbackTrigger[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryRollbackTrigger(entry, context);
    });
};

const deserializeAws_queryScope = (output: any, context: __SerdeContext): (ResourceAttribute | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySetTypeConfigurationOutput = (
  output: any,
  context: __SerdeContext
): SetTypeConfigurationOutput => {
  let contents: any = {
    ConfigurationArn: undefined,
  };
  if (output["ConfigurationArn"] !== undefined) {
    contents.ConfigurationArn = __expectString(output["ConfigurationArn"]);
  }
  return contents;
};

const deserializeAws_querySetTypeDefaultVersionOutput = (
  output: any,
  context: __SerdeContext
): SetTypeDefaultVersionOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryStack = (output: any, context: __SerdeContext): Stack => {
  let contents: any = {
    StackId: undefined,
    StackName: undefined,
    ChangeSetId: undefined,
    Description: undefined,
    Parameters: undefined,
    CreationTime: undefined,
    DeletionTime: undefined,
    LastUpdatedTime: undefined,
    RollbackConfiguration: undefined,
    StackStatus: undefined,
    StackStatusReason: undefined,
    DisableRollback: undefined,
    NotificationARNs: undefined,
    TimeoutInMinutes: undefined,
    Capabilities: undefined,
    Outputs: undefined,
    RoleARN: undefined,
    Tags: undefined,
    EnableTerminationProtection: undefined,
    ParentId: undefined,
    RootId: undefined,
    DriftInformation: undefined,
  };
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
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = new Date(output["DeletionTime"]);
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
  }
  if (output["RollbackConfiguration"] !== undefined) {
    contents.RollbackConfiguration = deserializeAws_queryRollbackConfiguration(
      output["RollbackConfiguration"],
      context
    );
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
  }
  if (output["NotificationARNs"] !== undefined && output["NotificationARNs"]["member"] !== undefined) {
    contents.NotificationARNs = deserializeAws_queryNotificationARNs(
      __getArrayIfSingleItem(output["NotificationARNs"]["member"]),
      context
    );
  }
  if (output["TimeoutInMinutes"] !== undefined) {
    contents.TimeoutInMinutes = __strictParseInt(output["TimeoutInMinutes"]) as number;
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Outputs === "") {
    contents.Outputs = [];
  }
  if (output["Outputs"] !== undefined && output["Outputs"]["member"] !== undefined) {
    contents.Outputs = deserializeAws_queryOutputs(__getArrayIfSingleItem(output["Outputs"]["member"]), context);
  }
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = __expectString(output["RoleARN"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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
    contents.DriftInformation = deserializeAws_queryStackDriftInformation(output["DriftInformation"], context);
  }
  return contents;
};

const deserializeAws_queryStackDriftInformation = (output: any, context: __SerdeContext): StackDriftInformation => {
  let contents: any = {
    StackDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = __expectString(output["StackDriftStatus"]);
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackDriftInformationSummary = (
  output: any,
  context: __SerdeContext
): StackDriftInformationSummary => {
  let contents: any = {
    StackDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackDriftStatus"] !== undefined) {
    contents.StackDriftStatus = __expectString(output["StackDriftStatus"]);
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackEvent = (output: any, context: __SerdeContext): StackEvent => {
  let contents: any = {
    StackId: undefined,
    EventId: undefined,
    StackName: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Timestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    ResourceProperties: undefined,
    ClientRequestToken: undefined,
  };
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
    contents.Timestamp = new Date(output["Timestamp"]);
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
  return contents;
};

const deserializeAws_queryStackEvents = (output: any, context: __SerdeContext): StackEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackEvent(entry, context);
    });
};

const deserializeAws_queryStackInstance = (output: any, context: __SerdeContext): StackInstance => {
  let contents: any = {
    StackSetId: undefined,
    Region: undefined,
    Account: undefined,
    StackId: undefined,
    ParameterOverrides: undefined,
    Status: undefined,
    StackInstanceStatus: undefined,
    StatusReason: undefined,
    OrganizationalUnitId: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
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
  }
  if (output["ParameterOverrides"] !== undefined && output["ParameterOverrides"]["member"] !== undefined) {
    contents.ParameterOverrides = deserializeAws_queryParameters(
      __getArrayIfSingleItem(output["ParameterOverrides"]["member"]),
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StackInstanceStatus"] !== undefined) {
    contents.StackInstanceStatus = deserializeAws_queryStackInstanceComprehensiveStatus(
      output["StackInstanceStatus"],
      context
    );
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
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackInstanceComprehensiveStatus = (
  output: any,
  context: __SerdeContext
): StackInstanceComprehensiveStatus => {
  let contents: any = {
    DetailedStatus: undefined,
  };
  if (output["DetailedStatus"] !== undefined) {
    contents.DetailedStatus = __expectString(output["DetailedStatus"]);
  }
  return contents;
};

const deserializeAws_queryStackInstanceNotFoundException = (
  output: any,
  context: __SerdeContext
): StackInstanceNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryStackInstanceSummaries = (output: any, context: __SerdeContext): StackInstanceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackInstanceSummary(entry, context);
    });
};

const deserializeAws_queryStackInstanceSummary = (output: any, context: __SerdeContext): StackInstanceSummary => {
  let contents: any = {
    StackSetId: undefined,
    Region: undefined,
    Account: undefined,
    StackId: undefined,
    Status: undefined,
    StatusReason: undefined,
    StackInstanceStatus: undefined,
    OrganizationalUnitId: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
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
    contents.StackInstanceStatus = deserializeAws_queryStackInstanceComprehensiveStatus(
      output["StackInstanceStatus"],
      context
    );
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = __expectString(output["OrganizationalUnitId"]);
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = __expectString(output["DriftStatus"]);
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackNotFoundException = (output: any, context: __SerdeContext): StackNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryStackResource = (output: any, context: __SerdeContext): StackResource => {
  let contents: any = {
    StackName: undefined,
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    Timestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    Description: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
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
    contents.Timestamp = new Date(output["Timestamp"]);
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
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

const deserializeAws_queryStackResourceDetail = (output: any, context: __SerdeContext): StackResourceDetail => {
  let contents: any = {
    StackName: undefined,
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    LastUpdatedTimestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    Description: undefined,
    Metadata: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
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
    contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
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
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformation(output["DriftInformation"], context);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

const deserializeAws_queryStackResourceDrift = (output: any, context: __SerdeContext): StackResourceDrift => {
  let contents: any = {
    StackId: undefined,
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    PhysicalResourceIdContext: undefined,
    ResourceType: undefined,
    ExpectedProperties: undefined,
    ActualProperties: undefined,
    PropertyDifferences: undefined,
    StackResourceDriftStatus: undefined,
    Timestamp: undefined,
    ModuleInfo: undefined,
  };
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
  }
  if (
    output["PhysicalResourceIdContext"] !== undefined &&
    output["PhysicalResourceIdContext"]["member"] !== undefined
  ) {
    contents.PhysicalResourceIdContext = deserializeAws_queryPhysicalResourceIdContext(
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
  }
  if (output["PropertyDifferences"] !== undefined && output["PropertyDifferences"]["member"] !== undefined) {
    contents.PropertyDifferences = deserializeAws_queryPropertyDifferences(
      __getArrayIfSingleItem(output["PropertyDifferences"]["member"]),
      context
    );
  }
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = __expectString(output["StackResourceDriftStatus"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

const deserializeAws_queryStackResourceDriftInformation = (
  output: any,
  context: __SerdeContext
): StackResourceDriftInformation => {
  let contents: any = {
    StackResourceDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = __expectString(output["StackResourceDriftStatus"]);
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackResourceDriftInformationSummary = (
  output: any,
  context: __SerdeContext
): StackResourceDriftInformationSummary => {
  let contents: any = {
    StackResourceDriftStatus: undefined,
    LastCheckTimestamp: undefined,
  };
  if (output["StackResourceDriftStatus"] !== undefined) {
    contents.StackResourceDriftStatus = __expectString(output["StackResourceDriftStatus"]);
  }
  if (output["LastCheckTimestamp"] !== undefined) {
    contents.LastCheckTimestamp = new Date(output["LastCheckTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackResourceDrifts = (output: any, context: __SerdeContext): StackResourceDrift[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackResourceDrift(entry, context);
    });
};

const deserializeAws_queryStackResources = (output: any, context: __SerdeContext): StackResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackResource(entry, context);
    });
};

const deserializeAws_queryStackResourceSummaries = (output: any, context: __SerdeContext): StackResourceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackResourceSummary(entry, context);
    });
};

const deserializeAws_queryStackResourceSummary = (output: any, context: __SerdeContext): StackResourceSummary => {
  let contents: any = {
    LogicalResourceId: undefined,
    PhysicalResourceId: undefined,
    ResourceType: undefined,
    LastUpdatedTimestamp: undefined,
    ResourceStatus: undefined,
    ResourceStatusReason: undefined,
    DriftInformation: undefined,
    ModuleInfo: undefined,
  };
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
    contents.LastUpdatedTimestamp = new Date(output["LastUpdatedTimestamp"]);
  }
  if (output["ResourceStatus"] !== undefined) {
    contents.ResourceStatus = __expectString(output["ResourceStatus"]);
  }
  if (output["ResourceStatusReason"] !== undefined) {
    contents.ResourceStatusReason = __expectString(output["ResourceStatusReason"]);
  }
  if (output["DriftInformation"] !== undefined) {
    contents.DriftInformation = deserializeAws_queryStackResourceDriftInformationSummary(
      output["DriftInformation"],
      context
    );
  }
  if (output["ModuleInfo"] !== undefined) {
    contents.ModuleInfo = deserializeAws_queryModuleInfo(output["ModuleInfo"], context);
  }
  return contents;
};

const deserializeAws_queryStacks = (output: any, context: __SerdeContext): Stack[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStack(entry, context);
    });
};

const deserializeAws_queryStackSet = (output: any, context: __SerdeContext): StackSet => {
  let contents: any = {
    StackSetName: undefined,
    StackSetId: undefined,
    Description: undefined,
    Status: undefined,
    TemplateBody: undefined,
    Parameters: undefined,
    Capabilities: undefined,
    Tags: undefined,
    StackSetARN: undefined,
    AdministrationRoleARN: undefined,
    ExecutionRoleName: undefined,
    StackSetDriftDetectionDetails: undefined,
    AutoDeployment: undefined,
    PermissionModel: undefined,
    OrganizationalUnitIds: undefined,
  };
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
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryParameters(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTags(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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
    contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  if (output["AutoDeployment"] !== undefined) {
    contents.AutoDeployment = deserializeAws_queryAutoDeployment(output["AutoDeployment"], context);
  }
  if (output["PermissionModel"] !== undefined) {
    contents.PermissionModel = __expectString(output["PermissionModel"]);
  }
  if (output.OrganizationalUnitIds === "") {
    contents.OrganizationalUnitIds = [];
  }
  if (output["OrganizationalUnitIds"] !== undefined && output["OrganizationalUnitIds"]["member"] !== undefined) {
    contents.OrganizationalUnitIds = deserializeAws_queryOrganizationalUnitIdList(
      __getArrayIfSingleItem(output["OrganizationalUnitIds"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryStackSetDriftDetectionDetails = (
  output: any,
  context: __SerdeContext
): StackSetDriftDetectionDetails => {
  let contents: any = {
    DriftStatus: undefined,
    DriftDetectionStatus: undefined,
    LastDriftCheckTimestamp: undefined,
    TotalStackInstancesCount: undefined,
    DriftedStackInstancesCount: undefined,
    InSyncStackInstancesCount: undefined,
    InProgressStackInstancesCount: undefined,
    FailedStackInstancesCount: undefined,
  };
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = __expectString(output["DriftStatus"]);
  }
  if (output["DriftDetectionStatus"] !== undefined) {
    contents.DriftDetectionStatus = __expectString(output["DriftDetectionStatus"]);
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  if (output["TotalStackInstancesCount"] !== undefined) {
    contents.TotalStackInstancesCount = __strictParseInt(output["TotalStackInstancesCount"]) as number;
  }
  if (output["DriftedStackInstancesCount"] !== undefined) {
    contents.DriftedStackInstancesCount = __strictParseInt(output["DriftedStackInstancesCount"]) as number;
  }
  if (output["InSyncStackInstancesCount"] !== undefined) {
    contents.InSyncStackInstancesCount = __strictParseInt(output["InSyncStackInstancesCount"]) as number;
  }
  if (output["InProgressStackInstancesCount"] !== undefined) {
    contents.InProgressStackInstancesCount = __strictParseInt(output["InProgressStackInstancesCount"]) as number;
  }
  if (output["FailedStackInstancesCount"] !== undefined) {
    contents.FailedStackInstancesCount = __strictParseInt(output["FailedStackInstancesCount"]) as number;
  }
  return contents;
};

const deserializeAws_queryStackSetNotEmptyException = (
  output: any,
  context: __SerdeContext
): StackSetNotEmptyException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryStackSetNotFoundException = (
  output: any,
  context: __SerdeContext
): StackSetNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryStackSetOperation = (output: any, context: __SerdeContext): StackSetOperation => {
  let contents: any = {
    OperationId: undefined,
    StackSetId: undefined,
    Action: undefined,
    Status: undefined,
    OperationPreferences: undefined,
    RetainStacks: undefined,
    AdministrationRoleARN: undefined,
    ExecutionRoleName: undefined,
    CreationTimestamp: undefined,
    EndTimestamp: undefined,
    DeploymentTargets: undefined,
    StackSetDriftDetectionDetails: undefined,
  };
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
    contents.OperationPreferences = deserializeAws_queryStackSetOperationPreferences(
      output["OperationPreferences"],
      context
    );
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
    contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = new Date(output["EndTimestamp"]);
  }
  if (output["DeploymentTargets"] !== undefined) {
    contents.DeploymentTargets = deserializeAws_queryDeploymentTargets(output["DeploymentTargets"], context);
  }
  if (output["StackSetDriftDetectionDetails"] !== undefined) {
    contents.StackSetDriftDetectionDetails = deserializeAws_queryStackSetDriftDetectionDetails(
      output["StackSetDriftDetectionDetails"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryStackSetOperationPreferences = (
  output: any,
  context: __SerdeContext
): StackSetOperationPreferences => {
  let contents: any = {
    RegionConcurrencyType: undefined,
    RegionOrder: undefined,
    FailureToleranceCount: undefined,
    FailureTolerancePercentage: undefined,
    MaxConcurrentCount: undefined,
    MaxConcurrentPercentage: undefined,
  };
  if (output["RegionConcurrencyType"] !== undefined) {
    contents.RegionConcurrencyType = __expectString(output["RegionConcurrencyType"]);
  }
  if (output.RegionOrder === "") {
    contents.RegionOrder = [];
  }
  if (output["RegionOrder"] !== undefined && output["RegionOrder"]["member"] !== undefined) {
    contents.RegionOrder = deserializeAws_queryRegionList(
      __getArrayIfSingleItem(output["RegionOrder"]["member"]),
      context
    );
  }
  if (output["FailureToleranceCount"] !== undefined) {
    contents.FailureToleranceCount = __strictParseInt(output["FailureToleranceCount"]) as number;
  }
  if (output["FailureTolerancePercentage"] !== undefined) {
    contents.FailureTolerancePercentage = __strictParseInt(output["FailureTolerancePercentage"]) as number;
  }
  if (output["MaxConcurrentCount"] !== undefined) {
    contents.MaxConcurrentCount = __strictParseInt(output["MaxConcurrentCount"]) as number;
  }
  if (output["MaxConcurrentPercentage"] !== undefined) {
    contents.MaxConcurrentPercentage = __strictParseInt(output["MaxConcurrentPercentage"]) as number;
  }
  return contents;
};

const deserializeAws_queryStackSetOperationResultSummaries = (
  output: any,
  context: __SerdeContext
): StackSetOperationResultSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackSetOperationResultSummary(entry, context);
    });
};

const deserializeAws_queryStackSetOperationResultSummary = (
  output: any,
  context: __SerdeContext
): StackSetOperationResultSummary => {
  let contents: any = {
    Account: undefined,
    Region: undefined,
    Status: undefined,
    StatusReason: undefined,
    AccountGateResult: undefined,
    OrganizationalUnitId: undefined,
  };
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
    contents.AccountGateResult = deserializeAws_queryAccountGateResult(output["AccountGateResult"], context);
  }
  if (output["OrganizationalUnitId"] !== undefined) {
    contents.OrganizationalUnitId = __expectString(output["OrganizationalUnitId"]);
  }
  return contents;
};

const deserializeAws_queryStackSetOperationSummaries = (
  output: any,
  context: __SerdeContext
): StackSetOperationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackSetOperationSummary(entry, context);
    });
};

const deserializeAws_queryStackSetOperationSummary = (
  output: any,
  context: __SerdeContext
): StackSetOperationSummary => {
  let contents: any = {
    OperationId: undefined,
    Action: undefined,
    Status: undefined,
    CreationTimestamp: undefined,
    EndTimestamp: undefined,
  };
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
    contents.CreationTimestamp = new Date(output["CreationTimestamp"]);
  }
  if (output["EndTimestamp"] !== undefined) {
    contents.EndTimestamp = new Date(output["EndTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackSetSummaries = (output: any, context: __SerdeContext): StackSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackSetSummary(entry, context);
    });
};

const deserializeAws_queryStackSetSummary = (output: any, context: __SerdeContext): StackSetSummary => {
  let contents: any = {
    StackSetName: undefined,
    StackSetId: undefined,
    Description: undefined,
    Status: undefined,
    AutoDeployment: undefined,
    PermissionModel: undefined,
    DriftStatus: undefined,
    LastDriftCheckTimestamp: undefined,
  };
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
    contents.AutoDeployment = deserializeAws_queryAutoDeployment(output["AutoDeployment"], context);
  }
  if (output["PermissionModel"] !== undefined) {
    contents.PermissionModel = __expectString(output["PermissionModel"]);
  }
  if (output["DriftStatus"] !== undefined) {
    contents.DriftStatus = __expectString(output["DriftStatus"]);
  }
  if (output["LastDriftCheckTimestamp"] !== undefined) {
    contents.LastDriftCheckTimestamp = new Date(output["LastDriftCheckTimestamp"]);
  }
  return contents;
};

const deserializeAws_queryStackSummaries = (output: any, context: __SerdeContext): StackSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryStackSummary(entry, context);
    });
};

const deserializeAws_queryStackSummary = (output: any, context: __SerdeContext): StackSummary => {
  let contents: any = {
    StackId: undefined,
    StackName: undefined,
    TemplateDescription: undefined,
    CreationTime: undefined,
    LastUpdatedTime: undefined,
    DeletionTime: undefined,
    StackStatus: undefined,
    StackStatusReason: undefined,
    ParentId: undefined,
    RootId: undefined,
    DriftInformation: undefined,
  };
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
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["LastUpdatedTime"] !== undefined) {
    contents.LastUpdatedTime = new Date(output["LastUpdatedTime"]);
  }
  if (output["DeletionTime"] !== undefined) {
    contents.DeletionTime = new Date(output["DeletionTime"]);
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
    contents.DriftInformation = deserializeAws_queryStackDriftInformationSummary(output["DriftInformation"], context);
  }
  return contents;
};

const deserializeAws_queryStageList = (output: any, context: __SerdeContext): (TemplateStage | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryStaleRequestException = (output: any, context: __SerdeContext): StaleRequestException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryStopStackSetOperationOutput = (
  output: any,
  context: __SerdeContext
): StopStackSetOperationOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_querySupportedMajorVersions = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __strictParseInt(entry) as number;
    });
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryTags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTemplateParameter = (output: any, context: __SerdeContext): TemplateParameter => {
  let contents: any = {
    ParameterKey: undefined,
    DefaultValue: undefined,
    NoEcho: undefined,
    Description: undefined,
  };
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

const deserializeAws_queryTemplateParameters = (output: any, context: __SerdeContext): TemplateParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTemplateParameter(entry, context);
    });
};

const deserializeAws_queryTestTypeOutput = (output: any, context: __SerdeContext): TestTypeOutput => {
  let contents: any = {
    TypeVersionArn: undefined,
  };
  if (output["TypeVersionArn"] !== undefined) {
    contents.TypeVersionArn = __expectString(output["TypeVersionArn"]);
  }
  return contents;
};

const deserializeAws_queryTokenAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TokenAlreadyExistsException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTransformsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryTypeConfigurationDetails = (
  output: any,
  context: __SerdeContext
): TypeConfigurationDetails => {
  let contents: any = {
    Arn: undefined,
    Alias: undefined,
    Configuration: undefined,
    LastUpdated: undefined,
    TypeArn: undefined,
    TypeName: undefined,
    IsDefaultConfiguration: undefined,
  };
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
    contents.LastUpdated = new Date(output["LastUpdated"]);
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

const deserializeAws_queryTypeConfigurationDetailsList = (
  output: any,
  context: __SerdeContext
): TypeConfigurationDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTypeConfigurationDetails(entry, context);
    });
};

const deserializeAws_queryTypeConfigurationIdentifier = (
  output: any,
  context: __SerdeContext
): TypeConfigurationIdentifier => {
  let contents: any = {
    TypeArn: undefined,
    TypeConfigurationAlias: undefined,
    TypeConfigurationArn: undefined,
    Type: undefined,
    TypeName: undefined,
  };
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

const deserializeAws_queryTypeConfigurationNotFoundException = (
  output: any,
  context: __SerdeContext
): TypeConfigurationNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTypeNotFoundException = (output: any, context: __SerdeContext): TypeNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTypeSummaries = (output: any, context: __SerdeContext): TypeSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTypeSummary(entry, context);
    });
};

const deserializeAws_queryTypeSummary = (output: any, context: __SerdeContext): TypeSummary => {
  let contents: any = {
    Type: undefined,
    TypeName: undefined,
    DefaultVersionId: undefined,
    TypeArn: undefined,
    LastUpdated: undefined,
    Description: undefined,
    PublisherId: undefined,
    OriginalTypeName: undefined,
    PublicVersionNumber: undefined,
    LatestPublicVersion: undefined,
    PublisherIdentity: undefined,
    PublisherName: undefined,
    IsActivated: undefined,
  };
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
    contents.LastUpdated = new Date(output["LastUpdated"]);
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

const deserializeAws_queryTypeVersionSummaries = (output: any, context: __SerdeContext): TypeVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTypeVersionSummary(entry, context);
    });
};

const deserializeAws_queryTypeVersionSummary = (output: any, context: __SerdeContext): TypeVersionSummary => {
  let contents: any = {
    Type: undefined,
    TypeName: undefined,
    VersionId: undefined,
    IsDefaultVersion: undefined,
    Arn: undefined,
    TimeCreated: undefined,
    Description: undefined,
    PublicVersionNumber: undefined,
  };
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
    contents.TimeCreated = new Date(output["TimeCreated"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["PublicVersionNumber"] !== undefined) {
    contents.PublicVersionNumber = __expectString(output["PublicVersionNumber"]);
  }
  return contents;
};

const deserializeAws_queryUnprocessedTypeConfigurations = (
  output: any,
  context: __SerdeContext
): TypeConfigurationIdentifier[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTypeConfigurationIdentifier(entry, context);
    });
};

const deserializeAws_queryUpdateStackInstancesOutput = (
  output: any,
  context: __SerdeContext
): UpdateStackInstancesOutput => {
  let contents: any = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

const deserializeAws_queryUpdateStackOutput = (output: any, context: __SerdeContext): UpdateStackOutput => {
  let contents: any = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

const deserializeAws_queryUpdateStackSetOutput = (output: any, context: __SerdeContext): UpdateStackSetOutput => {
  let contents: any = {
    OperationId: undefined,
  };
  if (output["OperationId"] !== undefined) {
    contents.OperationId = __expectString(output["OperationId"]);
  }
  return contents;
};

const deserializeAws_queryUpdateTerminationProtectionOutput = (
  output: any,
  context: __SerdeContext
): UpdateTerminationProtectionOutput => {
  let contents: any = {
    StackId: undefined,
  };
  if (output["StackId"] !== undefined) {
    contents.StackId = __expectString(output["StackId"]);
  }
  return contents;
};

const deserializeAws_queryValidateTemplateOutput = (output: any, context: __SerdeContext): ValidateTemplateOutput => {
  let contents: any = {
    Parameters: undefined,
    Description: undefined,
    Capabilities: undefined,
    CapabilitiesReason: undefined,
    DeclaredTransforms: undefined,
  };
  if (output.Parameters === "") {
    contents.Parameters = [];
  }
  if (output["Parameters"] !== undefined && output["Parameters"]["member"] !== undefined) {
    contents.Parameters = deserializeAws_queryTemplateParameters(
      __getArrayIfSingleItem(output["Parameters"]["member"]),
      context
    );
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.Capabilities === "") {
    contents.Capabilities = [];
  }
  if (output["Capabilities"] !== undefined && output["Capabilities"]["member"] !== undefined) {
    contents.Capabilities = deserializeAws_queryCapabilities(
      __getArrayIfSingleItem(output["Capabilities"]["member"]),
      context
    );
  }
  if (output["CapabilitiesReason"] !== undefined) {
    contents.CapabilitiesReason = __expectString(output["CapabilitiesReason"]);
  }
  if (output.DeclaredTransforms === "") {
    contents.DeclaredTransforms = [];
  }
  if (output["DeclaredTransforms"] !== undefined && output["DeclaredTransforms"]["member"] !== undefined) {
    contents.DeclaredTransforms = deserializeAws_queryTransformsList(
      __getArrayIfSingleItem(output["DeclaredTransforms"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : decodeHTML(val)),
      });
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

const buildFormUrlencodedString = (formEntries: { [key: string]: string }): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
