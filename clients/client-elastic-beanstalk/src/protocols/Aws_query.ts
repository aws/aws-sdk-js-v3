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
import { XMLParser } from "fast-xml-parser";

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
import { ElasticBeanstalkServiceException as __BaseException } from "../models/ElasticBeanstalkServiceException";
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
    Action: "AbortEnvironmentUpdate",
    Version: "2010-12-01",
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
    Action: "ApplyEnvironmentManagedAction",
    Version: "2010-12-01",
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
    Action: "AssociateEnvironmentOperationsRole",
    Version: "2010-12-01",
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
    Action: "CheckDNSAvailability",
    Version: "2010-12-01",
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
    Action: "ComposeEnvironments",
    Version: "2010-12-01",
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
    Action: "CreateApplication",
    Version: "2010-12-01",
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
    Action: "CreateApplicationVersion",
    Version: "2010-12-01",
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
    Action: "CreateConfigurationTemplate",
    Version: "2010-12-01",
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
    Action: "CreateEnvironment",
    Version: "2010-12-01",
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
    Action: "CreatePlatformVersion",
    Version: "2010-12-01",
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
    Action: "CreateStorageLocation",
    Version: "2010-12-01",
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
    Action: "DeleteApplication",
    Version: "2010-12-01",
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
    Action: "DeleteApplicationVersion",
    Version: "2010-12-01",
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
    Action: "DeleteConfigurationTemplate",
    Version: "2010-12-01",
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
    Action: "DeleteEnvironmentConfiguration",
    Version: "2010-12-01",
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
    Action: "DeletePlatformVersion",
    Version: "2010-12-01",
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
    Action: "DescribeAccountAttributes",
    Version: "2010-12-01",
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
    Action: "DescribeApplications",
    Version: "2010-12-01",
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
    Action: "DescribeApplicationVersions",
    Version: "2010-12-01",
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
    Action: "DescribeConfigurationOptions",
    Version: "2010-12-01",
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
    Action: "DescribeConfigurationSettings",
    Version: "2010-12-01",
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
    Action: "DescribeEnvironmentHealth",
    Version: "2010-12-01",
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
    Action: "DescribeEnvironmentManagedActionHistory",
    Version: "2010-12-01",
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
    Action: "DescribeEnvironmentManagedActions",
    Version: "2010-12-01",
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
    Action: "DescribeEnvironmentResources",
    Version: "2010-12-01",
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
    Action: "DescribeEnvironments",
    Version: "2010-12-01",
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
    Action: "DescribeEvents",
    Version: "2010-12-01",
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
    Action: "DescribeInstancesHealth",
    Version: "2010-12-01",
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
    Action: "DescribePlatformVersion",
    Version: "2010-12-01",
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
    Action: "DisassociateEnvironmentOperationsRole",
    Version: "2010-12-01",
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
    Action: "ListAvailableSolutionStacks",
    Version: "2010-12-01",
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
    Action: "ListPlatformBranches",
    Version: "2010-12-01",
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
    Action: "ListPlatformVersions",
    Version: "2010-12-01",
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
    Action: "ListTagsForResource",
    Version: "2010-12-01",
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
    Action: "RebuildEnvironment",
    Version: "2010-12-01",
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
    Action: "RequestEnvironmentInfo",
    Version: "2010-12-01",
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
    Action: "RestartAppServer",
    Version: "2010-12-01",
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
    Action: "RetrieveEnvironmentInfo",
    Version: "2010-12-01",
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
    Action: "SwapEnvironmentCNAMEs",
    Version: "2010-12-01",
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
    Action: "TerminateEnvironment",
    Version: "2010-12-01",
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
    Action: "UpdateApplication",
    Version: "2010-12-01",
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
    Action: "UpdateApplicationResourceLifecycle",
    Version: "2010-12-01",
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
    Action: "UpdateApplicationVersion",
    Version: "2010-12-01",
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
    Action: "UpdateConfigurationTemplate",
    Version: "2010-12-01",
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
    Action: "UpdateEnvironment",
    Version: "2010-12-01",
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
    Action: "UpdateTagsForResource",
    Version: "2010-12-01",
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
    Action: "ValidateConfigurationSettings",
    Version: "2010-12-01",
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
    return de_AbortEnvironmentUpdateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AbortEnvironmentUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAbortEnvironmentUpdateCommandError
 */
const de_AbortEnvironmentUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortEnvironmentUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryApplyEnvironmentManagedActionCommand
 */
export const de_ApplyEnvironmentManagedActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyEnvironmentManagedActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ApplyEnvironmentManagedActionCommandError(output, context);
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
 * deserializeAws_queryApplyEnvironmentManagedActionCommandError
 */
const de_ApplyEnvironmentManagedActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyEnvironmentManagedActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
    case "ManagedActionInvalidStateException":
    case "com.amazonaws.elasticbeanstalk#ManagedActionInvalidStateException":
      throw await de_ManagedActionInvalidStateExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryAssociateEnvironmentOperationsRoleCommand
 */
export const de_AssociateEnvironmentOperationsRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEnvironmentOperationsRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateEnvironmentOperationsRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateEnvironmentOperationsRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAssociateEnvironmentOperationsRoleCommandError
 */
const de_AssociateEnvironmentOperationsRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEnvironmentOperationsRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCheckDNSAvailabilityCommand
 */
export const de_CheckDNSAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDNSAvailabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckDNSAvailabilityCommandError(output, context);
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
 * deserializeAws_queryCheckDNSAvailabilityCommandError
 */
