// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeDateTime as __serializeDateTime,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput,
} from "../commands/AbortEnvironmentUpdateCommand";
import {
  ApplyEnvironmentManagedActionCommandInput,
  ApplyEnvironmentManagedActionCommandOutput,
} from "../commands/ApplyEnvironmentManagedActionCommand";
import {
  AssociateEnvironmentOperationsRoleCommandInput,
  AssociateEnvironmentOperationsRoleCommandOutput,
} from "../commands/AssociateEnvironmentOperationsRoleCommand";
import {
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput,
} from "../commands/CheckDNSAvailabilityCommand";
import {
  ComposeEnvironmentsCommandInput,
  ComposeEnvironmentsCommandOutput,
} from "../commands/ComposeEnvironmentsCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
} from "../commands/CreateApplicationVersionCommand";
import {
  CreateConfigurationTemplateCommandInput,
  CreateConfigurationTemplateCommandOutput,
} from "../commands/CreateConfigurationTemplateCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreatePlatformVersionCommandInput,
  CreatePlatformVersionCommandOutput,
} from "../commands/CreatePlatformVersionCommand";
import {
  CreateStorageLocationCommandInput,
  CreateStorageLocationCommandOutput,
} from "../commands/CreateStorageLocationCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteApplicationVersionCommandInput,
  DeleteApplicationVersionCommandOutput,
} from "../commands/DeleteApplicationVersionCommand";
import {
  DeleteConfigurationTemplateCommandInput,
  DeleteConfigurationTemplateCommandOutput,
} from "../commands/DeleteConfigurationTemplateCommand";
import {
  DeleteEnvironmentConfigurationCommandInput,
  DeleteEnvironmentConfigurationCommandOutput,
} from "../commands/DeleteEnvironmentConfigurationCommand";
import {
  DeletePlatformVersionCommandInput,
  DeletePlatformVersionCommandOutput,
} from "../commands/DeletePlatformVersionCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "../commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "../commands/DescribeApplicationsCommand";
import {
  DescribeApplicationVersionsCommandInput,
  DescribeApplicationVersionsCommandOutput,
} from "../commands/DescribeApplicationVersionsCommand";
import {
  DescribeConfigurationOptionsCommandInput,
  DescribeConfigurationOptionsCommandOutput,
} from "../commands/DescribeConfigurationOptionsCommand";
import {
  DescribeConfigurationSettingsCommandInput,
  DescribeConfigurationSettingsCommandOutput,
} from "../commands/DescribeConfigurationSettingsCommand";
import {
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput,
} from "../commands/DescribeEnvironmentHealthCommand";
import {
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "../commands/DescribeEnvironmentManagedActionHistoryCommand";
import {
  DescribeEnvironmentManagedActionsCommandInput,
  DescribeEnvironmentManagedActionsCommandOutput,
} from "../commands/DescribeEnvironmentManagedActionsCommand";
import {
  DescribeEnvironmentResourcesCommandInput,
  DescribeEnvironmentResourcesCommandOutput,
} from "../commands/DescribeEnvironmentResourcesCommand";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "../commands/DescribeEnvironmentsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeInstancesHealthCommandInput,
  DescribeInstancesHealthCommandOutput,
} from "../commands/DescribeInstancesHealthCommand";
import {
  DescribePlatformVersionCommandInput,
  DescribePlatformVersionCommandOutput,
} from "../commands/DescribePlatformVersionCommand";
import {
  DisassociateEnvironmentOperationsRoleCommandInput,
  DisassociateEnvironmentOperationsRoleCommandOutput,
} from "../commands/DisassociateEnvironmentOperationsRoleCommand";
import {
  ListAvailableSolutionStacksCommandInput,
  ListAvailableSolutionStacksCommandOutput,
} from "../commands/ListAvailableSolutionStacksCommand";
import {
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
} from "../commands/ListPlatformBranchesCommand";
import {
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
} from "../commands/ListPlatformVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput } from "../commands/RebuildEnvironmentCommand";
import {
  RequestEnvironmentInfoCommandInput,
  RequestEnvironmentInfoCommandOutput,
} from "../commands/RequestEnvironmentInfoCommand";
import { RestartAppServerCommandInput, RestartAppServerCommandOutput } from "../commands/RestartAppServerCommand";
import {
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput,
} from "../commands/RetrieveEnvironmentInfoCommand";
import {
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput,
} from "../commands/SwapEnvironmentCNAMEsCommand";
import {
  TerminateEnvironmentCommandInput,
  TerminateEnvironmentCommandOutput,
} from "../commands/TerminateEnvironmentCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
} from "../commands/UpdateApplicationResourceLifecycleCommand";
import {
  UpdateApplicationVersionCommandInput,
  UpdateApplicationVersionCommandOutput,
} from "../commands/UpdateApplicationVersionCommand";
import {
  UpdateConfigurationTemplateCommandInput,
  UpdateConfigurationTemplateCommandOutput,
} from "../commands/UpdateConfigurationTemplateCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateTagsForResourceCommandInput,
  UpdateTagsForResourceCommandOutput,
} from "../commands/UpdateTagsForResourceCommand";
import {
  ValidateConfigurationSettingsCommandInput,
  ValidateConfigurationSettingsCommandOutput,
} from "../commands/ValidateConfigurationSettingsCommand";
import { ElasticBeanstalkSyntheticServiceException as __BaseException } from "../models/ElasticBeanstalkSyntheticServiceException";
import {
  AbortEnvironmentUpdateMessage,
  ApplicationDescription,
  ApplicationDescriptionMessage,
  ApplicationDescriptionsMessage,
  ApplicationMetrics,
  ApplicationResourceLifecycleConfig,
  ApplicationResourceLifecycleDescriptionMessage,
  ApplicationVersionDescription,
  ApplicationVersionDescriptionMessage,
  ApplicationVersionDescriptionsMessage,
  ApplicationVersionLifecycleConfig,
  ApplyEnvironmentManagedActionRequest,
  ApplyEnvironmentManagedActionResult,
  AssociateEnvironmentOperationsRoleMessage,
  AutoScalingGroup,
  BuildConfiguration,
  Builder,
  CheckDNSAvailabilityMessage,
  CheckDNSAvailabilityResultMessage,
  CodeBuildNotInServiceRegionException,
  ComposeEnvironmentsMessage,
  ConfigurationOptionDescription,
  ConfigurationOptionsDescription,
  ConfigurationOptionSetting,
  ConfigurationSettingsDescription,
  ConfigurationSettingsDescriptions,
  ConfigurationSettingsValidationMessages,
  CPUUtilization,
  CreateApplicationMessage,
  CreateApplicationVersionMessage,
  CreateConfigurationTemplateMessage,
  CreateEnvironmentMessage,
  CreatePlatformVersionRequest,
  CreatePlatformVersionResult,
  CreateStorageLocationResultMessage,
  CustomAmi,
  DeleteApplicationMessage,
  DeleteApplicationVersionMessage,
  DeleteConfigurationTemplateMessage,
  DeleteEnvironmentConfigurationMessage,
  DeletePlatformVersionRequest,
  DeletePlatformVersionResult,
  Deployment,
  DescribeAccountAttributesResult,
  DescribeApplicationsMessage,
  DescribeApplicationVersionsMessage,
  DescribeConfigurationOptionsMessage,
  DescribeConfigurationSettingsMessage,
  DescribeEnvironmentHealthRequest,
  DescribeEnvironmentHealthResult,
  DescribeEnvironmentManagedActionHistoryRequest,
  DescribeEnvironmentManagedActionHistoryResult,
  DescribeEnvironmentManagedActionsRequest,
  DescribeEnvironmentManagedActionsResult,
  DescribeEnvironmentResourcesMessage,
  DescribeEnvironmentsMessage,
  DescribeEventsMessage,
  DescribeInstancesHealthRequest,
  DescribeInstancesHealthResult,
  DescribePlatformVersionRequest,
  DescribePlatformVersionResult,
  DisassociateEnvironmentOperationsRoleMessage,
  ElasticBeanstalkServiceException,
  EnvironmentDescription,
  EnvironmentDescriptionsMessage,
  EnvironmentHealthAttribute,
  EnvironmentInfoDescription,
  EnvironmentLink,
  EnvironmentResourceDescription,
  EnvironmentResourceDescriptionsMessage,
  EnvironmentResourcesDescription,
  EnvironmentTier,
  EventDescription,
  EventDescriptionsMessage,
  Instance,
  InstanceHealthSummary,
  InstancesHealthAttribute,
  InsufficientPrivilegesException,
  InvalidRequestException,
  Latency,
  LaunchConfiguration,
  LaunchTemplate,
  ListAvailableSolutionStacksResultMessage,
  Listener,
  ListPlatformBranchesRequest,
  ListPlatformBranchesResult,
  ListPlatformVersionsRequest,
  ListPlatformVersionsResult,
  ListTagsForResourceMessage,
  LoadBalancer,
  LoadBalancerDescription,
  ManagedAction,
  ManagedActionHistoryItem,
  ManagedActionInvalidStateException,
  MaxAgeRule,
  MaxCountRule,
  OperationInProgressException,
  OptionRestrictionRegex,
  OptionSpecification,
  PlatformBranchSummary,
  PlatformDescription,
  PlatformFilter,
  PlatformFramework,
  PlatformProgrammingLanguage,
  PlatformSummary,
  PlatformVersionStillReferencedException,
  Queue,
  RebuildEnvironmentMessage,
  RequestEnvironmentInfoMessage,
  ResourceNotFoundException,
  ResourceQuota,
  ResourceQuotas,
  ResourceTagsDescriptionMessage,
  ResourceTypeNotSupportedException,
  RestartAppServerMessage,
  RetrieveEnvironmentInfoMessage,
  RetrieveEnvironmentInfoResultMessage,
  S3Location,
  S3LocationNotInServiceRegionException,
  S3SubscriptionRequiredException,
  SearchFilter,
  SingleInstanceHealth,
  SolutionStackDescription,
  SourceBuildInformation,
  SourceBundleDeletionException,
  SourceConfiguration,
  StatusCodes,
  SwapEnvironmentCNAMEsMessage,
  SystemStatus,
  Tag,
  TerminateEnvironmentMessage,
  TooManyApplicationsException,
  TooManyApplicationVersionsException,
  TooManyBucketsException,
  TooManyConfigurationTemplatesException,
  TooManyEnvironmentsException,
  TooManyPlatformsException,
  TooManyTagsException,
  Trigger,
  UpdateApplicationMessage,
  UpdateApplicationResourceLifecycleMessage,
  UpdateApplicationVersionMessage,
  UpdateConfigurationTemplateMessage,
  UpdateEnvironmentMessage,
  UpdateTagsForResourceMessage,
  ValidateConfigurationSettingsMessage,
  ValidationMessage,
} from "../models/models_0";

/**
 * serializeAws_queryAbortEnvironmentUpdateCommand
 */
