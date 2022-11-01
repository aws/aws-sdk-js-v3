// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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

export const serializeAws_queryAbortEnvironmentUpdateCommand = async (
  input: AbortEnvironmentUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAbortEnvironmentUpdateMessage(input, context),
    Action: "AbortEnvironmentUpdate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryApplyEnvironmentManagedActionCommand = async (
  input: ApplyEnvironmentManagedActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryApplyEnvironmentManagedActionRequest(input, context),
    Action: "ApplyEnvironmentManagedAction",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAssociateEnvironmentOperationsRoleCommand = async (
  input: AssociateEnvironmentOperationsRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAssociateEnvironmentOperationsRoleMessage(input, context),
    Action: "AssociateEnvironmentOperationsRole",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCheckDNSAvailabilityCommand = async (
  input: CheckDNSAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCheckDNSAvailabilityMessage(input, context),
    Action: "CheckDNSAvailability",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryComposeEnvironmentsCommand = async (
  input: ComposeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryComposeEnvironmentsMessage(input, context),
    Action: "ComposeEnvironments",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateApplicationMessage(input, context),
    Action: "CreateApplication",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateApplicationVersionCommand = async (
  input: CreateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateApplicationVersionMessage(input, context),
    Action: "CreateApplicationVersion",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateConfigurationTemplateCommand = async (
  input: CreateConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateConfigurationTemplateMessage(input, context),
    Action: "CreateConfigurationTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateEnvironmentMessage(input, context),
    Action: "CreateEnvironment",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreatePlatformVersionCommand = async (
  input: CreatePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreatePlatformVersionRequest(input, context),
    Action: "CreatePlatformVersion",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateStorageLocationCommand = async (
  input: CreateStorageLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "CreateStorageLocation",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteApplicationMessage(input, context),
    Action: "DeleteApplication",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteApplicationVersionCommand = async (
  input: DeleteApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteApplicationVersionMessage(input, context),
    Action: "DeleteApplicationVersion",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteConfigurationTemplateCommand = async (
  input: DeleteConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteConfigurationTemplateMessage(input, context),
    Action: "DeleteConfigurationTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteEnvironmentConfigurationCommand = async (
  input: DeleteEnvironmentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteEnvironmentConfigurationMessage(input, context),
    Action: "DeleteEnvironmentConfiguration",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeletePlatformVersionCommand = async (
  input: DeletePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeletePlatformVersionRequest(input, context),
    Action: "DeletePlatformVersion",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAccountAttributes",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeApplicationsCommand = async (
  input: DescribeApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeApplicationsMessage(input, context),
    Action: "DescribeApplications",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeApplicationVersionsCommand = async (
  input: DescribeApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeApplicationVersionsMessage(input, context),
    Action: "DescribeApplicationVersions",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeConfigurationOptionsCommand = async (
  input: DescribeConfigurationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeConfigurationOptionsMessage(input, context),
    Action: "DescribeConfigurationOptions",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeConfigurationSettingsCommand = async (
  input: DescribeConfigurationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeConfigurationSettingsMessage(input, context),
    Action: "DescribeConfigurationSettings",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEnvironmentHealthCommand = async (
  input: DescribeEnvironmentHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEnvironmentHealthRequest(input, context),
    Action: "DescribeEnvironmentHealth",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = async (
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest(input, context),
    Action: "DescribeEnvironmentManagedActionHistory",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEnvironmentManagedActionsCommand = async (
  input: DescribeEnvironmentManagedActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEnvironmentManagedActionsRequest(input, context),
    Action: "DescribeEnvironmentManagedActions",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEnvironmentResourcesCommand = async (
  input: DescribeEnvironmentResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEnvironmentResourcesMessage(input, context),
    Action: "DescribeEnvironmentResources",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEnvironmentsCommand = async (
  input: DescribeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEnvironmentsMessage(input, context),
    Action: "DescribeEnvironments",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEventsMessage(input, context),
    Action: "DescribeEvents",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeInstancesHealthCommand = async (
  input: DescribeInstancesHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeInstancesHealthRequest(input, context),
    Action: "DescribeInstancesHealth",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribePlatformVersionCommand = async (
  input: DescribePlatformVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribePlatformVersionRequest(input, context),
    Action: "DescribePlatformVersion",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisassociateEnvironmentOperationsRoleCommand = async (
  input: DisassociateEnvironmentOperationsRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisassociateEnvironmentOperationsRoleMessage(input, context),
    Action: "DisassociateEnvironmentOperationsRole",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListAvailableSolutionStacksCommand = async (
  input: ListAvailableSolutionStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "ListAvailableSolutionStacks",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPlatformBranchesCommand = async (
  input: ListPlatformBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPlatformBranchesRequest(input, context),
    Action: "ListPlatformBranches",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPlatformVersionsCommand = async (
  input: ListPlatformVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPlatformVersionsRequest(input, context),
    Action: "ListPlatformVersions",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTagsForResourceMessage(input, context),
    Action: "ListTagsForResource",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRebuildEnvironmentCommand = async (
  input: RebuildEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRebuildEnvironmentMessage(input, context),
    Action: "RebuildEnvironment",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRequestEnvironmentInfoCommand = async (
  input: RequestEnvironmentInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRequestEnvironmentInfoMessage(input, context),
    Action: "RequestEnvironmentInfo",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRestartAppServerCommand = async (
  input: RestartAppServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRestartAppServerMessage(input, context),
    Action: "RestartAppServer",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRetrieveEnvironmentInfoCommand = async (
  input: RetrieveEnvironmentInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRetrieveEnvironmentInfoMessage(input, context),
    Action: "RetrieveEnvironmentInfo",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySwapEnvironmentCNAMEsCommand = async (
  input: SwapEnvironmentCNAMEsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySwapEnvironmentCNAMEsMessage(input, context),
    Action: "SwapEnvironmentCNAMEs",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTerminateEnvironmentCommand = async (
  input: TerminateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTerminateEnvironmentMessage(input, context),
    Action: "TerminateEnvironment",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateApplicationMessage(input, context),
    Action: "UpdateApplication",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateApplicationResourceLifecycleCommand = async (
  input: UpdateApplicationResourceLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateApplicationResourceLifecycleMessage(input, context),
    Action: "UpdateApplicationResourceLifecycle",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateApplicationVersionCommand = async (
  input: UpdateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateApplicationVersionMessage(input, context),
    Action: "UpdateApplicationVersion",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateConfigurationTemplateCommand = async (
  input: UpdateConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateConfigurationTemplateMessage(input, context),
    Action: "UpdateConfigurationTemplate",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateEnvironmentMessage(input, context),
    Action: "UpdateEnvironment",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateTagsForResourceCommand = async (
  input: UpdateTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateTagsForResourceMessage(input, context),
    Action: "UpdateTagsForResource",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryValidateConfigurationSettingsCommand = async (
  input: ValidateConfigurationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryValidateConfigurationSettingsMessage(input, context),
    Action: "ValidateConfigurationSettings",
    Version: "2010-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAbortEnvironmentUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortEnvironmentUpdateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAbortEnvironmentUpdateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AbortEnvironmentUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAbortEnvironmentUpdateCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryApplyEnvironmentManagedActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyEnvironmentManagedActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryApplyEnvironmentManagedActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplyEnvironmentManagedActionResult(data.ApplyEnvironmentManagedActionResult, context);
  const response: ApplyEnvironmentManagedActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryApplyEnvironmentManagedActionCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    case "ManagedActionInvalidStateException":
    case "com.amazonaws.elasticbeanstalk#ManagedActionInvalidStateException":
      throw await deserializeAws_queryManagedActionInvalidStateExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAssociateEnvironmentOperationsRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEnvironmentOperationsRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAssociateEnvironmentOperationsRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateEnvironmentOperationsRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAssociateEnvironmentOperationsRoleCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCheckDNSAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDNSAvailabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCheckDNSAvailabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCheckDNSAvailabilityResultMessage(data.CheckDNSAvailabilityResult, context);
  const response: CheckDNSAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCheckDNSAvailabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDNSAvailabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryComposeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ComposeEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryComposeEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescriptionsMessage(data.ComposeEnvironmentsResult, context);
  const response: ComposeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryComposeEnvironmentsCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "TooManyEnvironmentsException":
    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
      throw await deserializeAws_queryTooManyEnvironmentsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationDescriptionMessage(data.CreateApplicationResult, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateApplicationCommandError = async (
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
      throw await deserializeAws_queryTooManyApplicationsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateApplicationVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationVersionDescriptionMessage(data.CreateApplicationVersionResult, context);
  const response: CreateApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateApplicationVersionCommandError = async (
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
      throw await deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "S3LocationNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
      throw await deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(parsedOutput, context);
    case "TooManyApplicationVersionsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationVersionsException":
      throw await deserializeAws_queryTooManyApplicationVersionsExceptionResponse(parsedOutput, context);
    case "TooManyApplicationsException":
    case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
      throw await deserializeAws_queryTooManyApplicationsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateConfigurationTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationSettingsDescription(data.CreateConfigurationTemplateResult, context);
  const response: CreateConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context);
    case "TooManyConfigurationTemplatesException":
    case "com.amazonaws.elasticbeanstalk#TooManyConfigurationTemplatesException":
      throw await deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescription(data.CreateEnvironmentResult, context);
  const response: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateEnvironmentCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "TooManyEnvironmentsException":
    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
      throw await deserializeAws_queryTooManyEnvironmentsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreatePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreatePlatformVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreatePlatformVersionResult(data.CreatePlatformVersionResult, context);
  const response: CreatePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreatePlatformVersionCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "TooManyPlatformsException":
    case "com.amazonaws.elasticbeanstalk#TooManyPlatformsException":
      throw await deserializeAws_queryTooManyPlatformsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateStorageLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateStorageLocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateStorageLocationResultMessage(data.CreateStorageLocationResult, context);
  const response: CreateStorageLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateStorageLocationCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "S3SubscriptionRequiredException":
    case "com.amazonaws.elasticbeanstalk#S3SubscriptionRequiredException":
      throw await deserializeAws_queryS3SubscriptionRequiredExceptionResponse(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteApplicationCommandError = async (
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
      throw await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteApplicationVersionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteApplicationVersionCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context);
    case "S3LocationNotInServiceRegionException":
    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
      throw await deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(parsedOutput, context);
    case "SourceBundleDeletionFailure":
    case "com.amazonaws.elasticbeanstalk#SourceBundleDeletionException":
      throw await deserializeAws_querySourceBundleDeletionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteConfigurationTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteEnvironmentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteEnvironmentConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEnvironmentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteEnvironmentConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDeletePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeletePlatformVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeletePlatformVersionResult(data.DeletePlatformVersionResult, context);
  const response: DeletePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeletePlatformVersionCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context);
    case "PlatformVersionStillReferencedException":
    case "com.amazonaws.elasticbeanstalk#PlatformVersionStillReferencedException":
      throw await deserializeAws_queryPlatformVersionStillReferencedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountAttributesResult(data.DescribeAccountAttributesResult, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAccountAttributesCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationDescriptionsMessage(data.DescribeApplicationsResult, context);
  const response: DescribeApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeApplicationVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationVersionDescriptionsMessage(data.DescribeApplicationVersionsResult, context);
  const response: DescribeApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeApplicationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeConfigurationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeConfigurationOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationOptionsDescription(data.DescribeConfigurationOptionsResult, context);
  const response: DescribeConfigurationOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeConfigurationOptionsCommandError = async (
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
      throw await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeConfigurationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeConfigurationSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationSettingsDescriptions(data.DescribeConfigurationSettingsResult, context);
  const response: DescribeConfigurationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeConfigurationSettingsCommandError = async (
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
      throw await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEnvironmentHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEnvironmentHealthCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEnvironmentHealthResult(data.DescribeEnvironmentHealthResult, context);
  const response: DescribeEnvironmentHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEnvironmentHealthCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
      throw await deserializeAws_queryInvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult(
    data.DescribeEnvironmentManagedActionHistoryResult,
    context
  );
  const response: DescribeEnvironmentManagedActionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEnvironmentManagedActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentManagedActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEnvironmentManagedActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEnvironmentManagedActionsResult(
    data.DescribeEnvironmentManagedActionsResult,
    context
  );
  const response: DescribeEnvironmentManagedActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEnvironmentManagedActionsCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEnvironmentResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEnvironmentResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentResourceDescriptionsMessage(
    data.DescribeEnvironmentResourcesResult,
    context
  );
  const response: DescribeEnvironmentResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEnvironmentResourcesCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescriptionsMessage(data.DescribeEnvironmentsResult, context);
  const response: DescribeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEventDescriptionsMessage(data.DescribeEventsResult, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeInstancesHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeInstancesHealthCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeInstancesHealthResult(data.DescribeInstancesHealthResult, context);
  const response: DescribeInstancesHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeInstancesHealthCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
      throw await deserializeAws_queryInvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribePlatformVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlatformVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribePlatformVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribePlatformVersionResult(data.DescribePlatformVersionResult, context);
  const response: DescribePlatformVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribePlatformVersionCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEnvironmentOperationsRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisassociateEnvironmentOperationsRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateEnvironmentOperationsRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisassociateEnvironmentOperationsRoleCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryListAvailableSolutionStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableSolutionStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListAvailableSolutionStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListAvailableSolutionStacksResultMessage(
    data.ListAvailableSolutionStacksResult,
    context
  );
  const response: ListAvailableSolutionStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListAvailableSolutionStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableSolutionStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryListPlatformBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformBranchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListPlatformBranchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPlatformBranchesResult(data.ListPlatformBranchesResult, context);
  const response: ListPlatformBranchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPlatformBranchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformBranchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryListPlatformVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListPlatformVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPlatformVersionsResult(data.ListPlatformVersionsResult, context);
  const response: ListPlatformVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPlatformVersionsCommandError = async (
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
      throw await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context);
    case "InsufficientPrivilegesException":
    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryResourceTagsDescriptionMessage(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTagsForResourceCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
      throw await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
      throw await deserializeAws_queryResourceTypeNotSupportedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRebuildEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRebuildEnvironmentCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RebuildEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRebuildEnvironmentCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRequestEnvironmentInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestEnvironmentInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRequestEnvironmentInfoCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RequestEnvironmentInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRequestEnvironmentInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestEnvironmentInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryRestartAppServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartAppServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRestartAppServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RestartAppServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRestartAppServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartAppServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryRetrieveEnvironmentInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveEnvironmentInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRetrieveEnvironmentInfoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRetrieveEnvironmentInfoResultMessage(data.RetrieveEnvironmentInfoResult, context);
  const response: RetrieveEnvironmentInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRetrieveEnvironmentInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveEnvironmentInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_querySwapEnvironmentCNAMEsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwapEnvironmentCNAMEsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySwapEnvironmentCNAMEsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SwapEnvironmentCNAMEsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySwapEnvironmentCNAMEsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SwapEnvironmentCNAMEsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryTerminateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTerminateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescription(data.TerminateEnvironmentResult, context);
  const response: TerminateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTerminateEnvironmentCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryUpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationDescriptionMessage(data.UpdateApplicationResult, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryUpdateApplicationResourceLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationResourceLifecycleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateApplicationResourceLifecycleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationResourceLifecycleDescriptionMessage(
    data.UpdateApplicationResourceLifecycleResult,
    context
  );
  const response: UpdateApplicationResourceLifecycleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateApplicationResourceLifecycleCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryUpdateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateApplicationVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplicationVersionDescriptionMessage(data.UpdateApplicationVersionResult, context);
  const response: UpdateApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryUpdateConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateConfigurationTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationSettingsDescription(data.UpdateConfigurationTemplateResult, context);
  const response: UpdateConfigurationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryUpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnvironmentDescription(data.UpdateEnvironmentResult, context);
  const response: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateEnvironmentCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryUpdateTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateTagsForResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateTagsForResourceCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "OperationInProgressFailure":
    case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
      throw await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
      throw await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
      throw await deserializeAws_queryResourceTypeNotSupportedExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.elasticbeanstalk#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryValidateConfigurationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryValidateConfigurationSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigurationSettingsValidationMessages(
    data.ValidateConfigurationSettingsResult,
    context
  );
  const response: ValidateConfigurationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryValidateConfigurationSettingsCommandError = async (
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
      throw await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context);
    case "TooManyBucketsException":
    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
      throw await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeBuildNotInServiceRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCodeBuildNotInServiceRegionException(body.Error, context);
  const exception = new CodeBuildNotInServiceRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryElasticBeanstalkServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ElasticBeanstalkServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryElasticBeanstalkServiceException(body.Error, context);
  const exception = new ElasticBeanstalkServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInsufficientPrivilegesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientPrivilegesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInsufficientPrivilegesException(body.Error, context);
  const exception = new InsufficientPrivilegesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidRequestException(body.Error, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryManagedActionInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedActionInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryManagedActionInvalidStateException(body.Error, context);
  const exception = new ManagedActionInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryOperationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationInProgressException(body.Error, context);
  const exception = new OperationInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryPlatformVersionStillReferencedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformVersionStillReferencedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPlatformVersionStillReferencedException(body.Error, context);
  const exception = new PlatformVersionStillReferencedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundException(body.Error, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResourceTypeNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceTypeNotSupportedException(body.Error, context);
  const exception = new ResourceTypeNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3LocationNotInServiceRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryS3LocationNotInServiceRegionException(body.Error, context);
  const exception = new S3LocationNotInServiceRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryS3SubscriptionRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3SubscriptionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryS3SubscriptionRequiredException(body.Error, context);
  const exception = new S3SubscriptionRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySourceBundleDeletionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceBundleDeletionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySourceBundleDeletionException(body.Error, context);
  const exception = new SourceBundleDeletionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyApplicationsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyApplicationsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyApplicationsException(body.Error, context);
  const exception = new TooManyApplicationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyApplicationVersionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyApplicationVersionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyApplicationVersionsException(body.Error, context);
  const exception = new TooManyApplicationVersionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyBucketsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyBucketsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyBucketsException(body.Error, context);
  const exception = new TooManyBucketsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyConfigurationTemplatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyConfigurationTemplatesException(body.Error, context);
  const exception = new TooManyConfigurationTemplatesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyEnvironmentsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEnvironmentsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyEnvironmentsException(body.Error, context);
  const exception = new TooManyEnvironmentsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyPlatformsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPlatformsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyPlatformsException(body.Error, context);
  const exception = new TooManyPlatformsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTagsException(body.Error, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryAbortEnvironmentUpdateMessage = (
  input: AbortEnvironmentUpdateMessage,
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

const serializeAws_queryApplicationNamesList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryApplicationResourceLifecycleConfig = (
  input: ApplicationResourceLifecycleConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServiceRole != null) {
    entries["ServiceRole"] = input.ServiceRole;
  }
  if (input.VersionLifecycleConfig != null) {
    const memberEntries = serializeAws_queryApplicationVersionLifecycleConfig(input.VersionLifecycleConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VersionLifecycleConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryApplicationVersionLifecycleConfig = (
  input: ApplicationVersionLifecycleConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxCountRule != null) {
    const memberEntries = serializeAws_queryMaxCountRule(input.MaxCountRule, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MaxCountRule.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxAgeRule != null) {
    const memberEntries = serializeAws_queryMaxAgeRule(input.MaxAgeRule, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MaxAgeRule.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryApplyEnvironmentManagedActionRequest = (
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

const serializeAws_queryAssociateEnvironmentOperationsRoleMessage = (
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

const serializeAws_queryBuildConfiguration = (input: BuildConfiguration, context: __SerdeContext): any => {
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

const serializeAws_queryCheckDNSAvailabilityMessage = (
  input: CheckDNSAvailabilityMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CNAMEPrefix != null) {
    entries["CNAMEPrefix"] = input.CNAMEPrefix;
  }
  return entries;
};

const serializeAws_queryComposeEnvironmentsMessage = (
  input: ComposeEnvironmentsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.VersionLabels != null) {
    const memberEntries = serializeAws_queryVersionLabels(input.VersionLabels, context);
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

const serializeAws_queryConfigurationOptionSetting = (
  input: ConfigurationOptionSetting,
  context: __SerdeContext
): any => {
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

const serializeAws_queryConfigurationOptionSettingsList = (
  input: ConfigurationOptionSetting[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryConfigurationOptionSetting(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryCreateApplicationMessage = (input: CreateApplicationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.ResourceLifecycleConfig != null) {
    const memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceLifecycleConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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

const serializeAws_queryCreateApplicationVersionMessage = (
  input: CreateApplicationVersionMessage,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_querySourceBuildInformation(input.SourceBuildInformation, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceBuildInformation.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SourceBundle != null) {
    const memberEntries = serializeAws_queryS3Location(input.SourceBundle, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceBundle.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BuildConfiguration != null) {
    const memberEntries = serializeAws_queryBuildConfiguration(input.BuildConfiguration, context);
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
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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

const serializeAws_queryCreateConfigurationTemplateMessage = (
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
    const memberEntries = serializeAws_querySourceConfiguration(input.SourceConfiguration, context);
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
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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

const serializeAws_queryCreateEnvironmentMessage = (input: CreateEnvironmentMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryEnvironmentTier(input.Tier, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tier.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionsToRemove != null) {
    const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
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

const serializeAws_queryCreatePlatformVersionRequest = (
  input: CreatePlatformVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformName != null) {
    entries["PlatformName"] = input.PlatformName;
  }
  if (input.PlatformVersion != null) {
    entries["PlatformVersion"] = input.PlatformVersion;
  }
  if (input.PlatformDefinitionBundle != null) {
    const memberEntries = serializeAws_queryS3Location(input.PlatformDefinitionBundle, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PlatformDefinitionBundle.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.OptionSettings != null) {
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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

const serializeAws_queryDeleteApplicationMessage = (input: DeleteApplicationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TerminateEnvByForce != null) {
    entries["TerminateEnvByForce"] = input.TerminateEnvByForce;
  }
  return entries;
};

const serializeAws_queryDeleteApplicationVersionMessage = (
  input: DeleteApplicationVersionMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDeleteConfigurationTemplateMessage = (
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

const serializeAws_queryDeleteEnvironmentConfigurationMessage = (
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

const serializeAws_queryDeletePlatformVersionRequest = (
  input: DeletePlatformVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  return entries;
};

const serializeAws_queryDescribeApplicationsMessage = (
  input: DescribeApplicationsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationNames != null) {
    const memberEntries = serializeAws_queryApplicationNamesList(input.ApplicationNames, context);
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

const serializeAws_queryDescribeApplicationVersionsMessage = (
  input: DescribeApplicationVersionsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.VersionLabels != null) {
    const memberEntries = serializeAws_queryVersionLabelsList(input.VersionLabels, context);
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

const serializeAws_queryDescribeConfigurationOptionsMessage = (
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
    const memberEntries = serializeAws_queryOptionsSpecifierList(input.Options, context);
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

const serializeAws_queryDescribeConfigurationSettingsMessage = (
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

const serializeAws_queryDescribeEnvironmentHealthRequest = (
  input: DescribeEnvironmentHealthRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.AttributeNames != null) {
    const memberEntries = serializeAws_queryEnvironmentHealthAttributes(input.AttributeNames, context);
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

const serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest = (
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

const serializeAws_queryDescribeEnvironmentManagedActionsRequest = (
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

const serializeAws_queryDescribeEnvironmentResourcesMessage = (
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

const serializeAws_queryDescribeEnvironmentsMessage = (
  input: DescribeEnvironmentsMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.VersionLabel != null) {
    entries["VersionLabel"] = input.VersionLabel;
  }
  if (input.EnvironmentIds != null) {
    const memberEntries = serializeAws_queryEnvironmentIdList(input.EnvironmentIds, context);
    if (input.EnvironmentIds?.length === 0) {
      entries.EnvironmentIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EnvironmentIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EnvironmentNames != null) {
    const memberEntries = serializeAws_queryEnvironmentNamesList(input.EnvironmentNames, context);
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

const serializeAws_queryDescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
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

const serializeAws_queryDescribeInstancesHealthRequest = (
  input: DescribeInstancesHealthRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.AttributeNames != null) {
    const memberEntries = serializeAws_queryInstancesHealthAttributes(input.AttributeNames, context);
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

const serializeAws_queryDescribePlatformVersionRequest = (
  input: DescribePlatformVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformArn != null) {
    entries["PlatformArn"] = input.PlatformArn;
  }
  return entries;
};

const serializeAws_queryDisassociateEnvironmentOperationsRoleMessage = (
  input: DisassociateEnvironmentOperationsRoleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryEnvironmentHealthAttributes = (
  input: (EnvironmentHealthAttribute | string)[],
  context: __SerdeContext
): any => {
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

const serializeAws_queryEnvironmentIdList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryEnvironmentNamesList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryEnvironmentTier = (input: EnvironmentTier, context: __SerdeContext): any => {
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

const serializeAws_queryInstancesHealthAttributes = (
  input: (InstancesHealthAttribute | string)[],
  context: __SerdeContext
): any => {
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

const serializeAws_queryListPlatformBranchesRequest = (
  input: ListPlatformBranchesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filters != null) {
    const memberEntries = serializeAws_querySearchFilters(input.Filters, context);
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

const serializeAws_queryListPlatformVersionsRequest = (
  input: ListPlatformVersionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filters != null) {
    const memberEntries = serializeAws_queryPlatformFilters(input.Filters, context);
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

const serializeAws_queryListTagsForResourceMessage = (
  input: ListTagsForResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  return entries;
};

const serializeAws_queryMaxAgeRule = (input: MaxAgeRule, context: __SerdeContext): any => {
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

const serializeAws_queryMaxCountRule = (input: MaxCountRule, context: __SerdeContext): any => {
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

const serializeAws_queryOptionSpecification = (input: OptionSpecification, context: __SerdeContext): any => {
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

const serializeAws_queryOptionsSpecifierList = (input: OptionSpecification[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryOptionSpecification(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPlatformFilter = (input: PlatformFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.Operator != null) {
    entries["Operator"] = input.Operator;
  }
  if (input.Values != null) {
    const memberEntries = serializeAws_queryPlatformFilterValueList(input.Values, context);
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

const serializeAws_queryPlatformFilters = (input: PlatformFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryPlatformFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPlatformFilterValueList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryRebuildEnvironmentMessage = (
  input: RebuildEnvironmentMessage,
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

const serializeAws_queryRequestEnvironmentInfoMessage = (
  input: RequestEnvironmentInfoMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryRestartAppServerMessage = (input: RestartAppServerMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnvironmentId != null) {
    entries["EnvironmentId"] = input.EnvironmentId;
  }
  if (input.EnvironmentName != null) {
    entries["EnvironmentName"] = input.EnvironmentName;
  }
  return entries;
};

const serializeAws_queryRetrieveEnvironmentInfoMessage = (
  input: RetrieveEnvironmentInfoMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryS3Location = (input: S3Location, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.S3Bucket != null) {
    entries["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key != null) {
    entries["S3Key"] = input.S3Key;
  }
  return entries;
};

const serializeAws_querySearchFilter = (input: SearchFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Attribute != null) {
    entries["Attribute"] = input.Attribute;
  }
  if (input.Operator != null) {
    entries["Operator"] = input.Operator;
  }
  if (input.Values != null) {
    const memberEntries = serializeAws_querySearchFilterValues(input.Values, context);
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

const serializeAws_querySearchFilters = (input: SearchFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_querySearchFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySearchFilterValues = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_querySourceBuildInformation = (input: SourceBuildInformation, context: __SerdeContext): any => {
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

const serializeAws_querySourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  return entries;
};

const serializeAws_querySwapEnvironmentCNAMEsMessage = (
  input: SwapEnvironmentCNAMEsMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
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

const serializeAws_queryTags = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
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

const serializeAws_queryTerminateEnvironmentMessage = (
  input: TerminateEnvironmentMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryUpdateApplicationMessage = (input: UpdateApplicationMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  return entries;
};

const serializeAws_queryUpdateApplicationResourceLifecycleMessage = (
  input: UpdateApplicationResourceLifecycleMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ApplicationName != null) {
    entries["ApplicationName"] = input.ApplicationName;
  }
  if (input.ResourceLifecycleConfig != null) {
    const memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceLifecycleConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUpdateApplicationVersionMessage = (
  input: UpdateApplicationVersionMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_queryUpdateConfigurationTemplateMessage = (
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
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionsToRemove != null) {
    const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
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

const serializeAws_queryUpdateEnvironmentMessage = (input: UpdateEnvironmentMessage, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryEnvironmentTier(input.Tier, context);
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
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
    if (input.OptionSettings?.length === 0) {
      entries.OptionSettings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OptionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OptionsToRemove != null) {
    const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
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

const serializeAws_queryUpdateTagsForResourceMessage = (
  input: UpdateTagsForResourceMessage,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagsToAdd != null) {
    const memberEntries = serializeAws_queryTagList(input.TagsToAdd, context);
    if (input.TagsToAdd?.length === 0) {
      entries.TagsToAdd = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagsToAdd.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagsToRemove != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagsToRemove, context);
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

const serializeAws_queryValidateConfigurationSettingsMessage = (
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
    const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
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

const serializeAws_queryVersionLabels = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryVersionLabelsList = (input: string[], context: __SerdeContext): any => {
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

const deserializeAws_queryApplicationDescription = (output: any, context: __SerdeContext): ApplicationDescription => {
  const contents: any = {
    ApplicationArn: undefined,
    ApplicationName: undefined,
    Description: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    Versions: undefined,
    ConfigurationTemplates: undefined,
    ResourceLifecycleConfig: undefined,
  };
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
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTime(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTime(output["DateUpdated"]));
  }
  if (output.Versions === "") {
    contents.Versions = [];
  } else if (output["Versions"] !== undefined && output["Versions"]["member"] !== undefined) {
    contents.Versions = deserializeAws_queryVersionLabelsList(
      __getArrayIfSingleItem(output["Versions"]["member"]),
      context
    );
  }
  if (output.ConfigurationTemplates === "") {
    contents.ConfigurationTemplates = [];
  } else if (
    output["ConfigurationTemplates"] !== undefined &&
    output["ConfigurationTemplates"]["member"] !== undefined
  ) {
    contents.ConfigurationTemplates = deserializeAws_queryConfigurationTemplateNamesList(
      __getArrayIfSingleItem(output["ConfigurationTemplates"]["member"]),
      context
    );
  }
  if (output["ResourceLifecycleConfig"] !== undefined) {
    contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(
      output["ResourceLifecycleConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationDescriptionList = (
  output: any,
  context: __SerdeContext
): ApplicationDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryApplicationDescription(entry, context);
    });
};

const deserializeAws_queryApplicationDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ApplicationDescriptionMessage => {
  const contents: any = {
    Application: undefined,
  };
  if (output["Application"] !== undefined) {
    contents.Application = deserializeAws_queryApplicationDescription(output["Application"], context);
  }
  return contents;
};

const deserializeAws_queryApplicationDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): ApplicationDescriptionsMessage => {
  const contents: any = {
    Applications: undefined,
  };
  if (output.Applications === "") {
    contents.Applications = [];
  } else if (output["Applications"] !== undefined && output["Applications"]["member"] !== undefined) {
    contents.Applications = deserializeAws_queryApplicationDescriptionList(
      __getArrayIfSingleItem(output["Applications"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationMetrics = (output: any, context: __SerdeContext): ApplicationMetrics => {
  const contents: any = {
    Duration: undefined,
    RequestCount: undefined,
    StatusCodes: undefined,
    Latency: undefined,
  };
  if (output["Duration"] !== undefined) {
    contents.Duration = __strictParseInt32(output["Duration"]) as number;
  }
  if (output["RequestCount"] !== undefined) {
    contents.RequestCount = __strictParseInt32(output["RequestCount"]) as number;
  }
  if (output["StatusCodes"] !== undefined) {
    contents.StatusCodes = deserializeAws_queryStatusCodes(output["StatusCodes"], context);
  }
  if (output["Latency"] !== undefined) {
    contents.Latency = deserializeAws_queryLatency(output["Latency"], context);
  }
  return contents;
};

const deserializeAws_queryApplicationResourceLifecycleConfig = (
  output: any,
  context: __SerdeContext
): ApplicationResourceLifecycleConfig => {
  const contents: any = {
    ServiceRole: undefined,
    VersionLifecycleConfig: undefined,
  };
  if (output["ServiceRole"] !== undefined) {
    contents.ServiceRole = __expectString(output["ServiceRole"]);
  }
  if (output["VersionLifecycleConfig"] !== undefined) {
    contents.VersionLifecycleConfig = deserializeAws_queryApplicationVersionLifecycleConfig(
      output["VersionLifecycleConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationResourceLifecycleDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ApplicationResourceLifecycleDescriptionMessage => {
  const contents: any = {
    ApplicationName: undefined,
    ResourceLifecycleConfig: undefined,
  };
  if (output["ApplicationName"] !== undefined) {
    contents.ApplicationName = __expectString(output["ApplicationName"]);
  }
  if (output["ResourceLifecycleConfig"] !== undefined) {
    contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(
      output["ResourceLifecycleConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationVersionDescription = (
  output: any,
  context: __SerdeContext
): ApplicationVersionDescription => {
  const contents: any = {
    ApplicationVersionArn: undefined,
    ApplicationName: undefined,
    Description: undefined,
    VersionLabel: undefined,
    SourceBuildInformation: undefined,
    BuildArn: undefined,
    SourceBundle: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    Status: undefined,
  };
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
    contents.SourceBuildInformation = deserializeAws_querySourceBuildInformation(
      output["SourceBuildInformation"],
      context
    );
  }
  if (output["BuildArn"] !== undefined) {
    contents.BuildArn = __expectString(output["BuildArn"]);
  }
  if (output["SourceBundle"] !== undefined) {
    contents.SourceBundle = deserializeAws_queryS3Location(output["SourceBundle"], context);
  }
  if (output["DateCreated"] !== undefined) {
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTime(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTime(output["DateUpdated"]));
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryApplicationVersionDescriptionList = (
  output: any,
  context: __SerdeContext
): ApplicationVersionDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryApplicationVersionDescription(entry, context);
    });
};

const deserializeAws_queryApplicationVersionDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ApplicationVersionDescriptionMessage => {
  const contents: any = {
    ApplicationVersion: undefined,
  };
  if (output["ApplicationVersion"] !== undefined) {
    contents.ApplicationVersion = deserializeAws_queryApplicationVersionDescription(
      output["ApplicationVersion"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryApplicationVersionDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): ApplicationVersionDescriptionsMessage => {
  const contents: any = {
    ApplicationVersions: undefined,
    NextToken: undefined,
  };
  if (output.ApplicationVersions === "") {
    contents.ApplicationVersions = [];
  } else if (output["ApplicationVersions"] !== undefined && output["ApplicationVersions"]["member"] !== undefined) {
    contents.ApplicationVersions = deserializeAws_queryApplicationVersionDescriptionList(
      __getArrayIfSingleItem(output["ApplicationVersions"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryApplicationVersionLifecycleConfig = (
  output: any,
  context: __SerdeContext
): ApplicationVersionLifecycleConfig => {
  const contents: any = {
    MaxCountRule: undefined,
    MaxAgeRule: undefined,
  };
  if (output["MaxCountRule"] !== undefined) {
    contents.MaxCountRule = deserializeAws_queryMaxCountRule(output["MaxCountRule"], context);
  }
  if (output["MaxAgeRule"] !== undefined) {
    contents.MaxAgeRule = deserializeAws_queryMaxAgeRule(output["MaxAgeRule"], context);
  }
  return contents;
};

const deserializeAws_queryApplyEnvironmentManagedActionResult = (
  output: any,
  context: __SerdeContext
): ApplyEnvironmentManagedActionResult => {
  const contents: any = {
    ActionId: undefined,
    ActionDescription: undefined,
    ActionType: undefined,
    Status: undefined,
  };
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

const deserializeAws_queryAutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  const contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_queryAutoScalingGroupList = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAutoScalingGroup(entry, context);
    });
};

const deserializeAws_queryAvailableSolutionStackDetailsList = (
  output: any,
  context: __SerdeContext
): SolutionStackDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySolutionStackDescription(entry, context);
    });
};

const deserializeAws_queryAvailableSolutionStackNamesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryBuilder = (output: any, context: __SerdeContext): Builder => {
  const contents: any = {
    ARN: undefined,
  };
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  return contents;
};

const deserializeAws_queryCauses = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCheckDNSAvailabilityResultMessage = (
  output: any,
  context: __SerdeContext
): CheckDNSAvailabilityResultMessage => {
  const contents: any = {
    Available: undefined,
    FullyQualifiedCNAME: undefined,
  };
  if (output["Available"] !== undefined) {
    contents.Available = __parseBoolean(output["Available"]);
  }
  if (output["FullyQualifiedCNAME"] !== undefined) {
    contents.FullyQualifiedCNAME = __expectString(output["FullyQualifiedCNAME"]);
  }
  return contents;
};

const deserializeAws_queryCodeBuildNotInServiceRegionException = (
  output: any,
  context: __SerdeContext
): CodeBuildNotInServiceRegionException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryConfigurationOptionDescription = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionDescription => {
  const contents: any = {
    Namespace: undefined,
    Name: undefined,
    DefaultValue: undefined,
    ChangeSeverity: undefined,
    UserDefined: undefined,
    ValueType: undefined,
    ValueOptions: undefined,
    MinValue: undefined,
    MaxValue: undefined,
    MaxLength: undefined,
    Regex: undefined,
  };
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
    contents.ValueOptions = deserializeAws_queryConfigurationOptionPossibleValues(
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
    contents.Regex = deserializeAws_queryOptionRestrictionRegex(output["Regex"], context);
  }
  return contents;
};

const deserializeAws_queryConfigurationOptionDescriptionsList = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryConfigurationOptionDescription(entry, context);
    });
};

const deserializeAws_queryConfigurationOptionPossibleValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryConfigurationOptionsDescription = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionsDescription => {
  const contents: any = {
    SolutionStackName: undefined,
    PlatformArn: undefined,
    Options: undefined,
  };
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = __expectString(output["SolutionStackName"]);
  }
  if (output["PlatformArn"] !== undefined) {
    contents.PlatformArn = __expectString(output["PlatformArn"]);
  }
  if (output.Options === "") {
    contents.Options = [];
  } else if (output["Options"] !== undefined && output["Options"]["member"] !== undefined) {
    contents.Options = deserializeAws_queryConfigurationOptionDescriptionsList(
      __getArrayIfSingleItem(output["Options"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryConfigurationOptionSetting = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionSetting => {
  const contents: any = {
    ResourceName: undefined,
    Namespace: undefined,
    OptionName: undefined,
    Value: undefined,
  };
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

const deserializeAws_queryConfigurationOptionSettingsList = (
  output: any,
  context: __SerdeContext
): ConfigurationOptionSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryConfigurationOptionSetting(entry, context);
    });
};

const deserializeAws_queryConfigurationSettingsDescription = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsDescription => {
  const contents: any = {
    SolutionStackName: undefined,
    PlatformArn: undefined,
    ApplicationName: undefined,
    TemplateName: undefined,
    Description: undefined,
    EnvironmentName: undefined,
    DeploymentStatus: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    OptionSettings: undefined,
  };
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
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTime(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTime(output["DateUpdated"]));
  }
  if (output.OptionSettings === "") {
    contents.OptionSettings = [];
  } else if (output["OptionSettings"] !== undefined && output["OptionSettings"]["member"] !== undefined) {
    contents.OptionSettings = deserializeAws_queryConfigurationOptionSettingsList(
      __getArrayIfSingleItem(output["OptionSettings"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryConfigurationSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryConfigurationSettingsDescription(entry, context);
    });
};

const deserializeAws_queryConfigurationSettingsDescriptions = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsDescriptions => {
  const contents: any = {
    ConfigurationSettings: undefined,
  };
  if (output.ConfigurationSettings === "") {
    contents.ConfigurationSettings = [];
  } else if (output["ConfigurationSettings"] !== undefined && output["ConfigurationSettings"]["member"] !== undefined) {
    contents.ConfigurationSettings = deserializeAws_queryConfigurationSettingsDescriptionList(
      __getArrayIfSingleItem(output["ConfigurationSettings"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryConfigurationSettingsValidationMessages = (
  output: any,
  context: __SerdeContext
): ConfigurationSettingsValidationMessages => {
  const contents: any = {
    Messages: undefined,
  };
  if (output.Messages === "") {
    contents.Messages = [];
  } else if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
    contents.Messages = deserializeAws_queryValidationMessagesList(
      __getArrayIfSingleItem(output["Messages"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryConfigurationTemplateNamesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCPUUtilization = (output: any, context: __SerdeContext): CPUUtilization => {
  const contents: any = {
    User: undefined,
    Nice: undefined,
    System: undefined,
    Idle: undefined,
    IOWait: undefined,
    IRQ: undefined,
    SoftIRQ: undefined,
    Privileged: undefined,
  };
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

const deserializeAws_queryCreatePlatformVersionResult = (
  output: any,
  context: __SerdeContext
): CreatePlatformVersionResult => {
  const contents: any = {
    PlatformSummary: undefined,
    Builder: undefined,
  };
  if (output["PlatformSummary"] !== undefined) {
    contents.PlatformSummary = deserializeAws_queryPlatformSummary(output["PlatformSummary"], context);
  }
  if (output["Builder"] !== undefined) {
    contents.Builder = deserializeAws_queryBuilder(output["Builder"], context);
  }
  return contents;
};

const deserializeAws_queryCreateStorageLocationResultMessage = (
  output: any,
  context: __SerdeContext
): CreateStorageLocationResultMessage => {
  const contents: any = {
    S3Bucket: undefined,
  };
  if (output["S3Bucket"] !== undefined) {
    contents.S3Bucket = __expectString(output["S3Bucket"]);
  }
  return contents;
};

const deserializeAws_queryCustomAmi = (output: any, context: __SerdeContext): CustomAmi => {
  const contents: any = {
    VirtualizationType: undefined,
    ImageId: undefined,
  };
  if (output["VirtualizationType"] !== undefined) {
    contents.VirtualizationType = __expectString(output["VirtualizationType"]);
  }
  if (output["ImageId"] !== undefined) {
    contents.ImageId = __expectString(output["ImageId"]);
  }
  return contents;
};

const deserializeAws_queryCustomAmiList = (output: any, context: __SerdeContext): CustomAmi[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCustomAmi(entry, context);
    });
};

const deserializeAws_queryDeletePlatformVersionResult = (
  output: any,
  context: __SerdeContext
): DeletePlatformVersionResult => {
  const contents: any = {
    PlatformSummary: undefined,
  };
  if (output["PlatformSummary"] !== undefined) {
    contents.PlatformSummary = deserializeAws_queryPlatformSummary(output["PlatformSummary"], context);
  }
  return contents;
};

const deserializeAws_queryDeployment = (output: any, context: __SerdeContext): Deployment => {
  const contents: any = {
    VersionLabel: undefined,
    DeploymentId: undefined,
    Status: undefined,
    DeploymentTime: undefined,
  };
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
    contents.DeploymentTime = __expectNonNull(__parseRfc3339DateTime(output["DeploymentTime"]));
  }
  return contents;
};

const deserializeAws_queryDescribeAccountAttributesResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountAttributesResult => {
  const contents: any = {
    ResourceQuotas: undefined,
  };
  if (output["ResourceQuotas"] !== undefined) {
    contents.ResourceQuotas = deserializeAws_queryResourceQuotas(output["ResourceQuotas"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeEnvironmentHealthResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentHealthResult => {
  const contents: any = {
    EnvironmentName: undefined,
    HealthStatus: undefined,
    Status: undefined,
    Color: undefined,
    Causes: undefined,
    ApplicationMetrics: undefined,
    InstancesHealth: undefined,
    RefreshedAt: undefined,
  };
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
    contents.Causes = deserializeAws_queryCauses(__getArrayIfSingleItem(output["Causes"]["member"]), context);
  }
  if (output["ApplicationMetrics"] !== undefined) {
    contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(output["ApplicationMetrics"], context);
  }
  if (output["InstancesHealth"] !== undefined) {
    contents.InstancesHealth = deserializeAws_queryInstanceHealthSummary(output["InstancesHealth"], context);
  }
  if (output["RefreshedAt"] !== undefined) {
    contents.RefreshedAt = __expectNonNull(__parseRfc3339DateTime(output["RefreshedAt"]));
  }
  return contents;
};

const deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentManagedActionHistoryResult => {
  const contents: any = {
    ManagedActionHistoryItems: undefined,
    NextToken: undefined,
  };
  if (output.ManagedActionHistoryItems === "") {
    contents.ManagedActionHistoryItems = [];
  } else if (
    output["ManagedActionHistoryItems"] !== undefined &&
    output["ManagedActionHistoryItems"]["member"] !== undefined
  ) {
    contents.ManagedActionHistoryItems = deserializeAws_queryManagedActionHistoryItems(
      __getArrayIfSingleItem(output["ManagedActionHistoryItems"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeEnvironmentManagedActionsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentManagedActionsResult => {
  const contents: any = {
    ManagedActions: undefined,
  };
  if (output.ManagedActions === "") {
    contents.ManagedActions = [];
  } else if (output["ManagedActions"] !== undefined && output["ManagedActions"]["member"] !== undefined) {
    contents.ManagedActions = deserializeAws_queryManagedActions(
      __getArrayIfSingleItem(output["ManagedActions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeInstancesHealthResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancesHealthResult => {
  const contents: any = {
    InstanceHealthList: undefined,
    RefreshedAt: undefined,
    NextToken: undefined,
  };
  if (output.InstanceHealthList === "") {
    contents.InstanceHealthList = [];
  } else if (output["InstanceHealthList"] !== undefined && output["InstanceHealthList"]["member"] !== undefined) {
    contents.InstanceHealthList = deserializeAws_queryInstanceHealthList(
      __getArrayIfSingleItem(output["InstanceHealthList"]["member"]),
      context
    );
  }
  if (output["RefreshedAt"] !== undefined) {
    contents.RefreshedAt = __expectNonNull(__parseRfc3339DateTime(output["RefreshedAt"]));
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribePlatformVersionResult = (
  output: any,
  context: __SerdeContext
): DescribePlatformVersionResult => {
  const contents: any = {
    PlatformDescription: undefined,
  };
  if (output["PlatformDescription"] !== undefined) {
    contents.PlatformDescription = deserializeAws_queryPlatformDescription(output["PlatformDescription"], context);
  }
  return contents;
};

const deserializeAws_queryElasticBeanstalkServiceException = (
  output: any,
  context: __SerdeContext
): ElasticBeanstalkServiceException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEnvironmentDescription = (output: any, context: __SerdeContext): EnvironmentDescription => {
  const contents: any = {
    EnvironmentName: undefined,
    EnvironmentId: undefined,
    ApplicationName: undefined,
    VersionLabel: undefined,
    SolutionStackName: undefined,
    PlatformArn: undefined,
    TemplateName: undefined,
    Description: undefined,
    EndpointURL: undefined,
    CNAME: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    Status: undefined,
    AbortableOperationInProgress: undefined,
    Health: undefined,
    HealthStatus: undefined,
    Resources: undefined,
    Tier: undefined,
    EnvironmentLinks: undefined,
    EnvironmentArn: undefined,
    OperationsRole: undefined,
  };
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
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTime(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTime(output["DateUpdated"]));
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
    contents.Resources = deserializeAws_queryEnvironmentResourcesDescription(output["Resources"], context);
  }
  if (output["Tier"] !== undefined) {
    contents.Tier = deserializeAws_queryEnvironmentTier(output["Tier"], context);
  }
  if (output.EnvironmentLinks === "") {
    contents.EnvironmentLinks = [];
  } else if (output["EnvironmentLinks"] !== undefined && output["EnvironmentLinks"]["member"] !== undefined) {
    contents.EnvironmentLinks = deserializeAws_queryEnvironmentLinks(
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

const deserializeAws_queryEnvironmentDescriptionsList = (
  output: any,
  context: __SerdeContext
): EnvironmentDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEnvironmentDescription(entry, context);
    });
};

const deserializeAws_queryEnvironmentDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): EnvironmentDescriptionsMessage => {
  const contents: any = {
    Environments: undefined,
    NextToken: undefined,
  };
  if (output.Environments === "") {
    contents.Environments = [];
  } else if (output["Environments"] !== undefined && output["Environments"]["member"] !== undefined) {
    contents.Environments = deserializeAws_queryEnvironmentDescriptionsList(
      __getArrayIfSingleItem(output["Environments"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryEnvironmentInfoDescription = (
  output: any,
  context: __SerdeContext
): EnvironmentInfoDescription => {
  const contents: any = {
    InfoType: undefined,
    Ec2InstanceId: undefined,
    SampleTimestamp: undefined,
    Message: undefined,
  };
  if (output["InfoType"] !== undefined) {
    contents.InfoType = __expectString(output["InfoType"]);
  }
  if (output["Ec2InstanceId"] !== undefined) {
    contents.Ec2InstanceId = __expectString(output["Ec2InstanceId"]);
  }
  if (output["SampleTimestamp"] !== undefined) {
    contents.SampleTimestamp = __expectNonNull(__parseRfc3339DateTime(output["SampleTimestamp"]));
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryEnvironmentInfoDescriptionList = (
  output: any,
  context: __SerdeContext
): EnvironmentInfoDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEnvironmentInfoDescription(entry, context);
    });
};

const deserializeAws_queryEnvironmentLink = (output: any, context: __SerdeContext): EnvironmentLink => {
  const contents: any = {
    LinkName: undefined,
    EnvironmentName: undefined,
  };
  if (output["LinkName"] !== undefined) {
    contents.LinkName = __expectString(output["LinkName"]);
  }
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = __expectString(output["EnvironmentName"]);
  }
  return contents;
};

const deserializeAws_queryEnvironmentLinks = (output: any, context: __SerdeContext): EnvironmentLink[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEnvironmentLink(entry, context);
    });
};

const deserializeAws_queryEnvironmentResourceDescription = (
  output: any,
  context: __SerdeContext
): EnvironmentResourceDescription => {
  const contents: any = {
    EnvironmentName: undefined,
    AutoScalingGroups: undefined,
    Instances: undefined,
    LaunchConfigurations: undefined,
    LaunchTemplates: undefined,
    LoadBalancers: undefined,
    Triggers: undefined,
    Queues: undefined,
  };
  if (output["EnvironmentName"] !== undefined) {
    contents.EnvironmentName = __expectString(output["EnvironmentName"]);
  }
  if (output.AutoScalingGroups === "") {
    contents.AutoScalingGroups = [];
  } else if (output["AutoScalingGroups"] !== undefined && output["AutoScalingGroups"]["member"] !== undefined) {
    contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroupList(
      __getArrayIfSingleItem(output["AutoScalingGroups"]["member"]),
      context
    );
  }
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = deserializeAws_queryInstanceList(
      __getArrayIfSingleItem(output["Instances"]["member"]),
      context
    );
  }
  if (output.LaunchConfigurations === "") {
    contents.LaunchConfigurations = [];
  } else if (output["LaunchConfigurations"] !== undefined && output["LaunchConfigurations"]["member"] !== undefined) {
    contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurationList(
      __getArrayIfSingleItem(output["LaunchConfigurations"]["member"]),
      context
    );
  }
  if (output.LaunchTemplates === "") {
    contents.LaunchTemplates = [];
  } else if (output["LaunchTemplates"] !== undefined && output["LaunchTemplates"]["member"] !== undefined) {
    contents.LaunchTemplates = deserializeAws_queryLaunchTemplateList(
      __getArrayIfSingleItem(output["LaunchTemplates"]["member"]),
      context
    );
  }
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  } else if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = deserializeAws_queryLoadBalancerList(
      __getArrayIfSingleItem(output["LoadBalancers"]["member"]),
      context
    );
  }
  if (output.Triggers === "") {
    contents.Triggers = [];
  } else if (output["Triggers"] !== undefined && output["Triggers"]["member"] !== undefined) {
    contents.Triggers = deserializeAws_queryTriggerList(__getArrayIfSingleItem(output["Triggers"]["member"]), context);
  }
  if (output.Queues === "") {
    contents.Queues = [];
  } else if (output["Queues"] !== undefined && output["Queues"]["member"] !== undefined) {
    contents.Queues = deserializeAws_queryQueueList(__getArrayIfSingleItem(output["Queues"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryEnvironmentResourceDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): EnvironmentResourceDescriptionsMessage => {
  const contents: any = {
    EnvironmentResources: undefined,
  };
  if (output["EnvironmentResources"] !== undefined) {
    contents.EnvironmentResources = deserializeAws_queryEnvironmentResourceDescription(
      output["EnvironmentResources"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryEnvironmentResourcesDescription = (
  output: any,
  context: __SerdeContext
): EnvironmentResourcesDescription => {
  const contents: any = {
    LoadBalancer: undefined,
  };
  if (output["LoadBalancer"] !== undefined) {
    contents.LoadBalancer = deserializeAws_queryLoadBalancerDescription(output["LoadBalancer"], context);
  }
  return contents;
};

const deserializeAws_queryEnvironmentTier = (output: any, context: __SerdeContext): EnvironmentTier => {
  const contents: any = {
    Name: undefined,
    Type: undefined,
    Version: undefined,
  };
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

const deserializeAws_queryEventDescription = (output: any, context: __SerdeContext): EventDescription => {
  const contents: any = {
    EventDate: undefined,
    Message: undefined,
    ApplicationName: undefined,
    VersionLabel: undefined,
    TemplateName: undefined,
    EnvironmentName: undefined,
    PlatformArn: undefined,
    RequestId: undefined,
    Severity: undefined,
  };
  if (output["EventDate"] !== undefined) {
    contents.EventDate = __expectNonNull(__parseRfc3339DateTime(output["EventDate"]));
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

const deserializeAws_queryEventDescriptionList = (output: any, context: __SerdeContext): EventDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEventDescription(entry, context);
    });
};

const deserializeAws_queryEventDescriptionsMessage = (
  output: any,
  context: __SerdeContext
): EventDescriptionsMessage => {
  const contents: any = {
    Events: undefined,
    NextToken: undefined,
  };
  if (output.Events === "") {
    contents.Events = [];
  } else if (output["Events"] !== undefined && output["Events"]["member"] !== undefined) {
    contents.Events = deserializeAws_queryEventDescriptionList(
      __getArrayIfSingleItem(output["Events"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryInstance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {
    Id: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  return contents;
};

const deserializeAws_queryInstanceHealthList = (output: any, context: __SerdeContext): SingleInstanceHealth[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySingleInstanceHealth(entry, context);
    });
};

const deserializeAws_queryInstanceHealthSummary = (output: any, context: __SerdeContext): InstanceHealthSummary => {
  const contents: any = {
    NoData: undefined,
    Unknown: undefined,
    Pending: undefined,
    Ok: undefined,
    Info: undefined,
    Warning: undefined,
    Degraded: undefined,
    Severe: undefined,
  };
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

const deserializeAws_queryInstanceList = (output: any, context: __SerdeContext): Instance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryInstance(entry, context);
    });
};

const deserializeAws_queryInsufficientPrivilegesException = (
  output: any,
  context: __SerdeContext
): InsufficientPrivilegesException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryLatency = (output: any, context: __SerdeContext): Latency => {
  const contents: any = {
    P999: undefined,
    P99: undefined,
    P95: undefined,
    P90: undefined,
    P85: undefined,
    P75: undefined,
    P50: undefined,
    P10: undefined,
  };
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

const deserializeAws_queryLaunchConfiguration = (output: any, context: __SerdeContext): LaunchConfiguration => {
  const contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_queryLaunchConfigurationList = (output: any, context: __SerdeContext): LaunchConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLaunchConfiguration(entry, context);
    });
};

const deserializeAws_queryLaunchTemplate = (output: any, context: __SerdeContext): LaunchTemplate => {
  const contents: any = {
    Id: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  return contents;
};

const deserializeAws_queryLaunchTemplateList = (output: any, context: __SerdeContext): LaunchTemplate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLaunchTemplate(entry, context);
    });
};

const deserializeAws_queryListAvailableSolutionStacksResultMessage = (
  output: any,
  context: __SerdeContext
): ListAvailableSolutionStacksResultMessage => {
  const contents: any = {
    SolutionStacks: undefined,
    SolutionStackDetails: undefined,
  };
  if (output.SolutionStacks === "") {
    contents.SolutionStacks = [];
  } else if (output["SolutionStacks"] !== undefined && output["SolutionStacks"]["member"] !== undefined) {
    contents.SolutionStacks = deserializeAws_queryAvailableSolutionStackNamesList(
      __getArrayIfSingleItem(output["SolutionStacks"]["member"]),
      context
    );
  }
  if (output.SolutionStackDetails === "") {
    contents.SolutionStackDetails = [];
  } else if (output["SolutionStackDetails"] !== undefined && output["SolutionStackDetails"]["member"] !== undefined) {
    contents.SolutionStackDetails = deserializeAws_queryAvailableSolutionStackDetailsList(
      __getArrayIfSingleItem(output["SolutionStackDetails"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListener = (output: any, context: __SerdeContext): Listener => {
  const contents: any = {
    Protocol: undefined,
    Port: undefined,
  };
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  return contents;
};

const deserializeAws_queryListPlatformBranchesResult = (
  output: any,
  context: __SerdeContext
): ListPlatformBranchesResult => {
  const contents: any = {
    PlatformBranchSummaryList: undefined,
    NextToken: undefined,
  };
  if (output.PlatformBranchSummaryList === "") {
    contents.PlatformBranchSummaryList = [];
  } else if (
    output["PlatformBranchSummaryList"] !== undefined &&
    output["PlatformBranchSummaryList"]["member"] !== undefined
  ) {
    contents.PlatformBranchSummaryList = deserializeAws_queryPlatformBranchSummaryList(
      __getArrayIfSingleItem(output["PlatformBranchSummaryList"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListPlatformVersionsResult = (
  output: any,
  context: __SerdeContext
): ListPlatformVersionsResult => {
  const contents: any = {
    PlatformSummaryList: undefined,
    NextToken: undefined,
  };
  if (output.PlatformSummaryList === "") {
    contents.PlatformSummaryList = [];
  } else if (output["PlatformSummaryList"] !== undefined && output["PlatformSummaryList"]["member"] !== undefined) {
    contents.PlatformSummaryList = deserializeAws_queryPlatformSummaryList(
      __getArrayIfSingleItem(output["PlatformSummaryList"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryLoadAverage = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseFloat(entry) as number;
    });
};

const deserializeAws_queryLoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  const contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerDescription = (output: any, context: __SerdeContext): LoadBalancerDescription => {
  const contents: any = {
    LoadBalancerName: undefined,
    Domain: undefined,
    Listeners: undefined,
  };
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output["Domain"] !== undefined) {
    contents.Domain = __expectString(output["Domain"]);
  }
  if (output.Listeners === "") {
    contents.Listeners = [];
  } else if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = deserializeAws_queryLoadBalancerListenersDescription(
      __getArrayIfSingleItem(output["Listeners"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryLoadBalancerList = (output: any, context: __SerdeContext): LoadBalancer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLoadBalancer(entry, context);
    });
};

const deserializeAws_queryLoadBalancerListenersDescription = (output: any, context: __SerdeContext): Listener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryListener(entry, context);
    });
};

const deserializeAws_queryManagedAction = (output: any, context: __SerdeContext): ManagedAction => {
  const contents: any = {
    ActionId: undefined,
    ActionDescription: undefined,
    ActionType: undefined,
    Status: undefined,
    WindowStartTime: undefined,
  };
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
    contents.WindowStartTime = __expectNonNull(__parseRfc3339DateTime(output["WindowStartTime"]));
  }
  return contents;
};

const deserializeAws_queryManagedActionHistoryItem = (
  output: any,
  context: __SerdeContext
): ManagedActionHistoryItem => {
  const contents: any = {
    ActionId: undefined,
    ActionType: undefined,
    ActionDescription: undefined,
    FailureType: undefined,
    Status: undefined,
    FailureDescription: undefined,
    ExecutedTime: undefined,
    FinishedTime: undefined,
  };
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
    contents.ExecutedTime = __expectNonNull(__parseRfc3339DateTime(output["ExecutedTime"]));
  }
  if (output["FinishedTime"] !== undefined) {
    contents.FinishedTime = __expectNonNull(__parseRfc3339DateTime(output["FinishedTime"]));
  }
  return contents;
};

const deserializeAws_queryManagedActionHistoryItems = (
  output: any,
  context: __SerdeContext
): ManagedActionHistoryItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryManagedActionHistoryItem(entry, context);
    });
};

const deserializeAws_queryManagedActionInvalidStateException = (
  output: any,
  context: __SerdeContext
): ManagedActionInvalidStateException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryManagedActions = (output: any, context: __SerdeContext): ManagedAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryManagedAction(entry, context);
    });
};

const deserializeAws_queryMaxAgeRule = (output: any, context: __SerdeContext): MaxAgeRule => {
  const contents: any = {
    Enabled: undefined,
    MaxAgeInDays: undefined,
    DeleteSourceFromS3: undefined,
  };
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

const deserializeAws_queryMaxCountRule = (output: any, context: __SerdeContext): MaxCountRule => {
  const contents: any = {
    Enabled: undefined,
    MaxCount: undefined,
    DeleteSourceFromS3: undefined,
  };
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

const deserializeAws_queryOperationInProgressException = (
  output: any,
  context: __SerdeContext
): OperationInProgressException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryOptionRestrictionRegex = (output: any, context: __SerdeContext): OptionRestrictionRegex => {
  const contents: any = {
    Pattern: undefined,
    Label: undefined,
  };
  if (output["Pattern"] !== undefined) {
    contents.Pattern = __expectString(output["Pattern"]);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  return contents;
};

const deserializeAws_queryPlatformBranchSummary = (output: any, context: __SerdeContext): PlatformBranchSummary => {
  const contents: any = {
    PlatformName: undefined,
    BranchName: undefined,
    LifecycleState: undefined,
    BranchOrder: undefined,
    SupportedTierList: undefined,
  };
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
    contents.SupportedTierList = deserializeAws_querySupportedTierList(
      __getArrayIfSingleItem(output["SupportedTierList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPlatformBranchSummaryList = (
  output: any,
  context: __SerdeContext
): PlatformBranchSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPlatformBranchSummary(entry, context);
    });
};

const deserializeAws_queryPlatformDescription = (output: any, context: __SerdeContext): PlatformDescription => {
  const contents: any = {
    PlatformArn: undefined,
    PlatformOwner: undefined,
    PlatformName: undefined,
    PlatformVersion: undefined,
    SolutionStackName: undefined,
    PlatformStatus: undefined,
    DateCreated: undefined,
    DateUpdated: undefined,
    PlatformCategory: undefined,
    Description: undefined,
    Maintainer: undefined,
    OperatingSystemName: undefined,
    OperatingSystemVersion: undefined,
    ProgrammingLanguages: undefined,
    Frameworks: undefined,
    CustomAmiList: undefined,
    SupportedTierList: undefined,
    SupportedAddonList: undefined,
    PlatformLifecycleState: undefined,
    PlatformBranchName: undefined,
    PlatformBranchLifecycleState: undefined,
  };
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
    contents.DateCreated = __expectNonNull(__parseRfc3339DateTime(output["DateCreated"]));
  }
  if (output["DateUpdated"] !== undefined) {
    contents.DateUpdated = __expectNonNull(__parseRfc3339DateTime(output["DateUpdated"]));
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
    contents.ProgrammingLanguages = deserializeAws_queryPlatformProgrammingLanguages(
      __getArrayIfSingleItem(output["ProgrammingLanguages"]["member"]),
      context
    );
  }
  if (output.Frameworks === "") {
    contents.Frameworks = [];
  } else if (output["Frameworks"] !== undefined && output["Frameworks"]["member"] !== undefined) {
    contents.Frameworks = deserializeAws_queryPlatformFrameworks(
      __getArrayIfSingleItem(output["Frameworks"]["member"]),
      context
    );
  }
  if (output.CustomAmiList === "") {
    contents.CustomAmiList = [];
  } else if (output["CustomAmiList"] !== undefined && output["CustomAmiList"]["member"] !== undefined) {
    contents.CustomAmiList = deserializeAws_queryCustomAmiList(
      __getArrayIfSingleItem(output["CustomAmiList"]["member"]),
      context
    );
  }
  if (output.SupportedTierList === "") {
    contents.SupportedTierList = [];
  } else if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
    contents.SupportedTierList = deserializeAws_querySupportedTierList(
      __getArrayIfSingleItem(output["SupportedTierList"]["member"]),
      context
    );
  }
  if (output.SupportedAddonList === "") {
    contents.SupportedAddonList = [];
  } else if (output["SupportedAddonList"] !== undefined && output["SupportedAddonList"]["member"] !== undefined) {
    contents.SupportedAddonList = deserializeAws_querySupportedAddonList(
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

const deserializeAws_queryPlatformFramework = (output: any, context: __SerdeContext): PlatformFramework => {
  const contents: any = {
    Name: undefined,
    Version: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
  }
  return contents;
};

const deserializeAws_queryPlatformFrameworks = (output: any, context: __SerdeContext): PlatformFramework[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPlatformFramework(entry, context);
    });
};

const deserializeAws_queryPlatformProgrammingLanguage = (
  output: any,
  context: __SerdeContext
): PlatformProgrammingLanguage => {
  const contents: any = {
    Name: undefined,
    Version: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
  }
  return contents;
};

const deserializeAws_queryPlatformProgrammingLanguages = (
  output: any,
  context: __SerdeContext
): PlatformProgrammingLanguage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPlatformProgrammingLanguage(entry, context);
    });
};

const deserializeAws_queryPlatformSummary = (output: any, context: __SerdeContext): PlatformSummary => {
  const contents: any = {
    PlatformArn: undefined,
    PlatformOwner: undefined,
    PlatformStatus: undefined,
    PlatformCategory: undefined,
    OperatingSystemName: undefined,
    OperatingSystemVersion: undefined,
    SupportedTierList: undefined,
    SupportedAddonList: undefined,
    PlatformLifecycleState: undefined,
    PlatformVersion: undefined,
    PlatformBranchName: undefined,
    PlatformBranchLifecycleState: undefined,
  };
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
    contents.SupportedTierList = deserializeAws_querySupportedTierList(
      __getArrayIfSingleItem(output["SupportedTierList"]["member"]),
      context
    );
  }
  if (output.SupportedAddonList === "") {
    contents.SupportedAddonList = [];
  } else if (output["SupportedAddonList"] !== undefined && output["SupportedAddonList"]["member"] !== undefined) {
    contents.SupportedAddonList = deserializeAws_querySupportedAddonList(
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

const deserializeAws_queryPlatformSummaryList = (output: any, context: __SerdeContext): PlatformSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPlatformSummary(entry, context);
    });
};

const deserializeAws_queryPlatformVersionStillReferencedException = (
  output: any,
  context: __SerdeContext
): PlatformVersionStillReferencedException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryQueue = (output: any, context: __SerdeContext): Queue => {
  const contents: any = {
    Name: undefined,
    URL: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["URL"] !== undefined) {
    contents.URL = __expectString(output["URL"]);
  }
  return contents;
};

const deserializeAws_queryQueueList = (output: any, context: __SerdeContext): Queue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryQueue(entry, context);
    });
};

const deserializeAws_queryResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryResourceQuota = (output: any, context: __SerdeContext): ResourceQuota => {
  const contents: any = {
    Maximum: undefined,
  };
  if (output["Maximum"] !== undefined) {
    contents.Maximum = __strictParseInt32(output["Maximum"]) as number;
  }
  return contents;
};

const deserializeAws_queryResourceQuotas = (output: any, context: __SerdeContext): ResourceQuotas => {
  const contents: any = {
    ApplicationQuota: undefined,
    ApplicationVersionQuota: undefined,
    EnvironmentQuota: undefined,
    ConfigurationTemplateQuota: undefined,
    CustomPlatformQuota: undefined,
  };
  if (output["ApplicationQuota"] !== undefined) {
    contents.ApplicationQuota = deserializeAws_queryResourceQuota(output["ApplicationQuota"], context);
  }
  if (output["ApplicationVersionQuota"] !== undefined) {
    contents.ApplicationVersionQuota = deserializeAws_queryResourceQuota(output["ApplicationVersionQuota"], context);
  }
  if (output["EnvironmentQuota"] !== undefined) {
    contents.EnvironmentQuota = deserializeAws_queryResourceQuota(output["EnvironmentQuota"], context);
  }
  if (output["ConfigurationTemplateQuota"] !== undefined) {
    contents.ConfigurationTemplateQuota = deserializeAws_queryResourceQuota(
      output["ConfigurationTemplateQuota"],
      context
    );
  }
  if (output["CustomPlatformQuota"] !== undefined) {
    contents.CustomPlatformQuota = deserializeAws_queryResourceQuota(output["CustomPlatformQuota"], context);
  }
  return contents;
};

const deserializeAws_queryResourceTagsDescriptionMessage = (
  output: any,
  context: __SerdeContext
): ResourceTagsDescriptionMessage => {
  const contents: any = {
    ResourceArn: undefined,
    ResourceTags: undefined,
  };
  if (output["ResourceArn"] !== undefined) {
    contents.ResourceArn = __expectString(output["ResourceArn"]);
  }
  if (output.ResourceTags === "") {
    contents.ResourceTags = [];
  } else if (output["ResourceTags"] !== undefined && output["ResourceTags"]["member"] !== undefined) {
    contents.ResourceTags = deserializeAws_queryTagList(
      __getArrayIfSingleItem(output["ResourceTags"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryResourceTypeNotSupportedException = (
  output: any,
  context: __SerdeContext
): ResourceTypeNotSupportedException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryRetrieveEnvironmentInfoResultMessage = (
  output: any,
  context: __SerdeContext
): RetrieveEnvironmentInfoResultMessage => {
  const contents: any = {
    EnvironmentInfo: undefined,
  };
  if (output.EnvironmentInfo === "") {
    contents.EnvironmentInfo = [];
  } else if (output["EnvironmentInfo"] !== undefined && output["EnvironmentInfo"]["member"] !== undefined) {
    contents.EnvironmentInfo = deserializeAws_queryEnvironmentInfoDescriptionList(
      __getArrayIfSingleItem(output["EnvironmentInfo"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryS3Location = (output: any, context: __SerdeContext): S3Location => {
  const contents: any = {
    S3Bucket: undefined,
    S3Key: undefined,
  };
  if (output["S3Bucket"] !== undefined) {
    contents.S3Bucket = __expectString(output["S3Bucket"]);
  }
  if (output["S3Key"] !== undefined) {
    contents.S3Key = __expectString(output["S3Key"]);
  }
  return contents;
};

const deserializeAws_queryS3LocationNotInServiceRegionException = (
  output: any,
  context: __SerdeContext
): S3LocationNotInServiceRegionException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryS3SubscriptionRequiredException = (
  output: any,
  context: __SerdeContext
): S3SubscriptionRequiredException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySingleInstanceHealth = (output: any, context: __SerdeContext): SingleInstanceHealth => {
  const contents: any = {
    InstanceId: undefined,
    HealthStatus: undefined,
    Color: undefined,
    Causes: undefined,
    LaunchedAt: undefined,
    ApplicationMetrics: undefined,
    System: undefined,
    Deployment: undefined,
    AvailabilityZone: undefined,
    InstanceType: undefined,
  };
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
    contents.Causes = deserializeAws_queryCauses(__getArrayIfSingleItem(output["Causes"]["member"]), context);
  }
  if (output["LaunchedAt"] !== undefined) {
    contents.LaunchedAt = __expectNonNull(__parseRfc3339DateTime(output["LaunchedAt"]));
  }
  if (output["ApplicationMetrics"] !== undefined) {
    contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(output["ApplicationMetrics"], context);
  }
  if (output["System"] !== undefined) {
    contents.System = deserializeAws_querySystemStatus(output["System"], context);
  }
  if (output["Deployment"] !== undefined) {
    contents.Deployment = deserializeAws_queryDeployment(output["Deployment"], context);
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = __expectString(output["InstanceType"]);
  }
  return contents;
};

const deserializeAws_querySolutionStackDescription = (
  output: any,
  context: __SerdeContext
): SolutionStackDescription => {
  const contents: any = {
    SolutionStackName: undefined,
    PermittedFileTypes: undefined,
  };
  if (output["SolutionStackName"] !== undefined) {
    contents.SolutionStackName = __expectString(output["SolutionStackName"]);
  }
  if (output.PermittedFileTypes === "") {
    contents.PermittedFileTypes = [];
  } else if (output["PermittedFileTypes"] !== undefined && output["PermittedFileTypes"]["member"] !== undefined) {
    contents.PermittedFileTypes = deserializeAws_querySolutionStackFileTypeList(
      __getArrayIfSingleItem(output["PermittedFileTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySolutionStackFileTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySourceBuildInformation = (output: any, context: __SerdeContext): SourceBuildInformation => {
  const contents: any = {
    SourceType: undefined,
    SourceRepository: undefined,
    SourceLocation: undefined,
  };
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

const deserializeAws_querySourceBundleDeletionException = (
  output: any,
  context: __SerdeContext
): SourceBundleDeletionException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryStatusCodes = (output: any, context: __SerdeContext): StatusCodes => {
  const contents: any = {
    Status2xx: undefined,
    Status3xx: undefined,
    Status4xx: undefined,
    Status5xx: undefined,
  };
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

const deserializeAws_querySupportedAddonList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySupportedTierList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySystemStatus = (output: any, context: __SerdeContext): SystemStatus => {
  const contents: any = {
    CPUUtilization: undefined,
    LoadAverage: undefined,
  };
  if (output["CPUUtilization"] !== undefined) {
    contents.CPUUtilization = deserializeAws_queryCPUUtilization(output["CPUUtilization"], context);
  }
  if (output.LoadAverage === "") {
    contents.LoadAverage = [];
  } else if (output["LoadAverage"] !== undefined && output["LoadAverage"]["member"] !== undefined) {
    contents.LoadAverage = deserializeAws_queryLoadAverage(
      __getArrayIfSingleItem(output["LoadAverage"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {
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

const deserializeAws_queryTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTooManyApplicationsException = (
  output: any,
  context: __SerdeContext
): TooManyApplicationsException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyApplicationVersionsException = (
  output: any,
  context: __SerdeContext
): TooManyApplicationVersionsException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyBucketsException = (output: any, context: __SerdeContext): TooManyBucketsException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyConfigurationTemplatesException = (
  output: any,
  context: __SerdeContext
): TooManyConfigurationTemplatesException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyEnvironmentsException = (
  output: any,
  context: __SerdeContext
): TooManyEnvironmentsException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyPlatformsException = (
  output: any,
  context: __SerdeContext
): TooManyPlatformsException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTrigger = (output: any, context: __SerdeContext): Trigger => {
  const contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_queryTriggerList = (output: any, context: __SerdeContext): Trigger[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTrigger(entry, context);
    });
};

const deserializeAws_queryValidationMessage = (output: any, context: __SerdeContext): ValidationMessage => {
  const contents: any = {
    Message: undefined,
    Severity: undefined,
    Namespace: undefined,
    OptionName: undefined,
  };
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

const deserializeAws_queryValidationMessagesList = (output: any, context: __SerdeContext): ValidationMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryValidationMessage(entry, context);
    });
};

const deserializeAws_queryVersionLabelsList = (output: any, context: __SerdeContext): string[] => {
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
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