const de_CheckDNSAvailabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDNSAvailabilityCommandOutput> => {
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
 * deserializeAws_queryComposeEnvironmentsCommand
 */
export const de_ComposeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ComposeEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ComposeEnvironmentsCommandError(output, context);
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
 * deserializeAws_queryComposeEnvironmentsCommandError
 */
const de_ComposeEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ComposeEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "TooManyEnvironmentsException":
    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
      throw await de_TooManyEnvironmentsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
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
 * deserializeAws_queryCreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TooManyApplicationsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
      throw await de_TooManyApplicationsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateApplicationVersionCommand
 */
export const de_CreateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationVersionCommandError(output, context);
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
 * deserializeAws_queryCreateApplicationVersionCommandError
 */
const de_CreateApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeBuildNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#CodeBuildNotInServiceRegionException":
      throw await de_CodeBuildNotInServiceRegionExceptionRes(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "S3LocationNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
      throw await de_S3LocationNotInServiceRegionExceptionRes(parsedOutput, context);
    case "TooManyApplicationVersionsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationVersionsException":
      throw await de_TooManyApplicationVersionsExceptionRes(parsedOutput, context);
    case "TooManyApplicationsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
      throw await de_TooManyApplicationsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateConfigurationTemplateCommand
 */
export const de_CreateConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConfigurationTemplateCommandError(output, context);
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
 * deserializeAws_queryCreateConfigurationTemplateCommandError
 */
const de_CreateConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await de_TooManyBucketsExceptionRes(parsedOutput, context);
    case "TooManyConfigurationTemplatesException":
    case "com.amazonaws.elasticbeanstalk#TooManyConfigurationTemplatesException":
      throw await de_TooManyConfigurationTemplatesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEnvironmentCommandError(output, context);
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
 * deserializeAws_queryCreateEnvironmentCommandError
 */
const de_CreateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "TooManyEnvironmentsException":
    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
      throw await de_TooManyEnvironmentsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreatePlatformVersionCommand
 */
export const de_CreatePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePlatformVersionCommandError(output, context);
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
 * deserializeAws_queryCreatePlatformVersionCommandError
 */
const de_CreatePlatformVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "TooManyPlatformsException":
    case "com.amazonaws.elasticbeanstalk#TooManyPlatformsException":
      throw await de_TooManyPlatformsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateStorageLocationCommand
 */
export const de_CreateStorageLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStorageLocationCommandError(output, context);
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
 * deserializeAws_queryCreateStorageLocationCommandError
 */
const de_CreateStorageLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "S3SubscriptionRequiredException":
    case "com.amazonaws.elasticbeanstalk#S3SubscriptionRequiredException":
      throw await de_S3SubscriptionRequiredExceptionRes(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await de_TooManyBucketsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteApplicationCommandError
 */
const de_DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteApplicationVersionCommand
 */
export const de_DeleteApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationVersionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteApplicationVersionCommandError
 */
const de_DeleteApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "S3LocationNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
      throw await de_S3LocationNotInServiceRegionExceptionRes(parsedOutput, context);
    case "SourceBundleDeletionFailure":
    case "com.amazonaws.elasticbeanstalk#SourceBundleDeletionException":
      throw await de_SourceBundleDeletionExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteConfigurationTemplateCommand
 */
export const de_DeleteConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConfigurationTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteConfigurationTemplateCommandError
 */
const de_DeleteConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteEnvironmentConfigurationCommand
 */
export const de_DeleteEnvironmentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEnvironmentConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEnvironmentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEnvironmentConfigurationCommandError
 */
const de_DeleteEnvironmentConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentConfigurationCommandOutput> => {
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
 * deserializeAws_queryDeletePlatformVersionCommand
 */
export const de_DeletePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePlatformVersionCommandError(output, context);
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
 * deserializeAws_queryDeletePlatformVersionCommandError
 */
const de_DeletePlatformVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "PlatformVersionStillReferencedException":
    case "com.amazonaws.elasticbeanstalk#PlatformVersionStillReferencedException":
      throw await de_PlatformVersionStillReferencedExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAttributesCommandError(output, context);
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
 * deserializeAws_queryDescribeAccountAttributesCommandError
 */
const de_DescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeApplicationsCommand
 */
export const de_DescribeApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationsCommandError(output, context);
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
 * deserializeAws_queryDescribeApplicationsCommandError
 */
const de_DescribeApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
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
 * deserializeAws_queryDescribeApplicationVersionsCommand
 */
export const de_DescribeApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationVersionsCommandError(output, context);
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
 * deserializeAws_queryDescribeApplicationVersionsCommandError
 */
const de_DescribeApplicationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionsCommandOutput> => {
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
 * deserializeAws_queryDescribeConfigurationOptionsCommand
 */
export const de_DescribeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationOptionsCommandError(output, context);
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
 * deserializeAws_queryDescribeConfigurationOptionsCommandError
 */
const de_DescribeConfigurationOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await de_TooManyBucketsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeConfigurationSettingsCommand
 */
export const de_DescribeConfigurationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationSettingsCommandError(output, context);
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
 * deserializeAws_queryDescribeConfigurationSettingsCommandError
 */
const de_DescribeConfigurationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await de_TooManyBucketsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeEnvironmentHealthCommand
 */
export const de_DescribeEnvironmentHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEnvironmentHealthCommandError(output, context);
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
 * deserializeAws_queryDescribeEnvironmentHealthCommandError
 */
const de_DescribeEnvironmentHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand
 */
export const de_DescribeEnvironmentManagedActionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEnvironmentManagedActionHistoryCommandError(output, context);
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
 * deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError
 */
const de_DescribeEnvironmentManagedActionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeEnvironmentManagedActionsCommand
 */
export const de_DescribeEnvironmentManagedActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEnvironmentManagedActionsCommandError(output, context);
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
 * deserializeAws_queryDescribeEnvironmentManagedActionsCommandError
 */
const de_DescribeEnvironmentManagedActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeEnvironmentResourcesCommand
 */
export const de_DescribeEnvironmentResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEnvironmentResourcesCommandError(output, context);
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
 * deserializeAws_queryDescribeEnvironmentResourcesCommandError
 */
const de_DescribeEnvironmentResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribeEnvironmentsCommand
 */
export const de_DescribeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEnvironmentsCommandError(output, context);
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
 * deserializeAws_queryDescribeEnvironmentsCommandError
 */
const de_DescribeEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
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
 * deserializeAws_queryDescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsCommandError(output, context);
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
 * deserializeAws_queryDescribeEventsCommandError
 */
const de_DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
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
 * deserializeAws_queryDescribeInstancesHealthCommand
 */
export const de_DescribeInstancesHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstancesHealthCommandError(output, context);
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
 * deserializeAws_queryDescribeInstancesHealthCommandError
 */
const de_DescribeInstancesHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDescribePlatformVersionCommand
 */
export const de_DescribePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePlatformVersionCommandError(output, context);
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
 * deserializeAws_queryDescribePlatformVersionCommandError
 */
const de_DescribePlatformVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlatformVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand
 */
export const de_DisassociateEnvironmentOperationsRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEnvironmentOperationsRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateEnvironmentOperationsRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateEnvironmentOperationsRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDisassociateEnvironmentOperationsRoleCommandError
 */
const de_DisassociateEnvironmentOperationsRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEnvironmentOperationsRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryListAvailableSolutionStacksCommand
 */
export const de_ListAvailableSolutionStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableSolutionStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableSolutionStacksCommandError(output, context);
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
 * deserializeAws_queryListAvailableSolutionStacksCommandError
 */
const de_ListAvailableSolutionStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableSolutionStacksCommandOutput> => {
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
 * deserializeAws_queryListPlatformBranchesCommand
 */
export const de_ListPlatformBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformBranchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPlatformBranchesCommandError(output, context);
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
 * deserializeAws_queryListPlatformBranchesCommandError
 */
const de_ListPlatformBranchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformBranchesCommandOutput> => {
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
 * deserializeAws_queryListPlatformVersionsCommand
 */
export const de_ListPlatformVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPlatformVersionsCommandError(output, context);
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
 * deserializeAws_queryListPlatformVersionsCommandError
 */
const de_ListPlatformVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ElasticBeanstalkServiceException":
    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
      throw await de_ElasticBeanstalkServiceExceptionRes(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
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
 * deserializeAws_queryListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
      throw await de_ResourceTypeNotSupportedExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryRebuildEnvironmentCommand
 */
export const de_RebuildEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebuildEnvironmentCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RebuildEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRebuildEnvironmentCommandError
 */
const de_RebuildEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryRequestEnvironmentInfoCommand
 */
export const de_RequestEnvironmentInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestEnvironmentInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RequestEnvironmentInfoCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RequestEnvironmentInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRequestEnvironmentInfoCommandError
 */
const de_RequestEnvironmentInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestEnvironmentInfoCommandOutput> => {
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
 * deserializeAws_queryRestartAppServerCommand
 */
export const de_RestartAppServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartAppServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestartAppServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RestartAppServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRestartAppServerCommandError
 */
const de_RestartAppServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartAppServerCommandOutput> => {
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
 * deserializeAws_queryRetrieveEnvironmentInfoCommand
 */
export const de_RetrieveEnvironmentInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveEnvironmentInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetrieveEnvironmentInfoCommandError(output, context);
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
 * deserializeAws_queryRetrieveEnvironmentInfoCommandError
 */
const de_RetrieveEnvironmentInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveEnvironmentInfoCommandOutput> => {
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
 * deserializeAws_querySwapEnvironmentCNAMEsCommand
 */
export const de_SwapEnvironmentCNAMEsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwapEnvironmentCNAMEsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SwapEnvironmentCNAMEsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SwapEnvironmentCNAMEsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySwapEnvironmentCNAMEsCommandError
 */
const de_SwapEnvironmentCNAMEsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwapEnvironmentCNAMEsCommandOutput> => {
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
 * deserializeAws_queryTerminateEnvironmentCommand
 */
export const de_TerminateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateEnvironmentCommandError(output, context);
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
 * deserializeAws_queryTerminateEnvironmentCommandError
 */
const de_TerminateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
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
 * deserializeAws_queryUpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
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
 * deserializeAws_queryUpdateApplicationResourceLifecycleCommand
 */
export const de_UpdateApplicationResourceLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationResourceLifecycleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationResourceLifecycleCommandError(output, context);
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
 * deserializeAws_queryUpdateApplicationResourceLifecycleCommandError
 */
const de_UpdateApplicationResourceLifecycleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationResourceLifecycleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateApplicationVersionCommand
 */
export const de_UpdateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationVersionCommandError(output, context);
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
 * deserializeAws_queryUpdateApplicationVersionCommandError
 */
const de_UpdateApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationVersionCommandOutput> => {
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
 * deserializeAws_queryUpdateConfigurationTemplateCommand
 */
export const de_UpdateConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConfigurationTemplateCommandError(output, context);
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
 * deserializeAws_queryUpdateConfigurationTemplateCommandError
 */
const de_UpdateConfigurationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await de_TooManyBucketsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEnvironmentCommandError(output, context);
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
 * deserializeAws_queryUpdateEnvironmentCommandError
 */
const de_UpdateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await de_TooManyBucketsExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUpdateTagsForResourceCommand
 */
export const de_UpdateTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTagsForResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateTagsForResourceCommandError
 */
const de_UpdateTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_queryValidateConfigurationSettingsCommand
 */
export const de_ValidateConfigurationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ValidateConfigurationSettingsCommandError(output, context);
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
 * deserializeAws_queryValidateConfigurationSettingsCommandError
 */
const de_ValidateConfigurationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await de_InsufficientPrivilegesExceptionRes(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await de_TooManyBucketsExceptionRes(parsedOutput, context);
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
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
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
  if (input.ServiceRole != null) {
    entries["ServiceRole"] = input.ServiceRole;
  }
  if (input.VersionLifecycleConfig != null) {
    const memberEntries = se_ApplicationVersionLifecycleConfig(input.VersionLifecycleConfig, context);
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
  if (input.MaxCountRule != null) {
    const memberEntries = se_MaxCountRule(input.MaxCountRule, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MaxCountRule.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxAgeRule != null) {
    const memberEntries = se_MaxAgeRule(input.MaxAgeRule, context);
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
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.ActionId != null) {
    entries["ActionId"] = input.ActionId;
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
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.OperationsRole != null) {
    entries["OperationsRole"] = input.OperationsRole;
  }
  return entries;
};

/**
 * serializeAws_queryBuildConfiguration
 */
const se_BuildConfiguration = (input: BuildConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ArtifactName != null) {
    entries["ArtifactName"] = input.ArtifactName;
  }
  if (input.CodeBuildServiceRole != null) {
    entries["CodeBuildServiceRole"] = input.CodeBuildServiceRole;
  }
  if (input.ComputeType != null) {
    entries["ComputeType"] = input.ComputeType;
  }
  if (input.Image != null) {
    entries["Image"] = input.Image;
  }
  if (input.TimeoutInMinutes != null) {
    entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
  }
  return entries;
};

/**
 * serializeAws_queryCheckDNSAvailabilityMessage
 */
const se_CheckDNSAvailabilityMessage = (input: CheckDNSAvailabilityMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CNAMEPrefix != null) {
    entries["CNAMEPrefix"] = input.CNAMEPrefix;
  }
  return entries;
};

/**
 * serializeAws_queryComposeEnvironmentsMessage
 */
const se_ComposeEnvironmentsMessage = (input: ComposeEnvironmentsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.VersionLabels != null) {
    const memberEntries = se_VersionLabels(input.VersionLabels, context);
    if (input.VersionLabels?.length === 0) {
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
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.OptionName != null) {
    entries["OptionName"] = input.OptionName;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.ResourceLifecycleConfig != null) {
    const memberEntries = se_ApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceLifecycleConfig.${key}`;
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
  return entries;
};

/**
 * serializeAws_queryCreateApplicationVersionMessage
 */
const se_CreateApplicationVersionMessage = (input: CreateApplicationVersionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.VersionLabel != null) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.SourceBuildInformation != null) {
    const memberEntries = se_SourceBuildInformation(input.SourceBuildInformation, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceBuildInformation.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SourceBundle != null) {
    const memberEntries = se_S3Location(input.SourceBundle, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceBundle.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BuildConfiguration != null) {
    const memberEntries = se_BuildConfiguration(input.BuildConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BuildConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoCreateApplication != null) {
    entries["AutoCreateApplication"] = input.AutoCreateApplication;
  }
  if (input.Process != null) {
    entries["Process"] = input.Process;
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.SolutionStackName != null) {
    entries["SolutionStackName"] = input.SolutionStackName;
  }
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.SourceConfiguration != null) {
    const memberEntries = se_SourceConfiguration(input.SourceConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.OptionSettings != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
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
  return entries;
};

/**
 * serializeAws_queryCreateEnvironmentMessage
 */
const se_CreateEnvironmentMessage = (input: CreateEnvironmentMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.CNAMEPrefix != null) {
    entries["CNAMEPrefix"] = input.CNAMEPrefix;
  }
  if (input.Tier != null) {
    const memberEntries = se_EnvironmentTier(input.Tier, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tier.${key}`;
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
  if (input.VersionLabel != null) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.SolutionStackName != null) {
    entries["SolutionStackName"] = input.SolutionStackName;
  }
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.OptionSettings != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionsToRemove != null) {
    const memberEntries = se_OptionsSpecifierList(input.OptionsToRemove, context);
    if (input.OptionsToRemove?.length === 0) {
      entries.OptionsToRemove = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionsToRemove.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OperationsRole != null) {
    entries["OperationsRole"] = input.OperationsRole;
  }
  return entries;
};

/**
 * serializeAws_queryCreatePlatformVersionRequest
 */
const se_CreatePlatformVersionRequest = (input: CreatePlatformVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PlatformName != null) {
    entries["PlatformName"] = input.PlatformName;
  }
  if (input.PlatformVersion != null) {
    entries["PlatformVersion"] = input.PlatformVersion;
  }
  if (input.PlatformDefinitionBundle != null) {
    const memberEntries = se_S3Location(input.PlatformDefinitionBundle, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PlatformDefinitionBundle.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.OptionSettings != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
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
  return entries;
};

/**
 * serializeAws_queryDeleteApplicationMessage
 */
const se_DeleteApplicationMessage = (input: DeleteApplicationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TerminateEnvByForce != null) {
    entries["TerminateEnvByForce"] = input.TerminateEnvByForce;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteApplicationVersionMessage
 */
const se_DeleteApplicationVersionMessage = (input: DeleteApplicationVersionMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.VersionLabel != null) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  if (input.DeleteSourceBundle != null) {
    entries["DeleteSourceBundle"] = input.DeleteSourceBundle;
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

/**
 * serializeAws_queryDeletePlatformVersionRequest
 */
const se_DeletePlatformVersionRequest = (input: DeletePlatformVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeApplicationsMessage
 */
const se_DescribeApplicationsMessage = (input: DescribeApplicationsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationNames != null) {
    const memberEntries = se_ApplicationNamesList(input.ApplicationNames, context);
    if (input.ApplicationNames?.length === 0) {
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.VersionLabels != null) {
    const memberEntries = se_VersionLabelsList(input.VersionLabels, context);
    if (input.VersionLabels?.length === 0) {
      entries.VersionLabels = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VersionLabels.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.SolutionStackName != null) {
    entries["SolutionStackName"] = input.SolutionStackName;
  }
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.Options != null) {
    const memberEntries = se_OptionsSpecifierList(input.Options, context);
    if (input.Options?.length === 0) {
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEnvironmentHealthRequest
 */
const se_DescribeEnvironmentHealthRequest = (input: DescribeEnvironmentHealthRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.AttributeNames != null) {
    const memberEntries = se_EnvironmentHealthAttributes(input.AttributeNames, context);
    if (input.AttributeNames?.length === 0) {
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
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
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
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
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
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEnvironmentsMessage
 */
const se_DescribeEnvironmentsMessage = (input: DescribeEnvironmentsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.VersionLabel != null) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  if (input.EnvironmentIds != null) {
    const memberEntries = se_EnvironmentIdList(input.EnvironmentIds, context);
    if (input.EnvironmentIds?.length === 0) {
      entries.EnvironmentIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnvironmentIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EnvironmentNames != null) {
    const memberEntries = se_EnvironmentNamesList(input.EnvironmentNames, context);
    if (input.EnvironmentNames?.length === 0) {
      entries.EnvironmentNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnvironmentNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IncludeDeleted != null) {
    entries["IncludeDeleted"] = input.IncludeDeleted;
  }
  if (input.IncludedDeletedBackTo != null) {
    entries["IncludedDeletedBackTo"] = input.IncludedDeletedBackTo.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEventsMessage
 */
const se_DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.VersionLabel != null) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.RequestId != null) {
    entries["RequestId"] = input.RequestId;
  }
  if (input.Severity != null) {
    entries["Severity"] = input.Severity;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeInstancesHealthRequest
 */
const se_DescribeInstancesHealthRequest = (input: DescribeInstancesHealthRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.AttributeNames != null) {
    const memberEntries = se_InstancesHealthAttributes(input.AttributeNames, context);
    if (input.AttributeNames?.length === 0) {
      entries.AttributeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribePlatformVersionRequest
 */
const se_DescribePlatformVersionRequest = (input: DescribePlatformVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
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
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.Version != null) {
    entries["Version"] = input.Version;
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
  if (input.Filters != null) {
    const memberEntries = se_SearchFilters(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListPlatformVersionsRequest
 */
const se_ListPlatformVersionsRequest = (input: ListPlatformVersionsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Filters != null) {
    const memberEntries = se_PlatformFilters(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListTagsForResourceMessage
 */
const se_ListTagsForResourceMessage = (input: ListTagsForResourceMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  return entries;
};

/**
 * serializeAws_queryMaxAgeRule
 */
const se_MaxAgeRule = (input: MaxAgeRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.MaxAgeInDays != null) {
    entries["MaxAgeInDays"] = input.MaxAgeInDays;
  }
  if (input.DeleteSourceFromS3 != null) {
    entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
  }
  return entries;
};

/**
 * serializeAws_queryMaxCountRule
 */
const se_MaxCountRule = (input: MaxCountRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.MaxCount != null) {
    entries["MaxCount"] = input.MaxCount;
  }
  if (input.DeleteSourceFromS3 != null) {
    entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
  }
  return entries;
};

/**
 * serializeAws_queryOptionSpecification
 */
const se_OptionSpecification = (input: OptionSpecification, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceName != null) {
    entries["ResourceName"] = input.ResourceName;
  }
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.OptionName != null) {
    entries["OptionName"] = input.OptionName;
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
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.Operator != null) {
    entries["Operator"] = input.Operator;
  }
  if (input.Values != null) {
    const memberEntries = se_PlatformFilterValueList(input.Values, context);
    if (input.Values?.length === 0) {
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
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

/**
 * serializeAws_queryRequestEnvironmentInfoMessage
 */
const se_RequestEnvironmentInfoMessage = (input: RequestEnvironmentInfoMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.InfoType != null) {
    entries["InfoType"] = input.InfoType;
  }
  return entries;
};

/**
 * serializeAws_queryRestartAppServerMessage
 */
const se_RestartAppServerMessage = (input: RestartAppServerMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

/**
 * serializeAws_queryRetrieveEnvironmentInfoMessage
 */
const se_RetrieveEnvironmentInfoMessage = (input: RetrieveEnvironmentInfoMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.InfoType != null) {
    entries["InfoType"] = input.InfoType;
  }
  return entries;
};

/**
 * serializeAws_queryS3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.S3Bucket != null) {
    entries["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key != null) {
    entries["S3Key"] = input.S3Key;
  }
  return entries;
};

/**
 * serializeAws_querySearchFilter
 */
const se_SearchFilter = (input: SearchFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Attribute != null) {
    entries["Attribute"] = input.Attribute;
  }
  if (input.Operator != null) {
    entries["Operator"] = input.Operator;
  }
  if (input.Values != null) {
    const memberEntries = se_SearchFilterValues(input.Values, context);
    if (input.Values?.length === 0) {
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
  if (input.SourceType != null) {
    entries["SourceType"] = input.SourceType;
  }
  if (input.SourceRepository != null) {
    entries["SourceRepository"] = input.SourceRepository;
  }
  if (input.SourceLocation != null) {
    entries["SourceLocation"] = input.SourceLocation;
  }
  return entries;
};

/**
 * serializeAws_querySourceConfiguration
 */
const se_SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

/**
 * serializeAws_querySwapEnvironmentCNAMEsMessage
 */
const se_SwapEnvironmentCNAMEsMessage = (input: SwapEnvironmentCNAMEsMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceEnvironmentId != null) {
    entries["SourceEnvironmentId"] = input.SourceEnvironmentId;
  }
  if (input.SourceEnvironmentName != null) {
    entries["SourceEnvironmentName"] = input.SourceEnvironmentName;
  }
  if (input.DestinationEnvironmentId != null) {
    entries["DestinationEnvironmentId"] = input.DestinationEnvironmentId;
  }
  if (input.DestinationEnvironmentName != null) {
    entries["DestinationEnvironmentName"] = input.DestinationEnvironmentName;
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
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.TerminateResources != null) {
    entries["TerminateResources"] = input.TerminateResources;
  }
  if (input.ForceTerminate != null) {
    entries["ForceTerminate"] = input.ForceTerminate;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateApplicationMessage
 */
const se_UpdateApplicationMessage = (input: UpdateApplicationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.ResourceLifecycleConfig != null) {
    const memberEntries = se_ApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.VersionLabel != null) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.OptionSettings != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionsToRemove != null) {
    const memberEntries = se_OptionsSpecifierList(input.OptionsToRemove, context);
    if (input.OptionsToRemove?.length === 0) {
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Tier != null) {
    const memberEntries = se_EnvironmentTier(input.Tier, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tier.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VersionLabel != null) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.SolutionStackName != null) {
    entries["SolutionStackName"] = input.SolutionStackName;
  }
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  if (input.OptionSettings != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionsToRemove != null) {
    const memberEntries = se_OptionsSpecifierList(input.OptionsToRemove, context);
    if (input.OptionsToRemove?.length === 0) {
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
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagsToAdd != null) {
    const memberEntries = se_TagList(input.TagsToAdd, context);
    if (input.TagsToAdd?.length === 0) {
      entries.TagsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagsToRemove != null) {
    const memberEntries = se_TagKeyList(input.TagsToRemove, context);
    if (input.TagsToRemove?.length === 0) {
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
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.OptionSettings != null) {
    const memberEntries = se_ConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
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
  if (output["ApplicationArn"] !== undefined) {
    contents.ApplicationArn = __expectString(output["ApplicationArn"]);
  }
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = __expectString(output["ApplicationName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateUpdated"]));
  }
  if (output.Versions === "") {
    contents.Versions = [];
  } else if (output["Versions"] !== undefined && output["Versions"]["member"] !== undefined) {
    contents.Versions = de_VersionLabelsList(__getArrayIfSingleItem(output["Versions"]["member"]), context);
  }
  if (output.ConfigurationTemplates === "") {
    contents.ConfigurationTemplates = [];
  } else if (
    output["ConfigurationTemplates"] !== undefined &&
    output["ConfigurationTemplates"]["member"] !== undefined
  ) {
    contents.ConfigurationTemplates = de_ConfigurationTemplateNamesList(
      __getArrayIfSingleItem(output["ConfigurationTemplates"]["member"]),
      context
    );
  }
  if (output["ResourceLifecycleConfig"] !== undefined) {
    contents.ResourceLifecycleConfig = de_ApplicationResourceLifecycleConfig(
      output["ResourceLifecycleConfig"],
      context
    );
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
  if (output["Application"] !== undefined) {
    contents.Application = de_ApplicationDescription(output["Application"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationDescriptionsMessage
 */
const de_ApplicationDescriptionsMessage = (output: any, context: __SerdeContext): ApplicationDescriptionsMessage => {
  const contents: any = {};
  if (output.Applications === "") {
    contents.Applications = [];
  } else if (output["Applications"] !== undefined && output["Applications"]["member"] !== undefined) {
    contents.Applications = de_ApplicationDescriptionList(
      __getArrayIfSingleItem(output["Applications"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationMetrics
 */
const de_ApplicationMetrics = (output: any, context: __SerdeContext): ApplicationMetrics => {
  const contents: any = {};
  if (output["Duration"] !== undefined) {
    contents.Duration = __strictParseInt32(output["Duration"]) as number;
  }
  if (output["RequestCount"] !== undefined) {
    contents.RequestCount = __strictParseInt32(output["RequestCount"]) as number;
  }
  if (output["StatusCodes"] !== undefined) {
    contents.StatusCodes = de_StatusCodes(output["StatusCodes"], context);
  }
  if (output["Latency"] !== undefined) {
    contents.Latency = de_Latency(output["Latency"], context);
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
  if (output["ServiceRole"] !== undefined) {
    contents.ServiceRole = __expectString(output["ServiceRole"]);
  }
  if (output["VersionLifecycleConfig"] !== undefined) {
    contents.VersionLifecycleConfig = de_ApplicationVersionLifecycleConfig(output["VersionLifecycleConfig"], context);
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
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = __expectString(output["ApplicationName"]);
  }
  if (output["ResourceLifecycleConfig"] !== undefined) {
    contents.ResourceLifecycleConfig = de_ApplicationResourceLifecycleConfig(
      output["ResourceLifecycleConfig"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryApplicationVersionDescription
 */
const de_ApplicationVersionDescription = (output: any, context: __SerdeContext): ApplicationVersionDescription => {
  const contents: any = {};
  if (output["ApplicationVersionArn"] !== undefined) {
    contents.ApplicationVersionArn = __expectString(output["ApplicationVersionArn"]);
  }
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = __expectString(output["ApplicationName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["VersionLabel"] !== undefined) {
    contents.VersionLabel = __expectString(output["VersionLabel"]);
  }
  if (output["SourceBuildInformation"] !== undefined) {
    contents.SourceBuildInformation = de_SourceBuildInformation(output["SourceBuildInformation"], context);
  }
  if (output["BuildArn"] !== undefined) {
    contents.BuildArn = __expectString(output["BuildArn"]);
  }
  if (output["SourceBundle"] !== undefined) {
    contents.SourceBundle = de_S3Location(output["SourceBundle"], context);
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateUpdated"]));
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["ApplicationVersion"] !== undefined) {
    contents.ApplicationVersion = de_ApplicationVersionDescription(output["ApplicationVersion"], context);
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
  if (output.ApplicationVersions === "") {
    contents.ApplicationVersions = [];
  } else if (output["ApplicationVersions"] !== undefined && output["ApplicationVersions"]["member"] !== undefined) {
    contents.ApplicationVersions = de_ApplicationVersionDescriptionList(
      __getArrayIfSingleItem(output["ApplicationVersions"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
  if (output["MaxCountRule"] !== undefined) {
    contents.MaxCountRule = de_MaxCountRule(output["MaxCountRule"], context);
  }
  if (output["MaxAgeRule"] !== undefined) {
    contents.MaxAgeRule = de_MaxAgeRule(output["MaxAgeRule"], context);
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
  if (output["ActionId"] !== undefined) {
    contents.ActionId = __expectString(output["ActionId"]);
  }
  if (output["ActionDescription"] !== undefined) {
    contents.ActionDescription = __expectString(output["ActionDescription"]);
  }
  if (output["ActionType"] !== undefined) {
    contents.ActionType = __expectString(output["ActionType"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoScalingGroup
 */
const de_AutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
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
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
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
  if (output["Available"] !== undefined) {
    contents.Available = __parseBoolean(output["Available"]);
  }
  if (output["FullyQualifiedCNAME"] !== undefined) {
    contents.FullyQualifiedCNAME = __expectString(output["FullyQualifiedCNAME"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationOptionDescription
 */
const de_ConfigurationOptionDescription = (output: any, context: __SerdeContext): ConfigurationOptionDescription => {
  const contents: any = {};
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["ChangeSeverity"] !== undefined) {
    contents.ChangeSeverity = __expectString(output["ChangeSeverity"]);
  }
  if (output["UserDefined"] !== undefined) {
    contents.UserDefined = __parseBoolean(output["UserDefined"]);
  }
  if (output["ValueType"] !== undefined) {
    contents.ValueType = __expectString(output["ValueType"]);
  }
  if (output.ValueOptions === "") {
    contents.ValueOptions = [];
  } else if (output["ValueOptions"] !== undefined && output["ValueOptions"]["member"] !== undefined) {
    contents.ValueOptions = de_ConfigurationOptionPossibleValues(
      __getArrayIfSingleItem(output["ValueOptions"]["member"]),
      context
    );
  }
  if (output["MinValue"] !== undefined) {
    contents.MinValue = __strictParseInt32(output["MinValue"]) as number;
  }
  if (output["MaxValue"] !== undefined) {
    contents.MaxValue = __strictParseInt32(output["MaxValue"]) as number;
  }
  if (output["MaxLength"] !== undefined) {
    contents.MaxLength = __strictParseInt32(output["MaxLength"]) as number;
  }
  if (output["Regex"] !== undefined) {
    contents.Regex = de_OptionRestrictionRegex(output["Regex"], context);
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
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = __expectString(output["SolutionStackName"]);
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = __expectString(output["PlatformArn"]);
  }
  if (output.Options === "") {
    contents.Options = [];
  } else if (output["Options"] !== undefined && output["Options"]["member"] !== undefined) {
    contents.Options = de_ConfigurationOptionDescriptionsList(
      __getArrayIfSingleItem(output["Options"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationOptionSetting
 */
const de_ConfigurationOptionSetting = (output: any, context: __SerdeContext): ConfigurationOptionSetting => {
  const contents: any = {};
  if (output["ResourceName"] !== undefined) {
    contents.ResourceName = __expectString(output["ResourceName"]);
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["OptionName"] !== undefined) {
    contents.OptionName = __expectString(output["OptionName"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = __expectString(output["SolutionStackName"]);
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = __expectString(output["PlatformArn"]);
  }
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = __expectString(output["ApplicationName"]);
  }
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = __expectString(output["EnvironmentName"]);
  }
  if (output["DeploymentStatus"] !== undefined) {
    contents.DeploymentStatus = __expectString(output["DeploymentStatus"]);
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateUpdated"]));
  }
  if (output.OptionSettings === "") {
    contents.OptionSettings = [];
  } else if (output["OptionSettings"] !== undefined && output["OptionSettings"]["member"] !== undefined) {
    contents.OptionSettings = de_ConfigurationOptionSettingsList(
      __getArrayIfSingleItem(output["OptionSettings"]["member"]),
      context
    );
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
  if (output.ConfigurationSettings === "") {
    contents.ConfigurationSettings = [];
  } else if (output["ConfigurationSettings"] !== undefined && output["ConfigurationSettings"]["member"] !== undefined) {
    contents.ConfigurationSettings = de_ConfigurationSettingsDescriptionList(
      __getArrayIfSingleItem(output["ConfigurationSettings"]["member"]),
      context
    );
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
  if (output.Messages === "") {
    contents.Messages = [];
  } else if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
    contents.Messages = de_ValidationMessagesList(__getArrayIfSingleItem(output["Messages"]["member"]), context);
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
  if (output["User"] !== undefined) {
    contents.User = __strictParseFloat(output["User"]) as number;
  }
  if (output["Nice"] !== undefined) {
    contents.Nice = __strictParseFloat(output["Nice"]) as number;
  }
  if (output["System"] !== undefined) {
    contents.System = __strictParseFloat(output["System"]) as number;
  }
  if (output["Idle"] !== undefined) {
    contents.Idle = __strictParseFloat(output["Idle"]) as number;
  }
  if (output["IOWait"] !== undefined) {
    contents.IOWait = __strictParseFloat(output["IOWait"]) as number;
  }
  if (output["IRQ"] !== undefined) {
    contents.IRQ = __strictParseFloat(output["IRQ"]) as number;
  }
  if (output["SoftIRQ"] !== undefined) {
    contents.SoftIRQ = __strictParseFloat(output["SoftIRQ"]) as number;
  }
  if (output["Privileged"] !== undefined) {
    contents.Privileged = __strictParseFloat(output["Privileged"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryCreatePlatformVersionResult
 */
const de_CreatePlatformVersionResult = (output: any, context: __SerdeContext): CreatePlatformVersionResult => {
  const contents: any = {};
  if (output["PlatformSummary"] !== undefined) {
    contents.PlatformSummary = de_PlatformSummary(output["PlatformSummary"], context);
  }
  if (output["Builder"] !== undefined) {
    contents.Builder = de_Builder(output["Builder"], context);
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
  if (output["S3Bucket"] !== undefined) {
    contents.S3Bucket = __expectString(output["S3Bucket"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomAmi
 */
const de_CustomAmi = (output: any, context: __SerdeContext): CustomAmi => {
  const contents: any = {};
  if (output["VirtualizationType"] !== undefined) {
    contents.VirtualizationType = __expectString(output["VirtualizationType"]);
  }
  if (output["ImageId"] !== undefined) {
    contents.ImageId = __expectString(output["ImageId"]);
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
  if (output["PlatformSummary"] !== undefined) {
    contents.PlatformSummary = de_PlatformSummary(output["PlatformSummary"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  const contents: any = {};
  if (output["VersionLabel"] !== undefined) {
    contents.VersionLabel = __expectString(output["VersionLabel"]);
  }
  if (output["DeploymentId"] !== undefined) {
    contents.DeploymentId = __strictParseLong(output["DeploymentId"]) as number;
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["DeploymentTime"] !== undefined) {
    contents.DeploymentTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DeploymentTime"]));
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAccountAttributesResult
 */
const de_DescribeAccountAttributesResult = (output: any, context: __SerdeContext): DescribeAccountAttributesResult => {
  const contents: any = {};
  if (output["ResourceQuotas"] !== undefined) {
    contents.ResourceQuotas = de_ResourceQuotas(output["ResourceQuotas"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeEnvironmentHealthResult
 */
const de_DescribeEnvironmentHealthResult = (output: any, context: __SerdeContext): DescribeEnvironmentHealthResult => {
  const contents: any = {};
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = __expectString(output["EnvironmentName"]);
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = __expectString(output["HealthStatus"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Color"] !== undefined) {
    contents.Color = __expectString(output["Color"]);
  }
  if (output.Causes === "") {
    contents.Causes = [];
  } else if (output["Causes"] !== undefined && output["Causes"]["member"] !== undefined) {
    contents.Causes = de_Causes(__getArrayIfSingleItem(output["Causes"]["member"]), context);
  }
  if (output["ApplicationMetrics"] !== undefined) {
    contents.ApplicationMetrics = de_ApplicationMetrics(output["ApplicationMetrics"], context);
  }
  if (output["InstancesHealth"] !== undefined) {
    contents.InstancesHealth = de_InstanceHealthSummary(output["InstancesHealth"], context);
  }
  if (output["RefreshedAt"] !== undefined) {
    contents.RefreshedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["RefreshedAt"]));
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
  if (output.ManagedActionHistoryItems === "") {
    contents.ManagedActionHistoryItems = [];
  } else if (
    output["ManagedActionHistoryItems"] !== undefined &&
    output["ManagedActionHistoryItems"]["member"] !== undefined
  ) {
    contents.ManagedActionHistoryItems = de_ManagedActionHistoryItems(
      __getArrayIfSingleItem(output["ManagedActionHistoryItems"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
  if (output.ManagedActions === "") {
    contents.ManagedActions = [];
  } else if (output["ManagedActions"] !== undefined && output["ManagedActions"]["member"] !== undefined) {
    contents.ManagedActions = de_ManagedActions(__getArrayIfSingleItem(output["ManagedActions"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeInstancesHealthResult
 */
const de_DescribeInstancesHealthResult = (output: any, context: __SerdeContext): DescribeInstancesHealthResult => {
  const contents: any = {};
  if (output.InstanceHealthList === "") {
    contents.InstanceHealthList = [];
  } else if (output["InstanceHealthList"] !== undefined && output["InstanceHealthList"]["member"] !== undefined) {
    contents.InstanceHealthList = de_InstanceHealthList(
      __getArrayIfSingleItem(output["InstanceHealthList"]["member"]),
      context
    );
  }
  if (output["RefreshedAt"] !== undefined) {
    contents.RefreshedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["RefreshedAt"]));
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribePlatformVersionResult
 */
const de_DescribePlatformVersionResult = (output: any, context: __SerdeContext): DescribePlatformVersionResult => {
  const contents: any = {};
  if (output["PlatformDescription"] !== undefined) {
    contents.PlatformDescription = de_PlatformDescription(output["PlatformDescription"], context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentDescription
 */
const de_EnvironmentDescription = (output: any, context: __SerdeContext): EnvironmentDescription => {
  const contents: any = {};
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = __expectString(output["EnvironmentName"]);
  }
  if (output["EnvironmentId"] !== undefined) {
    contents.EnvironmentId = __expectString(output["EnvironmentId"]);
  }
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = __expectString(output["ApplicationName"]);
  }
  if (output["VersionLabel"] !== undefined) {
    contents.VersionLabel = __expectString(output["VersionLabel"]);
  }
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = __expectString(output["SolutionStackName"]);
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = __expectString(output["PlatformArn"]);
  }
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["EndpointURL"] !== undefined) {
    contents.EndpointURL = __expectString(output["EndpointURL"]);
  }
  if (output["CNAME"] !== undefined) {
    contents.CNAME = __expectString(output["CNAME"]);
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateUpdated"]));
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["AbortableOperationInProgress"] !== undefined) {
    contents.AbortableOperationInProgress = __parseBoolean(output["AbortableOperationInProgress"]);
  }
  if (output["Health"] !== undefined) {
    contents.Health = __expectString(output["Health"]);
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = __expectString(output["HealthStatus"]);
  }
  if (output["Resources"] !== undefined) {
    contents.Resources = de_EnvironmentResourcesDescription(output["Resources"], context);
  }
  if (output["Tier"] !== undefined) {
    contents.Tier = de_EnvironmentTier(output["Tier"], context);
  }
  if (output.EnvironmentLinks === "") {
    contents.EnvironmentLinks = [];
  } else if (output["EnvironmentLinks"] !== undefined && output["EnvironmentLinks"]["member"] !== undefined) {
    contents.EnvironmentLinks = de_EnvironmentLinks(
      __getArrayIfSingleItem(output["EnvironmentLinks"]["member"]),
      context
    );
  }
  if (output["EnvironmentArn"] !== undefined) {
    contents.EnvironmentArn = __expectString(output["EnvironmentArn"]);
  }
  if (output["OperationsRole"] !== undefined) {
    contents.OperationsRole = __expectString(output["OperationsRole"]);
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
  if (output.Environments === "") {
    contents.Environments = [];
  } else if (output["Environments"] !== undefined && output["Environments"]["member"] !== undefined) {
    contents.Environments = de_EnvironmentDescriptionsList(
      __getArrayIfSingleItem(output["Environments"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentInfoDescription
 */
const de_EnvironmentInfoDescription = (output: any, context: __SerdeContext): EnvironmentInfoDescription => {
  const contents: any = {};
  if (output["InfoType"] !== undefined) {
    contents.InfoType = __expectString(output["InfoType"]);
  }
  if (output["Ec2InstanceId"] !== undefined) {
    contents.Ec2InstanceId = __expectString(output["Ec2InstanceId"]);
  }
  if (output["SampleTimestamp"] !== undefined) {
    contents.SampleTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["SampleTimestamp"]));
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
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
  if (output["LinkName"] !== undefined) {
    contents.LinkName = __expectString(output["LinkName"]);
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = __expectString(output["EnvironmentName"]);
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
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = __expectString(output["EnvironmentName"]);
  }
  if (output.AutoScalingGroups === "") {
    contents.AutoScalingGroups = [];
  } else if (output["AutoScalingGroups"] !== undefined && output["AutoScalingGroups"]["member"] !== undefined) {
    contents.AutoScalingGroups = de_AutoScalingGroupList(
      __getArrayIfSingleItem(output["AutoScalingGroups"]["member"]),
      context
    );
  }
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = de_InstanceList(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output.LaunchConfigurations === "") {
    contents.LaunchConfigurations = [];
  } else if (output["LaunchConfigurations"] !== undefined && output["LaunchConfigurations"]["member"] !== undefined) {
    contents.LaunchConfigurations = de_LaunchConfigurationList(
      __getArrayIfSingleItem(output["LaunchConfigurations"]["member"]),
      context
    );
  }
  if (output.LaunchTemplates === "") {
    contents.LaunchTemplates = [];
  } else if (output["LaunchTemplates"] !== undefined && output["LaunchTemplates"]["member"] !== undefined) {
    contents.LaunchTemplates = de_LaunchTemplateList(
      __getArrayIfSingleItem(output["LaunchTemplates"]["member"]),
      context
    );
  }
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  } else if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = de_LoadBalancerList(__getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
  }
  if (output.Triggers === "") {
    contents.Triggers = [];
  } else if (output["Triggers"] !== undefined && output["Triggers"]["member"] !== undefined) {
    contents.Triggers = de_TriggerList(__getArrayIfSingleItem(output["Triggers"]["member"]), context);
  }
  if (output.Queues === "") {
    contents.Queues = [];
  } else if (output["Queues"] !== undefined && output["Queues"]["member"] !== undefined) {
    contents.Queues = de_QueueList(__getArrayIfSingleItem(output["Queues"]["member"]), context);
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
  if (output["EnvironmentResources"] !== undefined) {
    contents.EnvironmentResources = de_EnvironmentResourceDescription(output["EnvironmentResources"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentResourcesDescription
 */
const de_EnvironmentResourcesDescription = (output: any, context: __SerdeContext): EnvironmentResourcesDescription => {
  const contents: any = {};
  if (output["LoadBalancer"] !== undefined) {
    contents.LoadBalancer = de_LoadBalancerDescription(output["LoadBalancer"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEnvironmentTier
 */
const de_EnvironmentTier = (output: any, context: __SerdeContext): EnvironmentTier => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventDescription
 */
const de_EventDescription = (output: any, context: __SerdeContext): EventDescription => {
  const contents: any = {};
  if (output["EventDate"] !== undefined) {
    contents.EventDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EventDate"]));
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = __expectString(output["ApplicationName"]);
  }
  if (output["VersionLabel"] !== undefined) {
    contents.VersionLabel = __expectString(output["VersionLabel"]);
  }
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = __expectString(output["EnvironmentName"]);
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = __expectString(output["PlatformArn"]);
  }
  if (output["RequestId"] !== undefined) {
    contents.RequestId = __expectString(output["RequestId"]);
  }
  if (output["Severity"] !== undefined) {
    contents.Severity = __expectString(output["Severity"]);
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
  if (output.Events === "") {
    contents.Events = [];
  } else if (output["Events"] !== undefined && output["Events"]["member"] !== undefined) {
    contents.Events = de_EventDescriptionList(__getArrayIfSingleItem(output["Events"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
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
  if (output["NoData"] !== undefined) {
    contents.NoData = __strictParseInt32(output["NoData"]) as number;
  }
  if (output["Unknown"] !== undefined) {
    contents.Unknown = __strictParseInt32(output["Unknown"]) as number;
  }
  if (output["Pending"] !== undefined) {
    contents.Pending = __strictParseInt32(output["Pending"]) as number;
  }
  if (output["Ok"] !== undefined) {
    contents.Ok = __strictParseInt32(output["Ok"]) as number;
  }
  if (output["Info"] !== undefined) {
    contents.Info = __strictParseInt32(output["Info"]) as number;
  }
  if (output["Warning"] !== undefined) {
    contents.Warning = __strictParseInt32(output["Warning"]) as number;
  }
  if (output["Degraded"] !== undefined) {
    contents.Degraded = __strictParseInt32(output["Degraded"]) as number;
  }
  if (output["Severe"] !== undefined) {
    contents.Severe = __strictParseInt32(output["Severe"]) as number;
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLatency
 */
const de_Latency = (output: any, context: __SerdeContext): Latency => {
  const contents: any = {};
  if (output["P999"] !== undefined) {
    contents.P999 = __strictParseFloat(output["P999"]) as number;
  }
  if (output["P99"] !== undefined) {
    contents.P99 = __strictParseFloat(output["P99"]) as number;
  }
  if (output["P95"] !== undefined) {
    contents.P95 = __strictParseFloat(output["P95"]) as number;
  }
  if (output["P90"] !== undefined) {
    contents.P90 = __strictParseFloat(output["P90"]) as number;
  }
  if (output["P85"] !== undefined) {
    contents.P85 = __strictParseFloat(output["P85"]) as number;
  }
  if (output["P75"] !== undefined) {
    contents.P75 = __strictParseFloat(output["P75"]) as number;
  }
  if (output["P50"] !== undefined) {
    contents.P50 = __strictParseFloat(output["P50"]) as number;
  }
  if (output["P10"] !== undefined) {
    contents.P10 = __strictParseFloat(output["P10"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchConfiguration
 */
const de_LaunchConfiguration = (output: any, context: __SerdeContext): LaunchConfiguration => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
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
  if (output.SolutionStacks === "") {
    contents.SolutionStacks = [];
  } else if (output["SolutionStacks"] !== undefined && output["SolutionStacks"]["member"] !== undefined) {
    contents.SolutionStacks = de_AvailableSolutionStackNamesList(
      __getArrayIfSingleItem(output["SolutionStacks"]["member"]),
      context
    );
  }
  if (output.SolutionStackDetails === "") {
    contents.SolutionStackDetails = [];
  } else if (output["SolutionStackDetails"] !== undefined && output["SolutionStackDetails"]["member"] !== undefined) {
    contents.SolutionStackDetails = de_AvailableSolutionStackDetailsList(
      __getArrayIfSingleItem(output["SolutionStackDetails"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryListener
 */
const de_Listener = (output: any, context: __SerdeContext): Listener => {
  const contents: any = {};
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryListPlatformBranchesResult
 */
const de_ListPlatformBranchesResult = (output: any, context: __SerdeContext): ListPlatformBranchesResult => {
  const contents: any = {};
  if (output.PlatformBranchSummaryList === "") {
    contents.PlatformBranchSummaryList = [];
  } else if (
    output["PlatformBranchSummaryList"] !== undefined &&
    output["PlatformBranchSummaryList"]["member"] !== undefined
  ) {
    contents.PlatformBranchSummaryList = de_PlatformBranchSummaryList(
      __getArrayIfSingleItem(output["PlatformBranchSummaryList"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListPlatformVersionsResult
 */
const de_ListPlatformVersionsResult = (output: any, context: __SerdeContext): ListPlatformVersionsResult => {
  const contents: any = {};
  if (output.PlatformSummaryList === "") {
    contents.PlatformSummaryList = [];
  } else if (output["PlatformSummaryList"] !== undefined && output["PlatformSummaryList"]["member"] !== undefined) {
    contents.PlatformSummaryList = de_PlatformSummaryList(
      __getArrayIfSingleItem(output["PlatformSummaryList"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerDescription
 */
const de_LoadBalancerDescription = (output: any, context: __SerdeContext): LoadBalancerDescription => {
  const contents: any = {};
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output["Domain"] !== undefined) {
    contents.Domain = __expectString(output["Domain"]);
  }
  if (output.Listeners === "") {
    contents.Listeners = [];
  } else if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = de_LoadBalancerListenersDescription(
      __getArrayIfSingleItem(output["Listeners"]["member"]),
      context
    );
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
  if (output["ActionId"] !== undefined) {
    contents.ActionId = __expectString(output["ActionId"]);
  }
  if (output["ActionDescription"] !== undefined) {
    contents.ActionDescription = __expectString(output["ActionDescription"]);
  }
  if (output["ActionType"] !== undefined) {
    contents.ActionType = __expectString(output["ActionType"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["WindowStartTime"] !== undefined) {
    contents.WindowStartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["WindowStartTime"]));
  }
  return contents;
};

/**
 * deserializeAws_queryManagedActionHistoryItem
 */
const de_ManagedActionHistoryItem = (output: any, context: __SerdeContext): ManagedActionHistoryItem => {
  const contents: any = {};
  if (output["ActionId"] !== undefined) {
    contents.ActionId = __expectString(output["ActionId"]);
  }
  if (output["ActionType"] !== undefined) {
    contents.ActionType = __expectString(output["ActionType"]);
  }
  if (output["ActionDescription"] !== undefined) {
    contents.ActionDescription = __expectString(output["ActionDescription"]);
  }
  if (output["FailureType"] !== undefined) {
    contents.FailureType = __expectString(output["FailureType"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["FailureDescription"] !== undefined) {
    contents.FailureDescription = __expectString(output["FailureDescription"]);
  }
  if (output["ExecutedTime"] !== undefined) {
    contents.ExecutedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ExecutedTime"]));
  }
  if (output["FinishedTime"] !== undefined) {
    contents.FinishedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["FinishedTime"]));
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["MaxAgeInDays"] !== undefined) {
    contents.MaxAgeInDays = __strictParseInt32(output["MaxAgeInDays"]) as number;
  }
  if (output["DeleteSourceFromS3"] !== undefined) {
    contents.DeleteSourceFromS3 = __parseBoolean(output["DeleteSourceFromS3"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMaxCountRule
 */
const de_MaxCountRule = (output: any, context: __SerdeContext): MaxCountRule => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["MaxCount"] !== undefined) {
    contents.MaxCount = __strictParseInt32(output["MaxCount"]) as number;
  }
  if (output["DeleteSourceFromS3"] !== undefined) {
    contents.DeleteSourceFromS3 = __parseBoolean(output["DeleteSourceFromS3"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationInProgressException
 */
const de_OperationInProgressException = (output: any, context: __SerdeContext): OperationInProgressException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionRestrictionRegex
 */
const de_OptionRestrictionRegex = (output: any, context: __SerdeContext): OptionRestrictionRegex => {
  const contents: any = {};
  if (output["Pattern"] !== undefined) {
    contents.Pattern = __expectString(output["Pattern"]);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformBranchSummary
 */
const de_PlatformBranchSummary = (output: any, context: __SerdeContext): PlatformBranchSummary => {
  const contents: any = {};
  if (output["PlatformName"] !== undefined) {
    contents.PlatformName = __expectString(output["PlatformName"]);
  }
  if (output["BranchName"] !== undefined) {
    contents.BranchName = __expectString(output["BranchName"]);
  }
  if (output["LifecycleState"] !== undefined) {
    contents.LifecycleState = __expectString(output["LifecycleState"]);
  }
  if (output["BranchOrder"] !== undefined) {
    contents.BranchOrder = __strictParseInt32(output["BranchOrder"]) as number;
  }
  if (output.SupportedTierList === "") {
    contents.SupportedTierList = [];
  } else if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
    contents.SupportedTierList = de_SupportedTierList(
      __getArrayIfSingleItem(output["SupportedTierList"]["member"]),
      context
    );
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
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = __expectString(output["PlatformArn"]);
  }
  if (output["PlatformOwner"] !== undefined) {
    contents.PlatformOwner = __expectString(output["PlatformOwner"]);
  }
  if (output["PlatformName"] !== undefined) {
    contents.PlatformName = __expectString(output["PlatformName"]);
  }
  if (output["PlatformVersion"] !== undefined) {
    contents.PlatformVersion = __expectString(output["PlatformVersion"]);
  }
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = __expectString(output["SolutionStackName"]);
  }
  if (output["PlatformStatus"] !== undefined) {
    contents.PlatformStatus = __expectString(output["PlatformStatus"]);
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["DateUpdated"]));
  }
  if (output["PlatformCategory"] !== undefined) {
    contents.PlatformCategory = __expectString(output["PlatformCategory"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Maintainer"] !== undefined) {
    contents.Maintainer = __expectString(output["Maintainer"]);
  }
  if (output["OperatingSystemName"] !== undefined) {
    contents.OperatingSystemName = __expectString(output["OperatingSystemName"]);
  }
  if (output["OperatingSystemVersion"] !== undefined) {
    contents.OperatingSystemVersion = __expectString(output["OperatingSystemVersion"]);
  }
  if (output.ProgrammingLanguages === "") {
    contents.ProgrammingLanguages = [];
  } else if (output["ProgrammingLanguages"] !== undefined && output["ProgrammingLanguages"]["member"] !== undefined) {
    contents.ProgrammingLanguages = de_PlatformProgrammingLanguages(
      __getArrayIfSingleItem(output["ProgrammingLanguages"]["member"]),
      context
    );
  }
  if (output.Frameworks === "") {
    contents.Frameworks = [];
  } else if (output["Frameworks"] !== undefined && output["Frameworks"]["member"] !== undefined) {
    contents.Frameworks = de_PlatformFrameworks(__getArrayIfSingleItem(output["Frameworks"]["member"]), context);
  }
  if (output.CustomAmiList === "") {
    contents.CustomAmiList = [];
  } else if (output["CustomAmiList"] !== undefined && output["CustomAmiList"]["member"] !== undefined) {
    contents.CustomAmiList = de_CustomAmiList(__getArrayIfSingleItem(output["CustomAmiList"]["member"]), context);
  }
  if (output.SupportedTierList === "") {
    contents.SupportedTierList = [];
  } else if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
    contents.SupportedTierList = de_SupportedTierList(
      __getArrayIfSingleItem(output["SupportedTierList"]["member"]),
      context
    );
  }
  if (output.SupportedAddonList === "") {
    contents.SupportedAddonList = [];
  } else if (output["SupportedAddonList"] !== undefined && output["SupportedAddonList"]["member"] !== undefined) {
    contents.SupportedAddonList = de_SupportedAddonList(
      __getArrayIfSingleItem(output["SupportedAddonList"]["member"]),
      context
    );
  }
  if (output["PlatformLifecycleState"] !== undefined) {
    contents.PlatformLifecycleState = __expectString(output["PlatformLifecycleState"]);
  }
  if (output["PlatformBranchName"] !== undefined) {
    contents.PlatformBranchName = __expectString(output["PlatformBranchName"]);
  }
  if (output["PlatformBranchLifecycleState"] !== undefined) {
    contents.PlatformBranchLifecycleState = __expectString(output["PlatformBranchLifecycleState"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformFramework
 */
const de_PlatformFramework = (output: any, context: __SerdeContext): PlatformFramework => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
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
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = __expectString(output["PlatformArn"]);
  }
  if (output["PlatformOwner"] !== undefined) {
    contents.PlatformOwner = __expectString(output["PlatformOwner"]);
  }
  if (output["PlatformStatus"] !== undefined) {
    contents.PlatformStatus = __expectString(output["PlatformStatus"]);
  }
  if (output["PlatformCategory"] !== undefined) {
    contents.PlatformCategory = __expectString(output["PlatformCategory"]);
  }
  if (output["OperatingSystemName"] !== undefined) {
    contents.OperatingSystemName = __expectString(output["OperatingSystemName"]);
  }
  if (output["OperatingSystemVersion"] !== undefined) {
    contents.OperatingSystemVersion = __expectString(output["OperatingSystemVersion"]);
  }
  if (output.SupportedTierList === "") {
    contents.SupportedTierList = [];
  } else if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
    contents.SupportedTierList = de_SupportedTierList(
      __getArrayIfSingleItem(output["SupportedTierList"]["member"]),
      context
    );
  }
  if (output.SupportedAddonList === "") {
    contents.SupportedAddonList = [];
  } else if (output["SupportedAddonList"] !== undefined && output["SupportedAddonList"]["member"] !== undefined) {
    contents.SupportedAddonList = de_SupportedAddonList(
      __getArrayIfSingleItem(output["SupportedAddonList"]["member"]),
      context
    );
  }
  if (output["PlatformLifecycleState"] !== undefined) {
    contents.PlatformLifecycleState = __expectString(output["PlatformLifecycleState"]);
  }
  if (output["PlatformVersion"] !== undefined) {
    contents.PlatformVersion = __expectString(output["PlatformVersion"]);
  }
  if (output["PlatformBranchName"] !== undefined) {
    contents.PlatformBranchName = __expectString(output["PlatformBranchName"]);
  }
  if (output["PlatformBranchLifecycleState"] !== undefined) {
    contents.PlatformBranchLifecycleState = __expectString(output["PlatformBranchLifecycleState"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryQueue
 */
const de_Queue = (output: any, context: __SerdeContext): Queue => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["URL"] !== undefined) {
    contents.URL = __expectString(output["URL"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceQuota
 */
const de_ResourceQuota = (output: any, context: __SerdeContext): ResourceQuota => {
  const contents: any = {};
  if (output["Maximum"] !== undefined) {
    contents.Maximum = __strictParseInt32(output["Maximum"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryResourceQuotas
 */
const de_ResourceQuotas = (output: any, context: __SerdeContext): ResourceQuotas => {
  const contents: any = {};
  if (output["ApplicationQuota"] !== undefined) {
    contents.ApplicationQuota = de_ResourceQuota(output["ApplicationQuota"], context);
  }
  if (output["ApplicationVersionQuota"] !== undefined) {
    contents.ApplicationVersionQuota = de_ResourceQuota(output["ApplicationVersionQuota"], context);
  }
  if (output["EnvironmentQuota"] !== undefined) {
    contents.EnvironmentQuota = de_ResourceQuota(output["EnvironmentQuota"], context);
  }
  if (output["ConfigurationTemplateQuota"] !== undefined) {
    contents.ConfigurationTemplateQuota = de_ResourceQuota(output["ConfigurationTemplateQuota"], context);
  }
  if (output["CustomPlatformQuota"] !== undefined) {
    contents.CustomPlatformQuota = de_ResourceQuota(output["CustomPlatformQuota"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceTagsDescriptionMessage
 */
const de_ResourceTagsDescriptionMessage = (output: any, context: __SerdeContext): ResourceTagsDescriptionMessage => {
  const contents: any = {};
  if (output["ResourceArn"] !== undefined) {
    contents.ResourceArn = __expectString(output["ResourceArn"]);
  }
  if (output.ResourceTags === "") {
    contents.ResourceTags = [];
  } else if (output["ResourceTags"] !== undefined && output["ResourceTags"]["member"] !== undefined) {
    contents.ResourceTags = de_TagList(__getArrayIfSingleItem(output["ResourceTags"]["member"]), context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output.EnvironmentInfo === "") {
    contents.EnvironmentInfo = [];
  } else if (output["EnvironmentInfo"] !== undefined && output["EnvironmentInfo"]["member"] !== undefined) {
    contents.EnvironmentInfo = de_EnvironmentInfoDescriptionList(
      __getArrayIfSingleItem(output["EnvironmentInfo"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryS3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  const contents: any = {};
  if (output["S3Bucket"] !== undefined) {
    contents.S3Bucket = __expectString(output["S3Bucket"]);
  }
  if (output["S3Key"] !== undefined) {
    contents.S3Key = __expectString(output["S3Key"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryS3SubscriptionRequiredException
 */
const de_S3SubscriptionRequiredException = (output: any, context: __SerdeContext): S3SubscriptionRequiredException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySingleInstanceHealth
 */
const de_SingleInstanceHealth = (output: any, context: __SerdeContext): SingleInstanceHealth => {
  const contents: any = {};
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = __expectString(output["InstanceId"]);
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = __expectString(output["HealthStatus"]);
  }
  if (output["Color"] !== undefined) {
    contents.Color = __expectString(output["Color"]);
  }
  if (output.Causes === "") {
    contents.Causes = [];
  } else if (output["Causes"] !== undefined && output["Causes"]["member"] !== undefined) {
    contents.Causes = de_Causes(__getArrayIfSingleItem(output["Causes"]["member"]), context);
  }
  if (output["LaunchedAt"] !== undefined) {
    contents.LaunchedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LaunchedAt"]));
  }
  if (output["ApplicationMetrics"] !== undefined) {
    contents.ApplicationMetrics = de_ApplicationMetrics(output["ApplicationMetrics"], context);
  }
  if (output["System"] !== undefined) {
    contents.System = de_SystemStatus(output["System"], context);
  }
  if (output["Deployment"] !== undefined) {
    contents.Deployment = de_Deployment(output["Deployment"], context);
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = __expectString(output["InstanceType"]);
  }
  return contents;
};

/**
 * deserializeAws_querySolutionStackDescription
 */
const de_SolutionStackDescription = (output: any, context: __SerdeContext): SolutionStackDescription => {
  const contents: any = {};
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = __expectString(output["SolutionStackName"]);
  }
  if (output.PermittedFileTypes === "") {
    contents.PermittedFileTypes = [];
  } else if (output["PermittedFileTypes"] !== undefined && output["PermittedFileTypes"]["member"] !== undefined) {
    contents.PermittedFileTypes = de_SolutionStackFileTypeList(
      __getArrayIfSingleItem(output["PermittedFileTypes"]["member"]),
      context
    );
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
  if (output["SourceType"] !== undefined) {
    contents.SourceType = __expectString(output["SourceType"]);
  }
  if (output["SourceRepository"] !== undefined) {
    contents.SourceRepository = __expectString(output["SourceRepository"]);
  }
  if (output["SourceLocation"] !== undefined) {
    contents.SourceLocation = __expectString(output["SourceLocation"]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceBundleDeletionException
 */
const de_SourceBundleDeletionException = (output: any, context: __SerdeContext): SourceBundleDeletionException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStatusCodes
 */
const de_StatusCodes = (output: any, context: __SerdeContext): StatusCodes => {
  const contents: any = {};
  if (output["Status2xx"] !== undefined) {
    contents.Status2xx = __strictParseInt32(output["Status2xx"]) as number;
  }
  if (output["Status3xx"] !== undefined) {
    contents.Status3xx = __strictParseInt32(output["Status3xx"]) as number;
  }
  if (output["Status4xx"] !== undefined) {
    contents.Status4xx = __strictParseInt32(output["Status4xx"]) as number;
  }
  if (output["Status5xx"] !== undefined) {
    contents.Status5xx = __strictParseInt32(output["Status5xx"]) as number;
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
  if (output["CPUUtilization"] !== undefined) {
    contents.CPUUtilization = de_CPUUtilization(output["CPUUtilization"], context);
  }
  if (output.LoadAverage === "") {
    contents.LoadAverage = [];
  } else if (output["LoadAverage"] !== undefined && output["LoadAverage"]["member"] !== undefined) {
    contents.LoadAverage = de_LoadAverage(__getArrayIfSingleItem(output["LoadAverage"]["member"]), context);
  }
  return contents;
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyBucketsException
 */
const de_TooManyBucketsException = (output: any, context: __SerdeContext): TooManyBucketsException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyEnvironmentsException
 */
const de_TooManyEnvironmentsException = (output: any, context: __SerdeContext): TooManyEnvironmentsException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyPlatformsException
 */
const de_TooManyPlatformsException = (output: any, context: __SerdeContext): TooManyPlatformsException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrigger
 */
const de_Trigger = (output: any, context: __SerdeContext): Trigger => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
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
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["Severity"] !== undefined) {
    contents.Severity = __expectString(output["Severity"]);
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["OptionName"] !== undefined) {
    contents.OptionName = __expectString(output["OptionName"]);
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