export const se_AbortEnvironmentUpdateCommand = async (
  input: AbortEnvironmentUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AbortEnvironmentUpdateMessage(input, context),
    [_A]: _AEU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryApplyEnvironmentManagedActionCommand
 */
export const se_ApplyEnvironmentManagedActionCommand = async (
  input: ApplyEnvironmentManagedActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ApplyEnvironmentManagedActionRequest(input, context),
    [_A]: _AEMA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAssociateEnvironmentOperationsRoleCommand
 */
export const se_AssociateEnvironmentOperationsRoleCommand = async (
  input: AssociateEnvironmentOperationsRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AssociateEnvironmentOperationsRoleMessage(input, context),
    [_A]: _AEOR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCheckDNSAvailabilityCommand
 */
export const se_CheckDNSAvailabilityCommand = async (
  input: CheckDNSAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CheckDNSAvailabilityMessage(input, context),
    [_A]: _CDNSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryComposeEnvironmentsCommand
 */
export const se_ComposeEnvironmentsCommand = async (
  input: ComposeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ComposeEnvironmentsMessage(input, context),
    [_A]: _CE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateApplicationMessage(input, context),
    [_A]: _CA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateApplicationVersionCommand
 */
export const se_CreateApplicationVersionCommand = async (
  input: CreateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateApplicationVersionMessage(input, context),
    [_A]: _CAV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateConfigurationTemplateCommand
 */
export const se_CreateConfigurationTemplateCommand = async (
  input: CreateConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateConfigurationTemplateMessage(input, context),
    [_A]: _CCT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateEnvironmentMessage(input, context),
    [_A]: _CEr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreatePlatformVersionCommand
 */
export const se_CreatePlatformVersionCommand = async (
  input: CreatePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreatePlatformVersionRequest(input, context),
    [_A]: _CPV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateStorageLocationCommand
 */
export const se_CreateStorageLocationCommand = async (
  input: CreateStorageLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _CSL,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteApplicationMessage(input, context),
    [_A]: _DA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteApplicationVersionCommand
 */
export const se_DeleteApplicationVersionCommand = async (
  input: DeleteApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteApplicationVersionMessage(input, context),
    [_A]: _DAV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteConfigurationTemplateCommand
 */
export const se_DeleteConfigurationTemplateCommand = async (
  input: DeleteConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteConfigurationTemplateMessage(input, context),
    [_A]: _DCT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteEnvironmentConfigurationCommand
 */
export const se_DeleteEnvironmentConfigurationCommand = async (
  input: DeleteEnvironmentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteEnvironmentConfigurationMessage(input, context),
    [_A]: _DEC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeletePlatformVersionCommand
 */
export const se_DeletePlatformVersionCommand = async (
  input: DeletePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeletePlatformVersionRequest(input, context),
    [_A]: _DPV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAccountAttributesCommand
 */
export const se_DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _DAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeApplicationsCommand
 */
export const se_DescribeApplicationsCommand = async (
  input: DescribeApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeApplicationsMessage(input, context),
    [_A]: _DAe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeApplicationVersionsCommand
 */
export const se_DescribeApplicationVersionsCommand = async (
  input: DescribeApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeApplicationVersionsMessage(input, context),
    [_A]: _DAVe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeConfigurationOptionsCommand
 */
export const se_DescribeConfigurationOptionsCommand = async (
  input: DescribeConfigurationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeConfigurationOptionsMessage(input, context),
    [_A]: _DCO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeConfigurationSettingsCommand
 */
export const se_DescribeConfigurationSettingsCommand = async (
  input: DescribeConfigurationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeConfigurationSettingsMessage(input, context),
    [_A]: _DCS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEnvironmentHealthCommand
 */
export const se_DescribeEnvironmentHealthCommand = async (
  input: DescribeEnvironmentHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEnvironmentHealthRequest(input, context),
    [_A]: _DEH,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand
 */
export const se_DescribeEnvironmentManagedActionHistoryCommand = async (
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEnvironmentManagedActionHistoryRequest(input, context),
    [_A]: _DEMAH,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEnvironmentManagedActionsCommand
 */
export const se_DescribeEnvironmentManagedActionsCommand = async (
  input: DescribeEnvironmentManagedActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEnvironmentManagedActionsRequest(input, context),
    [_A]: _DEMA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEnvironmentResourcesCommand
 */
export const se_DescribeEnvironmentResourcesCommand = async (
  input: DescribeEnvironmentResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEnvironmentResourcesMessage(input, context),
    [_A]: _DER,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEnvironmentsCommand
 */
export const se_DescribeEnvironmentsCommand = async (
  input: DescribeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEnvironmentsMessage(input, context),
    [_A]: _DE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeEventsCommand
 */
export const se_DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEventsMessage(input, context),
    [_A]: _DEe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeInstancesHealthCommand
 */
export const se_DescribeInstancesHealthCommand = async (
  input: DescribeInstancesHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeInstancesHealthRequest(input, context),
    [_A]: _DIH,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribePlatformVersionCommand
 */
export const se_DescribePlatformVersionCommand = async (
  input: DescribePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribePlatformVersionRequest(input, context),
    [_A]: _DPVe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisassociateEnvironmentOperationsRoleCommand
 */
export const se_DisassociateEnvironmentOperationsRoleCommand = async (
  input: DisassociateEnvironmentOperationsRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisassociateEnvironmentOperationsRoleMessage(input, context),
    [_A]: _DEOR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListAvailableSolutionStacksCommand
 */
export const se_ListAvailableSolutionStacksCommand = async (
  input: ListAvailableSolutionStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _LASS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListPlatformBranchesCommand
 */
export const se_ListPlatformBranchesCommand = async (
  input: ListPlatformBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListPlatformBranchesRequest(input, context),
    [_A]: _LPB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListPlatformVersionsCommand
 */
export const se_ListPlatformVersionsCommand = async (
  input: ListPlatformVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListPlatformVersionsRequest(input, context),
    [_A]: _LPV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTagsForResourceMessage(input, context),
    [_A]: _LTFR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRebuildEnvironmentCommand
 */
export const se_RebuildEnvironmentCommand = async (
  input: RebuildEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RebuildEnvironmentMessage(input, context),
    [_A]: _RE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRequestEnvironmentInfoCommand
 */
export const se_RequestEnvironmentInfoCommand = async (
  input: RequestEnvironmentInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RequestEnvironmentInfoMessage(input, context),
    [_A]: _REI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRestartAppServerCommand
 */
export const se_RestartAppServerCommand = async (
  input: RestartAppServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RestartAppServerMessage(input, context),
    [_A]: _RAS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRetrieveEnvironmentInfoCommand
 */
export const se_RetrieveEnvironmentInfoCommand = async (
  input: RetrieveEnvironmentInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RetrieveEnvironmentInfoMessage(input, context),
    [_A]: _REIe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySwapEnvironmentCNAMEsCommand
 */
export const se_SwapEnvironmentCNAMEsCommand = async (
  input: SwapEnvironmentCNAMEsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SwapEnvironmentCNAMEsMessage(input, context),
    [_A]: _SECNAME,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTerminateEnvironmentCommand
 */
export const se_TerminateEnvironmentCommand = async (
  input: TerminateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TerminateEnvironmentMessage(input, context),
    [_A]: _TE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateApplicationMessage(input, context),
    [_A]: _UA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateApplicationResourceLifecycleCommand
 */
export const se_UpdateApplicationResourceLifecycleCommand = async (
  input: UpdateApplicationResourceLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateApplicationResourceLifecycleMessage(input, context),
    [_A]: _UARL,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateApplicationVersionCommand
 */
export const se_UpdateApplicationVersionCommand = async (
  input: UpdateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateApplicationVersionMessage(input, context),
    [_A]: _UAV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateConfigurationTemplateCommand
 */
export const se_UpdateConfigurationTemplateCommand = async (
  input: UpdateConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationTemplateMessage(input, context),
    [_A]: _UCT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateEnvironmentMessage(input, context),
    [_A]: _UE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateTagsForResourceCommand
 */
export const se_UpdateTagsForResourceCommand = async (
  input: UpdateTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateTagsForResourceMessage(input, context),
    [_A]: _UTFR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryValidateConfigurationSettingsCommand
 */
export const se_ValidateConfigurationSettingsCommand = async (
  input: ValidateConfigurationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ValidateConfigurationSettingsMessage(input, context),
    [_A]: _VCS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAbortEnvironmentUpdateCommand
 */
export const de_AbortEnvironmentUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortEnvironmentUpdateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AbortEnvironmentUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryApplyEnvironmentManagedActionCommand
 */
export const de_ApplyEnvironmentManagedActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyEnvironmentManagedActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplyEnvironmentManagedActionResult(data.ApplyEnvironmentManagedActionResult, context);
  const response: ApplyEnvironmentManagedActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAssociateEnvironmentOperationsRoleCommand
 */
export const de_AssociateEnvironmentOperationsRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEnvironmentOperationsRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateEnvironmentOperationsRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCheckDNSAvailabilityCommand
 */
export const de_CheckDNSAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDNSAvailabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CheckDNSAvailabilityResultMessage(data.CheckDNSAvailabilityResult, context);
  const response: CheckDNSAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryComposeEnvironmentsCommand
 */
export const de_ComposeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ComposeEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnvironmentDescriptionsMessage(data.ComposeEnvironmentsResult, context);
  const response: ComposeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplicationDescriptionMessage(data.CreateApplicationResult, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateApplicationVersionCommand
 */
export const de_CreateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplicationVersionDescriptionMessage(data.CreateApplicationVersionResult, context);
  const response: CreateApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateConfigurationTemplateCommand
 */
export const de_CreateConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfigurationSettingsDescription(data.CreateConfigurationTemplateResult, context);
  const response: CreateConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnvironmentDescription(data.CreateEnvironmentResult, context);
  const response: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreatePlatformVersionCommand
 */
export const de_CreatePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePlatformVersionResult(data.CreatePlatformVersionResult, context);
  const response: CreatePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateStorageLocationCommand
 */
export const de_CreateStorageLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStorageLocationResultMessage(data.CreateStorageLocationResult, context);
  const response: CreateStorageLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteApplicationVersionCommand
 */
export const de_DeleteApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteConfigurationTemplateCommand
 */
export const de_DeleteConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEnvironmentConfigurationCommand
 */
export const de_DeleteEnvironmentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEnvironmentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePlatformVersionCommand
 */
export const de_DeletePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePlatformVersionResult(data.DeletePlatformVersionResult, context);
  const response: DeletePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountAttributesResult(data.DescribeAccountAttributesResult, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeApplicationsCommand
 */
export const de_DescribeApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplicationDescriptionsMessage(data.DescribeApplicationsResult, context);
  const response: DescribeApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeApplicationVersionsCommand
 */
export const de_DescribeApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplicationVersionDescriptionsMessage(data.DescribeApplicationVersionsResult, context);
  const response: DescribeApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeConfigurationOptionsCommand
 */
export const de_DescribeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfigurationOptionsDescription(data.DescribeConfigurationOptionsResult, context);
  const response: DescribeConfigurationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeConfigurationSettingsCommand
 */
export const de_DescribeConfigurationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfigurationSettingsDescriptions(data.DescribeConfigurationSettingsResult, context);
  const response: DescribeConfigurationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEnvironmentHealthCommand
 */
export const de_DescribeEnvironmentHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEnvironmentHealthResult(data.DescribeEnvironmentHealthResult, context);
  const response: DescribeEnvironmentHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand
 */
export const de_DescribeEnvironmentManagedActionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEnvironmentManagedActionHistoryResult(
    data.DescribeEnvironmentManagedActionHistoryResult,
    context
  );
  const response: DescribeEnvironmentManagedActionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEnvironmentManagedActionsCommand
 */
export const de_DescribeEnvironmentManagedActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEnvironmentManagedActionsResult(data.DescribeEnvironmentManagedActionsResult, context);
  const response: DescribeEnvironmentManagedActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEnvironmentResourcesCommand
 */
export const de_DescribeEnvironmentResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnvironmentResourceDescriptionsMessage(data.DescribeEnvironmentResourcesResult, context);
  const response: DescribeEnvironmentResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEnvironmentsCommand
 */
export const de_DescribeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnvironmentDescriptionsMessage(data.DescribeEnvironmentsResult, context);
  const response: DescribeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EventDescriptionsMessage(data.DescribeEventsResult, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeInstancesHealthCommand
 */
export const de_DescribeInstancesHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstancesHealthResult(data.DescribeInstancesHealthResult, context);
  const response: DescribeInstancesHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribePlatformVersionCommand
 */
export const de_DescribePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePlatformVersionResult(data.DescribePlatformVersionResult, context);
  const response: DescribePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand
 */
export const de_DisassociateEnvironmentOperationsRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEnvironmentOperationsRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateEnvironmentOperationsRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryListAvailableSolutionStacksCommand
 */
export const de_ListAvailableSolutionStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableSolutionStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAvailableSolutionStacksResultMessage(data.ListAvailableSolutionStacksResult, context);
  const response: ListAvailableSolutionStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListPlatformBranchesCommand
 */
export const de_ListPlatformBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformBranchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPlatformBranchesResult(data.ListPlatformBranchesResult, context);
  const response: ListPlatformBranchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListPlatformVersionsCommand
 */
export const de_ListPlatformVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPlatformVersionsResult(data.ListPlatformVersionsResult, context);
  const response: ListPlatformVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResourceTagsDescriptionMessage(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRebuildEnvironmentCommand
 */
export const de_RebuildEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RebuildEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRequestEnvironmentInfoCommand
 */
export const de_RequestEnvironmentInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestEnvironmentInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RequestEnvironmentInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRestartAppServerCommand
 */
export const de_RestartAppServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartAppServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RestartAppServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRetrieveEnvironmentInfoCommand
 */
export const de_RetrieveEnvironmentInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveEnvironmentInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetrieveEnvironmentInfoResultMessage(data.RetrieveEnvironmentInfoResult, context);
  const response: RetrieveEnvironmentInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySwapEnvironmentCNAMEsCommand
 */
export const de_SwapEnvironmentCNAMEsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwapEnvironmentCNAMEsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SwapEnvironmentCNAMEsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTerminateEnvironmentCommand
 */
export const de_TerminateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnvironmentDescription(data.TerminateEnvironmentResult, context);
  const response: TerminateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplicationDescriptionMessage(data.UpdateApplicationResult, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateApplicationResourceLifecycleCommand
 */
export const de_UpdateApplicationResourceLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationResourceLifecycleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplicationResourceLifecycleDescriptionMessage(data.UpdateApplicationResourceLifecycleResult, context);
  const response: UpdateApplicationResourceLifecycleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateApplicationVersionCommand
 */
export const de_UpdateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplicationVersionDescriptionMessage(data.UpdateApplicationVersionResult, context);
  const response: UpdateApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateConfigurationTemplateCommand
 */
export const de_UpdateConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfigurationSettingsDescription(data.UpdateConfigurationTemplateResult, context);
  const response: UpdateConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnvironmentDescription(data.UpdateEnvironmentResult, context);
  const response: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateTagsForResourceCommand
 */
export const de_UpdateTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryValidateConfigurationSettingsCommand
 */
export const de_ValidateConfigurationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfigurationSettingsValidationMessages(data.ValidateConfigurationSettingsResult, context);
  const response: ValidateConfigurationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
    case "ManagedActionInvalidStateException":
    case "com.amazonaws.elasticbeanstalk#ManagedActionInvalidStateException":
      throw await de_ManagedActionInvalidStateExceptionRes(parsedOutput, context);
    case "TooManyEnvironmentsException":
    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
      throw await de_TooManyEnvironmentsExceptionRes(parsedOutput, context);
    case "TooManyApplicationsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
      throw await de_TooManyApplicationsExceptionRes(parsedOutput, context);
    case "CodeBuildNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#CodeBuildNotInServiceRegionException":
      throw await de_CodeBuildNotInServiceRegionExceptionRes(parsedOutput, context);
    case "S3LocationNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
      throw await de_S3LocationNotInServiceRegionExceptionRes(parsedOutput, context);
    case "TooManyApplicationVersionsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationVersionsException":
      throw await de_TooManyApplicationVersionsExceptionRes(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await de_TooManyBucketsExceptionRes(parsedOutput, context);
    case "TooManyConfigurationTemplatesException":
    case "com.amazonaws.elasticbeanstalk#TooManyConfigurationTemplatesException":
      throw await de_TooManyConfigurationTemplatesExceptionRes(parsedOutput, context);
    case "TooManyPlatformsException":
    case "com.amazonaws.elasticbeanstalk#TooManyPlatformsException":
      throw await de_TooManyPlatformsExceptionRes(parsedOutput, context);
    case "S3SubscriptionRequiredException":
    case "com.amazonaws.elasticbeanstalk#S3SubscriptionRequiredException":
      throw await de_S3SubscriptionRequiredExceptionRes(parsedOutput, context);
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "SourceBundleDeletionFailure":
    case "com.amazonaws.elasticbeanstalk#SourceBundleDeletionException":
      throw await de_SourceBundleDeletionExceptionRes(parsedOutput, context);
    case "PlatformVersionStillReferencedException":
    case "com.amazonaws.elasticbeanstalk#PlatformVersionStillReferencedException":
      throw await de_PlatformVersionStillReferencedExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
      throw await de_ResourceTypeNotSupportedExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.elasticbeanstalk#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_queryCodeBuildNotInServiceRegionExceptionRes
 */
const de_CodeBuildNotInServiceRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeBuildNotInServiceRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CodeBuildNotInServiceRegionException(body.Error, context);
  const exception = new CodeBuildNotInServiceRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryElasticBeanstalkServiceExceptionRes
 */
const de_ElasticBeanstalkServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ElasticBeanstalkServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ElasticBeanstalkServiceException(body.Error, context);
  const exception = new ElasticBeanstalkServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientPrivilegesExceptionRes
 */
const de_InsufficientPrivilegesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientPrivilegesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientPrivilegesException(body.Error, context);
  const exception = new InsufficientPrivilegesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body.Error, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryManagedActionInvalidStateExceptionRes
 */
const de_ManagedActionInvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedActionInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ManagedActionInvalidStateException(body.Error, context);
  const exception = new ManagedActionInvalidStateException({
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
 * deserializeAws_queryPlatformVersionStillReferencedExceptionRes
 */
const de_PlatformVersionStillReferencedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformVersionStillReferencedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PlatformVersionStillReferencedException(body.Error, context);
  const exception = new PlatformVersionStillReferencedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body.Error, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceTypeNotSupportedExceptionRes
 */
const de_ResourceTypeNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceTypeNotSupportedException(body.Error, context);
  const exception = new ResourceTypeNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryS3LocationNotInServiceRegionExceptionRes
 */
const de_S3LocationNotInServiceRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3LocationNotInServiceRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_S3LocationNotInServiceRegionException(body.Error, context);
  const exception = new S3LocationNotInServiceRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryS3SubscriptionRequiredExceptionRes
 */
const de_S3SubscriptionRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3SubscriptionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_S3SubscriptionRequiredException(body.Error, context);
  const exception = new S3SubscriptionRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySourceBundleDeletionExceptionRes
 */
const de_SourceBundleDeletionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceBundleDeletionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SourceBundleDeletionException(body.Error, context);
  const exception = new SourceBundleDeletionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyApplicationsExceptionRes
 */
const de_TooManyApplicationsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyApplicationsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyApplicationsException(body.Error, context);
  const exception = new TooManyApplicationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyApplicationVersionsExceptionRes
 */
const de_TooManyApplicationVersionsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyApplicationVersionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyApplicationVersionsException(body.Error, context);
  const exception = new TooManyApplicationVersionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyBucketsExceptionRes
 */
const de_TooManyBucketsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyBucketsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyBucketsException(body.Error, context);
  const exception = new TooManyBucketsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyConfigurationTemplatesExceptionRes
 */
const de_TooManyConfigurationTemplatesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyConfigurationTemplatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyConfigurationTemplatesException(body.Error, context);
  const exception = new TooManyConfigurationTemplatesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyEnvironmentsExceptionRes
 */
const de_TooManyEnvironmentsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEnvironmentsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyEnvironmentsException(body.Error, context);
  const exception = new TooManyEnvironmentsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyPlatformsExceptionRes
 */
const de_TooManyPlatformsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPlatformsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyPlatformsException(body.Error, context);
  const exception = new TooManyPlatformsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body.Error, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAbortEnvironmentUpdateMessage
 */
const se_AbortEnvironmentUpdateMessage = (input: AbortEnvironmentUpdateMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryApplicationNamesList
 */
const se_ApplicationNamesList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryApplicationResourceLifecycleConfig
 */
const se_ApplicationResourceLifecycleConfig = (
  input: ApplicationResourceLifecycleConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_SR] != null) {
    entries[_SR] = input[_SR];
  }
  if (input[_VLC] != null) {
    const memberEntries = se_ApplicationVersionLifecycleConfig(input[_VLC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VersionLifecycleConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryApplicationVersionLifecycleConfig
 */
const se_ApplicationVersionLifecycleConfig = (
  input: ApplicationVersionLifecycleConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_MCR] != null) {
    const memberEntries = se_MaxCountRule(input[_MCR], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MaxCountRule.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MAR] != null) {
    const memberEntries = se_MaxAgeRule(input[_MAR], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MaxAgeRule.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryApplyEnvironmentManagedActionRequest
 */
const se_ApplyEnvironmentManagedActionRequest = (
  input: ApplyEnvironmentManagedActionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  return entries;
};

/**
 * serializeAws_queryAssociateEnvironmentOperationsRoleMessage
 */
const se_AssociateEnvironmentOperationsRoleMessage = (
  input: AssociateEnvironmentOperationsRoleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_OR] != null) {
    entries[_OR] = input[_OR];
  }
  return entries;
};

/**
 * serializeAws_queryBuildConfiguration
 */
const se_BuildConfiguration = (input: BuildConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AN] != null) {
    entries[_AN] = input[_AN];
  }
  if (input[_CBSR] != null) {
    entries[_CBSR] = input[_CBSR];
  }
  if (input[_CT] != null) {
    entries[_CT] = input[_CT];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_TIM] != null) {
    entries[_TIM] = input[_TIM];
  }
  return entries;
};

/**
 * serializeAws_queryCheckDNSAvailabilityMessage
 */
const se_CheckDNSAvailabilityMessage = (input: CheckDNSAvailabilityMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CNAMEP] != null) {
    entries[_CNAMEP] = input[_CNAMEP];
  }
  return entries;
};

/**
 * serializeAws_queryComposeEnvironmentsMessage
 */
const se_ComposeEnvironmentsMessage = (input: ComposeEnvironmentsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_VL] != null) {
    const memberEntries = se_VersionLabels(input[_VL], context);
    if (input[_VL]?.length === 0) {
      entries.VersionLabels = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VersionLabels.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryConfigurationOptionSetting
 */
const se_ConfigurationOptionSetting = (input: ConfigurationOptionSetting, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_ON] != null) {
    entries[_ON] = input[_ON];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_queryConfigurationOptionSettingsList
 */
const se_ConfigurationOptionSettingsList = (input: ConfigurationOptionSetting[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ConfigurationOptionSetting(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCreateApplicationMessage
 */
const se_CreateApplicationMessage = (input: CreateApplicationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_RLC] != null) {
    const memberEntries = se_ApplicationResourceLifecycleConfig(input[_RLC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceLifecycleConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_Tags(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateApplicationVersionMessage
 */
const se_CreateApplicationVersionMessage = (input: CreateApplicationVersionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_VLe] != null) {
    entries[_VLe] = input[_VLe];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_SBI] != null) {
    const memberEntries = se_SourceBuildInformation(input[_SBI], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceBuildInformation.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SB] != null) {
    const memberEntries = se_S3Location(input[_SB], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceBundle.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BC] != null) {
    const memberEntries = se_BuildConfiguration(input[_BC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BuildConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ACA] != null) {
    entries[_ACA] = input[_ACA];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_T] != null) {
    const memberEntries = se_Tags(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateConfigurationTemplateMessage
 */
const se_CreateConfigurationTemplateMessage = (
  input: CreateConfigurationTemplateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_SC] != null) {
    const memberEntries = se_SourceConfiguration(input[_SC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_OS] != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input[_OS], context);
    if (input[_OS]?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_Tags(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateEnvironmentMessage
 */
const se_CreateEnvironmentMessage = (input: CreateEnvironmentMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_CNAMEP] != null) {
    entries[_CNAMEP] = input[_CNAMEP];
  }
  if (input[_Ti] != null) {
    const memberEntries = se_EnvironmentTier(input[_Ti], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tier.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_Tags(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VLe] != null) {
    entries[_VLe] = input[_VLe];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_OS] != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input[_OS], context);
    if (input[_OS]?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OTR] != null) {
    const memberEntries = se_OptionsSpecifierList(input[_OTR], context);
    if (input[_OTR]?.length === 0) {
      entries.OptionsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OR] != null) {
    entries[_OR] = input[_OR];
  }
  return entries;
};

/**
 * serializeAws_queryCreatePlatformVersionRequest
 */
const se_CreatePlatformVersionRequest = (input: CreatePlatformVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_PV] != null) {
    entries[_PV] = input[_PV];
  }
  if (input[_PDB] != null) {
    const memberEntries = se_S3Location(input[_PDB], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PlatformDefinitionBundle.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_OS] != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input[_OS], context);
    if (input[_OS]?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_Tags(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteApplicationMessage
 */
const se_DeleteApplicationMessage = (input: DeleteApplicationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_TEBF] != null) {
    entries[_TEBF] = input[_TEBF];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteApplicationVersionMessage
 */
const se_DeleteApplicationVersionMessage = (input: DeleteApplicationVersionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_VLe] != null) {
    entries[_VLe] = input[_VLe];
  }
  if (input[_DSB] != null) {
    entries[_DSB] = input[_DSB];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteConfigurationTemplateMessage
 */
const se_DeleteConfigurationTemplateMessage = (
  input: DeleteConfigurationTemplateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteEnvironmentConfigurationMessage
 */
const se_DeleteEnvironmentConfigurationMessage = (
  input: DeleteEnvironmentConfigurationMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryDeletePlatformVersionRequest
 */
const se_DeletePlatformVersionRequest = (input: DeletePlatformVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeApplicationsMessage
 */
const se_DescribeApplicationsMessage = (input: DescribeApplicationsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANpp] != null) {
    const memberEntries = se_ApplicationNamesList(input[_ANpp], context);
    if (input[_ANpp]?.length === 0) {
      entries.ApplicationNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ApplicationNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeApplicationVersionsMessage
 */
const se_DescribeApplicationVersionsMessage = (
  input: DescribeApplicationVersionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_VL] != null) {
    const memberEntries = se_VersionLabelsList(input[_VL], context);
    if (input[_VL]?.length === 0) {
      entries.VersionLabels = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VersionLabels.${key}`;
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
 * serializeAws_queryDescribeConfigurationOptionsMessage
 */
const se_DescribeConfigurationOptionsMessage = (
  input: DescribeConfigurationOptionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_O] != null) {
    const memberEntries = se_OptionsSpecifierList(input[_O], context);
    if (input[_O]?.length === 0) {
      entries.Options = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Options.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeConfigurationSettingsMessage
 */
const se_DescribeConfigurationSettingsMessage = (
  input: DescribeConfigurationSettingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEnvironmentHealthRequest
 */
const se_DescribeEnvironmentHealthRequest = (input: DescribeEnvironmentHealthRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_ANt] != null) {
    const memberEntries = se_EnvironmentHealthAttributes(input[_ANt], context);
    if (input[_ANt]?.length === 0) {
      entries.AttributeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest
 */
const se_DescribeEnvironmentManagedActionHistoryRequest = (
  input: DescribeEnvironmentManagedActionHistoryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEnvironmentManagedActionsRequest
 */
const se_DescribeEnvironmentManagedActionsRequest = (
  input: DescribeEnvironmentManagedActionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEnvironmentResourcesMessage
 */
const se_DescribeEnvironmentResourcesMessage = (
  input: DescribeEnvironmentResourcesMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEnvironmentsMessage
 */
const se_DescribeEnvironmentsMessage = (input: DescribeEnvironmentsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_VLe] != null) {
    entries[_VLe] = input[_VLe];
  }
  if (input[_EIn] != null) {
    const memberEntries = se_EnvironmentIdList(input[_EIn], context);
    if (input[_EIn]?.length === 0) {
      entries.EnvironmentIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnvironmentIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ENn] != null) {
    const memberEntries = se_EnvironmentNamesList(input[_ENn], context);
    if (input[_ENn]?.length === 0) {
      entries.EnvironmentNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnvironmentNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ID] != null) {
    entries[_ID] = input[_ID];
  }
  if (input[_IDBT] != null) {
    entries[_IDBT] = __serializeDateTime(input[_IDBT]);
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
 * serializeAws_queryDescribeEventsMessage
 */
const se_DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_VLe] != null) {
    entries[_VLe] = input[_VLe];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_RI] != null) {
    entries[_RI] = input[_RI];
  }
  if (input[_Se] != null) {
    entries[_Se] = input[_Se];
  }
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
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
 * serializeAws_queryDescribeInstancesHealthRequest
 */
const se_DescribeInstancesHealthRequest = (input: DescribeInstancesHealthRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_ANt] != null) {
    const memberEntries = se_InstancesHealthAttributes(input[_ANt], context);
    if (input[_ANt]?.length === 0) {
      entries.AttributeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribePlatformVersionRequest
 */
const se_DescribePlatformVersionRequest = (input: DescribePlatformVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryDisassociateEnvironmentOperationsRoleMessage
 */
const se_DisassociateEnvironmentOperationsRoleMessage = (
  input: DisassociateEnvironmentOperationsRoleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryEnvironmentHealthAttributes
 */
const se_EnvironmentHealthAttributes = (input: EnvironmentHealthAttribute[], context: __SerdeContext): any => {
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
 * serializeAws_queryEnvironmentIdList
 */
const se_EnvironmentIdList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryEnvironmentNamesList
 */
const se_EnvironmentNamesList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryEnvironmentTier
 */
const se_EnvironmentTier = (input: EnvironmentTier, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  if (input[_Ty] != null) {
    entries[_Ty] = input[_Ty];
  }
  if (input[_V] != null) {
    entries[_V] = input[_V];
  }
  return entries;
};

/**
 * serializeAws_queryInstancesHealthAttributes
 */
const se_InstancesHealthAttributes = (input: InstancesHealthAttribute[], context: __SerdeContext): any => {
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
 * serializeAws_queryListPlatformBranchesRequest
 */
const se_ListPlatformBranchesRequest = (input: ListPlatformBranchesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_F] != null) {
    const memberEntries = se_SearchFilters(input[_F], context);
    if (input[_F]?.length === 0) {
      entries.Filters = [];
    }
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
 * serializeAws_queryListPlatformVersionsRequest
 */
const se_ListPlatformVersionsRequest = (input: ListPlatformVersionsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_F] != null) {
    const memberEntries = se_PlatformFilters(input[_F], context);
    if (input[_F]?.length === 0) {
      entries.Filters = [];
    }
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
 * serializeAws_queryListTagsForResourceMessage
 */
const se_ListTagsForResourceMessage = (input: ListTagsForResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  return entries;
};

/**
 * serializeAws_queryMaxAgeRule
 */
const se_MaxAgeRule = (input: MaxAgeRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MAID] != null) {
    entries[_MAID] = input[_MAID];
  }
  if (input[_DSFS] != null) {
    entries[_DSFS] = input[_DSFS];
  }
  return entries;
};

/**
 * serializeAws_queryMaxCountRule
 */
const se_MaxCountRule = (input: MaxCountRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MC] != null) {
    entries[_MC] = input[_MC];
  }
  if (input[_DSFS] != null) {
    entries[_DSFS] = input[_DSFS];
  }
  return entries;
};

/**
 * serializeAws_queryOptionSpecification
 */
const se_OptionSpecification = (input: OptionSpecification, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_ON] != null) {
    entries[_ON] = input[_ON];
  }
  return entries;
};

/**
 * serializeAws_queryOptionsSpecifierList
 */
const se_OptionsSpecifierList = (input: OptionSpecification[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_OptionSpecification(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPlatformFilter
 */
const se_PlatformFilter = (input: PlatformFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ty] != null) {
    entries[_Ty] = input[_Ty];
  }
  if (input[_Op] != null) {
    entries[_Op] = input[_Op];
  }
  if (input[_Val] != null) {
    const memberEntries = se_PlatformFilterValueList(input[_Val], context);
    if (input[_Val]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPlatformFilters
 */
const se_PlatformFilters = (input: PlatformFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PlatformFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPlatformFilterValueList
 */
const se_PlatformFilterValueList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryRebuildEnvironmentMessage
 */
const se_RebuildEnvironmentMessage = (input: RebuildEnvironmentMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryRequestEnvironmentInfoMessage
 */
const se_RequestEnvironmentInfoMessage = (input: RequestEnvironmentInfoMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_IT] != null) {
    entries[_IT] = input[_IT];
  }
  return entries;
};

/**
 * serializeAws_queryRestartAppServerMessage
 */
const se_RestartAppServerMessage = (input: RestartAppServerMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryRetrieveEnvironmentInfoMessage
 */
const se_RetrieveEnvironmentInfoMessage = (input: RetrieveEnvironmentInfoMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_IT] != null) {
    entries[_IT] = input[_IT];
  }
  return entries;
};

/**
 * serializeAws_queryS3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SBu] != null) {
    entries[_SBu] = input[_SBu];
  }
  if (input[_SK] != null) {
    entries[_SK] = input[_SK];
  }
  return entries;
};

/**
 * serializeAws_querySearchFilter
 */
const se_SearchFilter = (input: SearchFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_At] != null) {
    entries[_At] = input[_At];
  }
  if (input[_Op] != null) {
    entries[_Op] = input[_Op];
  }
  if (input[_Val] != null) {
    const memberEntries = se_SearchFilterValues(input[_Val], context);
    if (input[_Val]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySearchFilters
 */
const se_SearchFilters = (input: SearchFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_SearchFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySearchFilterValues
 */
const se_SearchFilterValues = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_querySourceBuildInformation
 */
const se_SourceBuildInformation = (input: SourceBuildInformation, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_STo] != null) {
    entries[_STo] = input[_STo];
  }
  if (input[_SRo] != null) {
    entries[_SRo] = input[_SRo];
  }
  if (input[_SL] != null) {
    entries[_SL] = input[_SL];
  }
  return entries;
};

/**
 * serializeAws_querySourceConfiguration
 */
const se_SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
};

/**
 * serializeAws_querySwapEnvironmentCNAMEsMessage
 */
const se_SwapEnvironmentCNAMEsMessage = (input: SwapEnvironmentCNAMEsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SEI] != null) {
    entries[_SEI] = input[_SEI];
  }
  if (input[_SEN] != null) {
    entries[_SEN] = input[_SEN];
  }
  if (input[_DEI] != null) {
    entries[_DEI] = input[_DEI];
  }
  if (input[_DEN] != null) {
    entries[_DEN] = input[_DEN];
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
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_queryTagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
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
 * serializeAws_queryTerminateEnvironmentMessage
 */
const se_TerminateEnvironmentMessage = (input: TerminateEnvironmentMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_TR] != null) {
    entries[_TR] = input[_TR];
  }
  if (input[_FT] != null) {
    entries[_FT] = input[_FT];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateApplicationMessage
 */
const se_UpdateApplicationMessage = (input: UpdateApplicationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateApplicationResourceLifecycleMessage
 */
const se_UpdateApplicationResourceLifecycleMessage = (
  input: UpdateApplicationResourceLifecycleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_RLC] != null) {
    const memberEntries = se_ApplicationResourceLifecycleConfig(input[_RLC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceLifecycleConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateApplicationVersionMessage
 */
const se_UpdateApplicationVersionMessage = (input: UpdateApplicationVersionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_VLe] != null) {
    entries[_VLe] = input[_VLe];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateConfigurationTemplateMessage
 */
const se_UpdateConfigurationTemplateMessage = (
  input: UpdateConfigurationTemplateMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_OS] != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input[_OS], context);
    if (input[_OS]?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OTR] != null) {
    const memberEntries = se_OptionsSpecifierList(input[_OTR], context);
    if (input[_OTR]?.length === 0) {
      entries.OptionsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateEnvironmentMessage
 */
const se_UpdateEnvironmentMessage = (input: UpdateEnvironmentMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_Ti] != null) {
    const memberEntries = se_EnvironmentTier(input[_Ti], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tier.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_VLe] != null) {
    entries[_VLe] = input[_VLe];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_SSN] != null) {
    entries[_SSN] = input[_SSN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_OS] != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input[_OS], context);
    if (input[_OS]?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OTR] != null) {
    const memberEntries = se_OptionsSpecifierList(input[_OTR], context);
    if (input[_OTR]?.length === 0) {
      entries.OptionsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateTagsForResourceMessage
 */
const se_UpdateTagsForResourceMessage = (input: UpdateTagsForResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_TTA] != null) {
    const memberEntries = se_TagList(input[_TTA], context);
    if (input[_TTA]?.length === 0) {
      entries.TagsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TTR] != null) {
    const memberEntries = se_TagKeyList(input[_TTR], context);
    if (input[_TTR]?.length === 0) {
      entries.TagsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryValidateConfigurationSettingsMessage
 */
const se_ValidateConfigurationSettingsMessage = (
  input: ValidateConfigurationSettingsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_ANp] != null) {
    entries[_ANp] = input[_ANp];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_OS] != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input[_OS], context);
    if (input[_OS]?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryVersionLabels
 */
const se_VersionLabels = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryVersionLabelsList
 */
const se_VersionLabelsList = (input: string[], context: __SerdeContext): any => {
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
 * deserializeAws_queryApplicationDescription
 */
const de_ApplicationDescription = (output: any, context: __SerdeContext): ApplicationDescription => {
  const contents: any = {};
  if (output[_AA] != null) {
    contents[_AA] = __expectString(output[_AA]);
  }
  if (output[_ANp] != null) {
    contents[_ANp] = __expectString(output[_ANp]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_DC] != null) {
    contents[_DC] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DC]));
  }
  if (output[_DU] != null) {
    contents[_DU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DU]));
  }
  if (String(output.Versions).trim() === "") {
    contents[_Ve] = [];
  } else if (output[_Ve] != null && output[_Ve][_m] != null) {
    contents[_Ve] = de_VersionLabelsList(__getArrayIfSingleItem(output[_Ve][_m]), context);
  }
  if (String(output.ConfigurationTemplates).trim() === "") {
    contents[_CTo] = [];
  } else if (output[_CTo] != null && output[_CTo][_m] != null) {
    contents[_CTo] = de_ConfigurationTemplateNamesList(__getArrayIfSingleItem(output[_CTo][_m]), context);
  }
  if (output[_RLC] != null) {
    contents[_RLC] = de_ApplicationResourceLifecycleConfig(output[_RLC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationDescriptionList
 */
const de_ApplicationDescriptionList = (output: any, context: __SerdeContext): ApplicationDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationDescription(entry, context);
    });
};

/**
 * deserializeAws_queryApplicationDescriptionMessage
 */
const de_ApplicationDescriptionMessage = (output: any, context: __SerdeContext): ApplicationDescriptionMessage => {
  const contents: any = {};
  if (output[_Ap] != null) {
    contents[_Ap] = de_ApplicationDescription(output[_Ap], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationDescriptionsMessage
 */
const de_ApplicationDescriptionsMessage = (output: any, context: __SerdeContext): ApplicationDescriptionsMessage => {
  const contents: any = {};
  if (String(output.Applications).trim() === "") {
    contents[_App] = [];
  } else if (output[_App] != null && output[_App][_m] != null) {
    contents[_App] = de_ApplicationDescriptionList(__getArrayIfSingleItem(output[_App][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationMetrics
 */
const de_ApplicationMetrics = (output: any, context: __SerdeContext): ApplicationMetrics => {
  const contents: any = {};
  if (output[_Du] != null) {
    contents[_Du] = __strictParseInt32(output[_Du]) as number;
  }
  if (output[_RC] != null) {
    contents[_RC] = __strictParseInt32(output[_RC]) as number;
  }
  if (output[_SCt] != null) {
    contents[_SCt] = de_StatusCodes(output[_SCt], context);
  }
  if (output[_L] != null) {
    contents[_L] = de_Latency(output[_L], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationResourceLifecycleConfig
 */
const de_ApplicationResourceLifecycleConfig = (
  output: any,
  context: __SerdeContext
): ApplicationResourceLifecycleConfig => {
  const contents: any = {};
  if (output[_SR] != null) {
    contents[_SR] = __expectString(output[_SR]);
  }
  if (output[_VLC] != null) {
    contents[_VLC] = de_ApplicationVersionLifecycleConfig(output[_VLC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationResourceLifecycleDescriptionMessage
 */
const de_ApplicationResourceLifecycleDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ApplicationResourceLifecycleDescriptionMessage => {
  const contents: any = {};
  if (output[_ANp] != null) {
    contents[_ANp] = __expectString(output[_ANp]);
  }
  if (output[_RLC] != null) {
    contents[_RLC] = de_ApplicationResourceLifecycleConfig(output[_RLC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationVersionDescription
 */
const de_ApplicationVersionDescription = (output: any, context: __SerdeContext): ApplicationVersionDescription => {
  const contents: any = {};
  if (output[_AVA] != null) {
    contents[_AVA] = __expectString(output[_AVA]);
  }
  if (output[_ANp] != null) {
    contents[_ANp] = __expectString(output[_ANp]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_VLe] != null) {
    contents[_VLe] = __expectString(output[_VLe]);
  }
  if (output[_SBI] != null) {
    contents[_SBI] = de_SourceBuildInformation(output[_SBI], context);
  }
  if (output[_BA] != null) {
    contents[_BA] = __expectString(output[_BA]);
  }
  if (output[_SB] != null) {
    contents[_SB] = de_S3Location(output[_SB], context);
  }
  if (output[_DC] != null) {
    contents[_DC] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DC]));
  }
  if (output[_DU] != null) {
    contents[_DU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DU]));
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationVersionDescriptionList
 */
const de_ApplicationVersionDescriptionList = (
  output: any,
  context: __SerdeContext
): ApplicationVersionDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationVersionDescription(entry, context);
    });
};

/**
 * deserializeAws_queryApplicationVersionDescriptionMessage
 */
const de_ApplicationVersionDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ApplicationVersionDescriptionMessage => {
  const contents: any = {};
  if (output[_AV] != null) {
    contents[_AV] = de_ApplicationVersionDescription(output[_AV], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationVersionDescriptionsMessage
 */
const de_ApplicationVersionDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): ApplicationVersionDescriptionsMessage => {
  const contents: any = {};
  if (String(output.ApplicationVersions).trim() === "") {
    contents[_AVp] = [];
  } else if (output[_AVp] != null && output[_AVp][_m] != null) {
    contents[_AVp] = de_ApplicationVersionDescriptionList(__getArrayIfSingleItem(output[_AVp][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationVersionLifecycleConfig
 */
const de_ApplicationVersionLifecycleConfig = (
  output: any,
  context: __SerdeContext
): ApplicationVersionLifecycleConfig => {
  const contents: any = {};
  if (output[_MCR] != null) {
    contents[_MCR] = de_MaxCountRule(output[_MCR], context);
  }
  if (output[_MAR] != null) {
    contents[_MAR] = de_MaxAgeRule(output[_MAR], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplyEnvironmentManagedActionResult
 */
const de_ApplyEnvironmentManagedActionResult = (
  output: any,
  context: __SerdeContext
): ApplyEnvironmentManagedActionResult => {
  const contents: any = {};
  if (output[_AI] != null) {
    contents[_AI] = __expectString(output[_AI]);
  }
  if (output[_AD] != null) {
    contents[_AD] = __expectString(output[_AD]);
  }
  if (output[_AT] != null) {
    contents[_AT] = __expectString(output[_AT]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoScalingGroup
 */
const de_AutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoScalingGroupList
 */
const de_AutoScalingGroupList = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoScalingGroup(entry, context);
    });
};

/**
 * deserializeAws_queryAvailableSolutionStackDetailsList
 */
const de_AvailableSolutionStackDetailsList = (output: any, context: __SerdeContext): SolutionStackDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SolutionStackDescription(entry, context);
    });
};

/**
 * deserializeAws_queryAvailableSolutionStackNamesList
 */
const de_AvailableSolutionStackNamesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryBuilder
 */
const de_Builder = (output: any, context: __SerdeContext): Builder => {
  const contents: any = {};
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryCauses
 */
const de_Causes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCheckDNSAvailabilityResultMessage
 */
const de_CheckDNSAvailabilityResultMessage = (
  output: any,
  context: __SerdeContext
): CheckDNSAvailabilityResultMessage => {
  const contents: any = {};
  if (output[_Av] != null) {
    contents[_Av] = __parseBoolean(output[_Av]);
  }
  if (output[_FQCNAME] != null) {
    contents[_FQCNAME] = __expectString(output[_FQCNAME]);
  }
  return contents;
};

/**
 * deserializeAws_queryCodeBuildNotInServiceRegionException
 */
const de_CodeBuildNotInServiceRegionException = (
  output: any,
  context: __SerdeContext
): CodeBuildNotInServiceRegionException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationOptionDescription
 */
const de_ConfigurationOptionDescription = (output: any, context: __SerdeContext): ConfigurationOptionDescription => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_CS] != null) {
    contents[_CS] = __expectString(output[_CS]);
  }
  if (output[_UD] != null) {
    contents[_UD] = __parseBoolean(output[_UD]);
  }
  if (output[_VT] != null) {
    contents[_VT] = __expectString(output[_VT]);
  }
  if (String(output.ValueOptions).trim() === "") {
    contents[_VO] = [];
  } else if (output[_VO] != null && output[_VO][_m] != null) {
    contents[_VO] = de_ConfigurationOptionPossibleValues(__getArrayIfSingleItem(output[_VO][_m]), context);
  }
  if (output[_MV] != null) {
    contents[_MV] = __strictParseInt32(output[_MV]) as number;
  }
  if (output[_MVa] != null) {
    contents[_MVa] = __strictParseInt32(output[_MVa]) as number;
  }
  if (output[_ML] != null) {
    contents[_ML] = __strictParseInt32(output[_ML]) as number;
  }
  if (output[_R] != null) {
    contents[_R] = de_OptionRestrictionRegex(output[_R], context);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationOptionDescriptionsList
 */
const de_ConfigurationOptionDescriptionsList = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationOptionDescription(entry, context);
    });
};

/**
 * deserializeAws_queryConfigurationOptionPossibleValues
 */
const de_ConfigurationOptionPossibleValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryConfigurationOptionsDescription
 */
const de_ConfigurationOptionsDescription = (output: any, context: __SerdeContext): ConfigurationOptionsDescription => {
  const contents: any = {};
  if (output[_SSN] != null) {
    contents[_SSN] = __expectString(output[_SSN]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __expectString(output[_PA]);
  }
  if (String(output.Options).trim() === "") {
    contents[_O] = [];
  } else if (output[_O] != null && output[_O][_m] != null) {
    contents[_O] = de_ConfigurationOptionDescriptionsList(__getArrayIfSingleItem(output[_O][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationOptionSetting
 */
const de_ConfigurationOptionSetting = (output: any, context: __SerdeContext): ConfigurationOptionSetting => {
  const contents: any = {};
  if (output[_RN] != null) {
    contents[_RN] = __expectString(output[_RN]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_ON] != null) {
    contents[_ON] = __expectString(output[_ON]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationOptionSettingsList
 */
const de_ConfigurationOptionSettingsList = (output: any, context: __SerdeContext): ConfigurationOptionSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationOptionSetting(entry, context);
    });
};

/**
 * deserializeAws_queryConfigurationSettingsDescription
 */
const de_ConfigurationSettingsDescription = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsDescription => {
  const contents: any = {};
  if (output[_SSN] != null) {
    contents[_SSN] = __expectString(output[_SSN]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __expectString(output[_PA]);
  }
  if (output[_ANp] != null) {
    contents[_ANp] = __expectString(output[_ANp]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_DS] != null) {
    contents[_DS] = __expectString(output[_DS]);
  }
  if (output[_DC] != null) {
    contents[_DC] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DC]));
  }
  if (output[_DU] != null) {
    contents[_DU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DU]));
  }
  if (String(output.OptionSettings).trim() === "") {
    contents[_OS] = [];
  } else if (output[_OS] != null && output[_OS][_m] != null) {
    contents[_OS] = de_ConfigurationOptionSettingsList(__getArrayIfSingleItem(output[_OS][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationSettingsDescriptionList
 */
const de_ConfigurationSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationSettingsDescription(entry, context);
    });
};

/**
 * deserializeAws_queryConfigurationSettingsDescriptions
 */
const de_ConfigurationSettingsDescriptions = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsDescriptions => {
  const contents: any = {};
  if (String(output.ConfigurationSettings).trim() === "") {
    contents[_CSo] = [];
  } else if (output[_CSo] != null && output[_CSo][_m] != null) {
    contents[_CSo] = de_ConfigurationSettingsDescriptionList(__getArrayIfSingleItem(output[_CSo][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationSettingsValidationMessages
 */
const de_ConfigurationSettingsValidationMessages = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsValidationMessages => {
  const contents: any = {};
  if (String(output.Messages).trim() === "") {
    contents[_M] = [];
  } else if (output[_M] != null && output[_M][_m] != null) {
    contents[_M] = de_ValidationMessagesList(__getArrayIfSingleItem(output[_M][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationTemplateNamesList
 */
const de_ConfigurationTemplateNamesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCPUUtilization
 */
const de_CPUUtilization = (output: any, context: __SerdeContext): CPUUtilization => {
  const contents: any = {};
  if (output[_U] != null) {
    contents[_U] = __strictParseFloat(output[_U]) as number;
  }
  if (output[_Ni] != null) {
    contents[_Ni] = __strictParseFloat(output[_Ni]) as number;
  }
  if (output[_Sy] != null) {
    contents[_Sy] = __strictParseFloat(output[_Sy]) as number;
  }
  if (output[_Id] != null) {
    contents[_Id] = __strictParseFloat(output[_Id]) as number;
  }
  if (output[_IOW] != null) {
    contents[_IOW] = __strictParseFloat(output[_IOW]) as number;
  }
  if (output[_IRQ] != null) {
    contents[_IRQ] = __strictParseFloat(output[_IRQ]) as number;
  }
  if (output[_SIRQ] != null) {
    contents[_SIRQ] = __strictParseFloat(output[_SIRQ]) as number;
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __strictParseFloat(output[_Pr]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryCreatePlatformVersionResult
 */
const de_CreatePlatformVersionResult = (output: any, context: __SerdeContext): CreatePlatformVersionResult => {
  const contents: any = {};
  if (output[_PS] != null) {
    contents[_PS] = de_PlatformSummary(output[_PS], context);
  }
  if (output[_B] != null) {
    contents[_B] = de_Builder(output[_B], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateStorageLocationResultMessage
 */
const de_CreateStorageLocationResultMessage = (
  output: any,
  context: __SerdeContext
): CreateStorageLocationResultMessage => {
  const contents: any = {};
  if (output[_SBu] != null) {
    contents[_SBu] = __expectString(output[_SBu]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomAmi
 */
const de_CustomAmi = (output: any, context: __SerdeContext): CustomAmi => {
  const contents: any = {};
  if (output[_VTi] != null) {
    contents[_VTi] = __expectString(output[_VTi]);
  }
  if (output[_II] != null) {
    contents[_II] = __expectString(output[_II]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomAmiList
 */
const de_CustomAmiList = (output: any, context: __SerdeContext): CustomAmi[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomAmi(entry, context);
    });
};

/**
 * deserializeAws_queryDeletePlatformVersionResult
 */
const de_DeletePlatformVersionResult = (output: any, context: __SerdeContext): DeletePlatformVersionResult => {
  const contents: any = {};
  if (output[_PS] != null) {
    contents[_PS] = de_PlatformSummary(output[_PS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  const contents: any = {};
  if (output[_VLe] != null) {
    contents[_VLe] = __expectString(output[_VLe]);
  }
  if (output[_DI] != null) {
    contents[_DI] = __strictParseLong(output[_DI]) as number;
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_DT] != null) {
    contents[_DT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DT]));
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAccountAttributesResult
 */
const de_DescribeAccountAttributesResult = (output: any, context: __SerdeContext): DescribeAccountAttributesResult => {
  const contents: any = {};
  if (output[_RQ] != null) {
    contents[_RQ] = de_ResourceQuotas(output[_RQ], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeEnvironmentHealthResult
 */
const de_DescribeEnvironmentHealthResult = (output: any, context: __SerdeContext): DescribeEnvironmentHealthResult => {
  const contents: any = {};
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_HS] != null) {
    contents[_HS] = __expectString(output[_HS]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (String(output.Causes).trim() === "") {
    contents[_Ca] = [];
  } else if (output[_Ca] != null && output[_Ca][_m] != null) {
    contents[_Ca] = de_Causes(__getArrayIfSingleItem(output[_Ca][_m]), context);
  }
  if (output[_AM] != null) {
    contents[_AM] = de_ApplicationMetrics(output[_AM], context);
  }
  if (output[_IH] != null) {
    contents[_IH] = de_InstanceHealthSummary(output[_IH], context);
  }
  if (output[_RAe] != null) {
    contents[_RAe] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RAe]));
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult
 */
const de_DescribeEnvironmentManagedActionHistoryResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentManagedActionHistoryResult => {
  const contents: any = {};
  if (String(output.ManagedActionHistoryItems).trim() === "") {
    contents[_MAHI] = [];
  } else if (output[_MAHI] != null && output[_MAHI][_m] != null) {
    contents[_MAHI] = de_ManagedActionHistoryItems(__getArrayIfSingleItem(output[_MAHI][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeEnvironmentManagedActionsResult
 */
const de_DescribeEnvironmentManagedActionsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentManagedActionsResult => {
  const contents: any = {};
  if (String(output.ManagedActions).trim() === "") {
    contents[_MA] = [];
  } else if (output[_MA] != null && output[_MA][_m] != null) {
    contents[_MA] = de_ManagedActions(__getArrayIfSingleItem(output[_MA][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeInstancesHealthResult
 */
const de_DescribeInstancesHealthResult = (output: any, context: __SerdeContext): DescribeInstancesHealthResult => {
  const contents: any = {};
  if (String(output.InstanceHealthList).trim() === "") {
    contents[_IHL] = [];
  } else if (output[_IHL] != null && output[_IHL][_m] != null) {
    contents[_IHL] = de_InstanceHealthList(__getArrayIfSingleItem(output[_IHL][_m]), context);
  }
  if (output[_RAe] != null) {
    contents[_RAe] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RAe]));
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribePlatformVersionResult
 */
const de_DescribePlatformVersionResult = (output: any, context: __SerdeContext): DescribePlatformVersionResult => {
  const contents: any = {};
  if (output[_PD] != null) {
    contents[_PD] = de_PlatformDescription(output[_PD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryElasticBeanstalkServiceException
 */
const de_ElasticBeanstalkServiceException = (
  output: any,
  context: __SerdeContext
): ElasticBeanstalkServiceException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentDescription
 */
const de_EnvironmentDescription = (output: any, context: __SerdeContext): EnvironmentDescription => {
  const contents: any = {};
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_EI] != null) {
    contents[_EI] = __expectString(output[_EI]);
  }
  if (output[_ANp] != null) {
    contents[_ANp] = __expectString(output[_ANp]);
  }
  if (output[_VLe] != null) {
    contents[_VLe] = __expectString(output[_VLe]);
  }
  if (output[_SSN] != null) {
    contents[_SSN] = __expectString(output[_SSN]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __expectString(output[_PA]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_EURL] != null) {
    contents[_EURL] = __expectString(output[_EURL]);
  }
  if (output[_CNAME] != null) {
    contents[_CNAME] = __expectString(output[_CNAME]);
  }
  if (output[_DC] != null) {
    contents[_DC] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DC]));
  }
  if (output[_DU] != null) {
    contents[_DU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DU]));
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_AOIP] != null) {
    contents[_AOIP] = __parseBoolean(output[_AOIP]);
  }
  if (output[_H] != null) {
    contents[_H] = __expectString(output[_H]);
  }
  if (output[_HS] != null) {
    contents[_HS] = __expectString(output[_HS]);
  }
  if (output[_Re] != null) {
    contents[_Re] = de_EnvironmentResourcesDescription(output[_Re], context);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = de_EnvironmentTier(output[_Ti], context);
  }
  if (String(output.EnvironmentLinks).trim() === "") {
    contents[_EL] = [];
  } else if (output[_EL] != null && output[_EL][_m] != null) {
    contents[_EL] = de_EnvironmentLinks(__getArrayIfSingleItem(output[_EL][_m]), context);
  }
  if (output[_EA] != null) {
    contents[_EA] = __expectString(output[_EA]);
  }
  if (output[_OR] != null) {
    contents[_OR] = __expectString(output[_OR]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentDescriptionsList
 */
const de_EnvironmentDescriptionsList = (output: any, context: __SerdeContext): EnvironmentDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentDescription(entry, context);
    });
};

/**
 * deserializeAws_queryEnvironmentDescriptionsMessage
 */
const de_EnvironmentDescriptionsMessage = (output: any, context: __SerdeContext): EnvironmentDescriptionsMessage => {
  const contents: any = {};
  if (String(output.Environments).trim() === "") {
    contents[_En] = [];
  } else if (output[_En] != null && output[_En][_m] != null) {
    contents[_En] = de_EnvironmentDescriptionsList(__getArrayIfSingleItem(output[_En][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentInfoDescription
 */
const de_EnvironmentInfoDescription = (output: any, context: __SerdeContext): EnvironmentInfoDescription => {
  const contents: any = {};
  if (output[_IT] != null) {
    contents[_IT] = __expectString(output[_IT]);
  }
  if (output[_EII] != null) {
    contents[_EII] = __expectString(output[_EII]);
  }
  if (output[_STa] != null) {
    contents[_STa] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STa]));
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentInfoDescriptionList
 */
const de_EnvironmentInfoDescriptionList = (output: any, context: __SerdeContext): EnvironmentInfoDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentInfoDescription(entry, context);
    });
};

/**
 * deserializeAws_queryEnvironmentLink
 */
const de_EnvironmentLink = (output: any, context: __SerdeContext): EnvironmentLink => {
  const contents: any = {};
  if (output[_LN] != null) {
    contents[_LN] = __expectString(output[_LN]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentLinks
 */
const de_EnvironmentLinks = (output: any, context: __SerdeContext): EnvironmentLink[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentLink(entry, context);
    });
};

/**
 * deserializeAws_queryEnvironmentResourceDescription
 */
const de_EnvironmentResourceDescription = (output: any, context: __SerdeContext): EnvironmentResourceDescription => {
  const contents: any = {};
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (String(output.AutoScalingGroups).trim() === "") {
    contents[_ASG] = [];
  } else if (output[_ASG] != null && output[_ASG][_m] != null) {
    contents[_ASG] = de_AutoScalingGroupList(__getArrayIfSingleItem(output[_ASG][_m]), context);
  }
  if (String(output.Instances).trim() === "") {
    contents[_In] = [];
  } else if (output[_In] != null && output[_In][_m] != null) {
    contents[_In] = de_InstanceList(__getArrayIfSingleItem(output[_In][_m]), context);
  }
  if (String(output.LaunchConfigurations).trim() === "") {
    contents[_LC] = [];
  } else if (output[_LC] != null && output[_LC][_m] != null) {
    contents[_LC] = de_LaunchConfigurationList(__getArrayIfSingleItem(output[_LC][_m]), context);
  }
  if (String(output.LaunchTemplates).trim() === "") {
    contents[_LT] = [];
  } else if (output[_LT] != null && output[_LT][_m] != null) {
    contents[_LT] = de_LaunchTemplateList(__getArrayIfSingleItem(output[_LT][_m]), context);
  }
  if (String(output.LoadBalancers).trim() === "") {
    contents[_LB] = [];
  } else if (output[_LB] != null && output[_LB][_m] != null) {
    contents[_LB] = de_LoadBalancerList(__getArrayIfSingleItem(output[_LB][_m]), context);
  }
  if (String(output.Triggers).trim() === "") {
    contents[_Tr] = [];
  } else if (output[_Tr] != null && output[_Tr][_m] != null) {
    contents[_Tr] = de_TriggerList(__getArrayIfSingleItem(output[_Tr][_m]), context);
  }
  if (String(output.Queues).trim() === "") {
    contents[_Q] = [];
  } else if (output[_Q] != null && output[_Q][_m] != null) {
    contents[_Q] = de_QueueList(__getArrayIfSingleItem(output[_Q][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentResourceDescriptionsMessage
 */
const de_EnvironmentResourceDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): EnvironmentResourceDescriptionsMessage => {
  const contents: any = {};
  if (output[_ER] != null) {
    contents[_ER] = de_EnvironmentResourceDescription(output[_ER], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentResourcesDescription
 */
const de_EnvironmentResourcesDescription = (output: any, context: __SerdeContext): EnvironmentResourcesDescription => {
  const contents: any = {};
  if (output[_LBo] != null) {
    contents[_LBo] = de_LoadBalancerDescription(output[_LBo], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentTier
 */
const de_EnvironmentTier = (output: any, context: __SerdeContext): EnvironmentTier => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_Ty] != null) {
    contents[_Ty] = __expectString(output[_Ty]);
  }
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventDescription
 */
const de_EventDescription = (output: any, context: __SerdeContext): EventDescription => {
  const contents: any = {};
  if (output[_ED] != null) {
    contents[_ED] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ED]));
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output[_ANp] != null) {
    contents[_ANp] = __expectString(output[_ANp]);
  }
  if (output[_VLe] != null) {
    contents[_VLe] = __expectString(output[_VLe]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __expectString(output[_PA]);
  }
  if (output[_RI] != null) {
    contents[_RI] = __expectString(output[_RI]);
  }
  if (output[_Se] != null) {
    contents[_Se] = __expectString(output[_Se]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventDescriptionList
 */
const de_EventDescriptionList = (output: any, context: __SerdeContext): EventDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventDescription(entry, context);
    });
};

/**
 * deserializeAws_queryEventDescriptionsMessage
 */
const de_EventDescriptionsMessage = (output: any, context: __SerdeContext): EventDescriptionsMessage => {
  const contents: any = {};
  if (String(output.Events).trim() === "") {
    contents[_Ev] = [];
  } else if (output[_Ev] != null && output[_Ev][_m] != null) {
    contents[_Ev] = de_EventDescriptionList(__getArrayIfSingleItem(output[_Ev][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {};
  if (output[_Id_] != null) {
    contents[_Id_] = __expectString(output[_Id_]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceHealthList
 */
const de_InstanceHealthList = (output: any, context: __SerdeContext): SingleInstanceHealth[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SingleInstanceHealth(entry, context);
    });
};

/**
 * deserializeAws_queryInstanceHealthSummary
 */
const de_InstanceHealthSummary = (output: any, context: __SerdeContext): InstanceHealthSummary => {
  const contents: any = {};
  if (output[_ND] != null) {
    contents[_ND] = __strictParseInt32(output[_ND]) as number;
  }
  if (output[_Un] != null) {
    contents[_Un] = __strictParseInt32(output[_Un]) as number;
  }
  if (output[_Pe] != null) {
    contents[_Pe] = __strictParseInt32(output[_Pe]) as number;
  }
  if (output[_Ok] != null) {
    contents[_Ok] = __strictParseInt32(output[_Ok]) as number;
  }
  if (output[_Inf] != null) {
    contents[_Inf] = __strictParseInt32(output[_Inf]) as number;
  }
  if (output[_W] != null) {
    contents[_W] = __strictParseInt32(output[_W]) as number;
  }
  if (output[_De] != null) {
    contents[_De] = __strictParseInt32(output[_De]) as number;
  }
  if (output[_Sev] != null) {
    contents[_Sev] = __strictParseInt32(output[_Sev]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Instance(entry, context);
    });
};

/**
 * deserializeAws_queryInsufficientPrivilegesException
 */
const de_InsufficientPrivilegesException = (output: any, context: __SerdeContext): InsufficientPrivilegesException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryLatency
 */
const de_Latency = (output: any, context: __SerdeContext): Latency => {
  const contents: any = {};
  if (output[_P_] != null) {
    contents[_P_] = __strictParseFloat(output[_P_]) as number;
  }
  if (output[_P__] != null) {
    contents[_P__] = __strictParseFloat(output[_P__]) as number;
  }
  if (output[_P___] != null) {
    contents[_P___] = __strictParseFloat(output[_P___]) as number;
  }
  if (output[_P____] != null) {
    contents[_P____] = __strictParseFloat(output[_P____]) as number;
  }
  if (output[_P_____] != null) {
    contents[_P_____] = __strictParseFloat(output[_P_____]) as number;
  }
  if (output[_P______] != null) {
    contents[_P______] = __strictParseFloat(output[_P______]) as number;
  }
  if (output[_P_______] != null) {
    contents[_P_______] = __strictParseFloat(output[_P_______]) as number;
  }
  if (output[_P________] != null) {
    contents[_P________] = __strictParseFloat(output[_P________]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchConfiguration
 */
const de_LaunchConfiguration = (output: any, context: __SerdeContext): LaunchConfiguration => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchConfigurationList
 */
const de_LaunchConfigurationList = (output: any, context: __SerdeContext): LaunchConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LaunchConfiguration(entry, context);
    });
};

/**
 * deserializeAws_queryLaunchTemplate
 */
const de_LaunchTemplate = (output: any, context: __SerdeContext): LaunchTemplate => {
  const contents: any = {};
  if (output[_Id_] != null) {
    contents[_Id_] = __expectString(output[_Id_]);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchTemplateList
 */
const de_LaunchTemplateList = (output: any, context: __SerdeContext): LaunchTemplate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LaunchTemplate(entry, context);
    });
};

/**
 * deserializeAws_queryListAvailableSolutionStacksResultMessage
 */
const de_ListAvailableSolutionStacksResultMessage = (
  output: any,
  context: __SerdeContext
): ListAvailableSolutionStacksResultMessage => {
  const contents: any = {};
  if (String(output.SolutionStacks).trim() === "") {
    contents[_SS] = [];
  } else if (output[_SS] != null && output[_SS][_m] != null) {
    contents[_SS] = de_AvailableSolutionStackNamesList(__getArrayIfSingleItem(output[_SS][_m]), context);
  }
  if (String(output.SolutionStackDetails).trim() === "") {
    contents[_SSD] = [];
  } else if (output[_SSD] != null && output[_SSD][_m] != null) {
    contents[_SSD] = de_AvailableSolutionStackDetailsList(__getArrayIfSingleItem(output[_SSD][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListener
 */
const de_Listener = (output: any, context: __SerdeContext): Listener => {
  const contents: any = {};
  if (output[_Pro] != null) {
    contents[_Pro] = __expectString(output[_Pro]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __strictParseInt32(output[_Po]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryListPlatformBranchesResult
 */
const de_ListPlatformBranchesResult = (output: any, context: __SerdeContext): ListPlatformBranchesResult => {
  const contents: any = {};
  if (String(output.PlatformBranchSummaryList).trim() === "") {
    contents[_PBSL] = [];
  } else if (output[_PBSL] != null && output[_PBSL][_m] != null) {
    contents[_PBSL] = de_PlatformBranchSummaryList(__getArrayIfSingleItem(output[_PBSL][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListPlatformVersionsResult
 */
const de_ListPlatformVersionsResult = (output: any, context: __SerdeContext): ListPlatformVersionsResult => {
  const contents: any = {};
  if (String(output.PlatformSummaryList).trim() === "") {
    contents[_PSL] = [];
  } else if (output[_PSL] != null && output[_PSL][_m] != null) {
    contents[_PSL] = de_PlatformSummaryList(__getArrayIfSingleItem(output[_PSL][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadAverage
 */
const de_LoadAverage = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseFloat(entry) as number;
    });
};

/**
 * deserializeAws_queryLoadBalancer
 */
const de_LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerDescription
 */
const de_LoadBalancerDescription = (output: any, context: __SerdeContext): LoadBalancerDescription => {
  const contents: any = {};
  if (output[_LBN] != null) {
    contents[_LBN] = __expectString(output[_LBN]);
  }
  if (output[_Do] != null) {
    contents[_Do] = __expectString(output[_Do]);
  }
  if (String(output.Listeners).trim() === "") {
    contents[_Li] = [];
  } else if (output[_Li] != null && output[_Li][_m] != null) {
    contents[_Li] = de_LoadBalancerListenersDescription(__getArrayIfSingleItem(output[_Li][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerList
 */
const de_LoadBalancerList = (output: any, context: __SerdeContext): LoadBalancer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancer(entry, context);
    });
};

/**
 * deserializeAws_queryLoadBalancerListenersDescription
 */
const de_LoadBalancerListenersDescription = (output: any, context: __SerdeContext): Listener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Listener(entry, context);
    });
};

/**
 * deserializeAws_queryManagedAction
 */
const de_ManagedAction = (output: any, context: __SerdeContext): ManagedAction => {
  const contents: any = {};
  if (output[_AI] != null) {
    contents[_AI] = __expectString(output[_AI]);
  }
  if (output[_AD] != null) {
    contents[_AD] = __expectString(output[_AD]);
  }
  if (output[_AT] != null) {
    contents[_AT] = __expectString(output[_AT]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_WST] != null) {
    contents[_WST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_WST]));
  }
  return contents;
};

/**
 * deserializeAws_queryManagedActionHistoryItem
 */
const de_ManagedActionHistoryItem = (output: any, context: __SerdeContext): ManagedActionHistoryItem => {
  const contents: any = {};
  if (output[_AI] != null) {
    contents[_AI] = __expectString(output[_AI]);
  }
  if (output[_AT] != null) {
    contents[_AT] = __expectString(output[_AT]);
  }
  if (output[_AD] != null) {
    contents[_AD] = __expectString(output[_AD]);
  }
  if (output[_FTa] != null) {
    contents[_FTa] = __expectString(output[_FTa]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_FD] != null) {
    contents[_FD] = __expectString(output[_FD]);
  }
  if (output[_ETx] != null) {
    contents[_ETx] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ETx]));
  }
  if (output[_FTi] != null) {
    contents[_FTi] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_FTi]));
  }
  return contents;
};

/**
 * deserializeAws_queryManagedActionHistoryItems
 */
const de_ManagedActionHistoryItems = (output: any, context: __SerdeContext): ManagedActionHistoryItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedActionHistoryItem(entry, context);
    });
};

/**
 * deserializeAws_queryManagedActionInvalidStateException
 */
const de_ManagedActionInvalidStateException = (
  output: any,
  context: __SerdeContext
): ManagedActionInvalidStateException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryManagedActions
 */
const de_ManagedActions = (output: any, context: __SerdeContext): ManagedAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedAction(entry, context);
    });
};

/**
 * deserializeAws_queryMaxAgeRule
 */
const de_MaxAgeRule = (output: any, context: __SerdeContext): MaxAgeRule => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_MAID] != null) {
    contents[_MAID] = __strictParseInt32(output[_MAID]) as number;
  }
  if (output[_DSFS] != null) {
    contents[_DSFS] = __parseBoolean(output[_DSFS]);
  }
  return contents;
};

/**
 * deserializeAws_queryMaxCountRule
 */
const de_MaxCountRule = (output: any, context: __SerdeContext): MaxCountRule => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_MC] != null) {
    contents[_MC] = __strictParseInt32(output[_MC]) as number;
  }
  if (output[_DSFS] != null) {
    contents[_DSFS] = __parseBoolean(output[_DSFS]);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationInProgressException
 */
const de_OperationInProgressException = (output: any, context: __SerdeContext): OperationInProgressException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionRestrictionRegex
 */
const de_OptionRestrictionRegex = (output: any, context: __SerdeContext): OptionRestrictionRegex => {
  const contents: any = {};
  if (output[_Pa] != null) {
    contents[_Pa] = __expectString(output[_Pa]);
  }
  if (output[_La] != null) {
    contents[_La] = __expectString(output[_La]);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformBranchSummary
 */
const de_PlatformBranchSummary = (output: any, context: __SerdeContext): PlatformBranchSummary => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_BN] != null) {
    contents[_BN] = __expectString(output[_BN]);
  }
  if (output[_LS] != null) {
    contents[_LS] = __expectString(output[_LS]);
  }
  if (output[_BO] != null) {
    contents[_BO] = __strictParseInt32(output[_BO]) as number;
  }
  if (String(output.SupportedTierList).trim() === "") {
    contents[_STL] = [];
  } else if (output[_STL] != null && output[_STL][_m] != null) {
    contents[_STL] = de_SupportedTierList(__getArrayIfSingleItem(output[_STL][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformBranchSummaryList
 */
const de_PlatformBranchSummaryList = (output: any, context: __SerdeContext): PlatformBranchSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PlatformBranchSummary(entry, context);
    });
};

/**
 * deserializeAws_queryPlatformDescription
 */
const de_PlatformDescription = (output: any, context: __SerdeContext): PlatformDescription => {
  const contents: any = {};
  if (output[_PA] != null) {
    contents[_PA] = __expectString(output[_PA]);
  }
  if (output[_PO] != null) {
    contents[_PO] = __expectString(output[_PO]);
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PV] != null) {
    contents[_PV] = __expectString(output[_PV]);
  }
  if (output[_SSN] != null) {
    contents[_SSN] = __expectString(output[_SSN]);
  }
  if (output[_PSl] != null) {
    contents[_PSl] = __expectString(output[_PSl]);
  }
  if (output[_DC] != null) {
    contents[_DC] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DC]));
  }
  if (output[_DU] != null) {
    contents[_DU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_DU]));
  }
  if (output[_PC] != null) {
    contents[_PC] = __expectString(output[_PC]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
  }
  if (output[_OSN] != null) {
    contents[_OSN] = __expectString(output[_OSN]);
  }
  if (output[_OSV] != null) {
    contents[_OSV] = __expectString(output[_OSV]);
  }
  if (String(output.ProgrammingLanguages).trim() === "") {
    contents[_PL] = [];
  } else if (output[_PL] != null && output[_PL][_m] != null) {
    contents[_PL] = de_PlatformProgrammingLanguages(__getArrayIfSingleItem(output[_PL][_m]), context);
  }
  if (String(output.Frameworks).trim() === "") {
    contents[_Fr] = [];
  } else if (output[_Fr] != null && output[_Fr][_m] != null) {
    contents[_Fr] = de_PlatformFrameworks(__getArrayIfSingleItem(output[_Fr][_m]), context);
  }
  if (String(output.CustomAmiList).trim() === "") {
    contents[_CAL] = [];
  } else if (output[_CAL] != null && output[_CAL][_m] != null) {
    contents[_CAL] = de_CustomAmiList(__getArrayIfSingleItem(output[_CAL][_m]), context);
  }
  if (String(output.SupportedTierList).trim() === "") {
    contents[_STL] = [];
  } else if (output[_STL] != null && output[_STL][_m] != null) {
    contents[_STL] = de_SupportedTierList(__getArrayIfSingleItem(output[_STL][_m]), context);
  }
  if (String(output.SupportedAddonList).trim() === "") {
    contents[_SAL] = [];
  } else if (output[_SAL] != null && output[_SAL][_m] != null) {
    contents[_SAL] = de_SupportedAddonList(__getArrayIfSingleItem(output[_SAL][_m]), context);
  }
  if (output[_PLS] != null) {
    contents[_PLS] = __expectString(output[_PLS]);
  }
  if (output[_PBN] != null) {
    contents[_PBN] = __expectString(output[_PBN]);
  }
  if (output[_PBLS] != null) {
    contents[_PBLS] = __expectString(output[_PBLS]);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformFramework
 */
const de_PlatformFramework = (output: any, context: __SerdeContext): PlatformFramework => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformFrameworks
 */
const de_PlatformFrameworks = (output: any, context: __SerdeContext): PlatformFramework[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PlatformFramework(entry, context);
    });
};

/**
 * deserializeAws_queryPlatformProgrammingLanguage
 */
const de_PlatformProgrammingLanguage = (output: any, context: __SerdeContext): PlatformProgrammingLanguage => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformProgrammingLanguages
 */
const de_PlatformProgrammingLanguages = (output: any, context: __SerdeContext): PlatformProgrammingLanguage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PlatformProgrammingLanguage(entry, context);
    });
};

/**
 * deserializeAws_queryPlatformSummary
 */
const de_PlatformSummary = (output: any, context: __SerdeContext): PlatformSummary => {
  const contents: any = {};
  if (output[_PA] != null) {
    contents[_PA] = __expectString(output[_PA]);
  }
  if (output[_PO] != null) {
    contents[_PO] = __expectString(output[_PO]);
  }
  if (output[_PSl] != null) {
    contents[_PSl] = __expectString(output[_PSl]);
  }
  if (output[_PC] != null) {
    contents[_PC] = __expectString(output[_PC]);
  }
  if (output[_OSN] != null) {
    contents[_OSN] = __expectString(output[_OSN]);
  }
  if (output[_OSV] != null) {
    contents[_OSV] = __expectString(output[_OSV]);
  }
  if (String(output.SupportedTierList).trim() === "") {
    contents[_STL] = [];
  } else if (output[_STL] != null && output[_STL][_m] != null) {
    contents[_STL] = de_SupportedTierList(__getArrayIfSingleItem(output[_STL][_m]), context);
  }
  if (String(output.SupportedAddonList).trim() === "") {
    contents[_SAL] = [];
  } else if (output[_SAL] != null && output[_SAL][_m] != null) {
    contents[_SAL] = de_SupportedAddonList(__getArrayIfSingleItem(output[_SAL][_m]), context);
  }
  if (output[_PLS] != null) {
    contents[_PLS] = __expectString(output[_PLS]);
  }
  if (output[_PV] != null) {
    contents[_PV] = __expectString(output[_PV]);
  }
  if (output[_PBN] != null) {
    contents[_PBN] = __expectString(output[_PBN]);
  }
  if (output[_PBLS] != null) {
    contents[_PBLS] = __expectString(output[_PBLS]);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformSummaryList
 */
const de_PlatformSummaryList = (output: any, context: __SerdeContext): PlatformSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PlatformSummary(entry, context);
    });
};

/**
 * deserializeAws_queryPlatformVersionStillReferencedException
 */
const de_PlatformVersionStillReferencedException = (
  output: any,
  context: __SerdeContext
): PlatformVersionStillReferencedException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryQueue
 */
const de_Queue = (output: any, context: __SerdeContext): Queue => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_URL] != null) {
    contents[_URL] = __expectString(output[_URL]);
  }
  return contents;
};

/**
 * deserializeAws_queryQueueList
 */
const de_QueueList = (output: any, context: __SerdeContext): Queue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Queue(entry, context);
    });
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceQuota
 */
const de_ResourceQuota = (output: any, context: __SerdeContext): ResourceQuota => {
  const contents: any = {};
  if (output[_Max] != null) {
    contents[_Max] = __strictParseInt32(output[_Max]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryResourceQuotas
 */
const de_ResourceQuotas = (output: any, context: __SerdeContext): ResourceQuotas => {
  const contents: any = {};
  if (output[_AQ] != null) {
    contents[_AQ] = de_ResourceQuota(output[_AQ], context);
  }
  if (output[_AVQ] != null) {
    contents[_AVQ] = de_ResourceQuota(output[_AVQ], context);
  }
  if (output[_EQ] != null) {
    contents[_EQ] = de_ResourceQuota(output[_EQ], context);
  }
  if (output[_CTQ] != null) {
    contents[_CTQ] = de_ResourceQuota(output[_CTQ], context);
  }
  if (output[_CPQ] != null) {
    contents[_CPQ] = de_ResourceQuota(output[_CPQ], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceTagsDescriptionMessage
 */
const de_ResourceTagsDescriptionMessage = (output: any, context: __SerdeContext): ResourceTagsDescriptionMessage => {
  const contents: any = {};
  if (output[_RA] != null) {
    contents[_RA] = __expectString(output[_RA]);
  }
  if (String(output.ResourceTags).trim() === "") {
    contents[_RT] = [];
  } else if (output[_RT] != null && output[_RT][_m] != null) {
    contents[_RT] = de_TagList(__getArrayIfSingleItem(output[_RT][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceTypeNotSupportedException
 */
const de_ResourceTypeNotSupportedException = (
  output: any,
  context: __SerdeContext
): ResourceTypeNotSupportedException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryRetrieveEnvironmentInfoResultMessage
 */
const de_RetrieveEnvironmentInfoResultMessage = (
  output: any,
  context: __SerdeContext
): RetrieveEnvironmentInfoResultMessage => {
  const contents: any = {};
  if (String(output.EnvironmentInfo).trim() === "") {
    contents[_EInv] = [];
  } else if (output[_EInv] != null && output[_EInv][_m] != null) {
    contents[_EInv] = de_EnvironmentInfoDescriptionList(__getArrayIfSingleItem(output[_EInv][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryS3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  const contents: any = {};
  if (output[_SBu] != null) {
    contents[_SBu] = __expectString(output[_SBu]);
  }
  if (output[_SK] != null) {
    contents[_SK] = __expectString(output[_SK]);
  }
  return contents;
};

/**
 * deserializeAws_queryS3LocationNotInServiceRegionException
 */
const de_S3LocationNotInServiceRegionException = (
  output: any,
  context: __SerdeContext
): S3LocationNotInServiceRegionException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryS3SubscriptionRequiredException
 */
const de_S3SubscriptionRequiredException = (output: any, context: __SerdeContext): S3SubscriptionRequiredException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_querySingleInstanceHealth
 */
const de_SingleInstanceHealth = (output: any, context: __SerdeContext): SingleInstanceHealth => {
  const contents: any = {};
  if (output[_IIn] != null) {
    contents[_IIn] = __expectString(output[_IIn]);
  }
  if (output[_HS] != null) {
    contents[_HS] = __expectString(output[_HS]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (String(output.Causes).trim() === "") {
    contents[_Ca] = [];
  } else if (output[_Ca] != null && output[_Ca][_m] != null) {
    contents[_Ca] = de_Causes(__getArrayIfSingleItem(output[_Ca][_m]), context);
  }
  if (output[_LA] != null) {
    contents[_LA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LA]));
  }
  if (output[_AM] != null) {
    contents[_AM] = de_ApplicationMetrics(output[_AM], context);
  }
  if (output[_Sy] != null) {
    contents[_Sy] = de_SystemStatus(output[_Sy], context);
  }
  if (output[_Dep] != null) {
    contents[_Dep] = de_Deployment(output[_Dep], context);
  }
  if (output[_AZ] != null) {
    contents[_AZ] = __expectString(output[_AZ]);
  }
  if (output[_ITn] != null) {
    contents[_ITn] = __expectString(output[_ITn]);
  }
  return contents;
};

/**
 * deserializeAws_querySolutionStackDescription
 */
const de_SolutionStackDescription = (output: any, context: __SerdeContext): SolutionStackDescription => {
  const contents: any = {};
  if (output[_SSN] != null) {
    contents[_SSN] = __expectString(output[_SSN]);
  }
  if (String(output.PermittedFileTypes).trim() === "") {
    contents[_PFT] = [];
  } else if (output[_PFT] != null && output[_PFT][_m] != null) {
    contents[_PFT] = de_SolutionStackFileTypeList(__getArrayIfSingleItem(output[_PFT][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySolutionStackFileTypeList
 */
const de_SolutionStackFileTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySourceBuildInformation
 */
const de_SourceBuildInformation = (output: any, context: __SerdeContext): SourceBuildInformation => {
  const contents: any = {};
  if (output[_STo] != null) {
    contents[_STo] = __expectString(output[_STo]);
  }
  if (output[_SRo] != null) {
    contents[_SRo] = __expectString(output[_SRo]);
  }
  if (output[_SL] != null) {
    contents[_SL] = __expectString(output[_SL]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceBundleDeletionException
 */
const de_SourceBundleDeletionException = (output: any, context: __SerdeContext): SourceBundleDeletionException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryStatusCodes
 */
const de_StatusCodes = (output: any, context: __SerdeContext): StatusCodes => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __strictParseInt32(output[_St]) as number;
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __strictParseInt32(output[_Sta]) as number;
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __strictParseInt32(output[_Stat]) as number;
  }
  if (output[_Statu] != null) {
    contents[_Statu] = __strictParseInt32(output[_Statu]) as number;
  }
  return contents;
};

/**
 * deserializeAws_querySupportedAddonList
 */
const de_SupportedAddonList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySupportedTierList
 */
const de_SupportedTierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySystemStatus
 */
const de_SystemStatus = (output: any, context: __SerdeContext): SystemStatus => {
  const contents: any = {};
  if (output[_CPUU] != null) {
    contents[_CPUU] = de_CPUUtilization(output[_CPUU], context);
  }
  if (String(output.LoadAverage).trim() === "") {
    contents[_LAo] = [];
  } else if (output[_LAo] != null && output[_LAo][_m] != null) {
    contents[_LAo] = de_LoadAverage(__getArrayIfSingleItem(output[_LAo][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_queryTooManyApplicationsException
 */
const de_TooManyApplicationsException = (output: any, context: __SerdeContext): TooManyApplicationsException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyApplicationVersionsException
 */
const de_TooManyApplicationVersionsException = (
  output: any,
  context: __SerdeContext
): TooManyApplicationVersionsException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyBucketsException
 */
const de_TooManyBucketsException = (output: any, context: __SerdeContext): TooManyBucketsException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyConfigurationTemplatesException
 */
const de_TooManyConfigurationTemplatesException = (
  output: any,
  context: __SerdeContext
): TooManyConfigurationTemplatesException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyEnvironmentsException
 */
const de_TooManyEnvironmentsException = (output: any, context: __SerdeContext): TooManyEnvironmentsException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyPlatformsException
 */
const de_TooManyPlatformsException = (output: any, context: __SerdeContext): TooManyPlatformsException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrigger
 */
const de_Trigger = (output: any, context: __SerdeContext): Trigger => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  return contents;
};

/**
 * deserializeAws_queryTriggerList
 */
const de_TriggerList = (output: any, context: __SerdeContext): Trigger[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Trigger(entry, context);
    });
};

/**
 * deserializeAws_queryValidationMessage
 */
const de_ValidationMessage = (output: any, context: __SerdeContext): ValidationMessage => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output[_Se] != null) {
    contents[_Se] = __expectString(output[_Se]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_ON] != null) {
    contents[_ON] = __expectString(output[_ON]);
  }
  return contents;
};

/**
 * deserializeAws_queryValidationMessagesList
 */
const de_ValidationMessagesList = (output: any, context: __SerdeContext): ValidationMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValidationMessage(entry, context);
    });
};

/**
 * deserializeAws_queryVersionLabelsList
 */
const de_VersionLabelsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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

const _ = "2010-12-01";
const _A = "Action";
const _AA = "ApplicationArn";
const _ACA = "AutoCreateApplication";
const _AD = "ActionDescription";
const _AEMA = "ApplyEnvironmentManagedAction";
const _AEOR = "AssociateEnvironmentOperationsRole";
const _AEU = "AbortEnvironmentUpdate";
const _AI = "ActionId";
const _AM = "ApplicationMetrics";
const _AN = "ArtifactName";
const _ANp = "ApplicationName";
const _ANpp = "ApplicationNames";
const _ANt = "AttributeNames";
const _AOIP = "AbortableOperationInProgress";
const _AQ = "ApplicationQuota";
const _ARN = "ARN";
const _ASG = "AutoScalingGroups";
const _AT = "ActionType";
const _AV = "ApplicationVersion";
const _AVA = "ApplicationVersionArn";
const _AVQ = "ApplicationVersionQuota";
const _AVp = "ApplicationVersions";
const _AZ = "AvailabilityZone";
const _Ap = "Application";
const _App = "Applications";
const _At = "Attribute";
const _Av = "Available";
const _B = "Builder";
const _BA = "BuildArn";
const _BC = "BuildConfiguration";
const _BN = "BranchName";
const _BO = "BranchOrder";
const _C = "Color";
const _CA = "CreateApplication";
const _CAL = "CustomAmiList";
const _CAV = "CreateApplicationVersion";
const _CBSR = "CodeBuildServiceRole";
const _CCT = "CreateConfigurationTemplate";
const _CDNSA = "CheckDNSAvailability";
const _CE = "ComposeEnvironments";
const _CEr = "CreateEnvironment";
const _CNAME = "CNAME";
const _CNAMEP = "CNAMEPrefix";
const _CPQ = "CustomPlatformQuota";
const _CPUU = "CPUUtilization";
const _CPV = "CreatePlatformVersion";
const _CS = "ChangeSeverity";
const _CSL = "CreateStorageLocation";
const _CSo = "ConfigurationSettings";
const _CT = "ComputeType";
const _CTQ = "ConfigurationTemplateQuota";
const _CTo = "ConfigurationTemplates";
const _Ca = "Causes";
const _D = "Description";
const _DA = "DeleteApplication";
const _DAA = "DescribeAccountAttributes";
const _DAV = "DeleteApplicationVersion";
const _DAVe = "DescribeApplicationVersions";
const _DAe = "DescribeApplications";
const _DC = "DateCreated";
const _DCO = "DescribeConfigurationOptions";
const _DCS = "DescribeConfigurationSettings";
const _DCT = "DeleteConfigurationTemplate";
const _DE = "DescribeEnvironments";
const _DEC = "DeleteEnvironmentConfiguration";
const _DEH = "DescribeEnvironmentHealth";
const _DEI = "DestinationEnvironmentId";
const _DEMA = "DescribeEnvironmentManagedActions";
const _DEMAH = "DescribeEnvironmentManagedActionHistory";
const _DEN = "DestinationEnvironmentName";
const _DEOR = "DisassociateEnvironmentOperationsRole";
const _DER = "DescribeEnvironmentResources";
const _DEe = "DescribeEvents";
const _DI = "DeploymentId";
const _DIH = "DescribeInstancesHealth";
const _DPV = "DeletePlatformVersion";
const _DPVe = "DescribePlatformVersion";
const _DS = "DeploymentStatus";
const _DSB = "DeleteSourceBundle";
const _DSFS = "DeleteSourceFromS3";
const _DT = "DeploymentTime";
const _DU = "DateUpdated";
const _DV = "DefaultValue";
const _De = "Degraded";
const _Dep = "Deployment";
const _Do = "Domain";
const _Du = "Duration";
const _E = "Enabled";
const _EA = "EnvironmentArn";
const _ED = "EventDate";
const _EI = "EnvironmentId";
const _EII = "Ec2InstanceId";
const _EIn = "EnvironmentIds";
const _EInv = "EnvironmentInfo";
const _EL = "EnvironmentLinks";
const _EN = "EnvironmentName";
const _ENn = "EnvironmentNames";
const _EQ = "EnvironmentQuota";
const _ER = "EnvironmentResources";
const _ET = "EndTime";
const _ETx = "ExecutedTime";
const _EURL = "EndpointURL";
const _En = "Environments";
const _Ev = "Events";
const _F = "Filters";
const _FD = "FailureDescription";
const _FQCNAME = "FullyQualifiedCNAME";
const _FT = "ForceTerminate";
const _FTa = "FailureType";
const _FTi = "FinishedTime";
const _Fr = "Frameworks";
const _GN = "GroupName";
const _H = "Health";
const _HS = "HealthStatus";
const _I = "Image";
const _ID = "IncludeDeleted";
const _IDBT = "IncludedDeletedBackTo";
const _IH = "InstancesHealth";
const _IHL = "InstanceHealthList";
const _II = "ImageId";
const _IIn = "InstanceId";
const _IOW = "IOWait";
const _IRQ = "IRQ";
const _IT = "InfoType";
const _ITn = "InstanceType";
const _Id = "Idle";
const _Id_ = "Id";
const _In = "Instances";
const _Inf = "Info";
const _K = "Key";
const _L = "Latency";
const _LA = "LaunchedAt";
const _LASS = "ListAvailableSolutionStacks";
const _LAo = "LoadAverage";
const _LB = "LoadBalancers";
const _LBN = "LoadBalancerName";
const _LBo = "LoadBalancer";
const _LC = "LaunchConfigurations";
const _LN = "LinkName";
const _LPB = "ListPlatformBranches";
const _LPV = "ListPlatformVersions";
const _LS = "LifecycleState";
const _LT = "LaunchTemplates";
const _LTFR = "ListTagsForResource";
const _La = "Label";
const _Li = "Listeners";
const _M = "Messages";
const _MA = "ManagedActions";
const _MAHI = "ManagedActionHistoryItems";
const _MAID = "MaxAgeInDays";
const _MAR = "MaxAgeRule";
const _MC = "MaxCount";
const _MCR = "MaxCountRule";
const _MI = "MaxItems";
const _ML = "MaxLength";
const _MR = "MaxRecords";
const _MV = "MinValue";
const _MVa = "MaxValue";
const _Ma = "Maintainer";
const _Max = "Maximum";
const _Me = "Message";
const _N = "Namespace";
const _ND = "NoData";
const _NT = "NextToken";
const _Na = "Name";
const _Ni = "Nice";
const _O = "Options";
const _ON = "OptionName";
const _OR = "OperationsRole";
const _OS = "OptionSettings";
const _OSN = "OperatingSystemName";
const _OSV = "OperatingSystemVersion";
const _OTR = "OptionsToRemove";
const _Ok = "Ok";
const _Op = "Operator";
const _P = "Process";
const _PA = "PlatformArn";
const _PBLS = "PlatformBranchLifecycleState";
const _PBN = "PlatformBranchName";
const _PBSL = "PlatformBranchSummaryList";
const _PC = "PlatformCategory";
const _PD = "PlatformDescription";
const _PDB = "PlatformDefinitionBundle";
const _PFT = "PermittedFileTypes";
const _PL = "ProgrammingLanguages";
const _PLS = "PlatformLifecycleState";
const _PN = "PlatformName";
const _PO = "PlatformOwner";
const _PS = "PlatformSummary";
const _PSL = "PlatformSummaryList";
const _PSl = "PlatformStatus";
const _PV = "PlatformVersion";
const _P_ = "P999";
const _P__ = "P99";
const _P___ = "P95";
const _P____ = "P90";
const _P_____ = "P85";
const _P______ = "P75";
const _P_______ = "P50";
const _P________ = "P10";
const _Pa = "Pattern";
const _Pe = "Pending";
const _Po = "Port";
const _Pr = "Privileged";
const _Pro = "Protocol";
const _Q = "Queues";
const _R = "Regex";
const _RA = "ResourceArn";
const _RAS = "RestartAppServer";
const _RAe = "RefreshedAt";
const _RC = "RequestCount";
const _RE = "RebuildEnvironment";
const _REI = "RequestEnvironmentInfo";
const _REIe = "RetrieveEnvironmentInfo";
const _RI = "RequestId";
const _RLC = "ResourceLifecycleConfig";
const _RN = "ResourceName";
const _RQ = "ResourceQuotas";
const _RT = "ResourceTags";
const _Re = "Resources";
const _S = "Status";
const _SAL = "SupportedAddonList";
const _SB = "SourceBundle";
const _SBI = "SourceBuildInformation";
const _SBu = "S3Bucket";
const _SC = "SourceConfiguration";
const _SCt = "StatusCodes";
const _SECNAME = "SwapEnvironmentCNAMEs";
const _SEI = "SourceEnvironmentId";
const _SEN = "SourceEnvironmentName";
const _SIRQ = "SoftIRQ";
const _SK = "S3Key";
const _SL = "SourceLocation";
const _SR = "ServiceRole";
const _SRo = "SourceRepository";
const _SS = "SolutionStacks";
const _SSD = "SolutionStackDetails";
const _SSN = "SolutionStackName";
const _ST = "StartTime";
const _STL = "SupportedTierList";
const _STa = "SampleTimestamp";
const _STo = "SourceType";
const _Se = "Severity";
const _Sev = "Severe";
const _St = "Status2xx";
const _Sta = "Status3xx";
const _Stat = "Status4xx";
const _Statu = "Status5xx";
const _Sy = "System";
const _T = "Tags";
const _TE = "TerminateEnvironment";
const _TEBF = "TerminateEnvByForce";
const _TIM = "TimeoutInMinutes";
const _TN = "TemplateName";
const _TR = "TerminateResources";
const _TTA = "TagsToAdd";
const _TTR = "TagsToRemove";
const _Ti = "Tier";
const _Tr = "Triggers";
const _Ty = "Type";
const _U = "User";
const _UA = "UpdateApplication";
const _UARL = "UpdateApplicationResourceLifecycle";
const _UAV = "UpdateApplicationVersion";
const _UCT = "UpdateConfigurationTemplate";
const _UD = "UserDefined";
const _UE = "UpdateEnvironment";
const _URL = "URL";
const _UTFR = "UpdateTagsForResource";
const _Un = "Unknown";
const _V = "Version";
const _VCS = "ValidateConfigurationSettings";
const _VL = "VersionLabels";
const _VLC = "VersionLifecycleConfig";
const _VLe = "VersionLabel";
const _VO = "ValueOptions";
const _VT = "ValueType";
const _VTi = "VirtualizationType";
const _Va = "Value";
const _Val = "Values";
const _Ve = "Versions";
const _W = "Warning";
const _WST = "WindowStartTime";
const _m = "member";
const _me = "message";

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
